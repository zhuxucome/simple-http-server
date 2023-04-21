// 引入 http 模块
const http = require('http');

// 获取命令行传入的端口号
const port = process.argv[2] || 8888;

// 创建一个 http 服务器
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.end('你好呀，这是首页。');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.end('这是「关于我们」页面。');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.end('404 页面不存在！');
    }
});

// 监听指定端口，服务器启动后输出对应的提示信息
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});


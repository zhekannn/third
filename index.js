const http=require('http')
const fs=require('fs')
const path=require('path')
server=http.createServer((req, res)=>{
    let contentType='text/html'
    let filepath=path.join(__dirname, req.url==='/' ? 'index.html' :req.url)
    let ext=path.extname(filepath)
    switch(ext){
        case '.css': contentType='text/css'
        break
        case '.js': contentType='text/javascript'
        break
        case '.json': contentType='text/json'
        break
        default:
            contentType='text/html'
    }
    if(!ext){
        filepath+='.html'
    }
    fs.readFile(filepath, (err,datas)=>{
        if(err){
            fs.readFile(path.join(__dirname, 'error.html'), (err,data)=>{
                if(err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    })
                    res.end(data)
                }
            })
        } else{
            res.writeHead(200,{
                'Content-Type':contentType
                        })
                        res.end(datas)
        }
    })
    console.log(filepath)
})
server.listen(3000,'localhost', ()=>{
    console.log('Server on...')
})

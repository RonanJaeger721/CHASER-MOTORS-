import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const root = new URL('./dist/', import.meta.url).pathname.slice(1);
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.jpg':'image/jpeg','.txt':'text/plain','.xml':'application/xml'};
createServer(async(req,res)=>{try{let path=decodeURIComponent(req.url.split('?')[0]);if(path==='/')path='/index.html';if(path.startsWith('/cars/'))path='/vehicle.html';const file=normalize(join(root,path));if(!file.startsWith(normalize(root)))throw new Error('bad path');await stat(file);res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream'});res.end(await readFile(file));}catch{res.writeHead(404);res.end('Not found')}}).listen(4173,'127.0.0.1',()=>console.log('Chaser preview: http://127.0.0.1:4173'));

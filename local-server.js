const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = 4175;
const types = { '.css': 'text/css; charset=utf-8', '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.mp3': 'audio/mpeg', '.mp4': 'video/mp4', '.png': 'image/png', '.txt': 'text/plain; charset=utf-8', '.wav': 'audio/wav', '.webm': 'audio/webm' };

function sendFile(request, response, file, stats) {
  const type = types[path.extname(file).toLowerCase()] || 'application/octet-stream';
  const range = request.headers.range;
  if (!range) {
    response.writeHead(200, { 'Content-Type': type, 'Content-Length': stats.size, 'Accept-Ranges': 'bytes' });
    fs.createReadStream(file).pipe(response);
    return;
  }
  const match = /bytes=(\d*)-(\d*)/.exec(range);
  const start = match?.[1] ? Number(match[1]) : 0;
  const end = match?.[2] ? Math.min(Number(match[2]), stats.size - 1) : stats.size - 1;
  if (start > end || start >= stats.size) { response.writeHead(416, { 'Content-Range': `bytes */${stats.size}` }); response.end(); return; }
  response.writeHead(206, { 'Content-Type': type, 'Content-Length': end - start + 1, 'Content-Range': `bytes ${start}-${end}/${stats.size}`, 'Accept-Ranges': 'bytes' });
  fs.createReadStream(file, { start, end }).pipe(response);
}

http.createServer((request, response) => {
  const requested = decodeURIComponent((request.url || '/').split('?')[0]);
  const relative = requested === '/' ? 'index.html' : requested.replace(/^[/\\]+/, '');
  const file = path.resolve(root, relative);
  if (!file.startsWith(root + path.sep) && file !== path.join(root, 'index.html')) { response.writeHead(403); response.end('Forbidden'); return; }
  fs.stat(file, (error, stats) => {
    if (error || !stats.isFile()) { response.writeHead(404); response.end('Not found'); return; }
    sendFile(request, response, file, stats);
  });
}).listen(port, '127.0.0.1', () => console.log(`Lector disponible en http://127.0.0.1:${port}/`));

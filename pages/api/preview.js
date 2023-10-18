export default async function handler(req, res) {
  // pegando a página que o usuário estava antes de clicar no botão de preview
  const previousPage = req.headers.referer;

  // se o preview tiver ligado: desliga
  if(req.preview) {
    res.clearPreviewData();
    res.writeHead(307, { Location: previousPage });
    res.end();
  }

  const password = 'SENHASEGURA'
  if(req.query.password !== password) {
    return res.status(401).json({ message: 'Invalid Password' })
  }

  // SE TIVER DESLIGADO O PREVIEW: LIGA
  res.setPreviewData({});
  res.writeHead(307, { Location: previousPage });
  res.end();
} 

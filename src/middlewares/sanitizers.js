function sanitizeInput(input) {
  // can add more untrusted input to filter
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  }
  const reg = /[&<>"'/]/gi
  return input.replace(reg, (match) => map[match])
}

function sanitizeMiddleware(req, res, next) {
  for (const key in req.body) {
    if (req.body.hasOwnProperty(key) && typeof req.body[key] === 'string') {
      req.body[key] = sanitizeInput(req.body[key])
    }
  }
  next()
}

module.exports = sanitizeMiddleware

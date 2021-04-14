module.exports = function Layout (props) {
  props = props || {}
  let heading = props.heading || 'Architect views!'
  return `
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>Architect example</title>
 <link rel="stylesheet" href="/_static/index.css">
</head>
<body>
 <h1>${heading}</h1>
</body>
</html>
`
}

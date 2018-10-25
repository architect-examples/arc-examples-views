const styles = `
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
`
exports.handler = async function http (request) {
  return {
    type: 'text/css; charset=utf8',
    body: styles
  }
}

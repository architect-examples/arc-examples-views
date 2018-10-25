let Layout = require('@architect/views/layout')

exports.handler = async function http (request) {
  try {
    return {
      type: 'text/html; charset=utf8',
      body: Layout({heading: 'About'})
    }
  } catch (e) {
    console.error(e)
    return {
      status: 500,
      type: 'application/json; charset=utf8',
      body: JSON.stringify({
        name: e.name,
        message: e.message,
        stack: e.stack
      }, null, 2)
    }
  }
}

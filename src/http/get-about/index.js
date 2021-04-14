let Layout = require('@architect/views/layout')
let arc = require('@architect/functions')

exports.handler = arc.http.async(http)

async function http (request) {
  try {
    return {
      html: Layout({heading: 'About'})
    }
  } catch (e) {
    console.error(e)
    return {
      status: 500,
      json: {
        name: e.name,
        message: e.message,
        stack: e.stack
      }
    }
  }
}

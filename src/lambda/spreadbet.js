export async function handler(event, context) {
  try {
    console.log(event)
    console.log(context)

    const util = require('util');
    const exec = util.promisify(require('child_process').exec);
    const { stdout, stderr } = await exec('pwd');
    const { stdout2, stderr2 } = await exec('./src/lambda/spreadbet.exe');

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: "DTB hardcoded response for now" })
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}

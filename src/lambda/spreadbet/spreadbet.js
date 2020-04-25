require('./graal-spreadbet.exe')

export async function handler(event, context) {
  try {
    console.log(event)
    console.log(context)

    const util = require('util');
    const exec = util.promisify(require('child_process').exec);
    const { stdout, stderr } = await exec('pwd');
    console.log(stdout);
    const { stdout3, stderr3 } = await exec('ls');
    console.log(stdout3);
    // TODO parameterise this path by environment
    const { stdout2, stderr2 } = await exec('./graal-spreadbet.exe');

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

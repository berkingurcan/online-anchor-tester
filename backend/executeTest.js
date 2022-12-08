const spawnProcess = require("./spawnProcess");

const executeTest = async () => {
    /* return new Promise((resolve, reject) => {
        const child = spawn('npm', ['run', 'test'], {cwd: './repo/module0'});
        child.stdout.on('data', (data) => {
            console.log(data.toString())

            resolve(data.toString())
        })
    }) */

    try {
        const result = await spawnProcess("anchor test", {
          cwd: "./repo/hello-world",
        });
    
        return {status: true, result};
      } catch (err) {
        return {status: false, error: err};
      }
};

module.exports = {
    executeTest,
};
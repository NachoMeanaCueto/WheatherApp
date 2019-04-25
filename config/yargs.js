const argv = require('yargs').options({
    direction:{
        alias:'d',
        demand: true,
        desc:'City and country separated by white spaces'
    }
})
.help()
.argv;

module.exports = {
    argv
}
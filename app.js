const argv = require('./config/yargs').argv;
const location = require('./Business_Apis/Location');
const Wheather = require('./Business_Apis/Wheather');

let direction = argv.direction;

location.getCoordinates(direction)
    .then((result) =>  Wheather.getCurrentWheather(result.lat, result.lng))
    .then((wheatherresult) => console.log(`The current wheather in ${direction} is: ${wheatherresult}`))
.catch((err)=> console.log(err));



var moment = require('moment');

console.log(moment().format());

//January 1st 1970 @ 12:00am --> 0 (unix timestamp)
//January 1st 1970 @ 12:01am --> 60 (unix timestamp)

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1470830586;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMMM Qo, YYYY @ hh:mm A'));
//January 3rd, 2016 @ 12:13 AM
//MMMM Qo, YYYY @ hh:mm A

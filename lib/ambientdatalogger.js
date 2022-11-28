/**
 * Copyright reelyActive 2022
 * We believe in an open Internet of Things
 */


const Barnowl = require('barnowl');
const Barnacles = require('barnacles');
const BarnaclesLogfile = require('barnacles-logfile');
const config = require('./config');


// Initialise barnowl and listen for UDP raddecs on the default port
let barnowl = new Barnowl(config.barnowlOptions);
barnowl.addListener(Barnowl, {}, Barnowl.UdpListener, {});

// Initialise barnacles and write events to logfiles
let options = Object.assign({ barnowl: barnowl }, config.barnaclesOptions);
let barnacles = new Barnacles(options);
barnacles.addInterface(BarnaclesLogfile, config.barnaclesLogfileOptions);

/**
 * Copyright reelyActive 2022-2023
 * We believe in an open Internet of Things
 */


const Barnowl = require('barnowl');
const Barnacles = require('barnacles');
const BarnaclesLogfile = require('barnacles-logfile');
const config = { logfiles: require('../config/logfiles.js'),
                 barnowl: require('../config/barnowl.js'),
                 barnacles: require('../config/barnacles.js') };


/**
 * Ambient Data Logger Class
 * Collect and process wireless ambient data packets, writing specific
 * properties to logfiles.
 */
class AmbientDataLogger {

  /**
   * AmbientDataLogger constructor
   * @param {Object} options The configuration options.
   * @constructor
   */
  constructor(options) {
    let self = this;
    options = options || {};

    this.isDebug = options.isDebug || false;
    this.barnowl = createBarnowl(options);
    this.barnacles = createBarnacles(Object.assign({ barnowl: self.barnowl },
                                                   options));
  }

}


/**
 * Create a barnowl instance with optional UDP listener.
 * @param {Object} options The configuration options.
 * @return {Barnowl} The Barnowl instance.
 */
function createBarnowl(options) {
  let barnowl = new Barnowl({
      enableMixing: config.barnowl.enableMixing,
      mixingDelayMilliseconds: config.barnowl.mixingDelayMilliseconds
  });

  if(config.barnowl.enableUDPListener) {
    barnowl.addListener(Barnowl, {}, Barnowl.UdpListener, {});
  }

  return barnowl;
}


/**
 * Create a barnacles instance with logfile.
 * @param {Object} options The configuration options.
 * @return {Barnacles} The Barnacles instance.
 */
function createBarnacles(options) {
  let barnacles = new Barnacles({
      barnowl: options.barnowl,
      inputFilterParameters: config.barnacles.inputFilterParameters,
      observedEvents: config.barnacles.observedEvents,
      packetProcessors: config.barnacles.packetProcessors,
      packetInterpreters: config.barnacles.packetInterpreters
  });
  let logfileOptions = { eventsToLog: {} };

  if(config.logfiles.enableRaddecLogging) {
    logfileOptions.eventsToLog.raddec = config.logfiles.raddec;
  }
  if(config.logfiles.enableDynambLogging) {
    logfileOptions.eventsToLog.dynamb = config.logfiles.dynamb;
  }

  barnacles.addInterface(BarnaclesLogfile, logfileOptions);

  return barnacles;
}


module.exports = AmbientDataLogger;

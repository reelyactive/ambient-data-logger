/**
 * Copyright reelyActive 2022
 * We believe in an open Internet of Things
 */


const Raddec = require('raddec');


// Begin configurable parameters
// -----------------------------

const BARNOWL_OPTIONS = {
    enableMixing: true,
    mixingDelayMilliseconds: 1000
};
const BARNACLES_OPTIONS = {
    inputFilterParameters: { /* See raddec-filter */ },
    observedEvents: [
      Raddec.events.APPEARANCE,
      Raddec.events.DISPLACEMENT,
      Raddec.events.PACKETS,
      Raddec.events.KEEPALIVE,
      Raddec.events.DISAPPEARANCE
    ],
    packetProcessors: [
      { processor: require('advlib-ble'),
        libraries: [ require('advlib-ble-services'),
                     require('advlib-ble-manufacturers') ],
        options: { ignoreProtocolOverhead: true } }
    ],
    packetInterpreters: [ require('advlib-interoperable') ]
};
const BARNACLES_LOGFILE_OPTIONS = {
    eventsToLog: {
      raddec: {
        folderPath: "logs/",
        minutesToRotation: 60,
        numberOfReceiversToLog: 3
      },
      dynamb: {
        folderPath: "logs/",
        minutesToRotation: 60,
        propertiesToLog: [
          'acceleration',
          'angleOfRotation',
          'batteryPercentage',
          'batteryVoltage',
          'elevation',
          'heading',
          'heartRate',
          'illuminance',
          'interactionDigest',
          'isButtonPressed',
          'isContactDetected',
          'isMotionDetected',
          'magneticField',
          'nearest',
          'position',
          'pressure',
          'relativeHumidity',
          'speed',
          'temperature',
          'txCount',
          'unicodeCodePoints',
          'uptime'
        ]
      }
    }
};

// ---------------------------
// End configurable parameters


module.exports.barnowlOptions = BARNOWL_OPTIONS;
module.exports.barnaclesOptions = BARNACLES_OPTIONS;
module.exports.barnaclesLogfileOptions = BARNACLES_LOGFILE_OPTIONS;

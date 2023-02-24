/**
 * Copyright reelyActive 2022-2023
 * We believe in an open Internet of Things
 */


// Begin configurable parameters
// -----------------------------

const ENABLE_RADDEC_LOGGING = true;
const ENABLE_DYNAMB_LOGGING = true;
const LOGFILE_FOLDER_PATH = 'logs/';
const MINUTES_TO_ROTATION = 60;
const RADDEC_LOGFILE_OPTIONS = {
    folderPath: LOGFILE_FOLDER_PATH,
    minutesToRotation: MINUTES_TO_ROTATION,
    numberOfReceiversToLog: 3
};
const DYNAMB_LOGFILE_OPTIONS = {
    folderPath: LOGFILE_FOLDER_PATH,
    minutesToRotation: MINUTES_TO_ROTATION,
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
};

// ---------------------------
// End configurable parameters


module.exports.enableRaddecLogging = ENABLE_RADDEC_LOGGING;
module.exports.enableDynambLogging = ENABLE_DYNAMB_LOGGING;
module.exports.raddec = RADDEC_LOGFILE_OPTIONS;
module.exports.dynamb = DYNAMB_LOGFILE_OPTIONS;

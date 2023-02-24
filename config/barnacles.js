/**
 * Copyright reelyActive 2022-2023
 * We believe in an open Internet of Things
 */


const Raddec = require('raddec');


// Begin configurable parameters
// -----------------------------

const INPUT_FILTER_PARAMETERS = { /* See raddec-filter */ };
const OBSERVED_EVENTS = [
    Raddec.events.APPEARANCE,
    Raddec.events.DISPLACEMENT,
    Raddec.events.PACKETS,
    Raddec.events.KEEPALIVE,
    Raddec.events.DISAPPEARANCE
];
const PACKET_PROCESSORS = [{
    processor: require('advlib-ble'),
    libraries: [ require('advlib-ble-services'),
                 require('advlib-ble-manufacturers') ],
    options: { ignoreProtocolOverhead: true }
}];
const PACKET_INTERPRETERS = [ require('advlib-interoperable') ];

// ---------------------------
// End configurable parameters


module.exports.inputFilterParameters = INPUT_FILTER_PARAMETERS;
module.exports.observedEvents = OBSERVED_EVENTS;
module.exports.packetProcessors = PACKET_PROCESSORS;
module.exports.packetInterpreters = PACKET_INTERPRETERS;

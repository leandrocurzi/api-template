const winston = require('winston');
const SplunkStreamEvent = require('winston-splunk-httplogger');

const splunkSettings = {
    token: '31C09A1A-1762-42BB-B59C-0201ABF0698D',
    host: 'https://prd-p-qsbdhsbrsg3m.cloud.splunk.com',
    family: 4
};

// Now use winston as normal
const logger = new winston.Logger({
    transports: [
        new winston.transports.Console(),
        new SplunkStreamEvent({ splunk: splunkSettings })
    ],
});

module.exports = logger;

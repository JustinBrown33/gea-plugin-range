/*
 * Copyright (c) 2013 - General Electric - Confidential - All Rights Reserved
 * 
 * Author: Christopher Baker <christopher.baker2@ge.com>
 *  
 */

const ERD_REMOTE_ENABLE = 0x510A;
const ERD_LAST_KEY_PRESSED = 0x5006;
const ERD_UPPER_COOK_MODE = 0x5100;

function Range(appliance) {
    return appliance;
}

exports.plugin = function (bus, configuration, callback) {
    bus.on("appliance", function (appliance) {
        appliance.read(ERD_UPPER_COOK_MODE, function (value) {
            bus.emit("range", Range(appliance));
        });
    });
    
    callback(bus);
};


const awsIot = require('aws-iot-device-sdk-js-v2');

var device = awsIot.device({
    keyPath: '',
    certPath: '',
    caPath: '',
    clientId: '',
    host: ''
});

device.on('connect', function () {
    console.log("Connected to AWS");
    device.publish('/telemetry', JSON.stringify({ "thingid": "", "flame": 322, "smoke": 40 }));

    function getRandomArbitrary(lower, upper) {
        return Math.floor(lower + (Math.random() * (upper - lower)));
    }
    function myTimer() {
        let data = {};
        data['thingid'] = "";
        data['flame'] = getRandomArbitrary(0, 300);
        data['smoke'] = getRandomArbitrary(0, 300);
        device.publish('/telemetry', JSON.stringify(data));
        console.log("Data sent: " + JSON.stringify(data));
    }
    setInterval(myTimer, 20000);
});
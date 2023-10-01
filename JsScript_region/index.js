const awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
    keyPath: 'e09011e1430bb81fa042046e2bfa1ea336e79f18aa1d30ceb2ee56dcc239c900-private.pem.key',
    certPath: 'e09011e1430bb81fa042046e2bfa1ea336e79f18aa1d30ceb2ee56dcc239c900-certificate.pem.crt',
    caPath: 'rootCA.pem',
    clientId: 'testawsconnection',
    host: 'amjtdljao7t1o-ats.iot.ap-southeast-2.amazonaws.com'
});

device.on('connect', function () {
    console.log("Connected to AWS");
    device.publish('Testing', JSON.stringify({ "flame": 352, "smoke": 40 }));

    function getRandomArbitrary(lower, upper) {
        return Math.floor(lower + (Math.random() * (upper - lower)));
    }
    function myTimer() {
        let data = {};
        data['flame'] = getRandomArbitrary(0, 300);
        data['smoke'] = getRandomArbitrary(0, 300);
        device.publish('Testing', JSON.stringify(data));
        console.log("Data sent: " + JSON.stringify(data));
    }
    setInterval(myTimer, 20000);
});
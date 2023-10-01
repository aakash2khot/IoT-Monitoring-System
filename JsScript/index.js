const awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
    keyPath: '2b36d28fe6cf5651a3cde8f10250aaf8e14b4a646827c0434e1e28db8a4c9e9b-private.pem.key',
    certPath: '2b36d28fe6cf5651a3cde8f10250aaf8e14b4a646827c0434e1e28db8a4c9e9b-certificate.pem.crt',
    caPath: 'rootCA.pem',
    clientId: 'testawsconnection',
    host: 'amjtdljao7t1o-ats.iot.eu-north-1.amazonaws.com'
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
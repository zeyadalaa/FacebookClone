//Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
//PDX-License-Identifier: MIT-0 (For details, see https://github.com/awsdocs/amazon-rekognition-developer-guide/blob/master/LICENSE-SAMPLECODE.)


// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');


const imageReko =  (img) =>{
    return new Promise((resolve,rej)=>{

        const bucket = 'image-for-reko1' // the bucketname without s3://
        
        var string = img.split("/");
    // console.log(string);
    // console.log(string[2]);
    
    const photo  = string[2] // the name of file
    // console.log(img);
    // console.log("this is imgreko");
    const config = new AWS.Config({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
    }) 
    
    
    AWS.config.update({
    region: 'eu-west-2'
});
    // console.log(config)
    

    const client = new AWS.Rekognition();
    const params = {
        Image: {
            S3Object: {
            Bucket: bucket,
            Name: photo
        },
        },
        MaxLabels: 3,
        MinConfidence: 85
    }
    var test
    client.detectLabels(params, function(err, response) {
        if (err) {
            rej(err)
            // console.log(err, err.stack); // an error occurred
        } else {
            console.log(`Detected labels for: ${photo}`)
            console.log("the data in side the file");
            console.log(response.Labels);
            resolve(response.Labels)
        } // if
    });
});
}
module.exports = imageReko;
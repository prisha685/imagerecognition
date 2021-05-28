Webcam.set({
    width:346,
    height:346,
    image_format:'png',
    png_quality:93,
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_picture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dbNqfNIAT/',modelLoaded);
console.log('ml5 version', ml5.version);
function identify() {
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResults);
}
function gotResults(error,results) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_familymember_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy_name").innerHTML=results[0].confidence.toFixed(3);
    }
}
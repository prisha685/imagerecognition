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
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true}); 
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/model.json',modelLoaded); 
}

function modelLoaded() {
    classifier.classify(gotresults); 
}

function gotresults (error, results) {
    if (error) {
        console.error(error); 
    }
    else {
        console.log(results); 
        r1= Math.floor(Math.random() * 255) + 1;
        g1= Math.floor(Math.random() * 255) + 1;
        b1= Math.floor(Math.random() * 255) + 1; 
        document.getElementById("result_label").innerHTML= 'I can Hear: '+ results[0].label; 
        document.getElementById("result_confidence").innerHTML= 'Accuracy:  '+(results[0].confidence*100).toFixed(2)+"%"; 
        document.getElementById("result_label").style.color= "rgb("+r1+","+g1+","+b1+")"; 
        document.getElementById("result_confidence").style.color= "rgb("+r1+","+g1+","+b1+")"; 
        img1=document.getElementById("dog");
        img2=document.getElementById("cat");
        img3=document.getElementById("cow");
        img4=document.getElementById("snake");
        
        if (results[0].label=="Barking"){
            img1.src="OIP (4).jpg";
            img2.src="OIP.jpg";
            img3.src="OIP (1).jpg";
            img4.src="OIP (2).jpg"; 
          
        }
        else if (results[0].label=="Meowing"){
            img1.src="OIP (4).jpg";
            img2.src="OIP.jpg";
            img3.src="OIP (1).jpg";
            img4.src="OIP (2).jpg"; 
        }
        else if (results[0].label=="Mooing"){
            img1.src="OIP (4).jpg";
            img2.src="OIP.jpg";
            img3.src="OIP (1).jpg";
            img4.src="OIP (2).jpg";   
        }
        else if (results[0].label=="Hissing"){
            img1.src="OIP (4).jpg";
            img2.src="OIP.jpg";
            img3.src="OIP (1).jpg";
            img4.src="OIP (2).jpg";   
        }
        else {
            img1.src="";
            img2.src="";
            img3.src="";
            img4.src="";
        }  
        }
    }

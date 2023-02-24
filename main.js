// https://teachablemachine.withgoogle.com/models/1pE10Qvpl/

function startClassification(){
        navigator.mediaDevices.getUserMedia({audio:true});
        classifier = ml5.soundClassifer('https://teachablemachine.withgoogle.com/models/1pE10Qvpl/model.json', modelReady);
    }
    
    function modelReady(){
        classifier.classify(gotResults);
    
    }

    function gotResults() {
          
    }
function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear - ' +
            results[0].label;
        document.getElementById("result_confidence").innerHTML = 'accuracy - ' +
            (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img = document.getElementById('animal_image');


        if (results[0].label == "Barking") {
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg';
            dog = dog + 1;
        } else if (results[0].label == "Meowing") {
            img.src = 'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg';
            cat = cat + 1;
        } else {
            img.src = 'https://us.123rf.com/450wm/odrina/odrina1601/odrina160100025/50951418-cartoon-man-with-a-big-ear-something-eavesdropping-isolated-on-white.jpg?ver=6';
        }
    }
}
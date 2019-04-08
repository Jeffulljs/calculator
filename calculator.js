
const express = require('express');

const bodyParser = require('body-parser');//il faut une instalation  npm body-parser pour l'utiliser

const app = express();

app.use(bodyParser.urlencoded({extended: true}));//permet de recuperer les donnée d'un formulaire 

//homepage 

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');//dirname permet de localiser l'emplacement de notre fichier peu importe la localisation    
});

app.post("/", function (req, res) {
    
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let resultat = num1+ num2;
    
    res.send("Merci, votre resutat est : " + resultat);

}); 

//page imCalculator

app.get("/imCalculator", function (req, res) {
    res.sendFile(__dirname + '/imCalculator.html')
});

app.post('/imCalculator', function (req, res) {

        
        let poids = parseFloat(req.body.poids);
        let hauteur = parseFloat(req.body.hauteur);
    
        let result = Math.round(poids / Math.pow(hauteur, 2));

        if (result >= 18.5 && result <= 24.9  ) {
            res.send( "Votre IMC est de : " + result +" Votre poids est normal");
            
        } 
        else if(result >= 24.9 && result <= 29.9){
            res.send("Votre IMC est de : " + result + " Vous etes en surpoids");
        }
        else if(result >= 29.9 && result <= 40){
            res.send("Votre IMC est de : " + result + " Vous etes obèse");
        }
        else if(result > 40){
            res.send("Votre IMC est de : " + result + " Vous etes en obésité morbide");
        }
        else if(result < 18.5){
            res.send("Votre IMC est de : " + result + " Votre poids est normal");
        }
    
});


app.listen(3000, function(){
    console.log("server started ");
});
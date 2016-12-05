/**
 * Created by TonyHarris on 10/27/16.
 */
var answers = ['Maybe.','Not in your wildest dreams.','There is a good chance.',
    'Never!','Hell, yes.','Hell no.','The future is uncertain.','Possibly.','Yes!'];

function Random(){
    return answers[Math.floor(Math.random() * answers.length)];
}
function $(element){
    return document.getElementById(element);
}

function ClearForm(){
    $('txtUserData').value='';
    $('div8BallImage').innerHTML='';
    $('div8BallResponse').innerHTML='';
}

function EightBall(){
    var Answer = Random(answers);
    var Source = "<img src= ";
    if (Answer == 'Maybe.'){
        Image = 'images/Maybe.png';
    }
    else if (Answer == 'Not in your wildest dreams.'){
        Image = "images/dreams.png"  ;
    }
    else if (Answer == 'There is a good chance.'){
        Image = 'images/chance.png';
    }
    else if (Answer == 'Never!'){
        Image = 'images/Never.png';
    }
    else if (Answer == 'Hell, yes.'){
        Image = 'images/Hell_yes.png';
    }
    else if (Answer == 'Hell no.'){
        Image = 'images/Hell_no.png';
    }
    else if (Answer == 'The future is uncertain.'){
        Image = 'images/future.png';
    }
    else if (Answer == 'Possibly.'){
        Image = 'images/possibly.png';
    }
    else if (Answer == 'Yes!'){
        Image = 'images/Yes.png';
    }
    $('div8BallResponse').innerHTML = Answer;
    $('div8BallImage').innerHTML = Source + Image + "/>";
}

function Amazon(){
    window.location.href = "https://www.amazon.com/Mattel-30188-Magic-8-Ball/dp/B00001ZWV7/ref=sr_1_1?ie=UTF8&qid=1480969435&sr=8-1&keywords=8+ball";
}

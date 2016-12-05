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
    if (Answer == 'Maybe'){
        Image = 'images/Maybe.png';
    }
    else if (Answer == 'Not in your wildest dreams.'){
        Image = "images/dreams.png"  ;
    }
    else if (Answer == 'There is a good chance.'){
        Image = 'images/Good chance.png';
    }
    else if (Answer == 'Never!'){
        Image = 'images/Never.png';
    }
    else if (Answer == 'Hell, yes.'){
        Image = 'images/Hell yes.png';
    }
    else if (Answer == 'Hell no.'){
        Image = 'images/Hell no.png';
    }
    else if (Answer == 'The future is uncertain.'){
        Image = 'images/the future is uncertain.png';
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

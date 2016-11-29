/**
 * Created by TonyHarris on 10/27/16.
 */
var response = ['Maybe.','Not in your wildest dreams.',
    'There is a good chance.', 'Never!', 'Hell, yes.', 'Hell no.',
    'The future is uncertain.', 'Possibly.','Yes!'];

function Random(response){
    return response[Math.floor(Math.random()*response.length)];
}

function $(element){
    return document.getElementById(element);
}

function ClearForm(){
    $('txtUserData').value='';
    $('div8BallImage').src='';
    $('div8BallResponse').innerHTML='';
}

function EightBall(){
    var Answer = Random(response);
    var Image = '';
    if (Answer = 'Maybe'){
        $('div8BallImage').src = 'images/Maybe.png';
    }
    else if (Answer = 'Not in your wildest dreams.'){
        $('div8BallImage').src = 'images/dreams.png';
    }
    else if (Answer = 'There is a good chance.'){
        $('div8BallImage').src = 'images/Good chance.png';
    }
    else if (Answer = 'Never!'){
        $('div8BallImage').src = 'images/Never.png';
    }
    else if (Answer = 'Hell, yes.'){
        $('div8BallImage').src = 'images/Hell yes.png';
    }
    else if (Answer = 'Hell no.'){
        $('div8BallImage').src = 'images/Hell no.png';
    }
    else if (Answer = 'The future is uncertain.'){
        $('div8BallImage').src = 'images/the future is uncertain.png';
    }
    else if (Answer = 'Possibly.'){
        $('div8BallImage').src = 'images/possibly.png';
    }
    else if (Answer = 'Yes!'){
        $('div8BallImage').src = 'images/Yes.png';
    }
    $('div8BallResponse').innerHTML = Answer;
}
/**
 * Created by TonyHarris on 10/27/16.
 */
const yes = 0;
const no = 1;
const maybe = 2;
const askAgain = 3;

function RandomInt(low,high){
    return Math.floor(Math.random()*(high-low+1)) + low;
}

function $(element){

return document.getElementById(element);
}

function ClearForm(){
    $('txtUserData').value='';
    $('div8BallImage').src='';
    $('div8BallResponse').value='';
}

function EightBall(){
    ClearForm();

    var Choice;
    if (RandomInt = yes){
    $('div8BallResponse').value = 'Yes'
    }
    else if (RandomInt = no) {
        $('div8BallResponse').value = 'No'
    }
    else if (RandomInt = maybe) {
        $('div8BallResponse').value = 'Maybe'
    }
    else if (RandomInt = askAgain) {
        $('div8BallResponse').value = 'Ask Again'
    }
}

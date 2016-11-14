/**
 * Created by TonyHarris on 10/27/16.
 */
var response = [
    'Maybe.','Not in your wildest dreams.',
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
    $('div8BallResponse').innerHTML = Answer;
}

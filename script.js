const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});


var clickedTime; var createdTime; var reactionTime; 
var counter = 0;
var scores = [];
function makeBox() {
        var time=Math.random();
        time=1000+time*3000;
        document.getElementById("waitbox").style.borderRadius="50%";
        document.getElementById("waitbox").style.display="block";
    
    setTimeout(function() {
        
        document.getElementById("waitbox").style.display="none";
        document.getElementById("testbox").style.borderRadius="50%";
        document.getElementById("testbox").style.display="block";
        
        createdTime=Date.now();
        
    }, time); 

}

function makeStartBox() {
    document.getElementById("startbox").style.borderRadius="50%";
    document.getElementById("startbox").style.display="block";
    
}; 

document.getElementById("startbox").onclick=function() {
    document.getElementById("startbox").style.display="none";
    counter = 0;
    scores =[];
    makeBox();
}

document.getElementById("testbox").onclick=function() {
    clickedTime=Date.now();
    reactionTime=(clickedTime-createdTime);
    scores.push(reactionTime);
    console.log(reactionTime);
    document.getElementById("printReactionTime").innerHTML=reactionTime + "ms";
    this.style.display="none";
    counter++;
    if (counter < 5) {
        makeBox();
    }else{
        var sum = 0;
        for (i = 0; i < scores.length; i++){
            sum += scores[i];
        }
        var avg = sum/scores.length;
        document.getElementById("printReactionTime").innerHTML="Final Score: "+ avg+"ms";
        console.log(scores);
        makeStartBox();
    }

}

makeStartBox(); 
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)

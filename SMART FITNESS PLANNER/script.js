let weight;
let height;

function start(){

let name=
document.getElementById("name").value;

weight=
document.getElementById("weight").value;

height=
document.getElementById("height").value;

document.getElementById(
"username"
).innerText=name;

document.getElementById(
"formSection"
).style.display="none";

document.getElementById(
"options"
).classList.remove(
"hidden"
);

}

function showBMI(){

let h=height/100;

let bmi=
(weight/(h*h)).toFixed(2);

let category="";

if(bmi<18.5){

category="Underweight";

}

else if(bmi<25){

category="Normal";

}

else if(bmi<30){

category="Overweight";

}

else{

category="Obese";

}

document.getElementById(
"result"
).innerHTML=

`
<div class="card">

<h2>BMI Result</h2>

<p>BMI :
${bmi}</p>

<p>${category}</p>

</div>

`;

}



function showWorkout(){

let workout="";

if(weight<60){

workout=

`
<div class="card">

<h2>Muscle Gain</h2>

Pushups – 3×12<br>

Squats – 3×15<br>

Pullups – 3×8<br>

Jogging – 15 min

</div>

`;

}

else if(weight<=80){

workout=

`
<div class="card">

<h2>Strength Workout</h2>

Bench Press<br>

Squats<br>

Plank<br>

Running 20 min

</div>

`;

}

else{

workout=

`
<div class="card">

<h2>Fat Loss</h2>

Burpees<br>

Jump Rope<br>

Running 30 min

</div>

`;

}

document.getElementById(
"result"
).innerHTML=workout;

}



function showDiet(){

let diet="";

if(weight<60){

diet=

`
<div class="card">

<h2>Diet</h2>

Calories : 2300 kcal

<br><br>

Eggs

<br>

Rice

<br>

Chicken

<br>

Milk

</div>

`;

}

else if(weight<=80){

diet=

`
<div class="card">

<h2>Diet</h2>

Calories : 2500 kcal

<br><br>

Oats

<br>

Chicken

<br>

Fruits

<br>

Eggs

</div>

`;

}

else{

diet=

`
<div class="card">

<h2>Diet</h2>

Calories : 2000 kcal

<br><br>

Oats

<br>

Salad

<br>

Chicken

<br>

Green Tea

</div>

`;

}

document.getElementById(
"result"
).innerHTML=diet;

}



function showProgress(){

let target=70;

let percent=
(weight/target)*100;

if(percent>100){

percent=100;

}

document.getElementById(
"result"
).innerHTML=

`

<div class="card">

<h2>Progress Tracker</h2>

Current Weight :
${weight}

kg

<br><br>

<div class="progress">

<div
class="progress-bar"
id="bar">

</div>

</div>

</div>

`;

setTimeout(()=>{

document
.getElementById("bar")
.style.width=
percent+"%";

},200);

}
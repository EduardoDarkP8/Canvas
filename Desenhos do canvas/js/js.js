var c1 = document.getElementById("deike");
var ctx1 = c1.getContext("2d");
var c2 = document.getElementById("kimi");
var ctx2 = c2.getContext("2d");
var c3 = document.getElementById("drake");
var ctx3 = c3.getContext("2d");
var c4 = document.getElementById("mizuko");
var ctx4 = c4.getContext("2d");

var buttonLimpar = document.getElementById("limpar");
buttonLimpar.onclick = function()
{
    ctx1.clearRect(0, 0, 600, 800);
    ctx2.clearRect(0, 0, 600, 800);
    ctx3.clearRect(0, 0, 600, 800);
    ctx4.clearRect(0, 0, 600, 800);
    buttonDrake.disabled = false;
    buttonDeike.disabled = false;
    buttonKimi.disabled = false;
    buttonMizuko.disabled = false;
}

//desenhos
var buttonDeike = document.getElementById("Deike");

buttonDeike.onclick = function()
{
    

    ctx1.clearRect(0,0,800,600)
    console.log("Deike");
    ctx1.moveTo(5,40);
    ctx1.lineTo(30,20);
    ctx1.lineTo(55,40);
    ctx1.lineTo(50,45);
    ctx1.lineTo(30,30);
    ctx1.lineTo(10,45);
    ctx1.lineTo(5,40);
    ctx1.strokeStyle = "Darkblue";
    ctx1.font = "20px Comic Sans Ms";
    ctx1.fillStyle = "Darkblue";
    ctx1.fillText("Deike",200,20);
    ctx1.stroke();

    var grdDeike = ctx1.createRadialGradient(235, 60, 5, 235, 75, 100);
    grdDeike.addColorStop(0,"Blue");
    grdDeike.addColorStop(1,"#00091a");
    ctx1.fillStyle=grdDeike;
    ctx1.fillRect(185, 40, 80, 100);
    ctx1.beginPath();
    ctx1.moveTo(170,0);
    ctx1.bezierCurveTo(200,60,50,70,410,520);
    ctx1.strokeStyle = "Black";
    ctx1.stroke();
    
    ctx1.beginPath();
    ctx1.moveTo(190, 0);
    ctx1.quadraticCurveTo(225, 75, 265, 0);
    ctx1.stroke();
    
    const circle = new Path2D();
circle.arc(190, 45, 50, 0, 2 * Math.PI);
ctx1.fillStyle="transparent";
ctx1.fill(circle);


c1.addEventListener('mousemove', function(event) {


if (ctx1.isPointInPath(circle, event.offsetX, event.offsetY)) {

    var dk = new Image();
    dk.src = 'Deike_Lunar.png';
    
    dk.onload = function()
    {
    ctx1.drawImage(dk,190,45,70,90);
    };
}
else {

    var dk = new Image();
    dk.src = 'Deike.png';
    
    dk.onload = function()
    {
    ctx1.drawImage(dk,190,45,70,90);
    };
}

ctx1.fill(circle);
})
    
 
}
var buttonKimi = document.getElementById("Kimi");
buttonKimi.onclick = function()
{
    
    ctx2.beginPath();
    ctx2.arc(30,32,20,0,2*Math.PI);
    ctx2.strokeStyle = "Magenta";
    ctx2.stroke();
    ctx2.beginPath();
    ctx2.arc(30,32,14,0,2*Math.PI);
    ctx2.strokeStyle = "Magenta";
    ctx2.font = "20px Arial";
    ctx2.fillStyle = "Magenta";
    ctx2.fillText("Kimi",200,20);
    ctx2.stroke();
    var grdKimi = ctx2.createRadialGradient(235, 60, 5, 235, 75, 100);
    grdKimi.addColorStop(0,"purple");
    grdKimi.addColorStop(1,"magenta");
    ctx2.fillStyle=grdKimi;
    ctx2.fillRect(180, 40, 80, 100);
    ctx2.beginPath();
    ctx2.moveTo(170,0);
    ctx2.bezierCurveTo(200,60,50,70,410,520)
    ctx2.strokeStyle = "Black";
    ctx2.stroke();
    
    ctx2.beginPath();
    ctx2.moveTo(190, 0);
    ctx2.quadraticCurveTo(220, 75, 250, 0);
    ctx2.stroke();
    const circle2 = new Path2D();
circle2.arc(190, 45, 50, 0, 2 * Math.PI);
ctx2.fillStyle="transparent";
ctx2.fill(circle2);


c2.addEventListener('mousemove', function(event) {


if (ctx2.isPointInPath(circle2, event.offsetX, event.offsetY)) {

    var km = new Image();
    km.src = 'Kimi_Day_form.png';
    
    km.onload = function()
    {
    ctx2.drawImage(km,185,45,70,90);
    };
}
else {

    var km = new Image();
    km.src = 'Kimi.png';
    
    km.onload = function()
    {
    ctx2.drawImage(km,185,45,70,90);
    };
}

ctx2.fill(circle2);
})
    

}

var buttonDrake = document.getElementById("Drake");

buttonDrake.onclick = function()
{
   

    ctx3.moveTo(10,50);
    ctx3.lineTo(10,15);
    ctx3.lineTo(50,15);
    ctx3.lineTo(50,50);
    ctx3.lineTo(10,50);
    ctx3.moveTo(16,45);
    ctx3.lineTo(16,20);
    ctx3.lineTo(44,20);
    ctx3.lineTo(44,45);
    ctx3.lineTo(16,45);
    ctx3.strokeStyle = "red";
    ctx3.font = "20px Georgia";
    ctx3.fillStyle = "Red";
    ctx3.fillText("Drake",200,20);
    ctx3.stroke();
    var grdDrake = ctx3.createRadialGradient(235, 60, 5, 235, 75, 100);
    grdDrake.addColorStop(0,"orange");
    grdDrake.addColorStop(1,"red");
    ctx3.fillStyle=grdDrake;
    ctx3.fillRect(185, 40, 80, 100);
    ctx3.beginPath();
    ctx3.moveTo(170,0);
    ctx3.bezierCurveTo(200,60,50,70,410,520)
    ctx3.strokeStyle = "Black";
    ctx3.stroke();
    
    ctx3.beginPath();
    ctx3.moveTo(190, 0);
    ctx3.quadraticCurveTo(225, 75, 265, 0);
    ctx3.stroke();
    const circle3 = new Path2D();
circle3.arc(190, 45, 50, 0, 2 * Math.PI);
ctx3.fillStyle="transparent";
ctx3.fill(circle3);


c3.addEventListener('mousemove', function(event) {


if (ctx3.isPointInPath(circle3, event.offsetX, event.offsetY)) {

    var dr = new Image();
    dr.src = 'Drake_Charged.png';
    
    dr.onload = function()
    {
    ctx3.drawImage(dr,190,45,70,90);
    };
}
else {

    var dr = new Image();
    dr.src = 'Drake.png';
    
    dr.onload = function()
    {
    ctx3.drawImage(dr,190,45,70,90);
    };
}

ctx3.fill(circle3);
})

    
}

var buttonMizuko =document.getElementById("Mizuko");

buttonMizuko.onclick = function()
{
    ctx4.moveTo(10,32);
    ctx4.lineTo(25,10);
    ctx4.lineTo(40,32);
    ctx4.lineTo(25,54);
    ctx4.lineTo(10,32);
    ctx4.strokeStyle = "green";
    ctx4.stroke();
    ctx4.moveTo(18,32);
    ctx4.lineTo(25,10);
    ctx4.lineTo(32,32);
    ctx4.lineTo(25,54);
    ctx4.lineTo(18,32);
    ctx4.strokeStyle = "YellowGreen";
    ctx4.font = "20px Impact";
    ctx4.fillStyle = "YellowGreen";
    ctx4.fillText("Mizuko",200,20);
    ctx4.stroke();
    buttonDeike.disabled = true;
    buttonKimi.disabled = true;
    ctx4.stroke();
    var grdMizuko = ctx4.createRadialGradient(235, 60, 5, 235, 75, 100);
    grdMizuko.addColorStop(0,"green");
    grdMizuko.addColorStop(1,"YellowGreen");
    ctx4.fillStyle=grdMizuko;
    ctx4.fillRect(188, 40, 80, 100);
    ctx4.beginPath();
    ctx4.moveTo(170,0);
    ctx4.bezierCurveTo(200,60,50,70,410,520)
    ctx4.strokeStyle = "Black";
    ctx4.stroke();
    
    ctx4.beginPath();
    ctx4.moveTo(185, 0);
    ctx4.quadraticCurveTo(230, 75, 270, 0);
    ctx4.stroke();
    const circle4 = new Path2D();
circle4.arc(190, 45, 50, 0, 2 * Math.PI);
ctx4.fillStyle="transparent";
ctx4.fill(circle4);


c4.addEventListener('mousemove', function(event) {


if (ctx4.isPointInPath(circle4, event.offsetX, event.offsetY)) {

    var mz = new Image();
    mz.src = 'Mizuko_Aqua_Form.png';
    
    mz.onload = function()
    {
    ctx4.drawImage(mz,193,45,70,90);
    };
}
else {

    var mz = new Image();
    mz.src = 'Mizuko.png';
    
    mz.onload = function()
    {
    ctx4.drawImage(mz,193,45,70,90);
    };
}

ctx4.fill(circle4);
})
   
}
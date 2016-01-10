onload = function(){
    drawCounterBase();      
}


function drawCounterBase(){
   var cnvs = document.getElementById('canvas-counter');
   var ctx = cnvs.getContext('2d');
   ctx.beginPath();
   ctx.arc(110, 110, 100, 0, Math.PI*2, false);
   ctx.strokeStyle = 'green';
   ctx.stroke();
}

function updateCounter(sum){
    var cnvs = document.getElementById('canvas-counter');
    var ctx = cnvs.getContext('2d');
    var maxSum = 15;
    ctx.beginPath();
    ctx.moveTo(110,110);
    ctx.arc(110, 110, 100, -Math.PI*90/180, -Math.PI*90/180 + Math.PI*sum/maxSum, false);
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();
}

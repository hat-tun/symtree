onload = function(){
    drawCounter();      
}

function drawCounter(){
   var cnvs = document.getElementById('canvas-counter');
   var ctx = cnvs.getContext('2d');
   ctx.beginPath();
   ctx.arc(100, 105, 100, 0, Math.PI*2, false);
   ctx.strokeStyle = 'green';
   ctx.stroke();
}
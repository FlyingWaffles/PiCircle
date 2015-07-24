var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = "Blue";
ctx.beginPath();
ctx.arc(220,220,50,0,Math.Pi*2,true);
ctx.closePath();
ctx.fill();

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(100,100,100,0,Math.Pi*2,true);
//context arc parameters
//context.arc(x,y,r,s,endAngle,counterclockwise);
ctx.closePath();
ctx.fill();
</script>
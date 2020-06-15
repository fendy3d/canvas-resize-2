var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var img = document.getElementById("img-alphabet");
c.drawImage(img, 10, 10);




// c.fillStyle = 'rgba(255,0,0,0.5)'
// c.fillRect(100, 100, 100, 100);

// // // Line
// // c.beginPath();
// // c.moveTo(50, 300);
// // c.lineTo(300, 5);
// // c.strokeStyle = "#fa34a3";
// // c.stroke();

// // // Arch / Circle
// // c.arc()

// var mouse = {
// 	x:undefined,
// 	y:undefined
// }

// window.addEventListener('mousemove', 
// 	function(event) {
// 	mouse.x = event.x;
// 	mouse.y = event.y;
	
// 	}
// )

// function Circle(x,y,dx,dy,radius){
// 	this.x = x;
// 	this.y = y;
// 	this.dx = dx;
// 	this.dy = dy;
// 	this.radius = radius;
// 	this.draw = function() {
// 		c.beginPath();
// 		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
// 		c.strokeStyle = "blue";
// 		c.stroke();
// 	}
// 	this.update = function(){
// 		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
// 			this.dx = -this.dx;
// 		}
// 		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
// 			this.dy = -this.dy;
// 		}
	
// 		this.x += this.dx;
// 		this.y += this.dy;
// 		this.draw();
// 	}
// }

// var circle = new Circle(200,200,5,5,30);

// function animate(){
// 	requestAnimationFrame(animate);
	
// 	c.clearRect(0, 0, innerWidth, innerHeight);
// 	circle.update();
	
// }
// animate()
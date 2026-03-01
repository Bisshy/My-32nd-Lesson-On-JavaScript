// let circle = document.querySelector("circle");
// circle.setAttribute("fill", "cyan");

//The canvas element

// fillRect
// let canvas = document.querySelector("canvas");
// let context = canvas.getContext("2d"); 
// context.fillStyle = "red";
// context.fillRect(10, 10, 100, 50);

//lines and surfaces
// let cx = document.querySelector("canvas").getContext("2d");
// cx.strokeStyle = "blue";
// cx.strokeRect = (5, 5, 50, 50);
// cx.lineWidth = 5;
// cx.strokeRect = (135, 5, 50, 50);

//Paths
// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// for(let y =10; y<=100; y+=10){
//     cx.moveTo(10, y);
//     cx.lineTo(90, y);
// }
// cx.stroke();

// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// for(let x = 10; x <= 100; x+=10){
//     cx.moveTo(x, 10);
//     cx.lineTo(x, 40);
// }
// cx.stroke();
// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath()
// cx.moveTo(50, 10);
// cx.lineTo(10, 70);
// cx.lineTo(90, 70);
// cx.fill();

// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// cx.moveTo(50, 10);
// cx.lineTo(10, 70);
// cx.lineTo(90, 70);
// cx.fill();

//Curves
//Quadratic curve
// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// cx.moveTo(10, 90);
// //control = (60, 10) goal(90, 90)
// cx.quadraticCurveTo(60, 10, 90, 90);
// cx.lineTo(60, 10);
// cx.closePath();
// cx.stroke();

//Brazier Curve
// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// cx.moveTo(10, 90);
// //control1= (10, 10) control2=(90, 10), goal =(50, 90)
// cx.bezierCurveTo(10, 10, 90, 10, 50, 90);
// cx.lineTo(90, 10);
// cx.lineTo(10, 10);
// cx.closePath();
// cx.stroke();

//arc method
// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
//center =(50, 50) radius=40 angle=0 to 7
// cx.arc(50, 50, 40, 0, 7);
//center =(150, 50) radius =40 angle=0 to pi1/2
// cx.moveTo(100, 50); //Using moveto to disconnect lines
// cx.arc(150, 50, 40, 0, 0.5 * Math.PI);
// cx.stroke();

//Drawing A PIE CHART
const results = [
    {name:"Satisfied", count:1043, color:"lightblue"},
    {name:"Neutral", count:563, color:"lightgreen"},
    {name:"Unsatisfied", count:510, color:"pink"},
    {name:"No comment", count:175, color:"silver"}
];

// let cx = document.querySelector("canvas").getContext("2d");
// let total = results.reduce((sum, {count})=> sum + count, 0);
// //Start at the top
// let currentAngle = -0.5 * Math.PI;
// for(let result of results){
//     let sliceAngle = (result.count / total) * 2 * Math.PI;
//     cx.beginPath();

    //Center = 100, 100, radius = 100
    //from current angle, clockwise by slice's angle

//     cx.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);
//     currentAngle += sliceAngle;
//     cx.lineTo(100, 100);
//     cx.fillStyle = result.color;
//     cx.fill();
// }

//Text
// let cx = document.querySelector("canvas").getContext("2d");
// cx.font = "15px Georgia";
// cx.fillStyle = "fuchsia";
// cx.fillText("I can draw a text, too!", 10, 50);

//Images
// let cx= document.querySelector("canvas").getContext("2d");
// let img = document.createElement("img");
// img.src = "img/hat.PNG";
// img.addEventListener("load", ()=>{
//     for (let x = 10; x < 200; x +=40){
//         cx.drawImage(img, x, 3);
//     }
// });

// let cx = document.querySelector("canvas").getContext("2d");
// let img = document.createElement("img");
// img.src = "img/bobx12.png";
// let spriteW = 24, spriteH = 30;
// img.addEventListener("load", ()=>{
//     let cycle = 0;
//     setInterval(()=>{
//         cx.clearRect(0, 0, spriteW, spriteH);
//         cx.drawImage(img,
//             //Source rectangle
//             cycle * spriteW, 0, spriteW, spriteH,
//          //destination rectangle
//             0,          0, spriteW, spriteH
//         );

//         cycle = (cycle + 1) % 8;
//     }, 120);
// });

// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// cx.moveTo(10, 90);
// cx.quadraticCurveTo(50, 5, 85, 90);
// cx.lineTo(80, 10);
// cx.lineTo(10, 10);
// cx.closePath();
// cx.stroke();

// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// cx.moveTo(12, 90);
// cx.bezierCurveTo(15, 30, 90, 30, 100, 90);
// cx.lineTo(95, 10);
// cx.lineTo(10, 10);
// cx.closePath();
// cx.stroke();

// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// cx.arc(50, 50, 40, 0, 7);
// cx.moveTo(55, 90);
// cx.arc(40, 160, 30, 0, 0.5 * Math.PI);
// cx.closePath();
// cx.stroke();

// let angles = [250, 250, 250, 250, 250, 250, 250, 250]
// let cx = document.querySelector("canvas").getContext("2d");
// let total = 2000;
// let currentAngle = -0.5 * Math.PI;
// for(let angle of angles){
//     let sliceAngle = (angle/total) * 2 * Math.PI;
//     cx.beginPath();
//     cx.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);
//     currentAngle += sliceAngle;
//     cx.lineTo(100, 100); 
//     cx.stroke();
// }

//Transformation
// let cx = document.querySelector("canvas").getContext("2d");
// cx.scale(3, .5);
// cx.rotate(0.1 * Math.PI);
// cx.translate(50, 50);
// cx.beginPath();
// cx.arc(50, 100, 40, 0, 7);
// cx.lineWidth = 3;
// cx.stroke();

function flipHorizontally(context, around){
    context.translate(around, 0);
    context.scale(-1, 1);
    context.translate(-around, 0);
}

// let cx = document.querySelector("canvas").getContext("2d");
// let img = document.createElement("img");
// img.src = "img/bobx12.png";
// let spriteW = 24, spriteH = 30;
// img.addEventListener("load", ()=>{
//     flipHorizontally(cx, 100 + spriteW / 2);
//     cx.drawImage(img, 0, 0, spriteW, spriteH,
//                     100, 0, spriteW, spriteH
//     );
// })

// let cx = document.querySelector("canvas").getContext("2d");
// function branch(length, angle, scale){
//     cx.fillRect(0, 0, 1, length);
//     if(length < 8) return;
//     cx.save();
//     cx.translate(0, length);
//     cx.rotate(-angle);
//     branch(length * scale, angle, scale);
//     cx.rotate(2 * angle);
//     branch(length * scale, angle, scale);
//     cx.restore();
    
// }

// cx.translate(300, 0);
// branch(60, 0.5, 0.8);

// let cx = document.querySelector("canvas").getContext("2d");
// function koch(x1, y1, x2, y2, depth){
//     if(depth === 0){
//         cx.lineTo(x2, y2);
//         return;
//     }
//     let dx = (x2 - x1) / 3, dy = (y2 -y1) / 3;
//     let x3 = x1 + dx, y3 = y1 + dy;
//     let x4 = x1 + 2 * dx,  y4 = y1 + 2 * dy;
//     let x5 = x3 + dy, y5 = y3 - dx;
    
//     cx.save();
//     // koch(x1, y1, x3, y3, depth-1);
//     // koch(x3, y3, x5, y5, depth-1);
//     // koch(x5, y5, x4, y4, depth-1);
//     // koch(x4, y4, x2, y2, depth-1);
// }

// cx.beginPath();
// cx.moveTo(100, 10);
// koch(100, 10, 200, 150, 4);
// koch(200, 150, 200, 150, 4);
// koch(0, 150, 100, 10, 4);
// cx.stroke();

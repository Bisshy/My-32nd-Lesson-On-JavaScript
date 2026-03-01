// let rect = document.querySelector("rect");
// rect.setAttribute("fill",  "cyan");
// rect.setAttribute("stroke", "cyan");

let canvas = document.querySelector("#rectangle");
let context = canvas.getContext("2d");
context.fillStyle = "red";
context.fillRect (10, 10, 100, 50);

let cx = canvas.getContext("2d");
cx.strokeStyle = "blue";
cx.strokeRect(120, 10, 50, 50);
cx.lineWidth = 5;
cx.strokeRect(200, 10, 50, 50);

//paths
cx.lineWidth = 1;
cx.strokeStyle = "black";
cx.beginPath();
for(let y = 70; y <=170; y+=10){
    cx.moveTo(10, y);
    cx.lineTo(90, y);
}
cx.stroke();

// let cx1 = document.querySelector("#trapezoid").getContext("2d");
// cx1.beginPath();
// cx1.moveTo(30, 10);
// cx1.lineTo(10, 70);
// cx1.lineTo(115, 70);
// cx1.lineTo(90, 10);
// cx1.closePath();
// cx1.stroke();

// let cx1 = document.querySelector("#trapezoid").getContext("2d");
// function drawTrapezoid(x,y, lbase, height, width, ltop){
//     cx1.beginPath();
//     cx1.moveTo(x, y);
//     cx1.lineTo(lbase, height);
//     cx1.lineTo(width, height);
//     cx1.lineTo(ltop, y);
//     cx1.closePath();
//     cx1.stroke();   
// }

// drawTrapezoid(30, 10, 10, 70, 115, 90);

let cx1 = document.querySelector("#trapezoid").getContext("2d");
function drawTrapezoid2(x, y, lw){
    cx1.beginPath();
    cx1.moveTo(x, y);
    cx1.lineTo(y, y + 60);
    cx1.lineTo(x + 85, y + 60);
    cx1.lineTo(x + 60, y);
    cx1.closePath();
    cx1.lineWidth = lw;
    cx1.stroke();
   
}
drawTrapezoid2(30, 10, 2);

let cx2 = document.querySelector("#curve").getContext("2d");
cx2.beginPath();
cx2.moveTo(10, 90);
cx2.quadraticCurveTo(60, 10, 90, 90);
cx2.lineTo(60, 10);
cx2.closePath()
cx2.stroke()

let cx3 = document.querySelector("#curve2").getContext("2d");
cx3.beginPath();
cx3.moveTo(10, 90);
cx3.bezierCurveTo(10, 10, 90, 10, 50, 90)
cx3.lineTo(90, 10);
cx3.lineTo(10, 10);
cx3.closePath();
cx3.stroke()

cx3.moveTo(190, 50)
cx3.arc(150, 50, 40, 0, 7);
cx3.arc(230, 50, 10, 0, 1.9 * Math.PI);
cx3.stroke();

const results = [
    {name:"Satisfied", count:1043, color:"Lightblue"},
    {name:"Neutral", count: 563, color:"lightgreen"},
    {name:"Unsatisfied", count:510, color:"pink"},
    {name:"No comment", count: 175, color:"silver"}
];

let cx4 = document.querySelector("#pie-chart").getContext("2d");
let total = results.reduce((sum, {count})=> sum + count, 0);
let currentAngle = -0.5 * Math.PI;
for(let result of results){
    let sliceAngle = (result.count / total) * 2 * Math.PI;
    cx4.beginPath();
    cx4.arc(120, 105, 100, currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    cx4.lineTo(100, 100);
    cx4.fillStyle = result.color;
    cx4.fill();
}

let cx5 = document.querySelector("#text").getContext("2d");
cx5.font = "28px Georgia";
cx5.fillStyle = "fuchsia";
cx5.textAlign = "start";
cx5.textBaseline = "bottom";
cx5.fillText("I can draw text, too!", 20, 40)

//Images

let cx6 = document.querySelector("#image").getContext("2d");
let img = document.createElement("img");
img.src = "img/bobx12.png";
img.addEventListener("load", () =>{
    for (let x = 10; x < 200; x +=30){
        cx6.drawImage(img, x, 10, 24, 30);
    }
});

let imgTwo = document.createElement("img");
imgTwo.src = "img/player.png";
imgTwo.addEventListener("load", ()=>{
    cx6.drawImage(imgTwo, 96, 0, 24, 30,
                            96, 40, 24, 30)
});

let imgThree = document.createElement("img");
imgThree.src ="img/player.png";
let spriteW = 24, spriteH = 30;
// imgThree.addEventListener("load", () => {
//     let cycle = 0;

//     setInterval(()=> {
//         cx6.clearRect(0, 0, spriteW, spriteH);
//         cx6.drawImage(imgThree, cycle + spriteW, 0, spriteW, spriteH,
//              60, spriteW, spriteH
//         );

//         cycle = (cycle + 1) % 8;
//     }, 120);
// })

    // let lastTime = 0
    // function animate(time){
    //     cx6.clearRect(0, 0, spriteW, spriteH);
    //     let cycle = Math.floor(time/120) % 8;
    //     cx6.drawImage(imgThree, cycle + spriteW, 0, spriteW, spriteH,
    //         60, 40, spriteW, spriteH
    //     );
    //     lastTime = time;
    //     requestAnimationFrame(animate);
    // }
    // imgThree.addEventListener("load", ()=> requestAnimationFrame(animate));


    // function animate(time, lastTime){
    //     let cycle = 0;
    //     if( lastTime != null ){
    //         cycle +=(time - lastTime) * 0.001;
    //         cycle = cycle % 8
    //     }
    //     cx6.clearRect(0, 0, spriteW, spriteH);
    //     let frameX =Math.floor(cycle) * spriteW;
    //     cx6.drawImage(imgThree, frameX, 0, spriteW, spriteH,
    //       60, 40, spriteW, spriteH
    //      );
        
    //     requestAnimationFrame(newTime => animate(newTime - lastTime));

    // }

    // imgThree.addEventListener("load", ()=> requestAnimationFrame(animate));

//Transformation

let cx7 = document.querySelector("#imageTwo").getContext("2d");
// cx7.scale(-1, 1);
// let imgFour = document.createElement("img");
// imgFour.src = "img/player.png";
// img.addEventListener("load", ()=>{
//     cx7.drawImage(imgFour, spriteW, 0, spriteW, spriteH,
//         -150, 10, spriteW, spriteH
//     );

// })

cx7.scale(1, 1);
cx7.translate(50, 50);
cx7.rotate(0.1 * Math.PI);

let imgFour = document.createElement("img");
imgFour.src = "img/player.png";
imgFour.addEventListener("load", ()=>{
    cx7.drawImage(imgFour, spriteW, 0, spriteW, spriteH,
        10, 10, spriteW, spriteH
    );

});

function flipHorizontally(context, around){
    context.translate(around, 0);
    context.scale(-1, 1);
    context.translate(-around, 0);
}
let cx8 = document.querySelector("#imageThree").getContext("2d");
let imgFive = document.createElement("img");
imgFive.src = "img/player.png";
imgFive.addEventListener("load", ()=>{
    let cycle = 0;
   setInterval(()=>{
    cycle = (cycle + 1) % 8
   flipHorizontally(cx8, 38 + spriteW/2);
    cx8.clearRect(0, 0, spriteW, spriteH);
    cx8.drawImage(imgFive, spriteW, 0, spriteW, spriteH,
        10, 10, spriteW, spriteH
    );
 
   
    },120)
});



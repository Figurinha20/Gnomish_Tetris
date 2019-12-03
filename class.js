
let audio = document.getElementById("ooh")
//comprimento de aresta de um quadrado SUPONHO porque n consigo testar
let unit = 40;

class Tetronimo {
    constructor() {
        this.x = W/2;
        this.y = unit;

        //definir tetronimo
        this.name = Math.floor(Math.random() * 7);

        //se a peça está parada
        this.set = false;

        this.color = "dead"


    }

    update() {
        //queda da peça
        this.y += unit;
    }

    //movement por listener??? Isto provavvelmente faz-se numa só função
    moverL(){
        this.x -= unit;
    }
    moveR(){
        this.x += unit;
    }

    draw() {
        switch (this.name) {
            case 0:
                //Peça 4x4
                ctx.fillStyle = "#f6d009"
                ctx.strokeStyle = "black"
                ctx.lineWidth = "3"
                ctx.beginPath()
                ctx.moveTo(this.x - unit, this.y)
                ctx.lineTo(this.x + unit, this.y)
                ctx.lineTo(this.x + unit, this.y + unit * 2)
                ctx.lineTo(this.x - unit, this.y + unit * 2)
                ctx.closePath()
                ctx.fill()
                ctx.stroke()
                break;

            case 1:
                //outra peça
                ctx.fillStyle = "#199ce6"
                ctx.beginPath()
                ctx.moveTo(this.x - unit * 2, this.y)
                ctx.lineTo(this.x + unit * 2, this.y)
                ctx.lineTo(this.x + unit * 2, this.y + unit)
                ctx.lineTo(this.x - unit * 2, this.y + unit)
                ctx.closePath()
                ctx.fill()
                ctx.stroke()
                break;

            case 2:
                //Peça S
                ctx.fillStyle = "#e91680"
                ctx.beginPath()
                ctx.moveTo(this.x + unit*2, this.y)
                ctx.lineTo(this.x, this.y)
                ctx.lineTo(this.x, this.y + unit)
                ctx.lineTo(this.x - unit, this.y + unit)
                ctx.lineTo(this.x - unit, this.y + unit*2)
                ctx.lineTo(this.x + unit, this.y + unit*2)
                ctx.lineTo(this.x + unit, this.y + unit)
                ctx.lineTo(this.x + unit, this.y + unit)
                ctx.closePath()
                ctx.fill()
                ctx.stroke()
                break;

            case 3:
                //Peça Z
                ctx.fillStyle = "#16e97f"
                ctx.beginPath()
                ctx.moveTo(this.x - unit*2, this.y)
                ctx.lineTo(this.x, this.y)
                ctx.lineTo(this.x, this.y + unit)
                ctx.lineTo(this.x + unit, this.y + unit)
                ctx.lineTo(this.x + unit, this.y + unit*2)
                ctx.lineTo(this.x - unit, this.y + unit*2)
                ctx.lineTo(this.x - unit, this.y + unit)
                ctx.lineTo(this.x - unit*2, this.y + unit)
                ctx.closePath()
                ctx.fill()
                ctx.stroke()
                break;

            case 4:
                //Peça L
                ctx.fillStyle = "#E21D29"
                ctx.beginPath()
                ctx.moveTo(this.x - unit, this.y)
                ctx.lineTo(this.x - unit, this.y + unit*3)
                ctx.lineTo(this.x + unit, this.y + unit*3)
                ctx.lineTo(this.x + unit, this.y + unit*2)
                ctx.lineTo(this.x, this.y + unit*2)
                ctx.lineTo(this.x, this.y)
                ctx.closePath()
                ctx.fill()
                ctx.stroke()
                break;

            case 5:
                //Peça J
                ctx.fillStyle = "#1DE2D6"
                ctx.beginPath()
                ctx.moveTo(this.x + unit, this.y)
                ctx.lineTo(this.x + unit, this.y + unit*3)
                ctx.lineTo(this.x - unit, this.y + unit*3)
                ctx.lineTo(this.x - unit, this.y + unit*2)
                ctx.lineTo(this.x, this.y + unit*2)
                ctx.lineTo(this.x, this.y)
                ctx.closePath()
                ctx.fill()
                ctx.stroke()
                break;

            case 6:
                //Peça T
                ctx.fillStyle = "#A711EE"
                ctx.beginPath()
                ctx.moveTo(this.x - unit, this.y)
                ctx.lineTo(this.x + unit*2, this.y)
                ctx.lineTo(this.x + unit*2, this.y + unit)
                ctx.lineTo(this.x + unit, this.y + unit)
                ctx.lineTo(this.x + unit, this.y + unit*2)
                ctx.lineTo(this.x, this.y + unit*2)
                ctx.lineTo(this.x, this.y + unit)
                ctx.lineTo(this.x - unit, this.y + unit)
                ctx.closePath()
                ctx.fill()
                ctx.stroke()
                break;

            default:
                break;
        }
    }

    collisions() {
        //help
    }

    slam(){
        //you know exactly what this is and what it means
        audio.play();
    }

}

let b = new Array();

function render() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, W, H);

    //create
    for (let i = 0; i < 5; i++) {
        b.push(new Ball(W / 2, H / 4));
    }

    //draw and update
    b.forEach(function (ball) {
        ball.draw();
        ball.update();
        ball.collisions();

    });

    for (let j = b.length - 1; j >= 0; j--) {
        if (b[j].out == true) {
            b.splice(j, 1)
        }

    }

    //new frame
    window.requestAnimationFrame(render);
}

render() //start animation
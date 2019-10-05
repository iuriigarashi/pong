


window.onload = function(){
    scene = document.getElementById('jogo');
    ctx = scene.getContext("2d")
    document.addEventListener("keydown", keyPush)
    setInterval(game, 80)
}

vel = 1
vx = vy = 0
px = py = 10
tp = 20
qp = 20
ax = Math.floor(Math.random()*qp)
ay = Math.floor(Math.random()*qp)


trail = []
tail = 5

pt = 0

function game(){
    px += vx
    py += vy
    if(px < 0){
        px = qp-1
    }  
    if(px > qp-1){
        px = 0
    }
    if(py < 0){
        py = qp-1
    }
    if(py > qp-1){
        py = 0
    }

    ctx.fillStyle = "black"
    ctx.fillRect(0,0,scene.width, scene.height)
    
    ctx.fillStyle = "red"
    ctx.fillRect(ax*tp, ay*tp, tp-1, tp-1)
    
    ctx.fillStyle = "green"
    for(i = 0; i < trail.length; i++){
        ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1, tp-1)
        if(trail[i].x == px && trail[i].y == py){
            console.log("game over")
            vx = xy = 0
            tail = 5
        }
    }

    trail.push({x:px, y:py})
    while(trail.length > tail){
        trail.shift()
    }

    if(ax==px && ay==py){
        tail++
        ax = Math.floor(Math.random()*qp)
        ay = Math.floor(Math.random()*qp)
    }
}

function keyPush(event){
    if(event.keyCode == 37 && pt != 39 && pt != 37){
        console.log("esquerda")
        vx = -vel
        vy = 0
    }
    if(event.keyCode == 38 && pt != 40 && pt != 38){
            console.log("cima")
            vx = 0
            vy = -vel
    }
    if(event.keyCode == 39 && pt != 37 && pt != 39){
            console.log("direita")
            vx = vel
            vy = 0
    }
    if(event.keyCode == 40 && pt != 38 && pt != 40){
            console.log("baixo")
            vx = 0
            vy = vel
    }

    pt = event.keyCode

}
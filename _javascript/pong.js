p1y = p2y = 40
pt = 5
ph = 50
bx = by = 0
bd = 5
xv = yv = 6
score1 = score2 = 0
ais = 3

window.onload = function () {
    c = document.getElementById('jogo')
    cc = c.getContext('2d')
    setInterval(game, 1000 / 30)
    c.addEventListener('mousemove', function (e) {
        p1y = e.clientY - ph / 2
    })
}

function reset_game() {
    bx = c.width / 2
    by = c.height / 2
    xv = -xv
    yv = 6
}

function game() {
    //movimenta a bola
    bx += xv
    by += yv
    
    if ((by < 0 && yv < 0) || (by > c.height && yv > 0) || (by > c.height && yv > 0)) {
        yv = -yv
    }
    //trata as colisões player-bola
    if (bx < 0) {
        if (by > p1y && by < p1y + ph) {
            xv = -xv
            dy = by - (p1y + ph / 2)
            yv = dy * 0.3
        } else {
            score2++
            reset_game()
        }
    }
    if (bx > c.width) {
        if (by > p2y && by < p2y + ph) {
            xv = -xv
            dy = by - (p2y + ph / 2)
            yv = dy * 0.3
        } else {
            score1++
            reset_game()
        }
    }
    //IA do player 2
    if (p2y + ph / 2 < by) {
        p2y += ais
    } else {
        p2y -= ais
    }
    //desenha o fundo
    cc.fillStyle = 'black'
    cc.fillRect(0, 0, c.width, c.height)
    //desenha a bola
    cc.fillStyle = 'white'
    cc.fillRect(bx - bd / 2, by - bd / 2, bd, bd)
    //imprime os scores
    cc.fillText(score1, 50, 50)
    cc.fillText(score2, c.width - 50, 50)
    //desenha os players
    cc.fillStyle = 'blue'
    cc.fillRect(0, p1y, pt, ph)
    cc.fillStyle = 'red'
    cc.fillRect(c.width - pt, p2y, pt, ph)
}
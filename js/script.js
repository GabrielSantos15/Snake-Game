const canvas = document.querySelector("#tela")
const ctx = canvas.getContext("2d")

canvas.width = 600;
canvas.height = 600;

let loopId

const snake = new Snake({
    body: [{ x: 0, y: 0 }, { x: 30, y: 0 }, { x: 60, y: 0 }],
    size: 30,
    color: "#0cff39",
    direction: "right"
}
)

const food = new Food({
    x: 300,
    y: 300,
    color: "#f00"
})

function game() {
    clearInterval(loopId)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    food.update()
    snake.update()
    
    loopId = setTimeout(game, 200)
}
game()

addEventListener("keydown", (key) => {
    if (key.code == "ArrowRight" && snake.direction != "left") {
        snake.direction = "right"
    } else if (key.code == "ArrowLeft" && snake.direction != "right") {
        snake.direction = "left"
    } else if (key.code == "ArrowUp" && snake.direction != "down") {
        snake.direction = "up"
    } else if (key.code == "ArrowDown" && snake.direction != "up") {
        snake.direction = "down"
    }
})
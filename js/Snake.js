class Snake {
    constructor({ body, size, color, direction }) {
        this.body = body;
        this.size = size;
        this.color = color;
        this.direction = direction;
    }
    update() {
        const head = this.body[this.body.length - 1]

        this.body.forEach((postion, index) => {
            ctx.shadowColor = "#090",
                ctx.shadowBlur = 5,
                ctx.fillStyle = this.color
            if (index == this.body.length - 1) {
                ctx.fillStyle = "#090"
            }
            ctx.fillRect(postion.x, postion.y, this.size, this.size)
        });

        if (head.x == food.x && head.y == food.y) {
            this.body.push({ x: food.x, y: food.y })
            food.randomPosition()
        }

        switch (this.direction) {
            case "right":
                this.body.push({ x: head.x + this.size, y: head.y })
                break
            case "left":
                this.body.push({ x: head.x - this.size, y: head.y })
                break
            case "up":
                this.body.push({ x: head.x, y: head.y - this.size })
                break
            case "down":
                this.body.push({ x: head.x, y: head.y + this.size })
                break
            default:
                return
        }
        this.body.shift()

    }
}
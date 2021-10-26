class Snake {
    constructor() {
        this.pos_x = 10;
        this.pos_y = 10;
        this.x_speed = 0;
        this.y_speed = 0;
    }

    update() {
        this.pos_x = this.pos_x + this.x_speed;
        this.pos_y = this.pos_y + this.y_speed;
    }

    show() {
        // Draw snake parts
        ctx.fillStyle = "#1DA9A2";
        for (let i = 0; i < snakeParts.length; i++) {
            const part = snakeParts[i];
            ctx.fillRect(part.pos_x * gridCount, part.pos_y * gridCount, gridSize, gridSize);
        }
        snakeParts.push(new SnakePart(this.pos_x, this.pos_y));
        while (snakeParts.length > tailLength) {
            snakeParts.shift();
        }

        // Draw snake head
        ctx.fillStyle = "#1DA9A2";
        ctx.fillRect(this.pos_x * gridCount, this.pos_y * gridCount, gridSize, gridSize);
    }

    changeDirection(x, y) {
        this.x_speed = x;
        this.y_speed = y;
    }
    
}

class SnakePart {
    constructor(x, y) {
        this.pos_x = x;
        this.pos_y = y;
    }
}

class Food {
    constructor() {
        this.pos_x = 5;
        this.pos_y = 5;
    }

    show() {
        ctx.fillStyle = "#D7008F";
        ctx.fillRect(this.pos_x * gridCount, this.pos_y * gridCount, gridSize, gridSize);
    }

    updateLocation() {
        this.pos_x = Math.floor(Math.random() * gridCount);
        this.pos_y = Math.floor(Math.random() * gridCount);
    }
}
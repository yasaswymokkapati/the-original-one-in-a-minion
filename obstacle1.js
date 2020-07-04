class Bomb{
    constructor(x, y, width, height){
        var options={
            isStatic : true
        }
        this.image = loadImage("images/bomb.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);

        if(this.body.position.x < 1600 && this.body.position.x > 800){
            this.body.position.x = this.body.position.x - 7;
        }
        if(this.body.position.x < 800 && this.body.position.y < 700){
            this.body.position.y = this.body.position.y + 7;
        }

    }
}
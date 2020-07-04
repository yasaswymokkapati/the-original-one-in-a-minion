class Player3 extends BaseClass{
    constructor(x, y, width, height){
        super(x, y, width, height);
        this.image = loadImage("images/kein 3.png");

        if(this.body.position.x > 800){
            this.image = loadImage("images/kevin 4.png");
        }
    }
}
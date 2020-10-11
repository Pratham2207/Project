class Target{
    constructor(x,y,width,height,angle){
        var options = {
            restitution : 0.5,             
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(angle.x,angle.y)
        rotate(angle);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
        pop();
    }
}
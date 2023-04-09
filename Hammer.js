class Hammer {
    constructor(x, y, w, h){
        var options = {
            'isStatic':false,
            'density':2,
            'friction': 1.0,
            'restitution':0.5
        };
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }
    display(){
        push()
        rectMode(CENTER)
        fill(128,128,128)
        rect(this.x,this.y,this.w, this.h);
        pop()
    }
}

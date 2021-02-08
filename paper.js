class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitition: 0.3,
            density:1.2,
            friction:0.5
        }
        this.radius=r;
        this.body=Bodies.circle(x,y,r,options);
    }
    display(){
        push();
        fill ("white");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop ();
    }
};
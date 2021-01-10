class Stone {
    constructor(x,y,r) {
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.image = loadImage ("stone.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body);
    }
    display() {
       var pos =this.body.position;
    //   rectMode(CENTER);
    //   image(this.image, pos.x, pos.y, this.width, this.height);


      push();
      translate(pos.x, pos.y);
      fill("gray")
      imageMode(CENTER);
      ellipseMode(RADIUS)
      image(this.image, 0, 0, this.r*2, this.r*2);
      pop();

    }
};
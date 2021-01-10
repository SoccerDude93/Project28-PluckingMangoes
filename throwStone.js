class ThrowStone {
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.01,
            length: 10
        }
        this.bodyA=body;
        this.pointB=anchor;
        this.throwStone = Constraint.create(options);
        World.add(world, this.throwStone);
    }

    attach(body) {
        this.throwStone.bodyA=body;
    }

    fly() {
        this.throwStone.bodyA=null;
    }


    display(){
                if (this.throwStone.bodyA) {
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
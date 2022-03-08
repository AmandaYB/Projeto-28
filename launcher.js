class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 3
        }
        this.bodyA = bodyA
        this.pointB = pointB
        this.launcher = Constraint.create(options)
        World.add(world,this.launcher)
    }
    return(body){
        this.launcher.bodyA = body
    }
    fly(){
        this.launcher.bodyA = null
    }
    display(){
        if(this.launcher.bodyA){
            line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x, this.pointB)
        }
    }
}
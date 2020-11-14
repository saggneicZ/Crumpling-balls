class dustbin
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.dustbinWidth=200;
        this.dustbinHeight=100;
        this.wallThickness=20;
        this.angle=0;


        this.bottomBody=Bodies.rectangle(this.x,this.y,dustbinWidth,this,wallThickness,(isStatic:true))
        this.leftwallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,(isStatic:true))
        Media.Body.setAngle(this.leftwallBody,this.angle);


        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
        Matter.Body.setangle(this.rightWallBody,-1*this.angle);
        world.add(world,this.bottomBody)
        world.add(world,this.leftWallBody)
        world.add(world,this.rightWallBody);
        
    }


        display(
    {


            var posBottom=this.botttomBody.position;
            var posLeft=this.leftWallBody.position;
            var posRight=this.rightWallBody.position;

            Push()

            translate(posLeft.x,posLedt.y);
            rectMode(CENTER)
        )
    }
}

class Hero
{
	constructor(x,y,r)
	{
		var options={
			frictionAir:1,
			density:1

			
			}
		this.x=x;
		this.y=y;
		this.r=r;
        this.image = loadImage("images/Superhero-01.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y-100);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
            imageMode(CENTER);
            image(this.image,0,0,this.r+150,this.r);
			pop()
			
	}

}
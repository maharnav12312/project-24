class Hammer {
constructor(x,y){

 var options={

'restitution':0.7,
'friction':1,
'density':10
 }
this.body= Bodies.rectangle(x,y,70,40,options);
this.width=50;
this.height=30;
World.add(world,this.body);

}
display(){

var pos=this.body.position;
pos.x=mouseX;
pos.y=mouseY;
var angle= this.body.angle;
push ();
translate(pos.x,pos.y);
rotate(angle);
fill("yellow");
strokeWeight(4);
stroke("black");
rect(0,0,this.width,this.height);
pop();
}


}
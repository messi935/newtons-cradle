class Rope{
       constructor(body1,body2,offset1,offset2){
           this.offset1=offset1;
           this.offset2=offset2;
           var options={
             bodyA:body1,
             bodyB:body2,
             pointB:{
                 x:this.offset1,
                 y:this.offset2
             }
           }
           this.rope= Constraint.create(options);
           World.add(world,this.rope);
       }


       display(){

        var pointA= this.rope.bodyA.position;
        var pointB= this.rope.bodyB.position;
        
        strokeWeight(2);
       
        line(pointA.x,pointA.y,pointB.x+this.offset1,pointB.y+this.offset2);
       }

       
       
           


}
class bin{
    constructor(x,y){
        var options =
        {
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.w=200;
        this.h=100;
         this.lbody = Bodies.rectangle(this.x-100, this.y,20,this.h,options);
         World.add(world,this.lbody);

         this.rbody = Bodies.rectangle(this.x+100, this.y,20,this.h,options);
         World.add(world,this.rbody);
         this.basebody = Bodies.rectangle(this.x, this.y+50,this.w,20,options);
         World.add(world,this.basebody);
          
        }
        display(){
            var posBottom=this.basebody.position;
			var posLeft=this.lbody.position;
            var posRight=this.rbody.position;
            push()
			translate(posLeft.x, posLeft.y);
            rectMode(CENTER)
            rect(0,0,20, this.h);
            pop()
            push()
			translate(posRight.x, posRight.y);
            rectMode(CENTER)
            rect(0,0,20, this.h);
            pop()
            push()
			translate(posBottom.x, posBottom.y);
            rectMode(CENTER)
            rect(0,0,200, 20);
			pop()
        }
    }
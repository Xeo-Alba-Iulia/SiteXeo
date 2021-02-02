SponsorsRobotAnimation = function()
{	
    var SponsorsBox0moveoffanifunc
    var SponsorsBox3moveoffanifunc
    var SponsorsBox2moveoffanifunc
    var SponsorsBox1moveoffanifunc;
	
	var wholearm = document.getElementById("wholearm");
    var	elbowsection = document.getElementById("elbowsection");
	var wristsection = document.getElementById("wristsection");
	var pincerright = document.getElementById("pincerright");
    var pincerleft = document.getElementById("pincerleft");
    var cog = document.getElementById("cog");

	var SponsorsBox0box = document.getElementById("SponsorsBox0box");
	var SponsorsBox1box = document.getElementById("SponsorsBox1box");
	var SponsorsBox2box = document.getElementById("SponsorsBox2box");
    var SponsorsBox3box = document.getElementById("SponsorsBox3box");
    
	var SponsorsBox0boxmoveoff = document.getElementById("SponsorsBox0boxmoveoff");
	var SponsorsBox1boxmoveoff = document.getElementById("SponsorsBox1boxmoveoff");
	var SponsorsBox2boxmoveoff = document.getElementById("SponsorsBox2boxmoveoff");
    var SponsorsBox3boxmoveoff = document.getElementById("SponsorsBox3boxmoveoff");
    
	var SponsorsBox0boxrise = document.getElementById("SponsorsBox0boxrise");
	var SponsorsBox1boxrise = document.getElementById("SponsorsBox1boxrise");
	var SponsorsBox2boxrise = document.getElementById("SponsorsBox2boxrise");
	var SponsorsBox3boxrise = document.getElementById("SponsorsBox3boxrise");
	
	TweenMax.set(wholearm, {transformOrigin:"49px 157px"})
	TweenMax.set(elbowsection, {transformOrigin:"40px 40px"})
	TweenMax.set(wristsection, {transformOrigin:"54px 23px"})
	TweenMax.set(pincerright, {transformOrigin:"19px 19px"})
	TweenMax.set(pincerleft, {transformOrigin:"54px 19px"})
	TweenMax.set([SponsorsBox1box, SponsorsBox2box, SponsorsBox3box], {display:"none"})
	TweenMax.set([SponsorsBox0box, SponsorsBox1box, SponsorsBox2box, SponsorsBox3box], {rotation:0})
	
	TweenMax.set(SponsorsBox0boxmoveoff, {display:"none"})
	TweenMax.set(cog, {transformOrigin:"18px 18px"}) 
	TweenMax.set(cog, {transformOrigin:"18px 18px"})

	var robotanimation = new TimelineMax({repeat:-1});
    
    // Sponsors Box 0
	robotanimation.to(SponsorsBox0box, 0.2, {display:"block"})
	.to(SponsorsBox0boxrise, 0.1, {opacity:0},"-=0.2")
	.call(SponsorsBox0boxriseresetfunc)
	.to(wholearm, 1.5, {rotation:-30, ease: Back.easeOut.config(1)})
	.to(elbowsection, 1.5, {rotation:30, ease: Back.easeOut.config(1)},"-=1.5")
	.to(wholearm, 1.5, {rotation:0, ease: Back.easeOut.config(1)})
	.to(elbowsection, 1.5, {rotation:-50, ease: Back.easeOut.config(1)},"-=1.5")
	.to(wristsection, 1.5, {rotation:50, ease: Back.easeOut.config(1)},"-=1.5")
	.to(pincerright, 0.2, {rotation:-20, ease: Back.easeOut.config(1)})
	.to(pincerleft, 0.2, {rotation:20, ease: Back.easeOut.config(1)},"-=0.2")
	.to(SponsorsBox0box, 0.3, {y:"+=23", rotation:-4, ease: Bounce.easeOut},"-=0.2")
	.call(SponsorsBox0moveoffanifunc, ["param1"], this, "-=0.05")
	.to(SponsorsBox0box, 0.3, {rotation:0, ease: Bounce.easeOut},"-=0.1")
	.to(SponsorsBox0box, 0.1, {display:"none"},"-=0.3")
	.to(SponsorsBox0boxmoveoff, 0.1, {display:"block"},"-=0.2")

	.to(wholearm, 1.5, {rotation:-40, ease: Back.easeOut.config(1)})
	.to(elbowsection, 1.5, {rotation:40, ease: Back.easeOut.config(1)},"-=1.5")
	.to(wristsection, 1.5, {rotation:0, ease: Back.easeOut.config(1)},"-=1.5")
	.to(wholearm, 1.5, {rotation:0, ease: Back.easeOut.config(1)})
	.to(elbowsection, 1.5, {rotation:0, ease: Back.easeOut.config(1)},"-=1.5")
	.to(pincerright, 0.2, {rotation:0, ease: Back.easeOut.config(1)})
	.to(pincerleft, 0.2, {rotation:0, ease: Back.easeOut.config(1)},"-=0.2")
	
	// Sponsors Box 3
	.to(SponsorsBox3box, 0.2, {display:"block"})
	.to(SponsorsBox3boxrise, 0.1, {opacity:0},"-=0.2")
	.call(SponsorsBox3boxriseresetfunc)
	.to(wholearm, 1.5, {rotation:-30, ease: Back.easeOut.config(1)})
	.to(elbowsection, 1.5, {rotation:30, ease: Back.easeOut.config(1)},"-=1.5")
	.to(wholearm, 1.5, {rotation:0, ease: Back.easeOut.config(1)})
	.to(elbowsection, 1.5, {rotation:-50, ease: Back.easeOut.config(1)},"-=1.5")
	.to(wristsection, 1.5, {rotation:50, ease: Back.easeOut.config(1)},"-=1.5")
	.to(pincerright, 0.2, {rotation:-20, ease: Back.easeOut.config(1)})
	.to(pincerleft, 0.2, {rotation:20, ease: Back.easeOut.config(1)},"-=0.2")
	.to(SponsorsBox3box, 0.3, {y:"+=23", rotation:-4, ease: Bounce.easeOut},"-=0.2")
	.call(SponsorsBox3moveoffanifunc, ["param1"], this, "-=0.05")
	.to(SponsorsBox3box, 0.3, {rotation:0, ease: Bounce.easeOut},"-=0.1")
	.to(SponsorsBox3box, 0.1, {display:"none"},"-=0.3")
	.to(SponsorsBox3boxmoveoff, 0.1, {display:"block"},"-=0.2")

	.to(wholearm, 1.5, {rotation:-40, ease: Back.easeOut.config(1)})
	.to(elbowsection, 1.5, {rotation:40, ease: Back.easeOut.config(1)},"-=1.5")
	.to(wristsection, 1.5, {rotation:0, ease: Back.easeOut.config(1)},"-=1.5")
	.to(wholearm, 1.5, {rotation:0, ease: Back.easeOut.config(1)})
	.to(elbowsection, 1.5, {rotation:0, ease: Back.easeOut.config(1)},"-=1.5")
	.to(pincerright, 0.2, {rotation:0, ease: Back.easeOut.config(1)})
	.to(pincerleft, 0.2, {rotation:0, ease: Back.easeOut.config(1)},"-=0.2")
	
	// Sponsors Box 2
	.to(SponsorsBox2box, 0.2, {display:"block"})
	.to(SponsorsBox2boxrise, 0.1, {opacity:0},"-=0.2")
	.call(SponsorsBox2boxriseresetfunc)
	.to(wholearm, 1.5, {rotation:-30, ease: Back.easeOut.config(1)})
	.to(elbowsection, 1.5, {rotation:30, ease: Back.easeOut.config(1)},"-=1.5")
	.to(wholearm, 1.5, {rotation:0, ease: Back.easeOut.config(1)})
	.to(elbowsection, 1.5, {rotation:-50, ease: Back.easeOut.config(1)},"-=1.5")
	.to(wristsection, 1.5, {rotation:50, ease: Back.easeOut.config(1)},"-=1.5")
	.to(pincerright, 0.2, {rotation:-20, ease: Back.easeOut.config(1)})
	.to(pincerleft, 0.2, {rotation:20, ease: Back.easeOut.config(1)},"-=0.2")
	.to(SponsorsBox2box, 0.3, {y:"+=23", rotation:-4, ease: Bounce.easeOut},"-=0.2")
	.call(SponsorsBox2moveoffanifunc, ["param1"], this, "-=0.05")
	.to(SponsorsBox2box, 0.3, {rotation:0, ease: Bounce.easeOut},"-=0.1")
	.to(SponsorsBox2box, 0.1, {display:"none"},"-=0.3")
	.to(SponsorsBox2boxmoveoff, 0.1, {display:"block"},"-=0.2")

	.to(wholearm, 1.5, {rotation:-40, ease: Back.easeOut.config(1)})
	.to(elbowsection, 1.5, {rotation:40, ease: Back.easeOut.config(1)},"-=1.5")
	.to(wristsection, 1.5, {rotation:0, ease: Back.easeOut.config(1)},"-=1.5")
	.to(wholearm, 1.5, {rotation:0, ease: Back.easeOut.config(1)})
	.to(elbowsection, 1.5, {rotation:0, ease: Back.easeOut.config(1)},"-=1.5")
	.to(pincerright, 0.2, {rotation:0, ease: Back.easeOut.config(1)})
	.to(pincerleft, 0.2, {rotation:0, ease: Back.easeOut.config(1)},"-=0.2")
	
	// Sponsors Box 1
	.to(SponsorsBox1box, 0.2, {display:"block"})
	.to(SponsorsBox1boxrise, 0.1, {opacity:0},"-=0.2")
	.call(SponsorsBox1boxriseresetfunc)
	.to(wholearm, 1.5, {rotation:-30, ease: Back.easeOut.config(1)})
	.to(elbowsection, 1.5, {rotation:30, ease: Back.easeOut.config(1)},"-=1.5")
	.to(wholearm, 1.5, {rotation:0, ease: Back.easeOut.config(1)})
	.to(elbowsection, 1.5, {rotation:-50, ease: Back.easeOut.config(1)},"-=1.5")
	.to(wristsection, 1.5, {rotation:50, ease: Back.easeOut.config(1)},"-=1.5")
	.to(pincerright, 0.2, {rotation:-20, ease: Back.easeOut.config(1)})
	.to(pincerleft, 0.2, {rotation:20, ease: Back.easeOut.config(1)},"-=0.2")
	.to(SponsorsBox1box, 0.3, {y:"+=23", rotation:-4, ease: Bounce.easeOut},"-=0.2")
	.call(SponsorsBox1moveoffanifunc, ["param1"], this, "-=0.05")
	.to(SponsorsBox1box, 0.3, {rotation:0, ease: Bounce.easeOut},"-=0.1")
	.to(SponsorsBox1box, 0.1, {display:"none"},"-=0.3")
	.to(SponsorsBox1boxmoveoff, 0.1, {display:"block"},"-=0.2")

	.to(wholearm, 1.5, {rotation:-40, ease: Back.easeOut.config(1)})
	.to(elbowsection, 1.5, {rotation:40, ease: Back.easeOut.config(1)},"-=1.5")
	.to(wristsection, 1.5, {rotation:0, ease: Back.easeOut.config(1)},"-=1.5")
	.to(wholearm, 1.5, {rotation:0, ease: Back.easeOut.config(1)})
	.to(elbowsection, 1.5, {rotation:0, ease: Back.easeOut.config(1)},"-=1.5")
	.to(pincerright, 0.2, {rotation:0, ease: Back.easeOut.config(1)})
	.to(pincerleft, 0.2, {rotation:0, ease: Back.easeOut.config(1)},"-=0.2")
	
    //cog animation	
	TweenMax.to(cog, 1.5, {rotation:360, repeat:-1, ease:Linear.easeNone})
	
    //moveoff functions	
    function SponsorsBox0moveoffanifunc()
    {
        SponsorsBox0moveoffani.play();
    }
        
    function SponsorsBox3moveoffanifunc()
    {
        SponsorsBox3moveoffani.play();
    }
        
    function SponsorsBox2moveoffanifunc()
    {
        SponsorsBox2moveoffani.play();
    }
        
    function SponsorsBox1moveoffanifunc()
    {
        SponsorsBox1moveoffani.play();
    }

    //moveoff animations	
    var SponsorsBox0moveoffani = new TimelineMax
    ({
        paused : true, onComplete : function()
        {
            this.pause(0)
        }
    });
    
    SponsorsBox0moveoffani.from(SponsorsBox0boxmoveoff, 0.1, {display:"none"})
    .to(SponsorsBox0boxmoveoff, 20, 
    {
        x : "+=3500px", ease : Power0.easeNone, onComplete : resetSponsorsBox0
    })
    .from(SponsorsBox3boxrise, 1, 
    {
        y : "+=65px", ease : Power0.easeNone
    },"-=18")
			
    var SponsorsBox3moveoffani = new TimelineMax
    ({
        paused : true, onComplete : function()
        {
            this.pause(0)
        }
    });

    SponsorsBox3moveoffani.from(SponsorsBox3boxmoveoff, 0.1, {display:"none"})
    .to(SponsorsBox3boxmoveoff, 20, 
    {
        x : "+=3500px", ease : Power0.easeNone, onComplete : resetSponsorsBox3
    })
    .from(SponsorsBox2boxrise, 1, 
    {
        y : "+=65px", ease : Power0.easeNone
    },"-=18");

    var SponsorsBox2moveoffani = new TimelineMax
    ({
        paused : true, onComplete : function()
        {
            this.pause(0)
        }
    });
   
    SponsorsBox2moveoffani.from(SponsorsBox2boxmoveoff, 0.1, {display:"none"})
    .to(SponsorsBox2boxmoveoff, 20, 
    {
        x : "+=3500px", ease : Power0.easeNone, onComplete : resetSponsorsBox2
    })
    .from(SponsorsBox1boxrise, 1, 
    {
        y : "+=65px", ease : Power0.easeNone
    },"-=18");
	
    var SponsorsBox1moveoffani = new TimelineMax
    ({
        paused : true, onComplete:function()
        {
            this.pause(0)
        }
    });
    
    SponsorsBox1moveoffani.from(SponsorsBox1boxmoveoff, 0.1, {display:"none"})
    .to(SponsorsBox1boxmoveoff, 20, 
    {
        x : "+=3500px", ease : Power0.easeNone, onComplete : resetSponsorsBox1
    })
    .from(SponsorsBox0boxrise, 1, 
    {
        y : "+=65px", ease : Power0.easeNone
    },"-=18");
}

//reset move off
function resetSponsorsBox0()
{
  	TweenMax.set(SponsorsBox0boxmoveoff, {x:"-=3500px", display:"none"});
}

function resetSponsorsBox3()
{
  	TweenMax.set(SponsorsBox3boxmoveoff, {x:"-=3500px", display:"none"})
}

function resetSponsorsBox2()
{
  	TweenMax.set(SponsorsBox2boxmoveoff, {x:"-=3500px", display:"none"})
}

function resetSponsorsBox1(){
  	TweenMax.set(SponsorsBox1boxmoveoff, {x:"-=3500px", display:"none"})
}

//reset rise
function SponsorsBox0boxriseresetfunc()
{
  	TweenMax.set(SponsorsBox0boxrise, {y:"+=65", opacity:1})
}

function SponsorsBox3boxriseresetfunc()
{
  	TweenMax.set(SponsorsBox3boxrise, {y:"+=65", opacity:1})
}
		
function SponsorsBox2boxriseresetfunc()
{
  	TweenMax.set(SponsorsBox2boxrise, {y:"+=65", opacity:1})
}		

function SponsorsBox1boxriseresetfunc()
{
  	TweenMax.set(SponsorsBox1boxrise, {y:"+=65", opacity:1})
}
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"TheOldGuitarist_atlas_", frames: [[0,0,800,1200],[0,1202,325,252],[327,1382,194,244],[163,1456,146,174],[0,1456,161,194],[327,1202,321,178]]}
];


// symbols:



(lib.Background = function() {
	this.initialize(ss["TheOldGuitarist_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Headimg = function() {
	this.initialize(ss["TheOldGuitarist_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.LeftFootimg = function() {
	this.initialize(ss["TheOldGuitarist_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.LeftHandimg = function() {
	this.initialize(ss["TheOldGuitarist_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.RightFootimg = function() {
	this.initialize(ss["TheOldGuitarist_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.RightHandimg = function() {
	this.initialize(ss["TheOldGuitarist_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.RightHand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.RightHandimg();
	this.instance.parent = this;
	this.instance.setTransform(-161,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.RightHand, new cjs.Rectangle(-161,-89,321,178), null);


(lib.RightFoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.RightFootimg();
	this.instance.parent = this;
	this.instance.setTransform(-81,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.RightFoot, new cjs.Rectangle(-81,-97,161,194), null);


(lib.LeftHand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.LeftHandimg();
	this.instance.parent = this;
	this.instance.setTransform(-73,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.LeftHand, new cjs.Rectangle(-73,-87,146,174), null);


(lib.LeftFoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.LeftFootimg();
	this.instance.parent = this;
	this.instance.setTransform(-97,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.LeftFoot, new cjs.Rectangle(-97,-122,194,244), null);


(lib.Head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Headimg();
	this.instance.parent = this;
	this.instance.setTransform(-163,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Head, new cjs.Rectangle(-163,-126,325,252), null);


// stage content:
(lib.TheOldGuitarist = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("_8SecondsSystemOfADownToxicity");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(240));

	// Head
	this.instance = new lib.Head();
	this.instance.parent = this;
	this.instance.setTransform(223.05,220.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,rotation:24.4513,x:217.95,y:190.9},29).to({regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-20.5483,x:228.4,y:225.9},60).to({regX:0.2,rotation:24.9163,x:221.5,y:192.85},60).to({regX:0.3,rotation:-25.3246,x:242.45,y:236.4},60).to({regX:0.4,regY:0.3,rotation:-0.4022,x:223.5,y:224.4},30).wait(1));

	// LeftHand
	this.instance_1 = new lib.LeftHand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(674.55,130.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-22.9641,x:649.55,y:149.4},24).to({x:640.65,y:180.65},30).to({rotation:-0.0192,x:663.85,y:163.7},20).to({rotation:-0.0192,x:673.65,y:134.25},45).to({rotation:14.9797,x:696,y:125.35},30).to({regX:0.1,regY:0.1,rotation:-0.0192,x:672.85,y:134.4},30).to({rotation:-0.0192,x:667.5,y:165.6},25).to({scaleX:0.9999,scaleY:0.9999,rotation:-9.7448,x:655.9},20).to({scaleX:1,scaleY:1,rotation:-0.4529,x:672,y:132.6},15).wait(1));

	// RightHand
	this.instance_2 = new lib.RightHand();
	this.instance_2.parent = this;
	this.instance_2.setTransform(399.1,598.85,1,1,0,0,0,-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-29.9992,x:383,y:552.45},19).to({rotation:22.9844,x:390.15,y:650.6},25).to({regX:-0.4,regY:0.1,rotation:-15.2442,x:400.05,y:573.1},25).to({rotation:14.7547,x:400,y:642.7},20).to({scaleX:0.9999,scaleY:0.9999,rotation:-42.7336,x:363.4,y:527.55},25).to({rotation:39.9907,x:377.75,y:673.95},30).to({regX:-0.3,regY:0.3,rotation:-11.9616,x:400.05,y:584.4},25).to({regX:-0.4,rotation:3.0373,x:400,y:600.1},15).to({regX:-0.3,regY:0.4,rotation:-26.9616,x:384.4,y:556.55},20).to({regX:-0.4,regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:9.0059,x:401.65,y:626.45},25).to({regX:-0.3,rotation:-0.9899,x:401.8,y:601.95},10).wait(1));

	// RightFoot
	this.instance_3 = new lib.RightFoot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(601.6,1103,1,1,0,0,0,-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:18.4568,x:581.6,y:1113},14).to({rotation:0,x:601.6,y:1103},15).to({regY:0.1,rotation:23.7257,x:579.4,y:1121.7},15).to({regY:0,rotation:0,x:601.6,y:1103},15).to({regY:0.1,rotation:23.9743,x:577.95,y:1119.5},15).to({regY:0,rotation:0,x:601.6,y:1103},15).to({rotation:14.9992,x:581.6,y:1111.55},15).to({rotation:0,x:601.6,y:1103},15).to({rotation:14.9992,x:580.15,y:1110.8},15).to({rotation:0,x:601.6,y:1103},15).to({regY:0.1,rotation:29.9992,x:562.9,y:1115.25},15).to({regY:0,rotation:0,x:601.6,y:1103},15).to({rotation:14.9992,x:582.25,y:1112.2},15).to({rotation:0,x:601.6,y:1103},15).to({rotation:14.9992,x:588,y:1112.95},15).to({regX:-0.4,regY:0.1,rotation:0.3209,x:595.25,y:1102.65},15).wait(1));

	// LeftFoot
	this.instance_4 = new lib.LeftFoot();
	this.instance_4.parent = this;
	this.instance_4.setTransform(105.15,1078);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-14.9992,x:128.75,y:1091.6},14).to({rotation:0,x:105.15,y:1078},15).to({rotation:-23.4615,x:137.55,y:1097.3},15).to({rotation:0,x:105.15,y:1078},15).to({rotation:-23.9743,x:130.2,y:1100.9},15).to({rotation:0,x:105.15,y:1078},15).to({rotation:-19.4886,x:132.15,y:1095.9},15).to({rotation:0,x:105.15,y:1078},15).to({rotation:-20.9458,x:130.9,y:1098.05},15).to({rotation:0,x:105.15,y:1078},15).to({rotation:-14.9992,x:134.5,y:1093},15).to({rotation:0,x:105.15,y:1078},15).to({rotation:-18.7225,x:123,y:1093.75},15).to({rotation:0,x:105.15,y:1078},15).to({rotation:-23.2007,x:128.75,y:1100.15},15).to({rotation:0,x:105.15,y:1078},15).wait(1));

	// Background
	this.instance_5 = new lib.Background();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(391.6,600,408.4,651.8);
// library properties:
lib.properties = {
	id: '1185BD469C0BC34581F2B3C0C13FFAA9',
	width: 800,
	height: 1200,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/TheOldGuitarist_atlas_.png", id:"TheOldGuitarist_atlas_"},
		{src:"sounds/_8SecondsSystemOfADownToxicity.mp3", id:"_8SecondsSystemOfADownToxicity"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1185BD469C0BC34581F2B3C0C13FFAA9'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
(function(){var d,k,f,c,e,l,m,h,i,g;g=function(a){return a===0?"00":0<=a&&a<=15?"0"+a.toString(16):a.toString(16)};d=function(a,b,j){return Math.min(Math.max(a,b),j)};e=function(a,b){return function(){return a.apply(b,arguments)}};k=function(a){return a};m=function(a){return 3*a*a-2*a*a*a};h=function(a){this._startedAt=(new Date).getTime();this._duration=a._duration;this._callback=a._callback;this._easing=a._easing||k;this._tick();return this};h.prototype._tick=function(){var a;a=d(((new Date).getTime()-
this._startedAt)/this._duration,0,1);this._callback(a);a<1&&setTimeout(e(this._tick,this),1)};l=function(){var a;a=Math.random();return a===1?0:a};f=function(a,b){return Math.floor(l()*(b-a+1))+a};c=function(a,b,j){this.r=d(Math.round(a),0,255);this.g=d(Math.round(b),0,255);this.b=d(Math.round(j),0,255);return this};c.prototype._interpolatedToward=function(a,b){return new c(this.r+(a.r-this.r)*b,this.g+(a.g-this.g)*b,this.b+(a.b-this.b)*b)};c.prototype._webString=function(){return"#"+g(this.r)+g(this.g)+
g(this.b)};i=function(){this._newColor=this._oldColor=new c(255,255,255);this._changeColor();return this};i.prototype._changeColor=function(){this._oldColor=this._newColor;this._newColor=new c(f(0,255),f(0,255),f(0,255));new h({_duration:250,_callback:e(function(a){document.body.style.background=this._oldColor._interpolatedToward(this._newColor,a)._webString()},this),_easing:m,_onComplete:e(function(){document.title=this._newColor._webString()},this)});setTimeout(e(arguments.callee,this),1E3)};window.colorflash=
{main:function(){new i}}})();
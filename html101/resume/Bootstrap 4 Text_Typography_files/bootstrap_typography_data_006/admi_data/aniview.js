(function(n){n.avPlayer=function(a){function B(){var c=document.getElementById(a.position).parentNode||"BODY"!=document.getElementById(a.position).parentNode.tagName?document.getElementById(a.position).parentNode.clientWidth:document.body.clientWidth||screen.width;4E3<Math.floor(c)&&(c=4E3);var d=Math.floor(c/1.777);0==a.height&&100==a.width&&(a.height=d,a.width=c,c=(navigator&&navigator.userAgent&&-1<navigator.userAgent.toLowerCase().indexOf("firefox")?0:document.documentElement.clientHeight)||document.body.clientHeight||
screen.height,a.height>c&&!a.autoHeight&&(a.height=c,a.width=Math.floor(1.77*c)));a.width=Math.floor(a.width);a.height=Math.floor(a.height)}function F(c){e.subscribe(function(a,k,p){var d;for(d=0;d<arguments.length;d++);for(d=0;d<q[c].length;d++)q[c][d].charAt(0).toUpperCase(),q[c][d].slice(1);if("AdEvent"==c&&"function"==typeof b.onEvent)b.onEvent(a,k,p);if("AdLoaded"==c&&(b.AdLoaded=!0,"function"==typeof b.onLoad))b.onLoad();if("AdImpression"==c&&(b.playing=!0,"function"==typeof b.onPlay))b.onPlay(a);
if("AdVideoFirstQuartile"==c&&"function"==typeof b.onPlay25)b.onPlay25();if("AdVideoMidpoint"==c&&"function"==typeof b.onPlay50)b.onPlay50();if("AdVideoThirdQuartile"==c&&"function"==typeof b.onPlay75)b.onPlay75();if("AdVideoComplete"==c&&(b.playing=!1,"function"==typeof b.onPlay100))b.onPlay100();if("AdClickThru"==c&&"function"==typeof b.onClick)b.onClick();if("AdPaused"==c&&"function"==typeof b.onPause)b.onPause();if("AdPlaying"==c&&"function"==typeof b.onResume)b.onResume();if("AdError"==c&&(b.playing=
!1,"function"==typeof b.onError))b.onError(a);if("AdStopped"==c&&(b.playing=!1,"function"==typeof b.onStopped))b.onStopped();if("AdSkipped"==c&&(b.playing=!1,"function"==typeof b.onSkip))b.onSkip();if("AdClosed"==c&&(b.playing=!1,"function"==typeof b.onClose))b.onClose(a);if("AdVolumeChange"==c){d=b.muted;"undefined"!==typeof e.adVolume&&(b.muted=!(0<e.adVolume));if(d==b.muted)return;"function"!=typeof b.onUnmute||b.muted?"function"==typeof b.onMute&&b.muted&&(b.onMute(),b.muted=!0):(b.onUnmute(),
b.muted=!1)}if("ContentImpression"==c&&(b.contentPlaying=!0,"function"==typeof b.onContentPlay))b.onContentPlay(a);if("ContentComplete"==c&&(b.contentPlaying=!1,"function"==typeof b.onContentPlay100))b.onContentPlay100();if("ContentPaused"==c&&"function"==typeof b.onContentPaused)b.onContentPaused();if("ContentPlaying"==c&&"function"==typeof b.onContentPlaying)b.onContentPlaying();if("ContentClick"==c&&"function"==typeof b.onContentClick)b.onContentClick();if("Inventory"==c&&"function"==typeof b.onInventory)b.onInventory();
if("InventoryRequest"==c&&"function"==typeof b.onInventoryRequest)b.onInventoryRequest(a);w.dispatch(c,a,k,p)},c)}var w=new function(){var a={};this.subscribe=function(c,b,e){a[b]||(a[b]=[]);a[b].push({callback:c,context:e})};this.unsubscribe=function(c,b){if("*"==b)a={};else if(a[b])if("*"==c)a[b]=[];else for(var d=0;d<a[b].length;d++)if(a[b][d].callback===c){a[b].splice(d,1);break}};this.dispatch=function(c,b,e,f){if(a[c])for(var d=0;d<a[c].length;d++)if(a[c][d]&&"function"===typeof a[c][d].callback)try{a[c][d].callback.call(a[c][d].context,
b,e,f)}catch(t){}}},e,u;var b=this;b.AdLoaded=!1;b.playing=!1;b.contentPlaying=!1;b.muted=!0;var l=null,v=null,C=null,x="track1.aniview.com";a.publisherId&&(a.publisherId=a.publisherId.trim());a.channelId&&(a.channelId=a.channelId.trim());a.trackDomain&&(x=a.trackDomain);if(a.adServerDomain&&a.wl){var y=a.adServerDomain.indexOf(".");-1<y&&(x=a.adServerDomain.substring(0,y)+"t"+a.adServerDomain.substring(y,100))}(new Image).src="https://"+x+"/track?pid="+a.publisherId+"&cid="+a.channelId+"&e=playerStarted&cb="+
Date.now();var q={AdLoaded:[],AdStarted:[],AdStopped:[],AdSkipped:[],AdClosed:[],AdSkippableStateChange:["adSkippableState"],AdSizeChange:["adWidth","adHeight"],AdLinearChange:["adLinear"],AdDurationChange:["adDuration","adRemainingTime"],AdExpandedChange:["adExpanded"],AdRemainingTimeChange:["adRemainingTime"],AdVolumeChange:["adVolume"],AdImpression:[],AdVideoStart:[],AdVideoFirstQuartile:[],AdVideoMidpoint:[],AdVideoThirdQuartile:[],AdVideoComplete:[],AdClickThru:[],AdInteraction:[],AdUserAcceptInvitation:[],
AdUserMinimize:[],AdUserClose:[],AdPaused:[],AdPlaying:[],AdLog:[],AdError:[],ContentImpression:[],ContentComplete:[],ContentPaused:[],ContentPlaying:[],ContentClick:[],Inventory:[],InventoryRequest:[],AdEvent:[]};document.getElementById("videoSlot");if(g&&g.parentNode){g.parentNode.removeChild(g);var g=null}g=document.createElement("iframe");g.setAttribute("id","AVLoader"+a.position);g.style.display="none";g.src="about:blank";var G=function(){var c;if(a.baseJsUrl||""==a.baseJsUrl)var b=a.baseJsUrl;
else b="https://player.aniview.com/script/6.1/",a.bundle=!1;b=a.bundle?b+"av.js":b+"AVmanager.js?v=1.0&type=s&pid="+a.publisherId;try{u=g.contentWindow.document.createElement("script");u.src=b;u.type="text/javascript";var k=function(){if("function"===typeof g.contentWindow.getVPAIDAd){e=g.contentWindow.getVPAIDAd();for(c in q)q.hasOwnProperty(c)&&F(c);B();"undefined"===typeof a.hideControls&&(a.hidecontrols=!1);a.slot=document.getElementById(a.position);a.videoSlot=document.getElementById("videoSlot");
a.videoSlotCanAutoPlay=!0;a.getviewability=C;e.initAd(a.width,a.height,"normal","","",a)}};u.onload=function(){k()};g.contentWindow.document.body.appendChild(u)}catch(p){}};b.play=function(){if(!b.playCalled){b.playCalled=!0;document.body&&"function"===typeof document.body.appendChild?document.body.appendChild(g):document.getElementById(a.position).appendChild(g);var c=g.contentWindow.document.open();g.contentWindow.avCallback=G;c.write('<html><body onload="window.avCallback();"></body></html>');
g.contentWindow.document.close()}};b.startAd=function(){b.AdLoaded&&e.startAd()};b.setWaterfallState=function(a,b){e&&"function"===typeof e.setWaterfallState&&e.setWaterfallState(a,b)};var D=!1;b.unmute=function(a){function c(c){c&&(D=!0,e.setAdVolume(a?a:1))}if(e)if(0==a||D||-1==navigator.userAgent.toLowerCase().indexOf("chrome")||-1==navigator.vendor.toLowerCase().indexOf("google"))e.setAdVolume(a?a:1);else{var b=document.createElement("video");b.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAthtZGF0AAACrQYF//+p3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ1MyBlYTBjYTUxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD00IHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MiBrZXlpbnQ9MjUwIGtleWludF9taW49MjUgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIzLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IGlwX3JhdGlvPTEuNDAgYXE9MToxLjAwAIAAAAAPZYiEAC///vYp+BTXMDH/AAAACEGaIWxCv/7AAAADCW1vb3YAAABsbXZoZAAAAAAAAAAAAAAAAAAAA+gAAABQAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAI0dHJhawAAAFx0a2hkAAAAAwAAAAAAAAAAAAAAAQAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAACAAAAAgAAAAAAJGVkdHMAAAAcZWxzdAAAAAAAAAABAAAAUAAAAAAAAQAAAAABrG1kaWEAAAAgbWRoZAAAAAAAAAAAAAAAAAAAMgAAAAQAVcQAAAAAAC1oZGxyAAAAAAAAAAB2aWRlAAAAAAAAAAAAAAAAVmlkZW9IYW5kbGVyAAAAAVdtaW5mAAAAFHZtaGQAAAABAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAEXc3RibAAAAJdzdHNkAAAAAAAAAAEAAACHYXZjMQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAACAAIASAAAAEgAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj//wAAADFhdmNDAfQACv/hABhn9AAKkZsr8fH4CIAAAAMAgAAAGQeJEssBAAZo6+PESEQAAAAYc3R0cwAAAAAAAAABAAAAAgAAAgAAAAAUc3RzcwAAAAAAAAABAAAAAQAAABxzdHNjAAAAAAAAAAEAAAABAAAAAgAAAAEAAAAcc3RzegAAAAAAAAAAAAAAAgAAAsQAAAAMAAAAFHN0Y28AAAAAAAAAAQAAADAAAABhdWR0YQAAAFltZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAACxpbHN0AAAAJKl0b28AAAAcZGF0YQAAAAEAAAAATGF2ZjU2LjAuMTAw";
b.setAttribute("playsinline",!0);b.setAttribute("webkit-playsinline",!0);b.style.display="none";document.body.appendChild(b);b.muted=!1;(b=b.play())?(b.then(function(){c(!0)}).catch(function(a){c(!1)}),setTimeout(function(){c(!1)},1E3)):c(!1)}};b.mute=function(){try{e&&e.setAdVolume(0)}catch(c){}};b.pause=function(){e&&e.pauseAd()};b.resume=function(){e&&e.resumeAd()};b.close=function(a){e&&"function"===typeof e.stopAd&&e.stopAd();setTimeout(function(){try{g&&(document.body.removeChild(g),e=g=null)}catch(d){}},
(a||3E3)+1)};b.getEvents=function(){var a=[],b;for(b in q)a.push(b);return a};b.updateGui=function(a){try{if("object"==typeof a)for(var c in a){var b=c.toLowerCase();g.contentWindow.AV_PlayerGui.config[b]=a[c];g.contentWindow.AV_PlayerGui.config[c]=a[c];"showTimeline"==c&&"function"===typeof g.contentWindow.AV_PlayerGui.showTimeline&&g.contentWindow.AV_PlayerGui.showTimeline(a[c])}}catch(p){}};b.resize=function(a,b,k){k||(k="normal");e&&e.resizeAd(Math.floor(a),Math.floor(b),k)};b.getAdDuration=function(){if(e)return e.getAdDuration()};
b.getAdRemainingTime=function(){if(e)return e.getAdRemainingTime()};b.getAdVolume=function(){if(e)return e.getAdVolume()};b.setAdVolume=function(a){if(e)return e.setAdVolume(a)};b.getAdCompanions=function(){if(e)return e.getAdCompanions()};b.seek=function(a){if(e)return e.seekAd(a)};b.getContentPaused=function(){if(e)return e.getContentPaused()};this.pauseContent=function(){if(e)return e.pauseContent()};this.resumeContent=function(){if(e)return e.resumeContent()};this.setContentVolume=function(a){if(e)return e.setContentVolume(a)};
this.on=function(a,b,e){w.subscribe(b,a,e)};this.off=function(a,b){w.unsubscribe(b,a)};var E=function(){function b(){var b=t.getVieabilityInfo(f.el,f.wnd,f.iframe?f.baseEl:null),c=b.vertical.value*b.horizontal.value,d=b.vertical.state;a.vitab&&f.wnd&&f.wnd.document&&"hidden"===f.wnd.document.visibilityState&&(c=0,d="OUT_TAB");return{inView:c>g,ratio:c,state:d,distance:b.vertical.distance}}function d(){var a=b();e&&e(a.inView,a.ratio,a.state,a.distance)}var e=null,g=.5,f=null,h=!1,t=this;this.checkViewability=
function(){d()};this.start=function(a,b,c,k){if(h)return!1;a:{var r=null;a="object"==typeof a?a:document.getElementById(a);try{if(r=n.frameElement)for(var z,m=n;m!==n.top;){z=r.ownerDocument;m=z.defaultView||z.parentWindow;if(m===n.top){var p=m;var A=r;break}r=m.frameElement}}catch(J){h=!0;f=null;break a}if(null==r){A=a;if(!A){h=!0;f=null;break a}p=n}f={el:A,wnd:p,baseEl:a,iframe:null!=r&&k}}if(!f)return!1;c&&(g=c);b&&(f.wnd.addEventListener("resize",d,!0),f.wnd.addEventListener("scroll",d,!0),e=
b,setTimeout(d,10));return!0};this.stop=function(){e&&(f.wnd.removeEventListener("resize",d,!0),f.wnd.removeEventListener("scroll",d,!0),e=null)};this.get=function(a,c){return!h&&f?b():{inView:!1,ratio:0,state:"UNKNOWN"}};this.getHorizontalViewability=function(a,b){b=b.innerWidth;var c=a.getBoundingClientRect().left;a=a.getBoundingClientRect().right;var d=a-c;return c>b?{value:0,state:"OUT_RIGHT"}:0>=a?{value:0,state:"OUT_LEFT"}:0<=c&&a<=b?{value:1,state:"IN_HVIEW"}:0>c&&a>b?{value:b/d,state:"LR_TRUNC"}:
0>c&&a<=b?{value:a/d,state:"L_TRUNC"}:0<=c&&a>b?{value:(b-c)/d,state:"R_TRUNC"}:{value:0,state:"OUT"}};this.getVerticalViewability=function(a,b,c){b=b.innerHeight;var d=a.getBoundingClientRect().top;a=a.getBoundingClientRect().bottom;var e=a-d;c&&(d+=c.getBoundingClientRect().top,a=d+(c.getBoundingClientRect().bottom-c.getBoundingClientRect().top),e=a-d);return d>b?{value:0,state:"OUT_BOTTOM",out:-1}:0>=a?{value:0,state:"OUT_TOP",out:-1}:0<=d&&a<=b?{value:1,state:"IN_VVIEW",out:0,distance:b-d}:0>
d&&a>b?{value:b/e,state:"BT_TRUNC",out:-d+a-b}:0>d&&a<=b?{value:a/e,state:"T_TRUNC",out:-d}:0<=d&&a>b?{value:(b-d)/e,state:"B_TRUNC",out:a-b}:{value:0,state:"OUT",out:-1}};this.getVieabilityInfo=function(a,b,c){return{vertical:t.getVerticalViewability(a,b,c),horizontal:t.getHorizontalViewability(a,b,c)}}};this.startViewability=function(a,b,e,g){l||(l=new E);return l.start(a,b,e,g)};this.stopViewability=function(){l&&l.stop()};this.getViewability=function(){if(l)return l.get()};C=function(a,b,e){if(a)return v||
(v=new E,v.start(a,b,e)),v.get();v.stop()};(function(){var a=void 0,d=void 0;"undefined"!==typeof document.hidden?(a="hidden",d="visibilitychange"):"undefined"!==typeof document.webkitHidden?(a="webkitHidden",d="webkitvisibilitychange"):"undefined"!==typeof document.mozHidden?(a="mozHidden",d="mozvisibilitychange"):"undefined"!==typeof document.msHidden&&(a="msHidden",d="msvisibilitychange");a&&document.addEventListener(d,function(c){document[a]&&b.mute()},!1)})();var H={addClass:function(b,d){(a.sticky&&
0<a.sticky.size||a.floating&&0<a.floating.size)&&b.style.visibility&&(d+=";visibility:"+b.style.visibility+";");b.style.cssText=d},setfloatingCSS:function(){this.floatingCSS||(a.floating.size||(a.floating.size=.5),a.floating.right||(a.floating.right=0),a.floating.bottom||(a.floating.bottom=0),this.floatingCSS=a.floating.floatingCSS||"z-index:10000001;position:fixed; bottom:"+a.floating.bottom+"px; right:"+a.floating.right+"px; -webkit-transform:scale("+a.floating.size+"); -webkit-transform-origin:bottom right; transform:scale("+
a.floating.size+"); transform-origin:bottom right")},setStickyCSS:function(){if(!this.stickyCSS){var b=.5,d=0,e=0,g=0,f=0;a.sticky.size&&(b=a.sticky.size);a.sticky.right&&(d=a.sticky.right);a.sticky.bottom&&(e=a.sticky.bottom);a.sticky.top&&(g=a.sticky.top);a.sticky.left&&(f=a.sticky.left);"string"!==typeof a.sticky.position&&(a.sticky.position="");switch(a.sticky.position.toLowerCase()){case "bottom-right":this.stickyCSS="z-index:10000001;position:fixed; bottom:"+e+"px; right:"+d+"px; -webkit-transform:scale("+
b+"); -webkit-transform-origin:bottom right; transform:scale("+b+"); transform-origin:bottom right";break;case "bottom-left":this.stickyCSS="z-index:10000001;position:fixed; bottom:"+e+"px; left:"+f+"px; -webkit-transform:scale("+b+"); -webkit-transform-origin:bottom left; transform:scale("+b+"); transform-origin:bottom left";break;case "top-left":this.stickyCSS="z-index:10000001;position:fixed; top:"+g+"px; left:"+f+"px; -webkit-transform:scale("+b+"); -webkit-transform-origin:top left; transform:scale("+
b+"); transform-origin:top left";break;case "top-right":this.stickyCSS="z-index:10000001;position:fixed; top:"+g+"px; right:"+d+"px; -webkit-transform:scale("+b+"); -webkit-transform-origin:top right; transform:scale("+b+"); transform-origin:top right"}}},getPlaceholderWidth:function(b){b=b.parentNode||"BODY"!=b.parentNode.tagName?b.parentNode.clientWidth:document.body.clientWidth||screen.width;4E3<b&&(b=4E3);100!=a.width&&0!=a.height?b=a.width:(a.height=Math.floor(b/1.777),a.width=b);return b},hidePlayer:function(c,
d,e){c&&(c.style.width=this.getPlaceholderWidth(c)+"px",c.style.height="1px",e?setTimeout(function(){b.playing||(c.style.opacity=0)},1E3):c.style.opacity=0,a.sticky&&0<a.sticky.size||a.floating&&0<a.floating.size)&&(d.style.visibility="hidden")},showPlayer:function(c,d){var e=!1,g=!1;a.floating&&0<a.floating.size&&(e=!0);a.sticky&&0<a.sticky.size&&(g=!0);if(g||e)d.style.visibility="";g||(c&&(!e||e&&"OUT_TOP"!==b.viewState&&"T_TRUNC"!==b.viewState)&&(c.style.width=this.getPlaceholderWidth(c)+"px",
c.style.height=a.height+"px"),b.resize(a.width,a.height),d.style.zIndex=a.maxzindex||"9999999");c&&(c.style.opacity="")},startAd:function(){this.playerInView&&this.playerLoadedFirstTime&&!a.clickToPlay&&b.startAd()},startViewability:function(c){var d=this,e=!1,g=!1;a.floting&&!a.floating&&(a.floating=a.floting);if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||
/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,
4)))g=!0;a.preloader||(a.preloader={});B();var f=document.querySelector("#"+a.position),h="";"bottomup"==a.openTransition&&(h="position:absolute;bottom:0;",c.parentNode.style.position="relative");c&&d.addClass(c,"overflow:hidden; -webkit-transition:1s ease height; transition:1s ease height;opacity:0;"+h);a.floating&&0<a.floating.size&&(a.floatPos||(a.floatPos=f),d.setfloatingCSS());a.sticky&&0<a.sticky.size&&(a.floatPos||(a.floatPos=f),a.playOnView=!1,d.setStickyCSS());(a.playOnView&&!a.autoPlay&&
!a.showPlayer||a.openAnim)&&d.hidePlayer(c,f);a.showPlayer&&d.showPlayer(c,f);b.on("AdLoaded",function(){d.playerLoadedFirstTime=!0;d.startAd()});b.on("AdImpression",function(){c&&(c.style.opacity="");a.sticky&&0<a.sticky.size&&""!=a.preloader.type&&d.addClass(f,d.stickyCSS);d.showPlayer(c,f);a.unMuteOnMouseEnter&&!g&&(f.addEventListener("mouseenter",function(a){setTimeout(function(){b.unmute()},5)}),f.addEventListener("mouseleave",function(a){setTimeout(function(){b.mute()},5)}));a.pauseOnBlur&&
!g&&n.addEventListener("blur",function(){setTimeout(function(){b.pause()},500)});if(a.playOnView)try{l.checkViewability()}catch(t){}});b.on("AdVideoComplete",function(){a.lastFrame||a.preloader.type||d.hidePlayer(c,f,!0);0==a.autoPlayLoop&&(d.startAdFirstTime=!1,e&&d.startAd())});b.on("AdSkipped",function(){(!a.preloader||"content"!=a.preloader.type&&"Image"!=a.preloader.type&&"js"!=a.preloader.type)&&d.hidePlayer(c,f,!0)});b.on("AdClosed",function(){a.closeevent?(d.addClass(f,""),d.showPlayer(c,
f),a.floating.size=0):d.hidePlayer(c,f)});b.on("AdError",function(b){b=b&&b.errorlimit;a.preloader.type||a.passbackUrl?a.passbackUrl&&(a.playOnView||a.passbackpriority)&&b&&d.showPlayer(c,f):d.hidePlayer(c,f)});a.playOnView?(h=.5,a.inViewRatio&&(h=a.inViewRatio),b.startViewability(c,function(g,k,h,l){b.viewState=h;if(g&&a.playOnViewPerc&&0<a.playOnViewPerc){var m=100-100*(a.height-l)/a.height;0<m&&m<a.playOnViewPerc&&(g=!1)}if("function"===typeof b.onViewabilityChanged)try{b.onViewabilityChanged(g,
k,h,l)}catch(I){}if(g){if(e=!0,!a.preloader.type||d.playerInView||0!=a.Preroll||a.hideInitPreloader||d.showPlayer(c,f),d.playerInView=!0,b.playing||(d.startAd(),"content"==a.preloader.type&&a.showPlayer&&a.autoPlayContent&&b.resumeContent()),b.playing||""!==a.preloader.type&&a.preloader.type)a.pauseOnUnseen&&b.resume(),d.addClass(f,""),(!c.style.height||1>=c.clientHeight)&&(b.playing||a.showPlayer)&&d.showPlayer(c,f)}else if(e=!1,(b.playing||b.contentPlaying||""!=a.preloader.type&&a.preloader.type&&
!a.preloader.noFloatIdle)&&a.pauseOnUnseen&&b.pause(),a.floating&&0<a.floating.size)switch(h){case "T_TRUNC":case "OUT_TOP":d.addClass(f,d.floatingCSS);break;case "B_TRUNC":case "OUT_BOTTOM":a.floating.floatOnBottom&&d.addClass(f,d.floatingCSS)}},h,a.iframeViewability)):(a.sticky&&0<a.sticky.size&&(""==a.preloader.type||a.hideInitPreloader?(d.addClass(f,d.stickyCSS),d.hidePlayer(c,f)):d.addClass(f,d.stickyCSS)),d.startAdFirstTime=!1,d.playerInView=!0,d.playerLoadedFirstTime=!0,d.startAd(),c&&(c.style.opacity=
""),a.hideInitPreloader?d.hidePlayer(c,f):d.showPlayer(c,f))}};b.startTemplate=function(a){H.startViewability(a)}}})(window);

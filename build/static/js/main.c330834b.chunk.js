(this.webpackJsonppomodoro_clock=this.webpackJsonppomodoro_clock||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(7),o=a.n(i),r=a(1),c=a(2),l=a(5),u=a(4),m=a(3),d=(a(13),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"setTimer"},s.a.createElement("div",{id:"".concat(this.props.type,"-label")},"session"===this.props.type?"Session ":"Break ","Length"),s.a.createElement("div",{className:"setTimer-controls"},s.a.createElement("button",{id:"".concat(this.props.type,"-decrement"),onClick:function(){return e.props.handleClick(!1,"".concat(e.props.type,"Value"))}},"\u2193"),s.a.createElement("div",{id:"".concat(this.props.type,"-length")},this.props.value),s.a.createElement("button",{id:"".concat(this.props.type,"-increment"),onClick:function(){return e.props.handleClick(!0,"".concat(e.props.type,"Value"))}},"\u2191")))}}]),a}(s.a.Component)),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"timer"},s.a.createElement("h2",{id:"timer-label"},"session"===this.props.mode?"Session":"Break"),s.a.createElement("h2",{id:"time-left"},this.props.time))}}]),a}(s.a.Component),p=function(e){var t=e.active,a=e.handlePlayPause,n=e.handleReset;return s.a.createElement("div",{id:"controls"},s.a.createElement("button",{id:"start_stop",onClick:a},t?s.a.createElement("span",null,"\u275a\u275a"):s.a.createElement("span",null,"\u25ba")),s.a.createElement("button",{id:"reset",onClick:n},"\u21bb"))},v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleSetTimers=function(e,t){if((!0!==n.state.active||!e&&e)&&(60!==n.state[t]||!e)&&(1!==n.state[t]||e)){var a=n.state[t]+(e?1:-1);"sessionValue"===t&&n.setState({sessionValue:a,mode:"session",time:60*a*1e3}),"breakValue"===t&&n.setState({breakValue:a,mode:"break",time:60*a*1e3})}},n.handlePlayPause=function(){n.state.active?(clearInterval(n.pomodoro),n.setState({active:!1})):n.state.touched?(n.pomodoro=setInterval((function(){n.setState({time:n.state.time-1e3})}),1e3),n.setState({active:!0})):n.setState({time:60*n.state.sessionValue*1e3,active:!0,touched:!0,mode:"session"},(function(){return n.pomodoro=setInterval((function(){n.setState({time:n.state.time-1e3})}),1e3)}))},n.handleReset=function(){n.setState({breakValue:5,sessionValue:25,time:15e5,mode:"session",active:!1,touched:!1}),clearInterval(n.pomodoro),n.audio.currentTime=0,n.audio.pause()},n.convertMilliseconds=function(e,t){var a,n=t,s=n.split(":"),i=[],o=Math.floor(e/6e4),r=Math.floor(e%36e4%6e4/1e3);function c(e,t){e<10&&2===t.length&&(e="0"+e),i.push(e)}for(var l=0,u=s.length;l<u;l++)a=s[l],n.match(a)&&(a.match(/mm/)&&c(o,a),a.match(/ss/)&&c(r,a));return i.join(":")},n.state={breakValue:5,sessionValue:25,mode:"session",time:15e5,active:!1,touched:!1},n.handleSetTimers=n.handleSetTimers.bind(Object(l.a)(n)),n.handleReset=n.handleReset.bind(Object(l.a)(n)),n.handlePlayPause=n.handlePlayPause.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e,t){if(0===t.time&&"session"===t.mode){this.setState({time:60*this.state.breakValue*1e3,mode:"break"}),this.audio.pause(),this.audio.currentTime=0;var a=this.audio.play();void 0!==a&&a.catch((function(){})),this.audio.playbackRate=2}if(0===t.time&&"break"===t.mode){this.setState({time:60*this.state.sessionValue*1e3,mode:"session"}),this.audio.pause(),this.audio.currentTime=0;var n=this.audio.play();void 0!==n&&n.catch((function(){})),this.audio.playbackRate=2}}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Pomodoro Clock"),s.a.createElement("div",{id:"settings"},s.a.createElement(d,{type:"break",value:this.state.breakValue,handleClick:this.handleSetTimers}),s.a.createElement(d,{type:"session",value:this.state.sessionValue,handleClick:this.handleSetTimers})),s.a.createElement("div",{className:"timeFunction"},s.a.createElement(h,{mode:this.state.mode,time:this.convertMilliseconds(this.state.time,"mm:ss")}),s.a.createElement(p,{active:this.state.active,handlePlayPause:this.handlePlayPause,handleReset:this.handleReset}),s.a.createElement("audio",{id:"beep",type:"audio/mp3",preload:"none",src:"https://s3-us-west-1.amazonaws.com/benjaminadk/Data+synth+beep+high+and+sweet.mp3",ref:function(t){return e.audio=t}})))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.c330834b.chunk.js.map
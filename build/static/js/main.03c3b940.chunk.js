(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(23)},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=(n(15),n(1)),s=n(2),i=n(4),u=n(3),h=n(5),d=n(9),p=n(6),m=(n(17),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){this.props.flipCellsAroundMe()}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(a.Component)),f=(n(19),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).maketable=function(){for(var e=[],t=0;t<n.props.nrows;t++){for(var a=[],o=function(e){var o="".concat(t,"-").concat(e);a.push(r.a.createElement(m,{key:o,isLit:n.state.board[t][e],flipCellsAroundMe:function(){return n.flipCellsAround(o)}}))},c=0;c<n.props.ncols;c++)o(c);e.push(r.a.createElement("tr",{key:t},a))}return r.a.createElement("table",{className:"Board"},r.a.createElement("tbody",null,e))},n.state={hasWon:!1,board:n.createBoard()},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"createBoard",value:function(){for(var e=[],t=0;t<this.props.nrows;t++){for(var n=[],a=0;a<this.props.ncols;a++)n.push(Math.random()<this.props.chanceLightStartsOn);e.push(n)}return e}},{key:"flipCellsAround",value:function(e){var t=this.props,n=t.ncols,a=t.nrows,r=this.state.board,o=e.split("-").map(Number),c=Object(d.a)(o,2),l=c[0],s=c[1];function i(e,t){t>=0&&t<n&&e>=0&&e<a&&(r[e][t]=!r[e][t])}i(l,s),i(l,s+1),i(l,s-1),i(l+1,s),i(l-1,s);var u=r.every(function(e){return e.every(function(e){return!e})});this.setState({board:r,hasWon:u})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.hasWon?r.a.createElement("div",{className:"Board-title"},r.a.createElement("div",{className:"winner"},r.a.createElement("span",{className:"neon-orange"},"You"),r.a.createElement("span",{className:"neon-blue"},"Win"))):r.a.createElement("div",null,r.a.createElement("div",{className:"Board-title"},r.a.createElement("div",{className:"neon-orange"},"Lights"),r.a.createElement("div",{className:"neon-blue"},"Out")),this.maketable()))}}]),t}(a.Component));f.defaultProps={nrows:5,ncols:5,chanceLightStartsOn:.25};var v=f,b=(n(21),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.03c3b940.chunk.js.map
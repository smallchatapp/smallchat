webpackJsonp([0xcd9072225aed],{113:function(e,t,n){var i,r;!function(a,l){i=l,r="function"==typeof i?i.call(t,n,t,e):i,!(void 0!==r&&(e.exports=r))}(this,function(){function e(e,t){this._input=e,this._value=t}var t,n,i="2.0.6",r={},a={},l={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},o={currentLocale:l.currentLocale,zeroFormat:l.zeroFormat,nullFormat:l.nullFormat,defaultFormat:l.defaultFormat,scalePercentBy100:l.scalePercentBy100};return t=function(i){var a,l,u,c;if(t.isNumeral(i))a=i.value();else if(0===i||"undefined"==typeof i)a=0;else if(null===i||n.isNaN(i))a=null;else if("string"==typeof i)if(o.zeroFormat&&i===o.zeroFormat)a=0;else if(o.nullFormat&&i===o.nullFormat||!i.replace(/[^0-9]+/g,"").length)a=null;else{for(l in r)if(c="function"==typeof r[l].regexps.unformat?r[l].regexps.unformat():r[l].regexps.unformat,c&&i.match(c)){u=r[l].unformat;break}u=u||t._.stringToNumber,a=u(i)}else a=Number(i)||null;return new e(i,a)},t.version=i,t.isNumeral=function(t){return t instanceof e},t._=n={numberToFormat:function(e,n,i){var r,l,o,u,c,g,s,M=a[t.options.currentLocale],I=!1,f=!1,d=0,N="",m=1e12,p=1e9,A=1e6,D=1e3,y="",C=!1;if(e=e||0,l=Math.abs(e),t._.includes(n,"(")?(I=!0,n=n.replace(/[\(|\)]/g,"")):(t._.includes(n,"+")||t._.includes(n,"-"))&&(c=t._.includes(n,"+")?n.indexOf("+"):e<0?n.indexOf("-"):-1,n=n.replace(/[\+|\-]/g,"")),t._.includes(n,"a")&&(r=n.match(/a(k|m|b|t)?/),r=!!r&&r[1],t._.includes(n," a")&&(N=" "),n=n.replace(new RegExp(N+"a[kmbt]?"),""),l>=m&&!r||"t"===r?(N+=M.abbreviations.trillion,e/=m):l<m&&l>=p&&!r||"b"===r?(N+=M.abbreviations.billion,e/=p):l<p&&l>=A&&!r||"m"===r?(N+=M.abbreviations.million,e/=A):(l<A&&l>=D&&!r||"k"===r)&&(N+=M.abbreviations.thousand,e/=D)),t._.includes(n,"[.]")&&(f=!0,n=n.replace("[.]",".")),o=e.toString().split(".")[0],u=n.split(".")[1],g=n.indexOf(","),d=(n.split(".")[0].split(",")[0].match(/0/g)||[]).length,u?(t._.includes(u,"[")?(u=u.replace("]",""),u=u.split("["),y=t._.toFixed(e,u[0].length+u[1].length,i,u[1].length)):y=t._.toFixed(e,u.length,i),o=y.split(".")[0],y=t._.includes(y,".")?M.delimiters.decimal+y.split(".")[1]:"",f&&0===Number(y.slice(1))&&(y="")):o=t._.toFixed(e,0,i),N&&!r&&Number(o)>=1e3&&N!==M.abbreviations.trillion)switch(o=String(Number(o)/1e3),N){case M.abbreviations.thousand:N=M.abbreviations.million;break;case M.abbreviations.million:N=M.abbreviations.billion;break;case M.abbreviations.billion:N=M.abbreviations.trillion}if(t._.includes(o,"-")&&(o=o.slice(1),C=!0),o.length<d)for(var h=d-o.length;h>0;h--)o="0"+o;return g>-1&&(o=o.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+M.delimiters.thousands)),0===n.indexOf(".")&&(o=""),s=o+y+(N?N:""),I?s=(I&&C?"(":"")+s+(I&&C?")":""):c>=0?s=0===c?(C?"-":"+")+s:s+(C?"-":"+"):C&&(s="-"+s),s},stringToNumber:function(e){var t,n,i,r=a[o.currentLocale],l=e,u={thousand:3,million:6,billion:9,trillion:12};if(o.zeroFormat&&e===o.zeroFormat)n=0;else if(o.nullFormat&&e===o.nullFormat||!e.replace(/[^0-9]+/g,"").length)n=null;else{n=1,"."!==r.delimiters.decimal&&(e=e.replace(/\./g,"").replace(r.delimiters.decimal,"."));for(t in u)if(i=new RegExp("[^a-zA-Z]"+r.abbreviations[t]+"(?:\\)|(\\"+r.currency.symbol+")?(?:\\))?)?$"),l.match(i)){n*=Math.pow(10,u[t]);break}n*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),n*=Number(e)}return n},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,t){return e.indexOf(t)!==-1},insert:function(e,t,n){return e.slice(0,n)+t+e.slice(n)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var n,i=Object(e),r=i.length>>>0,a=0;if(3===arguments.length)n=arguments[2];else{for(;a<r&&!(a in i);)a++;if(a>=r)throw new TypeError("Reduce of empty array with no initial value");n=i[a++]}for(;a<r;a++)a in i&&(n=t(n,i[a],a,i));return n},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){var e=Array.prototype.slice.call(arguments);return e.reduce(function(e,t){var i=n.multiplier(t);return e>i?e:i},1)},toFixed:function(e,t,n,i){var r,a,l,o,u=e.toString().split("."),c=t-(i||0);return r=2===u.length?Math.min(Math.max(u[1].length,c),t):c,l=Math.pow(10,r),o=(n(e+"e+"+r)/l).toFixed(r),i>t-r&&(a=new RegExp("\\.?0{1,"+(i-(t-r))+"}$"),o=o.replace(a,"")),o}},t.options=o,t.formats=r,t.locales=a,t.locale=function(e){return e&&(o.currentLocale=e.toLowerCase()),o.currentLocale},t.localeData=function(e){if(!e)return a[o.currentLocale];if(e=e.toLowerCase(),!a[e])throw new Error("Unknown locale : "+e);return a[e]},t.reset=function(){for(var e in l)o[e]=l[e]},t.zeroFormat=function(e){o.zeroFormat="string"==typeof e?e:null},t.nullFormat=function(e){o.nullFormat="string"==typeof e?e:null},t.defaultFormat=function(e){o.defaultFormat="string"==typeof e?e:"0.0"},t.register=function(e,t,n){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=n,n},t.validate=function(e,n){var i,r,a,l,o,u,c,g;if("string"!=typeof e&&(e+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",e)),e=e.trim(),e.match(/^\d+$/))return!0;if(""===e)return!1;try{c=t.localeData(n)}catch(e){c=t.localeData(t.locale())}return a=c.currency.symbol,o=c.abbreviations,i=c.delimiters.decimal,r="."===c.delimiters.thousands?"\\.":c.delimiters.thousands,g=e.match(/^[^\d]+/),(null===g||(e=e.substr(1),g[0]===a))&&(g=e.match(/[^\d]+$/),(null===g||(e=e.slice(0,-1),g[0]===o.thousand||g[0]===o.million||g[0]===o.billion||g[0]===o.trillion))&&(u=new RegExp(r+"{2}"),!e.match(/[^\d.,]/g)&&(l=e.split(i),!(l.length>2)&&(l.length<2?!!l[0].match(/^\d+.*\d$/)&&!l[0].match(u):1===l[0].length?!!l[0].match(/^\d+$/)&&!l[0].match(u)&&!!l[1].match(/^\d+$/):!!l[0].match(/^\d+.*\d$/)&&!l[0].match(u)&&!!l[1].match(/^\d+$/)))))},t.fn=e.prototype={clone:function(){return t(this)},format:function(e,n){var i,a,l,u=this._value,c=e||o.defaultFormat;if(n=n||Math.round,0===u&&null!==o.zeroFormat)a=o.zeroFormat;else if(null===u&&null!==o.nullFormat)a=o.nullFormat;else{for(i in r)if(c.match(r[i].regexps.format)){l=r[i].format;break}l=l||t._.numberToFormat,a=l(u,c,n)}return a},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){function t(e,t,n,r){return e+Math.round(i*t)}var i=n.correctionFactor.call(null,this._value,e);return this._value=n.reduce([this._value,e],t,0)/i,this},subtract:function(e){function t(e,t,n,r){return e-Math.round(i*t)}var i=n.correctionFactor.call(null,this._value,e);return this._value=n.reduce([e],t,Math.round(this._value*i))/i,this},multiply:function(e){function t(e,t,i,r){var a=n.correctionFactor(e,t);return Math.round(e*a)*Math.round(t*a)/Math.round(a*a)}return this._value=n.reduce([this._value,e],t,1),this},divide:function(e){function t(e,t,i,r){var a=n.correctionFactor(e,t);return Math.round(e*a)/Math.round(t*a)}return this._value=n.reduce([this._value,e],t),this},difference:function(e){return Math.abs(t(this._value).subtract(e).value())}},t.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),function(){t.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(e,n,i){var r,a=t._.includes(n," BPS")?" ":"";return e*=1e4,n=n.replace(/\s?BPS/,""),r=t._.numberToFormat(e,n,i),t._.includes(r,")")?(r=r.split(""),r.splice(-1,0,a+"BPS"),r=r.join("")):r=r+a+"BPS",r},unformat:function(e){return+(1e-4*t._.stringToNumber(e)).toFixed(15)}})}(),function(){var e={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},n={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},i=e.suffixes.concat(n.suffixes.filter(function(t){return e.suffixes.indexOf(t)<0})),r=i.join("|");r="("+r.replace("B","B(?!PS)")+")",t.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(r)},format:function(i,r,a){var l,o,u,c,g=t._.includes(r,"ib")?n:e,s=t._.includes(r," b")||t._.includes(r," ib")?" ":"";for(r=r.replace(/\s?i?b/,""),o=0;o<=g.suffixes.length;o++)if(u=Math.pow(g.base,o),c=Math.pow(g.base,o+1),null===i||0===i||i>=u&&i<c){s+=g.suffixes[o],u>0&&(i/=u);break}return l=t._.numberToFormat(i,r,a),l+s},unformat:function(i){var r,a,l=t._.stringToNumber(i);if(l){for(r=e.suffixes.length-1;r>=0;r--){if(t._.includes(i,e.suffixes[r])){a=Math.pow(e.base,r);break}if(t._.includes(i,n.suffixes[r])){a=Math.pow(n.base,r);break}}l*=a||1}return l}})}(),function(){t.register("format","currency",{regexps:{format:/(\$)/},format:function(e,n,i){var r,a,l,o=t.locales[t.options.currentLocale],u={before:n.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:n.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(n=n.replace(/\s?\$\s?/,""),r=t._.numberToFormat(e,n,i),e>=0?(u.before=u.before.replace(/[\-\(]/,""),u.after=u.after.replace(/[\-\)]/,"")):e<0&&!t._.includes(u.before,"-")&&!t._.includes(u.before,"(")&&(u.before="-"+u.before),l=0;l<u.before.length;l++)switch(a=u.before[l]){case"$":r=t._.insert(r,o.currency.symbol,l);break;case" ":r=t._.insert(r," ",l+o.currency.symbol.length-1)}for(l=u.after.length-1;l>=0;l--)switch(a=u.after[l]){case"$":r=l===u.after.length-1?r+o.currency.symbol:t._.insert(r,o.currency.symbol,-(u.after.length-(1+l)));break;case" ":r=l===u.after.length-1?r+" ":t._.insert(r," ",-(u.after.length-(1+l)+o.currency.symbol.length-1))}return r}})}(),function(){t.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(e,n,i){var r,a="number"!=typeof e||t._.isNaN(e)?"0e+0":e.toExponential(),l=a.split("e");return n=n.replace(/e[\+|\-]{1}0/,""),r=t._.numberToFormat(Number(l[0]),n,i),r+"e"+l[1]},unformat:function(e){function n(e,n,i,r){var a=t._.correctionFactor(e,n),l=e*a*(n*a)/(a*a);return l}var i=t._.includes(e,"e+")?e.split("e+"):e.split("e-"),r=Number(i[0]),a=Number(i[1]);return a=t._.includes(e,"e-")?a*=-1:a,t._.reduce([r,Math.pow(10,a)],n,1)}})}(),function(){t.register("format","ordinal",{regexps:{format:/(o)/},format:function(e,n,i){var r,a=t.locales[t.options.currentLocale],l=t._.includes(n," o")?" ":"";return n=n.replace(/\s?o/,""),l+=a.ordinal(e),r=t._.numberToFormat(e,n,i),r+l}})}(),function(){t.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(e,n,i){var r,a=t._.includes(n," %")?" ":"";return t.options.scalePercentBy100&&(e*=100),n=n.replace(/\s?\%/,""),r=t._.numberToFormat(e,n,i),t._.includes(r,")")?(r=r.split(""),r.splice(-1,0,a+"%"),r=r.join("")):r=r+a+"%",r},unformat:function(e){var n=t._.stringToNumber(e);return t.options.scalePercentBy100?.01*n:n}})}(),function(){t.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,n){var i=Math.floor(e/60/60),r=Math.floor((e-60*i*60)/60),a=Math.round(e-60*i*60-60*r);return i+":"+(r<10?"0"+r:r)+":"+(a<10?"0"+a:a)},unformat:function(e){var t=e.split(":"),n=0;return 3===t.length?(n+=60*Number(t[0])*60,n+=60*Number(t[1]),n+=Number(t[2])):2===t.length&&(n+=60*Number(t[0]),n+=Number(t[1])),Number(n)}})}(),t})},493:function(e,t,n){e.exports=n.p+"static/logosOne.6970a6ac.png"},494:function(e,t,n){e.exports=n.p+"static/logosTwo.82754405.png"},137:function(e,t,n){e.exports=n.p+"static/PricingBackground.505bba09.svg"},55:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwMHB4IiBoZWlnaHQ9IjIzNnB4IiB2aWV3Qm94PSIwIDAgMTYwMCAyMzYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTY0NSIgaGVpZ2h0PSIyMzYiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJMYW5kaW5nLVBhZ2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAtNDM2My4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IkNhbGwtdG8tQWN0aW9uLUJhbm5lciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwLjAwMDAwMCwgNDM2My4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yMiI+CiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTWFzayI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iIzU3NTlGRiIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3Qgc3Ryb2tlPSIjRjdGN0Y5IiBzdHJva2Utd2lkdGg9IjIiIHg9IjEiIHk9IjEiIHdpZHRoPSIxNjQzIiBoZWlnaHQ9IjIzNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMjAiIG9wYWNpdHk9IjAuMSIgbWFzaz0idXJsKCNtYXNrLTIpIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwOS4wMDAwMDAsIC0zMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjkzODEwNTY0LDIxNC41MDMyNjMgTDAuMzQ4Njg0MzM2LDIwNS41MjI4MzYgTDAuMzQ4Njg0MzM2LDIwNS41MjI4MzYgQzAuMDU5OTI5ODczNCwyMDMuODkxMzM4IDEuMTQ4NDM4ODYsMjAyLjMzNDY2NSAyLjc3OTkzNzIxLDIwMi4wNDU5MTEgQzIuOTUyNTQwMDMsMjAyLjAxNTM2MiAzLjEyNzQ4ODEsMjAyIDMuMzAyNzczNDIsMjAyIEwzOTAuNzQ4MzY5LDIwMiBMMzkwLjc0ODM2OSwyMDIgQzM5NC4yMDEwNDksMjAyIDM5NywyMDQuNzk4OTUxIDM5NywyMDguMjUxNjMxIEwzOTcsMjA4LjI1MTYzMSBMMzk3LDIwOC4yNTE2MzEgQzM5NywyMTEuNzA0MzEyIDM5NC4yMDEwNDksMjE0LjUwMzI2MyAzOTAuNzQ4MzY5LDIxNC41MDMyNjMgTDUwLjcwOTk2MjEsMjE0LjUwMzI2MyBMNTAuNzA5OTYyMSwyMTQuNTAzMjYzIEM0OC40MDk0MzA3LDIxNC41MDMyNjMgNDYuNDA1NzkzMiwyMTYuMDczMDE5IDQ1Ljg1NTI0ODUsMjE4LjMwNjcwMyBMMjYuNDU5NDExNSwyOTcgTDM5LjQxNzAxMjQsMjk3IEw2OS43MjMxNTgzLDIxNy42ODY1NTYgTDY5LjcyMzE1ODMsMjE3LjY4NjU1NiBDNzAuNDYzMDM2LDIxNS43NTAyNDEgNzIuMzIwOTQ1MSwyMTQuNDcxMjM3IDc0LjM5MzgwMiwyMTQuNDcxMjM3IEwzMTkuNDMwNzY0LDIxNC40NzEyMzcgTDMxOS40MzA3NjQsMjE0LjQ3MTIzNyBDMzIxLjQ4MDk0NCwyMTQuNDcxMjM3IDMyMy4zMjMzNzUsMjE1LjcyMjc5NiAzMjQuMDc4ODg1LDIxNy42Mjg2OTMgTDM1NS41NDIxNzEsMjk3IEwzNjQuMjM5OTYzLDI5NyBMMzQ3LjY1NjY5LDIyMy4zODcxNiIgaWQ9IlBhdGgtOCIgc3Ryb2tlPSIjRUJFQ0VGIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlJlY3RhbmdsZS0yMCIgc3Ryb2tlPSJub25lIiBmaWxsPSIjRjdGN0Y5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHBvaW50cz0iODMgMTMzIDE4MCAxMzMgMTc0LjYxMTExMSAxODIgOTEuMDgzMzMzMyAxODIiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNTIuNTE1MzY1LDE2NyBDMjUyLjQ1MzU4MSwxNjcgMjUyLjM5MTkzLDE2Ny4wMDU3MjYgMjUyLjMzMTIwMywxNjcuMDE3MTA0IEMyNTEuNzg4MzY1LDE2Ny4xMTg4MTQgMjUxLjQzMDc1OSwxNjcuNjQxMzIzIDI1MS41MzI0NjksMTY4LjE4NDE2MiBMMjU3LjM0MDgyOSwxOTkuMTg0MTYyIEMyNTcuNDI5NDU5LDE5OS42NTcxOTQgMjU3Ljg0MjQ2MSwyMDAgMjU4LjMyMzcyNSwyMDAgTDI3NC42NzcwNTksMjAwIEMyNzUuMTU4MzIzLDIwMCAyNzUuNTcxMzI1LDE5OS42NTcxOTQgMjc1LjY1OTk1NSwxOTkuMTg0MTYyIEwyODEuNDY4MzE1LDE2OC4xODQxNjIgQzI4MS40Nzk2OTMsMTY4LjEyMzQzNSAyODEuNDg1NDE5LDE2OC4wNjE3ODQgMjgxLjQ4NTQxOSwxNjggQzI4MS40ODU0MTksMTY3LjQ0NzcxNSAyODEuMDM3NzA0LDE2NyAyODAuNDg1NDE5LDE2NyBMMjUyLjUxNTM2NSwxNjcgWiIgaWQ9IlJlY3RhbmdsZS0yMSIgc3Ryb2tlPSIjRUJFQ0VGIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNjQuODAyNjM3LDIwIEwyMzkuMTk2NTA4LDIwIEwyMzkuMTk2NTA4LDIwIEMyNDIuMDUzMzkzLDIwIDI0NC41MTQwNTgsMjIuMDE0MzQ0OSAyNDUuMDc4MzE2LDI0LjgxNDk1MjUgTDI1Mi40OTA2NTIsNjEuNjA0OTg0MiBMMjUyLjQ5MDY1Miw2MS42MDQ5ODQyIEMyNTIuNzA4ODEzLDYyLjY4Nzc5NTEgMjUyLjAwNzg3Niw2My43NDI0NDE0IDI1MC45MjUwNjUsNjMuOTYwNjAyNiBDMjUwLjc5NTAyNiw2My45ODY4MDI1IDI1MC42NjI3MDIsNjQgMjUwLjUzMDA1LDY0IEwxNTMuNDY5MDk2LDY0IEwxNTMuNDY5MDk2LDY0IEMxNTIuMzY0NTI2LDY0IDE1MS40NjkwOTYsNjMuMTA0NTY5NSAxNTEuNDY5MDk2LDYyIEMxNTEuNDY5MDk2LDYxLjg2NzM0NzMgMTUxLjQ4MjI5Myw2MS43MzUwMjM3IDE1MS41MDg0OTMsNjEuNjA0OTg0MiBMMTU4LjkyMDgzLDI0LjgxNDk1MjUgTDE1OC45MjA4MywyNC44MTQ5NTI1IEMxNTkuNDg1MDg3LDIyLjAxNDM0NDkgMTYxLjk0NTc1MywyMCAxNjQuODAyNjM3LDIwIFoiIGlkPSJSZWN0YW5nbGUtMjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI0Y3RjdGOSIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTcyLjgwMjYzNywxNyBDMTcwLjQyMTksMTcgMTY4LjM3MTM0NSwxOC42Nzg2MjA3IDE2Ny45MDExMzEsMjEuMDEyNDYwNCBMMTYwLjQ4ODc5NSw1Ny44MDI0OTIxIEMxNjAuNDc1Njk1LDU3Ljg2NzUxMTkgMTYwLjQ2OTA5Niw1Ny45MzM2NzM3IDE2MC40NjkwOTYsNTggQzE2MC40NjkwOTYsNTguNTUyMjg0NyAxNjAuOTE2ODExLDU5IDE2MS40NjkwOTYsNTkgTDI1OC41MzAwNSw1OSBDMjU4LjU5NjM3Niw1OSAyNTguNjYyNTM4LDU4Ljk5MzQwMTMgMjU4LjcyNzU1Nyw1OC45ODAzMDEzIEMyNTkuMjY4OTYzLDU4Ljg3MTIyMDcgMjU5LjYxOTQzMSw1OC4zNDM4OTc1IDI1OS41MTAzNTEsNTcuODAyNDkyMSBMMjUyLjA5ODAxNSwyMS4wMTI0NjA0IEMyNTEuNjI3OCwxOC42Nzg2MjA3IDI0OS41NzcyNDUsMTcgMjQ3LjE5NjUwOCwxNyBMMTcyLjgwMjYzNywxNyBaIiBpZD0iUmVjdGFuZ2xlLTIyIiBzdHJva2U9IiNFQkVDRUYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJQYXRoLTkiIHN0cm9rZT0iI0VCRUNFRiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBvaW50cz0iMTgzLjk0NjE0OCAyMDEgOTguODQ3MjE5MiAyMDEgOTYuNjQ5MDQ0MiAxOTUuMDg4MTcxIDE4My4xNTI3ODEgMTk1LjA4ODE3MSAxOTIgMTI4IDkwIDEyOCAxMDEuMDU5MDI0IDE4Ny45ODU3NjUgMTc4LjQyODkxOCAxODcuOTg1NzY1Ij48L3BvbHlsaW5lPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ2NiwyOTkgQzQzNS43NDQzNjgsMTIuNjU4MDgyMiAyOTguMDgwMzk4LC0xLjg0NzAyNjU4IDIxOC4wMzI0NjksMC4xNDU1MDI4NzEgQzEzNy45ODQ1NDEsMi4xMzgwMzIzMiAxODYuMjkwNjIyLDEyLjk5NTMxNjIgMjQ2Ljc1MDE2Myw3Ljk4MTc4NTg5IiBpZD0iUGF0aC0xMCIgc3Ryb2tlPSIjRUJFQ0VGIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"},86:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),a=i(r),l=n(4),o=i(l),u=(0,l.keyframes)(["0%{transform:translateX(0);}100%{transform:translateX(-100%);}"]),c=o.default.div.withConfig({displayName:"LogoMarquee__Wrapper"})(["overflow:hidden;"]),g=o.default.div.withConfig({displayName:"LogoMarquee__Marquee"})(["white-space:nowrap;position:relative;font-size:0;img{position:relative;animation:"," ","ms infinite linear;display:inline-block;width:auto;height:70px;}"],u,function(e){return e.speed}),s=function(e){var t=e.src,n=e.speed;return a.default.createElement(c,null,a.default.createElement(g,{speed:n},a.default.createElement("img",{alt:"logos",src:t}),a.default.createElement("img",{alt:"logos",src:t})))};s.defaultProps={speed:4e4},t.default=s,e.exports=t.default},238:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=n(1),c=i(u),g=n(78),s=i(g),M=n(113),I=i(M),f=n(4),d=i(f),N=n(10),m=n(31),p=i(m),A=n(86),D=i(A),y=n(57),C=i(y),h=n(137),j=i(h),x=n(493),w=i(x),b=n(494),T=i(b),z=n(59),E=i(z),L=n(58),v=i(L),O=n(55),k=i(O),S=d.default.div.withConfig({displayName:"pricing__PricingContainer"})(["overflow:hidden;"]),P=d.default.header.withConfig({displayName:"pricing__PricingHeader"})(["position:relative;z-index:10;text-align:center;padding:50px 50px 0;h1{display:inline-block;}"]),_=(0,f.css)(['&:after{content:"";position:absolute;top:100%;left:10%;display:block;width:80%;height:2px;background-color:',";}"],N.SMALLCHAT_PURPLE),Y=d.default.button.withConfig({displayName:"pricing__PricingToggle"})(['position:relative;outline:none;border:none;background:none;padding:0;margin:30px 20px 20px;font-size:16px;line-height:24px;font-weight:900;font-family:"Rubik";color:',";cursor:pointer;",";&:hover{color:",";",";}"],function(e){return e.selected?N.PRIMARY_TEXT:N.TERTIARY_TEXT},function(e){return e.selected&&_},N.PRIMARY_TEXT,_),U=d.default.div.withConfig({displayName:"pricing__PricingWrapper"})(["z-index:2;position:relative;max-width:1200px;margin:0 auto;padding:0 50px;width:100%;@media (max-width:480px){padding:0 20px;}"]),Q=d.default.div.withConfig({displayName:"pricing__PricingPlans"})(["z-index:2;position:relative;display:flex;padding:50px 0;margin-bottom:100px;background-color:white;border-radius:50px;box-shadow:0 0 20px 0 ",";@media (max-width:768px){flex-direction:column;padding:0 50px;}@media (max-width:480px){flex-direction:column;padding:0 20px;}"],N.SMALLCHAT_SHADOW),B=d.default.div.withConfig({displayName:"pricing__PlanContainer"})(['position:relative;display:flex;align-items:center;flex-direction:column;width:100%;padding:0 20px;text-align:center;@media (max-width:768px){padding:50px 0;}& + &:before{content:"";position:absolute;top:0;left:0;display:block;width:1px;height:100%;background-color:',";@media (max-width:768px){height:1px;width:100%;}}"],N.TERTIARY_TEXT),F=d.default.div.withConfig({displayName:"pricing__PlanPrice"})(['margin:10px 0;display:flex;text-align:center;align-items:center;justify-content:center;font-weight:900;font-family:"Rubik";h1{margin:0 5px;font-size:80px;line-height:70px;@media (max-width:480px){font-size:60px;}}span{align-self:flex-start;}']),G=d.default.h4.withConfig({displayName:"pricing__PlanLabel"})(['font-family:"Lato";font-weight:500;font-size:21px;color:',";"],N.SECONDARY_TEXT),R=d.default.ul.withConfig({displayName:"pricing__PlanFeatures"})(["margin:20px 0;padding:0;min-height:100px;list-style-type:none;li{font-size:15px;line-height:24px;",";}"],function(e){return e.selected&&(0,f.css)(["color:#9192c5;font-weight:600;"])}),Z=(0,d.default)(p.default).withConfig({displayName:"pricing__PlanPrompt"})(["margin:15px 0;"]),W=d.default.div.withConfig({displayName:"pricing__PricingValidation"})(["z-index:2;position:relative;text-align:center;margin:50px 0 100px;h2{margin-bottom:30px;}"]),H=function(e){var t=e.index,n=e.interval,i=e.activeIndex,r=e.onSelect,a=e.planPrice,l=e.planLabel,o=e.featureList,u=a*(12===n?.8:1),g=(0,I.default)(u).format("0.00").split("."),s=g[0],M=g[1];return c.default.createElement(B,{onMouseOver:function(e){return r(t)}},c.default.createElement(F,null,"$",c.default.createElement("h1",null,s),c.default.createElement("span",null,M)),c.default.createElement("p",{style:{position:"relative",top:"-5px",fontSize:"13px",color:"#B3B3BF"}},"per month"),c.default.createElement(G,null,l),c.default.createElement(R,{selected:i>=t},o.map(function(e,t){return c.default.createElement("li",{key:t},"- ",e)})),c.default.createElement(Z,null))},J=function(e){function t(){var n,i,l;r(this,t);for(var o=arguments.length,u=Array(o),c=0;c<o;c++)u[c]=arguments[c];return n=i=a(this,e.call.apply(e,[this].concat(u))),i.state={interval:1,activeIndex:null},i.selectPlan=function(e){e!==i.state.activeIndex&&i.setState({activeIndex:e})},i.setInterval=function(e){i.setState({interval:e})},l=n,a(i,l)}return l(t,e),t.prototype.render=function(){var e=this,t="phone"===this.props.screensize,n="tablet"===this.props.screensize;return c.default.createElement(S,null,c.default.createElement(s.default,{title:"Smallchat Pricing"}),c.default.createElement(P,null,c.default.createElement("h1",null,"Start using Smallchat for free."),c.default.createElement("p",null,"And then keep using it for free if you'd like."),c.default.createElement(Y,{selected:12===this.state.interval,onClick:function(t){return e.setInterval(12)}},"Annually"),c.default.createElement(Y,{selected:1===this.state.interval,onClick:function(t){return e.setInterval(1)}},"Monthly")),c.default.createElement(U,null,c.default.createElement(C.default,{background:j.default,backgroundWidth:"140%",backgroundOrigin:"top",backgroundHeight:"130%",backgroundScale:t?5:n?2:1.2,backgroundTop:t||n?0:"-20%",backgroundRight:"-40%"}),c.default.createElement(Q,null,c.default.createElement(H,o({},this.state,{index:0,onSelect:this.selectPlan,planPrice:0,planLabel:"Personal 👶",featureList:["Unlimited conversations","Unlimited operators","10k/mo pageviews","Full customization of your widget"]})),c.default.createElement(H,o({},this.state,{index:1,onSelect:this.selectPlan,planPrice:19.99,planLabel:"Growth 😎",featureList:["All Personal tier features plus","Custom auto messages","Contact list with export","Unlimited pageviews"]})),c.default.createElement(H,o({},this.state,{index:2,onSelect:this.selectPlan,planPrice:39.99,planLabel:"Business 💼",featureList:["All Personal + Growth tier features plus","Multiple Slack channels + widgets","Whitelabel chat widget","Javascript API"]})))),c.default.createElement(W,null,c.default.createElement("h2",null,"Trusted by over 5000 teams!"),c.default.createElement(D.default,{src:w.default,speed:35e3}),c.default.createElement(D.default,{src:T.default,speed:4e4})),c.default.createElement(v.default,{darkShadow:!0,background:k.default,backgroundSize:"cover",backgroundPosition:"80% 80%",title:"Start your conversations today."}))},t}(u.Component);t.default=(0,E.default)(J),e.exports=t.default}});
//# sourceMappingURL=component---src-pages-pricing-js-b2c047ba9995eb802131.js.map
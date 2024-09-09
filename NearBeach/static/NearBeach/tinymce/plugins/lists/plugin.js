!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager");const t=e=>t=>(e=>{const t=typeof e;return null===e?"null":"object"===t&&Array.isArray(e)?"array":"object"===t&&(n=o=e,(r=String).prototype.isPrototypeOf(n)||(null===(s=o.constructor)||void 0===s?void 0:s.name)===r.name)?"string":t;var n,o,r,s})(t)===e,n=e=>t=>typeof t===e,o=t("string"),r=t("object"),s=t("array"),i=n("boolean"),l=e=>!(e=>null==e)(e),a=n("function"),d=n("number"),c=()=>{},m=e=>()=>e,u=(e,t)=>e===t,p=e=>t=>!e(t),g=m(!1);class h{constructor(e,t){this.tag=e,this.value=t}static some(e){return new h(!0,e)}static none(){return h.singletonNone}fold(e,t){return this.tag?t(this.value):e()}isSome(){return this.tag}isNone(){return!this.tag}map(e){return this.tag?h.some(e(this.value)):h.none()}bind(e){return this.tag?e(this.value):h.none()}exists(e){return this.tag&&e(this.value)}forall(e){return!this.tag||e(this.value)}filter(e){return!this.tag||e(this.value)?this:h.none()}getOr(e){return this.tag?this.value:e}or(e){return this.tag?this:e}getOrThunk(e){return this.tag?this.value:e()}orThunk(e){return this.tag?this:e()}getOrDie(e){if(this.tag)return this.value;throw new Error(null!=e?e:"Called getOrDie on None")}static from(e){return l(e)?h.some(e):h.none()}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(e){this.tag&&e(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}h.singletonNone=new h(!1);const f=Array.prototype.slice,y=Array.prototype.indexOf,v=Array.prototype.push,C=(e,t)=>{return n=e,o=t,y.call(n,o)>-1;var n,o},b=(e,t)=>{for(let n=0,o=e.length;n<o;n++)if(t(e[n],n))return!0;return!1},N=(e,t)=>{const n=e.length,o=new Array(n);for(let r=0;r<n;r++){const n=e[r];o[r]=t(n,r)}return o},S=(e,t)=>{for(let n=0,o=e.length;n<o;n++)t(e[n],n)},L=(e,t)=>{const n=[];for(let o=0,r=e.length;o<r;o++){const r=e[o];t(r,o)&&n.push(r)}return n},O=(e,t,n)=>(S(e,((e,o)=>{n=t(n,e,o)})),n),A=(e,t,n)=>{for(let o=0,r=e.length;o<r;o++){const r=e[o];if(t(r,o))return h.some(r);if(n(r,o))break}return h.none()},T=(e,t)=>A(e,t,g),x=(e,t)=>(e=>{const t=[];for(let n=0,o=e.length;n<o;++n){if(!s(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);v.apply(t,e[n])}return t})(N(e,t)),k=e=>{const t=f.call(e,0);return t.reverse(),t},E=(e,t)=>t>=0&&t<e.length?h.some(e[t]):h.none(),w=e=>E(e,0),D=e=>E(e,e.length-1),B=(e,t)=>{const n=[],o=a(t)?e=>b(n,(n=>t(n,e))):e=>C(n,e);for(let t=0,r=e.length;t<r;t++){const r=e[t];o(r)||n.push(r)}return n},M=(e,t,n=u)=>e.exists((e=>n(e,t))),P=(e,t,n)=>e.isSome()&&t.isSome()?h.some(n(e.getOrDie(),t.getOrDie())):h.none(),I=e=>{if(null==e)throw new Error("Node cannot be null or undefined");return{dom:e}},R=(e,t)=>{const n=(t||document).createElement("div");if(n.innerHTML=e,!n.hasChildNodes()||n.childNodes.length>1){const t="HTML does not have a single root node";throw console.error(t,e),new Error(t)}return I(n.childNodes[0])},U=(e,t)=>{const n=(t||document).createElement(e);return I(n)},$=I,_=(e,t)=>{const n=e.dom;if(1!==n.nodeType)return!1;{const e=n;if(void 0!==e.matches)return e.matches(t);if(void 0!==e.msMatchesSelector)return e.msMatchesSelector(t);if(void 0!==e.webkitMatchesSelector)return e.webkitMatchesSelector(t);if(void 0!==e.mozMatchesSelector)return e.mozMatchesSelector(t);throw new Error("Browser lacks native selectors")}},H=(e,t)=>e.dom===t.dom,F=_,V="undefined"!=typeof window?window:Function("return this;")(),j=(e,t)=>((e,t)=>{let n=null!=t?t:V;for(let t=0;t<e.length&&null!=n;++t)n=n[e[t]];return n})(e.split("."),t),K=Object.getPrototypeOf,z=e=>{const t=j("ownerDocument.defaultView",e);return r(e)&&((e=>((e,t)=>{const n=((e,t)=>j(e,t))(e,t);if(null==n)throw new Error(e+" not available on this browser");return n})("HTMLElement",e))(t).prototype.isPrototypeOf(e)||/^HTML\w*Element$/.test(K(e).constructor.name))},Q=e=>e.dom.nodeName.toLowerCase(),W=e=>e.dom.nodeType,q=e=>t=>W(t)===e,Z=e=>G(e)&&z(e.dom),G=q(1),J=q(3),X=q(11),Y=e=>t=>G(t)&&Q(t)===e,ee=e=>h.from(e.dom.parentNode).map($),te=e=>N(e.dom.childNodes,$),ne=(e,t)=>{const n=e.dom.childNodes;return h.from(n[t]).map($)},oe=e=>ne(e,0),re=e=>ne(e,e.dom.childNodes.length-1),se=e=>$(e.dom.host),ie=e=>{const t=J(e)?e.dom.parentNode:e.dom;if(null==t||null===t.ownerDocument)return!1;const n=t.ownerDocument;return(e=>{const t=(e=>$(e.dom.getRootNode()))(e);return X(n=t)&&l(n.dom.host)?h.some(t):h.none();var n})($(t)).fold((()=>n.body.contains(t)),(o=ie,r=se,e=>o(r(e))));var o,r};var le=(e,t,n,o,r)=>e(n,o)?h.some(n):a(r)&&r(n)?h.none():t(n,o,r);const ae=(e,t,n)=>{let o=e.dom;const r=a(n)?n:g;for(;o.parentNode;){o=o.parentNode;const e=$(o);if(t(e))return h.some(e);if(r(e))break}return h.none()},de=(e,t,n)=>le(((e,t)=>t(e)),ae,e,t,n),ce=(e,t,n)=>ae(e,(e=>_(e,t)),n),me=(e,t)=>{ee(e).each((n=>{n.dom.insertBefore(t.dom,e.dom)}))},ue=(e,t)=>{e.dom.appendChild(t.dom)},pe=(e,t)=>{S(t,(t=>{ue(e,t)}))},ge=e=>{e.dom.textContent="",S(te(e),(e=>{he(e)}))},he=e=>{const t=e.dom;null!==t.parentNode&&t.parentNode.removeChild(t)};var fe=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),ye=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),ve=tinymce.util.Tools.resolve("tinymce.util.VK");const Ce=e=>N(e,$),be=Object.keys,Ne=(e,t)=>{const n=be(e);for(let o=0,r=n.length;o<r;o++){const r=n[o];t(e[r],r)}},Se=(e,t)=>{const n=e.dom;Ne(t,((e,t)=>{((e,t,n)=>{if(!(o(n)||i(n)||d(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")})(n,t,e)}))},Le=e=>O(e.dom.attributes,((e,t)=>(e[t.name]=t.value,e)),{}),Oe=e=>(e=>$(e.dom.cloneNode(!0)))(e),Ae=(e,t)=>{const n=((e,t)=>{const n=U(t),o=Le(e);return Se(n,o),n})(e,t);var o,r;r=n,(e=>h.from(e.dom.nextSibling).map($))(o=e).fold((()=>{ee(o).each((e=>{ue(e,r)}))}),(e=>{me(e,r)}));const s=te(e);return pe(n,s),he(e),n};var Te=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),xe=tinymce.util.Tools.resolve("tinymce.util.Tools");const ke=e=>t=>l(t)&&t.nodeName.toLowerCase()===e,Ee=e=>t=>l(t)&&e.test(t.nodeName),we=e=>l(e)&&3===e.nodeType,De=e=>l(e)&&1===e.nodeType,Be=Ee(/^(OL|UL|DL)$/),Me=Ee(/^(OL|UL)$/),Pe=ke("ol"),Ie=Ee(/^(LI|DT|DD)$/),Re=Ee(/^(DT|DD)$/),Ue=Ee(/^(TH|TD)$/),$e=ke("br"),_e=(e,t)=>l(t)&&t.nodeName in e.schema.getTextBlockElements(),He=(e,t)=>l(e)&&e.nodeName in t,Fe=(e,t)=>l(t)&&t.nodeName in e.schema.getVoidElements(),Ve=(e,t,n)=>{const o=e.isEmpty(t);return!(n&&e.select("span[data-mce-type=bookmark]",t).length>0)&&o},je=(e,t)=>e.isChildOf(t,e.getRoot()),Ke=e=>t=>t.options.get(e),ze=Ke("lists_indent_on_tab"),Qe=Ke("forced_root_block"),We=Ke("forced_root_block_attrs"),qe=(e,t,n={})=>{const o=e.dom,r=e.schema.getBlockElements(),s=o.createFragment(),i=Qe(e),l=We(e);let a,d,c=!1;for(d=o.create(i,{...l,...n.style?{style:n.style}:{}}),He(t.firstChild,r)||s.appendChild(d);a=t.firstChild;){const e=a.nodeName;c||"SPAN"===e&&"bookmark"===a.getAttribute("data-mce-type")||(c=!0),He(a,r)?(s.appendChild(a),d=null):(d||(d=o.create(i,l),s.appendChild(d)),d.appendChild(a))}return!c&&d&&d.appendChild(o.create("br",{"data-mce-bogus":"1"})),s},Ze=Te.DOM,Ge=Y("dd"),Je=Y("dt"),Xe=(e,t)=>{var n;Ge(t)?Ae(t,"dt"):Je(t)&&(n=t,h.from(n.dom.parentElement).map($)).each((n=>((e,t,n)=>{const o=Ze.select('span[data-mce-type="bookmark"]',t),r=qe(e,n),s=Ze.createRng();s.setStartAfter(n),s.setEndAfter(t);const i=s.extractContents();for(let t=i.firstChild;t;t=t.firstChild)if("LI"===t.nodeName&&e.dom.isEmpty(t)){Ze.remove(t);break}e.dom.isEmpty(i)||Ze.insertAfter(i,t),Ze.insertAfter(r,t);const l=n.parentElement;l&&Ve(e.dom,l)&&(e=>{const t=e.parentNode;t&&xe.each(o,(e=>{t.insertBefore(e,n.parentNode)})),Ze.remove(e)})(l),Ze.remove(n),Ve(e.dom,t)&&Ze.remove(t)})(e,n.dom,t.dom)))},Ye=e=>{Je(e)&&Ae(e,"dd")},et=(e,t)=>{if(we(e))return{container:e,offset:t};const n=fe.getNode(e,t);return we(n)?{container:n,offset:t>=e.childNodes.length?n.data.length:0}:n.previousSibling&&we(n.previousSibling)?{container:n.previousSibling,offset:n.previousSibling.data.length}:n.nextSibling&&we(n.nextSibling)?{container:n.nextSibling,offset:0}:{container:e,offset:t}},tt=e=>{const t=e.cloneRange(),n=et(e.startContainer,e.startOffset);t.setStart(n.container,n.offset);const o=et(e.endContainer,e.endOffset);return t.setEnd(o.container,o.offset),t},nt=["OL","UL","DL"],ot=nt.join(","),rt=(e,t)=>{const n=t||e.selection.getStart(!0);return e.dom.getParent(n,ot,lt(e,n))},st=e=>{const t=e.selection.getSelectedBlocks();return L(((e,t)=>{const n=xe.map(t,(t=>e.dom.getParent(t,"li,dd,dt",lt(e,t))||t));return B(n)})(e,t),Ie)},it=(e,t)=>{const n=e.dom.getParents(t,"TD,TH");return n.length>0?n[0]:e.getBody()},lt=(e,t)=>{const n=e.dom.getParents(t,e.dom.isBlock),o=T(n,(t=>{return(t=>t.nodeName.toLowerCase()!==Qe(e))(t)&&(n=e.schema,!Be(o=t)&&!Ie(o)&&b(nt,(e=>n.isValidChild(o.nodeName,e))));var n,o}));return o.getOr(e.getBody())},at=(e,t)=>{const n=e.dom.getParents(t,"ol,ul",lt(e,t));return D(n)},dt=(e,t)=>{const n=N(t,(t=>at(e,t).getOr(t)));return B(n)},ct=e=>/\btox\-/.test(e.className),mt=(e,t)=>A(e,Be,Ue).exists((e=>e.nodeName===t&&!ct(e))),ut=(e,t)=>null!==t&&!e.dom.isEditable(t),pt=(e,t)=>{const n=e.dom.getParent(t,"ol,ul,dl");return ut(e,n)},gt=(e,t)=>{const n=e.selection.getNode();return t({parents:e.dom.getParents(n),element:n}),e.on("NodeChange",t),()=>e.off("NodeChange",t)},ht=(e,t)=>{const n=(t||document).createDocumentFragment();return S(e,(e=>{n.appendChild(e.dom)})),$(n)},ft=(e,t,n)=>e.dispatch("ListMutation",{action:t,element:n}),yt=(vt=/^\s+|\s+$/g,e=>e.replace(vt,""));var vt;const Ct=(e,t,n)=>{((e,t,n)=>{if(!o(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n);(e=>void 0!==e.style&&a(e.style.getPropertyValue))(e)&&e.style.setProperty(t,n)})(e.dom,t,n)},bt=e=>F(e,"OL,UL"),Nt=e=>oe(e).exists(bt),St=e=>"listAttributes"in e,Lt=e=>"isComment"in e,Ot=e=>e.depth>0,At=e=>e.isSelected,Tt=e=>{const t=te(e),n=re(e).exists(bt)?t.slice(0,-1):t;return N(n,Oe)},xt=(e,t)=>{ue(e.item,t.list)},kt=(e,t)=>{const n={list:U(t,e),item:U("li",e)};return ue(n.list,n.item),n},Et=(e,t,n)=>{const o=t.slice(0,n.depth);return D(o).each((t=>{if(St(n)){const o=((e,t,n)=>{const o=U("li",e);return Se(o,t),pe(o,n),o})(e,n.itemAttributes,n.content);((e,t)=>{ue(e.list,t),e.item=t})(t,o),((e,t)=>{Q(e.list)!==t.listType&&(e.list=Ae(e.list,t.listType)),Se(e.list,t.listAttributes)})(t,n)}else if((e=>"isFragment"in e)(n))pe(t.item,n.content);else{const e=R(`\x3c!--${n.content}--\x3e`);ue(t.list,e)}})),o},wt=(e,t)=>{let n=h.none();const o=O(t,((t,o,r)=>Lt(o)?0===r?(n=h.some(o),t):Et(e,t,o):o.depth>t.length?((e,t,n)=>{const o=((e,t,n)=>{const o=[];for(let r=0;r<n;r++)o.push(kt(e,St(t)?t.listType:t.parentListType));return o})(e,n,n.depth-t.length);var r;return(e=>{for(let t=1;t<e.length;t++)xt(e[t-1],e[t])})(o),((e,t)=>{for(let t=0;t<e.length-1;t++)Ct(e[t].item,"list-style-type","none");D(e).each((e=>{St(t)&&(Se(e.list,t.listAttributes),Se(e.item,t.itemAttributes)),pe(e.item,t.content)}))})(o,n),r=o,P(D(t),w(r),xt),t.concat(o)})(e,t,o):Et(e,t,o)),[]);return n.each((e=>{const t=R(`\x3c!--${e.content}--\x3e`);w(o).each((e=>{((e,t)=>{oe(e).fold((()=>{ue(e,t)}),(n=>{e.dom.insertBefore(t.dom,n.dom)}))})(e.list,t)}))})),w(o).map((e=>e.list))},Dt=e=>(S(e,((t,n)=>{((e,t)=>{const n=e[t].depth,o=e=>e.depth===n&&!e.dirty,r=e=>e.depth<n;return A(k(e.slice(0,t)),o,r).orThunk((()=>A(e.slice(t+1),o,r)))})(e,n).fold((()=>{t.dirty&&St(t)&&(e=>{e.listAttributes=((e,t)=>{const n={};var o;return((e,t,n,o)=>{Ne(e,((e,r)=>{(t(e,r)?n:o)(e,r)}))})(e,t,(o=n,(e,t)=>{o[t]=e}),c),n})(e.listAttributes,((e,t)=>"start"!==t))})(t)}),(e=>{return o=e,void(St(n=t)&&St(o)&&(n.listType=o.listType,n.listAttributes={...o.listAttributes}));var n,o}))})),e),Bt=(e,t,n,o)=>{var r,s;if(8===W(s=o)||"#comment"===Q(s))return[{depth:e+1,content:null!==(r=o.dom.nodeValue)&&void 0!==r?r:"",dirty:!1,isSelected:!1,isComment:!0}];t.each((e=>{H(e.start,o)&&n.set(!0)}));const i=((e,t,n)=>ee(e).filter(G).map((o=>({depth:t,dirty:!1,isSelected:n,content:Tt(e),itemAttributes:Le(e),listAttributes:Le(o),listType:Q(o),isInPreviousLi:!1}))))(o,e,n.get());t.each((e=>{H(e.end,o)&&n.set(!1)}));const l=re(o).filter(bt).map((o=>Pt(e,t,n,o))).getOr([]);return i.toArray().concat(l)},Mt=(e,t,n,o)=>oe(o).filter(bt).fold((()=>Bt(e,t,n,o)),(r=>{const s=O(te(o),((o,s,i)=>{if(0===i)return o;if(F(s,"LI"))return o.concat(Bt(e,t,n,s));{const t={isFragment:!0,depth:e,content:[s],isSelected:!1,dirty:!1,parentListType:Q(r)};return o.concat(t)}}),[]);return Pt(e,t,n,r).concat(s)})),Pt=(e,t,n,o)=>x(te(o),(o=>(bt(o)?Pt:Mt)(e+1,t,n,o))),It=(e,t,n)=>{const o=((e,t)=>{const n=(()=>{let e=!1;return{get:()=>e,set:t=>{e=t}}})();return N(e,(e=>({sourceList:e,entries:Pt(0,t,n,e)})))})(t,(e=>{const t=N(st(e),$);return P(T(t,p(Nt)),T(k(t),p(Nt)),((e,t)=>({start:e,end:t})))})(e));S(o,(t=>{((e,t)=>{S(L(e,At),(e=>((e,t)=>{switch(e){case"Indent":t.depth++;break;case"Outdent":t.depth--;break;case"Flatten":t.depth=0}t.dirty=!0})(t,e)))})(t.entries,n);const o=((e,t)=>x(((e,t)=>{if(0===e.length)return[];{let n=t(e[0]);const o=[];let r=[];for(let s=0,i=e.length;s<i;s++){const i=e[s],l=t(i);l!==n&&(o.push(r),r=[]),n=l,r.push(i)}return 0!==r.length&&o.push(r),o}})(t,Ot),(t=>w(t).exists(Ot)?((e,t)=>{const n=Dt(t);return wt(e.contentDocument,n).toArray()})(e,t):((e,t)=>{const n=Dt(t);return N(n,(t=>{const n=Lt(t)?ht([R(`\x3c!--${t.content}--\x3e`)]):ht(t.content),o=St(t)?t.itemAttributes:{};return $(qe(e,n.dom,o))}))})(e,t))))(e,t.entries);var r;S(o,(t=>{ft(e,"Indent"===n?"IndentList":"OutdentList",t.dom)})),r=t.sourceList,S(o,(e=>{me(r,e)})),he(t.sourceList)}))},Rt=(e,t)=>{const n=Ce((e=>{const t=(e=>{const t=at(e,e.selection.getStart()),n=L(e.selection.getSelectedBlocks(),Me);return t.toArray().concat(n)})(e),n=(e=>{const t=e.selection.getStart();return e.dom.getParents(t,"ol,ul",lt(e,t))})(e);return T(n,(e=>{return t=$(e),ee(t).exists((e=>Ie(e.dom)&&oe(e).exists((e=>!Be(e.dom)))&&re(e).exists((e=>!Be(e.dom)))));var t})).fold((()=>dt(e,t)),(e=>[e]))})(e)),o=Ce((e=>L(st(e),Re))(e));let r=!1;if(n.length||o.length){const s=e.selection.getBookmark();It(e,n,t),((e,t,n)=>{S(n,"Indent"===t?Ye:t=>Xe(e,t))})(e,t,o),e.selection.moveToBookmark(s),e.selection.setRng(tt(e.selection.getRng())),e.nodeChanged(),r=!0}return r},Ut=(e,t)=>!(e=>{const t=rt(e);return ut(e,t)})(e)&&Rt(e,t),$t=e=>Ut(e,"Indent"),_t=e=>Ut(e,"Outdent"),Ht=e=>Ut(e,"Flatten"),Ft=e=>"\ufeff"===e;var Vt=tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager");const jt=Te.DOM,Kt=e=>{const t={},n=n=>{let o=e[n?"startContainer":"endContainer"],r=e[n?"startOffset":"endOffset"];if(De(o)){const e=jt.create("span",{"data-mce-type":"bookmark"});o.hasChildNodes()?(r=Math.min(r,o.childNodes.length-1),n?o.insertBefore(e,o.childNodes[r]):jt.insertAfter(e,o.childNodes[r])):o.appendChild(e),o=e,r=0}t[n?"startContainer":"endContainer"]=o,t[n?"startOffset":"endOffset"]=r};return n(!0),e.collapsed||n(),t},zt=e=>{const t=t=>{let n=e[t?"startContainer":"endContainer"],o=e[t?"startOffset":"endOffset"];if(n){if(De(n)&&n.parentNode){const e=n;o=(e=>{var t;let n=null===(t=e.parentNode)||void 0===t?void 0:t.firstChild,o=0;for(;n;){if(n===e)return o;De(n)&&"bookmark"===n.getAttribute("data-mce-type")||o++,n=n.nextSibling}return-1})(n),n=n.parentNode,jt.remove(e),!n.hasChildNodes()&&jt.isBlock(n)&&n.appendChild(jt.create("br"))}e[t?"startContainer":"endContainer"]=n,e[t?"startOffset":"endOffset"]=o}};t(!0),t();const n=jt.createRng();return n.setStart(e.startContainer,e.startOffset),e.endContainer&&n.setEnd(e.endContainer,e.endOffset),tt(n)},Qt=e=>{switch(e){case"UL":return"ToggleUlList";case"OL":return"ToggleOlList";case"DL":return"ToggleDLList"}},Wt=(e,t)=>{xe.each(t,((t,n)=>{e.setAttribute(n,t)}))},qt=(e,t,n)=>{((e,t,n)=>{const o=n["list-style-type"]?n["list-style-type"]:null;e.setStyle(t,"list-style-type",o)})(e,t,n),((e,t,n)=>{Wt(t,n["list-attributes"]),xe.each(e.select("li",t),(e=>{Wt(e,n["list-item-attributes"])}))})(e,t,n)},Zt=(e,t)=>l(t)&&!He(t,e.schema.getBlockElements()),Gt=(e,t,n,o)=>{let r=t[n?"startContainer":"endContainer"];const s=t[n?"startOffset":"endOffset"];De(r)&&(r=r.childNodes[Math.min(s,r.childNodes.length-1)]||r),!n&&$e(r.nextSibling)&&(r=r.nextSibling);const i=(t,n)=>{var r;const s=new ye(t,(t=>{for(;!e.dom.isBlock(t)&&t.parentNode&&o!==t;)t=t.parentNode;return t})(t)),i=n?"next":"prev";let l;for(;l=s[i]();)if(!Fe(e,l)&&!Ft(l.textContent)&&0!==(null===(r=l.textContent)||void 0===r?void 0:r.length))return h.some(l);return h.none()};if(n&&we(r))if(Ft(r.textContent))r=i(r,!1).getOr(r);else for(null!==r.parentNode&&Zt(e,r.parentNode)&&(r=r.parentNode);null!==r.previousSibling&&(Zt(e,r.previousSibling)||we(r.previousSibling));)r=r.previousSibling;if(!n&&we(r))if(Ft(r.textContent))r=i(r,!0).getOr(r);else for(null!==r.parentNode&&Zt(e,r.parentNode)&&(r=r.parentNode);null!==r.nextSibling&&(Zt(e,r.nextSibling)||we(r.nextSibling));)r=r.nextSibling;for(;r.parentNode!==o;){const t=r.parentNode;if(_e(e,r))return r;if(/^(TD|TH)$/.test(t.nodeName))return r;r=t}return r},Jt=(e,t,n)=>{const o=e.selection.getRng();let r="LI";const s=lt(e,((e,t)=>{const n=e.selection.getStart(!0),o=Gt(e,t,!0,e.getBody());return r=$(o),s=$(t.commonAncestorContainer),i=r,l=function(e,...t){return(...n)=>{const o=t.concat(n);return e.apply(null,o)}}(H,s),ae(i,l,void 0).isSome()?t.commonAncestorContainer:n;var r,s,i,l})(e,o)),i=e.dom;if("false"===i.getContentEditable(e.selection.getNode()))return;"DL"===(t=t.toUpperCase())&&(r="DT");const l=Kt(o),a=L(((e,t,n)=>{const o=[],r=e.dom,s=Gt(e,t,!0,n),i=Gt(e,t,!1,n);let l;const a=[];for(let e=s;e&&(a.push(e),e!==i);e=e.nextSibling);return xe.each(a,(t=>{var s;if(_e(e,t))return o.push(t),void(l=null);if(r.isBlock(t)||$e(t))return $e(t)&&r.remove(t),void(l=null);const i=t.nextSibling;Vt.isBookmarkNode(t)&&(Be(i)||_e(e,i)||!i&&t.parentNode===n)?l=null:(l||(l=r.create("p"),null===(s=t.parentNode)||void 0===s||s.insertBefore(l,t),o.push(l)),l.appendChild(t))})),o})(e,o,s),e.dom.isEditable);xe.each(a,(o=>{let s;const l=o.previousSibling,a=o.parentNode;Ie(a)||(l&&Be(l)&&l.nodeName===t&&((e,t,n)=>{const o=e.getStyle(t,"list-style-type");let r=n?n["list-style-type"]:"";return r=null===r?"":r,o===r})(i,l,n)?(s=l,o=i.rename(o,r),l.appendChild(o)):(s=i.create(t),a.insertBefore(s,o),s.appendChild(o),o=i.rename(o,r)),((e,t)=>{xe.each(["margin","margin-right","margin-bottom","margin-left","margin-top","padding","padding-right","padding-bottom","padding-left","padding-top"],(n=>e.setStyle(t,n,"")))})(i,o),qt(i,s,n),Yt(e.dom,s))})),e.selection.setRng(zt(l))},Xt=(e,t,n)=>{return((e,t)=>Be(e)&&e.nodeName===(null==t?void 0:t.nodeName))(t,n)&&((e,t,n)=>e.getStyle(t,"list-style-type",!0)===e.getStyle(n,"list-style-type",!0))(e,t,n)&&(o=n,t.className===o.className);var o},Yt=(e,t)=>{let n,o=t.nextSibling;if(Xt(e,t,o)){const r=o;for(;n=r.firstChild;)t.appendChild(n);e.remove(r)}if(o=t.previousSibling,Xt(e,t,o)){const r=o;for(;n=r.lastChild;)t.insertBefore(n,t.firstChild);e.remove(r)}},en=(e,t,n,o)=>{if(t.nodeName!==n){const r=e.dom.rename(t,n);qt(e.dom,r,o),ft(e,Qt(n),r)}else qt(e.dom,t,o),ft(e,Qt(n),t)},tn=(e,t,n,o)=>{if(t.classList.forEach(((e,n,o)=>{e.startsWith("tox-")&&(o.remove(e),0===o.length&&t.removeAttribute("class"))})),t.nodeName!==n){const r=e.dom.rename(t,n);qt(e.dom,r,o),ft(e,Qt(n),r)}else qt(e.dom,t,o),ft(e,Qt(n),t)},nn=e=>"list-style-type"in e,on=(e,t,n)=>{const o=rt(e);if(pt(e,o))return;const s=(e=>{const t=rt(e),n=e.selection.getSelectedBlocks();return((e,t)=>l(e)&&1===t.length&&t[0]===e)(t,n)?(e=>L(e.querySelectorAll(ot),Be))(t):L(n,(e=>Be(e)&&t!==e))})(e),i=r(n)?n:{};s.length>0?((e,t,n,o,r)=>{const s=Be(t);if(!s||t.nodeName!==o||nn(r)||ct(t)){Jt(e,o,r);const i=Kt(e.selection.getRng()),l=s?[t,...n]:n,a=s&&ct(t)?tn:en;xe.each(l,(t=>{a(e,t,o,r)})),e.selection.setRng(zt(i))}else Ht(e)})(e,o,s,t,i):((e,t,n,o)=>{if(t!==e.getBody())if(t)if(t.nodeName!==n||nn(o)||ct(t)){const r=Kt(e.selection.getRng());ct(t)&&t.classList.forEach(((e,n,o)=>{e.startsWith("tox-")&&(o.remove(e),0===o.length&&t.removeAttribute("class"))})),qt(e.dom,t,o);const s=e.dom.rename(t,n);Yt(e.dom,s),e.selection.setRng(zt(r)),Jt(e,n,o),ft(e,Qt(n),s)}else Ht(e);else Jt(e,n,o),ft(e,Qt(n),t)})(e,o,t,i)},rn=Te.DOM,sn=(e,t)=>{const n=xe.grep(e.select("ol,ul",t));xe.each(n,(t=>{((e,t)=>{const n=t.parentElement;if(n&&"LI"===n.nodeName&&n.firstChild===t){const o=n.previousSibling;o&&"LI"===o.nodeName?(o.appendChild(t),Ve(e,n)&&rn.remove(n)):rn.setStyle(n,"listStyleType","none")}if(Be(n)){const e=n.previousSibling;e&&"LI"===e.nodeName&&e.appendChild(t)}})(e,t)}))},ln=(e,t,n,o)=>{let r=t.startContainer;const s=t.startOffset;if(we(r)&&(n?s<r.data.length:s>0))return r;const i=e.schema.getNonEmptyElements();De(r)&&(r=fe.getNode(r,s));const l=new ye(r,o);n&&((e,t)=>!!$e(t)&&e.isBlock(t.nextSibling)&&!$e(t.previousSibling))(e.dom,r)&&l.next();const a=n?l.next.bind(l):l.prev2.bind(l);for(;r=a();){if("LI"===r.nodeName&&!r.hasChildNodes())return r;if(i[r.nodeName])return r;if(we(r)&&r.data.length>0)return r}return null},an=(e,t)=>{const n=t.childNodes;return 1===n.length&&!Be(n[0])&&e.isBlock(n[0])},dn=e=>h.from(e).map($).filter(Z).exists((e=>((e,t=!1)=>{return ie(e)?e.dom.isContentEditable:(n=e,le(((e,t)=>_(e,t)),ce,n,"[contenteditable]",void 0)).fold(m(t),(e=>"true"===(e=>e.dom.contentEditable)(e)));var n})(e)&&!C(["details"],Q(e)))),cn=(e,t,n)=>{let o;const r=an(e,n)?n.firstChild:n;if(((e,t)=>{an(e,t)&&dn(t.firstChild)&&e.remove(t.firstChild,!0)})(e,t),!Ve(e,t,!0))for(;o=t.firstChild;)r.appendChild(o)},mn=(e,t,n)=>{let o;const r=t.parentNode;if(!je(e,t)||!je(e,n))return;Be(n.lastChild)&&(o=n.lastChild),r===n.lastChild&&$e(r.previousSibling)&&e.remove(r.previousSibling);const s=n.lastChild;s&&$e(s)&&t.hasChildNodes()&&e.remove(s),Ve(e,n,!0)&&ge($(n)),cn(e,t,n),o&&n.appendChild(o);const i=((e,t)=>{const n=e.dom,o=t.dom;return n!==o&&n.contains(o)})($(n),$(t))?e.getParents(t,Be,n):[];e.remove(t),S(i,(t=>{Ve(e,t)&&t!==e.getRoot()&&e.remove(t)}))},un=(e,t)=>{const n=e.dom,o=e.selection,r=o.getStart(),s=it(e,r),i=n.getParent(o.getStart(),"LI",s);if(i){const r=i.parentElement;if(r===e.getBody()&&Ve(n,r))return!0;const l=tt(o.getRng()),a=n.getParent(ln(e,l,t,s),"LI",s),d=a&&(t?n.isChildOf(i,a):n.isChildOf(a,i));if(a&&a!==i&&!d)return e.undoManager.transact((()=>{var n,o;t?((e,t,n,o)=>{const r=e.dom;if(r.isEmpty(o))((e,t,n)=>{ge($(n)),mn(e.dom,t,n),e.selection.setCursorLocation(n,0)})(e,n,o);else{const s=Kt(t);mn(r,n,o),e.selection.setRng(zt(s))}})(e,l,a,i):(null===(o=(n=i).parentNode)||void 0===o?void 0:o.firstChild)===n?_t(e):((e,t,n,o)=>{const r=Kt(t);mn(e.dom,n,o);const s=zt(r);e.selection.setRng(s)})(e,l,i,a)})),!0;if(d&&!t&&a!==i)return e.undoManager.transact((()=>{if(l.commonAncestorContainer.parentElement){const t=Kt(l),o=l.commonAncestorContainer.parentElement;cn(n,l.commonAncestorContainer.parentElement,a),o.remove();const r=zt(t);e.selection.setRng(r)}})),!0;if(!a&&!t&&0===l.startOffset&&0===l.endOffset)return e.undoManager.transact((()=>{Ht(e)})),!0}return!1},pn=e=>{const t=e.selection.getStart(),n=it(e,t);return e.dom.getParent(t,"LI,DT,DD",n)||st(e).length>0},gn=(e,t)=>{const n=e.selection;return!pt(e,n.getNode())&&(n.isCollapsed()?((e,t)=>un(e,t)||((e,t)=>{const n=e.dom,o=e.selection.getStart(),r=it(e,o),s=n.getParent(o,n.isBlock,r);if(s&&n.isEmpty(s,void 0,{checkRootAsContent:!0})){const o=tt(e.selection.getRng()),i=n.getParent(ln(e,o,t,r),"LI",r);if(i){const l=e=>C(["td","th","caption"],Q(e)),a=e=>e.dom===r;return!!((e,t,n=u)=>P(e,t,n).getOr(e.isNone()&&t.isNone()))(de($(i),l,a),de($(o.startContainer),l,a),H)&&(e.undoManager.transact((()=>{const o=i.parentNode;((e,t,n)=>{const o=e.getParent(t.parentNode,e.isBlock,n);e.remove(t),o&&e.isEmpty(o)&&e.remove(o)})(n,s,r),Yt(n,o),e.selection.select(i,!0),e.selection.collapse(t)})),!0)}}return!1})(e,t))(e,t):(e=>!!pn(e)&&(e.undoManager.transact((()=>{e.execCommand("Delete"),sn(e.dom,e.getBody())})),!0))(e))},hn=e=>{const t=k(yt(e).split("")),n=N(t,((e,t)=>{const n=e.toUpperCase().charCodeAt(0)-"A".charCodeAt(0)+1;return Math.pow(26,t)*n}));return O(n,((e,t)=>e+t),0)},fn=e=>{if(--e<0)return"";{const t=e%26,n=Math.floor(e/26);return fn(n)+String.fromCharCode("A".charCodeAt(0)+t)}},yn=e=>{const t=parseInt(e.start,10);return M(e.listStyleType,"upper-alpha")?fn(t):M(e.listStyleType,"lower-alpha")?fn(t).toLowerCase():e.start},vn=(e,t)=>()=>{const n=rt(e);return l(n)&&n.nodeName===t},Cn=e=>{e.addCommand("mceListProps",(()=>{(e=>{const t=rt(e);Pe(t)&&!pt(e,t)&&e.windowManager.open({title:"List Properties",body:{type:"panel",items:[{type:"input",name:"start",label:"Start list at number",inputMode:"numeric"}]},initialData:{start:yn({start:e.dom.getAttrib(t,"start","1"),listStyleType:h.from(e.dom.getStyle(t,"list-style-type"))})},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:t=>{(e=>{switch((e=>/^[0-9]+$/.test(e)?2:/^[A-Z]+$/.test(e)?0:/^[a-z]+$/.test(e)?1:e.length>0?4:3)(e)){case 2:return h.some({listStyleType:h.none(),start:e});case 0:return h.some({listStyleType:h.some("upper-alpha"),start:hn(e).toString()});case 1:return h.some({listStyleType:h.some("lower-alpha"),start:hn(e).toString()});case 3:return h.some({listStyleType:h.none(),start:""});case 4:return h.none()}})(t.getData().start).each((t=>{e.execCommand("mceListUpdate",!1,{attrs:{start:"1"===t.start?"":t.start},styles:{"list-style-type":t.listStyleType.getOr("")}})})),t.close()}})})(e)}))};var bn=tinymce.util.Tools.resolve("tinymce.html.Node");const Nn=e=>3===e.type,Sn=e=>0===e.length,Ln=e=>{const t=(t,n)=>{const o=bn.create("li");S(t,(e=>o.append(e))),n?e.insert(o,n,!0):e.append(o)},n=O(e.children(),((e,n)=>Nn(n)?[...e,n]:Sn(e)||Nn(n)?e:(t(e,n),[])),[]);Sn(n)||t(n)},On=(e,t)=>n=>(n.setEnabled(e.selection.isEditable()),gt(e,(o=>{n.setActive(mt(o.parents,t)),n.setEnabled(!pt(e,o.element)&&e.selection.isEditable())}))),An=(e,t)=>n=>gt(e,(o=>n.setEnabled(mt(o.parents,t)&&!pt(e,o.element))));e.add("lists",(e=>((e=>{(0,e.options.register)("lists_indent_on_tab",{processor:"boolean",default:!0})})(e),(e=>{e.on("PreInit",(()=>{const{parser:t}=e;t.addNodeFilter("ul,ol",(e=>S(e,Ln)))}))})(e),e.hasPlugin("rtc",!0)?Cn(e):((e=>{ze(e)&&(e=>{e.on("keydown",(t=>{t.keyCode!==ve.TAB||ve.metaKeyPressed(t)||e.undoManager.transact((()=>{(t.shiftKey?_t(e):$t(e))&&t.preventDefault()}))}))})(e),(e=>{e.on("ExecCommand",(t=>{const n=t.command.toLowerCase();"delete"!==n&&"forwarddelete"!==n||!pn(e)||sn(e.dom,e.getBody())})),e.on("keydown",(t=>{t.keyCode===ve.BACKSPACE?gn(e,!1)&&t.preventDefault():t.keyCode===ve.DELETE&&gn(e,!0)&&t.preventDefault()}))})(e)})(e),(e=>{e.on("BeforeExecCommand",(t=>{const n=t.command.toLowerCase();"indent"===n?$t(e):"outdent"===n&&_t(e)})),e.addCommand("InsertUnorderedList",((t,n)=>{on(e,"UL",n)})),e.addCommand("InsertOrderedList",((t,n)=>{on(e,"OL",n)})),e.addCommand("InsertDefinitionList",((t,n)=>{on(e,"DL",n)})),e.addCommand("RemoveList",(()=>{Ht(e)})),Cn(e),e.addCommand("mceListUpdate",((t,n)=>{r(n)&&((e,t)=>{const n=rt(e);null===n||pt(e,n)||e.undoManager.transact((()=>{r(t.styles)&&e.dom.setStyles(n,t.styles),r(t.attrs)&&Ne(t.attrs,((t,o)=>e.dom.setAttrib(n,o,t)))}))})(e,n)})),e.addQueryStateHandler("InsertUnorderedList",vn(e,"UL")),e.addQueryStateHandler("InsertOrderedList",vn(e,"OL")),e.addQueryStateHandler("InsertDefinitionList",vn(e,"DL"))})(e)),(e=>{const t=t=>()=>e.execCommand(t);e.hasPlugin("advlist")||(e.ui.registry.addToggleButton("numlist",{icon:"ordered-list",active:!1,tooltip:"Numbered list",onAction:t("InsertOrderedList"),onSetup:On(e,"OL")}),e.ui.registry.addToggleButton("bullist",{icon:"unordered-list",active:!1,tooltip:"Bullet list",onAction:t("InsertUnorderedList"),onSetup:On(e,"UL")}))})(e),(e=>{const t={text:"List properties...",icon:"ordered-list",onAction:()=>e.execCommand("mceListProps"),onSetup:An(e,"OL")};e.ui.registry.addMenuItem("listprops",t),e.ui.registry.addContextMenu("lists",{update:t=>{const n=rt(e,t);return Pe(n)?["listprops"]:[]}})})(e),(e=>({backspaceDelete:t=>{gn(e,t)}}))(e))))}();
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager");const t=e=>t=>(e=>{const t=typeof e;return null===e?"null":"object"===t&&Array.isArray(e)?"array":"object"===t&&(n=o=e,(r=String).prototype.isPrototypeOf(n)||(null===(s=o.constructor)||void 0===s?void 0:s.name)===r.name)?"string":t;var n,o,r,s})(t)===e,n=e=>t=>typeof t===e,o=t("string"),r=t("object"),s=t("array"),i=n("boolean"),l=e=>!(e=>null==e)(e),a=n("function"),d=n("number"),c=()=>{},m=(e,t)=>e===t,u=e=>t=>!e(t),p=(!1,()=>false);class g{constructor(e,t){this.tag=e,this.value=t}static some(e){return new g(!0,e)}static none(){return g.singletonNone}fold(e,t){return this.tag?t(this.value):e()}isSome(){return this.tag}isNone(){return!this.tag}map(e){return this.tag?g.some(e(this.value)):g.none()}bind(e){return this.tag?e(this.value):g.none()}exists(e){return this.tag&&e(this.value)}forall(e){return!this.tag||e(this.value)}filter(e){return!this.tag||e(this.value)?this:g.none()}getOr(e){return this.tag?this.value:e}or(e){return this.tag?this:e}getOrThunk(e){return this.tag?this.value:e()}orThunk(e){return this.tag?this:e()}getOrDie(e){if(this.tag)return this.value;throw new Error(null!=e?e:"Called getOrDie on None")}static from(e){return l(e)?g.some(e):g.none()}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(e){this.tag&&e(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}g.singletonNone=new g(!1);const h=Array.prototype.slice,f=Array.prototype.indexOf,y=Array.prototype.push,v=(e,t)=>{return n=e,o=t,f.call(n,o)>-1;var n,o},C=(e,t)=>{for(let n=0,o=e.length;n<o;n++)if(t(e[n],n))return!0;return!1},b=(e,t)=>{const n=e.length,o=new Array(n);for(let r=0;r<n;r++){const n=e[r];o[r]=t(n,r)}return o},S=(e,t)=>{for(let n=0,o=e.length;n<o;n++)t(e[n],n)},N=(e,t)=>{const n=[];for(let o=0,r=e.length;o<r;o++){const r=e[o];t(r,o)&&n.push(r)}return n},L=(e,t,n)=>(S(e,((e,o)=>{n=t(n,e,o)})),n),O=(e,t,n)=>{for(let o=0,r=e.length;o<r;o++){const r=e[o];if(t(r,o))return g.some(r);if(n(r,o))break}return g.none()},A=(e,t)=>O(e,t,p),x=(e,t)=>(e=>{const t=[];for(let n=0,o=e.length;n<o;++n){if(!s(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);y.apply(t,e[n])}return t})(b(e,t)),k=e=>{const t=h.call(e,0);return t.reverse(),t},T=(e,t)=>t>=0&&t<e.length?g.some(e[t]):g.none(),E=e=>T(e,0),w=e=>T(e,e.length-1),D=(e,t)=>{const n=[],o=a(t)?e=>C(n,(n=>t(n,e))):e=>v(n,e);for(let t=0,r=e.length;t<r;t++){const r=e[t];o(r)||n.push(r)}return n},B=(e,t,n=m)=>e.exists((e=>n(e,t))),I=(e,t,n)=>e.isSome()&&t.isSome()?g.some(n(e.getOrDie(),t.getOrDie())):g.none(),P=e=>{if(null==e)throw new Error("Node cannot be null or undefined");return{dom:e}},M=(e,t)=>{const n=(t||document).createElement("div");if(n.innerHTML=e,!n.hasChildNodes()||n.childNodes.length>1){const t="HTML does not have a single root node";throw console.error(t,e),new Error(t)}return P(n.childNodes[0])},R=(e,t)=>{const n=(t||document).createElement(e);return P(n)},U=P,$=(e,t)=>e.dom===t.dom;"undefined"!=typeof window?window:Function("return this;")();const _=e=>e.dom.nodeName.toLowerCase(),H=e=>e.dom.nodeType,V=(1,e=>1===H(e));const F=e=>t=>V(t)&&_(t)===e,j=e=>g.from(e.dom.parentNode).map(U),K=e=>b(e.dom.childNodes,U),z=(e,t)=>{const n=e.dom.childNodes;return g.from(n[t]).map(U)},Q=e=>z(e,0),W=e=>z(e,e.dom.childNodes.length-1),q=(e,t,n)=>{let o=e.dom;const r=a(n)?n:p;for(;o.parentNode;){o=o.parentNode;const e=U(o);if(t(e))return g.some(e);if(r(e))break}return g.none()},Z=(e,t,n)=>((e,t,n,o,r)=>o(n)?g.some(n):a(r)&&r(n)?g.none():t(n,o,r))(0,q,e,t,n),G=(e,t)=>{j(e).each((n=>{n.dom.insertBefore(t.dom,e.dom)}))},J=(e,t)=>{e.dom.appendChild(t.dom)},X=(e,t)=>{S(t,(t=>{J(e,t)}))},Y=e=>{e.dom.textContent="",S(K(e),(e=>{ee(e)}))},ee=e=>{const t=e.dom;null!==t.parentNode&&t.parentNode.removeChild(t)};var te=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),ne=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),oe=tinymce.util.Tools.resolve("tinymce.util.VK");const re=e=>b(e,U),se=Object.keys,ie=(e,t)=>{const n=se(e);for(let o=0,r=n.length;o<r;o++){const r=n[o];t(e[r],r)}},le=(e,t)=>{const n=e.dom;ie(t,((e,t)=>{((e,t,n)=>{if(!(o(n)||i(n)||d(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")})(n,t,e)}))},ae=e=>L(e.dom.attributes,((e,t)=>(e[t.name]=t.value,e)),{}),de=e=>((e,t)=>U(e.dom.cloneNode(!0)))(e),ce=(e,t)=>{const n=((e,t)=>{const n=R(t),o=ae(e);return le(n,o),n})(e,t);var o,r;r=n,(e=>g.from(e.dom.nextSibling).map(U))(o=e).fold((()=>{j(o).each((e=>{J(e,r)}))}),(e=>{G(e,r)}));const s=K(e);return X(n,s),ee(e),n};var me=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),ue=tinymce.util.Tools.resolve("tinymce.util.Tools");const pe=e=>t=>l(t)&&t.nodeName.toLowerCase()===e,ge=e=>t=>l(t)&&e.test(t.nodeName),he=e=>l(e)&&3===e.nodeType,fe=e=>l(e)&&1===e.nodeType,ye=ge(/^(OL|UL|DL)$/),ve=ge(/^(OL|UL)$/),Ce=pe("ol"),be=ge(/^(LI|DT|DD)$/),Se=ge(/^(DT|DD)$/),Ne=ge(/^(TH|TD)$/),Le=pe("br"),Oe=(e,t)=>l(t)&&t.nodeName in e.schema.getTextBlockElements(),Ae=(e,t)=>l(e)&&e.nodeName in t,xe=(e,t)=>l(t)&&t.nodeName in e.schema.getVoidElements(),ke=(e,t,n)=>{const o=e.isEmpty(t);return!(n&&e.select("span[data-mce-type=bookmark]",t).length>0)&&o},Te=(e,t)=>e.isChildOf(t,e.getRoot()),Ee=e=>t=>t.options.get(e),we=Ee("lists_indent_on_tab"),De=Ee("forced_root_block"),Be=Ee("forced_root_block_attrs"),Ie=(e,t)=>{const n=e.dom,o=e.schema.getBlockElements(),r=n.createFragment(),s=De(e),i=Be(e);let l,a,d=!1;for(a=n.create(s,i),Ae(t.firstChild,o)||r.appendChild(a);l=t.firstChild;){const e=l.nodeName;d||"SPAN"===e&&"bookmark"===l.getAttribute("data-mce-type")||(d=!0),Ae(l,o)?(r.appendChild(l),a=null):(a||(a=n.create(s,i),r.appendChild(a)),a.appendChild(l))}return!d&&a&&a.appendChild(n.create("br",{"data-mce-bogus":"1"})),r},Pe=me.DOM,Me=F("dd"),Re=F("dt"),Ue=(e,t)=>{var n;Me(t)?ce(t,"dt"):Re(t)&&(n=t,g.from(n.dom.parentElement).map(U)).each((n=>((e,t,n)=>{const o=Pe.select('span[data-mce-type="bookmark"]',t),r=Ie(e,n),s=Pe.createRng();s.setStartAfter(n),s.setEndAfter(t);const i=s.extractContents();for(let t=i.firstChild;t;t=t.firstChild)if("LI"===t.nodeName&&e.dom.isEmpty(t)){Pe.remove(t);break}e.dom.isEmpty(i)||Pe.insertAfter(i,t),Pe.insertAfter(r,t);const l=n.parentElement;l&&ke(e.dom,l)&&(e=>{const t=e.parentNode;t&&ue.each(o,(e=>{t.insertBefore(e,n.parentNode)})),Pe.remove(e)})(l),Pe.remove(n),ke(e.dom,t)&&Pe.remove(t)})(e,n.dom,t.dom)))},$e=e=>{Re(e)&&ce(e,"dd")},_e=(e,t)=>{if(he(e))return{container:e,offset:t};const n=te.getNode(e,t);return he(n)?{container:n,offset:t>=e.childNodes.length?n.data.length:0}:n.previousSibling&&he(n.previousSibling)?{container:n.previousSibling,offset:n.previousSibling.data.length}:n.nextSibling&&he(n.nextSibling)?{container:n.nextSibling,offset:0}:{container:e,offset:t}},He=e=>{const t=e.cloneRange(),n=_e(e.startContainer,e.startOffset);t.setStart(n.container,n.offset);const o=_e(e.endContainer,e.endOffset);return t.setEnd(o.container,o.offset),t},Ve=["OL","UL","DL"],Fe=Ve.join(","),je=(e,t)=>{const n=t||e.selection.getStart(!0);return e.dom.getParent(n,Fe,Qe(e,n))},Ke=e=>{const t=e.selection.getSelectedBlocks();return N(((e,t)=>{const n=ue.map(t,(t=>e.dom.getParent(t,"li,dd,dt",Qe(e,t))||t));return D(n)})(e,t),be)},ze=(e,t)=>{const n=e.dom.getParents(t,"TD,TH");return n.length>0?n[0]:e.getBody()},Qe=(e,t)=>{const n=e.dom.getParents(t,e.dom.isBlock),o=A(n,(t=>{return n=e.schema,!ye(o=t)&&!be(o)&&C(Ve,(e=>n.isValidChild(o.nodeName,e)));var n,o}));return o.getOr(e.getBody())},We=(e,t)=>{const n=e.dom.getParents(t,"ol,ul",Qe(e,t));return w(n)},qe=(e,t)=>{const n=b(t,(t=>We(e,t).getOr(t)));return D(n)},Ze=e=>/\btox\-/.test(e.className),Ge=(e,t)=>O(e,ye,Ne).exists((e=>e.nodeName===t&&!Ze(e))),Je=(e,t)=>null!==t&&!e.dom.isEditable(t),Xe=(e,t)=>{const n=e.dom.getParent(t,"ol,ul,dl");return Je(e,n)},Ye=(e,t)=>{const n=e.selection.getNode();return t({parents:e.dom.getParents(n),element:n}),e.on("NodeChange",t),()=>e.off("NodeChange",t)},et=(e,t)=>{const n=(t||document).createDocumentFragment();return S(e,(e=>{n.appendChild(e.dom)})),U(n)},tt=(e,t,n)=>e.dispatch("ListMutation",{action:t,element:n}),nt=(ot=/^\s+|\s+$/g,e=>e.replace(ot,""));var ot;const rt=(e,t,n)=>{((e,t,n)=>{if(!o(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n);(e=>void 0!==e.style&&a(e.style.getPropertyValue))(e)&&e.style.setProperty(t,n)})(e.dom,t,n)},st=e=>((e,t)=>{const n=e.dom;if(1!==n.nodeType)return!1;{const e=n;if(void 0!==e.matches)return e.matches(t);if(void 0!==e.msMatchesSelector)return e.msMatchesSelector(t);if(void 0!==e.webkitMatchesSelector)return e.webkitMatchesSelector(t);if(void 0!==e.mozMatchesSelector)return e.mozMatchesSelector(t);throw new Error("Browser lacks native selectors")}})(e,"OL,UL"),it=e=>Q(e).exists(st),lt=e=>"listAttributes"in e,at=e=>"isComment"in e,dt=e=>e.depth>0,ct=e=>e.isSelected,mt=e=>{const t=K(e),n=W(e).exists(st)?t.slice(0,-1):t;return b(n,de)},ut=(e,t)=>{J(e.item,t.list)},pt=(e,t)=>{const n={list:R(t,e),item:R("li",e)};return J(n.list,n.item),n},gt=(e,t,n)=>{const o=t.slice(0,n.depth);return w(o).each((t=>{if(lt(n)){const o=((e,t,n)=>{const o=R("li",e);return le(o,t),X(o,n),o})(e,n.itemAttributes,n.content);((e,t)=>{J(e.list,t),e.item=t})(t,o),((e,t)=>{_(e.list)!==t.listType&&(e.list=ce(e.list,t.listType)),le(e.list,t.listAttributes)})(t,n)}else if((e=>"isInPreviousLi"in e)(n)){if(n.isInPreviousLi){const o=((e,t,n,o)=>{const r=R(o,e);return le(r,t),X(r,n),r})(e,n.attributes,n.content,n.type);J(t.item,o)}}else{const e=M(`\x3c!--${n.content}--\x3e`);J(t.list,e)}})),o},ht=(e,t)=>{let n=g.none();const o=L(t,((t,o,r)=>lt(o)?o.depth>t.length?((e,t,n)=>{const o=((e,t,n)=>{const o=[];for(let r=0;r<n;r++)o.push(pt(e,t.listType));return o})(e,n,n.depth-t.length);var r;return(e=>{for(let t=1;t<e.length;t++)ut(e[t-1],e[t])})(o),((e,t)=>{for(let t=0;t<e.length-1;t++)rt(e[t].item,"list-style-type","none");w(e).each((e=>{le(e.list,t.listAttributes),le(e.item,t.itemAttributes),X(e.item,t.content)}))})(o,n),r=o,I(w(t),E(r),ut),t.concat(o)})(e,t,o):gt(e,t,o):0===r&&at(o)?(n=g.some(o),t):gt(e,t,o)),[]);return n.each((e=>{const t=M(`\x3c!--${e.content}--\x3e`);E(o).each((e=>{((e,t)=>{Q(e).fold((()=>{J(e,t)}),(n=>{e.dom.insertBefore(t.dom,n.dom)}))})(e.list,t)}))})),E(o).map((e=>e.list))},ft=e=>(S(e,((t,n)=>{((e,t)=>{const n=e[t].depth,o=e=>e.depth===n&&!e.dirty,r=e=>e.depth<n;return O(k(e.slice(0,t)),o,r).orThunk((()=>O(e.slice(t+1),o,r)))})(e,n).fold((()=>{t.dirty&&lt(t)&&(e=>{e.listAttributes=((e,t)=>{const n={};var o;return((e,t,n,o)=>{ie(e,((e,r)=>{(t(e,r)?n:o)(e,r)}))})(e,t,(o=n,(e,t)=>{o[t]=e}),c),n})(e.listAttributes,((e,t)=>"start"!==t))})(t)}),(e=>{return o=e,void(lt(n=t)&&lt(o)&&(n.listType=o.listType,n.listAttributes={...o.listAttributes}));var n,o}))})),e),yt=(e,t,n,o)=>{var r,s;if(8===H(s=o)||"#comment"===_(s))return[{depth:e+1,content:null!==(r=o.dom.nodeValue)&&void 0!==r?r:"",dirty:!1,isSelected:!1,isComment:!0}];t.each((e=>{$(e.start,o)&&n.set(!0)}));const i=((e,t,n)=>j(e).filter(V).map((o=>({depth:t,dirty:!1,isSelected:n,content:mt(e),itemAttributes:ae(e),listAttributes:ae(o),listType:_(o),isInPreviousLi:!1}))))(o,e,n.get());t.each((e=>{$(e.end,o)&&n.set(!1)}));const l=W(o).filter(st).map((o=>Ct(e,t,n,o))).getOr([]);return i.toArray().concat(l)},vt=(e,t,n,o)=>Q(o).filter(st).fold((()=>yt(e,t,n,o)),(r=>{const s=L(K(o),((o,r,s)=>{if(0===s)return o;{const s=yt(e,t,n,r).map((e=>((e,t,n)=>lt(e)?{depth:e.depth,dirty:e.dirty,content:e.content,isSelected:e.isSelected,type:t,attributes:e.itemAttributes,isInPreviousLi:!0}:e)(e,r.dom.nodeName.toLowerCase())));return o.concat(s)}}),[]);return Ct(e,t,n,r).concat(s)})),Ct=(e,t,n,o)=>x(K(o),(o=>(st(o)?Ct:vt)(e+1,t,n,o))),bt=(e,t,n)=>{const o=((e,t)=>{const n=(e=>{let t=!1;return{get:()=>t,set:e=>{t=e}}})();return b(e,(e=>({sourceList:e,entries:Ct(0,t,n,e)})))})(t,(e=>{const t=b(Ke(e),U);return I(A(t,u(it)),A(k(t),u(it)),((e,t)=>({start:e,end:t})))})(e));S(o,(t=>{((e,t)=>{S(N(e,ct),(e=>((e,t)=>{switch(e){case"Indent":t.depth++;break;case"Outdent":t.depth--;break;case"Flatten":t.depth=0}t.dirty=!0})(t,e)))})(t.entries,n);const o=((e,t)=>x(((e,t)=>{if(0===e.length)return[];{let n=t(e[0]);const o=[];let r=[];for(let s=0,i=e.length;s<i;s++){const i=e[s],l=t(i);l!==n&&(o.push(r),r=[]),n=l,r.push(i)}return 0!==r.length&&o.push(r),o}})(t,dt),(t=>E(t).exists(dt)?((e,t)=>{const n=ft(t);return ht(e.contentDocument,n).toArray()})(e,t):((e,t)=>{const n=ft(t);return b(n,(t=>{const n=at(t)?et([M(`\x3c!--${t.content}--\x3e`)]):et(t.content);return U(Ie(e,n.dom))}))})(e,t))))(e,t.entries);var r;S(o,(t=>{tt(e,"Indent"===n?"IndentList":"OutdentList",t.dom)})),r=t.sourceList,S(o,(e=>{G(r,e)})),ee(t.sourceList)}))},St=(e,t)=>{const n=re((e=>{const t=(e=>{const t=We(e,e.selection.getStart()),n=N(e.selection.getSelectedBlocks(),ve);return t.toArray().concat(n)})(e),n=(e=>{const t=e.selection.getStart();return e.dom.getParents(t,"ol,ul",Qe(e,t))})(e);return A(n,(e=>{return t=U(e),j(t).exists((e=>be(e.dom)&&Q(e).exists((e=>!ye(e.dom)))&&W(e).exists((e=>!ye(e.dom)))));var t})).fold((()=>qe(e,t)),(e=>[e]))})(e)),o=re((e=>N(Ke(e),Se))(e));let r=!1;if(n.length||o.length){const s=e.selection.getBookmark();bt(e,n,t),((e,t,n)=>{S(n,"Indent"===t?$e:t=>Ue(e,t))})(e,t,o),e.selection.moveToBookmark(s),e.selection.setRng(He(e.selection.getRng())),e.nodeChanged(),r=!0}return r},Nt=(e,t)=>!(e=>{const t=je(e);return Je(e,t)})(e)&&St(e,t),Lt=e=>Nt(e,"Indent"),Ot=e=>Nt(e,"Outdent"),At=e=>Nt(e,"Flatten"),xt=e=>"\ufeff"===e;var kt=tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager");const Tt=me.DOM,Et=e=>{const t={},n=n=>{let o=e[n?"startContainer":"endContainer"],r=e[n?"startOffset":"endOffset"];if(fe(o)){const e=Tt.create("span",{"data-mce-type":"bookmark"});o.hasChildNodes()?(r=Math.min(r,o.childNodes.length-1),n?o.insertBefore(e,o.childNodes[r]):Tt.insertAfter(e,o.childNodes[r])):o.appendChild(e),o=e,r=0}t[n?"startContainer":"endContainer"]=o,t[n?"startOffset":"endOffset"]=r};return n(!0),e.collapsed||n(),t},wt=e=>{const t=t=>{let n=e[t?"startContainer":"endContainer"],o=e[t?"startOffset":"endOffset"];if(n){if(fe(n)&&n.parentNode){const e=n;o=(e=>{var t;let n=null===(t=e.parentNode)||void 0===t?void 0:t.firstChild,o=0;for(;n;){if(n===e)return o;fe(n)&&"bookmark"===n.getAttribute("data-mce-type")||o++,n=n.nextSibling}return-1})(n),n=n.parentNode,Tt.remove(e),!n.hasChildNodes()&&Tt.isBlock(n)&&n.appendChild(Tt.create("br"))}e[t?"startContainer":"endContainer"]=n,e[t?"startOffset":"endOffset"]=o}};t(!0),t();const n=Tt.createRng();return n.setStart(e.startContainer,e.startOffset),e.endContainer&&n.setEnd(e.endContainer,e.endOffset),He(n)},Dt=e=>{switch(e){case"UL":return"ToggleUlList";case"OL":return"ToggleOlList";case"DL":return"ToggleDLList"}},Bt=(e,t)=>{ue.each(t,((t,n)=>{e.setAttribute(n,t)}))},It=(e,t,n)=>{((e,t,n)=>{const o=n["list-style-type"]?n["list-style-type"]:null;e.setStyle(t,"list-style-type",o)})(e,t,n),((e,t,n)=>{Bt(t,n["list-attributes"]),ue.each(e.select("li",t),(e=>{Bt(e,n["list-item-attributes"])}))})(e,t,n)},Pt=(e,t)=>l(t)&&!Ae(t,e.schema.getBlockElements()),Mt=(e,t,n,o)=>{let r=t[n?"startContainer":"endContainer"];const s=t[n?"startOffset":"endOffset"];fe(r)&&(r=r.childNodes[Math.min(s,r.childNodes.length-1)]||r),!n&&Le(r.nextSibling)&&(r=r.nextSibling);const i=(t,n)=>{var r;const s=new ne(t,(t=>{for(;!e.dom.isBlock(t)&&t.parentNode&&o!==t;)t=t.parentNode;return t})(t)),i=n?"next":"prev";let l;for(;l=s[i]();)if(!xe(e,l)&&!xt(l.textContent)&&0!==(null===(r=l.textContent)||void 0===r?void 0:r.length))return g.some(l);return g.none()};if(n&&he(r))if(xt(r.textContent))r=i(r,!1).getOr(r);else for(null!==r.parentNode&&Pt(e,r.parentNode)&&(r=r.parentNode);null!==r.previousSibling&&(Pt(e,r.previousSibling)||he(r.previousSibling));)r=r.previousSibling;if(!n&&he(r))if(xt(r.textContent))r=i(r,!0).getOr(r);else for(null!==r.parentNode&&Pt(e,r.parentNode)&&(r=r.parentNode);null!==r.nextSibling&&(Pt(e,r.nextSibling)||he(r.nextSibling));)r=r.nextSibling;for(;r.parentNode!==o;){const t=r.parentNode;if(Oe(e,r))return r;if(/^(TD|TH)$/.test(t.nodeName))return r;r=t}return r},Rt=(e,t,n)=>{const o=e.selection.getRng();let r="LI";const s=Qe(e,((e,t)=>{const n=e.selection.getStart(!0),o=Mt(e,t,!0,e.getBody());return r=U(o),s=U(t.commonAncestorContainer),i=r,l=function(e,...t){return(...n)=>{const o=t.concat(n);return e.apply(null,o)}}($,s),q(i,l,void 0).isSome()?t.commonAncestorContainer:n;var r,s,i,l})(e,o)),i=e.dom;if("false"===i.getContentEditable(e.selection.getNode()))return;"DL"===(t=t.toUpperCase())&&(r="DT");const l=Et(o),a=N(((e,t,n)=>{const o=[],r=e.dom,s=Mt(e,t,!0,n),i=Mt(e,t,!1,n);let l;const a=[];for(let e=s;e&&(a.push(e),e!==i);e=e.nextSibling);return ue.each(a,(t=>{var s;if(Oe(e,t))return o.push(t),void(l=null);if(r.isBlock(t)||Le(t))return Le(t)&&r.remove(t),void(l=null);const i=t.nextSibling;kt.isBookmarkNode(t)&&(ye(i)||Oe(e,i)||!i&&t.parentNode===n)?l=null:(l||(l=r.create("p"),null===(s=t.parentNode)||void 0===s||s.insertBefore(l,t),o.push(l)),l.appendChild(t))})),o})(e,o,s),e.dom.isEditable);ue.each(a,(o=>{let s;const l=o.previousSibling,a=o.parentNode;be(a)||(l&&ye(l)&&l.nodeName===t&&((e,t,n)=>{const o=e.getStyle(t,"list-style-type");let r=n?n["list-style-type"]:"";return r=null===r?"":r,o===r})(i,l,n)?(s=l,o=i.rename(o,r),l.appendChild(o)):(s=i.create(t),a.insertBefore(s,o),s.appendChild(o),o=i.rename(o,r)),((e,t,n)=>{ue.each(["margin","margin-right","margin-bottom","margin-left","margin-top","padding","padding-right","padding-bottom","padding-left","padding-top"],(n=>e.setStyle(t,n,"")))})(i,o),It(i,s,n),$t(e.dom,s))})),e.selection.setRng(wt(l))},Ut=(e,t,n)=>{return((e,t)=>ye(e)&&e.nodeName===(null==t?void 0:t.nodeName))(t,n)&&((e,t,n)=>e.getStyle(t,"list-style-type",!0)===e.getStyle(n,"list-style-type",!0))(e,t,n)&&(o=n,t.className===o.className);var o},$t=(e,t)=>{let n,o=t.nextSibling;if(Ut(e,t,o)){const r=o;for(;n=r.firstChild;)t.appendChild(n);e.remove(r)}if(o=t.previousSibling,Ut(e,t,o)){const r=o;for(;n=r.lastChild;)t.insertBefore(n,t.firstChild);e.remove(r)}},_t=(e,t,n,o)=>{if(t.nodeName!==n){const r=e.dom.rename(t,n);It(e.dom,r,o),tt(e,Dt(n),r)}else It(e.dom,t,o),tt(e,Dt(n),t)},Ht=(e,t,n,o)=>{if(t.classList.forEach(((e,n,o)=>{e.startsWith("tox-")&&(o.remove(e),0===o.length&&t.removeAttribute("class"))})),t.nodeName!==n){const r=e.dom.rename(t,n);It(e.dom,r,o),tt(e,Dt(n),r)}else It(e.dom,t,o),tt(e,Dt(n),t)},Vt=e=>"list-style-type"in e,Ft=(e,t,n)=>{const o=je(e);if(Xe(e,o))return;const s=(e=>{const t=je(e),n=e.selection.getSelectedBlocks();return((e,t)=>l(e)&&1===t.length&&t[0]===e)(t,n)?(e=>N(e.querySelectorAll(Fe),ye))(t):N(n,(e=>ye(e)&&t!==e))})(e),i=r(n)?n:{};s.length>0?((e,t,n,o,r)=>{const s=ye(t);if(!s||t.nodeName!==o||Vt(r)||Ze(t)){Rt(e,o,r);const i=Et(e.selection.getRng()),l=s?[t,...n]:n,a=s&&Ze(t)?Ht:_t;ue.each(l,(t=>{a(e,t,o,r)})),e.selection.setRng(wt(i))}else At(e)})(e,o,s,t,i):((e,t,n,o)=>{if(t!==e.getBody())if(t)if(t.nodeName!==n||Vt(o)||Ze(t)){const r=Et(e.selection.getRng());Ze(t)&&t.classList.forEach(((e,n,o)=>{e.startsWith("tox-")&&(o.remove(e),0===o.length&&t.removeAttribute("class"))})),It(e.dom,t,o);const s=e.dom.rename(t,n);$t(e.dom,s),e.selection.setRng(wt(r)),Rt(e,n,o),tt(e,Dt(n),s)}else At(e);else Rt(e,n,o),tt(e,Dt(n),t)})(e,o,t,i)},jt=me.DOM,Kt=(e,t)=>{const n=ue.grep(e.select("ol,ul",t));ue.each(n,(t=>{((e,t)=>{const n=t.parentElement;if(n&&"LI"===n.nodeName&&n.firstChild===t){const o=n.previousSibling;o&&"LI"===o.nodeName?(o.appendChild(t),ke(e,n)&&jt.remove(n)):jt.setStyle(n,"listStyleType","none")}if(ye(n)){const e=n.previousSibling;e&&"LI"===e.nodeName&&e.appendChild(t)}})(e,t)}))},zt=(e,t,n,o)=>{let r=t.startContainer;const s=t.startOffset;if(he(r)&&(n?s<r.data.length:s>0))return r;const i=e.schema.getNonEmptyElements();fe(r)&&(r=te.getNode(r,s));const l=new ne(r,o);n&&((e,t)=>!!Le(t)&&e.isBlock(t.nextSibling)&&!Le(t.previousSibling))(e.dom,r)&&l.next();const a=n?l.next.bind(l):l.prev2.bind(l);for(;r=a();){if("LI"===r.nodeName&&!r.hasChildNodes())return r;if(i[r.nodeName])return r;if(he(r)&&r.data.length>0)return r}return null},Qt=(e,t)=>{const n=t.childNodes;return 1===n.length&&!ye(n[0])&&e.isBlock(n[0])},Wt=(e,t,n)=>{let o;const r=t.parentNode;if(!Te(e,t)||!Te(e,n))return;ye(n.lastChild)&&(o=n.lastChild),r===n.lastChild&&Le(r.previousSibling)&&e.remove(r.previousSibling);const s=n.lastChild;s&&Le(s)&&t.hasChildNodes()&&e.remove(s),ke(e,n,!0)&&Y(U(n)),((e,t,n)=>{let o;const r=Qt(e,n)?n.firstChild:n;if(((e,t)=>{Qt(e,t)&&e.remove(t.firstChild,!0)})(e,t),!ke(e,t,!0))for(;o=t.firstChild;)r.appendChild(o)})(e,t,n),o&&n.appendChild(o);const i=((e,t)=>{const n=e.dom,o=t.dom;return n!==o&&n.contains(o)})(U(n),U(t))?e.getParents(t,ye,n):[];e.remove(t),S(i,(t=>{ke(e,t)&&t!==e.getRoot()&&e.remove(t)}))},qt=(e,t)=>{const n=e.dom,o=e.selection,r=o.getStart(),s=ze(e,r),i=n.getParent(o.getStart(),"LI",s);if(i){const r=i.parentElement;if(r===e.getBody()&&ke(n,r))return!0;const l=He(o.getRng()),a=n.getParent(zt(e,l,t,s),"LI",s);if(a&&a!==i)return e.undoManager.transact((()=>{var n,o;t?((e,t,n,o)=>{const r=e.dom;if(r.isEmpty(o))((e,t,n)=>{Y(U(n)),Wt(e.dom,t,n),e.selection.setCursorLocation(n,0)})(e,n,o);else{const s=Et(t);Wt(r,n,o),e.selection.setRng(wt(s))}})(e,l,a,i):(null===(o=(n=i).parentNode)||void 0===o?void 0:o.firstChild)===n?Ot(e):((e,t,n,o)=>{const r=Et(t);Wt(e.dom,n,o);const s=wt(r);e.selection.setRng(s)})(e,l,i,a)})),!0;if(!a&&!t&&0===l.startOffset&&0===l.endOffset)return e.undoManager.transact((()=>{At(e)})),!0}return!1},Zt=e=>{const t=e.selection.getStart(),n=ze(e,t);return e.dom.getParent(t,"LI,DT,DD",n)||Ke(e).length>0},Gt=(e,t)=>{const n=e.selection;return!Xe(e,n.getNode())&&(n.isCollapsed()?((e,t)=>qt(e,t)||((e,t)=>{const n=e.dom,o=e.selection.getStart(),r=ze(e,o),s=n.getParent(o,n.isBlock,r);if(s&&n.isEmpty(s)){const o=He(e.selection.getRng()),i=n.getParent(zt(e,o,t,r),"LI",r);if(i){const l=e=>v(["td","th","caption"],_(e)),a=e=>e.dom===r;return!!((e,t,n=m)=>I(e,t,n).getOr(e.isNone()&&t.isNone()))(Z(U(i),l,a),Z(U(o.startContainer),l,a),$)&&(e.undoManager.transact((()=>{const o=i.parentNode;((e,t,n)=>{const o=e.getParent(t.parentNode,e.isBlock,n);e.remove(t),o&&e.isEmpty(o)&&e.remove(o)})(n,s,r),$t(n,o),e.selection.select(i,!0),e.selection.collapse(t)})),!0)}}return!1})(e,t))(e,t):(e=>!!Zt(e)&&(e.undoManager.transact((()=>{e.execCommand("Delete"),Kt(e.dom,e.getBody())})),!0))(e))},Jt=e=>{const t=k(nt(e).split("")),n=b(t,((e,t)=>{const n=e.toUpperCase().charCodeAt(0)-"A".charCodeAt(0)+1;return Math.pow(26,t)*n}));return L(n,((e,t)=>e+t),0)},Xt=e=>{if(--e<0)return"";{const t=e%26,n=Math.floor(e/26);return Xt(n)+String.fromCharCode("A".charCodeAt(0)+t)}},Yt=e=>{const t=parseInt(e.start,10);return B(e.listStyleType,"upper-alpha")?Xt(t):B(e.listStyleType,"lower-alpha")?Xt(t).toLowerCase():e.start},en=(e,t)=>()=>{const n=je(e);return l(n)&&n.nodeName===t},tn=e=>{e.addCommand("mceListProps",(()=>{(e=>{const t=je(e);Ce(t)&&!Xe(e,t)&&e.windowManager.open({title:"List Properties",body:{type:"panel",items:[{type:"input",name:"start",label:"Start list at number",inputMode:"numeric"}]},initialData:{start:Yt({start:e.dom.getAttrib(t,"start","1"),listStyleType:g.from(e.dom.getStyle(t,"list-style-type"))})},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:t=>{(e=>{switch((e=>/^[0-9]+$/.test(e)?2:/^[A-Z]+$/.test(e)?0:/^[a-z]+$/.test(e)?1:e.length>0?4:3)(e)){case 2:return g.some({listStyleType:g.none(),start:e});case 0:return g.some({listStyleType:g.some("upper-alpha"),start:Jt(e).toString()});case 1:return g.some({listStyleType:g.some("lower-alpha"),start:Jt(e).toString()});case 3:return g.some({listStyleType:g.none(),start:""});case 4:return g.none()}})(t.getData().start).each((t=>{e.execCommand("mceListUpdate",!1,{attrs:{start:"1"===t.start?"":t.start},styles:{"list-style-type":t.listStyleType.getOr("")}})})),t.close()}})})(e)}))};var nn=tinymce.util.Tools.resolve("tinymce.html.Node");const on=e=>3===e.type,rn=e=>0===e.length,sn=e=>{const t=(t,n)=>{const o=nn.create("li");S(t,(e=>o.append(e))),n?e.insert(o,n,!0):e.append(o)},n=L(e.children(),((e,n)=>on(n)?[...e,n]:rn(e)||on(n)?e:(t(e,n),[])),[]);rn(n)||t(n)},ln=(e,t)=>n=>(n.setEnabled(e.selection.isEditable()),Ye(e,(o=>{n.setActive(Ge(o.parents,t)),n.setEnabled(!Xe(e,o.element)&&e.selection.isEditable())}))),an=(e,t)=>n=>Ye(e,(o=>n.setEnabled(Ge(o.parents,t)&&!Xe(e,o.element))));e.add("lists",(e=>((e=>{(0,e.options.register)("lists_indent_on_tab",{processor:"boolean",default:!0})})(e),(e=>{e.on("PreInit",(()=>{const{parser:t}=e;t.addNodeFilter("ul,ol",(e=>S(e,sn)))}))})(e),e.hasPlugin("rtc",!0)?tn(e):((e=>{we(e)&&(e=>{e.on("keydown",(t=>{t.keyCode!==oe.TAB||oe.metaKeyPressed(t)||e.undoManager.transact((()=>{(t.shiftKey?Ot(e):Lt(e))&&t.preventDefault()}))}))})(e),(e=>{e.on("ExecCommand",(t=>{const n=t.command.toLowerCase();"delete"!==n&&"forwarddelete"!==n||!Zt(e)||Kt(e.dom,e.getBody())})),e.on("keydown",(t=>{t.keyCode===oe.BACKSPACE?Gt(e,!1)&&t.preventDefault():t.keyCode===oe.DELETE&&Gt(e,!0)&&t.preventDefault()}))})(e)})(e),(e=>{e.on("BeforeExecCommand",(t=>{const n=t.command.toLowerCase();"indent"===n?Lt(e):"outdent"===n&&Ot(e)})),e.addCommand("InsertUnorderedList",((t,n)=>{Ft(e,"UL",n)})),e.addCommand("InsertOrderedList",((t,n)=>{Ft(e,"OL",n)})),e.addCommand("InsertDefinitionList",((t,n)=>{Ft(e,"DL",n)})),e.addCommand("RemoveList",(()=>{At(e)})),tn(e),e.addCommand("mceListUpdate",((t,n)=>{r(n)&&((e,t)=>{const n=je(e);null===n||Xe(e,n)||e.undoManager.transact((()=>{r(t.styles)&&e.dom.setStyles(n,t.styles),r(t.attrs)&&ie(t.attrs,((t,o)=>e.dom.setAttrib(n,o,t)))}))})(e,n)})),e.addQueryStateHandler("InsertUnorderedList",en(e,"UL")),e.addQueryStateHandler("InsertOrderedList",en(e,"OL")),e.addQueryStateHandler("InsertDefinitionList",en(e,"DL"))})(e)),(e=>{const t=t=>()=>e.execCommand(t);e.hasPlugin("advlist")||(e.ui.registry.addToggleButton("numlist",{icon:"ordered-list",active:!1,tooltip:"Numbered list",onAction:t("InsertOrderedList"),onSetup:ln(e,"OL")}),e.ui.registry.addToggleButton("bullist",{icon:"unordered-list",active:!1,tooltip:"Bullet list",onAction:t("InsertUnorderedList"),onSetup:ln(e,"UL")}))})(e),(e=>{const t={text:"List properties...",icon:"ordered-list",onAction:()=>e.execCommand("mceListProps"),onSetup:an(e,"OL")};e.ui.registry.addMenuItem("listprops",t),e.ui.registry.addContextMenu("lists",{update:t=>{const n=je(e,t);return Ce(n)?["listprops"]:[]}})})(e),(e=>({backspaceDelete:t=>{Gt(e,t)}}))(e))))}();
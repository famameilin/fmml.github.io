import{B as L,C as y,ag as D,H as B,ah as I,f as n,E as V,D as o,Z as _,G as s,R as u,I as b,Y as R}from"./index-8848ccae.js";const[q,i]=L("cell"),z={tag:V("div"),icon:String,size:String,title:o,value:o,label:o,center:Boolean,isLink:Boolean,border:_,required:Boolean,iconPrefix:String,valueClass:s,labelClass:s,titleClass:s,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},A=y({},z,D);var N=B({name:q,props:A,setup(e,{slots:a}){const v=I(),g=()=>{if(a.label||u(e.label))return n("div",{class:[i("label"),e.labelClass]},[a.label?a.label():e.label])},h=()=>{var l;if(a.title||u(e.title)){const t=(l=a.title)==null?void 0:l.call(a);return Array.isArray(t)&&t.length===0?void 0:n("div",{class:[i("title"),e.titleClass],style:e.titleStyle},[t||n("span",null,[e.title]),g()])}},m=()=>{const l=a.value||a.default;if(l||u(e.value))return n("div",{class:[i("value"),e.valueClass]},[l?l():n("span",null,[e.value])])},C=()=>{if(a.icon)return a.icon();if(e.icon)return n(b,{name:e.icon,class:i("left-icon"),classPrefix:e.iconPrefix},null)},w=()=>{if(a["right-icon"])return a["right-icon"]();if(e.isLink){const l=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return n(b,{name:l,class:i("right-icon")},null)}};return()=>{var l;const{tag:t,size:r,center:P,border:k,isLink:S,required:x}=e,c=(l=e.clickable)!=null?l:S,d={center:P,required:x,clickable:c,borderless:!k};return r&&(d[r]=!!r),n(t,{class:i(d),role:c?"button":void 0,tabindex:c?0:void 0,onClick:v},{default:()=>{var f;return[C(),h(),m(),w(),(f=a.extra)==null?void 0:f.call(a)]}})}}});const G=R(N);export{G as C,z as c};
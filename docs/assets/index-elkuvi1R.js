(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const Yr="180",ih=0,xo=1,sh=2,Ql=1,ec=2,yn=3,Bn=0,Vt=1,Ft=2,kn=0,Ti=1,sn=2,yo=3,Mo=4,ah=5,Qn=100,rh=101,oh=102,lh=103,ch=104,hh=200,dh=201,uh=202,fh=203,nr=204,ir=205,ph=206,mh=207,gh=208,vh=209,_h=210,xh=211,yh=212,Mh=213,Sh=214,sr=0,ar=1,rr=2,Ci=3,or=4,lr=5,cr=6,hr=7,tc=0,wh=1,bh=2,On=0,Eh=1,Th=2,Ah=3,nc=4,Rh=5,Ch=6,Ph=7,ic=300,Pi=301,Li=302,dr=303,ur=304,ta=306,ts=1e3,ti=1001,fr=1002,rn=1003,Lh=1004,ps=1005,hn=1006,fa=1007,ni=1008,fn=1009,sc=1010,ac=1011,ns=1012,$r=1013,si=1014,Mn=1015,ls=1016,Kr=1017,jr=1018,is=1020,rc=35902,oc=35899,lc=1021,cc=1022,an=1023,ss=1026,as=1027,hc=1028,Zr=1029,dc=1030,Jr=1031,Qr=1033,Vs=33776,Gs=33777,Ws=33778,Xs=33779,pr=35840,mr=35841,gr=35842,vr=35843,_r=36196,xr=37492,yr=37496,Mr=37808,Sr=37809,wr=37810,br=37811,Er=37812,Tr=37813,Ar=37814,Rr=37815,Cr=37816,Pr=37817,Lr=37818,Ir=37819,Dr=37820,Ur=37821,Nr=36492,Fr=36494,kr=36495,Or=36283,Br=36284,zr=36285,Hr=36286,Ih=3200,Dh=3201,uc=0,Uh=1,Nn="",Lt="srgb",Ii="srgb-linear",Ks="linear",ht="srgb",ci=7680,So=519,Nh=512,Fh=513,kh=514,fc=515,Oh=516,Bh=517,zh=518,Hh=519,wo=35044,bo="300 es",dn=2e3,js=2001;class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eo=1234567;const $i=Math.PI/180,rs=180/Math.PI;function Fi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function eo(i,e){return(i%e+e)%e}function Vh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Gh(i,e,t){return i!==e?(t-i)/(e-i):0}function Ki(i,e,t){return(1-t)*i+t*e}function Wh(i,e,t,n){return Ki(i,e,1-Math.exp(-t*n))}function Xh(i,e=1){return e-Math.abs(eo(i,e*2)-e)}function qh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Yh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $h(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Kh(i,e){return i+Math.random()*(e-i)}function jh(i){return i*(.5-Math.random())}function Zh(i){i!==void 0&&(Eo=i);let e=Eo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jh(i){return i*$i}function Qh(i){return i*rs}function ed(i){return(i&i-1)===0&&i!==0}function td(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function id(i,e,t,n,s){const a=Math.cos,r=Math.sin,o=a(t/2),c=r(t/2),l=a((e+n)/2),h=r((e+n)/2),f=a((e-n)/2),d=r((e-n)/2),u=a((n-e)/2),g=r((n-e)/2);switch(s){case"XYX":i.set(o*h,c*f,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*f,o*l);break;case"ZXZ":i.set(c*f,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*u,o*l);break;case"YXY":i.set(c*u,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*u,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ji={DEG2RAD:$i,RAD2DEG:rs,generateUUID:Fi,clamp:Ke,euclideanModulo:eo,mapLinear:Vh,inverseLerp:Gh,lerp:Ki,damp:Wh,pingpong:Xh,smoothstep:qh,smootherstep:Yh,randInt:$h,randFloat:Kh,randFloatSpread:jh,seededRandom:Zh,degToRad:Jh,radToDeg:Qh,isPowerOfTwo:ed,ceilPowerOfTwo:td,floorPowerOfTwo:nd,setQuaternionFromProperEuler:id,normalize:Ot,denormalize:bi};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ki{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3];const d=a[r+0],u=a[r+1],g=a[r+2],v=a[r+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=u,e[t+2]=g,e[t+3]=v;return}if(f!==v||c!==d||l!==u||h!==g){let p=1-o;const m=c*d+l*u+h*g+f*v,M=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){const P=Math.sqrt(w),S=Math.atan2(P,m*M);p=Math.sin(p*S)/P,o=Math.sin(o*S)/P}const x=o*M;if(c=c*p+d*x,l=l*p+u*x,h=h*p+g*x,f=f*p+v*x,p===1-o){const P=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=P,l*=P,h*=P,f*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=a[r],d=a[r+1],u=a[r+2],g=a[r+3];return e[t]=o*g+h*f+c*u-l*d,e[t+1]=c*g+h*d+l*f-o*u,e[t+2]=l*g+h*u+o*d-c*f,e[t+3]=h*g-o*f-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(a/2),d=c(n/2),u=c(s/2),g=c(a/2);switch(r){case"XYZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"YZX":this._x=d*h*f+l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f-d*u*g;break;case"XZY":this._x=d*h*f-l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(a-l)*u,this._z=(r-s)*u}else if(n>o&&n>f){const u=2*Math.sqrt(1+n-o-f);this._w=(h-c)/u,this._x=.25*u,this._y=(s+r)/u,this._z=(a+l)/u}else if(o>f){const u=2*Math.sqrt(1+o-n-f);this._w=(a-l)/u,this._x=(s+r)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+f-n-o);this._w=(r-s)/u,this._x=(a+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+s*l-a*c,this._y=s*h+r*c+a*o-n*l,this._z=a*h+r*l+n*c-s*o,this._w=r*h-n*o-s*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const u=1-t;return this._w=u*r+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=r*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=a*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(To.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(To.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*s-o*n),h=2*(o*t-a*s),f=2*(a*n-r*t);return this.x=t+c*l+r*f-o*h,this.y=n+c*h+o*l-a*f,this.z=s+c*f+a*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=s*c-a*o,this.y=a*r-n*c,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pa.copy(this).projectOnVector(e),this.sub(pa)}reflect(e){return this.sub(pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pa=new A,To=new ki;class qe{constructor(e,t,n,s,a,r,o,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,l)}set(e,t,n,s,a,r,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],v=s[0],p=s[3],m=s[6],M=s[1],w=s[4],x=s[7],P=s[2],S=s[5],R=s[8];return a[0]=r*v+o*M+c*P,a[3]=r*p+o*w+c*S,a[6]=r*m+o*x+c*R,a[1]=l*v+h*M+f*P,a[4]=l*p+h*w+f*S,a[7]=l*m+h*x+f*R,a[2]=d*v+u*M+g*P,a[5]=d*p+u*w+g*S,a[8]=d*m+u*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*a*h+n*o*c+s*a*l-s*r*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*r-o*l,d=o*c-h*a,u=l*a-r*c,g=t*f+n*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*l-h*n)*v,e[2]=(o*n-s*r)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*a-o*t)*v,e[6]=u*v,e[7]=(n*c-l*t)*v,e[8]=(r*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-s*l,s*c,-s*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new qe;function pc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sd(){const i=Zs("canvas");return i.style.display="block",i}const Ao={};function os(i){i in Ao||(Ao[i]=!0,console.warn(i))}function ad(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Ro=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Co=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rd(){const i={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ht&&(s.r=wn(s.r),s.g=wn(s.g),s.b=wn(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ht&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?Ks:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return os("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return os("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ii]:{primaries:e,whitePoint:n,transfer:Ks,toXYZ:Ro,fromXYZ:Co,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Ro,fromXYZ:Co,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}const nt=rd();function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hi;class od{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hi===void 0&&(hi=Zs("canvas")),hi.width=e.width,hi.height=e.height;const s=hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=wn(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ld=0;class to{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(ga(s[r].image)):a.push(ga(s[r]))}else a=ga(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?od.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cd=0;const va=new A;class zt extends Ni{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=ti,s=ti,a=hn,r=ni,o=an,c=fn,l=zt.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Fi(),this.name="",this.source=new to(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(va).x}get height(){return this.source.getSize(va).y}get depth(){return this.source.getSize(va).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=ic;zt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,x=(u+1)/2,P=(m+1)/2,S=(h+d)/4,R=(f+v)/4,L=(g+p)/4;return w>x&&w>P?w<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(w),s=S/n,a=R/n):x>P?x<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(x),n=S/s,a=L/s):P<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(P),n=R/a,s=L/a),this.set(n,s,a,t),this}let M=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(f-v)/M,this.z=(d-h)/M,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hd extends Ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:n.depth},a=new zt(s);this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new to(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends hd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class mc extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dd extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Qt):Qt.fromBufferAttribute(a,r),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ms.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ms.copy(n.boundingBox)),ms.applyMatrix4(e.matrixWorld),this.union(ms)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),gs.subVectors(this.max,zi),di.subVectors(e.a,zi),ui.subVectors(e.b,zi),fi.subVectors(e.c,zi),Tn.subVectors(ui,di),An.subVectors(fi,ui),Wn.subVectors(di,fi);let t=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-Wn.z,Wn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,Wn.z,0,-Wn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-Wn.y,Wn.x,0];return!_a(t,di,ui,fi,gs)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,di,ui,fi,gs))?!1:(vs.crossVectors(Tn,An),t=[vs.x,vs.y,vs.z],_a(t,di,ui,fi,gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mn=[new A,new A,new A,new A,new A,new A,new A,new A],Qt=new A,ms=new cs,di=new A,ui=new A,fi=new A,Tn=new A,An=new A,Wn=new A,zi=new A,gs=new A,vs=new A,Xn=new A;function _a(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Xn.fromArray(i,a);const o=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),c=e.dot(Xn),l=t.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const ud=new cs,Hi=new A,xa=new A;class hs{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ud.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);const t=Hi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Hi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(xa)),this.expandByPoint(Hi.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gn=new A,ya=new A,_s=new A,Rn=new A,Ma=new A,xs=new A,Sa=new A;class na{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ya.copy(e).add(t).multiplyScalar(.5),_s.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(ya);const a=e.distanceTo(t)*.5,r=-this.direction.dot(_s),o=Rn.dot(this.direction),c=-Rn.dot(_s),l=Rn.lengthSq(),h=Math.abs(1-r*r);let f,d,u,g;if(h>0)if(f=r*c-o,d=r*o-c,g=a*h,f>=0)if(d>=-g)if(d<=g){const v=1/h;f*=v,d*=v,u=f*(f+r*d+2*o)+d*(r*f+d+2*c)+l}else d=a,f=Math.max(0,-(r*d+o)),u=-f*f+d*(d+2*c)+l;else d=-a,f=Math.max(0,-(r*d+o)),u=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-r*a+o)),d=f>0?-a:Math.min(Math.max(-a,-c),a),u=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-a,-c),a),u=d*(d+2*c)+l):(f=Math.max(0,-(r*a+o)),d=f>0?a:Math.min(Math.max(-a,-c),a),u=-f*f+d*(d+2*c)+l);else d=r>0?-a:a,f=Math.max(0,-(r*d+o)),u=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ya).addScaledVector(_s,d),u}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const n=gn.dot(this.direction),s=gn.dot(gn)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,s,a){Ma.subVectors(t,e),xs.subVectors(n,e),Sa.crossVectors(Ma,xs);let r=this.direction.dot(Sa),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Rn.subVectors(this.origin,e);const c=o*this.direction.dot(xs.crossVectors(Rn,xs));if(c<0)return null;const l=o*this.direction.dot(Ma.cross(Rn));if(l<0||c+l>r)return null;const h=-o*Rn.dot(Sa);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,n,s,a,r,o,c,l,h,f,d,u,g,v,p){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,l,h,f,d,u,g,v,p)}set(e,t,n,s,a,r,o,c,l,h,f,d,u,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=a,m[5]=r,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/pi.setFromMatrixColumn(e,0).length(),a=1/pi.setFromMatrixColumn(e,1).length(),r=1/pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const d=r*h,u=r*f,g=o*h,v=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=u+g*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=g+u*l,t[10]=r*c}else if(e.order==="YXZ"){const d=c*h,u=c*f,g=l*h,v=l*f;t[0]=d+v*o,t[4]=g*o-u,t[8]=r*l,t[1]=r*f,t[5]=r*h,t[9]=-o,t[2]=u*o-g,t[6]=v+d*o,t[10]=r*c}else if(e.order==="ZXY"){const d=c*h,u=c*f,g=l*h,v=l*f;t[0]=d-v*o,t[4]=-r*f,t[8]=g+u*o,t[1]=u+g*o,t[5]=r*h,t[9]=v-d*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const d=r*h,u=r*f,g=o*h,v=o*f;t[0]=c*h,t[4]=g*l-u,t[8]=d*l+v,t[1]=c*f,t[5]=v*l+d,t[9]=u*l-g,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const d=r*c,u=r*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-d*f,t[8]=g*f+u,t[1]=f,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=r*c,u=r*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+v,t[5]=r*h,t[9]=u*f-g,t[2]=g*f-u,t[6]=o*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fd,e,pd)}lookAt(e,t,n){const s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Cn.crossVectors(n,Xt),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Cn.crossVectors(n,Xt)),Cn.normalize(),ys.crossVectors(Xt,Cn),s[0]=Cn.x,s[4]=ys.x,s[8]=Xt.x,s[1]=Cn.y,s[5]=ys.y,s[9]=Xt.y,s[2]=Cn.z,s[6]=ys.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],v=n[6],p=n[10],m=n[14],M=n[3],w=n[7],x=n[11],P=n[15],S=s[0],R=s[4],L=s[8],y=s[12],E=s[1],I=s[5],k=s[9],B=s[13],K=s[2],q=s[6],Y=s[10],ee=s[14],G=s[3],fe=s[7],me=s[11],Re=s[15];return a[0]=r*S+o*E+c*K+l*G,a[4]=r*R+o*I+c*q+l*fe,a[8]=r*L+o*k+c*Y+l*me,a[12]=r*y+o*B+c*ee+l*Re,a[1]=h*S+f*E+d*K+u*G,a[5]=h*R+f*I+d*q+u*fe,a[9]=h*L+f*k+d*Y+u*me,a[13]=h*y+f*B+d*ee+u*Re,a[2]=g*S+v*E+p*K+m*G,a[6]=g*R+v*I+p*q+m*fe,a[10]=g*L+v*k+p*Y+m*me,a[14]=g*y+v*B+p*ee+m*Re,a[3]=M*S+w*E+x*K+P*G,a[7]=M*R+w*I+x*q+P*fe,a[11]=M*L+w*k+x*Y+P*me,a[15]=M*y+w*B+x*ee+P*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],u=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+a*c*f-s*l*f-a*o*d+n*l*d+s*o*u-n*c*u)+v*(+t*c*u-t*l*d+a*r*d-s*r*u+s*l*h-a*c*h)+p*(+t*l*f-t*o*u-a*r*f+n*r*u+a*o*h-n*l*h)+m*(-s*o*h-t*c*f+t*o*d+s*r*f-n*r*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],u=e[11],g=e[12],v=e[13],p=e[14],m=e[15],M=f*p*l-v*d*l+v*c*u-o*p*u-f*c*m+o*d*m,w=g*d*l-h*p*l-g*c*u+r*p*u+h*c*m-r*d*m,x=h*v*l-g*f*l+g*o*u-r*v*u-h*o*m+r*f*m,P=g*f*c-h*v*c-g*o*d+r*v*d+h*o*p-r*f*p,S=t*M+n*w+s*x+a*P;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/S;return e[0]=M*R,e[1]=(v*d*a-f*p*a-v*s*u+n*p*u+f*s*m-n*d*m)*R,e[2]=(o*p*a-v*c*a+v*s*l-n*p*l-o*s*m+n*c*m)*R,e[3]=(f*c*a-o*d*a-f*s*l+n*d*l+o*s*u-n*c*u)*R,e[4]=w*R,e[5]=(h*p*a-g*d*a+g*s*u-t*p*u-h*s*m+t*d*m)*R,e[6]=(g*c*a-r*p*a-g*s*l+t*p*l+r*s*m-t*c*m)*R,e[7]=(r*d*a-h*c*a+h*s*l-t*d*l-r*s*u+t*c*u)*R,e[8]=x*R,e[9]=(g*f*a-h*v*a-g*n*u+t*v*u+h*n*m-t*f*m)*R,e[10]=(r*v*a-g*o*a+g*n*l-t*v*l-r*n*m+t*o*m)*R,e[11]=(h*o*a-r*f*a-h*n*l+t*f*l+r*n*u-t*o*u)*R,e[12]=P*R,e[13]=(h*v*s-g*f*s+g*n*d-t*v*d-h*n*p+t*f*p)*R,e[14]=(g*o*s-r*v*s-g*n*c+t*v*c+r*n*p-t*o*p)*R,e[15]=(r*f*s-h*o*s+h*n*c-t*f*c-r*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,c=e.z,l=a*r,h=a*o;return this.set(l*r+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*r,0,l*c-s*o,h*c+s*r,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,l=a+a,h=r+r,f=o+o,d=a*l,u=a*h,g=a*f,v=r*h,p=r*f,m=o*f,M=c*l,w=c*h,x=c*f,P=n.x,S=n.y,R=n.z;return s[0]=(1-(v+m))*P,s[1]=(u+x)*P,s[2]=(g-w)*P,s[3]=0,s[4]=(u-x)*S,s[5]=(1-(d+m))*S,s[6]=(p+M)*S,s[7]=0,s[8]=(g+w)*R,s[9]=(p-M)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=pi.set(s[0],s[1],s[2]).length();const r=pi.set(s[4],s[5],s[6]).length(),o=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],en.copy(this);const l=1/a,h=1/r,f=1/o;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=f,en.elements[9]*=f,en.elements[10]*=f,t.setFromRotationMatrix(en),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,s,a,r,o=dn,c=!1){const l=this.elements,h=2*a/(t-e),f=2*a/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s);let g,v;if(c)g=a/(r-a),v=r*a/(r-a);else if(o===dn)g=-(r+a)/(r-a),v=-2*r*a/(r-a);else if(o===js)g=-r/(r-a),v=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=dn,c=!1){const l=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),u=-(n+s)/(n-s);let g,v;if(c)g=1/(r-a),v=r/(r-a);else if(o===dn)g=-2/(r-a),v=-(r+a)/(r-a);else if(o===js)g=-1/(r-a),v=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const pi=new A,en=new ft,fd=new A(0,0,0),pd=new A(1,1,1),Cn=new A,ys=new A,Xt=new A,Po=new ft,Lo=new ki;class on{constructor(e=0,t=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Ke(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Po.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Po,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lo.setFromEuler(this),this.setFromQuaternion(Lo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class no{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let md=0;const Io=new A,mi=new ki,vn=new ft,Ms=new A,Vi=new A,gd=new A,vd=new ki,Do=new A(1,0,0),Uo=new A(0,1,0),No=new A(0,0,1),Fo={type:"added"},_d={type:"removed"},gi={type:"childadded",child:null},wa={type:"childremoved",child:null};class Et extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new A,t=new on,n=new ki,s=new A(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new qe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(Do,e)}rotateY(e){return this.rotateOnAxis(Uo,e)}rotateZ(e){return this.rotateOnAxis(No,e)}translateOnAxis(e,t){return Io.copy(e).applyQuaternion(this.quaternion),this.position.add(Io.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Do,e)}translateY(e){return this.translateOnAxis(Uo,e)}translateZ(e){return this.translateOnAxis(No,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ms.copy(e):Ms.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Vi,Ms,this.up):vn.lookAt(Ms,Vi,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(vn),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fo),gi.child=e,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_d),wa.child=e,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fo),gi.child=e,this.dispatchEvent(gi),gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,gd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,vd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];a(e.shapes,f)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(a(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),f=r(e.shapes),d=r(e.skeletons),u=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Et.DEFAULT_UP=new A(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new A,_n=new A,ba=new A,xn=new A,vi=new A,_i=new A,ko=new A,Ea=new A,Ta=new A,Aa=new A,Ra=new dt,Ca=new dt,Pa=new dt;class nn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),tn.subVectors(e,t),s.cross(tn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){tn.subVectors(s,t),_n.subVectors(n,t),ba.subVectors(e,t);const r=tn.dot(tn),o=tn.dot(_n),c=tn.dot(ba),l=_n.dot(_n),h=_n.dot(ba),f=r*l-o*o;if(f===0)return a.set(0,0,0),null;const d=1/f,u=(l*c-o*h)*d,g=(r*h-o*c)*d;return a.set(1-u-g,g,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,s,a,r,o,c){return this.getBarycoord(e,t,n,s,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,xn.x),c.addScaledVector(r,xn.y),c.addScaledVector(o,xn.z),c)}static getInterpolatedAttribute(e,t,n,s,a,r){return Ra.setScalar(0),Ca.setScalar(0),Pa.setScalar(0),Ra.fromBufferAttribute(e,t),Ca.fromBufferAttribute(e,n),Pa.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(Ra,a.x),r.addScaledVector(Ca,a.y),r.addScaledVector(Pa,a.z),r}static isFrontFacing(e,t,n,s){return tn.subVectors(n,t),_n.subVectors(e,t),tn.cross(_n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),tn.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;vi.subVectors(s,n),_i.subVectors(a,n),Ea.subVectors(e,n);const c=vi.dot(Ea),l=_i.dot(Ea);if(c<=0&&l<=0)return t.copy(n);Ta.subVectors(e,s);const h=vi.dot(Ta),f=_i.dot(Ta);if(h>=0&&f<=h)return t.copy(s);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(n).addScaledVector(vi,r);Aa.subVectors(e,a);const u=vi.dot(Aa),g=_i.dot(Aa);if(g>=0&&u<=g)return t.copy(a);const v=u*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(_i,o);const p=h*g-u*f;if(p<=0&&f-h>=0&&u-g>=0)return ko.subVectors(a,s),o=(f-h)/(f-h+(u-g)),t.copy(s).addScaledVector(ko,o);const m=1/(p+v+d);return r=v*m,o=d*m,t.copy(n).addScaledVector(vi,r).addScaledVector(_i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function La(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=eo(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=La(r,a,e+1/3),this.g=La(r,a,e),this.b=La(r,a,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Lt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=gc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return nt.workingToColorSpace(Dt.copy(this),e),Math.round(Ke(Dt.r*255,0,255))*65536+Math.round(Ke(Dt.g*255,0,255))*256+Math.round(Ke(Dt.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Dt.copy(this),t);const n=Dt.r,s=Dt.g,a=Dt.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const f=r-o;switch(l=h<=.5?f/(r+o):f/(2-r-o),r){case n:c=(s-a)/f+(s<a?6:0);break;case s:c=(a-n)/f+2;break;case a:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Lt){nt.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,s=Dt.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Ss);const n=Ki(Pn.h,Ss.h,t),s=Ki(Pn.s,Ss.s,t),a=Ki(Pn.l,Ss.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new $e;$e.NAMES=gc;let xd=0;class oi extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Ti,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nr,this.blendDst=ir,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=So,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nr&&(n.blendSrc=this.blendSrc),this.blendDst!==ir&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==So&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ze extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new A,ws=new Ie;let yd=0;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wo,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ws.fromBufferAttribute(this,t),ws.applyMatrix3(e),this.setXY(t,ws.x,ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array),a=Ot(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wo&&(e.usage=this.usage),e}}class vc extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _c extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Md=0;const Jt=new ft,Ia=new Et,xi=new A,qt=new cs,Gi=new cs,Rt=new A;class St extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pc(e)?_c:vc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new qe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new lt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];qt.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Gi.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(qt.min,Gi.min),qt.expandByPoint(Rt),Rt.addVectors(qt.max,Gi.max),qt.expandByPoint(Rt)):(qt.expandByPoint(Gi.min),qt.expandByPoint(Gi.max))}qt.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Rt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Rt.fromBufferAttribute(o,l),c&&(xi.fromBufferAttribute(e,l),Rt.add(xi)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new A,c[L]=new A;const l=new A,h=new A,f=new A,d=new Ie,u=new Ie,g=new Ie,v=new A,p=new A;function m(L,y,E){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,E),d.fromBufferAttribute(a,L),u.fromBufferAttribute(a,y),g.fromBufferAttribute(a,E),h.sub(l),f.sub(l),u.sub(d),g.sub(d);const I=1/(u.x*g.y-g.x*u.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(I),p.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(I),o[L].add(v),o[y].add(v),o[E].add(v),c[L].add(p),c[y].add(p),c[E].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,y=M.length;L<y;++L){const E=M[L],I=E.start,k=E.count;for(let B=I,K=I+k;B<K;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const w=new A,x=new A,P=new A,S=new A;function R(L){P.fromBufferAttribute(s,L),S.copy(P);const y=o[L];w.copy(y),w.sub(P.multiplyScalar(P.dot(y))).normalize(),x.crossVectors(S,y);const I=x.dot(c[L])<0?-1:1;r.setXYZW(L,w.x,w.y,w.z,I)}for(let L=0,y=M.length;L<y;++L){const E=M[L],I=E.start,k=E.count;for(let B=I,K=I+k;B<K;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const s=new A,a=new A,r=new A,o=new A,c=new A,l=new A,h=new A,f=new A;if(e)for(let d=0,u=e.count;d<u;d+=3){const g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),r.fromBufferAttribute(t,p),h.subVectors(r,a),f.subVectors(s,a),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,a),f.subVectors(s,a),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h);let u=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?u=c[v]*o.data.stride+o.offset:u=c[v]*h;for(let m=0;m<h;m++)d[g++]=l[u++]}return new $t(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,f=l.length;h<f;h++){const d=l[h],u=e(d,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const u=l[f];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const a=e.morphAttributes;for(const l in a){const h=[],f=a[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const f=r[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oo=new ft,qn=new na,bs=new hs,Bo=new A,Es=new A,Ts=new A,As=new A,Da=new A,Rs=new A,zo=new A,Cs=new A;class Q extends Et{constructor(e=new St,t=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){Rs.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],f=a[c];h!==0&&(Da.fromBufferAttribute(f,e),r?Rs.addScaledVector(Da,h):Rs.addScaledVector(Da.sub(t),h))}t.add(Rs)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(a),qn.copy(e.ray).recast(e.near),!(bs.containsPoint(qn.origin)===!1&&(qn.intersectSphere(bs,Bo)===null||qn.origin.distanceToSquared(Bo)>(e.far-e.near)**2))&&(Oo.copy(a).invert(),qn.copy(e.ray).applyMatrix4(Oo),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,d=a.groups,u=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=r[p.materialIndex],M=Math.max(p.start,u.start),w=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let x=M,P=w;x<P;x+=3){const S=o.getX(x),R=o.getX(x+1),L=o.getX(x+2);s=Ps(this,m,e,n,l,h,f,S,R,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let p=g,m=v;p<m;p+=3){const M=o.getX(p),w=o.getX(p+1),x=o.getX(p+2);s=Ps(this,r,e,n,l,h,f,M,w,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=r[p.materialIndex],M=Math.max(p.start,u.start),w=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let x=M,P=w;x<P;x+=3){const S=x,R=x+1,L=x+2;s=Ps(this,m,e,n,l,h,f,S,R,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let p=g,m=v;p<m;p+=3){const M=p,w=p+1,x=p+2;s=Ps(this,r,e,n,l,h,f,M,w,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Sd(i,e,t,n,s,a,r,o){let c;if(e.side===Vt?c=n.intersectTriangle(r,a,s,!0,o):c=n.intersectTriangle(s,a,r,e.side===Bn,o),c===null)return null;Cs.copy(o),Cs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Cs);return l<t.near||l>t.far?null:{distance:l,point:Cs.clone(),object:i}}function Ps(i,e,t,n,s,a,r,o,c,l){i.getVertexPosition(o,Es),i.getVertexPosition(c,Ts),i.getVertexPosition(l,As);const h=Sd(i,e,t,n,Es,Ts,As,zo);if(h){const f=new A;nn.getBarycoord(zo,Es,Ts,As,f),s&&(h.uv=nn.getInterpolatedAttribute(s,o,c,l,f,new Ie)),a&&(h.uv1=nn.getInterpolatedAttribute(a,o,c,l,f,new Ie)),r&&(h.normal=nn.getInterpolatedAttribute(r,o,c,l,f,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new A,materialIndex:0};nn.getNormal(Es,Ts,As,d.normal),h.face=d,h.barycoord=f}return h}class un extends St{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],h=[],f=[];let d=0,u=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,s,r,2),g("x","z","y",1,-1,e,n,-t,s,r,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(f,2));function g(v,p,m,M,w,x,P,S,R,L,y){const E=x/R,I=P/L,k=x/2,B=P/2,K=S/2,q=R+1,Y=L+1;let ee=0,G=0;const fe=new A;for(let me=0;me<Y;me++){const Re=me*I-B;for(let We=0;We<q;We++){const et=We*E-k;fe[v]=et*M,fe[p]=Re*w,fe[m]=K,l.push(fe.x,fe.y,fe.z),fe[v]=0,fe[p]=0,fe[m]=S>0?1:-1,h.push(fe.x,fe.y,fe.z),f.push(We/R),f.push(1-me/L),ee+=1}}for(let me=0;me<L;me++)for(let Re=0;Re<R;Re++){const We=d+Re+q*me,et=d+Re+q*(me+1),pt=d+(Re+1)+q*(me+1),it=d+(Re+1)+q*me;c.push(We,et,it),c.push(et,pt,it),G+=6}o.addGroup(u,G,y),u+=G,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Bt(i){const e={};for(let t=0;t<i.length;t++){const n=Di(i[t]);for(const s in n)e[s]=n[s]}return e}function wd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const bd={clone:Di,merge:Bt};var Ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ed,this.fragmentShader=Td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yc extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new A,Ho=new Ie,Vo=new Ie;class Yt extends yc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($i*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan($i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,Ho,Vo),t.subVectors(Vo,Ho)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($i*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,t-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yi=-90,Mi=1;class Ad extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yt(yi,Mi,e,t);s.layers=this.layers,this.add(s);const a=new Yt(yi,Mi,e,t);a.layers=this.layers,this.add(a);const r=new Yt(yi,Mi,e,t);r.layers=this.layers,this.add(r);const o=new Yt(yi,Mi,e,t);o.layers=this.layers,this.add(o);const c=new Yt(yi,Mi,e,t);c.layers=this.layers,this.add(c);const l=new Yt(yi,Mi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,c]=t;for(const l of t)this.remove(l);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Mc extends zt{constructor(e=[],t=Pi,n,s,a,r,o,c,l,h){super(e,t,n,s,a,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rd extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Mc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new un(5,5,5),a=new zn({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:kn});a.uniforms.tEquirect.value=t;const r=new Q(s,a),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=hn),new Ad(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}class ot extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cd={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;l.inputState.pinching&&d>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ia{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=n}clone(){return new ia(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Pd extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Na=new A,Ld=new A,Id=new qe;class Zn{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Na.subVectors(n,t).cross(Ld.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Id.getNormalMatrix(e),s=this.coplanarPoint(Na).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new hs,Dd=new Ie(.5,.5),Ls=new A;class io{constructor(e=new Zn,t=new Zn,n=new Zn,s=new Zn,a=new Zn,r=new Zn){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn,n=!1){const s=this.planes,a=e.elements,r=a[0],o=a[1],c=a[2],l=a[3],h=a[4],f=a[5],d=a[6],u=a[7],g=a[8],v=a[9],p=a[10],m=a[11],M=a[12],w=a[13],x=a[14],P=a[15];if(s[0].setComponents(l-r,u-h,m-g,P-M).normalize(),s[1].setComponents(l+r,u+h,m+g,P+M).normalize(),s[2].setComponents(l+o,u+f,m+v,P+w).normalize(),s[3].setComponents(l-o,u-f,m-v,P-w).normalize(),n)s[4].setComponents(c,d,p,x).normalize(),s[5].setComponents(l-c,u-d,m-p,P-x).normalize();else if(s[4].setComponents(l-c,u-d,m-p,P-x).normalize(),t===dn)s[5].setComponents(l+c,u+d,m+p,P+x).normalize();else if(t===js)s[5].setComponents(c,d,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){Yn.center.set(0,0,0);const t=Dd.distanceTo(e.center);return Yn.radius=.7071067811865476+t,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ls.x=s.normal.x>0?e.max.x:e.min.x,Ls.y=s.normal.y>0?e.max.y:e.min.y,Ls.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zi extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Js=new A,Qs=new A,Go=new ft,Wi=new na,Is=new hs,Fa=new A,Wo=new A;class qs extends Et{constructor(e=new St,t=new Zi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)Js.fromBufferAttribute(t,s-1),Qs.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Js.distanceTo(Qs);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(s),Is.radius+=a,e.ray.intersectsSphere(Is)===!1)return;Go.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(Go);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const u=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=u,p=g-1;v<p;v+=l){const m=h.getX(v),M=h.getX(v+1),w=Ds(this,e,Wi,c,m,M,v);w&&t.push(w)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(u),m=Ds(this,e,Wi,c,v,p,g-1);m&&t.push(m)}}else{const u=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let v=u,p=g-1;v<p;v+=l){const m=Ds(this,e,Wi,c,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=Ds(this,e,Wi,c,g-1,u,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ds(i,e,t,n,s,a,r){const o=i.geometry.attributes.position;if(Js.fromBufferAttribute(o,s),Qs.fromBufferAttribute(o,a),t.distanceSqToSegment(Js,Qs,Fa,Wo)>n)return;Fa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Fa);if(!(l<e.near||l>e.far))return{distance:l,point:Wo.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Xo=new A,qo=new A;class Ud extends qs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)Xo.fromBufferAttribute(t,s),qo.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xo.distanceTo(qo);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sc extends oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yo=new ft,Vr=new na,Us=new hs,Ns=new A;class Nd extends Et{constructor(e=new St,t=new Sc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(s),Us.radius+=a,e.ray.intersectsSphere(Us)===!1)return;Yo.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(Yo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),u=Math.min(l.count,r.start+r.count);for(let g=d,v=u;g<v;g++){const p=l.getX(g);Ns.fromBufferAttribute(f,p),$o(Ns,p,c,s,e,t,this)}}else{const d=Math.max(0,r.start),u=Math.min(f.count,r.start+r.count);for(let g=d,v=u;g<v;g++)Ns.fromBufferAttribute(f,g),$o(Ns,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function $o(i,e,t,n,s,a,r){const o=Vr.distanceSqToPoint(i);if(o<t){const c=new A;Vr.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class sa extends zt{constructor(e,t,n,s,a,r,o,c,l){super(e,t,n,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wc extends zt{constructor(e,t,n=si,s,a,r,o=rn,c=rn,l,h=ss,f=1){if(h!==ss&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,a,r,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new to(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bc extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sn extends St{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const h=[],f=[],d=[],u=[];let g=0;const v=[],p=n/2;let m=0;M(),r===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(u,2));function M(){const x=new A,P=new A;let S=0;const R=(t-e)/n;for(let L=0;L<=a;L++){const y=[],E=L/a,I=E*(t-e)+e;for(let k=0;k<=s;k++){const B=k/s,K=B*c+o,q=Math.sin(K),Y=Math.cos(K);P.x=I*q,P.y=-E*n+p,P.z=I*Y,f.push(P.x,P.y,P.z),x.set(q,R,Y).normalize(),d.push(x.x,x.y,x.z),u.push(B,1-E),y.push(g++)}v.push(y)}for(let L=0;L<s;L++)for(let y=0;y<a;y++){const E=v[y][L],I=v[y+1][L],k=v[y+1][L+1],B=v[y][L+1];(e>0||y!==0)&&(h.push(E,I,B),S+=3),(t>0||y!==a-1)&&(h.push(I,k,B),S+=3)}l.addGroup(m,S,0),m+=S}function w(x){const P=g,S=new Ie,R=new A;let L=0;const y=x===!0?e:t,E=x===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,p*E,0),d.push(0,E,0),u.push(.5,.5),g++;const I=g;for(let k=0;k<=s;k++){const K=k/s*c+o,q=Math.cos(K),Y=Math.sin(K);R.x=y*Y,R.y=p*E,R.z=y*q,f.push(R.x,R.y,R.z),d.push(0,E,0),S.x=q*.5+.5,S.y=Y*.5*E+.5,u.push(S.x,S.y),g++}for(let k=0;k<s;k++){const B=P+k,K=I+k;x===!0?h.push(K,K+1,B):h.push(K+1,K,B),L+=3}l.addGroup(m,L,x===!0?1:2),m+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ds extends Sn{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new ds(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class aa extends St{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],r=[];o(s),l(n),h(),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(a.slice(),3)),this.setAttribute("uv",new lt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const w=new A,x=new A,P=new A;for(let S=0;S<t.length;S+=3)u(t[S+0],w),u(t[S+1],x),u(t[S+2],P),c(w,x,P,M)}function c(M,w,x,P){const S=P+1,R=[];for(let L=0;L<=S;L++){R[L]=[];const y=M.clone().lerp(x,L/S),E=w.clone().lerp(x,L/S),I=S-L;for(let k=0;k<=I;k++)k===0&&L===S?R[L][k]=y:R[L][k]=y.clone().lerp(E,k/I)}for(let L=0;L<S;L++)for(let y=0;y<2*(S-L)-1;y++){const E=Math.floor(y/2);y%2===0?(d(R[L][E+1]),d(R[L+1][E]),d(R[L][E])):(d(R[L][E+1]),d(R[L+1][E+1]),d(R[L+1][E]))}}function l(M){const w=new A;for(let x=0;x<a.length;x+=3)w.x=a[x+0],w.y=a[x+1],w.z=a[x+2],w.normalize().multiplyScalar(M),a[x+0]=w.x,a[x+1]=w.y,a[x+2]=w.z}function h(){const M=new A;for(let w=0;w<a.length;w+=3){M.x=a[w+0],M.y=a[w+1],M.z=a[w+2];const x=p(M)/2/Math.PI+.5,P=m(M)/Math.PI+.5;r.push(x,1-P)}g(),f()}function f(){for(let M=0;M<r.length;M+=6){const w=r[M+0],x=r[M+2],P=r[M+4],S=Math.max(w,x,P),R=Math.min(w,x,P);S>.9&&R<.1&&(w<.2&&(r[M+0]+=1),x<.2&&(r[M+2]+=1),P<.2&&(r[M+4]+=1))}}function d(M){a.push(M.x,M.y,M.z)}function u(M,w){const x=M*3;w.x=e[x+0],w.y=e[x+1],w.z=e[x+2]}function g(){const M=new A,w=new A,x=new A,P=new A,S=new Ie,R=new Ie,L=new Ie;for(let y=0,E=0;y<a.length;y+=9,E+=6){M.set(a[y+0],a[y+1],a[y+2]),w.set(a[y+3],a[y+4],a[y+5]),x.set(a[y+6],a[y+7],a[y+8]),S.set(r[E+0],r[E+1]),R.set(r[E+2],r[E+3]),L.set(r[E+4],r[E+5]),P.copy(M).add(w).add(x).divideScalar(3);const I=p(P);v(S,E+0,M,I),v(R,E+2,w,I),v(L,E+4,x,I)}}function v(M,w,x,P){P<0&&M.x===1&&(r[w]=M.x-1),x.x===0&&x.z===0&&(r[w]=P/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.vertices,e.indices,e.radius,e.details)}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const a=n.length;let r;t?r=t:r=e*n[a-1];let o=0,c=a-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-r,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(a-1);const h=n[s],d=n[s+1]-h,u=(r-h)/d;return(s+u)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),c=t||(r.isVector2?new Ie:new A);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new A,s=[],a=[],r=[],o=new A,c=new ft;for(let u=0;u<=e;u++){const g=u/e;s[u]=this.getTangentAt(g,new A)}a[0]=new A,r[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let u=1;u<=e;u++){if(a[u]=a[u-1].clone(),r[u]=r[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ke(s[u-1].dot(s[u]),-1,1));a[u].applyMatrix4(c.makeRotationAxis(o,g))}r[u].crossVectors(s[u],a[u])}if(t===!0){let u=Math.acos(Ke(a[0].dot(a[e]),-1,1));u/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(u=-u);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(s[g],u*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ec extends En{constructor(e=0,t=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ie){const n=t,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+e*a;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*f+this.aX,l=d*f+u*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fd extends Ec{constructor(e,t,n,s,a,r){super(e,t,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function so(){let i=0,e=0,t=0,n=0;function s(a,r,o,c){i=a,e=o,t=-3*a+3*r-2*o-c,n=2*a-2*r+o+c}return{initCatmullRom:function(a,r,o,c,l){s(r,o,l*(o-a),l*(c-r))},initNonuniformCatmullRom:function(a,r,o,c,l,h,f){let d=(r-a)/l-(o-a)/(l+h)+(o-r)/h,u=(o-r)/h-(c-r)/(h+f)+(c-o)/f;d*=h,u*=h,s(r,o,d,u)},calc:function(a){const r=a*a,o=r*a;return i+e*a+t*r+n*o}}}const Fs=new A,ka=new so,Oa=new so,Ba=new so;class Tc extends En{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){const n=t,s=this.points,a=s.length,r=(a-(this.closed?0:1))*e;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%a]:(Fs.subVectors(s[0],s[1]).add(s[0]),l=Fs);const f=s[o%a],d=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(Fs.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=Fs),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),u),v=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),ka.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,g,v,p),Oa.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,g,v,p),Ba.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(ka.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),Oa.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),Ba.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return n.set(ka.calc(c),Oa.calc(c),Ba.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ko(i,e,t,n,s){const a=(n-e)*.5,r=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+a+r)*c+(-3*t+3*n-2*a-r)*o+a*i+t}function kd(i,e){const t=1-i;return t*t*e}function Od(i,e){return 2*(1-i)*i*e}function Bd(i,e){return i*i*e}function Ji(i,e,t,n){return kd(i,e)+Od(i,t)+Bd(i,n)}function zd(i,e){const t=1-i;return t*t*t*e}function Hd(i,e){const t=1-i;return 3*t*t*i*e}function Vd(i,e){return 3*(1-i)*i*i*e}function Gd(i,e){return i*i*i*e}function Qi(i,e,t,n,s){return zd(i,e)+Hd(i,t)+Vd(i,n)+Gd(i,s)}class Wd extends En{constructor(e=new Ie,t=new Ie,n=new Ie,s=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ie){const n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Qi(e,s.x,a.x,r.x,o.x),Qi(e,s.y,a.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xd extends En{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){const n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Qi(e,s.x,a.x,r.x,o.x),Qi(e,s.y,a.y,r.y,o.y),Qi(e,s.z,a.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qd extends En{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yd extends En{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $d extends En{constructor(e=new Ie,t=new Ie,n=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ie){const n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(Ji(e,s.x,a.x,r.x),Ji(e,s.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ac extends En{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(Ji(e,s.x,a.x,r.x),Ji(e,s.y,a.y,r.y),Ji(e,s.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kd extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){const n=t,s=this.points,a=(s.length-1)*e,r=Math.floor(a),o=a-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(Ko(o,c.x,l.x,h.x,f.x),Ko(o,c.y,l.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Ie().fromArray(s))}return this}}var jd=Object.freeze({__proto__:null,ArcCurve:Fd,CatmullRomCurve3:Tc,CubicBezierCurve:Wd,CubicBezierCurve3:Xd,EllipseCurve:Ec,LineCurve:qd,LineCurve3:Yd,QuadraticBezierCurve:$d,QuadraticBezierCurve3:Ac,SplineCurve:Kd});class ra extends aa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ra(e.radius,e.detail)}}class Hn extends aa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hn(e.radius,e.detail)}}class bn extends St{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=e/o,d=t/c,u=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const M=m*d-r;for(let w=0;w<l;w++){const x=w*f-a;g.push(x,-M,0),v.push(0,0,1),p.push(w/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<o;M++){const w=M+l*m,x=M+l*(m+1),P=M+1+l*(m+1),S=M+1+l*m;u.push(w,x,S),u.push(x,P,S)}this.setIndex(u),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ao extends St{constructor(e=.5,t=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let f=e;const d=(t-e)/s,u=new A,g=new Ie;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const m=a+p/n*r;u.x=f*Math.cos(m),u.y=f*Math.sin(m),c.push(u.x,u.y,u.z),l.push(0,0,1),g.x=(u.x/t+1)/2,g.y=(u.y/t+1)/2,h.push(g.x,g.y)}f+=d}for(let v=0;v<s;v++){const p=v*(n+1);for(let m=0;m<n;m++){const M=m+p,w=M,x=M+n+1,P=M+n+2,S=M+1;o.push(w,x,S),o.push(x,P,S)}}this.setIndex(o),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ui extends St{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const h=[],f=new A,d=new A,u=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const M=[],w=m/n;let x=0;m===0&&r===0?x=.5/t:m===n&&c===Math.PI&&(x=-.5/t);for(let P=0;P<=t;P++){const S=P/t;f.x=-e*Math.cos(s+S*a)*Math.sin(r+w*o),f.y=e*Math.cos(r+w*o),f.z=e*Math.sin(s+S*a)*Math.sin(r+w*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),p.push(S+x,1-w),M.push(l++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const w=h[m][M+1],x=h[m][M],P=h[m+1][M],S=h[m+1][M+1];(m!==0||r>0)&&u.push(w,x,S),(m!==n-1||c<Math.PI)&&u.push(x,P,S)}this.setIndex(u),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fn extends St{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const r=[],o=[],c=[],l=[],h=new A,f=new A,d=new A;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){const v=g/s*a,p=u/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(v),f.y=(e+t*Math.cos(p))*Math.sin(v),f.z=t*Math.sin(p),o.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){const v=(s+1)*u+g-1,p=(s+1)*(u-1)+g-1,m=(s+1)*(u-1)+g,M=(s+1)*u+g;r.push(v,p,M),r.push(p,m,M)}this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ro extends St{constructor(e=new Ac(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:a};const r=e.computeFrenetFrames(t,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new A,c=new A,l=new Ie;let h=new A;const f=[],d=[],u=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(u,2));function v(){for(let w=0;w<t;w++)p(w);p(a===!1?t:0),M(),m()}function p(w){h=e.getPointAt(w/t,h);const x=r.normals[w],P=r.binormals[w];for(let S=0;S<=s;S++){const R=S/s*Math.PI*2,L=Math.sin(R),y=-Math.cos(R);c.x=y*x.x+L*P.x,c.y=y*x.y+L*P.y,c.z=y*x.z+L*P.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,f.push(o.x,o.y,o.z)}}function m(){for(let w=1;w<=t;w++)for(let x=1;x<=s;x++){const P=(s+1)*(w-1)+(x-1),S=(s+1)*w+(x-1),R=(s+1)*w+x,L=(s+1)*(w-1)+x;g.push(P,S,L),g.push(S,R,L)}}function M(){for(let w=0;w<=t;w++)for(let x=0;x<=s;x++)l.x=w/t,l.y=x/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ro(new jd[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Pt extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zd extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jd extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class oo extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Qd extends oo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const za=new ft,jo=new A,Zo=new A;class Rc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jo.setFromMatrixPosition(e.matrixWorld),t.position.copy(jo),Zo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zo),t.updateMatrixWorld(),za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jo=new ft,Xi=new A,Ha=new A;class eu extends Rc{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Xi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xi),Ha.copy(n.position),Ha.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ha),n.updateMatrixWorld(),s.makeTranslation(-Xi.x,-Xi.y,-Xi.z),Jo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo,n.coordinateSystem,n.reversedDepth)}}class es extends oo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new eu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Cc extends yc{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tu extends Rc{constructor(){super(new Cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nu extends oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new tu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class iu extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class su{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Qo=new ft;class el{constructor(e,t,n=0,s=1/0){this.ray=new na(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new no,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qo),this}intersectObject(e,t=!0,n=[]){return Gr(e,this,n,t),n.sort(tl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,a=e.length;s<a;s++)Gr(e[s],this,n,t);return n.sort(tl),n}}function tl(i,e){return i.distance-e.distance}function Gr(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const a=i.children;for(let r=0,o=a.length;r<o;r++)Gr(a[r],e,t,!0)}}class au extends Ud{constructor(e=10,t=10,n=4473924,s=8947848){n=new $e(n),s=new $e(s);const a=t/2,r=e/t,o=e/2,c=[],l=[];for(let d=0,u=0,g=-o;d<=t;d++,g+=r){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const v=d===a?n:s;v.toArray(l,u),u+=3,v.toArray(l,u),u+=3,v.toArray(l,u),u+=3,v.toArray(l,u),u+=3}const h=new St;h.setAttribute("position",new lt(c,3)),h.setAttribute("color",new lt(l,3));const f=new Zi({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function nl(i,e,t,n){const s=ru(n);switch(t){case lc:return i*e;case hc:return i*e/s.components*s.byteLength;case Zr:return i*e/s.components*s.byteLength;case dc:return i*e*2/s.components*s.byteLength;case Jr:return i*e*2/s.components*s.byteLength;case cc:return i*e*3/s.components*s.byteLength;case an:return i*e*4/s.components*s.byteLength;case Qr:return i*e*4/s.components*s.byteLength;case Vs:case Gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mr:case vr:return Math.max(i,16)*Math.max(e,8)/4;case pr:case gr:return Math.max(i,8)*Math.max(e,8)/2;case _r:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case br:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Er:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Tr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ar:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Rr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Cr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Pr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Lr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ir:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Dr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ur:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Nr:case Fr:case kr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Or:case Br:return Math.ceil(i/4)*Math.ceil(e/4)*8;case zr:case Hr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ru(i){switch(i){case fn:case sc:return{byteLength:1,components:1};case ns:case ac:case ls:return{byteLength:2,components:1};case Kr:case jr:return{byteLength:2,components:4};case si:case $r:case Mn:return{byteLength:4,components:1};case rc:case oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yr);function Pc(){let i=null,e=!1,t=null,n=null;function s(a,r){t(a,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function ou(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){const g=f[d],v=f[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){const v=f[u];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}var lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_u=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Su=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Iu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Du=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ku=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ou="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$u=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ku=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ju=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ef=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,of=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_f=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Af=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,If=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ff=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,np=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ip=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ap=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Op=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:lu,alphahash_pars_fragment:cu,alphamap_fragment:hu,alphamap_pars_fragment:du,alphatest_fragment:uu,alphatest_pars_fragment:fu,aomap_fragment:pu,aomap_pars_fragment:mu,batching_pars_vertex:gu,batching_vertex:vu,begin_vertex:_u,beginnormal_vertex:xu,bsdfs:yu,iridescence_fragment:Mu,bumpmap_pars_fragment:Su,clipping_planes_fragment:wu,clipping_planes_pars_fragment:bu,clipping_planes_pars_vertex:Eu,clipping_planes_vertex:Tu,color_fragment:Au,color_pars_fragment:Ru,color_pars_vertex:Cu,color_vertex:Pu,common:Lu,cube_uv_reflection_fragment:Iu,defaultnormal_vertex:Du,displacementmap_pars_vertex:Uu,displacementmap_vertex:Nu,emissivemap_fragment:Fu,emissivemap_pars_fragment:ku,colorspace_fragment:Ou,colorspace_pars_fragment:Bu,envmap_fragment:zu,envmap_common_pars_fragment:Hu,envmap_pars_fragment:Vu,envmap_pars_vertex:Gu,envmap_physical_pars_fragment:ef,envmap_vertex:Wu,fog_vertex:Xu,fog_pars_vertex:qu,fog_fragment:Yu,fog_pars_fragment:$u,gradientmap_pars_fragment:Ku,lightmap_pars_fragment:ju,lights_lambert_fragment:Zu,lights_lambert_pars_fragment:Ju,lights_pars_begin:Qu,lights_toon_fragment:tf,lights_toon_pars_fragment:nf,lights_phong_fragment:sf,lights_phong_pars_fragment:af,lights_physical_fragment:rf,lights_physical_pars_fragment:of,lights_fragment_begin:lf,lights_fragment_maps:cf,lights_fragment_end:hf,logdepthbuf_fragment:df,logdepthbuf_pars_fragment:uf,logdepthbuf_pars_vertex:ff,logdepthbuf_vertex:pf,map_fragment:mf,map_pars_fragment:gf,map_particle_fragment:vf,map_particle_pars_fragment:_f,metalnessmap_fragment:xf,metalnessmap_pars_fragment:yf,morphinstance_vertex:Mf,morphcolor_vertex:Sf,morphnormal_vertex:wf,morphtarget_pars_vertex:bf,morphtarget_vertex:Ef,normal_fragment_begin:Tf,normal_fragment_maps:Af,normal_pars_fragment:Rf,normal_pars_vertex:Cf,normal_vertex:Pf,normalmap_pars_fragment:Lf,clearcoat_normal_fragment_begin:If,clearcoat_normal_fragment_maps:Df,clearcoat_pars_fragment:Uf,iridescence_pars_fragment:Nf,opaque_fragment:Ff,packing:kf,premultiplied_alpha_fragment:Of,project_vertex:Bf,dithering_fragment:zf,dithering_pars_fragment:Hf,roughnessmap_fragment:Vf,roughnessmap_pars_fragment:Gf,shadowmap_pars_fragment:Wf,shadowmap_pars_vertex:Xf,shadowmap_vertex:qf,shadowmask_pars_fragment:Yf,skinbase_vertex:$f,skinning_pars_vertex:Kf,skinning_vertex:jf,skinnormal_vertex:Zf,specularmap_fragment:Jf,specularmap_pars_fragment:Qf,tonemapping_fragment:ep,tonemapping_pars_fragment:tp,transmission_fragment:np,transmission_pars_fragment:ip,uv_pars_fragment:sp,uv_pars_vertex:ap,uv_vertex:rp,worldpos_vertex:op,background_vert:lp,background_frag:cp,backgroundCube_vert:hp,backgroundCube_frag:dp,cube_vert:up,cube_frag:fp,depth_vert:pp,depth_frag:mp,distanceRGBA_vert:gp,distanceRGBA_frag:vp,equirect_vert:_p,equirect_frag:xp,linedashed_vert:yp,linedashed_frag:Mp,meshbasic_vert:Sp,meshbasic_frag:wp,meshlambert_vert:bp,meshlambert_frag:Ep,meshmatcap_vert:Tp,meshmatcap_frag:Ap,meshnormal_vert:Rp,meshnormal_frag:Cp,meshphong_vert:Pp,meshphong_frag:Lp,meshphysical_vert:Ip,meshphysical_frag:Dp,meshtoon_vert:Up,meshtoon_frag:Np,points_vert:Fp,points_frag:kp,shadow_vert:Op,shadow_frag:Bp,sprite_vert:zp,sprite_frag:Hp},pe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},cn={basic:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Bt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Bt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Bt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Bt([pe.points,pe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Bt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Bt([pe.common,pe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Bt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Bt([pe.sprite,pe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Bt([pe.common,pe.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Bt([pe.lights,pe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};cn.physical={uniforms:Bt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const ks={r:0,b:0,g:0},$n=new on,Vp=new ft;function Gp(i,e,t,n,s,a,r){const o=new $e(0);let c=a===!0?0:1,l,h,f=null,d=0,u=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?t:e).get(x)),x}function v(w){let x=!1;const P=g(w);P===null?m(o,c):P&&P.isColor&&(m(P,1),x=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,x){const P=g(x);P&&(P.isCubeTexture||P.mapping===ta)?(h===void 0&&(h=new Q(new un(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Di(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$n.copy(x.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vp.makeRotationFromEuler($n)),h.material.toneMapped=nt.getTransfer(P.colorSpace)!==ht,(f!==P||d!==P.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=P,d=P.version,u=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new Q(new bn(2,2),new zn({name:"BackgroundMaterial",uniforms:Di(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=nt.getTransfer(P.colorSpace)!==ht,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||d!==P.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=P,d=P.version,u=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,x){w.getRGB(ks,xc(i)),n.buffers.color.setClear(ks.r,ks.g,ks.b,x,r)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,x=1){o.set(w),c=x,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,m(o,c)},render:v,addToRenderList:p,dispose:M}}function Wp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let a=s,r=!1;function o(E,I,k,B,K){let q=!1;const Y=f(B,k,I);a!==Y&&(a=Y,l(a.object)),q=u(E,B,k,K),q&&g(E,B,k,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,x(E,I,k,B),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function f(E,I,k){const B=k.wireframe===!0;let K=n[E.id];K===void 0&&(K={},n[E.id]=K);let q=K[I.id];q===void 0&&(q={},K[I.id]=q);let Y=q[B];return Y===void 0&&(Y=d(c()),q[B]=Y),Y}function d(E){const I=[],k=[],B=[];for(let K=0;K<t;K++)I[K]=0,k[K]=0,B[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:B,object:E,attributes:{},index:null}}function u(E,I,k,B){const K=a.attributes,q=I.attributes;let Y=0;const ee=k.getAttributes();for(const G in ee)if(ee[G].location>=0){const me=K[G];let Re=q[G];if(Re===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(Re=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(Re=E.instanceColor)),me===void 0||me.attribute!==Re||Re&&me.data!==Re.data)return!0;Y++}return a.attributesNum!==Y||a.index!==B}function g(E,I,k,B){const K={},q=I.attributes;let Y=0;const ee=k.getAttributes();for(const G in ee)if(ee[G].location>=0){let me=q[G];me===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(me=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(me=E.instanceColor));const Re={};Re.attribute=me,me&&me.data&&(Re.data=me.data),K[G]=Re,Y++}a.attributes=K,a.attributesNum=Y,a.index=B}function v(){const E=a.newAttributes;for(let I=0,k=E.length;I<k;I++)E[I]=0}function p(E){m(E,0)}function m(E,I){const k=a.newAttributes,B=a.enabledAttributes,K=a.attributeDivisors;k[E]=1,B[E]===0&&(i.enableVertexAttribArray(E),B[E]=1),K[E]!==I&&(i.vertexAttribDivisor(E,I),K[E]=I)}function M(){const E=a.newAttributes,I=a.enabledAttributes;for(let k=0,B=I.length;k<B;k++)I[k]!==E[k]&&(i.disableVertexAttribArray(k),I[k]=0)}function w(E,I,k,B,K,q,Y){Y===!0?i.vertexAttribIPointer(E,I,k,K,q):i.vertexAttribPointer(E,I,k,B,K,q)}function x(E,I,k,B){v();const K=B.attributes,q=k.getAttributes(),Y=I.defaultAttributeValues;for(const ee in q){const G=q[ee];if(G.location>=0){let fe=K[ee];if(fe===void 0&&(ee==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),ee==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor)),fe!==void 0){const me=fe.normalized,Re=fe.itemSize,We=e.get(fe);if(We===void 0)continue;const et=We.buffer,pt=We.type,it=We.bytesPerElement,j=pt===i.INT||pt===i.UNSIGNED_INT||fe.gpuType===$r;if(fe.isInterleavedBufferAttribute){const ne=fe.data,ye=ne.stride,ke=fe.offset;if(ne.isInstancedInterleavedBuffer){for(let Te=0;Te<G.locationSize;Te++)m(G.location+Te,ne.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Te=0;Te<G.locationSize;Te++)p(G.location+Te);i.bindBuffer(i.ARRAY_BUFFER,et);for(let Te=0;Te<G.locationSize;Te++)w(G.location+Te,Re/G.locationSize,pt,me,ye*it,(ke+Re/G.locationSize*Te)*it,j)}else{if(fe.isInstancedBufferAttribute){for(let ne=0;ne<G.locationSize;ne++)m(G.location+ne,fe.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ne=0;ne<G.locationSize;ne++)p(G.location+ne);i.bindBuffer(i.ARRAY_BUFFER,et);for(let ne=0;ne<G.locationSize;ne++)w(G.location+ne,Re/G.locationSize,pt,me,Re*it,Re/G.locationSize*ne*it,j)}}else if(Y!==void 0){const me=Y[ee];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(G.location,me);break;case 3:i.vertexAttrib3fv(G.location,me);break;case 4:i.vertexAttrib4fv(G.location,me);break;default:i.vertexAttrib1fv(G.location,me)}}}}M()}function P(){L();for(const E in n){const I=n[E];for(const k in I){const B=I[k];for(const K in B)h(B[K].object),delete B[K];delete I[k]}delete n[E]}}function S(E){if(n[E.id]===void 0)return;const I=n[E.id];for(const k in I){const B=I[k];for(const K in B)h(B[K].object),delete B[K];delete I[k]}delete n[E.id]}function R(E){for(const I in n){const k=n[I];if(k[E.id]===void 0)continue;const B=k[E.id];for(const K in B)h(B[K].object),delete B[K];delete k[E.id]}}function L(){y(),r=!0,a!==s&&(a=s,l(a.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function Xp(i,e,t){let n;function s(l){n=l}function a(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function r(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),t.update(h,n,f))}function o(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let u=0;for(let g=0;g<f;g++)u+=h[g];t.update(u,n,1)}function c(l,h,f,d){if(f===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<l.length;g++)r(l[g],h[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function qp(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==an&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Mn&&!L)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:P,maxSamples:S}}function Yp(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new Zn,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||a&&!p)a?h(null):l();else{const M=a?0:n,w=M*4;let x=m.clippingState||null;c.value=x,x=h(g,d,w,u);for(let P=0;P!==w;++P)x[P]=t[P];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const m=u+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,x=u;w!==v;++w,x+=4)r.copy(f[w]).applyMatrix4(M,o),r.normal.toArray(p,x),p[x+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function $p(i){let e=new WeakMap;function t(r,o){return o===dr?r.mapping=Pi:o===ur&&(r.mapping=Li),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===dr||o===ur)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Rd(c.height);return l.fromEquirectangularTexture(i,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Ei=4,il=[.125,.215,.35,.446,.526,.582],ei=20,Va=new Cc,sl=new $e;let Ga=null,Wa=0,Xa=0,qa=!1;const Jn=(1+Math.sqrt(5))/2,Si=1/Jn,al=[new A(-Jn,Si,0),new A(Jn,Si,0),new A(-Si,0,Jn),new A(Si,0,Jn),new A(0,Jn,-Si),new A(0,Jn,Si),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Kp=new A;class rl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,a={}){const{size:r=256,position:o=Kp}=a;Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga,Wa,Xa),this._renderer.xr.enabled=qa,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:ls,format:an,colorSpace:Ii,depthBuffer:!1},s=ol(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ol(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jp(a)),this._blurMaterial=Zp(a,e,t)}return s}_compileMaterial(e){const t=new Q(this._lodPlanes[0],e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,n,s,a){const c=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(sl),f.toneMapping=On,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const v=new Ze({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),p=new Q(new un,v);let m=!1;const M=e.background;M?M.isColor&&(v.color.copy(M),e.background=null,m=!0):(v.color.copy(sl),m=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(c.up.set(0,l[w],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+h[w],a.y,a.z)):x===1?(c.up.set(0,0,l[w]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+h[w],a.z)):(c.up.set(0,l[w],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+h[w]));const P=this._cubeSize;Os(s,x*P,w>2?P:0,P,P),f.setRenderTarget(s),m&&f.render(p,c),f.render(e,c)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=u,f.autoClear=d,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Pi||e.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ll());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new Q(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;Os(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=al[(s-a-1)%al.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",a),this._halfBlur(r,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Q(this._lodPlanes[s],l),d=l.uniforms,u=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*u):2*Math.PI/(2*ei-1),v=a/g,p=isFinite(a)?1+Math.floor(h*v):ei;p>ei&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ei}`);const m=[];let M=0;for(let R=0;R<ei;++R){const L=R/v,y=Math.exp(-L*L/2);m.push(y),R===0?M+=y:R<p&&(M+=2*y)}for(let R=0;R<m.length;R++)m[R]=m[R]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const x=this._sizeLods[s],P=3*x*(s>w-Ei?s-w+Ei:0),S=4*(this._cubeSize-x);Os(t,P,S,3*x,2*x),c.setRenderTarget(t),c.render(f,Va)}}function jp(i){const e=[],t=[],n=[];let s=i;const a=i-Ei+1+il.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let c=1/o;r>i-Ei?c=il[r-i+Ei-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,v=3,p=2,m=1,M=new Float32Array(v*g*u),w=new Float32Array(p*g*u),x=new Float32Array(m*g*u);for(let S=0;S<u;S++){const R=S%3*2/3-1,L=S>2?0:-1,y=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];M.set(y,v*g*S),w.set(d,p*g*S);const E=[S,S,S,S,S,S];x.set(E,m*g*S)}const P=new St;P.setAttribute("position",new $t(M,v)),P.setAttribute("uv",new $t(w,p)),P.setAttribute("faceIndex",new $t(x,m)),e.push(P),s>Ei&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ol(i,e,t){const n=new ai(i,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Zp(i,e,t){const n=new Float32Array(ei),s=new A(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ll(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function cl(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function lo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===dr||c===ur,h=c===Pi||c===Li;if(l||h){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new rl(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const u=o.image;return l&&u&&u.height>0||h&&u&&s(u)?(t===null&&(t=new rl(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Qp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&os("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function e0(i,e,t,n){const s={},a=new WeakMap;function r(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete s[d.id];const u=a.get(d);u&&(e.remove(u),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const u in d)e.update(d[u],i.ARRAY_BUFFER)}function l(f){const d=[],u=f.index,g=f.attributes.position;let v=0;if(u!==null){const M=u.array;v=u.version;for(let w=0,x=M.length;w<x;w+=3){const P=M[w+0],S=M[w+1],R=M[w+2];d.push(P,S,S,R,R,P)}}else if(g!==void 0){const M=g.array;v=g.version;for(let w=0,x=M.length/3-1;w<x;w+=3){const P=w+0,S=w+1,R=w+2;d.push(P,S,S,R,R,P)}}else return;const p=new(pc(d)?_c:vc)(d,1);p.version=v;const m=a.get(f);m&&e.remove(m),a.set(f,p)}function h(f){const d=a.get(f);if(d){const u=f.index;u!==null&&d.version<u.version&&l(f)}else l(f);return a.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function t0(i,e,t){let n;function s(d){n=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function c(d,u){i.drawElements(n,u,a,d*r),t.update(u,n,1)}function l(d,u,g){g!==0&&(i.drawElementsInstanced(n,u,a,d*r,g),t.update(u,n,g))}function h(d,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,a,d,0,g);let p=0;for(let m=0;m<g;m++)p+=u[m];t.update(p,n,1)}function f(d,u,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/r,u[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,a,d,0,v,0,g);let m=0;for(let M=0;M<g;M++)m+=u[M]*v[M];t.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function n0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function i0(i,e,t){const n=new WeakMap,s=new dt;function a(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let E=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var u=E;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),p===!0&&(x=3);let P=o.attributes.position.count*x,S=1;P>e.maxTextureSize&&(S=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*S*4*f),L=new mc(R,P,S,f);L.type=Mn,L.needsUpdate=!0;const y=x*4;for(let I=0;I<f;I++){const k=m[I],B=M[I],K=w[I],q=P*S*4*I;for(let Y=0;Y<k.count;Y++){const ee=Y*y;g===!0&&(s.fromBufferAttribute(k,Y),R[q+ee+0]=s.x,R[q+ee+1]=s.y,R[q+ee+2]=s.z,R[q+ee+3]=0),v===!0&&(s.fromBufferAttribute(B,Y),R[q+ee+4]=s.x,R[q+ee+5]=s.y,R[q+ee+6]=s.z,R[q+ee+7]=0),p===!0&&(s.fromBufferAttribute(K,Y),R[q+ee+8]=s.x,R[q+ee+9]=s.y,R[q+ee+10]=s.z,R[q+ee+11]=K.itemSize===4?s.w:1)}}d={count:f,texture:L,size:new Ie(P,S)},n.set(o,d),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function s0(i,e,t,n){let s=new WeakMap;function a(c){const l=n.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function r(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:r}}const Lc=new zt,hl=new wc(1,1),Ic=new mc,Dc=new dd,Uc=new Mc,dl=[],ul=[],fl=new Float32Array(16),pl=new Float32Array(9),ml=new Float32Array(4);function Oi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=dl[s];if(a===void 0&&(a=new Float32Array(s),dl[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oa(i,e){let t=ul[e];t===void 0&&(t=new Int32Array(e),ul[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function a0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function r0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function o0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function l0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function c0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;ml.set(n),i.uniformMatrix2fv(this.addr,!1,ml),At(t,n)}}function h0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;pl.set(n),i.uniformMatrix3fv(this.addr,!1,pl),At(t,n)}}function d0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;fl.set(n),i.uniformMatrix4fv(this.addr,!1,fl),At(t,n)}}function u0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function p0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function m0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function g0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function v0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function _0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function x0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function y0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(hl.compareFunction=fc,a=hl):a=Lc,t.setTexture2D(e||a,s)}function M0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Dc,s)}function S0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Uc,s)}function w0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ic,s)}function b0(i){switch(i){case 5126:return a0;case 35664:return r0;case 35665:return o0;case 35666:return l0;case 35674:return c0;case 35675:return h0;case 35676:return d0;case 5124:case 35670:return u0;case 35667:case 35671:return f0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return v0;case 36295:return _0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return w0}}function E0(i,e){i.uniform1fv(this.addr,e)}function T0(i,e){const t=Oi(e,this.size,2);i.uniform2fv(this.addr,t)}function A0(i,e){const t=Oi(e,this.size,3);i.uniform3fv(this.addr,t)}function R0(i,e){const t=Oi(e,this.size,4);i.uniform4fv(this.addr,t)}function C0(i,e){const t=Oi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function P0(i,e){const t=Oi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function L0(i,e){const t=Oi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function I0(i,e){i.uniform1iv(this.addr,e)}function D0(i,e){i.uniform2iv(this.addr,e)}function U0(i,e){i.uniform3iv(this.addr,e)}function N0(i,e){i.uniform4iv(this.addr,e)}function F0(i,e){i.uniform1uiv(this.addr,e)}function k0(i,e){i.uniform2uiv(this.addr,e)}function O0(i,e){i.uniform3uiv(this.addr,e)}function B0(i,e){i.uniform4uiv(this.addr,e)}function z0(i,e,t){const n=this.cache,s=e.length,a=oa(t,s);Tt(n,a)||(i.uniform1iv(this.addr,a),At(n,a));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Lc,a[r])}function H0(i,e,t){const n=this.cache,s=e.length,a=oa(t,s);Tt(n,a)||(i.uniform1iv(this.addr,a),At(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Dc,a[r])}function V0(i,e,t){const n=this.cache,s=e.length,a=oa(t,s);Tt(n,a)||(i.uniform1iv(this.addr,a),At(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Uc,a[r])}function G0(i,e,t){const n=this.cache,s=e.length,a=oa(t,s);Tt(n,a)||(i.uniform1iv(this.addr,a),At(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Ic,a[r])}function W0(i){switch(i){case 5126:return E0;case 35664:return T0;case 35665:return A0;case 35666:return R0;case 35674:return C0;case 35675:return P0;case 35676:return L0;case 5124:case 35670:return I0;case 35667:case 35671:return D0;case 35668:case 35672:return U0;case 35669:case 35673:return N0;case 5125:return F0;case 36294:return k0;case 36295:return O0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}class X0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=b0(t.type)}}class q0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=W0(t.type)}}class Y0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function gl(i,e){i.seq.push(e),i.map[e.id]=e}function $0(i,e,t){const n=i.name,s=n.length;for(Ya.lastIndex=0;;){const a=Ya.exec(n),r=Ya.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){gl(t,l===void 0?new X0(o,i,e):new q0(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Y0(o),gl(t,f)),t=f}}}class Ys{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),r=e.getUniformLocation(t,a.name);$0(a,r,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function vl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const K0=37297;let j0=0;function Z0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const _l=new qe;function J0(i){nt._getMatrix(_l,nt.workingColorSpace,i);const e=`mat3( ${_l.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Ks:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+Z0(i.getShaderSource(e),o)}else return a}function Q0(i,e){const t=J0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function em(i,e){let t;switch(e){case Eh:t="Linear";break;case Th:t="Reinhard";break;case Ah:t="Cineon";break;case nc:t="ACESFilmic";break;case Ch:t="AgX";break;case Ph:t="Neutral";break;case Rh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bs=new A;function tm(){nt.getLuminanceCoefficients(Bs);const i=Bs.x.toFixed(4),e=Bs.y.toFixed(4),t=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function im(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function qi(i){return i!==""}function yl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ml(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const am=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wr(i){return i.replace(am,om)}const rm=new Map;function om(i,e){let t=Ye[e];if(t===void 0){const n=rm.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wr(t)}const lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sl(i){return i.replace(lm,cm)}function cm(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function wl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ec?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function dm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Li:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function um(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Li&&(e="ENVMAP_MODE_REFRACTION"),e}function fm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tc:e="ENVMAP_BLENDING_MULTIPLY";break;case wh:e="ENVMAP_BLENDING_MIX";break;case bh:e="ENVMAP_BLENDING_ADD";break}return e}function pm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function mm(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=hm(t),l=dm(t),h=um(t),f=fm(t),d=pm(t),u=nm(t),g=im(a),v=s.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qi).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qi).join(`
`),m.length>0&&(m+=`
`)):(p=[wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),m=[wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Ye.tonemapping_pars_fragment:"",t.toneMapping!==On?em("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Q0("linearToOutputTexel",t.outputColorSpace),tm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qi).join(`
`)),r=Wr(r),r=yl(r,t),r=Ml(r,t),o=Wr(o),o=yl(o,t),o=Ml(o,t),r=Sl(r),o=Sl(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=M+p+r,x=M+m+o,P=vl(s,s.VERTEX_SHADER,w),S=vl(s,s.FRAGMENT_SHADER,x);s.attachShader(v,P),s.attachShader(v,S),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(I){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(v)||"",B=s.getShaderInfoLog(P)||"",K=s.getShaderInfoLog(S)||"",q=k.trim(),Y=B.trim(),ee=K.trim();let G=!0,fe=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,S);else{const me=xl(s,P,"vertex"),Re=xl(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+q+`
`+me+`
`+Re)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Y===""||ee==="")&&(fe=!1);fe&&(I.diagnostics={runnable:G,programLog:q,vertexShader:{log:Y,prefix:p},fragmentShader:{log:ee,prefix:m}})}s.deleteShader(P),s.deleteShader(S),L=new Ys(s,v),y=sm(s,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(v,K0)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=S,this}let gm=0;class vm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _m(e),t.set(e,n)),n}}class _m{constructor(e){this.id=gm++,this.code=e,this.usedTimes=0}}function xm(i,e,t,n,s,a,r){const o=new no,c=new vm,l=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let u=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,E,I,k,B){const K=k.fog,q=B.geometry,Y=y.isMeshStandardMaterial?k.environment:null,ee=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),G=ee&&ee.mapping===ta?ee.image.height:null,fe=g[y.type];y.precision!==null&&(u=s.getMaxPrecision(y.precision),u!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const me=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Re=me!==void 0?me.length:0;let We=0;q.morphAttributes.position!==void 0&&(We=1),q.morphAttributes.normal!==void 0&&(We=2),q.morphAttributes.color!==void 0&&(We=3);let et,pt,it,j;if(fe){const at=cn[fe];et=at.vertexShader,pt=at.fragmentShader}else et=y.vertexShader,pt=y.fragmentShader,c.update(y),it=c.getVertexShaderID(y),j=c.getFragmentShaderID(y);const ne=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),ke=B.isInstancedMesh===!0,Te=B.isBatchedMesh===!0,je=!!y.map,W=!!y.matcap,T=!!ee,he=!!y.aoMap,te=!!y.lightMap,J=!!y.bumpMap,ie=!!y.normalMap,Me=!!y.displacementMap,ae=!!y.emissiveMap,Ee=!!y.metalnessMap,Ge=!!y.roughnessMap,st=y.anisotropy>0,C=y.clearcoat>0,_=y.dispersion>0,O=y.iridescence>0,$=y.sheen>0,se=y.transmission>0,X=st&&!!y.anisotropyMap,Le=C&&!!y.clearcoatMap,de=C&&!!y.clearcoatNormalMap,Ae=C&&!!y.clearcoatRoughnessMap,Ce=O&&!!y.iridescenceMap,le=O&&!!y.iridescenceThicknessMap,_e=$&&!!y.sheenColorMap,Be=$&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,ge=!!y.specularColorMap,Xe=!!y.specularIntensityMap,D=se&&!!y.transmissionMap,ce=se&&!!y.thicknessMap,ue=!!y.gradientMap,Se=!!y.alphaMap,re=y.alphaTest>0,Z=!!y.alphaHash,be=!!y.extensions;let Ve=On;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ve=i.toneMapping);const mt={shaderID:fe,shaderType:y.type,shaderName:y.name,vertexShader:et,fragmentShader:pt,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Te,batchingColor:Te&&B._colorsTexture!==null,instancing:ke,instancingColor:ke&&B.instanceColor!==null,instancingMorph:ke&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ii,alphaToCoverage:!!y.alphaToCoverage,map:je,matcap:W,envMap:T,envMapMode:T&&ee.mapping,envMapCubeUVHeight:G,aoMap:he,lightMap:te,bumpMap:J,normalMap:ie,displacementMap:d&&Me,emissiveMap:ae,normalMapObjectSpace:ie&&y.normalMapType===Uh,normalMapTangentSpace:ie&&y.normalMapType===uc,metalnessMap:Ee,roughnessMap:Ge,anisotropy:st,anisotropyMap:X,clearcoat:C,clearcoatMap:Le,clearcoatNormalMap:de,clearcoatRoughnessMap:Ae,dispersion:_,iridescence:O,iridescenceMap:Ce,iridescenceThicknessMap:le,sheen:$,sheenColorMap:_e,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:ge,specularIntensityMap:Xe,transmission:se,transmissionMap:D,thicknessMap:ce,gradientMap:ue,opaque:y.transparent===!1&&y.blending===Ti&&y.alphaToCoverage===!1,alphaMap:Se,alphaTest:re,alphaHash:Z,combine:y.combine,mapUv:je&&v(y.map.channel),aoMapUv:he&&v(y.aoMap.channel),lightMapUv:te&&v(y.lightMap.channel),bumpMapUv:J&&v(y.bumpMap.channel),normalMapUv:ie&&v(y.normalMap.channel),displacementMapUv:Me&&v(y.displacementMap.channel),emissiveMapUv:ae&&v(y.emissiveMap.channel),metalnessMapUv:Ee&&v(y.metalnessMap.channel),roughnessMapUv:Ge&&v(y.roughnessMap.channel),anisotropyMapUv:X&&v(y.anisotropyMap.channel),clearcoatMapUv:Le&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Be&&v(y.sheenRoughnessMap.channel),specularMapUv:Pe&&v(y.specularMap.channel),specularColorMapUv:ge&&v(y.specularColorMap.channel),specularIntensityMapUv:Xe&&v(y.specularIntensityMap.channel),transmissionMapUv:D&&v(y.transmissionMap.channel),thicknessMapUv:ce&&v(y.thicknessMap.channel),alphaMapUv:Se&&v(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ie||st),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(je||Se),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ye,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:We,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:je&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===ht,decodeVideoTextureEmissive:ae&&y.emissiveMap.isVideoTexture===!0&&nt.getTransfer(y.emissiveMap.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ft,flipSided:y.side===Vt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:be&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&y.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function m(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)E.push(I),E.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(M(E,y),w(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function M(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function w(y,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),y.push(o.mask)}function x(y){const E=g[y.type];let I;if(E){const k=cn[E];I=bd.clone(k.uniforms)}else I=y.uniforms;return I}function P(y,E){let I;for(let k=0,B=h.length;k<B;k++){const K=h[k];if(K.cacheKey===E){I=K,++I.usedTimes;break}}return I===void 0&&(I=new mm(i,E,y,a),h.push(I)),I}function S(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function R(y){c.remove(y)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:P,releaseProgram:S,releaseShaderCache:R,programs:h,dispose:L}}function ym(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,c){i.get(r)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function Mm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function El(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(f,d,u,g,v,p){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:v,group:p},i[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=u,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=v,m.group=p),e++,m}function o(f,d,u,g,v,p){const m=r(f,d,u,g,v,p);u.transmission>0?n.push(m):u.transparent===!0?s.push(m):t.push(m)}function c(f,d,u,g,v,p){const m=r(f,d,u,g,v,p);u.transmission>0?n.unshift(m):u.transparent===!0?s.unshift(m):t.unshift(m)}function l(f,d){t.length>1&&t.sort(f||Mm),n.length>1&&n.sort(d||bl),s.length>1&&s.sort(d||bl)}function h(){for(let f=e,d=i.length;f<d;f++){const u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:o,unshift:c,finish:h,sort:l}}function Sm(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new El,i.set(n,[r])):s>=a.length?(r=new El,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function wm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new $e};break;case"SpotLight":t={position:new A,direction:new A,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function bm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Em=0;function Tm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Am(i){const e=new wm,t=bm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const s=new A,a=new ft,r=new ft;function o(l){let h=0,f=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let u=0,g=0,v=0,p=0,m=0,M=0,w=0,x=0,P=0,S=0,R=0;l.sort(Tm);for(let y=0,E=l.length;y<E;y++){const I=l[y],k=I.color,B=I.intensity,K=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*B,f+=k.g*B,d+=k.b*B;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],B);R++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ee=I.shadow,G=t.get(I);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,n.directionalShadow[u]=G,n.directionalShadowMap[u]=q,n.directionalShadowMatrix[u]=I.shadow.matrix,M++}n.directional[u]=Y,u++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(k).multiplyScalar(B),Y.distance=K,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[v]=Y;const ee=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,ee.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[v]=ee.matrix,I.castShadow){const G=t.get(I);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=q,x++}v++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(k).multiplyScalar(B),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=Y,p++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const ee=I.shadow,G=t.get(I);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,G.shadowCameraNear=ee.camera.near,G.shadowCameraFar=ee.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=I.shadow.matrix,w++}n.point[g]=Y,g++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(B),Y.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[m]=Y,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==u||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==M||L.numPointShadows!==w||L.numSpotShadows!==x||L.numSpotMaps!==P||L.numLightProbes!==R)&&(n.directional.length=u,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+P-S,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,L.directionalLength=u,L.pointLength=g,L.spotLength=v,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=M,L.numPointShadows=w,L.numSpotShadows=x,L.numSpotMaps=P,L.numLightProbes=R,n.version=Em++)}function c(l,h){let f=0,d=0,u=0,g=0,v=0;const p=h.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){const w=l[m];if(w.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),f++}else if(w.isSpotLight){const x=n.spot[u];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),u++}else if(w.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),r.identity(),a.copy(w.matrixWorld),a.premultiply(p),r.extractRotation(a),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),g++}else if(w.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:o,setupView:c,state:n}}function Tl(i){const e=new Am(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function r(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function Rm(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new Tl(i),e.set(s,[o])):a>=r.length?(o=new Tl(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Cm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lm(i,e,t){let n=new io;const s=new Ie,a=new Ie,r=new dt,o=new Zd({depthPacking:Dh}),c=new Jd,l={},h=t.maxTextureSize,f={[Bn]:Vt,[Vt]:Bn,[Ft]:Ft},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Cm,fragmentShader:Pm}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const g=new St;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Q(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let m=this.type;this.render=function(S,R,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const y=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),k=i.state;k.setBlending(kn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=m!==yn&&this.type===yn,K=m===yn&&this.type!==yn;for(let q=0,Y=S.length;q<Y;q++){const ee=S[q],G=ee.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const fe=G.getFrameExtents();if(s.multiply(fe),a.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/fe.x),s.x=a.x*fe.x,G.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/fe.y),s.y=a.y*fe.y,G.mapSize.y=a.y)),G.map===null||B===!0||K===!0){const Re=this.type!==yn?{minFilter:rn,magFilter:rn}:{};G.map!==null&&G.map.dispose(),G.map=new ai(s.x,s.y,Re),G.map.texture.name=ee.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const me=G.getViewportCount();for(let Re=0;Re<me;Re++){const We=G.getViewport(Re);r.set(a.x*We.x,a.y*We.y,a.x*We.z,a.y*We.w),k.viewport(r),G.updateMatrices(ee,Re),n=G.getFrustum(),x(R,L,G.camera,ee,this.type)}G.isPointLightShadow!==!0&&this.type===yn&&M(G,L),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(y,E,I)};function M(S,R){const L=e.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,u.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ai(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,L,d,v,null),u.uniforms.shadow_pass.value=S.mapPass.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,L,u,v,null)}function w(S,R,L,y){let E=null;const I=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)E=I;else if(E=L.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=E.uuid,B=R.uuid;let K=l[k];K===void 0&&(K={},l[k]=K);let q=K[B];q===void 0&&(q=E.clone(),K[B]=q,R.addEventListener("dispose",P)),E=q}if(E.visible=R.visible,E.wireframe=R.wireframe,y===yn?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:f[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=i.properties.get(E);k.light=L}return E}function x(S,R,L,y,E){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===yn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const B=e.update(S),K=S.material;if(Array.isArray(K)){const q=B.groups;for(let Y=0,ee=q.length;Y<ee;Y++){const G=q[Y],fe=K[G.materialIndex];if(fe&&fe.visible){const me=w(S,fe,y,E);S.onBeforeShadow(i,S,R,L,B,me,G),i.renderBufferDirect(L,null,B,me,S,G),S.onAfterShadow(i,S,R,L,B,me,G)}}}else if(K.visible){const q=w(S,K,y,E);S.onBeforeShadow(i,S,R,L,B,q,null),i.renderBufferDirect(L,null,B,q,S,null),S.onAfterShadow(i,S,R,L,B,q,null)}}const k=S.children;for(let B=0,K=k.length;B<K;B++)x(k[B],R,L,y,E)}function P(S){S.target.removeEventListener("dispose",P);for(const L in l){const y=l[L],E=S.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}const Im={[sr]:ar,[rr]:cr,[or]:hr,[Ci]:lr,[ar]:sr,[cr]:rr,[hr]:or,[lr]:Ci};function Dm(i,e){function t(){let D=!1;const ce=new dt;let ue=null;const Se=new dt(0,0,0,0);return{setMask:function(re){ue!==re&&!D&&(i.colorMask(re,re,re,re),ue=re)},setLocked:function(re){D=re},setClear:function(re,Z,be,Ve,mt){mt===!0&&(re*=Ve,Z*=Ve,be*=Ve),ce.set(re,Z,be,Ve),Se.equals(ce)===!1&&(i.clearColor(re,Z,be,Ve),Se.copy(ce))},reset:function(){D=!1,ue=null,Se.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,ue=null,Se=null,re=null;return{setReversed:function(Z){if(ce!==Z){const be=e.get("EXT_clip_control");Z?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ce=Z;const Ve=re;re=null,this.setClear(Ve)}},getReversed:function(){return ce},setTest:function(Z){Z?ne(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(Z){ue!==Z&&!D&&(i.depthMask(Z),ue=Z)},setFunc:function(Z){if(ce&&(Z=Im[Z]),Se!==Z){switch(Z){case sr:i.depthFunc(i.NEVER);break;case ar:i.depthFunc(i.ALWAYS);break;case rr:i.depthFunc(i.LESS);break;case Ci:i.depthFunc(i.LEQUAL);break;case or:i.depthFunc(i.EQUAL);break;case lr:i.depthFunc(i.GEQUAL);break;case cr:i.depthFunc(i.GREATER);break;case hr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=Z}},setLocked:function(Z){D=Z},setClear:function(Z){re!==Z&&(ce&&(Z=1-Z),i.clearDepth(Z),re=Z)},reset:function(){D=!1,ue=null,Se=null,re=null,ce=!1}}}function s(){let D=!1,ce=null,ue=null,Se=null,re=null,Z=null,be=null,Ve=null,mt=null;return{setTest:function(at){D||(at?ne(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(at){ce!==at&&!D&&(i.stencilMask(at),ce=at)},setFunc:function(at,pn,ln){(ue!==at||Se!==pn||re!==ln)&&(i.stencilFunc(at,pn,ln),ue=at,Se=pn,re=ln)},setOp:function(at,pn,ln){(Z!==at||be!==pn||Ve!==ln)&&(i.stencilOp(at,pn,ln),Z=at,be=pn,Ve=ln)},setLocked:function(at){D=at},setClear:function(at){mt!==at&&(i.clearStencil(at),mt=at)},reset:function(){D=!1,ce=null,ue=null,Se=null,re=null,Z=null,be=null,Ve=null,mt=null}}}const a=new t,r=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},f={},d=new WeakMap,u=[],g=null,v=!1,p=null,m=null,M=null,w=null,x=null,P=null,S=null,R=new $e(0,0,0),L=0,y=!1,E=null,I=null,k=null,B=null,K=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ee=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(G)[1]),Y=ee>=1):G.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Y=ee>=2);let fe=null,me={};const Re=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),et=new dt().fromArray(Re),pt=new dt().fromArray(We);function it(D,ce,ue,Se){const re=new Uint8Array(4),Z=i.createTexture();i.bindTexture(D,Z),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<ue;be++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(ce+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return Z}const j={};j[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),r.setFunc(Ci),J(!1),ie(xo),ne(i.CULL_FACE),he(kn);function ne(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function ye(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function ke(D,ce){return f[D]!==ce?(i.bindFramebuffer(D,ce),f[D]=ce,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ce),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Te(D,ce){let ue=u,Se=!1;if(D){ue=d.get(ce),ue===void 0&&(ue=[],d.set(ce,ue));const re=D.textures;if(ue.length!==re.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,be=re.length;Z<be;Z++)ue[Z]=i.COLOR_ATTACHMENT0+Z;ue.length=re.length,Se=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,Se=!0);Se&&i.drawBuffers(ue)}function je(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const W={[Qn]:i.FUNC_ADD,[rh]:i.FUNC_SUBTRACT,[oh]:i.FUNC_REVERSE_SUBTRACT};W[lh]=i.MIN,W[ch]=i.MAX;const T={[hh]:i.ZERO,[dh]:i.ONE,[uh]:i.SRC_COLOR,[nr]:i.SRC_ALPHA,[_h]:i.SRC_ALPHA_SATURATE,[gh]:i.DST_COLOR,[ph]:i.DST_ALPHA,[fh]:i.ONE_MINUS_SRC_COLOR,[ir]:i.ONE_MINUS_SRC_ALPHA,[vh]:i.ONE_MINUS_DST_COLOR,[mh]:i.ONE_MINUS_DST_ALPHA,[xh]:i.CONSTANT_COLOR,[yh]:i.ONE_MINUS_CONSTANT_COLOR,[Mh]:i.CONSTANT_ALPHA,[Sh]:i.ONE_MINUS_CONSTANT_ALPHA};function he(D,ce,ue,Se,re,Z,be,Ve,mt,at){if(D===kn){v===!0&&(ye(i.BLEND),v=!1);return}if(v===!1&&(ne(i.BLEND),v=!0),D!==ah){if(D!==p||at!==y){if((m!==Qn||x!==Qn)&&(i.blendEquation(i.FUNC_ADD),m=Qn,x=Qn),at)switch(D){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sn:i.blendFunc(i.ONE,i.ONE);break;case yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,w=null,P=null,S=null,R.set(0,0,0),L=0,p=D,y=at}return}re=re||ce,Z=Z||ue,be=be||Se,(ce!==m||re!==x)&&(i.blendEquationSeparate(W[ce],W[re]),m=ce,x=re),(ue!==M||Se!==w||Z!==P||be!==S)&&(i.blendFuncSeparate(T[ue],T[Se],T[Z],T[be]),M=ue,w=Se,P=Z,S=be),(Ve.equals(R)===!1||mt!==L)&&(i.blendColor(Ve.r,Ve.g,Ve.b,mt),R.copy(Ve),L=mt),p=D,y=!1}function te(D,ce){D.side===Ft?ye(i.CULL_FACE):ne(i.CULL_FACE);let ue=D.side===Vt;ce&&(ue=!ue),J(ue),D.blending===Ti&&D.transparent===!1?he(kn):he(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),a.setMask(D.colorWrite);const Se=D.stencilWrite;o.setTest(Se),Se&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ae(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(D){E!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),E=D)}function ie(D){D!==ih?(ne(i.CULL_FACE),D!==I&&(D===xo?i.cullFace(i.BACK):D===sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),I=D}function Me(D){D!==k&&(Y&&i.lineWidth(D),k=D)}function ae(D,ce,ue){D?(ne(i.POLYGON_OFFSET_FILL),(B!==ce||K!==ue)&&(i.polygonOffset(ce,ue),B=ce,K=ue)):ye(i.POLYGON_OFFSET_FILL)}function Ee(D){D?ne(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Ge(D){D===void 0&&(D=i.TEXTURE0+q-1),fe!==D&&(i.activeTexture(D),fe=D)}function st(D,ce,ue){ue===void 0&&(fe===null?ue=i.TEXTURE0+q-1:ue=fe);let Se=me[ue];Se===void 0&&(Se={type:void 0,texture:void 0},me[ue]=Se),(Se.type!==D||Se.texture!==ce)&&(fe!==ue&&(i.activeTexture(ue),fe=ue),i.bindTexture(D,ce||j[D]),Se.type=D,Se.texture=ce)}function C(){const D=me[fe];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(D){et.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),et.copy(D))}function Be(D){pt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),pt.copy(D))}function Pe(D,ce){let ue=l.get(ce);ue===void 0&&(ue=new WeakMap,l.set(ce,ue));let Se=ue.get(D);Se===void 0&&(Se=i.getUniformBlockIndex(ce,D.name),ue.set(D,Se))}function ge(D,ce){const Se=l.get(ce).get(D);c.get(ce)!==Se&&(i.uniformBlockBinding(ce,Se,D.__bindingPointIndex),c.set(ce,Se))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},fe=null,me={},f={},d=new WeakMap,u=[],g=null,v=!1,p=null,m=null,M=null,w=null,x=null,P=null,S=null,R=new $e(0,0,0),L=0,y=!1,E=null,I=null,k=null,B=null,K=null,et.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:ne,disable:ye,bindFramebuffer:ke,drawBuffers:Te,useProgram:je,setBlending:he,setMaterial:te,setFlipSided:J,setCullFace:ie,setLineWidth:Me,setPolygonOffset:ae,setScissorTest:Ee,activeTexture:Ge,bindTexture:st,unbindTexture:C,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:Ce,texImage3D:le,updateUBOMapping:Pe,uniformBlockBinding:ge,texStorage2D:de,texStorage3D:Ae,texSubImage2D:$,texSubImage3D:se,compressedTexSubImage2D:X,compressedTexSubImage3D:Le,scissor:_e,viewport:Be,reset:Xe}}function Um(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ie,h=new WeakMap;let f;const d=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,_){return u?new OffscreenCanvas(C,_):Zs("canvas")}function v(C,_,O){let $=1;const se=st(C);if((se.width>O||se.height>O)&&($=O/Math.max(se.width,se.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor($*se.width),Le=Math.floor($*se.height);f===void 0&&(f=g(X,Le));const de=_?g(X,Le):f;return de.width=X,de.height=Le,de.getContext("2d").drawImage(C,0,0,X,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+X+"x"+Le+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),C;return C}function p(C){return C.generateMipmaps}function m(C){i.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(C,_,O,$,se=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=_;if(_===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),_===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),_===i.RGBA){const Le=se?Ks:nt.getTransfer($);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=Le===ht?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(C,_){let O;return C?_===null||_===si||_===is?O=i.DEPTH24_STENCIL8:_===Mn?O=i.DEPTH32F_STENCIL8:_===ns&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===si||_===is?O=i.DEPTH_COMPONENT24:_===Mn?O=i.DEPTH_COMPONENT32F:_===ns&&(O=i.DEPTH_COMPONENT16),O}function P(C,_){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==rn&&C.minFilter!==hn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function S(C){const _=C.target;_.removeEventListener("dispose",S),L(_),_.isVideoTexture&&h.delete(_)}function R(C){const _=C.target;_.removeEventListener("dispose",R),E(_)}function L(C){const _=n.get(C);if(_.__webglInit===void 0)return;const O=C.source,$=d.get(O);if($){const se=$[_.__cacheKey];se.usedTimes--,se.usedTimes===0&&y(C),Object.keys($).length===0&&d.delete(O)}n.remove(C)}function y(C){const _=n.get(C);i.deleteTexture(_.__webglTexture);const O=C.source,$=d.get(O);delete $[_.__cacheKey],r.memory.textures--}function E(C){const _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let se=0;se<_.__webglFramebuffer[$].length;se++)i.deleteFramebuffer(_.__webglFramebuffer[$][se]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=C.textures;for(let $=0,se=O.length;$<se;$++){const X=n.get(O[$]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),r.memory.textures--),n.remove(O[$])}n.remove(C)}let I=0;function k(){I=0}function B(){const C=I;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function K(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function q(C,_){const O=n.get(C);if(C.isVideoTexture&&Ee(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,C,_);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function Y(C,_){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){j(O,C,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function ee(C,_){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){j(O,C,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function G(C,_){const O=n.get(C);if(C.version>0&&O.__version!==C.version){ne(O,C,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const fe={[ts]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[fr]:i.MIRRORED_REPEAT},me={[rn]:i.NEAREST,[Lh]:i.NEAREST_MIPMAP_NEAREST,[ps]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},Re={[Nh]:i.NEVER,[Hh]:i.ALWAYS,[Fh]:i.LESS,[fc]:i.LEQUAL,[kh]:i.EQUAL,[zh]:i.GEQUAL,[Oh]:i.GREATER,[Bh]:i.NOTEQUAL};function We(C,_){if(_.type===Mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===hn||_.magFilter===fa||_.magFilter===ps||_.magFilter===ni||_.minFilter===hn||_.minFilter===fa||_.minFilter===ps||_.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,fe[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,fe[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,fe[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,me[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,me[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Re[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===rn||_.minFilter!==ps&&_.minFilter!==ni||_.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function et(C,_){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",S));const $=_.source;let se=d.get($);se===void 0&&(se={},d.set($,se));const X=K(_);if(X!==C.__cacheKey){se[X]===void 0&&(se[X]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,O=!0),se[X].usedTimes++;const Le=se[C.__cacheKey];Le!==void 0&&(se[C.__cacheKey].usedTimes--,Le.usedTimes===0&&y(_)),C.__cacheKey=X,C.__webglTexture=se[X].texture}return O}function pt(C,_,O){return Math.floor(Math.floor(C/O)/_)}function it(C,_,O,$){const X=C.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,$,_.data);else{X.sort((le,_e)=>le.start-_e.start);let Le=0;for(let le=1;le<X.length;le++){const _e=X[Le],Be=X[le],Pe=_e.start+_e.count,ge=pt(Be.start,_.width,4),Xe=pt(_e.start,_.width,4);Be.start<=Pe+1&&ge===Xe&&pt(Be.start+Be.count-1,_.width,4)===ge?_e.count=Math.max(_e.count,Be.start+Be.count-_e.start):(++Le,X[Le]=Be)}X.length=Le+1;const de=i.getParameter(i.UNPACK_ROW_LENGTH),Ae=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let le=0,_e=X.length;le<_e;le++){const Be=X[le],Pe=Math.floor(Be.start/4),ge=Math.ceil(Be.count/4),Xe=Pe%_.width,D=Math.floor(Pe/_.width),ce=ge,ue=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Xe,D,ce,ue,O,$,_.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,de),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function j(C,_,O){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);const se=et(C,_),X=_.source;t.bindTexture($,C.__webglTexture,i.TEXTURE0+O);const Le=n.get(X);if(X.version!==Le.__version||se===!0){t.activeTexture(i.TEXTURE0+O);const de=nt.getPrimaries(nt.workingColorSpace),Ae=_.colorSpace===Nn?null:nt.getPrimaries(_.colorSpace),Ce=_.colorSpace===Nn||de===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let le=v(_.image,!1,s.maxTextureSize);le=Ge(_,le);const _e=a.convert(_.format,_.colorSpace),Be=a.convert(_.type);let Pe=w(_.internalFormat,_e,Be,_.colorSpace,_.isVideoTexture);We($,_);let ge;const Xe=_.mipmaps,D=_.isVideoTexture!==!0,ce=Le.__version===void 0||se===!0,ue=X.dataReady,Se=P(_,le);if(_.isDepthTexture)Pe=x(_.format===as,_.type),ce&&(D?t.texStorage2D(i.TEXTURE_2D,1,Pe,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Pe,le.width,le.height,0,_e,Be,null));else if(_.isDataTexture)if(Xe.length>0){D&&ce&&t.texStorage2D(i.TEXTURE_2D,Se,Pe,Xe[0].width,Xe[0].height);for(let re=0,Z=Xe.length;re<Z;re++)ge=Xe[re],D?ue&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,_e,Be,ge.data):t.texImage2D(i.TEXTURE_2D,re,Pe,ge.width,ge.height,0,_e,Be,ge.data);_.generateMipmaps=!1}else D?(ce&&t.texStorage2D(i.TEXTURE_2D,Se,Pe,le.width,le.height),ue&&it(_,le,_e,Be)):t.texImage2D(i.TEXTURE_2D,0,Pe,le.width,le.height,0,_e,Be,le.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Pe,Xe[0].width,Xe[0].height,le.depth);for(let re=0,Z=Xe.length;re<Z;re++)if(ge=Xe[re],_.format!==an)if(_e!==null)if(D){if(ue)if(_.layerUpdates.size>0){const be=nl(ge.width,ge.height,_.format,_.type);for(const Ve of _.layerUpdates){const mt=ge.data.subarray(Ve*be/ge.data.BYTES_PER_ELEMENT,(Ve+1)*be/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Ve,ge.width,ge.height,1,_e,mt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,le.depth,_e,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Pe,ge.width,ge.height,le.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,le.depth,_e,Be,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Pe,ge.width,ge.height,le.depth,0,_e,Be,ge.data)}else{D&&ce&&t.texStorage2D(i.TEXTURE_2D,Se,Pe,Xe[0].width,Xe[0].height);for(let re=0,Z=Xe.length;re<Z;re++)ge=Xe[re],_.format!==an?_e!==null?D?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,_e,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Pe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ue&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,_e,Be,ge.data):t.texImage2D(i.TEXTURE_2D,re,Pe,ge.width,ge.height,0,_e,Be,ge.data)}else if(_.isDataArrayTexture)if(D){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Pe,le.width,le.height,le.depth),ue)if(_.layerUpdates.size>0){const re=nl(le.width,le.height,_.format,_.type);for(const Z of _.layerUpdates){const be=le.data.subarray(Z*re/le.data.BYTES_PER_ELEMENT,(Z+1)*re/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,le.width,le.height,1,_e,Be,be)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,_e,Be,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,le.width,le.height,le.depth,0,_e,Be,le.data);else if(_.isData3DTexture)D?(ce&&t.texStorage3D(i.TEXTURE_3D,Se,Pe,le.width,le.height,le.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,_e,Be,le.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,le.width,le.height,le.depth,0,_e,Be,le.data);else if(_.isFramebufferTexture){if(ce)if(D)t.texStorage2D(i.TEXTURE_2D,Se,Pe,le.width,le.height);else{let re=le.width,Z=le.height;for(let be=0;be<Se;be++)t.texImage2D(i.TEXTURE_2D,be,Pe,re,Z,0,_e,Be,null),re>>=1,Z>>=1}}else if(Xe.length>0){if(D&&ce){const re=st(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Se,Pe,re.width,re.height)}for(let re=0,Z=Xe.length;re<Z;re++)ge=Xe[re],D?ue&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,_e,Be,ge):t.texImage2D(i.TEXTURE_2D,re,Pe,_e,Be,ge);_.generateMipmaps=!1}else if(D){if(ce){const re=st(le);t.texStorage2D(i.TEXTURE_2D,Se,Pe,re.width,re.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Be,le)}else t.texImage2D(i.TEXTURE_2D,0,Pe,_e,Be,le);p(_)&&m($),Le.__version=X.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function ne(C,_,O){if(_.image.length!==6)return;const $=et(C,_),se=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+O);const X=n.get(se);if(se.version!==X.__version||$===!0){t.activeTexture(i.TEXTURE0+O);const Le=nt.getPrimaries(nt.workingColorSpace),de=_.colorSpace===Nn?null:nt.getPrimaries(_.colorSpace),Ae=_.colorSpace===Nn||Le===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ce=_.isCompressedTexture||_.image[0].isCompressedTexture,le=_.image[0]&&_.image[0].isDataTexture,_e=[];for(let Z=0;Z<6;Z++)!Ce&&!le?_e[Z]=v(_.image[Z],!0,s.maxCubemapSize):_e[Z]=le?_.image[Z].image:_.image[Z],_e[Z]=Ge(_,_e[Z]);const Be=_e[0],Pe=a.convert(_.format,_.colorSpace),ge=a.convert(_.type),Xe=w(_.internalFormat,Pe,ge,_.colorSpace),D=_.isVideoTexture!==!0,ce=X.__version===void 0||$===!0,ue=se.dataReady;let Se=P(_,Be);We(i.TEXTURE_CUBE_MAP,_);let re;if(Ce){D&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Xe,Be.width,Be.height);for(let Z=0;Z<6;Z++){re=_e[Z].mipmaps;for(let be=0;be<re.length;be++){const Ve=re[be];_.format!==an?Pe!==null?D?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,0,0,Ve.width,Ve.height,Pe,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,Xe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,0,0,Ve.width,Ve.height,Pe,ge,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,Xe,Ve.width,Ve.height,0,Pe,ge,Ve.data)}}}else{if(re=_.mipmaps,D&&ce){re.length>0&&Se++;const Z=st(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Xe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(le){D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,_e[Z].width,_e[Z].height,Pe,ge,_e[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,_e[Z].width,_e[Z].height,0,Pe,ge,_e[Z].data);for(let be=0;be<re.length;be++){const mt=re[be].image[Z].image;D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,0,0,mt.width,mt.height,Pe,ge,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,Xe,mt.width,mt.height,0,Pe,ge,mt.data)}}else{D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,ge,_e[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,Pe,ge,_e[Z]);for(let be=0;be<re.length;be++){const Ve=re[be];D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,0,0,Pe,ge,Ve.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,Xe,Pe,ge,Ve.image[Z])}}}p(_)&&m(i.TEXTURE_CUBE_MAP),X.__version=se.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function ye(C,_,O,$,se,X){const Le=a.convert(O.format,O.colorSpace),de=a.convert(O.type),Ae=w(O.internalFormat,Le,de,O.colorSpace),Ce=n.get(_),le=n.get(O);if(le.__renderTarget=_,!Ce.__hasExternalTextures){const _e=Math.max(1,_.width>>X),Be=Math.max(1,_.height>>X);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,X,Ae,_e,Be,_.depth,0,Le,de,null):t.texImage2D(se,X,Ae,_e,Be,0,Le,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ae(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,se,le.__webglTexture,0,Me(_)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,se,le.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(C,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){const $=_.depthTexture,se=$&&$.isDepthTexture?$.type:null,X=x(_.stencilBuffer,se),Le=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=Me(_);ae(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,X,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,X,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,X,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,C)}else{const $=_.textures;for(let se=0;se<$.length;se++){const X=$[se],Le=a.convert(X.format,X.colorSpace),de=a.convert(X.type),Ae=w(X.internalFormat,Le,de,X.colorSpace),Ce=Me(_);O&&ae(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Ae,_.width,_.height):ae(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,Ae,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(C,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(_.depthTexture);$.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const se=$.__webglTexture,X=Me(_);if(_.depthTexture.format===ss)ae(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(_.depthTexture.format===as)ae(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function je(C){const _=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const se=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",se)};$.addEventListener("dispose",se),_.__depthDisposeCallback=se}_.__boundDepthTexture=$}if(C.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const $=C.texture.mipmaps;$&&$.length>0?Te(_.__webglFramebuffer[0],C):Te(_.__webglFramebuffer,C)}else if(O){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=i.createRenderbuffer(),ke(_.__webglDepthbuffer[$],C,!1);else{const se=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,X)}}else{const $=C.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ke(_.__webglDepthbuffer,C,!1);else{const se=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function W(C,_,O){const $=n.get(C);_!==void 0&&ye($.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&je(C)}function T(C){const _=C.texture,O=n.get(C),$=n.get(_);C.addEventListener("dispose",R);const se=C.textures,X=C.isWebGLCubeRenderTarget===!0,Le=se.length>1;if(Le||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,r.memory.textures++),X){O.__webglFramebuffer=[];for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[de]=[];for(let Ae=0;Ae<_.mipmaps.length;Ae++)O.__webglFramebuffer[de][Ae]=i.createFramebuffer()}else O.__webglFramebuffer[de]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let de=0;de<_.mipmaps.length;de++)O.__webglFramebuffer[de]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Le)for(let de=0,Ae=se.length;de<Ae;de++){const Ce=n.get(se[de]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),r.memory.textures++)}if(C.samples>0&&ae(C)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<se.length;de++){const Ae=se[de];O.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[de]);const Ce=a.convert(Ae.format,Ae.colorSpace),le=a.convert(Ae.type),_e=w(Ae.internalFormat,Ce,le,Ae.colorSpace,C.isXRRenderTarget===!0),Be=Me(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,_e,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,O.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),We(i.TEXTURE_CUBE_MAP,_);for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)ye(O.__webglFramebuffer[de][Ae],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae);else ye(O.__webglFramebuffer[de],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(_)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let de=0,Ae=se.length;de<Ae;de++){const Ce=se[de],le=n.get(Ce);let _e=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_e=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,le.__webglTexture),We(_e,Ce),ye(O.__webglFramebuffer,C,Ce,i.COLOR_ATTACHMENT0+de,_e,0),p(Ce)&&m(_e)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,$.__webglTexture),We(de,_),_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)ye(O.__webglFramebuffer[Ae],C,_,i.COLOR_ATTACHMENT0,de,Ae);else ye(O.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,de,0);p(_)&&m(de),t.unbindTexture()}C.depthBuffer&&je(C)}function he(C){const _=C.textures;for(let O=0,$=_.length;O<$;O++){const se=_[O];if(p(se)){const X=M(C),Le=n.get(se).__webglTexture;t.bindTexture(X,Le),m(X),t.unbindTexture()}}}const te=[],J=[];function ie(C){if(C.samples>0){if(ae(C)===!1){const _=C.textures,O=C.width,$=C.height;let se=i.COLOR_BUFFER_BIT;const X=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(C),de=_.length>1;if(de)for(let Ce=0;Ce<_.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ae=C.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ce=0;Ce<_.length;Ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const le=n.get(_[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,se,i.NEAREST),c===!0&&(te.length=0,J.length=0,te.push(i.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&C.resolveDepthBuffer===!1&&(te.push(X),J.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,J)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Ce=0;Ce<_.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const le=n.get(_[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Me(C){return Math.min(s.maxSamples,C.samples)}function ae(C){const _=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ee(C){const _=r.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function Ge(C,_){const O=C.colorSpace,$=C.format,se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Ii&&O!==Nn&&(nt.getTransfer(O)===ht?($!==an||se!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function st(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=ee,this.setTextureCube=G,this.rebindTextures=W,this.setupRenderTarget=T,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ae}function Nm(i,e){function t(n,s=Nn){let a;const r=nt.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===Kr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sc)return i.BYTE;if(n===ac)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===$r)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===ls)return i.HALF_FLOAT;if(n===lc)return i.ALPHA;if(n===cc)return i.RGB;if(n===an)return i.RGBA;if(n===ss)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===hc)return i.RED;if(n===Zr)return i.RED_INTEGER;if(n===dc)return i.RG;if(n===Jr)return i.RG_INTEGER;if(n===Qr)return i.RGBA_INTEGER;if(n===Vs||n===Gs||n===Ws||n===Xs)if(r===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Vs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Vs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ws)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pr||n===mr||n===gr||n===vr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===pr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_r||n===xr||n===yr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===_r||n===xr)return r===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===yr)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mr||n===Sr||n===wr||n===br||n===Er||n===Tr||n===Ar||n===Rr||n===Cr||n===Pr||n===Lr||n===Ir||n===Dr||n===Ur)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Mr)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sr)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wr)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===br)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Er)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tr)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ar)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rr)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cr)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pr)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lr)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ir)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dr)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ur)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nr||n===Fr||n===kr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Nr)return r===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Or||n===Br||n===zr||n===Hr)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Or)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Br)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Fm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,km=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Om{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new bc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zn({vertexShader:Fm,fragmentShader:km,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Q(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bm extends Ni{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,g=null;const v=typeof XRWebGLBinding<"u",p=new Om,m={},M=t.getContextAttributes();let w=null,x=null;const P=[],S=[],R=new Ie;let L=null;const y=new Yt;y.viewport=new dt;const E=new Yt;E.viewport=new dt;const I=[y,E],k=new iu;let B=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=P[j];return ne===void 0&&(ne=new Ua,P[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=P[j];return ne===void 0&&(ne=new Ua,P[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=P[j];return ne===void 0&&(ne=new Ua,P[j]=ne),ne.getHandSpace()};function q(j){const ne=S.indexOf(j.inputSource);if(ne===-1)return;const ye=P[ne];ye!==void 0&&(ye.update(j.inputSource,j.frame,l||r),ye.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ee);for(let j=0;j<P.length;j++){const ne=S[j];ne!==null&&(S[j]=null,P[j].disconnect(ne))}B=null,K=null,p.reset();for(const j in m)delete m[j];e.setRenderTarget(w),u=null,d=null,f=null,s=null,x=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ee),M.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ke=null,Te=null;M.depth&&(Te=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=M.stencil?as:ss,ke=M.stencil?is:si);const je={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:a};f=this.getBinding(),d=f.createProjectionLayer(je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new ai(d.textureWidth,d.textureHeight,{format:an,type:fn,depthTexture:new wc(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new ai(u.framebufferWidth,u.framebufferHeight,{format:an,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ee(j){for(let ne=0;ne<j.removed.length;ne++){const ye=j.removed[ne],ke=S.indexOf(ye);ke>=0&&(S[ke]=null,P[ke].disconnect(ye))}for(let ne=0;ne<j.added.length;ne++){const ye=j.added[ne];let ke=S.indexOf(ye);if(ke===-1){for(let je=0;je<P.length;je++)if(je>=S.length){S.push(ye),ke=je;break}else if(S[je]===null){S[je]=ye,ke=je;break}if(ke===-1)break}const Te=P[ke];Te&&Te.connect(ye)}}const G=new A,fe=new A;function me(j,ne,ye){G.setFromMatrixPosition(ne.matrixWorld),fe.setFromMatrixPosition(ye.matrixWorld);const ke=G.distanceTo(fe),Te=ne.projectionMatrix.elements,je=ye.projectionMatrix.elements,W=Te[14]/(Te[10]-1),T=Te[14]/(Te[10]+1),he=(Te[9]+1)/Te[5],te=(Te[9]-1)/Te[5],J=(Te[8]-1)/Te[0],ie=(je[8]+1)/je[0],Me=W*J,ae=W*ie,Ee=ke/(-J+ie),Ge=Ee*-J;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ge),j.translateZ(Ee),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Te[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const st=W+Ee,C=T+Ee,_=Me-Ge,O=ae+(ke-Ge),$=he*T/C*st,se=te*T/C*st;j.projectionMatrix.makePerspective(_,O,$,se,st,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Re(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ne=j.near,ye=j.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(ye=p.depthFar)),k.near=E.near=y.near=ne,k.far=E.far=y.far=ye,(B!==k.near||K!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),B=k.near,K=k.far),k.layers.mask=j.layers.mask|6,y.layers.mask=k.layers.mask&3,E.layers.mask=k.layers.mask&5;const ke=j.parent,Te=k.cameras;Re(k,ke);for(let je=0;je<Te.length;je++)Re(Te[je],ke);Te.length===2?me(k,y,E):k.projectionMatrix.copy(y.projectionMatrix),We(j,k,ke)};function We(j,ne,ye){ye===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(ye.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=rs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(j){return m[j]};let et=null;function pt(j,ne){if(h=ne.getViewerPose(l||r),g=ne,h!==null){const ye=h.views;u!==null&&(e.setRenderTargetFramebuffer(x,u.framebuffer),e.setRenderTarget(x));let ke=!1;ye.length!==k.cameras.length&&(k.cameras.length=0,ke=!0);for(let T=0;T<ye.length;T++){const he=ye[T];let te=null;if(u!==null)te=u.getViewport(he);else{const ie=f.getViewSubImage(d,he);te=ie.viewport,T===0&&(e.setRenderTargetTextures(x,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(x))}let J=I[T];J===void 0&&(J=new Yt,J.layers.enable(T),J.viewport=new dt,I[T]=J),J.matrix.fromArray(he.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(he.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(te.x,te.y,te.width,te.height),T===0&&(k.matrix.copy(J.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ke===!0&&k.cameras.push(J)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const T=f.getDepthInformation(ye[0]);T&&T.isValid&&T.texture&&p.init(T,s.renderState)}if(Te&&Te.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let T=0;T<ye.length;T++){const he=ye[T].camera;if(he){let te=m[he];te||(te=new bc,m[he]=te);const J=f.getCameraImage(he);te.sourceTexture=J}}}}for(let ye=0;ye<P.length;ye++){const ke=S[ye],Te=P[ye];ke!==null&&Te!==void 0&&Te.update(ke,ne,l||r)}et&&et(j,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const it=new Pc;it.setAnimationLoop(pt),this.setAnimationLoop=function(j){et=j},this.dispose=function(){}}}const Kn=new on,zm=new ft;function Hm(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,xc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,w,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(p,m):m.isMeshToonMaterial?(a(p,m),f(p,m)):m.isMeshPhongMaterial?(a(p,m),h(p,m)):m.isMeshStandardMaterial?(a(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,x)):m.isMeshMatcapMaterial?(a(p,m),g(p,m)):m.isMeshDepthMaterial?a(p,m):m.isMeshDistanceMaterial?(a(p,m),v(p,m)):m.isMeshNormalMaterial?a(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,M,w):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Vt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Vt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),w=M.envMap,x=M.envMapRotation;w&&(p.envMap.value=w,Kn.copy(x),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),p.envMapRotation.value.setFromMatrix4(zm.makeRotationFromEuler(Kn)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Vt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vm(i,e,t,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){const x=w.program;n.uniformBlockBinding(M,x)}function l(M,w){let x=s[M.id];x===void 0&&(g(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",p));const P=w.program;n.updateUBOMapping(M,P);const S=e.render.frame;a[M.id]!==S&&(d(M),a[M.id]=S)}function h(M){const w=f();M.__bindingPointIndex=w;const x=i.createBuffer(),P=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,x),x}function f(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const w=s[M.id],x=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let S=0,R=x.length;S<R;S++){const L=Array.isArray(x[S])?x[S]:[x[S]];for(let y=0,E=L.length;y<E;y++){const I=L[y];if(u(I,S,y,P)===!0){const k=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let K=0;for(let q=0;q<B.length;q++){const Y=B[q],ee=v(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,k+K,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,K),K+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,w,x,P){const S=M.value,R=w+"_"+x;if(P[R]===void 0)return typeof S=="number"||typeof S=="boolean"?P[R]=S:P[R]=S.clone(),!0;{const L=P[R];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return P[R]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function g(M){const w=M.uniforms;let x=0;const P=16;for(let R=0,L=w.length;R<L;R++){const y=Array.isArray(w[R])?w[R]:[w[R]];for(let E=0,I=y.length;E<I;E++){const k=y[E],B=Array.isArray(k.value)?k.value:[k.value];for(let K=0,q=B.length;K<q;K++){const Y=B[K],ee=v(Y),G=x%P,fe=G%ee.boundary,me=G+fe;x+=fe,me!==0&&P-me<ee.storage&&(x+=P-me),k.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=ee.storage}}}const S=x%P;return S>0&&(x+=P-S),M.__size=x,M.__cache={},this}function v(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function p(M){const w=M.target;w.removeEventListener("dispose",p);const x=r.indexOf(w.__bindingPointIndex);r.splice(x,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete a[w.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},a={}}return{bind:c,update:l,dispose:m}}class Gm{constructor(e={}){const{canvas:t=sd(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=r;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,m=null;const M=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let P=!1;this._outputColorSpace=Lt;let S=0,R=0,L=null,y=-1,E=null;const I=new dt,k=new dt;let B=null;const K=new $e(0);let q=0,Y=t.width,ee=t.height,G=1,fe=null,me=null;const Re=new dt(0,0,Y,ee),We=new dt(0,0,Y,ee);let et=!1;const pt=new io;let it=!1,j=!1;const ne=new ft,ye=new A,ke=new dt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function W(){return L===null?G:1}let T=n;function he(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yr}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",re,!1),T===null){const N="webgl2";if(T=he(N,b),T===null)throw he(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let te,J,ie,Me,ae,Ee,Ge,st,C,_,O,$,se,X,Le,de,Ae,Ce,le,_e,Be,Pe,ge,Xe;function D(){te=new Qp(T),te.init(),Pe=new Nm(T,te),J=new qp(T,te,e,Pe),ie=new Dm(T,te),J.reversedDepthBuffer&&d&&ie.buffers.depth.setReversed(!0),Me=new n0(T),ae=new ym,Ee=new Um(T,te,ie,ae,J,Pe,Me),Ge=new $p(x),st=new Jp(x),C=new ou(T),ge=new Wp(T,C),_=new e0(T,C,Me,ge),O=new s0(T,_,C,Me),le=new i0(T,J,Ee),de=new Yp(ae),$=new xm(x,Ge,st,te,J,ge,de),se=new Hm(x,ae),X=new Sm,Le=new Rm(te),Ce=new Gp(x,Ge,st,ie,O,u,c),Ae=new Lm(x,O,J),Xe=new Vm(T,Me,J,ie),_e=new Xp(T,te,Me),Be=new t0(T,te,Me),Me.programs=$.programs,x.capabilities=J,x.extensions=te,x.properties=ae,x.renderLists=X,x.shadowMap=Ae,x.state=ie,x.info=Me}D();const ce=new Bm(x,T);this.xr=ce,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const b=te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(Y,ee,!1))},this.getSize=function(b){return b.set(Y,ee)},this.setSize=function(b,N,H=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,ee=N,t.width=Math.floor(b*G),t.height=Math.floor(N*G),H===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(Y*G,ee*G).floor()},this.setDrawingBufferSize=function(b,N,H){Y=b,ee=N,G=H,t.width=Math.floor(b*H),t.height=Math.floor(N*H),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(Re)},this.setViewport=function(b,N,H,V){b.isVector4?Re.set(b.x,b.y,b.z,b.w):Re.set(b,N,H,V),ie.viewport(I.copy(Re).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(We)},this.setScissor=function(b,N,H,V){b.isVector4?We.set(b.x,b.y,b.z,b.w):We.set(b,N,H,V),ie.scissor(k.copy(We).multiplyScalar(G).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(b){ie.setScissorTest(et=b)},this.setOpaqueSort=function(b){fe=b},this.setTransparentSort=function(b){me=b},this.getClearColor=function(b){return b.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,H=!0){let V=0;if(b){let F=!1;if(L!==null){const oe=L.texture.format;F=oe===Qr||oe===Jr||oe===Zr}if(F){const oe=L.texture.type,ve=oe===fn||oe===si||oe===ns||oe===is||oe===Kr||oe===jr,we=Ce.getClearColor(),xe=Ce.getClearAlpha(),Oe=we.r,ze=we.g,De=we.b;ve?(g[0]=Oe,g[1]=ze,g[2]=De,g[3]=xe,T.clearBufferuiv(T.COLOR,0,g)):(v[0]=Oe,v[1]=ze,v[2]=De,v[3]=xe,T.clearBufferiv(T.COLOR,0,v))}else V|=T.COLOR_BUFFER_BIT}N&&(V|=T.DEPTH_BUFFER_BIT),H&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Ce.dispose(),X.dispose(),Le.dispose(),ae.dispose(),Ge.dispose(),st.dispose(),O.dispose(),ge.dispose(),Xe.dispose(),$.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ln),ce.removeEventListener("sessionend",fo),Vn.stop()};function ue(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=Me.autoReset,N=Ae.enabled,H=Ae.autoUpdate,V=Ae.needsUpdate,F=Ae.type;D(),Me.autoReset=b,Ae.enabled=N,Ae.autoUpdate=H,Ae.needsUpdate=V,Ae.type=F}function re(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Z(b){const N=b.target;N.removeEventListener("dispose",Z),be(N)}function be(b){Ve(b),ae.remove(b)}function Ve(b){const N=ae.get(b).programs;N!==void 0&&(N.forEach(function(H){$.releaseProgram(H)}),b.isShaderMaterial&&$.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,H,V,F,oe){N===null&&(N=Te);const ve=F.isMesh&&F.matrixWorld.determinant()<0,we=Zc(b,N,H,V,F);ie.setMaterial(V,ve);let xe=H.index,Oe=1;if(V.wireframe===!0){if(xe=_.getWireframeAttribute(H),xe===void 0)return;Oe=2}const ze=H.drawRange,De=H.attributes.position;let Je=ze.start*Oe,ct=(ze.start+ze.count)*Oe;oe!==null&&(Je=Math.max(Je,oe.start*Oe),ct=Math.min(ct,(oe.start+oe.count)*Oe)),xe!==null?(Je=Math.max(Je,0),ct=Math.min(ct,xe.count)):De!=null&&(Je=Math.max(Je,0),ct=Math.min(ct,De.count));const yt=ct-Je;if(yt<0||yt===1/0)return;ge.setup(F,V,we,H,xe);let gt,ut=_e;if(xe!==null&&(gt=C.get(xe),ut=Be,ut.setIndex(gt)),F.isMesh)V.wireframe===!0?(ie.setLineWidth(V.wireframeLinewidth*W()),ut.setMode(T.LINES)):ut.setMode(T.TRIANGLES);else if(F.isLine){let Fe=V.linewidth;Fe===void 0&&(Fe=1),ie.setLineWidth(Fe*W()),F.isLineSegments?ut.setMode(T.LINES):F.isLineLoop?ut.setMode(T.LINE_LOOP):ut.setMode(T.LINE_STRIP)}else F.isPoints?ut.setMode(T.POINTS):F.isSprite&&ut.setMode(T.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)os("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))ut.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Fe=F._multiDrawStarts,vt=F._multiDrawCounts,tt=F._multiDrawCount,Gt=xe?C.get(xe).bytesPerElement:1,li=ae.get(V).currentProgram.getUniforms();for(let Wt=0;Wt<tt;Wt++)li.setValue(T,"_gl_DrawID",Wt),ut.render(Fe[Wt]/Gt,vt[Wt])}else if(F.isInstancedMesh)ut.renderInstances(Je,yt,F.count);else if(H.isInstancedBufferGeometry){const Fe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,vt=Math.min(H.instanceCount,Fe);ut.renderInstances(Je,yt,vt)}else ut.render(Je,yt)};function mt(b,N,H){b.transparent===!0&&b.side===Ft&&b.forceSinglePass===!1?(b.side=Vt,b.needsUpdate=!0,fs(b,N,H),b.side=Bn,b.needsUpdate=!0,fs(b,N,H),b.side=Ft):fs(b,N,H)}this.compile=function(b,N,H=null){H===null&&(H=b),m=Le.get(H),m.init(N),w.push(m),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),b!==H&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const V=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const oe=F.material;if(oe)if(Array.isArray(oe))for(let ve=0;ve<oe.length;ve++){const we=oe[ve];mt(we,H,F),V.add(we)}else mt(oe,H,F),V.add(oe)}),m=w.pop(),V},this.compileAsync=function(b,N,H=null){const V=this.compile(b,N,H);return new Promise(F=>{function oe(){if(V.forEach(function(ve){ae.get(ve).currentProgram.isReady()&&V.delete(ve)}),V.size===0){F(b);return}setTimeout(oe,10)}te.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let at=null;function pn(b){at&&at(b)}function ln(){Vn.stop()}function fo(){Vn.start()}const Vn=new Pc;Vn.setAnimationLoop(pn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(b){at=b,ce.setAnimationLoop(b),b===null?Vn.stop():Vn.start()},ce.addEventListener("sessionstart",ln),ce.addEventListener("sessionend",fo),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(N),N=ce.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,N,L),m=Le.get(b,w.length),m.init(N),w.push(m),ne.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),pt.setFromProjectionMatrix(ne,dn,N.reversedDepth),j=this.localClippingEnabled,it=de.init(this.clippingPlanes,j),p=X.get(b,M.length),p.init(),M.push(p),ce.enabled===!0&&ce.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&da(oe,N,-1/0,x.sortObjects)}da(b,N,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(fe,me),je=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,je&&Ce.addToRenderList(p,b),this.info.render.frame++,it===!0&&de.beginShadows();const H=m.state.shadowsArray;Ae.render(H,b,N),it===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,F=p.transmissive;if(m.setupLights(),N.isArrayCamera){const oe=N.cameras;if(F.length>0)for(let ve=0,we=oe.length;ve<we;ve++){const xe=oe[ve];mo(V,F,b,xe)}je&&Ce.render(b);for(let ve=0,we=oe.length;ve<we;ve++){const xe=oe[ve];po(p,b,xe,xe.viewport)}}else F.length>0&&mo(V,F,b,N),je&&Ce.render(b),po(p,b,N);L!==null&&R===0&&(Ee.updateMultisampleRenderTarget(L),Ee.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(x,b,N),ge.resetDefaultState(),y=-1,E=null,w.pop(),w.length>0?(m=w[w.length-1],it===!0&&de.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function da(b,N,H,V){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||pt.intersectsSprite(b)){V&&ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ne);const ve=O.update(b),we=b.material;we.visible&&p.push(b,ve,we,H,ke.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||pt.intersectsObject(b))){const ve=O.update(b),we=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ke.copy(b.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),ke.copy(ve.boundingSphere.center)),ke.applyMatrix4(b.matrixWorld).applyMatrix4(ne)),Array.isArray(we)){const xe=ve.groups;for(let Oe=0,ze=xe.length;Oe<ze;Oe++){const De=xe[Oe],Je=we[De.materialIndex];Je&&Je.visible&&p.push(b,ve,Je,H,ke.z,De)}}else we.visible&&p.push(b,ve,we,H,ke.z,null)}}const oe=b.children;for(let ve=0,we=oe.length;ve<we;ve++)da(oe[ve],N,H,V)}function po(b,N,H,V){const F=b.opaque,oe=b.transmissive,ve=b.transparent;m.setupLightsView(H),it===!0&&de.setGlobalState(x.clippingPlanes,H),V&&ie.viewport(I.copy(V)),F.length>0&&us(F,N,H),oe.length>0&&us(oe,N,H),ve.length>0&&us(ve,N,H),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function mo(b,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new ai(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?ls:fn,minFilter:ni,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const oe=m.state.transmissionRenderTarget[V.id],ve=V.viewport||I;oe.setSize(ve.z*x.transmissionResolutionScale,ve.w*x.transmissionResolutionScale);const we=x.getRenderTarget(),xe=x.getActiveCubeFace(),Oe=x.getActiveMipmapLevel();x.setRenderTarget(oe),x.getClearColor(K),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),je&&Ce.render(H);const ze=x.toneMapping;x.toneMapping=On;const De=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),it===!0&&de.setGlobalState(x.clippingPlanes,V),us(b,H,V),Ee.updateMultisampleRenderTarget(oe),Ee.updateRenderTargetMipmap(oe),te.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ct=0,yt=N.length;ct<yt;ct++){const gt=N[ct],ut=gt.object,Fe=gt.geometry,vt=gt.material,tt=gt.group;if(vt.side===Ft&&ut.layers.test(V.layers)){const Gt=vt.side;vt.side=Vt,vt.needsUpdate=!0,go(ut,H,V,Fe,vt,tt),vt.side=Gt,vt.needsUpdate=!0,Je=!0}}Je===!0&&(Ee.updateMultisampleRenderTarget(oe),Ee.updateRenderTargetMipmap(oe))}x.setRenderTarget(we,xe,Oe),x.setClearColor(K,q),De!==void 0&&(V.viewport=De),x.toneMapping=ze}function us(b,N,H){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,oe=b.length;F<oe;F++){const ve=b[F],we=ve.object,xe=ve.geometry,Oe=ve.group;let ze=ve.material;ze.allowOverride===!0&&V!==null&&(ze=V),we.layers.test(H.layers)&&go(we,N,H,xe,ze,Oe)}}function go(b,N,H,V,F,oe){b.onBeforeRender(x,N,H,V,F,oe),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(x,N,H,V,b,oe),F.transparent===!0&&F.side===Ft&&F.forceSinglePass===!1?(F.side=Vt,F.needsUpdate=!0,x.renderBufferDirect(H,N,V,F,b,oe),F.side=Bn,F.needsUpdate=!0,x.renderBufferDirect(H,N,V,F,b,oe),F.side=Ft):x.renderBufferDirect(H,N,V,F,b,oe),b.onAfterRender(x,N,H,V,F,oe)}function fs(b,N,H){N.isScene!==!0&&(N=Te);const V=ae.get(b),F=m.state.lights,oe=m.state.shadowsArray,ve=F.state.version,we=$.getParameters(b,F.state,oe,N,H),xe=$.getProgramCacheKey(we);let Oe=V.programs;V.environment=b.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(b.isMeshStandardMaterial?st:Ge).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Oe===void 0&&(b.addEventListener("dispose",Z),Oe=new Map,V.programs=Oe);let ze=Oe.get(xe);if(ze!==void 0){if(V.currentProgram===ze&&V.lightsStateVersion===ve)return _o(b,we),ze}else we.uniforms=$.getUniforms(b),b.onBeforeCompile(we,x),ze=$.acquireProgram(we,xe),Oe.set(xe,ze),V.uniforms=we.uniforms;const De=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=de.uniform),_o(b,we),V.needsLights=Qc(b),V.lightsStateVersion=ve,V.needsLights&&(De.ambientLightColor.value=F.state.ambient,De.lightProbe.value=F.state.probe,De.directionalLights.value=F.state.directional,De.directionalLightShadows.value=F.state.directionalShadow,De.spotLights.value=F.state.spot,De.spotLightShadows.value=F.state.spotShadow,De.rectAreaLights.value=F.state.rectArea,De.ltc_1.value=F.state.rectAreaLTC1,De.ltc_2.value=F.state.rectAreaLTC2,De.pointLights.value=F.state.point,De.pointLightShadows.value=F.state.pointShadow,De.hemisphereLights.value=F.state.hemi,De.directionalShadowMap.value=F.state.directionalShadowMap,De.directionalShadowMatrix.value=F.state.directionalShadowMatrix,De.spotShadowMap.value=F.state.spotShadowMap,De.spotLightMatrix.value=F.state.spotLightMatrix,De.spotLightMap.value=F.state.spotLightMap,De.pointShadowMap.value=F.state.pointShadowMap,De.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=ze,V.uniformsList=null,ze}function vo(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Ys.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function _o(b,N){const H=ae.get(b);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Zc(b,N,H,V,F){N.isScene!==!0&&(N=Te),Ee.resetTextureUnits();const oe=N.fog,ve=V.isMeshStandardMaterial?N.environment:null,we=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ii,xe=(V.isMeshStandardMaterial?st:Ge).get(V.envMap||ve),Oe=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),De=!!H.morphAttributes.position,Je=!!H.morphAttributes.normal,ct=!!H.morphAttributes.color;let yt=On;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(yt=x.toneMapping);const gt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ut=gt!==void 0?gt.length:0,Fe=ae.get(V),vt=m.state.lights;if(it===!0&&(j===!0||b!==E)){const kt=b===E&&V.id===y;de.setState(V,b,kt)}let tt=!1;V.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==vt.state.version||Fe.outputColorSpace!==we||F.isBatchedMesh&&Fe.batching===!1||!F.isBatchedMesh&&Fe.batching===!0||F.isBatchedMesh&&Fe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Fe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Fe.instancing===!1||!F.isInstancedMesh&&Fe.instancing===!0||F.isSkinnedMesh&&Fe.skinning===!1||!F.isSkinnedMesh&&Fe.skinning===!0||F.isInstancedMesh&&Fe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Fe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Fe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Fe.instancingMorph===!1&&F.morphTexture!==null||Fe.envMap!==xe||V.fog===!0&&Fe.fog!==oe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==de.numPlanes||Fe.numIntersection!==de.numIntersection)||Fe.vertexAlphas!==Oe||Fe.vertexTangents!==ze||Fe.morphTargets!==De||Fe.morphNormals!==Je||Fe.morphColors!==ct||Fe.toneMapping!==yt||Fe.morphTargetsCount!==ut)&&(tt=!0):(tt=!0,Fe.__version=V.version);let Gt=Fe.currentProgram;tt===!0&&(Gt=fs(V,N,F));let li=!1,Wt=!1,Bi=!1;const _t=Gt.getUniforms(),jt=Fe.uniforms;if(ie.useProgram(Gt.program)&&(li=!0,Wt=!0,Bi=!0),V.id!==y&&(y=V.id,Wt=!0),li||E!==b){ie.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),_t.setValue(T,"projectionMatrix",b.projectionMatrix),_t.setValue(T,"viewMatrix",b.matrixWorldInverse);const Ht=_t.map.cameraPosition;Ht!==void 0&&Ht.setValue(T,ye.setFromMatrixPosition(b.matrixWorld)),J.logarithmicDepthBuffer&&_t.setValue(T,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&_t.setValue(T,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,Wt=!0,Bi=!0)}if(F.isSkinnedMesh){_t.setOptional(T,F,"bindMatrix"),_t.setOptional(T,F,"bindMatrixInverse");const kt=F.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),_t.setValue(T,"boneTexture",kt.boneTexture,Ee))}F.isBatchedMesh&&(_t.setOptional(T,F,"batchingTexture"),_t.setValue(T,"batchingTexture",F._matricesTexture,Ee),_t.setOptional(T,F,"batchingIdTexture"),_t.setValue(T,"batchingIdTexture",F._indirectTexture,Ee),_t.setOptional(T,F,"batchingColorTexture"),F._colorsTexture!==null&&_t.setValue(T,"batchingColorTexture",F._colorsTexture,Ee));const Zt=H.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&le.update(F,H,Gt),(Wt||Fe.receiveShadow!==F.receiveShadow)&&(Fe.receiveShadow=F.receiveShadow,_t.setValue(T,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(jt.envMap.value=xe,jt.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(jt.envMapIntensity.value=N.environmentIntensity),Wt&&(_t.setValue(T,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&Jc(jt,Bi),oe&&V.fog===!0&&se.refreshFogUniforms(jt,oe),se.refreshMaterialUniforms(jt,V,G,ee,m.state.transmissionRenderTarget[b.id]),Ys.upload(T,vo(Fe),jt,Ee)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ys.upload(T,vo(Fe),jt,Ee),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&_t.setValue(T,"center",F.center),_t.setValue(T,"modelViewMatrix",F.modelViewMatrix),_t.setValue(T,"normalMatrix",F.normalMatrix),_t.setValue(T,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const kt=V.uniformsGroups;for(let Ht=0,ua=kt.length;Ht<ua;Ht++){const Gn=kt[Ht];Xe.update(Gn,Gt),Xe.bind(Gn,Gt)}}return Gt}function Jc(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Qc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,N,H){const V=ae.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ae.get(b.texture).__webglTexture=N,ae.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const H=ae.get(b);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const eh=T.createFramebuffer();this.setRenderTarget=function(b,N=0,H=0){L=b,S=N,R=H;let V=!0,F=null,oe=!1,ve=!1;if(b){const xe=ae.get(b);if(xe.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(T.FRAMEBUFFER,null),V=!1;else if(xe.__webglFramebuffer===void 0)Ee.setupRenderTarget(b);else if(xe.__hasExternalTextures)Ee.rebindTextures(b,ae.get(b.texture).__webglTexture,ae.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const De=b.depthTexture;if(xe.__boundDepthTexture!==De){if(De!==null&&ae.has(De)&&(b.width!==De.image.width||b.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ee.setupDepthRenderbuffer(b)}}const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);const ze=ae.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[N])?F=ze[N][H]:F=ze[N],oe=!0):b.samples>0&&Ee.useMultisampledRTT(b)===!1?F=ae.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?F=ze[H]:F=ze,I.copy(b.viewport),k.copy(b.scissor),B=b.scissorTest}else I.copy(Re).multiplyScalar(G).floor(),k.copy(We).multiplyScalar(G).floor(),B=et;if(H!==0&&(F=eh),ie.bindFramebuffer(T.FRAMEBUFFER,F)&&V&&ie.drawBuffers(b,F),ie.viewport(I),ie.scissor(k),ie.setScissorTest(B),oe){const xe=ae.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,H)}else if(ve){const xe=N;for(let Oe=0;Oe<b.textures.length;Oe++){const ze=ae.get(b.textures[Oe]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Oe,ze.__webglTexture,H,xe)}}else if(b!==null&&H!==0){const xe=ae.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,xe.__webglTexture,H)}y=-1},this.readRenderTargetPixels=function(b,N,H,V,F,oe,ve,we=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve]),xe){ie.bindFramebuffer(T.FRAMEBUFFER,xe);try{const Oe=b.textures[we],ze=Oe.format,De=Oe.type;if(!J.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-V&&H>=0&&H<=b.height-F&&(b.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+we),T.readPixels(N,H,V,F,Pe.convert(ze),Pe.convert(De),oe))}finally{const Oe=L!==null?ae.get(L).__webglFramebuffer:null;ie.bindFramebuffer(T.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(b,N,H,V,F,oe,ve,we=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve]),xe)if(N>=0&&N<=b.width-V&&H>=0&&H<=b.height-F){ie.bindFramebuffer(T.FRAMEBUFFER,xe);const Oe=b.textures[we],ze=Oe.format,De=Oe.type;if(!J.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Je),T.bufferData(T.PIXEL_PACK_BUFFER,oe.byteLength,T.STREAM_READ),b.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+we),T.readPixels(N,H,V,F,Pe.convert(ze),Pe.convert(De),0);const ct=L!==null?ae.get(L).__webglFramebuffer:null;ie.bindFramebuffer(T.FRAMEBUFFER,ct);const yt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await ad(T,yt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Je),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,oe),T.deleteBuffer(Je),T.deleteSync(yt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,H=0){const V=Math.pow(2,-H),F=Math.floor(b.image.width*V),oe=Math.floor(b.image.height*V),ve=N!==null?N.x:0,we=N!==null?N.y:0;Ee.setTexture2D(b,0),T.copyTexSubImage2D(T.TEXTURE_2D,H,0,0,ve,we,F,oe),ie.unbindTexture()};const th=T.createFramebuffer(),nh=T.createFramebuffer();this.copyTextureToTexture=function(b,N,H=null,V=null,F=0,oe=null){oe===null&&(F!==0?(os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=F,F=0):oe=0);let ve,we,xe,Oe,ze,De,Je,ct,yt;const gt=b.isCompressedTexture?b.mipmaps[oe]:b.image;if(H!==null)ve=H.max.x-H.min.x,we=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,Oe=H.min.x,ze=H.min.y,De=H.isBox3?H.min.z:0;else{const Zt=Math.pow(2,-F);ve=Math.floor(gt.width*Zt),we=Math.floor(gt.height*Zt),b.isDataArrayTexture?xe=gt.depth:b.isData3DTexture?xe=Math.floor(gt.depth*Zt):xe=1,Oe=0,ze=0,De=0}V!==null?(Je=V.x,ct=V.y,yt=V.z):(Je=0,ct=0,yt=0);const ut=Pe.convert(N.format),Fe=Pe.convert(N.type);let vt;N.isData3DTexture?(Ee.setTexture3D(N,0),vt=T.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ee.setTexture2DArray(N,0),vt=T.TEXTURE_2D_ARRAY):(Ee.setTexture2D(N,0),vt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,N.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,N.unpackAlignment);const tt=T.getParameter(T.UNPACK_ROW_LENGTH),Gt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),li=T.getParameter(T.UNPACK_SKIP_PIXELS),Wt=T.getParameter(T.UNPACK_SKIP_ROWS),Bi=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,gt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,gt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Oe),T.pixelStorei(T.UNPACK_SKIP_ROWS,ze),T.pixelStorei(T.UNPACK_SKIP_IMAGES,De);const _t=b.isDataArrayTexture||b.isData3DTexture,jt=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const Zt=ae.get(b),kt=ae.get(N),Ht=ae.get(Zt.__renderTarget),ua=ae.get(kt.__renderTarget);ie.bindFramebuffer(T.READ_FRAMEBUFFER,Ht.__webglFramebuffer),ie.bindFramebuffer(T.DRAW_FRAMEBUFFER,ua.__webglFramebuffer);for(let Gn=0;Gn<xe;Gn++)_t&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ae.get(b).__webglTexture,F,De+Gn),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ae.get(N).__webglTexture,oe,yt+Gn)),T.blitFramebuffer(Oe,ze,ve,we,Je,ct,ve,we,T.DEPTH_BUFFER_BIT,T.NEAREST);ie.bindFramebuffer(T.READ_FRAMEBUFFER,null),ie.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(F!==0||b.isRenderTargetTexture||ae.has(b)){const Zt=ae.get(b),kt=ae.get(N);ie.bindFramebuffer(T.READ_FRAMEBUFFER,th),ie.bindFramebuffer(T.DRAW_FRAMEBUFFER,nh);for(let Ht=0;Ht<xe;Ht++)_t?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Zt.__webglTexture,F,De+Ht):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Zt.__webglTexture,F),jt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,kt.__webglTexture,oe,yt+Ht):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,kt.__webglTexture,oe),F!==0?T.blitFramebuffer(Oe,ze,ve,we,Je,ct,ve,we,T.COLOR_BUFFER_BIT,T.NEAREST):jt?T.copyTexSubImage3D(vt,oe,Je,ct,yt+Ht,Oe,ze,ve,we):T.copyTexSubImage2D(vt,oe,Je,ct,Oe,ze,ve,we);ie.bindFramebuffer(T.READ_FRAMEBUFFER,null),ie.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else jt?b.isDataTexture||b.isData3DTexture?T.texSubImage3D(vt,oe,Je,ct,yt,ve,we,xe,ut,Fe,gt.data):N.isCompressedArrayTexture?T.compressedTexSubImage3D(vt,oe,Je,ct,yt,ve,we,xe,ut,gt.data):T.texSubImage3D(vt,oe,Je,ct,yt,ve,we,xe,ut,Fe,gt):b.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,oe,Je,ct,ve,we,ut,Fe,gt.data):b.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,oe,Je,ct,gt.width,gt.height,ut,gt.data):T.texSubImage2D(T.TEXTURE_2D,oe,Je,ct,ve,we,ut,Fe,gt);T.pixelStorei(T.UNPACK_ROW_LENGTH,tt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Gt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,li),T.pixelStorei(T.UNPACK_SKIP_ROWS,Wt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Bi),oe===0&&N.generateMipmaps&&T.generateMipmap(vt),ie.unbindTexture()},this.initRenderTarget=function(b){ae.get(b).__webglFramebuffer===void 0&&Ee.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ee.setTextureCube(b,0):b.isData3DTexture?Ee.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ee.setTexture2DArray(b,0):Ee.setTexture2D(b,0),ie.unbindTexture()},this.resetState=function(){S=0,R=0,L=null,ie.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const Al={shotgun:{attack:.42,attackFilter:950,bodyF:105,bodyEnd:42,bodyV:.25,bodyType:"sawtooth",tailF:68,tailEnd:30,tailV:.16,tailNoise:.18,tailFilter:700},rail:{attack:.2,attackFilter:3e3,bodyF:1250,bodyEnd:85,bodyV:.18,bodyType:"sawtooth",tailF:90,tailEnd:35,tailV:.22,tailNoise:.1,tailFilter:900},arc:{attack:.12,attackFilter:4200,bodyF:920,bodyEnd:230,bodyV:.13,bodyType:"square",tailF:210,tailEnd:80,tailV:.1,tailNoise:.08,tailFilter:1600},rocket:{attack:.32,attackFilter:1300,bodyF:150,bodyEnd:55,bodyV:.2,bodyType:"sawtooth",tailF:70,tailEnd:28,tailV:.18,tailNoise:.24,tailFilter:600},default:{attack:.18,attackFilter:1900,bodyF:190,bodyEnd:70,bodyV:.12,bodyType:"square",tailF:95,tailEnd:40,tailV:.09,tailNoise:.06,tailFilter:1100}},Rl={light:{noiseDur:.045,noiseV:.035,noiseFilter:3200,toneF:900,toneEnd:520,toneV:.02,toneDur:.035},heavy:{noiseDur:.11,noiseV:.06,noiseFilter:420,toneF:90,toneEnd:45,toneV:.045,toneDur:.12},hover:{noiseDur:.14,noiseV:.015,noiseFilter:900,toneF:160,toneEnd:220,toneV:.025,toneDur:.18}};class Wm{constructor(){this.enabled=!0,this.context=null,this.master=null,this.noiseBuffer=null,this.volume=1,this.v2=!1,this.cueIntensity=1}init(){if(this.context){this.context.state==="suspended"&&this.context.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.context=new e,this.master=this.context.createGain(),this.master.gain.value=.28*this.volume,this.master.connect(this.context.destination);const t=this.context.sampleRate;this.noiseBuffer=this.context.createBuffer(1,t,this.context.sampleRate);const n=this.noiseBuffer.getChannelData(0);for(let s=0;s<t;s++)n[s]=Math.random()*2-1}toggle(){return this.enabled=!this.enabled,this.enabled&&this.init(),this.enabled}setVolume(e){const t=Number(e);this.volume=Number.isFinite(t)?Math.min(1,Math.max(0,t/100)):1,this.master&&(this.master.gain.value=.28*this.volume)}setAudioV2(e){this.v2=!!e}setCueIntensity(e){const t=Number(e);this.cueIntensity=Number.isFinite(t)?Math.min(1.5,Math.max(0,t/100)):1}tone(e,t,n=.15,s="sine",a=e,r=0,o=!1){const c=n*(o?this.cueIntensity:1);if(!this.enabled||c<=1e-5||(this.init(),!this.context))return;const l=this.context.currentTime+r,h=this.context.createOscillator(),f=this.context.createGain();h.type=s,h.frequency.setValueAtTime(e,l),h.frequency.exponentialRampToValueAtTime(Math.max(20,a),l+t),f.gain.setValueAtTime(c,l),f.gain.exponentialRampToValueAtTime(1e-4,l+t),h.connect(f),f.connect(this.master),h.start(l),h.stop(l+t)}noise(e,t=.15,n=1200,s=0,a=!1){const r=t*(a?this.cueIntensity:1);if(!this.enabled||r<=1e-5||(this.init(),!this.context))return;const o=this.context.currentTime+s,c=this.context.createBufferSource(),l=this.context.createBiquadFilter(),h=this.context.createGain();c.buffer=this.noiseBuffer,l.type="lowpass",l.frequency.value=n,h.gain.setValueAtTime(r,o),h.gain.exponentialRampToValueAtTime(1e-4,o+e),c.connect(l),l.connect(h),h.connect(this.master),c.start(o),c.stop(o+e)}shot(e){if(this.v2){this.shotV2(e);return}e==="shotgun"?(this.noise(.22,.42,950),this.tone(105,.18,.25,"sawtooth",42)):e==="rail"?(this.tone(1250,.28,.18,"sawtooth",85),this.tone(90,.35,.22,"sine",35),this.noise(.16,.2,3e3)):e==="arc"?(this.tone(920,.12,.13,"square",230),this.tone(1560,.09,.08,"sine",440),this.noise(.09,.12,4200)):e==="rocket"?(this.noise(.2,.32,1300),this.tone(150,.32,.2,"sawtooth",55),this.tone(420,.12,.1,"sine",180,.05)):(this.noise(.075,.18,1900),this.tone(190,.07,.12,"square",70))}shotV2(e){const t=Al[e]||Al.default;this.noise(.012,t.attack,t.attackFilter),this.tone(t.bodyF,.078,t.bodyV,t.bodyType,t.bodyEnd,.012),this.tone(t.tailF,.13,t.tailV,"sine",t.tailEnd,.09),t.tailNoise&&this.noise(.11,t.tailNoise,t.tailFilter,.09)}footstep(e){const t=Rl[e]||Rl.hover;this.noise(t.noiseDur,t.noiseV,t.noiseFilter,0,!0),this.tone(t.toneF,t.toneDur,t.toneV,"sine",t.toneEnd,0,!0)}hit(){this.tone(1250,.035,.055,"square",800,0,!0)}kill(){this.tone(320,.1,.08,"sine",680,0,!0),this.tone(740,.12,.06,"sine",980,.05,!0)}critHit(){this.tone(1760,.07,.09,"triangle",880,0,!0),this.tone(2200,.1,.06,"sine",1320,.03,!0),this.noise(.05,.04,6e3,0,!0)}elementHit(){this.tone(620,.16,.07,"sine",980,0,!0),this.noise(.11,.05,5200,0,!0)}pickup(){this.tone(540,.08,.09,"sine",860,0,!0),this.tone(850,.13,.07,"sine",1200,.07,!0)}warning(){this.tone(780,.12,.09,"square",520,0,!0),this.tone(780,.12,.09,"square",520,.2,!0)}enemyShot(){this.tone(260,.14,.07,"sawtooth",90)}damage(){this.noise(.16,.2,450),this.tone(70,.2,.12,"sawtooth",35)}reload(){this.noise(.035,.08,2300),this.tone(430,.04,.04,"square",330,.12)}empty(){this.tone(180,.035,.05,"square",150)}ui(){this.tone(620,.04,.035,"sine",760)}dash(){this.noise(.2,.13,1400),this.tone(160,.2,.12,"sine",640)}pulse(){this.tone(85,.65,.22,"sine",30),this.tone(340,.35,.12,"sawtooth",70)}explosion(){this.noise(.48,.4,600),this.tone(90,.4,.2,"sine",25)}wave(){[220,330,440].forEach((e,t)=>this.tone(e,.22,.07,"sine",e*1.02,t*.1))}upgrade(){[380,570,760].forEach((e,t)=>this.tone(e,.25,.08,"triangle",e*1.1,t*.08))}gameOver(){this.tone(210,.8,.15,"sawtooth",45)}victory(){[262,330,392,523].forEach((e,t)=>this.tone(e,.5,.09,"triangle",e,t*.13))}overdrive(){[330,440,660,880].forEach((e,t)=>this.tone(e,.45,.1,"sawtooth",e*1.35,t*.06)),this.tone(70,.6,.18,"sine",40)}achievement(){[660,880,1320].forEach((e,t)=>this.tone(e,.15,.07,"triangle",e,t*.07))}perfectDodge(){this.tone(900,.18,.12,"sine",1700),this.tone(1500,.12,.08,"triangle",2400,.05),this.noise(.12,.1,5e3)}glitch(){this.tone(60,.12,.16,"square",140),this.noise(.1,.14,2600)}break(){this.tone(140,.5,.22,"sawtooth",60),this.noise(.3,.32,900),this.tone(1200,.18,.12,"square",320)}staggerHit(){this.tone(520,.05,.05,"square",360)}}const U=(i,e,t)=>new un(i,e,t),He=(i,e,t,n=10)=>new Sn(i,e,t,n),Nt=(i,e=10,t=8)=>new Ui(i,e,t),Dn=(i,e,t=8)=>new ds(i,e,t),rt=(i,e,t=6,n=20)=>new Fn(i,e,t,n),wi=(i,e=0)=>new Hn(i,e),zs=(i,e=0)=>new ra(i,e),Xm=(i=[0,0,0],e=[0,0,0],t=[1,1,1])=>new ft().compose(new A(...i),new ki().setFromEuler(new on(...e)),new A(...t));function qm(i,e){const t=i.index?i.toNonIndexed():i.clone();e&&t.applyMatrix4(e);for(const n of Object.keys(t.attributes))n!=="position"&&n!=="normal"&&t.deleteAttribute(n);return t.attributes.normal||t.computeVertexNormals(),t}function Cl(i){let e=0;for(const r of i)e+=r.attributes.position.count;const t=new Float32Array(e*3),n=new Float32Array(e*3);let s=0;for(const r of i)t.set(r.attributes.position.array,s*3),n.set(r.attributes.normal.array,s*3),s+=r.attributes.position.count,r.dispose();const a=new St;return a.setAttribute("position",new $t(t,3)),a.setAttribute("normal",new $t(n,3)),a.computeBoundingSphere(),a}class Un{constructor(){this.map=new Map}add(e,t,n,s,a){const r=qm(t,Xm(n,s,a));return this.map.has(e)||this.map.set(e,[]),this.map.get(e).push(r),t.dispose(),this}build(e,t={}){const n=new ot;for(const[s,a]of this.map){const r=new Q(Cl(a),e[s]);r.castShadow=!!t.castShadow,r.receiveShadow=!!t.receiveShadow,n.add(r)}return n}meshes(e,t={}){const n=[];for(const[s,a]of this.map){const r=new Q(Cl(a),e[s]);r.castShadow=!!t.castShadow,n.push({key:s,mesh:r})}return n}}const Nc=[{metal:3096894,dark:857624,accent:7246217,glow:5568466},{metal:3944744,dark:1314829,accent:10123348,glow:16753485},{metal:2834254,dark:594198,accent:8103106,glow:6930431},{metal:2374979,dark:528917,accent:7780800,glow:8251647},{metal:3812384,dark:1314056,accent:12159570,glow:16742973},{metal:2373700,dark:529176,accent:8372182,glow:9431295},{metal:3160636,dark:857110,accent:9086624,glow:16766044},{metal:3812412,dark:1314068,accent:11040936,glow:16743122},{metal:2763312,dark:789520,accent:10132136,glow:15132415},{metal:2966584,dark:792080,accent:8367750,glow:8257436},{metal:4471842,dark:1446666,accent:11575378,glow:16769357},{metal:4205355,dark:1444876,accent:11563120,glow:16739162},{metal:2503744,dark:528922,accent:7247032,glow:10475775},{metal:2895690,dark:658458,accent:9081032,glow:11577599},{metal:4863008,dark:1708040,accent:13673564,glow:16761421}];function Ym(i){const e=Nc[i],t=n=>new Pt({color:n,emissive:n,emissiveIntensity:.03,metalness:.72,roughness:.42});return{metal:t(e.metal),dark:t(e.dark),accent:t(e.accent),glow:new Ze({color:e.glow,toneMapped:!1}),glass:new Ze({color:e.glow,transparent:!0,opacity:.28,toneMapped:!1,side:Ft})}}function $m(i,e){const t=i.add.bind(i);t("dark",U(.115,.28,.14),[0,-.205,.075],[-.2,0,0]),t("metal",U(.125,.055,.16),[0,-.325,.09]),t("accent",U(.018,.075,.02),[0,-.12,-.045]),t("dark",U(.012,.075,.012),[-.045,-.115,-.045]),t("dark",U(.012,.075,.012),[.045,-.115,-.045]),t("dark",U(.1,.012,.012),[0,-.15,-.045]),t("glow",U(.008,.038,.008),[0,-.117,-.049]),t("metal",U(.075,.075,.34),[0,-.045,.28]),t("metal",U(.075,.075,.34),[0,-.205,.28]),t("metal",U(.075,.18,.06),[0,-.125,.44]),t("dark",U(.13,.19,.055),[0,-.12,.47]),t("accent",U(.11,.02,.2),[0,-.02,.3]);for(const n of[-1,1]){t("accent",U(.012,.115,.24),[n*.098,.006,.03]);for(let s=0;s<3;s++)t("dark",He(.012,.012,.02,6),[n*.106,.03,-.04+s*.075],[0,0,Math.PI/2])}if(t("glow",U(.052,.012,.012),[0,.078,-.02]),e!==1){for(let n=0;n<9;n++)t("dark",U(.075,.017,.026),[0,.115,-.44+n*.062]);t("metal",U(.055,.02,.58),[0,.1,-.2])}}function Km(i,e){const t=new ot;let n=null,s=null;if(i==="reddot"){const a=new Q(U(.12,.05,.18),e.dark),r=new Q(U(.085,.085,.022),e.metal),o=new Q(U(.07,.07,.006),new Ze({color:3135743,transparent:!0,opacity:.18,depthWrite:!1,side:Ft,toneMapped:!1}));o.position.z=-.012,n=new Q(Nt(.012,8,6),new Ze({color:16724816,toneMapped:!1})),n.position.set(0,0,-.02),t.add(a,r,o,n),t.position.set(0,.15,-.14)}else{const a=i==="sniper"?.5:i==="scope5"?.34:.26,r=i==="sniper"?.06:.05,o=new Q(He(r,r,a,14),e.dark);o.rotation.x=Math.PI/2;const c=new Q(He(r*.92,r*.92,.04,14),new Ze({color:529432,toneMapped:!1}));c.rotation.x=Math.PI/2,c.position.z=-a/2;const l=new Q(He(r*.92,r*.92,.04,14),new Ze({color:3135743,transparent:!0,opacity:.22,depthWrite:!1,toneMapped:!1}));l.rotation.x=Math.PI/2,l.position.z=a/2;const h=new Q(rt(r,.01,5,16),e.accent);h.position.z=-a/2;const f=new Q(U(.003,r*1.35,.002),new Ze({color:16731501,toneMapped:!1})),d=new Q(U(r*1.35,.003,.002),new Ze({color:16731501,toneMapped:!1}));if(f.position.z=-a/2+.012,d.position.z=-a/2+.012,s=new ot,s.add(f,d),t.add(o,c,l,h,s),i==="sniper"){const u=new Q(rt(r*1.06,.014,6,18),e.accent);u.rotation.x=Math.PI/2,t.add(u)}t.position.set(0,.17,-.14)}return{group:t,redDot:n,reticle:s}}const jm=["scope3","reddot","sniper","reddot","reddot","scope3","reddot","reddot","reddot","scope3","reddot","scope5","sniper","sniper","sniper"];function Zm(i){const t=[0,1,2,3,4,5,6,6,6,9,9,9,12,12,12][i]??0,n=Ym(i),s=new Un,a=(S,R,L,y,E)=>s.add(S,R,L,y,E);if(t===0){a("metal",U(.19,.185,.62),[0,0,-.1]),a("metal",U(.155,.055,.54),[0,.113,-.1]),a("dark",U(.205,.045,.2),[0,.145,-.02]),a("dark",U(.15,.09,.15),[.11,.01,-.16]),a("accent",U(.16,.055,.34),[0,.02,-.46]);for(let S=0;S<6;S++)a("dark",U(.165,.013,.022),[0,.052,-.6+S*.052]),a("glow",U(.012,.055,.3),[.098,.012,-.46]);a("glow",U(.014,.02,.34),[-.098,.045,-.44]),a("metal",He(.036,.036,.44,10),[0,.012,-.84],[Math.PI/2,0,0]),a("dark",He(.055,.045,.16,10),[0,.012,-1.08],[Math.PI/2,0,0]);for(let S=0;S<4;S++)a("dark",U(.014,.07,.09),[Math.cos(S/4*Math.PI*2)*.05,.012+Math.sin(S/4*Math.PI*2)*.05,-1.1]);a("accent",U(.03,.075,.03),[0,.15,-.72]),a("glow",U(.008,.025,.008),[0,.19,-.72]),a("dark",U(.095,.03,.15),[0,.15,-.06]),a("metal",U(.085,.085,.022),[0,.2,-.12]),a("metal",U(.085,.085,.022),[0,.2,.01]),a("metal",U(.012,.09,.14),[-.044,.2,-.055]),a("metal",U(.012,.09,.14),[.044,.2,-.055]),a("glass",U(.07,.07,.006),[0,.2,-.055]),a("glow",U(.035,.004,.004),[0,.2,-.058]),a("glow",U(.004,.035,.004),[0,.2,-.058]),a("dark",He(.032,.032,.12,8),[.12,-.045,-.42],[Math.PI/2,0,0]),a("glass",He(.028,.028,.006,8),[.12,-.045,-.485],[Math.PI/2,0,0])}else if(t===1){a("metal",U(.23,.205,.66),[0,0,-.08]),a("accent",U(.24,.045,.4),[0,.12,-.16]),a("dark",U(.19,.075,.19),[.13,.02,-.1]);for(const S of[-1,1])a("dark",He(.048,.048,.72,10),[S*.058,.025,-.73],[Math.PI/2,0,0]),a("accent",He(.058,.058,.075,10),[S*.058,.025,-1.08],[Math.PI/2,0,0]),a("dark",He(.04,.04,.012,10),[S*.058,.025,-1.121],[Math.PI/2,0,0]),a("glow",U(.012,.02,.42),[S*.12,.055,-.36]);a("metal",He(.032,.032,.62,8),[0,-.085,-.65],[Math.PI/2,0,0]);for(let S=0;S<5;S++)a("glow",rt(.036,.008,4,10),[0,-.085,-.9+S*.11],[0,Math.PI/2,0]);a("dark",U(.26,.09,.28),[0,-.02,-.5]);for(let S=0;S<7;S++)a("dark",U(.265,.012,.018),[0,.035,-.62+S*.04]);a("metal",rt(.075,.014,6,18),[0,.16,-.86]),a("glow",U(.01,.03,.01),[0,.16,-.86]),a("dark",U(.1,.045,.16),[0,.13,.02]),a("accent",U(.036,.012,.2),[0,.14,-.3])}else if(t===2){a("metal",U(.18,.2,.9),[0,0,-.2]),a("accent",U(.19,.045,.8),[0,.12,-.22]),a("dark",U(.2,.11,.3),[0,-.09,.02]);for(const S of[-1,1]){a("glow",U(.032,.075,.82),[S*.105,.02,-.44]),a("metal",U(.055,.09,.86),[S*.135,.02,-.44]);for(let R=0;R<5;R++)a("accent",rt(.082,.014,5,12),[S*.105,.02,-.78+R*.17],[0,Math.PI/2,0]);a("dark",U(.075,.085,.2),[S*.13,-.09,.05]),a("glow",U(.045,.012,.16),[S*.13,-.04,.05])}a("dark",He(.035,.035,.72,10),[0,.015,-.98],[Math.PI/2,0,0]),a("accent",He(.062,.048,.19,10),[0,.015,-1.32],[Math.PI/2,0,0]),a("glow",He(.03,.03,.012,10),[0,.015,-1.42],[Math.PI/2,0,0]);for(let S=0;S<6;S++)a("dark",U(.2,.014,.025),[0,.155,-.62+S*.09])}else if(t===3){a("metal",U(.205,.2,.62),[0,0,-.12]),a("accent",U(.215,.045,.5),[0,.12,-.14]),a("dark",U(.16,.11,.24),[0,-.075,.02]);for(const S of[-1,1]){a("metal",U(.075,.13,.5),[S*.155,.03,-.34]),a("glow",U(.012,.075,.42),[S*.196,.03,-.34]);for(let R=0;R<4;R++)a("accent",U(.09,.02,.03),[S*.155,.1,-.52+R*.11])}a("dark",He(.058,.058,.5,10),[0,.015,-.72],[Math.PI/2,0,0]);for(let S=0;S<5;S++)a("glow",rt(.085-S*.005,.016,6,16),[0,.015,-.56-S*.1],[0,Math.PI/2,0]),a("accent",rt(.098,.012,5,12),[0,.015,-.56-S*.1],[0,Math.PI/2,0]);a("dark",He(.075,.06,.14,10),[0,.015,-1.13],[Math.PI/2,0,0]),a("glass",Nt(.062,12,10),[0,.015,-1.2]),a("glow",rt(.105,.012,6,20),[0,.015,-1.21]),a("metal",rt(.085,.018,6,18),[0,.175,-.18]),a("glow",rt(.065,.006,4,16),[0,.175,-.18]),a("metal",U(.05,.075,.05),[0,.115,-.18]),a("glow",U(.014,.014,.014),[0,.175,-.18])}else if(t===4){a("metal",U(.24,.26,.52),[0,0,-.1]),a("dark",U(.28,.32,.34),[0,-.04,.06]),a("accent",U(.22,.05,.5),[0,.13,-.12]);for(let S=0;S<2;S++)for(let R=0;R<3;R++){const L=(R-1)*.072,y=S?-.062:.062;a("dark",He(.034,.034,.66,8),[L,y,-.64],[Math.PI/2,0,0]),a("accent",rt(.036,.009,4,12),[L,y,-.34],[Math.PI/2,0,0]),a("glow",He(.024,.024,.02,8),[L,y,-.97],[Math.PI/2,0,0])}a("dark",U(.13,.13,.24),[0,.19,-.04]),a("glass",Nt(.055,10,8),[0,.19,-.2]),a("glow",rt(.058,.008,4,14),[0,.19,-.21]),a("dark",U(.1,.22,.12),[0,-.24,.08]),a("accent",U(.15,.02,.2),[0,-.12,-.02]);for(let S=0;S<3;S++)a("dark",U(.012,.18,.04),[-.12+S*.12,-.02,-.28])}else if(t===6){a("metal",U(.135,.14,.36),[0,.015,-.1]),a("dark",U(.12,.05,.3),[0,.1,-.12]),a("accent",U(.1,.045,.26),[0,.1,-.12]),a("dark",He(.032,.032,.12,10),[0,0,-.32],[Math.PI/2,0,0]),a("glow",He(.024,.024,.02,10),[0,0,-.38],[Math.PI/2,0,0]),a("metal",U(.105,.24,.12),[0,-.18,.06],[-.22,0,0]),a("dark",U(.11,.03,.13),[0,-.3,.075]);for(let S=0;S<4;S++)a("dark",U(.075,.016,.022),[0,.1,-.22+S*.055]);a("accent",U(.02,.06,.02),[.075,.06,.04]),a("glow",U(.03,.012,.012),[0,.075,-.2])}else if(t===9){a("metal",U(.2,.19,.66),[0,0,-.12]),a("accent",U(.17,.05,.5),[0,.115,-.14]),a("dark",U(.17,.11,.42),[0,-.02,-.52]);for(let S=0;S<6;S++)a("glow",U(.012,.045,.02),[.088,-.01,-.72+S*.075]);a("dark",He(.042,.042,.52,10),[0,.015,-.92],[Math.PI/2,0,0]),a("glow",rt(.05,.01,4,14),[0,.015,-1.16],[Math.PI/2,0,0]),a("dark",U(.09,.2,.11),[0,-.2,-.4]),a("accent",U(.14,.02,.24),[0,-.1,-.42]),a("metal",U(.09,.19,.12),[.14,-.14,.02])}else if(t===12){a("metal",U(.17,.17,.7),[0,0,-.08]),a("accent",U(.19,.04,.6),[0,.1,-.12]),a("dark",He(.036,.042,1.1,12),[0,.01,-.95],[Math.PI/2,0,0]),a("glow",He(.062,.062,.1,12),[0,.01,-1.48],[Math.PI/2,0,0]);for(let S=0;S<3;S++)a("dark",U(.11,.012,.03),[0,.01,-1.28+S*.1]);for(const S of[-1,1])a("dark",U(.02,.36,.02),[S*.11,-.24,-.86],[0,0,S*.25])}else{a("metal",U(.18,.2,.5),[0,0,-.12]),a("accent",U(.2,.045,.42),[0,.11,-.1]),a("dark",U(.155,.1,.22),[0,-.07,.02]),a("dark",He(.045,.05,.78,10),[0,.015,-.74],[Math.PI/2,0,0]),a("glass",new Hn(.085,0),[0,.015,-1.16]),a("glow",new Hn(.05,0),[0,.015,-1.16]),a("glow",rt(.075,.01,4,16),[0,.015,-1.12],[Math.PI/2,0,0]),a("dark",He(.07,.07,.34,12),[.16,-.02,0],[0,0,Math.PI/2]),a("accent",He(.05,.05,.12,12),[.16,-.02,-.2],[0,0,Math.PI/2]),a("glow",He(.025,.025,.18,10),[.16,-.02,.06],[0,0,Math.PI/2]);for(let S=0;S<4;S++)a("metal",U(.01,.16,.05),[-.1+S*.066,0,-.34]);a("metal",U(.05,.07,.18),[0,.14,-.18]),a("glow",U(.014,.014,.014),[0,.14,-.18])}$m(s,t);const r=new ot,o=s.build(n);r.add(o);const c=new ot,l=new Q(U(.105,.24,.115),n.dark),h=new Q(U(.115,.03,.12),n.accent);h.position.y=.12;const f=new Q(U(.012,.14,.012),n.glow);f.position.set(.056,0,.06),c.add(l,h,f),c.position.set(0,-.19,t===1?-.16:-.03),(t===1||t===6)&&(c.visible=!1),r.add(c);const d=new Q(U(.055,.04,.085),n.accent);d.position.set(.105,.035,-.16),r.add(d);const u=new ot,g=new Q(Dn(.085,.26,7),new Ze({color:Nc[i].glow,transparent:!0,opacity:.9,toneMapped:!1,blending:sn,depthWrite:!1}));g.rotation.x=-Math.PI/2;const v=new Q(rt(.1,.018,5,14),new Ze({color:16777215,transparent:!0,opacity:.8,toneMapped:!1,blending:sn,depthWrite:!1}));u.add(g,v);const p=t===12?-1.62:t===9?-1.24:t===6?-.62:t===5?-1.14:t===4?-1.02:t===2?-1.44:t===1?-1.14:t===3?-1.22:-1.12;u.position.set(0,.015,p-.1),u.visible=!1,r.add(u);const m=jm[i]||"reddot",M=Km(m,n),w=M.group,x=M.redDot;r.add(w);const P=new ot;if(t===3){for(let S=0;S<3;S++){const R=new Q(rt(.12+S*.025,.01,5,18),n.glow);R.position.set(0,.015,-.55-S*.16),R.rotation.y=S*.5,P.add(R)}r.add(P)}return r.traverse(S=>{S.frustumCulled=!1,S.renderOrder=10}),{group:r,magazine:c,bolt:d,flash:u,coils:P,muzzleZ:p,materials:n,optics:w,redDot:x,scopeType:m,reticle:M.reticle}}function Jm(i,e){const t=new Un,n=(d,u,g,v,p)=>t.add(d,u,g,v,p),s={legs:[],rotors:[],shards:[],rings:[],turrets:[],core:null,wings:[]},a=[],r=[];let o=2.2,c=0;const l=(d,u,g,v)=>{const p=new Q(d,u);return p.position.set(...g||[0,0,0]),p},h=(d,u,g,v)=>{const p=l(d,e.glow,u);return p.userData.critical=!0,a.push(p),r.push(p),p};if(i==="runner"){o=2.25,n("body",U(.76,.86,.5),[0,1.18,0]),n("accent",U(.62,.34,.535),[0,1.42,-.02]),n("dark",U(.5,.08,.55),[0,1.24,-.01]),n("dark",U(.44,.3,.42),[0,.78,0]),n("accent",U(.16,.16,.1),[0,1.06,-.28]);for(let d=0;d<3;d++)n("glow",U(.035,.13,.02),[-.09+d*.09,.82,-.23]);n("dark",He(.11,.13,.18,8),[0,1.7,0]),n("body",wi(.34,0),[0,1.92,0]),n("accent",U(.36,.11,.14),[0,1.88,-.28]),n("dark",U(.28,.09,.1),[0,2.03,-.24]),n("accent",Dn(.07,.26,5),[0,2.18,.06]);for(const d of[-1,1]){n("accent",U(.3,.24,.42),[d*.53,1.52,0]),n("dark",U(.19,.6,.21),[d*.57,1.12,0]),n("body",U(.14,.36,.16),[d*.57,.78,-.05]);for(let u=0;u<3;u++)n("glow",U(.04,.03,.1),[d*.57,1.32-u*.1,-.16]);n("accent",U(.22,.1,.3),[d*.26,.66,0]),n("dark",U(.1,.1,.1),[d*.26,.48,0])}for(let d=0;d<4;d++)n("accent",Dn(.075,.3,5),[0,1.65-d*.22,.28],[.5,0,0]);n("glow",U(.26,.02,.03),[0,1.55,.27]),h(Nt(.16,10,8),[0,1.92,-.3]);for(const d of[-1,1]){const u=new ot;u.position.set(d*.25,.56,0);const g=new Q(U(.2,.5,.24),e.body);g.position.y=-.22;const v=new Q(U(.16,.42,.2),e.dark);v.position.y=-.58;const p=new Q(U(.24,.12,.38),e.accent);p.position.set(0,-.8,-.07);const m=new Q(U(.19,.1,.25),e.glow);m.position.y=-.45,u.add(g,v,p,m),s.legs.push(u),r.push(u)}s.core=h(Nt(.12,10,8),[0,1.06,-.32])}else if(i==="drone"){o=2.6,c=.35,n("body",Nt(.56,14,10),[0,1.85,0]);for(let d=0;d<6;d++){const u=d/6*Math.PI*2;n("accent",U(.3,.28,.08),[Math.cos(u)*.52,1.85+Math.sin(u)*.35,-.3],[0,0,u])}n("dark",rt(.6,.06,6,24),[0,1.85,0],[Math.PI/2,0,0]),n("dark",rt(.62,.05,6,24),[0,1.85,0],[0,0,0]),n("glow",U(.5,.035,.05),[0,2.3,-.3]);for(const d of[-1,1])n("body",U(.72,.1,.3),[d*.82,1.85,0]),n("accent",U(.6,.045,.12),[d*.86,1.9,-.1]),n("dark",He(.055,.07,.5,8),[d*.9,1.62,-.28],[Math.PI/2,0,0]),n("glow",He(.035,.035,.02,8),[d*.9,1.62,-.54],[Math.PI/2,0,0]),n("dark",He(.09,.09,.22,8),[d*.45,1.35,.1]),n("glow",He(.06,.06,.02,8),[d*.45,1.23,.1]);n("dark",U(.3,.14,.22),[0,1.36,-.4]),h(wi(.31,0),[0,1.85,-.5]);for(const d of[-1,1]){const u=new ot;u.position.set(d*1.18,1.88,0);const g=new Q(rt(.34,.035,6,20),e.accent);g.rotation.x=Math.PI/2;const v=new Q(U(.6,.025,.09),e.glow),p=new Q(U(.09,.025,.6),e.glow);u.add(g,v,p),s.rotors.push(u),r.push(u)}}else if(i==="tank"){o=2.9,n("body",U(1.5,1.4,1.1),[0,1.28,0]),n("accent",U(1.24,.5,1.14),[0,1.72,-.02]),n("accent",U(1.1,.3,1.16),[0,.78,-.02]),n("dark",U(1.3,.09,1.14),[0,1.43,-.02]);for(let d=0;d<5;d++)n("glow",U(.09,.1,.03),[-.42+d*.21,1.02,-.58]);n("dark",U(.78,.52,.66),[0,2.18,0]),n("accent",U(.86,.14,.7),[0,2.44,0]),n("dark",U(.6,.12,.1),[0,2.2,-.38]);for(const d of[-1,1]){n("accent",U(.56,.55,.86),[d*1.02,1.56,0]),n("body",U(.44,.9,.7),[d*1.02,.95,0]),n("dark",He(.115,.15,1.2,8),[d*1.02,1.5,-.72],[Math.PI/2,0,0]),n("glow",He(.09,.09,.03,8),[d*1.02,1.5,-1.33],[Math.PI/2,0,0]),n("accent",U(.2,.42,.2),[d*.55,.32,0]),n("dark",U(.42,.18,.62),[d*.55,.12,-.08]),n("dark",U(.3,.55,.3),[d*.62,2,.42]);for(let u=0;u<3;u++)n("glow",U(.24,.03,.02),[d*.62,1.82+u*.14,.58]);n("body",U(.28,.28,.9),[d*.82,.7,0])}n("warning",U(.1,.06,.06),[0,2.5,-.36]),h(U(.5,.1,.08),[0,2.2,-.42]),s.core=h(zs(.2,0),[0,1.28,-.6])}else if(i==="phantom"){o=2.25,c=.25,n("body",wi(.52,0),[0,1.4,0]),n("accent",wi(.36,0),[0,1.4,.06],[0,Math.PI/4,0]),n("dark",U(.6,.06,.6),[0,1.4,0],[Math.PI/4,0,0]);for(const u of[-1,1])n("accent",U(.1,1.05,.3),[u*.52,1.28,0],[0,0,u*.36]),n("glow",U(.025,.72,.05),[u*.58,1.28,-.17],[0,0,u*.36]),n("dark",Dn(.12,.6,5),[u*.3,.55,0],[Math.PI,0,u*.2]);n("dark",Dn(.22,.95,6),[0,.52,0],[Math.PI,0,0]),n("glow",rt(.46,.02,5,22),[0,1.4,0]),h(wi(.23,0),[0,1.4,-.45]);for(let u=0;u<6;u++){const g=new Q(wi(.12+u%2*.05,0),u%2?e.glow:e.accent),v=u/6*Math.PI*2;g.position.set(Math.cos(v)*.85,1.4+Math.sin(v*2)*.28,Math.sin(v)*.55),g.userData.angle=v,g.userData.baseY=g.position.y,s.shards.push(g),r.push(g)}const d=new Q(rt(.72,.022,5,26),e.glow);d.position.y=1.4,d.rotation.x=Math.PI/2.6,s.rings.push(d),r.push(d)}else if(i==="bomber"){o=2.15,c=.3,n("body",Nt(.54,14,10),[0,1.3,0]);for(let d=0;d<8;d++){const u=d/8*Math.PI*2;n("accent",U(.26,.24,.07),[Math.cos(u)*.46,1.3,Math.sin(u)*.46],[0,-u,0])}n("dark",rt(.62,.075,6,22),[0,1.3,0],[Math.PI/2,0,0]),n("warning",rt(.64,.02,5,22),[0,1.56,0],[Math.PI/2,0,0]);for(let d=0;d<4;d++){const u=d/4*Math.PI*2;n("dark",He(.08,.08,.28,7),[Math.cos(u)*.36,.86,Math.sin(u)*.36]),n("glow",He(.055,.055,.02,7),[Math.cos(u)*.36,.7,Math.sin(u)*.36]),n("warning",U(.07,.05,.03),[Math.cos(u+.5)*.52,1.52,Math.sin(u+.5)*.52])}n("dark",Dn(.22,.5,6),[0,.62,0],[Math.PI,0,0]),h(zs(.3,0),[0,1.3,-.5]);for(let d=0;d<4;d++){const u=new ot,g=d/4*Math.PI*2;u.position.set(Math.cos(g)*.42,1.3,Math.sin(g)*.42),u.rotation.y=-g;const v=new Q(U(.34,.06,.2),e.accent);v.position.x=.2;const p=new Q(U(.1,.02,.14),e.glow);p.position.x=.4,u.add(v,p),s.wings.push(u),r.push(u)}}else if(i==="medic"){o=2.4,c=1.25,n("body",Nt(.5,14,10),[0,1.3,0]),n("dark",U(.9,.12,.9),[0,.92,0]),n("accent",U(.66,.05,.66),[0,.86,0]),n("dark",rt(.56,.05,6,22),[0,1,0],[Math.PI/2,0,0]),n("accent",U(.52,.17,.06),[0,1.3,-.47]),n("accent",U(.17,.52,.06),[0,1.3,-.47]),n("glow",U(.14,.14,.1),[0,1.3,-.51]);for(const u of[-1,1])n("body",U(.14,.5,.14),[u*.52,1.08,0]);n("accent",U(.2,.04,.2),[0,1.62,0]),h(Nt(.17,10,8),[0,1.3,-.5]);const d=new Q(rt(.72,.03,5,26),e.glow);d.position.y=1.3,d.rotation.x=Math.PI/2,s.rings.push(d),r.push(d),s.core=h(Nt(.12,10,8),[0,1.62,0])}else if(i==="turret"){o=2.3,c=0,n("body",He(.86,1.02,.7,14),[0,.35,0]),n("dark",He(.96,.96,.16,14),[0,.72,0]),n("accent",rt(.9,.05,6,30),[0,.82,0],[Math.PI/2,0,0]);for(let M=0;M<12;M++){const w=M/12*Math.PI*2;n("dark",U(.26,.02,.06),[Math.cos(w)*.97,.74,Math.sin(w)*.97],[0,-w,0])}for(const M of[-1,1])n("dark",U(.18,.55,.18),[M*.66,.2,0]);const d=new ot;d.position.y=1.18;const u=new Q(Nt(.55,16,12),e.dark),g=new Q(U(.42,.2,.12),e.warning);g.position.set(0,.02,-.5);const v=new Q(U(.2,.2,.9),e.body);v.position.set(0,.02,-.62);const p=new Q(U(.13,.13,.06),e.glow);p.position.set(0,.02,-1.08);const m=new Q(rt(.5,.03,5,22),e.glow);m.position.y=.02,m.rotation.x=Math.PI/2,d.add(u,g,v,p,m),r.push(d),n("accent",He(.13,.13,.42,8),[0,1.72,0]),h(zs(.16,0),[0,1.18,-.5]),n("warning",Nt(.1,8,6),[0,1.98,0])}else if(i==="falcon"){o=1.9,c=1.35,n("body",new ds(.32,1.5,10),[0,1.2,0],[Math.PI/2,0,0]),n("dark",U(.34,.3,.7),[0,1.2,.1]),n("accent",U(.3,.06,.5),[0,1.32,.05]),h(Nt(.13,10,8),[0,1.2,-.4]),n("glow",new Hn(.1,0),[0,1.2,-.55]),n("warning",U(.16,.12,.06),[0,1.26,.62]);for(const d of[-1,1]){const u=new ot;u.position.set(d*.22,1.18,-.05);const g=new Q(U(.9,.05,.34),e.accent);g.position.set(d*.45,0,-.1),g.rotation.y=d*.5;const v=new Q(U(.16,.03,.2),e.glow);v.position.set(d*.92,0,-.22),v.rotation.y=d*.5,u.add(g,v),s.wings.push(u),r.push(u)}n("dark",U(.04,.4,.28),[0,1.42,-.5]),n("glow",U(.02,.22,.16),[0,1.4,-.52])}else{o=5.6,c=.4,n("body",Nt(1.68,20,14),[0,3.2,0]);for(let d=0;d<10;d++){const u=d/10*Math.PI*2;n("accent",U(.62,.66,.16),[Math.cos(u)*1.5,3.2+Math.sin(u)*.9,-.55],[0,0,u])}n("dark",rt(1.74,.12,8,40),[0,3.2,0]),n("dark",rt(1.5,.09,8,40),[0,3.2,0],[0,Math.PI/2,0]),n("glow",U(2.4,.06,.08),[0,4.1,-.9]),n("accent",Dn(.5,1.1,6),[0,5.05,0]),n("warning",Dn(.24,.6,6),[0,5.5,0]);for(const d of[-1,1]){n("body",U(.85,2.9,.85),[d*2.15,2.75,0]),n("accent",U(.95,.5,.95),[d*2.15,4.1,0]),n("dark",He(.2,.27,1.7,10),[d*2.15,2.9,-1.05],[Math.PI/2,0,0]),n("warning",He(.14,.14,.03,10),[d*2.15,2.9,-1.92],[Math.PI/2,0,0]),n("body",U(.5,.9,1.5),[d*1.1,1.35,0]),n("accent",U(.7,.25,1.7),[d*1.1,.85,0]);for(let u=0;u<3;u++)n("glow",U(.06,.5,.06),[d*2.55,3.4-u*.5,-.4]);for(let u=0;u<3;u++)n("dark",He(.16,.2,.5,8),[d*(1.2+u*.65),1,.7]),n("glow",He(.12,.12,.02,8),[d*(1.2+u*.65),.74,.7])}n("dark",U(1.2,.5,.8),[0,1.4,.9]),h(zs(.88,1),[0,3.2,-1.35]),s.core=h(Nt(.35,12,10),[0,3.2,-1.62]);for(let d=0;d<3;d++){const u=new Q(rt(2.02+d*.27,.1,8,44),d===1?e.glow:e.accent);u.position.y=3.2,u.rotation.x=Math.PI/2+d*.45,u.userData.spin=(d%2?-1:1)*(.4+d*.15),s.rings.push(u),r.push(u)}for(const d of[-1,1]){const u=new ot;u.position.set(d*2.15,4.35,0);const g=new Q(Nt(.34,12,8),e.dark),v=new Q(U(.16,.16,.62),e.body);v.position.z=-.4;const p=new Q(U(.1,.1,.05),e.glow);p.position.z=-.73,u.add(g,v,p),s.turrets.push(u),r.push(u)}}const f=t.meshes(e,{castShadow:!1}).map(({mesh:d})=>d);return{staticMeshes:f,dynamic:s,weakpoints:a,extraMeshes:r,height:o,baseY:c,allMeshes:[...f,...r]}}function Qm(i,e,t="#54f7d2"){const n=document.createElement("canvas");n.width=512,n.height=256;const s=n.getContext("2d");s.fillStyle="#050d10",s.fillRect(0,0,512,256),s.strokeStyle=t,s.lineWidth=5,s.strokeRect(14,14,484,228),s.globalAlpha=.12,s.fillStyle=t;for(let r=24;r<236;r+=12)s.fillRect(20,r,472,2);s.globalAlpha=1,s.textAlign="center",s.shadowColor=t,s.shadowBlur=26,s.fillStyle="#e9fffa",s.font='bold 68px "Barlow Condensed", sans-serif',s.fillText(i,256,122),s.shadowBlur=12,s.fillStyle=t,s.font='bold 30px "Share Tech Mono", monospace',s.fillText(e,256,180),s.shadowBlur=0,s.fillStyle=t,s.fillRect(60,206,392,3);const a=new sa(n);return a.colorSpace=Lt,a.anisotropy=4,a}function eg(){const i=document.createElement("canvas");i.width=128,i.height=256;const e=i.getContext("2d");e.fillStyle="#070f13",e.fillRect(0,0,128,256);let t=999331;const n=()=>(t=t*16807%2147483647,(t-1)/2147483646);for(let a=6;a<250;a+=14)for(let r=6;r<122;r+=16){const o=n();o>.58?(e.fillStyle=o>.9?"#ffb35c":o>.78?"#b45cff":"#4ce0c4",e.globalAlpha=.35+n()*.55,e.fillRect(r,a,9,7)):(e.fillStyle="#12242a",e.globalAlpha=.8,e.fillRect(r,a,9,7))}e.globalAlpha=1;const s=new sa(i);return s.colorSpace=Lt,s.wrapS=s.wrapT=ts,s}function tg(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#0c181b",e.fillRect(0,0,256,256),e.strokeStyle="#1c3a37",e.lineWidth=3,e.strokeRect(6,6,244,244),e.strokeStyle="#142b2a",e.lineWidth=1;for(let n=1;n<4;n++)e.beginPath(),e.moveTo(n*64,8),e.lineTo(n*64,248),e.stroke(),e.beginPath(),e.moveTo(8,n*64),e.lineTo(248,n*64),e.stroke();e.fillStyle="#2a5b52";for(const[n,s]of[[16,16],[240,16],[16,240],[240,240]])e.beginPath(),e.arc(n,s,5,0,Math.PI*2),e.fill();e.globalAlpha=.08,e.fillStyle="#7fd8c4";for(let n=0;n<220;n++){const s=n*71%256,a=n*137%256;e.fillRect(s,a,2,2)}e.globalAlpha=1;const t=new sa(i);return t.colorSpace=Lt,t.wrapS=t.wrapT=ts,t.repeat.set(18,18),t.anisotropy=8,t}function ng(){const i=document.createElement("canvas");i.width=16,i.height=256;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"rgba(4,10,14,0)"),t.addColorStop(.55,"rgba(15,64,64,0.32)"),t.addColorStop(.82,"rgba(40,150,135,0.42)"),t.addColorStop(1,"rgba(6,18,22,0.05)"),e.fillStyle=t,e.fillRect(0,0,16,256);const n=new sa(i);return n.colorSpace=Lt,n}const Qe=(i,e,t)=>new un(i,e,t),Ut=(i,e,t,n=10)=>new Sn(i,e,t,n),In=(i,e,t=6,n=24)=>new Fn(i,e,t,n),$a=(i,e,t=8)=>new ds(i,e,t),ig=(i,e=10,t=8)=>new Ui(i,e,t),Ka=(i,e)=>i+Math.random()*(e-i);function sg(i){const e=i.scene,t=new ot;e.add(t),i.world=t;const n=!!i.lowPower;e.background=new $e(198667),e.fog=new ia(463640,30,128),e.add(new Qd(9357774,264716,2.15));const s=new nu(11069154,2.25);s.position.set(-25,42,18),s.castShadow=!i.isTouch&&!n,s.shadow.mapSize.set(1024,1024),s.shadow.camera.left=-55,s.shadow.camera.right=55,s.shadow.camera.top=55,s.shadow.camera.bottom=-55,e.add(s);const a=new es(2424784,48,50,2);a.position.set(0,6,0),e.add(a);const r=new es(12666367,26,40,2);r.position.set(-30,6,-25),e.add(r);const o=new es(16754784,14,32,2);o.position.set(32,5,26),e.add(o);const c=new Pt({color:9414821,map:tg(),roughness:.72,metalness:.42}),l=new Pt({color:1385257,roughness:.46,metalness:.82}),h=new Pt({color:528404,roughness:.38,metalness:.9}),f=new Pt({color:3560015,roughness:.34,metalness:.88,emissive:730144,emissiveIntensity:.3}),d=new Ze({color:5240272,toneMapped:!1}),u=new Ze({color:1867120,toneMapped:!1}),g=new Ze({color:10768870,toneMapped:!1}),v=new Ze({color:16753226,toneMapped:!1}),p={darkMetal:l,blackMetal:h,accentMetal:f,cyanGlow:d,dimGlow:u,purpleGlow:g,amberGlow:v},m=new Un,M=(W,T,he,te,J)=>m.add(W,T,he,te,J),w=new Q(new bn(150,150),c);w.rotation.x=-Math.PI/2,w.receiveShadow=!0,t.add(w),i.groundMesh=w;const x=new au(150,75,3121292,1454125);x.material.transparent=!0,x.material.opacity=.17,x.position.y=.014,t.add(x);for(let W=0;W<4;W++){const T=new Q(In(6+W*1.7,W%2?.035:.06,5,64),W%2?u:d);T.rotation.x=-Math.PI/2,T.position.y=.03,t.add(T)}for(let W=0;W<24;W++){const T=W/24*Math.PI*2;M("cyanGlow",Qe(.06,.012,.5),[Math.cos(T)*11.2,.035,Math.sin(T)*11.2],[0,-T,0])}for(let W=0;W<8;W++){const T=W/8*Math.PI*2;M("amberGlow",Qe(.22,.012,.9),[Math.cos(T)*7.6,.035,Math.sin(T)*7.6],[0,-T,0])}for(let W=0;W<4;W++){const T=Math.PI/4+W*Math.PI/2;for(let he=13;he<54;he+=4.2)M("dimGlow",Qe(.1,.012,2.4),[Math.cos(T)*he,.028,Math.sin(T)*he],[0,-T,0])}const P=new ot,S=new Q(Ut(4.6,5.2,.65,16),l);S.position.y=.32,S.receiveShadow=!0,P.add(S);const R=new Un;R.add("accentMetal",Ut(4.15,4.15,.12,16),[0,.7,0]),R.add("cyanGlow",In(4.35,.09,6,48),[0,.77,0],[-Math.PI/2,0,0]);for(let W=0;W<16;W++){const T=W/16*Math.PI*2;R.add(W%2?"amberGlow":"blackMetal",Qe(.42,.02,.9),[Math.cos(T)*4.6,.67,Math.sin(T)*4.6],[0,-T,0])}const L=new Q(Ut(.65,.9,5.5,14),new Pt({color:1194548,emissive:1693101,emissiveIntensity:1.35,metalness:.7,roughness:.18}));L.position.y=3.1,P.add(L);const y=new Q(Ut(1.25,1.45,5.4,14),new Ze({color:2818016,transparent:!0,opacity:.11,side:Ft,depthWrite:!1,toneMapped:!1,blending:sn}));y.position.y=3.1,P.add(y);const E=new Q(Ut(.22,.55,28,10),new Ze({color:3538905,transparent:!0,opacity:.055,depthWrite:!1,toneMapped:!1,blending:sn}));E.position.y=17,P.add(E);const I=new Q(new Hn(.75,0),new Ze({color:10354672,toneMapped:!1}));I.position.y=6.6,P.add(I),i.animatedWorld.push({mesh:I,update:(W,T)=>{I.rotation.y+=W*.6,I.rotation.x+=W*.25,I.position.y=6.6+Math.sin(T*1.1)*.22}});for(let W=0;W<3;W++){const T=new Q(In(2.25+W*.48,.06,8,64),W===1?g:d);T.position.y=2.1+W*.92,T.rotation.x=Math.PI/2+(W-1)*.26,P.add(T),i.animatedWorld.push({mesh:T,speed:(W%2?-1:1)*(.18+W*.08),axis:"z"})}for(let W=0;W<6;W++){const T=W/6*Math.PI*2;R.add("darkMetal",Qe(.36,4.2,.36),[Math.cos(T)*3.4,2.2,Math.sin(T)*3.4],[Math.sin(T)*.2,0,Math.cos(T)*-.2]),R.add("accentMetal",Qe(.14,2.4,.14),[Math.cos(T)*2.55,1.35,Math.sin(T)*2.55],[-Math.sin(T)*.55,0,Math.cos(T)*.55]),R.add(W%2?"cyanGlow":"purpleGlow",Qe(.2,.42,.06),[Math.cos(T)*3.4,3.4,Math.sin(T)*3.4-.2],[0,-T,0])}R.add("accentMetal",In(3.5,.11,6,48),[0,4.35,0],[-Math.PI/2,0,0]),t.add(R.build(p)),t.add(P),i.obstacles.push({minX:-4.4,maxX:4.4,minZ:-4.4,maxZ:4.4}),i.worldColliders.push(S,L);const k=[[-12,-10,4,1.3,1.7],[12,10,4,1.3,1.7],[-14,14,1.4,5,2.1],[14,-14,1.4,5,2.1],[-28,1,5,1.4,1.4],[28,-1,5,1.4,1.4],[1,29,1.4,5,1.8],[-1,-29,1.4,5,1.8],[-30,-24,3,3,2.7],[30,24,3,3,2.7],[26,-29,4,2,1.5],[-26,29,4,2,1.5],[-8,35,2,2,2.4],[8,-35,2,2,2.4],[37,10,2,4,2.2],[-37,-10,2,4,2.2]],B=new Un;k.forEach(([W,T,he,te,J],ie)=>{const Me=new ot,ae=new Q(Qe(he,J,te),ie%3===0?h:l);ae.position.y=J/2,ae.castShadow=!n,ae.receiveShadow=!0,Me.add(ae);const Ee=new Q(Qe(he+.14,.12,te+.14),f);Ee.position.y=J+.04,Me.add(Ee);for(const Ge of[.16,J*.72,J-.1])B.add(ie%4===0?"purpleGlow":"dimGlow",Qe(he+.03,.045,te+.03),[W,Ge,T]);B.add("accentMetal",Qe(he*.62,J*.52,.06),[W,J*.5,T-te/2-.035]);for(let Ge=0;Ge<4;Ge++)B.add("blackMetal",Qe(he*.5,.035,.02),[W,J*.34+Ge*J*.1,T-te/2-.075]);for(const Ge of[-1,1])B.add(ie%4===0?"amberGlow":"cyanGlow",Ut(.05,.05,.03,6),[W+Ge*he*.4,J*.5,T-te/2-.07],[Math.PI/2,0,0]),B.add("accentMetal",Qe(.1,J,.1),[W+Ge*(he/2-.05),J/2,T-te/2+.05]);B.add(ie%3===0?"amberGlow":"cyanGlow",Qe(he*.2,.05,.02),[W,J*.86,T-te/2-.07]),Me.position.set(W,0,T),t.add(Me),i.obstacles.push({minX:W-he/2,maxX:W+he/2,minZ:T-te/2,maxZ:T+te/2}),i.worldColliders.push(ae,Ee)}),t.add(B.build(p));const K=[[-20,8],[20,-8],[-8,-20],[8,20],[-25,25],[25,-25],[16,16],[-16,-16]],q=new Pt({color:6965788,metalness:.7,roughness:.5,emissive:16742957,emissiveIntensity:.5}),Y=new Pt({color:1314826,metalness:.6,roughness:.6}),ee=new Ze({color:16757322,toneMapped:!1});K.forEach(([W,T])=>{const he=new ot,te=q.clone(),J=new Q(Ut(.62,.62,1.5,14),te);J.position.y=.75,J.castShadow=!n;const ie=new Q(Ut(.66,.62,.12,14),Y);ie.position.y=1.5;const Me=new Q(Ut(.64,.64,.3,14),Y);Me.position.y=.78;const ae=new Q(ig(.1,8,6),ee);ae.position.y=1.62,he.add(J,ie,Me,ae),he.position.set(W,0,T),t.add(he);const Ee={minX:W-.62,maxX:W+.62,minZ:T-.62,maxZ:T+.62},Ge={group:he,mesh:J,bodyMaterial:te,health:60,maxHealth:60,position:he.position,dead:!1,flash:0,box:Ee};J.userData.barrel=Ge,i.barrels.push(Ge),i.barrelMeshes.push(J),i.obstacles.push(Ee),i.barrelBoxes.add(Ee)});const G=new Pt({color:726297,metalness:.78,roughness:.48});[[0,-70,142,2],[0,70,142,2],[-70,0,2,142],[70,0,2,142]].forEach(([W,T,he,te])=>{const J=new Q(Qe(he,5,te),G);J.position.set(W,2.5,T),t.add(J),i.worldColliders.push(J);const ie=new Q(Qe(he+.05,.09,te+.05),u);ie.position.set(W,4.25,T),t.add(ie);const Me=Math.floor(he>te?he/6:te/6);for(let ae=0;ae<Me;ae++){const Ee=-70+ae*(140/Me);M("accentMetal",Qe((he>te,.28),4.2,he>te?.3:.28),[he>te?Ee:W,2.2,he>te?T:Ee])}});const fe=[];for(let W=0;W<12;W++){const T=W/12*Math.PI*2;fe.push([Math.cos(T)*45,Math.sin(T)*45,T])}fe.forEach(([W,T,he],te)=>{M("darkMetal",Ut(.16,.24,6.4,8),[W,3.2,T]),M("accentMetal",Ut(.36,.36,.22,8),[W,.16,T]),M("accentMetal",Qe(.5,.18,.5),[W,6.45,T]),M(te%3===0?"purpleGlow":"cyanGlow",Qe(.36,.5,.36),[W,6.05,T]),M("dimGlow",In(1.1,.035,5,22),[W,.04,T],[-Math.PI/2,0,0]),M("amberGlow",Qe(.1,.1,.06),[W,4.6,T],[0,-he,0]);for(const J of[-1,1])M("accentMetal",Qe(.09,1.6,.09),[W+J*.38,1,T],[0,0,J*.42])});for(let W=0;W<6;W++){const T=W/6*Math.PI*2+.35,he=Math.cos(T)*33,te=Math.sin(T)*33,J=7.5+W%2*2.4;M("darkMetal",Ut(3.1,2.7,.45,8),[he,J,te]),M("accentMetal",Ut(3.3,3.3,.1,8),[he,J+.26,te]),M(W%2?"purpleGlow":"cyanGlow",In(3,.055,5,28),[he,J-.2,te],[-Math.PI/2,0,0]);for(let Me=0;Me<8;Me++){const ae=Me/8*Math.PI*2;M("dimGlow",Qe(.08,.02,.6),[he+Math.cos(ae)*2.5,J+.32,te+Math.sin(ae)*2.5],[0,-ae,0])}const ie=new Q($a(2.8,7,10),new Ze({color:W%2?10768870:3532996,transparent:!0,opacity:.045,depthWrite:!1,side:Ft,toneMapped:!1,blending:sn}));ie.position.set(he,J-3.8,te),ie.rotation.x=Math.PI,t.add(ie)}for(let W=0;W<4;W++){const T=W<2?-1:1,he=W%2?-58:58,te=[];for(let Me=0;Me<=12;Me++){const ae=Me/12;te.push(new A(-52+ae*104,4.2+Math.sin(ae*Math.PI*2+W)*.8,he+T*Math.sin(ae*Math.PI)*3))}const J=new Tc(te),ie=new Q(new ro(J,48,.16,7,!1),W%2?f:l);t.add(ie);for(let Me=0;Me<=6;Me++){const ae=J.getPoint(Me/6);M("accentMetal",Qe(.12,Math.max(.4,ae.y-.2),.12),[ae.x,ae.y/2,ae.z])}}const me=new Un,Re=new Un;let We=7147;const et=()=>(We=We*16807%2147483647,(We-1)/2147483646);for(let W=0;W<78;W++){const T=et()*Math.PI*2,he=80+et()*60,te=5+et()*10,J=5+et()*10,ie=14+et()*66,Me=Math.cos(T)*he,ae=Math.sin(T)*he;me.add("body",Qe(te,ie,J),[Me,ie/2-1,ae]),me.add("windows",Qe(te+.06,ie*.86,J+.06),[Me,ie/2-1,ae]),me.add("cap",Qe(te+.4,.22,J+.4),[Me,ie-.8,ae]),W%2===0&&Re.add("glow",Qe(te+.1,.16+et()*.16,J+.1),[Me,ie*(.35+et()*.45),ae]),W%5===0&&me.add("antenna",Ut(.07,.07,9,5),[Me,ie+3.5,ae]),W%6===0&&me.add("spire",$a(.5,6,5),[Me,ie+2,ae])}const pt={body:new Pt({color:1320492,roughness:.78,metalness:.48}),windows:new Ze({color:10475728,map:eg(),toneMapped:!1}),cap:l,antenna:u,spire:g,glow:u};t.add(me.build(pt)),t.add(Re.build({glow:g})),[["NEXUS","SECTOR 07","#54f7d2",-58,10,-20,.6],["NX-07","TACTICAL LINK","#7de8ff",58,12,18,-.6],["霓虹余烬","NEON ASHES","#ff9a55",-20,14,-60,0],["WARDEN","APEX SIGNAL","#ff5c62",22,16,60,Math.PI],["零界突击","STRIKE PROTOCOL","#b06bff",-62,9,26,1.15],["SYS.ONLINE","DEFENSE GRID","#54f7d2",62,10,-30,-1.15]].forEach(([W,T,he,te,J,ie,Me])=>{const ae=Qm(W,T,he),Ee=new Q(new bn(9.6,4.8),new Ze({map:ae,side:Ft,toneMapped:!1}));Ee.position.set(te,J,ie),Ee.rotation.y=Me,t.add(Ee);const Ge=new Q(Qe(10,5.2,.16),l);Ge.position.set(te,J,ie),Ge.rotation.y=Me,Ge.translateZ(-.12),t.add(Ge);const st=new Q(Ut(.12,.16,J-2,8),l);st.position.set(te,(J-2)/2,ie),t.add(st)});const j=new Ze({map:ng(),transparent:!0,opacity:.75,side:Ft,depthWrite:!1,toneMapped:!1});[[0,-145,0],[-145,0,Math.PI/2],[0,145,Math.PI],[145,0,-Math.PI/2]].forEach(([W,T,he])=>{const te=new Q(new bn(300,42),j);te.position.set(W,19,T),te.rotation.y=he,t.add(te)}),t.add(m.build(p)),i.spawnPoints=[new A(-48,0,-48),new A(48,0,-48),new A(-48,0,48),new A(48,0,48),new A(0,0,-54),new A(0,0,54),new A(-54,0,0),new A(54,0,0)],i.spawnPoints.forEach((W,T)=>{const he=new ot,te=new Q(In(2.15,.1,8,40),T%2?g:d);te.position.y=2.3,he.add(te);const J=new Q(In(1.85,.035,6,36),u);J.position.y=2.3,he.add(J);const ie=new Un;for(const Me of[-1,1])ie.add("darkMetal",Qe(.26,4.8,.4),[Me*2.15,2.2,0]),ie.add(T%2?"purpleGlow":"cyanGlow",Qe(.1,1.2,.1),[Me*2.15,2.5,-.24]),ie.add("accentMetal",Qe(.6,.2,.6),[Me*2.15,.1,0]);ie.add("accentMetal",Qe(4.6,.3,.45),[0,4.6,0]),he.add(ie.build(p)),he.position.copy(W),he.lookAt(0,2,0),t.add(he),i.animatedWorld.push({mesh:J,speed:-.22,axis:"z"}),i.animatedWorld.push({mesh:te,speed:T%2?-.3:.3,axis:"z"})});for(let W=0;W<2;W++){const T=new ot,he=new Q(Qe(5.5,.8,1.6),l),te=new Q($a(.85,1.8,6),f);te.rotation.z=-Math.PI/2,te.position.x=3.4;const J=new Q(Qe(1.5,.16,5.4),f);for(const Ee of[-1,1]){const Ge=new Q(Ut(.32,.32,1.1,8),l);Ge.rotation.x=Math.PI/2,Ge.position.set(-1.6,-.1,Ee*2.2);const st=new Q(Qe(.1,.1,.1),g);st.position.set(-1.6,-.1,Ee*2.8),T.add(Ge,st)}const ie=new Q(Qe(4.6,.06,.1),d);ie.position.set(0,.44,0),T.add(he,te,J,ie),T.scale.setScalar(1.2),t.add(T);const Me=62+W*12,ae=W*Math.PI;i.animatedWorld.push({mesh:T,update:(Ee,Ge)=>{const st=Ge*.06+ae;T.position.set(Math.cos(st)*Me,24+Math.sin(Ge*.5+ae)*1.5,Math.sin(st)*Me),T.rotation.y=-st+Math.PI/2}})}const ye=n?260:i.isTouch?380:900,ke=new Float32Array(ye*3);for(let W=0;W<ye;W++)ke[W*3]=Ka(-75,75),ke[W*3+1]=Ka(.2,28),ke[W*3+2]=Ka(-75,75);const Te=new St;Te.setAttribute("position",new $t(ke,3));const je=new Nd(Te,new Sc({color:7653818,size:n?.055:.045,transparent:!0,opacity:.5,depthWrite:!1}));t.add(je),i.dust=je}const Fc="nexus-settings-v1",ri=Object.freeze({mouseSensitivity:1,touchSensitivity:1,fireLook:!0,fireLookSensitivity:.85,invertY:!1,aimAssist:100,volume:100,feedback:100,showFps:!1,feelV2:!0,feelVisualRecoil:100,feelControlRecoil:100,feelMuzzle:100,feelRecoilRecover:100,feedbackV2:!0,audioV2:!0,audioCueIntensity:100,rogueliteV2:!1,economyV2:!1,affixV2:!1,adaptiveResolution:!1,enemyV2:!0}),ag={mouseSensitivity:[.3,2.5],touchSensitivity:[.3,2.5],fireLookSensitivity:[.3,1.6],aimAssist:[0,150],volume:[0,100],feedback:[0,150],feelVisualRecoil:[0,200],feelControlRecoil:[0,200],feelMuzzle:[0,200],feelRecoilRecover:[25,300],audioCueIntensity:[0,150]};function kc(i,e){const t=ri[i];if(typeof t=="boolean")return typeof e=="boolean"?e:t;const n=Number(e);if(!Number.isFinite(n))return t;const[s,a]=ag[i]||[0,150];return Math.min(a,Math.max(s,n))}function rg(){let i={};try{i=JSON.parse(localStorage.getItem(Fc)||"{}")||{}}catch{}const e={};for(const t of Object.keys(ri))e[t]=Object.prototype.hasOwnProperty.call(i,t)?kc(t,i[t]):ri[t];return e}const Ue=rg();function Oc(){try{localStorage.setItem(Fc,JSON.stringify(Ue))}catch{}}function Bc(i,e){i in ri&&(Ue[i]=kc(i,e),Oc())}function zc(){for(const i of Object.keys(ri))Ue[i]=ri[i];Oc()}function Pl(){return Ue.aimAssist/100}function og(){return Ue.feedback/100}const Ll={AR:["precision","sustain"],SG:["burst","control"],RAIL:["precision","element"],SMG:["mobility","burst"],LMG:["sustain","control"],PISTOL:["precision","mobility"]},ja=[{id:"law-weakpoint",text:"弱点协议：弱点命中额外 +12% 能量获取",rewardTag:"precision",effect:{energyGainMul:1.12}},{id:"law-chain",text:"连锁协议：连续命中 6 次后脉冲 +1 跳",rewardTag:"element",effect:{chainBonus:1}},{id:"law-aegis",text:"护盾协议：格挡窗口内受击 -15% 伤害",rewardTag:"survival",effect:{blockDamageMul:.85}},{id:"law-blitz",text:"机动协议：冲刺冷却 -20%",rewardTag:"mobility",effect:{dashCdMul:.8}},{id:"law-overextend",text:"压制协议：满弹匣时移速 +6%",rewardTag:"burst",effect:{fullMagSpeedMul:1.06}}],Yi=[{id:"burstFire",label:"点射核心",tags:["burst"],weight:1,desc:"全自动 → 3 连点射（节奏化）",modify:i=>{i.auto=!1,i.burst=3}},{id:"heavyFirst",label:"首发重力",tags:["precision"],weight:.9,desc:"首发 ×1.8 伤害，但弹匣 −40%",modify:i=>{i.firstShotMul=1.8,i.magMul*=.6}},{id:"quickCycle",label:"快循环",tags:["mobility"],weight:1,desc:"换弹 ×0.7，但 spread ×1.2",modify:i=>{i.reloadMul*=.7,i.spreadMul*=1.2}},{id:"steady",label:"稳流",tags:["sustain"],weight:1,desc:"持续命中时后坐恢复 ×1.25",modify:i=>{i.recoilRecoverMul*=1.25}},{id:"cryoRound",label:"寒霜弹",tags:["element"],weight:.8,desc:"命中附加 0.4s 减速（节奏型控制）",modify:i=>{i.frostOnHit=!0,i.frostDur=.4}}],lg=[{id:"resonance-3",tier:1,threshold:3,effect:{pickupRadiusAdd:.3},name:"三阶共鸣",desc:"任意标签达 3 层：拾取范围 +0.3"},{id:"resonance-5",tier:2,threshold:5,effect:{energyMaxAdd:25},name:"五阶共鸣",desc:"任意标签达 5 层：超载能量上限 +25"},{id:"resonance-7",tier:3,threshold:7,effect:{reloadMul:.92},name:"七阶共鸣",desc:"任意标签达 7 层：换弹 ×0.92（全局）"}],Hs={skipCredit:40,optionBonusPerSkip:1,optionCap:4},Il={preLockTag:{id:"preLockTag",desc:"开局锁定 1 个标签",default:!1},fourChooseOne:{id:"fourChooseOne",desc:"三选一变为四选一",default:!1},freeReroll:{id:"freeReroll",desc:"每局免费刷新 1 次",default:!1}},Hc=["pickupRadiusAdd","energyMaxAdd","chainBonus"],Vc=["reloadMul","energyGainMul","blockDamageMul","dashCdMul","fullMagSpeedMul"];function Xr(){const i={};for(const e of Hc)i[e]=0;for(const e of Vc)i[e]=1;return i}function Dl(i,e){if(!e)return i;for(const t of Hc)typeof e[t]=="number"&&(i[t]+=e[t]);for(const t of Vc)typeof e[t]=="number"&&(i[t]*=e[t]);return i}function cg(i){const e={};if(!i)return e;for(const t of i)if(t)for(const n of t)e[n]=(e[n]||0)+1;return e}function hg(i){return Ll[i]?Ll[i].slice():[]}function dg(i){const e=Yi.find(t=>t.id===i);return e?e.tags.slice():[]}function ug(i){const e=Object.values(i||{});return e.length?Math.max(...e):0}function fg(i,e){return(i&&i[e]||0)>0}function pg(i=Math.random){const e=Yi.reduce((n,s)=>n+(s.weight||0),0);if(e<=0)return null;let t=i()*e;for(const n of Yi)if(t-=n.weight||0,t<=0)return n;return Yi[Yi.length-1]}function mg(i=Math.random){return ja.length?ja[Math.floor(i()*ja.length)]:null}function gg(i,e=null){const t=Xr();for(const n of lg)ug(i)>=n.threshold&&Dl(t,n.effect);return e&&fg(i,e.rewardTag)&&Dl(t,e.effect),t}const Gc={volatile:{id:"volatile",name:"易碎装甲",short:"V",color:16735330,desc:"仅暴击可击穿护甲，普通命中仅造成 35% 伤害",nonCritMult:.35},aegis:{id:"aegis",name:"周期护盾",short:"A",color:5810943,desc:"周期展开护盾，护盾存续时吸收全部伤害，需抓窗口强攻",cycle:6,up:2.6,down:3.4,shieldHp:160},link:{id:"link",name:"医护链接",short:"L",color:10317055,desc:"附近存在维生单位时减伤 45%，清除医护以断链",linkRange:14,mult:.55}},Ul=Object.keys(Gc);function vg(i,e=Math.random){const t=Ul[Math.floor(e()*Ul.length)],n=Gc[t];return i.affix=t,i.affixDef=n,i.affixColor=n.color,t==="aegis"?(i.aegisPhase="down",i.aegisTimer=n.cycle*.5,i.shieldHp=0,i.shieldActive=!1):t==="link"&&(i.linkActive=!1),t}function _g(i,e,t={}){const n=i.affixDef;if(!n)return e;if(n.id==="volatile")return t.critical||t.critRoll?e:e*n.nonCritMult;if(n.id==="aegis"){if(i.shieldActive&&i.shieldHp>0){const s=Math.min(i.shieldHp,e);return i.shieldHp-=s,e-s}return e}return n.id==="link"&&i.linkActive?e*n.mult:e}function xg(i,e,t){const n=i.affixDef;n&&(n.id==="aegis"?(i.aegisTimer-=e,i.aegisPhase==="down"&&i.aegisTimer<=0?(i.aegisPhase="up",i.shieldActive=!0,i.shieldHp=n.shieldHp,i.aegisTimer=n.up):i.aegisPhase==="up"&&i.aegisTimer<=0&&(i.aegisPhase="down",i.shieldActive=!1,i.aegisTimer=n.down)):n.id==="link"&&(i.linkActive=t.enemies.some(s=>s!==i&&!s.dead&&s.type==="medic"&&s.group.position.distanceTo(i.group.position)<n.linkRange)))}const la={swarm:{id:"swarm",name:"蜂群",desc:"高速单位成群突进，优先清群",pool:["runner","phantom","falcon"],counters:"control"},fortress:{id:"fortress",name:"要塞",desc:"炮台 + 维生固守，点杀核心",pool:["turret","medic","tank"],counters:"mobility"},blitz:{id:"blitz",name:"突袭",desc:"高速走位突击，保持距离",pool:["falcon","phantom","bomber"],counters:"survival"},armored:{id:"armored",name:"重甲",desc:"重甲护卫缓步推进",pool:["tank","turret","bomber"],counters:"precision"},mixed:{id:"mixed",name:"混编",desc:"均衡编组，无显著弱点",pool:["runner","drone","phantom","tank","turret","medic","bomber","falcon"],counters:null}},yg=Object.keys(la);function Mg(i){const e=yg,t=typeof i.getBuildTags=="function"?i.getBuildTags():[],n=e.map(r=>{if(!t||!t.length)return 1;const o=la[r].counters;return o?1+t.filter(l=>l===o).length*1.6:1.25}),s=n.reduce((r,o)=>r+o,0);let a=Math.random()*s;for(let r=0;r<e.length;r++)if(a-=n[r],a<=0)return e[r];return"mixed"}function Sg(i,e,t,n=Math.random){const s=la[i],a=[];for(let r=0;r<t;r++){const o=[];for(const c of e)o.push(c),s.pool.includes(c)&&o.push(c);a.push(o[Math.floor(n()*o.length)])}return a}const bt=ji.clamp,Ct=ji.lerp,wg={normal:9437168,critical:16766044,kill:16739179,element:10479871},Nl={normal:0,element:1,critical:2,kill:3},Mt=(i,e)=>i+Math.random()*(e-i),Fl={lockon:"lock",autofire:"auto",godmode:"god",infinity:"ammo",xray:"wall",timeslip:"slow",purge:"purge",arsenal:"arsenal",recharge:"recharge",overbound:"overbound",standdown:"standdown",help:"help"},jn={lock:"锁头 // LOCK-ON",auto:"自动射击 // AUTO-FIRE",god:"无敌 // GOD-MODE",ammo:"无限弹药 // INFINITY",wall:"透视 // X-RAY",slow:"子弹时间 // TIME-SLIP",purge:"清场 // PURGE",arsenal:"全武器解锁 // ARSENAL",recharge:"能量回满 // RECHARGE",overbound:"越界协议全开 // OVERBOUND",standdown:"协议解除 // STAND-DOWN",help:"作弊码清单 // HELP"},bg={god:"无敌",ammo:"无限弹",lock:"锁头",auto:"自动射",wall:"透视",slow:"时停"},kl=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"];function Wc(){let i=null;try{i=localStorage.getItem("nexus-device")}catch{}const e=new URLSearchParams(location.search).get("device");if(["desktop","mobile","board"].includes(e))return e;if(["desktop","mobile","board"].includes(i))return i;const t=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,n=Math.max(innerWidth,innerHeight),s=innerWidth>innerHeight;return t&&s&&(n>=1e3||navigator.maxTouchPoints>=5)?"board":t?"mobile":"desktop"}const xt=[{id:"rifle",name:"VX-9 脉冲",label:"VX-9 <span>脉冲</span>",className:"突击步枪 // AUTO",category:"rifle",price:380,desc:"稳定的全自动脉冲步枪，适合中距离持续压制。",damage:24,fireRate:9,magazine:30,reserve:180,reload:1.45,spread:.009,pellets:1,auto:!0,range:90},{id:"shotgun",name:"SG-12 裂解",label:"SG-12 <span>裂解</span>",className:"战术霰弹枪 // PUMP",category:"special",price:420,desc:"八枚高能弹丸同时释放，近距离可造成毁灭性伤害。",damage:14,fireRate:1.2,magazine:6,reserve:42,reload:1.8,spread:.065,pellets:8,auto:!1,range:42},{id:"rail",name:"R-01 磁轨",label:"R-01 <span>磁轨</span>",className:"磁轨精确步枪 // SEMI",category:"sniper",price:640,desc:"高精度磁轨射线，贯穿一条直线上的所有敌人。",damage:135,fireRate:.8,magazine:5,reserve:25,reload:2.1,spread:.001,pellets:1,auto:!1,range:130,pierce:!0},{id:"arc",name:"ARC-7 弧光",label:"ARC-7 <span>弧光</span>",className:"链式电弧 // CHAIN",category:"special",price:660,desc:"发射链式电弧，命中后自动跳跃到附近敌人。",damage:46,fireRate:3.4,magazine:24,reserve:120,reload:1.7,spread:.014,pellets:1,auto:!0,range:62,chain:3},{id:"rocket",name:"WN-5 蜂巢",label:"WN-5 <span>蜂巢</span>",className:"制导导弹 // HOMING",category:"special",price:780,desc:"六管制导发射器，导弹自动锁定敌人并产生范围爆炸。",damage:120,fireRate:1.1,magazine:4,reserve:16,reload:2.2,spread:0,pellets:1,auto:!1,range:130,rocket:!0,aoe:6},{id:"frost",name:"LN-3 寒霜",label:"LN-3 <span>寒霜</span>",className:"低温步枪 // CRYO",category:"rifle",price:600,desc:"低温步枪，命中使敌人减速 50%，是控场核心手段。",damage:30,fireRate:4.2,magazine:22,reserve:110,reload:1.6,spread:.012,pellets:1,auto:!0,range:95,frost:!0,slowDuration:2.2,slowStrength:.5},{id:"sentinel",name:"PX-1 哨兵",label:"PX-1 <span>哨兵</span>",className:"战术手枪 // SIDEARM",category:"pistol",price:240,desc:"高单发伤害的半自动手枪，弹匣小但暴击收益极高。",damage:42,fireRate:3.2,magazine:12,reserve:96,reload:1.2,spread:.006,pellets:1,auto:!1,range:55,critBonus:.16},{id:"twins",name:"PX-2 双生",label:"PX-2 <span>双生</span>",className:"双持连发 // DUAL",category:"pistol",price:320,desc:"双持全自动机匣，射速极快，适合清理脆皮与游隼。",damage:24,fireRate:6.5,magazine:20,reserve:160,reload:1.5,spread:.018,pellets:1,auto:!0,range:48},{id:"judgement",name:"PX-3 审判",label:"PX-3 <span>审判</span>",className:"重型手炮 // HANDCANNON",category:"pistol",price:420,desc:"大口径手炮，近距离一发可撕开重装单位装甲。",damage:95,fireRate:1.1,magazine:6,reserve:48,reload:1.9,spread:.002,pellets:1,auto:!1,range:70},{id:"dawn",name:"AR-4 破晓",label:"AR-4 <span>破晓</span>",className:"模块化突击步枪 // AUTO",category:"rifle",price:460,desc:"均衡型全自动步枪，伤害与稳定性都优于制式装备。",damage:28,fireRate:8,magazine:32,reserve:192,reload:1.5,spread:.008,pellets:1,auto:!0,range:95},{id:"hornet",name:"AR-8 蜂刺",label:"AR-8 <span>蜂刺</span>",className:"高射速卡宾 // SMG",category:"rifle",price:520,desc:"超高射速低后坐，靠弹幕压制，配合弱点解析收益极高。",damage:16,fireRate:13,magazine:45,reserve:270,reload:1.7,spread:.016,pellets:1,auto:!0,range:70},{id:"maul",name:"AR-9 重锤",label:"AR-9 <span>重锤</span>",className:"重型战斗步枪 // HEAVY",category:"rifle",price:560,desc:"高单发伤害的慢射速步枪，中远距离点杀效率出色。",damage:62,fireRate:3.6,magazine:20,reserve:120,reload:2,spread:.011,pellets:1,auto:!0,range:100},{id:"hush",name:"SR-2 静默",label:"SR-2 <span>静默</span>",className:"半自动狙击 // DMR",category:"sniper",price:620,desc:"高精度半自动狙击，弹匣容量更宽裕，容错更高。",damage:190,fireRate:.9,magazine:5,reserve:30,reload:2.2,spread:6e-4,pellets:1,auto:!1,range:150,pierce:!0},{id:"piercer",name:"SR-6 穿云",label:"SR-6 <span>穿云</span>",className:"贯穿狙击 // ANTI-MATERIEL",category:"sniper",price:700,desc:"射速更快的贯穿狙击，一发可洞穿整列敌人。",damage:150,fireRate:1.4,magazine:8,reserve:48,reload:2,spread:.001,pellets:1,auto:!1,range:160,pierce:!0},{id:"tribunal",name:"SR-9 天罚",label:"SR-9 <span>天罚</span>",className:"反器材轨道炮 // RAILGUN",category:"sniper",price:860,desc:"单发毁伤极高的轨道炮，首领与重装的终结者。",damage:320,fireRate:.55,magazine:3,reserve:18,reload:2.8,spread:0,pellets:1,auto:!1,range:180,pierce:!0}],Xc={pistol:"手枪",rifle:"步枪",sniper:"狙击枪",special:"特殊装备"},Ol={runner:{name:"猎犬突击体",health:65,speed:4.7,damage:13,score:120,radius:.55,color:16729688},drone:{name:"蜂群射手",health:90,speed:2.7,damage:10,score:180,radius:.65,color:11757567},tank:{name:"重装碾压者",health:310,speed:1.35,damage:16,score:420,radius:.95,color:16747069},phantom:{name:"相位幽影",health:58,speed:5.6,damage:12,score:240,radius:.5,color:6087167},falcon:{name:"游隼突袭者",health:44,speed:5.8,damage:9,score:160,radius:.5,color:13041469},bomber:{name:"自毁蜂群",health:46,speed:5.5,damage:28,score:210,radius:.52,color:16761421},medic:{name:"维生单元",health:75,speed:2.3,damage:0,score:200,radius:.6,color:4710560},turret:{name:"定点炮台",health:240,speed:0,damage:14,score:300,radius:.9,color:16757325},boss:{name:"守望者核心",health:2600,speed:1.45,damage:18,score:5e3,radius:2.1,color:16734525}},Za={recruit:{id:"recruit",label:"新兵",waves:10,hp:.78,damage:.68,score:.85,drop:1.35,spawn:.85},standard:{id:"standard",label:"标准",waves:15,hp:1,damage:1,score:1,drop:1,spawn:1},nightmare:{id:"nightmare",label:"噩梦",waves:20,hp:1.4,damage:1.45,score:1.5,drop:.82,spawn:1.18},apex:{id:"apex",label:"极限",waves:25,hp:1.85,damage:1.8,score:2.1,drop:.7,spawn:1.35}},Bl=[{id:"flawless",text:"本波不受到任何伤害",reward:200,target:1},{id:"crit",text:"造成 5 次暴击",reward:170,target:5},{id:"headshot",text:"命中敌人弱点 6 次",reward:160,target:6},{id:"combo",text:"达成 8 连击",reward:180,target:8},{id:"barrel",text:"用油桶击毁 2 个敌人",reward:220,target:2},{id:"kills",text:"本波击毁 12 个敌人",reward:150,target:12}],Ja=[{at:0,title:"第一章 // 霓虹余烬",text:"02:17，第七区断联。你是唯一还能接入战术网络的「幽灵」。"},{at:.22,title:"第二章 // 铁潮",text:"机械军团开始成建制推进，前哨站接连失守，补给线被压缩到极限。"},{at:.42,title:"第三章 // 裂隙回声",text:"裂隙深处传来同源信号——守望者正在召回所有残部。"},{at:.6,title:"第四章 // 深潜",text:"常规补给断绝，流动商人成了唯一的装备来源。"},{at:.8,title:"第五章 // 临界",text:"敌方核心开始超载，战场的物理规则正在被改写。"},{at:.96,title:"终章 // 黎明协议",text:"最后一道防线。摧毁守望者，结束这场没有尽头的夜。"}],ea=[{id:"first-blood",name:"首次接触",desc:"击毁第一个敌对单位"},{id:"combo-master",name:"连锁反应",desc:"连击倍率达到 2.5"},{id:"flawless",name:"无损作战",desc:"无伤清除一整波敌人"},{id:"crit-10",name:"精准打击",desc:"单局造成 10 次暴击"},{id:"overdrive",name:"核心超载",desc:"首次释放超载模式"},{id:"defuser",name:"拆弹专家",desc:"在自毁蜂群引爆前将其击毁"},{id:"arc-chain",name:"雷霆万钧",desc:"弧光一次连锁 3 个以上目标"},{id:"victory",name:"黎明已至",desc:"完成核心行动"},{id:"nightmare",name:"噩梦终结",desc:"在噩梦难度下通关"},{id:"hive",name:"蜂群覆盖",desc:"使用制导导弹击毁至少一个目标"},{id:"medic-down",name:"断援",desc:"击毁一台维生单元"},{id:"barrel",name:"连环爆破",desc:"用爆炸油桶一次清除多个目标"},{id:"frostbite",name:"冰封猎场",desc:"累计击毁 15 个处于减速状态的敌人"},{id:"falconer",name:"隼猎者",desc:"单局击毁 8 只游隼突袭者"}],zl=[{id:"b-health",tags:["survival"],icon:"✚",name:"强化骨架",desc:"最大生命 +20。",apply:i=>{i.player.maxHealth+=20,i.player.health+=20}},{id:"b-shield",tags:["survival"],icon:"◇",name:"电容矩阵",desc:"最大护盾 +15。",apply:i=>{i.player.maxShield+=15,i.player.shield+=15}},{id:"b-damage",tags:["burst"],icon:"↟",name:"过热膛线",desc:"全武器伤害 +7%。",apply:i=>{i.player.damageMultiplier*=1.07}},{id:"b-firerate",tags:["burst"],icon:"≫",name:"高速循环",desc:"射速 +7%。",apply:i=>{i.player.fireRateMultiplier*=1.07}},{id:"b-speed",tags:["mobility"],icon:"⌁",name:"伺服腿组",desc:"移动速度 +5%。",apply:i=>{i.player.speedMultiplier*=1.05}},{id:"b-crit",tags:["precision"],icon:"✦",name:"弱点解析",desc:"暴击率 +4%。",apply:i=>{i.player.critChance+=.04}},{id:"b-critdmg",tags:["precision"],icon:"✷",name:"暴击回路",desc:"暴击伤害 +12%。",apply:i=>{i.player.critMultiplier+=.12}},{id:"b-ammo",tags:["sustain"],icon:"▤",name:"扩容弹匣",desc:"弹药容量 +10%。",apply:i=>{i.player.ammoMultiplier*=1.1}},{id:"b-reload",tags:["sustain"],icon:"↻",name:"急速装填",desc:"装填速度 +8%。",apply:i=>{i.player.reloadMultiplier*=1.08}},{id:"b-pulse",tags:["element"],icon:"◎",name:"脉冲核心",desc:"脉冲伤害 +10 / 半径 +1。",apply:i=>{i.player.pulseDamage+=10,i.player.pulseRadius+=1}},{id:"b-execute",tags:["precision"],icon:"⌖",name:"处决协议",desc:"处决加成 +8%。",apply:i=>{i.player.executeBonus+=.08}},{id:"b-pickup",tags:["sustain"],icon:"⊙",name:"拾取场",desc:"拾取范围 +0.2。",apply:i=>{i.player.pickupRadius+=.2}},{id:"b-aimassist",tags:["precision"],icon:"⌖",name:"战术辅助瞄具",desc:"开启轻度辅助瞄准：准星柔和吸附最近敌人、子弹命中更稳（仅前方锥形范围）。不瞬锁、不自动开火，公平但顺手。可叠加至 3 级。",apply:i=>{i.player.aimAssistLevel=Math.min(3,(i.player.aimAssistLevel||0)+1)},levelOf:i=>i.player.aimAssistLevel||0},{id:"b-combo",tags:["control"],icon:"⛓",name:"连击稳定器",desc:"连击保持时间延长 1.2 秒，更容易滚起高连击倍率。",apply:i=>{i.player.comboHold=(i.player.comboHold||0)+1.2},levelOf:i=>Math.round((i.player.comboHold||0)/1.2)},{id:"b-dash",tags:["mobility"],icon:"↯",name:"相位电容",desc:"相位冲刺冷却缩短 12%。",apply:i=>{i.player.dashMax*=.88}},{id:"b-thorns",tags:["survival"],icon:"✵",name:"反冲装甲",desc:"受击时对周围敌人反弹 18 点伤害。",apply:i=>{i.player.thorns+=18},levelOf:i=>Math.round((i.player.thorns||0)/18)},{id:"b-weakpoint",tags:["precision"],icon:"◎",name:"弱点标定",desc:"弱点 / 暴击命中伤害提高 10%。",apply:i=>{i.player.weakpointBonus=(i.player.weakpointBonus||0)+.1},levelOf:i=>Math.round((i.player.weakpointBonus||0)*10)},{id:"b-score",tags:[],icon:"◆",name:"战术记录仪",desc:"作战积分获取提高 8%（纯记录加成，不影响战斗强度）。",apply:i=>{i.player.scoreBonus=(i.player.scoreBonus||0)+.08},levelOf:i=>Math.round((i.player.scoreBonus||0)/.08)}],Hl=[{id:"m-mag",tags:["sustain"],icon:"▤",name:"扩容弹匣",rarity:1,price:140,desc:"全武器弹药容量 +15%。",apply:i=>{i.player.ammoMultiplier*=1.15}},{id:"m-grip",tags:["burst"],icon:"≫",name:"稳定握把",rarity:1,price:160,desc:"射速 +10%。",apply:i=>{i.player.fireRateMultiplier*=1.1}},{id:"m-spring",tags:["sustain"],icon:"↻",name:"高速弹簧",rarity:1,price:150,desc:"装填速度 +18%。",apply:i=>{i.player.reloadMultiplier*=1.18}},{id:"m-composite",tags:["sustain"],icon:"◈",name:"复合弹仓",rarity:1,price:150,desc:"弹药容量 +12%。",apply:i=>{i.player.ammoMultiplier*=1.12}},{id:"m-sight",tags:["precision"],icon:"⌖",name:"红点校准",rarity:1,price:130,desc:"全武器伤害 +5%。",apply:i=>{i.player.damageMultiplier*=1.05}},{id:"m-barrel",tags:["precision"],icon:"↟",name:"精密枪管",rarity:2,price:190,desc:"全武器伤害 +12%。",apply:i=>{i.player.damageMultiplier*=1.12}},{id:"m-ammo",tags:["precision"],icon:"✦",name:"穿甲弹头",rarity:2,price:210,desc:"暴击率 +6%。",apply:i=>{i.player.critChance+=.06}},{id:"m-laser",tags:["precision"],icon:"✷",name:"激光指示",rarity:2,price:180,desc:"暴击率 +4%。",apply:i=>{i.player.critChance+=.04}},{id:"m-aegis",tags:["survival"],icon:"◇",name:"装甲模块",rarity:2,price:160,desc:"最大护盾 +14。",apply:i=>{i.player.maxShield+=14,i.player.shield+=14}},{id:"m-kinetic",tags:["mobility"],icon:"⌁",name:"动力模块",rarity:2,price:170,desc:"移动速度 +4%。",apply:i=>{i.player.speedMultiplier*=1.04}},{id:"m-over",tags:["burst"],icon:"ϟ",name:"过载膛线",rarity:3,price:280,desc:"伤害 +25%（射速 -5%）。",apply:i=>{i.player.damageMultiplier*=1.25,i.player.fireRateMultiplier*=.95}},{id:"m-capacitor",tags:["element"],icon:"◎",name:"电容模组",rarity:3,price:240,desc:"脉冲伤害 +15%、半径 +0.5。",apply:i=>{i.player.pulseDamage+=15,i.player.pulseRadius+=.5}},{id:"m-vamp",tags:["survival"],icon:"⟁",name:"猎手模块",rarity:3,price:210,desc:"击杀回血 +3。",apply:i=>{i.player.killHeal+=3}},{id:"m-holo",tags:["precision"],icon:"✷",name:"全息瞄具",rarity:3,price:230,desc:"暴击伤害 +18%。",apply:i=>{i.player.critMultiplier+=.18}}],Vl=[{id:"s-repair",tags:["survival"],icon:"✚",name:"纳米修复包",rarity:1,price:130,desc:"立即回满生命与护盾。",apply:i=>{i.player.health=i.player.maxHealth,i.player.shield=i.player.maxShield}},{id:"s-ammo",tags:["sustain"],icon:"▤",name:"弹药补给箱",rarity:1,price:95,desc:"全部武器补满备用弹药。",apply:i=>{i.weaponState.forEach((e,t)=>{e.ammo=i.magSize(t),e.reserve=xt[t].reserve,e.firstShotUsed=!1})}},{id:"s-medkit",tags:["survival"],icon:"✚",name:"战场医疗包",rarity:1,price:80,desc:"立即恢复 45 点生命。",apply:i=>{i.player.health=Math.min(i.player.maxHealth,i.player.health+45)}},{id:"s-shield",tags:["survival"],icon:"◇",name:"电容电芯",rarity:1,price:85,desc:"立即恢复 40 点护盾。",apply:i=>{i.player.shield=Math.min(i.player.maxShield,i.player.shield+40)}},{id:"s-energy",tags:["element"],icon:"ϟ",name:"能量电芯",rarity:1,price:90,desc:"超载能量 +40。",apply:i=>{i.player.energy=Math.min(i.player.energyMax,i.player.energy+40)}},{id:"s-dmg",tags:["precision"],icon:"↟",name:"火力芯片",rarity:1,price:150,desc:"全武器伤害 +5%。",apply:i=>{i.player.damageMultiplier*=1.05}},{id:"s-firerate",tags:["burst"],icon:"≫",name:"速射芯片",rarity:1,price:140,desc:"射速 +6%。",apply:i=>{i.player.fireRateMultiplier*=1.06}},{id:"s-reload",tags:["sustain"],icon:"↻",name:"装填芯片",rarity:1,price:130,desc:"装填速度 +10%。",apply:i=>{i.player.reloadMultiplier*=1.1}},{id:"s-speed",tags:["mobility"],icon:"⌁",name:"伺服芯片",rarity:1,price:120,desc:"移动速度 +4%。",apply:i=>{i.player.speedMultiplier*=1.04}},{id:"s-health",tags:["survival"],icon:"✚",name:"强化骨架",rarity:1,price:140,desc:"最大生命 +18。",apply:i=>{i.player.maxHealth+=18,i.player.health+=18}},{id:"s-shieldc",tags:["survival"],icon:"◇",name:"护盾矩阵",rarity:1,price:130,desc:"最大护盾 +14。",apply:i=>{i.player.maxShield+=14,i.player.shield+=14}},{id:"s-pickup",tags:["mobility"],icon:"⊙",name:"拾取芯片",rarity:1,price:110,desc:"拾取范围 +0.2。",apply:i=>{i.player.pickupRadius+=.2}},{id:"s-crit",tags:["precision"],icon:"✦",name:"弱点芯片",rarity:2,price:170,desc:"暴击率 +3%。",apply:i=>{i.player.critChance+=.03}},{id:"s-pulse",tags:["element"],icon:"◎",name:"脉冲芯片",rarity:2,price:160,desc:"脉冲伤害 +12。",apply:i=>{i.player.pulseDamage+=12}},{id:"s-execute",tags:["precision"],icon:"⌖",name:"处决芯片",rarity:2,price:150,desc:"处决加成 +6%。",apply:i=>{i.player.executeBonus+=.06}},{id:"s-leech",tags:["survival"],icon:"⟁",name:"吸血芯片",rarity:2,price:160,desc:"击杀回血 +3。",apply:i=>{i.player.killHeal+=3}},{id:"s-frost",tags:["element"],icon:"❄",name:"极寒芯片",rarity:2,price:150,desc:"减速时间 +30%。",apply:i=>{i.player.frostDuration=(i.player.frostDuration||1)*1.3}},{id:"s-magnet",tags:["mobility"],icon:"⊙",name:"磁场芯片",rarity:2,price:170,desc:"拾取范围 +0.4、补给 +20%。",apply:i=>{i.player.pickupRadius+=.4,i.player.pickupPower=(i.player.pickupPower||1)*1.2}},{id:"s-aegis",tags:["survival"],icon:"◇",name:"护盾电芯",rarity:2,price:160,desc:"最大护盾 +20。",apply:i=>{i.player.maxShield+=20,i.player.shield+=20}},{id:"s-kinetic",tags:["mobility"],icon:"⌁",name:"机动芯片",rarity:2,price:150,desc:"移速 +3%、装填 +6%。",apply:i=>{i.player.speedMultiplier*=1.03,i.player.reloadMultiplier*=1.06}},{id:"s-critdmg",tags:["precision"],icon:"✷",name:"暴击芯片",rarity:3,price:230,desc:"暴击伤害 +15%。",apply:i=>{i.player.critMultiplier+=.15}},{id:"s-chain",tags:["element"],icon:"≈",name:"电弧芯片",rarity:3,price:220,desc:"电弧额外跳跃 +1。",apply:i=>{i.player.chainBonus+=1}},{id:"s-overdrive",tags:["element"],icon:"ϟ",name:"核心芯片",rarity:3,price:210,desc:"超载能量获取 +20%。",apply:i=>{i.player.energyGain*=1.2}},{id:"s-vamp",tags:["survival"],icon:"⟁",name:"维生芯片",rarity:3,price:200,desc:"击杀回护盾 +3。",apply:i=>{i.player.killShield=(i.player.killShield||0)+3}}],Gl=[{id:"sk-emp",tags:["element"],kind:"active",icon:"✺",name:"电磁过载",rarity:2,price:200,cooldown:18,desc:"释放范围冲击，造成 130 伤害并瘫痪敌人 1 秒。"},{id:"sk-nano",tags:["survival"],kind:"active",icon:"✚",name:"纳米修复立场",rarity:1,price:150,cooldown:16,desc:"立即恢复 55 生命与 40 护盾（医疗）。"},{id:"sk-med",tags:["survival"],kind:"active",icon:"⚕",name:"应急医疗舱",rarity:2,price:190,cooldown:20,desc:"立即 +50 生命，并在 4 秒内持续恢复（医疗）。"},{id:"sk-ammo",tags:["sustain"],kind:"active",icon:"▤",name:"弹药空投",rarity:1,price:140,cooldown:20,desc:"补满全部武器弹药与备弹（补给）。"},{id:"sk-barrier",tags:["survival"],kind:"active",icon:"◇",name:"力场护壁",rarity:3,price:260,cooldown:26,desc:"展开 3 秒无敌护盾立场。"},{id:"sk-time",tags:["control"],kind:"active",icon:"⏳",name:"时间稀释",rarity:3,price:240,cooldown:24,desc:"6 秒内大幅减缓所有敌人行动。"},{id:"sk-overload",tags:["burst"],kind:"active",icon:"ϟ",name:"相位超载",rarity:3,price:250,cooldown:22,desc:"4 秒内伤害 ×2、射速 +50%。"},{id:"sk-storm",tags:["element"],kind:"active",icon:"↯",name:"磁暴",rarity:2,price:210,cooldown:18,desc:"连锁电弧打击最近的 8 个敌人。"},{id:"sk-adaptive",tags:["survival"],kind:"passive",icon:"🛡",name:"自适应装甲",rarity:2,price:200,desc:"生命低于 30% 时受到伤害 -40%。",apply:i=>{i.player.adaptiveArmor=!0}},{id:"sk-siphon",tags:["element"],kind:"passive",icon:"⟲",name:"能量虹吸",rarity:1,price:150,desc:"每次击杀使脉冲冷却 -1.2 秒。",apply:i=>{i.player.siphon=!0}},{id:"sk-protocol",tags:["precision"],kind:"passive",icon:"✦",name:"暴击协议",rarity:2,price:190,desc:"每第 7 次射击必定暴击。",apply:i=>{i.player.critProtocol=!0}},{id:"sk-nanite",tags:["survival"],kind:"passive",icon:"❖",name:"自修复纳米",rarity:2,price:180,desc:"每秒自动恢复 2.5 生命。",apply:i=>{i.player.nanite=2.5}},{id:"sk-adrenaline",tags:["burst"],kind:"passive",icon:"⌁",name:"肾上腺素",rarity:1,price:160,desc:"生命低于 40% 时射速 +30%。",apply:i=>{i.player.adrenaline=!0}}],Eg={"sk-emp":i=>{i.castAoe(i.player.position.clone(),16,130,5568466,1),i.callbacks.onAnnounce("电磁过载","范围冲击 · 敌人瘫痪","SKILL // EMP",1500)},"sk-nano":i=>{const e=i.player;e.health=Math.min(e.maxHealth,e.health+55),e.shield=Math.min(e.maxShield,e.shield+40),i.createPulseEffect(e.position.clone(),7143376,8),i.callbacks.onAnnounce("纳米修复立场","生命 +55 · 护盾 +40","SKILL // NANO",1500)},"sk-med":i=>{const e=i.player;e.health=Math.min(e.maxHealth,e.health+50),e.medTime=4,e.medRate=4,i.createPulseEffect(e.position.clone(),8257456,9),i.callbacks.onAnnounce("应急医疗舱","立即 +50 · 4 秒持续恢复","SKILL // MED",1500)},"sk-ammo":i=>{i.weaponState.forEach((e,t)=>{e.ammo=i.magSize(t),e.reserve=xt[t].reserve,e.firstShotUsed=!1}),i.callbacks.onAnnounce("弹药空投","全武器弹药已补满","SKILL // AMMO",1500)},"sk-barrier":i=>{const e=i.player;e.invulnerable=Math.max(e.invulnerable,3),i.createPulseEffect(e.position.clone(),10194175,9),i.callbacks.onAnnounce("力场护壁","3 秒无敌护盾","SKILL // BARRIER",1500)},"sk-time":i=>{i.enemySlow=6,i.callbacks.onAnnounce("时间稀释","敌人行动减缓 6 秒","SKILL // DILATION",1500)},"sk-overload":i=>{const e=i.player;e.skillBuff=4,e.skillDmg=2,e.skillFire=1.5,i.createPulseEffect(e.position.clone(),16766044,12),i.callbacks.onAnnounce("相位超载","伤害 ×2 · 射速 +50% · 4 秒","SKILL // OVERLOAD",1500)},"sk-storm":i=>{const e=i.player,t=e.position.clone(),n=i.enemies.filter(s=>!s.dead&&!s.phased&&s.spawnTime<=0).map(s=>({e:s,d:s.group.position.distanceTo(t)})).sort((s,a)=>s.d-a.d).slice(0,8);i.createPulseEffect(t,8251647,14);for(const{e:s}of n)i.damageEnemy(s,45*e.damageMultiplier,s.group.position.clone().sub(t).setY(0).normalize()),i.createTracer(t.clone().add(new A(0,1.6,0)),s.group.position.clone().add(new A(0,1.2,0)),8251647,.25),s.stun=Math.max(s.stun||0,.4);i.audio.pulse(),i.callbacks.onAnnounce("磁暴","连锁电弧打击 8 个目标","SKILL // STORM",1500)}},Qa={1:0,2:2,3:4,4:8};class Tg{constructor(e,t,n){this.canvas=e,this.radar=t,this.radarContext=t.getContext("2d"),this.callbacks=n,this.audio=new Wm,this.profile=Wc(),this.isBoard=this.profile==="board",this.isTouch=this.profile!=="desktop",this.lowPower=this.isBoard,this.maxParticles=this.isBoard?16:this.isTouch?25:80,this.demoMode=!1,this.scene=new Pd,this.scene.background=new $e(198667),this.scene.fog=new ia(463125,24,112),this.camera=new Yt(72,innerWidth/innerHeight,.05,220),this.camera.rotation.order="YXZ",this.renderer=new Gm({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(innerWidth,innerHeight),this.applyQuality(),this.renderer.outputColorSpace=Lt,this.renderer.toneMapping=nc,this.renderer.toneMappingExposure=1.55,this.renderer.shadowMap.enabled=!this.isTouch&&!this.lowPower,this.renderer.shadowMap.type=ec,this.clock=new su,this.raycaster=new el,this.losRay=new el,this.missStreak=0,this.state="menu",this.mode="campaign",this.keys={},this.firing=!1,this.aiming=!1,this.shotThisHold=!1,this.yaw=0,this.pitch=0,this.cheats={god:!1,ammo:!1,lock:!1,auto:!1,wall:!1,slow:!1},this.cheated=!1,this.enemySlow=0,this.aimTarget=null,this.aimHoldTimer=0,this.hitStop=0,this.cheatBuffer="",this.konami=[],this.cheatToastTimer=0,this.menuTime=0,this.elapsed=0,this.enemies=[],this.enemyHitMeshes=[],this.projectiles=[],this.pickups=[],this.particles=[],this.tracers=[],this.effects=[],this._particlePool=[],this.obstacles=[],this.barrels=[],this.barrelMeshes=[],this.barrelBoxes=new Set,this.worldColliders=[],this.animatedWorld=[],this.spawnQueue=[],this.waveClearPending=!1,this.hudTimer=0,this.radarTimer=0,this.shake=0,this.weaponRecoil=0,this.muzzleTimer=0,this.currentUpgradeChoices=[],this.freePickIndex=-1,this.difficulty=Za.standard,this.clearedContent=localStorage.getItem("nexus-cleared")==="1",this.mission=null,this.missionBonus=1,this.shopDiscount=1,this.fieldVendor=null,this.waveTimeLeft=0,this.fieldEvent=null,this.appliedUpgrades=[],this.runAchievements=new Set,this.critCount=0,this.comboPeak=1,this.waveDamageTaken=0,this.dashActive=!1,this.sharedParticleGeometry=new un(.055,.055,.055),this.sharedProjectileGeometry=new Ui(.11,8,8),this.createWorld(),this.createViewModel(),this.bindEvents(),this.resetPlayer(),this.animate=this.animate.bind(this),this.animate()}createWorld(){sg(this)}applyQuality(){const e=this.isBoard?innerWidth>2200?.7:1:this.isTouch?1.25:1.65;this._basePixelRatio=Math.min(devicePixelRatio||1,e),this._curPixelRatio=this._basePixelRatio,this._slowFrames=0,this._fastFrames=0,this.renderer.setPixelRatio(this._curPixelRatio)}_adaptiveResolution(e){if(!Ue.adaptiveResolution)return;const t=1/30,n=1/50,s=.5,a=this._basePixelRatio;e>t?(this._slowFrames++,this._fastFrames=0):e<n?(this._fastFrames++,this._slowFrames=0):(this._slowFrames=0,this._fastFrames=0),this._slowFrames>=12&&this._curPixelRatio>s?(this._curPixelRatio=Math.max(s,+(this._curPixelRatio-.15).toFixed(2)),this.renderer.setPixelRatio(this._curPixelRatio),this._slowFrames=0,this._fastFrames=0):this._fastFrames>=60&&this._curPixelRatio<a-1e-6&&(this._curPixelRatio=Math.min(a,+(this._curPixelRatio+.1).toFixed(2)),this.renderer.setPixelRatio(this._curPixelRatio),this._slowFrames=0,this._fastFrames=0)}createViewModel(){this.weaponRoot=new ot,this.camera.add(this.weaponRoot),this.scene.add(this.camera),this.weaponRoot.position.set(.36,-.31,-.62),this.applyWeaponScale();const e=new ot,t=new Pt({color:1583407,metalness:.55,roughness:.62}),n=new Pt({color:2902856,metalness:.82,roughness:.34,emissive:928550,emissiveIntensity:.5}),s=new Q(new Sn(.075,.105,.52,8),t);s.rotation.set(Math.PI/2.45,0,-.25),s.position.set(.19,-.3,.16);const a=new Q(new Sn(.11,.11,.09,8),n);a.rotation.copy(s.rotation),a.position.set(.23,-.21,.02);const r=new Q(new Sn(.07,.09,.38,8),t);r.rotation.set(Math.PI/2.2,0,.42),r.position.set(-.16,-.26,-.3);const o=new Q(new un(.13,.05,.19),n);o.position.set(-.13,-.16,-.36),e.add(s,a,r,o),e.traverse(l=>{l.renderOrder=10,l.frustumCulled=!1}),this.weaponRoot.add(e),this.viewHands=e;const c=new es(11070172,1.35,3.6);c.position.set(.2,.25,.25),this.camera.add(c),this.muzzleLight=new es(7536602,0,3),this.weaponRoot.add(this.muzzleLight),this.buildWeaponModel(0)}applyWeaponScale(){if(!this.weaponRoot)return;const e=this.isTouch&&innerHeight>innerWidth;this.weaponRoot.scale.setScalar(this.isBoard?.92:e?.68:.8)}buildWeaponModel(e){this.weaponModel&&this.weaponRoot.remove(this.weaponModel);const t=Zm(e);this.weaponRoot.add(t.group),this.weaponModel=t.group,this.weaponParts=t,this.currentScopeType=t.scopeType||"reddot",this.scopeReticle=t.reticle||null,this.muzzleLight.position.set(0,.02,t.muzzleZ+.12)}updateWeaponParts(e){const t=this.weaponParts;if(!t)return;const n=this.reloadTimer>0,s=n?1-this.reloadTimer/Math.max(.001,xt[this.weaponIndex].reload/this.player.reloadMultiplier):0,a=n?Math.sin(s*Math.PI):0;if(t.magazine.position.y=Ct(t.magazine.position.y,(this.weaponIndex===1,-.19-a*.22),1-Math.exp(-e*16)),t.magazine.rotation.x=Ct(t.magazine.rotation.x,a*.55,1-Math.exp(-e*14)),t.bolt.position.z=Ct(t.bolt.position.z,-.16+this.weaponRecoil*.085,1-Math.exp(-e*22)),t.flash.visible=this.muzzleTimer>0,t.flash.visible){const r=this.muzzleTimer/.055;t.flash.scale.setScalar(.65+r*.7),t.flash.rotation.z+=e*18}t.coils&&t.coils.children.forEach((r,o)=>{r.rotation.z+=e*(o%2?-2.2:2.2)}),t.optics&&(t.optics.position.y=Ct(t.optics.position.y,(t.redDot?.15:.17)-(this.aimBlend||0)*.035,1-Math.exp(-e*10))),t.redDot&&(t.redDot.scale.setScalar(.8+(this.aimBlend||0)*.8),t.redDot.material.color.setHex(this.aimBlend>.45?16719928:11023172)),this.scopeReticle&&(this.scopeReticle.visible=this.aimBlend>.25)}resetPlayer(){this.player={position:new A(0,1.7,22),velocity:new A,health:100,maxHealth:100,shield:50,maxShield:50,damageMultiplier:1,fireRateMultiplier:1,reloadMultiplier:1,speedMultiplier:1,ammoMultiplier:1,dashCooldown:0,dashMax:5,dashTime:0,dashDuration:.19,perfectWindow:.13,_perfectUsed:!1,invulnerable:0,pulseCooldown:0,pulseMax:12,pulseRadius:12,pulseDamage:75,shieldRegen:9,shieldDelay:4.5,lastDamage:0,killHeal:0,killShield:0,jumpY:0,jumpVel:0,grounded:!0,slideTime:0,slideCooldown:0,slideDir:null,critChance:.08,critMultiplier:1.75,executeBonus:1,executeThreshold:.35,energy:0,energyMax:100,energyGain:1,overdrive:0,overdriveMax:8,chainBonus:0,chainDamage:1,pickupRadius:1.45,pickupPower:1,dashWave:0,skills:[],skillDmg:1,skillFire:1,skillBuff:0,critProtocol:!1,adaptiveArmor:!1,siphon:!1,nanite:0,adrenaline:!1,thorns:0,medTime:0,medRate:0,aimAssistLevel:0,comboHold:0,weakpointBonus:0,scoreBonus:0},this.weaponState=xt.map(e=>({ammo:e.magazine,reserve:e.reserve,auto:!0,burst:0,firstShotMul:1,magMul:1,reloadMul:1,spreadMul:1,recoilRecoverMul:1,frostOnHit:!1,frostDur:0,firstShotUsed:!1,affixId:null})),this.loadout=[0],this.credits=0,this.currentShop=[],this.shopPhase="free",this.weaponIndex=0,this.unlockedWeapon=0,this.weaponCooldown=0,this.reloadTimer=0,this.switchTimer=0,this.score=0,this.kills=0,this.falconKills=0,this.frostKills=0,this.shotsFired=0,this.shotsHit=0,this.combo=1,this.comboTimer=0,this.wave=0,this.currentChapter=-1,this.elapsed=0,this.nextWaveTimer=0,this.spawnTimer=0,this.waveClearPending=!1,this.intermission=!1,this.yaw=0,this.pitch=0,this.appliedUpgrades=[],this.runAchievements=new Set,this.critCount=0,this.comboPeak=1,this.waveDamageTaken=0,this.dashActive=!1,this.aimBlend=0,this.sniperZoom=6,this.scopeLevels=[3,6,10],this.sprintBlend=0,this.slideBlend=0,this.landKick=0,this.hitCombo=0,this.hitComboTimer=0,this.hitStop=0,this.slowmo=0,this.mission=null,this.missionBonus=1,this.shopDiscount=1,this.waveTimeLeft=0,this.fieldEvent=null,this.acquiredIds=[],this.law=null,this.metaUnlocks=this.loadMetaUnlocks(),this.startingTags=[],this.buildBonus=Xr(),this.buildTagCounts={},this._appliedBuild=null,this.freeSkipped=!1,this.nextWaveOptions=0,this.freeRerolls=0}clearDynamicObjects(){[...this.enemies,...this.projectiles,...this.pickups,...this.particles,...this.tracers,...this.effects].forEach(t=>{const n=t.group||t.mesh||t.line;n&&this.scene.remove(n)}),this.enemies=[],this.enemyHitMeshes=[],this.xrayState=!1,this.aimTarget=null,this.missStreak=0,this.projectiles=[],this.pickups=[];for(const t of this.particles)this._particlePool.push(t.mesh);this.particles=[],this.tracers=[],this.effects=[],this.spawnQueue=[],this.fieldVendor&&(this.fieldVendor.group.removeFromParent(),this.fieldVendor=null);const e=document.getElementById("interact-toast");e&&e.classList.remove("show"),this.obstacles=this.obstacles.filter(t=>!this.barrelBoxes.has(t)),this.barrelMeshes=[],this.barrels.forEach(t=>{t.dead=!1,t.health=t.maxHealth,t.flash=0,t.bodyMaterial&&(t.bodyMaterial.emissiveIntensity=.5),t.group&&!t.group.parent&&this.world.add(t.group),this.barrelMeshes.push(t.mesh),this.obstacles.push(t.box)})}start(e="campaign",t="standard",n=0){this.audio.init(),this.runId=(this.runId||0)+1,this.clearDynamicObjects(),this.resetPlayer();const s=Number.isInteger(n)&&n>=0&&n<xt.length?n:0;this.loadout=[s],this.weaponIndex=s,this.unlockedWeapon=s,Ue.rogueliteV2?(this.law=mg(),this.freeRerolls=this.metaUnlocks.freeReroll?1:0,this.startingTags=this.metaUnlocks.preLockTag&&this.law?[this.law.rewardTag]:[]):(this.law=null,this.freeRerolls=0,this.startingTags=[]),this.rollAffixForWeapon(this.weaponIndex),this.recomputeBuild(),this.mode=e,this.difficulty=Za[t]||Za.standard,this.waveTimeLeft=e==="gauntlet"?45:0,this.firing=!1,this.aiming=!1,this.touchMove={x:0,y:0},this.state="playing",this.weaponRoot.visible=!0,this.buildWeaponModel(this.weaponIndex),this.camera.position.copy(this.player.position),this.camera.rotation.set(0,0,0),this.callbacks.onState("playing"),this.callbacks.onAnnounce(e==="training"?"模拟训练":"神经链接建立",e==="training"?`敌方伤害已关闭 · 熟悉你的武器 · ${this.difficulty.label}难度`:`准备迎击第一波敌对单位 · ${this.difficulty.label}难度`,"TACTICAL LINK / CONNECTED",2400),this.nextWaveTimer=2.2,this.intermission=!0,this.requestLock(),this.updateHUD(!0),this.isBoard&&this.callbacks.onToast?.("白板课堂模式 // 左下角「移动 / MOVE」圆形摇杆移动 · 右侧滑动瞄准 · 右下 FIRE 开火 · 可开启 AUTO 自动演示",5200)}quit(){this.state="menu",this.firing=!1,this.clearDynamicObjects(),this.weaponRoot.visible=!1,this.callbacks.onState("menu")}pause(e=""){this.state==="playing"&&(this.state="paused",this.firing=!1,this.aiming=!1,this.shotThisHold=!1,this.keys={},this.touchMove={x:0,y:0},this.resetTouchState?.(),document.exitPointerLock?.(),this.callbacks.onBuild?.({difficulty:this.difficulty.label,upgrades:this.appliedUpgrades,damage:Math.round((this.player.damageMultiplier-1)*100),crit:Math.round(this.player.critChance*100),kills:this.kills,wave:this.wave,law:this.law?{id:this.law.id,text:this.law.text,rewardTag:this.law.rewardTag}:null,buildBonus:this.buildBonus,buildTags:Object.entries(this.buildTagCounts||{}).sort((t,n)=>n[1]-t[1]).slice(0,3).map(([t,n])=>({id:t,n}))}),this.callbacks.onState("paused",{pauseReason:e}))}resume(){this.state==="paused"&&(document.hidden||(this.state="playing",this.callbacks.onState("playing"),this.requestLock(),this.clock.getDelta()))}requestLock(){if(!this.isTouch&&this.state==="playing"&&document.pointerLockElement!==this.canvas)try{const e=this.canvas.requestPointerLock?.();e?.catch&&e.catch(()=>{})}catch{}}bindEvents(){window.addEventListener("resize",()=>this.resize()),document.addEventListener("keydown",t=>{if(document.getElementById("modal-backdrop")?.classList.contains("active"))return;this.keys[t.code]=!0,t.code==="KeyR"&&this.reload(),t.code==="KeyQ"&&this.dash(),t.code==="KeyE"&&this.pulse(),t.code==="Space"&&(t.preventDefault?.(),this.jump()),(t.code==="ControlLeft"||t.code==="ControlRight"||t.code==="KeyC")&&this.slide(),t.code==="KeyF"&&this.activateOverdrive();const n=/^Digit([1-6])$/.exec(t.code);if(n){const a=this.loadout[Number(n[1])-1];a!==void 0&&this.switchWeapon(a)}const s=/^Key([ZXVB])$/.exec(t.code);s&&this.activateSkill({Z:0,X:1,V:2,B:3}[s[1]]),t.code==="KeyG"&&this.openFieldShop(),(t.code==="KeyP"||t.code==="Escape"&&!document.pointerLockElement)&&(this.state==="playing"?this.pause():this.state==="paused"&&this.resume()),this.handleCheatInput(t)}),document.addEventListener("keyup",t=>{this.keys[t.code]=!1}),document.addEventListener("mousemove",t=>{if(this.state!=="playing"||!this.isTouch&&document.pointerLockElement!==this.canvas)return;const n=Ue.mouseSensitivity,s=Ue.invertY?-1:1;this.yaw-=t.movementX*.0021*n,this.pitch=bt(this.pitch-t.movementY*.0019*n*s,-1.45,1.45)}),this.canvas.addEventListener("mousedown",t=>{this.state==="playing"&&(this.requestLock(),t.button===0&&(this.firing=!0,this.shotThisHold=!1),t.button===2&&(this.aiming=!0))}),document.addEventListener("mouseup",t=>{t.button===0&&(this.firing=!1,this.shotThisHold=!1),t.button===2&&(this.aiming=!1)}),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()),this.canvas.addEventListener("wheel",t=>{if(this.state!=="playing")return;if(this.aiming&&this.currentScopeType==="sniper"){this.cycleScope();return}const n=t.deltaY>0?1:-1,s=this.loadout.length;if(s<2)return;const a=Math.max(0,this.loadout.indexOf(this.weaponIndex));this.switchWeapon(this.loadout[(a+n+s)%s])},{passive:!0}),document.addEventListener("pointerlockchange",()=>{!this.isTouch&&this.state==="playing"&&document.pointerLockElement!==this.canvas&&this.elapsed>.6&&this.pause()});const e=t=>{this.state==="playing"&&this.pause(t)};document.addEventListener("visibilitychange",()=>{document.hidden&&e("visibility")}),window.addEventListener("blur",()=>e("blur")),window.addEventListener("pagehide",()=>e("pagehide")),window.addEventListener("offline",()=>{this.callbacks.onToast?.("离线作战 · 本地运行不受影响",2600)}),window.addEventListener("online",()=>{this.callbacks.onToast?.("网络已恢复 · 神经链接稳定",2e3)}),this.bindTouchControls()}bindTouchControls(){const e=(p,m)=>{try{p.setPointerCapture?.(m)}catch{}},t=document.getElementById("move-stick"),n=t.querySelector("i");let s=null;const a=p=>{const m=t.getBoundingClientRect();let M=p.clientX-(m.left+m.width/2),w=p.clientY-(m.top+m.height/2);const x=Math.hypot(M,w),P=m.width*.34;x>P&&(M*=P/x,w*=P/x),n.style.transform=`translate(${M}px, ${w}px)`,this.touchMove={x:M/P,y:w/P}};t.addEventListener("pointerdown",p=>{p.preventDefault(),e(t,p.pointerId),s=p.pointerId,t.classList.add("engaged"),a(p)},{passive:!1}),document.addEventListener("pointermove",p=>{p.pointerId===s&&(p.preventDefault(),a(p))},{passive:!1});const r=p=>{p.pointerId===s&&(s=null,this.touchMove={x:0,y:0},n.style.transform="",t.classList.remove("engaged"))};document.addEventListener("pointerup",r),document.addEventListener("pointercancel",r);const o=document.getElementById("look-zone"),c=new Map;o.addEventListener("pointerdown",p=>{p.preventDefault(),e(o,p.pointerId),c.set(p.pointerId,{x:p.clientX,y:p.clientY})},{passive:!1});const l=()=>({yaw:(this.isBoard?.0026:.0042)*Ue.touchSensitivity,pitch:(this.isBoard?.0024:.0037)*Ue.touchSensitivity,dirY:Ue.invertY?-1:1}),h=(p,m,M=1)=>{const w=l();this.yaw-=p*w.yaw*M,this.pitch=bt(this.pitch-m*w.pitch*M*w.dirY,-1.4,1.4)};document.addEventListener("pointermove",p=>{const m=c.get(p.pointerId);!m||this.state!=="playing"||(p.preventDefault(),h(p.clientX-m.x,p.clientY-m.y),c.set(p.pointerId,{x:p.clientX,y:p.clientY}))},{passive:!1});const f=p=>c.delete(p.pointerId);document.addEventListener("pointerup",f),document.addEventListener("pointercancel",f);const d=document.getElementById("mobile-fire"),u=new Map;d.addEventListener("pointerdown",p=>{p.preventDefault(),e(d,p.pointerId),u.set(p.pointerId,{x:p.clientX,y:p.clientY,moved:0}),this.firing=!0,this.shotThisHold=!1,d.classList.add("firing")},{passive:!1}),document.addEventListener("pointermove",p=>{const m=u.get(p.pointerId);if(!m||!Ue.fireLook||this.state!=="playing")return;p.preventDefault();const M=p.clientX-m.x,w=p.clientY-m.y;m.moved+=Math.abs(M)+Math.abs(w),!(m.moved<1.2)&&(h(M,w,Ue.fireLookSensitivity),u.set(p.pointerId,{x:p.clientX,y:p.clientY,moved:0}))},{passive:!1});const g=p=>{u.has(p.pointerId)&&(p.preventDefault(),u.delete(p.pointerId),u.size===0&&(this.firing=!1,this.shotThisHold=!1,d.classList.remove("firing")))};document.addEventListener("pointerup",g),document.addEventListener("pointercancel",g);const v=(p,m)=>{const M=document.getElementById(p);M&&(M.addEventListener("pointerdown",w=>{w.preventDefault(),m()},{passive:!1}),M.addEventListener("contextmenu",w=>w.preventDefault()))};v("mobile-reload",()=>this.reload()),v("mobile-dash",()=>this.dash()),v("mobile-pulse",()=>this.pulse()),v("mobile-switch",()=>{const p=this.loadout.length,m=Math.max(0,this.loadout.indexOf(this.weaponIndex));this.switchWeapon(this.loadout[(m+1)%p])}),v("mobile-jump",()=>this.jump()),v("mobile-slide",()=>this.slide()),v("mobile-overdrive",()=>this.activateOverdrive()),v("mobile-aim",()=>{this.aiming=!this.aiming,document.getElementById("mobile-aim")?.classList.toggle("active",this.aiming)}),v("mobile-scope",()=>this.cycleScope()),v("mobile-cheat",()=>this.toggleCheatConsole()),v("mobile-demo",()=>this.setDemoMode(!this.demoMode)),this.resetTouchState=()=>{s=null,c.clear(),u.clear(),this.touchMove={x:0,y:0},n.style.transform="",t.classList.remove("engaged"),d.classList.remove("firing"),document.getElementById("mobile-aim")?.classList.remove("active")}}setDemoMode(e){this.demoMode=!!e,document.getElementById("mobile-demo")?.classList.toggle("active",this.demoMode),this.callbacks.onToast?.(this.demoMode?"课堂演示模式已开启 · 自动锁定并开火":"课堂演示模式已关闭",2200),this.callbacks.onDemo?.(this.demoMode)}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight),this.applyQuality(),this.applyWeaponScale()}startWave(){this.wave+=1,this.intermission=!1,this.waveClearPending=!1,this.waveDamageTaken=0,this.spawnQueue=[],this.assignMission(),this.mode==="gauntlet"&&(this.waveTimeLeft=45);const e=this.mode==="campaign"||this.mode==="gauntlet"?this.difficulty.waves:0;let t=-1;e>0?t=Ja.reduce((r,o,c)=>this.wave>=Math.ceil(o.at*e)?c:r,-1):this.mode==="endless"?t=Math.min(Ja.length-1,Math.floor((this.wave-1)/5)):this.wave===1&&(t=0),t>=0&&t!==this.currentChapter&&(this.currentChapter=t,this.callbacks.onStory?.(Ja[t])),(this.wave===3||this.wave===6||this.wave===9||this.clearedContent&&this.wave%5===0)&&this.spawnFieldVendor();const n=this.difficulty,s=(this.mode==="campaign"||this.mode==="gauntlet")&&this.wave===this.difficulty.waves,a=this.mode==="endless"&&this.wave%5===0;if(s||a){this.spawnQueue.push("boss");const r=Math.min(10,Math.ceil((2+Math.floor(this.wave/2))*n.spawn)),o=["runner","drone","phantom","bomber","tank","turret","medic"];for(let c=0;c<r;c++)this.spawnQueue.push(o[Math.floor(Math.random()*o.length)]);this.callbacks.onAnnounce("守望者降临","摧毁核心装甲 · 注意范围攻击与自毁单位","WARNING / APEX SIGNAL",3200)}else{const r=this.mode==="training"?Math.min(10,4+this.wave):Math.min(30,4+this.wave*2),o=Math.max(3,Math.round(r*n.spawn)),c=this.eliteWave||0;this.eliteWave=0;const l=["runner"];if(this.wave>=2&&l.push("drone","drone"),this.wave>=3&&l.push("phantom"),this.wave>=4&&l.push("tank","turret"),this.wave>=5&&l.push("bomber","medic"),this.wave>=6&&l.push("falcon","falcon"),Ue.enemyV2){const h=Mg(this),f=la[h];this.spawnQueue.push(...Sg(h,l,o));for(let d=0;d<c;d++)this.spawnQueue.push({elite:!0,type:l[Math.floor(Math.random()*l.length)]});this.callbacks.onAnnounce(`第 ${String(this.wave).padStart(2,"0")} 波 · ${f.name}`,this.wave===1?"敌对信号接近 · 清除所有单位":f.desc,"HOSTILE // "+h.toUpperCase())}else{for(let h=0;h<o;h++)this.spawnQueue.push(l[Math.floor(Math.random()*l.length)]);for(let h=0;h<c;h++)this.spawnQueue.push(l[Math.floor(Math.random()*l.length)]);this.callbacks.onAnnounce(`第 ${String(this.wave).padStart(2,"0")} 波`,this.wave===1?"敌对信号接近 · 清除所有单位":"威胁等级上升 · 保持移动","HOSTILE SIGNALS DETECTED")}}if(this.wave>=2&&this.wave%2===0&&this.loadout.length<6){const r=xt.findIndex((o,c)=>!this.loadout.includes(c));r>=0&&this.unlockWeapon(r)}this.spawnTimer=.4,this.audio.wave()}unlockWeapon(e){this.loadout.includes(e)||this.loadout.push(e),this.loadout.sort((t,n)=>t-n),this.unlockedWeapon=Math.max(this.unlockedWeapon,e),this.rollAffixForWeapon(e),this.callbacks.onToast(`武器已解锁 // ${xt[e].name} · 按 ${this.loadout.indexOf(e)+1} 切换`,3500)}spawnEnemy(e){const t=typeof e=="string"?e:e&&e.type||"runner",n=!!(e&&typeof e=="object"&&e.elite),s=Ol[t];let a=this.spawnPoints[Math.floor(Math.random()*this.spawnPoints.length)].clone();for(let y=0;y<6&&a.distanceTo(this.player.position)<20;y++)a=this.spawnPoints[Math.floor(Math.random()*this.spawnPoints.length)].clone();a.x+=Mt(-2.5,2.5),a.z+=Mt(-2.5,2.5);const r=new ot;r.position.copy(a);const o=t==="phantom",c=new Pt({color:t==="boss"?3810332:2372152,emissive:s.color,emissiveIntensity:.8,metalness:.8,roughness:.34,transparent:o,opacity:1}),l=new Ze({color:s.color,toneMapped:!1,transparent:o,opacity:1}),h=new Pt({color:791576,metalness:.9,roughness:.28,transparent:o,opacity:1}),f=new Pt({color:2833216,emissive:s.color,emissiveIntensity:.16,metalness:.86,roughness:.3,transparent:o,opacity:1}),d=new Ze({color:16761421,toneMapped:!1,transparent:o,opacity:1}),g=Jm(t,{body:c,dark:h,glow:l,accent:f,warning:d}),v=this.difficulty,p={type:t,group:r,material:c,fadeMaterials:[c,l,h,f,d],health:s.health*(1+Math.max(0,this.wave-1)*(t==="boss"?.12:.085))*v.hp,maxHealth:0,speed:s.speed*(1+Math.min(.45,this.wave*.018)),damage:s.damage*(1+this.wave*.026)*v.damage,score:Math.round(s.score*v.score),radius:s.radius,name:s.name,attackCooldown:Mt(.4,1.3),spawnTime:.85,dead:!1,deathTimer:0,strafe:Math.random()>.5?1:-1,phase:Math.random()*Math.PI*2,hitTimer:0,healthBar:null,barFill:null,phased:!1,phaseTimer:Mt(1.4,2.8),fuse:0,chargeTimer:0,healTimer:0,slow:0,parts:g.dynamic,height:g.height,baseY:g.baseY,weakpoints:g.weakpoints};p.maxHealth=p.health,t==="boss"&&(p.bossPhase=1,p.p3Timer=0,p.p3Stationary=!1);const m=y=>{y.userData.enemy=p,y.isMesh&&(y.castShadow=!this.isTouch&&!this.lowPower,this.enemyHitMeshes.push(y)),y.children.forEach(m)};g.allMeshes.forEach(y=>{r.add(y),m(y)});const M=new ot,w=t==="boss"?3.2:1.35,x=new Q(new bn(w,.085),new Ze({color:1054744,transparent:!0,opacity:.85,depthTest:!0})),P=new Q(new bn(w,.055),new Ze({color:s.color,depthTest:!0}));P.position.z=.005,M.add(x,P),M.position.y=p.height+.35,M.visible=t==="boss",r.add(M),p.healthBar=M,p.barFill=P,p.barHalf=w/2;const S=new Ze({color:s.color,transparent:!0,opacity:.46,toneMapped:!1,depthWrite:!1}),R=new Q(new Fn(p.radius*1.2,.026,5,24),S);R.rotation.x=-Math.PI/2,R.position.y=.06;const L=new Q(new Fn(.2+p.height*.15,.016,5,20),S.clone());L.position.y=p.height*.84,L.rotation.x=Math.PI/2.6,r.add(R,L),p.crown=L,p.halo=R,n&&Ue.enemyV2&&(vg(p),p.halo.material.color.setHex(p.affixColor),p.halo.material.opacity=.72,p.crown.material.color.setHex(p.affixColor),p.crown.material.opacity=.85,this.callbacks.onAnnounce("精英单位 // "+p.affixDef.name,p.affixDef.desc,"ELITE // "+p.affixDef.short,2600)),r.scale.setScalar(.02),this.scene.add(r),this.enemies.push(p),this.spawnParticles(a.clone().add(new A(0,1.4,0)),s.color,t==="boss"?35:12,3.5)}playFootsteps(e){if(e.stun>0||e.spawnTime>0||!this.audio.enabled||e.group.position.distanceTo(this.player.position)>18)return;const t=["runner","phantom","falcon"].includes(e.type)?"light":["tank","turret","bomber","boss"].includes(e.type)?"heavy":"hover";this._footstepAt=this._footstepAt||{};const n=this.elapsed;n-(this._footstepAt[t]??-1)<.35||(this._footstepAt[t]=n,this.audio.footstep(t))}updateEnemies(e){const t=new A(this.player.position.x,0,this.player.position.z);this.enemySlow=Math.max(0,this.enemySlow-e);const n=this.enemySlow>0?.35:1;for(const s of this.enemies){if(s.crown&&(s.crown.rotation.z+=e*1.3),s.dead){s.deathTimer-=e,s.group.rotation.z+=e*2.4,s.group.scale.multiplyScalar(Math.max(.01,1-e*5)),s.group.position.y-=e*.8,s.deathTimer<=0&&(this.scene.remove(s.group),s.remove=!0);continue}Ue.enemyV2&&s.affixDef&&xg(s,e,this),s.phase+=e,s.hitTimer-=e,s.stun>0&&(s.stun-=e),s.material.emissiveIntensity=s.hitTimer>0?3.2:s.type==="boss"?1:.8,s.group.children.forEach(l=>{l.userData.spin&&(l.rotation.z+=l.userData.spin*e)});const a=s.parts;if(a&&(a.legs?.forEach((l,h)=>{l.rotation.x=Math.sin(s.phase*7+(h%2?Math.PI:0))*.34}),a.rotors?.forEach((l,h)=>{l.rotation.y+=e*(5+h*1.5)}),a.rings?.forEach((l,h)=>{l.userData.spin||(l.rotation.z+=e*(h%2?-.55:.55))}),a.shards?.forEach((l,h)=>{const f=l.userData.angle+s.phase*.65;l.position.x=Math.cos(f)*.85,l.position.z=Math.sin(f)*.55,l.position.y=l.userData.baseY+Math.sin(s.phase*2+h)*.12,l.rotation.y+=e*1.6}),a.wings?.forEach((l,h)=>{l.rotation.z=Math.sin(s.phase*5+h)*.22}),a.turrets?.forEach(l=>{l.rotation.y=Math.sin(s.phase*.8)*.32}),a.core&&a.core.scale.setScalar(1+Math.sin(s.phase*4.5)*.09)),s.spawnTime>0){s.spawnTime-=e;const l=bt(1-s.spawnTime/.85,.02,1);s.group.scale.setScalar(l);continue}if(s.group.scale.setScalar(1),s.type==="boss"&&Ue.enemyV2){const l=s.health/s.maxHealth>.66?1:s.health/s.maxHealth>.33?2:3;if(l!==s.bossPhase){s.bossPhase=l;const h={1:"直线弹幕",2:"召唤增援",3:"静滞减伤 · 机动增伤"}[l],f=l===3?"静止时减伤、移动时增伤——逼使其机动":"核心过载，召唤维生单元支援";this.callbacks.onAnnounce(`守望者 · P${l} // ${h}`,f,"WARDEN PHASE",2600)}s.bossPhase===3&&(s.p3Timer-=e,s.p3Timer<=0&&(s.p3Stationary=!s.p3Stationary,s.p3Timer=s.p3Stationary?3.2:2.4))}if(s.type==="phantom"&&(s.phaseTimer-=e,s.phaseTimer<=0&&(s.phased=!s.phased,s.phaseTimer=s.phased?1.05:2.5,s.fadeMaterials.forEach(l=>{l.opacity=s.phased?.16:1}),this.spawnParticles(s.group.position.clone().add(new A(0,1.2,0)),6087167,this.isTouch?4:9,2))),s.type==="bomber"&&s.fuse>0&&(s.fuse-=e,s.material.emissiveIntensity=1.4+Math.sin(s.phase*36)*1.4,Math.random()>.65&&this.spawnParticles(s.group.position.clone().add(new A(0,1.1,0)),16761421,2,1.4),s.fuse<=0)){this.detonateBomber(s);continue}const r=t.clone().sub(new A(s.group.position.x,0,s.group.position.z)),o=r.length();r.normalize(),s.group.rotation.y=Math.atan2(r.x,r.z)+Math.PI,s.attackCooldown-=e;let c=new A;if(s.type==="runner"||s.type==="phantom"||s.type==="falcon")o>1.45&&c.copy(r),o<1.85&&s.attackCooldown<=0&&(this.damagePlayer(s.damage,s.group.position),s.attackCooldown=s.type==="phantom"?.85:s.type==="falcon"?1.1:1,s.group.position.addScaledVector(r,.3));else if(s.type==="bomber")s.fuse<=0&&(o>2.7?c.copy(r):(s.fuse=1.2,this.audio.warning(),this.createPulseEffect(s.group.position.clone(),16757575,4.5)));else if(s.type==="turret")s.chargeTimer>0?(s.chargeTimer-=e,s.material.emissiveIntensity=2+Math.sin(s.phase*30)*1.4,s.chargeTimer<=0&&([-.05,.05].forEach(l=>this.fireEnemyProjectile(s,l,24,s.damage)),s.attackCooldown=2.4,this.audio.enemyShot())):o<46&&s.attackCooldown<=0&&(s.chargeTimer=.65);else if(s.type==="medic"){s.healTimer-=e;const l=15;o>l+4?c.copy(r):o<l-4&&c.copy(r).multiplyScalar(-.7);const h=new A(-r.z,0,r.x).multiplyScalar(s.strafe*.5);if(c.add(h),s.healTimer<=0){let f=null,d=6;for(const u of this.enemies){if(u===s||u.dead||u.type==="medic"||u.spawnTime>0||u.group.position.distanceTo(s.group.position)>11)continue;const g=u.maxHealth-u.health;u.health>u.maxHealth*.7||g>d&&(d=g,f=u)}if(f){if(f.health=Math.min(f.maxHealth,f.health+14),f.barFill&&f.healthBar.visible){const u=bt(f.health/f.maxHealth,0,1);f.barFill.scale.x=u,f.barFill.position.x=-(1-u)*(f.barHalf||.6)}this.createHealBeam(s.group.position.clone().add(new A(0,1.4,0)),f.group.position.clone().add(new A(0,(f.height||2)*.55,0))),s.healTimer=.9}}}else{const l=s.type==="drone"?13:s.type==="tank"?17:20;o>l+3?c.copy(r):o<l-3&&c.copy(r).multiplyScalar(-.7);const h=new A(-r.z,0,r.x).multiplyScalar(s.strafe*(s.type==="boss"?.45:.75));if(c.add(h),o<(s.type==="boss"?48:36)&&s.attackCooldown<=0)if(s.type==="boss"){const f=s.health<s.maxHealth*.5;f&&!s.enragedSpawned&&(s.enragedSpawned=!0,this.spawnEnemy("medic"),this.spawnEnemy("medic"),this.callbacks.onAnnounce("核心过载","守望者召唤维生单元支援","WARNING / REINFORCEMENTS",2200));for(let d=-2;d<=2;d++)this.fireEnemyProjectile(s,d*.105,17,s.damage);if(f||Math.random()>.45)for(let d=0;d<10;d++)this.fireEnemyProjectile(s,d/10*Math.PI*2,10,s.damage*.65,!0);s.attackCooldown=f?1.35:2.1}else s.type==="tank"?([-.08,0,.08].forEach(f=>this.fireEnemyProjectile(s,f,13,s.damage)),s.attackCooldown=2.25):(this.fireEnemyProjectile(s,Mt(-.035,.035),16,s.damage),s.attackCooldown=Mt(1.3,1.8))}if(Ue.enemyV2&&s.type==="boss"&&s.bossPhase===3&&s.p3Stationary&&c.multiplyScalar(.12),s.stun>0)s.velocity&&s.velocity.multiplyScalar(.6);else if(c.lengthSq()>0){const l=s.slow>0?s.slowMul||.5:1;c.normalize().multiplyScalar(s.speed*l*e*n),this.moveEnemy(s,c),s.velocity||(s.velocity=new A),s.velocity.copy(c).multiplyScalar(1/Math.max(e,.001)),Ue.audioV2&&this.playFootsteps(s)}else s.velocity&&s.velocity.multiplyScalar(.8);s.slow>0&&(s.slow-=e,s.material.emissiveIntensity=Math.max(s.material.emissiveIntensity||0,1.1)),s.baseY&&(s.group.position.y=s.baseY+Math.sin(s.phase*2.1)*.18),s.healthBar.quaternion.copy(this.camera.quaternion)}this._compact(this.enemies)}detonateBomber(e){const t=e.group.position.clone();e.dead=!0,e.deathTimer=.02,e.healthBar.visible=!1,this.enemyHitMeshes=this.enemyHitMeshes.filter(s=>s.userData.enemy!==e),this.spawnParticles(t.clone().add(new A(0,1,0)),16757575,this.isTouch?14:28,6),this.createPulseEffect(t,16752957,6),this.audio.explosion(),this.shake=Math.min(1.3,this.shake+.45);const n=t.distanceTo(this.player.position);n<5.5&&this.damagePlayer(e.damage*(1-n/5.5*.55),t)}addEnergy(e){const t=this.player;t.overdrive>0||(t.energy=Math.min(t.energyMax,t.energy+e*t.energyGain))}activateOverdrive(){const e=this.player;this.state!=="playing"||e.energy<e.energyMax||e.overdrive>0||(e.energy=0,e.overdrive=e.overdriveMax,e.pulseCooldown=Math.min(e.pulseCooldown,2),this.audio.overdrive(),this.createPulseEffect(e.position.clone(),16766044,15),this.callbacks.onAnnounce("核心超载","射速与伤害大幅提升 · 弹药无限","OVERDRIVE / ENGAGED",2200),this.unlockAchievement("overdrive"))}unlockAchievement(e){if(this.runAchievements.has(e))return;this.runAchievements.add(e);const t=ea.find(n=>n.id===e);t&&(this.audio.achievement(),this.callbacks.onAchievement?.(t))}emitDashWave(){const e=this.player;if(e.dashWave<=0)return;const t=e.position.clone();this.createPulseEffect(t,5568466,5.5),this.audio.pulse();for(const n of this.enemies)n.dead||n.phased||n.group.position.distanceTo(t)<5.5&&this.blastReaches(t,n)&&this.damageEnemy(n,e.dashWave*e.damageMultiplier,n.group.position.clone().sub(t).setY(0).normalize());for(const n of this.barrels)!n.dead&&n.group.position.distanceTo(t)<5.5&&this.damageBarrel(n,60,new A)}castAoe(e,t,n,s,a=0){const r=this.player;this.createPulseEffect(e.clone(),s,t),this.audio.pulse();for(const o of this.enemies)o.dead||o.phased||o.spawnTime>0||o.group.position.distanceTo(e)<=t&&this.blastReaches(e,o)&&(this.damageEnemy(o,n*r.damageMultiplier,o.group.position.clone().sub(e).setY(0).normalize()),a>0&&(o.stun=Math.max(o.stun||0,a)))}activateSkill(e){if(this.state!=="playing")return;const t=this.player.skills[e];if(!t||t.cooldown>0){this.audio.empty?.();return}const n=Eg[t.id];n&&(n(this),t.cooldown=t.max,this.audio.upgrade())}moveEnemy(e,t){const n=e.group.position,s=bt(n.x+t.x,-65,65);this.collides(s,n.z,e.radius*.7)?e.strafe*=-1:n.x=s;const a=bt(n.z+t.z,-65,65);this.collides(n.x,a,e.radius*.7)?e.strafe*=-1:n.z=a}fireEnemyProjectile(e,t,n,s,a=!1){const r=e.group.position.clone().add(new A(0,e.type==="boss"?3.1:e.type==="drone"?1.85:1.6,0));let o;a?o=new A(Math.sin(t),0,Math.cos(t)):(o=this.player.position.clone().sub(r).normalize(),o.applyAxisAngle(new A(0,1,0),t));const c=new Ze({color:e.type==="drone"?12872703:16738381,toneMapped:!1}),l=new Q(this.sharedProjectileGeometry,c);l.scale.setScalar(e.type==="boss"?1.8:1),l.position.copy(r),this.scene.add(l),this.projectiles.push({mesh:l,velocity:o.multiplyScalar(n),damage:s,life:5,source:e.group.position}),this.audio.enemyShot()}updateProjectiles(e){for(const t of this.projectiles){if(t.life-=e,t.homing){let r=null,o=46;for(const d of this.enemies){if(d.dead||d.phased||d.spawnTime>0)continue;const u=d.group.position.distanceTo(t.mesh.position);u<o&&(o=u,r=d)}if(r){const d=r.group.position.clone().add(new A(0,(r.height||2)*.5,0)).sub(t.mesh.position).normalize().multiplyScalar(t.velocity.length());t.velocity.lerp(d,Math.min(1,e*3.4))}const c=t.mesh.position.clone();t.mesh.position.addScaledVector(t.velocity,e),t.mesh.rotation.x+=e*14;const l=this.segmentBlocked(c,t.mesh.position);l&&t.mesh.position.copy(c);let h=null;for(const d of this.enemies)if(!(d.dead||d.phased)&&d.group.position.distanceTo(t.mesh.position)<d.radius+.9){h=d;break}const f=l||this.collides(t.mesh.position.x,t.mesh.position.z,.2)||Math.abs(t.mesh.position.x)>70||Math.abs(t.mesh.position.z)>70;(h||f||t.life<=0)&&(this.explodeRocket(t),t.life=0),t.life<=0&&(this.scene.remove(t.mesh),t.remove=!0);continue}const n=t.mesh.position.clone();t.mesh.position.addScaledVector(t.velocity,e),t.mesh.rotation.x+=e*8;const s=t.mesh.position,a=this.segmentBlocked(n,s);a&&(s.copy(n),t.life=0),!a&&s.distanceTo(this.player.position)<.65&&(this.damagePlayer(t.damage,t.source),t.life=0),(this.collides(s.x,s.z,.05)||Math.abs(s.x)>70||Math.abs(s.z)>70)&&(t.life=0),t.life<=0&&(this.spawnParticles(s,16737877,4,1.5),this.scene.remove(t.mesh),t.remove=!0)}this._compact(this.projectiles)}updatePlayer(e){const t=this.player;t.dashCooldown=Math.max(0,t.dashCooldown-e),t.pulseCooldown=Math.max(0,t.pulseCooldown-e),t.invulnerable=Math.max(0,t.invulnerable-e),t.overdrive=Math.max(0,t.overdrive-e);for(const B of t.skills)B.cooldown=Math.max(0,B.cooldown-e);t.nanite>0&&(t.health=Math.min(t.maxHealth,t.health+t.nanite*e)),t.medTime>0&&(t.medTime-=e,t.health=Math.min(t.maxHealth,t.health+t.medRate*e)),t.skillBuff>0&&(t.skillBuff-=e,t.skillBuff<=0&&(t.skillDmg=1,t.skillFire=1)),t.lastDamage+=e,t.lastDamage>t.shieldDelay&&t.shield<t.maxShield&&(t.shield=Math.min(t.maxShield,t.shield+t.shieldRegen*e)),this.weaponCooldown=Math.max(0,this.weaponCooldown-e),this.switchTimer=Math.max(0,this.switchTimer-e),this.muzzleTimer=Math.max(0,this.muzzleTimer-e),this.muzzleLight.intensity=this.muzzleTimer>0?5:0,this.reloadTimer>0&&(this.reloadTimer-=e,this.reloadTimer<=0&&this.finishReload());const n=(this.keys.KeyW?1:0)-(this.keys.KeyS?1:0)-(this.touchMove?.y||0),s=(this.keys.KeyD?1:0)-(this.keys.KeyA?1:0)+(this.touchMove?.x||0),a=new A(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),r=new A(Math.cos(this.yaw),0,-Math.sin(this.yaw)),o=a.multiplyScalar(n).add(r.multiplyScalar(s));o.lengthSq()>1&&o.normalize();const c=(this.keys.ShiftLeft||this.keys.ShiftRight)&&n>0,l=t;l.grounded||(l.jumpVel-=21*e,l.jumpY+=l.jumpVel*e,l.jumpY<=0&&(l.jumpY=0,l.jumpVel=0,l.grounded=!0,this.landKick=.45)),this.landKick=Math.max(0,this.landKick-e*2.2),l.slideTime>0&&(l.slideTime-=e),l.slideCooldown=Math.max(0,l.slideCooldown-e);const h=l.slideTime>0;this.sprintBlend=Ct(this.sprintBlend,c?1:0,1-Math.exp(-e*8)),this.slideBlend=Ct(this.slideBlend,h?1:0,1-Math.exp(-e*12)),this.aimBlend=Ct(this.aimBlend,this.aiming?1:0,1-Math.exp(-e*11)),this.hitComboTimer>0&&(this.hitComboTimer-=e,this.hitComboTimer<=0&&(this.hitCombo=0));let f=6.6*t.speedMultiplier*(1+this.sprintBlend*.5)*(1-this.aimBlend*.28)*(t.overdrive>0?1.2:1)*(h?1.35:1);h&&l.slideDir&&o.copy(l.slideDir),t.dashTime>0&&(t.dashTime-=e,f=25,o.lengthSq()===0&&o.copy(new A(-Math.sin(this.yaw),0,-Math.cos(this.yaw))),Math.random()>.4&&this.spawnParticles(t.position.clone().add(new A(0,-.7,0)),5568466,1,.7)),this.dashActive&&t.dashTime<=0&&this.emitDashWave(),this.dashActive=t.dashTime>0;const d=o.multiplyScalar(f);t.velocity.lerp(d,1-Math.exp(-e*(t.dashTime>0?25:12))),this.movePlayer(t.velocity.x*e,t.velocity.z*e);const u=t.velocity.length()>.4,g=u?Math.sin(this.elapsed*(c?14:10))*(.025+this.sprintBlend*.02)*(1-this.slideBlend*.6):0,v=1.7+l.jumpY-this.slideBlend*.72-this.landKick*.12;if(this.camera.position.set(t.position.x,v+g,t.position.z),this.shake>0){this.shake=Math.max(0,this.shake-e*2.5);const B=.08*og();this.camera.position.x+=Mt(-1,1)*this.shake*B,this.camera.position.y+=Mt(-1,1)*this.shake*B}this.updateAimAssist(e),this.camera.rotation.set(this.pitch,this.yaw,0);const p=72+this.sprintBlend*6+this.slideBlend*8,m=this.currentScopeType==="sniper"?this.sniperZoom:this.currentScopeType==="scope5"?5:this.currentScopeType==="scope3"?3:1.25,M=Ct(p,Math.max(16,p/m),this.aimBlend);this.camera.fov=Ct(this.camera.fov,M,1-Math.exp(-e*10)),this.camera.updateProjectionMatrix();const w=13*(Ue.feelV2?Ue.feelRecoilRecover/100:1)*(this.weaponState[this.weaponIndex].recoilRecoverMul||1);this.weaponRecoil=Ct(this.weaponRecoil,0,1-Math.exp(-e*w)),this.updateWeaponParts(e),this.isBoard&&this.weaponState[this.weaponIndex].ammo===0&&!t.overdrive&&this.reloadTimer<=0&&this.reload(),this.updateDemoAim(e);const x=this.isTouch&&innerHeight>innerWidth,P=Ct(x?.17:.36,0,this.aimBlend),S=Ct(x?-.28:-.31,-.2,this.aimBlend),R=this.elapsed*(6+this.sprintBlend*3),L=u?Math.sin(R)*(.012+this.sprintBlend*.024)*(1-this.aimBlend):0,y=u?Math.abs(Math.cos(R))*(.008+this.sprintBlend*.02)*(1-this.aimBlend):0,E=this.sprintBlend*.11*(1-this.aimBlend),I=this.slideBlend*.16;this.weaponRoot.position.x=Ct(this.weaponRoot.position.x,P+L,1-Math.exp(-e*12)),this.weaponRoot.position.y=Ct(this.weaponRoot.position.y,S+g*.6-E-I+y,1-Math.exp(-e*12)),this.weaponRoot.position.z=-.62+this.weaponRecoil*.13+this.aimBlend*.08,this.weaponRoot.rotation.x=this.weaponRecoil*.1+(this.reloadTimer>0?Math.sin(this.reloadTimer*4)*.35:0)+this.sprintBlend*.2*(1-this.aimBlend)+this.slideBlend*.3,this.weaponRoot.rotation.y=this.slideBlend*.12,this.weaponRoot.rotation.z=(u?Math.sin(this.elapsed*5)*.012:0)+this.sprintBlend*.05+this.slideBlend*.16;const k=document.getElementById("red-dot");k&&(k.style.opacity=String(this.aimBlend)),this.viewHands&&(this.viewHands.position.y=Ct(this.viewHands.position.y,-this.slideBlend*.1-this.sprintBlend*.04,1-Math.exp(-e*10))),this.firing&&(xt[this.weaponIndex].auto||this.cheats.auto||!this.shotThisHold)&&this.fireWeapon(),this.comboTimer>0?this.comboTimer-=e:this.combo=Ct(this.combo,1,e*3)}pickDemoTarget(e){let t=null,n=1/0;const s=new A;for(const a of this.enemies){if(a.dead||a.phased||(this.getAimPoint(a,s),!this.hasLineOfSight(e,s)))continue;const r=s.distanceTo(e);r<n&&(n=r,t=s.clone())}return t}updateDemoAim(e){if(!this.demoMode||this.state!=="playing")return;const t=this.camera.getWorldPosition(new A),n=this.pickDemoTarget(t);if(!n){this.firing=!1;return}const s=n.x-t.x,a=n.z-t.z;let o=Math.atan2(-s,-a)-this.yaw;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;this.yaw+=o*Math.min(1,e*3.4);const c=Math.hypot(s,a);this.pitch=Ct(this.pitch,Math.atan2(n.y-t.y,c),Math.min(1,e*3)),this.firing=!0}handleCheatInput(e){if(e.code==="Backquote"){e.preventDefault?.(),this.toggleCheatConsole();return}const t=e.key;if(t&&t.length===1&&/[a-zA-Z]/.test(t)){this.cheatBuffer=(this.cheatBuffer+t.toLowerCase()).slice(-26);for(const n in Fl)if(this.cheatBuffer.endsWith(n)){this.applyCheat(n),this.cheatBuffer="";break}}this.konami.push(e.code),this.konami.length>12&&this.konami.shift(),this.konami.slice(-kl.length).join(",")===kl.join(",")&&(this.konami=[],this.toggleCheatConsole(!0),this.cheatToast("作弊码清单已展开 // ↑↑↓↓←→←→BA 或输入 HELP"))}markCheated(){this.cheated=!0,this.refreshCheatBadge()}applyCheat(e){const t=Fl[e];if(!t)return;if(t==="help"){this.toggleCheatConsole(!0),this.cheatToast(jn.help);return}if(t==="purge"){this.cheatPurge(),this.cheatToast(jn.purge+" 已执行"),this.markCheated();return}if(t==="arsenal"){this.loadout=xt.map((s,a)=>a),this.unlockedWeapon=xt.length-1,this.updateHUD(!0),this.cheatToast(jn.arsenal),this.markCheated();return}if(t==="recharge"){this.cheatRecharge(),this.cheatToast(jn.recharge),this.markCheated();return}if(t==="overbound"){Object.keys(this.cheats).forEach(s=>{this.cheats[s]=!0}),this.cheatToast(jn.overbound),this.refreshCheatBadge(),this.refreshCheatButtons(),this.markCheated();return}if(t==="standdown"){Object.keys(this.cheats).forEach(s=>{this.cheats[s]=!1}),this.firing=!1,this.aimTarget=null,this.updateLockReticle(null),this.cheatToast(jn.standdown),this.refreshCheatBadge(),this.refreshCheatButtons();return}const n=this.cheats[t];this.cheats[t]=!n,t==="auto"&&n&&(this.firing=!1),t==="lock"&&n&&(this.aimTarget=null,this.updateLockReticle(null)),this.cheats[t]&&this.markCheated(),this.cheatToast((this.cheats[t]?"已激活 // ":"已解除 // ")+jn[t]),this.refreshCheatBadge(),this.refreshCheatButtons()}getAimPoint(e,t=new A){const n=e.weakpoints&&e.weakpoints[0];if(n&&e.spawnTime<=0&&e.group.scale.x>.9)return n.updateWorldMatrix(!0,!1),n.getWorldPosition(t);const s=e.height||2.2,a=e.baseY||0,r=e.group.position;return t.set(r.x,r.y+Math.max(a+.45,s*.7),r.z)}hasLineOfSight(e,t,n=.4){const s=t.clone().sub(e),a=s.length();return a<=n?!0:(s.normalize(),this.losRay.set(e,s),this.losRay.far=a-n,this.losRay.intersectObjects(this.worldColliders,!1).length===0)}blastReaches(e,t){const n=e.clone();return n.y=Math.max(.9,n.y+.6),this.hasLineOfSight(n,this.getAimPoint(t),.9)}segmentBlocked(e,t,n=.12){const s=t.clone().sub(e),a=s.length();return a<=n?!1:(s.normalize(),this.losRay.set(e,s),this.losRay.far=a,this.losRay.intersectObjects(this.worldColliders,!1).length>0)}findTolerantHit(e,t,n){let s=null,a=1/0;const r=new A,o=new A;for(const c of this.enemies){if(c.dead||c.phased||c.spawnTime>0)continue;this.getAimPoint(c,r),o.copy(r).sub(e);const l=o.dot(t);if(l<=0||l>n)continue;const h=o.addScaledVector(t,-l).length(),f=(c.radius||.6)*.45+.07;h>f||this.hasLineOfSight(e,r)&&l<a&&(a=l,s=c)}return s}applyXray(){const e=!!this.cheats.wall;if(this.xrayState!==e){this.xrayState=e;for(const t of this.enemies)t.fadeMaterials.forEach(n=>{n.depthTest=!e,n.needsUpdate=!0}),t.healthBar&&(t.healthBar.children.forEach(n=>{n.material.depthTest=!e,n.material.needsUpdate=!0}),t.healthBar.renderOrder=e?999:0)}for(const t of this.enemies)t.dead||!t.healthBar||(t.healthBar.visible=e||t.health<t.maxHealth)}updateAimAssist(e){const t=this.player.aimAssistLevel,n=Pl();if(!t||n<=0||this.cheats.lock||this.cheats.auto||this.demoMode)return;const s=this.camera.getWorldPosition(new A),a=this.camera.getWorldDirection(new A),r=ji.degToRad(10+3*(t-1))*n,o=(34+6*(t-1))*(.5+n*.5);let c=null,l=1/0;const h=new A;for(const x of this.enemies){if(x.dead||x.phased||x.spawnTime>0||(this.getAimPoint(x,h),!this.hasLineOfSight(s,h)))continue;const P=h.clone().sub(s);if(P.length()>o)continue;P.normalize();const R=Math.acos(bt(a.dot(P),-1,1));R<r&&R<l&&(l=R,c=h.clone())}if(!c)return;const f=c.x-s.x,d=c.y-s.y,u=c.z-s.z,g=Math.atan2(-f,-u),v=Math.atan2(d,Math.hypot(f,u));let p=g-this.yaw;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;const m=v-this.pitch,M=1-Math.exp(-e*6),w=ji.degToRad(14)*e;this.yaw+=bt(p*M,-w,w),this.pitch+=bt(m*M,-w,w)}updateCheats(e){const t=this.cheats;if(this.applyXray(),t.lock||t.auto){const n=this.camera.getWorldPosition(new A),s=this.camera.getWorldDirection(new A),a=this.pickCheatTarget(n,s);if(this.aimTarget=a,a){const r=this.getAimPoint(a),o=r.x-n.x,c=r.y-n.y,l=r.z-n.z;let f=Math.atan2(-o,-l)-this.yaw;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;const d=Math.abs(f),u=9+Math.min(12,d*4);this.yaw+=f*(1-Math.exp(-e*u));const g=Math.hypot(o,l),p=Math.atan2(c,g)-this.pitch,m=9+Math.min(12,Math.abs(p)*4);if(this.pitch+=p*(1-Math.exp(-e*m)),this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.updateMatrixWorld(!0),t.auto){const M=this.camera.getWorldDirection(new A),w=r.clone().sub(n).normalize(),x=Math.acos(bt(M.dot(w),-1,1))<ji.degToRad(3);this.firing=x&&this.hasLineOfSight(n,r)}}else t.auto&&(this.firing=!1);this.updateLockReticle(a)}else this.aimTarget=null,this.updateLockReticle(null);if(this.cheatToastTimer>0&&(this.cheatToastTimer-=e,this.cheatToastTimer<=0)){const n=document.getElementById("cheat-toast");n&&n.classList.remove("show")}}pickCheatTarget(e,t=null){const n=[],s=t?t.clone().normalize():null;for(const r of this.enemies){if(r.dead||r.phased)continue;const o=this.getAimPoint(r),c=o.distanceTo(e);if(c>95||!this.hasLineOfSight(e,o))continue;let l=0;if(s){const u=o.clone().sub(e).normalize();l=Math.acos(bt(s.dot(u),-1,1))}const h=l<Math.PI*.5,f=r.health/r.maxHealth,d=l*6+c*.12+(r.spawnTime>0?6:0)-(1-f)*5+(h?0:40);n.push({enemy:r,dist:c,score:d})}if(!n.length)return null;n.sort((r,o)=>r.score-o.score);const a=this.aimTarget;if(a&&!a.dead&&!a.phased){const r=n.find(o=>o.enemy===a);if(r&&r.score<=n[0].score+5)return a}return n[0].enemy}updateLockReticle(e){const t=document.getElementById("lock-reticle");if(!t)return;if(!e){t.classList.remove("show");return}const n=this.getAimPoint(e).project(this.camera);if(n.z>1){t.classList.remove("show");return}t.style.left=`${(n.x*.5+.5)*innerWidth}px`,t.style.top=`${(-n.y*.5+.5)*innerHeight}px`,t.classList.add("show")}cheatPurge(){for(const e of this.enemies)e.dead||this.damageEnemy(e,99999,new A(0,1,0),{critical:!0,critRoll:!0});this.spawnParticles(this.camera.getWorldPosition(new A),16731501,26,5),this.audio.explosion(),this.shake=Math.min(1.3,this.shake+.5)}cheatRecharge(){this.player.health=this.player.maxHealth,this.player.shield=this.player.maxShield,this.player.energy=this.player.energyMax;for(let e=0;e<xt.length;e++)this.weaponState[e].ammo=this.magSize(e),this.weaponState[e].reserve=xt[e].reserve,this.weaponState[e].firstShotUsed=!1;this.updateHUD(!0)}refreshCheatBadge(){const e=document.getElementById("cheat-badge");if(!e)return;const t=Object.keys(this.cheats).filter(s=>this.cheats[s]);if(t.length===0){e.classList.remove("show");return}const n=this.cheated?' <em class="unranked">非正规对局 // UNRANKED</em>':"";e.innerHTML="<b>越界协议 // OVERBOUND</b>"+n+t.map(s=>`<span>${bg[s]}</span>`).join(""),e.classList.add("show")}toggleCheatConsole(e){const t=document.getElementById("cheat-console");if(!t)return;const n=e!==void 0?e:!t.classList.contains("active");t.classList.toggle("active",n),n&&this.refreshCheatButtons()}refreshCheatButtons(){const e=document.getElementById("cheat-buttons");e&&e.querySelectorAll("[data-cheat-key]").forEach(t=>{const n=t.dataset.cheatKey;t.classList.toggle("active",!!this.cheats[n])})}cheatToast(e){this.cheatToastTimer=2.4;const t=document.getElementById("cheat-toast");t&&(t.textContent=e,t.classList.add("show"))}movePlayer(e,t){const n=this.player.position,s=bt(n.x+e,-66.5,66.5);this.collides(s,n.z,.48)||(n.x=s);const a=bt(n.z+t,-66.5,66.5);this.collides(n.x,a,.48)||(n.z=a)}collides(e,t,n){return this.obstacles.some(s=>e+n>s.minX&&e-n<s.maxX&&t+n>s.minZ&&t-n<s.maxZ)}visualKickFor(e){return e.id==="shotgun"?1:e.id==="rail"?1.25:e.id==="arc"?.45:.32}controlPitchFor(e){return e.id==="shotgun"?.025:e.id==="rail"?.018:.004}applyVisualRecoil(e){const t=this.visualKickFor(e)*(Ue.feelVisualRecoil/100);this.weaponRecoil=Math.min(1.5,this.weaponRecoil+t)}applyControlRecoil(e){const t=this.controlPitchFor(e)*(Ue.feelControlRecoil/100);this.pitch=bt(this.pitch+t,-1.45,1.45)}fireWeapon(){if(this.state!=="playing"||this.weaponCooldown>0||this.reloadTimer>0||this.switchTimer>0||this.player.dashTime>0)return;const e=xt[this.weaponIndex],t=this.weaponState[this.weaponIndex],n=this.player,s=n.overdrive>0,a=this.camera.getWorldPosition(new A),r=this.camera.getWorldDirection(new A),o=s||this.cheats.ammo;if(t.ammo<=0&&!o){this.audio.empty(),this.weaponCooldown=.25,this.shotThisHold=!0,this.reload();return}o||(t.ammo-=1),this.shotsFired+=1,this.shotThisHold=!0;let c=n.fireRateMultiplier*(s?1.6:1);if(n.adrenaline&&n.health<n.maxHealth*.4&&(c*=1.3),this.weaponCooldown=1/(e.fireRate*c*n.skillFire),Ue.affixV2&&t.burst>0&&(this._shotInBurst=(this._shotInBurst||0)+1,this._shotInBurst>=t.burst&&(this.weaponCooldown=Math.max(this.weaponCooldown,.16),this._shotInBurst=0)),Ue.feelV2?(this.applyVisualRecoil(e),this.applyControlRecoil(e)):(this.weaponRecoil=Math.min(1.5,this.weaponRecoil+this.visualKickFor(e)),this.pitch=bt(this.pitch+this.controlPitchFor(e),-1.45,1.45)),e.rocket){this.audio.shot("rocket"),this.fireRocket(r,e.damage*this.player.damageMultiplier*(s?1.5:1));return}if(this.muzzleTimer=.055*(Ue.feelV2?Ue.feelMuzzle/100:1),this.audio.shot(e.id),this.isTouch){const u=this.getAimAssist(a,r);u&&r.copy(u)}else if(this.player.aimAssistLevel>0){const u=this.getAimAssist(a,r,this.player.aimAssistLevel);u&&r.copy(u)}let l=!1,h=!1,f="normal";const d=Ue.affixV2&&t.firstShotMul&&t.firstShotMul!==1&&!t.firstShotUsed;d&&(t.firstShotUsed=!0);for(let u=0;u<e.pellets;u++){const g=r.clone(),v=e.spread*(this.aiming?.45:1)*(t.spreadMul||1);g.x+=Mt(-v,v),g.y+=Mt(-v,v),g.z+=Mt(-v,v),g.normalize(),this.raycaster.set(a,g),this.raycaster.far=e.range;const p=this.raycaster.intersectObjects(this.worldColliders,!1),m=p.length?p[0].distance:e.range;let M=this.raycaster.intersectObjects(this.enemyHitMeshes,!1).filter(R=>{const L=R.object.userData.enemy;return L&&!L.dead&&!L.phased&&R.distance<m});if(!M.length&&!e.rocket){const R=this.findTolerantHit(a,g,m);if(R){const L=this.getAimPoint(R).clone();M=[{object:{userData:{enemy:R,critical:!!R.weakpoints?.length}},point:L,distance:a.distanceTo(L),tolerant:!0}]}}const w=this.raycaster.intersectObjects(this.barrelMeshes,!1).filter(R=>{const L=R.object.userData.barrel;return L&&!L.dead&&R.distance<m}),x=M.length?M[0].distance:1/0,P=w.length?w[0].distance:1/0;let S=a.clone().addScaledVector(g,m);if(p.length&&(S=p[0].point),P<m&&P<=x)S=w[0].point,this.damageBarrel(w[0].object.userData.barrel,e.damage*this.player.damageMultiplier*(s?1.5:1),g),this.spawnParticles(S,16753226,3,1.3);else if(M.length){l=!0;const R=[];for(const L of M){const y=L.object.userData.enemy;if(R.includes(y))continue;R.push(y);const E=L.object.userData.critical;let I=Math.random()<n.critChance+(e.critBonus||0);n.critProtocol&&this.shotsFired>0&&this.shotsFired%7===0&&(I=!0);const k=d?t.firstShotMul:1,B=e.damage*n.damageMultiplier*(s?1.5:1)*n.skillDmg*(E?1.65*(1+(n.weakpointBonus||0)):1)*(I?n.critMultiplier:1)*k;this.mission?.id==="headshot"&&L.object.userData.critical&&this.addMissionProgress();const K=!!(e.frost||e.chain),q=this.damageEnemy(y,B,g,{critical:!!(E||I),critRoll:I,element:K}),Y=q?"kill":K?"element":E||I?"critical":"normal";if(Nl[Y]>Nl[f]&&(f=Y),e.chain&&this.chainLightning(y,L.point,B,e.chain+n.chainBonus,new Set(R)),e.frost?(y.slow=Math.max(y.slow||0,e.slowDuration*(n.frostDuration||1)),y.slowMul=Math.max(.2,e.slowStrength*(n.frostSlow||1)),this.spawnParticles(L.point,10479871,5,1.6)):Ue.affixV2&&t.frostOnHit&&(y.slow=Math.max(y.slow||0,t.frostDur||.4),y.slowMul=Math.max(.2,.5),this.spawnParticles(L.point,10479871,5,1.6)),h=h||q,!e.pierce){S=L.point;break}}this.spawnParticles(S,Ue.feedbackV2?wg[f]:9437168,e.id==="rail"?10:4,2.2)}else p.length&&this.spawnParticles(S,7055e3,3,1.3);(u===0||e.id==="shotgun")&&this.createTracer(a,S,e.id==="rail"?7523071:e.id==="shotgun"?16757860:e.id==="arc"?8251647:7471067,e.id==="rail"?.22:.07)}l?(this.missStreak=0,this.shotsHit+=1,this.addEnergy(1.4),Ue.feedbackV2?f==="critical"?this.audio.critHit():f==="element"?this.audio.elementHit():f!=="kill"&&this.audio.hit():this.audio.hit(),this.callbacks.onHit(Ue.feedbackV2?{kill:h,kind:f,critical:f==="critical",element:f==="element"}:h)):this.missStreak=Math.min(9,this.missStreak+1)}fireRocket(e,t){const n=this.camera.getWorldPosition(new A).addScaledVector(e,1),s=new Q(this.sharedProjectileGeometry,new Ze({color:16747069,toneMapped:!1}));s.scale.setScalar(1.9),s.position.copy(n),this.scene.add(s),this.projectiles.push({mesh:s,velocity:e.clone().multiplyScalar(36),damage:t,aoe:xt[4].aoe,life:4.5,homing:!0,rocket:!0,source:n.clone()})}explodeRocket(e){const t=e.mesh.position.clone();this.scene.remove(e.mesh);const n=e.aoe;this.spawnParticles(t,16742973,this.isTouch?16:30,6),this.createPulseEffect(t,16747069,n),this.audio.explosion(),this.shake=Math.min(1.3,this.shake+.4);let s=0;for(const a of this.enemies){if(a.dead||a.phased)continue;const r=a.group.position.distanceTo(t);r<n+a.radius&&this.blastReaches(t,a)&&this.damageEnemy(a,e.damage*(1-r/(n+a.radius)*.4),t.clone().sub(a.group.position).setY(0).normalize())&&(s+=1)}for(const a of this.barrels)!a.dead&&a.group.position.distanceTo(t)<n+1&&this.damageBarrel(a,999,new A);s>0&&this.unlockAchievement("hive")}damageBarrel(e,t,n){if(!e.dead){if(e.health-=t,e.health<=0){this.explodeBarrel(e);return}e.flash=.12,e.bodyMaterial&&(e.bodyMaterial.emissiveIntensity=2.4)}}explodeBarrel(e){if(e.dead)return;e.dead=!0;const t=e.group.position.clone();e.group.removeFromParent(),this.barrelMeshes=this.barrelMeshes.filter(a=>a.userData.barrel!==e),this.obstacles=this.obstacles.filter(a=>a!==e.box),this.spawnParticles(t.clone().add(new A(0,.8,0)),16753226,this.isTouch?18:34,7),this.createPulseEffect(t,16742973,6),this.audio.explosion(),this.shake=Math.min(1.4,this.shake+.5);const n=5.5;let s=0;for(const a of this.enemies){if(a.dead)continue;const r=a.group.position.distanceTo(t);r<n+a.radius&&this.blastReaches(t,a)&&this.damageEnemy(a,120*(1-r/(n+a.radius)*.5),t.clone().sub(a.group.position).setY(0).normalize())&&(s+=1)}t.distanceTo(this.player.position)<4.5&&this.damagePlayer(34*(1-t.distanceTo(this.player.position)/4.5*.6),t);for(const a of this.barrels)!a.dead&&a!==e&&a.group.position.distanceTo(t)<4.5&&this.damageBarrel(a,999,new A);this.mission?.id==="barrel"&&s>0&&this.addMissionProgress(s),s>=2&&this.unlockAchievement("barrel")}createHealBeam(e,t){const n=new St().setFromPoints([e,t]),s=new Zi({color:7077808,transparent:!0,opacity:1,blending:sn,depthWrite:!1,toneMapped:!1}),a=new qs(n,s);this.scene.add(a),this.tracers.push({line:a,life:.25,maxLife:.25})}updateBarrels(e){for(const t of this.barrels)t.dead||t.flash<=0||(t.flash-=e,t.flash<=0&&t.bodyMaterial&&(t.bodyMaterial.emissiveIntensity=.5))}chainLightning(e,t,n,s,a){if(s<=0)return 0;let r=t.clone(),o=0;for(let c=0;c<s;c++){let l=null,h=11;for(const d of this.enemies){if(d.dead||d.phased||a.has(d))continue;const u=d.group.position.distanceTo(r);u>=h||!this.hasLineOfSight(r,this.getAimPoint(d),.7)||(h=u,l=d)}if(!l)break;a.add(l);const f=l.group.position.clone().add(new A(0,l.height*.5,0));this.createArc(r,f,8251647),this.damageEnemy(l,n*Math.pow(.72,c+1)*this.player.chainDamage,f.clone().sub(r).normalize()),r=f,o+=1}return o>=3&&this.unlockAchievement("arc-chain"),o}createArc(e,t,n){const s=[];for(let l=0;l<=6;l++){const h=e.clone().lerp(t,l/6);l>0&&l<6&&h.add(new A(Mt(-.35,.35),Mt(-.35,.35),Mt(-.35,.35))),s.push(h)}const r=new St().setFromPoints(s),o=new Zi({color:n,transparent:!0,opacity:1,blending:sn,depthWrite:!1,toneMapped:!1}),c=new qs(r,o);this.scene.add(c),this.tracers.push({line:c,life:.18,maxLife:.18})}getAimAssist(e,t,n=0){const s=Pl();if(s<=0)return null;const r=((this.isBoard?.13:.08)+n*.02)*s,c=((this.isBoard?46:32)+n*6)*(.5+s*.5);let l=null,h=r;for(const f of this.enemies){if(f.dead||f.spawnTime>0||f.phased)continue;const d=this.getAimPoint(f);if(!this.hasLineOfSight(e,d))continue;const u=d.sub(e);if(u.length()>c)continue;u.normalize();const v=Math.acos(bt(t.dot(u),-1,1));v<h&&(h=v,l=u)}return l}damageEnemy(e,t,n,s={}){if(e.dead)return!1;let a=t;this.player.executeBonus>1&&e.health/e.maxHealth<this.player.executeThreshold&&(a*=this.player.executeBonus),s.critRoll&&(this.critCount+=1,this.critCount>=10&&this.unlockAchievement("crit-10")),this.mission?.id==="crit"&&s.critRoll&&this.addMissionProgress(),this.mission?.id==="combo"&&this.hitCombo>=this.mission.target&&this.addMissionProgress(this.mission.target),Ue.enemyV2&&e.affixDef&&(a=_g(e,a,s)),Ue.enemyV2&&e.type==="boss"&&e.bossPhase===3&&(a*=e.p3Stationary?.6:1.4),e.health-=a,this.hitCombo=(this.hitCombo||0)+1,this.hitComboTimer=3.2+(this.player.comboHold||0),[10,25,50,100].includes(this.hitCombo)&&(this.callbacks.onAnnounce?.(`${this.hitCombo} 连击`,"火力链条稳定 · 保持压制","COMBO CHAIN",1500),this.audio.achievement()),this.hitStop=Math.max(this.hitStop||0,s.critical?.05:.022),this.shake=Math.min(1.2,this.shake+(s.critical?.2:.07)),e.hitTimer=.07;const r=e.health<e.maxHealth;e.healthBar.visible=e.type==="boss"||r;const o=bt(e.health/e.maxHealth,0,1);e.barFill.scale.x=o,e.barFill.position.x=-(1-o)*(e.barHalf||.6);const c=e.health<=0,l=Ue.feedbackV2?c?"kill":s.element?"element":s.critical?"critical":"normal":"normal";return this.showDamageNumber(e,a,!!s.critical,c,l),c?(this.killEnemy(e,n),!0):!1}showDamageNumber(e,t,n,s,a="normal"){const r=this.callbacks.onDamageNumber;if(!r)return;const o=e.group.position.clone().add(new A(Mt(-.3,.3),e.height*.6,0));o.project(this.camera),!(o.z<-1||o.z>1)&&r({amount:Math.round(t),x:(o.x*.5+.5)*innerWidth,y:(-o.y*.5+.5)*innerHeight,critical:n,kill:s,kind:a,combo:this.hitCombo||0})}killEnemy(e,t=new A){if(e.dead)return;e.dead=!0,e.deathTimer=e.type==="boss"?1.4:.5,e.healthBar.visible=!1,this.enemyHitMeshes=this.enemyHitMeshes.filter(o=>o.userData.enemy!==e),this.kills+=1,this.combo=Math.min(4,this.combo+(e.type==="boss"?1:.2)),this.comboTimer=4+(this.player.comboHold||0),this.comboPeak=Math.max(this.comboPeak,this.combo),this.addEnergy(6),this.unlockAchievement("first-blood"),this.combo>=2.5&&this.unlockAchievement("combo-master"),e.type==="bomber"&&this.unlockAchievement("defuser"),e.type==="medic"&&this.unlockAchievement("medic-down"),e.type==="falcon"&&(this.falconKills=(this.falconKills||0)+1,this.falconKills>=8&&this.unlockAchievement("falconer")),e.slow>0&&(this.frostKills=(this.frostKills||0)+1,this.frostKills>=15&&this.unlockAchievement("frostbite"));const n=Math.floor(e.score*this.combo*(1+(this.player.scoreBonus||0)));this.score+=n,this.credits+=Math.round(e.score*.12),this.mode==="gauntlet"&&(this.waveTimeLeft=Math.min(90,this.waveTimeLeft+2.5)),this.mission?.id==="kills"&&this.addMissionProgress(),this.player.health=Math.min(this.player.maxHealth,this.player.health+this.player.killHeal),this.player.shield=Math.min(this.player.maxShield,this.player.shield+this.player.killHeal*.75+this.player.killShield),this.player.siphon&&(this.player.pulseCooldown=Math.max(0,this.player.pulseCooldown-1.2));const s=e.group.position.clone().add(new A(0,e.type==="boss"?3:1.1,0));this.spawnParticles(s,Ol[e.type].color,e.type==="boss"?70:20,e.type==="boss"?8:4.5),e.type==="boss"?(this.audio.explosion(),this.shake=2,this.createPulseEffect(s,16742229,16)):this.audio.kill(),this.callbacks.onKill(e.name,n);const a=this.weaponState.reduce((o,c)=>o+c.ammo+c.reserve,0),r=(this.mode==="training"?.35:.24)*this.difficulty.drop;if(e.type!=="boss"&&(Math.random()<r||a<25)){const o=Math.random();let c=this.player.health<this.player.maxHealth*.55&&o<.5||o<.34?"health":o<.67?"shield":"ammo";a<25&&(c="ammo"),this.spawnPickup(e.group.position,c)}}magSize(e){const t=xt[e],n=this.weaponState[e];return Math.round(t.magazine*(n&&n.magMul?n.magMul:1))}rollAffixForWeapon(e){const t=this.weaponState[e];if(t){if(Ue.affixV2){if(!t.affixId){const n=pg();t.affixId=n?n.id:null,n&&n.modify&&n.modify(t)}}else t.affixId=null,t.auto=!0,t.burst=0,t.firstShotMul=1,t.magMul=1,t.reloadMul=1,t.spreadMul=1,t.recoilRecoverMul=1,t.frostOnHit=!1,t.frostDur=0;t.ammo=this.magSize(e),t.reserve=xt[e].reserve,t.firstShotUsed=!1}}reload(){if(this.state!=="playing"||this.reloadTimer>0||this.switchTimer>0)return;const e=xt[this.weaponIndex],t=this.weaponState[this.weaponIndex];t.ammo>=this.magSize(this.weaponIndex)||t.reserve<=0||(this.reloadTimer=e.reload*(t.reloadMul||1)/this.player.reloadMultiplier,this.firing=!1,this._shotInBurst=0,this.audio.reload())}finishReload(){xt[this.weaponIndex];const e=this.weaponState[this.weaponIndex],t=this.magSize(this.weaponIndex)-e.ammo,n=Math.min(t,e.reserve);e.ammo+=n,e.reserve-=n,e.firstShotUsed=!1,this.audio.reload()}switchWeapon(e){this.state!=="playing"||e===this.weaponIndex||!this.loadout.includes(e)||(this.weaponIndex=e,this.reloadTimer=0,this.switchTimer=.32,this.weaponRecoil=.8,this.buildWeaponModel(e),this._shotInBurst=0,this.rollAffixForWeapon(e),this.recomputeBuild(),this.audio.ui())}jump(){const e=this.player;this.state!=="playing"||!e.grounded||e.slideTime>0||e.dashTime>0||(e.jumpVel=7.1,e.grounded=!1,this.audio.dash?.())}slide(){const e=this.player;if(this.state!=="playing"||e.slideTime>0||e.slideCooldown>0||!e.grounded)return;const t=this.touchMove&&Math.hypot(this.touchMove.x,this.touchMove.y)>.2;(this.keys.KeyW||this.keys.KeyA||this.keys.KeyS||this.keys.KeyD||t)&&(e.slideTime=.62,e.slideCooldown=1.5,e.slideDir=e.velocity.lengthSq()>.4?e.velocity.clone().setY(0).normalize():new A(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this.spawnParticles(e.position.clone().add(new A(0,-1.5,0)),5568466,8,2.2),this.audio.dash?.())}dash(){this.state!=="playing"||this.player.dashCooldown>0||this.player.dashTime>0||(this.player.dashCooldown=this.player.dashMax,this.player.dashTime=.19,this.player.dashDuration=.19,this.player._perfectUsed=!1,this.player.invulnerable=.28,this.audio.dash())}triggerPerfectDodge(e){this.triggerSlowmo(1.15),this.audio.perfectDodge?.(),this.callbacks.onPerfect?.({}),this.callbacks.onGlitch?.("light"),this.addEnergy(10),this.spawnParticles(this.player.position.clone().add(new A(0,-.6,0)),5568466,16,3)}triggerSlowmo(e){const t=this.slowmo>0;this.slowmo=Math.max(this.slowmo,e),t||this.callbacks.onSlowmo?.(!0)}cycleScope(){if(this.currentScopeType!=="sniper")return;const e=(this.scopeLevels.indexOf(this.sniperZoom)+1)%this.scopeLevels.length;this.sniperZoom=this.scopeLevels[e],this.callbacks.onToast?.(`狙击镜倍率 // ${this.sniperZoom}×`,1200),this.audio.ui()}pulse(){if(this.state!=="playing"||this.player.pulseCooldown>0)return;this.player.pulseCooldown=this.player.pulseMax*(this.player.overdrive>0?.5:1);const e=this.player.position.clone();this.createPulseEffect(e,5568466,this.player.pulseRadius),this.audio.pulse(),this.shake=.65;for(const t of this.enemies){if(t.dead)continue;const n=t.group.position.distanceTo(e);if(n<=this.player.pulseRadius&&this.blastReaches(e,t)){const s=t.group.position.clone().sub(e).setY(0).normalize();this.damageEnemy(t,this.player.pulseDamage*this.player.damageMultiplier*(1-n/this.player.pulseRadius*.35),s),t.dead||(t.group.position.addScaledVector(s,t.type==="boss"?.4:1.4),this.player.frostPulse&&(t.slow=Math.max(t.slow||0,2.5),t.slowMul=Math.max(.2,.4)))}}}createPulseEffect(e,t,n){const s=new Q(new ao(.85,1,64),new Ze({color:t,transparent:!0,opacity:.85,side:Ft,blending:sn,depthWrite:!1,toneMapped:!1}));s.rotation.x=-Math.PI/2,s.position.copy(e),s.position.y=.12,this.scene.add(s),this.effects.push({mesh:s,life:.65,maxLife:.65,radius:n})}createTracer(e,t,n,s){const a=this.weaponRoot.localToWorld(new A(0,0,-.8)),r=new St().setFromPoints([a,t]),o=new Zi({color:n,transparent:!0,opacity:.9,blending:sn,depthWrite:!1,toneMapped:!1}),c=new qs(r,o);this.scene.add(c),this.tracers.push({line:c,life:s,maxLife:s})}spawnParticles(e,t,n=8,s=2){const a=Math.min(n,this.maxParticles);for(let r=0;r<a;r++){let o=this._particlePool.pop();o||(o=new Q(this.sharedParticleGeometry,new Ze({transparent:!0,toneMapped:!1}))),o.visible=!0,o.material.color.setHex(t),o.material.opacity=1,o.position.copy(e),o.scale.setScalar(Mt(.5,1.8)),this.scene.add(o);const c=new A(Mt(-1,1),Mt(-.25,1.4),Mt(-1,1)).normalize().multiplyScalar(Mt(s*.35,s));this.particles.push({mesh:o,velocity:c,life:Mt(.25,.65),maxLife:.65})}}_compact(e){let t=0;for(let n=0;n<e.length;n++)e[n].remove||(e[t++]=e[n]);e.length=t}updateEffects(e){for(const t of this.particles)t.life-=e,t.velocity.y-=5*e,t.mesh.position.addScaledVector(t.velocity,e),t.mesh.material.opacity=bt(t.life/t.maxLife,0,1),t.life<=0&&(this.scene.remove(t.mesh),this._particlePool.push(t.mesh),t.remove=!0);this._compact(this.particles);for(const t of this.tracers)t.life-=e,t.line.material.opacity=bt(t.life/t.maxLife,0,1),t.life<=0&&(this.scene.remove(t.line),t.line.geometry.dispose(),t.line.material.dispose(),t.remove=!0);this._compact(this.tracers);for(const t of this.effects){t.life-=e;const n=1-t.life/t.maxLife;t.mesh.scale.setScalar(1+n*t.radius),t.mesh.material.opacity=(1-n)*.8,t.life<=0&&(this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),t.remove=!0)}this._compact(this.effects)}spawnPickup(e,t){const n={health:5568466,shield:5810943,ammo:16762460},s=new ot,a=new Q(new Hn(.3,0),new Ze({color:n[t],toneMapped:!1})),r=new Q(new Fn(.48,.025,6,24),new Ze({color:n[t],transparent:!0,opacity:.65,toneMapped:!1}));r.rotation.x=Math.PI/2,s.add(a,r),s.position.copy(e).setY(.7),this.scene.add(s),this.pickups.push({group:s,type:t,life:18,phase:Math.random()*6})}updatePickups(e){for(const t of this.pickups){if(t.life-=e,t.phase+=e,t.group.rotation.y+=e*1.8,t.group.position.y=.7+Math.sin(t.phase*2.5)*.12,t.group.position.distanceTo(this.player.position)<this.player.pickupRadius){const n=this.player.pickupPower;t.type==="health"&&(this.player.health=Math.min(this.player.maxHealth,this.player.health+30*n)),t.type==="shield"&&(this.player.shield=Math.min(this.player.maxShield,this.player.shield+25*n)),t.type==="ammo"&&this.weaponState.forEach((s,a)=>{s.reserve+=Math.ceil(xt[a].magazine*1.5*this.player.ammoMultiplier*n)}),this.callbacks.onToast({health:`纳米修复 +${Math.round(30*n)} HP`,shield:`护盾能量 +${Math.round(25*n)} SH`,ammo:"备用弹药已补充"}[t.type]),this.audio.pickup(),t.life=0}t.life<=0&&(this.scene.remove(t.group),t.remove=!0)}this._compact(this.pickups)}damagePlayer(e,t){if(this.state!=="playing"||this.mode==="training")return;if(this.player.dashTime>0&&this.player.dashTime>this.player.dashDuration-this.player.perfectWindow&&!this.player._perfectUsed){this.player._perfectUsed=!0,this.triggerPerfectDodge(t);return}if(this.player.invulnerable>0||this.cheats.god)return;this.player.lastDamage=0,this.player.adaptiveArmor&&this.player.health<this.player.maxHealth*.3&&(e*=.6),this.player.thorns>0&&this.castAoe(this.player.position.clone(),6.5,this.player.thorns,16733559,0),this.waveDamageTaken+=e,this.addEnergy(8);let n=e;if(this.player.shield>0){const r=Math.min(this.player.shield,n);this.player.shield-=r,n-=r}this.player.health-=n,this.shake=Math.min(1.3,this.shake+.5),this.audio.damage();const s=t.clone().sub(this.player.position),a=Math.atan2(s.x,s.z);this.callbacks.onDamage(a-this.yaw),this.player.health<=0&&this.end(!1)}checkWave(e){if(this.intermission){this.nextWaveTimer-=e,this.nextWaveTimer<=0&&this.startWave();return}if(this.mode==="gauntlet"&&this.waveTimeLeft>0&&(this.waveTimeLeft-=e,this.waveTimeLeft<=0)){this.waveTimeLeft=0,this.end(!1);return}if(this.spawnQueue.length&&(this.spawnTimer-=e,this.spawnTimer<=0)){const n=this.spawnQueue.shift();this.spawnEnemy(n),this.spawnTimer=Math.max(.28,.9-this.wave*.035)}const t=this.enemies.some(n=>!n.dead);if(!this.spawnQueue.length&&!t&&!this.waveClearPending){this.waveClearPending=!0,this.wave>0&&this.waveDamageTaken===0&&this.unlockAchievement("flawless"),this.mission?.id==="flawless"&&this.waveDamageTaken===0&&this.addMissionProgress(1),this.clearedContent&&this.rollFieldEvent();const n=this.runId;(this.mode==="campaign"||this.mode==="gauntlet")&&this.wave>=this.difficulty.waves?setTimeout(()=>{this.runId===n&&this.state==="playing"&&!document.hidden&&this.end(!0)},1200):setTimeout(()=>{this.runId===n&&this.state==="playing"&&this.waveClearPending&&!document.hidden&&this.offerUpgrades()},900)}}assignMission(){const e=Bl[Math.floor(Math.random()*Bl.length)];this.mission={...e,progress:0,done:!1}}addMissionProgress(e=1){const t=this.mission;if(!t||t.done||(t.progress+=e,t.progress<t.target))return;t.done=!0;const n=Math.round(t.reward*(this.missionBonus||1));this.credits+=n,this.callbacks.onToast?.(`战术任务完成 // ${t.text} · +${n} CR`,3400),this.audio.upgrade()}spawnFieldVendor(){if(this.fieldVendor)return;const e=new ot,t=new Q(new Sn(.55,.75,1.3,8),new Pt({color:1784371,emissive:3135656,emissiveIntensity:.5,metalness:.8,roughness:.3}));t.position.y=1.5;const n=new Q(new ra(.42,1),new Pt({color:861216,emissive:5568466,emissiveIntensity:.9,metalness:.7,roughness:.25}));n.position.y=2.5;const s=new Q(new Fn(1.05,.05,6,28),new Ze({color:this.clearedContent?16747218:16766044,toneMapped:!1}));s.rotation.x=Math.PI/2,s.position.y=1.2;const a=new Q(new Ui(.13,8,6),new Ze({color:16770442,toneMapped:!1}));a.position.y=3.2;const r=new Q(new un(.9,.5,.7),new Pt({color:2374454,emissive:1727050,emissiveIntensity:.4,metalness:.7}));r.position.set(1.1,.25,0),e.add(t,n,s,a,r);const o=Mt(-.5,.5);e.position.set(Math.sin(o)*14,0,12+Math.cos(o)*3),this.scene.add(e),this.fieldVendor={group:e,ring:s,beacon:a},this.callbacks.onToast?.(this.clearedContent?"军需官已抵达 // 精英补给 · 靠近按 G 交易":"流动商人已抵达 // 靠近按 G 交易",4200)}updateFieldVendor(e){if(!this.fieldVendor)return;this.fieldVendor.group.rotation.y+=e*.55,this.fieldVendor.ring.rotation.z+=e*1.3,this.fieldVendor.beacon.position.y=3.2+Math.sin(this.elapsed*3)*.12;const t=this.fieldVendor.group.position.distanceTo(this.player.position),n=document.getElementById("interact-toast");if(n){const s=t<7&&this.state==="playing";n.textContent=s?"按 G 与流动商人交易":"",n.classList.toggle("show",s)}}rollFieldEvent(){const e=[{text:"补给空投 // +260 CR",apply:n=>{n.credits+=260}},{text:"情报官接入 // 本局任务奖励翻倍",apply:n=>{n.missionBonus=2}},{text:"工程师折扣 // 商店 8 折",apply:n=>{n.shopDiscount=.8}},{text:"精英信号 // 下一波额外增援",apply:n=>{n.eliteWave=3}}],t=e[Math.floor(Math.random()*e.length)];t.apply(this),this.fieldEvent=t.text,this.callbacks.onToast?.(`战场事件 // ${t.text}`,3600)}offerUpgrades(){this.state="upgrade",this.firing=!1,document.exitPointerLock?.(),this.shopPhase="free",this.currentFreeChoices=this.rollFreeChoices(),this.freePicked=!1,this.freePickIndex=-1,this.freeSkipped=!1,this.credits+=110+this.wave*22,this.rerollCount=0,this.rerollCost=20+this.wave*5,this.currentShop=this.generateShop(),this.callbacks.onUpgrades(this.prepPayload()),this.callbacks.onState("upgrade")}rollFreeChoices(){let e=3;Ue.rogueliteV2&&this.metaUnlocks&&this.metaUnlocks.fourChooseOne&&(e=4),Ue.economyV2&&(e=Math.min(Hs.optionCap,e+(this.nextWaveOptions||0)));const t=[...zl],n=[];for(;n.length<e&&t.length;)n.push(t.splice(Math.floor(Math.random()*t.length),1)[0]);return n}prepPayload(){const e=Object.entries(this.buildTagCounts||{}).sort((n,s)=>s[1]-n[1]).slice(0,3).map(([n,s])=>({id:n,n:s}));let t=0;for(const n of[3,5,7])Math.max(0,...Object.values(this.buildTagCounts||{}))>=n&&(t=n);return{freeChoices:this.currentFreeChoices,shop:this.currentShop,credits:this.credits,wave:this.wave,rerollCost:this.rerollCost,freePicked:this.freePicked,freePickIndex:this.freePickIndex,shopPhase:this.shopPhase,law:this.law?{id:this.law.id,text:this.law.text,rewardTag:this.law.rewardTag}:null,buildBonus:this.buildBonus,buildTags:e,resonanceTier:t,freeSkipped:this.freeSkipped,skipCredit:Ue.economyV2?Hs.skipCredit:0,canSkip:Ue.economyV2&&!this.freePicked&&!this.freeSkipped&&this.shopPhase==="free",nextWaveOptions:this.nextWaveOptions||0}}_lookupBuildEntry(e){return zl.find(t=>t.id===e)||Hl.find(t=>t.id===e)||Vl.find(t=>t.id===e)||Gl.find(t=>t.id===e)||null}recomputeBuild(){if(!Ue.rogueliteV2){this._revertBuild(),this.buildBonus=Xr(),this.buildTagCounts={};return}const e=[];for(const r of this.acquiredIds){const o=this._lookupBuildEntry(r);o&&o.tags&&e.push(o.tags)}e.push(hg(xt[this.weaponIndex].category));const t=this.weaponState[this.weaponIndex],n=t&&t.affixId;n&&e.push(dg(n)),this.startingTags&&this.startingTags.length&&e.push(this.startingTags);const s=cg(e),a=gg(s,this.law);this.buildTagCounts=s,this.buildBonus=a,this._applyBuild(a)}getBuildTags(){const e=this.buildTagCounts||{};return Object.entries(e).filter(([,t])=>t>0).sort((t,n)=>n[1]-t[1]).slice(0,4).map(([t])=>t)}_applyBuild(e){this._revertBuild();const t=this.player;t.pickupRadius+=e.pickupRadiusAdd,t.energyMax+=e.energyMaxAdd,e.reloadMul&&(t.reloadMultiplier*=1/e.reloadMul),t.dashMax*=e.dashCdMul,t.energyGain*=e.energyGainMul,t.chainBonus+=e.chainBonus,this._appliedBuild={...e}}_revertBuild(){const e=this._appliedBuild;if(!e)return;const t=this.player;t.pickupRadius-=e.pickupRadiusAdd,t.energyMax-=e.energyMaxAdd,e.reloadMul&&(t.reloadMultiplier*=e.reloadMul),t.dashMax/=e.dashCdMul,t.energyGain/=e.energyGainMul,t.chainBonus-=e.chainBonus,this._appliedBuild=null}loadMetaUnlocks(){let e={};try{e=JSON.parse(localStorage.getItem("nexus-meta-v2")||"{}")||{}}catch{}const t={};for(const n of Object.keys(Il))t[n]=!!e[n];return t}setMetaUnlock(e,t){if(!(e in Il))return;const n=this.loadMetaUnlocks();n[e]=!!t;try{localStorage.setItem("nexus-meta-v2",JSON.stringify(n))}catch{}this.metaUnlocks=n}generateShop(e){const t=new Set(this.loadout),n=xt.map((h,f)=>({type:"weapon",weaponIndex:f,name:h.name,category:h.category,price:Math.round(h.price*(this.shopDiscount||1)),desc:h.desc})).filter(h=>!t.has(h.weaponIndex)),s=Vl.filter(h=>this.wave>=(Qa[h.rarity]||0)),a=Hl.filter(h=>this.wave>=(Qa[h.rarity]||0)),r=Gl.filter(h=>this.wave>=(Qa[h.rarity]||0)),o=(h,f)=>{const d=[],u=[...h];for(;d.length<f&&u.length;)d.push(u.splice(Math.floor(Math.random()*u.length),1)[0]);return d},c=[];o(n,3).forEach(h=>c.push(h)),o(s,2).forEach(h=>c.push({type:"supply",id:h.id,icon:h.icon,name:h.name,category:"supply",rarity:h.rarity,price:Math.round(h.price*(this.shopDiscount||1)),desc:h.desc,apply:h.apply})),o(a,2).forEach(h=>c.push({type:"mod",modId:h.id,icon:h.icon,name:h.name,category:"mod",rarity:h.rarity,price:Math.round(h.price*(this.shopDiscount||1)),desc:h.desc,apply:h.apply})),o(r,3).forEach(h=>c.push({type:"skill",skillId:h.id,kind:h.kind,icon:h.icon,name:h.name,category:"skill",rarity:h.rarity,price:Math.round(h.price*(this.shopDiscount||1)),desc:h.desc,apply:h.apply,cooldown:h.cooldown}));const l=c.map(h=>({...h,sold:!1,locked:!1}));return e&&e.forEach((h,f)=>{h.locked&&!h.sold&&l[f]&&(l[f]=h)}),l}buyShopItem(e){const t=this.currentShop?.[e];return!t||t.sold||this.credits<t.price||t.locked?!1:(this.credits-=t.price,t.sold=!0,t.type==="weapon"?this.unlockWeapon(t.weaponIndex):t.type==="skill"?(t.kind==="active"?this.player.skills.push({id:t.skillId,name:t.name,icon:t.icon,desc:t.desc,cooldown:0,max:t.cooldown,kind:"active"}):t.apply&&t.apply(this),this.acquiredIds.push(t.skillId)):t.apply&&(t.apply(this),this.acquiredIds.push(t.type==="mod"?t.modId:t.id)),this.audio.upgrade(),this.recomputeBuild(),this.state==="upgrade"?this.callbacks.onUpgrades?.(this.prepPayload()):this.callbacks.onShop?.({shop:this.currentShop,credits:this.credits,standalone:this.state==="shop"}),!0)}lockShopItem(e){const t=this.currentShop?.[e];!t||t.sold||(t.locked=!t.locked,this.state==="upgrade"?this.callbacks.onUpgrades?.(this.prepPayload()):this.state==="shop"&&this.callbacks.onShop?.({shop:this.currentShop,credits:this.credits,standalone:!0}))}rerollFree(){if(this.state!=="upgrade"||this.freePicked||this.credits<this.rerollCost){this.audio.empty?.();return}this.credits-=this.rerollCost,this.rerollCount+=1,this.rerollCost+=10+Math.floor(this.wave*.5)*5,this.currentFreeChoices=this.rollFreeChoices(),this.audio.upgrade(),this.callbacks.onUpgrades?.(this.prepPayload())}rerollShop(){if(this.state!=="upgrade"||this.credits<this.rerollCost){this.audio.empty?.();return}this.credits-=this.rerollCost,this.rerollCount+=1,this.rerollCost+=10+Math.floor(this.wave*.5)*5,this.currentShop=this.generateShop(this.currentShop),this.audio.upgrade(),this.callbacks.onUpgrades?.(this.prepPayload())}gotoShop(){this.state==="upgrade"&&(this.shopPhase="shop",this.callbacks.onUpgrades?.(this.prepPayload()))}chooseFreeUpgrade(e){this.state!=="upgrade"||this.freePicked||!this.currentFreeChoices[e]||(this.currentFreeChoices[e].apply(this),this.freePicked=!0,this.freePickIndex=e,this.acquiredIds.push(this.currentFreeChoices[e].id),this.appliedUpgrades.push({name:this.currentFreeChoices[e].name,icon:this.currentFreeChoices[e].icon}),this.audio.upgrade(),this.recomputeBuild(),this.callbacks.onUpgrades?.(this.prepPayload()))}skipFreeUpgrade(){if(this.state!=="upgrade"||this.shopPhase!=="free"||this.freePicked||this.freeSkipped){this.audio.empty?.();return}if(!Ue.economyV2){this.audio.empty?.();return}this.freeSkipped=!0,this.credits+=Hs.skipCredit,this.nextWaveOptions=(this.nextWaveOptions||0)+Hs.optionBonusPerSkip,this.audio.upgrade(),this.callbacks.onUpgrades?.(this.prepPayload())}deploy(){const e=this.freePicked||Ue.economyV2&&this.freeSkipped;if(this.state!=="upgrade"||!e){this.audio.empty?.();return}this.state="playing",this.waveClearPending=!1,this.intermission=!0,this.nextWaveTimer=2.1,this.callbacks.onState("playing"),this.callbacks.onAnnounce("整备完成","下一波即将到来","DEPLOY / READY",1900),this.requestLock()}openFieldShop(){if(!(this.state!=="playing"||!this.fieldVendor)){if(this.fieldVendor.group.position.distanceTo(this.player.position)>7){this.callbacks.onToast?.("距离商人过远 // 靠近后按 G 交易",1800);return}this.openShopStandalone()}}openShopStandalone(){this.state==="playing"&&(this.currentShop?.length||(this.currentShop=this.generateShop()),this.state="shop",this.firing=!1,document.exitPointerLock?.(),this.callbacks.onShop?.({shop:this.currentShop,credits:this.credits,standalone:!0}),this.callbacks.onState?.("shop"))}closeShopStandalone(){this.state==="shop"&&(this.state="playing",this.callbacks.onState?.("playing"),this.requestLock())}chooseUpgrade(e){this.chooseFreeUpgrade(e)}end(e){if(this.state==="ended")return;this.state="ended",this.firing=!1,document.exitPointerLock?.();const t=Number(localStorage.getItem("nexus-best-score")||0),n=Number(localStorage.getItem("nexus-best-wave")||0),s=this.score>t;if(s&&localStorage.setItem("nexus-best-score",String(Math.floor(this.score))),this.wave>n&&localStorage.setItem("nexus-best-wave",String(this.wave)),e&&(this.unlockAchievement("victory"),this.difficulty.id==="nightmare"&&this.unlockAchievement("nightmare")),e&&this.wave>=10){const r=!this.clearedContent;try{localStorage.setItem("nexus-cleared","1")}catch{}this.clearedContent=!0,this.callbacks.onToast?.(r?"基础战役通关 // 解锁「极限」难度 · 军需官 · 战场事件 · 隐藏内容":"战役通关 // 进度已同步",6e3)}const a=this.saveCareer(e);e?this.audio.victory():this.audio.gameOver(),this.callbacks.onState("ended",{victory:e,score:this.score,wave:this.wave,kills:this.kills,accuracy:this.shotsFired?this.shotsHit/this.shotsFired*100:0,newRecord:s,career:a,difficulty:this.difficulty.label,achievements:[...this.runAchievements]})}saveCareer(e){if(this.cheated){let n={runs:0,kills:0,wins:0,bestCombo:1,achievements:[]};try{n={...n,...JSON.parse(localStorage.getItem("nexus-career")||"{}")}}catch{}return n}let t={runs:0,kills:0,wins:0,bestCombo:1,achievements:[]};try{t={...t,...JSON.parse(localStorage.getItem("nexus-career")||"{}")}}catch{}t.runs+=1,t.kills+=this.kills,e&&(t.wins+=1),t.bestCombo=Math.max(Number(t.bestCombo)||1,this.comboPeak),t.achievements=[...new Set([...t.achievements||[],...this.runAchievements])];try{localStorage.setItem("nexus-career",JSON.stringify(t))}catch{}return t}updateHUD(e=!1){if(!e&&this.hudTimer>0)return;this.hudTimer=.07;const t=this.enemies.find(n=>n.type==="boss"&&!n.dead);this.callbacks.onHUD({health:this.player.health,maxHealth:this.player.maxHealth,shield:this.player.shield,maxShield:this.player.maxShield,wave:this.wave,mode:this.mode,enemies:this.enemies.filter(n=>!n.dead).length+this.spawnQueue.length,score:this.score,combo:this.combo,comboCount:this.hitCombo||0,weapon:xt[this.weaponIndex],weaponIndex:this.weaponIndex,scopeType:this.currentScopeType,sniperZoom:this.sniperZoom,aiming:this.aiming,ammo:this.weaponState[this.weaponIndex].ammo,reserve:this.weaponState[this.weaponIndex].reserve,reloading:this.reloadTimer>0,unlockedWeapon:this.unlockedWeapon,dashCooldown:this.player.dashCooldown,skills:this.player.skills.map(n=>({id:n.id,name:n.name,icon:n.icon,cooldown:n.cooldown,max:n.max,kind:n.kind})),skillBuff:this.player.skillBuff,dashMax:this.player.dashMax,pulseMax:this.player.pulseMax*(this.player.overdrive>0?.5:1),pulseCooldown:this.player.pulseCooldown,boss:t?{health:t.health,maxHealth:t.maxHealth}:null,energy:this.player.energy,energyMax:this.player.energyMax,overdrive:this.player.overdrive,difficulty:this.difficulty.label,critChance:this.player.critChance,intermission:this.intermission,elapsed:this.elapsed,loadout:this.loadout,credits:this.credits,weaponSlot:this.loadout.indexOf(this.weaponIndex),waveTotal:this.difficulty.waves,waveTimeLeft:this.waveTimeLeft,mission:this.mission,clearedContent:this.clearedContent,fieldEvent:this.fieldEvent,vendorNearby:!!(this.fieldVendor&&this.fieldVendor.group.position.distanceTo(this.player.position)<7),profile:this.profile,demo:this.demoMode,board:this.isBoard})}drawRadar(){const e=this.radarContext,t=this.radar.width,n=t/2,s=t/90;e.clearRect(0,0,t,t),e.save(),e.beginPath(),e.arc(n,n,n-2,0,Math.PI*2),e.clip(),e.strokeStyle="rgba(84,247,210,.13)",e.lineWidth=1,[.33,.66,1].forEach(r=>{e.beginPath(),e.arc(n,n,n*r,0,Math.PI*2),e.stroke()}),e.beginPath(),e.moveTo(n,0),e.lineTo(n,t),e.moveTo(0,n),e.lineTo(t,n),e.stroke();const a=(r,o,c)=>{const l=r.x-this.player.position.x,h=r.z-this.player.position.z,f=Math.cos(-this.yaw),d=Math.sin(-this.yaw),u=l*f-h*d,g=l*d+h*f;Math.hypot(u,g)>43||(e.fillStyle=o,e.beginPath(),e.arc(n+u*s,n+g*s,c,0,Math.PI*2),e.fill())};this.enemies.forEach(r=>{!r.dead&&(!r.phased||this.cheats.wall)&&a(r.group.position,r.type==="boss"?"#ff9a55":r.type==="turret"?"#ffb24d":r.type==="medic"?"#47e0a0":r.type==="bomber"?"#ffc24d":r.type==="phantom"?"#5ce1ff":r.type==="falcon"?"#c6ff3d":"#ff5362",r.type==="boss"?4:2.2)}),this.pickups.forEach(r=>a(r.group.position,"#54f7d2",1.5)),e.restore(),e.fillStyle="#a9fff0",e.beginPath(),e.moveTo(n,n-6),e.lineTo(n-4,n+4),e.lineTo(n+4,n+4),e.closePath(),e.fill()}updateMenu(e){this.menuTime+=e;const t=this.menuTime*.055;this.camera.position.set(Math.sin(t)*30+8,7+Math.sin(t*2)*1.2,Math.cos(t)*30+4),this.camera.lookAt(0,2.7,0),this.camera.fov=Ct(this.camera.fov,58,e*2),this.camera.updateProjectionMatrix(),this.weaponRoot.visible=!1}animate(){requestAnimationFrame(this.animate);const e=Math.min(this.clock.getDelta(),.05);this.state==="playing"&&this._adaptiveResolution(e),this.hitStop>0&&(this.hitStop=Math.max(0,this.hitStop-e));let t=this.hitStop>0?e*.22:e;if(this.slowmo>0&&(this.slowmo=Math.max(0,this.slowmo-e),t*=.34,this.slowmo===0&&this.callbacks.onSlowmo?.(!1)),this.animatedWorld.forEach(({mesh:n,speed:s,axis:a,update:r})=>{r?r(e,this.menuTime+this.elapsed):a&&(n.rotation[a]+=s*e)}),this.dust&&(this.dust.rotation.y+=e*.003),this.state==="playing"){this.elapsed+=t,this.hudTimer-=e,this.radarTimer-=e,this.updateCheats(t);const n=(this.cheats.slow?.4:1)*t;this.updatePlayer(t),this.updateEnemies(n),this.updateProjectiles(n),this.updatePickups(n),this.updateEffects(n),this.updateBarrels(n),this.updateFieldVendor(t),this.checkWave(e),this.updateHUD(),this.radarTimer<=0&&(this.radarTimer=.09,this.drawRadar())}else this.state==="menu"&&(this.updateMenu(e),this.updateEffects(e));this.renderer.render(this.scene,this.camera)}}const z=i=>document.querySelector(i),Kt=i=>[...document.querySelectorAll(i)],ii=(i,e=2)=>String(Math.max(0,Math.floor(i))).padStart(e,"0"),Ag=i=>Math.floor(i).toLocaleString("en-US").replaceAll(",",","),qc=Wc();document.documentElement.dataset.device=qc;const Rg={desktop:"DEVICE / DESKTOP",mobile:"DEVICE / MOBILE",board:"DEVICE / SEEWO BOARD"};z("#device-badge").textContent=Rg[qc];let Yc="campaign",$c="standard",Kc=0,co="campaign",Ne,Wl,Xl,ql,Yl,$l=0;const Cg={briefing:`
    <div class="eyebrow">OPERATION / NEON ASHES</div><h2 id="modal-title">作战简报<span>.</span></h2>
    <p class="modal-lead">02:17，第七区战术网络遭到不明机械军团入侵。你是最后一名仍可链接的「幽灵」作战员。以下为 1.1.0 正式版的完整作战流程。</p>
    <div class="briefing-grid"><div><b>01</b><strong>自定装备</strong><p>开局从手枪 / 步枪 / 狙击三选一，武器库共 15 把，按 1–6 切换已持有武器。</p></div><div><b>02</b><strong>战后补给</strong><p>首波结束即开放补给站：用信用点购买武器与补给，再从肉鸽模块中三选一强化。</p></div><div><b>03</b><strong>战术任务</strong><p>每波随机任务与章节剧情推进；第 3 / 6 / 9 波出现流动商人，靠近按 G 交易。</p></div><div><b>04</b><strong>摧毁核心</strong><p>难度决定通关波数（10 / 15 / 20 / 25 波），最终波迎战守望者；通关后解锁极限难度与战场事件。</p></div></div>
    <div class="intel-row v2"><span>红色敌人擅长突袭</span><span>紫色敌人远程攻击</span><span>橙色重装移动缓慢</span><span>青色幽影会相位隐形</span><span>黄色蜂群贴近后自毁</span><span>绿色单元会修复友军</span><span>琥珀炮台定点轰炸</span><span>青柠游隼高速俯冲</span><span>油桶可被引爆</span></div>`,armory:`
    <div class="eyebrow">TACTICAL LOADOUT / NX SERIES</div><h2 id="modal-title">武器库<span>.</span></h2><p class="modal-lead">六把武器均在行动中按波次自动解锁。按 1–6 或滚轮快速切换。</p>
    <div class="armory-list"><article><div class="weapon-silhouette rifle">VX-9</div><div><small>01 / 初始装备</small><h3>VX-9 脉冲</h3><p>稳定的全自动脉冲步枪，适合中距离持续压制。</p><span>伤害 24　·　射速 9/s　·　弹匣 30</span></div></article><article><div class="weapon-silhouette shotgun">SG-12</div><div><small>02 / 第 2 波解锁</small><h3>SG-12 裂解</h3><p>八枚高能弹丸同时释放，近距离可造成毁灭性伤害。</p><span>伤害 14×8　·　射速 1.2/s　·　弹匣 6</span></div></article><article><div class="weapon-silhouette rail">R-01</div><div><small>03 / 第 4 波解锁</small><h3>R-01 磁轨</h3><p>高精度磁轨射线，贯穿一条直线上的所有敌人。</p><span>伤害 135　·　射速 0.8/s　·　弹匣 5</span></div></article><article class="v2"><div class="weapon-silhouette rail">ARC-7</div><div><small>04 / 第 6 波解锁</small><h3>ARC-7 弧光</h3><p>发射链式电弧，命中后自动跳跃到附近敌人，最多连锁 3 个目标。</p><span>伤害 46　·　射速 3.4/s　·　弹匣 24</span></div></article><article class="v2"><div class="weapon-silhouette rocket">WN-5</div><div><small>05 / 第 8 波解锁</small><h3>WN-5 蜂巢</h3><p>六管制导发射器，导弹自动锁定最近敌人，命中后产生范围爆炸，可连爆油桶。</p><span>伤害 120　·　射速 1.1/s　·　弹匣 4</span></div></article><article class="v2"><div class="weapon-silhouette frost">LN-3</div><div><small>06 / 第 9 波解锁</small><h3>LN-3 寒霜</h3><p>低温步枪，命中使敌人减速 50%，是控场与切断冲锋的核心手段。</p><span>伤害 30　·　射速 4.2/s　·　弹匣 22</span></div></article></div>`,controls:`
    <div class="eyebrow">NEURAL INTERFACE / MANUAL</div><h2 id="modal-title">操作指南<span>.</span></h2>
    <div class="controls-grid"><div><h3>键鼠操作</h3><p><kbd>W A S D</kbd><span>移动</span></p><p><kbd>鼠标</kbd><span>观察 / 瞄准</span></p><p><kbd>左键 / 右键</kbd><span>射击 / 精确瞄准</span></p><p><kbd>Shift</kbd><span>疾跑（武器下沉）</span></p><p><kbd>Space</kbd><span>跳跃</span></p><p><kbd>Ctrl / C</kbd><span>滑铲</span></p><p><kbd>Q / E</kbd><span>冲刺 / 电磁脉冲</span></p><p><kbd>F</kbd><span>核心超载（能量满时）</span></p><p><kbd>G</kbd><span>靠近 NPC 商人时交易</span></p><p><kbd>R / 1–6</kbd><span>装填 / 切换已持有武器</span></p><p><kbd>ESC / P</kbd><span>暂停</span></p></div><div><h3>触屏操作</h3><p><kbd>左侧摇杆</kbd><span>移动</span></p><p><kbd>右侧滑动</kbd><span>观察 / 瞄准</span></p><p><kbd>FIRE</kbd><span>按住连续射击 · 同指滑动可边打边转向</span></p><p><kbd>Q / E</kbd><span>冲刺 / 电磁脉冲</span></p><p><kbd>F</kbd><span>核心超载</span></p><p><kbd>R / ⇄</kbd><span>装填 / 切换武器</span></p><p><kbd>Ⅱ</kbd><span>暂停</span></p><small>手机端自带轻度辅助瞄准；按住 FIRE 的那根手指直接滑动即可边开火边转向，左摇杆与右滑屏可多指同时操作。</small></div></div>
    <div class="board-note v110"><h3>1.1.0 正式版 · 操作与设置</h3><p>首页右上角齿轮或暂停界面「系统设置」可调整 <strong>键鼠 / 触屏灵敏度、按住开火滑视角（含独立倍率）、Y 轴反转、辅助瞄准强度、主音量、打击反馈、帧率显示</strong>；所有改动即时生效并保存在本机。波次三选一新增「连击稳定器 / 相位电容 / 反冲装甲 / 弱点标定 / 战术记录仪」等低数值强化，连击达到 10 / 25 / 50 / 100 时会有里程碑播报。</p></div>
    <p class="modal-lead" style="margin-top:16px">首页「威胁校准」共四档：新兵 10 波、标准 15 波、噩梦 20 波，通关任意战役后解锁「极限」25 波。难度同时影响敌人强度、掉落率、积分倍率与通关波数。</p>
    <div class="board-note"><h3>希沃白板 / 教学一体机</h3><p>首页「设备适配」选择「白板大屏」：左下角<strong>「移动 / MOVE」高对比圆形摇杆</strong>常显（含方向箭头与中心十字），右侧滑动转向，右下 <kbd>FIRE</kbd> 开火，底部技能排含跳跃 / 滑铲 / 冲刺 / 脉冲 / 超载 / 切枪 / 瞄准 / 演示。全部按钮 ≥64px，支持红外多点触控，弹药打空自动装填，无需键盘鼠标。点 <kbd>AUTO</kbd> 开启课堂演示（自动锁敌开火）；<kbd>◎</kbd> 为精确瞄准。</p></div>
    <div class="board-note" style="border-color:#ff4d6d44"><h3>越界协议 // OVERBOUND 作弊码</h3><p>单机训练用外挂。游戏中直接敲字母触发（大小写均可）：<kbd>LOCKON</kbd> 锁头、<kbd>AUTOFIRE</kbd> 自动射击、<kbd>GODMODE</kbd> 无敌、<kbd>INFINITY</kbd> 无限弹药、<kbd>XRAY</kbd> 透视、<kbd>TIMESLIP</kbd> 子弹时间、<kbd>PURGE</kbd> 清场、<kbd>ARSENAL</kbd> 全武器、<kbd>RECHARGE</kbd> 回满、<kbd>OVERBOUND</kbd> 全开、<kbd>STANDDOWN</kbd> 全关。按 <kbd>&#96;</kbd> 或 <kbd>↑↑↓↓←→←→BA</kbd> 展开作弊清单。</p></div>`};function Pg(){return`<div class="eyebrow">TACTICAL LOADOUT / NX SERIES</div><h2 id="modal-title">武器库<span>.</span></h2><p class="modal-lead">15 把武器分为手枪 / 步枪 / 狙击 / 特殊四类。开局任选一把作为起始装备，其余在战后补给站购买或按波次配发。按 1–6 切换已持有武器。</p>${["pistol","rifle","sniper","special"].map(e=>{const t=xt.map((s,a)=>({...s,i:a})).filter(s=>s.category===e),n=t.map(s=>`<article class="${s.i>=6?"v2":""}"><div class="weapon-silhouette ${e}">${s.name.split(" ")[0]}</div><div><small>${s.i>=6?"V1.0 新增":"制式装备"} · ${s.price} CR</small><h3>${s.name}</h3><p>${s.desc}</p><span>伤害 ${s.damage}　·　射速 ${s.fireRate}/s　·　弹匣 ${s.magazine}</span></div></article>`).join("");return`<div class="armory-group"><h3>${Xc[e]}<small>${t.length} 把</small></h3><div class="armory-list">${n}</div></div>`}).join("")}`}function Lg(){let i={runs:0,kills:0,wins:0,bestCombo:1,achievements:[]};try{i={...i,...JSON.parse(localStorage.getItem("nexus-career")||"{}")}}catch{}const e=new Set(i.achievements||[]);return`
    <div class="eyebrow">OPERATIVE RECORD / ARCHIVE</div><h2 id="modal-title">生涯档案<span>.</span></h2>
    <p class="modal-lead">战绩仅保存在本机浏览器，不会上传。挑战噩梦难度，解锁全部战术徽章。</p>
    <div class="career-grid"><div><small>出击次数</small><strong>${i.runs}</strong></div><div><small>累计击毁</small><strong>${i.kills}</strong></div><div><small>通关次数</small><strong>${i.wins}</strong></div><div><small>最高连击</small><strong>×${Number(i.bestCombo||1).toFixed(1)}</strong></div></div>
    <div class="eyebrow">战术徽章 · ${e.size} / ${ea.length}</div>
    <div class="achievement-list">${ea.map(t=>`<div class="achievement-item ${e.has(t.id)?"unlocked":""}"><i>${e.has(t.id)?"◆":"◇"}</i><div><strong>${t.name}</strong><small>${t.desc}</small></div></div>`).join("")}</div>`}function Ig(){const i=(t,n,s,a,r,o)=>`
    <label class="setting-row">
      <span>${n}<small>${s}</small></span>
      <input type="range" data-setting="${t}" min="${a}" max="${r}" step="${o}">
      <b class="setting-value" data-value-for="${t}"></b>
    </label>`,e=(t,n,s)=>`
    <label class="setting-row switch-row">
      <span>${n}<small>${s}</small></span>
      <input type="checkbox" data-setting="${t}"><i class="switch-ui"></i>
    </label>`;return`
    <div class="eyebrow">SYSTEM CONFIG / NEURAL INTERFACE</div>
    <h2 id="modal-title">系统设置<span>.</span></h2>
    <p class="modal-lead">所有调整<strong>即时生效</strong>并保存在本机。键鼠与触屏灵敏度分开记忆；游戏中按 <kbd>ESC</kbd> 暂停后也能随时打开本页微调手感。</p>
    <div class="settings-grid">
      <section class="settings-group">
        <h3>⌖ 瞄准 / 视角</h3>
        ${i("mouseSensitivity","键鼠灵敏度","鼠标移动 → 视角转动速度",.3,2.5,.05)}
        ${i("touchSensitivity","触屏灵敏度","右侧滑动 / 白板转向速度",.3,2.5,.05)}
        ${e("fireLook","按住开火键滑视角","手指按住 FIRE 时滑动也能转向，边打边瞄（主流 FPS 手感）")}
        ${i("fireLookSensitivity","开火滑视角倍率","相对触屏灵敏度的倍率，建议略低",.3,1.6,.05)}
        ${e("invertY","纵向反转","上下视角方向反转")}
      </section>
      <section class="settings-group">
        <h3>◎ 战斗辅助</h3>
        ${i("aimAssist","辅助瞄准强度","0% 关闭 · 100% 标准 · 150% 增强",0,150,5)}
        <p class="setting-note">触屏 / 白板自带轻度辅助瞄准；键鼠端需先在波次三选一领取「战术辅助瞄具」才生效，强化等级叠加在此之上。设为 0% 时全部关闭。仅影响吸附范围，<b>不增加任何伤害</b>。</p>
        ${i("feedback","打击反馈强度","命中 / 爆炸时的镜头震动幅度，晕动敏感可下调",0,150,5)}
      </section>
      <section class="settings-group">
        <h3>◈ 画面 / 声音</h3>
        ${i("volume","主音量","音效总音量",0,100,5)}
        ${i("audioCueIntensity","音频提示强度","0% 静音提示 · 100% 标准 · 150% 增强",0,150,5)}
        ${e("audioV2","音频分层（V2.0）","三段式枪声 + 敌人脚步差异化；关闭后回到 1.1.0 原音色")}
        <p class="setting-note">音频提示强度<b>只作用于脚步 / 命中 / 警告 / 拾取</b>；枪声与 UI 确认音保持原音量，避免削掉操作反馈。关闭「音频分层」即完整回滚到旧音色。</p>
        <label class="setting-row switch-row">
          <span>音效开关<small>关闭后完全静音</small></span>
          <input type="checkbox" id="setting-audio-enabled"><i class="switch-ui"></i>
        </label>
        ${e("showFps","显示帧率","在画面左侧显示实时 FPS，便于判断性能")}
      </section>
    </div>
    <div class="settings-footer"><button id="settings-reset" class="secondary-button">恢复默认</button><span>设置仅保存在本机浏览器 · 不会上传 · 改动立即生效</span></div>`}function Dg(i,e){return["aimAssist","volume","feedback","audioCueIntensity"].includes(i)?`${Math.round(e)}%`:["mouseSensitivity","touchSensitivity","fireLookSensitivity"].includes(i)?`${Number(e).toFixed(2)}×`:String(e)}function Ri(){Ne?.audio?.setVolume(Ue.volume),Ne?.audio?.setAudioV2?.(Ue.audioV2),Ne?.audio?.setCueIntensity?.(Ue.audioCueIntensity),z("#fps-counter")?.classList.toggle("visible",Ue.showFps),z("#audio-toggle")?.classList.toggle("muted",!Ne?.audio?.enabled||Ue.volume===0)}function Ug(){const i=z("#modal-content"),e=()=>{i.querySelectorAll("[data-setting]").forEach(n=>{const s=n.dataset.setting,a=Ue[s];n.type==="checkbox"?n.checked=!!a:n.value=String(a);const r=i.querySelector(`[data-value-for="${s}"]`);r&&(r.textContent=Dg(s,a))});const t=i.querySelector("#setting-audio-enabled");t&&(t.checked=!!Ne?.audio?.enabled)};i.querySelectorAll("[data-setting]").forEach(t=>{t.addEventListener("input",()=>{Bc(t.dataset.setting,t.type==="checkbox"?t.checked:Number(t.value)),Ri(),e()})}),i.querySelector("#setting-audio-enabled")?.addEventListener("change",t=>{if(Ne?.audio){Ne.audio.enabled=t.target.checked,Ne.audio.enabled&&Ne.audio.init();try{localStorage.setItem("nexus-audio",Ne.audio.enabled?"1":"0")}catch{}Ri(),e()}}),i.querySelector("#settings-reset")?.addEventListener("click",()=>{zc(),Ne?.audio&&(Ne.audio.enabled=!0,Ne.audio.init());try{localStorage.setItem("nexus-audio","1")}catch{}Ri(),e(),ho("设置已恢复默认",1800)}),e()}function Ng(i){z("#modal-content").innerHTML=i==="career"?Lg():i==="armory"?Pg():i==="settings"?Ig():Cg[i],z("#modal-backdrop").classList.add("active"),i==="settings"&&Ug()}function ca(){z("#modal-backdrop").classList.remove("active")}Kt("[data-modal]").forEach(i=>i.addEventListener("click",()=>Ng(i.dataset.modal)));z("#modal-close").addEventListener("click",ca);z("#modal-backdrop").addEventListener("click",i=>{i.target===z("#modal-backdrop")&&ca()});Kt(".mode-card").forEach(i=>i.addEventListener("click",()=>{Kt(".mode-card").forEach(e=>e.classList.remove("selected")),i.classList.add("selected"),Yc=i.dataset.mode,Ne?.audio.ui()}));Kt(".difficulty-chip").forEach(i=>i.addEventListener("click",()=>{if(i.dataset.difficulty==="apex"&&localStorage.getItem("nexus-cleared")!=="1"){ho("「极限」难度需先通关核心行动（≥ 10 波）",3200),i.classList.add("locked-chip");return}Kt(".difficulty-chip").forEach(e=>e.classList.remove("selected")),i.classList.add("selected"),$c=i.dataset.difficulty,Ne?.audio.ui()}));function Fg(){const i=localStorage.getItem("nexus-cleared")==="1";z("#unlock-banner").innerHTML=i?"<b>◆ 基础战役已通关</b><span>已解锁「极限」难度 · 军需官 · 战场事件 · 隐藏内容</span>":"<b>◇ 战役进度</b><span>通关 ≥ 10 波后解锁极限难度、军需官与战场事件</span>",z(".locked-chip")?.classList.toggle("unlocked",i)}Kt(".start-weapon-chip").forEach(i=>i.addEventListener("click",()=>{Kt(".start-weapon-chip").forEach(e=>e.classList.remove("selected")),i.classList.add("selected"),Kc=Number(i.dataset.start),Ne?.audio.ui()}));let qr=null;try{qr=localStorage.getItem("nexus-device")}catch{}const Kl=new URLSearchParams(location.search).get("device"),kg=["desktop","mobile","board"].includes(Kl)?Kl:null,Og=kg||(["desktop","mobile","board"].includes(qr)?qr:"auto");Kt(".device-chip").forEach(i=>{i.classList.toggle("selected",i.dataset.device===Og),i.addEventListener("click",()=>{const e=i.dataset.device;try{e==="auto"?localStorage.removeItem("nexus-device"):localStorage.setItem("nexus-device",e)}catch{}Ne?.audio.ui(),setTimeout(()=>location.reload(),140)})});function Bg(i,e={}){const t=z("#pause-reason");if(t){const s=i==="paused"&&{visibility:"已因切换标签 / 锁屏自动暂停，战场时间已冻结",blur:"已因窗口失焦自动暂停，战场时间已冻结",pagehide:"已因页面切换自动暂停，战场时间已冻结"}[e.pauseReason]||"";t.textContent=s,t.classList.toggle("active",!!s)}z("#menu-screen").classList.toggle("active",i==="menu"),z("#hud").classList.toggle("active",["playing","paused","upgrade","shop"].includes(i)),z("#pause-screen").classList.toggle("active",i==="paused"),z("#upgrade-screen").classList.toggle("active",i==="upgrade"),z("#shop-screen").classList.toggle("active",i==="shop"),z("#end-screen").classList.toggle("active",i==="ended"),z("#hud")?.classList.toggle("paused",i==="paused"),z("#hud-feedback")?.classList.toggle("hidden",i!=="playing"),i==="menu"&&(uo(),document.exitPointerLock?.()),i==="ended"&&Qg(e)}function zg(i){z("#health-fill").style.width=`${Math.max(0,i.health/i.maxHealth*100)}%`,z("#health-value").textContent=Math.ceil(Math.max(0,i.health)),z("#shield-fill").style.width=`${Math.max(0,i.shield/i.maxShield*100)}%`,z("#shield-value").textContent=Math.ceil(Math.max(0,i.shield)),z("#wave-value").textContent=ii(i.wave),z("#wave-total").textContent=i.mode==="endless"?"/ ∞":`/ ${i.waveTotal||15}`,z("#mode-label").textContent={campaign:"核心行动",endless:"无尽裂隙",training:"模拟训练",gauntlet:"限时歼灭"}[i.mode]||"核心行动";const e=z("#gauntlet-timer");e.textContent=i.mode==="gauntlet"?`剩余 ${Math.ceil(i.waveTimeLeft||0)}s · 击杀续时`:"",e.classList.toggle("urgent",i.mode==="gauntlet"&&i.waveTimeLeft<12),z("#difficulty-label").textContent=i.difficulty,z("#enemy-count").textContent=i.intermission?"区域暂时安全":`${i.enemies} 个敌对信号`,z("#score-value").textContent=ii(i.score,6),z("#combo-value").textContent=`× ${i.combo.toFixed(1)}`;const t=z("#combo-display");if(t){const l=i.comboCount||0;Number(t.dataset.prev||0)<l&&(t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse")),t.dataset.prev=l,z("#combo-count").textContent=l,z("#combo-mult").textContent=`× ${i.combo.toFixed(1)}`,t.classList.toggle("hot",l>=10),t.classList.toggle("active",l>=2)}z("#weapon-name").innerHTML=i.weapon.label,z("#weapon-class").textContent=i.weapon.className;const n=z("#scope-readout");n&&(i.aiming&&i.scopeType==="sniper"?(n.textContent=`${i.sniperZoom}×`,n.classList.add("visible")):n.classList.remove("visible")),z("#ammo-value").textContent=ii(i.ammo),z("#reserve-value").textContent=i.reserve,z("#reload-hint").classList.toggle("visible",i.ammo===0||i.reloading),z("#reload-hint").textContent=i.reloading?"正在装填…":"按 R 装填弹药",z("#crosshair").classList.toggle("reloading",i.reloading);const s=z(".weapon-slots"),a=i.loadout||[0],r=a.join(",");s.dataset.signature!==r&&(s.dataset.signature=r,s.innerHTML=a.slice(0,6).map((l,h)=>`<span data-slot="${l}">${h+1}</span>`).join("")),Kt(".weapon-slots span").forEach(l=>l.classList.toggle("active",Number(l.dataset.slot)===i.weaponIndex)),z("#credits-value").textContent=`${Math.floor(i.credits||0)} CR`,jl("#ability-dash",i.dashCooldown,i.dashMax),jl("#ability-pulse",i.pulseCooldown,i.pulseMax),Hg(i.skills,i.skillBuff);const o=i.overdrive>0?100:i.energy/i.energyMax*100;z("#energy-fill").style.width=`${Math.max(0,Math.min(100,o))}%`;const c=i.energy>=i.energyMax&&i.overdrive<=0;z("#energy-block").classList.toggle("ready",c),z("#energy-block").classList.toggle("active",i.overdrive>0),z("#overdrive-status").textContent=i.overdrive>0?`超载 ${i.overdrive.toFixed(1)}s`:c?"就绪 · 按 F 释放":`充能 ${Math.floor(o)}%`,z("#mobile-overdrive")?.classList.toggle("ready",c),z("#boss-hud").classList.toggle("active",!!i.boss),i.boss&&(z("#boss-fill").style.width=`${Math.max(0,i.boss.health/i.boss.maxHealth*100)}%`),i.mission&&(z("#objective-label").textContent=i.mission.done?"任务完成":"战术任务",z("#objective-title").textContent=i.mission.text,z("#objective-sub").textContent=i.mission.done?`奖励已发放 · +${Math.round(i.mission.reward*(i.missionBonus||1))} CR`:`进度 ${Math.min(i.mission.progress,i.mission.target)} / ${i.mission.target} · 奖励 ${i.mission.reward} CR`,z("#objective").classList.toggle("mission-done",i.mission.done)),z("#objective").classList.toggle("hidden",!i.mission&&(i.wave>1||i.elapsed>12)),i.vendorNearby&&(z("#objective-sub").textContent="按 G 与流动商人交易 · 可购买武器与补给"),i.board&&(z("#board-badge").classList.toggle("demo",!!i.demo),z("#board-demo-state").textContent=i.demo?"自动演示中":"手动操作")}function jl(i,e,t){const n=z(i),s=e<=0;n.classList.toggle("cooldown",!s),n.querySelector(".ability-status").textContent=s?"就绪":`${e.toFixed(1)}s`,n.querySelector(".ability span i").style.width=`${100-Math.min(100,e/Math.max(.1,t)*100)}%`}let Zl="";function Hg(i,e){const t=z("#skill-bar"),n=z("#mobile-skills");if(!t||!n)return;const s=i||[],a=s.map(o=>o.id).join(","),r=Ne&&Ne.isTouch;if(a!==Zl){Zl=a;const o=["Z","X","V","B"];t.innerHTML=s.map((c,l)=>`<button class="skill-slot" data-skill="${l}"><kbd>${o[l]||""}</kbd><div class="skill-ic">${c.icon}</div><span class="skill-cd"></span></button>`).join(""),n.innerHTML=s.map((c,l)=>`<button class="mobile-skill" data-skill="${l}">${c.icon}</button>`).join(""),t.style.display=!r&&s.length?"flex":"none",n.style.display=r&&s.length?"flex":"none"}s.forEach((o,c)=>{const l=o.cooldown<=0,h=t.children[c];h&&(h.classList.toggle("cooldown",!l),h.querySelector(".skill-cd").textContent=l?"":o.cooldown.toFixed(1),h.style.setProperty("--p",l?"100%":`${100-Math.min(100,o.cooldown/Math.max(.1,o.max)*100)}%`));const f=n.children[c];f&&f.classList.toggle("cooldown",!l)})}function Vg(i,e="",t="COMBAT UPDATE",n=2200){clearTimeout(Wl);const s=z("#announcer");s.querySelector("small").textContent=t,s.querySelector("strong").textContent=i,s.querySelector("p").textContent=e,s.classList.add("active"),Wl=setTimeout(()=>s.classList.remove("active"),n)}function ho(i,e=1800){clearTimeout(Xl),z("#interact-toast").textContent=i,z("#interact-toast").classList.add("active"),Xl=setTimeout(()=>z("#interact-toast").classList.remove("active"),e)}function Gg(i){clearTimeout(Yl);const e=z("#story-banner");!e||!i||(e.querySelector("small").textContent="剧情 // STORY LOG",e.querySelector("strong").textContent=i.title,e.querySelector("p").textContent=i.text,e.classList.remove("active"),e.offsetWidth,e.classList.add("active"),Yl=setTimeout(()=>e.classList.remove("active"),6500))}function Wg(i,e,t,n){const s=z("#combat-banner");s.className=`combat-banner ${i}`,s.querySelector("small").textContent=e,s.querySelector("strong").textContent=t,s.querySelector("p").textContent=n,s.offsetWidth,s.classList.add("show")}function Xg(i="light"){Ne?.audio?.glitch?.(i);const e=z("#glitch-flash");e.className="glitch-flash",e.offsetWidth,e.classList.add(i)}function qg(i){z("#slowmo-vignette").classList.toggle("active",i)}function Yg(i){const e=z("#achievement-toast");e.querySelector("strong").textContent=i.name,e.querySelector("p").textContent=i.desc,e.classList.remove("active"),e.offsetWidth,e.classList.add("active"),clearTimeout(ql),ql=setTimeout(()=>e.classList.remove("active"),3e3)}function $g({amount:i,x:e,y:t,critical:n,kill:s,combo:a,kind:r="normal"}){const o=z("#damage-numbers"),c=performance.now();if(o.querySelectorAll(".damage-number").length>18||c-$l<18)return;$l=c;const l=document.createElement("div");if(l.className=`damage-number${s?" kill":n?" critical":""}${r==="element"?" element":""}`,l.textContent=i,r==="kill"){const h=document.createElement("i");h.className="kill-tag",h.textContent="ELIMINATED",l.appendChild(h)}if(l.style.left=`${e}px`,l.style.top=`${t}px`,o.appendChild(l),setTimeout(()=>l.remove(),820),a>=2){const h=document.createElement("div");h.className=`combo-popup${a>=10?" hot":""}`,h.innerHTML=`<b>${a}</b><span>HIT</span>`,h.style.left=`${e}px`,h.style.top=`${t-48}px`,o.appendChild(h),setTimeout(()=>h.remove(),900)}}function Kg(i){const e=i.upgrades.length?i.upgrades.map(t=>`<span>${t.icon} ${t.name}</span>`).join(""):'<span class="pause-build-empty">尚未安装战术模块</span>';z("#pause-build").innerHTML=`
    <div class="pause-build-head"><span>当前作战配置</span><span>${i.difficulty}难度</span></div>
    <div class="pause-build-stats"><span>伤害 +${i.damage}%</span><span>暴击 ${i.crit}%</span><span>击毁 ${i.kills}</span><span>波次 ${ii(i.wave)}</span></div>
    <div class="pause-build-modules">${e}</div>`}function jg(i,e){const t=document.createElement("div");for(t.innerHTML=`<span>目标清除</span><strong>${i}</strong><b>+${e}</b>`,z("#kill-feed").prepend(t),setTimeout(()=>t.remove(),3500);z("#kill-feed").children.length>4;)z("#kill-feed").lastChild.remove()}function Zg(i=!1){const e=typeof i=="boolean"?{kill:i,kind:i?"kill":"normal"}:i||{},t=z("#hitmarker");t.classList.remove("active","kill","critical","element"),t.offsetWidth,t.classList.add("active");const n=e.kind||(e.kill?"kill":"normal");n!=="normal"&&t.classList.add(n)}function $s(i,e,t,n){const s=z(t);!s||!i||(z(n)&&(z(n).textContent=`${Math.floor(e)} CR`),s.innerHTML=i.map((a,r)=>{const o=a.sold||e<a.price,c=a.category==="skill"?a.kind==="active"?"主动技能":"被动技能":a.category==="supply"?"战场补给":Xc[a.category]||"武器",l=a.rarity?`<span class="rarity-badge rarity-${a.rarity}">${"◆".repeat(a.rarity)} R${a.rarity}</span>`:"",h=a.sold?"":`<button class="lock-btn${a.locked?" locked":""}" data-lock="${r}" title="锁定后刷新不替换">${a.locked?"🔒":"🔓"}</button>`;return`<div class="shop-cell">
      <button class="shop-item${a.sold?" sold":""}${a.locked?" locked":""}" data-shop="${r}" ${o?"disabled":""}>
        <small>${c}${l}</small>
        <strong>${a.name}</strong><p>${a.desc}</p><b>${a.sold?"已购入":`${a.price} CR`}</b>
      </button>${h}
    </div>`}).join(""),s.querySelectorAll("[data-shop]").forEach(a=>a.addEventListener("click",()=>Ne.buyShopItem(Number(a.dataset.shop)))),s.querySelectorAll("[data-lock]").forEach(a=>a.addEventListener("click",r=>{r.stopPropagation(),Ne.lockShopItem(Number(a.dataset.lock))})))}function Jg(i){const{freeChoices:e,shop:t,credits:n,rerollCost:s,freePicked:a,freePickIndex:r,shopPhase:o}=i,c=o==="shop",l=z("#free-phase"),h=z("#shop-phase");l&&(l.style.display=c?"none":""),h&&(h.style.display=c?"":"none"),Kt(".upgrade-step").forEach(g=>g.classList.toggle("active",g.dataset.step===(c?"shop":"free"))),z("#free-choices").innerHTML=e.map((g,v)=>{const p=a&&r===v,m=a&&r!==v,M=g.levelOf?g.levelOf(Ne):0;return`<button class="free-card${p?" picked":""}${m?" dimmed":""}" data-free="${v}" ${a&&!p?"disabled":""}>
      <span class="free-num">0${v+1}</span>
      <div class="free-icon">${g.icon}</div>
      <h3>${g.name}</h3>
      <p>${g.desc}</p>
      ${M>0?`<small class="free-owned">当前 Lv.${M} · 可叠加</small>`:""}
      ${p?'<b class="free-done">已领取 ✓</b>':'<b class="free-pick">领取 ↗</b>'}
    </button>`}).join(""),Kt("[data-free]").forEach(g=>g.addEventListener("click",()=>Ne.chooseFreeUpgrade(Number(g.dataset.free)))),$s(t,n,"#shop-panel","#shop-credits");const f=z("#reroll-free-button");f&&(z("#reroll-free-label").textContent=`刷新选项 · ${Math.floor(s)} CR`,f.disabled=a||n<s);const d=z("#reroll-shop-button");d&&(z("#reroll-label").textContent=`刷新货架 · ${Math.floor(s)} CR`,d.disabled=n<s);const u=z("#deploy-button");u&&(u.disabled=!a)}function Qg(i){const e=i.victory;z("#end-eyebrow").textContent=e?"CORE DESTROYED / OPERATION COMPLETE":"SIGNAL LOST / OPERATION FAILED",z("#end-title").innerHTML=e?"黎明已至<span>.</span>":"连接中断<span>.</span>",z("#end-desc").textContent=e?"守望者核心已摧毁。第七区的天空，再次属于人类。":"你的作战信号已消失，但裂隙仍在扩张。",z("#end-score").textContent=Ag(i.score),z("#end-wave").textContent=ii(i.wave),z("#end-kills").textContent=i.kills,z("#end-accuracy").textContent=`${Math.round(i.accuracy)}%`,z("#new-record").classList.toggle("active",i.newRecord),z("#end-career").textContent=i.career?`生涯累计 // 出击 ${i.career.runs} 次 · 击毁 ${i.career.kills} · 通关 ${i.career.wins} · 徽章 ${i.career.achievements.length}/${ea.length} · ${i.difficulty}难度`:"",uo()}function uo(){const i=Number(localStorage.getItem("nexus-best-score")||0),e=Number(localStorage.getItem("nexus-best-wave")||0);z("#best-score").textContent=ii(i,6).replace(/\B(?=(\d{3})+(?!\d))/g,","),z("#best-wave").textContent=`最高波次 ${ii(e)}`,Fg()}function ev(i){z("#damage-vignette").classList.remove("active"),z("#damage-vignette").offsetWidth,z("#damage-vignette").classList.add("active"),Number.isFinite(i)&&(z("#damage-direction").style.transform=`translate(-50%, -50%) rotate(${i}rad)`,z("#damage-direction").classList.remove("active"),z("#damage-direction").offsetWidth,z("#damage-direction").classList.add("active"))}function ha(i){co=i,ca(),Ne.start(i,$c,Kc),z("#mobile-demo")?.classList.toggle("active",Ne.demoMode),z("#mobile-aim")?.classList.toggle("active",Ne.aiming)}Ne=new Tg(z("#game-canvas"),z("#radar"),{onState:Bg,onHUD:zg,onAnnounce:Vg,onToast:ho,onKill:jg,onHit:Zg,onUpgrades:Jg,onShop:i=>{i.standalone||$s(i.shop,i.credits,"#shop-panel","#shop-credits"),$s(i.shop,i.credits,"#shop-options","#field-shop-credits")},onDamage:ev,onBuild:Kg,onAchievement:Yg,onDamageNumber:$g,onPerfect:()=>Wg("perfect","PERFECT DODGE","极限闪避","完美时机 · 时停反击窗口"),onGlitch:i=>Xg(i),onSlowmo:i=>qg(i),onStory:i=>Gg(i),onDemo:i=>{z("#board-badge").classList.toggle("demo",i),z("#board-demo-state").textContent=i?"自动演示中":"手动操作"}});window.game=Ne;window.__game=Ne;window.nexusGame=Ne;z("#cheat-close").addEventListener("click",()=>Ne.toggleCheatConsole(!1));z("#shop-close").addEventListener("click",()=>Ne.closeShopStandalone());z("#reroll-free-button")&&z("#reroll-free-button").addEventListener("click",()=>Ne.rerollFree());z("#reroll-shop-button")&&z("#reroll-shop-button").addEventListener("click",()=>Ne.rerollShop());z("#to-shop-button")&&z("#to-shop-button").addEventListener("click",()=>Ne.gotoShop());z("#deploy-button")&&z("#deploy-button").addEventListener("click",()=>Ne.deploy());Kt(".upgrade-step").forEach(i=>i.addEventListener("click",()=>{if(i.dataset.step==="shop")Ne.gotoShop();else{const e=z("#free-phase"),t=z("#shop-phase");e&&(e.style.display=""),t&&(t.style.display="none"),Kt(".upgrade-step").forEach(n=>n.classList.toggle("active",n.dataset.step==="free"))}}));z("#cheat-console").addEventListener("click",i=>{i.target===z("#cheat-console")&&Ne.toggleCheatConsole(!1)});const Jl=z("#mobile-pause");Jl&&Jl.addEventListener("click",()=>{Ne.state==="playing"&&Ne.pause()});z("#skill-bar")?.addEventListener("click",i=>{const e=i.target.closest("[data-skill]");e&&Ne.activateSkill(Number(e.dataset.skill))});z("#mobile-skills")?.addEventListener("click",i=>{const e=i.target.closest("[data-skill]");e&&Ne.activateSkill(Number(e.dataset.skill))});function tv(){const i=document.getElementById("cheat-buttons");if(!i)return;const e=[{code:"lockon",key:"lock",label:"锁头",desc:"LOCKON"},{code:"autofire",key:"auto",label:"自动射击",desc:"AUTOFIRE"},{code:"godmode",key:"god",label:"无敌",desc:"GODMODE"},{code:"infinity",key:"ammo",label:"无限弹药",desc:"INFINITY"},{code:"xray",key:"wall",label:"透视",desc:"XRAY"},{code:"timeslip",key:"slow",label:"子弹时间",desc:"TIMESLIP"}],t=[{code:"purge",label:"清场",desc:"PURGE"},{code:"arsenal",label:"全武器",desc:"ARSENAL"},{code:"recharge",label:"回满",desc:"RECHARGE"},{code:"overbound",label:"协议全开",desc:"OVERBOUND"},{code:"standdown",label:"解除全部",desc:"STANDDOWN"}];i.innerHTML='<div class="cheat-btn-group"><span class="cheat-btn-label">切换类 // TOGGLE</span><div class="cheat-btn-grid">'+e.map(n=>`<button class="cheat-btn" data-cheat="${n.code}" data-cheat-key="${n.key}"><b>${n.label}</b><small>${n.desc}</small></button>`).join("")+'</div></div><div class="cheat-btn-group"><span class="cheat-btn-label">指令类 // ACTION</span><div class="cheat-btn-grid">'+t.map(n=>`<button class="cheat-btn action" data-cheat="${n.code}"><b>${n.label}</b><small>${n.desc}</small></button>`).join("")+"</div></div>",i.querySelectorAll("[data-cheat]").forEach(n=>{n.addEventListener("click",()=>Ne.applyCheat(n.dataset.cheat))})}tv();z("#start-button").addEventListener("click",()=>ha(Yc));z("#training-button").addEventListener("click",()=>ha("training"));z("#resume-button").addEventListener("click",()=>Ne.resume());z("#pause-button").addEventListener("click",()=>Ne.pause());z("#restart-button").addEventListener("click",()=>ha(co));z("#retry-button").addEventListener("click",()=>ha(co));z("#quit-button").addEventListener("click",()=>Ne.quit());z("#end-quit-button").addEventListener("click",()=>Ne.quit());z("#audio-toggle").addEventListener("click",()=>{const i=Ne.audio.toggle();localStorage.setItem("nexus-audio",i?"1":"0"),Ri()});localStorage.getItem("nexus-audio")==="0"&&(Ne.audio.enabled=!1);Ri();window.nexusSettings=Ue;window.nexusSettingsApi={setSetting:Bc,resetSettings:zc,defaults:ri,applySettings:Ri};let er=0,tr=performance.now();function jc(i){if(er+=1,i-tr>=1e3){const e=Math.round(er*1e3/(i-tr));if(Ue.showFps){const t=z("#fps-counter");t&&(t.textContent=`${e} FPS`)}er=0,tr=i}requestAnimationFrame(jc)}requestAnimationFrame(jc);document.addEventListener("keydown",i=>{i.code==="Escape"&&z("#modal-backdrop").classList.contains("active")&&ca(),z("#upgrade-screen").classList.contains("active")&&(["Digit1","Digit2","Digit3"].includes(i.code)?Ne.chooseFreeUpgrade(Number(i.code.slice(-1))-1):i.code==="Enter"&&Ne.deploy())});uo();

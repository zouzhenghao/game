(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Va="180",kc=0,po=1,Bc=2,Ol=1,kl=2,yn=3,kn=0,Vt=1,Ft=2,Fn=0,bi=1,sn=2,mo=3,go=4,zc=5,Jn=100,Hc=101,Vc=102,Gc=103,Wc=104,Xc=200,qc=201,Yc=202,$c=203,Jr=204,Qr=205,Kc=206,jc=207,Zc=208,Jc=209,Qc=210,eh=211,th=212,nh=213,ih=214,ea=0,ta=1,na=2,Ri=3,ia=4,sa=5,ra=6,aa=7,Bl=0,sh=1,rh=2,On=0,ah=1,oh=2,lh=3,zl=4,ch=5,hh=6,dh=7,Hl=300,Ci=301,Pi=302,oa=303,la=304,Qs=306,es=1e3,ei=1001,ca=1002,an=1003,uh=1004,fs=1005,hn=1006,hr=1007,ti=1008,fn=1009,Vl=1010,Gl=1011,ts=1012,Ga=1013,ii=1014,Mn=1015,os=1016,Wa=1017,Xa=1018,ns=1020,Wl=35902,Xl=35899,ql=1021,Yl=1022,rn=1023,is=1026,ss=1027,$l=1028,qa=1029,Kl=1030,Ya=1031,$a=1033,zs=33776,Hs=33777,Vs=33778,Gs=33779,ha=35840,da=35841,ua=35842,fa=35843,pa=36196,ma=37492,ga=37496,va=37808,_a=37809,xa=37810,ya=37811,Ma=37812,Sa=37813,wa=37814,Ea=37815,ba=37816,Ta=37817,Aa=37818,Ra=37819,Ca=37820,Pa=37821,La=36492,Ia=36494,Da=36495,Ua=36283,Na=36284,Fa=36285,Oa=36286,fh=3200,ph=3201,jl=0,mh=1,Un="",Lt="srgb",Li="srgb-linear",Ys="linear",ct="srgb",li=7680,vo=519,gh=512,vh=513,_h=514,Zl=515,xh=516,yh=517,Mh=518,Sh=519,_o=35044,xo="300 es",dn=2e3,$s=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yo=1234567;const qi=Math.PI/180,rs=180/Math.PI;function Ni(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function Ka(i,e){return(i%e+e)%e}function wh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Eh(i,e,t){return i!==e?(t-i)/(e-i):0}function Yi(i,e,t){return(1-t)*i+t*e}function bh(i,e,t,n){return Yi(i,e,1-Math.exp(-t*n))}function Th(i,e=1){return e-Math.abs(Ka(i,e*2)-e)}function Ah(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Rh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ch(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ph(i,e){return i+Math.random()*(e-i)}function Lh(i){return i*(.5-Math.random())}function Ih(i){i!==void 0&&(yo=i);let e=yo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dh(i){return i*qi}function Uh(i){return i*rs}function Nh(i){return(i&i-1)===0&&i!==0}function Fh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Oh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kh(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),d=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),u=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*d,c*f,c*h,o*l);break;case"YZY":i.set(c*h,o*d,c*f,o*l);break;case"ZXZ":i.set(c*f,c*h,o*d,o*l);break;case"XZX":i.set(o*d,c*g,c*u,o*l);break;case"YXY":i.set(c*u,o*d,c*g,o*l);break;case"ZYZ":i.set(c*g,c*u,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $i={DEG2RAD:qi,RAD2DEG:rs,generateUUID:Ni,clamp:$e,euclideanModulo:Ka,mapLinear:wh,inverseLerp:Eh,lerp:Yi,damp:bh,pingpong:Th,smoothstep:Ah,smootherstep:Rh,randInt:Ch,randFloat:Ph,randFloatSpread:Lh,seededRandom:Ih,degToRad:Dh,radToDeg:Uh,isPowerOfTwo:Nh,ceilPowerOfTwo:Fh,floorPowerOfTwo:Oh,setQuaternionFromProperEuler:kh,normalize:kt,denormalize:wi};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],f=n[s+3];const h=r[a+0],u=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=u,e[t+2]=g,e[t+3]=v;return}if(f!==v||c!==h||l!==u||d!==g){let m=1-o;const p=c*h+l*u+d*g+f*v,b=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const R=Math.sqrt(E),y=Math.atan2(R,p*b);m=Math.sin(m*y)/R,o=Math.sin(o*y)/R}const x=o*b;if(c=c*m+h*x,l=l*m+u*x,d=d*m+g*x,f=f*m+v*x,m===1-o){const R=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=R,l*=R,d*=R,f*=R}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],f=r[a],h=r[a+1],u=r[a+2],g=r[a+3];return e[t]=o*g+d*f+c*u-l*h,e[t+1]=c*g+d*h+l*f-o*u,e[t+2]=l*g+d*u+o*h-c*f,e[t+3]=d*g-o*f-c*h-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),f=o(r/2),h=c(n/2),u=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*d*f+l*u*g,this._y=l*u*f-h*d*g,this._z=l*d*g+h*u*f,this._w=l*d*f-h*u*g;break;case"YXZ":this._x=h*d*f+l*u*g,this._y=l*u*f-h*d*g,this._z=l*d*g-h*u*f,this._w=l*d*f+h*u*g;break;case"ZXY":this._x=h*d*f-l*u*g,this._y=l*u*f+h*d*g,this._z=l*d*g+h*u*f,this._w=l*d*f-h*u*g;break;case"ZYX":this._x=h*d*f-l*u*g,this._y=l*u*f+h*d*g,this._z=l*d*g-h*u*f,this._w=l*d*f+h*u*g;break;case"YZX":this._x=h*d*f+l*u*g,this._y=l*u*f+h*d*g,this._z=l*d*g-h*u*f,this._w=l*d*f-h*u*g;break;case"XZY":this._x=h*d*f-l*u*g,this._y=l*u*f-h*d*g,this._z=l*d*g+h*u*f,this._w=l*d*f+h*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],f=t[10],h=n+o+f;if(h>0){const u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(d-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>f){const u=2*Math.sqrt(1+n-o-f);this._w=(d-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>f){const u=2*Math.sqrt(1+o-n-f);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+d)/u}else{const u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const u=1-t;return this._w=u*a+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),f=Math.sin((1-t)*d)/l,h=Math.sin(t*d)/l;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),d=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*d,this.y=n+c*d+o*l-r*f,this.z=s+c*f+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dr.copy(this).projectOnVector(e),this.sub(dr)}reflect(e){return this.sub(dr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dr=new A,Mo=new Fi;class Ge{constructor(e,t,n,s,r,a,o,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],f=n[7],h=n[2],u=n[5],g=n[8],v=s[0],m=s[3],p=s[6],b=s[1],E=s[4],x=s[7],R=s[2],y=s[5],P=s[8];return r[0]=a*v+o*b+c*R,r[3]=a*m+o*E+c*y,r[6]=a*p+o*x+c*P,r[1]=l*v+d*b+f*R,r[4]=l*m+d*E+f*y,r[7]=l*p+d*x+f*P,r[2]=h*v+u*b+g*R,r[5]=h*m+u*E+g*y,r[8]=h*p+u*x+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=d*a-o*l,h=o*c-d*r,u=l*r-a*c,g=t*f+n*h+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*l-d*n)*v,e[2]=(o*n-s*a)*v,e[3]=h*v,e[4]=(d*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=u*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ur.makeScale(e,t)),this}rotate(e){return this.premultiply(ur.makeRotation(-e)),this}translate(e,t){return this.premultiply(ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ur=new Ge;function Jl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bh(){const i=Ks("canvas");return i.style.display="block",i}const So={};function as(i){i in So||(So[i]=!0,console.warn(i))}function zh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const wo=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eo=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hh(){const i={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=wn(s.r),s.g=wn(s.g),s.b=wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?Ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return as("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return as("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Li]:{primaries:e,whitePoint:n,transfer:Ys,toXYZ:wo,fromXYZ:Eo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:wo,fromXYZ:Eo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}const nt=Hh();function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ci;class Vh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ci===void 0&&(ci=Ks("canvas")),ci.width=e.width,ci.height=e.height;const s=ci.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ci}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gh=0;class ja{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fr(s[a].image)):r.push(fr(s[a]))}else r=fr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wh=0;const pr=new A;class zt extends Ui{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=ei,s=ei,r=hn,a=ti,o=rn,c=fn,l=zt.DEFAULT_ANISOTROPY,d=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Ni(),this.name="",this.source=new ja(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pr).x}get height(){return this.source.getSize(pr).y}get depth(){return this.source.getSize(pr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Hl;zt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],d=c[4],f=c[8],h=c[1],u=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,x=(u+1)/2,R=(p+1)/2,y=(d+h)/4,P=(f+v)/4,L=(g+m)/4;return E>x&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=y/n,r=P/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=y/s,r=L/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=P/r,s=L/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-d)*(h-d));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-v)/b,this.z=(h-d)/b,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xh extends Ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new zt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ja(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends Xh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ql extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qh extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ls{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(r,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ps.copy(n.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),ms.subVectors(this.max,Bi),hi.subVectors(e.a,Bi),di.subVectors(e.b,Bi),ui.subVectors(e.c,Bi),Tn.subVectors(di,hi),An.subVectors(ui,di),Gn.subVectors(hi,ui);let t=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-Gn.z,Gn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,Gn.z,0,-Gn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-Gn.y,Gn.x,0];return!mr(t,hi,di,ui,ms)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,hi,di,ui,ms))?!1:(gs.crossVectors(Tn,An),t=[gs.x,gs.y,gs.z],mr(t,hi,di,ui,ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mn=[new A,new A,new A,new A,new A,new A,new A,new A],Qt=new A,ps=new ls,hi=new A,di=new A,ui=new A,Tn=new A,An=new A,Gn=new A,Bi=new A,ms=new A,gs=new A,Wn=new A;function mr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wn.fromArray(i,r);const o=s.x*Math.abs(Wn.x)+s.y*Math.abs(Wn.y)+s.z*Math.abs(Wn.z),c=e.dot(Wn),l=t.dot(Wn),d=n.dot(Wn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Yh=new ls,zi=new A,gr=new A;class cs{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zi.subVectors(e,this.center);const t=zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zi.copy(e.center).add(gr)),this.expandByPoint(zi.copy(e.center).sub(gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gn=new A,vr=new A,vs=new A,Rn=new A,_r=new A,_s=new A,xr=new A;class er{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){vr.copy(e).add(t).multiplyScalar(.5),vs.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(vr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(vs),o=Rn.dot(this.direction),c=-Rn.dot(vs),l=Rn.lengthSq(),d=Math.abs(1-a*a);let f,h,u,g;if(d>0)if(f=a*c-o,h=a*o-c,g=r*d,f>=0)if(h>=-g)if(h<=g){const v=1/d;f*=v,h*=v,u=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),u=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),u=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),u=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),u=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(vr).addScaledVector(vs,h),u}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const n=gn.dot(this.direction),s=gn.dot(gn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,s,r){_r.subVectors(t,e),_s.subVectors(n,e),xr.crossVectors(_r,_s);let a=this.direction.dot(xr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,e);const c=o*this.direction.dot(_s.crossVectors(Rn,_s));if(c<0)return null;const l=o*this.direction.dot(_r.cross(Rn));if(l<0||c+l>a)return null;const d=-o*Rn.dot(xr);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,s,r,a,o,c,l,d,f,h,u,g,v,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,d,f,h,u,g,v,m)}set(e,t,n,s,r,a,o,c,l,d,f,h,u,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=f,p[14]=h,p[3]=u,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/fi.setFromMatrixColumn(e,0).length(),r=1/fi.setFromMatrixColumn(e,1).length(),a=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*d,u=a*f,g=o*d,v=o*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=u+g*l,t[5]=h-v*l,t[9]=-o*c,t[2]=v-h*l,t[6]=g+u*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*d,u=c*f,g=l*d,v=l*f;t[0]=h+v*o,t[4]=g*o-u,t[8]=a*l,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=u*o-g,t[6]=v+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*d,u=c*f,g=l*d,v=l*f;t[0]=h-v*o,t[4]=-a*f,t[8]=g+u*o,t[1]=u+g*o,t[5]=a*d,t[9]=v-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*d,u=a*f,g=o*d,v=o*f;t[0]=c*d,t[4]=g*l-u,t[8]=h*l+v,t[1]=c*f,t[5]=v*l+h,t[9]=u*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,u=a*l,g=o*c,v=o*l;t[0]=c*d,t[4]=v-h*f,t[8]=g*f+u,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=u*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=a*c,u=a*l,g=o*c,v=o*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=h*f+v,t[5]=a*d,t[9]=u*f-g,t[2]=g*f-u,t[6]=o*d,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($h,e,Kh)}lookAt(e,t,n){const s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Cn.crossVectors(n,Xt),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Cn.crossVectors(n,Xt)),Cn.normalize(),xs.crossVectors(Xt,Cn),s[0]=Cn.x,s[4]=xs.x,s[8]=Xt.x,s[1]=Cn.y,s[5]=xs.y,s[9]=Xt.y,s[2]=Cn.z,s[6]=xs.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],f=n[5],h=n[9],u=n[13],g=n[2],v=n[6],m=n[10],p=n[14],b=n[3],E=n[7],x=n[11],R=n[15],y=s[0],P=s[4],L=s[8],M=s[12],T=s[1],I=s[5],F=s[9],V=s[13],j=s[2],q=s[6],K=s[10],ie=s[14],G=s[3],fe=s[7],_e=s[11],Se=s[15];return r[0]=a*y+o*T+c*j+l*G,r[4]=a*P+o*I+c*q+l*fe,r[8]=a*L+o*F+c*K+l*_e,r[12]=a*M+o*V+c*ie+l*Se,r[1]=d*y+f*T+h*j+u*G,r[5]=d*P+f*I+h*q+u*fe,r[9]=d*L+f*F+h*K+u*_e,r[13]=d*M+f*V+h*ie+u*Se,r[2]=g*y+v*T+m*j+p*G,r[6]=g*P+v*I+m*q+p*fe,r[10]=g*L+v*F+m*K+p*_e,r[14]=g*M+v*V+m*ie+p*Se,r[3]=b*y+E*T+x*j+R*G,r[7]=b*P+E*I+x*q+R*fe,r[11]=b*L+E*F+x*K+R*_e,r[15]=b*M+E*V+x*ie+R*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],f=e[6],h=e[10],u=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*f-s*l*f-r*o*h+n*l*h+s*o*u-n*c*u)+v*(+t*c*u-t*l*h+r*a*h-s*a*u+s*l*d-r*c*d)+m*(+t*l*f-t*o*u-r*a*f+n*a*u+r*o*d-n*l*d)+p*(-s*o*d-t*c*f+t*o*h+s*a*f-n*a*h+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=e[9],h=e[10],u=e[11],g=e[12],v=e[13],m=e[14],p=e[15],b=f*m*l-v*h*l+v*c*u-o*m*u-f*c*p+o*h*p,E=g*h*l-d*m*l-g*c*u+a*m*u+d*c*p-a*h*p,x=d*v*l-g*f*l+g*o*u-a*v*u-d*o*p+a*f*p,R=g*f*c-d*v*c-g*o*h+a*v*h+d*o*m-a*f*m,y=t*b+n*E+s*x+r*R;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/y;return e[0]=b*P,e[1]=(v*h*r-f*m*r-v*s*u+n*m*u+f*s*p-n*h*p)*P,e[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*p+n*c*p)*P,e[3]=(f*c*r-o*h*r-f*s*l+n*h*l+o*s*u-n*c*u)*P,e[4]=E*P,e[5]=(d*m*r-g*h*r+g*s*u-t*m*u-d*s*p+t*h*p)*P,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*P,e[7]=(a*h*r-d*c*r+d*s*l-t*h*l-a*s*u+t*c*u)*P,e[8]=x*P,e[9]=(g*f*r-d*v*r-g*n*u+t*v*u+d*n*p-t*f*p)*P,e[10]=(a*v*r-g*o*r+g*n*l-t*v*l-a*n*p+t*o*p)*P,e[11]=(d*o*r-a*f*r-d*n*l+t*f*l+a*n*u-t*o*u)*P,e[12]=R*P,e[13]=(d*v*s-g*f*s+g*n*h-t*v*h-d*n*m+t*f*m)*P,e[14]=(g*o*s-a*v*s-g*n*c+t*v*c+a*n*m-t*o*m)*P,e[15]=(a*f*s-d*o*s+d*n*c-t*f*c-a*n*h+t*o*h)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,f=o+o,h=r*l,u=r*d,g=r*f,v=a*d,m=a*f,p=o*f,b=c*l,E=c*d,x=c*f,R=n.x,y=n.y,P=n.z;return s[0]=(1-(v+p))*R,s[1]=(u+x)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(u-x)*y,s[5]=(1-(h+p))*y,s[6]=(m+b)*y,s[7]=0,s[8]=(g+E)*P,s[9]=(m-b)*P,s[10]=(1-(h+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=fi.set(s[0],s[1],s[2]).length();const a=fi.set(s[4],s[5],s[6]).length(),o=fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],en.copy(this);const l=1/r,d=1/a,f=1/o;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=d,en.elements[5]*=d,en.elements[6]*=d,en.elements[8]*=f,en.elements[9]*=f,en.elements[10]*=f,t.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=dn,c=!1){const l=this.elements,d=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),u=(n+s)/(n-s);let g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===dn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===$s)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=dn,c=!1){const l=this.elements,d=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),u=-(n+s)/(n-s);let g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===dn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===$s)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fi=new A,en=new ut,$h=new A(0,0,0),Kh=new A(1,1,1),Cn=new A,xs=new A,Xt=new A,bo=new ut,To=new Fi;class on{constructor(e=0,t=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],f=s[2],h=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return To.setFromEuler(this),this.setFromQuaternion(To,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Za{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jh=0;const Ao=new A,pi=new Fi,vn=new ut,ys=new A,Hi=new A,Zh=new A,Jh=new Fi,Ro=new A(1,0,0),Co=new A(0,1,0),Po=new A(0,0,1),Lo={type:"added"},Qh={type:"removed"},mi={type:"childadded",child:null},yr={type:"childremoved",child:null};class wt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new A,t=new on,n=new Fi,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ge}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(Ro,e)}rotateY(e){return this.rotateOnAxis(Co,e)}rotateZ(e){return this.rotateOnAxis(Po,e)}translateOnAxis(e,t){return Ao.copy(e).applyQuaternion(this.quaternion),this.position.add(Ao.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ro,e)}translateY(e){return this.translateOnAxis(Co,e)}translateZ(e){return this.translateOnAxis(Po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ys.copy(e):ys.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Hi,ys,this.up):vn.lookAt(ys,Hi,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(vn),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lo),mi.child=e,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qh),yr.child=e,this.dispatchEvent(yr),yr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lo),mi.child=e,this.dispatchEvent(mi),mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,Zh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,Jh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),u=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new A(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new A,_n=new A,Mr=new A,xn=new A,gi=new A,vi=new A,Io=new A,Sr=new A,wr=new A,Er=new A,br=new ht,Tr=new ht,Ar=new ht;class nn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),tn.subVectors(e,t),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){tn.subVectors(s,t),_n.subVectors(n,t),Mr.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(_n),c=tn.dot(Mr),l=_n.dot(_n),d=_n.dot(Mr),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,u=(l*c-o*d)*h,g=(a*d-o*c)*h;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(a,xn.y),c.addScaledVector(o,xn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return br.setScalar(0),Tr.setScalar(0),Ar.setScalar(0),br.fromBufferAttribute(e,t),Tr.fromBufferAttribute(e,n),Ar.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(br,r.x),a.addScaledVector(Tr,r.y),a.addScaledVector(Ar,r.z),a}static isFrontFacing(e,t,n,s){return tn.subVectors(n,t),_n.subVectors(e,t),tn.cross(_n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),tn.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;gi.subVectors(s,n),vi.subVectors(r,n),Sr.subVectors(e,n);const c=gi.dot(Sr),l=vi.dot(Sr);if(c<=0&&l<=0)return t.copy(n);wr.subVectors(e,s);const d=gi.dot(wr),f=vi.dot(wr);if(d>=0&&f<=d)return t.copy(s);const h=c*f-d*l;if(h<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(gi,a);Er.subVectors(e,r);const u=gi.dot(Er),g=vi.dot(Er);if(g>=0&&u<=g)return t.copy(r);const v=u*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(vi,o);const m=d*g-u*f;if(m<=0&&f-d>=0&&u-g>=0)return Io.subVectors(r,s),o=(f-d)/(f-d+(u-g)),t.copy(s).addScaledVector(Io,o);const p=1/(m+v+h);return a=v*p,o=h*p,t.copy(n).addScaledVector(gi,a).addScaledVector(vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Rr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=Ka(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Rr(a,r,e+1/3),this.g=Rr(a,r,e),this.b=Rr(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=ec[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return nt.workingToColorSpace(Dt.copy(this),e),Math.round($e(Dt.r*255,0,255))*65536+Math.round($e(Dt.g*255,0,255))*256+Math.round($e(Dt.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Dt.copy(this),t);const n=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=d<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Lt){nt.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,s=Dt.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Ms);const n=Yi(Pn.h,Ms.h,t),s=Yi(Pn.s,Ms.s,t),r=Yi(Pn.l,Ms.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Ye;Ye.NAMES=ec;let ed=0;class ai extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=bi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Qr,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Qr&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class je extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new A,Ss=new Le;let td=0;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:td++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_o,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_o&&(e.usage=this.usage),e}}class tc extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nc extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let nd=0;const Jt=new ut,Cr=new wt,_i=new A,qt=new ls,Vi=new ls,Tt=new A;class yt extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jl(e)?nc:tc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ot(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(qt.min,Vi.min),qt.expandByPoint(Tt),Tt.addVectors(qt.max,Vi.max),qt.expandByPoint(Tt)):(qt.expandByPoint(Vi.min),qt.expandByPoint(Vi.max))}qt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Tt.fromBufferAttribute(o,l),c&&(_i.fromBufferAttribute(e,l),Tt.add(_i)),s=Math.max(s,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new A,c[L]=new A;const l=new A,d=new A,f=new A,h=new Le,u=new Le,g=new Le,v=new A,m=new A;function p(L,M,T){l.fromBufferAttribute(n,L),d.fromBufferAttribute(n,M),f.fromBufferAttribute(n,T),h.fromBufferAttribute(r,L),u.fromBufferAttribute(r,M),g.fromBufferAttribute(r,T),d.sub(l),f.sub(l),u.sub(h),g.sub(h);const I=1/(u.x*g.y-g.x*u.y);isFinite(I)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(I),m.copy(f).multiplyScalar(u.x).addScaledVector(d,-g.x).multiplyScalar(I),o[L].add(v),o[M].add(v),o[T].add(v),c[L].add(m),c[M].add(m),c[T].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,M=b.length;L<M;++L){const T=b[L],I=T.start,F=T.count;for(let V=I,j=I+F;V<j;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const E=new A,x=new A,R=new A,y=new A;function P(L){R.fromBufferAttribute(s,L),y.copy(R);const M=o[L];E.copy(M),E.sub(R.multiplyScalar(R.dot(M))).normalize(),x.crossVectors(y,M);const I=x.dot(c[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,I)}for(let L=0,M=b.length;L<M;++L){const T=b[L],I=T.start,F=T.count;for(let V=I,j=I+F;V<j;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);const s=new A,r=new A,a=new A,o=new A,c=new A,l=new A,d=new A,f=new A;if(e)for(let h=0,u=e.count;h<u;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,u=t.count;h<u;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,f=o.normalized,h=new l.constructor(c.length*d);let u=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?u=c[v]*o.data.stride+o.offset:u=c[v]*d;for(let p=0;p<d;p++)h[g++]=l[u++]}return new $t(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,f=l.length;d<f;d++){const h=l[d],u=e(h,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,h=l.length;f<h;f++){const u=l[f];d.push(u.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],f=r[l];for(let h=0,u=f.length;h<u;h++)d.push(f[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Do=new ut,Xn=new er,ws=new cs,Uo=new A,Es=new A,bs=new A,Ts=new A,Pr=new A,As=new A,No=new A,Rs=new A;class Y extends wt{constructor(e=new yt,t=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){As.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],f=r[c];d!==0&&(Pr.fromBufferAttribute(f,e),a?As.addScaledVector(Pr,d):As.addScaledVector(Pr.sub(t),d))}t.add(As)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(r),Xn.copy(e.ray).recast(e.near),!(ws.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(ws,Uo)===null||Xn.origin.distanceToSquared(Uo)>(e.far-e.near)**2))&&(Do.copy(r).invert(),Xn.copy(e.ray).applyMatrix4(Do),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],b=Math.max(m.start,u.start),E=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let x=b,R=E;x<R;x+=3){const y=o.getX(x),P=o.getX(x+1),L=o.getX(x+2);s=Cs(this,p,e,n,l,d,f,y,P,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const b=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);s=Cs(this,a,e,n,l,d,f,b,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],b=Math.max(m.start,u.start),E=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let x=b,R=E;x<R;x+=3){const y=x,P=x+1,L=x+2;s=Cs(this,p,e,n,l,d,f,y,P,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const b=m,E=m+1,x=m+2;s=Cs(this,a,e,n,l,d,f,b,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function id(i,e,t,n,s,r,a,o){let c;if(e.side===Vt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===kn,o),c===null)return null;Rs.copy(o),Rs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Rs);return l<t.near||l>t.far?null:{distance:l,point:Rs.clone(),object:i}}function Cs(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Es),i.getVertexPosition(c,bs),i.getVertexPosition(l,Ts);const d=id(i,e,t,n,Es,bs,Ts,No);if(d){const f=new A;nn.getBarycoord(No,Es,bs,Ts,f),s&&(d.uv=nn.getInterpolatedAttribute(s,o,c,l,f,new Le)),r&&(d.uv1=nn.getInterpolatedAttribute(r,o,c,l,f,new Le)),a&&(d.normal=nn.getInterpolatedAttribute(a,o,c,l,f,new A),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new A,materialIndex:0};nn.getNormal(Es,bs,Ts,h.normal),d.face=h,d.barycoord=f}return d}class un extends yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],f=[];let h=0,u=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function g(v,m,p,b,E,x,R,y,P,L,M){const T=x/P,I=R/L,F=x/2,V=R/2,j=y/2,q=P+1,K=L+1;let ie=0,G=0;const fe=new A;for(let _e=0;_e<K;_e++){const Se=_e*I-V;for(let We=0;We<q;We++){const it=We*T-F;fe[v]=it*b,fe[m]=Se*E,fe[p]=j,l.push(fe.x,fe.y,fe.z),fe[v]=0,fe[m]=0,fe[p]=y>0?1:-1,d.push(fe.x,fe.y,fe.z),f.push(We/P),f.push(1-_e/L),ie+=1}}for(let _e=0;_e<L;_e++)for(let Se=0;Se<P;Se++){const We=h+Se+q*_e,it=h+Se+q*(_e+1),Qe=h+(Se+1)+q*(_e+1),et=h+(Se+1)+q*_e;c.push(We,it,et),c.push(it,Qe,et),G+=6}o.addGroup(u,G,M),u+=G,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Bt(i){const e={};for(let t=0;t<i.length;t++){const n=Ii(i[t]);for(const s in n)e[s]=n[s]}return e}function sd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ic(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const rd={clone:Ii,merge:Bt};var ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ad,this.fragmentShader=od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class sc extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new A,Fo=new Le,Oo=new Le;class Yt extends sc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,Fo,Oo),t.subVectors(Oo,Fo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xi=-90,yi=1;class ld extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yt(xi,yi,e,t);s.layers=this.layers,this.add(s);const r=new Yt(xi,yi,e,t);r.layers=this.layers,this.add(r);const a=new Yt(xi,yi,e,t);a.layers=this.layers,this.add(a);const o=new Yt(xi,yi,e,t);o.layers=this.layers,this.add(o);const c=new Yt(xi,yi,e,t);c.layers=this.layers,this.add(c);const l=new Yt(xi,yi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(f,h,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class rc extends zt{constructor(e=[],t=Ci,n,s,r,a,o,c,l,d){super(e,t,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cd extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new rc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Fn});r.uniforms.tEquirect.value=t;const a=new Y(s,r),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=hn),new ld(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class at extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hd={type:"move"};class Lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=d.position.distanceTo(f.position),u=.02,g=.005;l.inputState.pinching&&h>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new at;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new tr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class dd extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ir=new A,ud=new A,fd=new Ge;class jn{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ir.subVectors(n,t).cross(ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ir),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fd.getNormalMatrix(e),s=this.coplanarPoint(Ir).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new cs,pd=new Le(.5,.5),Ps=new A;class Ja{constructor(e=new jn,t=new jn,n=new jn,s=new jn,r=new jn,a=new jn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],f=r[5],h=r[6],u=r[7],g=r[8],v=r[9],m=r[10],p=r[11],b=r[12],E=r[13],x=r[14],R=r[15];if(s[0].setComponents(l-a,u-d,p-g,R-b).normalize(),s[1].setComponents(l+a,u+d,p+g,R+b).normalize(),s[2].setComponents(l+o,u+f,p+v,R+E).normalize(),s[3].setComponents(l-o,u-f,p-v,R-E).normalize(),n)s[4].setComponents(c,h,m,x).normalize(),s[5].setComponents(l-c,u-h,p-m,R-x).normalize();else if(s[4].setComponents(l-c,u-h,p-m,R-x).normalize(),t===dn)s[5].setComponents(l+c,u+h,p+m,R+x).normalize();else if(t===$s)s[5].setComponents(c,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){qn.center.set(0,0,0);const t=pd.distanceTo(e.center);return qn.radius=.7071067811865476+t,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ps.x=s.normal.x>0?e.max.x:e.min.x,Ps.y=s.normal.y>0?e.max.y:e.min.y,Ps.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ki extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const js=new A,Zs=new A,ko=new ut,Gi=new er,Ls=new cs,Dr=new A,Bo=new A;class Ws extends wt{constructor(e=new yt,t=new Ki){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)js.fromBufferAttribute(t,s-1),Zs.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=js.distanceTo(Zs);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(s),Ls.radius+=r,e.ray.intersectsSphere(Ls)===!1)return;ko.copy(s).invert(),Gi.copy(e.ray).applyMatrix4(ko);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const u=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=u,m=g-1;v<m;v+=l){const p=d.getX(v),b=d.getX(v+1),E=Is(this,e,Gi,c,p,b,v);E&&t.push(E)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(u),p=Is(this,e,Gi,c,v,m,g-1);p&&t.push(p)}}else{const u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=u,m=g-1;v<m;v+=l){const p=Is(this,e,Gi,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Is(this,e,Gi,c,g-1,u,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Is(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(js.fromBufferAttribute(o,s),Zs.fromBufferAttribute(o,r),t.distanceSqToSegment(js,Zs,Dr,Bo)>n)return;Dr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Dr);if(!(l<e.near||l>e.far))return{distance:l,point:Bo.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const zo=new A,Ho=new A;class md extends Ws{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)zo.fromBufferAttribute(t,s),Ho.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zo.distanceTo(Ho);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ac extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vo=new ut,ka=new er,Ds=new cs,Us=new A;class gd extends wt{constructor(e=new yt,t=new ac){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),Ds.radius+=r,e.ray.intersectsSphere(Ds)===!1)return;Vo.copy(s).invert(),ka.copy(e.ray).applyMatrix4(Vo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let g=h,v=u;g<v;g++){const m=l.getX(g);Us.fromBufferAttribute(f,m),Go(Us,m,c,s,e,t,this)}}else{const h=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let g=h,v=u;g<v;g++)Us.fromBufferAttribute(f,g),Go(Us,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Go(i,e,t,n,s,r,a){const o=ka.distanceSqToPoint(i);if(o<t){const c=new A;ka.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class nr extends zt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oc extends zt{constructor(e,t,n=ii,s,r,a,o=an,c=an,l,d=is,f=1){if(d!==is&&d!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ja(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class lc extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sn extends yt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const d=[],f=[],h=[],u=[];let g=0;const v=[],m=n/2;let p=0;b(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new ot(f,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2));function b(){const x=new A,R=new A;let y=0;const P=(t-e)/n;for(let L=0;L<=r;L++){const M=[],T=L/r,I=T*(t-e)+e;for(let F=0;F<=s;F++){const V=F/s,j=V*c+o,q=Math.sin(j),K=Math.cos(j);R.x=I*q,R.y=-T*n+m,R.z=I*K,f.push(R.x,R.y,R.z),x.set(q,P,K).normalize(),h.push(x.x,x.y,x.z),u.push(V,1-T),M.push(g++)}v.push(M)}for(let L=0;L<s;L++)for(let M=0;M<r;M++){const T=v[M][L],I=v[M+1][L],F=v[M+1][L+1],V=v[M][L+1];(e>0||M!==0)&&(d.push(T,I,V),y+=3),(t>0||M!==r-1)&&(d.push(I,F,V),y+=3)}l.addGroup(p,y,0),p+=y}function E(x){const R=g,y=new Le,P=new A;let L=0;const M=x===!0?e:t,T=x===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*T,0),h.push(0,T,0),u.push(.5,.5),g++;const I=g;for(let F=0;F<=s;F++){const j=F/s*c+o,q=Math.cos(j),K=Math.sin(j);P.x=M*K,P.y=m*T,P.z=M*q,f.push(P.x,P.y,P.z),h.push(0,T,0),y.x=q*.5+.5,y.y=K*.5*T+.5,u.push(y.x,y.y),g++}for(let F=0;F<s;F++){const V=R+F,j=I+F;x===!0?d.push(j,j+1,V):d.push(j+1,j,V),L+=3}l.addGroup(p,L,x===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hs extends Sn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new hs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ir extends yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),d(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const E=new A,x=new A,R=new A;for(let y=0;y<t.length;y+=3)u(t[y+0],E),u(t[y+1],x),u(t[y+2],R),c(E,x,R,b)}function c(b,E,x,R){const y=R+1,P=[];for(let L=0;L<=y;L++){P[L]=[];const M=b.clone().lerp(x,L/y),T=E.clone().lerp(x,L/y),I=y-L;for(let F=0;F<=I;F++)F===0&&L===y?P[L][F]=M:P[L][F]=M.clone().lerp(T,F/I)}for(let L=0;L<y;L++)for(let M=0;M<2*(y-L)-1;M++){const T=Math.floor(M/2);M%2===0?(h(P[L][T+1]),h(P[L+1][T]),h(P[L][T])):(h(P[L][T+1]),h(P[L+1][T+1]),h(P[L+1][T]))}}function l(b){const E=new A;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(b),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function d(){const b=new A;for(let E=0;E<r.length;E+=3){b.x=r[E+0],b.y=r[E+1],b.z=r[E+2];const x=m(b)/2/Math.PI+.5,R=p(b)/Math.PI+.5;a.push(x,1-R)}g(),f()}function f(){for(let b=0;b<a.length;b+=6){const E=a[b+0],x=a[b+2],R=a[b+4],y=Math.max(E,x,R),P=Math.min(E,x,R);y>.9&&P<.1&&(E<.2&&(a[b+0]+=1),x<.2&&(a[b+2]+=1),R<.2&&(a[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function u(b,E){const x=b*3;E.x=e[x+0],E.y=e[x+1],E.z=e[x+2]}function g(){const b=new A,E=new A,x=new A,R=new A,y=new Le,P=new Le,L=new Le;for(let M=0,T=0;M<r.length;M+=9,T+=6){b.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),y.set(a[T+0],a[T+1]),P.set(a[T+2],a[T+3]),L.set(a[T+4],a[T+5]),R.copy(b).add(E).add(x).divideScalar(3);const I=m(R);v(y,T+0,b,I),v(P,T+2,E,I),v(L,T+4,x,I)}}function v(b,E,x,R){R<0&&b.x===1&&(a[E]=b.x-1),x.x===0&&x.z===0&&(a[E]=R/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.vertices,e.indices,e.radius,e.details)}}class bn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const d=n[s],h=n[s+1]-d,u=(a-d)/h;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Le:new A);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new A,s=[],r=[],a=[],o=new A,c=new ut;for(let u=0;u<=e;u++){const g=u/e;s[u]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let l=Number.MAX_VALUE;const d=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=l&&(l=d,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos($e(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,g))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos($e(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],u*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class cc extends bn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Le){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,u=l-this.aY;c=h*d-u*f+this.aX,l=h*f+u*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class vd extends cc{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Qa(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,d,f){let h=(a-r)/l-(o-r)/(l+d)+(o-a)/d,u=(o-a)/d-(c-a)/(d+f)+(c-o)/f;h*=d,u*=d,s(a,o,h,u)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Ns=new A,Ur=new Qa,Nr=new Qa,Fr=new Qa;class hc extends bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,d;this.closed||o>0?l=s[(o-1)%r]:(Ns.subVectors(s[0],s[1]).add(s[0]),l=Ns);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(Ns.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Ns),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),u),v=Math.pow(f.distanceToSquared(h),u),m=Math.pow(h.distanceToSquared(d),u);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ur.initNonuniformCatmullRom(l.x,f.x,h.x,d.x,g,v,m),Nr.initNonuniformCatmullRom(l.y,f.y,h.y,d.y,g,v,m),Fr.initNonuniformCatmullRom(l.z,f.z,h.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(Ur.initCatmullRom(l.x,f.x,h.x,d.x,this.tension),Nr.initCatmullRom(l.y,f.y,h.y,d.y,this.tension),Fr.initCatmullRom(l.z,f.z,h.z,d.z,this.tension));return n.set(Ur.calc(c),Nr.calc(c),Fr.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wo(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function _d(i,e){const t=1-i;return t*t*e}function xd(i,e){return 2*(1-i)*i*e}function yd(i,e){return i*i*e}function ji(i,e,t,n){return _d(i,e)+xd(i,t)+yd(i,n)}function Md(i,e){const t=1-i;return t*t*t*e}function Sd(i,e){const t=1-i;return 3*t*t*i*e}function wd(i,e){return 3*(1-i)*i*i*e}function Ed(i,e){return i*i*i*e}function Zi(i,e,t,n,s){return Md(i,e)+Sd(i,t)+wd(i,n)+Ed(i,s)}class bd extends bn{constructor(e=new Le,t=new Le,n=new Le,s=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Le){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zi(e,s.x,r.x,a.x,o.x),Zi(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Td extends bn{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zi(e,s.x,r.x,a.x,o.x),Zi(e,s.y,r.y,a.y,o.y),Zi(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ad extends bn{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rd extends bn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cd extends bn{constructor(e=new Le,t=new Le,n=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Le){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ji(e,s.x,r.x,a.x),ji(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dc extends bn{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ji(e,s.x,r.x,a.x),ji(e,s.y,r.y,a.y),ji(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pd extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],d=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Wo(o,c.x,l.x,d.x,f.x),Wo(o,c.y,l.y,d.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Le().fromArray(s))}return this}}var Ld=Object.freeze({__proto__:null,ArcCurve:vd,CatmullRomCurve3:hc,CubicBezierCurve:bd,CubicBezierCurve3:Td,EllipseCurve:cc,LineCurve:Ad,LineCurve3:Rd,QuadraticBezierCurve:Cd,QuadraticBezierCurve3:dc,SplineCurve:Pd});class sr extends ir{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sr(e.radius,e.detail)}}class zn extends ir{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zn(e.radius,e.detail)}}class En extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,f=e/o,h=t/c,u=[],g=[],v=[],m=[];for(let p=0;p<d;p++){const b=p*h-a;for(let E=0;E<l;E++){const x=E*f-r;g.push(x,-b,0),v.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const E=b+l*p,x=b+l*(p+1),R=b+1+l*(p+1),y=b+1+l*p;u.push(E,x,y),u.push(x,R,y)}this.setIndex(u),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.width,e.height,e.widthSegments,e.heightSegments)}}class eo extends yt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],d=[];let f=e;const h=(t-e)/s,u=new A,g=new Le;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;u.x=f*Math.cos(p),u.y=f*Math.sin(p),c.push(u.x,u.y,u.z),l.push(0,0,1),g.x=(u.x/t+1)/2,g.y=(u.y/t+1)/2,d.push(g.x,g.y)}f+=h}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const b=p+m,E=b,x=b+n+1,R=b+n+2,y=b+1;o.push(E,x,y),o.push(x,R,y)}}this.setIndex(o),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Di extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const d=[],f=new A,h=new A,u=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const b=[],E=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const y=R/t;f.x=-e*Math.cos(s+y*r)*Math.sin(a+E*o),f.y=e*Math.cos(a+E*o),f.z=e*Math.sin(s+y*r)*Math.sin(a+E*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(y+x,1-E),b.push(l++)}d.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const E=d[p][b+1],x=d[p][b],R=d[p+1][b],y=d[p+1][b+1];(p!==0||a>0)&&u.push(E,x,y),(p!==n-1||c<Math.PI)&&u.push(x,R,y)}this.setIndex(u),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nn extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],d=new A,f=new A,h=new A;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){const v=g/s*r,m=u/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),h.subVectors(f,d).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){const v=(s+1)*u+g-1,m=(s+1)*(u-1)+g-1,p=(s+1)*(u-1)+g,b=(s+1)*u+g;a.push(v,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class to extends yt{constructor(e=new dc(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new A,c=new A,l=new Le;let d=new A;const f=[],h=[],u=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ot(f,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2));function v(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),b(),p()}function m(E){d=e.getPointAt(E/t,d);const x=a.normals[E],R=a.binormals[E];for(let y=0;y<=s;y++){const P=y/s*Math.PI*2,L=Math.sin(P),M=-Math.cos(P);c.x=M*x.x+L*R.x,c.y=M*x.y+L*R.y,c.z=M*x.z+L*R.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=d.x+n*c.x,o.y=d.y+n*c.y,o.z=d.z+n*c.z,f.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=t;E++)for(let x=1;x<=s;x++){const R=(s+1)*(E-1)+(x-1),y=(s+1)*E+(x-1),P=(s+1)*E+x,L=(s+1)*(E-1)+x;g.push(R,y,L),g.push(y,P,L)}}function b(){for(let E=0;E<=t;E++)for(let x=0;x<=s;x++)l.x=E/t,l.y=x/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new to(new Ld[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ct extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Id extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dd extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class no extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ud extends no{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Or=new ut,Xo=new A,qo=new A;class uc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xo),qo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qo),t.updateMatrixWorld(),Or.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Or,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Or)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yo=new ut,Wi=new A,kr=new A;class Nd extends uc{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Wi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wi),kr.copy(n.position),kr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(kr),n.updateMatrixWorld(),s.makeTranslation(-Wi.x,-Wi.y,-Wi.z),Yo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo,n.coordinateSystem,n.reversedDepth)}}class Ji extends no{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fc extends sc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Fd extends uc{constructor(){super(new fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Od extends no{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Fd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kd extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Bd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const $o=new ut;class Ko{constructor(e,t,n=0,s=1/0){this.ray=new er(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Za,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $o.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($o),this}intersectObject(e,t=!0,n=[]){return Ba(e,this,n,t),n.sort(jo),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ba(e[s],this,n,t);return n.sort(jo),n}}function jo(i,e){return i.distance-e.distance}function Ba(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ba(r[a],e,t,!0)}}class zd extends md{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ye(n),s=new Ye(s);const r=t/2,a=e/t,o=e/2,c=[],l=[];for(let h=0,u=0,g=-o;h<=t;h++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const v=h===r?n:s;v.toArray(l,u),u+=3,v.toArray(l,u),u+=3,v.toArray(l,u),u+=3,v.toArray(l,u),u+=3}const d=new yt;d.setAttribute("position",new ot(c,3)),d.setAttribute("color",new ot(l,3));const f=new Ki({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Zo(i,e,t,n){const s=Hd(n);switch(t){case ql:return i*e;case $l:return i*e/s.components*s.byteLength;case qa:return i*e/s.components*s.byteLength;case Kl:return i*e*2/s.components*s.byteLength;case Ya:return i*e*2/s.components*s.byteLength;case Yl:return i*e*3/s.components*s.byteLength;case rn:return i*e*4/s.components*s.byteLength;case $a:return i*e*4/s.components*s.byteLength;case zs:case Hs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vs:case Gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case da:case fa:return Math.max(i,16)*Math.max(e,8)/4;case ha:case ua:return Math.max(i,8)*Math.max(e,8)/2;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case La:case Ia:case Da:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ua:case Na:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fa:case Oa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hd(i){switch(i){case fn:case Vl:return{byteLength:1,components:1};case ts:case Gl:case os:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case ii:case Ga:case Mn:return{byteLength:4,components:1};case Wl:case Xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);function pc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vd(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const d=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,d);else{f.sort((u,g)=>u.start-g.start);let h=0;for(let u=1;u<f.length;u++){const g=f[h],v=f[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let u=0,g=f.length;u<g;u++){const v=f[u];i.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wd=`#ifdef USE_ALPHAHASH
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
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kd=`#ifdef USE_AOMAP
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
#endif`,jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zd=`#ifdef USE_BATCHING
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
#endif`,Jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nu=`#ifdef USE_IRIDESCENCE
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
#endif`,iu=`#ifdef USE_BUMPMAP
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
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uu=`#define PI 3.141592653589793
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
} // validated`,fu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pu=`vec3 transformedNormal = objectNormal;
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
#endif`,mu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xu="gl_FragColor = linearToOutputTexel( gl_FragColor );",yu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mu=`#ifdef USE_ENVMAP
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
#endif`,Su=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wu=`#ifdef USE_ENVMAP
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
#endif`,Eu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
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
#endif`,Tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ru=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pu=`#ifdef USE_GRADIENTMAP
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
}`,Lu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uu=`uniform bool receiveShadow;
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
#endif`,Nu=`#ifdef USE_ENVMAP
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
#endif`,Fu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zu=`PhysicalMaterial material;
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
#endif`,Hu=`struct PhysicalMaterial {
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
}`,Vu=`
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
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ku=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ju=`#if defined( USE_POINTS_UV )
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
#endif`,Qu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rf=`#ifdef USE_MORPHTARGETS
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
#endif`,af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,of=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uf=`#ifdef USE_NORMALMAP
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
#endif`,ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_f=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ef=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Af=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rf=`float getShadowMask() {
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
}`,Cf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pf=`#ifdef USE_SKINNING
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
#endif`,Lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,If=`#ifdef USE_SKINNING
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
#endif`,Df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ff=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Of=`#ifdef USE_TRANSMISSION
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
#endif`,kf=`#ifdef USE_TRANSMISSION
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
#endif`,Bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wf=`uniform sampler2D t2D;
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
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kf=`#include <common>
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
}`,jf=`#if DEPTH_PACKING == 3200
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
}`,Zf=`#define DISTANCE
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
}`,Jf=`#define DISTANCE
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
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`uniform float scale;
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
}`,np=`uniform vec3 diffuse;
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
}`,ip=`#include <common>
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
}`,sp=`uniform vec3 diffuse;
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
}`,rp=`#define LAMBERT
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
}`,ap=`#define LAMBERT
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
}`,op=`#define MATCAP
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
}`,lp=`#define MATCAP
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
}`,cp=`#define NORMAL
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
}`,hp=`#define NORMAL
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
}`,dp=`#define PHONG
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
}`,up=`#define PHONG
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
}`,fp=`#define STANDARD
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
}`,pp=`#define STANDARD
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
}`,mp=`#define TOON
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
}`,gp=`#define TOON
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
}`,vp=`uniform float size;
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
}`,_p=`uniform vec3 diffuse;
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
}`,xp=`#include <common>
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
}`,yp=`uniform vec3 color;
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
}`,Mp=`uniform float rotation;
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
}`,Sp=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Gd,alphahash_pars_fragment:Wd,alphamap_fragment:Xd,alphamap_pars_fragment:qd,alphatest_fragment:Yd,alphatest_pars_fragment:$d,aomap_fragment:Kd,aomap_pars_fragment:jd,batching_pars_vertex:Zd,batching_vertex:Jd,begin_vertex:Qd,beginnormal_vertex:eu,bsdfs:tu,iridescence_fragment:nu,bumpmap_pars_fragment:iu,clipping_planes_fragment:su,clipping_planes_pars_fragment:ru,clipping_planes_pars_vertex:au,clipping_planes_vertex:ou,color_fragment:lu,color_pars_fragment:cu,color_pars_vertex:hu,color_vertex:du,common:uu,cube_uv_reflection_fragment:fu,defaultnormal_vertex:pu,displacementmap_pars_vertex:mu,displacementmap_vertex:gu,emissivemap_fragment:vu,emissivemap_pars_fragment:_u,colorspace_fragment:xu,colorspace_pars_fragment:yu,envmap_fragment:Mu,envmap_common_pars_fragment:Su,envmap_pars_fragment:wu,envmap_pars_vertex:Eu,envmap_physical_pars_fragment:Nu,envmap_vertex:bu,fog_vertex:Tu,fog_pars_vertex:Au,fog_fragment:Ru,fog_pars_fragment:Cu,gradientmap_pars_fragment:Pu,lightmap_pars_fragment:Lu,lights_lambert_fragment:Iu,lights_lambert_pars_fragment:Du,lights_pars_begin:Uu,lights_toon_fragment:Fu,lights_toon_pars_fragment:Ou,lights_phong_fragment:ku,lights_phong_pars_fragment:Bu,lights_physical_fragment:zu,lights_physical_pars_fragment:Hu,lights_fragment_begin:Vu,lights_fragment_maps:Gu,lights_fragment_end:Wu,logdepthbuf_fragment:Xu,logdepthbuf_pars_fragment:qu,logdepthbuf_pars_vertex:Yu,logdepthbuf_vertex:$u,map_fragment:Ku,map_pars_fragment:ju,map_particle_fragment:Zu,map_particle_pars_fragment:Ju,metalnessmap_fragment:Qu,metalnessmap_pars_fragment:ef,morphinstance_vertex:tf,morphcolor_vertex:nf,morphnormal_vertex:sf,morphtarget_pars_vertex:rf,morphtarget_vertex:af,normal_fragment_begin:of,normal_fragment_maps:lf,normal_pars_fragment:cf,normal_pars_vertex:hf,normal_vertex:df,normalmap_pars_fragment:uf,clearcoat_normal_fragment_begin:ff,clearcoat_normal_fragment_maps:pf,clearcoat_pars_fragment:mf,iridescence_pars_fragment:gf,opaque_fragment:vf,packing:_f,premultiplied_alpha_fragment:xf,project_vertex:yf,dithering_fragment:Mf,dithering_pars_fragment:Sf,roughnessmap_fragment:wf,roughnessmap_pars_fragment:Ef,shadowmap_pars_fragment:bf,shadowmap_pars_vertex:Tf,shadowmap_vertex:Af,shadowmask_pars_fragment:Rf,skinbase_vertex:Cf,skinning_pars_vertex:Pf,skinning_vertex:Lf,skinnormal_vertex:If,specularmap_fragment:Df,specularmap_pars_fragment:Uf,tonemapping_fragment:Nf,tonemapping_pars_fragment:Ff,transmission_fragment:Of,transmission_pars_fragment:kf,uv_pars_fragment:Bf,uv_pars_vertex:zf,uv_vertex:Hf,worldpos_vertex:Vf,background_vert:Gf,background_frag:Wf,backgroundCube_vert:Xf,backgroundCube_frag:qf,cube_vert:Yf,cube_frag:$f,depth_vert:Kf,depth_frag:jf,distanceRGBA_vert:Zf,distanceRGBA_frag:Jf,equirect_vert:Qf,equirect_frag:ep,linedashed_vert:tp,linedashed_frag:np,meshbasic_vert:ip,meshbasic_frag:sp,meshlambert_vert:rp,meshlambert_frag:ap,meshmatcap_vert:op,meshmatcap_frag:lp,meshnormal_vert:cp,meshnormal_frag:hp,meshphong_vert:dp,meshphong_frag:up,meshphysical_vert:fp,meshphysical_frag:pp,meshtoon_vert:mp,meshtoon_frag:gp,points_vert:vp,points_frag:_p,shadow_vert:xp,shadow_frag:yp,sprite_vert:Mp,sprite_frag:Sp},pe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},cn={basic:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Bt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Bt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Bt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Bt([pe.points,pe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Bt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Bt([pe.common,pe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Bt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Bt([pe.sprite,pe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Bt([pe.common,pe.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Bt([pe.lights,pe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};cn.physical={uniforms:Bt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Fs={r:0,b:0,g:0},Yn=new on,wp=new ut;function Ep(i,e,t,n,s,r,a){const o=new Ye(0);let c=r===!0?0:1,l,d,f=null,h=0,u=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function v(E){let x=!1;const R=g(E);R===null?p(o,c):R&&R.isColor&&(p(R,1),x=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===Qs)?(d===void 0&&(d=new Y(new un(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Ii(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(y,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Yn.copy(x.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(wp.makeRotationFromEuler(Yn)),d.material.toneMapped=nt.getTransfer(R.colorSpace)!==ct,(f!==R||h!==R.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,f=R,h=R.version,u=i.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Y(new En(2,2),new Bn({name:"BackgroundMaterial",uniforms:Ii(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=nt.getTransfer(R.colorSpace)!==ct,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||h!==R.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=R,h=R.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,x){E.getRGB(Fs,ic(i)),n.buffers.color.setClear(Fs.r,Fs.g,Fs.b,x,a)}function b(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(o,c)},render:v,addToRenderList:m,dispose:b}}function bp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(T,I,F,V,j){let q=!1;const K=f(V,F,I);r!==K&&(r=K,l(r.object)),q=u(T,V,F,j),q&&g(T,V,F,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(T,I,F,V),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function d(T){return i.deleteVertexArray(T)}function f(T,I,F){const V=F.wireframe===!0;let j=n[T.id];j===void 0&&(j={},n[T.id]=j);let q=j[I.id];q===void 0&&(q={},j[I.id]=q);let K=q[V];return K===void 0&&(K=h(c()),q[V]=K),K}function h(T){const I=[],F=[],V=[];for(let j=0;j<t;j++)I[j]=0,F[j]=0,V[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:V,object:T,attributes:{},index:null}}function u(T,I,F,V){const j=r.attributes,q=I.attributes;let K=0;const ie=F.getAttributes();for(const G in ie)if(ie[G].location>=0){const _e=j[G];let Se=q[G];if(Se===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(Se=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(Se=T.instanceColor)),_e===void 0||_e.attribute!==Se||Se&&_e.data!==Se.data)return!0;K++}return r.attributesNum!==K||r.index!==V}function g(T,I,F,V){const j={},q=I.attributes;let K=0;const ie=F.getAttributes();for(const G in ie)if(ie[G].location>=0){let _e=q[G];_e===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(_e=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(_e=T.instanceColor));const Se={};Se.attribute=_e,_e&&_e.data&&(Se.data=_e.data),j[G]=Se,K++}r.attributes=j,r.attributesNum=K,r.index=V}function v(){const T=r.newAttributes;for(let I=0,F=T.length;I<F;I++)T[I]=0}function m(T){p(T,0)}function p(T,I){const F=r.newAttributes,V=r.enabledAttributes,j=r.attributeDivisors;F[T]=1,V[T]===0&&(i.enableVertexAttribArray(T),V[T]=1),j[T]!==I&&(i.vertexAttribDivisor(T,I),j[T]=I)}function b(){const T=r.newAttributes,I=r.enabledAttributes;for(let F=0,V=I.length;F<V;F++)I[F]!==T[F]&&(i.disableVertexAttribArray(F),I[F]=0)}function E(T,I,F,V,j,q,K){K===!0?i.vertexAttribIPointer(T,I,F,j,q):i.vertexAttribPointer(T,I,F,V,j,q)}function x(T,I,F,V){v();const j=V.attributes,q=F.getAttributes(),K=I.defaultAttributeValues;for(const ie in q){const G=q[ie];if(G.location>=0){let fe=j[ie];if(fe===void 0&&(ie==="instanceMatrix"&&T.instanceMatrix&&(fe=T.instanceMatrix),ie==="instanceColor"&&T.instanceColor&&(fe=T.instanceColor)),fe!==void 0){const _e=fe.normalized,Se=fe.itemSize,We=e.get(fe);if(We===void 0)continue;const it=We.buffer,Qe=We.type,et=We.bytesPerElement,Q=Qe===i.INT||Qe===i.UNSIGNED_INT||fe.gpuType===Ga;if(fe.isInterleavedBufferAttribute){const se=fe.data,Me=se.stride,Fe=fe.offset;if(se.isInstancedInterleavedBuffer){for(let Ee=0;Ee<G.locationSize;Ee++)p(G.location+Ee,se.meshPerAttribute);T.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)m(G.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Ee=0;Ee<G.locationSize;Ee++)E(G.location+Ee,Se/G.locationSize,Qe,_e,Me*et,(Fe+Se/G.locationSize*Ee)*et,Q)}else{if(fe.isInstancedBufferAttribute){for(let se=0;se<G.locationSize;se++)p(G.location+se,fe.meshPerAttribute);T.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let se=0;se<G.locationSize;se++)m(G.location+se);i.bindBuffer(i.ARRAY_BUFFER,it);for(let se=0;se<G.locationSize;se++)E(G.location+se,Se/G.locationSize,Qe,_e,Se*et,Se/G.locationSize*se*et,Q)}}else if(K!==void 0){const _e=K[ie];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(G.location,_e);break;case 3:i.vertexAttrib3fv(G.location,_e);break;case 4:i.vertexAttrib4fv(G.location,_e);break;default:i.vertexAttrib1fv(G.location,_e)}}}}b()}function R(){L();for(const T in n){const I=n[T];for(const F in I){const V=I[F];for(const j in V)d(V[j].object),delete V[j];delete I[F]}delete n[T]}}function y(T){if(n[T.id]===void 0)return;const I=n[T.id];for(const F in I){const V=I[F];for(const j in V)d(V[j].object),delete V[j];delete I[F]}delete n[T.id]}function P(T){for(const I in n){const F=n[I];if(F[T.id]===void 0)continue;const V=F[T.id];for(const j in V)d(V[j].object),delete V[j];delete F[T.id]}}function L(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:y,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Tp(i,e,t){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,f){f!==0&&(i.drawArraysInstanced(n,l,d,f),t.update(d,n,f))}function o(l,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,f);let u=0;for(let g=0;g<f;g++)u+=d[g];t.update(u,n,1)}function c(l,d,f,h){if(f===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<l.length;g++)a(l[g],d[g],h[g]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,d,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=d[v]*h[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ap(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==rn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const L=P===os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==fn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Mn&&!L)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:R,maxSamples:y}}function Rp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new jn,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const u=f.length!==0||h||n!==0||s;return s=h,n=f.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,u){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?d(null):l();else{const b=r?0:n,E=b*4;let x=p.clippingState||null;c.value=x,x=d(g,h,E,u);for(let R=0;R!==E;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,h,u,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=u+v*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=u;E!==v;++E,x+=4)a.copy(f[E]).applyMatrix4(b,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Cp(i){let e=new WeakMap;function t(a,o){return o===oa?a.mapping=Ci:o===la&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===oa||o===la)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new cd(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ei=4,Jo=[.125,.215,.35,.446,.526,.582],Qn=20,Br=new fc,Qo=new Ye;let zr=null,Hr=0,Vr=0,Gr=!1;const Zn=(1+Math.sqrt(5))/2,Mi=1/Zn,el=[new A(-Zn,Mi,0),new A(Zn,Mi,0),new A(-Mi,0,Zn),new A(Mi,0,Zn),new A(0,Zn,-Mi),new A(0,Zn,Mi),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Pp=new A;class tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Pp}=r;zr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zr,Hr,Vr),this._renderer.xr.enabled=Gr,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:os,format:rn,colorSpace:Li,depthBuffer:!1},s=nl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lp(r)),this._blurMaterial=Ip(r,e,t)}return s}_compileMaterial(e){const t=new Y(this._lodPlanes[0],e);this._renderer.compile(t,Br)}_sceneToCubeUV(e,t,n,s,r){const c=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(Qo),f.toneMapping=On,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const v=new je({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new Y(new un,v);let p=!1;const b=e.background;b?b.isColor&&(v.color.copy(b),e.background=null,p=!0):(v.color.copy(Qo),p=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[E],r.y,r.z)):x===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[E]));const R=this._cubeSize;Os(s,x*R,E>2?R:0,R,R),f.setRenderTarget(s),p&&f.render(m,c),f.render(e,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=u,f.autoClear=h,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ci||e.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Y(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Os(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Br)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=el[(s-r-1)%el.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Y(this._lodPlanes[s],l),h=l.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Qn-1),v=r/g,m=isFinite(r)?1+Math.floor(d*v):Qn;m>Qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qn}`);const p=[];let b=0;for(let P=0;P<Qn;++P){const L=P/v,M=Math.exp(-L*L/2);p.push(M),P===0?b+=M:P<m&&(b+=2*M)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-n;const x=this._sizeLods[s],R=3*x*(s>E-Ei?s-E+Ei:0),y=4*(this._cubeSize-x);Os(t,R,y,3*x,2*x),c.setRenderTarget(t),c.render(f,Br)}}function Lp(i){const e=[],t=[],n=[];let s=i;const r=i-Ei+1+Jo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ei?c=Jo[a-i+Ei-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,f=1+l,h=[d,d,f,d,f,f,d,d,f,f,d,f],u=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*u),E=new Float32Array(m*g*u),x=new Float32Array(p*g*u);for(let y=0;y<u;y++){const P=y%3*2/3-1,L=y>2?0:-1,M=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];b.set(M,v*g*y),E.set(h,m*g*y);const T=[y,y,y,y,y,y];x.set(T,p*g*y)}const R=new yt;R.setAttribute("position",new $t(b,v)),R.setAttribute("uv",new $t(E,m)),R.setAttribute("faceIndex",new $t(x,p)),e.push(R),s>Ei&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nl(i,e,t){const n=new si(i,e,t);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ip(i,e,t){const n=new Float32Array(Qn),s=new A(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:io(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function il(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function sl(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function io(){return`

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
	`}function Dp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===oa||c===la,d=c===Ci||c===Pi;if(l||d){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new tl(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const u=o.image;return l&&u&&u.height>0||d&&u&&s(u)?(t===null&&(t=new tl(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Up(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&as("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Np(i,e,t,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const u=r.get(h);u&&(e.remove(u),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const u in h)e.update(h[u],i.ARRAY_BUFFER)}function l(f){const h=[],u=f.index,g=f.attributes.position;let v=0;if(u!==null){const b=u.array;v=u.version;for(let E=0,x=b.length;E<x;E+=3){const R=b[E+0],y=b[E+1],P=b[E+2];h.push(R,y,y,P,P,R)}}else if(g!==void 0){const b=g.array;v=g.version;for(let E=0,x=b.length/3-1;E<x;E+=3){const R=E+0,y=E+1,P=E+2;h.push(R,y,y,P,P,R)}}else return;const m=new(Jl(h)?nc:tc)(h,1);m.version=v;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function d(f){const h=r.get(f);if(h){const u=f.index;u!==null&&h.version<u.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:d}}function Fp(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,u){i.drawElements(n,u,r,h*a),t.update(u,n,1)}function l(h,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,h*a,g),t.update(u,n,g))}function d(h,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];t.update(m,n,1)}function f(h,u,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/a,u[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,h,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=u[b]*v[b];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Op(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function kp(i,e,t){const n=new WeakMap,s=new ht;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let T=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",T)};var u=T;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let R=o.attributes.position.count*x,y=1;R>e.maxTextureSize&&(y=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*y*4*f),L=new Ql(P,R,y,f);L.type=Mn,L.needsUpdate=!0;const M=x*4;for(let I=0;I<f;I++){const F=p[I],V=b[I],j=E[I],q=R*y*4*I;for(let K=0;K<F.count;K++){const ie=K*M;g===!0&&(s.fromBufferAttribute(F,K),P[q+ie+0]=s.x,P[q+ie+1]=s.y,P[q+ie+2]=s.z,P[q+ie+3]=0),v===!0&&(s.fromBufferAttribute(V,K),P[q+ie+4]=s.x,P[q+ie+5]=s.y,P[q+ie+6]=s.z,P[q+ie+7]=0),m===!0&&(s.fromBufferAttribute(j,K),P[q+ie+8]=s.x,P[q+ie+9]=s.y,P[q+ie+10]=s.z,P[q+ie+11]=j.itemSize===4?s.w:1)}}h={count:f,texture:L,size:new Le(R,y)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Bp(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return f}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const mc=new zt,rl=new oc(1,1),gc=new Ql,vc=new qh,_c=new rc,al=[],ol=[],ll=new Float32Array(16),cl=new Float32Array(9),hl=new Float32Array(4);function Oi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=al[s];if(r===void 0&&(r=new Float32Array(s),al[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function rr(i,e){let t=ol[e];t===void 0&&(t=new Int32Array(e),ol[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function Wp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;hl.set(n),i.uniformMatrix2fv(this.addr,!1,hl),bt(t,n)}}function Xp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;cl.set(n),i.uniformMatrix3fv(this.addr,!1,cl),bt(t,n)}}function qp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;ll.set(n),i.uniformMatrix4fv(this.addr,!1,ll),bt(t,n)}}function Yp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function Zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function Qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function e0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function t0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rl.compareFunction=Zl,r=rl):r=mc,t.setTexture2D(e||r,s)}function n0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||vc,s)}function i0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_c,s)}function s0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gc,s)}function r0(i){switch(i){case 5126:return zp;case 35664:return Hp;case 35665:return Vp;case 35666:return Gp;case 35674:return Wp;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return $p;case 35668:case 35672:return Kp;case 35669:case 35673:return jp;case 5125:return Zp;case 36294:return Jp;case 36295:return Qp;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}function a0(i,e){i.uniform1fv(this.addr,e)}function o0(i,e){const t=Oi(e,this.size,2);i.uniform2fv(this.addr,t)}function l0(i,e){const t=Oi(e,this.size,3);i.uniform3fv(this.addr,t)}function c0(i,e){const t=Oi(e,this.size,4);i.uniform4fv(this.addr,t)}function h0(i,e){const t=Oi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function d0(i,e){const t=Oi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function u0(i,e){const t=Oi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function f0(i,e){i.uniform1iv(this.addr,e)}function p0(i,e){i.uniform2iv(this.addr,e)}function m0(i,e){i.uniform3iv(this.addr,e)}function g0(i,e){i.uniform4iv(this.addr,e)}function v0(i,e){i.uniform1uiv(this.addr,e)}function _0(i,e){i.uniform2uiv(this.addr,e)}function x0(i,e){i.uniform3uiv(this.addr,e)}function y0(i,e){i.uniform4uiv(this.addr,e)}function M0(i,e,t){const n=this.cache,s=e.length,r=rr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||mc,r[a])}function S0(i,e,t){const n=this.cache,s=e.length,r=rr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||vc,r[a])}function w0(i,e,t){const n=this.cache,s=e.length,r=rr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||_c,r[a])}function E0(i,e,t){const n=this.cache,s=e.length,r=rr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gc,r[a])}function b0(i){switch(i){case 5126:return a0;case 35664:return o0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return d0;case 35676:return u0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return v0;case 36294:return _0;case 36295:return x0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return E0}}class T0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=r0(t.type)}}class A0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b0(t.type)}}class R0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Wr=/(\w+)(\])?(\[|\.)?/g;function dl(i,e){i.seq.push(e),i.map[e.id]=e}function C0(i,e,t){const n=i.name,s=n.length;for(Wr.lastIndex=0;;){const r=Wr.exec(n),a=Wr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){dl(t,l===void 0?new T0(o,i,e):new A0(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new R0(o),dl(t,f)),t=f}}}class Xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);C0(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function ul(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const P0=37297;let L0=0;function I0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const fl=new Ge;function D0(i){nt._getMatrix(fl,nt.workingColorSpace,i);const e=`mat3( ${fl.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Ys:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function pl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+I0(i.getShaderSource(e),o)}else return r}function U0(i,e){const t=D0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function N0(i,e){let t;switch(e){case ah:t="Linear";break;case oh:t="Reinhard";break;case lh:t="Cineon";break;case zl:t="ACESFilmic";break;case hh:t="AgX";break;case dh:t="Neutral";break;case ch:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ks=new A;function F0(){nt.getLuminanceCoefficients(ks);const i=ks.x.toFixed(4),e=ks.y.toFixed(4),t=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function k0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function B0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Xi(i){return i!==""}function ml(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(i){return i.replace(z0,V0)}const H0=new Map;function V0(i,e){let t=qe[e];if(t===void 0){const n=H0.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return za(t)}const G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(i){return i.replace(G0,W0)}function W0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _l(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function X0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function q0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ci:case Pi:e="ENVMAP_TYPE_CUBE";break;case Qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Pi&&(e="ENVMAP_MODE_REFRACTION"),e}function $0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bl:e="ENVMAP_BLENDING_MULTIPLY";break;case sh:e="ENVMAP_BLENDING_MIX";break;case rh:e="ENVMAP_BLENDING_ADD";break}return e}function K0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function j0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=X0(t),l=q0(t),d=Y0(t),f=$0(t),h=K0(t),u=O0(t),g=k0(r),v=s.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xi).join(`
`),p.length>0&&(p+=`
`)):(m=[_l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),p=[_l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?qe.tonemapping_pars_fragment:"",t.toneMapping!==On?N0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,U0("linearToOutputTexel",t.outputColorSpace),F0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),a=za(a),a=ml(a,t),a=gl(a,t),o=za(o),o=ml(o,t),o=gl(o,t),a=vl(a),o=vl(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=b+m+a,x=b+p+o,R=ul(s,s.VERTEX_SHADER,E),y=ul(s,s.FRAGMENT_SHADER,x);s.attachShader(v,R),s.attachShader(v,y),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(I){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",V=s.getShaderInfoLog(R)||"",j=s.getShaderInfoLog(y)||"",q=F.trim(),K=V.trim(),ie=j.trim();let G=!0,fe=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,y);else{const _e=pl(s,R,"vertex"),Se=pl(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+q+`
`+_e+`
`+Se)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(K===""||ie==="")&&(fe=!1);fe&&(I.diagnostics={runnable:G,programLog:q,vertexShader:{log:K,prefix:m},fragmentShader:{log:ie,prefix:p}})}s.deleteShader(R),s.deleteShader(y),L=new Xs(s,v),M=B0(s,v)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,P0)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=y,this}let Z0=0;class J0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Q0(e),t.set(e,n)),n}}class Q0{constructor(e){this.id=Z0++,this.code=e,this.usedTimes=0}}function em(i,e,t,n,s,r,a){const o=new Za,c=new J0,l=new Set,d=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let u=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,T,I,F,V){const j=F.fog,q=V.geometry,K=M.isMeshStandardMaterial?F.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),G=ie&&ie.mapping===Qs?ie.image.height:null,fe=g[M.type];M.precision!==null&&(u=s.getMaxPrecision(M.precision),u!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));const _e=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Se=_e!==void 0?_e.length:0;let We=0;q.morphAttributes.position!==void 0&&(We=1),q.morphAttributes.normal!==void 0&&(We=2),q.morphAttributes.color!==void 0&&(We=3);let it,Qe,et,Q;if(fe){const st=cn[fe];it=st.vertexShader,Qe=st.fragmentShader}else it=M.vertexShader,Qe=M.fragmentShader,c.update(M),et=c.getVertexShaderID(M),Q=c.getFragmentShaderID(M);const se=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Fe=V.isInstancedMesh===!0,Ee=V.isBatchedMesh===!0,Ke=!!M.map,St=!!M.matcap,S=!!ie,Z=!!M.aoMap,J=!!M.lightMap,ee=!!M.bumpMap,$=!!M.normalMap,be=!!M.displacementMap,ne=!!M.emissiveMap,de=!!M.metalnessMap,Xe=!!M.roughnessMap,He=M.anisotropy>0,C=M.clearcoat>0,_=M.dispersion>0,k=M.iridescence>0,X=M.sheen>0,re=M.transmission>0,W=He&&!!M.anisotropyMap,Pe=C&&!!M.clearcoatMap,he=C&&!!M.clearcoatNormalMap,Ae=C&&!!M.clearcoatRoughnessMap,Re=k&&!!M.iridescenceMap,le=k&&!!M.iridescenceThicknessMap,ve=X&&!!M.sheenColorMap,Oe=X&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,me=!!M.specularColorMap,Ve=!!M.specularIntensityMap,D=re&&!!M.transmissionMap,ce=re&&!!M.thicknessMap,ue=!!M.gradientMap,ye=!!M.alphaMap,ae=M.alphaTest>0,te=!!M.alphaHash,Te=!!M.extensions;let ze=On;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ze=i.toneMapping);const ft={shaderID:fe,shaderType:M.type,shaderName:M.name,vertexShader:it,fragmentShader:Qe,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:Ee,batchingColor:Ee&&V._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&V.instanceColor!==null,instancingMorph:Fe&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Li,alphaToCoverage:!!M.alphaToCoverage,map:Ke,matcap:St,envMap:S,envMapMode:S&&ie.mapping,envMapCubeUVHeight:G,aoMap:Z,lightMap:J,bumpMap:ee,normalMap:$,displacementMap:h&&be,emissiveMap:ne,normalMapObjectSpace:$&&M.normalMapType===mh,normalMapTangentSpace:$&&M.normalMapType===jl,metalnessMap:de,roughnessMap:Xe,anisotropy:He,anisotropyMap:W,clearcoat:C,clearcoatMap:Pe,clearcoatNormalMap:he,clearcoatRoughnessMap:Ae,dispersion:_,iridescence:k,iridescenceMap:Re,iridescenceThicknessMap:le,sheen:X,sheenColorMap:ve,sheenRoughnessMap:Oe,specularMap:Ce,specularColorMap:me,specularIntensityMap:Ve,transmission:re,transmissionMap:D,thicknessMap:ce,gradientMap:ue,opaque:M.transparent===!1&&M.blending===bi&&M.alphaToCoverage===!1,alphaMap:ye,alphaTest:ae,alphaHash:te,combine:M.combine,mapUv:Ke&&v(M.map.channel),aoMapUv:Z&&v(M.aoMap.channel),lightMapUv:J&&v(M.lightMap.channel),bumpMapUv:ee&&v(M.bumpMap.channel),normalMapUv:$&&v(M.normalMap.channel),displacementMapUv:be&&v(M.displacementMap.channel),emissiveMapUv:ne&&v(M.emissiveMap.channel),metalnessMapUv:de&&v(M.metalnessMap.channel),roughnessMapUv:Xe&&v(M.roughnessMap.channel),anisotropyMapUv:W&&v(M.anisotropyMap.channel),clearcoatMapUv:Pe&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&v(M.sheenRoughnessMap.channel),specularMapUv:Ce&&v(M.specularMap.channel),specularColorMapUv:me&&v(M.specularColorMap.channel),specularIntensityMapUv:Ve&&v(M.specularIntensityMap.channel),transmissionMapUv:D&&v(M.transmissionMap.channel),thicknessMapUv:ce&&v(M.thicknessMap.channel),alphaMapUv:ye&&v(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&($||He),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!q.attributes.uv&&(Ke||ye),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Me,skinning:V.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:We,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ke&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:ne&&M.emissiveMap.isVideoTexture===!0&&nt.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ft,flipSided:M.side===Vt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Te&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&M.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)T.push(I),T.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(b(T,M),E(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function b(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function E(M,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const T=g[M.type];let I;if(T){const F=cn[T];I=rd.clone(F.uniforms)}else I=M.uniforms;return I}function R(M,T){let I;for(let F=0,V=d.length;F<V;F++){const j=d[F];if(j.cacheKey===T){I=j,++I.usedTimes;break}}return I===void 0&&(I=new j0(i,T,M,r),d.push(I)),I}function y(M){if(--M.usedTimes===0){const T=d.indexOf(M);d[T]=d[d.length-1],d.pop(),M.destroy()}}function P(M){c.remove(M)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:y,releaseShaderCache:P,programs:d,dispose:L}}function tm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function nm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,h,u,g,v,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:u,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function o(f,h,u,g,v,m){const p=a(f,h,u,g,v,m);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):t.push(p)}function c(f,h,u,g,v,m){const p=a(f,h,u,g,v,m);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):t.unshift(p)}function l(f,h){t.length>1&&t.sort(f||nm),n.length>1&&n.sort(h||xl),s.length>1&&s.sort(h||xl)}function d(){for(let f=e,h=i.length;f<h;f++){const u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:d,sort:l}}function im(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new yl,i.set(n,[a])):s>=r.length?(a=new yl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function sm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ye};break;case"SpotLight":t={position:new A,direction:new A,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function rm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let am=0;function om(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lm(i){const e=new sm,t=rm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const s=new A,r=new ut,a=new ut;function o(l){let d=0,f=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let u=0,g=0,v=0,m=0,p=0,b=0,E=0,x=0,R=0,y=0,P=0;l.sort(om);for(let M=0,T=l.length;M<T;M++){const I=l[M],F=I.color,V=I.intensity,j=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=F.r*V,f+=F.g*V,h+=F.b*V;else if(I.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(I.sh.coefficients[K],V);P++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ie=I.shadow,G=t.get(I);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,n.directionalShadow[u]=G,n.directionalShadowMap[u]=q,n.directionalShadowMatrix[u]=I.shadow.matrix,b++}n.directional[u]=K,u++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(F).multiplyScalar(V),K.distance=j,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,n.spot[v]=K;const ie=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,ie.updateMatrices(I),I.castShadow&&y++),n.spotLightMatrix[v]=ie.matrix,I.castShadow){const G=t.get(I);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=q,x++}v++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(F).multiplyScalar(V),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=K,m++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){const ie=I.shadow,G=t.get(I);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,G.shadowCameraNear=ie.camera.near,G.shadowCameraFar=ie.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=K,g++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(V),K.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[p]=K,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;const L=n.hash;(L.directionalLength!==u||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==x||L.numSpotMaps!==R||L.numLightProbes!==P)&&(n.directional.length=u,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+R-y,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=P,L.directionalLength=u,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=x,L.numSpotMaps=R,L.numLightProbes=P,n.version=am++)}function c(l,d){let f=0,h=0,u=0,g=0,v=0;const m=d.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const E=l[p];if(E.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(E.isSpotLight){const x=n.spot[u];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(E.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function Ml(i){const e=new lm(i),t=[],n=[];function s(d){l.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function cm(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ml(i),e.set(s,[o])):r>=a.length?(o=new Ml(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dm=`uniform sampler2D shadow_pass;
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
}`;function um(i,e,t){let n=new Ja;const s=new Le,r=new Le,a=new ht,o=new Id({depthPacking:ph}),c=new Dd,l={},d=t.maxTextureSize,f={[kn]:Vt,[Vt]:kn,[Ft]:Ft},h=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:hm,fragmentShader:dm}),u=h.clone();u.defines.HORIZONTAL_PASS=1;const g=new yt;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Y(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let p=this.type;this.render=function(y,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const M=i.getRenderTarget(),T=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Fn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=p!==yn&&this.type===yn,j=p===yn&&this.type!==yn;for(let q=0,K=y.length;q<K;q++){const ie=y[q],G=ie.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const fe=G.getFrameExtents();if(s.multiply(fe),r.copy(G.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/fe.x),s.x=r.x*fe.x,G.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/fe.y),s.y=r.y*fe.y,G.mapSize.y=r.y)),G.map===null||V===!0||j===!0){const Se=this.type!==yn?{minFilter:an,magFilter:an}:{};G.map!==null&&G.map.dispose(),G.map=new si(s.x,s.y,Se),G.map.texture.name=ie.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const _e=G.getViewportCount();for(let Se=0;Se<_e;Se++){const We=G.getViewport(Se);a.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),F.viewport(a),G.updateMatrices(ie,Se),n=G.getFrustum(),x(P,L,G.camera,ie,this.type)}G.isPointLightShadow!==!0&&this.type===yn&&b(G,L),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,T,I)};function b(y,P){const L=e.update(v);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,u.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new si(s.x,s.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(P,null,L,h,v,null),u.uniforms.shadow_pass.value=y.mapPass.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(P,null,L,u,v,null)}function E(y,P,L,M){let T=null;const I=L.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)T=I;else if(T=L.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=T.uuid,V=P.uuid;let j=l[F];j===void 0&&(j={},l[F]=j);let q=j[V];q===void 0&&(q=T.clone(),j[V]=q,P.addEventListener("dispose",R)),T=q}if(T.visible=P.visible,T.wireframe=P.wireframe,M===yn?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:f[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,L.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const F=i.properties.get(T);F.light=L}return T}function x(y,P,L,M,T){if(y.visible===!1)return;if(y.layers.test(P.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&T===yn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,y.matrixWorld);const V=e.update(y),j=y.material;if(Array.isArray(j)){const q=V.groups;for(let K=0,ie=q.length;K<ie;K++){const G=q[K],fe=j[G.materialIndex];if(fe&&fe.visible){const _e=E(y,fe,M,T);y.onBeforeShadow(i,y,P,L,V,_e,G),i.renderBufferDirect(L,null,V,_e,y,G),y.onAfterShadow(i,y,P,L,V,_e,G)}}}else if(j.visible){const q=E(y,j,M,T);y.onBeforeShadow(i,y,P,L,V,q,null),i.renderBufferDirect(L,null,V,q,y,null),y.onAfterShadow(i,y,P,L,V,q,null)}}const F=y.children;for(let V=0,j=F.length;V<j;V++)x(F[V],P,L,M,T)}function R(y){y.target.removeEventListener("dispose",R);for(const L in l){const M=l[L],T=y.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const fm={[ea]:ta,[na]:ra,[ia]:aa,[Ri]:sa,[ta]:ea,[ra]:na,[aa]:ia,[sa]:Ri};function pm(i,e){function t(){let D=!1;const ce=new ht;let ue=null;const ye=new ht(0,0,0,0);return{setMask:function(ae){ue!==ae&&!D&&(i.colorMask(ae,ae,ae,ae),ue=ae)},setLocked:function(ae){D=ae},setClear:function(ae,te,Te,ze,ft){ft===!0&&(ae*=ze,te*=ze,Te*=ze),ce.set(ae,te,Te,ze),ye.equals(ce)===!1&&(i.clearColor(ae,te,Te,ze),ye.copy(ce))},reset:function(){D=!1,ue=null,ye.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,ue=null,ye=null,ae=null;return{setReversed:function(te){if(ce!==te){const Te=e.get("EXT_clip_control");te?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const ze=ae;ae=null,this.setClear(ze)}},getReversed:function(){return ce},setTest:function(te){te?se(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(te){ue!==te&&!D&&(i.depthMask(te),ue=te)},setFunc:function(te){if(ce&&(te=fm[te]),ye!==te){switch(te){case ea:i.depthFunc(i.NEVER);break;case ta:i.depthFunc(i.ALWAYS);break;case na:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case ia:i.depthFunc(i.EQUAL);break;case sa:i.depthFunc(i.GEQUAL);break;case ra:i.depthFunc(i.GREATER);break;case aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=te}},setLocked:function(te){D=te},setClear:function(te){ae!==te&&(ce&&(te=1-te),i.clearDepth(te),ae=te)},reset:function(){D=!1,ue=null,ye=null,ae=null,ce=!1}}}function s(){let D=!1,ce=null,ue=null,ye=null,ae=null,te=null,Te=null,ze=null,ft=null;return{setTest:function(st){D||(st?se(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(st){ce!==st&&!D&&(i.stencilMask(st),ce=st)},setFunc:function(st,pn,ln){(ue!==st||ye!==pn||ae!==ln)&&(i.stencilFunc(st,pn,ln),ue=st,ye=pn,ae=ln)},setOp:function(st,pn,ln){(te!==st||Te!==pn||ze!==ln)&&(i.stencilOp(st,pn,ln),te=st,Te=pn,ze=ln)},setLocked:function(st){D=st},setClear:function(st){ft!==st&&(i.clearStencil(st),ft=st)},reset:function(){D=!1,ce=null,ue=null,ye=null,ae=null,te=null,Te=null,ze=null,ft=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let d={},f={},h=new WeakMap,u=[],g=null,v=!1,m=null,p=null,b=null,E=null,x=null,R=null,y=null,P=new Ye(0,0,0),L=0,M=!1,T=null,I=null,F=null,V=null,j=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ie=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(G)[1]),K=ie>=1):G.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),K=ie>=2);let fe=null,_e={};const Se=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),it=new ht().fromArray(Se),Qe=new ht().fromArray(We);function et(D,ce,ue,ye){const ae=new Uint8Array(4),te=i.createTexture();i.bindTexture(D,te),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<ue;Te++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(ce+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return te}const Q={};Q[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(Ri),ee(!1),$(po),se(i.CULL_FACE),Z(Fn);function se(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function Me(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Fe(D,ce){return f[D]!==ce?(i.bindFramebuffer(D,ce),f[D]=ce,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ce),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ee(D,ce){let ue=u,ye=!1;if(D){ue=h.get(ce),ue===void 0&&(ue=[],h.set(ce,ue));const ae=D.textures;if(ue.length!==ae.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Te=ae.length;te<Te;te++)ue[te]=i.COLOR_ATTACHMENT0+te;ue.length=ae.length,ye=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,ye=!0);ye&&i.drawBuffers(ue)}function Ke(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const St={[Jn]:i.FUNC_ADD,[Hc]:i.FUNC_SUBTRACT,[Vc]:i.FUNC_REVERSE_SUBTRACT};St[Gc]=i.MIN,St[Wc]=i.MAX;const S={[Xc]:i.ZERO,[qc]:i.ONE,[Yc]:i.SRC_COLOR,[Jr]:i.SRC_ALPHA,[Qc]:i.SRC_ALPHA_SATURATE,[Zc]:i.DST_COLOR,[Kc]:i.DST_ALPHA,[$c]:i.ONE_MINUS_SRC_COLOR,[Qr]:i.ONE_MINUS_SRC_ALPHA,[Jc]:i.ONE_MINUS_DST_COLOR,[jc]:i.ONE_MINUS_DST_ALPHA,[eh]:i.CONSTANT_COLOR,[th]:i.ONE_MINUS_CONSTANT_COLOR,[nh]:i.CONSTANT_ALPHA,[ih]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(D,ce,ue,ye,ae,te,Te,ze,ft,st){if(D===Fn){v===!0&&(Me(i.BLEND),v=!1);return}if(v===!1&&(se(i.BLEND),v=!0),D!==zc){if(D!==m||st!==M){if((p!==Jn||x!==Jn)&&(i.blendEquation(i.FUNC_ADD),p=Jn,x=Jn),st)switch(D){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sn:i.blendFunc(i.ONE,i.ONE);break;case mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case go:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case go:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,E=null,R=null,y=null,P.set(0,0,0),L=0,m=D,M=st}return}ae=ae||ce,te=te||ue,Te=Te||ye,(ce!==p||ae!==x)&&(i.blendEquationSeparate(St[ce],St[ae]),p=ce,x=ae),(ue!==b||ye!==E||te!==R||Te!==y)&&(i.blendFuncSeparate(S[ue],S[ye],S[te],S[Te]),b=ue,E=ye,R=te,y=Te),(ze.equals(P)===!1||ft!==L)&&(i.blendColor(ze.r,ze.g,ze.b,ft),P.copy(ze),L=ft),m=D,M=!1}function J(D,ce){D.side===Ft?Me(i.CULL_FACE):se(i.CULL_FACE);let ue=D.side===Vt;ce&&(ue=!ue),ee(ue),D.blending===bi&&D.transparent===!1?Z(Fn):Z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const ye=D.stencilWrite;o.setTest(ye),ye&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(D){T!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),T=D)}function $(D){D!==kc?(se(i.CULL_FACE),D!==I&&(D===po?i.cullFace(i.BACK):D===Bc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),I=D}function be(D){D!==F&&(K&&i.lineWidth(D),F=D)}function ne(D,ce,ue){D?(se(i.POLYGON_OFFSET_FILL),(V!==ce||j!==ue)&&(i.polygonOffset(ce,ue),V=ce,j=ue)):Me(i.POLYGON_OFFSET_FILL)}function de(D){D?se(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function Xe(D){D===void 0&&(D=i.TEXTURE0+q-1),fe!==D&&(i.activeTexture(D),fe=D)}function He(D,ce,ue){ue===void 0&&(fe===null?ue=i.TEXTURE0+q-1:ue=fe);let ye=_e[ue];ye===void 0&&(ye={type:void 0,texture:void 0},_e[ue]=ye),(ye.type!==D||ye.texture!==ce)&&(fe!==ue&&(i.activeTexture(ue),fe=ue),i.bindTexture(D,ce||Q[D]),ye.type=D,ye.texture=ce)}function C(){const D=_e[fe];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(D){it.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),it.copy(D))}function Oe(D){Qe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Qe.copy(D))}function Ce(D,ce){let ue=l.get(ce);ue===void 0&&(ue=new WeakMap,l.set(ce,ue));let ye=ue.get(D);ye===void 0&&(ye=i.getUniformBlockIndex(ce,D.name),ue.set(D,ye))}function me(D,ce){const ye=l.get(ce).get(D);c.get(ce)!==ye&&(i.uniformBlockBinding(ce,ye,D.__bindingPointIndex),c.set(ce,ye))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},fe=null,_e={},f={},h=new WeakMap,u=[],g=null,v=!1,m=null,p=null,b=null,E=null,x=null,R=null,y=null,P=new Ye(0,0,0),L=0,M=!1,T=null,I=null,F=null,V=null,j=null,it.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:Me,bindFramebuffer:Fe,drawBuffers:Ee,useProgram:Ke,setBlending:Z,setMaterial:J,setFlipSided:ee,setCullFace:$,setLineWidth:be,setPolygonOffset:ne,setScissorTest:de,activeTexture:Xe,bindTexture:He,unbindTexture:C,compressedTexImage2D:_,compressedTexImage3D:k,texImage2D:Re,texImage3D:le,updateUBOMapping:Ce,uniformBlockBinding:me,texStorage2D:he,texStorage3D:Ae,texSubImage2D:X,texSubImage3D:re,compressedTexSubImage2D:W,compressedTexSubImage3D:Pe,scissor:ve,viewport:Oe,reset:Ve}}function mm(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Le,d=new WeakMap;let f;const h=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,_){return u?new OffscreenCanvas(C,_):Ks("canvas")}function v(C,_,k){let X=1;const re=He(C);if((re.width>k||re.height>k)&&(X=k/Math.max(re.width,re.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const W=Math.floor(X*re.width),Pe=Math.floor(X*re.height);f===void 0&&(f=g(W,Pe));const he=_?g(W,Pe):f;return he.width=W,he.height=Pe,he.getContext("2d").drawImage(C,0,0,W,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+W+"x"+Pe+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,_,k,X,re=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let W=_;if(_===i.RED&&(k===i.FLOAT&&(W=i.R32F),k===i.HALF_FLOAT&&(W=i.R16F),k===i.UNSIGNED_BYTE&&(W=i.R8)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(W=i.R8UI),k===i.UNSIGNED_SHORT&&(W=i.R16UI),k===i.UNSIGNED_INT&&(W=i.R32UI),k===i.BYTE&&(W=i.R8I),k===i.SHORT&&(W=i.R16I),k===i.INT&&(W=i.R32I)),_===i.RG&&(k===i.FLOAT&&(W=i.RG32F),k===i.HALF_FLOAT&&(W=i.RG16F),k===i.UNSIGNED_BYTE&&(W=i.RG8)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(W=i.RG8UI),k===i.UNSIGNED_SHORT&&(W=i.RG16UI),k===i.UNSIGNED_INT&&(W=i.RG32UI),k===i.BYTE&&(W=i.RG8I),k===i.SHORT&&(W=i.RG16I),k===i.INT&&(W=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(W=i.RGB8UI),k===i.UNSIGNED_SHORT&&(W=i.RGB16UI),k===i.UNSIGNED_INT&&(W=i.RGB32UI),k===i.BYTE&&(W=i.RGB8I),k===i.SHORT&&(W=i.RGB16I),k===i.INT&&(W=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),k===i.UNSIGNED_INT&&(W=i.RGBA32UI),k===i.BYTE&&(W=i.RGBA8I),k===i.SHORT&&(W=i.RGBA16I),k===i.INT&&(W=i.RGBA32I)),_===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),_===i.RGBA){const Pe=re?Ys:nt.getTransfer(X);k===i.FLOAT&&(W=i.RGBA32F),k===i.HALF_FLOAT&&(W=i.RGBA16F),k===i.UNSIGNED_BYTE&&(W=Pe===ct?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(C,_){let k;return C?_===null||_===ii||_===ns?k=i.DEPTH24_STENCIL8:_===Mn?k=i.DEPTH32F_STENCIL8:_===ts&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ii||_===ns?k=i.DEPTH_COMPONENT24:_===Mn?k=i.DEPTH_COMPONENT32F:_===ts&&(k=i.DEPTH_COMPONENT16),k}function R(C,_){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==hn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function y(C){const _=C.target;_.removeEventListener("dispose",y),L(_),_.isVideoTexture&&d.delete(_)}function P(C){const _=C.target;_.removeEventListener("dispose",P),T(_)}function L(C){const _=n.get(C);if(_.__webglInit===void 0)return;const k=C.source,X=h.get(k);if(X){const re=X[_.__cacheKey];re.usedTimes--,re.usedTimes===0&&M(C),Object.keys(X).length===0&&h.delete(k)}n.remove(C)}function M(C){const _=n.get(C);i.deleteTexture(_.__webglTexture);const k=C.source,X=h.get(k);delete X[_.__cacheKey],a.memory.textures--}function T(C){const _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let re=0;re<_.__webglFramebuffer[X].length;re++)i.deleteFramebuffer(_.__webglFramebuffer[X][re]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=C.textures;for(let X=0,re=k.length;X<re;X++){const W=n.get(k[X]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(k[X])}n.remove(C)}let I=0;function F(){I=0}function V(){const C=I;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function j(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function q(C,_){const k=n.get(C);if(C.isVideoTexture&&de(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const X=C.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(k,C,_);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function K(C,_){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Q(k,C,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function ie(C,_){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Q(k,C,_);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function G(C,_){const k=n.get(C);if(C.version>0&&k.__version!==C.version){se(k,C,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}const fe={[es]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[ca]:i.MIRRORED_REPEAT},_e={[an]:i.NEAREST,[uh]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[hr]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},Se={[gh]:i.NEVER,[Sh]:i.ALWAYS,[vh]:i.LESS,[Zl]:i.LEQUAL,[_h]:i.EQUAL,[Mh]:i.GEQUAL,[xh]:i.GREATER,[yh]:i.NOTEQUAL};function We(C,_){if(_.type===Mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===hn||_.magFilter===hr||_.magFilter===fs||_.magFilter===ti||_.minFilter===hn||_.minFilter===hr||_.minFilter===fs||_.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,fe[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,fe[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,fe[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,_e[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,_e[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Se[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===an||_.minFilter!==fs&&_.minFilter!==ti||_.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function it(C,_){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",y));const X=_.source;let re=h.get(X);re===void 0&&(re={},h.set(X,re));const W=j(_);if(W!==C.__cacheKey){re[W]===void 0&&(re[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),re[W].usedTimes++;const Pe=re[C.__cacheKey];Pe!==void 0&&(re[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&M(_)),C.__cacheKey=W,C.__webglTexture=re[W].texture}return k}function Qe(C,_,k){return Math.floor(Math.floor(C/k)/_)}function et(C,_,k,X){const W=C.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,k,X,_.data);else{W.sort((le,ve)=>le.start-ve.start);let Pe=0;for(let le=1;le<W.length;le++){const ve=W[Pe],Oe=W[le],Ce=ve.start+ve.count,me=Qe(Oe.start,_.width,4),Ve=Qe(ve.start,_.width,4);Oe.start<=Ce+1&&me===Ve&&Qe(Oe.start+Oe.count-1,_.width,4)===me?ve.count=Math.max(ve.count,Oe.start+Oe.count-ve.start):(++Pe,W[Pe]=Oe)}W.length=Pe+1;const he=i.getParameter(i.UNPACK_ROW_LENGTH),Ae=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let le=0,ve=W.length;le<ve;le++){const Oe=W[le],Ce=Math.floor(Oe.start/4),me=Math.ceil(Oe.count/4),Ve=Ce%_.width,D=Math.floor(Ce/_.width),ce=me,ue=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ve,D,ce,ue,k,X,_.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function Q(C,_,k){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);const re=it(C,_),W=_.source;t.bindTexture(X,C.__webglTexture,i.TEXTURE0+k);const Pe=n.get(W);if(W.version!==Pe.__version||re===!0){t.activeTexture(i.TEXTURE0+k);const he=nt.getPrimaries(nt.workingColorSpace),Ae=_.colorSpace===Un?null:nt.getPrimaries(_.colorSpace),Re=_.colorSpace===Un||he===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let le=v(_.image,!1,s.maxTextureSize);le=Xe(_,le);const ve=r.convert(_.format,_.colorSpace),Oe=r.convert(_.type);let Ce=E(_.internalFormat,ve,Oe,_.colorSpace,_.isVideoTexture);We(X,_);let me;const Ve=_.mipmaps,D=_.isVideoTexture!==!0,ce=Pe.__version===void 0||re===!0,ue=W.dataReady,ye=R(_,le);if(_.isDepthTexture)Ce=x(_.format===ss,_.type),ce&&(D?t.texStorage2D(i.TEXTURE_2D,1,Ce,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ce,le.width,le.height,0,ve,Oe,null));else if(_.isDataTexture)if(Ve.length>0){D&&ce&&t.texStorage2D(i.TEXTURE_2D,ye,Ce,Ve[0].width,Ve[0].height);for(let ae=0,te=Ve.length;ae<te;ae++)me=Ve[ae],D?ue&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,me.width,me.height,ve,Oe,me.data):t.texImage2D(i.TEXTURE_2D,ae,Ce,me.width,me.height,0,ve,Oe,me.data);_.generateMipmaps=!1}else D?(ce&&t.texStorage2D(i.TEXTURE_2D,ye,Ce,le.width,le.height),ue&&et(_,le,ve,Oe)):t.texImage2D(i.TEXTURE_2D,0,Ce,le.width,le.height,0,ve,Oe,le.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ce,Ve[0].width,Ve[0].height,le.depth);for(let ae=0,te=Ve.length;ae<te;ae++)if(me=Ve[ae],_.format!==rn)if(ve!==null)if(D){if(ue)if(_.layerUpdates.size>0){const Te=Zo(me.width,me.height,_.format,_.type);for(const ze of _.layerUpdates){const ft=me.data.subarray(ze*Te/me.data.BYTES_PER_ELEMENT,(ze+1)*Te/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,ze,me.width,me.height,1,ve,ft)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,me.width,me.height,le.depth,ve,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Ce,me.width,me.height,le.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,me.width,me.height,le.depth,ve,Oe,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Ce,me.width,me.height,le.depth,0,ve,Oe,me.data)}else{D&&ce&&t.texStorage2D(i.TEXTURE_2D,ye,Ce,Ve[0].width,Ve[0].height);for(let ae=0,te=Ve.length;ae<te;ae++)me=Ve[ae],_.format!==rn?ve!==null?D?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,me.width,me.height,ve,me.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Ce,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ue&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,me.width,me.height,ve,Oe,me.data):t.texImage2D(i.TEXTURE_2D,ae,Ce,me.width,me.height,0,ve,Oe,me.data)}else if(_.isDataArrayTexture)if(D){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ce,le.width,le.height,le.depth),ue)if(_.layerUpdates.size>0){const ae=Zo(le.width,le.height,_.format,_.type);for(const te of _.layerUpdates){const Te=le.data.subarray(te*ae/le.data.BYTES_PER_ELEMENT,(te+1)*ae/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,le.width,le.height,1,ve,Oe,Te)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ve,Oe,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,le.width,le.height,le.depth,0,ve,Oe,le.data);else if(_.isData3DTexture)D?(ce&&t.texStorage3D(i.TEXTURE_3D,ye,Ce,le.width,le.height,le.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ve,Oe,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,le.width,le.height,le.depth,0,ve,Oe,le.data);else if(_.isFramebufferTexture){if(ce)if(D)t.texStorage2D(i.TEXTURE_2D,ye,Ce,le.width,le.height);else{let ae=le.width,te=le.height;for(let Te=0;Te<ye;Te++)t.texImage2D(i.TEXTURE_2D,Te,Ce,ae,te,0,ve,Oe,null),ae>>=1,te>>=1}}else if(Ve.length>0){if(D&&ce){const ae=He(Ve[0]);t.texStorage2D(i.TEXTURE_2D,ye,Ce,ae.width,ae.height)}for(let ae=0,te=Ve.length;ae<te;ae++)me=Ve[ae],D?ue&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ve,Oe,me):t.texImage2D(i.TEXTURE_2D,ae,Ce,ve,Oe,me);_.generateMipmaps=!1}else if(D){if(ce){const ae=He(le);t.texStorage2D(i.TEXTURE_2D,ye,Ce,ae.width,ae.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Oe,le)}else t.texImage2D(i.TEXTURE_2D,0,Ce,ve,Oe,le);m(_)&&p(X),Pe.__version=W.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function se(C,_,k){if(_.image.length!==6)return;const X=it(C,_),re=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);const W=n.get(re);if(re.version!==W.__version||X===!0){t.activeTexture(i.TEXTURE0+k);const Pe=nt.getPrimaries(nt.workingColorSpace),he=_.colorSpace===Un?null:nt.getPrimaries(_.colorSpace),Ae=_.colorSpace===Un||Pe===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Re=_.isCompressedTexture||_.image[0].isCompressedTexture,le=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let te=0;te<6;te++)!Re&&!le?ve[te]=v(_.image[te],!0,s.maxCubemapSize):ve[te]=le?_.image[te].image:_.image[te],ve[te]=Xe(_,ve[te]);const Oe=ve[0],Ce=r.convert(_.format,_.colorSpace),me=r.convert(_.type),Ve=E(_.internalFormat,Ce,me,_.colorSpace),D=_.isVideoTexture!==!0,ce=W.__version===void 0||X===!0,ue=re.dataReady;let ye=R(_,Oe);We(i.TEXTURE_CUBE_MAP,_);let ae;if(Re){D&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ve,Oe.width,Oe.height);for(let te=0;te<6;te++){ae=ve[te].mipmaps;for(let Te=0;Te<ae.length;Te++){const ze=ae[Te];_.format!==rn?Ce!==null?D?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,ze.width,ze.height,Ce,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,Ve,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,ze.width,ze.height,Ce,me,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,Ve,ze.width,ze.height,0,Ce,me,ze.data)}}}else{if(ae=_.mipmaps,D&&ce){ae.length>0&&ye++;const te=He(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ve,te.width,te.height)}for(let te=0;te<6;te++)if(le){D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ve[te].width,ve[te].height,Ce,me,ve[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,ve[te].width,ve[te].height,0,Ce,me,ve[te].data);for(let Te=0;Te<ae.length;Te++){const ft=ae[Te].image[te].image;D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,ft.width,ft.height,Ce,me,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,Ve,ft.width,ft.height,0,Ce,me,ft.data)}}else{D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ce,me,ve[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,Ce,me,ve[te]);for(let Te=0;Te<ae.length;Te++){const ze=ae[Te];D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,Ce,me,ze.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,Ve,Ce,me,ze.image[te])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),W.__version=re.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Me(C,_,k,X,re,W){const Pe=r.convert(k.format,k.colorSpace),he=r.convert(k.type),Ae=E(k.internalFormat,Pe,he,k.colorSpace),Re=n.get(_),le=n.get(k);if(le.__renderTarget=_,!Re.__hasExternalTextures){const ve=Math.max(1,_.width>>W),Oe=Math.max(1,_.height>>W);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,W,Ae,ve,Oe,_.depth,0,Pe,he,null):t.texImage2D(re,W,Ae,ve,Oe,0,Pe,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ne(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,re,le.__webglTexture,0,be(_)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,re,le.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(C,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){const X=_.depthTexture,re=X&&X.isDepthTexture?X.type:null,W=x(_.stencilBuffer,re),Pe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=be(_);ne(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,W,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,W,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,W,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,C)}else{const X=_.textures;for(let re=0;re<X.length;re++){const W=X[re],Pe=r.convert(W.format,W.colorSpace),he=r.convert(W.type),Ae=E(W.internalFormat,Pe,he,W.colorSpace),Re=be(_);k&&ne(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Ae,_.width,_.height):ne(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,Ae,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(C,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(_.depthTexture);X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const re=X.__webglTexture,W=be(_);if(_.depthTexture.format===is)ne(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(_.depthTexture.format===ss)ne(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ke(C){const _=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const re=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",re)};X.addEventListener("dispose",re),_.__depthDisposeCallback=re}_.__boundDepthTexture=X}if(C.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const X=C.texture.mipmaps;X&&X.length>0?Ee(_.__webglFramebuffer[0],C):Ee(_.__webglFramebuffer,C)}else if(k){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),Fe(_.__webglDepthbuffer[X],C,!1);else{const re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,W)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Fe(_.__webglDepthbuffer,C,!1);else{const re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,W)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function St(C,_,k){const X=n.get(C);_!==void 0&&Me(X.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ke(C)}function S(C){const _=C.texture,k=n.get(C),X=n.get(_);C.addEventListener("dispose",P);const re=C.textures,W=C.isWebGLCubeRenderTarget===!0,Pe=re.length>1;if(Pe||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,a.memory.textures++),W){k.__webglFramebuffer=[];for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[he]=[];for(let Ae=0;Ae<_.mipmaps.length;Ae++)k.__webglFramebuffer[he][Ae]=i.createFramebuffer()}else k.__webglFramebuffer[he]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)k.__webglFramebuffer[he]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let he=0,Ae=re.length;he<Ae;he++){const Re=n.get(re[he]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&ne(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let he=0;he<re.length;he++){const Ae=re[he];k.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[he]);const Re=r.convert(Ae.format,Ae.colorSpace),le=r.convert(Ae.type),ve=E(Ae.internalFormat,Re,le,Ae.colorSpace,C.isXRRenderTarget===!0),Oe=be(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,ve,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,k.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),We(i.TEXTURE_CUBE_MAP,_);for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)Me(k.__webglFramebuffer[he][Ae],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae);else Me(k.__webglFramebuffer[he],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let he=0,Ae=re.length;he<Ae;he++){const Re=re[he],le=n.get(Re);let ve=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,le.__webglTexture),We(ve,Re),Me(k.__webglFramebuffer,C,Re,i.COLOR_ATTACHMENT0+he,ve,0),m(Re)&&p(ve)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,X.__webglTexture),We(he,_),_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)Me(k.__webglFramebuffer[Ae],C,_,i.COLOR_ATTACHMENT0,he,Ae);else Me(k.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,he,0);m(_)&&p(he),t.unbindTexture()}C.depthBuffer&&Ke(C)}function Z(C){const _=C.textures;for(let k=0,X=_.length;k<X;k++){const re=_[k];if(m(re)){const W=b(C),Pe=n.get(re).__webglTexture;t.bindTexture(W,Pe),p(W),t.unbindTexture()}}}const J=[],ee=[];function $(C){if(C.samples>0){if(ne(C)===!1){const _=C.textures,k=C.width,X=C.height;let re=i.COLOR_BUFFER_BIT;const W=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(C),he=_.length>1;if(he)for(let Re=0;Re<_.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ae=C.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Re=0;Re<_.length;Re++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);const le=n.get(_[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,re,i.NEAREST),c===!0&&(J.length=0,ee.length=0,J.push(i.COLOR_ATTACHMENT0+Re),C.depthBuffer&&C.resolveDepthBuffer===!1&&(J.push(W),ee.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Re=0;Re<_.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);const le=n.get(_[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function be(C){return Math.min(s.maxSamples,C.samples)}function ne(C){const _=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function de(C){const _=a.render.frame;d.get(C)!==_&&(d.set(C,_),C.update())}function Xe(C,_){const k=C.colorSpace,X=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Li&&k!==Un&&(nt.getTransfer(k)===ct?(X!==rn||re!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),_}function He(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=ie,this.setTextureCube=G,this.rebindTextures=St,this.setupRenderTarget=S,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ne}function gm(i,e){function t(n,s=Un){let r;const a=nt.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===Wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vl)return i.BYTE;if(n===Gl)return i.SHORT;if(n===ts)return i.UNSIGNED_SHORT;if(n===Ga)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===os)return i.HALF_FLOAT;if(n===ql)return i.ALPHA;if(n===Yl)return i.RGB;if(n===rn)return i.RGBA;if(n===is)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===$l)return i.RED;if(n===qa)return i.RED_INTEGER;if(n===Kl)return i.RG;if(n===Ya)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===zs||n===Hs||n===Vs||n===Gs)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===da||n===ua||n===fa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pa||n===ma||n===ga)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pa||n===ma)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ga)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===va||n===_a||n===xa||n===ya||n===Ma||n===Sa||n===wa||n===Ea||n===ba||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===va)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_a)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ya)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ma)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ea)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ba)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ta)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ca)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===Ia||n===Da)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===La)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ua||n===Na||n===Fa||n===Oa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const vm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_m=`
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

}`;class xm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new lc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bn({vertexShader:vm,fragmentShader:_m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Y(new En(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ym extends Ui{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,f=null,h=null,u=null,g=null;const v=typeof XRWebGLBinding<"u",m=new xm,p={},b=t.getContextAttributes();let E=null,x=null;const R=[],y=[],P=new Le;let L=null;const M=new Yt;M.viewport=new ht;const T=new Yt;T.viewport=new ht;const I=[M,T],F=new kd;let V=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let se=R[Q];return se===void 0&&(se=new Lr,R[Q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Q){let se=R[Q];return se===void 0&&(se=new Lr,R[Q]=se),se.getGripSpace()},this.getHand=function(Q){let se=R[Q];return se===void 0&&(se=new Lr,R[Q]=se),se.getHandSpace()};function q(Q){const se=y.indexOf(Q.inputSource);if(se===-1)return;const Me=R[se];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,l||a),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function K(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ie);for(let Q=0;Q<R.length;Q++){const se=y[Q];se!==null&&(y[Q]=null,R[Q].disconnect(se))}V=null,j=null,m.reset();for(const Q in p)delete p[Q];e.setRenderTarget(E),u=null,h=null,f=null,s=null,x=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ie),b.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Fe=null,Ee=null;b.depth&&(Ee=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=b.stencil?ss:is,Fe=b.stencil?ns:ii);const Ke={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ke),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new si(h.textureWidth,h.textureHeight,{format:rn,type:fn,depthTexture:new oc(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new si(u.framebufferWidth,u.framebufferHeight,{format:rn,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Q){for(let se=0;se<Q.removed.length;se++){const Me=Q.removed[se],Fe=y.indexOf(Me);Fe>=0&&(y[Fe]=null,R[Fe].disconnect(Me))}for(let se=0;se<Q.added.length;se++){const Me=Q.added[se];let Fe=y.indexOf(Me);if(Fe===-1){for(let Ke=0;Ke<R.length;Ke++)if(Ke>=y.length){y.push(Me),Fe=Ke;break}else if(y[Ke]===null){y[Ke]=Me,Fe=Ke;break}if(Fe===-1)break}const Ee=R[Fe];Ee&&Ee.connect(Me)}}const G=new A,fe=new A;function _e(Q,se,Me){G.setFromMatrixPosition(se.matrixWorld),fe.setFromMatrixPosition(Me.matrixWorld);const Fe=G.distanceTo(fe),Ee=se.projectionMatrix.elements,Ke=Me.projectionMatrix.elements,St=Ee[14]/(Ee[10]-1),S=Ee[14]/(Ee[10]+1),Z=(Ee[9]+1)/Ee[5],J=(Ee[9]-1)/Ee[5],ee=(Ee[8]-1)/Ee[0],$=(Ke[8]+1)/Ke[0],be=St*ee,ne=St*$,de=Fe/(-ee+$),Xe=de*-ee;if(se.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Xe),Q.translateZ(de),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ee[10]===-1)Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const He=St+de,C=S+de,_=be-Xe,k=ne+(Fe-Xe),X=Z*S/C*He,re=J*S/C*He;Q.projectionMatrix.makePerspective(_,k,X,re,He,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Se(Q,se){se===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(se.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let se=Q.near,Me=Q.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),F.near=T.near=M.near=se,F.far=T.far=M.far=Me,(V!==F.near||j!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,j=F.far),F.layers.mask=Q.layers.mask|6,M.layers.mask=F.layers.mask&3,T.layers.mask=F.layers.mask&5;const Fe=Q.parent,Ee=F.cameras;Se(F,Fe);for(let Ke=0;Ke<Ee.length;Ke++)Se(Ee[Ke],Fe);Ee.length===2?_e(F,M,T):F.projectionMatrix.copy(M.projectionMatrix),We(Q,F,Fe)};function We(Q,se,Me){Me===null?Q.matrix.copy(se.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(se.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=rs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&u===null))return c},this.setFoveation=function(Q){c=Q,h!==null&&(h.fixedFoveation=Q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Q){return p[Q]};let it=null;function Qe(Q,se){if(d=se.getViewerPose(l||a),g=se,d!==null){const Me=d.views;u!==null&&(e.setRenderTargetFramebuffer(x,u.framebuffer),e.setRenderTarget(x));let Fe=!1;Me.length!==F.cameras.length&&(F.cameras.length=0,Fe=!0);for(let S=0;S<Me.length;S++){const Z=Me[S];let J=null;if(u!==null)J=u.getViewport(Z);else{const $=f.getViewSubImage(h,Z);J=$.viewport,S===0&&(e.setRenderTargetTextures(x,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(x))}let ee=I[S];ee===void 0&&(ee=new Yt,ee.layers.enable(S),ee.viewport=new ht,I[S]=ee),ee.matrix.fromArray(Z.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Z.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(J.x,J.y,J.width,J.height),S===0&&(F.matrix.copy(ee.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Fe===!0&&F.cameras.push(ee)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const S=f.getDepthInformation(Me[0]);S&&S.isValid&&S.texture&&m.init(S,s.renderState)}if(Ee&&Ee.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let S=0;S<Me.length;S++){const Z=Me[S].camera;if(Z){let J=p[Z];J||(J=new lc,p[Z]=J);const ee=f.getCameraImage(Z);J.sourceTexture=ee}}}}for(let Me=0;Me<R.length;Me++){const Fe=y[Me],Ee=R[Me];Fe!==null&&Ee!==void 0&&Ee.update(Fe,se,l||a)}it&&it(Q,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const et=new pc;et.setAnimationLoop(Qe),this.setAnimationLoop=function(Q){it=Q},this.dispose=function(){}}}const $n=new on,Mm=new ut;function Sm(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ic(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&u(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),E=b.envMap,x=b.envMapRotation;E&&(m.envMap.value=E,$n.copy(x),$n.x*=-1,$n.y*=-1,$n.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),m.envMapRotation.value.setFromMatrix4(Mm.makeRotationFromEuler($n)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wm(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,E){const x=E.program;n.uniformBlockBinding(b,x)}function l(b,E){let x=s[b.id];x===void 0&&(g(b),x=d(b),s[b.id]=x,b.addEventListener("dispose",m));const R=E.program;n.updateUBOMapping(b,R);const y=e.render.frame;r[b.id]!==y&&(h(b),r[b.id]=y)}function d(b){const E=f();b.__bindingPointIndex=E;const x=i.createBuffer(),R=b.__size,y=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const E=s[b.id],x=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let y=0,P=x.length;y<P;y++){const L=Array.isArray(x[y])?x[y]:[x[y]];for(let M=0,T=L.length;M<T;M++){const I=L[M];if(u(I,y,M,R)===!0){const F=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let j=0;for(let q=0;q<V.length;q++){const K=V[q],ie=v(K);typeof K=="number"||typeof K=="boolean"?(I.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,F+j,I.__data)):K.isMatrix3?(I.__data[0]=K.elements[0],I.__data[1]=K.elements[1],I.__data[2]=K.elements[2],I.__data[3]=0,I.__data[4]=K.elements[3],I.__data[5]=K.elements[4],I.__data[6]=K.elements[5],I.__data[7]=0,I.__data[8]=K.elements[6],I.__data[9]=K.elements[7],I.__data[10]=K.elements[8],I.__data[11]=0):(K.toArray(I.__data,j),j+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(b,E,x,R){const y=b.value,P=E+"_"+x;if(R[P]===void 0)return typeof y=="number"||typeof y=="boolean"?R[P]=y:R[P]=y.clone(),!0;{const L=R[P];if(typeof y=="number"||typeof y=="boolean"){if(L!==y)return R[P]=y,!0}else if(L.equals(y)===!1)return L.copy(y),!0}return!1}function g(b){const E=b.uniforms;let x=0;const R=16;for(let P=0,L=E.length;P<L;P++){const M=Array.isArray(E[P])?E[P]:[E[P]];for(let T=0,I=M.length;T<I;T++){const F=M[T],V=Array.isArray(F.value)?F.value:[F.value];for(let j=0,q=V.length;j<q;j++){const K=V[j],ie=v(K),G=x%R,fe=G%ie.boundary,_e=G+fe;x+=fe,_e!==0&&R-_e<ie.storage&&(x+=R-_e),F.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=ie.storage}}}const y=x%R;return y>0&&(x+=R-y),b.__size=x,b.__cache={},this}function v(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Em{constructor(e={}){const{canvas:t=Bh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const b=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=Lt;let y=0,P=0,L=null,M=-1,T=null;const I=new ht,F=new ht;let V=null;const j=new Ye(0);let q=0,K=t.width,ie=t.height,G=1,fe=null,_e=null;const Se=new ht(0,0,K,ie),We=new ht(0,0,K,ie);let it=!1;const Qe=new Ja;let et=!1,Q=!1;const se=new ut,Me=new A,Fe=new ht,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function St(){return L===null?G:1}let S=n;function Z(w,N){return t.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Va}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ae,!1),S===null){const N="webgl2";if(S=Z(N,w),S===null)throw Z(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let J,ee,$,be,ne,de,Xe,He,C,_,k,X,re,W,Pe,he,Ae,Re,le,ve,Oe,Ce,me,Ve;function D(){J=new Up(S),J.init(),Ce=new gm(S,J),ee=new Ap(S,J,e,Ce),$=new pm(S,J),ee.reversedDepthBuffer&&h&&$.buffers.depth.setReversed(!0),be=new Op(S),ne=new tm,de=new mm(S,J,$,ne,ee,Ce,be),Xe=new Cp(x),He=new Dp(x),C=new Vd(S),me=new bp(S,C),_=new Np(S,C,be,me),k=new Bp(S,_,C,be),le=new kp(S,ee,de),he=new Rp(ne),X=new em(x,Xe,He,J,ee,me,he),re=new Sm(x,ne),W=new im,Pe=new cm(J),Re=new Ep(x,Xe,He,$,k,u,c),Ae=new um(x,k,ee),Ve=new wm(S,be,ee,$),ve=new Tp(S,J,be),Oe=new Fp(S,J,be),be.programs=X.programs,x.capabilities=ee,x.extensions=J,x.properties=ne,x.renderLists=W,x.shadowMap=Ae,x.state=$,x.info=be}D();const ce=new ym(x,S);this.xr=ce,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(K,ie,!1))},this.getSize=function(w){return w.set(K,ie)},this.setSize=function(w,N,B=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,ie=N,t.width=Math.floor(w*G),t.height=Math.floor(N*G),B===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(K*G,ie*G).floor()},this.setDrawingBufferSize=function(w,N,B){K=w,ie=N,G=B,t.width=Math.floor(w*B),t.height=Math.floor(N*B),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(Se)},this.setViewport=function(w,N,B,H){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,N,B,H),$.viewport(I.copy(Se).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(We)},this.setScissor=function(w,N,B,H){w.isVector4?We.set(w.x,w.y,w.z,w.w):We.set(w,N,B,H),$.scissor(F.copy(We).multiplyScalar(G).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(w){$.setScissorTest(it=w)},this.setOpaqueSort=function(w){fe=w},this.setTransparentSort=function(w){_e=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,B=!0){let H=0;if(w){let O=!1;if(L!==null){const oe=L.texture.format;O=oe===$a||oe===Ya||oe===qa}if(O){const oe=L.texture.type,ge=oe===fn||oe===ii||oe===ts||oe===ns||oe===Wa||oe===Xa,we=Re.getClearColor(),xe=Re.getClearAlpha(),Ue=we.r,ke=we.g,Ie=we.b;ge?(g[0]=Ue,g[1]=ke,g[2]=Ie,g[3]=xe,S.clearBufferuiv(S.COLOR,0,g)):(v[0]=Ue,v[1]=ke,v[2]=Ie,v[3]=xe,S.clearBufferiv(S.COLOR,0,v))}else H|=S.COLOR_BUFFER_BIT}N&&(H|=S.DEPTH_BUFFER_BIT),B&&(H|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Re.dispose(),W.dispose(),Pe.dispose(),ne.dispose(),Xe.dispose(),He.dispose(),k.dispose(),me.dispose(),Ve.dispose(),X.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ln),ce.removeEventListener("sessionend",oo),Hn.stop()};function ue(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=be.autoReset,N=Ae.enabled,B=Ae.autoUpdate,H=Ae.needsUpdate,O=Ae.type;D(),be.autoReset=w,Ae.enabled=N,Ae.autoUpdate=B,Ae.needsUpdate=H,Ae.type=O}function ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function te(w){const N=w.target;N.removeEventListener("dispose",te),Te(N)}function Te(w){ze(w),ne.remove(w)}function ze(w){const N=ne.get(w).programs;N!==void 0&&(N.forEach(function(B){X.releaseProgram(B)}),w.isShaderMaterial&&X.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,B,H,O,oe){N===null&&(N=Ee);const ge=O.isMesh&&O.matrixWorld.determinant()<0,we=Ic(w,N,B,H,O);$.setMaterial(H,ge);let xe=B.index,Ue=1;if(H.wireframe===!0){if(xe=_.getWireframeAttribute(B),xe===void 0)return;Ue=2}const ke=B.drawRange,Ie=B.attributes.position;let Ze=ke.start*Ue,lt=(ke.start+ke.count)*Ue;oe!==null&&(Ze=Math.max(Ze,oe.start*Ue),lt=Math.min(lt,(oe.start+oe.count)*Ue)),xe!==null?(Ze=Math.max(Ze,0),lt=Math.min(lt,xe.count)):Ie!=null&&(Ze=Math.max(Ze,0),lt=Math.min(lt,Ie.count));const _t=lt-Ze;if(_t<0||_t===1/0)return;me.setup(O,H,we,B,xe);let pt,dt=ve;if(xe!==null&&(pt=C.get(xe),dt=Oe,dt.setIndex(pt)),O.isMesh)H.wireframe===!0?($.setLineWidth(H.wireframeLinewidth*St()),dt.setMode(S.LINES)):dt.setMode(S.TRIANGLES);else if(O.isLine){let De=H.linewidth;De===void 0&&(De=1),$.setLineWidth(De*St()),O.isLineSegments?dt.setMode(S.LINES):O.isLineLoop?dt.setMode(S.LINE_LOOP):dt.setMode(S.LINE_STRIP)}else O.isPoints?dt.setMode(S.POINTS):O.isSprite&&dt.setMode(S.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)as("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))dt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const De=O._multiDrawStarts,gt=O._multiDrawCounts,tt=O._multiDrawCount,Gt=xe?C.get(xe).bytesPerElement:1,oi=ne.get(H).currentProgram.getUniforms();for(let Wt=0;Wt<tt;Wt++)oi.setValue(S,"_gl_DrawID",Wt),dt.render(De[Wt]/Gt,gt[Wt])}else if(O.isInstancedMesh)dt.renderInstances(Ze,_t,O.count);else if(B.isInstancedBufferGeometry){const De=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,gt=Math.min(B.instanceCount,De);dt.renderInstances(Ze,_t,gt)}else dt.render(Ze,_t)};function ft(w,N,B){w.transparent===!0&&w.side===Ft&&w.forceSinglePass===!1?(w.side=Vt,w.needsUpdate=!0,us(w,N,B),w.side=kn,w.needsUpdate=!0,us(w,N,B),w.side=Ft):us(w,N,B)}this.compile=function(w,N,B=null){B===null&&(B=w),p=Pe.get(B),p.init(N),E.push(p),B.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==B&&w.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const H=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){const we=oe[ge];ft(we,B,O),H.add(we)}else ft(oe,B,O),H.add(oe)}),p=E.pop(),H},this.compileAsync=function(w,N,B=null){const H=this.compile(w,N,B);return new Promise(O=>{function oe(){if(H.forEach(function(ge){ne.get(ge).currentProgram.isReady()&&H.delete(ge)}),H.size===0){O(w);return}setTimeout(oe,10)}J.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let st=null;function pn(w){st&&st(w)}function ln(){Hn.stop()}function oo(){Hn.start()}const Hn=new pc;Hn.setAnimationLoop(pn),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(w){st=w,ce.setAnimationLoop(w),w===null?Hn.stop():Hn.start()},ce.addEventListener("sessionstart",ln),ce.addEventListener("sessionend",oo),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(N),N=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,L),p=Pe.get(w,E.length),p.init(N),E.push(p),se.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Qe.setFromProjectionMatrix(se,dn,N.reversedDepth),Q=this.localClippingEnabled,et=he.init(this.clippingPlanes,Q),m=W.get(w,b.length),m.init(),b.push(m),ce.enabled===!0&&ce.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&lr(oe,N,-1/0,x.sortObjects)}lr(w,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(fe,_e),Ke=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ke&&Re.addToRenderList(m,w),this.info.render.frame++,et===!0&&he.beginShadows();const B=p.state.shadowsArray;Ae.render(B,w,N),et===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(p.setupLights(),N.isArrayCamera){const oe=N.cameras;if(O.length>0)for(let ge=0,we=oe.length;ge<we;ge++){const xe=oe[ge];co(H,O,w,xe)}Ke&&Re.render(w);for(let ge=0,we=oe.length;ge<we;ge++){const xe=oe[ge];lo(m,w,xe,xe.viewport)}}else O.length>0&&co(H,O,w,N),Ke&&Re.render(w),lo(m,w,N);L!==null&&P===0&&(de.updateMultisampleRenderTarget(L),de.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(x,w,N),me.resetDefaultState(),M=-1,T=null,E.pop(),E.length>0?(p=E[E.length-1],et===!0&&he.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function lr(w,N,B,H){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Qe.intersectsSprite(w)){H&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(se);const ge=k.update(w),we=w.material;we.visible&&m.push(w,ge,we,B,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Qe.intersectsObject(w))){const ge=k.update(w),we=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Fe.copy(ge.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(se)),Array.isArray(we)){const xe=ge.groups;for(let Ue=0,ke=xe.length;Ue<ke;Ue++){const Ie=xe[Ue],Ze=we[Ie.materialIndex];Ze&&Ze.visible&&m.push(w,ge,Ze,B,Fe.z,Ie)}}else we.visible&&m.push(w,ge,we,B,Fe.z,null)}}const oe=w.children;for(let ge=0,we=oe.length;ge<we;ge++)lr(oe[ge],N,B,H)}function lo(w,N,B,H){const O=w.opaque,oe=w.transmissive,ge=w.transparent;p.setupLightsView(B),et===!0&&he.setGlobalState(x.clippingPlanes,B),H&&$.viewport(I.copy(H)),O.length>0&&ds(O,N,B),oe.length>0&&ds(oe,N,B),ge.length>0&&ds(ge,N,B),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function co(w,N,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new si(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?os:fn,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const oe=p.state.transmissionRenderTarget[H.id],ge=H.viewport||I;oe.setSize(ge.z*x.transmissionResolutionScale,ge.w*x.transmissionResolutionScale);const we=x.getRenderTarget(),xe=x.getActiveCubeFace(),Ue=x.getActiveMipmapLevel();x.setRenderTarget(oe),x.getClearColor(j),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Ke&&Re.render(B);const ke=x.toneMapping;x.toneMapping=On;const Ie=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),et===!0&&he.setGlobalState(x.clippingPlanes,H),ds(w,B,H),de.updateMultisampleRenderTarget(oe),de.updateRenderTargetMipmap(oe),J.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let lt=0,_t=N.length;lt<_t;lt++){const pt=N[lt],dt=pt.object,De=pt.geometry,gt=pt.material,tt=pt.group;if(gt.side===Ft&&dt.layers.test(H.layers)){const Gt=gt.side;gt.side=Vt,gt.needsUpdate=!0,ho(dt,B,H,De,gt,tt),gt.side=Gt,gt.needsUpdate=!0,Ze=!0}}Ze===!0&&(de.updateMultisampleRenderTarget(oe),de.updateRenderTargetMipmap(oe))}x.setRenderTarget(we,xe,Ue),x.setClearColor(j,q),Ie!==void 0&&(H.viewport=Ie),x.toneMapping=ke}function ds(w,N,B){const H=N.isScene===!0?N.overrideMaterial:null;for(let O=0,oe=w.length;O<oe;O++){const ge=w[O],we=ge.object,xe=ge.geometry,Ue=ge.group;let ke=ge.material;ke.allowOverride===!0&&H!==null&&(ke=H),we.layers.test(B.layers)&&ho(we,N,B,xe,ke,Ue)}}function ho(w,N,B,H,O,oe){w.onBeforeRender(x,N,B,H,O,oe),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(x,N,B,H,w,oe),O.transparent===!0&&O.side===Ft&&O.forceSinglePass===!1?(O.side=Vt,O.needsUpdate=!0,x.renderBufferDirect(B,N,H,O,w,oe),O.side=kn,O.needsUpdate=!0,x.renderBufferDirect(B,N,H,O,w,oe),O.side=Ft):x.renderBufferDirect(B,N,H,O,w,oe),w.onAfterRender(x,N,B,H,O,oe)}function us(w,N,B){N.isScene!==!0&&(N=Ee);const H=ne.get(w),O=p.state.lights,oe=p.state.shadowsArray,ge=O.state.version,we=X.getParameters(w,O.state,oe,N,B),xe=X.getProgramCacheKey(we);let Ue=H.programs;H.environment=w.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(w.isMeshStandardMaterial?He:Xe).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",te),Ue=new Map,H.programs=Ue);let ke=Ue.get(xe);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===ge)return fo(w,we),ke}else we.uniforms=X.getUniforms(w),w.onBeforeCompile(we,x),ke=X.acquireProgram(we,xe),Ue.set(xe,ke),H.uniforms=we.uniforms;const Ie=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=he.uniform),fo(w,we),H.needsLights=Uc(w),H.lightsStateVersion=ge,H.needsLights&&(Ie.ambientLightColor.value=O.state.ambient,Ie.lightProbe.value=O.state.probe,Ie.directionalLights.value=O.state.directional,Ie.directionalLightShadows.value=O.state.directionalShadow,Ie.spotLights.value=O.state.spot,Ie.spotLightShadows.value=O.state.spotShadow,Ie.rectAreaLights.value=O.state.rectArea,Ie.ltc_1.value=O.state.rectAreaLTC1,Ie.ltc_2.value=O.state.rectAreaLTC2,Ie.pointLights.value=O.state.point,Ie.pointLightShadows.value=O.state.pointShadow,Ie.hemisphereLights.value=O.state.hemi,Ie.directionalShadowMap.value=O.state.directionalShadowMap,Ie.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ie.spotShadowMap.value=O.state.spotShadowMap,Ie.spotLightMatrix.value=O.state.spotLightMatrix,Ie.spotLightMap.value=O.state.spotLightMap,Ie.pointShadowMap.value=O.state.pointShadowMap,Ie.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=ke,H.uniformsList=null,ke}function uo(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Xs.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function fo(w,N){const B=ne.get(w);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Ic(w,N,B,H,O){N.isScene!==!0&&(N=Ee),de.resetTextureUnits();const oe=N.fog,ge=H.isMeshStandardMaterial?N.environment:null,we=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Li,xe=(H.isMeshStandardMaterial?He:Xe).get(H.envMap||ge),Ue=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ke=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ie=!!B.morphAttributes.position,Ze=!!B.morphAttributes.normal,lt=!!B.morphAttributes.color;let _t=On;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(_t=x.toneMapping);const pt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,dt=pt!==void 0?pt.length:0,De=ne.get(H),gt=p.state.lights;if(et===!0&&(Q===!0||w!==T)){const Ot=w===T&&H.id===M;he.setState(H,w,Ot)}let tt=!1;H.version===De.__version?(De.needsLights&&De.lightsStateVersion!==gt.state.version||De.outputColorSpace!==we||O.isBatchedMesh&&De.batching===!1||!O.isBatchedMesh&&De.batching===!0||O.isBatchedMesh&&De.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&De.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&De.instancing===!1||!O.isInstancedMesh&&De.instancing===!0||O.isSkinnedMesh&&De.skinning===!1||!O.isSkinnedMesh&&De.skinning===!0||O.isInstancedMesh&&De.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&De.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&De.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&De.instancingMorph===!1&&O.morphTexture!==null||De.envMap!==xe||H.fog===!0&&De.fog!==oe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==he.numPlanes||De.numIntersection!==he.numIntersection)||De.vertexAlphas!==Ue||De.vertexTangents!==ke||De.morphTargets!==Ie||De.morphNormals!==Ze||De.morphColors!==lt||De.toneMapping!==_t||De.morphTargetsCount!==dt)&&(tt=!0):(tt=!0,De.__version=H.version);let Gt=De.currentProgram;tt===!0&&(Gt=us(H,N,O));let oi=!1,Wt=!1,ki=!1;const vt=Gt.getUniforms(),jt=De.uniforms;if($.useProgram(Gt.program)&&(oi=!0,Wt=!0,ki=!0),H.id!==M&&(M=H.id,Wt=!0),oi||T!==w){$.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),vt.setValue(S,"projectionMatrix",w.projectionMatrix),vt.setValue(S,"viewMatrix",w.matrixWorldInverse);const Ht=vt.map.cameraPosition;Ht!==void 0&&Ht.setValue(S,Me.setFromMatrixPosition(w.matrixWorld)),ee.logarithmicDepthBuffer&&vt.setValue(S,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&vt.setValue(S,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,Wt=!0,ki=!0)}if(O.isSkinnedMesh){vt.setOptional(S,O,"bindMatrix"),vt.setOptional(S,O,"bindMatrixInverse");const Ot=O.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),vt.setValue(S,"boneTexture",Ot.boneTexture,de))}O.isBatchedMesh&&(vt.setOptional(S,O,"batchingTexture"),vt.setValue(S,"batchingTexture",O._matricesTexture,de),vt.setOptional(S,O,"batchingIdTexture"),vt.setValue(S,"batchingIdTexture",O._indirectTexture,de),vt.setOptional(S,O,"batchingColorTexture"),O._colorsTexture!==null&&vt.setValue(S,"batchingColorTexture",O._colorsTexture,de));const Zt=B.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&le.update(O,B,Gt),(Wt||De.receiveShadow!==O.receiveShadow)&&(De.receiveShadow=O.receiveShadow,vt.setValue(S,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(jt.envMap.value=xe,jt.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(jt.envMapIntensity.value=N.environmentIntensity),Wt&&(vt.setValue(S,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&Dc(jt,ki),oe&&H.fog===!0&&re.refreshFogUniforms(jt,oe),re.refreshMaterialUniforms(jt,H,G,ie,p.state.transmissionRenderTarget[w.id]),Xs.upload(S,uo(De),jt,de)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Xs.upload(S,uo(De),jt,de),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&vt.setValue(S,"center",O.center),vt.setValue(S,"modelViewMatrix",O.modelViewMatrix),vt.setValue(S,"normalMatrix",O.normalMatrix),vt.setValue(S,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ot=H.uniformsGroups;for(let Ht=0,cr=Ot.length;Ht<cr;Ht++){const Vn=Ot[Ht];Ve.update(Vn,Gt),Ve.bind(Vn,Gt)}}return Gt}function Dc(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Uc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,N,B){const H=ne.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ne.get(w.texture).__webglTexture=N,ne.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:B,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){const B=ne.get(w);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0};const Nc=S.createFramebuffer();this.setRenderTarget=function(w,N=0,B=0){L=w,y=N,P=B;let H=!0,O=null,oe=!1,ge=!1;if(w){const xe=ne.get(w);if(xe.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(S.FRAMEBUFFER,null),H=!1;else if(xe.__webglFramebuffer===void 0)de.setupRenderTarget(w);else if(xe.__hasExternalTextures)de.rebindTextures(w,ne.get(w.texture).__webglTexture,ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ie=w.depthTexture;if(xe.__boundDepthTexture!==Ie){if(Ie!==null&&ne.has(Ie)&&(w.width!==Ie.image.width||w.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(w)}}const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ge=!0);const ke=ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[N])?O=ke[N][B]:O=ke[N],oe=!0):w.samples>0&&de.useMultisampledRTT(w)===!1?O=ne.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?O=ke[B]:O=ke,I.copy(w.viewport),F.copy(w.scissor),V=w.scissorTest}else I.copy(Se).multiplyScalar(G).floor(),F.copy(We).multiplyScalar(G).floor(),V=it;if(B!==0&&(O=Nc),$.bindFramebuffer(S.FRAMEBUFFER,O)&&H&&$.drawBuffers(w,O),$.viewport(I),$.scissor(F),$.setScissorTest(V),oe){const xe=ne.get(w.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,B)}else if(ge){const xe=N;for(let Ue=0;Ue<w.textures.length;Ue++){const ke=ne.get(w.textures[Ue]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Ue,ke.__webglTexture,B,xe)}}else if(w!==null&&B!==0){const xe=ne.get(w.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,xe.__webglTexture,B)}M=-1},this.readRenderTargetPixels=function(w,N,B,H,O,oe,ge,we=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){$.bindFramebuffer(S.FRAMEBUFFER,xe);try{const Ue=w.textures[we],ke=Ue.format,Ie=Ue.type;if(!ee.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-H&&B>=0&&B<=w.height-O&&(w.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+we),S.readPixels(N,B,H,O,Ce.convert(ke),Ce.convert(Ie),oe))}finally{const Ue=L!==null?ne.get(L).__webglFramebuffer:null;$.bindFramebuffer(S.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(w,N,B,H,O,oe,ge,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe)if(N>=0&&N<=w.width-H&&B>=0&&B<=w.height-O){$.bindFramebuffer(S.FRAMEBUFFER,xe);const Ue=w.textures[we],ke=Ue.format,Ie=Ue.type;if(!ee.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Ze),S.bufferData(S.PIXEL_PACK_BUFFER,oe.byteLength,S.STREAM_READ),w.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+we),S.readPixels(N,B,H,O,Ce.convert(ke),Ce.convert(Ie),0);const lt=L!==null?ne.get(L).__webglFramebuffer:null;$.bindFramebuffer(S.FRAMEBUFFER,lt);const _t=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await zh(S,_t,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Ze),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,oe),S.deleteBuffer(Ze),S.deleteSync(_t),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,B=0){const H=Math.pow(2,-B),O=Math.floor(w.image.width*H),oe=Math.floor(w.image.height*H),ge=N!==null?N.x:0,we=N!==null?N.y:0;de.setTexture2D(w,0),S.copyTexSubImage2D(S.TEXTURE_2D,B,0,0,ge,we,O,oe),$.unbindTexture()};const Fc=S.createFramebuffer(),Oc=S.createFramebuffer();this.copyTextureToTexture=function(w,N,B=null,H=null,O=0,oe=null){oe===null&&(O!==0?(as("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=O,O=0):oe=0);let ge,we,xe,Ue,ke,Ie,Ze,lt,_t;const pt=w.isCompressedTexture?w.mipmaps[oe]:w.image;if(B!==null)ge=B.max.x-B.min.x,we=B.max.y-B.min.y,xe=B.isBox3?B.max.z-B.min.z:1,Ue=B.min.x,ke=B.min.y,Ie=B.isBox3?B.min.z:0;else{const Zt=Math.pow(2,-O);ge=Math.floor(pt.width*Zt),we=Math.floor(pt.height*Zt),w.isDataArrayTexture?xe=pt.depth:w.isData3DTexture?xe=Math.floor(pt.depth*Zt):xe=1,Ue=0,ke=0,Ie=0}H!==null?(Ze=H.x,lt=H.y,_t=H.z):(Ze=0,lt=0,_t=0);const dt=Ce.convert(N.format),De=Ce.convert(N.type);let gt;N.isData3DTexture?(de.setTexture3D(N,0),gt=S.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(de.setTexture2DArray(N,0),gt=S.TEXTURE_2D_ARRAY):(de.setTexture2D(N,0),gt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,N.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,N.unpackAlignment);const tt=S.getParameter(S.UNPACK_ROW_LENGTH),Gt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),oi=S.getParameter(S.UNPACK_SKIP_PIXELS),Wt=S.getParameter(S.UNPACK_SKIP_ROWS),ki=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,pt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,pt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ue),S.pixelStorei(S.UNPACK_SKIP_ROWS,ke),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ie);const vt=w.isDataArrayTexture||w.isData3DTexture,jt=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){const Zt=ne.get(w),Ot=ne.get(N),Ht=ne.get(Zt.__renderTarget),cr=ne.get(Ot.__renderTarget);$.bindFramebuffer(S.READ_FRAMEBUFFER,Ht.__webglFramebuffer),$.bindFramebuffer(S.DRAW_FRAMEBUFFER,cr.__webglFramebuffer);for(let Vn=0;Vn<xe;Vn++)vt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ne.get(w).__webglTexture,O,Ie+Vn),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ne.get(N).__webglTexture,oe,_t+Vn)),S.blitFramebuffer(Ue,ke,ge,we,Ze,lt,ge,we,S.DEPTH_BUFFER_BIT,S.NEAREST);$.bindFramebuffer(S.READ_FRAMEBUFFER,null),$.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||ne.has(w)){const Zt=ne.get(w),Ot=ne.get(N);$.bindFramebuffer(S.READ_FRAMEBUFFER,Fc),$.bindFramebuffer(S.DRAW_FRAMEBUFFER,Oc);for(let Ht=0;Ht<xe;Ht++)vt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Zt.__webglTexture,O,Ie+Ht):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Zt.__webglTexture,O),jt?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ot.__webglTexture,oe,_t+Ht):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ot.__webglTexture,oe),O!==0?S.blitFramebuffer(Ue,ke,ge,we,Ze,lt,ge,we,S.COLOR_BUFFER_BIT,S.NEAREST):jt?S.copyTexSubImage3D(gt,oe,Ze,lt,_t+Ht,Ue,ke,ge,we):S.copyTexSubImage2D(gt,oe,Ze,lt,Ue,ke,ge,we);$.bindFramebuffer(S.READ_FRAMEBUFFER,null),$.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else jt?w.isDataTexture||w.isData3DTexture?S.texSubImage3D(gt,oe,Ze,lt,_t,ge,we,xe,dt,De,pt.data):N.isCompressedArrayTexture?S.compressedTexSubImage3D(gt,oe,Ze,lt,_t,ge,we,xe,dt,pt.data):S.texSubImage3D(gt,oe,Ze,lt,_t,ge,we,xe,dt,De,pt):w.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,oe,Ze,lt,ge,we,dt,De,pt.data):w.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,oe,Ze,lt,pt.width,pt.height,dt,pt.data):S.texSubImage2D(S.TEXTURE_2D,oe,Ze,lt,ge,we,dt,De,pt);S.pixelStorei(S.UNPACK_ROW_LENGTH,tt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Gt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,oi),S.pixelStorei(S.UNPACK_SKIP_ROWS,Wt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ki),oe===0&&N.generateMipmaps&&S.generateMipmap(gt),$.unbindTexture()},this.initRenderTarget=function(w){ne.get(w).__webglFramebuffer===void 0&&de.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?de.setTextureCube(w,0):w.isData3DTexture?de.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?de.setTexture2DArray(w,0):de.setTexture2D(w,0),$.unbindTexture()},this.resetState=function(){y=0,P=0,L=null,$.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class bm{constructor(){this.enabled=!0,this.context=null,this.master=null,this.noiseBuffer=null,this.volume=1}init(){if(this.context){this.context.state==="suspended"&&this.context.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.context=new e,this.master=this.context.createGain(),this.master.gain.value=.28*this.volume,this.master.connect(this.context.destination);const t=this.context.sampleRate;this.noiseBuffer=this.context.createBuffer(1,t,this.context.sampleRate);const n=this.noiseBuffer.getChannelData(0);for(let s=0;s<t;s++)n[s]=Math.random()*2-1}toggle(){return this.enabled=!this.enabled,this.enabled&&this.init(),this.enabled}setVolume(e){const t=Number(e);this.volume=Number.isFinite(t)?Math.min(1,Math.max(0,t/100)):1,this.master&&(this.master.gain.value=.28*this.volume)}tone(e,t,n=.15,s="sine",r=e,a=0){if(!this.enabled||(this.init(),!this.context))return;const o=this.context.currentTime+a,c=this.context.createOscillator(),l=this.context.createGain();c.type=s,c.frequency.setValueAtTime(e,o),c.frequency.exponentialRampToValueAtTime(Math.max(20,r),o+t),l.gain.setValueAtTime(n,o),l.gain.exponentialRampToValueAtTime(1e-4,o+t),c.connect(l),l.connect(this.master),c.start(o),c.stop(o+t)}noise(e,t=.15,n=1200,s=0){if(!this.enabled||(this.init(),!this.context))return;const r=this.context.currentTime+s,a=this.context.createBufferSource(),o=this.context.createBiquadFilter(),c=this.context.createGain();a.buffer=this.noiseBuffer,o.type="lowpass",o.frequency.value=n,c.gain.setValueAtTime(t,r),c.gain.exponentialRampToValueAtTime(1e-4,r+e),a.connect(o),o.connect(c),c.connect(this.master),a.start(r),a.stop(r+e)}shot(e){e==="shotgun"?(this.noise(.22,.42,950),this.tone(105,.18,.25,"sawtooth",42)):e==="rail"?(this.tone(1250,.28,.18,"sawtooth",85),this.tone(90,.35,.22,"sine",35),this.noise(.16,.2,3e3)):e==="arc"?(this.tone(920,.12,.13,"square",230),this.tone(1560,.09,.08,"sine",440),this.noise(.09,.12,4200)):e==="rocket"?(this.noise(.2,.32,1300),this.tone(150,.32,.2,"sawtooth",55),this.tone(420,.12,.1,"sine",180,.05)):(this.noise(.075,.18,1900),this.tone(190,.07,.12,"square",70))}hit(){this.tone(1250,.035,.055,"square",800)}kill(){this.tone(320,.1,.08,"sine",680),this.tone(740,.12,.06,"sine",980,.05)}enemyShot(){this.tone(260,.14,.07,"sawtooth",90)}damage(){this.noise(.16,.2,450),this.tone(70,.2,.12,"sawtooth",35)}pickup(){this.tone(540,.08,.09,"sine",860),this.tone(850,.13,.07,"sine",1200,.07)}reload(){this.noise(.035,.08,2300),this.tone(430,.04,.04,"square",330,.12)}empty(){this.tone(180,.035,.05,"square",150)}ui(){this.tone(620,.04,.035,"sine",760)}dash(){this.noise(.2,.13,1400),this.tone(160,.2,.12,"sine",640)}pulse(){this.tone(85,.65,.22,"sine",30),this.tone(340,.35,.12,"sawtooth",70)}explosion(){this.noise(.48,.4,600),this.tone(90,.4,.2,"sine",25)}wave(){[220,330,440].forEach((e,t)=>this.tone(e,.22,.07,"sine",e*1.02,t*.1))}upgrade(){[380,570,760].forEach((e,t)=>this.tone(e,.25,.08,"triangle",e*1.1,t*.08))}gameOver(){this.tone(210,.8,.15,"sawtooth",45)}victory(){[262,330,392,523].forEach((e,t)=>this.tone(e,.5,.09,"triangle",e,t*.13))}overdrive(){[330,440,660,880].forEach((e,t)=>this.tone(e,.45,.1,"sawtooth",e*1.35,t*.06)),this.tone(70,.6,.18,"sine",40)}achievement(){[660,880,1320].forEach((e,t)=>this.tone(e,.15,.07,"triangle",e,t*.07))}warning(){this.tone(780,.12,.09,"square",520),this.tone(780,.12,.09,"square",520,.2)}break(){this.tone(140,.5,.22,"sawtooth",60),this.noise(.3,.32,900),this.tone(1200,.18,.12,"square",320)}perfectDodge(){this.tone(900,.18,.12,"sine",1700),this.tone(1500,.12,.08,"triangle",2400,.05),this.noise(.12,.1,5e3)}glitch(){this.tone(60,.12,.16,"square",140),this.noise(.1,.14,2600)}staggerHit(){this.tone(520,.05,.05,"square",360)}}const U=(i,e,t)=>new un(i,e,t),Be=(i,e,t,n=10)=>new Sn(i,e,t,n),Nt=(i,e=10,t=8)=>new Di(i,e,t),Dn=(i,e,t=8)=>new hs(i,e,t),rt=(i,e,t=6,n=20)=>new Nn(i,e,t,n),Si=(i,e=0)=>new zn(i,e),Bs=(i,e=0)=>new sr(i,e),Tm=(i=[0,0,0],e=[0,0,0],t=[1,1,1])=>new ut().compose(new A(...i),new Fi().setFromEuler(new on(...e)),new A(...t));function Am(i,e){const t=i.index?i.toNonIndexed():i.clone();e&&t.applyMatrix4(e);for(const n of Object.keys(t.attributes))n!=="position"&&n!=="normal"&&t.deleteAttribute(n);return t.attributes.normal||t.computeVertexNormals(),t}function Sl(i){let e=0;for(const a of i)e+=a.attributes.position.count;const t=new Float32Array(e*3),n=new Float32Array(e*3);let s=0;for(const a of i)t.set(a.attributes.position.array,s*3),n.set(a.attributes.normal.array,s*3),s+=a.attributes.position.count,a.dispose();const r=new yt;return r.setAttribute("position",new $t(t,3)),r.setAttribute("normal",new $t(n,3)),r.computeBoundingSphere(),r}class Qi{constructor(){this.map=new Map}add(e,t,n,s,r){const a=Am(t,Tm(n,s,r));return this.map.has(e)||this.map.set(e,[]),this.map.get(e).push(a),t.dispose(),this}build(e,t={}){const n=new at;for(const[s,r]of this.map){const a=new Y(Sl(r),e[s]);a.castShadow=!!t.castShadow,a.receiveShadow=!!t.receiveShadow,n.add(a)}return n}meshes(e,t={}){const n=[];for(const[s,r]of this.map){const a=new Y(Sl(r),e[s]);a.castShadow=!!t.castShadow,n.push({key:s,mesh:a})}return n}}const xc=[{metal:3096894,dark:857624,accent:7246217,glow:5568466},{metal:3944744,dark:1314829,accent:10123348,glow:16753485},{metal:2834254,dark:594198,accent:8103106,glow:6930431},{metal:2374979,dark:528917,accent:7780800,glow:8251647},{metal:3812384,dark:1314056,accent:12159570,glow:16742973},{metal:2373700,dark:529176,accent:8372182,glow:9431295},{metal:3160636,dark:857110,accent:9086624,glow:16766044},{metal:3812412,dark:1314068,accent:11040936,glow:16743122},{metal:2763312,dark:789520,accent:10132136,glow:15132415},{metal:2966584,dark:792080,accent:8367750,glow:8257436},{metal:4471842,dark:1446666,accent:11575378,glow:16769357},{metal:4205355,dark:1444876,accent:11563120,glow:16739162},{metal:2503744,dark:528922,accent:7247032,glow:10475775},{metal:2895690,dark:658458,accent:9081032,glow:11577599},{metal:4863008,dark:1708040,accent:13673564,glow:16761421}];function Rm(i){const e=xc[i],t=n=>new Ct({color:n,emissive:n,emissiveIntensity:.03,metalness:.72,roughness:.42});return{metal:t(e.metal),dark:t(e.dark),accent:t(e.accent),glow:new je({color:e.glow,toneMapped:!1}),glass:new je({color:e.glow,transparent:!0,opacity:.28,toneMapped:!1,side:Ft})}}function Cm(i,e){const t=i.add.bind(i);t("dark",U(.115,.28,.14),[0,-.205,.075],[-.2,0,0]),t("metal",U(.125,.055,.16),[0,-.325,.09]),t("accent",U(.018,.075,.02),[0,-.12,-.045]),t("dark",U(.012,.075,.012),[-.045,-.115,-.045]),t("dark",U(.012,.075,.012),[.045,-.115,-.045]),t("dark",U(.1,.012,.012),[0,-.15,-.045]),t("glow",U(.008,.038,.008),[0,-.117,-.049]),t("metal",U(.075,.075,.34),[0,-.045,.28]),t("metal",U(.075,.075,.34),[0,-.205,.28]),t("metal",U(.075,.18,.06),[0,-.125,.44]),t("dark",U(.13,.19,.055),[0,-.12,.47]),t("accent",U(.11,.02,.2),[0,-.02,.3]);for(const n of[-1,1]){t("accent",U(.012,.115,.24),[n*.098,.006,.03]);for(let s=0;s<3;s++)t("dark",Be(.012,.012,.02,6),[n*.106,.03,-.04+s*.075],[0,0,Math.PI/2])}if(t("glow",U(.052,.012,.012),[0,.078,-.02]),e!==1){for(let n=0;n<9;n++)t("dark",U(.075,.017,.026),[0,.115,-.44+n*.062]);t("metal",U(.055,.02,.58),[0,.1,-.2])}}function Pm(i,e){const t=new at;let n=null,s=null;if(i==="reddot"){const r=new Y(U(.12,.05,.18),e.dark),a=new Y(U(.085,.085,.022),e.metal),o=new Y(U(.07,.07,.006),new je({color:3135743,transparent:!0,opacity:.18,depthWrite:!1,side:Ft,toneMapped:!1}));o.position.z=-.012,n=new Y(Nt(.012,8,6),new je({color:16724816,toneMapped:!1})),n.position.set(0,0,-.02),t.add(r,a,o,n),t.position.set(0,.15,-.14)}else{const r=i==="sniper"?.5:i==="scope5"?.34:.26,a=i==="sniper"?.06:.05,o=new Y(Be(a,a,r,14),e.dark);o.rotation.x=Math.PI/2;const c=new Y(Be(a*.92,a*.92,.04,14),new je({color:529432,toneMapped:!1}));c.rotation.x=Math.PI/2,c.position.z=-r/2;const l=new Y(Be(a*.92,a*.92,.04,14),new je({color:3135743,transparent:!0,opacity:.22,depthWrite:!1,toneMapped:!1}));l.rotation.x=Math.PI/2,l.position.z=r/2;const d=new Y(rt(a,.01,5,16),e.accent);d.position.z=-r/2;const f=new Y(U(.003,a*1.35,.002),new je({color:16731501,toneMapped:!1})),h=new Y(U(a*1.35,.003,.002),new je({color:16731501,toneMapped:!1}));if(f.position.z=-r/2+.012,h.position.z=-r/2+.012,s=new at,s.add(f,h),t.add(o,c,l,d,s),i==="sniper"){const u=new Y(rt(a*1.06,.014,6,18),e.accent);u.rotation.x=Math.PI/2,t.add(u)}t.position.set(0,.17,-.14)}return{group:t,redDot:n,reticle:s}}const Lm=["scope3","reddot","sniper","reddot","reddot","scope3","reddot","reddot","reddot","scope3","reddot","scope5","sniper","sniper","sniper"];function Im(i){const t=[0,1,2,3,4,5,6,6,6,9,9,9,12,12,12][i]??0,n=Rm(i),s=new Qi,r=(y,P,L,M,T)=>s.add(y,P,L,M,T);if(t===0){r("metal",U(.19,.185,.62),[0,0,-.1]),r("metal",U(.155,.055,.54),[0,.113,-.1]),r("dark",U(.205,.045,.2),[0,.145,-.02]),r("dark",U(.15,.09,.15),[.11,.01,-.16]),r("accent",U(.16,.055,.34),[0,.02,-.46]);for(let y=0;y<6;y++)r("dark",U(.165,.013,.022),[0,.052,-.6+y*.052]),r("glow",U(.012,.055,.3),[.098,.012,-.46]);r("glow",U(.014,.02,.34),[-.098,.045,-.44]),r("metal",Be(.036,.036,.44,10),[0,.012,-.84],[Math.PI/2,0,0]),r("dark",Be(.055,.045,.16,10),[0,.012,-1.08],[Math.PI/2,0,0]);for(let y=0;y<4;y++)r("dark",U(.014,.07,.09),[Math.cos(y/4*Math.PI*2)*.05,.012+Math.sin(y/4*Math.PI*2)*.05,-1.1]);r("accent",U(.03,.075,.03),[0,.15,-.72]),r("glow",U(.008,.025,.008),[0,.19,-.72]),r("dark",U(.095,.03,.15),[0,.15,-.06]),r("metal",U(.085,.085,.022),[0,.2,-.12]),r("metal",U(.085,.085,.022),[0,.2,.01]),r("metal",U(.012,.09,.14),[-.044,.2,-.055]),r("metal",U(.012,.09,.14),[.044,.2,-.055]),r("glass",U(.07,.07,.006),[0,.2,-.055]),r("glow",U(.035,.004,.004),[0,.2,-.058]),r("glow",U(.004,.035,.004),[0,.2,-.058]),r("dark",Be(.032,.032,.12,8),[.12,-.045,-.42],[Math.PI/2,0,0]),r("glass",Be(.028,.028,.006,8),[.12,-.045,-.485],[Math.PI/2,0,0])}else if(t===1){r("metal",U(.23,.205,.66),[0,0,-.08]),r("accent",U(.24,.045,.4),[0,.12,-.16]),r("dark",U(.19,.075,.19),[.13,.02,-.1]);for(const y of[-1,1])r("dark",Be(.048,.048,.72,10),[y*.058,.025,-.73],[Math.PI/2,0,0]),r("accent",Be(.058,.058,.075,10),[y*.058,.025,-1.08],[Math.PI/2,0,0]),r("dark",Be(.04,.04,.012,10),[y*.058,.025,-1.121],[Math.PI/2,0,0]),r("glow",U(.012,.02,.42),[y*.12,.055,-.36]);r("metal",Be(.032,.032,.62,8),[0,-.085,-.65],[Math.PI/2,0,0]);for(let y=0;y<5;y++)r("glow",rt(.036,.008,4,10),[0,-.085,-.9+y*.11],[0,Math.PI/2,0]);r("dark",U(.26,.09,.28),[0,-.02,-.5]);for(let y=0;y<7;y++)r("dark",U(.265,.012,.018),[0,.035,-.62+y*.04]);r("metal",rt(.075,.014,6,18),[0,.16,-.86]),r("glow",U(.01,.03,.01),[0,.16,-.86]),r("dark",U(.1,.045,.16),[0,.13,.02]),r("accent",U(.036,.012,.2),[0,.14,-.3])}else if(t===2){r("metal",U(.18,.2,.9),[0,0,-.2]),r("accent",U(.19,.045,.8),[0,.12,-.22]),r("dark",U(.2,.11,.3),[0,-.09,.02]);for(const y of[-1,1]){r("glow",U(.032,.075,.82),[y*.105,.02,-.44]),r("metal",U(.055,.09,.86),[y*.135,.02,-.44]);for(let P=0;P<5;P++)r("accent",rt(.082,.014,5,12),[y*.105,.02,-.78+P*.17],[0,Math.PI/2,0]);r("dark",U(.075,.085,.2),[y*.13,-.09,.05]),r("glow",U(.045,.012,.16),[y*.13,-.04,.05])}r("dark",Be(.035,.035,.72,10),[0,.015,-.98],[Math.PI/2,0,0]),r("accent",Be(.062,.048,.19,10),[0,.015,-1.32],[Math.PI/2,0,0]),r("glow",Be(.03,.03,.012,10),[0,.015,-1.42],[Math.PI/2,0,0]);for(let y=0;y<6;y++)r("dark",U(.2,.014,.025),[0,.155,-.62+y*.09])}else if(t===3){r("metal",U(.205,.2,.62),[0,0,-.12]),r("accent",U(.215,.045,.5),[0,.12,-.14]),r("dark",U(.16,.11,.24),[0,-.075,.02]);for(const y of[-1,1]){r("metal",U(.075,.13,.5),[y*.155,.03,-.34]),r("glow",U(.012,.075,.42),[y*.196,.03,-.34]);for(let P=0;P<4;P++)r("accent",U(.09,.02,.03),[y*.155,.1,-.52+P*.11])}r("dark",Be(.058,.058,.5,10),[0,.015,-.72],[Math.PI/2,0,0]);for(let y=0;y<5;y++)r("glow",rt(.085-y*.005,.016,6,16),[0,.015,-.56-y*.1],[0,Math.PI/2,0]),r("accent",rt(.098,.012,5,12),[0,.015,-.56-y*.1],[0,Math.PI/2,0]);r("dark",Be(.075,.06,.14,10),[0,.015,-1.13],[Math.PI/2,0,0]),r("glass",Nt(.062,12,10),[0,.015,-1.2]),r("glow",rt(.105,.012,6,20),[0,.015,-1.21]),r("metal",rt(.085,.018,6,18),[0,.175,-.18]),r("glow",rt(.065,.006,4,16),[0,.175,-.18]),r("metal",U(.05,.075,.05),[0,.115,-.18]),r("glow",U(.014,.014,.014),[0,.175,-.18])}else if(t===4){r("metal",U(.24,.26,.52),[0,0,-.1]),r("dark",U(.28,.32,.34),[0,-.04,.06]),r("accent",U(.22,.05,.5),[0,.13,-.12]);for(let y=0;y<2;y++)for(let P=0;P<3;P++){const L=(P-1)*.072,M=y?-.062:.062;r("dark",Be(.034,.034,.66,8),[L,M,-.64],[Math.PI/2,0,0]),r("accent",rt(.036,.009,4,12),[L,M,-.34],[Math.PI/2,0,0]),r("glow",Be(.024,.024,.02,8),[L,M,-.97],[Math.PI/2,0,0])}r("dark",U(.13,.13,.24),[0,.19,-.04]),r("glass",Nt(.055,10,8),[0,.19,-.2]),r("glow",rt(.058,.008,4,14),[0,.19,-.21]),r("dark",U(.1,.22,.12),[0,-.24,.08]),r("accent",U(.15,.02,.2),[0,-.12,-.02]);for(let y=0;y<3;y++)r("dark",U(.012,.18,.04),[-.12+y*.12,-.02,-.28])}else if(t===6){r("metal",U(.135,.14,.36),[0,.015,-.1]),r("dark",U(.12,.05,.3),[0,.1,-.12]),r("accent",U(.1,.045,.26),[0,.1,-.12]),r("dark",Be(.032,.032,.12,10),[0,0,-.32],[Math.PI/2,0,0]),r("glow",Be(.024,.024,.02,10),[0,0,-.38],[Math.PI/2,0,0]),r("metal",U(.105,.24,.12),[0,-.18,.06],[-.22,0,0]),r("dark",U(.11,.03,.13),[0,-.3,.075]);for(let y=0;y<4;y++)r("dark",U(.075,.016,.022),[0,.1,-.22+y*.055]);r("accent",U(.02,.06,.02),[.075,.06,.04]),r("glow",U(.03,.012,.012),[0,.075,-.2])}else if(t===9){r("metal",U(.2,.19,.66),[0,0,-.12]),r("accent",U(.17,.05,.5),[0,.115,-.14]),r("dark",U(.17,.11,.42),[0,-.02,-.52]);for(let y=0;y<6;y++)r("glow",U(.012,.045,.02),[.088,-.01,-.72+y*.075]);r("dark",Be(.042,.042,.52,10),[0,.015,-.92],[Math.PI/2,0,0]),r("glow",rt(.05,.01,4,14),[0,.015,-1.16],[Math.PI/2,0,0]),r("dark",U(.09,.2,.11),[0,-.2,-.4]),r("accent",U(.14,.02,.24),[0,-.1,-.42]),r("metal",U(.09,.19,.12),[.14,-.14,.02])}else if(t===12){r("metal",U(.17,.17,.7),[0,0,-.08]),r("accent",U(.19,.04,.6),[0,.1,-.12]),r("dark",Be(.036,.042,1.1,12),[0,.01,-.95],[Math.PI/2,0,0]),r("glow",Be(.062,.062,.1,12),[0,.01,-1.48],[Math.PI/2,0,0]);for(let y=0;y<3;y++)r("dark",U(.11,.012,.03),[0,.01,-1.28+y*.1]);for(const y of[-1,1])r("dark",U(.02,.36,.02),[y*.11,-.24,-.86],[0,0,y*.25])}else{r("metal",U(.18,.2,.5),[0,0,-.12]),r("accent",U(.2,.045,.42),[0,.11,-.1]),r("dark",U(.155,.1,.22),[0,-.07,.02]),r("dark",Be(.045,.05,.78,10),[0,.015,-.74],[Math.PI/2,0,0]),r("glass",new zn(.085,0),[0,.015,-1.16]),r("glow",new zn(.05,0),[0,.015,-1.16]),r("glow",rt(.075,.01,4,16),[0,.015,-1.12],[Math.PI/2,0,0]),r("dark",Be(.07,.07,.34,12),[.16,-.02,0],[0,0,Math.PI/2]),r("accent",Be(.05,.05,.12,12),[.16,-.02,-.2],[0,0,Math.PI/2]),r("glow",Be(.025,.025,.18,10),[.16,-.02,.06],[0,0,Math.PI/2]);for(let y=0;y<4;y++)r("metal",U(.01,.16,.05),[-.1+y*.066,0,-.34]);r("metal",U(.05,.07,.18),[0,.14,-.18]),r("glow",U(.014,.014,.014),[0,.14,-.18])}Cm(s,t);const a=new at,o=s.build(n);a.add(o);const c=new at,l=new Y(U(.105,.24,.115),n.dark),d=new Y(U(.115,.03,.12),n.accent);d.position.y=.12;const f=new Y(U(.012,.14,.012),n.glow);f.position.set(.056,0,.06),c.add(l,d,f),c.position.set(0,-.19,t===1?-.16:-.03),(t===1||t===6)&&(c.visible=!1),a.add(c);const h=new Y(U(.055,.04,.085),n.accent);h.position.set(.105,.035,-.16),a.add(h);const u=new at,g=new Y(Dn(.085,.26,7),new je({color:xc[i].glow,transparent:!0,opacity:.9,toneMapped:!1,blending:sn,depthWrite:!1}));g.rotation.x=-Math.PI/2;const v=new Y(rt(.1,.018,5,14),new je({color:16777215,transparent:!0,opacity:.8,toneMapped:!1,blending:sn,depthWrite:!1}));u.add(g,v);const m=t===12?-1.62:t===9?-1.24:t===6?-.62:t===5?-1.14:t===4?-1.02:t===2?-1.44:t===1?-1.14:t===3?-1.22:-1.12;u.position.set(0,.015,m-.1),u.visible=!1,a.add(u);const p=Lm[i]||"reddot",b=Pm(p,n),E=b.group,x=b.redDot;a.add(E);const R=new at;if(t===3){for(let y=0;y<3;y++){const P=new Y(rt(.12+y*.025,.01,5,18),n.glow);P.position.set(0,.015,-.55-y*.16),P.rotation.y=y*.5,R.add(P)}a.add(R)}return a.traverse(y=>{y.frustumCulled=!1,y.renderOrder=10}),{group:a,magazine:c,bolt:h,flash:u,coils:R,muzzleZ:m,materials:n,optics:E,redDot:x,scopeType:p,reticle:b.reticle}}function Dm(i,e){const t=new Qi,n=(h,u,g,v,m)=>t.add(h,u,g,v,m),s={legs:[],rotors:[],shards:[],rings:[],turrets:[],core:null,wings:[]},r=[],a=[];let o=2.2,c=0;const l=(h,u,g,v)=>{const m=new Y(h,u);return m.position.set(...g||[0,0,0]),m},d=(h,u,g,v)=>{const m=l(h,e.glow,u);return m.userData.critical=!0,r.push(m),a.push(m),m};if(i==="runner"){o=2.25,n("body",U(.76,.86,.5),[0,1.18,0]),n("accent",U(.62,.34,.535),[0,1.42,-.02]),n("dark",U(.5,.08,.55),[0,1.24,-.01]),n("dark",U(.44,.3,.42),[0,.78,0]),n("accent",U(.16,.16,.1),[0,1.06,-.28]);for(let h=0;h<3;h++)n("glow",U(.035,.13,.02),[-.09+h*.09,.82,-.23]);n("dark",Be(.11,.13,.18,8),[0,1.7,0]),n("body",Si(.34,0),[0,1.92,0]),n("accent",U(.36,.11,.14),[0,1.88,-.28]),n("dark",U(.28,.09,.1),[0,2.03,-.24]),n("accent",Dn(.07,.26,5),[0,2.18,.06]);for(const h of[-1,1]){n("accent",U(.3,.24,.42),[h*.53,1.52,0]),n("dark",U(.19,.6,.21),[h*.57,1.12,0]),n("body",U(.14,.36,.16),[h*.57,.78,-.05]);for(let u=0;u<3;u++)n("glow",U(.04,.03,.1),[h*.57,1.32-u*.1,-.16]);n("accent",U(.22,.1,.3),[h*.26,.66,0]),n("dark",U(.1,.1,.1),[h*.26,.48,0])}for(let h=0;h<4;h++)n("accent",Dn(.075,.3,5),[0,1.65-h*.22,.28],[.5,0,0]);n("glow",U(.26,.02,.03),[0,1.55,.27]),d(Nt(.16,10,8),[0,1.92,-.3]);for(const h of[-1,1]){const u=new at;u.position.set(h*.25,.56,0);const g=new Y(U(.2,.5,.24),e.body);g.position.y=-.22;const v=new Y(U(.16,.42,.2),e.dark);v.position.y=-.58;const m=new Y(U(.24,.12,.38),e.accent);m.position.set(0,-.8,-.07);const p=new Y(U(.19,.1,.25),e.glow);p.position.y=-.45,u.add(g,v,m,p),s.legs.push(u),a.push(u)}s.core=d(Nt(.12,10,8),[0,1.06,-.32])}else if(i==="drone"){o=2.6,c=.35,n("body",Nt(.56,14,10),[0,1.85,0]);for(let h=0;h<6;h++){const u=h/6*Math.PI*2;n("accent",U(.3,.28,.08),[Math.cos(u)*.52,1.85+Math.sin(u)*.35,-.3],[0,0,u])}n("dark",rt(.6,.06,6,24),[0,1.85,0],[Math.PI/2,0,0]),n("dark",rt(.62,.05,6,24),[0,1.85,0],[0,0,0]),n("glow",U(.5,.035,.05),[0,2.3,-.3]);for(const h of[-1,1])n("body",U(.72,.1,.3),[h*.82,1.85,0]),n("accent",U(.6,.045,.12),[h*.86,1.9,-.1]),n("dark",Be(.055,.07,.5,8),[h*.9,1.62,-.28],[Math.PI/2,0,0]),n("glow",Be(.035,.035,.02,8),[h*.9,1.62,-.54],[Math.PI/2,0,0]),n("dark",Be(.09,.09,.22,8),[h*.45,1.35,.1]),n("glow",Be(.06,.06,.02,8),[h*.45,1.23,.1]);n("dark",U(.3,.14,.22),[0,1.36,-.4]),d(Si(.31,0),[0,1.85,-.5]);for(const h of[-1,1]){const u=new at;u.position.set(h*1.18,1.88,0);const g=new Y(rt(.34,.035,6,20),e.accent);g.rotation.x=Math.PI/2;const v=new Y(U(.6,.025,.09),e.glow),m=new Y(U(.09,.025,.6),e.glow);u.add(g,v,m),s.rotors.push(u),a.push(u)}}else if(i==="tank"){o=2.9,n("body",U(1.5,1.4,1.1),[0,1.28,0]),n("accent",U(1.24,.5,1.14),[0,1.72,-.02]),n("accent",U(1.1,.3,1.16),[0,.78,-.02]),n("dark",U(1.3,.09,1.14),[0,1.43,-.02]);for(let h=0;h<5;h++)n("glow",U(.09,.1,.03),[-.42+h*.21,1.02,-.58]);n("dark",U(.78,.52,.66),[0,2.18,0]),n("accent",U(.86,.14,.7),[0,2.44,0]),n("dark",U(.6,.12,.1),[0,2.2,-.38]);for(const h of[-1,1]){n("accent",U(.56,.55,.86),[h*1.02,1.56,0]),n("body",U(.44,.9,.7),[h*1.02,.95,0]),n("dark",Be(.115,.15,1.2,8),[h*1.02,1.5,-.72],[Math.PI/2,0,0]),n("glow",Be(.09,.09,.03,8),[h*1.02,1.5,-1.33],[Math.PI/2,0,0]),n("accent",U(.2,.42,.2),[h*.55,.32,0]),n("dark",U(.42,.18,.62),[h*.55,.12,-.08]),n("dark",U(.3,.55,.3),[h*.62,2,.42]);for(let u=0;u<3;u++)n("glow",U(.24,.03,.02),[h*.62,1.82+u*.14,.58]);n("body",U(.28,.28,.9),[h*.82,.7,0])}n("warning",U(.1,.06,.06),[0,2.5,-.36]),d(U(.5,.1,.08),[0,2.2,-.42]),s.core=d(Bs(.2,0),[0,1.28,-.6])}else if(i==="phantom"){o=2.25,c=.25,n("body",Si(.52,0),[0,1.4,0]),n("accent",Si(.36,0),[0,1.4,.06],[0,Math.PI/4,0]),n("dark",U(.6,.06,.6),[0,1.4,0],[Math.PI/4,0,0]);for(const u of[-1,1])n("accent",U(.1,1.05,.3),[u*.52,1.28,0],[0,0,u*.36]),n("glow",U(.025,.72,.05),[u*.58,1.28,-.17],[0,0,u*.36]),n("dark",Dn(.12,.6,5),[u*.3,.55,0],[Math.PI,0,u*.2]);n("dark",Dn(.22,.95,6),[0,.52,0],[Math.PI,0,0]),n("glow",rt(.46,.02,5,22),[0,1.4,0]),d(Si(.23,0),[0,1.4,-.45]);for(let u=0;u<6;u++){const g=new Y(Si(.12+u%2*.05,0),u%2?e.glow:e.accent),v=u/6*Math.PI*2;g.position.set(Math.cos(v)*.85,1.4+Math.sin(v*2)*.28,Math.sin(v)*.55),g.userData.angle=v,g.userData.baseY=g.position.y,s.shards.push(g),a.push(g)}const h=new Y(rt(.72,.022,5,26),e.glow);h.position.y=1.4,h.rotation.x=Math.PI/2.6,s.rings.push(h),a.push(h)}else if(i==="bomber"){o=2.15,c=.3,n("body",Nt(.54,14,10),[0,1.3,0]);for(let h=0;h<8;h++){const u=h/8*Math.PI*2;n("accent",U(.26,.24,.07),[Math.cos(u)*.46,1.3,Math.sin(u)*.46],[0,-u,0])}n("dark",rt(.62,.075,6,22),[0,1.3,0],[Math.PI/2,0,0]),n("warning",rt(.64,.02,5,22),[0,1.56,0],[Math.PI/2,0,0]);for(let h=0;h<4;h++){const u=h/4*Math.PI*2;n("dark",Be(.08,.08,.28,7),[Math.cos(u)*.36,.86,Math.sin(u)*.36]),n("glow",Be(.055,.055,.02,7),[Math.cos(u)*.36,.7,Math.sin(u)*.36]),n("warning",U(.07,.05,.03),[Math.cos(u+.5)*.52,1.52,Math.sin(u+.5)*.52])}n("dark",Dn(.22,.5,6),[0,.62,0],[Math.PI,0,0]),d(Bs(.3,0),[0,1.3,-.5]);for(let h=0;h<4;h++){const u=new at,g=h/4*Math.PI*2;u.position.set(Math.cos(g)*.42,1.3,Math.sin(g)*.42),u.rotation.y=-g;const v=new Y(U(.34,.06,.2),e.accent);v.position.x=.2;const m=new Y(U(.1,.02,.14),e.glow);m.position.x=.4,u.add(v,m),s.wings.push(u),a.push(u)}}else if(i==="medic"){o=2.4,c=1.25,n("body",Nt(.5,14,10),[0,1.3,0]),n("dark",U(.9,.12,.9),[0,.92,0]),n("accent",U(.66,.05,.66),[0,.86,0]),n("dark",rt(.56,.05,6,22),[0,1,0],[Math.PI/2,0,0]),n("accent",U(.52,.17,.06),[0,1.3,-.47]),n("accent",U(.17,.52,.06),[0,1.3,-.47]),n("glow",U(.14,.14,.1),[0,1.3,-.51]);for(const u of[-1,1])n("body",U(.14,.5,.14),[u*.52,1.08,0]);n("accent",U(.2,.04,.2),[0,1.62,0]),d(Nt(.17,10,8),[0,1.3,-.5]);const h=new Y(rt(.72,.03,5,26),e.glow);h.position.y=1.3,h.rotation.x=Math.PI/2,s.rings.push(h),a.push(h),s.core=d(Nt(.12,10,8),[0,1.62,0])}else if(i==="turret"){o=2.3,c=0,n("body",Be(.86,1.02,.7,14),[0,.35,0]),n("dark",Be(.96,.96,.16,14),[0,.72,0]),n("accent",rt(.9,.05,6,30),[0,.82,0],[Math.PI/2,0,0]);for(let b=0;b<12;b++){const E=b/12*Math.PI*2;n("dark",U(.26,.02,.06),[Math.cos(E)*.97,.74,Math.sin(E)*.97],[0,-E,0])}for(const b of[-1,1])n("dark",U(.18,.55,.18),[b*.66,.2,0]);const h=new at;h.position.y=1.18;const u=new Y(Nt(.55,16,12),e.dark),g=new Y(U(.42,.2,.12),e.warning);g.position.set(0,.02,-.5);const v=new Y(U(.2,.2,.9),e.body);v.position.set(0,.02,-.62);const m=new Y(U(.13,.13,.06),e.glow);m.position.set(0,.02,-1.08);const p=new Y(rt(.5,.03,5,22),e.glow);p.position.y=.02,p.rotation.x=Math.PI/2,h.add(u,g,v,m,p),a.push(h),n("accent",Be(.13,.13,.42,8),[0,1.72,0]),d(Bs(.16,0),[0,1.18,-.5]),n("warning",Nt(.1,8,6),[0,1.98,0])}else if(i==="falcon"){o=1.9,c=1.35,n("body",new hs(.32,1.5,10),[0,1.2,0],[Math.PI/2,0,0]),n("dark",U(.34,.3,.7),[0,1.2,.1]),n("accent",U(.3,.06,.5),[0,1.32,.05]),d(Nt(.13,10,8),[0,1.2,-.4]),n("glow",new zn(.1,0),[0,1.2,-.55]),n("warning",U(.16,.12,.06),[0,1.26,.62]);for(const h of[-1,1]){const u=new at;u.position.set(h*.22,1.18,-.05);const g=new Y(U(.9,.05,.34),e.accent);g.position.set(h*.45,0,-.1),g.rotation.y=h*.5;const v=new Y(U(.16,.03,.2),e.glow);v.position.set(h*.92,0,-.22),v.rotation.y=h*.5,u.add(g,v),s.wings.push(u),a.push(u)}n("dark",U(.04,.4,.28),[0,1.42,-.5]),n("glow",U(.02,.22,.16),[0,1.4,-.52])}else{o=5.6,c=.4,n("body",Nt(1.68,20,14),[0,3.2,0]);for(let h=0;h<10;h++){const u=h/10*Math.PI*2;n("accent",U(.62,.66,.16),[Math.cos(u)*1.5,3.2+Math.sin(u)*.9,-.55],[0,0,u])}n("dark",rt(1.74,.12,8,40),[0,3.2,0]),n("dark",rt(1.5,.09,8,40),[0,3.2,0],[0,Math.PI/2,0]),n("glow",U(2.4,.06,.08),[0,4.1,-.9]),n("accent",Dn(.5,1.1,6),[0,5.05,0]),n("warning",Dn(.24,.6,6),[0,5.5,0]);for(const h of[-1,1]){n("body",U(.85,2.9,.85),[h*2.15,2.75,0]),n("accent",U(.95,.5,.95),[h*2.15,4.1,0]),n("dark",Be(.2,.27,1.7,10),[h*2.15,2.9,-1.05],[Math.PI/2,0,0]),n("warning",Be(.14,.14,.03,10),[h*2.15,2.9,-1.92],[Math.PI/2,0,0]),n("body",U(.5,.9,1.5),[h*1.1,1.35,0]),n("accent",U(.7,.25,1.7),[h*1.1,.85,0]);for(let u=0;u<3;u++)n("glow",U(.06,.5,.06),[h*2.55,3.4-u*.5,-.4]);for(let u=0;u<3;u++)n("dark",Be(.16,.2,.5,8),[h*(1.2+u*.65),1,.7]),n("glow",Be(.12,.12,.02,8),[h*(1.2+u*.65),.74,.7])}n("dark",U(1.2,.5,.8),[0,1.4,.9]),d(Bs(.88,1),[0,3.2,-1.35]),s.core=d(Nt(.35,12,10),[0,3.2,-1.62]);for(let h=0;h<3;h++){const u=new Y(rt(2.02+h*.27,.1,8,44),h===1?e.glow:e.accent);u.position.y=3.2,u.rotation.x=Math.PI/2+h*.45,u.userData.spin=(h%2?-1:1)*(.4+h*.15),s.rings.push(u),a.push(u)}for(const h of[-1,1]){const u=new at;u.position.set(h*2.15,4.35,0);const g=new Y(Nt(.34,12,8),e.dark),v=new Y(U(.16,.16,.62),e.body);v.position.z=-.4;const m=new Y(U(.1,.1,.05),e.glow);m.position.z=-.73,u.add(g,v,m),s.turrets.push(u),a.push(u)}}const f=t.meshes(e,{castShadow:!1}).map(({mesh:h})=>h);return{staticMeshes:f,dynamic:s,weakpoints:r,extraMeshes:a,height:o,baseY:c,allMeshes:[...f,...a]}}function Um(i,e,t="#54f7d2"){const n=document.createElement("canvas");n.width=512,n.height=256;const s=n.getContext("2d");s.fillStyle="#050d10",s.fillRect(0,0,512,256),s.strokeStyle=t,s.lineWidth=5,s.strokeRect(14,14,484,228),s.globalAlpha=.12,s.fillStyle=t;for(let a=24;a<236;a+=12)s.fillRect(20,a,472,2);s.globalAlpha=1,s.textAlign="center",s.shadowColor=t,s.shadowBlur=26,s.fillStyle="#e9fffa",s.font='bold 68px "Barlow Condensed", sans-serif',s.fillText(i,256,122),s.shadowBlur=12,s.fillStyle=t,s.font='bold 30px "Share Tech Mono", monospace',s.fillText(e,256,180),s.shadowBlur=0,s.fillStyle=t,s.fillRect(60,206,392,3);const r=new nr(n);return r.colorSpace=Lt,r.anisotropy=4,r}function Nm(){const i=document.createElement("canvas");i.width=128,i.height=256;const e=i.getContext("2d");e.fillStyle="#070f13",e.fillRect(0,0,128,256);let t=999331;const n=()=>(t=t*16807%2147483647,(t-1)/2147483646);for(let r=6;r<250;r+=14)for(let a=6;a<122;a+=16){const o=n();o>.58?(e.fillStyle=o>.9?"#ffb35c":o>.78?"#b45cff":"#4ce0c4",e.globalAlpha=.35+n()*.55,e.fillRect(a,r,9,7)):(e.fillStyle="#12242a",e.globalAlpha=.8,e.fillRect(a,r,9,7))}e.globalAlpha=1;const s=new nr(i);return s.colorSpace=Lt,s.wrapS=s.wrapT=es,s}function Fm(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#0c181b",e.fillRect(0,0,256,256),e.strokeStyle="#1c3a37",e.lineWidth=3,e.strokeRect(6,6,244,244),e.strokeStyle="#142b2a",e.lineWidth=1;for(let n=1;n<4;n++)e.beginPath(),e.moveTo(n*64,8),e.lineTo(n*64,248),e.stroke(),e.beginPath(),e.moveTo(8,n*64),e.lineTo(248,n*64),e.stroke();e.fillStyle="#2a5b52";for(const[n,s]of[[16,16],[240,16],[16,240],[240,240]])e.beginPath(),e.arc(n,s,5,0,Math.PI*2),e.fill();e.globalAlpha=.08,e.fillStyle="#7fd8c4";for(let n=0;n<220;n++){const s=n*71%256,r=n*137%256;e.fillRect(s,r,2,2)}e.globalAlpha=1;const t=new nr(i);return t.colorSpace=Lt,t.wrapS=t.wrapT=es,t.repeat.set(18,18),t.anisotropy=8,t}function Om(){const i=document.createElement("canvas");i.width=16,i.height=256;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"rgba(4,10,14,0)"),t.addColorStop(.55,"rgba(15,64,64,0.32)"),t.addColorStop(.82,"rgba(40,150,135,0.42)"),t.addColorStop(1,"rgba(6,18,22,0.05)"),e.fillStyle=t,e.fillRect(0,0,16,256);const n=new nr(i);return n.colorSpace=Lt,n}const Je=(i,e,t)=>new un(i,e,t),Ut=(i,e,t,n=10)=>new Sn(i,e,t,n),In=(i,e,t=6,n=24)=>new Nn(i,e,t,n),Xr=(i,e,t=8)=>new hs(i,e,t),km=(i,e=10,t=8)=>new Di(i,e,t),qr=(i,e)=>i+Math.random()*(e-i);function Bm(i){const e=i.scene,t=new at;e.add(t),i.world=t;const n=!!i.lowPower;e.background=new Ye(198667),e.fog=new tr(463640,30,128),e.add(new Ud(9357774,264716,2.15));const s=new Od(11069154,2.25);s.position.set(-25,42,18),s.castShadow=!i.isTouch&&!n,s.shadow.mapSize.set(1024,1024),s.shadow.camera.left=-55,s.shadow.camera.right=55,s.shadow.camera.top=55,s.shadow.camera.bottom=-55,e.add(s);const r=new Ji(2424784,48,50,2);r.position.set(0,6,0),e.add(r);const a=new Ji(12666367,26,40,2);a.position.set(-30,6,-25),e.add(a);const o=new Ji(16754784,14,32,2);o.position.set(32,5,26),e.add(o);const c=new Ct({color:9414821,map:Fm(),roughness:.72,metalness:.42}),l=new Ct({color:1385257,roughness:.46,metalness:.82}),d=new Ct({color:528404,roughness:.38,metalness:.9}),f=new Ct({color:3560015,roughness:.34,metalness:.88,emissive:730144,emissiveIntensity:.3}),h=new je({color:5240272,toneMapped:!1}),u=new je({color:1867120,toneMapped:!1}),g=new je({color:10768870,toneMapped:!1}),v=new je({color:16753226,toneMapped:!1}),m={darkMetal:l,blackMetal:d,accentMetal:f,cyanGlow:h,dimGlow:u,purpleGlow:g,amberGlow:v},p=new Qi,b=(S,Z,J,ee,$)=>p.add(S,Z,J,ee,$),E=new Y(new En(150,150),c);E.rotation.x=-Math.PI/2,E.receiveShadow=!0,t.add(E),i.groundMesh=E;const x=new zd(150,75,3121292,1454125);x.material.transparent=!0,x.material.opacity=.17,x.position.y=.014,t.add(x);for(let S=0;S<4;S++){const Z=new Y(In(6+S*1.7,S%2?.035:.06,5,64),S%2?u:h);Z.rotation.x=-Math.PI/2,Z.position.y=.03,t.add(Z)}for(let S=0;S<24;S++){const Z=S/24*Math.PI*2;b("cyanGlow",Je(.06,.012,.5),[Math.cos(Z)*11.2,.035,Math.sin(Z)*11.2],[0,-Z,0])}for(let S=0;S<8;S++){const Z=S/8*Math.PI*2;b("amberGlow",Je(.22,.012,.9),[Math.cos(Z)*7.6,.035,Math.sin(Z)*7.6],[0,-Z,0])}for(let S=0;S<4;S++){const Z=Math.PI/4+S*Math.PI/2;for(let J=13;J<54;J+=4.2)b("dimGlow",Je(.1,.012,2.4),[Math.cos(Z)*J,.028,Math.sin(Z)*J],[0,-Z,0])}const R=new at,y=new Y(Ut(4.6,5.2,.65,16),l);y.position.y=.32,y.receiveShadow=!0,R.add(y);const P=new Y(Ut(4.15,4.15,.12,16),f);P.position.y=.7,R.add(P);const L=new Y(In(4.35,.09,6,48),h);L.rotation.x=-Math.PI/2,L.position.y=.77,R.add(L);for(let S=0;S<16;S++){const Z=S/16*Math.PI*2,J=new Y(Je(.42,.02,.9),S%2?v:d);J.position.set(Math.cos(Z)*4.6,.67,Math.sin(Z)*4.6),J.rotation.y=-Z,R.add(J)}const M=new Y(Ut(.65,.9,5.5,14),new Ct({color:1194548,emissive:1693101,emissiveIntensity:1.35,metalness:.7,roughness:.18}));M.position.y=3.1,R.add(M);const T=new Y(Ut(1.25,1.45,5.4,14),new je({color:2818016,transparent:!0,opacity:.11,side:Ft,depthWrite:!1,toneMapped:!1,blending:sn}));T.position.y=3.1,R.add(T);const I=new Y(Ut(.22,.55,28,10),new je({color:3538905,transparent:!0,opacity:.055,depthWrite:!1,toneMapped:!1,blending:sn}));I.position.y=17,R.add(I);const F=new Y(new zn(.75,0),new je({color:10354672,toneMapped:!1}));F.position.y=6.6,R.add(F),i.animatedWorld.push({mesh:F,update:(S,Z)=>{F.rotation.y+=S*.6,F.rotation.x+=S*.25,F.position.y=6.6+Math.sin(Z*1.1)*.22}});for(let S=0;S<3;S++){const Z=new Y(In(2.25+S*.48,.06,8,64),S===1?g:h);Z.position.y=2.1+S*.92,Z.rotation.x=Math.PI/2+(S-1)*.26,R.add(Z),i.animatedWorld.push({mesh:Z,speed:(S%2?-1:1)*(.18+S*.08),axis:"z"})}for(let S=0;S<6;S++){const Z=S/6*Math.PI*2,J=new Y(Je(.36,4.2,.36),l);J.position.set(Math.cos(Z)*3.4,2.2,Math.sin(Z)*3.4),J.rotation.z=Math.cos(Z)*-.2,J.rotation.x=Math.sin(Z)*.2,R.add(J);const ee=new Y(Je(.14,2.4,.14),f);ee.position.set(Math.cos(Z)*2.55,1.35,Math.sin(Z)*2.55),ee.rotation.z=Math.cos(Z)*.55,ee.rotation.x=-Math.sin(Z)*.55,R.add(ee);const $=new Y(Je(.2,.42,.06),S%2?h:g);$.position.set(Math.cos(Z)*3.4,3.4,Math.sin(Z)*3.4-.2),$.rotation.y=-Z,R.add($)}const V=new Y(In(3.5,.11,6,48),f);V.rotation.x=-Math.PI/2,V.position.y=4.35,R.add(V),t.add(R),i.obstacles.push({minX:-4.4,maxX:4.4,minZ:-4.4,maxZ:4.4}),i.worldColliders.push(y,M),[[-12,-10,4,1.3,1.7],[12,10,4,1.3,1.7],[-14,14,1.4,5,2.1],[14,-14,1.4,5,2.1],[-28,1,5,1.4,1.4],[28,-1,5,1.4,1.4],[1,29,1.4,5,1.8],[-1,-29,1.4,5,1.8],[-30,-24,3,3,2.7],[30,24,3,3,2.7],[26,-29,4,2,1.5],[-26,29,4,2,1.5],[-8,35,2,2,2.4],[8,-35,2,2,2.4],[37,10,2,4,2.2],[-37,-10,2,4,2.2]].forEach(([S,Z,J,ee,$],be)=>{const ne=new at,de=new Y(Je(J,$,ee),be%3===0?d:l);de.position.y=$/2,de.castShadow=!n,de.receiveShadow=!0,ne.add(de);const Xe=new Y(Je(J+.14,.12,ee+.14),f);Xe.position.y=$+.04,ne.add(Xe);for(const _ of[.16,$*.72,$-.1]){const k=new Y(Je(J+.03,.045,ee+.03),be%4===0?g:u);k.position.y=_,ne.add(k)}const He=new Y(Je(J*.62,$*.52,.06),f);He.position.set(0,$*.5,-ee/2-.035),ne.add(He);for(let _=0;_<4;_++){const k=new Y(Je(J*.5,.035,.02),d);k.position.set(0,$*.34+_*$*.1,-ee/2-.075),ne.add(k)}for(const _ of[-1,1]){const k=new Y(Ut(.05,.05,.03,6),be%4===0?v:h);k.rotation.x=Math.PI/2,k.position.set(_*J*.4,$*.5,-ee/2-.07),ne.add(k);const X=new Y(Je(.1,$,.1),f);X.position.set(_*(J/2-.05),$/2,-ee/2+.05),ne.add(X)}const C=new Y(Je(J*.2,.05,.02),be%3===0?v:h);C.position.set(0,$*.86,-ee/2-.07),ne.add(C),ne.position.set(S,0,Z),t.add(ne),i.obstacles.push({minX:S-J/2,maxX:S+J/2,minZ:Z-ee/2,maxZ:Z+ee/2}),i.worldColliders.push(de,Xe)});const q=[[-20,8],[20,-8],[-8,-20],[8,20],[-25,25],[25,-25],[16,16],[-16,-16]],K=new Ct({color:6965788,metalness:.7,roughness:.5,emissive:16742957,emissiveIntensity:.5}),ie=new Ct({color:1314826,metalness:.6,roughness:.6}),G=new je({color:16757322,toneMapped:!1});q.forEach(([S,Z])=>{const J=new at,ee=K.clone(),$=new Y(Ut(.62,.62,1.5,14),ee);$.position.y=.75,$.castShadow=!n;const be=new Y(Ut(.66,.62,.12,14),ie);be.position.y=1.5;const ne=new Y(Ut(.64,.64,.3,14),ie);ne.position.y=.78;const de=new Y(km(.1,8,6),G);de.position.y=1.62,J.add($,be,ne,de),J.position.set(S,0,Z),t.add(J);const Xe={minX:S-.62,maxX:S+.62,minZ:Z-.62,maxZ:Z+.62},He={group:J,mesh:$,bodyMaterial:ee,health:60,maxHealth:60,position:J.position,dead:!1,flash:0,box:Xe};$.userData.barrel=He,i.barrels.push(He),i.barrelMeshes.push($),i.obstacles.push(Xe),i.barrelBoxes.add(Xe)});const fe=new Ct({color:726297,metalness:.78,roughness:.48});[[0,-70,142,2],[0,70,142,2],[-70,0,2,142],[70,0,2,142]].forEach(([S,Z,J,ee])=>{const $=new Y(Je(J,5,ee),fe);$.position.set(S,2.5,Z),t.add($),i.worldColliders.push($);const be=new Y(Je(J+.05,.09,ee+.05),u);be.position.set(S,4.25,Z),t.add(be);const ne=Math.floor(J>ee?J/6:ee/6);for(let de=0;de<ne;de++){const Xe=-70+de*(140/ne);b("accentMetal",Je((J>ee,.28),4.2,J>ee?.3:.28),[J>ee?Xe:S,2.2,J>ee?Z:Xe])}});const _e=[];for(let S=0;S<12;S++){const Z=S/12*Math.PI*2;_e.push([Math.cos(Z)*45,Math.sin(Z)*45,Z])}_e.forEach(([S,Z,J],ee)=>{b("darkMetal",Ut(.16,.24,6.4,8),[S,3.2,Z]),b("accentMetal",Ut(.36,.36,.22,8),[S,.16,Z]),b("accentMetal",Je(.5,.18,.5),[S,6.45,Z]),b(ee%3===0?"purpleGlow":"cyanGlow",Je(.36,.5,.36),[S,6.05,Z]),b("dimGlow",In(1.1,.035,5,22),[S,.04,Z],[-Math.PI/2,0,0]),b("amberGlow",Je(.1,.1,.06),[S,4.6,Z],[0,-J,0]);for(const $ of[-1,1])b("accentMetal",Je(.09,1.6,.09),[S+$*.38,1,Z],[0,0,$*.42])});for(let S=0;S<6;S++){const Z=S/6*Math.PI*2+.35,J=Math.cos(Z)*33,ee=Math.sin(Z)*33,$=7.5+S%2*2.4;b("darkMetal",Ut(3.1,2.7,.45,8),[J,$,ee]),b("accentMetal",Ut(3.3,3.3,.1,8),[J,$+.26,ee]),b(S%2?"purpleGlow":"cyanGlow",In(3,.055,5,28),[J,$-.2,ee],[-Math.PI/2,0,0]);for(let ne=0;ne<8;ne++){const de=ne/8*Math.PI*2;b("dimGlow",Je(.08,.02,.6),[J+Math.cos(de)*2.5,$+.32,ee+Math.sin(de)*2.5],[0,-de,0])}const be=new Y(Xr(2.8,7,10),new je({color:S%2?10768870:3532996,transparent:!0,opacity:.045,depthWrite:!1,side:Ft,toneMapped:!1,blending:sn}));be.position.set(J,$-3.8,ee),be.rotation.x=Math.PI,t.add(be)}for(let S=0;S<4;S++){const Z=S<2?-1:1,J=S%2?-58:58,ee=[];for(let ne=0;ne<=12;ne++){const de=ne/12;ee.push(new A(-52+de*104,4.2+Math.sin(de*Math.PI*2+S)*.8,J+Z*Math.sin(de*Math.PI)*3))}const $=new hc(ee),be=new Y(new to($,48,.16,7,!1),S%2?f:l);t.add(be);for(let ne=0;ne<=6;ne++){const de=$.getPoint(ne/6);b("accentMetal",Je(.12,Math.max(.4,de.y-.2),.12),[de.x,de.y/2,de.z])}}const Se=new Qi,We=new Qi;let it=7147;const Qe=()=>(it=it*16807%2147483647,(it-1)/2147483646);for(let S=0;S<78;S++){const Z=Qe()*Math.PI*2,J=80+Qe()*60,ee=5+Qe()*10,$=5+Qe()*10,be=14+Qe()*66,ne=Math.cos(Z)*J,de=Math.sin(Z)*J;Se.add("body",Je(ee,be,$),[ne,be/2-1,de]),Se.add("windows",Je(ee+.06,be*.86,$+.06),[ne,be/2-1,de]),Se.add("cap",Je(ee+.4,.22,$+.4),[ne,be-.8,de]),S%2===0&&We.add("glow",Je(ee+.1,.16+Qe()*.16,$+.1),[ne,be*(.35+Qe()*.45),de]),S%5===0&&Se.add("antenna",Ut(.07,.07,9,5),[ne,be+3.5,de]),S%6===0&&Se.add("spire",Xr(.5,6,5),[ne,be+2,de])}const et={body:new Ct({color:1320492,roughness:.78,metalness:.48}),windows:new je({color:10475728,map:Nm(),toneMapped:!1}),cap:l,antenna:u,spire:g,glow:u};t.add(Se.build(et)),t.add(We.build({glow:g})),[["NEXUS","SECTOR 07","#54f7d2",-58,10,-20,.6],["NX-07","TACTICAL LINK","#7de8ff",58,12,18,-.6],["霓虹余烬","NEON ASHES","#ff9a55",-20,14,-60,0],["WARDEN","APEX SIGNAL","#ff5c62",22,16,60,Math.PI],["零界突击","STRIKE PROTOCOL","#b06bff",-62,9,26,1.15],["SYS.ONLINE","DEFENSE GRID","#54f7d2",62,10,-30,-1.15]].forEach(([S,Z,J,ee,$,be,ne])=>{const de=Um(S,Z,J),Xe=new Y(new En(9.6,4.8),new je({map:de,side:Ft,toneMapped:!1}));Xe.position.set(ee,$,be),Xe.rotation.y=ne,t.add(Xe);const He=new Y(Je(10,5.2,.16),l);He.position.set(ee,$,be),He.rotation.y=ne,He.translateZ(-.12),t.add(He);const C=new Y(Ut(.12,.16,$-2,8),l);C.position.set(ee,($-2)/2,be),t.add(C)});const se=new je({map:Om(),transparent:!0,opacity:.75,side:Ft,depthWrite:!1,toneMapped:!1});[[0,-145,0],[-145,0,Math.PI/2],[0,145,Math.PI],[145,0,-Math.PI/2]].forEach(([S,Z,J])=>{const ee=new Y(new En(300,42),se);ee.position.set(S,19,Z),ee.rotation.y=J,t.add(ee)}),t.add(p.build(m)),i.spawnPoints=[new A(-48,0,-48),new A(48,0,-48),new A(-48,0,48),new A(48,0,48),new A(0,0,-54),new A(0,0,54),new A(-54,0,0),new A(54,0,0)],i.spawnPoints.forEach((S,Z)=>{const J=new at,ee=new Y(In(2.15,.1,8,40),Z%2?g:h);ee.position.y=2.3,J.add(ee);const $=new Y(In(1.85,.035,6,36),u);$.position.y=2.3,J.add($);for(const ne of[-1,1]){const de=new Y(Je(.26,4.8,.4),l);de.position.set(ne*2.15,2.2,0),J.add(de);const Xe=new Y(Je(.1,1.2,.1),Z%2?g:h);Xe.position.set(ne*2.15,2.5,-.24),J.add(Xe);const He=new Y(Je(.6,.2,.6),f);He.position.set(ne*2.15,.1,0),J.add(He)}const be=new Y(Je(4.6,.3,.45),f);be.position.y=4.6,J.add(be),J.position.copy(S),J.lookAt(0,2,0),t.add(J),i.animatedWorld.push({mesh:$,speed:-.22,axis:"z"}),i.animatedWorld.push({mesh:ee,speed:Z%2?-.3:.3,axis:"z"})});for(let S=0;S<2;S++){const Z=new at,J=new Y(Je(5.5,.8,1.6),l),ee=new Y(Xr(.85,1.8,6),f);ee.rotation.z=-Math.PI/2,ee.position.x=3.4;const $=new Y(Je(1.5,.16,5.4),f);for(const Xe of[-1,1]){const He=new Y(Ut(.32,.32,1.1,8),l);He.rotation.x=Math.PI/2,He.position.set(-1.6,-.1,Xe*2.2);const C=new Y(Je(.1,.1,.1),g);C.position.set(-1.6,-.1,Xe*2.8),Z.add(He,C)}const be=new Y(Je(4.6,.06,.1),h);be.position.set(0,.44,0),Z.add(J,ee,$,be),Z.scale.setScalar(1.2),t.add(Z);const ne=62+S*12,de=S*Math.PI;i.animatedWorld.push({mesh:Z,update:(Xe,He)=>{const C=He*.06+de;Z.position.set(Math.cos(C)*ne,24+Math.sin(He*.5+de)*1.5,Math.sin(C)*ne),Z.rotation.y=-C+Math.PI/2}})}const Fe=n?260:i.isTouch?380:900,Ee=new Float32Array(Fe*3);for(let S=0;S<Fe;S++)Ee[S*3]=qr(-75,75),Ee[S*3+1]=qr(.2,28),Ee[S*3+2]=qr(-75,75);const Ke=new yt;Ke.setAttribute("position",new $t(Ee,3));const St=new gd(Ke,new ac({color:7653818,size:n?.055:.045,transparent:!0,opacity:.5,depthWrite:!1}));t.add(St),i.dust=St}const yc="nexus-settings-v1",ri=Object.freeze({mouseSensitivity:1,touchSensitivity:1,fireLook:!0,fireLookSensitivity:.85,invertY:!1,aimAssist:100,volume:100,feedback:100,showFps:!1}),zm={mouseSensitivity:[.3,2.5],touchSensitivity:[.3,2.5],fireLookSensitivity:[.3,1.6],aimAssist:[0,150],volume:[0,100],feedback:[0,150]};function Mc(i,e){const t=ri[i];if(typeof t=="boolean")return typeof e=="boolean"?e:t;const n=Number(e);if(!Number.isFinite(n))return t;const[s,r]=zm[i]||[0,150];return Math.min(r,Math.max(s,n))}function Hm(){let i={};try{i=JSON.parse(localStorage.getItem(yc)||"{}")||{}}catch{}const e={};for(const t of Object.keys(ri))e[t]=Object.prototype.hasOwnProperty.call(i,t)?Mc(t,i[t]):ri[t];return e}const Pt=Hm();function Sc(){try{localStorage.setItem(yc,JSON.stringify(Pt))}catch{}}function wc(i,e){i in ri&&(Pt[i]=Mc(i,e),Sc())}function Ec(){for(const i of Object.keys(ri))Pt[i]=ri[i];Sc()}function wl(){return Pt.aimAssist/100}function Vm(){return Pt.feedback/100}const At=$i.clamp,Rt=$i.lerp,xt=(i,e)=>i+Math.random()*(e-i),El={lockon:"lock",autofire:"auto",godmode:"god",infinity:"ammo",xray:"wall",timeslip:"slow",purge:"purge",arsenal:"arsenal",recharge:"recharge",overbound:"overbound",standdown:"standdown",help:"help"},Kn={lock:"锁头 // LOCK-ON",auto:"自动射击 // AUTO-FIRE",god:"无敌 // GOD-MODE",ammo:"无限弹药 // INFINITY",wall:"透视 // X-RAY",slow:"子弹时间 // TIME-SLIP",purge:"清场 // PURGE",arsenal:"全武器解锁 // ARSENAL",recharge:"能量回满 // RECHARGE",overbound:"越界协议全开 // OVERBOUND",standdown:"协议解除 // STAND-DOWN",help:"作弊码清单 // HELP"},Gm={god:"无敌",ammo:"无限弹",lock:"锁头",auto:"自动射",wall:"透视",slow:"时停"},bl=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"];function bc(){let i=null;try{i=localStorage.getItem("nexus-device")}catch{}const e=new URLSearchParams(location.search).get("device");if(["desktop","mobile","board"].includes(e))return e;if(["desktop","mobile","board"].includes(i))return i;const t=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,n=Math.max(innerWidth,innerHeight),s=innerWidth>innerHeight;return t&&s&&(n>=1e3||navigator.maxTouchPoints>=5)?"board":t?"mobile":"desktop"}const mt=[{id:"rifle",name:"VX-9 脉冲",label:"VX-9 <span>脉冲</span>",className:"突击步枪 // AUTO",category:"rifle",price:380,desc:"稳定的全自动脉冲步枪，适合中距离持续压制。",damage:24,fireRate:9,magazine:30,reserve:180,reload:1.45,spread:.009,pellets:1,auto:!0,range:90},{id:"shotgun",name:"SG-12 裂解",label:"SG-12 <span>裂解</span>",className:"战术霰弹枪 // PUMP",category:"special",price:420,desc:"八枚高能弹丸同时释放，近距离可造成毁灭性伤害。",damage:14,fireRate:1.2,magazine:6,reserve:42,reload:1.8,spread:.065,pellets:8,auto:!1,range:42},{id:"rail",name:"R-01 磁轨",label:"R-01 <span>磁轨</span>",className:"磁轨精确步枪 // SEMI",category:"sniper",price:640,desc:"高精度磁轨射线，贯穿一条直线上的所有敌人。",damage:135,fireRate:.8,magazine:5,reserve:25,reload:2.1,spread:.001,pellets:1,auto:!1,range:130,pierce:!0},{id:"arc",name:"ARC-7 弧光",label:"ARC-7 <span>弧光</span>",className:"链式电弧 // CHAIN",category:"special",price:660,desc:"发射链式电弧，命中后自动跳跃到附近敌人。",damage:46,fireRate:3.4,magazine:24,reserve:120,reload:1.7,spread:.014,pellets:1,auto:!0,range:62,chain:3},{id:"rocket",name:"WN-5 蜂巢",label:"WN-5 <span>蜂巢</span>",className:"制导导弹 // HOMING",category:"special",price:780,desc:"六管制导发射器，导弹自动锁定敌人并产生范围爆炸。",damage:120,fireRate:1.1,magazine:4,reserve:16,reload:2.2,spread:0,pellets:1,auto:!1,range:130,rocket:!0,aoe:6},{id:"frost",name:"LN-3 寒霜",label:"LN-3 <span>寒霜</span>",className:"低温步枪 // CRYO",category:"rifle",price:600,desc:"低温步枪，命中使敌人减速 50%，是控场核心手段。",damage:30,fireRate:4.2,magazine:22,reserve:110,reload:1.6,spread:.012,pellets:1,auto:!0,range:95,frost:!0,slowDuration:2.2,slowStrength:.5},{id:"sentinel",name:"PX-1 哨兵",label:"PX-1 <span>哨兵</span>",className:"战术手枪 // SIDEARM",category:"pistol",price:240,desc:"高单发伤害的半自动手枪，弹匣小但暴击收益极高。",damage:42,fireRate:3.2,magazine:12,reserve:96,reload:1.2,spread:.006,pellets:1,auto:!1,range:55,critBonus:.16},{id:"twins",name:"PX-2 双生",label:"PX-2 <span>双生</span>",className:"双持连发 // DUAL",category:"pistol",price:320,desc:"双持全自动机匣，射速极快，适合清理脆皮与游隼。",damage:24,fireRate:6.5,magazine:20,reserve:160,reload:1.5,spread:.018,pellets:1,auto:!0,range:48},{id:"judgement",name:"PX-3 审判",label:"PX-3 <span>审判</span>",className:"重型手炮 // HANDCANNON",category:"pistol",price:420,desc:"大口径手炮，近距离一发可撕开重装单位装甲。",damage:95,fireRate:1.1,magazine:6,reserve:48,reload:1.9,spread:.002,pellets:1,auto:!1,range:70},{id:"dawn",name:"AR-4 破晓",label:"AR-4 <span>破晓</span>",className:"模块化突击步枪 // AUTO",category:"rifle",price:460,desc:"均衡型全自动步枪，伤害与稳定性都优于制式装备。",damage:28,fireRate:8,magazine:32,reserve:192,reload:1.5,spread:.008,pellets:1,auto:!0,range:95},{id:"hornet",name:"AR-8 蜂刺",label:"AR-8 <span>蜂刺</span>",className:"高射速卡宾 // SMG",category:"rifle",price:520,desc:"超高射速低后坐，靠弹幕压制，配合弱点解析收益极高。",damage:16,fireRate:13,magazine:45,reserve:270,reload:1.7,spread:.016,pellets:1,auto:!0,range:70},{id:"maul",name:"AR-9 重锤",label:"AR-9 <span>重锤</span>",className:"重型战斗步枪 // HEAVY",category:"rifle",price:560,desc:"高单发伤害的慢射速步枪，中远距离点杀效率出色。",damage:62,fireRate:3.6,magazine:20,reserve:120,reload:2,spread:.011,pellets:1,auto:!0,range:100},{id:"hush",name:"SR-2 静默",label:"SR-2 <span>静默</span>",className:"半自动狙击 // DMR",category:"sniper",price:620,desc:"高精度半自动狙击，弹匣容量更宽裕，容错更高。",damage:190,fireRate:.9,magazine:5,reserve:30,reload:2.2,spread:6e-4,pellets:1,auto:!1,range:150,pierce:!0},{id:"piercer",name:"SR-6 穿云",label:"SR-6 <span>穿云</span>",className:"贯穿狙击 // ANTI-MATERIEL",category:"sniper",price:700,desc:"射速更快的贯穿狙击，一发可洞穿整列敌人。",damage:150,fireRate:1.4,magazine:8,reserve:48,reload:2,spread:.001,pellets:1,auto:!1,range:160,pierce:!0},{id:"tribunal",name:"SR-9 天罚",label:"SR-9 <span>天罚</span>",className:"反器材轨道炮 // RAILGUN",category:"sniper",price:860,desc:"单发毁伤极高的轨道炮，首领与重装的终结者。",damage:320,fireRate:.55,magazine:3,reserve:18,reload:2.8,spread:0,pellets:1,auto:!1,range:180,pierce:!0}],Tc={pistol:"手枪",rifle:"步枪",sniper:"狙击枪",special:"特殊装备"},Tl={runner:{name:"猎犬突击体",health:65,speed:4.7,damage:13,score:120,radius:.55,color:16729688},drone:{name:"蜂群射手",health:90,speed:2.7,damage:10,score:180,radius:.65,color:11757567},tank:{name:"重装碾压者",health:310,speed:1.35,damage:16,score:420,radius:.95,color:16747069},phantom:{name:"相位幽影",health:58,speed:5.6,damage:12,score:240,radius:.5,color:6087167},falcon:{name:"游隼突袭者",health:44,speed:5.8,damage:9,score:160,radius:.5,color:13041469},bomber:{name:"自毁蜂群",health:46,speed:5.5,damage:28,score:210,radius:.52,color:16761421},medic:{name:"维生单元",health:75,speed:2.3,damage:0,score:200,radius:.6,color:4710560},turret:{name:"定点炮台",health:240,speed:0,damage:14,score:300,radius:.9,color:16757325},boss:{name:"守望者核心",health:2600,speed:1.45,damage:18,score:5e3,radius:2.1,color:16734525}},Yr={recruit:{id:"recruit",label:"新兵",waves:10,hp:.78,damage:.68,score:.85,drop:1.35,spawn:.85},standard:{id:"standard",label:"标准",waves:15,hp:1,damage:1,score:1,drop:1,spawn:1},nightmare:{id:"nightmare",label:"噩梦",waves:20,hp:1.4,damage:1.45,score:1.5,drop:.82,spawn:1.18},apex:{id:"apex",label:"极限",waves:25,hp:1.85,damage:1.8,score:2.1,drop:.7,spawn:1.35}},Al=[{id:"flawless",text:"本波不受到任何伤害",reward:200,target:1},{id:"crit",text:"造成 5 次暴击",reward:170,target:5},{id:"headshot",text:"命中敌人弱点 6 次",reward:160,target:6},{id:"combo",text:"达成 8 连击",reward:180,target:8},{id:"barrel",text:"用油桶击毁 2 个敌人",reward:220,target:2},{id:"kills",text:"本波击毁 12 个敌人",reward:150,target:12}],$r=[{at:0,title:"第一章 // 霓虹余烬",text:"02:17，第七区断联。你是唯一还能接入战术网络的「幽灵」。"},{at:.22,title:"第二章 // 铁潮",text:"机械军团开始成建制推进，前哨站接连失守，补给线被压缩到极限。"},{at:.42,title:"第三章 // 裂隙回声",text:"裂隙深处传来同源信号——守望者正在召回所有残部。"},{at:.6,title:"第四章 // 深潜",text:"常规补给断绝，流动商人成了唯一的装备来源。"},{at:.8,title:"第五章 // 临界",text:"敌方核心开始超载，战场的物理规则正在被改写。"},{at:.96,title:"终章 // 黎明协议",text:"最后一道防线。摧毁守望者，结束这场没有尽头的夜。"}],Js=[{id:"first-blood",name:"首次接触",desc:"击毁第一个敌对单位"},{id:"combo-master",name:"连锁反应",desc:"连击倍率达到 2.5"},{id:"flawless",name:"无损作战",desc:"无伤清除一整波敌人"},{id:"crit-10",name:"精准打击",desc:"单局造成 10 次暴击"},{id:"overdrive",name:"核心超载",desc:"首次释放超载模式"},{id:"defuser",name:"拆弹专家",desc:"在自毁蜂群引爆前将其击毁"},{id:"arc-chain",name:"雷霆万钧",desc:"弧光一次连锁 3 个以上目标"},{id:"victory",name:"黎明已至",desc:"完成核心行动"},{id:"nightmare",name:"噩梦终结",desc:"在噩梦难度下通关"},{id:"hive",name:"蜂群覆盖",desc:"使用制导导弹击毁至少一个目标"},{id:"medic-down",name:"断援",desc:"击毁一台维生单元"},{id:"barrel",name:"连环爆破",desc:"用爆炸油桶一次清除多个目标"},{id:"frostbite",name:"冰封猎场",desc:"累计击毁 15 个处于减速状态的敌人"},{id:"falconer",name:"隼猎者",desc:"单局击毁 8 只游隼突袭者"}],Wm=[{id:"b-health",icon:"✚",name:"强化骨架",desc:"最大生命 +20。",apply:i=>{i.player.maxHealth+=20,i.player.health+=20}},{id:"b-shield",icon:"◇",name:"电容矩阵",desc:"最大护盾 +15。",apply:i=>{i.player.maxShield+=15,i.player.shield+=15}},{id:"b-damage",icon:"↟",name:"过热膛线",desc:"全武器伤害 +7%。",apply:i=>{i.player.damageMultiplier*=1.07}},{id:"b-firerate",icon:"≫",name:"高速循环",desc:"射速 +7%。",apply:i=>{i.player.fireRateMultiplier*=1.07}},{id:"b-speed",icon:"⌁",name:"伺服腿组",desc:"移动速度 +5%。",apply:i=>{i.player.speedMultiplier*=1.05}},{id:"b-crit",icon:"✦",name:"弱点解析",desc:"暴击率 +4%。",apply:i=>{i.player.critChance+=.04}},{id:"b-critdmg",icon:"✷",name:"暴击回路",desc:"暴击伤害 +12%。",apply:i=>{i.player.critMultiplier+=.12}},{id:"b-ammo",icon:"▤",name:"扩容弹匣",desc:"弹药容量 +10%。",apply:i=>{i.player.ammoMultiplier*=1.1}},{id:"b-reload",icon:"↻",name:"急速装填",desc:"装填速度 +8%。",apply:i=>{i.player.reloadMultiplier*=1.08}},{id:"b-pulse",icon:"◎",name:"脉冲核心",desc:"脉冲伤害 +10 / 半径 +1。",apply:i=>{i.player.pulseDamage+=10,i.player.pulseRadius+=1}},{id:"b-execute",icon:"⌖",name:"处决协议",desc:"处决加成 +8%。",apply:i=>{i.player.executeBonus+=.08}},{id:"b-pickup",icon:"⊙",name:"拾取场",desc:"拾取范围 +0.2。",apply:i=>{i.player.pickupRadius+=.2}},{id:"b-aimassist",icon:"⌖",name:"战术辅助瞄具",desc:"开启轻度辅助瞄准：准星柔和吸附最近敌人、子弹命中更稳（仅前方锥形范围）。不瞬锁、不自动开火，公平但顺手。可叠加至 3 级。",apply:i=>{i.player.aimAssistLevel=Math.min(3,(i.player.aimAssistLevel||0)+1)},levelOf:i=>i.player.aimAssistLevel||0},{id:"b-combo",icon:"⛓",name:"连击稳定器",desc:"连击保持时间延长 1.2 秒，更容易滚起高连击倍率。",apply:i=>{i.player.comboHold=(i.player.comboHold||0)+1.2},levelOf:i=>Math.round((i.player.comboHold||0)/1.2)},{id:"b-dash",icon:"↯",name:"相位电容",desc:"相位冲刺冷却缩短 12%。",apply:i=>{i.player.dashMax*=.88}},{id:"b-thorns",icon:"✵",name:"反冲装甲",desc:"受击时对周围敌人反弹 18 点伤害。",apply:i=>{i.player.thorns+=18},levelOf:i=>Math.round((i.player.thorns||0)/18)},{id:"b-weakpoint",icon:"◎",name:"弱点标定",desc:"弱点 / 暴击命中伤害提高 10%。",apply:i=>{i.player.weakpointBonus=(i.player.weakpointBonus||0)+.1},levelOf:i=>Math.round((i.player.weakpointBonus||0)*10)},{id:"b-score",icon:"◆",name:"战术记录仪",desc:"作战积分获取提高 8%（纯记录加成，不影响战斗强度）。",apply:i=>{i.player.scoreBonus=(i.player.scoreBonus||0)+.08},levelOf:i=>Math.round((i.player.scoreBonus||0)/.08)}],Xm=[{id:"m-mag",icon:"▤",name:"扩容弹匣",rarity:1,price:140,desc:"全武器弹药容量 +15%。",apply:i=>{i.player.ammoMultiplier*=1.15}},{id:"m-grip",icon:"≫",name:"稳定握把",rarity:1,price:160,desc:"射速 +10%。",apply:i=>{i.player.fireRateMultiplier*=1.1}},{id:"m-spring",icon:"↻",name:"高速弹簧",rarity:1,price:150,desc:"装填速度 +18%。",apply:i=>{i.player.reloadMultiplier*=1.18}},{id:"m-composite",icon:"◈",name:"复合弹仓",rarity:1,price:150,desc:"弹药容量 +12%。",apply:i=>{i.player.ammoMultiplier*=1.12}},{id:"m-sight",icon:"⌖",name:"红点校准",rarity:1,price:130,desc:"全武器伤害 +5%。",apply:i=>{i.player.damageMultiplier*=1.05}},{id:"m-barrel",icon:"↟",name:"精密枪管",rarity:2,price:190,desc:"全武器伤害 +12%。",apply:i=>{i.player.damageMultiplier*=1.12}},{id:"m-ammo",icon:"✦",name:"穿甲弹头",rarity:2,price:210,desc:"暴击率 +6%。",apply:i=>{i.player.critChance+=.06}},{id:"m-laser",icon:"✷",name:"激光指示",rarity:2,price:180,desc:"暴击率 +4%。",apply:i=>{i.player.critChance+=.04}},{id:"m-aegis",icon:"◇",name:"装甲模块",rarity:2,price:160,desc:"最大护盾 +14。",apply:i=>{i.player.maxShield+=14,i.player.shield+=14}},{id:"m-kinetic",icon:"⌁",name:"动力模块",rarity:2,price:170,desc:"移动速度 +4%。",apply:i=>{i.player.speedMultiplier*=1.04}},{id:"m-over",icon:"ϟ",name:"过载膛线",rarity:3,price:280,desc:"伤害 +25%（射速 -5%）。",apply:i=>{i.player.damageMultiplier*=1.25,i.player.fireRateMultiplier*=.95}},{id:"m-capacitor",icon:"◎",name:"电容模组",rarity:3,price:240,desc:"脉冲伤害 +15%、半径 +0.5。",apply:i=>{i.player.pulseDamage+=15,i.player.pulseRadius+=.5}},{id:"m-vamp",icon:"⟁",name:"猎手模块",rarity:3,price:210,desc:"击杀回血 +3。",apply:i=>{i.player.killHeal+=3}},{id:"m-holo",icon:"✷",name:"全息瞄具",rarity:3,price:230,desc:"暴击伤害 +18%。",apply:i=>{i.player.critMultiplier+=.18}}],qm=[{id:"s-repair",icon:"✚",name:"纳米修复包",rarity:1,price:130,desc:"立即回满生命与护盾。",apply:i=>{i.player.health=i.player.maxHealth,i.player.shield=i.player.maxShield}},{id:"s-ammo",icon:"▤",name:"弹药补给箱",rarity:1,price:95,desc:"全部武器补满备用弹药。",apply:i=>{i.weaponState.forEach((e,t)=>{e.ammo=mt[t].magazine,e.reserve=mt[t].reserve})}},{id:"s-medkit",icon:"✚",name:"战场医疗包",rarity:1,price:80,desc:"立即恢复 45 点生命。",apply:i=>{i.player.health=Math.min(i.player.maxHealth,i.player.health+45)}},{id:"s-shield",icon:"◇",name:"电容电芯",rarity:1,price:85,desc:"立即恢复 40 点护盾。",apply:i=>{i.player.shield=Math.min(i.player.maxShield,i.player.shield+40)}},{id:"s-energy",icon:"ϟ",name:"能量电芯",rarity:1,price:90,desc:"超载能量 +40。",apply:i=>{i.player.energy=Math.min(i.player.energyMax,i.player.energy+40)}},{id:"s-dmg",icon:"↟",name:"火力芯片",rarity:1,price:150,desc:"全武器伤害 +5%。",apply:i=>{i.player.damageMultiplier*=1.05}},{id:"s-firerate",icon:"≫",name:"速射芯片",rarity:1,price:140,desc:"射速 +6%。",apply:i=>{i.player.fireRateMultiplier*=1.06}},{id:"s-reload",icon:"↻",name:"装填芯片",rarity:1,price:130,desc:"装填速度 +10%。",apply:i=>{i.player.reloadMultiplier*=1.1}},{id:"s-speed",icon:"⌁",name:"伺服芯片",rarity:1,price:120,desc:"移动速度 +4%。",apply:i=>{i.player.speedMultiplier*=1.04}},{id:"s-health",icon:"✚",name:"强化骨架",rarity:1,price:140,desc:"最大生命 +18。",apply:i=>{i.player.maxHealth+=18,i.player.health+=18}},{id:"s-shieldc",icon:"◇",name:"护盾矩阵",rarity:1,price:130,desc:"最大护盾 +14。",apply:i=>{i.player.maxShield+=14,i.player.shield+=14}},{id:"s-pickup",icon:"⊙",name:"拾取芯片",rarity:1,price:110,desc:"拾取范围 +0.2。",apply:i=>{i.player.pickupRadius+=.2}},{id:"s-crit",icon:"✦",name:"弱点芯片",rarity:2,price:170,desc:"暴击率 +3%。",apply:i=>{i.player.critChance+=.03}},{id:"s-pulse",icon:"◎",name:"脉冲芯片",rarity:2,price:160,desc:"脉冲伤害 +12。",apply:i=>{i.player.pulseDamage+=12}},{id:"s-execute",icon:"⌖",name:"处决芯片",rarity:2,price:150,desc:"处决加成 +6%。",apply:i=>{i.player.executeBonus+=.06}},{id:"s-leech",icon:"⟁",name:"吸血芯片",rarity:2,price:160,desc:"击杀回血 +3。",apply:i=>{i.player.killHeal+=3}},{id:"s-frost",icon:"❄",name:"极寒芯片",rarity:2,price:150,desc:"减速时间 +30%。",apply:i=>{i.player.frostDuration=(i.player.frostDuration||1)*1.3}},{id:"s-magnet",icon:"⊙",name:"磁场芯片",rarity:2,price:170,desc:"拾取范围 +0.4、补给 +20%。",apply:i=>{i.player.pickupRadius+=.4,i.player.pickupPower=(i.player.pickupPower||1)*1.2}},{id:"s-aegis",icon:"◇",name:"护盾电芯",rarity:2,price:160,desc:"最大护盾 +20。",apply:i=>{i.player.maxShield+=20,i.player.shield+=20}},{id:"s-kinetic",icon:"⌁",name:"机动芯片",rarity:2,price:150,desc:"移速 +3%、装填 +6%。",apply:i=>{i.player.speedMultiplier*=1.03,i.player.reloadMultiplier*=1.06}},{id:"s-critdmg",icon:"✷",name:"暴击芯片",rarity:3,price:230,desc:"暴击伤害 +15%。",apply:i=>{i.player.critMultiplier+=.15}},{id:"s-chain",icon:"≈",name:"电弧芯片",rarity:3,price:220,desc:"电弧额外跳跃 +1。",apply:i=>{i.player.chainBonus+=1}},{id:"s-overdrive",icon:"ϟ",name:"核心芯片",rarity:3,price:210,desc:"超载能量获取 +20%。",apply:i=>{i.player.energyGain*=1.2}},{id:"s-vamp",icon:"⟁",name:"维生芯片",rarity:3,price:200,desc:"击杀回护盾 +3。",apply:i=>{i.player.killShield=(i.player.killShield||0)+3}}],Ym=[{id:"sk-emp",kind:"active",icon:"✺",name:"电磁过载",rarity:2,price:200,cooldown:18,desc:"释放范围冲击，造成 130 伤害并瘫痪敌人 1 秒。"},{id:"sk-nano",kind:"active",icon:"✚",name:"纳米修复立场",rarity:1,price:150,cooldown:16,desc:"立即恢复 55 生命与 40 护盾（医疗）。"},{id:"sk-med",kind:"active",icon:"⚕",name:"应急医疗舱",rarity:2,price:190,cooldown:20,desc:"立即 +50 生命，并在 4 秒内持续恢复（医疗）。"},{id:"sk-ammo",kind:"active",icon:"▤",name:"弹药空投",rarity:1,price:140,cooldown:20,desc:"补满全部武器弹药与备弹（补给）。"},{id:"sk-barrier",kind:"active",icon:"◇",name:"力场护壁",rarity:3,price:260,cooldown:26,desc:"展开 3 秒无敌护盾立场。"},{id:"sk-time",kind:"active",icon:"⏳",name:"时间稀释",rarity:3,price:240,cooldown:24,desc:"6 秒内大幅减缓所有敌人行动。"},{id:"sk-overload",kind:"active",icon:"ϟ",name:"相位超载",rarity:3,price:250,cooldown:22,desc:"4 秒内伤害 ×2、射速 +50%。"},{id:"sk-storm",kind:"active",icon:"↯",name:"磁暴",rarity:2,price:210,cooldown:18,desc:"连锁电弧打击最近的 8 个敌人。"},{id:"sk-adaptive",kind:"passive",icon:"🛡",name:"自适应装甲",rarity:2,price:200,desc:"生命低于 30% 时受到伤害 -40%。",apply:i=>{i.player.adaptiveArmor=!0}},{id:"sk-siphon",kind:"passive",icon:"⟲",name:"能量虹吸",rarity:1,price:150,desc:"每次击杀使脉冲冷却 -1.2 秒。",apply:i=>{i.player.siphon=!0}},{id:"sk-protocol",kind:"passive",icon:"✦",name:"暴击协议",rarity:2,price:190,desc:"每第 7 次射击必定暴击。",apply:i=>{i.player.critProtocol=!0}},{id:"sk-nanite",kind:"passive",icon:"❖",name:"自修复纳米",rarity:2,price:180,desc:"每秒自动恢复 2.5 生命。",apply:i=>{i.player.nanite=2.5}},{id:"sk-adrenaline",kind:"passive",icon:"⌁",name:"肾上腺素",rarity:1,price:160,desc:"生命低于 40% 时射速 +30%。",apply:i=>{i.player.adrenaline=!0}}],$m={"sk-emp":i=>{i.castAoe(i.player.position.clone(),16,130,5568466,1),i.callbacks.onAnnounce("电磁过载","范围冲击 · 敌人瘫痪","SKILL // EMP",1500)},"sk-nano":i=>{const e=i.player;e.health=Math.min(e.maxHealth,e.health+55),e.shield=Math.min(e.maxShield,e.shield+40),i.createPulseEffect(e.position.clone(),7143376,8),i.callbacks.onAnnounce("纳米修复立场","生命 +55 · 护盾 +40","SKILL // NANO",1500)},"sk-med":i=>{const e=i.player;e.health=Math.min(e.maxHealth,e.health+50),e.medTime=4,e.medRate=4,i.createPulseEffect(e.position.clone(),8257456,9),i.callbacks.onAnnounce("应急医疗舱","立即 +50 · 4 秒持续恢复","SKILL // MED",1500)},"sk-ammo":i=>{i.weaponState.forEach((e,t)=>{e.ammo=mt[t].magazine,e.reserve=mt[t].reserve}),i.callbacks.onAnnounce("弹药空投","全武器弹药已补满","SKILL // AMMO",1500)},"sk-barrier":i=>{const e=i.player;e.invulnerable=Math.max(e.invulnerable,3),i.createPulseEffect(e.position.clone(),10194175,9),i.callbacks.onAnnounce("力场护壁","3 秒无敌护盾","SKILL // BARRIER",1500)},"sk-time":i=>{i.enemySlow=6,i.callbacks.onAnnounce("时间稀释","敌人行动减缓 6 秒","SKILL // DILATION",1500)},"sk-overload":i=>{const e=i.player;e.skillBuff=4,e.skillDmg=2,e.skillFire=1.5,i.createPulseEffect(e.position.clone(),16766044,12),i.callbacks.onAnnounce("相位超载","伤害 ×2 · 射速 +50% · 4 秒","SKILL // OVERLOAD",1500)},"sk-storm":i=>{const e=i.player,t=e.position.clone(),n=i.enemies.filter(s=>!s.dead&&!s.phased&&s.spawnTime<=0).map(s=>({e:s,d:s.group.position.distanceTo(t)})).sort((s,r)=>s.d-r.d).slice(0,8);i.createPulseEffect(t,8251647,14);for(const{e:s}of n)i.damageEnemy(s,45*e.damageMultiplier,s.group.position.clone().sub(t).setY(0).normalize()),i.createTracer(t.clone().add(new A(0,1.6,0)),s.group.position.clone().add(new A(0,1.2,0)),8251647,.25),s.stun=Math.max(s.stun||0,.4);i.audio.pulse(),i.callbacks.onAnnounce("磁暴","连锁电弧打击 8 个目标","SKILL // STORM",1500)}},Kr={1:0,2:2,3:4,4:8};class Km{constructor(e,t,n){this.canvas=e,this.radar=t,this.radarContext=t.getContext("2d"),this.callbacks=n,this.audio=new bm,this.profile=bc(),this.isBoard=this.profile==="board",this.isTouch=this.profile!=="desktop",this.lowPower=this.isBoard,this.maxParticles=this.isBoard?16:this.isTouch?25:80,this.demoMode=!1,this.scene=new dd,this.scene.background=new Ye(198667),this.scene.fog=new tr(463125,24,112),this.camera=new Yt(72,innerWidth/innerHeight,.05,220),this.camera.rotation.order="YXZ",this.renderer=new Em({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(innerWidth,innerHeight),this.applyQuality(),this.renderer.outputColorSpace=Lt,this.renderer.toneMapping=zl,this.renderer.toneMappingExposure=1.55,this.renderer.shadowMap.enabled=!this.isTouch&&!this.lowPower,this.renderer.shadowMap.type=kl,this.clock=new Bd,this.raycaster=new Ko,this.losRay=new Ko,this.missStreak=0,this.state="menu",this.mode="campaign",this.keys={},this.firing=!1,this.aiming=!1,this.shotThisHold=!1,this.yaw=0,this.pitch=0,this.cheats={god:!1,ammo:!1,lock:!1,auto:!1,wall:!1,slow:!1},this.cheated=!1,this.enemySlow=0,this.aimTarget=null,this.aimHoldTimer=0,this.hitStop=0,this.cheatBuffer="",this.konami=[],this.cheatToastTimer=0,this.menuTime=0,this.elapsed=0,this.enemies=[],this.enemyHitMeshes=[],this.projectiles=[],this.pickups=[],this.particles=[],this.tracers=[],this.effects=[],this.obstacles=[],this.barrels=[],this.barrelMeshes=[],this.barrelBoxes=new Set,this.worldColliders=[],this.animatedWorld=[],this.spawnQueue=[],this.waveClearPending=!1,this.hudTimer=0,this.radarTimer=0,this.shake=0,this.weaponRecoil=0,this.muzzleTimer=0,this.currentUpgradeChoices=[],this.freePickIndex=-1,this.difficulty=Yr.standard,this.clearedContent=localStorage.getItem("nexus-cleared")==="1",this.mission=null,this.missionBonus=1,this.shopDiscount=1,this.fieldVendor=null,this.waveTimeLeft=0,this.fieldEvent=null,this.appliedUpgrades=[],this.runAchievements=new Set,this.critCount=0,this.comboPeak=1,this.waveDamageTaken=0,this.dashActive=!1,this.sharedParticleGeometry=new un(.055,.055,.055),this.sharedProjectileGeometry=new Di(.11,8,8),this.createWorld(),this.createViewModel(),this.bindEvents(),this.resetPlayer(),this.animate=this.animate.bind(this),this.animate()}createWorld(){Bm(this)}applyQuality(){const e=this.isBoard?innerWidth>2200?.7:1:this.isTouch?1.25:1.65;this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,e))}createViewModel(){this.weaponRoot=new at,this.camera.add(this.weaponRoot),this.scene.add(this.camera),this.weaponRoot.position.set(.36,-.31,-.62),this.applyWeaponScale();const e=new at,t=new Ct({color:1583407,metalness:.55,roughness:.62}),n=new Ct({color:2902856,metalness:.82,roughness:.34,emissive:928550,emissiveIntensity:.5}),s=new Y(new Sn(.075,.105,.52,8),t);s.rotation.set(Math.PI/2.45,0,-.25),s.position.set(.19,-.3,.16);const r=new Y(new Sn(.11,.11,.09,8),n);r.rotation.copy(s.rotation),r.position.set(.23,-.21,.02);const a=new Y(new Sn(.07,.09,.38,8),t);a.rotation.set(Math.PI/2.2,0,.42),a.position.set(-.16,-.26,-.3);const o=new Y(new un(.13,.05,.19),n);o.position.set(-.13,-.16,-.36),e.add(s,r,a,o),e.traverse(l=>{l.renderOrder=10,l.frustumCulled=!1}),this.weaponRoot.add(e),this.viewHands=e;const c=new Ji(11070172,1.35,3.6);c.position.set(.2,.25,.25),this.camera.add(c),this.muzzleLight=new Ji(7536602,0,3),this.weaponRoot.add(this.muzzleLight),this.buildWeaponModel(0)}applyWeaponScale(){if(!this.weaponRoot)return;const e=this.isTouch&&innerHeight>innerWidth;this.weaponRoot.scale.setScalar(this.isBoard?.92:e?.68:.8)}buildWeaponModel(e){this.weaponModel&&this.weaponRoot.remove(this.weaponModel);const t=Im(e);this.weaponRoot.add(t.group),this.weaponModel=t.group,this.weaponParts=t,this.currentScopeType=t.scopeType||"reddot",this.scopeReticle=t.reticle||null,this.muzzleLight.position.set(0,.02,t.muzzleZ+.12)}updateWeaponParts(e){const t=this.weaponParts;if(!t)return;const n=this.reloadTimer>0,s=n?1-this.reloadTimer/Math.max(.001,mt[this.weaponIndex].reload/this.player.reloadMultiplier):0,r=n?Math.sin(s*Math.PI):0;if(t.magazine.position.y=Rt(t.magazine.position.y,(this.weaponIndex===1,-.19-r*.22),1-Math.exp(-e*16)),t.magazine.rotation.x=Rt(t.magazine.rotation.x,r*.55,1-Math.exp(-e*14)),t.bolt.position.z=Rt(t.bolt.position.z,-.16+this.weaponRecoil*.085,1-Math.exp(-e*22)),t.flash.visible=this.muzzleTimer>0,t.flash.visible){const a=this.muzzleTimer/.055;t.flash.scale.setScalar(.65+a*.7),t.flash.rotation.z+=e*18}t.coils&&t.coils.children.forEach((a,o)=>{a.rotation.z+=e*(o%2?-2.2:2.2)}),t.optics&&(t.optics.position.y=Rt(t.optics.position.y,(t.redDot?.15:.17)-(this.aimBlend||0)*.035,1-Math.exp(-e*10))),t.redDot&&(t.redDot.scale.setScalar(.8+(this.aimBlend||0)*.8),t.redDot.material.color.setHex(this.aimBlend>.45?16719928:11023172)),this.scopeReticle&&(this.scopeReticle.visible=this.aimBlend>.25)}resetPlayer(){this.player={position:new A(0,1.7,22),velocity:new A,health:100,maxHealth:100,shield:50,maxShield:50,damageMultiplier:1,fireRateMultiplier:1,reloadMultiplier:1,speedMultiplier:1,ammoMultiplier:1,dashCooldown:0,dashMax:5,dashTime:0,dashDuration:.19,perfectWindow:.13,_perfectUsed:!1,invulnerable:0,pulseCooldown:0,pulseMax:12,pulseRadius:12,pulseDamage:75,shieldRegen:9,shieldDelay:4.5,lastDamage:0,killHeal:0,killShield:0,jumpY:0,jumpVel:0,grounded:!0,slideTime:0,slideCooldown:0,slideDir:null,critChance:.08,critMultiplier:1.75,executeBonus:1,executeThreshold:.35,energy:0,energyMax:100,energyGain:1,overdrive:0,overdriveMax:8,chainBonus:0,chainDamage:1,pickupRadius:1.45,pickupPower:1,dashWave:0,skills:[],skillDmg:1,skillFire:1,skillBuff:0,critProtocol:!1,adaptiveArmor:!1,siphon:!1,nanite:0,adrenaline:!1,thorns:0,medTime:0,medRate:0,aimAssistLevel:0,comboHold:0,weakpointBonus:0,scoreBonus:0},this.weaponState=mt.map(e=>({ammo:e.magazine,reserve:e.reserve})),this.loadout=[0],this.credits=0,this.currentShop=[],this.shopPhase="free",this.weaponIndex=0,this.unlockedWeapon=0,this.weaponCooldown=0,this.reloadTimer=0,this.switchTimer=0,this.score=0,this.kills=0,this.falconKills=0,this.frostKills=0,this.shotsFired=0,this.shotsHit=0,this.combo=1,this.comboTimer=0,this.wave=0,this.currentChapter=-1,this.elapsed=0,this.nextWaveTimer=0,this.spawnTimer=0,this.waveClearPending=!1,this.intermission=!1,this.yaw=0,this.pitch=0,this.appliedUpgrades=[],this.runAchievements=new Set,this.critCount=0,this.comboPeak=1,this.waveDamageTaken=0,this.dashActive=!1,this.aimBlend=0,this.sniperZoom=6,this.scopeLevels=[3,6,10],this.sprintBlend=0,this.slideBlend=0,this.landKick=0,this.hitCombo=0,this.hitComboTimer=0,this.hitStop=0,this.slowmo=0,this.mission=null,this.missionBonus=1,this.shopDiscount=1,this.waveTimeLeft=0,this.fieldEvent=null}clearDynamicObjects(){[...this.enemies,...this.projectiles,...this.pickups,...this.particles,...this.tracers,...this.effects].forEach(t=>{const n=t.group||t.mesh||t.line;n&&this.scene.remove(n)}),this.enemies=[],this.enemyHitMeshes=[],this.xrayState=!1,this.aimTarget=null,this.missStreak=0,this.projectiles=[],this.pickups=[],this.particles=[],this.tracers=[],this.effects=[],this.spawnQueue=[],this.fieldVendor&&(this.fieldVendor.group.removeFromParent(),this.fieldVendor=null);const e=document.getElementById("interact-toast");e&&e.classList.remove("show"),this.obstacles=this.obstacles.filter(t=>!this.barrelBoxes.has(t)),this.barrelMeshes=[],this.barrels.forEach(t=>{t.dead=!1,t.health=t.maxHealth,t.flash=0,t.bodyMaterial&&(t.bodyMaterial.emissiveIntensity=.5),t.group&&!t.group.parent&&this.world.add(t.group),this.barrelMeshes.push(t.mesh),this.obstacles.push(t.box)})}start(e="campaign",t="standard",n=0){this.audio.init(),this.runId=(this.runId||0)+1,this.clearDynamicObjects(),this.resetPlayer();const s=Number.isInteger(n)&&n>=0&&n<mt.length?n:0;this.loadout=[s],this.weaponIndex=s,this.unlockedWeapon=s,this.mode=e,this.difficulty=Yr[t]||Yr.standard,this.waveTimeLeft=e==="gauntlet"?45:0,this.firing=!1,this.aiming=!1,this.touchMove={x:0,y:0},this.state="playing",this.weaponRoot.visible=!0,this.buildWeaponModel(this.weaponIndex),this.camera.position.copy(this.player.position),this.camera.rotation.set(0,0,0),this.callbacks.onState("playing"),this.callbacks.onAnnounce(e==="training"?"模拟训练":"神经链接建立",e==="training"?`敌方伤害已关闭 · 熟悉你的武器 · ${this.difficulty.label}难度`:`准备迎击第一波敌对单位 · ${this.difficulty.label}难度`,"TACTICAL LINK / CONNECTED",2400),this.nextWaveTimer=2.2,this.intermission=!0,this.requestLock(),this.updateHUD(!0),this.isBoard&&this.callbacks.onToast?.("白板课堂模式 // 左下角「移动 / MOVE」圆形摇杆移动 · 右侧滑动瞄准 · 右下 FIRE 开火 · 可开启 AUTO 自动演示",5200)}quit(){this.state="menu",this.firing=!1,this.clearDynamicObjects(),this.weaponRoot.visible=!1,this.callbacks.onState("menu")}pause(){this.state==="playing"&&(this.state="paused",this.firing=!1,document.exitPointerLock?.(),this.callbacks.onBuild?.({difficulty:this.difficulty.label,upgrades:this.appliedUpgrades,damage:Math.round((this.player.damageMultiplier-1)*100),crit:Math.round(this.player.critChance*100),kills:this.kills,wave:this.wave}),this.callbacks.onState("paused"))}resume(){this.state==="paused"&&(this.state="playing",this.callbacks.onState("playing"),this.requestLock(),this.clock.getDelta())}requestLock(){if(!this.isTouch&&this.state==="playing"&&document.pointerLockElement!==this.canvas)try{const e=this.canvas.requestPointerLock?.();e?.catch&&e.catch(()=>{})}catch{}}bindEvents(){window.addEventListener("resize",()=>this.resize()),document.addEventListener("keydown",e=>{if(document.getElementById("modal-backdrop")?.classList.contains("active"))return;this.keys[e.code]=!0,e.code==="KeyR"&&this.reload(),e.code==="KeyQ"&&this.dash(),e.code==="KeyE"&&this.pulse(),e.code==="Space"&&(e.preventDefault?.(),this.jump()),(e.code==="ControlLeft"||e.code==="ControlRight"||e.code==="KeyC")&&this.slide(),e.code==="KeyF"&&this.activateOverdrive();const t=/^Digit([1-6])$/.exec(e.code);if(t){const s=this.loadout[Number(t[1])-1];s!==void 0&&this.switchWeapon(s)}const n=/^Key([ZXVB])$/.exec(e.code);n&&this.activateSkill({Z:0,X:1,V:2,B:3}[n[1]]),e.code==="KeyG"&&this.openFieldShop(),(e.code==="KeyP"||e.code==="Escape"&&!document.pointerLockElement)&&(this.state==="playing"?this.pause():this.state==="paused"&&this.resume()),this.handleCheatInput(e)}),document.addEventListener("keyup",e=>{this.keys[e.code]=!1}),document.addEventListener("mousemove",e=>{if(this.state!=="playing"||!this.isTouch&&document.pointerLockElement!==this.canvas)return;const t=Pt.mouseSensitivity,n=Pt.invertY?-1:1;this.yaw-=e.movementX*.0021*t,this.pitch=At(this.pitch-e.movementY*.0019*t*n,-1.45,1.45)}),this.canvas.addEventListener("mousedown",e=>{this.state==="playing"&&(this.requestLock(),e.button===0&&(this.firing=!0,this.shotThisHold=!1),e.button===2&&(this.aiming=!0))}),document.addEventListener("mouseup",e=>{e.button===0&&(this.firing=!1,this.shotThisHold=!1),e.button===2&&(this.aiming=!1)}),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()),this.canvas.addEventListener("wheel",e=>{if(this.state!=="playing")return;if(this.aiming&&this.currentScopeType==="sniper"){this.cycleScope();return}const t=e.deltaY>0?1:-1,n=this.loadout.length;if(n<2)return;const s=Math.max(0,this.loadout.indexOf(this.weaponIndex));this.switchWeapon(this.loadout[(s+t+n)%n])},{passive:!0}),document.addEventListener("pointerlockchange",()=>{!this.isTouch&&this.state==="playing"&&document.pointerLockElement!==this.canvas&&this.elapsed>.6&&this.pause()}),window.addEventListener("blur",()=>{this.state==="playing"&&!this.isTouch&&this.pause()}),this.bindTouchControls()}bindTouchControls(){const e=(m,p)=>{try{m.setPointerCapture?.(p)}catch{}},t=document.getElementById("move-stick"),n=t.querySelector("i");let s=null;const r=m=>{const p=t.getBoundingClientRect();let b=m.clientX-(p.left+p.width/2),E=m.clientY-(p.top+p.height/2);const x=Math.hypot(b,E),R=p.width*.34;x>R&&(b*=R/x,E*=R/x),n.style.transform=`translate(${b}px, ${E}px)`,this.touchMove={x:b/R,y:E/R}};t.addEventListener("pointerdown",m=>{m.preventDefault(),e(t,m.pointerId),s=m.pointerId,t.classList.add("engaged"),r(m)},{passive:!1}),document.addEventListener("pointermove",m=>{m.pointerId===s&&(m.preventDefault(),r(m))},{passive:!1});const a=m=>{m.pointerId===s&&(s=null,this.touchMove={x:0,y:0},n.style.transform="",t.classList.remove("engaged"))};document.addEventListener("pointerup",a),document.addEventListener("pointercancel",a);const o=document.getElementById("look-zone"),c=new Map;o.addEventListener("pointerdown",m=>{m.preventDefault(),e(o,m.pointerId),c.set(m.pointerId,{x:m.clientX,y:m.clientY})},{passive:!1});const l=()=>({yaw:(this.isBoard?.0026:.0042)*Pt.touchSensitivity,pitch:(this.isBoard?.0024:.0037)*Pt.touchSensitivity,dirY:Pt.invertY?-1:1}),d=(m,p,b=1)=>{const E=l();this.yaw-=m*E.yaw*b,this.pitch=At(this.pitch-p*E.pitch*b*E.dirY,-1.4,1.4)};document.addEventListener("pointermove",m=>{const p=c.get(m.pointerId);!p||this.state!=="playing"||(m.preventDefault(),d(m.clientX-p.x,m.clientY-p.y),c.set(m.pointerId,{x:m.clientX,y:m.clientY}))},{passive:!1});const f=m=>c.delete(m.pointerId);document.addEventListener("pointerup",f),document.addEventListener("pointercancel",f);const h=document.getElementById("mobile-fire"),u=new Map;h.addEventListener("pointerdown",m=>{m.preventDefault(),e(h,m.pointerId),u.set(m.pointerId,{x:m.clientX,y:m.clientY,moved:0}),this.firing=!0,this.shotThisHold=!1,h.classList.add("firing")},{passive:!1}),document.addEventListener("pointermove",m=>{const p=u.get(m.pointerId);if(!p||!Pt.fireLook||this.state!=="playing")return;m.preventDefault();const b=m.clientX-p.x,E=m.clientY-p.y;p.moved+=Math.abs(b)+Math.abs(E),!(p.moved<1.2)&&(d(b,E,Pt.fireLookSensitivity),u.set(m.pointerId,{x:m.clientX,y:m.clientY,moved:0}))},{passive:!1});const g=m=>{u.has(m.pointerId)&&(m.preventDefault(),u.delete(m.pointerId),u.size===0&&(this.firing=!1,this.shotThisHold=!1,h.classList.remove("firing")))};document.addEventListener("pointerup",g),document.addEventListener("pointercancel",g);const v=(m,p)=>{const b=document.getElementById(m);b&&(b.addEventListener("pointerdown",E=>{E.preventDefault(),p()},{passive:!1}),b.addEventListener("contextmenu",E=>E.preventDefault()))};v("mobile-reload",()=>this.reload()),v("mobile-dash",()=>this.dash()),v("mobile-pulse",()=>this.pulse()),v("mobile-switch",()=>{const m=this.loadout.length,p=Math.max(0,this.loadout.indexOf(this.weaponIndex));this.switchWeapon(this.loadout[(p+1)%m])}),v("mobile-jump",()=>this.jump()),v("mobile-slide",()=>this.slide()),v("mobile-overdrive",()=>this.activateOverdrive()),v("mobile-aim",()=>{this.aiming=!this.aiming,document.getElementById("mobile-aim")?.classList.toggle("active",this.aiming)}),v("mobile-scope",()=>this.cycleScope()),v("mobile-cheat",()=>this.toggleCheatConsole()),v("mobile-demo",()=>this.setDemoMode(!this.demoMode))}setDemoMode(e){this.demoMode=!!e,document.getElementById("mobile-demo")?.classList.toggle("active",this.demoMode),this.callbacks.onToast?.(this.demoMode?"课堂演示模式已开启 · 自动锁定并开火":"课堂演示模式已关闭",2200),this.callbacks.onDemo?.(this.demoMode)}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight),this.applyQuality(),this.applyWeaponScale()}startWave(){this.wave+=1,this.intermission=!1,this.waveClearPending=!1,this.waveDamageTaken=0,this.spawnQueue=[],this.assignMission(),this.mode==="gauntlet"&&(this.waveTimeLeft=45);const e=this.mode==="campaign"||this.mode==="gauntlet"?this.difficulty.waves:0;let t=-1;e>0?t=$r.reduce((a,o,c)=>this.wave>=Math.ceil(o.at*e)?c:a,-1):this.mode==="endless"?t=Math.min($r.length-1,Math.floor((this.wave-1)/5)):this.wave===1&&(t=0),t>=0&&t!==this.currentChapter&&(this.currentChapter=t,this.callbacks.onStory?.($r[t])),(this.wave===3||this.wave===6||this.wave===9||this.clearedContent&&this.wave%5===0)&&this.spawnFieldVendor();const n=this.difficulty,s=(this.mode==="campaign"||this.mode==="gauntlet")&&this.wave===this.difficulty.waves,r=this.mode==="endless"&&this.wave%5===0;if(s||r){this.spawnQueue.push("boss");const a=Math.min(10,Math.ceil((2+Math.floor(this.wave/2))*n.spawn)),o=["runner","drone","phantom","bomber","tank","turret","medic"];for(let c=0;c<a;c++)this.spawnQueue.push(o[Math.floor(Math.random()*o.length)]);this.callbacks.onAnnounce("守望者降临","摧毁核心装甲 · 注意范围攻击与自毁单位","WARNING / APEX SIGNAL",3200)}else{const a=this.mode==="training"?Math.min(10,4+this.wave):Math.min(30,4+this.wave*2),o=Math.max(3,Math.round(a*n.spawn))+(this.eliteWave||0);this.eliteWave=0;const c=["runner"];this.wave>=2&&c.push("drone","drone"),this.wave>=3&&c.push("phantom"),this.wave>=4&&c.push("tank","turret"),this.wave>=5&&c.push("bomber","medic"),this.wave>=6&&c.push("falcon","falcon");for(let l=0;l<o;l++)this.spawnQueue.push(c[Math.floor(Math.random()*c.length)]);this.callbacks.onAnnounce(`第 ${String(this.wave).padStart(2,"0")} 波`,this.wave===1?"敌对信号接近 · 清除所有单位":"威胁等级上升 · 保持移动","HOSTILE SIGNALS DETECTED")}if(this.wave>=2&&this.wave%2===0&&this.loadout.length<6){const a=mt.findIndex((o,c)=>!this.loadout.includes(c));a>=0&&this.unlockWeapon(a)}this.spawnTimer=.4,this.audio.wave()}unlockWeapon(e){this.loadout.includes(e)||this.loadout.push(e),this.loadout.sort((t,n)=>t-n),this.unlockedWeapon=Math.max(this.unlockedWeapon,e),this.weaponState[e].ammo=mt[e].magazine,this.weaponState[e].reserve=mt[e].reserve,this.callbacks.onToast(`武器已解锁 // ${mt[e].name} · 按 ${this.loadout.indexOf(e)+1} 切换`,3500)}spawnEnemy(e){const t=Tl[e];let n=this.spawnPoints[Math.floor(Math.random()*this.spawnPoints.length)].clone();for(let P=0;P<6&&n.distanceTo(this.player.position)<20;P++)n=this.spawnPoints[Math.floor(Math.random()*this.spawnPoints.length)].clone();n.x+=xt(-2.5,2.5),n.z+=xt(-2.5,2.5);const s=new at;s.position.copy(n);const r=e==="phantom",a=new Ct({color:e==="boss"?3810332:2372152,emissive:t.color,emissiveIntensity:.8,metalness:.8,roughness:.34,transparent:r,opacity:1}),o=new je({color:t.color,toneMapped:!1,transparent:r,opacity:1}),c=new Ct({color:791576,metalness:.9,roughness:.28,transparent:r,opacity:1}),l=new Ct({color:2833216,emissive:t.color,emissiveIntensity:.16,metalness:.86,roughness:.3,transparent:r,opacity:1}),d=new je({color:16761421,toneMapped:!1,transparent:r,opacity:1}),h=Dm(e,{body:a,dark:c,glow:o,accent:l,warning:d}),u=this.difficulty,g={type:e,group:s,material:a,fadeMaterials:[a,o,c,l,d],health:t.health*(1+Math.max(0,this.wave-1)*(e==="boss"?.12:.085))*u.hp,maxHealth:0,speed:t.speed*(1+Math.min(.45,this.wave*.018)),damage:t.damage*(1+this.wave*.026)*u.damage,score:Math.round(t.score*u.score),radius:t.radius,name:t.name,attackCooldown:xt(.4,1.3),spawnTime:.85,dead:!1,deathTimer:0,strafe:Math.random()>.5?1:-1,phase:Math.random()*Math.PI*2,hitTimer:0,healthBar:null,barFill:null,phased:!1,phaseTimer:xt(1.4,2.8),fuse:0,chargeTimer:0,healTimer:0,slow:0,parts:h.dynamic,height:h.height,baseY:h.baseY,weakpoints:h.weakpoints};g.maxHealth=g.health;const v=P=>{P.userData.enemy=g,P.isMesh&&(P.castShadow=!this.isTouch&&!this.lowPower,this.enemyHitMeshes.push(P)),P.children.forEach(v)};h.allMeshes.forEach(P=>{s.add(P),v(P)});const m=new at,p=e==="boss"?3.2:1.35,b=new Y(new En(p,.085),new je({color:1054744,transparent:!0,opacity:.85,depthTest:!0})),E=new Y(new En(p,.055),new je({color:t.color,depthTest:!0}));E.position.z=.005,m.add(b,E),m.position.y=g.height+.35,m.visible=e==="boss",s.add(m),g.healthBar=m,g.barFill=E,g.barHalf=p/2;const x=new je({color:t.color,transparent:!0,opacity:.46,toneMapped:!1,depthWrite:!1}),R=new Y(new Nn(g.radius*1.2,.026,5,24),x);R.rotation.x=-Math.PI/2,R.position.y=.06;const y=new Y(new Nn(.2+g.height*.15,.016,5,20),x.clone());y.position.y=g.height*.84,y.rotation.x=Math.PI/2.6,s.add(R,y),g.crown=y,g.halo=R,s.scale.setScalar(.02),this.scene.add(s),this.enemies.push(g),this.spawnParticles(n.clone().add(new A(0,1.4,0)),t.color,e==="boss"?35:12,3.5)}updateEnemies(e){const t=new A(this.player.position.x,0,this.player.position.z);this.enemySlow=Math.max(0,this.enemySlow-e);const n=this.enemySlow>0?.35:1;for(const s of this.enemies){if(s.crown&&(s.crown.rotation.z+=e*1.3),s.dead){s.deathTimer-=e,s.group.rotation.z+=e*2.4,s.group.scale.multiplyScalar(Math.max(.01,1-e*5)),s.group.position.y-=e*.8,s.deathTimer<=0&&(this.scene.remove(s.group),s.remove=!0);continue}s.phase+=e,s.hitTimer-=e,s.stun>0&&(s.stun-=e),s.material.emissiveIntensity=s.hitTimer>0?3.2:s.type==="boss"?1:.8,s.group.children.forEach(l=>{l.userData.spin&&(l.rotation.z+=l.userData.spin*e)});const r=s.parts;if(r&&(r.legs?.forEach((l,d)=>{l.rotation.x=Math.sin(s.phase*7+(d%2?Math.PI:0))*.34}),r.rotors?.forEach((l,d)=>{l.rotation.y+=e*(5+d*1.5)}),r.rings?.forEach((l,d)=>{l.userData.spin||(l.rotation.z+=e*(d%2?-.55:.55))}),r.shards?.forEach((l,d)=>{const f=l.userData.angle+s.phase*.65;l.position.x=Math.cos(f)*.85,l.position.z=Math.sin(f)*.55,l.position.y=l.userData.baseY+Math.sin(s.phase*2+d)*.12,l.rotation.y+=e*1.6}),r.wings?.forEach((l,d)=>{l.rotation.z=Math.sin(s.phase*5+d)*.22}),r.turrets?.forEach(l=>{l.rotation.y=Math.sin(s.phase*.8)*.32}),r.core&&r.core.scale.setScalar(1+Math.sin(s.phase*4.5)*.09)),s.spawnTime>0){s.spawnTime-=e;const l=At(1-s.spawnTime/.85,.02,1);s.group.scale.setScalar(l);continue}if(s.group.scale.setScalar(1),s.type==="phantom"&&(s.phaseTimer-=e,s.phaseTimer<=0&&(s.phased=!s.phased,s.phaseTimer=s.phased?1.05:2.5,s.fadeMaterials.forEach(l=>{l.opacity=s.phased?.16:1}),this.spawnParticles(s.group.position.clone().add(new A(0,1.2,0)),6087167,this.isTouch?4:9,2))),s.type==="bomber"&&s.fuse>0&&(s.fuse-=e,s.material.emissiveIntensity=1.4+Math.sin(s.phase*36)*1.4,Math.random()>.65&&this.spawnParticles(s.group.position.clone().add(new A(0,1.1,0)),16761421,2,1.4),s.fuse<=0)){this.detonateBomber(s);continue}const a=t.clone().sub(new A(s.group.position.x,0,s.group.position.z)),o=a.length();a.normalize(),s.group.rotation.y=Math.atan2(a.x,a.z)+Math.PI,s.attackCooldown-=e;let c=new A;if(s.type==="runner"||s.type==="phantom"||s.type==="falcon")o>1.45&&c.copy(a),o<1.85&&s.attackCooldown<=0&&(this.damagePlayer(s.damage,s.group.position),s.attackCooldown=s.type==="phantom"?.85:s.type==="falcon"?1.1:1,s.group.position.addScaledVector(a,.3));else if(s.type==="bomber")s.fuse<=0&&(o>2.7?c.copy(a):(s.fuse=1.2,this.audio.warning(),this.createPulseEffect(s.group.position.clone(),16757575,4.5)));else if(s.type==="turret")s.chargeTimer>0?(s.chargeTimer-=e,s.material.emissiveIntensity=2+Math.sin(s.phase*30)*1.4,s.chargeTimer<=0&&([-.05,.05].forEach(l=>this.fireEnemyProjectile(s,l,24,s.damage)),s.attackCooldown=2.4,this.audio.enemyShot())):o<46&&s.attackCooldown<=0&&(s.chargeTimer=.65);else if(s.type==="medic"){s.healTimer-=e;const l=15;o>l+4?c.copy(a):o<l-4&&c.copy(a).multiplyScalar(-.7);const d=new A(-a.z,0,a.x).multiplyScalar(s.strafe*.5);if(c.add(d),s.healTimer<=0){let f=null,h=6;for(const u of this.enemies){if(u===s||u.dead||u.type==="medic"||u.spawnTime>0||u.group.position.distanceTo(s.group.position)>11)continue;const g=u.maxHealth-u.health;u.health>u.maxHealth*.7||g>h&&(h=g,f=u)}if(f){if(f.health=Math.min(f.maxHealth,f.health+14),f.barFill&&f.healthBar.visible){const u=At(f.health/f.maxHealth,0,1);f.barFill.scale.x=u,f.barFill.position.x=-(1-u)*(f.barHalf||.6)}this.createHealBeam(s.group.position.clone().add(new A(0,1.4,0)),f.group.position.clone().add(new A(0,(f.height||2)*.55,0))),s.healTimer=.9}}}else{const l=s.type==="drone"?13:s.type==="tank"?17:20;o>l+3?c.copy(a):o<l-3&&c.copy(a).multiplyScalar(-.7);const d=new A(-a.z,0,a.x).multiplyScalar(s.strafe*(s.type==="boss"?.45:.75));if(c.add(d),o<(s.type==="boss"?48:36)&&s.attackCooldown<=0)if(s.type==="boss"){const f=s.health<s.maxHealth*.5;f&&!s.enragedSpawned&&(s.enragedSpawned=!0,this.spawnEnemy("medic"),this.spawnEnemy("medic"),this.callbacks.onAnnounce("核心过载","守望者召唤维生单元支援","WARNING / REINFORCEMENTS",2200));for(let h=-2;h<=2;h++)this.fireEnemyProjectile(s,h*.105,17,s.damage);if(f||Math.random()>.45)for(let h=0;h<10;h++)this.fireEnemyProjectile(s,h/10*Math.PI*2,10,s.damage*.65,!0);s.attackCooldown=f?1.35:2.1}else s.type==="tank"?([-.08,0,.08].forEach(f=>this.fireEnemyProjectile(s,f,13,s.damage)),s.attackCooldown=2.25):(this.fireEnemyProjectile(s,xt(-.035,.035),16,s.damage),s.attackCooldown=xt(1.3,1.8))}if(s.stun>0)s.velocity&&s.velocity.multiplyScalar(.6);else if(c.lengthSq()>0){const l=s.slow>0?s.slowMul||.5:1;c.normalize().multiplyScalar(s.speed*l*e*n),this.moveEnemy(s,c),s.velocity||(s.velocity=new A),s.velocity.copy(c).multiplyScalar(1/Math.max(e,.001))}else s.velocity&&s.velocity.multiplyScalar(.8);s.slow>0&&(s.slow-=e,s.material.emissiveIntensity=Math.max(s.material.emissiveIntensity||0,1.1)),s.baseY&&(s.group.position.y=s.baseY+Math.sin(s.phase*2.1)*.18),s.healthBar.quaternion.copy(this.camera.quaternion)}this.enemies=this.enemies.filter(s=>!s.remove)}detonateBomber(e){const t=e.group.position.clone();e.dead=!0,e.deathTimer=.02,e.healthBar.visible=!1,this.enemyHitMeshes=this.enemyHitMeshes.filter(s=>s.userData.enemy!==e),this.spawnParticles(t.clone().add(new A(0,1,0)),16757575,this.isTouch?14:28,6),this.createPulseEffect(t,16752957,6),this.audio.explosion(),this.shake=Math.min(1.3,this.shake+.45);const n=t.distanceTo(this.player.position);n<5.5&&this.damagePlayer(e.damage*(1-n/5.5*.55),t)}addEnergy(e){const t=this.player;t.overdrive>0||(t.energy=Math.min(t.energyMax,t.energy+e*t.energyGain))}activateOverdrive(){const e=this.player;this.state!=="playing"||e.energy<e.energyMax||e.overdrive>0||(e.energy=0,e.overdrive=e.overdriveMax,e.pulseCooldown=Math.min(e.pulseCooldown,2),this.audio.overdrive(),this.createPulseEffect(e.position.clone(),16766044,15),this.callbacks.onAnnounce("核心超载","射速与伤害大幅提升 · 弹药无限","OVERDRIVE / ENGAGED",2200),this.unlockAchievement("overdrive"))}unlockAchievement(e){if(this.runAchievements.has(e))return;this.runAchievements.add(e);const t=Js.find(n=>n.id===e);t&&(this.audio.achievement(),this.callbacks.onAchievement?.(t))}emitDashWave(){const e=this.player;if(e.dashWave<=0)return;const t=e.position.clone();this.createPulseEffect(t,5568466,5.5),this.audio.pulse();for(const n of this.enemies)n.dead||n.phased||n.group.position.distanceTo(t)<5.5&&this.blastReaches(t,n)&&this.damageEnemy(n,e.dashWave*e.damageMultiplier,n.group.position.clone().sub(t).setY(0).normalize());for(const n of this.barrels)!n.dead&&n.group.position.distanceTo(t)<5.5&&this.damageBarrel(n,60,new A)}castAoe(e,t,n,s,r=0){const a=this.player;this.createPulseEffect(e.clone(),s,t),this.audio.pulse();for(const o of this.enemies)o.dead||o.phased||o.spawnTime>0||o.group.position.distanceTo(e)<=t&&this.blastReaches(e,o)&&(this.damageEnemy(o,n*a.damageMultiplier,o.group.position.clone().sub(e).setY(0).normalize()),r>0&&(o.stun=Math.max(o.stun||0,r)))}activateSkill(e){if(this.state!=="playing")return;const t=this.player.skills[e];if(!t||t.cooldown>0){this.audio.empty?.();return}const n=$m[t.id];n&&(n(this),t.cooldown=t.max,this.audio.upgrade())}moveEnemy(e,t){const n=e.group.position,s=At(n.x+t.x,-65,65);this.collides(s,n.z,e.radius*.7)?e.strafe*=-1:n.x=s;const r=At(n.z+t.z,-65,65);this.collides(n.x,r,e.radius*.7)?e.strafe*=-1:n.z=r}fireEnemyProjectile(e,t,n,s,r=!1){const a=e.group.position.clone().add(new A(0,e.type==="boss"?3.1:e.type==="drone"?1.85:1.6,0));let o;r?o=new A(Math.sin(t),0,Math.cos(t)):(o=this.player.position.clone().sub(a).normalize(),o.applyAxisAngle(new A(0,1,0),t));const c=new je({color:e.type==="drone"?12872703:16738381,toneMapped:!1}),l=new Y(this.sharedProjectileGeometry,c);l.scale.setScalar(e.type==="boss"?1.8:1),l.position.copy(a),this.scene.add(l),this.projectiles.push({mesh:l,velocity:o.multiplyScalar(n),damage:s,life:5,source:e.group.position}),this.audio.enemyShot()}updateProjectiles(e){for(const t of this.projectiles){if(t.life-=e,t.homing){let a=null,o=46;for(const h of this.enemies){if(h.dead||h.phased||h.spawnTime>0)continue;const u=h.group.position.distanceTo(t.mesh.position);u<o&&(o=u,a=h)}if(a){const h=a.group.position.clone().add(new A(0,(a.height||2)*.5,0)).sub(t.mesh.position).normalize().multiplyScalar(t.velocity.length());t.velocity.lerp(h,Math.min(1,e*3.4))}const c=t.mesh.position.clone();t.mesh.position.addScaledVector(t.velocity,e),t.mesh.rotation.x+=e*14;const l=this.segmentBlocked(c,t.mesh.position);l&&t.mesh.position.copy(c);let d=null;for(const h of this.enemies)if(!(h.dead||h.phased)&&h.group.position.distanceTo(t.mesh.position)<h.radius+.9){d=h;break}const f=l||this.collides(t.mesh.position.x,t.mesh.position.z,.2)||Math.abs(t.mesh.position.x)>70||Math.abs(t.mesh.position.z)>70;(d||f||t.life<=0)&&(this.explodeRocket(t),t.life=0),t.life<=0&&(this.scene.remove(t.mesh),t.remove=!0);continue}const n=t.mesh.position.clone();t.mesh.position.addScaledVector(t.velocity,e),t.mesh.rotation.x+=e*8;const s=t.mesh.position,r=this.segmentBlocked(n,s);r&&(s.copy(n),t.life=0),!r&&s.distanceTo(this.player.position)<.65&&(this.damagePlayer(t.damage,t.source),t.life=0),(this.collides(s.x,s.z,.05)||Math.abs(s.x)>70||Math.abs(s.z)>70)&&(t.life=0),t.life<=0&&(this.spawnParticles(s,16737877,4,1.5),this.scene.remove(t.mesh),t.remove=!0)}this.projectiles=this.projectiles.filter(t=>!t.remove)}updatePlayer(e){const t=this.player;t.dashCooldown=Math.max(0,t.dashCooldown-e),t.pulseCooldown=Math.max(0,t.pulseCooldown-e),t.invulnerable=Math.max(0,t.invulnerable-e),t.overdrive=Math.max(0,t.overdrive-e);for(const F of t.skills)F.cooldown=Math.max(0,F.cooldown-e);t.nanite>0&&(t.health=Math.min(t.maxHealth,t.health+t.nanite*e)),t.medTime>0&&(t.medTime-=e,t.health=Math.min(t.maxHealth,t.health+t.medRate*e)),t.skillBuff>0&&(t.skillBuff-=e,t.skillBuff<=0&&(t.skillDmg=1,t.skillFire=1)),t.lastDamage+=e,t.lastDamage>t.shieldDelay&&t.shield<t.maxShield&&(t.shield=Math.min(t.maxShield,t.shield+t.shieldRegen*e)),this.weaponCooldown=Math.max(0,this.weaponCooldown-e),this.switchTimer=Math.max(0,this.switchTimer-e),this.muzzleTimer=Math.max(0,this.muzzleTimer-e),this.muzzleLight.intensity=this.muzzleTimer>0?5:0,this.reloadTimer>0&&(this.reloadTimer-=e,this.reloadTimer<=0&&this.finishReload());const n=(this.keys.KeyW?1:0)-(this.keys.KeyS?1:0)-(this.touchMove?.y||0),s=(this.keys.KeyD?1:0)-(this.keys.KeyA?1:0)+(this.touchMove?.x||0),r=new A(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),a=new A(Math.cos(this.yaw),0,-Math.sin(this.yaw)),o=r.multiplyScalar(n).add(a.multiplyScalar(s));o.lengthSq()>1&&o.normalize();const c=(this.keys.ShiftLeft||this.keys.ShiftRight)&&n>0,l=t;l.grounded||(l.jumpVel-=21*e,l.jumpY+=l.jumpVel*e,l.jumpY<=0&&(l.jumpY=0,l.jumpVel=0,l.grounded=!0,this.landKick=.45)),this.landKick=Math.max(0,this.landKick-e*2.2),l.slideTime>0&&(l.slideTime-=e),l.slideCooldown=Math.max(0,l.slideCooldown-e);const d=l.slideTime>0;this.sprintBlend=Rt(this.sprintBlend,c?1:0,1-Math.exp(-e*8)),this.slideBlend=Rt(this.slideBlend,d?1:0,1-Math.exp(-e*12)),this.aimBlend=Rt(this.aimBlend,this.aiming?1:0,1-Math.exp(-e*11)),this.hitComboTimer>0&&(this.hitComboTimer-=e,this.hitComboTimer<=0&&(this.hitCombo=0));let f=6.6*t.speedMultiplier*(1+this.sprintBlend*.5)*(1-this.aimBlend*.28)*(t.overdrive>0?1.2:1)*(d?1.35:1);d&&l.slideDir&&o.copy(l.slideDir),t.dashTime>0&&(t.dashTime-=e,f=25,o.lengthSq()===0&&o.copy(new A(-Math.sin(this.yaw),0,-Math.cos(this.yaw))),Math.random()>.4&&this.spawnParticles(t.position.clone().add(new A(0,-.7,0)),5568466,1,.7)),this.dashActive&&t.dashTime<=0&&this.emitDashWave(),this.dashActive=t.dashTime>0;const h=o.multiplyScalar(f);t.velocity.lerp(h,1-Math.exp(-e*(t.dashTime>0?25:12))),this.movePlayer(t.velocity.x*e,t.velocity.z*e);const u=t.velocity.length()>.4,g=u?Math.sin(this.elapsed*(c?14:10))*(.025+this.sprintBlend*.02)*(1-this.slideBlend*.6):0,v=1.7+l.jumpY-this.slideBlend*.72-this.landKick*.12;if(this.camera.position.set(t.position.x,v+g,t.position.z),this.shake>0){this.shake=Math.max(0,this.shake-e*2.5);const F=.08*Vm();this.camera.position.x+=xt(-1,1)*this.shake*F,this.camera.position.y+=xt(-1,1)*this.shake*F}this.updateAimAssist(e),this.camera.rotation.set(this.pitch,this.yaw,0);const m=72+this.sprintBlend*6+this.slideBlend*8,p=this.currentScopeType==="sniper"?this.sniperZoom:this.currentScopeType==="scope5"?5:this.currentScopeType==="scope3"?3:1.25,b=Rt(m,Math.max(16,m/p),this.aimBlend);this.camera.fov=Rt(this.camera.fov,b,1-Math.exp(-e*10)),this.camera.updateProjectionMatrix(),this.weaponRecoil=Rt(this.weaponRecoil,0,1-Math.exp(-e*13)),this.updateWeaponParts(e),this.isBoard&&this.weaponState[this.weaponIndex].ammo===0&&!t.overdrive&&this.reloadTimer<=0&&this.reload(),this.updateDemoAim(e);const E=this.isTouch&&innerHeight>innerWidth,x=Rt(E?.17:.36,0,this.aimBlend),R=Rt(E?-.28:-.31,-.2,this.aimBlend),y=this.elapsed*(6+this.sprintBlend*3),P=u?Math.sin(y)*(.012+this.sprintBlend*.024)*(1-this.aimBlend):0,L=u?Math.abs(Math.cos(y))*(.008+this.sprintBlend*.02)*(1-this.aimBlend):0,M=this.sprintBlend*.11*(1-this.aimBlend),T=this.slideBlend*.16;this.weaponRoot.position.x=Rt(this.weaponRoot.position.x,x+P,1-Math.exp(-e*12)),this.weaponRoot.position.y=Rt(this.weaponRoot.position.y,R+g*.6-M-T+L,1-Math.exp(-e*12)),this.weaponRoot.position.z=-.62+this.weaponRecoil*.13+this.aimBlend*.08,this.weaponRoot.rotation.x=this.weaponRecoil*.1+(this.reloadTimer>0?Math.sin(this.reloadTimer*4)*.35:0)+this.sprintBlend*.2*(1-this.aimBlend)+this.slideBlend*.3,this.weaponRoot.rotation.y=this.slideBlend*.12,this.weaponRoot.rotation.z=(u?Math.sin(this.elapsed*5)*.012:0)+this.sprintBlend*.05+this.slideBlend*.16;const I=document.getElementById("red-dot");I&&(I.style.opacity=String(this.aimBlend)),this.viewHands&&(this.viewHands.position.y=Rt(this.viewHands.position.y,-this.slideBlend*.1-this.sprintBlend*.04,1-Math.exp(-e*10))),this.firing&&(mt[this.weaponIndex].auto||this.cheats.auto||!this.shotThisHold)&&this.fireWeapon(),this.comboTimer>0?this.comboTimer-=e:this.combo=Rt(this.combo,1,e*3)}pickDemoTarget(e){let t=null,n=1/0;const s=new A;for(const r of this.enemies){if(r.dead||r.phased||(this.getAimPoint(r,s),!this.hasLineOfSight(e,s)))continue;const a=s.distanceTo(e);a<n&&(n=a,t=s.clone())}return t}updateDemoAim(e){if(!this.demoMode||this.state!=="playing")return;const t=this.camera.getWorldPosition(new A),n=this.pickDemoTarget(t);if(!n){this.firing=!1;return}const s=n.x-t.x,r=n.z-t.z;let o=Math.atan2(-s,-r)-this.yaw;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;this.yaw+=o*Math.min(1,e*3.4);const c=Math.hypot(s,r);this.pitch=Rt(this.pitch,Math.atan2(n.y-t.y,c),Math.min(1,e*3)),this.firing=!0}handleCheatInput(e){if(e.code==="Backquote"){e.preventDefault?.(),this.toggleCheatConsole();return}const t=e.key;if(t&&t.length===1&&/[a-zA-Z]/.test(t)){this.cheatBuffer=(this.cheatBuffer+t.toLowerCase()).slice(-26);for(const n in El)if(this.cheatBuffer.endsWith(n)){this.applyCheat(n),this.cheatBuffer="";break}}this.konami.push(e.code),this.konami.length>12&&this.konami.shift(),this.konami.slice(-bl.length).join(",")===bl.join(",")&&(this.konami=[],this.toggleCheatConsole(!0),this.cheatToast("作弊码清单已展开 // ↑↑↓↓←→←→BA 或输入 HELP"))}markCheated(){this.cheated=!0,this.refreshCheatBadge()}applyCheat(e){const t=El[e];if(!t)return;if(t==="help"){this.toggleCheatConsole(!0),this.cheatToast(Kn.help);return}if(t==="purge"){this.cheatPurge(),this.cheatToast(Kn.purge+" 已执行"),this.markCheated();return}if(t==="arsenal"){this.loadout=mt.map((s,r)=>r),this.unlockedWeapon=mt.length-1,this.updateHUD(!0),this.cheatToast(Kn.arsenal),this.markCheated();return}if(t==="recharge"){this.cheatRecharge(),this.cheatToast(Kn.recharge),this.markCheated();return}if(t==="overbound"){Object.keys(this.cheats).forEach(s=>{this.cheats[s]=!0}),this.cheatToast(Kn.overbound),this.refreshCheatBadge(),this.refreshCheatButtons(),this.markCheated();return}if(t==="standdown"){Object.keys(this.cheats).forEach(s=>{this.cheats[s]=!1}),this.firing=!1,this.aimTarget=null,this.updateLockReticle(null),this.cheatToast(Kn.standdown),this.refreshCheatBadge(),this.refreshCheatButtons();return}const n=this.cheats[t];this.cheats[t]=!n,t==="auto"&&n&&(this.firing=!1),t==="lock"&&n&&(this.aimTarget=null,this.updateLockReticle(null)),this.cheats[t]&&this.markCheated(),this.cheatToast((this.cheats[t]?"已激活 // ":"已解除 // ")+Kn[t]),this.refreshCheatBadge(),this.refreshCheatButtons()}getAimPoint(e,t=new A){const n=e.weakpoints&&e.weakpoints[0];if(n&&e.spawnTime<=0&&e.group.scale.x>.9)return n.updateWorldMatrix(!0,!1),n.getWorldPosition(t);const s=e.height||2.2,r=e.baseY||0,a=e.group.position;return t.set(a.x,a.y+Math.max(r+.45,s*.7),a.z)}hasLineOfSight(e,t,n=.4){const s=t.clone().sub(e),r=s.length();return r<=n?!0:(s.normalize(),this.losRay.set(e,s),this.losRay.far=r-n,this.losRay.intersectObjects(this.worldColliders,!1).length===0)}blastReaches(e,t){const n=e.clone();return n.y=Math.max(.9,n.y+.6),this.hasLineOfSight(n,this.getAimPoint(t),.9)}segmentBlocked(e,t,n=.12){const s=t.clone().sub(e),r=s.length();return r<=n?!1:(s.normalize(),this.losRay.set(e,s),this.losRay.far=r,this.losRay.intersectObjects(this.worldColliders,!1).length>0)}findTolerantHit(e,t,n){let s=null,r=1/0;const a=new A,o=new A;for(const c of this.enemies){if(c.dead||c.phased||c.spawnTime>0)continue;this.getAimPoint(c,a),o.copy(a).sub(e);const l=o.dot(t);if(l<=0||l>n)continue;const d=o.addScaledVector(t,-l).length(),f=(c.radius||.6)*.45+.07;d>f||this.hasLineOfSight(e,a)&&l<r&&(r=l,s=c)}return s}applyXray(){const e=!!this.cheats.wall;if(this.xrayState!==e){this.xrayState=e;for(const t of this.enemies)t.fadeMaterials.forEach(n=>{n.depthTest=!e,n.needsUpdate=!0}),t.healthBar&&(t.healthBar.children.forEach(n=>{n.material.depthTest=!e,n.material.needsUpdate=!0}),t.healthBar.renderOrder=e?999:0)}for(const t of this.enemies)t.dead||!t.healthBar||(t.healthBar.visible=e||t.health<t.maxHealth)}updateAimAssist(e){const t=this.player.aimAssistLevel,n=wl();if(!t||n<=0||this.cheats.lock||this.cheats.auto||this.demoMode)return;const s=this.camera.getWorldPosition(new A),r=this.camera.getWorldDirection(new A),a=$i.degToRad(10+3*(t-1))*n,o=(34+6*(t-1))*(.5+n*.5);let c=null,l=1/0;const d=new A;for(const x of this.enemies){if(x.dead||x.phased||x.spawnTime>0||(this.getAimPoint(x,d),!this.hasLineOfSight(s,d)))continue;const R=d.clone().sub(s);if(R.length()>o)continue;R.normalize();const P=Math.acos(At(r.dot(R),-1,1));P<a&&P<l&&(l=P,c=d.clone())}if(!c)return;const f=c.x-s.x,h=c.y-s.y,u=c.z-s.z,g=Math.atan2(-f,-u),v=Math.atan2(h,Math.hypot(f,u));let m=g-this.yaw;for(;m>Math.PI;)m-=Math.PI*2;for(;m<-Math.PI;)m+=Math.PI*2;const p=v-this.pitch,b=1-Math.exp(-e*6),E=$i.degToRad(14)*e;this.yaw+=At(m*b,-E,E),this.pitch+=At(p*b,-E,E)}updateCheats(e){const t=this.cheats;if(this.applyXray(),t.lock||t.auto){const n=this.camera.getWorldPosition(new A),s=this.camera.getWorldDirection(new A),r=this.pickCheatTarget(n,s);if(this.aimTarget=r,r){const a=this.getAimPoint(r),o=a.x-n.x,c=a.y-n.y,l=a.z-n.z;let f=Math.atan2(-o,-l)-this.yaw;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;const h=Math.abs(f),u=9+Math.min(12,h*4);this.yaw+=f*(1-Math.exp(-e*u));const g=Math.hypot(o,l),m=Math.atan2(c,g)-this.pitch,p=9+Math.min(12,Math.abs(m)*4);if(this.pitch+=m*(1-Math.exp(-e*p)),this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.updateMatrixWorld(!0),t.auto){const b=this.camera.getWorldDirection(new A),E=a.clone().sub(n).normalize(),x=Math.acos(At(b.dot(E),-1,1))<$i.degToRad(3);this.firing=x&&this.hasLineOfSight(n,a)}}else t.auto&&(this.firing=!1);this.updateLockReticle(r)}else this.aimTarget=null,this.updateLockReticle(null);if(this.cheatToastTimer>0&&(this.cheatToastTimer-=e,this.cheatToastTimer<=0)){const n=document.getElementById("cheat-toast");n&&n.classList.remove("show")}}pickCheatTarget(e,t=null){const n=[],s=t?t.clone().normalize():null;for(const a of this.enemies){if(a.dead||a.phased)continue;const o=this.getAimPoint(a),c=o.distanceTo(e);if(c>95||!this.hasLineOfSight(e,o))continue;let l=0;if(s){const u=o.clone().sub(e).normalize();l=Math.acos(At(s.dot(u),-1,1))}const d=l<Math.PI*.5,f=a.health/a.maxHealth,h=l*6+c*.12+(a.spawnTime>0?6:0)-(1-f)*5+(d?0:40);n.push({enemy:a,dist:c,score:h})}if(!n.length)return null;n.sort((a,o)=>a.score-o.score);const r=this.aimTarget;if(r&&!r.dead&&!r.phased){const a=n.find(o=>o.enemy===r);if(a&&a.score<=n[0].score+5)return r}return n[0].enemy}updateLockReticle(e){const t=document.getElementById("lock-reticle");if(!t)return;if(!e){t.classList.remove("show");return}const n=this.getAimPoint(e).project(this.camera);if(n.z>1){t.classList.remove("show");return}t.style.left=`${(n.x*.5+.5)*innerWidth}px`,t.style.top=`${(-n.y*.5+.5)*innerHeight}px`,t.classList.add("show")}cheatPurge(){for(const e of this.enemies)e.dead||this.damageEnemy(e,99999,new A(0,1,0),{critical:!0,critRoll:!0});this.spawnParticles(this.camera.getWorldPosition(new A),16731501,26,5),this.audio.explosion(),this.shake=Math.min(1.3,this.shake+.5)}cheatRecharge(){this.player.health=this.player.maxHealth,this.player.shield=this.player.maxShield,this.player.energy=this.player.energyMax;for(let e=0;e<mt.length;e++)this.weaponState[e].ammo=mt[e].magazine,this.weaponState[e].reserve=mt[e].reserve;this.updateHUD(!0)}refreshCheatBadge(){const e=document.getElementById("cheat-badge");if(!e)return;const t=Object.keys(this.cheats).filter(s=>this.cheats[s]);if(t.length===0){e.classList.remove("show");return}const n=this.cheated?' <em class="unranked">非正规对局 // UNRANKED</em>':"";e.innerHTML="<b>越界协议 // OVERBOUND</b>"+n+t.map(s=>`<span>${Gm[s]}</span>`).join(""),e.classList.add("show")}toggleCheatConsole(e){const t=document.getElementById("cheat-console");if(!t)return;const n=e!==void 0?e:!t.classList.contains("active");t.classList.toggle("active",n),n&&this.refreshCheatButtons()}refreshCheatButtons(){const e=document.getElementById("cheat-buttons");e&&e.querySelectorAll("[data-cheat-key]").forEach(t=>{const n=t.dataset.cheatKey;t.classList.toggle("active",!!this.cheats[n])})}cheatToast(e){this.cheatToastTimer=2.4;const t=document.getElementById("cheat-toast");t&&(t.textContent=e,t.classList.add("show"))}movePlayer(e,t){const n=this.player.position,s=At(n.x+e,-66.5,66.5);this.collides(s,n.z,.48)||(n.x=s);const r=At(n.z+t,-66.5,66.5);this.collides(n.x,r,.48)||(n.z=r)}collides(e,t,n){return this.obstacles.some(s=>e+n>s.minX&&e-n<s.maxX&&t+n>s.minZ&&t-n<s.maxZ)}fireWeapon(){if(this.state!=="playing"||this.weaponCooldown>0||this.reloadTimer>0||this.switchTimer>0||this.player.dashTime>0)return;const e=mt[this.weaponIndex],t=this.weaponState[this.weaponIndex],n=this.player,s=n.overdrive>0,r=this.camera.getWorldPosition(new A),a=this.camera.getWorldDirection(new A),o=s||this.cheats.ammo;if(t.ammo<=0&&!o){this.audio.empty(),this.weaponCooldown=.25,this.shotThisHold=!0,this.reload();return}o||(t.ammo-=1),this.shotsFired+=1,this.shotThisHold=!0;let c=n.fireRateMultiplier*(s?1.6:1);if(n.adrenaline&&n.health<n.maxHealth*.4&&(c*=1.3),this.weaponCooldown=1/(e.fireRate*c*n.skillFire),this.weaponRecoil=Math.min(1.5,this.weaponRecoil+(e.id==="shotgun"?1:e.id==="rail"?1.25:e.id==="arc"?.45:.32)),this.pitch=At(this.pitch+(e.id==="shotgun"?.025:e.id==="rail"?.018:.004),-1.45,1.45),e.rocket){this.audio.shot("rocket"),this.fireRocket(a,e.damage*this.player.damageMultiplier*(s?1.5:1));return}if(this.muzzleTimer=.055,this.audio.shot(e.id),this.isTouch){const f=this.getAimAssist(r,a);f&&a.copy(f)}else if(this.player.aimAssistLevel>0){const f=this.getAimAssist(r,a,this.player.aimAssistLevel);f&&a.copy(f)}let l=!1,d=!1;for(let f=0;f<e.pellets;f++){const h=a.clone(),u=e.spread*(this.aiming?.45:1);h.x+=xt(-u,u),h.y+=xt(-u,u),h.z+=xt(-u,u),h.normalize(),this.raycaster.set(r,h),this.raycaster.far=e.range;const g=this.raycaster.intersectObjects(this.worldColliders,!1),v=g.length?g[0].distance:e.range;let m=this.raycaster.intersectObjects(this.enemyHitMeshes,!1).filter(R=>{const y=R.object.userData.enemy;return y&&!y.dead&&!y.phased&&R.distance<v});if(!m.length&&!e.rocket){const R=this.findTolerantHit(r,h,v);if(R){const y=this.getAimPoint(R).clone();m=[{object:{userData:{enemy:R,critical:!!R.weakpoints?.length}},point:y,distance:r.distanceTo(y),tolerant:!0}]}}const p=this.raycaster.intersectObjects(this.barrelMeshes,!1).filter(R=>{const y=R.object.userData.barrel;return y&&!y.dead&&R.distance<v}),b=m.length?m[0].distance:1/0,E=p.length?p[0].distance:1/0;let x=r.clone().addScaledVector(h,v);if(g.length&&(x=g[0].point),E<v&&E<=b)x=p[0].point,this.damageBarrel(p[0].object.userData.barrel,e.damage*this.player.damageMultiplier*(s?1.5:1),h),this.spawnParticles(x,16753226,3,1.3);else if(m.length){l=!0;const R=[];for(const y of m){const P=y.object.userData.enemy;if(R.includes(P))continue;R.push(P);const L=y.object.userData.critical;let M=Math.random()<n.critChance+(e.critBonus||0);n.critProtocol&&this.shotsFired>0&&this.shotsFired%7===0&&(M=!0);const T=e.damage*n.damageMultiplier*(s?1.5:1)*n.skillDmg*(L?1.65*(1+(n.weakpointBonus||0)):1)*(M?n.critMultiplier:1);this.mission?.id==="headshot"&&y.object.userData.critical&&this.addMissionProgress();const I=this.damageEnemy(P,T,h,{critical:!!(L||M),critRoll:M});if(e.chain&&this.chainLightning(P,y.point,T,e.chain+n.chainBonus,new Set(R)),e.frost&&(P.slow=Math.max(P.slow||0,e.slowDuration*(n.frostDuration||1)),P.slowMul=Math.max(.2,e.slowStrength*(n.frostSlow||1)),this.spawnParticles(y.point,10479871,5,1.6)),d=d||I,!e.pierce){x=y.point;break}}this.spawnParticles(x,9437168,e.id==="rail"?10:4,2.2)}else g.length&&this.spawnParticles(x,7055e3,3,1.3);(f===0||e.id==="shotgun")&&this.createTracer(r,x,e.id==="rail"?7523071:e.id==="shotgun"?16757860:e.id==="arc"?8251647:7471067,e.id==="rail"?.22:.07)}l?(this.missStreak=0,this.shotsHit+=1,this.addEnergy(1.4),this.audio.hit(),this.callbacks.onHit(d)):this.missStreak=Math.min(9,this.missStreak+1)}fireRocket(e,t){const n=this.camera.getWorldPosition(new A).addScaledVector(e,1),s=new Y(this.sharedProjectileGeometry,new je({color:16747069,toneMapped:!1}));s.scale.setScalar(1.9),s.position.copy(n),this.scene.add(s),this.projectiles.push({mesh:s,velocity:e.clone().multiplyScalar(36),damage:t,aoe:mt[4].aoe,life:4.5,homing:!0,rocket:!0,source:n.clone()})}explodeRocket(e){const t=e.mesh.position.clone();this.scene.remove(e.mesh);const n=e.aoe;this.spawnParticles(t,16742973,this.isTouch?16:30,6),this.createPulseEffect(t,16747069,n),this.audio.explosion(),this.shake=Math.min(1.3,this.shake+.4);let s=0;for(const r of this.enemies){if(r.dead||r.phased)continue;const a=r.group.position.distanceTo(t);a<n+r.radius&&this.blastReaches(t,r)&&this.damageEnemy(r,e.damage*(1-a/(n+r.radius)*.4),t.clone().sub(r.group.position).setY(0).normalize())&&(s+=1)}for(const r of this.barrels)!r.dead&&r.group.position.distanceTo(t)<n+1&&this.damageBarrel(r,999,new A);s>0&&this.unlockAchievement("hive")}damageBarrel(e,t,n){if(!e.dead){if(e.health-=t,e.health<=0){this.explodeBarrel(e);return}e.flash=.12,e.bodyMaterial&&(e.bodyMaterial.emissiveIntensity=2.4)}}explodeBarrel(e){if(e.dead)return;e.dead=!0;const t=e.group.position.clone();e.group.removeFromParent(),this.barrelMeshes=this.barrelMeshes.filter(r=>r.userData.barrel!==e),this.obstacles=this.obstacles.filter(r=>r!==e.box),this.spawnParticles(t.clone().add(new A(0,.8,0)),16753226,this.isTouch?18:34,7),this.createPulseEffect(t,16742973,6),this.audio.explosion(),this.shake=Math.min(1.4,this.shake+.5);const n=5.5;let s=0;for(const r of this.enemies){if(r.dead)continue;const a=r.group.position.distanceTo(t);a<n+r.radius&&this.blastReaches(t,r)&&this.damageEnemy(r,120*(1-a/(n+r.radius)*.5),t.clone().sub(r.group.position).setY(0).normalize())&&(s+=1)}t.distanceTo(this.player.position)<4.5&&this.damagePlayer(34*(1-t.distanceTo(this.player.position)/4.5*.6),t);for(const r of this.barrels)!r.dead&&r!==e&&r.group.position.distanceTo(t)<4.5&&this.damageBarrel(r,999,new A);this.mission?.id==="barrel"&&s>0&&this.addMissionProgress(s),s>=2&&this.unlockAchievement("barrel")}createHealBeam(e,t){const n=new yt().setFromPoints([e,t]),s=new Ki({color:7077808,transparent:!0,opacity:1,blending:sn,depthWrite:!1,toneMapped:!1}),r=new Ws(n,s);this.scene.add(r),this.tracers.push({line:r,life:.25,maxLife:.25})}updateBarrels(e){for(const t of this.barrels)t.dead||t.flash<=0||(t.flash-=e,t.flash<=0&&t.bodyMaterial&&(t.bodyMaterial.emissiveIntensity=.5))}chainLightning(e,t,n,s,r){if(s<=0)return 0;let a=t.clone(),o=0;for(let c=0;c<s;c++){let l=null,d=11;for(const h of this.enemies){if(h.dead||h.phased||r.has(h))continue;const u=h.group.position.distanceTo(a);u>=d||!this.hasLineOfSight(a,this.getAimPoint(h),.7)||(d=u,l=h)}if(!l)break;r.add(l);const f=l.group.position.clone().add(new A(0,l.height*.5,0));this.createArc(a,f,8251647),this.damageEnemy(l,n*Math.pow(.72,c+1)*this.player.chainDamage,f.clone().sub(a).normalize()),a=f,o+=1}return o>=3&&this.unlockAchievement("arc-chain"),o}createArc(e,t,n){const s=[];for(let l=0;l<=6;l++){const d=e.clone().lerp(t,l/6);l>0&&l<6&&d.add(new A(xt(-.35,.35),xt(-.35,.35),xt(-.35,.35))),s.push(d)}const a=new yt().setFromPoints(s),o=new Ki({color:n,transparent:!0,opacity:1,blending:sn,depthWrite:!1,toneMapped:!1}),c=new Ws(a,o);this.scene.add(c),this.tracers.push({line:c,life:.18,maxLife:.18})}getAimAssist(e,t,n=0){const s=wl();if(s<=0)return null;const a=((this.isBoard?.13:.08)+n*.02)*s,c=((this.isBoard?46:32)+n*6)*(.5+s*.5);let l=null,d=a;for(const f of this.enemies){if(f.dead||f.spawnTime>0||f.phased)continue;const h=this.getAimPoint(f);if(!this.hasLineOfSight(e,h))continue;const u=h.sub(e);if(u.length()>c)continue;u.normalize();const v=Math.acos(At(t.dot(u),-1,1));v<d&&(d=v,l=u)}return l}damageEnemy(e,t,n,s={}){if(e.dead)return!1;let r=t;this.player.executeBonus>1&&e.health/e.maxHealth<this.player.executeThreshold&&(r*=this.player.executeBonus),s.critRoll&&(this.critCount+=1,this.critCount>=10&&this.unlockAchievement("crit-10")),this.mission?.id==="crit"&&s.critRoll&&this.addMissionProgress(),this.mission?.id==="combo"&&this.hitCombo>=this.mission.target&&this.addMissionProgress(this.mission.target),e.health-=r,this.hitCombo=(this.hitCombo||0)+1,this.hitComboTimer=3.2+(this.player.comboHold||0),[10,25,50,100].includes(this.hitCombo)&&(this.callbacks.onAnnounce?.(`${this.hitCombo} 连击`,"火力链条稳定 · 保持压制","COMBO CHAIN",1500),this.audio.achievement()),this.hitStop=Math.max(this.hitStop||0,s.critical?.05:.022),this.shake=Math.min(1.2,this.shake+(s.critical?.2:.07)),e.hitTimer=.07;const a=e.health<e.maxHealth;e.healthBar.visible=e.type==="boss"||a;const o=At(e.health/e.maxHealth,0,1);return e.barFill.scale.x=o,e.barFill.position.x=-(1-o)*(e.barHalf||.6),this.showDamageNumber(e,r,!!s.critical,e.health<=0),e.health<=0?(this.killEnemy(e,n),!0):!1}showDamageNumber(e,t,n,s){const r=this.callbacks.onDamageNumber;if(!r)return;const a=e.group.position.clone().add(new A(xt(-.3,.3),e.height*.6,0));a.project(this.camera),!(a.z<-1||a.z>1)&&r({amount:Math.round(t),x:(a.x*.5+.5)*innerWidth,y:(-a.y*.5+.5)*innerHeight,critical:n,kill:s,combo:this.hitCombo||0})}killEnemy(e,t=new A){if(e.dead)return;e.dead=!0,e.deathTimer=e.type==="boss"?1.4:.5,e.healthBar.visible=!1,this.enemyHitMeshes=this.enemyHitMeshes.filter(o=>o.userData.enemy!==e),this.kills+=1,this.combo=Math.min(4,this.combo+(e.type==="boss"?1:.2)),this.comboTimer=4+(this.player.comboHold||0),this.comboPeak=Math.max(this.comboPeak,this.combo),this.addEnergy(6),this.unlockAchievement("first-blood"),this.combo>=2.5&&this.unlockAchievement("combo-master"),e.type==="bomber"&&this.unlockAchievement("defuser"),e.type==="medic"&&this.unlockAchievement("medic-down"),e.type==="falcon"&&(this.falconKills=(this.falconKills||0)+1,this.falconKills>=8&&this.unlockAchievement("falconer")),e.slow>0&&(this.frostKills=(this.frostKills||0)+1,this.frostKills>=15&&this.unlockAchievement("frostbite"));const n=Math.floor(e.score*this.combo*(1+(this.player.scoreBonus||0)));this.score+=n,this.credits+=Math.round(e.score*.12),this.mode==="gauntlet"&&(this.waveTimeLeft=Math.min(90,this.waveTimeLeft+2.5)),this.mission?.id==="kills"&&this.addMissionProgress(),this.player.health=Math.min(this.player.maxHealth,this.player.health+this.player.killHeal),this.player.shield=Math.min(this.player.maxShield,this.player.shield+this.player.killHeal*.75+this.player.killShield),this.player.siphon&&(this.player.pulseCooldown=Math.max(0,this.player.pulseCooldown-1.2));const s=e.group.position.clone().add(new A(0,e.type==="boss"?3:1.1,0));this.spawnParticles(s,Tl[e.type].color,e.type==="boss"?70:20,e.type==="boss"?8:4.5),e.type==="boss"?(this.audio.explosion(),this.shake=2,this.createPulseEffect(s,16742229,16)):this.audio.kill(),this.callbacks.onKill(e.name,n);const r=this.weaponState.reduce((o,c)=>o+c.ammo+c.reserve,0),a=(this.mode==="training"?.35:.24)*this.difficulty.drop;if(e.type!=="boss"&&(Math.random()<a||r<25)){const o=Math.random();let c=this.player.health<this.player.maxHealth*.55&&o<.5||o<.34?"health":o<.67?"shield":"ammo";r<25&&(c="ammo"),this.spawnPickup(e.group.position,c)}}reload(){if(this.state!=="playing"||this.reloadTimer>0||this.switchTimer>0)return;const e=mt[this.weaponIndex],t=this.weaponState[this.weaponIndex];t.ammo>=e.magazine||t.reserve<=0||(this.reloadTimer=e.reload/this.player.reloadMultiplier,this.firing=!1,this.audio.reload())}finishReload(){const e=mt[this.weaponIndex],t=this.weaponState[this.weaponIndex],n=e.magazine-t.ammo,s=Math.min(n,t.reserve);t.ammo+=s,t.reserve-=s,this.audio.reload()}switchWeapon(e){this.state!=="playing"||e===this.weaponIndex||!this.loadout.includes(e)||(this.weaponIndex=e,this.reloadTimer=0,this.switchTimer=.32,this.weaponRecoil=.8,this.buildWeaponModel(e),this.audio.ui())}jump(){const e=this.player;this.state!=="playing"||!e.grounded||e.slideTime>0||e.dashTime>0||(e.jumpVel=7.1,e.grounded=!1,this.audio.dash?.())}slide(){const e=this.player;if(this.state!=="playing"||e.slideTime>0||e.slideCooldown>0||!e.grounded)return;const t=this.touchMove&&Math.hypot(this.touchMove.x,this.touchMove.y)>.2;(this.keys.KeyW||this.keys.KeyA||this.keys.KeyS||this.keys.KeyD||t)&&(e.slideTime=.62,e.slideCooldown=1.5,e.slideDir=e.velocity.lengthSq()>.4?e.velocity.clone().setY(0).normalize():new A(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this.spawnParticles(e.position.clone().add(new A(0,-1.5,0)),5568466,8,2.2),this.audio.dash?.())}dash(){this.state!=="playing"||this.player.dashCooldown>0||this.player.dashTime>0||(this.player.dashCooldown=this.player.dashMax,this.player.dashTime=.19,this.player.dashDuration=.19,this.player._perfectUsed=!1,this.player.invulnerable=.28,this.audio.dash())}triggerPerfectDodge(e){this.triggerSlowmo(1.15),this.audio.perfectDodge?.(),this.callbacks.onPerfect?.({}),this.callbacks.onGlitch?.("light"),this.addEnergy(10),this.spawnParticles(this.player.position.clone().add(new A(0,-.6,0)),5568466,16,3)}triggerSlowmo(e){const t=this.slowmo>0;this.slowmo=Math.max(this.slowmo,e),t||this.callbacks.onSlowmo?.(!0)}cycleScope(){if(this.currentScopeType!=="sniper")return;const e=(this.scopeLevels.indexOf(this.sniperZoom)+1)%this.scopeLevels.length;this.sniperZoom=this.scopeLevels[e],this.callbacks.onToast?.(`狙击镜倍率 // ${this.sniperZoom}×`,1200),this.audio.ui()}pulse(){if(this.state!=="playing"||this.player.pulseCooldown>0)return;this.player.pulseCooldown=this.player.pulseMax*(this.player.overdrive>0?.5:1);const e=this.player.position.clone();this.createPulseEffect(e,5568466,this.player.pulseRadius),this.audio.pulse(),this.shake=.65;for(const t of this.enemies){if(t.dead)continue;const n=t.group.position.distanceTo(e);if(n<=this.player.pulseRadius&&this.blastReaches(e,t)){const s=t.group.position.clone().sub(e).setY(0).normalize();this.damageEnemy(t,this.player.pulseDamage*this.player.damageMultiplier*(1-n/this.player.pulseRadius*.35),s),t.dead||(t.group.position.addScaledVector(s,t.type==="boss"?.4:1.4),this.player.frostPulse&&(t.slow=Math.max(t.slow||0,2.5),t.slowMul=Math.max(.2,.4)))}}}createPulseEffect(e,t,n){const s=new Y(new eo(.85,1,64),new je({color:t,transparent:!0,opacity:.85,side:Ft,blending:sn,depthWrite:!1,toneMapped:!1}));s.rotation.x=-Math.PI/2,s.position.copy(e),s.position.y=.12,this.scene.add(s),this.effects.push({mesh:s,life:.65,maxLife:.65,radius:n})}createTracer(e,t,n,s){const r=this.weaponRoot.localToWorld(new A(0,0,-.8)),a=new yt().setFromPoints([r,t]),o=new Ki({color:n,transparent:!0,opacity:.9,blending:sn,depthWrite:!1,toneMapped:!1}),c=new Ws(a,o);this.scene.add(c),this.tracers.push({line:c,life:s,maxLife:s})}spawnParticles(e,t,n=8,s=2){const r=new je({color:t,transparent:!0,toneMapped:!1}),a=Math.min(n,this.maxParticles);for(let o=0;o<a;o++){const c=new Y(this.sharedParticleGeometry,r.clone());c.position.copy(e),c.scale.setScalar(xt(.5,1.8)),this.scene.add(c);const l=new A(xt(-1,1),xt(-.25,1.4),xt(-1,1)).normalize().multiplyScalar(xt(s*.35,s));this.particles.push({mesh:c,velocity:l,life:xt(.25,.65),maxLife:.65})}}updateEffects(e){for(const t of this.particles)t.life-=e,t.velocity.y-=5*e,t.mesh.position.addScaledVector(t.velocity,e),t.mesh.material.opacity=At(t.life/t.maxLife,0,1),t.life<=0&&(this.scene.remove(t.mesh),t.remove=!0);this.particles=this.particles.filter(t=>!t.remove);for(const t of this.tracers)t.life-=e,t.line.material.opacity=At(t.life/t.maxLife,0,1),t.life<=0&&(this.scene.remove(t.line),t.line.geometry.dispose(),t.line.material.dispose(),t.remove=!0);this.tracers=this.tracers.filter(t=>!t.remove);for(const t of this.effects){t.life-=e;const n=1-t.life/t.maxLife;t.mesh.scale.setScalar(1+n*t.radius),t.mesh.material.opacity=(1-n)*.8,t.life<=0&&(this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),t.remove=!0)}this.effects=this.effects.filter(t=>!t.remove)}spawnPickup(e,t){const n={health:5568466,shield:5810943,ammo:16762460},s=new at,r=new Y(new zn(.3,0),new je({color:n[t],toneMapped:!1})),a=new Y(new Nn(.48,.025,6,24),new je({color:n[t],transparent:!0,opacity:.65,toneMapped:!1}));a.rotation.x=Math.PI/2,s.add(r,a),s.position.copy(e).setY(.7),this.scene.add(s),this.pickups.push({group:s,type:t,life:18,phase:Math.random()*6})}updatePickups(e){for(const t of this.pickups){if(t.life-=e,t.phase+=e,t.group.rotation.y+=e*1.8,t.group.position.y=.7+Math.sin(t.phase*2.5)*.12,t.group.position.distanceTo(this.player.position)<this.player.pickupRadius){const n=this.player.pickupPower;t.type==="health"&&(this.player.health=Math.min(this.player.maxHealth,this.player.health+30*n)),t.type==="shield"&&(this.player.shield=Math.min(this.player.maxShield,this.player.shield+25*n)),t.type==="ammo"&&this.weaponState.forEach((s,r)=>{s.reserve+=Math.ceil(mt[r].magazine*1.5*this.player.ammoMultiplier*n)}),this.callbacks.onToast({health:`纳米修复 +${Math.round(30*n)} HP`,shield:`护盾能量 +${Math.round(25*n)} SH`,ammo:"备用弹药已补充"}[t.type]),this.audio.pickup(),t.life=0}t.life<=0&&(this.scene.remove(t.group),t.remove=!0)}this.pickups=this.pickups.filter(t=>!t.remove)}damagePlayer(e,t){if(this.state!=="playing"||this.mode==="training")return;if(this.player.dashTime>0&&this.player.dashTime>this.player.dashDuration-this.player.perfectWindow&&!this.player._perfectUsed){this.player._perfectUsed=!0,this.triggerPerfectDodge(t);return}if(this.player.invulnerable>0||this.cheats.god)return;this.player.lastDamage=0,this.player.adaptiveArmor&&this.player.health<this.player.maxHealth*.3&&(e*=.6),this.player.thorns>0&&this.castAoe(this.player.position.clone(),6.5,this.player.thorns,16733559,0),this.waveDamageTaken+=e,this.addEnergy(8);let n=e;if(this.player.shield>0){const a=Math.min(this.player.shield,n);this.player.shield-=a,n-=a}this.player.health-=n,this.shake=Math.min(1.3,this.shake+.5),this.audio.damage();const s=t.clone().sub(this.player.position),r=Math.atan2(s.x,s.z);this.callbacks.onDamage(r-this.yaw),this.player.health<=0&&this.end(!1)}checkWave(e){if(this.intermission){this.nextWaveTimer-=e,this.nextWaveTimer<=0&&this.startWave();return}if(this.mode==="gauntlet"&&this.waveTimeLeft>0&&(this.waveTimeLeft-=e,this.waveTimeLeft<=0)){this.waveTimeLeft=0,this.end(!1);return}if(this.spawnQueue.length&&(this.spawnTimer-=e,this.spawnTimer<=0)){const n=this.spawnQueue.shift();this.spawnEnemy(n),this.spawnTimer=Math.max(.28,.9-this.wave*.035)}const t=this.enemies.some(n=>!n.dead);if(!this.spawnQueue.length&&!t&&!this.waveClearPending){this.waveClearPending=!0,this.wave>0&&this.waveDamageTaken===0&&this.unlockAchievement("flawless"),this.mission?.id==="flawless"&&this.waveDamageTaken===0&&this.addMissionProgress(1),this.clearedContent&&this.rollFieldEvent();const n=this.runId;(this.mode==="campaign"||this.mode==="gauntlet")&&this.wave>=this.difficulty.waves?setTimeout(()=>{this.runId===n&&this.state==="playing"&&this.end(!0)},1200):setTimeout(()=>{this.runId===n&&this.state==="playing"&&this.waveClearPending&&this.offerUpgrades()},900)}}assignMission(){const e=Al[Math.floor(Math.random()*Al.length)];this.mission={...e,progress:0,done:!1}}addMissionProgress(e=1){const t=this.mission;if(!t||t.done||(t.progress+=e,t.progress<t.target))return;t.done=!0;const n=Math.round(t.reward*(this.missionBonus||1));this.credits+=n,this.callbacks.onToast?.(`战术任务完成 // ${t.text} · +${n} CR`,3400),this.audio.upgrade()}spawnFieldVendor(){if(this.fieldVendor)return;const e=new at,t=new Y(new Sn(.55,.75,1.3,8),new Ct({color:1784371,emissive:3135656,emissiveIntensity:.5,metalness:.8,roughness:.3}));t.position.y=1.5;const n=new Y(new sr(.42,1),new Ct({color:861216,emissive:5568466,emissiveIntensity:.9,metalness:.7,roughness:.25}));n.position.y=2.5;const s=new Y(new Nn(1.05,.05,6,28),new je({color:this.clearedContent?16747218:16766044,toneMapped:!1}));s.rotation.x=Math.PI/2,s.position.y=1.2;const r=new Y(new Di(.13,8,6),new je({color:16770442,toneMapped:!1}));r.position.y=3.2;const a=new Y(new un(.9,.5,.7),new Ct({color:2374454,emissive:1727050,emissiveIntensity:.4,metalness:.7}));a.position.set(1.1,.25,0),e.add(t,n,s,r,a);const o=xt(-.5,.5);e.position.set(Math.sin(o)*14,0,12+Math.cos(o)*3),this.scene.add(e),this.fieldVendor={group:e,ring:s,beacon:r},this.callbacks.onToast?.(this.clearedContent?"军需官已抵达 // 精英补给 · 靠近按 G 交易":"流动商人已抵达 // 靠近按 G 交易",4200)}updateFieldVendor(e){if(!this.fieldVendor)return;this.fieldVendor.group.rotation.y+=e*.55,this.fieldVendor.ring.rotation.z+=e*1.3,this.fieldVendor.beacon.position.y=3.2+Math.sin(this.elapsed*3)*.12;const t=this.fieldVendor.group.position.distanceTo(this.player.position),n=document.getElementById("interact-toast");if(n){const s=t<7&&this.state==="playing";n.textContent=s?"按 G 与流动商人交易":"",n.classList.toggle("show",s)}}rollFieldEvent(){const e=[{text:"补给空投 // +260 CR",apply:n=>{n.credits+=260}},{text:"情报官接入 // 本局任务奖励翻倍",apply:n=>{n.missionBonus=2}},{text:"工程师折扣 // 商店 8 折",apply:n=>{n.shopDiscount=.8}},{text:"精英信号 // 下一波额外增援",apply:n=>{n.eliteWave=3}}],t=e[Math.floor(Math.random()*e.length)];t.apply(this),this.fieldEvent=t.text,this.callbacks.onToast?.(`战场事件 // ${t.text}`,3600)}offerUpgrades(){this.state="upgrade",this.firing=!1,document.exitPointerLock?.(),this.shopPhase="free",this.currentFreeChoices=this.rollFreeChoices(),this.freePicked=!1,this.freePickIndex=-1,this.credits+=110+this.wave*22,this.rerollCount=0,this.rerollCost=20+this.wave*5,this.currentShop=this.generateShop(),this.callbacks.onUpgrades(this.prepPayload()),this.callbacks.onState("upgrade")}rollFreeChoices(){const e=[...Wm],t=[];for(;t.length<3&&e.length;)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);return t}prepPayload(){return{freeChoices:this.currentFreeChoices,shop:this.currentShop,credits:this.credits,wave:this.wave,rerollCost:this.rerollCost,freePicked:this.freePicked,freePickIndex:this.freePickIndex,shopPhase:this.shopPhase}}generateShop(e){const t=new Set(this.loadout),n=mt.map((d,f)=>({type:"weapon",weaponIndex:f,name:d.name,category:d.category,price:Math.round(d.price*(this.shopDiscount||1)),desc:d.desc})).filter(d=>!t.has(d.weaponIndex)),s=qm.filter(d=>this.wave>=(Kr[d.rarity]||0)),r=Xm.filter(d=>this.wave>=(Kr[d.rarity]||0)),a=Ym.filter(d=>this.wave>=(Kr[d.rarity]||0)),o=(d,f)=>{const h=[],u=[...d];for(;h.length<f&&u.length;)h.push(u.splice(Math.floor(Math.random()*u.length),1)[0]);return h},c=[];o(n,3).forEach(d=>c.push(d)),o(s,2).forEach(d=>c.push({type:"supply",id:d.id,icon:d.icon,name:d.name,category:"supply",rarity:d.rarity,price:Math.round(d.price*(this.shopDiscount||1)),desc:d.desc,apply:d.apply})),o(r,2).forEach(d=>c.push({type:"mod",modId:d.id,icon:d.icon,name:d.name,category:"mod",rarity:d.rarity,price:Math.round(d.price*(this.shopDiscount||1)),desc:d.desc,apply:d.apply})),o(a,3).forEach(d=>c.push({type:"skill",skillId:d.id,kind:d.kind,icon:d.icon,name:d.name,category:"skill",rarity:d.rarity,price:Math.round(d.price*(this.shopDiscount||1)),desc:d.desc,apply:d.apply,cooldown:d.cooldown}));const l=c.map(d=>({...d,sold:!1,locked:!1}));return e&&e.forEach((d,f)=>{d.locked&&!d.sold&&l[f]&&(l[f]=d)}),l}buyShopItem(e){const t=this.currentShop?.[e];return!t||t.sold||this.credits<t.price||t.locked?!1:(this.credits-=t.price,t.sold=!0,t.type==="weapon"?this.unlockWeapon(t.weaponIndex):t.type==="skill"?t.kind==="active"?this.player.skills.push({id:t.skillId,name:t.name,icon:t.icon,desc:t.desc,cooldown:0,max:t.cooldown,kind:"active"}):t.apply&&t.apply(this):t.apply&&t.apply(this),this.audio.upgrade(),this.state==="upgrade"?this.callbacks.onUpgrades?.(this.prepPayload()):this.callbacks.onShop?.({shop:this.currentShop,credits:this.credits,standalone:this.state==="shop"}),!0)}lockShopItem(e){const t=this.currentShop?.[e];!t||t.sold||(t.locked=!t.locked,this.state==="upgrade"?this.callbacks.onUpgrades?.(this.prepPayload()):this.state==="shop"&&this.callbacks.onShop?.({shop:this.currentShop,credits:this.credits,standalone:!0}))}rerollFree(){if(this.state!=="upgrade"||this.freePicked||this.credits<this.rerollCost){this.audio.empty?.();return}this.credits-=this.rerollCost,this.rerollCount+=1,this.rerollCost+=10+Math.floor(this.wave*.5)*5,this.currentFreeChoices=this.rollFreeChoices(),this.audio.upgrade(),this.callbacks.onUpgrades?.(this.prepPayload())}rerollShop(){if(this.state!=="upgrade"||this.credits<this.rerollCost){this.audio.empty?.();return}this.credits-=this.rerollCost,this.rerollCount+=1,this.rerollCost+=10+Math.floor(this.wave*.5)*5,this.currentShop=this.generateShop(this.currentShop),this.audio.upgrade(),this.callbacks.onUpgrades?.(this.prepPayload())}gotoShop(){this.state==="upgrade"&&(this.shopPhase="shop",this.callbacks.onUpgrades?.(this.prepPayload()))}chooseFreeUpgrade(e){this.state!=="upgrade"||this.freePicked||!this.currentFreeChoices[e]||(this.currentFreeChoices[e].apply(this),this.freePicked=!0,this.freePickIndex=e,this.appliedUpgrades.push({name:this.currentFreeChoices[e].name,icon:this.currentFreeChoices[e].icon}),this.audio.upgrade(),this.callbacks.onUpgrades?.(this.prepPayload()))}deploy(){if(this.state!=="upgrade"||!this.freePicked){this.audio.empty?.();return}this.state="playing",this.waveClearPending=!1,this.intermission=!0,this.nextWaveTimer=2.1,this.callbacks.onState("playing"),this.callbacks.onAnnounce("整备完成","下一波即将到来","DEPLOY / READY",1900),this.requestLock()}openFieldShop(){if(!(this.state!=="playing"||!this.fieldVendor)){if(this.fieldVendor.group.position.distanceTo(this.player.position)>7){this.callbacks.onToast?.("距离商人过远 // 靠近后按 G 交易",1800);return}this.openShopStandalone()}}openShopStandalone(){this.state==="playing"&&(this.currentShop?.length||(this.currentShop=this.generateShop()),this.state="shop",this.firing=!1,document.exitPointerLock?.(),this.callbacks.onShop?.({shop:this.currentShop,credits:this.credits,standalone:!0}),this.callbacks.onState?.("shop"))}closeShopStandalone(){this.state==="shop"&&(this.state="playing",this.callbacks.onState?.("playing"),this.requestLock())}chooseUpgrade(e){this.chooseFreeUpgrade(e)}end(e){if(this.state==="ended")return;this.state="ended",this.firing=!1,document.exitPointerLock?.();const t=Number(localStorage.getItem("nexus-best-score")||0),n=Number(localStorage.getItem("nexus-best-wave")||0),s=this.score>t;if(s&&localStorage.setItem("nexus-best-score",String(Math.floor(this.score))),this.wave>n&&localStorage.setItem("nexus-best-wave",String(this.wave)),e&&(this.unlockAchievement("victory"),this.difficulty.id==="nightmare"&&this.unlockAchievement("nightmare")),e&&this.wave>=10){const a=!this.clearedContent;try{localStorage.setItem("nexus-cleared","1")}catch{}this.clearedContent=!0,this.callbacks.onToast?.(a?"基础战役通关 // 解锁「极限」难度 · 军需官 · 战场事件 · 隐藏内容":"战役通关 // 进度已同步",6e3)}const r=this.saveCareer(e);e?this.audio.victory():this.audio.gameOver(),this.callbacks.onState("ended",{victory:e,score:this.score,wave:this.wave,kills:this.kills,accuracy:this.shotsFired?this.shotsHit/this.shotsFired*100:0,newRecord:s,career:r,difficulty:this.difficulty.label,achievements:[...this.runAchievements]})}saveCareer(e){if(this.cheated){let n={runs:0,kills:0,wins:0,bestCombo:1,achievements:[]};try{n={...n,...JSON.parse(localStorage.getItem("nexus-career")||"{}")}}catch{}return n}let t={runs:0,kills:0,wins:0,bestCombo:1,achievements:[]};try{t={...t,...JSON.parse(localStorage.getItem("nexus-career")||"{}")}}catch{}t.runs+=1,t.kills+=this.kills,e&&(t.wins+=1),t.bestCombo=Math.max(Number(t.bestCombo)||1,this.comboPeak),t.achievements=[...new Set([...t.achievements||[],...this.runAchievements])];try{localStorage.setItem("nexus-career",JSON.stringify(t))}catch{}return t}updateHUD(e=!1){if(!e&&this.hudTimer>0)return;this.hudTimer=.07;const t=this.enemies.find(n=>n.type==="boss"&&!n.dead);this.callbacks.onHUD({health:this.player.health,maxHealth:this.player.maxHealth,shield:this.player.shield,maxShield:this.player.maxShield,wave:this.wave,mode:this.mode,enemies:this.enemies.filter(n=>!n.dead).length+this.spawnQueue.length,score:this.score,combo:this.combo,comboCount:this.hitCombo||0,weapon:mt[this.weaponIndex],weaponIndex:this.weaponIndex,scopeType:this.currentScopeType,sniperZoom:this.sniperZoom,aiming:this.aiming,ammo:this.weaponState[this.weaponIndex].ammo,reserve:this.weaponState[this.weaponIndex].reserve,reloading:this.reloadTimer>0,unlockedWeapon:this.unlockedWeapon,dashCooldown:this.player.dashCooldown,skills:this.player.skills.map(n=>({id:n.id,name:n.name,icon:n.icon,cooldown:n.cooldown,max:n.max,kind:n.kind})),skillBuff:this.player.skillBuff,dashMax:this.player.dashMax,pulseMax:this.player.pulseMax*(this.player.overdrive>0?.5:1),pulseCooldown:this.player.pulseCooldown,boss:t?{health:t.health,maxHealth:t.maxHealth}:null,energy:this.player.energy,energyMax:this.player.energyMax,overdrive:this.player.overdrive,difficulty:this.difficulty.label,critChance:this.player.critChance,intermission:this.intermission,elapsed:this.elapsed,loadout:this.loadout,credits:this.credits,weaponSlot:this.loadout.indexOf(this.weaponIndex),waveTotal:this.difficulty.waves,waveTimeLeft:this.waveTimeLeft,mission:this.mission,clearedContent:this.clearedContent,fieldEvent:this.fieldEvent,vendorNearby:!!(this.fieldVendor&&this.fieldVendor.group.position.distanceTo(this.player.position)<7),profile:this.profile,demo:this.demoMode,board:this.isBoard})}drawRadar(){const e=this.radarContext,t=this.radar.width,n=t/2,s=t/90;e.clearRect(0,0,t,t),e.save(),e.beginPath(),e.arc(n,n,n-2,0,Math.PI*2),e.clip(),e.strokeStyle="rgba(84,247,210,.13)",e.lineWidth=1,[.33,.66,1].forEach(a=>{e.beginPath(),e.arc(n,n,n*a,0,Math.PI*2),e.stroke()}),e.beginPath(),e.moveTo(n,0),e.lineTo(n,t),e.moveTo(0,n),e.lineTo(t,n),e.stroke();const r=(a,o,c)=>{const l=a.x-this.player.position.x,d=a.z-this.player.position.z,f=Math.cos(-this.yaw),h=Math.sin(-this.yaw),u=l*f-d*h,g=l*h+d*f;Math.hypot(u,g)>43||(e.fillStyle=o,e.beginPath(),e.arc(n+u*s,n+g*s,c,0,Math.PI*2),e.fill())};this.enemies.forEach(a=>{!a.dead&&(!a.phased||this.cheats.wall)&&r(a.group.position,a.type==="boss"?"#ff9a55":a.type==="turret"?"#ffb24d":a.type==="medic"?"#47e0a0":a.type==="bomber"?"#ffc24d":a.type==="phantom"?"#5ce1ff":a.type==="falcon"?"#c6ff3d":"#ff5362",a.type==="boss"?4:2.2)}),this.pickups.forEach(a=>r(a.group.position,"#54f7d2",1.5)),e.restore(),e.fillStyle="#a9fff0",e.beginPath(),e.moveTo(n,n-6),e.lineTo(n-4,n+4),e.lineTo(n+4,n+4),e.closePath(),e.fill()}updateMenu(e){this.menuTime+=e;const t=this.menuTime*.055;this.camera.position.set(Math.sin(t)*30+8,7+Math.sin(t*2)*1.2,Math.cos(t)*30+4),this.camera.lookAt(0,2.7,0),this.camera.fov=Rt(this.camera.fov,58,e*2),this.camera.updateProjectionMatrix(),this.weaponRoot.visible=!1}animate(){requestAnimationFrame(this.animate);const e=Math.min(this.clock.getDelta(),.05);this.hitStop>0&&(this.hitStop=Math.max(0,this.hitStop-e));let t=this.hitStop>0?e*.22:e;if(this.slowmo>0&&(this.slowmo=Math.max(0,this.slowmo-e),t*=.34,this.slowmo===0&&this.callbacks.onSlowmo?.(!1)),this.animatedWorld.forEach(({mesh:n,speed:s,axis:r,update:a})=>{a?a(e,this.menuTime+this.elapsed):r&&(n.rotation[r]+=s*e)}),this.dust&&(this.dust.rotation.y+=e*.003),this.state==="playing"){this.elapsed+=t,this.hudTimer-=e,this.radarTimer-=e,this.updateCheats(t);const n=(this.cheats.slow?.4:1)*t;this.updatePlayer(t),this.updateEnemies(n),this.updateProjectiles(n),this.updatePickups(n),this.updateEffects(n),this.updateBarrels(n),this.updateFieldVendor(t),this.checkWave(e),this.updateHUD(),this.radarTimer<=0&&(this.radarTimer=.09,this.drawRadar())}else this.state==="menu"&&(this.updateMenu(e),this.updateEffects(e));this.renderer.render(this.scene,this.camera)}}const z=i=>document.querySelector(i),Kt=i=>[...document.querySelectorAll(i)],ni=(i,e=2)=>String(Math.max(0,Math.floor(i))).padStart(e,"0"),jm=i=>Math.floor(i).toLocaleString("en-US").replaceAll(",",","),Ac=bc();document.documentElement.dataset.device=Ac;const Zm={desktop:"DEVICE / DESKTOP",mobile:"DEVICE / MOBILE",board:"DEVICE / SEEWO BOARD"};z("#device-badge").textContent=Zm[Ac];let Rc="campaign",Cc="standard",Pc=0,so="campaign",Ne,Rl,Cl,Pl,Ll,Il=0;const Jm={briefing:`
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
    <div class="board-note" style="border-color:#ff4d6d44"><h3>越界协议 // OVERBOUND 作弊码</h3><p>单机训练用外挂。游戏中直接敲字母触发（大小写均可）：<kbd>LOCKON</kbd> 锁头、<kbd>AUTOFIRE</kbd> 自动射击、<kbd>GODMODE</kbd> 无敌、<kbd>INFINITY</kbd> 无限弹药、<kbd>XRAY</kbd> 透视、<kbd>TIMESLIP</kbd> 子弹时间、<kbd>PURGE</kbd> 清场、<kbd>ARSENAL</kbd> 全武器、<kbd>RECHARGE</kbd> 回满、<kbd>OVERBOUND</kbd> 全开、<kbd>STANDDOWN</kbd> 全关。按 <kbd>&#96;</kbd> 或 <kbd>↑↑↓↓←→←→BA</kbd> 展开作弊清单。</p></div>`};function Qm(){return`<div class="eyebrow">TACTICAL LOADOUT / NX SERIES</div><h2 id="modal-title">武器库<span>.</span></h2><p class="modal-lead">15 把武器分为手枪 / 步枪 / 狙击 / 特殊四类。开局任选一把作为起始装备，其余在战后补给站购买或按波次配发。按 1–6 切换已持有武器。</p>${["pistol","rifle","sniper","special"].map(e=>{const t=mt.map((s,r)=>({...s,i:r})).filter(s=>s.category===e),n=t.map(s=>`<article class="${s.i>=6?"v2":""}"><div class="weapon-silhouette ${e}">${s.name.split(" ")[0]}</div><div><small>${s.i>=6?"V1.0 新增":"制式装备"} · ${s.price} CR</small><h3>${s.name}</h3><p>${s.desc}</p><span>伤害 ${s.damage}　·　射速 ${s.fireRate}/s　·　弹匣 ${s.magazine}</span></div></article>`).join("");return`<div class="armory-group"><h3>${Tc[e]}<small>${t.length} 把</small></h3><div class="armory-list">${n}</div></div>`}).join("")}`}function eg(){let i={runs:0,kills:0,wins:0,bestCombo:1,achievements:[]};try{i={...i,...JSON.parse(localStorage.getItem("nexus-career")||"{}")}}catch{}const e=new Set(i.achievements||[]);return`
    <div class="eyebrow">OPERATIVE RECORD / ARCHIVE</div><h2 id="modal-title">生涯档案<span>.</span></h2>
    <p class="modal-lead">战绩仅保存在本机浏览器，不会上传。挑战噩梦难度，解锁全部战术徽章。</p>
    <div class="career-grid"><div><small>出击次数</small><strong>${i.runs}</strong></div><div><small>累计击毁</small><strong>${i.kills}</strong></div><div><small>通关次数</small><strong>${i.wins}</strong></div><div><small>最高连击</small><strong>×${Number(i.bestCombo||1).toFixed(1)}</strong></div></div>
    <div class="eyebrow">战术徽章 · ${e.size} / ${Js.length}</div>
    <div class="achievement-list">${Js.map(t=>`<div class="achievement-item ${e.has(t.id)?"unlocked":""}"><i>${e.has(t.id)?"◆":"◇"}</i><div><strong>${t.name}</strong><small>${t.desc}</small></div></div>`).join("")}</div>`}function tg(){const i=(t,n,s,r,a,o)=>`
    <label class="setting-row">
      <span>${n}<small>${s}</small></span>
      <input type="range" data-setting="${t}" min="${r}" max="${a}" step="${o}">
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
        <label class="setting-row switch-row">
          <span>音效开关<small>关闭后完全静音</small></span>
          <input type="checkbox" id="setting-audio-enabled"><i class="switch-ui"></i>
        </label>
        ${e("showFps","显示帧率","在画面左侧显示实时 FPS，便于判断性能")}
      </section>
    </div>
    <div class="settings-footer"><button id="settings-reset" class="secondary-button">恢复默认</button><span>设置仅保存在本机浏览器 · 不会上传 · 改动立即生效</span></div>`}function ng(i,e){return["aimAssist","volume","feedback"].includes(i)?`${Math.round(e)}%`:["mouseSensitivity","touchSensitivity","fireLookSensitivity"].includes(i)?`${Number(e).toFixed(2)}×`:String(e)}function Ai(){Ne?.audio?.setVolume(Pt.volume),z("#fps-counter")?.classList.toggle("visible",Pt.showFps),z("#audio-toggle")?.classList.toggle("muted",!Ne?.audio?.enabled||Pt.volume===0)}function ig(){const i=z("#modal-content"),e=()=>{i.querySelectorAll("[data-setting]").forEach(n=>{const s=n.dataset.setting,r=Pt[s];n.type==="checkbox"?n.checked=!!r:n.value=String(r);const a=i.querySelector(`[data-value-for="${s}"]`);a&&(a.textContent=ng(s,r))});const t=i.querySelector("#setting-audio-enabled");t&&(t.checked=!!Ne?.audio?.enabled)};i.querySelectorAll("[data-setting]").forEach(t=>{t.addEventListener("input",()=>{wc(t.dataset.setting,t.type==="checkbox"?t.checked:Number(t.value)),Ai(),e()})}),i.querySelector("#setting-audio-enabled")?.addEventListener("change",t=>{if(Ne?.audio){Ne.audio.enabled=t.target.checked,Ne.audio.enabled&&Ne.audio.init();try{localStorage.setItem("nexus-audio",Ne.audio.enabled?"1":"0")}catch{}Ai(),e()}}),i.querySelector("#settings-reset")?.addEventListener("click",()=>{Ec(),Ne?.audio&&(Ne.audio.enabled=!0,Ne.audio.init());try{localStorage.setItem("nexus-audio","1")}catch{}Ai(),e(),ro("设置已恢复默认",1800)}),e()}function sg(i){z("#modal-content").innerHTML=i==="career"?eg():i==="armory"?Qm():i==="settings"?tg():Jm[i],z("#modal-backdrop").classList.add("active"),i==="settings"&&ig()}function ar(){z("#modal-backdrop").classList.remove("active")}Kt("[data-modal]").forEach(i=>i.addEventListener("click",()=>sg(i.dataset.modal)));z("#modal-close").addEventListener("click",ar);z("#modal-backdrop").addEventListener("click",i=>{i.target===z("#modal-backdrop")&&ar()});Kt(".mode-card").forEach(i=>i.addEventListener("click",()=>{Kt(".mode-card").forEach(e=>e.classList.remove("selected")),i.classList.add("selected"),Rc=i.dataset.mode,Ne?.audio.ui()}));Kt(".difficulty-chip").forEach(i=>i.addEventListener("click",()=>{if(i.dataset.difficulty==="apex"&&localStorage.getItem("nexus-cleared")!=="1"){ro("「极限」难度需先通关核心行动（≥ 10 波）",3200),i.classList.add("locked-chip");return}Kt(".difficulty-chip").forEach(e=>e.classList.remove("selected")),i.classList.add("selected"),Cc=i.dataset.difficulty,Ne?.audio.ui()}));function rg(){const i=localStorage.getItem("nexus-cleared")==="1";z("#unlock-banner").innerHTML=i?"<b>◆ 基础战役已通关</b><span>已解锁「极限」难度 · 军需官 · 战场事件 · 隐藏内容</span>":"<b>◇ 战役进度</b><span>通关 ≥ 10 波后解锁极限难度、军需官与战场事件</span>",z(".locked-chip")?.classList.toggle("unlocked",i)}Kt(".start-weapon-chip").forEach(i=>i.addEventListener("click",()=>{Kt(".start-weapon-chip").forEach(e=>e.classList.remove("selected")),i.classList.add("selected"),Pc=Number(i.dataset.start),Ne?.audio.ui()}));let Ha=null;try{Ha=localStorage.getItem("nexus-device")}catch{}const Dl=new URLSearchParams(location.search).get("device"),ag=["desktop","mobile","board"].includes(Dl)?Dl:null,og=ag||(["desktop","mobile","board"].includes(Ha)?Ha:"auto");Kt(".device-chip").forEach(i=>{i.classList.toggle("selected",i.dataset.device===og),i.addEventListener("click",()=>{const e=i.dataset.device;try{e==="auto"?localStorage.removeItem("nexus-device"):localStorage.setItem("nexus-device",e)}catch{}Ne?.audio.ui(),setTimeout(()=>location.reload(),140)})});function lg(i,e={}){z("#menu-screen").classList.toggle("active",i==="menu"),z("#hud").classList.toggle("active",["playing","paused","upgrade","shop"].includes(i)),z("#pause-screen").classList.toggle("active",i==="paused"),z("#upgrade-screen").classList.toggle("active",i==="upgrade"),z("#shop-screen").classList.toggle("active",i==="shop"),z("#end-screen").classList.toggle("active",i==="ended"),i==="menu"&&(ao(),document.exitPointerLock?.()),i==="ended"&&Sg(e)}function cg(i){z("#health-fill").style.width=`${Math.max(0,i.health/i.maxHealth*100)}%`,z("#health-value").textContent=Math.ceil(Math.max(0,i.health)),z("#shield-fill").style.width=`${Math.max(0,i.shield/i.maxShield*100)}%`,z("#shield-value").textContent=Math.ceil(Math.max(0,i.shield)),z("#wave-value").textContent=ni(i.wave),z("#wave-total").textContent=i.mode==="endless"?"/ ∞":`/ ${i.waveTotal||15}`,z("#mode-label").textContent={campaign:"核心行动",endless:"无尽裂隙",training:"模拟训练",gauntlet:"限时歼灭"}[i.mode]||"核心行动";const e=z("#gauntlet-timer");e.textContent=i.mode==="gauntlet"?`剩余 ${Math.ceil(i.waveTimeLeft||0)}s · 击杀续时`:"",e.classList.toggle("urgent",i.mode==="gauntlet"&&i.waveTimeLeft<12),z("#difficulty-label").textContent=i.difficulty,z("#enemy-count").textContent=i.intermission?"区域暂时安全":`${i.enemies} 个敌对信号`,z("#score-value").textContent=ni(i.score,6),z("#combo-value").textContent=`× ${i.combo.toFixed(1)}`;const t=z("#combo-display");if(t){const l=i.comboCount||0;Number(t.dataset.prev||0)<l&&(t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse")),t.dataset.prev=l,z("#combo-count").textContent=l,z("#combo-mult").textContent=`× ${i.combo.toFixed(1)}`,t.classList.toggle("hot",l>=10),t.classList.toggle("active",l>=2)}z("#weapon-name").innerHTML=i.weapon.label,z("#weapon-class").textContent=i.weapon.className;const n=z("#scope-readout");n&&(i.aiming&&i.scopeType==="sniper"?(n.textContent=`${i.sniperZoom}×`,n.classList.add("visible")):n.classList.remove("visible")),z("#ammo-value").textContent=ni(i.ammo),z("#reserve-value").textContent=i.reserve,z("#reload-hint").classList.toggle("visible",i.ammo===0||i.reloading),z("#reload-hint").textContent=i.reloading?"正在装填…":"按 R 装填弹药",z("#crosshair").classList.toggle("reloading",i.reloading);const s=z(".weapon-slots"),r=i.loadout||[0],a=r.join(",");s.dataset.signature!==a&&(s.dataset.signature=a,s.innerHTML=r.slice(0,6).map((l,d)=>`<span data-slot="${l}">${d+1}</span>`).join("")),Kt(".weapon-slots span").forEach(l=>l.classList.toggle("active",Number(l.dataset.slot)===i.weaponIndex)),z("#credits-value").textContent=`${Math.floor(i.credits||0)} CR`,Ul("#ability-dash",i.dashCooldown,i.dashMax),Ul("#ability-pulse",i.pulseCooldown,i.pulseMax),hg(i.skills,i.skillBuff);const o=i.overdrive>0?100:i.energy/i.energyMax*100;z("#energy-fill").style.width=`${Math.max(0,Math.min(100,o))}%`;const c=i.energy>=i.energyMax&&i.overdrive<=0;z("#energy-block").classList.toggle("ready",c),z("#energy-block").classList.toggle("active",i.overdrive>0),z("#overdrive-status").textContent=i.overdrive>0?`超载 ${i.overdrive.toFixed(1)}s`:c?"就绪 · 按 F 释放":`充能 ${Math.floor(o)}%`,z("#mobile-overdrive")?.classList.toggle("ready",c),z("#boss-hud").classList.toggle("active",!!i.boss),i.boss&&(z("#boss-fill").style.width=`${Math.max(0,i.boss.health/i.boss.maxHealth*100)}%`),i.mission&&(z("#objective-label").textContent=i.mission.done?"任务完成":"战术任务",z("#objective-title").textContent=i.mission.text,z("#objective-sub").textContent=i.mission.done?`奖励已发放 · +${Math.round(i.mission.reward*(i.missionBonus||1))} CR`:`进度 ${Math.min(i.mission.progress,i.mission.target)} / ${i.mission.target} · 奖励 ${i.mission.reward} CR`,z("#objective").classList.toggle("mission-done",i.mission.done)),z("#objective").classList.toggle("hidden",!i.mission&&(i.wave>1||i.elapsed>12)),i.vendorNearby&&(z("#objective-sub").textContent="按 G 与流动商人交易 · 可购买武器与补给"),i.board&&(z("#board-badge").classList.toggle("demo",!!i.demo),z("#board-demo-state").textContent=i.demo?"自动演示中":"手动操作")}function Ul(i,e,t){const n=z(i),s=e<=0;n.classList.toggle("cooldown",!s),n.querySelector(".ability-status").textContent=s?"就绪":`${e.toFixed(1)}s`,n.querySelector(".ability span i").style.width=`${100-Math.min(100,e/Math.max(.1,t)*100)}%`}let Nl="";function hg(i,e){const t=z("#skill-bar"),n=z("#mobile-skills");if(!t||!n)return;const s=i||[],r=s.map(o=>o.id).join(","),a=Ne&&Ne.isTouch;if(r!==Nl){Nl=r;const o=["Z","X","V","B"];t.innerHTML=s.map((c,l)=>`<button class="skill-slot" data-skill="${l}"><kbd>${o[l]||""}</kbd><div class="skill-ic">${c.icon}</div><span class="skill-cd"></span></button>`).join(""),n.innerHTML=s.map((c,l)=>`<button class="mobile-skill" data-skill="${l}">${c.icon}</button>`).join(""),t.style.display=!a&&s.length?"flex":"none",n.style.display=a&&s.length?"flex":"none"}s.forEach((o,c)=>{const l=o.cooldown<=0,d=t.children[c];d&&(d.classList.toggle("cooldown",!l),d.querySelector(".skill-cd").textContent=l?"":o.cooldown.toFixed(1),d.style.setProperty("--p",l?"100%":`${100-Math.min(100,o.cooldown/Math.max(.1,o.max)*100)}%`));const f=n.children[c];f&&f.classList.toggle("cooldown",!l)})}function dg(i,e="",t="COMBAT UPDATE",n=2200){clearTimeout(Rl);const s=z("#announcer");s.querySelector("small").textContent=t,s.querySelector("strong").textContent=i,s.querySelector("p").textContent=e,s.classList.add("active"),Rl=setTimeout(()=>s.classList.remove("active"),n)}function ro(i,e=1800){clearTimeout(Cl),z("#interact-toast").textContent=i,z("#interact-toast").classList.add("active"),Cl=setTimeout(()=>z("#interact-toast").classList.remove("active"),e)}function ug(i){clearTimeout(Ll);const e=z("#story-banner");!e||!i||(e.querySelector("small").textContent="剧情 // STORY LOG",e.querySelector("strong").textContent=i.title,e.querySelector("p").textContent=i.text,e.classList.remove("active"),e.offsetWidth,e.classList.add("active"),Ll=setTimeout(()=>e.classList.remove("active"),6500))}function fg(i,e,t,n){const s=z("#combat-banner");s.className=`combat-banner ${i}`,s.querySelector("small").textContent=e,s.querySelector("strong").textContent=t,s.querySelector("p").textContent=n,s.offsetWidth,s.classList.add("show")}function pg(i="light"){const e=z("#glitch-flash");e.className="glitch-flash",e.offsetWidth,e.classList.add(i)}function mg(i){z("#slowmo-vignette").classList.toggle("active",i)}function gg(i){const e=z("#achievement-toast");e.querySelector("strong").textContent=i.name,e.querySelector("p").textContent=i.desc,e.classList.remove("active"),e.offsetWidth,e.classList.add("active"),clearTimeout(Pl),Pl=setTimeout(()=>e.classList.remove("active"),3e3)}function vg({amount:i,x:e,y:t,critical:n,kill:s,combo:r}){const a=z("#damage-numbers"),o=performance.now();if(a.querySelectorAll(".damage-number").length>18||o-Il<18)return;Il=o;const c=document.createElement("div");if(c.className=`damage-number${s?" kill":n?" critical":""}`,c.textContent=i,c.style.left=`${e}px`,c.style.top=`${t}px`,a.appendChild(c),setTimeout(()=>c.remove(),820),r>=2){const l=document.createElement("div");l.className=`combo-popup${r>=10?" hot":""}`,l.innerHTML=`<b>${r}</b><span>HIT</span>`,l.style.left=`${e}px`,l.style.top=`${t-48}px`,a.appendChild(l),setTimeout(()=>l.remove(),900)}}function _g(i){const e=i.upgrades.length?i.upgrades.map(t=>`<span>${t.icon} ${t.name}</span>`).join(""):'<span class="pause-build-empty">尚未安装战术模块</span>';z("#pause-build").innerHTML=`
    <div class="pause-build-head"><span>当前作战配置</span><span>${i.difficulty}难度</span></div>
    <div class="pause-build-stats"><span>伤害 +${i.damage}%</span><span>暴击 ${i.crit}%</span><span>击毁 ${i.kills}</span><span>波次 ${ni(i.wave)}</span></div>
    <div class="pause-build-modules">${e}</div>`}function xg(i,e){const t=document.createElement("div");for(t.innerHTML=`<span>目标清除</span><strong>${i}</strong><b>+${e}</b>`,z("#kill-feed").prepend(t),setTimeout(()=>t.remove(),3500);z("#kill-feed").children.length>4;)z("#kill-feed").lastChild.remove()}function yg(i=!1){const e=z("#hitmarker");e.classList.remove("active","kill"),e.offsetWidth,e.classList.add("active"),i&&e.classList.add("kill")}function qs(i,e,t,n){const s=z(t);!s||!i||(z(n)&&(z(n).textContent=`${Math.floor(e)} CR`),s.innerHTML=i.map((r,a)=>{const o=r.sold||e<r.price,c=r.category==="skill"?r.kind==="active"?"主动技能":"被动技能":r.category==="supply"?"战场补给":Tc[r.category]||"武器",l=r.rarity?`<span class="rarity-badge rarity-${r.rarity}">${"◆".repeat(r.rarity)} R${r.rarity}</span>`:"",d=r.sold?"":`<button class="lock-btn${r.locked?" locked":""}" data-lock="${a}" title="锁定后刷新不替换">${r.locked?"🔒":"🔓"}</button>`;return`<div class="shop-cell">
      <button class="shop-item${r.sold?" sold":""}${r.locked?" locked":""}" data-shop="${a}" ${o?"disabled":""}>
        <small>${c}${l}</small>
        <strong>${r.name}</strong><p>${r.desc}</p><b>${r.sold?"已购入":`${r.price} CR`}</b>
      </button>${d}
    </div>`}).join(""),s.querySelectorAll("[data-shop]").forEach(r=>r.addEventListener("click",()=>Ne.buyShopItem(Number(r.dataset.shop)))),s.querySelectorAll("[data-lock]").forEach(r=>r.addEventListener("click",a=>{a.stopPropagation(),Ne.lockShopItem(Number(r.dataset.lock))})))}function Mg(i){const{freeChoices:e,shop:t,credits:n,rerollCost:s,freePicked:r,freePickIndex:a,shopPhase:o}=i,c=o==="shop",l=z("#free-phase"),d=z("#shop-phase");l&&(l.style.display=c?"none":""),d&&(d.style.display=c?"":"none"),Kt(".upgrade-step").forEach(g=>g.classList.toggle("active",g.dataset.step===(c?"shop":"free"))),z("#free-choices").innerHTML=e.map((g,v)=>{const m=r&&a===v,p=r&&a!==v,b=g.levelOf?g.levelOf(Ne):0;return`<button class="free-card${m?" picked":""}${p?" dimmed":""}" data-free="${v}" ${r&&!m?"disabled":""}>
      <span class="free-num">0${v+1}</span>
      <div class="free-icon">${g.icon}</div>
      <h3>${g.name}</h3>
      <p>${g.desc}</p>
      ${b>0?`<small class="free-owned">当前 Lv.${b} · 可叠加</small>`:""}
      ${m?'<b class="free-done">已领取 ✓</b>':'<b class="free-pick">领取 ↗</b>'}
    </button>`}).join(""),Kt("[data-free]").forEach(g=>g.addEventListener("click",()=>Ne.chooseFreeUpgrade(Number(g.dataset.free)))),qs(t,n,"#shop-panel","#shop-credits");const f=z("#reroll-free-button");f&&(z("#reroll-free-label").textContent=`刷新选项 · ${Math.floor(s)} CR`,f.disabled=r||n<s);const h=z("#reroll-shop-button");h&&(z("#reroll-label").textContent=`刷新货架 · ${Math.floor(s)} CR`,h.disabled=n<s);const u=z("#deploy-button");u&&(u.disabled=!r)}function Sg(i){const e=i.victory;z("#end-eyebrow").textContent=e?"CORE DESTROYED / OPERATION COMPLETE":"SIGNAL LOST / OPERATION FAILED",z("#end-title").innerHTML=e?"黎明已至<span>.</span>":"连接中断<span>.</span>",z("#end-desc").textContent=e?"守望者核心已摧毁。第七区的天空，再次属于人类。":"你的作战信号已消失，但裂隙仍在扩张。",z("#end-score").textContent=jm(i.score),z("#end-wave").textContent=ni(i.wave),z("#end-kills").textContent=i.kills,z("#end-accuracy").textContent=`${Math.round(i.accuracy)}%`,z("#new-record").classList.toggle("active",i.newRecord),z("#end-career").textContent=i.career?`生涯累计 // 出击 ${i.career.runs} 次 · 击毁 ${i.career.kills} · 通关 ${i.career.wins} · 徽章 ${i.career.achievements.length}/${Js.length} · ${i.difficulty}难度`:"",ao()}function ao(){const i=Number(localStorage.getItem("nexus-best-score")||0),e=Number(localStorage.getItem("nexus-best-wave")||0);z("#best-score").textContent=ni(i,6).replace(/\B(?=(\d{3})+(?!\d))/g,","),z("#best-wave").textContent=`最高波次 ${ni(e)}`,rg()}function wg(i){z("#damage-vignette").classList.remove("active"),z("#damage-vignette").offsetWidth,z("#damage-vignette").classList.add("active"),Number.isFinite(i)&&(z("#damage-direction").style.transform=`translate(-50%, -50%) rotate(${i}rad)`,z("#damage-direction").classList.remove("active"),z("#damage-direction").offsetWidth,z("#damage-direction").classList.add("active"))}function or(i){so=i,ar(),Ne.start(i,Cc,Pc),z("#mobile-demo")?.classList.toggle("active",Ne.demoMode),z("#mobile-aim")?.classList.toggle("active",Ne.aiming)}Ne=new Km(z("#game-canvas"),z("#radar"),{onState:lg,onHUD:cg,onAnnounce:dg,onToast:ro,onKill:xg,onHit:yg,onUpgrades:Mg,onShop:i=>{i.standalone||qs(i.shop,i.credits,"#shop-panel","#shop-credits"),qs(i.shop,i.credits,"#shop-options","#field-shop-credits")},onDamage:wg,onBuild:_g,onAchievement:gg,onDamageNumber:vg,onPerfect:()=>fg("perfect","PERFECT DODGE","极限闪避","完美时机 · 时停反击窗口"),onGlitch:i=>pg(i),onSlowmo:i=>mg(i),onStory:i=>ug(i),onDemo:i=>{z("#board-badge").classList.toggle("demo",i),z("#board-demo-state").textContent=i?"自动演示中":"手动操作"}});window.game=Ne;window.__game=Ne;window.nexusGame=Ne;z("#cheat-close").addEventListener("click",()=>Ne.toggleCheatConsole(!1));z("#shop-close").addEventListener("click",()=>Ne.closeShopStandalone());z("#reroll-free-button")&&z("#reroll-free-button").addEventListener("click",()=>Ne.rerollFree());z("#reroll-shop-button")&&z("#reroll-shop-button").addEventListener("click",()=>Ne.rerollShop());z("#to-shop-button")&&z("#to-shop-button").addEventListener("click",()=>Ne.gotoShop());z("#deploy-button")&&z("#deploy-button").addEventListener("click",()=>Ne.deploy());Kt(".upgrade-step").forEach(i=>i.addEventListener("click",()=>{if(i.dataset.step==="shop")Ne.gotoShop();else{const e=z("#free-phase"),t=z("#shop-phase");e&&(e.style.display=""),t&&(t.style.display="none"),Kt(".upgrade-step").forEach(n=>n.classList.toggle("active",n.dataset.step==="free"))}}));z("#cheat-console").addEventListener("click",i=>{i.target===z("#cheat-console")&&Ne.toggleCheatConsole(!1)});const Fl=z("#mobile-pause");Fl&&Fl.addEventListener("click",()=>{Ne.state==="playing"&&Ne.pause()});z("#skill-bar")?.addEventListener("click",i=>{const e=i.target.closest("[data-skill]");e&&Ne.activateSkill(Number(e.dataset.skill))});z("#mobile-skills")?.addEventListener("click",i=>{const e=i.target.closest("[data-skill]");e&&Ne.activateSkill(Number(e.dataset.skill))});function Eg(){const i=document.getElementById("cheat-buttons");if(!i)return;const e=[{code:"lockon",key:"lock",label:"锁头",desc:"LOCKON"},{code:"autofire",key:"auto",label:"自动射击",desc:"AUTOFIRE"},{code:"godmode",key:"god",label:"无敌",desc:"GODMODE"},{code:"infinity",key:"ammo",label:"无限弹药",desc:"INFINITY"},{code:"xray",key:"wall",label:"透视",desc:"XRAY"},{code:"timeslip",key:"slow",label:"子弹时间",desc:"TIMESLIP"}],t=[{code:"purge",label:"清场",desc:"PURGE"},{code:"arsenal",label:"全武器",desc:"ARSENAL"},{code:"recharge",label:"回满",desc:"RECHARGE"},{code:"overbound",label:"协议全开",desc:"OVERBOUND"},{code:"standdown",label:"解除全部",desc:"STANDDOWN"}];i.innerHTML='<div class="cheat-btn-group"><span class="cheat-btn-label">切换类 // TOGGLE</span><div class="cheat-btn-grid">'+e.map(n=>`<button class="cheat-btn" data-cheat="${n.code}" data-cheat-key="${n.key}"><b>${n.label}</b><small>${n.desc}</small></button>`).join("")+'</div></div><div class="cheat-btn-group"><span class="cheat-btn-label">指令类 // ACTION</span><div class="cheat-btn-grid">'+t.map(n=>`<button class="cheat-btn action" data-cheat="${n.code}"><b>${n.label}</b><small>${n.desc}</small></button>`).join("")+"</div></div>",i.querySelectorAll("[data-cheat]").forEach(n=>{n.addEventListener("click",()=>Ne.applyCheat(n.dataset.cheat))})}Eg();z("#start-button").addEventListener("click",()=>or(Rc));z("#training-button").addEventListener("click",()=>or("training"));z("#resume-button").addEventListener("click",()=>Ne.resume());z("#pause-button").addEventListener("click",()=>Ne.pause());z("#restart-button").addEventListener("click",()=>or(so));z("#retry-button").addEventListener("click",()=>or(so));z("#quit-button").addEventListener("click",()=>Ne.quit());z("#end-quit-button").addEventListener("click",()=>Ne.quit());z("#audio-toggle").addEventListener("click",()=>{const i=Ne.audio.toggle();localStorage.setItem("nexus-audio",i?"1":"0"),Ai()});localStorage.getItem("nexus-audio")==="0"&&(Ne.audio.enabled=!1);Ai();window.nexusSettings=Pt;window.nexusSettingsApi={setSetting:wc,resetSettings:Ec,defaults:ri,applySettings:Ai};let jr=0,Zr=performance.now();function Lc(i){if(jr+=1,i-Zr>=1e3){const e=Math.round(jr*1e3/(i-Zr));if(Pt.showFps){const t=z("#fps-counter");t&&(t.textContent=`${e} FPS`)}jr=0,Zr=i}requestAnimationFrame(Lc)}requestAnimationFrame(Lc);document.addEventListener("keydown",i=>{i.code==="Escape"&&z("#modal-backdrop").classList.contains("active")&&ar(),z("#upgrade-screen").classList.contains("active")&&(["Digit1","Digit2","Digit3"].includes(i.code)?Ne.chooseFreeUpgrade(Number(i.code.slice(-1))-1):i.code==="Enter"&&Ne.deploy())});ao();

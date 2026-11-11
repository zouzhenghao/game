(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Na="180",wc=0,so=1,Ec=2,Tl=1,Al=2,Mn=3,On=0,Ht=1,Ut=2,Nn=0,Si=1,tn=2,ro=3,ao=4,bc=5,Zn=100,Tc=101,Ac=102,Rc=103,Cc=104,Pc=200,Lc=201,Ic=202,Dc=203,Wr=204,Xr=205,Uc=206,Nc=207,Fc=208,Oc=209,Bc=210,kc=211,zc=212,Hc=213,Vc=214,qr=0,Yr=1,$r=2,Ei=3,Kr=4,jr=5,Zr=6,Jr=7,Rl=0,Gc=1,Wc=2,Fn=0,Xc=1,qc=2,Yc=3,Cl=4,$c=5,Kc=6,jc=7,Pl=300,bi=301,Ti=302,Qr=303,ea=304,Ys=306,Yi=1e3,Qn=1001,ta=1002,rn=1003,Zc=1004,as=1005,cn=1006,sr=1007,ei=1008,un=1009,Ll=1010,Il=1011,$i=1012,Fa=1013,ni=1014,yn=1015,Qi=1016,Oa=1017,Ba=1018,Ki=1020,Dl=35902,Ul=35899,Nl=1021,Fl=1022,nn=1023,ji=1026,Zi=1027,Ol=1028,ka=1029,Bl=1030,za=1031,Ha=1033,Ds=33776,Us=33777,Ns=33778,Fs=33779,na=35840,ia=35841,sa=35842,ra=35843,aa=36196,oa=37492,la=37496,ca=37808,ha=37809,da=37810,ua=37811,fa=37812,pa=37813,ma=37814,ga=37815,_a=37816,va=37817,xa=37818,Ma=37819,ya=37820,Sa=37821,wa=36492,Ea=36494,ba=36495,Ta=36283,Aa=36284,Ra=36285,Ca=36286,Jc=3200,Qc=3201,kl=0,eh=1,Dn="",Ct="srgb",Ai="srgb-linear",Hs="linear",lt="srgb",ai=7680,oo=519,th=512,nh=513,ih=514,zl=515,sh=516,rh=517,ah=518,oh=519,lo=35044,co="300 es",hn=2e3,Vs=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rr=Math.PI/180,Pa=180/Math.PI;function es(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function lh(i,e){return(i%e+e)%e}function Os(i,e,t){return(1-t)*i+t*e}function Ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Hl={clamp:$e,lerp:Os};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Li{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const h=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-o;const p=l*h+c*d+u*g+f*_,T=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const C=Math.sqrt(b),y=Math.atan2(C,p*T);m=Math.sin(m*y)/C,o=Math.sin(o*y)/C}const x=o*T;if(l=l*m+h*x,c=c*m+d*x,u=u*m+g*x,f=f*m+_*x,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ho.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ho.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ar.copy(this).projectOnVector(e),this.sub(ar)}reflect(e){return this.sub(ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ar=new R,ho=new Li;class Ve{constructor(e,t,n,s,r,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],T=s[1],b=s[4],x=s[7],C=s[2],y=s[5],P=s[8];return r[0]=a*_+o*T+l*C,r[3]=a*m+o*b+l*y,r[6]=a*p+o*x+l*P,r[1]=c*_+u*T+f*C,r[4]=c*m+u*b+f*y,r[7]=c*p+u*x+f*P,r[2]=h*_+d*T+g*C,r[5]=h*m+d*b+g*y,r[8]=h*p+d*x+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=t*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(or.makeScale(e,t)),this}rotate(e){return this.premultiply(or.makeRotation(-e)),this}translate(e,t){return this.premultiply(or.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const or=new Ve;function Vl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ch(){const i=Gs("canvas");return i.style.display="block",i}const uo={};function Ji(i){i in uo||(uo[i]=!0,console.warn(i))}function hh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const fo=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),po=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dh(){const i={enabled:!0,workingColorSpace:Ai,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=wn(s.r),s.g=wn(s.g),s.b=wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Dn?Hs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ji("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ji("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ai]:{primaries:e,whitePoint:n,transfer:Hs,toXYZ:fo,fromXYZ:po,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:fo,fromXYZ:po,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),i}const tt=dh();function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let oi;class uh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{oi===void 0&&(oi=Gs("canvas")),oi.width=e.width,oi.height=e.height;const s=oi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=oi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fh=0;class Va{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lr(s[a].image)):r.push(lr(s[a]))}else r=lr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function lr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ph=0;const cr=new R;class Bt extends Pi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Qn,s=Qn,r=cn,a=ei,o=nn,l=un,c=Bt.DEFAULT_ANISOTROPY,u=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=es(),this.name="",this.source=new Va(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cr).x}get height(){return this.source.getSize(cr).y}get depth(){return this.source.getSize(cr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yi:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yi:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Pl;Bt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(d+1)/2,C=(p+1)/2,y=(u+h)/4,P=(f+_)/4,L=(g+m)/4;return b>x&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=y/n,r=P/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=y/s,r=L/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=L/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(h-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mh extends Pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Bt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Va(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends mh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gl extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gh extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(r,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),os.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(e.matrixWorld),this.union(os)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),ls.subVectors(this.max,Ni),li.subVectors(e.a,Ni),ci.subVectors(e.b,Ni),hi.subVectors(e.c,Ni),bn.subVectors(ci,li),Tn.subVectors(hi,ci),Vn.subVectors(li,hi);let t=[0,-bn.z,bn.y,0,-Tn.z,Tn.y,0,-Vn.z,Vn.y,bn.z,0,-bn.x,Tn.z,0,-Tn.x,Vn.z,0,-Vn.x,-bn.y,bn.x,0,-Tn.y,Tn.x,0,-Vn.y,Vn.x,0];return!hr(t,li,ci,hi,ls)||(t=[1,0,0,0,1,0,0,0,1],!hr(t,li,ci,hi,ls))?!1:(cs.crossVectors(bn,Tn),t=[cs.x,cs.y,cs.z],hr(t,li,ci,hi,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mn=[new R,new R,new R,new R,new R,new R,new R,new R],Zt=new R,os=new ts,li=new R,ci=new R,hi=new R,bn=new R,Tn=new R,Vn=new R,Ni=new R,ls=new R,cs=new R,Gn=new R;function hr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gn.fromArray(i,r);const o=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),u=n.dot(Gn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const _h=new ts,Fi=new R,dr=new R;class ns{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_h.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const t=Fi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(dr)),this.expandByPoint(Fi.copy(e.center).sub(dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gn=new R,ur=new R,hs=new R,An=new R,fr=new R,ds=new R,pr=new R;class $s{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ur.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),An.copy(this.origin).sub(ur);const r=e.distanceTo(t)*.5,a=-this.direction.dot(hs),o=An.dot(this.direction),l=-An.dot(hs),c=An.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ur).addScaledVector(hs,h),d}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const n=gn.dot(this.direction),s=gn.dot(gn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,s,r){fr.subVectors(t,e),ds.subVectors(n,e),pr.crossVectors(fr,ds);let a=this.direction.dot(pr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,e);const l=o*this.direction.dot(ds.crossVectors(An,ds));if(l<0)return null;const c=o*this.direction.dot(fr.cross(An));if(c<0||l+c>a)return null;const u=-o*An.dot(pr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,s,r,a,o,l,c,u,f,h,d,g,_,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,h,d,g,_,m)}set(e,t,n,s,r,a,o,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/di.setFromMatrixColumn(e,0).length(),r=1/di.setFromMatrixColumn(e,1).length(),a=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vh,e,xh)}lookAt(e,t,n){const s=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Rn.crossVectors(n,Wt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Rn.crossVectors(n,Wt)),Rn.normalize(),us.crossVectors(Wt,Rn),s[0]=Rn.x,s[4]=us.x,s[8]=Wt.x,s[1]=Rn.y,s[5]=us.y,s[9]=Wt.y,s[2]=Rn.z,s[6]=us.z,s[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],b=n[7],x=n[11],C=n[15],y=s[0],P=s[4],L=s[8],M=s[12],E=s[1],I=s[5],O=s[9],H=s[13],j=s[2],Y=s[6],K=s[10],ie=s[14],V=s[3],fe=s[7],ve=s[11],Se=s[15];return r[0]=a*y+o*E+l*j+c*V,r[4]=a*P+o*I+l*Y+c*fe,r[8]=a*L+o*O+l*K+c*ve,r[12]=a*M+o*H+l*ie+c*Se,r[1]=u*y+f*E+h*j+d*V,r[5]=u*P+f*I+h*Y+d*fe,r[9]=u*L+f*O+h*K+d*ve,r[13]=u*M+f*H+h*ie+d*Se,r[2]=g*y+_*E+m*j+p*V,r[6]=g*P+_*I+m*Y+p*fe,r[10]=g*L+_*O+m*K+p*ve,r[14]=g*M+_*H+m*ie+p*Se,r[3]=T*y+b*E+x*j+C*V,r[7]=T*P+b*I+x*Y+C*fe,r[11]=T*L+b*O+x*K+C*ve,r[15]=T*M+b*H+x*ie+C*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*f-s*c*f-r*o*h+n*c*h+s*o*d-n*l*d)+_*(+t*l*d-t*c*h+r*a*h-s*a*d+s*c*u-r*l*u)+m*(+t*c*f-t*o*d-r*a*f+n*a*d+r*o*u-n*c*u)+p*(-s*o*u-t*l*f+t*o*h+s*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=f*m*c-_*h*c+_*l*d-o*m*d-f*l*p+o*h*p,b=g*h*c-u*m*c-g*l*d+a*m*d+u*l*p-a*h*p,x=u*_*c-g*f*c+g*o*d-a*_*d-u*o*p+a*f*p,C=g*f*l-u*_*l-g*o*h+a*_*h+u*o*m-a*f*m,y=t*T+n*b+s*x+r*C;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/y;return e[0]=T*P,e[1]=(_*h*r-f*m*r-_*s*d+n*m*d+f*s*p-n*h*p)*P,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*P,e[3]=(f*l*r-o*h*r-f*s*c+n*h*c+o*s*d-n*l*d)*P,e[4]=b*P,e[5]=(u*m*r-g*h*r+g*s*d-t*m*d-u*s*p+t*h*p)*P,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*P,e[7]=(a*h*r-u*l*r+u*s*c-t*h*c-a*s*d+t*l*d)*P,e[8]=x*P,e[9]=(g*f*r-u*_*r-g*n*d+t*_*d+u*n*p-t*f*p)*P,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*P,e[11]=(u*o*r-a*f*r-u*n*c+t*f*c+a*n*d-t*o*d)*P,e[12]=C*P,e[13]=(u*_*s-g*f*s+g*n*h-t*_*h-u*n*m+t*f*m)*P,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*P,e[15]=(a*f*s-u*o*s+u*n*l-t*f*l-a*n*h+t*o*h)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,_=a*u,m=a*f,p=o*f,T=l*c,b=l*u,x=l*f,C=n.x,y=n.y,P=n.z;return s[0]=(1-(_+p))*C,s[1]=(d+x)*C,s[2]=(g-b)*C,s[3]=0,s[4]=(d-x)*y,s[5]=(1-(h+p))*y,s[6]=(m+T)*y,s[7]=0,s[8]=(g+b)*P,s[9]=(m-T)*P,s[10]=(1-(h+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=di.set(s[0],s[1],s[2]).length();const a=di.set(s[4],s[5],s[6]).length(),o=di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jt.copy(this);const c=1/r,u=1/a,f=1/o;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=f,Jt.elements[9]*=f,Jt.elements[10]*=f,t.setFromRotationMatrix(Jt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=hn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===hn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Vs)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=hn,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===hn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Vs)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const di=new R,Jt=new ut,vh=new R(0,0,0),xh=new R(1,1,1),Rn=new R,us=new R,Wt=new R,mo=new ut,go=new Li;class an{constructor(e=0,t=0,n=0,s=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return go.setFromEuler(this),this.setFromQuaternion(go,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Ga{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mh=0;const _o=new R,ui=new Li,_n=new ut,fs=new R,Oi=new R,yh=new R,Sh=new Li,vo=new R(1,0,0),xo=new R(0,1,0),Mo=new R(0,0,1),yo={type:"added"},wh={type:"removed"},fi={type:"childadded",child:null},mr={type:"childremoved",child:null};class Et extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new R,t=new an,n=new Li,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ve}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(vo,e)}rotateY(e){return this.rotateOnAxis(xo,e)}rotateZ(e){return this.rotateOnAxis(Mo,e)}translateOnAxis(e,t){return _o.copy(e).applyQuaternion(this.quaternion),this.position.add(_o.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vo,e)}translateY(e){return this.translateOnAxis(xo,e)}translateZ(e){return this.translateOnAxis(Mo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fs.copy(e):fs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Oi,fs,this.up):_n.lookAt(fs,Oi,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),ui.setFromRotationMatrix(_n),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yo),fi.child=e,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wh),mr.child=e,this.dispatchEvent(mr),mr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yo),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,e,yh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,Sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Et.DEFAULT_UP=new R(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new R,vn=new R,gr=new R,xn=new R,pi=new R,mi=new R,So=new R,_r=new R,vr=new R,xr=new R,Mr=new ct,yr=new ct,Sr=new ct;class en{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Qt.subVectors(e,t),s.cross(Qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Qt.subVectors(s,t),vn.subVectors(n,t),gr.subVectors(e,t);const a=Qt.dot(Qt),o=Qt.dot(vn),l=Qt.dot(gr),c=vn.dot(vn),u=vn.dot(gr),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Mr.setScalar(0),yr.setScalar(0),Sr.setScalar(0),Mr.fromBufferAttribute(e,t),yr.fromBufferAttribute(e,n),Sr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Mr,r.x),a.addScaledVector(yr,r.y),a.addScaledVector(Sr,r.z),a}static isFrontFacing(e,t,n,s){return Qt.subVectors(n,t),vn.subVectors(e,t),Qt.cross(vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Qt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return en.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;pi.subVectors(s,n),mi.subVectors(r,n),_r.subVectors(e,n);const l=pi.dot(_r),c=mi.dot(_r);if(l<=0&&c<=0)return t.copy(n);vr.subVectors(e,s);const u=pi.dot(vr),f=mi.dot(vr);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(pi,a);xr.subVectors(e,r);const d=pi.dot(xr),g=mi.dot(xr);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(mi,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return So.subVectors(r,s),o=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(So,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},ps={h:0,s:0,l:0};function wr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=lh(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=wr(a,r,e+1/3),this.g=wr(a,r,e),this.b=wr(a,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=Wl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return tt.workingToColorSpace(Lt.copy(this),e),Math.round($e(Lt.r*255,0,255))*65536+Math.round($e(Lt.g*255,0,255))*256+Math.round($e(Lt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Lt.copy(this),t);const n=Lt.r,s=Lt.g,r=Lt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Ct){tt.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,s=Lt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(ps);const n=Os(Cn.h,ps.h,t),s=Os(Cn.s,ps.s,t),r=Os(Cn.l,ps.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ye;Ye.NAMES=Wl;let Eh=0;class si extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=es(),this.name="",this.type="Material",this.blending=Si,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wr,this.blendDst=Xr,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wr&&(n.blendSrc=this.blendSrc),this.blendDst!==Xr&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qe extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new R,ms=new Le;let bh=0;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lo,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ms.fromBufferAttribute(this,t),ms.applyMatrix3(e),this.setXY(t,ms.x,ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lo&&(e.usage=this.usage),e}}class Xl extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ql extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Th=0;const jt=new ut,Er=new Et,gi=new R,Xt=new ts,Bi=new ts,At=new R;class Mt extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vl(e)?ql:Xl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return Er.lookAt(e),Er.updateMatrix(),this.applyMatrix4(Er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Xt.min,Bi.min),Xt.expandByPoint(At),At.addVectors(Xt.max,Bi.max),Xt.expandByPoint(At)):(Xt.expandByPoint(Bi.min),Xt.expandByPoint(Bi.max))}Xt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(gi.fromBufferAttribute(e,c),At.add(gi)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new R,l[L]=new R;const c=new R,u=new R,f=new R,h=new Le,d=new Le,g=new Le,_=new R,m=new R;function p(L,M,E){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,E),h.fromBufferAttribute(r,L),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,E),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),o[L].add(_),o[M].add(_),o[E].add(_),l[L].add(m),l[M].add(m),l[E].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,M=T.length;L<M;++L){const E=T[L],I=E.start,O=E.count;for(let H=I,j=I+O;H<j;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new R,x=new R,C=new R,y=new R;function P(L){C.fromBufferAttribute(s,L),y.copy(C);const M=o[L];b.copy(M),b.sub(C.multiplyScalar(C.dot(M))).normalize(),x.crossVectors(y,M);const I=x.dot(l[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,I)}for(let L=0,M=T.length;L<M;++L){const E=T[L],I=E.start,O=E.count;for(let H=I,j=I+O;H<j;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,u=new R,f=new R;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Yt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wo=new ut,Wn=new $s,gs=new ns,Eo=new R,_s=new R,vs=new R,xs=new R,br=new R,Ms=new R,bo=new R,ys=new R;class X extends Et{constructor(e=new Mt,t=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ms.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(br.fromBufferAttribute(f,e),a?Ms.addScaledVector(br,u):Ms.addScaledVector(br.sub(t),u))}t.add(Ms)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(r),Wn.copy(e.ray).recast(e.near),!(gs.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(gs,Eo)===null||Wn.origin.distanceToSquared(Eo)>(e.far-e.near)**2))&&(wo.copy(r).invert(),Wn.copy(e.ray).applyMatrix4(wo),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,C=b;x<C;x+=3){const y=o.getX(x),P=o.getX(x+1),L=o.getX(x+2);s=Ss(this,p,e,n,c,u,f,y,P,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);s=Ss(this,a,e,n,c,u,f,T,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,C=b;x<C;x+=3){const y=x,P=x+1,L=x+2;s=Ss(this,p,e,n,c,u,f,y,P,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,b=m+1,x=m+2;s=Ss(this,a,e,n,c,u,f,T,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Ah(i,e,t,n,s,r,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===On,o),l===null)return null;ys.copy(o),ys.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ys);return c<t.near||c>t.far?null:{distance:c,point:ys.clone(),object:i}}function Ss(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,_s),i.getVertexPosition(l,vs),i.getVertexPosition(c,xs);const u=Ah(i,e,t,n,_s,vs,xs,bo);if(u){const f=new R;en.getBarycoord(bo,_s,vs,xs,f),s&&(u.uv=en.getInterpolatedAttribute(s,o,l,c,f,new Le)),r&&(u.uv1=en.getInterpolatedAttribute(r,o,l,c,f,new Le)),a&&(u.normal=en.getInterpolatedAttribute(a,o,l,c,f,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new R,materialIndex:0};en.getNormal(_s,vs,xs,h.normal),u.face=h,u.barycoord=f}return u}class dn extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(f,2));function g(_,m,p,T,b,x,C,y,P,L,M){const E=x/P,I=C/L,O=x/2,H=C/2,j=y/2,Y=P+1,K=L+1;let ie=0,V=0;const fe=new R;for(let ve=0;ve<K;ve++){const Se=ve*I-H;for(let Ge=0;Ge<Y;Ge++){const nt=Ge*E-O;fe[_]=nt*T,fe[m]=Se*b,fe[p]=j,c.push(fe.x,fe.y,fe.z),fe[_]=0,fe[m]=0,fe[p]=y>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(Ge/P),f.push(1-ve/L),ie+=1}}for(let ve=0;ve<L;ve++)for(let Se=0;Se<P;Se++){const Ge=h+Se+Y*ve,nt=h+Se+Y*(ve+1),Je=h+(Se+1)+Y*(ve+1),Qe=h+(Se+1)+Y*ve;l.push(Ge,nt,Qe),l.push(nt,Je,Qe),V+=6}o.addGroup(d,V,M),d+=V,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ri(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ot(i){const e={};for(let t=0;t<i.length;t++){const n=Ri(i[t]);for(const s in n)e[s]=n[s]}return e}function Rh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Ch={clone:Ri,merge:Ot};var Ph=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ph,this.fragmentShader=Lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=Rh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $l extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new R,To=new Le,Ao=new Le;class qt extends $l{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,To,Ao),t.subVectors(Ao,To)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,vi=1;class Ih extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(_i,vi,e,t);s.layers=this.layers,this.add(s);const r=new qt(_i,vi,e,t);r.layers=this.layers,this.add(r);const a=new qt(_i,vi,e,t);a.layers=this.layers,this.add(a);const o=new qt(_i,vi,e,t);o.layers=this.layers,this.add(o);const l=new qt(_i,vi,e,t);l.layers=this.layers,this.add(l);const c=new qt(_i,vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kl extends Bt{constructor(e=[],t=bi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dh extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Kl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dn(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Nn});r.uniforms.tEquirect.value=t;const a=new X(s,r),o=t.minFilter;return t.minFilter===ei&&(t.minFilter=cn),new Ih(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class rt extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uh={type:"move"};class Tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ks{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new Ks(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Nh extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ar=new R,Fh=new R,Oh=new Ve;class Kn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ar.subVectors(n,t).cross(Fh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ar),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Oh.getNormalMatrix(e),s=this.coplanarPoint(Ar).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new ns,Bh=new Le(.5,.5),ws=new R;class Wa{constructor(e=new Kn,t=new Kn,n=new Kn,s=new Kn,r=new Kn,a=new Kn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],T=r[12],b=r[13],x=r[14],C=r[15];if(s[0].setComponents(c-a,d-u,p-g,C-T).normalize(),s[1].setComponents(c+a,d+u,p+g,C+T).normalize(),s[2].setComponents(c+o,d+f,p+_,C+b).normalize(),s[3].setComponents(c-o,d-f,p-_,C-b).normalize(),n)s[4].setComponents(l,h,m,x).normalize(),s[5].setComponents(c-l,d-h,p-m,C-x).normalize();else if(s[4].setComponents(c-l,d-h,p-m,C-x).normalize(),t===hn)s[5].setComponents(c+l,d+h,p+m,C+x).normalize();else if(t===Vs)s[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){Xn.center.set(0,0,0);const t=Bh.distanceTo(e.center);return Xn.radius=.7071067811865476+t,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ws.x=s.normal.x>0?e.max.x:e.min.x,ws.y=s.normal.y>0?e.max.y:e.min.y,ws.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vi extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ws=new R,Xs=new R,Ro=new ut,ki=new $s,Es=new ns,Rr=new R,Co=new R;class Bs extends Et{constructor(e=new Mt,t=new Vi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ws.fromBufferAttribute(t,s-1),Xs.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ws.distanceTo(Xs);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(s),Es.radius+=r,e.ray.intersectsSphere(Es)===!1)return;Ro.copy(s).invert(),ki.copy(e.ray).applyMatrix4(Ro);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),T=u.getX(_+1),b=bs(this,e,ki,l,p,T,_);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=bs(this,e,ki,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=bs(this,e,ki,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=bs(this,e,ki,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function bs(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Ws.fromBufferAttribute(o,s),Xs.fromBufferAttribute(o,r),t.distanceSqToSegment(Ws,Xs,Rr,Co)>n)return;Rr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Rr);if(!(c<e.near||c>e.far))return{distance:c,point:Co.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Po=new R,Lo=new R;class kh extends Bs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Po.fromBufferAttribute(t,s),Lo.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Po.distanceTo(Lo);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jl extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Io=new ut,La=new $s,Ts=new ns,As=new R;class zh extends Et{constructor(e=new Mt,t=new jl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(s),Ts.radius+=r,e.ray.intersectsSphere(Ts)===!1)return;Io.copy(s).invert(),La.copy(e.ray).applyMatrix4(Io);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);As.fromBufferAttribute(f,m),Do(As,m,l,s,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=h,_=d;g<_;g++)As.fromBufferAttribute(f,g),Do(As,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Do(i,e,t,n,s,r,a){const o=La.distanceSqToPoint(i);if(o<t){const l=new R;La.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class js extends Bt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zl extends Bt{constructor(e,t,n=ni,s,r,a,o=rn,l=rn,c,u=ji,f=1){if(u!==ji&&u!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Va(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jl extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sn extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const _=[],m=n/2;let p=0;T(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(d,2));function T(){const x=new R,C=new R;let y=0;const P=(t-e)/n;for(let L=0;L<=r;L++){const M=[],E=L/r,I=E*(t-e)+e;for(let O=0;O<=s;O++){const H=O/s,j=H*l+o,Y=Math.sin(j),K=Math.cos(j);C.x=I*Y,C.y=-E*n+m,C.z=I*K,f.push(C.x,C.y,C.z),x.set(Y,P,K).normalize(),h.push(x.x,x.y,x.z),d.push(H,1-E),M.push(g++)}_.push(M)}for(let L=0;L<s;L++)for(let M=0;M<r;M++){const E=_[M][L],I=_[M+1][L],O=_[M+1][L+1],H=_[M][L+1];(e>0||M!==0)&&(u.push(E,I,H),y+=3),(t>0||M!==r-1)&&(u.push(I,O,H),y+=3)}c.addGroup(p,y,0),p+=y}function b(x){const C=g,y=new Le,P=new R;let L=0;const M=x===!0?e:t,E=x===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,m*E,0),h.push(0,E,0),d.push(.5,.5),g++;const I=g;for(let O=0;O<=s;O++){const j=O/s*l+o,Y=Math.cos(j),K=Math.sin(j);P.x=M*K,P.y=m*E,P.z=M*Y,f.push(P.x,P.y,P.z),h.push(0,E,0),y.x=Y*.5+.5,y.y=K*.5*E+.5,d.push(y.x,y.y),g++}for(let O=0;O<s;O++){const H=C+O,j=I+O;x===!0?u.push(j,j+1,H):u.push(j+1,j,H),L+=3}c.addGroup(p,L,x===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class is extends Sn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new is(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zs extends Mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const b=new R,x=new R,C=new R;for(let y=0;y<t.length;y+=3)d(t[y+0],b),d(t[y+1],x),d(t[y+2],C),l(b,x,C,T)}function l(T,b,x,C){const y=C+1,P=[];for(let L=0;L<=y;L++){P[L]=[];const M=T.clone().lerp(x,L/y),E=b.clone().lerp(x,L/y),I=y-L;for(let O=0;O<=I;O++)O===0&&L===y?P[L][O]=M:P[L][O]=M.clone().lerp(E,O/I)}for(let L=0;L<y;L++)for(let M=0;M<2*(y-L)-1;M++){const E=Math.floor(M/2);M%2===0?(h(P[L][E+1]),h(P[L+1][E]),h(P[L][E])):(h(P[L][E+1]),h(P[L+1][E+1]),h(P[L+1][E]))}}function c(T){const b=new R;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(T),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function u(){const T=new R;for(let b=0;b<r.length;b+=3){T.x=r[b+0],T.y=r[b+1],T.z=r[b+2];const x=m(T)/2/Math.PI+.5,C=p(T)/Math.PI+.5;a.push(x,1-C)}g(),f()}function f(){for(let T=0;T<a.length;T+=6){const b=a[T+0],x=a[T+2],C=a[T+4],y=Math.max(b,x,C),P=Math.min(b,x,C);y>.9&&P<.1&&(b<.2&&(a[T+0]+=1),x<.2&&(a[T+2]+=1),C<.2&&(a[T+4]+=1))}}function h(T){r.push(T.x,T.y,T.z)}function d(T,b){const x=T*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){const T=new R,b=new R,x=new R,C=new R,y=new Le,P=new Le,L=new Le;for(let M=0,E=0;M<r.length;M+=9,E+=6){T.set(r[M+0],r[M+1],r[M+2]),b.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),y.set(a[E+0],a[E+1]),P.set(a[E+2],a[E+3]),L.set(a[E+4],a[E+5]),C.copy(T).add(b).add(x).divideScalar(3);const I=m(C);_(y,E+0,T,I),_(P,E+2,b,I),_(L,E+4,x,I)}}function _(T,b,x,C){C<0&&T.x===1&&(a[b]=T.x-1),x.x===0&&x.z===0&&(a[b]=C/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.vertices,e.indices,e.radius,e.details)}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Le:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,s=[],r=[],a=[],o=new R,l=new ut;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos($e(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos($e(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ql extends En{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Le){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Hh extends Ql{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Xa(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Rs=new R,Cr=new Xa,Pr=new Xa,Lr=new Xa;class ec extends En{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Rs.subVectors(s[0],s[1]).add(s[0]),c=Rs);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Rs.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Rs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Cr.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,_,m),Pr.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,_,m),Lr.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Cr.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Pr.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Lr.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Cr.calc(l),Pr.calc(l),Lr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Uo(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Vh(i,e){const t=1-i;return t*t*e}function Gh(i,e){return 2*(1-i)*i*e}function Wh(i,e){return i*i*e}function Gi(i,e,t,n){return Vh(i,e)+Gh(i,t)+Wh(i,n)}function Xh(i,e){const t=1-i;return t*t*t*e}function qh(i,e){const t=1-i;return 3*t*t*i*e}function Yh(i,e){return 3*(1-i)*i*i*e}function $h(i,e){return i*i*i*e}function Wi(i,e,t,n,s){return Xh(i,e)+qh(i,t)+Yh(i,n)+$h(i,s)}class Kh extends En{constructor(e=new Le,t=new Le,n=new Le,s=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Le){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Wi(e,s.x,r.x,a.x,o.x),Wi(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jh extends En{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Wi(e,s.x,r.x,a.x,o.x),Wi(e,s.y,r.y,a.y,o.y),Wi(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zh extends En{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jh extends En{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qh extends En{constructor(e=new Le,t=new Le,n=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Le){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Gi(e,s.x,r.x,a.x),Gi(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tc extends En{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Gi(e,s.x,r.x,a.x),Gi(e,s.y,r.y,a.y),Gi(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ed extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Uo(o,l.x,c.x,u.x,f.x),Uo(o,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Le().fromArray(s))}return this}}var td=Object.freeze({__proto__:null,ArcCurve:Hh,CatmullRomCurve3:ec,CubicBezierCurve:Kh,CubicBezierCurve3:jh,EllipseCurve:Ql,LineCurve:Zh,LineCurve3:Jh,QuadraticBezierCurve:Qh,QuadraticBezierCurve3:tc,SplineCurve:ed});class Js extends Zs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Js(e.radius,e.detail)}}class kn extends Zs{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kn(e.radius,e.detail)}}class sn extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*h-a;for(let b=0;b<c;b++){const x=b*f-r;g.push(x,-T,0),_.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const b=T+c*p,x=T+c*(p+1),C=T+1+c*(p+1),y=T+1+c*p;d.push(b,x,y),d.push(x,C,y)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.width,e.height,e.widthSegments,e.heightSegments)}}class qa extends Mt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let f=e;const h=(t-e)/s,d=new R,g=new Le;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const T=p+m,b=T,x=T+n+1,C=T+n+2,y=T+1;o.push(b,x,y),o.push(x,C,y)}}this.setIndex(o),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ci extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new R,h=new R,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const T=[],b=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const y=C/t;f.x=-e*Math.cos(s+y*r)*Math.sin(a+b*o),f.y=e*Math.cos(a+b*o),f.z=e*Math.sin(s+y*r)*Math.sin(a+b*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(y+x,1-b),T.push(c++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const b=u[p][T+1],x=u[p][T],C=u[p+1][T],y=u[p+1][T+1];(p!==0||a>0)&&d.push(b,x,y),(p!==n-1||l<Math.PI)&&d.push(x,C,y)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Un extends Mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new R,f=new R,h=new R;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,T=(s+1)*d+g;a.push(_,m,T),a.push(m,p,T)}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ya extends Mt{constructor(e=new tc(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,l=new R,c=new Le;let u=new R;const f=[],h=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(d,2));function _(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),T(),p()}function m(b){u=e.getPointAt(b/t,u);const x=a.normals[b],C=a.binormals[b];for(let y=0;y<=s;y++){const P=y/s*Math.PI*2,L=Math.sin(P),M=-Math.cos(P);l.x=M*x.x+L*C.x,l.y=M*x.y+L*C.y,l.z=M*x.z+L*C.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=t;b++)for(let x=1;x<=s;x++){const C=(s+1)*(b-1)+(x-1),y=(s+1)*b+(x-1),P=(s+1)*b+x,L=(s+1)*(b-1)+x;g.push(C,y,L),g.push(y,P,L)}}function T(){for(let b=0;b<=t;b++)for(let x=0;x<=s;x++)c.x=b/t,c.y=x/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ya(new td[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Rt extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nd extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class id extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $a extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class sd extends $a{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ir=new ut,No=new R,Fo=new R;class nc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wa,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;No.setFromMatrixPosition(e.matrixWorld),t.position.copy(No),Fo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fo),t.updateMatrixWorld(),Ir.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ir,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ir)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Oo=new ut,zi=new R,Dr=new R;class rd extends nc{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zi.setFromMatrixPosition(e.matrixWorld),n.position.copy(zi),Dr.copy(n.position),Dr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dr),n.updateMatrixWorld(),s.makeTranslation(-zi.x,-zi.y,-zi.z),Oo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oo,n.coordinateSystem,n.reversedDepth)}}class Xi extends $a{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new rd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ic extends $l{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ad extends nc{constructor(){super(new ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class od extends $a{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new ad}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ld extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class cd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Bo=new ut;class ko{constructor(e,t,n=0,s=1/0){this.ray=new $s(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ga,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bo),this}intersectObject(e,t=!0,n=[]){return Ia(e,this,n,t),n.sort(zo),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ia(e[s],this,n,t);return n.sort(zo),n}}function zo(i,e){return i.distance-e.distance}function Ia(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ia(r[a],e,t,!0)}}class hd extends kh{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ye(n),s=new Ye(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,d=0,g=-o;h<=t;h++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=h===r?n:s;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new Mt;u.setAttribute("position",new at(l,3)),u.setAttribute("color",new at(c,3));const f=new Vi({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ho(i,e,t,n){const s=dd(n);switch(t){case Nl:return i*e;case Ol:return i*e/s.components*s.byteLength;case ka:return i*e/s.components*s.byteLength;case Bl:return i*e*2/s.components*s.byteLength;case za:return i*e*2/s.components*s.byteLength;case Fl:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case Ha:return i*e*4/s.components*s.byteLength;case Ds:case Us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ns:case Fs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ia:case ra:return Math.max(i,16)*Math.max(e,8)/4;case na:case sa:return Math.max(i,8)*Math.max(e,8)/2;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ua:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case va:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ya:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wa:case Ea:case ba:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ta:case Aa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ra:case Ca:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dd(i){switch(i){case un:case Ll:return{byteLength:1,components:1};case $i:case Il:case Qi:return{byteLength:2,components:1};case Oa:case Ba:return{byteLength:2,components:4};case ni:case Fa:case yn:return{byteLength:4,components:1};case Dl:case Ul:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);function sc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ud(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pd=`#ifdef USE_ALPHAHASH
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
#endif`,md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yd=`#ifdef USE_BATCHING
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
#endif`,Sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Td=`#ifdef USE_IRIDESCENCE
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
#endif`,Ad=`#ifdef USE_BUMPMAP
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fd=`#define PI 3.141592653589793
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
} // validated`,Od=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bd=`vec3 transformedNormal = objectNormal;
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
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eu=`#ifdef USE_GRADIENTMAP
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
}`,tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,su=`uniform bool receiveShadow;
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
#endif`,ru=`#ifdef USE_ENVMAP
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
#endif`,au=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hu=`PhysicalMaterial material;
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
#endif`,du=`struct PhysicalMaterial {
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
}`,uu=`
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
#endif`,fu=`#if defined( RE_IndirectDiffuse )
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
#endif`,pu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_u=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Su=`#if defined( USE_POINTS_UV )
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
#endif`,wu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Au=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ru=`#ifdef USE_MORPHTARGETS
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
#endif`,Cu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nu=`#ifdef USE_NORMALMAP
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
#endif`,Fu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$u=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ju=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zu=`float getShadowMask() {
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
}`,Ju=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qu=`#ifdef USE_SKINNING
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
#endif`,ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tf=`#ifdef USE_SKINNING
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
#endif`,nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,af=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,of=`#ifdef USE_TRANSMISSION
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
#endif`,lf=`#ifdef USE_TRANSMISSION
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pf=`uniform sampler2D t2D;
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
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`#include <common>
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
}`,Mf=`#if DEPTH_PACKING == 3200
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
}`,yf=`#define DISTANCE
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
}`,Sf=`#define DISTANCE
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
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`uniform float scale;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Af=`#include <common>
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Cf=`#define LAMBERT
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
}`,Pf=`#define LAMBERT
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
}`,Lf=`#define MATCAP
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
}`,If=`#define MATCAP
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
}`,Df=`#define NORMAL
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
}`,Uf=`#define NORMAL
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
}`,Nf=`#define PHONG
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
}`,Ff=`#define PHONG
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
}`,Of=`#define STANDARD
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
}`,Bf=`#define STANDARD
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
}`,kf=`#define TOON
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
}`,zf=`#define TOON
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
}`,Hf=`uniform float size;
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
}`,Vf=`uniform vec3 diffuse;
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
}`,Gf=`#include <common>
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
}`,Wf=`uniform vec3 color;
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
}`,Xf=`uniform float rotation;
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
}`,qf=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:fd,alphahash_pars_fragment:pd,alphamap_fragment:md,alphamap_pars_fragment:gd,alphatest_fragment:_d,alphatest_pars_fragment:vd,aomap_fragment:xd,aomap_pars_fragment:Md,batching_pars_vertex:yd,batching_vertex:Sd,begin_vertex:wd,beginnormal_vertex:Ed,bsdfs:bd,iridescence_fragment:Td,bumpmap_pars_fragment:Ad,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Ld,color_fragment:Id,color_pars_fragment:Dd,color_pars_vertex:Ud,color_vertex:Nd,common:Fd,cube_uv_reflection_fragment:Od,defaultnormal_vertex:Bd,displacementmap_pars_vertex:kd,displacementmap_vertex:zd,emissivemap_fragment:Hd,emissivemap_pars_fragment:Vd,colorspace_fragment:Gd,colorspace_pars_fragment:Wd,envmap_fragment:Xd,envmap_common_pars_fragment:qd,envmap_pars_fragment:Yd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:ru,envmap_vertex:Kd,fog_vertex:jd,fog_pars_vertex:Zd,fog_fragment:Jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:eu,lightmap_pars_fragment:tu,lights_lambert_fragment:nu,lights_lambert_pars_fragment:iu,lights_pars_begin:su,lights_toon_fragment:au,lights_toon_pars_fragment:ou,lights_phong_fragment:lu,lights_phong_pars_fragment:cu,lights_physical_fragment:hu,lights_physical_pars_fragment:du,lights_fragment_begin:uu,lights_fragment_maps:fu,lights_fragment_end:pu,logdepthbuf_fragment:mu,logdepthbuf_pars_fragment:gu,logdepthbuf_pars_vertex:_u,logdepthbuf_vertex:vu,map_fragment:xu,map_pars_fragment:Mu,map_particle_fragment:yu,map_particle_pars_fragment:Su,metalnessmap_fragment:wu,metalnessmap_pars_fragment:Eu,morphinstance_vertex:bu,morphcolor_vertex:Tu,morphnormal_vertex:Au,morphtarget_pars_vertex:Ru,morphtarget_vertex:Cu,normal_fragment_begin:Pu,normal_fragment_maps:Lu,normal_pars_fragment:Iu,normal_pars_vertex:Du,normal_vertex:Uu,normalmap_pars_fragment:Nu,clearcoat_normal_fragment_begin:Fu,clearcoat_normal_fragment_maps:Ou,clearcoat_pars_fragment:Bu,iridescence_pars_fragment:ku,opaque_fragment:zu,packing:Hu,premultiplied_alpha_fragment:Vu,project_vertex:Gu,dithering_fragment:Wu,dithering_pars_fragment:Xu,roughnessmap_fragment:qu,roughnessmap_pars_fragment:Yu,shadowmap_pars_fragment:$u,shadowmap_pars_vertex:Ku,shadowmap_vertex:ju,shadowmask_pars_fragment:Zu,skinbase_vertex:Ju,skinning_pars_vertex:Qu,skinning_vertex:ef,skinnormal_vertex:tf,specularmap_fragment:nf,specularmap_pars_fragment:sf,tonemapping_fragment:rf,tonemapping_pars_fragment:af,transmission_fragment:of,transmission_pars_fragment:lf,uv_pars_fragment:cf,uv_pars_vertex:hf,uv_vertex:df,worldpos_vertex:uf,background_vert:ff,background_frag:pf,backgroundCube_vert:mf,backgroundCube_frag:gf,cube_vert:_f,cube_frag:vf,depth_vert:xf,depth_frag:Mf,distanceRGBA_vert:yf,distanceRGBA_frag:Sf,equirect_vert:wf,equirect_frag:Ef,linedashed_vert:bf,linedashed_frag:Tf,meshbasic_vert:Af,meshbasic_frag:Rf,meshlambert_vert:Cf,meshlambert_frag:Pf,meshmatcap_vert:Lf,meshmatcap_frag:If,meshnormal_vert:Df,meshnormal_frag:Uf,meshphong_vert:Nf,meshphong_frag:Ff,meshphysical_vert:Of,meshphysical_frag:Bf,meshtoon_vert:kf,meshtoon_frag:zf,points_vert:Hf,points_frag:Vf,shadow_vert:Gf,shadow_frag:Wf,sprite_vert:Xf,sprite_frag:qf},pe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ln={basic:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ot([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ot([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ot([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ot([pe.points,pe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ot([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ot([pe.common,pe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ot([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ot([pe.sprite,pe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ot([pe.common,pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ot([pe.lights,pe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ln.physical={uniforms:Ot([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Cs={r:0,b:0,g:0},qn=new an,Yf=new ut;function $f(i,e,t,n,s,r,a){const o=new Ye(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function _(b){let x=!1;const C=g(b);C===null?p(o,l):C&&C.isColor&&(p(C,1),x=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,x){const C=g(x);C&&(C.isCubeTexture||C.mapping===Ys)?(u===void 0&&(u=new X(new dn(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Ri(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),qn.copy(x.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yf.makeRotationFromEuler(qn)),u.material.toneMapped=tt.getTransfer(C.colorSpace)!==lt,(f!==C||h!==C.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=C,h=C.version,d=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new X(new sn(2,2),new Bn({name:"BackgroundMaterial",uniforms:Ri(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=tt.getTransfer(C.colorSpace)!==lt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,x){b.getRGB(Cs,Yl(i)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,x,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:m,dispose:T}}function Kf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(E,I,O,H,j){let Y=!1;const K=f(H,O,I);r!==K&&(r=K,c(r.object)),Y=d(E,H,O,j),Y&&g(E,H,O,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(E,I,O,H),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function f(E,I,O){const H=O.wireframe===!0;let j=n[E.id];j===void 0&&(j={},n[E.id]=j);let Y=j[I.id];Y===void 0&&(Y={},j[I.id]=Y);let K=Y[H];return K===void 0&&(K=h(l()),Y[H]=K),K}function h(E){const I=[],O=[],H=[];for(let j=0;j<t;j++)I[j]=0,O[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:H,object:E,attributes:{},index:null}}function d(E,I,O,H){const j=r.attributes,Y=I.attributes;let K=0;const ie=O.getAttributes();for(const V in ie)if(ie[V].location>=0){const ve=j[V];let Se=Y[V];if(Se===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(Se=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(Se=E.instanceColor)),ve===void 0||ve.attribute!==Se||Se&&ve.data!==Se.data)return!0;K++}return r.attributesNum!==K||r.index!==H}function g(E,I,O,H){const j={},Y=I.attributes;let K=0;const ie=O.getAttributes();for(const V in ie)if(ie[V].location>=0){let ve=Y[V];ve===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor));const Se={};Se.attribute=ve,ve&&ve.data&&(Se.data=ve.data),j[V]=Se,K++}r.attributes=j,r.attributesNum=K,r.index=H}function _(){const E=r.newAttributes;for(let I=0,O=E.length;I<O;I++)E[I]=0}function m(E){p(E,0)}function p(E,I){const O=r.newAttributes,H=r.enabledAttributes,j=r.attributeDivisors;O[E]=1,H[E]===0&&(i.enableVertexAttribArray(E),H[E]=1),j[E]!==I&&(i.vertexAttribDivisor(E,I),j[E]=I)}function T(){const E=r.newAttributes,I=r.enabledAttributes;for(let O=0,H=I.length;O<H;O++)I[O]!==E[O]&&(i.disableVertexAttribArray(O),I[O]=0)}function b(E,I,O,H,j,Y,K){K===!0?i.vertexAttribIPointer(E,I,O,j,Y):i.vertexAttribPointer(E,I,O,H,j,Y)}function x(E,I,O,H){_();const j=H.attributes,Y=O.getAttributes(),K=I.defaultAttributeValues;for(const ie in Y){const V=Y[ie];if(V.location>=0){let fe=j[ie];if(fe===void 0&&(ie==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),ie==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor)),fe!==void 0){const ve=fe.normalized,Se=fe.itemSize,Ge=e.get(fe);if(Ge===void 0)continue;const nt=Ge.buffer,Je=Ge.type,Qe=Ge.bytesPerElement,Q=Je===i.INT||Je===i.UNSIGNED_INT||fe.gpuType===Fa;if(fe.isInterleavedBufferAttribute){const se=fe.data,ye=se.stride,Ne=fe.offset;if(se.isInstancedInterleavedBuffer){for(let Ee=0;Ee<V.locationSize;Ee++)p(V.location+Ee,se.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ee=0;Ee<V.locationSize;Ee++)m(V.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Ee=0;Ee<V.locationSize;Ee++)b(V.location+Ee,Se/V.locationSize,Je,ve,ye*Qe,(Ne+Se/V.locationSize*Ee)*Qe,Q)}else{if(fe.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)p(V.location+se,fe.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let se=0;se<V.locationSize;se++)m(V.location+se);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let se=0;se<V.locationSize;se++)b(V.location+se,Se/V.locationSize,Je,ve,Se*Qe,Se/V.locationSize*se*Qe,Q)}}else if(K!==void 0){const ve=K[ie];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(V.location,ve);break;case 3:i.vertexAttrib3fv(V.location,ve);break;case 4:i.vertexAttrib4fv(V.location,ve);break;default:i.vertexAttrib1fv(V.location,ve)}}}}T()}function C(){L();for(const E in n){const I=n[E];for(const O in I){const H=I[O];for(const j in H)u(H[j].object),delete H[j];delete I[O]}delete n[E]}}function y(E){if(n[E.id]===void 0)return;const I=n[E.id];for(const O in I){const H=I[O];for(const j in H)u(H[j].object),delete H[j];delete I[O]}delete n[E.id]}function P(E){for(const I in n){const O=n[I];if(O[E.id]===void 0)continue;const H=O[E.id];for(const j in H)u(H[j].object),delete H[j];delete O[E.id]}}function L(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:y,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function jf(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==nn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const L=P===Qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==un&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==yn&&!L)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:C,maxSamples:y}}function Jf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Kn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:n,b=T*4;let x=p.clippingState||null;l.value=x,x=u(g,h,b,d);for(let C=0;C!==b;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=d;b!==_;++b,x+=4)a.copy(f[b]).applyMatrix4(T,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Qf(i){let e=new WeakMap;function t(a,o){return o===Qr?a.mapping=bi:o===ea&&(a.mapping=Ti),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qr||o===ea)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Dh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const yi=4,Vo=[.125,.215,.35,.446,.526,.582],Jn=20,Ur=new ic,Go=new Ye;let Nr=null,Fr=0,Or=0,Br=!1;const jn=(1+Math.sqrt(5))/2,xi=1/jn,Wo=[new R(-jn,xi,0),new R(jn,xi,0),new R(-xi,0,jn),new R(xi,0,jn),new R(0,jn,-xi),new R(0,jn,xi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],ep=new R;class Xo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=ep}=r;Nr=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel(),Br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nr,Fr,Or),this._renderer.xr.enabled=Br,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nr=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel(),Br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Qi,format:nn,colorSpace:Ai,depthBuffer:!1},s=qo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tp(r)),this._blurMaterial=np(r,e,t)}return s}_compileMaterial(e){const t=new X(this._lodPlanes[0],e);this._renderer.compile(t,Ur)}_sceneToCubeUV(e,t,n,s,r){const l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Go),f.toneMapping=Fn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const _=new qe({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),m=new X(new dn,_);let p=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,p=!0):(_.color.copy(Go),p=!0);for(let b=0;b<6;b++){const x=b%3;x===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):x===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const C=this._cubeSize;Ps(s,x*C,b>2?C:0,C,C),f.setRenderTarget(s),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===bi||e.mapping===Ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$o()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new X(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ps(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ur)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Wo[(s-r-1)%Wo.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new X(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Jn-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Jn;m>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);const p=[];let T=0;for(let P=0;P<Jn;++P){const L=P/_,M=Math.exp(-L*L/2);p.push(M),P===0?T+=M:P<m&&(T+=2*M)}for(let P=0;P<p.length;P++)p[P]=p[P]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;const x=this._sizeLods[s],C=3*x*(s>b-yi?s-b+yi:0),y=4*(this._cubeSize-x);Ps(t,C,y,3*x,2*x),l.setRenderTarget(t),l.render(f,Ur)}}function tp(i){const e=[],t=[],n=[];let s=i;const r=i-yi+1+Vo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-yi?l=Vo[a-i+yi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),b=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let y=0;y<d;y++){const P=y%3*2/3-1,L=y>2?0:-1,M=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];T.set(M,_*g*y),b.set(h,m*g*y);const E=[y,y,y,y,y,y];x.set(E,p*g*y)}const C=new Mt;C.setAttribute("position",new Yt(T,_)),C.setAttribute("uv",new Yt(b,m)),C.setAttribute("faceIndex",new Yt(x,p)),e.push(C),s>yi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qo(i,e,t){const n=new ii(i,e,t);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function np(i,e,t){const n=new Float32Array(Jn),s=new R(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Yo(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function $o(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ka(){return`

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
	`}function ip(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qr||l===ea,u=l===bi||l===Ti;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Xo(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Xo(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function sp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ji("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rp(i,e,t,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let b=0,x=T.length;b<x;b+=3){const C=T[b+0],y=T[b+1],P=T[b+2];h.push(C,y,y,P,P,C)}}else if(g!==void 0){const T=g.array;_=g.version;for(let b=0,x=T.length/3-1;b<x;b+=3){const C=b+0,y=b+1,P=b+2;h.push(C,y,y,P,P,C)}}else return;const m=new(Vl(h)?ql:Xl)(h,1);m.version=_;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ap(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*a),t.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,h*a,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*_[T];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function op(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function lp(i,e,t){const n=new WeakMap,s=new ct;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let E=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var d=E;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let C=o.attributes.position.count*x,y=1;C>e.maxTextureSize&&(y=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const P=new Float32Array(C*y*4*f),L=new Gl(P,C,y,f);L.type=yn,L.needsUpdate=!0;const M=x*4;for(let I=0;I<f;I++){const O=p[I],H=T[I],j=b[I],Y=C*y*4*I;for(let K=0;K<O.count;K++){const ie=K*M;g===!0&&(s.fromBufferAttribute(O,K),P[Y+ie+0]=s.x,P[Y+ie+1]=s.y,P[Y+ie+2]=s.z,P[Y+ie+3]=0),_===!0&&(s.fromBufferAttribute(H,K),P[Y+ie+4]=s.x,P[Y+ie+5]=s.y,P[Y+ie+6]=s.z,P[Y+ie+7]=0),m===!0&&(s.fromBufferAttribute(j,K),P[Y+ie+8]=s.x,P[Y+ie+9]=s.y,P[Y+ie+10]=s.z,P[Y+ie+11]=j.itemSize===4?s.w:1)}}h={count:f,texture:L,size:new Le(C,y)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function cp(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const rc=new Bt,Ko=new Zl(1,1),ac=new Gl,oc=new gh,lc=new Kl,jo=[],Zo=[],Jo=new Float32Array(16),Qo=new Float32Array(9),el=new Float32Array(4);function Ii(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=jo[s];if(r===void 0&&(r=new Float32Array(s),jo[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qs(i,e){let t=Zo[e];t===void 0&&(t=new Int32Array(e),Zo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function pp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;el.set(n),i.uniformMatrix2fv(this.addr,!1,el),Tt(t,n)}}function mp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;Qo.set(n),i.uniformMatrix3fv(this.addr,!1,Qo),Tt(t,n)}}function gp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;Jo.set(n),i.uniformMatrix4fv(this.addr,!1,Jo),Tt(t,n)}}function _p(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function yp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function Ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function bp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ko.compareFunction=zl,r=Ko):r=rc,t.setTexture2D(e||r,s)}function Tp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||oc,s)}function Ap(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||lc,s)}function Rp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ac,s)}function Cp(i){switch(i){case 5126:return hp;case 35664:return dp;case 35665:return up;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return _p;case 35667:case 35671:return vp;case 35668:case 35672:return xp;case 35669:case 35673:return Mp;case 5125:return yp;case 36294:return Sp;case 36295:return wp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Rp}}function Pp(i,e){i.uniform1fv(this.addr,e)}function Lp(i,e){const t=Ii(e,this.size,2);i.uniform2fv(this.addr,t)}function Ip(i,e){const t=Ii(e,this.size,3);i.uniform3fv(this.addr,t)}function Dp(i,e){const t=Ii(e,this.size,4);i.uniform4fv(this.addr,t)}function Up(i,e){const t=Ii(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Np(i,e){const t=Ii(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fp(i,e){const t=Ii(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Op(i,e){i.uniform1iv(this.addr,e)}function Bp(i,e){i.uniform2iv(this.addr,e)}function kp(i,e){i.uniform3iv(this.addr,e)}function zp(i,e){i.uniform4iv(this.addr,e)}function Hp(i,e){i.uniform1uiv(this.addr,e)}function Vp(i,e){i.uniform2uiv(this.addr,e)}function Gp(i,e){i.uniform3uiv(this.addr,e)}function Wp(i,e){i.uniform4uiv(this.addr,e)}function Xp(i,e,t){const n=this.cache,s=e.length,r=Qs(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||rc,r[a])}function qp(i,e,t){const n=this.cache,s=e.length,r=Qs(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||oc,r[a])}function Yp(i,e,t){const n=this.cache,s=e.length,r=Qs(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||lc,r[a])}function $p(i,e,t){const n=this.cache,s=e.length,r=Qs(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ac,r[a])}function Kp(i){switch(i){case 5126:return Pp;case 35664:return Lp;case 35665:return Ip;case 35666:return Dp;case 35674:return Up;case 35675:return Np;case 35676:return Fp;case 5124:case 35670:return Op;case 35667:case 35671:return Bp;case 35668:case 35672:return kp;case 35669:case 35673:return zp;case 5125:return Hp;case 36294:return Vp;case 36295:return Gp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return $p}}class jp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cp(t.type)}}class Zp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kp(t.type)}}class Jp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function tl(i,e){i.seq.push(e),i.map[e.id]=e}function Qp(i,e,t){const n=i.name,s=n.length;for(kr.lastIndex=0;;){const r=kr.exec(n),a=kr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){tl(t,c===void 0?new jp(o,i,e):new Zp(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Jp(o),tl(t,f)),t=f}}}class ks{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Qp(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function nl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const e0=37297;let t0=0;function n0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const il=new Ve;function i0(i){tt._getMatrix(il,tt.workingColorSpace,i);const e=`mat3( ${il.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Hs:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+n0(i.getShaderSource(e),o)}else return r}function s0(i,e){const t=i0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function r0(i,e){let t;switch(e){case Xc:t="Linear";break;case qc:t="Reinhard";break;case Yc:t="Cineon";break;case Cl:t="ACESFilmic";break;case Kc:t="AgX";break;case jc:t="Neutral";break;case $c:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ls=new R;function a0(){tt.getLuminanceCoefficients(Ls);const i=Ls.x.toFixed(4),e=Ls.y.toFixed(4),t=Ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function l0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function c0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Hi(i){return i!==""}function rl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function al(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(i){return i.replace(h0,u0)}const d0=new Map;function u0(i,e){let t=Xe[e];if(t===void 0){const n=d0.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Da(t)}const f0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(i){return i.replace(f0,p0)}function p0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ll(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function m0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Al?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function g0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bi:case Ti:e="ENVMAP_TYPE_CUBE";break;case Ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ti&&(e="ENVMAP_MODE_REFRACTION"),e}function v0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rl:e="ENVMAP_BLENDING_MULTIPLY";break;case Gc:e="ENVMAP_BLENDING_MIX";break;case Wc:e="ENVMAP_BLENDING_ADD";break}return e}function x0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function M0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=m0(t),c=g0(t),u=_0(t),f=v0(t),h=x0(t),d=o0(t),g=l0(r),_=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hi).join(`
`),p.length>0&&(p+=`
`)):(m=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),p=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Fn?r0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,s0("linearToOutputTexel",t.outputColorSpace),a0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hi).join(`
`)),a=Da(a),a=rl(a,t),a=al(a,t),o=Da(o),o=rl(o,t),o=al(o,t),a=ol(a),o=ol(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===co?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===co?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=T+m+a,x=T+p+o,C=nl(s,s.VERTEX_SHADER,b),y=nl(s,s.FRAGMENT_SHADER,x);s.attachShader(_,C),s.attachShader(_,y),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(I){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(C)||"",j=s.getShaderInfoLog(y)||"",Y=O.trim(),K=H.trim(),ie=j.trim();let V=!0,fe=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,y);else{const ve=sl(s,C,"vertex"),Se=sl(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+ve+`
`+Se)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(K===""||ie==="")&&(fe=!1);fe&&(I.diagnostics={runnable:V,programLog:Y,vertexShader:{log:K,prefix:m},fragmentShader:{log:ie,prefix:p}})}s.deleteShader(C),s.deleteShader(y),L=new ks(s,_),M=c0(s,_)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,e0)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=y,this}let y0=0;class S0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new w0(e),t.set(e,n)),n}}class w0{constructor(e){this.id=y0++,this.code=e,this.usedTimes=0}}function E0(i,e,t,n,s,r,a){const o=new Ga,l=new S0,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,E,I,O,H){const j=O.fog,Y=H.geometry,K=M.isMeshStandardMaterial?O.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),V=ie&&ie.mapping===Ys?ie.image.height:null,fe=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ve=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Se=ve!==void 0?ve.length:0;let Ge=0;Y.morphAttributes.position!==void 0&&(Ge=1),Y.morphAttributes.normal!==void 0&&(Ge=2),Y.morphAttributes.color!==void 0&&(Ge=3);let nt,Je,Qe,Q;if(fe){const it=ln[fe];nt=it.vertexShader,Je=it.fragmentShader}else nt=M.vertexShader,Je=M.fragmentShader,l.update(M),Qe=l.getVertexShaderID(M),Q=l.getFragmentShaderID(M);const se=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ne=H.isInstancedMesh===!0,Ee=H.isBatchedMesh===!0,Ke=!!M.map,St=!!M.matcap,S=!!ie,Z=!!M.aoMap,J=!!M.lightMap,ee=!!M.bumpMap,$=!!M.normalMap,be=!!M.displacementMap,ne=!!M.emissiveMap,de=!!M.metalnessMap,We=!!M.roughnessMap,ze=M.anisotropy>0,A=M.clearcoat>0,v=M.dispersion>0,B=M.iridescence>0,W=M.sheen>0,re=M.transmission>0,G=ze&&!!M.anisotropyMap,Pe=A&&!!M.clearcoatMap,he=A&&!!M.clearcoatNormalMap,Ae=A&&!!M.clearcoatRoughnessMap,Re=B&&!!M.iridescenceMap,le=B&&!!M.iridescenceThicknessMap,_e=W&&!!M.sheenColorMap,Fe=W&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,me=!!M.specularColorMap,He=!!M.specularIntensityMap,D=re&&!!M.transmissionMap,ce=re&&!!M.thicknessMap,ue=!!M.gradientMap,Me=!!M.alphaMap,ae=M.alphaTest>0,te=!!M.alphaHash,Te=!!M.extensions;let ke=Fn;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ke=i.toneMapping);const ft={shaderID:fe,shaderType:M.type,shaderName:M.name,vertexShader:nt,fragmentShader:Je,defines:M.defines,customVertexShaderID:Qe,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&H._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&H.instanceColor!==null,instancingMorph:Ne&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ai,alphaToCoverage:!!M.alphaToCoverage,map:Ke,matcap:St,envMap:S,envMapMode:S&&ie.mapping,envMapCubeUVHeight:V,aoMap:Z,lightMap:J,bumpMap:ee,normalMap:$,displacementMap:h&&be,emissiveMap:ne,normalMapObjectSpace:$&&M.normalMapType===eh,normalMapTangentSpace:$&&M.normalMapType===kl,metalnessMap:de,roughnessMap:We,anisotropy:ze,anisotropyMap:G,clearcoat:A,clearcoatMap:Pe,clearcoatNormalMap:he,clearcoatRoughnessMap:Ae,dispersion:v,iridescence:B,iridescenceMap:Re,iridescenceThicknessMap:le,sheen:W,sheenColorMap:_e,sheenRoughnessMap:Fe,specularMap:Ce,specularColorMap:me,specularIntensityMap:He,transmission:re,transmissionMap:D,thicknessMap:ce,gradientMap:ue,opaque:M.transparent===!1&&M.blending===Si&&M.alphaToCoverage===!1,alphaMap:Me,alphaTest:ae,alphaHash:te,combine:M.combine,mapUv:Ke&&_(M.map.channel),aoMapUv:Z&&_(M.aoMap.channel),lightMapUv:J&&_(M.lightMap.channel),bumpMapUv:ee&&_(M.bumpMap.channel),normalMapUv:$&&_(M.normalMap.channel),displacementMapUv:be&&_(M.displacementMap.channel),emissiveMapUv:ne&&_(M.emissiveMap.channel),metalnessMapUv:de&&_(M.metalnessMap.channel),roughnessMapUv:We&&_(M.roughnessMap.channel),anisotropyMapUv:G&&_(M.anisotropyMap.channel),clearcoatMapUv:Pe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&_(M.sheenRoughnessMap.channel),specularMapUv:Ce&&_(M.specularMap.channel),specularColorMapUv:me&&_(M.specularColorMap.channel),specularIntensityMapUv:He&&_(M.specularIntensityMap.channel),transmissionMapUv:D&&_(M.transmissionMap.channel),thicknessMapUv:ce&&_(M.thicknessMap.channel),alphaMapUv:Me&&_(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&($||ze),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(Ke||Me),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ye,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ge,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ke&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)===lt,decodeVideoTextureEmissive:ne&&M.emissiveMap.isVideoTexture===!0&&tt.getTransfer(M.emissiveMap.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ut,flipSided:M.side===Ht,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Te&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&M.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function p(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)E.push(I),E.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(T(E,M),b(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function T(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function b(M,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const E=g[M.type];let I;if(E){const O=ln[E];I=Ch.clone(O.uniforms)}else I=M.uniforms;return I}function C(M,E){let I;for(let O=0,H=u.length;O<H;O++){const j=u[O];if(j.cacheKey===E){I=j,++I.usedTimes;break}}return I===void 0&&(I=new M0(i,E,M,r),u.push(I)),I}function y(M){if(--M.usedTimes===0){const E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),M.destroy()}}function P(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:y,releaseShaderCache:P,programs:u,dispose:L}}function b0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function T0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function cl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,h,d,g,_,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||T0),n.length>1&&n.sort(h||cl),s.length>1&&s.sort(h||cl)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function A0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new hl,i.set(n,[a])):s>=r.length?(a=new hl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function R0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ye};break;case"SpotLight":t={position:new R,direction:new R,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function C0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let P0=0;function L0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function I0(i){const e=new R0,t=C0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new ut,a=new ut;function o(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,b=0,x=0,C=0,y=0,P=0;c.sort(L0);for(let M=0,E=c.length;M<E;M++){const I=c[M],O=I.color,H=I.intensity,j=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=O.r*H,f+=O.g*H,h+=O.b*H;else if(I.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(I.sh.coefficients[K],H);P++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ie=I.shadow,V=t.get(I);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=I.shadow.matrix,T++}n.directional[d]=K,d++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(O).multiplyScalar(H),K.distance=j,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,n.spot[_]=K;const ie=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,ie.updateMatrices(I),I.castShadow&&y++),n.spotLightMatrix[_]=ie.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=Y,x++}_++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(O).multiplyScalar(H),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=K,m++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){const ie=I.shadow,V=t.get(I);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,V.shadowCameraNear=ie.camera.near,V.shadowCameraFar=ie.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=K,g++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(H),K.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[p]=K,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const L=n.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==T||L.numPointShadows!==b||L.numSpotShadows!==x||L.numSpotMaps!==C||L.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+C-y,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=P,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=T,L.numPointShadows=b,L.numSpotShadows=x,L.numSpotMaps=C,L.numLightProbes=P,n.version=P0++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const b=c[p];if(b.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(b.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function dl(i){const e=new I0(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function D0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new dl(i),e.set(s,[o])):r>=a.length?(o=new dl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const U0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N0=`uniform sampler2D shadow_pass;
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
}`;function F0(i,e,t){let n=new Wa;const s=new Le,r=new Le,a=new ct,o=new nd({depthPacking:Qc}),l=new id,c={},u=t.maxTextureSize,f={[On]:Ht,[Ht]:On,[Ut]:Ut},h=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:U0,fragmentShader:N0}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Mt;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new X(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let p=this.type;this.render=function(y,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const M=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Nn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=p!==Mn&&this.type===Mn,j=p===Mn&&this.type!==Mn;for(let Y=0,K=y.length;Y<K;Y++){const ie=y[Y],V=ie.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const fe=V.getFrameExtents();if(s.multiply(fe),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/fe.x),s.x=r.x*fe.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/fe.y),s.y=r.y*fe.y,V.mapSize.y=r.y)),V.map===null||H===!0||j===!0){const Se=this.type!==Mn?{minFilter:rn,magFilter:rn}:{};V.map!==null&&V.map.dispose(),V.map=new ii(s.x,s.y,Se),V.map.texture.name=ie.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ve=V.getViewportCount();for(let Se=0;Se<ve;Se++){const Ge=V.getViewport(Se);a.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),O.viewport(a),V.updateMatrices(ie,Se),n=V.getFrustum(),x(P,L,V.camera,ie,this.type)}V.isPointLightShadow!==!0&&this.type===Mn&&T(V,L),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,E,I)};function T(y,P){const L=e.update(_);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new ii(s.x,s.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(P,null,L,h,_,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(P,null,L,d,_,null)}function b(y,P,L,M){let E=null;const I=L.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)E=I;else if(E=L.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=E.uuid,H=P.uuid;let j=c[O];j===void 0&&(j={},c[O]=j);let Y=j[H];Y===void 0&&(Y=E.clone(),j[H]=Y,P.addEventListener("dispose",C)),E=Y}if(E.visible=P.visible,E.wireframe=P.wireframe,M===Mn?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:f[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const O=i.properties.get(E);O.light=L}return E}function x(y,P,L,M,E){if(y.visible===!1)return;if(y.layers.test(P.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&E===Mn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,y.matrixWorld);const H=e.update(y),j=y.material;if(Array.isArray(j)){const Y=H.groups;for(let K=0,ie=Y.length;K<ie;K++){const V=Y[K],fe=j[V.materialIndex];if(fe&&fe.visible){const ve=b(y,fe,M,E);y.onBeforeShadow(i,y,P,L,H,ve,V),i.renderBufferDirect(L,null,H,ve,y,V),y.onAfterShadow(i,y,P,L,H,ve,V)}}}else if(j.visible){const Y=b(y,j,M,E);y.onBeforeShadow(i,y,P,L,H,Y,null),i.renderBufferDirect(L,null,H,Y,y,null),y.onAfterShadow(i,y,P,L,H,Y,null)}}const O=y.children;for(let H=0,j=O.length;H<j;H++)x(O[H],P,L,M,E)}function C(y){y.target.removeEventListener("dispose",C);for(const L in c){const M=c[L],E=y.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const O0={[qr]:Yr,[$r]:Zr,[Kr]:Jr,[Ei]:jr,[Yr]:qr,[Zr]:$r,[Jr]:Kr,[jr]:Ei};function B0(i,e){function t(){let D=!1;const ce=new ct;let ue=null;const Me=new ct(0,0,0,0);return{setMask:function(ae){ue!==ae&&!D&&(i.colorMask(ae,ae,ae,ae),ue=ae)},setLocked:function(ae){D=ae},setClear:function(ae,te,Te,ke,ft){ft===!0&&(ae*=ke,te*=ke,Te*=ke),ce.set(ae,te,Te,ke),Me.equals(ce)===!1&&(i.clearColor(ae,te,Te,ke),Me.copy(ce))},reset:function(){D=!1,ue=null,Me.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,ue=null,Me=null,ae=null;return{setReversed:function(te){if(ce!==te){const Te=e.get("EXT_clip_control");te?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const ke=ae;ae=null,this.setClear(ke)}},getReversed:function(){return ce},setTest:function(te){te?se(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(te){ue!==te&&!D&&(i.depthMask(te),ue=te)},setFunc:function(te){if(ce&&(te=O0[te]),Me!==te){switch(te){case qr:i.depthFunc(i.NEVER);break;case Yr:i.depthFunc(i.ALWAYS);break;case $r:i.depthFunc(i.LESS);break;case Ei:i.depthFunc(i.LEQUAL);break;case Kr:i.depthFunc(i.EQUAL);break;case jr:i.depthFunc(i.GEQUAL);break;case Zr:i.depthFunc(i.GREATER);break;case Jr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=te}},setLocked:function(te){D=te},setClear:function(te){ae!==te&&(ce&&(te=1-te),i.clearDepth(te),ae=te)},reset:function(){D=!1,ue=null,Me=null,ae=null,ce=!1}}}function s(){let D=!1,ce=null,ue=null,Me=null,ae=null,te=null,Te=null,ke=null,ft=null;return{setTest:function(it){D||(it?se(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(it){ce!==it&&!D&&(i.stencilMask(it),ce=it)},setFunc:function(it,pn,on){(ue!==it||Me!==pn||ae!==on)&&(i.stencilFunc(it,pn,on),ue=it,Me=pn,ae=on)},setOp:function(it,pn,on){(te!==it||Te!==pn||ke!==on)&&(i.stencilOp(it,pn,on),te=it,Te=pn,ke=on)},setLocked:function(it){D=it},setClear:function(it){ft!==it&&(i.clearStencil(it),ft=it)},reset:function(){D=!1,ce=null,ue=null,Me=null,ae=null,te=null,Te=null,ke=null,ft=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,b=null,x=null,C=null,y=null,P=new Ye(0,0,0),L=0,M=!1,E=null,I=null,O=null,H=null,j=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ie=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=ie>=1):V.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=ie>=2);let fe=null,ve={};const Se=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),nt=new ct().fromArray(Se),Je=new ct().fromArray(Ge);function Qe(D,ce,ue,Me){const ae=new Uint8Array(4),te=i.createTexture();i.bindTexture(D,te),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<ue;Te++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(ce+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return te}const Q={};Q[i.TEXTURE_2D]=Qe(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(Ei),ee(!1),$(so),se(i.CULL_FACE),Z(Nn);function se(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function ye(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ne(D,ce){return f[D]!==ce?(i.bindFramebuffer(D,ce),f[D]=ce,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ce),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ee(D,ce){let ue=d,Me=!1;if(D){ue=h.get(ce),ue===void 0&&(ue=[],h.set(ce,ue));const ae=D.textures;if(ue.length!==ae.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Te=ae.length;te<Te;te++)ue[te]=i.COLOR_ATTACHMENT0+te;ue.length=ae.length,Me=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,Me=!0);Me&&i.drawBuffers(ue)}function Ke(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const St={[Zn]:i.FUNC_ADD,[Tc]:i.FUNC_SUBTRACT,[Ac]:i.FUNC_REVERSE_SUBTRACT};St[Rc]=i.MIN,St[Cc]=i.MAX;const S={[Pc]:i.ZERO,[Lc]:i.ONE,[Ic]:i.SRC_COLOR,[Wr]:i.SRC_ALPHA,[Bc]:i.SRC_ALPHA_SATURATE,[Fc]:i.DST_COLOR,[Uc]:i.DST_ALPHA,[Dc]:i.ONE_MINUS_SRC_COLOR,[Xr]:i.ONE_MINUS_SRC_ALPHA,[Oc]:i.ONE_MINUS_DST_COLOR,[Nc]:i.ONE_MINUS_DST_ALPHA,[kc]:i.CONSTANT_COLOR,[zc]:i.ONE_MINUS_CONSTANT_COLOR,[Hc]:i.CONSTANT_ALPHA,[Vc]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(D,ce,ue,Me,ae,te,Te,ke,ft,it){if(D===Nn){_===!0&&(ye(i.BLEND),_=!1);return}if(_===!1&&(se(i.BLEND),_=!0),D!==bc){if(D!==m||it!==M){if((p!==Zn||x!==Zn)&&(i.blendEquation(i.FUNC_ADD),p=Zn,x=Zn),it)switch(D){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tn:i.blendFunc(i.ONE,i.ONE);break;case ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ao:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ro:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ao:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,b=null,C=null,y=null,P.set(0,0,0),L=0,m=D,M=it}return}ae=ae||ce,te=te||ue,Te=Te||Me,(ce!==p||ae!==x)&&(i.blendEquationSeparate(St[ce],St[ae]),p=ce,x=ae),(ue!==T||Me!==b||te!==C||Te!==y)&&(i.blendFuncSeparate(S[ue],S[Me],S[te],S[Te]),T=ue,b=Me,C=te,y=Te),(ke.equals(P)===!1||ft!==L)&&(i.blendColor(ke.r,ke.g,ke.b,ft),P.copy(ke),L=ft),m=D,M=!1}function J(D,ce){D.side===Ut?ye(i.CULL_FACE):se(i.CULL_FACE);let ue=D.side===Ht;ce&&(ue=!ue),ee(ue),D.blending===Si&&D.transparent===!1?Z(Nn):Z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const Me=D.stencilWrite;o.setTest(Me),Me&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(D){E!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),E=D)}function $(D){D!==wc?(se(i.CULL_FACE),D!==I&&(D===so?i.cullFace(i.BACK):D===Ec?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),I=D}function be(D){D!==O&&(K&&i.lineWidth(D),O=D)}function ne(D,ce,ue){D?(se(i.POLYGON_OFFSET_FILL),(H!==ce||j!==ue)&&(i.polygonOffset(ce,ue),H=ce,j=ue)):ye(i.POLYGON_OFFSET_FILL)}function de(D){D?se(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function We(D){D===void 0&&(D=i.TEXTURE0+Y-1),fe!==D&&(i.activeTexture(D),fe=D)}function ze(D,ce,ue){ue===void 0&&(fe===null?ue=i.TEXTURE0+Y-1:ue=fe);let Me=ve[ue];Me===void 0&&(Me={type:void 0,texture:void 0},ve[ue]=Me),(Me.type!==D||Me.texture!==ce)&&(fe!==ue&&(i.activeTexture(ue),fe=ue),i.bindTexture(D,ce||Q[D]),Me.type=D,Me.texture=ce)}function A(){const D=ve[fe];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(D){nt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),nt.copy(D))}function Fe(D){Je.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Je.copy(D))}function Ce(D,ce){let ue=c.get(ce);ue===void 0&&(ue=new WeakMap,c.set(ce,ue));let Me=ue.get(D);Me===void 0&&(Me=i.getUniformBlockIndex(ce,D.name),ue.set(D,Me))}function me(D,ce){const Me=c.get(ce).get(D);l.get(ce)!==Me&&(i.uniformBlockBinding(ce,Me,D.__bindingPointIndex),l.set(ce,Me))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},fe=null,ve={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,b=null,x=null,C=null,y=null,P=new Ye(0,0,0),L=0,M=!1,E=null,I=null,O=null,H=null,j=null,nt.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:ye,bindFramebuffer:Ne,drawBuffers:Ee,useProgram:Ke,setBlending:Z,setMaterial:J,setFlipSided:ee,setCullFace:$,setLineWidth:be,setPolygonOffset:ne,setScissorTest:de,activeTexture:We,bindTexture:ze,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:B,texImage2D:Re,texImage3D:le,updateUBOMapping:Ce,uniformBlockBinding:me,texStorage2D:he,texStorage3D:Ae,texSubImage2D:W,texSubImage3D:re,compressedTexSubImage2D:G,compressedTexSubImage3D:Pe,scissor:_e,viewport:Fe,reset:He}}function k0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return d?new OffscreenCanvas(A,v):Gs("canvas")}function _(A,v,B){let W=1;const re=ze(A);if((re.width>B||re.height>B)&&(W=B/Math.max(re.width,re.height)),W<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const G=Math.floor(W*re.width),Pe=Math.floor(W*re.height);f===void 0&&(f=g(G,Pe));const he=v?g(G,Pe):f;return he.width=G,he.height=Pe,he.getContext("2d").drawImage(A,0,0,G,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+G+"x"+Pe+")."),he}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,v,B,W,re=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let G=v;if(v===i.RED&&(B===i.FLOAT&&(G=i.R32F),B===i.HALF_FLOAT&&(G=i.R16F),B===i.UNSIGNED_BYTE&&(G=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(G=i.R8UI),B===i.UNSIGNED_SHORT&&(G=i.R16UI),B===i.UNSIGNED_INT&&(G=i.R32UI),B===i.BYTE&&(G=i.R8I),B===i.SHORT&&(G=i.R16I),B===i.INT&&(G=i.R32I)),v===i.RG&&(B===i.FLOAT&&(G=i.RG32F),B===i.HALF_FLOAT&&(G=i.RG16F),B===i.UNSIGNED_BYTE&&(G=i.RG8)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(G=i.RG8UI),B===i.UNSIGNED_SHORT&&(G=i.RG16UI),B===i.UNSIGNED_INT&&(G=i.RG32UI),B===i.BYTE&&(G=i.RG8I),B===i.SHORT&&(G=i.RG16I),B===i.INT&&(G=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(G=i.RGB8UI),B===i.UNSIGNED_SHORT&&(G=i.RGB16UI),B===i.UNSIGNED_INT&&(G=i.RGB32UI),B===i.BYTE&&(G=i.RGB8I),B===i.SHORT&&(G=i.RGB16I),B===i.INT&&(G=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),B===i.UNSIGNED_INT&&(G=i.RGBA32UI),B===i.BYTE&&(G=i.RGBA8I),B===i.SHORT&&(G=i.RGBA16I),B===i.INT&&(G=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),v===i.RGBA){const Pe=re?Hs:tt.getTransfer(W);B===i.FLOAT&&(G=i.RGBA32F),B===i.HALF_FLOAT&&(G=i.RGBA16F),B===i.UNSIGNED_BYTE&&(G=Pe===lt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function x(A,v){let B;return A?v===null||v===ni||v===Ki?B=i.DEPTH24_STENCIL8:v===yn?B=i.DEPTH32F_STENCIL8:v===$i&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ni||v===Ki?B=i.DEPTH_COMPONENT24:v===yn?B=i.DEPTH_COMPONENT32F:v===$i&&(B=i.DEPTH_COMPONENT16),B}function C(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==rn&&A.minFilter!==cn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function y(A){const v=A.target;v.removeEventListener("dispose",y),L(v),v.isVideoTexture&&u.delete(v)}function P(A){const v=A.target;v.removeEventListener("dispose",P),E(v)}function L(A){const v=n.get(A);if(v.__webglInit===void 0)return;const B=A.source,W=h.get(B);if(W){const re=W[v.__cacheKey];re.usedTimes--,re.usedTimes===0&&M(A),Object.keys(W).length===0&&h.delete(B)}n.remove(A)}function M(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const B=A.source,W=h.get(B);delete W[v.__cacheKey],a.memory.textures--}function E(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let re=0;re<v.__webglFramebuffer[W].length;re++)i.deleteFramebuffer(v.__webglFramebuffer[W][re]);else i.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)i.deleteFramebuffer(v.__webglFramebuffer[W]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=A.textures;for(let W=0,re=B.length;W<re;W++){const G=n.get(B[W]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(B[W])}n.remove(A)}let I=0;function O(){I=0}function H(){const A=I;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function j(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function Y(A,v){const B=n.get(A);if(A.isVideoTexture&&de(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const W=A.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(B,A,v);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function K(A,v){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Q(B,A,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function ie(A,v){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Q(B,A,v);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function V(A,v){const B=n.get(A);if(A.version>0&&B.__version!==A.version){se(B,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const fe={[Yi]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[ta]:i.MIRRORED_REPEAT},ve={[rn]:i.NEAREST,[Zc]:i.NEAREST_MIPMAP_NEAREST,[as]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[sr]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},Se={[th]:i.NEVER,[oh]:i.ALWAYS,[nh]:i.LESS,[zl]:i.LEQUAL,[ih]:i.EQUAL,[ah]:i.GEQUAL,[sh]:i.GREATER,[rh]:i.NOTEQUAL};function Ge(A,v){if(v.type===yn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===cn||v.magFilter===sr||v.magFilter===as||v.magFilter===ei||v.minFilter===cn||v.minFilter===sr||v.minFilter===as||v.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,fe[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,fe[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,fe[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ve[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ve[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===rn||v.minFilter!==as&&v.minFilter!==ei||v.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function nt(A,v){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",y));const W=v.source;let re=h.get(W);re===void 0&&(re={},h.set(W,re));const G=j(v);if(G!==A.__cacheKey){re[G]===void 0&&(re[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),re[G].usedTimes++;const Pe=re[A.__cacheKey];Pe!==void 0&&(re[A.__cacheKey].usedTimes--,Pe.usedTimes===0&&M(v)),A.__cacheKey=G,A.__webglTexture=re[G].texture}return B}function Je(A,v,B){return Math.floor(Math.floor(A/B)/v)}function Qe(A,v,B,W){const G=A.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,W,v.data);else{G.sort((le,_e)=>le.start-_e.start);let Pe=0;for(let le=1;le<G.length;le++){const _e=G[Pe],Fe=G[le],Ce=_e.start+_e.count,me=Je(Fe.start,v.width,4),He=Je(_e.start,v.width,4);Fe.start<=Ce+1&&me===He&&Je(Fe.start+Fe.count-1,v.width,4)===me?_e.count=Math.max(_e.count,Fe.start+Fe.count-_e.start):(++Pe,G[Pe]=Fe)}G.length=Pe+1;const he=i.getParameter(i.UNPACK_ROW_LENGTH),Ae=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let le=0,_e=G.length;le<_e;le++){const Fe=G[le],Ce=Math.floor(Fe.start/4),me=Math.ceil(Fe.count/4),He=Ce%v.width,D=Math.floor(Ce/v.width),ce=me,ue=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,He),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,He,D,ce,ue,B,W,v.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function Q(A,v,B){let W=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=i.TEXTURE_3D);const re=nt(A,v),G=v.source;t.bindTexture(W,A.__webglTexture,i.TEXTURE0+B);const Pe=n.get(G);if(G.version!==Pe.__version||re===!0){t.activeTexture(i.TEXTURE0+B);const he=tt.getPrimaries(tt.workingColorSpace),Ae=v.colorSpace===Dn?null:tt.getPrimaries(v.colorSpace),Re=v.colorSpace===Dn||he===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let le=_(v.image,!1,s.maxTextureSize);le=We(v,le);const _e=r.convert(v.format,v.colorSpace),Fe=r.convert(v.type);let Ce=b(v.internalFormat,_e,Fe,v.colorSpace,v.isVideoTexture);Ge(W,v);let me;const He=v.mipmaps,D=v.isVideoTexture!==!0,ce=Pe.__version===void 0||re===!0,ue=G.dataReady,Me=C(v,le);if(v.isDepthTexture)Ce=x(v.format===Zi,v.type),ce&&(D?t.texStorage2D(i.TEXTURE_2D,1,Ce,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ce,le.width,le.height,0,_e,Fe,null));else if(v.isDataTexture)if(He.length>0){D&&ce&&t.texStorage2D(i.TEXTURE_2D,Me,Ce,He[0].width,He[0].height);for(let ae=0,te=He.length;ae<te;ae++)me=He[ae],D?ue&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,me.width,me.height,_e,Fe,me.data):t.texImage2D(i.TEXTURE_2D,ae,Ce,me.width,me.height,0,_e,Fe,me.data);v.generateMipmaps=!1}else D?(ce&&t.texStorage2D(i.TEXTURE_2D,Me,Ce,le.width,le.height),ue&&Qe(v,le,_e,Fe)):t.texImage2D(i.TEXTURE_2D,0,Ce,le.width,le.height,0,_e,Fe,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ce,He[0].width,He[0].height,le.depth);for(let ae=0,te=He.length;ae<te;ae++)if(me=He[ae],v.format!==nn)if(_e!==null)if(D){if(ue)if(v.layerUpdates.size>0){const Te=Ho(me.width,me.height,v.format,v.type);for(const ke of v.layerUpdates){const ft=me.data.subarray(ke*Te/me.data.BYTES_PER_ELEMENT,(ke+1)*Te/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,ke,me.width,me.height,1,_e,ft)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,me.width,me.height,le.depth,_e,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Ce,me.width,me.height,le.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,me.width,me.height,le.depth,_e,Fe,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Ce,me.width,me.height,le.depth,0,_e,Fe,me.data)}else{D&&ce&&t.texStorage2D(i.TEXTURE_2D,Me,Ce,He[0].width,He[0].height);for(let ae=0,te=He.length;ae<te;ae++)me=He[ae],v.format!==nn?_e!==null?D?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,me.width,me.height,_e,me.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Ce,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ue&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,me.width,me.height,_e,Fe,me.data):t.texImage2D(i.TEXTURE_2D,ae,Ce,me.width,me.height,0,_e,Fe,me.data)}else if(v.isDataArrayTexture)if(D){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ce,le.width,le.height,le.depth),ue)if(v.layerUpdates.size>0){const ae=Ho(le.width,le.height,v.format,v.type);for(const te of v.layerUpdates){const Te=le.data.subarray(te*ae/le.data.BYTES_PER_ELEMENT,(te+1)*ae/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,le.width,le.height,1,_e,Fe,Te)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,_e,Fe,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,le.width,le.height,le.depth,0,_e,Fe,le.data);else if(v.isData3DTexture)D?(ce&&t.texStorage3D(i.TEXTURE_3D,Me,Ce,le.width,le.height,le.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,_e,Fe,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,le.width,le.height,le.depth,0,_e,Fe,le.data);else if(v.isFramebufferTexture){if(ce)if(D)t.texStorage2D(i.TEXTURE_2D,Me,Ce,le.width,le.height);else{let ae=le.width,te=le.height;for(let Te=0;Te<Me;Te++)t.texImage2D(i.TEXTURE_2D,Te,Ce,ae,te,0,_e,Fe,null),ae>>=1,te>>=1}}else if(He.length>0){if(D&&ce){const ae=ze(He[0]);t.texStorage2D(i.TEXTURE_2D,Me,Ce,ae.width,ae.height)}for(let ae=0,te=He.length;ae<te;ae++)me=He[ae],D?ue&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,_e,Fe,me):t.texImage2D(i.TEXTURE_2D,ae,Ce,_e,Fe,me);v.generateMipmaps=!1}else if(D){if(ce){const ae=ze(le);t.texStorage2D(i.TEXTURE_2D,Me,Ce,ae.width,ae.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Fe,le)}else t.texImage2D(i.TEXTURE_2D,0,Ce,_e,Fe,le);m(v)&&p(W),Pe.__version=G.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function se(A,v,B){if(v.image.length!==6)return;const W=nt(A,v),re=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const G=n.get(re);if(re.version!==G.__version||W===!0){t.activeTexture(i.TEXTURE0+B);const Pe=tt.getPrimaries(tt.workingColorSpace),he=v.colorSpace===Dn?null:tt.getPrimaries(v.colorSpace),Ae=v.colorSpace===Dn||Pe===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Re=v.isCompressedTexture||v.image[0].isCompressedTexture,le=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let te=0;te<6;te++)!Re&&!le?_e[te]=_(v.image[te],!0,s.maxCubemapSize):_e[te]=le?v.image[te].image:v.image[te],_e[te]=We(v,_e[te]);const Fe=_e[0],Ce=r.convert(v.format,v.colorSpace),me=r.convert(v.type),He=b(v.internalFormat,Ce,me,v.colorSpace),D=v.isVideoTexture!==!0,ce=G.__version===void 0||W===!0,ue=re.dataReady;let Me=C(v,Fe);Ge(i.TEXTURE_CUBE_MAP,v);let ae;if(Re){D&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,He,Fe.width,Fe.height);for(let te=0;te<6;te++){ae=_e[te].mipmaps;for(let Te=0;Te<ae.length;Te++){const ke=ae[Te];v.format!==nn?Ce!==null?D?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,ke.width,ke.height,Ce,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,He,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,ke.width,ke.height,Ce,me,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,He,ke.width,ke.height,0,Ce,me,ke.data)}}}else{if(ae=v.mipmaps,D&&ce){ae.length>0&&Me++;const te=ze(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,He,te.width,te.height)}for(let te=0;te<6;te++)if(le){D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e[te].width,_e[te].height,Ce,me,_e[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,_e[te].width,_e[te].height,0,Ce,me,_e[te].data);for(let Te=0;Te<ae.length;Te++){const ft=ae[Te].image[te].image;D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,ft.width,ft.height,Ce,me,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,He,ft.width,ft.height,0,Ce,me,ft.data)}}else{D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ce,me,_e[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,Ce,me,_e[te]);for(let Te=0;Te<ae.length;Te++){const ke=ae[Te];D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,Ce,me,ke.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,He,Ce,me,ke.image[te])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),G.__version=re.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ye(A,v,B,W,re,G){const Pe=r.convert(B.format,B.colorSpace),he=r.convert(B.type),Ae=b(B.internalFormat,Pe,he,B.colorSpace),Re=n.get(v),le=n.get(B);if(le.__renderTarget=v,!Re.__hasExternalTextures){const _e=Math.max(1,v.width>>G),Fe=Math.max(1,v.height>>G);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,G,Ae,_e,Fe,v.depth,0,Pe,he,null):t.texImage2D(re,G,Ae,_e,Fe,0,Pe,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ne(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,re,le.__webglTexture,0,be(v)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,re,le.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(A,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const W=v.depthTexture,re=W&&W.isDepthTexture?W.type:null,G=x(v.stencilBuffer,re),Pe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=be(v);ne(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,G,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,G,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,G,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,A)}else{const W=v.textures;for(let re=0;re<W.length;re++){const G=W[re],Pe=r.convert(G.format,G.colorSpace),he=r.convert(G.type),Ae=b(G.internalFormat,Pe,he,G.colorSpace),Re=be(v);B&&ne(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Ae,v.width,v.height):ne(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,Ae,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const re=W.__webglTexture,G=be(v);if(v.depthTexture.format===ji)ne(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(v.depthTexture.format===Zi)ne(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ke(A){const v=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const W=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const re=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",re)};W.addEventListener("dispose",re),v.__depthDisposeCallback=re}v.__boundDepthTexture=W}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const W=A.texture.mipmaps;W&&W.length>0?Ee(v.__webglFramebuffer[0],A):Ee(v.__webglFramebuffer,A)}else if(B){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=i.createRenderbuffer(),Ne(v.__webglDepthbuffer[W],A,!1);else{const re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,G)}}else{const W=A.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ne(v.__webglDepthbuffer,A,!1);else{const re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function St(A,v,B){const W=n.get(A);v!==void 0&&ye(W.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ke(A)}function S(A){const v=A.texture,B=n.get(A),W=n.get(v);A.addEventListener("dispose",P);const re=A.textures,G=A.isWebGLCubeRenderTarget===!0,Pe=re.length>1;if(Pe||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=v.version,a.memory.textures++),G){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let Ae=0;Ae<v.mipmaps.length;Ae++)B.__webglFramebuffer[he][Ae]=i.createFramebuffer()}else B.__webglFramebuffer[he]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)B.__webglFramebuffer[he]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let he=0,Ae=re.length;he<Ae;he++){const Re=n.get(re[he]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ne(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<re.length;he++){const Ae=re[he];B.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const Re=r.convert(Ae.format,Ae.colorSpace),le=r.convert(Ae.type),_e=b(Ae.internalFormat,Re,le,Ae.colorSpace,A.isXRRenderTarget===!0),Fe=be(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,_e,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,B.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)ye(B.__webglFramebuffer[he][Ae],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae);else ye(B.__webglFramebuffer[he],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let he=0,Ae=re.length;he<Ae;he++){const Re=re[he],le=n.get(Re);let _e=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_e=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,le.__webglTexture),Ge(_e,Re),ye(B.__webglFramebuffer,A,Re,i.COLOR_ATTACHMENT0+he,_e,0),m(Re)&&p(_e)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,W.__webglTexture),Ge(he,v),v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)ye(B.__webglFramebuffer[Ae],A,v,i.COLOR_ATTACHMENT0,he,Ae);else ye(B.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,he,0);m(v)&&p(he),t.unbindTexture()}A.depthBuffer&&Ke(A)}function Z(A){const v=A.textures;for(let B=0,W=v.length;B<W;B++){const re=v[B];if(m(re)){const G=T(A),Pe=n.get(re).__webglTexture;t.bindTexture(G,Pe),p(G),t.unbindTexture()}}}const J=[],ee=[];function $(A){if(A.samples>0){if(ne(A)===!1){const v=A.textures,B=A.width,W=A.height;let re=i.COLOR_BUFFER_BIT;const G=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(A),he=v.length>1;if(he)for(let Re=0;Re<v.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ae=A.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Re=0;Re<v.length;Re++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);const le=n.get(v[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,B,W,0,0,B,W,re,i.NEAREST),l===!0&&(J.length=0,ee.length=0,J.push(i.COLOR_ATTACHMENT0+Re),A.depthBuffer&&A.resolveDepthBuffer===!1&&(J.push(G),ee.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Re=0;Re<v.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);const le=n.get(v[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function be(A){return Math.min(s.maxSamples,A.samples)}function ne(A){const v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function de(A){const v=a.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function We(A,v){const B=A.colorSpace,W=A.format,re=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Ai&&B!==Dn&&(tt.getTransfer(B)===lt?(W!==nn||re!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function ze(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=K,this.setTexture3D=ie,this.setTextureCube=V,this.rebindTextures=St,this.setupRenderTarget=S,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ne}function z0(i,e){function t(n,s=Dn){let r;const a=tt.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===Oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ba)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ul)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ll)return i.BYTE;if(n===Il)return i.SHORT;if(n===$i)return i.UNSIGNED_SHORT;if(n===Fa)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Qi)return i.HALF_FLOAT;if(n===Nl)return i.ALPHA;if(n===Fl)return i.RGB;if(n===nn)return i.RGBA;if(n===ji)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===Ol)return i.RED;if(n===ka)return i.RED_INTEGER;if(n===Bl)return i.RG;if(n===za)return i.RG_INTEGER;if(n===Ha)return i.RGBA_INTEGER;if(n===Ds||n===Us||n===Ns||n===Fs)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ds)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ds)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===na||n===ia||n===sa||n===ra)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===aa||n===oa||n===la)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===aa||n===oa)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===la)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ca||n===ha||n===da||n===ua||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===ya||n===Sa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ca)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ua)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ma)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ga)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===va)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ya)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wa||n===Ea||n===ba)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wa)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ta||n===Aa||n===Ra||n===Ca)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ta)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const H0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V0=`
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

}`;class G0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Jl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bn({vertexShader:H0,fragmentShader:V0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new X(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W0 extends Pi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new G0,p={},T=t.getContextAttributes();let b=null,x=null;const C=[],y=[],P=new Le;let L=null;const M=new qt;M.viewport=new ct;const E=new qt;E.viewport=new ct;const I=[M,E],O=new ld;let H=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let se=C[Q];return se===void 0&&(se=new Tr,C[Q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Q){let se=C[Q];return se===void 0&&(se=new Tr,C[Q]=se),se.getGripSpace()},this.getHand=function(Q){let se=C[Q];return se===void 0&&(se=new Tr,C[Q]=se),se.getHandSpace()};function Y(Q){const se=y.indexOf(Q.inputSource);if(se===-1)return;const ye=C[se];ye!==void 0&&(ye.update(Q.inputSource,Q.frame,c||a),ye.dispatchEvent({type:Q.type,data:Q.inputSource}))}function K(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ie);for(let Q=0;Q<C.length;Q++){const se=y[Q];se!==null&&(y[Q]=null,C[Q].disconnect(se))}H=null,j=null,m.reset();for(const Q in p)delete p[Q];e.setRenderTarget(b),d=null,h=null,f=null,s=null,x=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ie),T.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ne=null,Ee=null;T.depth&&(Ee=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=T.stencil?Zi:ji,Ne=T.stencil?Ki:ni);const Ke={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ke),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new ii(h.textureWidth,h.textureHeight,{format:nn,type:un,depthTexture:new Zl(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ye={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new ii(d.framebufferWidth,d.framebufferHeight,{format:nn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Q){for(let se=0;se<Q.removed.length;se++){const ye=Q.removed[se],Ne=y.indexOf(ye);Ne>=0&&(y[Ne]=null,C[Ne].disconnect(ye))}for(let se=0;se<Q.added.length;se++){const ye=Q.added[se];let Ne=y.indexOf(ye);if(Ne===-1){for(let Ke=0;Ke<C.length;Ke++)if(Ke>=y.length){y.push(ye),Ne=Ke;break}else if(y[Ke]===null){y[Ke]=ye,Ne=Ke;break}if(Ne===-1)break}const Ee=C[Ne];Ee&&Ee.connect(ye)}}const V=new R,fe=new R;function ve(Q,se,ye){V.setFromMatrixPosition(se.matrixWorld),fe.setFromMatrixPosition(ye.matrixWorld);const Ne=V.distanceTo(fe),Ee=se.projectionMatrix.elements,Ke=ye.projectionMatrix.elements,St=Ee[14]/(Ee[10]-1),S=Ee[14]/(Ee[10]+1),Z=(Ee[9]+1)/Ee[5],J=(Ee[9]-1)/Ee[5],ee=(Ee[8]-1)/Ee[0],$=(Ke[8]+1)/Ke[0],be=St*ee,ne=St*$,de=Ne/(-ee+$),We=de*-ee;if(se.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(We),Q.translateZ(de),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ee[10]===-1)Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const ze=St+de,A=S+de,v=be-We,B=ne+(Ne-We),W=Z*S/A*ze,re=J*S/A*ze;Q.projectionMatrix.makePerspective(v,B,W,re,ze,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Se(Q,se){se===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(se.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let se=Q.near,ye=Q.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),O.near=E.near=M.near=se,O.far=E.far=M.far=ye,(H!==O.near||j!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),H=O.near,j=O.far),O.layers.mask=Q.layers.mask|6,M.layers.mask=O.layers.mask&3,E.layers.mask=O.layers.mask&5;const Ne=Q.parent,Ee=O.cameras;Se(O,Ne);for(let Ke=0;Ke<Ee.length;Ke++)Se(Ee[Ke],Ne);Ee.length===2?ve(O,M,E):O.projectionMatrix.copy(M.projectionMatrix),Ge(Q,O,Ne)};function Ge(Q,se,ye){ye===null?Q.matrix.copy(se.matrixWorld):(Q.matrix.copy(ye.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(se.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Pa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Q){return p[Q]};let nt=null;function Je(Q,se){if(u=se.getViewerPose(c||a),g=se,u!==null){const ye=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ne=!1;ye.length!==O.cameras.length&&(O.cameras.length=0,Ne=!0);for(let S=0;S<ye.length;S++){const Z=ye[S];let J=null;if(d!==null)J=d.getViewport(Z);else{const $=f.getViewSubImage(h,Z);J=$.viewport,S===0&&(e.setRenderTargetTextures(x,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(x))}let ee=I[S];ee===void 0&&(ee=new qt,ee.layers.enable(S),ee.viewport=new ct,I[S]=ee),ee.matrix.fromArray(Z.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Z.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(J.x,J.y,J.width,J.height),S===0&&(O.matrix.copy(ee.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ne===!0&&O.cameras.push(ee)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const S=f.getDepthInformation(ye[0]);S&&S.isValid&&S.texture&&m.init(S,s.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let S=0;S<ye.length;S++){const Z=ye[S].camera;if(Z){let J=p[Z];J||(J=new Jl,p[Z]=J);const ee=f.getCameraImage(Z);J.sourceTexture=ee}}}}for(let ye=0;ye<C.length;ye++){const Ne=y[ye],Ee=C[ye];Ne!==null&&Ee!==void 0&&Ee.update(Ne,se,c||a)}nt&&nt(Q,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const Qe=new sc;Qe.setAnimationLoop(Je),this.setAnimationLoop=function(Q){nt=Q},this.dispose=function(){}}}const Yn=new an,X0=new ut;function q0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),b=T.envMap,x=T.envMapRotation;b&&(m.envMap.value=b,Yn.copy(x),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(X0.makeRotationFromEuler(Yn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Y0(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const x=b.program;n.uniformBlockBinding(T,x)}function c(T,b){let x=s[T.id];x===void 0&&(g(T),x=u(T),s[T.id]=x,T.addEventListener("dispose",m));const C=b.program;n.updateUBOMapping(T,C);const y=e.render.frame;r[T.id]!==y&&(h(T),r[T.id]=y)}function u(T){const b=f();T.__bindingPointIndex=b;const x=i.createBuffer(),C=T.__size,y=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const b=s[T.id],x=T.uniforms,C=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,P=x.length;y<P;y++){const L=Array.isArray(x[y])?x[y]:[x[y]];for(let M=0,E=L.length;M<E;M++){const I=L[M];if(d(I,y,M,C)===!0){const O=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let j=0;for(let Y=0;Y<H.length;Y++){const K=H[Y],ie=_(K);typeof K=="number"||typeof K=="boolean"?(I.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,O+j,I.__data)):K.isMatrix3?(I.__data[0]=K.elements[0],I.__data[1]=K.elements[1],I.__data[2]=K.elements[2],I.__data[3]=0,I.__data[4]=K.elements[3],I.__data[5]=K.elements[4],I.__data[6]=K.elements[5],I.__data[7]=0,I.__data[8]=K.elements[6],I.__data[9]=K.elements[7],I.__data[10]=K.elements[8],I.__data[11]=0):(K.toArray(I.__data,j),j+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,b,x,C){const y=T.value,P=b+"_"+x;if(C[P]===void 0)return typeof y=="number"||typeof y=="boolean"?C[P]=y:C[P]=y.clone(),!0;{const L=C[P];if(typeof y=="number"||typeof y=="boolean"){if(L!==y)return C[P]=y,!0}else if(L.equals(y)===!1)return L.copy(y),!0}return!1}function g(T){const b=T.uniforms;let x=0;const C=16;for(let P=0,L=b.length;P<L;P++){const M=Array.isArray(b[P])?b[P]:[b[P]];for(let E=0,I=M.length;E<I;E++){const O=M[E],H=Array.isArray(O.value)?O.value:[O.value];for(let j=0,Y=H.length;j<Y;j++){const K=H[j],ie=_(K),V=x%C,fe=V%ie.boundary,ve=V+fe;x+=fe,ve!==0&&C-ve<ie.storage&&(x+=C-ve),O.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=ie.storage}}}const y=x%C;return y>0&&(x+=C-y),T.__size=x,T.__cache={},this}function _(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const x=a.indexOf(b.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class $0{constructor(e={}){const{canvas:t=ch(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let C=!1;this._outputColorSpace=Ct;let y=0,P=0,L=null,M=-1,E=null;const I=new ct,O=new ct;let H=null;const j=new Ye(0);let Y=0,K=t.width,ie=t.height,V=1,fe=null,ve=null;const Se=new ct(0,0,K,ie),Ge=new ct(0,0,K,ie);let nt=!1;const Je=new Wa;let Qe=!1,Q=!1;const se=new ut,ye=new R,Ne=new ct,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function St(){return L===null?V:1}let S=n;function Z(w,N){return t.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Na}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ae,!1),S===null){const N="webgl2";if(S=Z(N,w),S===null)throw Z(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let J,ee,$,be,ne,de,We,ze,A,v,B,W,re,G,Pe,he,Ae,Re,le,_e,Fe,Ce,me,He;function D(){J=new sp(S),J.init(),Ce=new z0(S,J),ee=new Zf(S,J,e,Ce),$=new B0(S,J),ee.reversedDepthBuffer&&h&&$.buffers.depth.setReversed(!0),be=new op(S),ne=new b0,de=new k0(S,J,$,ne,ee,Ce,be),We=new Qf(x),ze=new ip(x),A=new ud(S),me=new Kf(S,A),v=new rp(S,A,be,me),B=new cp(S,v,A,be),le=new lp(S,ee,de),he=new Jf(ne),W=new E0(x,We,ze,J,ee,me,he),re=new q0(x,ne),G=new A0,Pe=new D0(J),Re=new $f(x,We,ze,$,B,d,l),Ae=new F0(x,B,ee),He=new Y0(S,be,ee,$),_e=new jf(S,J,be),Fe=new ap(S,J,be),be.programs=W.programs,x.capabilities=ee,x.extensions=J,x.properties=ne,x.renderLists=G,x.shadowMap=Ae,x.state=$,x.info=be}D();const ce=new W0(x,S);this.xr=ce,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(K,ie,!1))},this.getSize=function(w){return w.set(K,ie)},this.setSize=function(w,N,k=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,ie=N,t.width=Math.floor(w*V),t.height=Math.floor(N*V),k===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(K*V,ie*V).floor()},this.setDrawingBufferSize=function(w,N,k){K=w,ie=N,V=k,t.width=Math.floor(w*k),t.height=Math.floor(N*k),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(Se)},this.setViewport=function(w,N,k,z){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,N,k,z),$.viewport(I.copy(Se).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(Ge)},this.setScissor=function(w,N,k,z){w.isVector4?Ge.set(w.x,w.y,w.z,w.w):Ge.set(w,N,k,z),$.scissor(O.copy(Ge).multiplyScalar(V).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(w){$.setScissorTest(nt=w)},this.setOpaqueSort=function(w){fe=w},this.setTransparentSort=function(w){ve=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,k=!0){let z=0;if(w){let F=!1;if(L!==null){const oe=L.texture.format;F=oe===Ha||oe===za||oe===ka}if(F){const oe=L.texture.type,ge=oe===un||oe===ni||oe===$i||oe===Ki||oe===Oa||oe===Ba,we=Re.getClearColor(),xe=Re.getClearAlpha(),Ue=we.r,Oe=we.g,Ie=we.b;ge?(g[0]=Ue,g[1]=Oe,g[2]=Ie,g[3]=xe,S.clearBufferuiv(S.COLOR,0,g)):(_[0]=Ue,_[1]=Oe,_[2]=Ie,_[3]=xe,S.clearBufferiv(S.COLOR,0,_))}else z|=S.COLOR_BUFFER_BIT}N&&(z|=S.DEPTH_BUFFER_BIT),k&&(z|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Re.dispose(),G.dispose(),Pe.dispose(),ne.dispose(),We.dispose(),ze.dispose(),B.dispose(),me.dispose(),He.dispose(),W.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",on),ce.removeEventListener("sessionend",Ja),zn.stop()};function ue(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=be.autoReset,N=Ae.enabled,k=Ae.autoUpdate,z=Ae.needsUpdate,F=Ae.type;D(),be.autoReset=w,Ae.enabled=N,Ae.autoUpdate=k,Ae.needsUpdate=z,Ae.type=F}function ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function te(w){const N=w.target;N.removeEventListener("dispose",te),Te(N)}function Te(w){ke(w),ne.remove(w)}function ke(w){const N=ne.get(w).programs;N!==void 0&&(N.forEach(function(k){W.releaseProgram(k)}),w.isShaderMaterial&&W.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,k,z,F,oe){N===null&&(N=Ee);const ge=F.isMesh&&F.matrixWorld.determinant()<0,we=_c(w,N,k,z,F);$.setMaterial(z,ge);let xe=k.index,Ue=1;if(z.wireframe===!0){if(xe=v.getWireframeAttribute(k),xe===void 0)return;Ue=2}const Oe=k.drawRange,Ie=k.attributes.position;let je=Oe.start*Ue,ot=(Oe.start+Oe.count)*Ue;oe!==null&&(je=Math.max(je,oe.start*Ue),ot=Math.min(ot,(oe.start+oe.count)*Ue)),xe!==null?(je=Math.max(je,0),ot=Math.min(ot,xe.count)):Ie!=null&&(je=Math.max(je,0),ot=Math.min(ot,Ie.count));const vt=ot-je;if(vt<0||vt===1/0)return;me.setup(F,z,we,k,xe);let pt,dt=_e;if(xe!==null&&(pt=A.get(xe),dt=Fe,dt.setIndex(pt)),F.isMesh)z.wireframe===!0?($.setLineWidth(z.wireframeLinewidth*St()),dt.setMode(S.LINES)):dt.setMode(S.TRIANGLES);else if(F.isLine){let De=z.linewidth;De===void 0&&(De=1),$.setLineWidth(De*St()),F.isLineSegments?dt.setMode(S.LINES):F.isLineLoop?dt.setMode(S.LINE_LOOP):dt.setMode(S.LINE_STRIP)}else F.isPoints?dt.setMode(S.POINTS):F.isSprite&&dt.setMode(S.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ji("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))dt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const De=F._multiDrawStarts,mt=F._multiDrawCounts,et=F._multiDrawCount,Vt=xe?A.get(xe).bytesPerElement:1,ri=ne.get(z).currentProgram.getUniforms();for(let Gt=0;Gt<et;Gt++)ri.setValue(S,"_gl_DrawID",Gt),dt.render(De[Gt]/Vt,mt[Gt])}else if(F.isInstancedMesh)dt.renderInstances(je,vt,F.count);else if(k.isInstancedBufferGeometry){const De=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,mt=Math.min(k.instanceCount,De);dt.renderInstances(je,vt,mt)}else dt.render(je,vt)};function ft(w,N,k){w.transparent===!0&&w.side===Ut&&w.forceSinglePass===!1?(w.side=Ht,w.needsUpdate=!0,rs(w,N,k),w.side=On,w.needsUpdate=!0,rs(w,N,k),w.side=Ut):rs(w,N,k)}this.compile=function(w,N,k=null){k===null&&(k=w),p=Pe.get(k),p.init(N),b.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==k&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const z=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const oe=F.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){const we=oe[ge];ft(we,k,F),z.add(we)}else ft(oe,k,F),z.add(oe)}),p=b.pop(),z},this.compileAsync=function(w,N,k=null){const z=this.compile(w,N,k);return new Promise(F=>{function oe(){if(z.forEach(function(ge){ne.get(ge).currentProgram.isReady()&&z.delete(ge)}),z.size===0){F(w);return}setTimeout(oe,10)}J.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let it=null;function pn(w){it&&it(w)}function on(){zn.stop()}function Ja(){zn.start()}const zn=new sc;zn.setAnimationLoop(pn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(w){it=w,ce.setAnimationLoop(w),w===null?zn.stop():zn.start()},ce.addEventListener("sessionstart",on),ce.addEventListener("sessionend",Ja),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(N),N=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,L),p=Pe.get(w,b.length),p.init(N),b.push(p),se.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Je.setFromProjectionMatrix(se,hn,N.reversedDepth),Q=this.localClippingEnabled,Qe=he.init(this.clippingPlanes,Q),m=G.get(w,T.length),m.init(),T.push(m),ce.enabled===!0&&ce.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&nr(oe,N,-1/0,x.sortObjects)}nr(w,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(fe,ve),Ke=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ke&&Re.addToRenderList(m,w),this.info.render.frame++,Qe===!0&&he.beginShadows();const k=p.state.shadowsArray;Ae.render(k,w,N),Qe===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const oe=N.cameras;if(F.length>0)for(let ge=0,we=oe.length;ge<we;ge++){const xe=oe[ge];eo(z,F,w,xe)}Ke&&Re.render(w);for(let ge=0,we=oe.length;ge<we;ge++){const xe=oe[ge];Qa(m,w,xe,xe.viewport)}}else F.length>0&&eo(z,F,w,N),Ke&&Re.render(w),Qa(m,w,N);L!==null&&P===0&&(de.updateMultisampleRenderTarget(L),de.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(x,w,N),me.resetDefaultState(),M=-1,E=null,b.pop(),b.length>0?(p=b[b.length-1],Qe===!0&&he.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function nr(w,N,k,z){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Je.intersectsSprite(w)){z&&Ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(se);const ge=B.update(w),we=w.material;we.visible&&m.push(w,ge,we,k,Ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Je.intersectsObject(w))){const ge=B.update(w),we=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ne.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ne.copy(ge.boundingSphere.center)),Ne.applyMatrix4(w.matrixWorld).applyMatrix4(se)),Array.isArray(we)){const xe=ge.groups;for(let Ue=0,Oe=xe.length;Ue<Oe;Ue++){const Ie=xe[Ue],je=we[Ie.materialIndex];je&&je.visible&&m.push(w,ge,je,k,Ne.z,Ie)}}else we.visible&&m.push(w,ge,we,k,Ne.z,null)}}const oe=w.children;for(let ge=0,we=oe.length;ge<we;ge++)nr(oe[ge],N,k,z)}function Qa(w,N,k,z){const F=w.opaque,oe=w.transmissive,ge=w.transparent;p.setupLightsView(k),Qe===!0&&he.setGlobalState(x.clippingPlanes,k),z&&$.viewport(I.copy(z)),F.length>0&&ss(F,N,k),oe.length>0&&ss(oe,N,k),ge.length>0&&ss(ge,N,k),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function eo(w,N,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new ii(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Qi:un,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const oe=p.state.transmissionRenderTarget[z.id],ge=z.viewport||I;oe.setSize(ge.z*x.transmissionResolutionScale,ge.w*x.transmissionResolutionScale);const we=x.getRenderTarget(),xe=x.getActiveCubeFace(),Ue=x.getActiveMipmapLevel();x.setRenderTarget(oe),x.getClearColor(j),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Ke&&Re.render(k);const Oe=x.toneMapping;x.toneMapping=Fn;const Ie=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),Qe===!0&&he.setGlobalState(x.clippingPlanes,z),ss(w,k,z),de.updateMultisampleRenderTarget(oe),de.updateRenderTargetMipmap(oe),J.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let ot=0,vt=N.length;ot<vt;ot++){const pt=N[ot],dt=pt.object,De=pt.geometry,mt=pt.material,et=pt.group;if(mt.side===Ut&&dt.layers.test(z.layers)){const Vt=mt.side;mt.side=Ht,mt.needsUpdate=!0,to(dt,k,z,De,mt,et),mt.side=Vt,mt.needsUpdate=!0,je=!0}}je===!0&&(de.updateMultisampleRenderTarget(oe),de.updateRenderTargetMipmap(oe))}x.setRenderTarget(we,xe,Ue),x.setClearColor(j,Y),Ie!==void 0&&(z.viewport=Ie),x.toneMapping=Oe}function ss(w,N,k){const z=N.isScene===!0?N.overrideMaterial:null;for(let F=0,oe=w.length;F<oe;F++){const ge=w[F],we=ge.object,xe=ge.geometry,Ue=ge.group;let Oe=ge.material;Oe.allowOverride===!0&&z!==null&&(Oe=z),we.layers.test(k.layers)&&to(we,N,k,xe,Oe,Ue)}}function to(w,N,k,z,F,oe){w.onBeforeRender(x,N,k,z,F,oe),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,N,k,z,w,oe),F.transparent===!0&&F.side===Ut&&F.forceSinglePass===!1?(F.side=Ht,F.needsUpdate=!0,x.renderBufferDirect(k,N,z,F,w,oe),F.side=On,F.needsUpdate=!0,x.renderBufferDirect(k,N,z,F,w,oe),F.side=Ut):x.renderBufferDirect(k,N,z,F,w,oe),w.onAfterRender(x,N,k,z,F,oe)}function rs(w,N,k){N.isScene!==!0&&(N=Ee);const z=ne.get(w),F=p.state.lights,oe=p.state.shadowsArray,ge=F.state.version,we=W.getParameters(w,F.state,oe,N,k),xe=W.getProgramCacheKey(we);let Ue=z.programs;z.environment=w.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(w.isMeshStandardMaterial?ze:We).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",te),Ue=new Map,z.programs=Ue);let Oe=Ue.get(xe);if(Oe!==void 0){if(z.currentProgram===Oe&&z.lightsStateVersion===ge)return io(w,we),Oe}else we.uniforms=W.getUniforms(w),w.onBeforeCompile(we,x),Oe=W.acquireProgram(we,xe),Ue.set(xe,Oe),z.uniforms=we.uniforms;const Ie=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=he.uniform),io(w,we),z.needsLights=xc(w),z.lightsStateVersion=ge,z.needsLights&&(Ie.ambientLightColor.value=F.state.ambient,Ie.lightProbe.value=F.state.probe,Ie.directionalLights.value=F.state.directional,Ie.directionalLightShadows.value=F.state.directionalShadow,Ie.spotLights.value=F.state.spot,Ie.spotLightShadows.value=F.state.spotShadow,Ie.rectAreaLights.value=F.state.rectArea,Ie.ltc_1.value=F.state.rectAreaLTC1,Ie.ltc_2.value=F.state.rectAreaLTC2,Ie.pointLights.value=F.state.point,Ie.pointLightShadows.value=F.state.pointShadow,Ie.hemisphereLights.value=F.state.hemi,Ie.directionalShadowMap.value=F.state.directionalShadowMap,Ie.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ie.spotShadowMap.value=F.state.spotShadowMap,Ie.spotLightMatrix.value=F.state.spotLightMatrix,Ie.spotLightMap.value=F.state.spotLightMap,Ie.pointShadowMap.value=F.state.pointShadowMap,Ie.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Oe,z.uniformsList=null,Oe}function no(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=ks.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function io(w,N){const k=ne.get(w);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function _c(w,N,k,z,F){N.isScene!==!0&&(N=Ee),de.resetTextureUnits();const oe=N.fog,ge=z.isMeshStandardMaterial?N.environment:null,we=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ai,xe=(z.isMeshStandardMaterial?ze:We).get(z.envMap||ge),Ue=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Oe=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ie=!!k.morphAttributes.position,je=!!k.morphAttributes.normal,ot=!!k.morphAttributes.color;let vt=Fn;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(vt=x.toneMapping);const pt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,dt=pt!==void 0?pt.length:0,De=ne.get(z),mt=p.state.lights;if(Qe===!0&&(Q===!0||w!==E)){const Nt=w===E&&z.id===M;he.setState(z,w,Nt)}let et=!1;z.version===De.__version?(De.needsLights&&De.lightsStateVersion!==mt.state.version||De.outputColorSpace!==we||F.isBatchedMesh&&De.batching===!1||!F.isBatchedMesh&&De.batching===!0||F.isBatchedMesh&&De.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&De.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&De.instancing===!1||!F.isInstancedMesh&&De.instancing===!0||F.isSkinnedMesh&&De.skinning===!1||!F.isSkinnedMesh&&De.skinning===!0||F.isInstancedMesh&&De.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&De.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&De.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&De.instancingMorph===!1&&F.morphTexture!==null||De.envMap!==xe||z.fog===!0&&De.fog!==oe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==he.numPlanes||De.numIntersection!==he.numIntersection)||De.vertexAlphas!==Ue||De.vertexTangents!==Oe||De.morphTargets!==Ie||De.morphNormals!==je||De.morphColors!==ot||De.toneMapping!==vt||De.morphTargetsCount!==dt)&&(et=!0):(et=!0,De.__version=z.version);let Vt=De.currentProgram;et===!0&&(Vt=rs(z,N,F));let ri=!1,Gt=!1,Di=!1;const gt=Vt.getUniforms(),$t=De.uniforms;if($.useProgram(Vt.program)&&(ri=!0,Gt=!0,Di=!0),z.id!==M&&(M=z.id,Gt=!0),ri||E!==w){$.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),gt.setValue(S,"projectionMatrix",w.projectionMatrix),gt.setValue(S,"viewMatrix",w.matrixWorldInverse);const kt=gt.map.cameraPosition;kt!==void 0&&kt.setValue(S,ye.setFromMatrixPosition(w.matrixWorld)),ee.logarithmicDepthBuffer&&gt.setValue(S,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&gt.setValue(S,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,Gt=!0,Di=!0)}if(F.isSkinnedMesh){gt.setOptional(S,F,"bindMatrix"),gt.setOptional(S,F,"bindMatrixInverse");const Nt=F.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),gt.setValue(S,"boneTexture",Nt.boneTexture,de))}F.isBatchedMesh&&(gt.setOptional(S,F,"batchingTexture"),gt.setValue(S,"batchingTexture",F._matricesTexture,de),gt.setOptional(S,F,"batchingIdTexture"),gt.setValue(S,"batchingIdTexture",F._indirectTexture,de),gt.setOptional(S,F,"batchingColorTexture"),F._colorsTexture!==null&&gt.setValue(S,"batchingColorTexture",F._colorsTexture,de));const Kt=k.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&le.update(F,k,Vt),(Gt||De.receiveShadow!==F.receiveShadow)&&(De.receiveShadow=F.receiveShadow,gt.setValue(S,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&($t.envMap.value=xe,$t.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&($t.envMapIntensity.value=N.environmentIntensity),Gt&&(gt.setValue(S,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&vc($t,Di),oe&&z.fog===!0&&re.refreshFogUniforms($t,oe),re.refreshMaterialUniforms($t,z,V,ie,p.state.transmissionRenderTarget[w.id]),ks.upload(S,no(De),$t,de)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ks.upload(S,no(De),$t,de),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&gt.setValue(S,"center",F.center),gt.setValue(S,"modelViewMatrix",F.modelViewMatrix),gt.setValue(S,"normalMatrix",F.normalMatrix),gt.setValue(S,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Nt=z.uniformsGroups;for(let kt=0,ir=Nt.length;kt<ir;kt++){const Hn=Nt[kt];He.update(Hn,Vt),He.bind(Hn,Vt)}}return Vt}function vc(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function xc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,N,k){const z=ne.get(w);z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ne.get(w.texture).__webglTexture=N,ne.get(w.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){const k=ne.get(w);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const Mc=S.createFramebuffer();this.setRenderTarget=function(w,N=0,k=0){L=w,y=N,P=k;let z=!0,F=null,oe=!1,ge=!1;if(w){const xe=ne.get(w);if(xe.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(S.FRAMEBUFFER,null),z=!1;else if(xe.__webglFramebuffer===void 0)de.setupRenderTarget(w);else if(xe.__hasExternalTextures)de.rebindTextures(w,ne.get(w.texture).__webglTexture,ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ie=w.depthTexture;if(xe.__boundDepthTexture!==Ie){if(Ie!==null&&ne.has(Ie)&&(w.width!==Ie.image.width||w.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(w)}}const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ge=!0);const Oe=ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[N])?F=Oe[N][k]:F=Oe[N],oe=!0):w.samples>0&&de.useMultisampledRTT(w)===!1?F=ne.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?F=Oe[k]:F=Oe,I.copy(w.viewport),O.copy(w.scissor),H=w.scissorTest}else I.copy(Se).multiplyScalar(V).floor(),O.copy(Ge).multiplyScalar(V).floor(),H=nt;if(k!==0&&(F=Mc),$.bindFramebuffer(S.FRAMEBUFFER,F)&&z&&$.drawBuffers(w,F),$.viewport(I),$.scissor(O),$.setScissorTest(H),oe){const xe=ne.get(w.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,k)}else if(ge){const xe=N;for(let Ue=0;Ue<w.textures.length;Ue++){const Oe=ne.get(w.textures[Ue]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Ue,Oe.__webglTexture,k,xe)}}else if(w!==null&&k!==0){const xe=ne.get(w.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,xe.__webglTexture,k)}M=-1},this.readRenderTargetPixels=function(w,N,k,z,F,oe,ge,we=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){$.bindFramebuffer(S.FRAMEBUFFER,xe);try{const Ue=w.textures[we],Oe=Ue.format,Ie=Ue.type;if(!ee.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-z&&k>=0&&k<=w.height-F&&(w.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+we),S.readPixels(N,k,z,F,Ce.convert(Oe),Ce.convert(Ie),oe))}finally{const Ue=L!==null?ne.get(L).__webglFramebuffer:null;$.bindFramebuffer(S.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(w,N,k,z,F,oe,ge,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe)if(N>=0&&N<=w.width-z&&k>=0&&k<=w.height-F){$.bindFramebuffer(S.FRAMEBUFFER,xe);const Ue=w.textures[we],Oe=Ue.format,Ie=Ue.type;if(!ee.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,je),S.bufferData(S.PIXEL_PACK_BUFFER,oe.byteLength,S.STREAM_READ),w.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+we),S.readPixels(N,k,z,F,Ce.convert(Oe),Ce.convert(Ie),0);const ot=L!==null?ne.get(L).__webglFramebuffer:null;$.bindFramebuffer(S.FRAMEBUFFER,ot);const vt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await hh(S,vt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,je),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,oe),S.deleteBuffer(je),S.deleteSync(vt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,k=0){const z=Math.pow(2,-k),F=Math.floor(w.image.width*z),oe=Math.floor(w.image.height*z),ge=N!==null?N.x:0,we=N!==null?N.y:0;de.setTexture2D(w,0),S.copyTexSubImage2D(S.TEXTURE_2D,k,0,0,ge,we,F,oe),$.unbindTexture()};const yc=S.createFramebuffer(),Sc=S.createFramebuffer();this.copyTextureToTexture=function(w,N,k=null,z=null,F=0,oe=null){oe===null&&(F!==0?(Ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=F,F=0):oe=0);let ge,we,xe,Ue,Oe,Ie,je,ot,vt;const pt=w.isCompressedTexture?w.mipmaps[oe]:w.image;if(k!==null)ge=k.max.x-k.min.x,we=k.max.y-k.min.y,xe=k.isBox3?k.max.z-k.min.z:1,Ue=k.min.x,Oe=k.min.y,Ie=k.isBox3?k.min.z:0;else{const Kt=Math.pow(2,-F);ge=Math.floor(pt.width*Kt),we=Math.floor(pt.height*Kt),w.isDataArrayTexture?xe=pt.depth:w.isData3DTexture?xe=Math.floor(pt.depth*Kt):xe=1,Ue=0,Oe=0,Ie=0}z!==null?(je=z.x,ot=z.y,vt=z.z):(je=0,ot=0,vt=0);const dt=Ce.convert(N.format),De=Ce.convert(N.type);let mt;N.isData3DTexture?(de.setTexture3D(N,0),mt=S.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(de.setTexture2DArray(N,0),mt=S.TEXTURE_2D_ARRAY):(de.setTexture2D(N,0),mt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,N.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,N.unpackAlignment);const et=S.getParameter(S.UNPACK_ROW_LENGTH),Vt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),ri=S.getParameter(S.UNPACK_SKIP_PIXELS),Gt=S.getParameter(S.UNPACK_SKIP_ROWS),Di=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,pt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,pt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ue),S.pixelStorei(S.UNPACK_SKIP_ROWS,Oe),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ie);const gt=w.isDataArrayTexture||w.isData3DTexture,$t=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){const Kt=ne.get(w),Nt=ne.get(N),kt=ne.get(Kt.__renderTarget),ir=ne.get(Nt.__renderTarget);$.bindFramebuffer(S.READ_FRAMEBUFFER,kt.__webglFramebuffer),$.bindFramebuffer(S.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let Hn=0;Hn<xe;Hn++)gt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ne.get(w).__webglTexture,F,Ie+Hn),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ne.get(N).__webglTexture,oe,vt+Hn)),S.blitFramebuffer(Ue,Oe,ge,we,je,ot,ge,we,S.DEPTH_BUFFER_BIT,S.NEAREST);$.bindFramebuffer(S.READ_FRAMEBUFFER,null),$.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(F!==0||w.isRenderTargetTexture||ne.has(w)){const Kt=ne.get(w),Nt=ne.get(N);$.bindFramebuffer(S.READ_FRAMEBUFFER,yc),$.bindFramebuffer(S.DRAW_FRAMEBUFFER,Sc);for(let kt=0;kt<xe;kt++)gt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Kt.__webglTexture,F,Ie+kt):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Kt.__webglTexture,F),$t?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Nt.__webglTexture,oe,vt+kt):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Nt.__webglTexture,oe),F!==0?S.blitFramebuffer(Ue,Oe,ge,we,je,ot,ge,we,S.COLOR_BUFFER_BIT,S.NEAREST):$t?S.copyTexSubImage3D(mt,oe,je,ot,vt+kt,Ue,Oe,ge,we):S.copyTexSubImage2D(mt,oe,je,ot,Ue,Oe,ge,we);$.bindFramebuffer(S.READ_FRAMEBUFFER,null),$.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else $t?w.isDataTexture||w.isData3DTexture?S.texSubImage3D(mt,oe,je,ot,vt,ge,we,xe,dt,De,pt.data):N.isCompressedArrayTexture?S.compressedTexSubImage3D(mt,oe,je,ot,vt,ge,we,xe,dt,pt.data):S.texSubImage3D(mt,oe,je,ot,vt,ge,we,xe,dt,De,pt):w.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,oe,je,ot,ge,we,dt,De,pt.data):w.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,oe,je,ot,pt.width,pt.height,dt,pt.data):S.texSubImage2D(S.TEXTURE_2D,oe,je,ot,ge,we,dt,De,pt);S.pixelStorei(S.UNPACK_ROW_LENGTH,et),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Vt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,ri),S.pixelStorei(S.UNPACK_SKIP_ROWS,Gt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Di),oe===0&&N.generateMipmaps&&S.generateMipmap(mt),$.unbindTexture()},this.initRenderTarget=function(w){ne.get(w).__webglFramebuffer===void 0&&de.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?de.setTextureCube(w,0):w.isData3DTexture?de.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?de.setTexture2DArray(w,0):de.setTexture2D(w,0),$.unbindTexture()},this.resetState=function(){y=0,P=0,L=null,$.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class K0{constructor(){this.enabled=!0,this.context=null,this.master=null,this.noiseBuffer=null}init(){if(this.context){this.context.state==="suspended"&&this.context.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.context=new e,this.master=this.context.createGain(),this.master.gain.value=.28,this.master.connect(this.context.destination);const t=this.context.sampleRate;this.noiseBuffer=this.context.createBuffer(1,t,this.context.sampleRate);const n=this.noiseBuffer.getChannelData(0);for(let s=0;s<t;s++)n[s]=Math.random()*2-1}toggle(){return this.enabled=!this.enabled,this.enabled&&this.init(),this.enabled}tone(e,t,n=.15,s="sine",r=e,a=0){if(!this.enabled||(this.init(),!this.context))return;const o=this.context.currentTime+a,l=this.context.createOscillator(),c=this.context.createGain();l.type=s,l.frequency.setValueAtTime(e,o),l.frequency.exponentialRampToValueAtTime(Math.max(20,r),o+t),c.gain.setValueAtTime(n,o),c.gain.exponentialRampToValueAtTime(1e-4,o+t),l.connect(c),c.connect(this.master),l.start(o),l.stop(o+t)}noise(e,t=.15,n=1200,s=0){if(!this.enabled||(this.init(),!this.context))return;const r=this.context.currentTime+s,a=this.context.createBufferSource(),o=this.context.createBiquadFilter(),l=this.context.createGain();a.buffer=this.noiseBuffer,o.type="lowpass",o.frequency.value=n,l.gain.setValueAtTime(t,r),l.gain.exponentialRampToValueAtTime(1e-4,r+e),a.connect(o),o.connect(l),l.connect(this.master),a.start(r),a.stop(r+e)}shot(e){e==="shotgun"?(this.noise(.22,.42,950),this.tone(105,.18,.25,"sawtooth",42)):e==="rail"?(this.tone(1250,.28,.18,"sawtooth",85),this.tone(90,.35,.22,"sine",35),this.noise(.16,.2,3e3)):e==="arc"?(this.tone(920,.12,.13,"square",230),this.tone(1560,.09,.08,"sine",440),this.noise(.09,.12,4200)):e==="rocket"?(this.noise(.2,.32,1300),this.tone(150,.32,.2,"sawtooth",55),this.tone(420,.12,.1,"sine",180,.05)):(this.noise(.075,.18,1900),this.tone(190,.07,.12,"square",70))}hit(){this.tone(1250,.035,.055,"square",800)}kill(){this.tone(320,.1,.08,"sine",680),this.tone(740,.12,.06,"sine",980,.05)}enemyShot(){this.tone(260,.14,.07,"sawtooth",90)}damage(){this.noise(.16,.2,450),this.tone(70,.2,.12,"sawtooth",35)}pickup(){this.tone(540,.08,.09,"sine",860),this.tone(850,.13,.07,"sine",1200,.07)}reload(){this.noise(.035,.08,2300),this.tone(430,.04,.04,"square",330,.12)}empty(){this.tone(180,.035,.05,"square",150)}ui(){this.tone(620,.04,.035,"sine",760)}dash(){this.noise(.2,.13,1400),this.tone(160,.2,.12,"sine",640)}pulse(){this.tone(85,.65,.22,"sine",30),this.tone(340,.35,.12,"sawtooth",70)}explosion(){this.noise(.48,.4,600),this.tone(90,.4,.2,"sine",25)}wave(){[220,330,440].forEach((e,t)=>this.tone(e,.22,.07,"sine",e*1.02,t*.1))}upgrade(){[380,570,760].forEach((e,t)=>this.tone(e,.25,.08,"triangle",e*1.1,t*.08))}gameOver(){this.tone(210,.8,.15,"sawtooth",45)}victory(){[262,330,392,523].forEach((e,t)=>this.tone(e,.5,.09,"triangle",e,t*.13))}overdrive(){[330,440,660,880].forEach((e,t)=>this.tone(e,.45,.1,"sawtooth",e*1.35,t*.06)),this.tone(70,.6,.18,"sine",40)}achievement(){[660,880,1320].forEach((e,t)=>this.tone(e,.15,.07,"triangle",e,t*.07))}warning(){this.tone(780,.12,.09,"square",520),this.tone(780,.12,.09,"square",520,.2)}break(){this.tone(140,.5,.22,"sawtooth",60),this.noise(.3,.32,900),this.tone(1200,.18,.12,"square",320)}perfectDodge(){this.tone(900,.18,.12,"sine",1700),this.tone(1500,.12,.08,"triangle",2400,.05),this.noise(.12,.1,5e3)}glitch(){this.tone(60,.12,.16,"square",140),this.noise(.1,.14,2600)}staggerHit(){this.tone(520,.05,.05,"square",360)}}const U=(i,e,t)=>new dn(i,e,t),Be=(i,e,t,n=10)=>new Sn(i,e,t,n),Dt=(i,e=10,t=8)=>new Ci(i,e,t),In=(i,e,t=8)=>new is(i,e,t),st=(i,e,t=6,n=20)=>new Un(i,e,t,n),Mi=(i,e=0)=>new kn(i,e),Is=(i,e=0)=>new Js(i,e),j0=(i=[0,0,0],e=[0,0,0],t=[1,1,1])=>new ut().compose(new R(...i),new Li().setFromEuler(new an(...e)),new R(...t));function Z0(i,e){const t=i.index?i.toNonIndexed():i.clone();e&&t.applyMatrix4(e);for(const n of Object.keys(t.attributes))n!=="position"&&n!=="normal"&&t.deleteAttribute(n);return t.attributes.normal||t.computeVertexNormals(),t}function ul(i){let e=0;for(const a of i)e+=a.attributes.position.count;const t=new Float32Array(e*3),n=new Float32Array(e*3);let s=0;for(const a of i)t.set(a.attributes.position.array,s*3),n.set(a.attributes.normal.array,s*3),s+=a.attributes.position.count,a.dispose();const r=new Mt;return r.setAttribute("position",new Yt(t,3)),r.setAttribute("normal",new Yt(n,3)),r.computeBoundingSphere(),r}class qi{constructor(){this.map=new Map}add(e,t,n,s,r){const a=Z0(t,j0(n,s,r));return this.map.has(e)||this.map.set(e,[]),this.map.get(e).push(a),t.dispose(),this}build(e,t={}){const n=new rt;for(const[s,r]of this.map){const a=new X(ul(r),e[s]);a.castShadow=!!t.castShadow,a.receiveShadow=!!t.receiveShadow,n.add(a)}return n}meshes(e,t={}){const n=[];for(const[s,r]of this.map){const a=new X(ul(r),e[s]);a.castShadow=!!t.castShadow,n.push({key:s,mesh:a})}return n}}const cc=[{metal:3096894,dark:857624,accent:7246217,glow:5568466},{metal:3944744,dark:1314829,accent:10123348,glow:16753485},{metal:2834254,dark:594198,accent:8103106,glow:6930431},{metal:2374979,dark:528917,accent:7780800,glow:8251647},{metal:3812384,dark:1314056,accent:12159570,glow:16742973},{metal:2373700,dark:529176,accent:8372182,glow:9431295},{metal:3160636,dark:857110,accent:9086624,glow:16766044},{metal:3812412,dark:1314068,accent:11040936,glow:16743122},{metal:2763312,dark:789520,accent:10132136,glow:15132415},{metal:2966584,dark:792080,accent:8367750,glow:8257436},{metal:4471842,dark:1446666,accent:11575378,glow:16769357},{metal:4205355,dark:1444876,accent:11563120,glow:16739162},{metal:2503744,dark:528922,accent:7247032,glow:10475775},{metal:2895690,dark:658458,accent:9081032,glow:11577599},{metal:4863008,dark:1708040,accent:13673564,glow:16761421}];function J0(i){const e=cc[i],t=n=>new Rt({color:n,emissive:n,emissiveIntensity:.03,metalness:.72,roughness:.42});return{metal:t(e.metal),dark:t(e.dark),accent:t(e.accent),glow:new qe({color:e.glow,toneMapped:!1}),glass:new qe({color:e.glow,transparent:!0,opacity:.28,toneMapped:!1,side:Ut})}}function Q0(i,e){const t=i.add.bind(i);t("dark",U(.115,.28,.14),[0,-.205,.075],[-.2,0,0]),t("metal",U(.125,.055,.16),[0,-.325,.09]),t("accent",U(.018,.075,.02),[0,-.12,-.045]),t("dark",U(.012,.075,.012),[-.045,-.115,-.045]),t("dark",U(.012,.075,.012),[.045,-.115,-.045]),t("dark",U(.1,.012,.012),[0,-.15,-.045]),t("glow",U(.008,.038,.008),[0,-.117,-.049]),t("metal",U(.075,.075,.34),[0,-.045,.28]),t("metal",U(.075,.075,.34),[0,-.205,.28]),t("metal",U(.075,.18,.06),[0,-.125,.44]),t("dark",U(.13,.19,.055),[0,-.12,.47]),t("accent",U(.11,.02,.2),[0,-.02,.3]);for(const n of[-1,1]){t("accent",U(.012,.115,.24),[n*.098,.006,.03]);for(let s=0;s<3;s++)t("dark",Be(.012,.012,.02,6),[n*.106,.03,-.04+s*.075],[0,0,Math.PI/2])}if(t("glow",U(.052,.012,.012),[0,.078,-.02]),e!==1){for(let n=0;n<9;n++)t("dark",U(.075,.017,.026),[0,.115,-.44+n*.062]);t("metal",U(.055,.02,.58),[0,.1,-.2])}}function em(i,e){const t=new rt;let n=null,s=null;if(i==="reddot"){const r=new X(U(.12,.05,.18),e.dark),a=new X(U(.085,.085,.022),e.metal),o=new X(U(.07,.07,.006),new qe({color:3135743,transparent:!0,opacity:.18,depthWrite:!1,side:Ut,toneMapped:!1}));o.position.z=-.012,n=new X(Dt(.012,8,6),new qe({color:16724816,toneMapped:!1})),n.position.set(0,0,-.02),t.add(r,a,o,n),t.position.set(0,.15,-.14)}else{const r=i==="sniper"?.5:i==="scope5"?.34:.26,a=i==="sniper"?.06:.05,o=new X(Be(a,a,r,14),e.dark);o.rotation.x=Math.PI/2;const l=new X(Be(a*.92,a*.92,.04,14),new qe({color:529432,toneMapped:!1}));l.rotation.x=Math.PI/2,l.position.z=-r/2;const c=new X(Be(a*.92,a*.92,.04,14),new qe({color:3135743,transparent:!0,opacity:.22,depthWrite:!1,toneMapped:!1}));c.rotation.x=Math.PI/2,c.position.z=r/2;const u=new X(st(a,.01,5,16),e.accent);u.position.z=-r/2;const f=new X(U(.003,a*1.35,.002),new qe({color:16731501,toneMapped:!1})),h=new X(U(a*1.35,.003,.002),new qe({color:16731501,toneMapped:!1}));if(f.position.z=-r/2+.012,h.position.z=-r/2+.012,s=new rt,s.add(f,h),t.add(o,l,c,u,s),i==="sniper"){const d=new X(st(a*1.06,.014,6,18),e.accent);d.rotation.x=Math.PI/2,t.add(d)}t.position.set(0,.17,-.14)}return{group:t,redDot:n,reticle:s}}const tm=["scope3","reddot","sniper","reddot","reddot","scope3","reddot","reddot","reddot","scope3","reddot","scope5","sniper","sniper","sniper"];function nm(i){const t=[0,1,2,3,4,5,6,6,6,9,9,9,12,12,12][i]??0,n=J0(i),s=new qi,r=(y,P,L,M,E)=>s.add(y,P,L,M,E);if(t===0){r("metal",U(.19,.185,.62),[0,0,-.1]),r("metal",U(.155,.055,.54),[0,.113,-.1]),r("dark",U(.205,.045,.2),[0,.145,-.02]),r("dark",U(.15,.09,.15),[.11,.01,-.16]),r("accent",U(.16,.055,.34),[0,.02,-.46]);for(let y=0;y<6;y++)r("dark",U(.165,.013,.022),[0,.052,-.6+y*.052]),r("glow",U(.012,.055,.3),[.098,.012,-.46]);r("glow",U(.014,.02,.34),[-.098,.045,-.44]),r("metal",Be(.036,.036,.44,10),[0,.012,-.84],[Math.PI/2,0,0]),r("dark",Be(.055,.045,.16,10),[0,.012,-1.08],[Math.PI/2,0,0]);for(let y=0;y<4;y++)r("dark",U(.014,.07,.09),[Math.cos(y/4*Math.PI*2)*.05,.012+Math.sin(y/4*Math.PI*2)*.05,-1.1]);r("accent",U(.03,.075,.03),[0,.15,-.72]),r("glow",U(.008,.025,.008),[0,.19,-.72]),r("dark",U(.095,.03,.15),[0,.15,-.06]),r("metal",U(.085,.085,.022),[0,.2,-.12]),r("metal",U(.085,.085,.022),[0,.2,.01]),r("metal",U(.012,.09,.14),[-.044,.2,-.055]),r("metal",U(.012,.09,.14),[.044,.2,-.055]),r("glass",U(.07,.07,.006),[0,.2,-.055]),r("glow",U(.035,.004,.004),[0,.2,-.058]),r("glow",U(.004,.035,.004),[0,.2,-.058]),r("dark",Be(.032,.032,.12,8),[.12,-.045,-.42],[Math.PI/2,0,0]),r("glass",Be(.028,.028,.006,8),[.12,-.045,-.485],[Math.PI/2,0,0])}else if(t===1){r("metal",U(.23,.205,.66),[0,0,-.08]),r("accent",U(.24,.045,.4),[0,.12,-.16]),r("dark",U(.19,.075,.19),[.13,.02,-.1]);for(const y of[-1,1])r("dark",Be(.048,.048,.72,10),[y*.058,.025,-.73],[Math.PI/2,0,0]),r("accent",Be(.058,.058,.075,10),[y*.058,.025,-1.08],[Math.PI/2,0,0]),r("dark",Be(.04,.04,.012,10),[y*.058,.025,-1.121],[Math.PI/2,0,0]),r("glow",U(.012,.02,.42),[y*.12,.055,-.36]);r("metal",Be(.032,.032,.62,8),[0,-.085,-.65],[Math.PI/2,0,0]);for(let y=0;y<5;y++)r("glow",st(.036,.008,4,10),[0,-.085,-.9+y*.11],[0,Math.PI/2,0]);r("dark",U(.26,.09,.28),[0,-.02,-.5]);for(let y=0;y<7;y++)r("dark",U(.265,.012,.018),[0,.035,-.62+y*.04]);r("metal",st(.075,.014,6,18),[0,.16,-.86]),r("glow",U(.01,.03,.01),[0,.16,-.86]),r("dark",U(.1,.045,.16),[0,.13,.02]),r("accent",U(.036,.012,.2),[0,.14,-.3])}else if(t===2){r("metal",U(.18,.2,.9),[0,0,-.2]),r("accent",U(.19,.045,.8),[0,.12,-.22]),r("dark",U(.2,.11,.3),[0,-.09,.02]);for(const y of[-1,1]){r("glow",U(.032,.075,.82),[y*.105,.02,-.44]),r("metal",U(.055,.09,.86),[y*.135,.02,-.44]);for(let P=0;P<5;P++)r("accent",st(.082,.014,5,12),[y*.105,.02,-.78+P*.17],[0,Math.PI/2,0]);r("dark",U(.075,.085,.2),[y*.13,-.09,.05]),r("glow",U(.045,.012,.16),[y*.13,-.04,.05])}r("dark",Be(.035,.035,.72,10),[0,.015,-.98],[Math.PI/2,0,0]),r("accent",Be(.062,.048,.19,10),[0,.015,-1.32],[Math.PI/2,0,0]),r("glow",Be(.03,.03,.012,10),[0,.015,-1.42],[Math.PI/2,0,0]);for(let y=0;y<6;y++)r("dark",U(.2,.014,.025),[0,.155,-.62+y*.09])}else if(t===3){r("metal",U(.205,.2,.62),[0,0,-.12]),r("accent",U(.215,.045,.5),[0,.12,-.14]),r("dark",U(.16,.11,.24),[0,-.075,.02]);for(const y of[-1,1]){r("metal",U(.075,.13,.5),[y*.155,.03,-.34]),r("glow",U(.012,.075,.42),[y*.196,.03,-.34]);for(let P=0;P<4;P++)r("accent",U(.09,.02,.03),[y*.155,.1,-.52+P*.11])}r("dark",Be(.058,.058,.5,10),[0,.015,-.72],[Math.PI/2,0,0]);for(let y=0;y<5;y++)r("glow",st(.085-y*.005,.016,6,16),[0,.015,-.56-y*.1],[0,Math.PI/2,0]),r("accent",st(.098,.012,5,12),[0,.015,-.56-y*.1],[0,Math.PI/2,0]);r("dark",Be(.075,.06,.14,10),[0,.015,-1.13],[Math.PI/2,0,0]),r("glass",Dt(.062,12,10),[0,.015,-1.2]),r("glow",st(.105,.012,6,20),[0,.015,-1.21]),r("metal",st(.085,.018,6,18),[0,.175,-.18]),r("glow",st(.065,.006,4,16),[0,.175,-.18]),r("metal",U(.05,.075,.05),[0,.115,-.18]),r("glow",U(.014,.014,.014),[0,.175,-.18])}else if(t===4){r("metal",U(.24,.26,.52),[0,0,-.1]),r("dark",U(.28,.32,.34),[0,-.04,.06]),r("accent",U(.22,.05,.5),[0,.13,-.12]);for(let y=0;y<2;y++)for(let P=0;P<3;P++){const L=(P-1)*.072,M=y?-.062:.062;r("dark",Be(.034,.034,.66,8),[L,M,-.64],[Math.PI/2,0,0]),r("accent",st(.036,.009,4,12),[L,M,-.34],[Math.PI/2,0,0]),r("glow",Be(.024,.024,.02,8),[L,M,-.97],[Math.PI/2,0,0])}r("dark",U(.13,.13,.24),[0,.19,-.04]),r("glass",Dt(.055,10,8),[0,.19,-.2]),r("glow",st(.058,.008,4,14),[0,.19,-.21]),r("dark",U(.1,.22,.12),[0,-.24,.08]),r("accent",U(.15,.02,.2),[0,-.12,-.02]);for(let y=0;y<3;y++)r("dark",U(.012,.18,.04),[-.12+y*.12,-.02,-.28])}else if(t===6){r("metal",U(.135,.14,.36),[0,.015,-.1]),r("dark",U(.12,.05,.3),[0,.1,-.12]),r("accent",U(.1,.045,.26),[0,.1,-.12]),r("dark",Be(.032,.032,.12,10),[0,0,-.32],[Math.PI/2,0,0]),r("glow",Be(.024,.024,.02,10),[0,0,-.38],[Math.PI/2,0,0]),r("metal",U(.105,.24,.12),[0,-.18,.06],[-.22,0,0]),r("dark",U(.11,.03,.13),[0,-.3,.075]);for(let y=0;y<4;y++)r("dark",U(.075,.016,.022),[0,.1,-.22+y*.055]);r("accent",U(.02,.06,.02),[.075,.06,.04]),r("glow",U(.03,.012,.012),[0,.075,-.2])}else if(t===9){r("metal",U(.2,.19,.66),[0,0,-.12]),r("accent",U(.17,.05,.5),[0,.115,-.14]),r("dark",U(.17,.11,.42),[0,-.02,-.52]);for(let y=0;y<6;y++)r("glow",U(.012,.045,.02),[.088,-.01,-.72+y*.075]);r("dark",Be(.042,.042,.52,10),[0,.015,-.92],[Math.PI/2,0,0]),r("glow",st(.05,.01,4,14),[0,.015,-1.16],[Math.PI/2,0,0]),r("dark",U(.09,.2,.11),[0,-.2,-.4]),r("accent",U(.14,.02,.24),[0,-.1,-.42]),r("metal",U(.09,.19,.12),[.14,-.14,.02])}else if(t===12){r("metal",U(.17,.17,.7),[0,0,-.08]),r("accent",U(.19,.04,.6),[0,.1,-.12]),r("dark",Be(.036,.042,1.1,12),[0,.01,-.95],[Math.PI/2,0,0]),r("glow",Be(.062,.062,.1,12),[0,.01,-1.48],[Math.PI/2,0,0]);for(let y=0;y<3;y++)r("dark",U(.11,.012,.03),[0,.01,-1.28+y*.1]);for(const y of[-1,1])r("dark",U(.02,.36,.02),[y*.11,-.24,-.86],[0,0,y*.25])}else{r("metal",U(.18,.2,.5),[0,0,-.12]),r("accent",U(.2,.045,.42),[0,.11,-.1]),r("dark",U(.155,.1,.22),[0,-.07,.02]),r("dark",Be(.045,.05,.78,10),[0,.015,-.74],[Math.PI/2,0,0]),r("glass",new kn(.085,0),[0,.015,-1.16]),r("glow",new kn(.05,0),[0,.015,-1.16]),r("glow",st(.075,.01,4,16),[0,.015,-1.12],[Math.PI/2,0,0]),r("dark",Be(.07,.07,.34,12),[.16,-.02,0],[0,0,Math.PI/2]),r("accent",Be(.05,.05,.12,12),[.16,-.02,-.2],[0,0,Math.PI/2]),r("glow",Be(.025,.025,.18,10),[.16,-.02,.06],[0,0,Math.PI/2]);for(let y=0;y<4;y++)r("metal",U(.01,.16,.05),[-.1+y*.066,0,-.34]);r("metal",U(.05,.07,.18),[0,.14,-.18]),r("glow",U(.014,.014,.014),[0,.14,-.18])}Q0(s,t);const a=new rt,o=s.build(n);a.add(o);const l=new rt,c=new X(U(.105,.24,.115),n.dark),u=new X(U(.115,.03,.12),n.accent);u.position.y=.12;const f=new X(U(.012,.14,.012),n.glow);f.position.set(.056,0,.06),l.add(c,u,f),l.position.set(0,-.19,t===1?-.16:-.03),(t===1||t===6)&&(l.visible=!1),a.add(l);const h=new X(U(.055,.04,.085),n.accent);h.position.set(.105,.035,-.16),a.add(h);const d=new rt,g=new X(In(.085,.26,7),new qe({color:cc[i].glow,transparent:!0,opacity:.9,toneMapped:!1,blending:tn,depthWrite:!1}));g.rotation.x=-Math.PI/2;const _=new X(st(.1,.018,5,14),new qe({color:16777215,transparent:!0,opacity:.8,toneMapped:!1,blending:tn,depthWrite:!1}));d.add(g,_);const m=t===12?-1.62:t===9?-1.24:t===6?-.62:t===5?-1.14:t===4?-1.02:t===2?-1.44:t===1?-1.14:t===3?-1.22:-1.12;d.position.set(0,.015,m-.1),d.visible=!1,a.add(d);const p=tm[i]||"reddot",T=em(p,n),b=T.group,x=T.redDot;a.add(b);const C=new rt;if(t===3){for(let y=0;y<3;y++){const P=new X(st(.12+y*.025,.01,5,18),n.glow);P.position.set(0,.015,-.55-y*.16),P.rotation.y=y*.5,C.add(P)}a.add(C)}return a.traverse(y=>{y.frustumCulled=!1,y.renderOrder=10}),{group:a,magazine:l,bolt:h,flash:d,coils:C,muzzleZ:m,materials:n,optics:b,redDot:x,scopeType:p,reticle:T.reticle}}function im(i,e){const t=new qi,n=(h,d,g,_,m)=>t.add(h,d,g,_,m),s={legs:[],rotors:[],shards:[],rings:[],turrets:[],core:null,wings:[]},r=[],a=[];let o=2.2,l=0;const c=(h,d,g,_)=>{const m=new X(h,d);return m.position.set(...g||[0,0,0]),m},u=(h,d,g,_)=>{const m=c(h,e.glow,d);return m.userData.critical=!0,r.push(m),a.push(m),m};if(i==="runner"){o=2.25,n("body",U(.76,.86,.5),[0,1.18,0]),n("accent",U(.62,.34,.535),[0,1.42,-.02]),n("dark",U(.5,.08,.55),[0,1.24,-.01]),n("dark",U(.44,.3,.42),[0,.78,0]),n("accent",U(.16,.16,.1),[0,1.06,-.28]);for(let h=0;h<3;h++)n("glow",U(.035,.13,.02),[-.09+h*.09,.82,-.23]);n("dark",Be(.11,.13,.18,8),[0,1.7,0]),n("body",Mi(.34,0),[0,1.92,0]),n("accent",U(.36,.11,.14),[0,1.88,-.28]),n("dark",U(.28,.09,.1),[0,2.03,-.24]),n("accent",In(.07,.26,5),[0,2.18,.06]);for(const h of[-1,1]){n("accent",U(.3,.24,.42),[h*.53,1.52,0]),n("dark",U(.19,.6,.21),[h*.57,1.12,0]),n("body",U(.14,.36,.16),[h*.57,.78,-.05]);for(let d=0;d<3;d++)n("glow",U(.04,.03,.1),[h*.57,1.32-d*.1,-.16]);n("accent",U(.22,.1,.3),[h*.26,.66,0]),n("dark",U(.1,.1,.1),[h*.26,.48,0])}for(let h=0;h<4;h++)n("accent",In(.075,.3,5),[0,1.65-h*.22,.28],[.5,0,0]);n("glow",U(.26,.02,.03),[0,1.55,.27]),u(Dt(.16,10,8),[0,1.92,-.3]);for(const h of[-1,1]){const d=new rt;d.position.set(h*.25,.56,0);const g=new X(U(.2,.5,.24),e.body);g.position.y=-.22;const _=new X(U(.16,.42,.2),e.dark);_.position.y=-.58;const m=new X(U(.24,.12,.38),e.accent);m.position.set(0,-.8,-.07);const p=new X(U(.19,.1,.25),e.glow);p.position.y=-.45,d.add(g,_,m,p),s.legs.push(d),a.push(d)}s.core=u(Dt(.12,10,8),[0,1.06,-.32])}else if(i==="drone"){o=2.6,l=.35,n("body",Dt(.56,14,10),[0,1.85,0]);for(let h=0;h<6;h++){const d=h/6*Math.PI*2;n("accent",U(.3,.28,.08),[Math.cos(d)*.52,1.85+Math.sin(d)*.35,-.3],[0,0,d])}n("dark",st(.6,.06,6,24),[0,1.85,0],[Math.PI/2,0,0]),n("dark",st(.62,.05,6,24),[0,1.85,0],[0,0,0]),n("glow",U(.5,.035,.05),[0,2.3,-.3]);for(const h of[-1,1])n("body",U(.72,.1,.3),[h*.82,1.85,0]),n("accent",U(.6,.045,.12),[h*.86,1.9,-.1]),n("dark",Be(.055,.07,.5,8),[h*.9,1.62,-.28],[Math.PI/2,0,0]),n("glow",Be(.035,.035,.02,8),[h*.9,1.62,-.54],[Math.PI/2,0,0]),n("dark",Be(.09,.09,.22,8),[h*.45,1.35,.1]),n("glow",Be(.06,.06,.02,8),[h*.45,1.23,.1]);n("dark",U(.3,.14,.22),[0,1.36,-.4]),u(Mi(.31,0),[0,1.85,-.5]);for(const h of[-1,1]){const d=new rt;d.position.set(h*1.18,1.88,0);const g=new X(st(.34,.035,6,20),e.accent);g.rotation.x=Math.PI/2;const _=new X(U(.6,.025,.09),e.glow),m=new X(U(.09,.025,.6),e.glow);d.add(g,_,m),s.rotors.push(d),a.push(d)}}else if(i==="tank"){o=2.9,n("body",U(1.5,1.4,1.1),[0,1.28,0]),n("accent",U(1.24,.5,1.14),[0,1.72,-.02]),n("accent",U(1.1,.3,1.16),[0,.78,-.02]),n("dark",U(1.3,.09,1.14),[0,1.43,-.02]);for(let h=0;h<5;h++)n("glow",U(.09,.1,.03),[-.42+h*.21,1.02,-.58]);n("dark",U(.78,.52,.66),[0,2.18,0]),n("accent",U(.86,.14,.7),[0,2.44,0]),n("dark",U(.6,.12,.1),[0,2.2,-.38]);for(const h of[-1,1]){n("accent",U(.56,.55,.86),[h*1.02,1.56,0]),n("body",U(.44,.9,.7),[h*1.02,.95,0]),n("dark",Be(.115,.15,1.2,8),[h*1.02,1.5,-.72],[Math.PI/2,0,0]),n("glow",Be(.09,.09,.03,8),[h*1.02,1.5,-1.33],[Math.PI/2,0,0]),n("accent",U(.2,.42,.2),[h*.55,.32,0]),n("dark",U(.42,.18,.62),[h*.55,.12,-.08]),n("dark",U(.3,.55,.3),[h*.62,2,.42]);for(let d=0;d<3;d++)n("glow",U(.24,.03,.02),[h*.62,1.82+d*.14,.58]);n("body",U(.28,.28,.9),[h*.82,.7,0])}n("warning",U(.1,.06,.06),[0,2.5,-.36]),u(U(.5,.1,.08),[0,2.2,-.42]),s.core=u(Is(.2,0),[0,1.28,-.6])}else if(i==="phantom"){o=2.25,l=.25,n("body",Mi(.52,0),[0,1.4,0]),n("accent",Mi(.36,0),[0,1.4,.06],[0,Math.PI/4,0]),n("dark",U(.6,.06,.6),[0,1.4,0],[Math.PI/4,0,0]);for(const d of[-1,1])n("accent",U(.1,1.05,.3),[d*.52,1.28,0],[0,0,d*.36]),n("glow",U(.025,.72,.05),[d*.58,1.28,-.17],[0,0,d*.36]),n("dark",In(.12,.6,5),[d*.3,.55,0],[Math.PI,0,d*.2]);n("dark",In(.22,.95,6),[0,.52,0],[Math.PI,0,0]),n("glow",st(.46,.02,5,22),[0,1.4,0]),u(Mi(.23,0),[0,1.4,-.45]);for(let d=0;d<6;d++){const g=new X(Mi(.12+d%2*.05,0),d%2?e.glow:e.accent),_=d/6*Math.PI*2;g.position.set(Math.cos(_)*.85,1.4+Math.sin(_*2)*.28,Math.sin(_)*.55),g.userData.angle=_,g.userData.baseY=g.position.y,s.shards.push(g),a.push(g)}const h=new X(st(.72,.022,5,26),e.glow);h.position.y=1.4,h.rotation.x=Math.PI/2.6,s.rings.push(h),a.push(h)}else if(i==="bomber"){o=2.15,l=.3,n("body",Dt(.54,14,10),[0,1.3,0]);for(let h=0;h<8;h++){const d=h/8*Math.PI*2;n("accent",U(.26,.24,.07),[Math.cos(d)*.46,1.3,Math.sin(d)*.46],[0,-d,0])}n("dark",st(.62,.075,6,22),[0,1.3,0],[Math.PI/2,0,0]),n("warning",st(.64,.02,5,22),[0,1.56,0],[Math.PI/2,0,0]);for(let h=0;h<4;h++){const d=h/4*Math.PI*2;n("dark",Be(.08,.08,.28,7),[Math.cos(d)*.36,.86,Math.sin(d)*.36]),n("glow",Be(.055,.055,.02,7),[Math.cos(d)*.36,.7,Math.sin(d)*.36]),n("warning",U(.07,.05,.03),[Math.cos(d+.5)*.52,1.52,Math.sin(d+.5)*.52])}n("dark",In(.22,.5,6),[0,.62,0],[Math.PI,0,0]),u(Is(.3,0),[0,1.3,-.5]);for(let h=0;h<4;h++){const d=new rt,g=h/4*Math.PI*2;d.position.set(Math.cos(g)*.42,1.3,Math.sin(g)*.42),d.rotation.y=-g;const _=new X(U(.34,.06,.2),e.accent);_.position.x=.2;const m=new X(U(.1,.02,.14),e.glow);m.position.x=.4,d.add(_,m),s.wings.push(d),a.push(d)}}else if(i==="medic"){o=2.4,l=1.25,n("body",Dt(.5,14,10),[0,1.3,0]),n("dark",U(.9,.12,.9),[0,.92,0]),n("accent",U(.66,.05,.66),[0,.86,0]),n("dark",st(.56,.05,6,22),[0,1,0],[Math.PI/2,0,0]),n("accent",U(.52,.17,.06),[0,1.3,-.47]),n("accent",U(.17,.52,.06),[0,1.3,-.47]),n("glow",U(.14,.14,.1),[0,1.3,-.51]);for(const d of[-1,1])n("body",U(.14,.5,.14),[d*.52,1.08,0]);n("accent",U(.2,.04,.2),[0,1.62,0]),u(Dt(.17,10,8),[0,1.3,-.5]);const h=new X(st(.72,.03,5,26),e.glow);h.position.y=1.3,h.rotation.x=Math.PI/2,s.rings.push(h),a.push(h),s.core=u(Dt(.12,10,8),[0,1.62,0])}else if(i==="turret"){o=2.3,l=0,n("body",Be(.86,1.02,.7,14),[0,.35,0]),n("dark",Be(.96,.96,.16,14),[0,.72,0]),n("accent",st(.9,.05,6,30),[0,.82,0],[Math.PI/2,0,0]);for(let T=0;T<12;T++){const b=T/12*Math.PI*2;n("dark",U(.26,.02,.06),[Math.cos(b)*.97,.74,Math.sin(b)*.97],[0,-b,0])}for(const T of[-1,1])n("dark",U(.18,.55,.18),[T*.66,.2,0]);const h=new rt;h.position.y=1.18;const d=new X(Dt(.55,16,12),e.dark),g=new X(U(.42,.2,.12),e.warning);g.position.set(0,.02,-.5);const _=new X(U(.2,.2,.9),e.body);_.position.set(0,.02,-.62);const m=new X(U(.13,.13,.06),e.glow);m.position.set(0,.02,-1.08);const p=new X(st(.5,.03,5,22),e.glow);p.position.y=.02,p.rotation.x=Math.PI/2,h.add(d,g,_,m,p),a.push(h),n("accent",Be(.13,.13,.42,8),[0,1.72,0]),u(Is(.16,0),[0,1.18,-.5]),n("warning",Dt(.1,8,6),[0,1.98,0])}else if(i==="falcon"){o=1.9,l=1.35,n("body",new is(.32,1.5,10),[0,1.2,0],[Math.PI/2,0,0]),n("dark",U(.34,.3,.7),[0,1.2,.1]),n("accent",U(.3,.06,.5),[0,1.32,.05]),u(Dt(.13,10,8),[0,1.2,-.4]),n("glow",new kn(.1,0),[0,1.2,-.55]),n("warning",U(.16,.12,.06),[0,1.26,.62]);for(const h of[-1,1]){const d=new rt;d.position.set(h*.22,1.18,-.05);const g=new X(U(.9,.05,.34),e.accent);g.position.set(h*.45,0,-.1),g.rotation.y=h*.5;const _=new X(U(.16,.03,.2),e.glow);_.position.set(h*.92,0,-.22),_.rotation.y=h*.5,d.add(g,_),s.wings.push(d),a.push(d)}n("dark",U(.04,.4,.28),[0,1.42,-.5]),n("glow",U(.02,.22,.16),[0,1.4,-.52])}else{o=5.6,l=.4,n("body",Dt(1.68,20,14),[0,3.2,0]);for(let h=0;h<10;h++){const d=h/10*Math.PI*2;n("accent",U(.62,.66,.16),[Math.cos(d)*1.5,3.2+Math.sin(d)*.9,-.55],[0,0,d])}n("dark",st(1.74,.12,8,40),[0,3.2,0]),n("dark",st(1.5,.09,8,40),[0,3.2,0],[0,Math.PI/2,0]),n("glow",U(2.4,.06,.08),[0,4.1,-.9]),n("accent",In(.5,1.1,6),[0,5.05,0]),n("warning",In(.24,.6,6),[0,5.5,0]);for(const h of[-1,1]){n("body",U(.85,2.9,.85),[h*2.15,2.75,0]),n("accent",U(.95,.5,.95),[h*2.15,4.1,0]),n("dark",Be(.2,.27,1.7,10),[h*2.15,2.9,-1.05],[Math.PI/2,0,0]),n("warning",Be(.14,.14,.03,10),[h*2.15,2.9,-1.92],[Math.PI/2,0,0]),n("body",U(.5,.9,1.5),[h*1.1,1.35,0]),n("accent",U(.7,.25,1.7),[h*1.1,.85,0]);for(let d=0;d<3;d++)n("glow",U(.06,.5,.06),[h*2.55,3.4-d*.5,-.4]);for(let d=0;d<3;d++)n("dark",Be(.16,.2,.5,8),[h*(1.2+d*.65),1,.7]),n("glow",Be(.12,.12,.02,8),[h*(1.2+d*.65),.74,.7])}n("dark",U(1.2,.5,.8),[0,1.4,.9]),u(Is(.88,1),[0,3.2,-1.35]),s.core=u(Dt(.35,12,10),[0,3.2,-1.62]);for(let h=0;h<3;h++){const d=new X(st(2.02+h*.27,.1,8,44),h===1?e.glow:e.accent);d.position.y=3.2,d.rotation.x=Math.PI/2+h*.45,d.userData.spin=(h%2?-1:1)*(.4+h*.15),s.rings.push(d),a.push(d)}for(const h of[-1,1]){const d=new rt;d.position.set(h*2.15,4.35,0);const g=new X(Dt(.34,12,8),e.dark),_=new X(U(.16,.16,.62),e.body);_.position.z=-.4;const m=new X(U(.1,.1,.05),e.glow);m.position.z=-.73,d.add(g,_,m),s.turrets.push(d),a.push(d)}}const f=t.meshes(e,{castShadow:!1}).map(({mesh:h})=>h);return{staticMeshes:f,dynamic:s,weakpoints:r,extraMeshes:a,height:o,baseY:l,allMeshes:[...f,...a]}}function sm(i,e,t="#54f7d2"){const n=document.createElement("canvas");n.width=512,n.height=256;const s=n.getContext("2d");s.fillStyle="#050d10",s.fillRect(0,0,512,256),s.strokeStyle=t,s.lineWidth=5,s.strokeRect(14,14,484,228),s.globalAlpha=.12,s.fillStyle=t;for(let a=24;a<236;a+=12)s.fillRect(20,a,472,2);s.globalAlpha=1,s.textAlign="center",s.shadowColor=t,s.shadowBlur=26,s.fillStyle="#e9fffa",s.font='bold 68px "Barlow Condensed", sans-serif',s.fillText(i,256,122),s.shadowBlur=12,s.fillStyle=t,s.font='bold 30px "Share Tech Mono", monospace',s.fillText(e,256,180),s.shadowBlur=0,s.fillStyle=t,s.fillRect(60,206,392,3);const r=new js(n);return r.colorSpace=Ct,r.anisotropy=4,r}function rm(){const i=document.createElement("canvas");i.width=128,i.height=256;const e=i.getContext("2d");e.fillStyle="#070f13",e.fillRect(0,0,128,256);let t=999331;const n=()=>(t=t*16807%2147483647,(t-1)/2147483646);for(let r=6;r<250;r+=14)for(let a=6;a<122;a+=16){const o=n();o>.58?(e.fillStyle=o>.9?"#ffb35c":o>.78?"#b45cff":"#4ce0c4",e.globalAlpha=.35+n()*.55,e.fillRect(a,r,9,7)):(e.fillStyle="#12242a",e.globalAlpha=.8,e.fillRect(a,r,9,7))}e.globalAlpha=1;const s=new js(i);return s.colorSpace=Ct,s.wrapS=s.wrapT=Yi,s}function am(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#0c181b",e.fillRect(0,0,256,256),e.strokeStyle="#1c3a37",e.lineWidth=3,e.strokeRect(6,6,244,244),e.strokeStyle="#142b2a",e.lineWidth=1;for(let n=1;n<4;n++)e.beginPath(),e.moveTo(n*64,8),e.lineTo(n*64,248),e.stroke(),e.beginPath(),e.moveTo(8,n*64),e.lineTo(248,n*64),e.stroke();e.fillStyle="#2a5b52";for(const[n,s]of[[16,16],[240,16],[16,240],[240,240]])e.beginPath(),e.arc(n,s,5,0,Math.PI*2),e.fill();e.globalAlpha=.08,e.fillStyle="#7fd8c4";for(let n=0;n<220;n++){const s=n*71%256,r=n*137%256;e.fillRect(s,r,2,2)}e.globalAlpha=1;const t=new js(i);return t.colorSpace=Ct,t.wrapS=t.wrapT=Yi,t.repeat.set(18,18),t.anisotropy=8,t}function om(){const i=document.createElement("canvas");i.width=16,i.height=256;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"rgba(4,10,14,0)"),t.addColorStop(.55,"rgba(15,64,64,0.32)"),t.addColorStop(.82,"rgba(40,150,135,0.42)"),t.addColorStop(1,"rgba(6,18,22,0.05)"),e.fillStyle=t,e.fillRect(0,0,16,256);const n=new js(i);return n.colorSpace=Ct,n}const Ze=(i,e,t)=>new dn(i,e,t),It=(i,e,t,n=10)=>new Sn(i,e,t,n),Ln=(i,e,t=6,n=24)=>new Un(i,e,t,n),zr=(i,e,t=8)=>new is(i,e,t),lm=(i,e=10,t=8)=>new Ci(i,e,t),Hr=(i,e)=>i+Math.random()*(e-i);function cm(i){const e=i.scene,t=new rt;e.add(t),i.world=t;const n=!!i.lowPower;e.background=new Ye(198667),e.fog=new Ks(463640,30,128),e.add(new sd(9357774,264716,2.15));const s=new od(11069154,2.25);s.position.set(-25,42,18),s.castShadow=!i.isTouch&&!n,s.shadow.mapSize.set(1024,1024),s.shadow.camera.left=-55,s.shadow.camera.right=55,s.shadow.camera.top=55,s.shadow.camera.bottom=-55,e.add(s);const r=new Xi(2424784,48,50,2);r.position.set(0,6,0),e.add(r);const a=new Xi(12666367,26,40,2);a.position.set(-30,6,-25),e.add(a);const o=new Xi(16754784,14,32,2);o.position.set(32,5,26),e.add(o);const l=new Rt({color:9414821,map:am(),roughness:.72,metalness:.42}),c=new Rt({color:1385257,roughness:.46,metalness:.82}),u=new Rt({color:528404,roughness:.38,metalness:.9}),f=new Rt({color:3560015,roughness:.34,metalness:.88,emissive:730144,emissiveIntensity:.3}),h=new qe({color:5240272,toneMapped:!1}),d=new qe({color:1867120,toneMapped:!1}),g=new qe({color:10768870,toneMapped:!1}),_=new qe({color:16753226,toneMapped:!1}),m={darkMetal:c,blackMetal:u,accentMetal:f,cyanGlow:h,dimGlow:d,purpleGlow:g,amberGlow:_},p=new qi,T=(S,Z,J,ee,$)=>p.add(S,Z,J,ee,$),b=new X(new sn(150,150),l);b.rotation.x=-Math.PI/2,b.receiveShadow=!0,t.add(b),i.groundMesh=b;const x=new hd(150,75,3121292,1454125);x.material.transparent=!0,x.material.opacity=.17,x.position.y=.014,t.add(x);for(let S=0;S<4;S++){const Z=new X(Ln(6+S*1.7,S%2?.035:.06,5,64),S%2?d:h);Z.rotation.x=-Math.PI/2,Z.position.y=.03,t.add(Z)}for(let S=0;S<24;S++){const Z=S/24*Math.PI*2;T("cyanGlow",Ze(.06,.012,.5),[Math.cos(Z)*11.2,.035,Math.sin(Z)*11.2],[0,-Z,0])}for(let S=0;S<8;S++){const Z=S/8*Math.PI*2;T("amberGlow",Ze(.22,.012,.9),[Math.cos(Z)*7.6,.035,Math.sin(Z)*7.6],[0,-Z,0])}for(let S=0;S<4;S++){const Z=Math.PI/4+S*Math.PI/2;for(let J=13;J<54;J+=4.2)T("dimGlow",Ze(.1,.012,2.4),[Math.cos(Z)*J,.028,Math.sin(Z)*J],[0,-Z,0])}const C=new rt,y=new X(It(4.6,5.2,.65,16),c);y.position.y=.32,y.receiveShadow=!0,C.add(y);const P=new X(It(4.15,4.15,.12,16),f);P.position.y=.7,C.add(P);const L=new X(Ln(4.35,.09,6,48),h);L.rotation.x=-Math.PI/2,L.position.y=.77,C.add(L);for(let S=0;S<16;S++){const Z=S/16*Math.PI*2,J=new X(Ze(.42,.02,.9),S%2?_:u);J.position.set(Math.cos(Z)*4.6,.67,Math.sin(Z)*4.6),J.rotation.y=-Z,C.add(J)}const M=new X(It(.65,.9,5.5,14),new Rt({color:1194548,emissive:1693101,emissiveIntensity:1.35,metalness:.7,roughness:.18}));M.position.y=3.1,C.add(M);const E=new X(It(1.25,1.45,5.4,14),new qe({color:2818016,transparent:!0,opacity:.11,side:Ut,depthWrite:!1,toneMapped:!1,blending:tn}));E.position.y=3.1,C.add(E);const I=new X(It(.22,.55,28,10),new qe({color:3538905,transparent:!0,opacity:.055,depthWrite:!1,toneMapped:!1,blending:tn}));I.position.y=17,C.add(I);const O=new X(new kn(.75,0),new qe({color:10354672,toneMapped:!1}));O.position.y=6.6,C.add(O),i.animatedWorld.push({mesh:O,update:(S,Z)=>{O.rotation.y+=S*.6,O.rotation.x+=S*.25,O.position.y=6.6+Math.sin(Z*1.1)*.22}});for(let S=0;S<3;S++){const Z=new X(Ln(2.25+S*.48,.06,8,64),S===1?g:h);Z.position.y=2.1+S*.92,Z.rotation.x=Math.PI/2+(S-1)*.26,C.add(Z),i.animatedWorld.push({mesh:Z,speed:(S%2?-1:1)*(.18+S*.08),axis:"z"})}for(let S=0;S<6;S++){const Z=S/6*Math.PI*2,J=new X(Ze(.36,4.2,.36),c);J.position.set(Math.cos(Z)*3.4,2.2,Math.sin(Z)*3.4),J.rotation.z=Math.cos(Z)*-.2,J.rotation.x=Math.sin(Z)*.2,C.add(J);const ee=new X(Ze(.14,2.4,.14),f);ee.position.set(Math.cos(Z)*2.55,1.35,Math.sin(Z)*2.55),ee.rotation.z=Math.cos(Z)*.55,ee.rotation.x=-Math.sin(Z)*.55,C.add(ee);const $=new X(Ze(.2,.42,.06),S%2?h:g);$.position.set(Math.cos(Z)*3.4,3.4,Math.sin(Z)*3.4-.2),$.rotation.y=-Z,C.add($)}const H=new X(Ln(3.5,.11,6,48),f);H.rotation.x=-Math.PI/2,H.position.y=4.35,C.add(H),t.add(C),i.obstacles.push({minX:-4.4,maxX:4.4,minZ:-4.4,maxZ:4.4}),i.worldColliders.push(y,M),[[-12,-10,4,1.3,1.7],[12,10,4,1.3,1.7],[-14,14,1.4,5,2.1],[14,-14,1.4,5,2.1],[-28,1,5,1.4,1.4],[28,-1,5,1.4,1.4],[1,29,1.4,5,1.8],[-1,-29,1.4,5,1.8],[-30,-24,3,3,2.7],[30,24,3,3,2.7],[26,-29,4,2,1.5],[-26,29,4,2,1.5],[-8,35,2,2,2.4],[8,-35,2,2,2.4],[37,10,2,4,2.2],[-37,-10,2,4,2.2]].forEach(([S,Z,J,ee,$],be)=>{const ne=new rt,de=new X(Ze(J,$,ee),be%3===0?u:c);de.position.y=$/2,de.castShadow=!n,de.receiveShadow=!0,ne.add(de);const We=new X(Ze(J+.14,.12,ee+.14),f);We.position.y=$+.04,ne.add(We);for(const v of[.16,$*.72,$-.1]){const B=new X(Ze(J+.03,.045,ee+.03),be%4===0?g:d);B.position.y=v,ne.add(B)}const ze=new X(Ze(J*.62,$*.52,.06),f);ze.position.set(0,$*.5,-ee/2-.035),ne.add(ze);for(let v=0;v<4;v++){const B=new X(Ze(J*.5,.035,.02),u);B.position.set(0,$*.34+v*$*.1,-ee/2-.075),ne.add(B)}for(const v of[-1,1]){const B=new X(It(.05,.05,.03,6),be%4===0?_:h);B.rotation.x=Math.PI/2,B.position.set(v*J*.4,$*.5,-ee/2-.07),ne.add(B);const W=new X(Ze(.1,$,.1),f);W.position.set(v*(J/2-.05),$/2,-ee/2+.05),ne.add(W)}const A=new X(Ze(J*.2,.05,.02),be%3===0?_:h);A.position.set(0,$*.86,-ee/2-.07),ne.add(A),ne.position.set(S,0,Z),t.add(ne),i.obstacles.push({minX:S-J/2,maxX:S+J/2,minZ:Z-ee/2,maxZ:Z+ee/2}),i.worldColliders.push(de,We)});const Y=[[-20,8],[20,-8],[-8,-20],[8,20],[-25,25],[25,-25],[16,16],[-16,-16]],K=new Rt({color:6965788,metalness:.7,roughness:.5,emissive:16742957,emissiveIntensity:.5}),ie=new Rt({color:1314826,metalness:.6,roughness:.6}),V=new qe({color:16757322,toneMapped:!1});Y.forEach(([S,Z])=>{const J=new rt,ee=K.clone(),$=new X(It(.62,.62,1.5,14),ee);$.position.y=.75,$.castShadow=!n;const be=new X(It(.66,.62,.12,14),ie);be.position.y=1.5;const ne=new X(It(.64,.64,.3,14),ie);ne.position.y=.78;const de=new X(lm(.1,8,6),V);de.position.y=1.62,J.add($,be,ne,de),J.position.set(S,0,Z),t.add(J);const We={minX:S-.62,maxX:S+.62,minZ:Z-.62,maxZ:Z+.62},ze={group:J,mesh:$,bodyMaterial:ee,health:60,maxHealth:60,position:J.position,dead:!1,flash:0,box:We};$.userData.barrel=ze,i.barrels.push(ze),i.barrelMeshes.push($),i.obstacles.push(We),i.barrelBoxes.add(We)});const fe=new Rt({color:726297,metalness:.78,roughness:.48});[[0,-70,142,2],[0,70,142,2],[-70,0,2,142],[70,0,2,142]].forEach(([S,Z,J,ee])=>{const $=new X(Ze(J,5,ee),fe);$.position.set(S,2.5,Z),t.add($),i.worldColliders.push($);const be=new X(Ze(J+.05,.09,ee+.05),d);be.position.set(S,4.25,Z),t.add(be);const ne=Math.floor(J>ee?J/6:ee/6);for(let de=0;de<ne;de++){const We=-70+de*(140/ne);T("accentMetal",Ze((J>ee,.28),4.2,J>ee?.3:.28),[J>ee?We:S,2.2,J>ee?Z:We])}});const ve=[];for(let S=0;S<12;S++){const Z=S/12*Math.PI*2;ve.push([Math.cos(Z)*45,Math.sin(Z)*45,Z])}ve.forEach(([S,Z,J],ee)=>{T("darkMetal",It(.16,.24,6.4,8),[S,3.2,Z]),T("accentMetal",It(.36,.36,.22,8),[S,.16,Z]),T("accentMetal",Ze(.5,.18,.5),[S,6.45,Z]),T(ee%3===0?"purpleGlow":"cyanGlow",Ze(.36,.5,.36),[S,6.05,Z]),T("dimGlow",Ln(1.1,.035,5,22),[S,.04,Z],[-Math.PI/2,0,0]),T("amberGlow",Ze(.1,.1,.06),[S,4.6,Z],[0,-J,0]);for(const $ of[-1,1])T("accentMetal",Ze(.09,1.6,.09),[S+$*.38,1,Z],[0,0,$*.42])});for(let S=0;S<6;S++){const Z=S/6*Math.PI*2+.35,J=Math.cos(Z)*33,ee=Math.sin(Z)*33,$=7.5+S%2*2.4;T("darkMetal",It(3.1,2.7,.45,8),[J,$,ee]),T("accentMetal",It(3.3,3.3,.1,8),[J,$+.26,ee]),T(S%2?"purpleGlow":"cyanGlow",Ln(3,.055,5,28),[J,$-.2,ee],[-Math.PI/2,0,0]);for(let ne=0;ne<8;ne++){const de=ne/8*Math.PI*2;T("dimGlow",Ze(.08,.02,.6),[J+Math.cos(de)*2.5,$+.32,ee+Math.sin(de)*2.5],[0,-de,0])}const be=new X(zr(2.8,7,10),new qe({color:S%2?10768870:3532996,transparent:!0,opacity:.045,depthWrite:!1,side:Ut,toneMapped:!1,blending:tn}));be.position.set(J,$-3.8,ee),be.rotation.x=Math.PI,t.add(be)}for(let S=0;S<4;S++){const Z=S<2?-1:1,J=S%2?-58:58,ee=[];for(let ne=0;ne<=12;ne++){const de=ne/12;ee.push(new R(-52+de*104,4.2+Math.sin(de*Math.PI*2+S)*.8,J+Z*Math.sin(de*Math.PI)*3))}const $=new ec(ee),be=new X(new Ya($,48,.16,7,!1),S%2?f:c);t.add(be);for(let ne=0;ne<=6;ne++){const de=$.getPoint(ne/6);T("accentMetal",Ze(.12,Math.max(.4,de.y-.2),.12),[de.x,de.y/2,de.z])}}const Se=new qi,Ge=new qi;let nt=7147;const Je=()=>(nt=nt*16807%2147483647,(nt-1)/2147483646);for(let S=0;S<78;S++){const Z=Je()*Math.PI*2,J=80+Je()*60,ee=5+Je()*10,$=5+Je()*10,be=14+Je()*66,ne=Math.cos(Z)*J,de=Math.sin(Z)*J;Se.add("body",Ze(ee,be,$),[ne,be/2-1,de]),Se.add("windows",Ze(ee+.06,be*.86,$+.06),[ne,be/2-1,de]),Se.add("cap",Ze(ee+.4,.22,$+.4),[ne,be-.8,de]),S%2===0&&Ge.add("glow",Ze(ee+.1,.16+Je()*.16,$+.1),[ne,be*(.35+Je()*.45),de]),S%5===0&&Se.add("antenna",It(.07,.07,9,5),[ne,be+3.5,de]),S%6===0&&Se.add("spire",zr(.5,6,5),[ne,be+2,de])}const Qe={body:new Rt({color:1320492,roughness:.78,metalness:.48}),windows:new qe({color:10475728,map:rm(),toneMapped:!1}),cap:c,antenna:d,spire:g,glow:d};t.add(Se.build(Qe)),t.add(Ge.build({glow:g})),[["NEXUS","SECTOR 07","#54f7d2",-58,10,-20,.6],["NX-07","TACTICAL LINK","#7de8ff",58,12,18,-.6],["霓虹余烬","NEON ASHES","#ff9a55",-20,14,-60,0],["WARDEN","APEX SIGNAL","#ff5c62",22,16,60,Math.PI],["零界突击","STRIKE PROTOCOL","#b06bff",-62,9,26,1.15],["SYS.ONLINE","DEFENSE GRID","#54f7d2",62,10,-30,-1.15]].forEach(([S,Z,J,ee,$,be,ne])=>{const de=sm(S,Z,J),We=new X(new sn(9.6,4.8),new qe({map:de,side:Ut,toneMapped:!1}));We.position.set(ee,$,be),We.rotation.y=ne,t.add(We);const ze=new X(Ze(10,5.2,.16),c);ze.position.set(ee,$,be),ze.rotation.y=ne,ze.translateZ(-.12),t.add(ze);const A=new X(It(.12,.16,$-2,8),c);A.position.set(ee,($-2)/2,be),t.add(A)});const se=new qe({map:om(),transparent:!0,opacity:.75,side:Ut,depthWrite:!1,toneMapped:!1});[[0,-145,0],[-145,0,Math.PI/2],[0,145,Math.PI],[145,0,-Math.PI/2]].forEach(([S,Z,J])=>{const ee=new X(new sn(300,42),se);ee.position.set(S,19,Z),ee.rotation.y=J,t.add(ee)}),t.add(p.build(m)),i.spawnPoints=[new R(-48,0,-48),new R(48,0,-48),new R(-48,0,48),new R(48,0,48),new R(0,0,-54),new R(0,0,54),new R(-54,0,0),new R(54,0,0)],i.spawnPoints.forEach((S,Z)=>{const J=new rt,ee=new X(Ln(2.15,.1,8,40),Z%2?g:h);ee.position.y=2.3,J.add(ee);const $=new X(Ln(1.85,.035,6,36),d);$.position.y=2.3,J.add($);for(const ne of[-1,1]){const de=new X(Ze(.26,4.8,.4),c);de.position.set(ne*2.15,2.2,0),J.add(de);const We=new X(Ze(.1,1.2,.1),Z%2?g:h);We.position.set(ne*2.15,2.5,-.24),J.add(We);const ze=new X(Ze(.6,.2,.6),f);ze.position.set(ne*2.15,.1,0),J.add(ze)}const be=new X(Ze(4.6,.3,.45),f);be.position.y=4.6,J.add(be),J.position.copy(S),J.lookAt(0,2,0),t.add(J),i.animatedWorld.push({mesh:$,speed:-.22,axis:"z"}),i.animatedWorld.push({mesh:ee,speed:Z%2?-.3:.3,axis:"z"})});for(let S=0;S<2;S++){const Z=new rt,J=new X(Ze(5.5,.8,1.6),c),ee=new X(zr(.85,1.8,6),f);ee.rotation.z=-Math.PI/2,ee.position.x=3.4;const $=new X(Ze(1.5,.16,5.4),f);for(const We of[-1,1]){const ze=new X(It(.32,.32,1.1,8),c);ze.rotation.x=Math.PI/2,ze.position.set(-1.6,-.1,We*2.2);const A=new X(Ze(.1,.1,.1),g);A.position.set(-1.6,-.1,We*2.8),Z.add(ze,A)}const be=new X(Ze(4.6,.06,.1),h);be.position.set(0,.44,0),Z.add(J,ee,$,be),Z.scale.setScalar(1.2),t.add(Z);const ne=62+S*12,de=S*Math.PI;i.animatedWorld.push({mesh:Z,update:(We,ze)=>{const A=ze*.06+de;Z.position.set(Math.cos(A)*ne,24+Math.sin(ze*.5+de)*1.5,Math.sin(A)*ne),Z.rotation.y=-A+Math.PI/2}})}const Ne=n?260:i.isTouch?380:900,Ee=new Float32Array(Ne*3);for(let S=0;S<Ne;S++)Ee[S*3]=Hr(-75,75),Ee[S*3+1]=Hr(.2,28),Ee[S*3+2]=Hr(-75,75);const Ke=new Mt;Ke.setAttribute("position",new Yt(Ee,3));const St=new zh(Ke,new jl({color:7653818,size:n?.055:.045,transparent:!0,opacity:.5,depthWrite:!1}));t.add(St),i.dust=St}const Ft=Hl.clamp,wt=Hl.lerp,xt=(i,e)=>i+Math.random()*(e-i),fl={lockon:"lock",autofire:"auto",godmode:"god",infinity:"ammo",xray:"wall",timeslip:"slow",purge:"purge",arsenal:"arsenal",recharge:"recharge",overbound:"overbound",standdown:"standdown",help:"help"},$n={lock:"锁头 // LOCK-ON",auto:"自动射击 // AUTO-FIRE",god:"无敌 // GOD-MODE",ammo:"无限弹药 // INFINITY",wall:"透视 // X-RAY",slow:"子弹时间 // TIME-SLIP",purge:"清场 // PURGE",arsenal:"全武器解锁 // ARSENAL",recharge:"能量回满 // RECHARGE",overbound:"越界协议全开 // OVERBOUND",standdown:"协议解除 // STAND-DOWN",help:"作弊码清单 // HELP"},hm={god:"无敌",ammo:"无限弹",lock:"锁头",auto:"自动射",wall:"透视",slow:"时停"},pl=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"];function hc(){let i=null;try{i=localStorage.getItem("nexus-device")}catch{}const e=new URLSearchParams(location.search).get("device");if(["desktop","mobile","board"].includes(e))return e;if(["desktop","mobile","board"].includes(i))return i;const t=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,n=Math.max(innerWidth,innerHeight),s=innerWidth>innerHeight;return t&&s&&(n>=1e3||navigator.maxTouchPoints>=5)?"board":t?"mobile":"desktop"}const _t=[{id:"rifle",name:"VX-9 脉冲",label:"VX-9 <span>脉冲</span>",className:"突击步枪 // AUTO",category:"rifle",price:380,desc:"稳定的全自动脉冲步枪，适合中距离持续压制。",damage:24,fireRate:9,magazine:30,reserve:180,reload:1.45,spread:.009,pellets:1,auto:!0,range:90},{id:"shotgun",name:"SG-12 裂解",label:"SG-12 <span>裂解</span>",className:"战术霰弹枪 // PUMP",category:"special",price:420,desc:"八枚高能弹丸同时释放，近距离可造成毁灭性伤害。",damage:14,fireRate:1.2,magazine:6,reserve:42,reload:1.8,spread:.065,pellets:8,auto:!1,range:42},{id:"rail",name:"R-01 磁轨",label:"R-01 <span>磁轨</span>",className:"磁轨精确步枪 // SEMI",category:"sniper",price:640,desc:"高精度磁轨射线，贯穿一条直线上的所有敌人。",damage:135,fireRate:.8,magazine:5,reserve:25,reload:2.1,spread:.001,pellets:1,auto:!1,range:130,pierce:!0},{id:"arc",name:"ARC-7 弧光",label:"ARC-7 <span>弧光</span>",className:"链式电弧 // CHAIN",category:"special",price:660,desc:"发射链式电弧，命中后自动跳跃到附近敌人。",damage:46,fireRate:3.4,magazine:24,reserve:120,reload:1.7,spread:.014,pellets:1,auto:!0,range:62,chain:3},{id:"rocket",name:"WN-5 蜂巢",label:"WN-5 <span>蜂巢</span>",className:"制导导弹 // HOMING",category:"special",price:780,desc:"六管制导发射器，导弹自动锁定敌人并产生范围爆炸。",damage:120,fireRate:1.1,magazine:4,reserve:16,reload:2.2,spread:0,pellets:1,auto:!1,range:130,rocket:!0,aoe:6},{id:"frost",name:"LN-3 寒霜",label:"LN-3 <span>寒霜</span>",className:"低温步枪 // CRYO",category:"rifle",price:600,desc:"低温步枪，命中使敌人减速 50%，是控场核心手段。",damage:30,fireRate:4.2,magazine:22,reserve:110,reload:1.6,spread:.012,pellets:1,auto:!0,range:95,frost:!0,slowDuration:2.2,slowStrength:.5},{id:"sentinel",name:"PX-1 哨兵",label:"PX-1 <span>哨兵</span>",className:"战术手枪 // SIDEARM",category:"pistol",price:240,desc:"高单发伤害的半自动手枪，弹匣小但暴击收益极高。",damage:42,fireRate:3.2,magazine:12,reserve:96,reload:1.2,spread:.006,pellets:1,auto:!1,range:55,critBonus:.16},{id:"twins",name:"PX-2 双生",label:"PX-2 <span>双生</span>",className:"双持连发 // DUAL",category:"pistol",price:320,desc:"双持全自动机匣，射速极快，适合清理脆皮与游隼。",damage:24,fireRate:6.5,magazine:20,reserve:160,reload:1.5,spread:.018,pellets:1,auto:!0,range:48},{id:"judgement",name:"PX-3 审判",label:"PX-3 <span>审判</span>",className:"重型手炮 // HANDCANNON",category:"pistol",price:420,desc:"大口径手炮，近距离一发可撕开重装单位装甲。",damage:95,fireRate:1.1,magazine:6,reserve:48,reload:1.9,spread:.002,pellets:1,auto:!1,range:70},{id:"dawn",name:"AR-4 破晓",label:"AR-4 <span>破晓</span>",className:"模块化突击步枪 // AUTO",category:"rifle",price:460,desc:"均衡型全自动步枪，伤害与稳定性都优于制式装备。",damage:28,fireRate:8,magazine:32,reserve:192,reload:1.5,spread:.008,pellets:1,auto:!0,range:95},{id:"hornet",name:"AR-8 蜂刺",label:"AR-8 <span>蜂刺</span>",className:"高射速卡宾 // SMG",category:"rifle",price:520,desc:"超高射速低后坐，靠弹幕压制，配合弱点解析收益极高。",damage:16,fireRate:13,magazine:45,reserve:270,reload:1.7,spread:.016,pellets:1,auto:!0,range:70},{id:"maul",name:"AR-9 重锤",label:"AR-9 <span>重锤</span>",className:"重型战斗步枪 // HEAVY",category:"rifle",price:560,desc:"高单发伤害的慢射速步枪，中远距离点杀效率出色。",damage:62,fireRate:3.6,magazine:20,reserve:120,reload:2,spread:.011,pellets:1,auto:!0,range:100},{id:"hush",name:"SR-2 静默",label:"SR-2 <span>静默</span>",className:"半自动狙击 // DMR",category:"sniper",price:620,desc:"高精度半自动狙击，弹匣容量更宽裕，容错更高。",damage:190,fireRate:.9,magazine:5,reserve:30,reload:2.2,spread:6e-4,pellets:1,auto:!1,range:150,pierce:!0},{id:"piercer",name:"SR-6 穿云",label:"SR-6 <span>穿云</span>",className:"贯穿狙击 // ANTI-MATERIEL",category:"sniper",price:700,desc:"射速更快的贯穿狙击，一发可洞穿整列敌人。",damage:150,fireRate:1.4,magazine:8,reserve:48,reload:2,spread:.001,pellets:1,auto:!1,range:160,pierce:!0},{id:"tribunal",name:"SR-9 天罚",label:"SR-9 <span>天罚</span>",className:"反器材轨道炮 // RAILGUN",category:"sniper",price:860,desc:"单发毁伤极高的轨道炮，首领与重装的终结者。",damage:320,fireRate:.55,magazine:3,reserve:18,reload:2.8,spread:0,pellets:1,auto:!1,range:180,pierce:!0}],dc={pistol:"手枪",rifle:"步枪",sniper:"狙击枪",special:"特殊装备"},ml={runner:{name:"猎犬突击体",health:65,speed:4.7,damage:13,score:120,radius:.55,color:16729688},drone:{name:"蜂群射手",health:90,speed:2.7,damage:10,score:180,radius:.65,color:11757567},tank:{name:"重装碾压者",health:310,speed:1.35,damage:16,score:420,radius:.95,color:16747069},phantom:{name:"相位幽影",health:58,speed:5.6,damage:12,score:240,radius:.5,color:6087167},falcon:{name:"游隼突袭者",health:44,speed:5.8,damage:9,score:160,radius:.5,color:13041469},bomber:{name:"自毁蜂群",health:46,speed:5.5,damage:28,score:210,radius:.52,color:16761421},medic:{name:"维生单元",health:75,speed:2.3,damage:0,score:200,radius:.6,color:4710560},turret:{name:"定点炮台",health:240,speed:0,damage:14,score:300,radius:.9,color:16757325},boss:{name:"守望者核心",health:2600,speed:1.45,damage:18,score:5e3,radius:2.1,color:16734525}},Vr={recruit:{id:"recruit",label:"新兵",waves:10,hp:.78,damage:.68,score:.85,drop:1.35,spawn:.85},standard:{id:"standard",label:"标准",waves:15,hp:1,damage:1,score:1,drop:1,spawn:1},nightmare:{id:"nightmare",label:"噩梦",waves:20,hp:1.4,damage:1.45,score:1.5,drop:.82,spawn:1.18},apex:{id:"apex",label:"极限",waves:25,hp:1.85,damage:1.8,score:2.1,drop:.7,spawn:1.35}},gl=[{id:"flawless",text:"本波不受到任何伤害",reward:200,target:1},{id:"crit",text:"造成 5 次暴击",reward:170,target:5},{id:"headshot",text:"命中敌人弱点 6 次",reward:160,target:6},{id:"combo",text:"达成 8 连击",reward:180,target:8},{id:"barrel",text:"用油桶击毁 2 个敌人",reward:220,target:2},{id:"kills",text:"本波击毁 12 个敌人",reward:150,target:12}],Gr=[{at:0,title:"第一章 // 霓虹余烬",text:"02:17，第七区断联。你是唯一还能接入战术网络的「幽灵」。"},{at:.22,title:"第二章 // 铁潮",text:"机械军团开始成建制推进，前哨站接连失守，补给线被压缩到极限。"},{at:.42,title:"第三章 // 裂隙回声",text:"裂隙深处传来同源信号——守望者正在召回所有残部。"},{at:.6,title:"第四章 // 深潜",text:"常规补给断绝，流动商人成了唯一的装备来源。"},{at:.8,title:"第五章 // 临界",text:"敌方核心开始超载，战场的物理规则正在被改写。"},{at:.96,title:"终章 // 黎明协议",text:"最后一道防线。摧毁守望者，结束这场没有尽头的夜。"}],qs=[{id:"first-blood",name:"首次接触",desc:"击毁第一个敌对单位"},{id:"combo-master",name:"连锁反应",desc:"连击倍率达到 2.5"},{id:"flawless",name:"无损作战",desc:"无伤清除一整波敌人"},{id:"crit-10",name:"精准打击",desc:"单局造成 10 次暴击"},{id:"overdrive",name:"核心超载",desc:"首次释放超载模式"},{id:"defuser",name:"拆弹专家",desc:"在自毁蜂群引爆前将其击毁"},{id:"arc-chain",name:"雷霆万钧",desc:"弧光一次连锁 3 个以上目标"},{id:"victory",name:"黎明已至",desc:"完成核心行动"},{id:"nightmare",name:"噩梦终结",desc:"在噩梦难度下通关"},{id:"hive",name:"蜂群覆盖",desc:"使用制导导弹击毁至少一个目标"},{id:"medic-down",name:"断援",desc:"击毁一台维生单元"},{id:"barrel",name:"连环爆破",desc:"用爆炸油桶一次清除多个目标"},{id:"frostbite",name:"冰封猎场",desc:"累计击毁 15 个处于减速状态的敌人"},{id:"falconer",name:"隼猎者",desc:"单局击毁 8 只游隼突袭者"}],dm=[{id:"b-health",icon:"✚",name:"强化骨架",desc:"最大生命 +20。",apply:i=>{i.player.maxHealth+=20,i.player.health+=20}},{id:"b-shield",icon:"◇",name:"电容矩阵",desc:"最大护盾 +15。",apply:i=>{i.player.maxShield+=15,i.player.shield+=15}},{id:"b-damage",icon:"↟",name:"过热膛线",desc:"全武器伤害 +7%。",apply:i=>{i.player.damageMultiplier*=1.07}},{id:"b-firerate",icon:"≫",name:"高速循环",desc:"射速 +7%。",apply:i=>{i.player.fireRateMultiplier*=1.07}},{id:"b-speed",icon:"⌁",name:"伺服腿组",desc:"移动速度 +5%。",apply:i=>{i.player.speedMultiplier*=1.05}},{id:"b-crit",icon:"✦",name:"弱点解析",desc:"暴击率 +4%。",apply:i=>{i.player.critChance+=.04}},{id:"b-critdmg",icon:"✷",name:"暴击回路",desc:"暴击伤害 +12%。",apply:i=>{i.player.critMultiplier+=.12}},{id:"b-ammo",icon:"▤",name:"扩容弹匣",desc:"弹药容量 +10%。",apply:i=>{i.player.ammoMultiplier*=1.1}},{id:"b-reload",icon:"↻",name:"急速装填",desc:"装填速度 +8%。",apply:i=>{i.player.reloadMultiplier*=1.08}},{id:"b-pulse",icon:"◎",name:"脉冲核心",desc:"脉冲伤害 +10 / 半径 +1。",apply:i=>{i.player.pulseDamage+=10,i.player.pulseRadius+=1}},{id:"b-execute",icon:"⌖",name:"处决协议",desc:"处决加成 +8%。",apply:i=>{i.player.executeBonus+=.08}},{id:"b-pickup",icon:"⊙",name:"拾取场",desc:"拾取范围 +0.2。",apply:i=>{i.player.pickupRadius+=.2}}],_l=[{id:"m-mag",icon:"▤",name:"扩容弹匣",rarity:1,price:140,desc:"全武器弹药容量 +15%。",apply:i=>{i.player.ammoMultiplier*=1.15}},{id:"m-grip",icon:"≫",name:"稳定握把",rarity:1,price:160,desc:"射速 +10%。",apply:i=>{i.player.fireRateMultiplier*=1.1}},{id:"m-spring",icon:"↻",name:"高速弹簧",rarity:1,price:150,desc:"装填速度 +18%。",apply:i=>{i.player.reloadMultiplier*=1.18}},{id:"m-barrel",icon:"↟",name:"精密枪管",rarity:2,price:190,desc:"全武器伤害 +12%。",apply:i=>{i.player.damageMultiplier*=1.12}},{id:"m-ammo",icon:"✦",name:"穿甲弹头",rarity:2,price:210,desc:"暴击率 +6%。",apply:i=>{i.player.critChance+=.06}},{id:"m-over",icon:"ϟ",name:"过载膛线",rarity:3,price:280,desc:"伤害 +25%（射速 -5%）。",apply:i=>{i.player.damageMultiplier*=1.25,i.player.fireRateMultiplier*=.95}},{id:"m-crit",icon:"✷",name:"暴击核心",rarity:4,price:320,desc:"暴击伤害 +25%。",apply:i=>{i.player.critMultiplier+=.25}}],um={1:0,2:2,3:4,4:8};class fm{constructor(e,t,n){this.canvas=e,this.radar=t,this.radarContext=t.getContext("2d"),this.callbacks=n,this.audio=new K0,this.profile=hc(),this.isBoard=this.profile==="board",this.isTouch=this.profile!=="desktop",this.lowPower=this.isBoard,this.maxParticles=this.isBoard?16:this.isTouch?25:80,this.demoMode=!1,this.scene=new Nh,this.scene.background=new Ye(198667),this.scene.fog=new Ks(463125,24,112),this.camera=new qt(72,innerWidth/innerHeight,.05,220),this.camera.rotation.order="YXZ",this.renderer=new $0({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(innerWidth,innerHeight),this.applyQuality(),this.renderer.outputColorSpace=Ct,this.renderer.toneMapping=Cl,this.renderer.toneMappingExposure=1.55,this.renderer.shadowMap.enabled=!this.isTouch&&!this.lowPower,this.renderer.shadowMap.type=Al,this.clock=new cd,this.raycaster=new ko,this.losRay=new ko,this.missStreak=0,this.state="menu",this.mode="campaign",this.keys={},this.firing=!1,this.aiming=!1,this.shotThisHold=!1,this.yaw=0,this.pitch=0,this.cheats={god:!1,ammo:!1,lock:!1,auto:!1,wall:!1,slow:!1},this.aimTarget=null,this.aimHoldTimer=0,this.hitStop=0,this.cheatBuffer="",this.konami=[],this.cheatToastTimer=0,this.menuTime=0,this.elapsed=0,this.enemies=[],this.enemyHitMeshes=[],this.projectiles=[],this.pickups=[],this.particles=[],this.tracers=[],this.effects=[],this.obstacles=[],this.barrels=[],this.barrelMeshes=[],this.barrelBoxes=new Set,this.worldColliders=[],this.animatedWorld=[],this.spawnQueue=[],this.waveClearPending=!1,this.hudTimer=0,this.radarTimer=0,this.shake=0,this.weaponRecoil=0,this.muzzleTimer=0,this.currentUpgradeChoices=[],this.freePickIndex=-1,this.difficulty=Vr.standard,this.clearedContent=localStorage.getItem("nexus-cleared")==="1",this.mission=null,this.missionBonus=1,this.shopDiscount=1,this.fieldVendor=null,this.waveTimeLeft=0,this.fieldEvent=null,this.appliedUpgrades=[],this.runAchievements=new Set,this.critCount=0,this.comboPeak=1,this.waveDamageTaken=0,this.dashActive=!1,this.sharedParticleGeometry=new dn(.055,.055,.055),this.sharedProjectileGeometry=new Ci(.11,8,8),this.createWorld(),this.createViewModel(),this.bindEvents(),this.resetPlayer(),this.animate=this.animate.bind(this),this.animate()}createWorld(){cm(this)}applyQuality(){const e=this.isBoard?innerWidth>2200?.7:1:this.isTouch?1.25:1.65;this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,e))}createViewModel(){this.weaponRoot=new rt,this.camera.add(this.weaponRoot),this.scene.add(this.camera),this.weaponRoot.position.set(.36,-.31,-.62),this.applyWeaponScale();const e=new rt,t=new Rt({color:1583407,metalness:.55,roughness:.62}),n=new Rt({color:2902856,metalness:.82,roughness:.34,emissive:928550,emissiveIntensity:.5}),s=new X(new Sn(.075,.105,.52,8),t);s.rotation.set(Math.PI/2.45,0,-.25),s.position.set(.19,-.3,.16);const r=new X(new Sn(.11,.11,.09,8),n);r.rotation.copy(s.rotation),r.position.set(.23,-.21,.02);const a=new X(new Sn(.07,.09,.38,8),t);a.rotation.set(Math.PI/2.2,0,.42),a.position.set(-.16,-.26,-.3);const o=new X(new dn(.13,.05,.19),n);o.position.set(-.13,-.16,-.36),e.add(s,r,a,o),e.traverse(c=>{c.renderOrder=10,c.frustumCulled=!1}),this.weaponRoot.add(e),this.viewHands=e;const l=new Xi(11070172,1.35,3.6);l.position.set(.2,.25,.25),this.camera.add(l),this.muzzleLight=new Xi(7536602,0,3),this.weaponRoot.add(this.muzzleLight),this.buildWeaponModel(0)}applyWeaponScale(){if(!this.weaponRoot)return;const e=this.isTouch&&innerHeight>innerWidth;this.weaponRoot.scale.setScalar(this.isBoard?.92:e?.68:.8)}buildWeaponModel(e){this.weaponModel&&this.weaponRoot.remove(this.weaponModel);const t=nm(e);this.weaponRoot.add(t.group),this.weaponModel=t.group,this.weaponParts=t,this.currentScopeType=t.scopeType||"reddot",this.scopeReticle=t.reticle||null,this.muzzleLight.position.set(0,.02,t.muzzleZ+.12)}updateWeaponParts(e){const t=this.weaponParts;if(!t)return;const n=this.reloadTimer>0,s=n?1-this.reloadTimer/Math.max(.001,_t[this.weaponIndex].reload/this.player.reloadMultiplier):0,r=n?Math.sin(s*Math.PI):0;if(t.magazine.position.y=wt(t.magazine.position.y,(this.weaponIndex===1,-.19-r*.22),1-Math.exp(-e*16)),t.magazine.rotation.x=wt(t.magazine.rotation.x,r*.55,1-Math.exp(-e*14)),t.bolt.position.z=wt(t.bolt.position.z,-.16+this.weaponRecoil*.085,1-Math.exp(-e*22)),t.flash.visible=this.muzzleTimer>0,t.flash.visible){const a=this.muzzleTimer/.055;t.flash.scale.setScalar(.65+a*.7),t.flash.rotation.z+=e*18}t.coils&&t.coils.children.forEach((a,o)=>{a.rotation.z+=e*(o%2?-2.2:2.2)}),t.optics&&(t.optics.position.y=wt(t.optics.position.y,(t.redDot?.15:.17)-(this.aimBlend||0)*.035,1-Math.exp(-e*10))),t.redDot&&(t.redDot.scale.setScalar(.8+(this.aimBlend||0)*.8),t.redDot.material.color.setHex(this.aimBlend>.45?16719928:11023172)),this.scopeReticle&&(this.scopeReticle.visible=this.aimBlend>.25)}resetPlayer(){this.player={position:new R(0,1.7,22),velocity:new R,health:100,maxHealth:100,shield:50,maxShield:50,damageMultiplier:1,fireRateMultiplier:1,reloadMultiplier:1,speedMultiplier:1,ammoMultiplier:1,dashCooldown:0,dashMax:5,dashTime:0,dashDuration:.19,perfectWindow:.13,_perfectUsed:!1,invulnerable:0,pulseCooldown:0,pulseMax:12,pulseRadius:12,pulseDamage:75,shieldRegen:9,shieldDelay:4.5,lastDamage:0,killHeal:0,jumpY:0,jumpVel:0,grounded:!0,slideTime:0,slideCooldown:0,slideDir:null,critChance:.08,critMultiplier:1.75,executeBonus:1,executeThreshold:.35,energy:0,energyMax:100,energyGain:1,overdrive:0,overdriveMax:8,chainBonus:0,chainDamage:1,pickupRadius:1.45,pickupPower:1,dashWave:0},this.weaponState=_t.map(e=>({ammo:e.magazine,reserve:e.reserve})),this.loadout=[0],this.credits=0,this.currentShop=[],this.weaponIndex=0,this.unlockedWeapon=0,this.weaponCooldown=0,this.reloadTimer=0,this.switchTimer=0,this.score=0,this.kills=0,this.falconKills=0,this.frostKills=0,this.shotsFired=0,this.shotsHit=0,this.combo=1,this.comboTimer=0,this.wave=0,this.currentChapter=-1,this.elapsed=0,this.nextWaveTimer=0,this.spawnTimer=0,this.waveClearPending=!1,this.intermission=!1,this.yaw=0,this.pitch=0,this.appliedUpgrades=[],this.runAchievements=new Set,this.critCount=0,this.comboPeak=1,this.waveDamageTaken=0,this.dashActive=!1,this.aimBlend=0,this.sniperZoom=6,this.scopeLevels=[3,6,10],this.sprintBlend=0,this.slideBlend=0,this.landKick=0,this.hitCombo=0,this.hitComboTimer=0,this.hitStop=0,this.slowmo=0,this.mission=null,this.missionBonus=1,this.shopDiscount=1,this.waveTimeLeft=0,this.fieldEvent=null}clearDynamicObjects(){[...this.enemies,...this.projectiles,...this.pickups,...this.particles,...this.tracers,...this.effects].forEach(t=>{const n=t.group||t.mesh||t.line;n&&this.scene.remove(n)}),this.enemies=[],this.enemyHitMeshes=[],this.xrayState=!1,this.aimTarget=null,this.missStreak=0,this.projectiles=[],this.pickups=[],this.particles=[],this.tracers=[],this.effects=[],this.spawnQueue=[],this.fieldVendor&&(this.fieldVendor.group.removeFromParent(),this.fieldVendor=null);const e=document.getElementById("interact-toast");e&&e.classList.remove("show"),this.obstacles=this.obstacles.filter(t=>!this.barrelBoxes.has(t)),this.barrelMeshes=[],this.barrels.forEach(t=>{t.dead=!1,t.health=t.maxHealth,t.flash=0,t.bodyMaterial&&(t.bodyMaterial.emissiveIntensity=.5),t.group&&!t.group.parent&&this.world.add(t.group),this.barrelMeshes.push(t.mesh),this.obstacles.push(t.box)})}start(e="campaign",t="standard",n=0){this.audio.init(),this.runId=(this.runId||0)+1,this.clearDynamicObjects(),this.resetPlayer();const s=Number.isInteger(n)&&n>=0&&n<_t.length?n:0;this.loadout=[s],this.weaponIndex=s,this.unlockedWeapon=s,this.mode=e,this.difficulty=Vr[t]||Vr.standard,this.waveTimeLeft=e==="gauntlet"?45:0,this.firing=!1,this.aiming=!1,this.touchMove={x:0,y:0},this.state="playing",this.weaponRoot.visible=!0,this.buildWeaponModel(this.weaponIndex),this.camera.position.copy(this.player.position),this.camera.rotation.set(0,0,0),this.callbacks.onState("playing"),this.callbacks.onAnnounce(e==="training"?"模拟训练":"神经链接建立",e==="training"?`敌方伤害已关闭 · 熟悉你的武器 · ${this.difficulty.label}难度`:`准备迎击第一波敌对单位 · ${this.difficulty.label}难度`,"TACTICAL LINK / CONNECTED",2400),this.nextWaveTimer=2.2,this.intermission=!0,this.requestLock(),this.updateHUD(!0),this.isBoard&&this.callbacks.onToast?.("白板课堂模式 // 左下角「移动 / MOVE」圆形摇杆移动 · 右侧滑动瞄准 · 右下 FIRE 开火 · 可开启 AUTO 自动演示",5200)}quit(){this.state="menu",this.firing=!1,this.clearDynamicObjects(),this.weaponRoot.visible=!1,this.callbacks.onState("menu")}pause(){this.state==="playing"&&(this.state="paused",this.firing=!1,document.exitPointerLock?.(),this.callbacks.onBuild?.({difficulty:this.difficulty.label,upgrades:this.appliedUpgrades,damage:Math.round((this.player.damageMultiplier-1)*100),crit:Math.round(this.player.critChance*100),kills:this.kills,wave:this.wave}),this.callbacks.onState("paused"))}resume(){this.state==="paused"&&(this.state="playing",this.callbacks.onState("playing"),this.requestLock(),this.clock.getDelta())}requestLock(){if(!this.isTouch&&this.state==="playing"&&document.pointerLockElement!==this.canvas)try{const e=this.canvas.requestPointerLock?.();e?.catch&&e.catch(()=>{})}catch{}}bindEvents(){window.addEventListener("resize",()=>this.resize()),document.addEventListener("keydown",e=>{this.keys[e.code]=!0,e.code==="KeyR"&&this.reload(),e.code==="KeyQ"&&this.dash(),e.code==="KeyE"&&this.pulse(),e.code==="Space"&&(e.preventDefault?.(),this.jump()),(e.code==="ControlLeft"||e.code==="ControlRight"||e.code==="KeyC")&&this.slide(),e.code==="KeyF"&&this.activateOverdrive();const t=/^Digit([1-6])$/.exec(e.code);if(t){const n=this.loadout[Number(t[1])-1];n!==void 0&&this.switchWeapon(n)}e.code==="KeyG"&&this.openFieldShop(),(e.code==="KeyP"||e.code==="Escape"&&!document.pointerLockElement)&&(this.state==="playing"?this.pause():this.state==="paused"&&this.resume()),this.handleCheatInput(e)}),document.addEventListener("keyup",e=>{this.keys[e.code]=!1}),document.addEventListener("mousemove",e=>{this.state!=="playing"||!this.isTouch&&document.pointerLockElement!==this.canvas||(this.yaw-=e.movementX*.0021,this.pitch=Ft(this.pitch-e.movementY*.0019,-1.45,1.45))}),this.canvas.addEventListener("mousedown",e=>{this.state==="playing"&&(this.requestLock(),e.button===0&&(this.firing=!0,this.shotThisHold=!1),e.button===2&&(this.aiming=!0))}),document.addEventListener("mouseup",e=>{e.button===0&&(this.firing=!1,this.shotThisHold=!1),e.button===2&&(this.aiming=!1)}),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()),this.canvas.addEventListener("wheel",e=>{if(this.state!=="playing")return;if(this.aiming&&this.currentScopeType==="sniper"){this.cycleScope();return}const t=e.deltaY>0?1:-1,n=this.loadout.length;if(n<2)return;const s=Math.max(0,this.loadout.indexOf(this.weaponIndex));this.switchWeapon(this.loadout[(s+t+n)%n])},{passive:!0}),document.addEventListener("pointerlockchange",()=>{!this.isTouch&&this.state==="playing"&&document.pointerLockElement!==this.canvas&&this.elapsed>.6&&this.pause()}),window.addEventListener("blur",()=>{this.state==="playing"&&!this.isTouch&&this.pause()}),this.bindTouchControls()}bindTouchControls(){const e=document.getElementById("move-stick"),t=e.querySelector("i");let n=null;const s=h=>{const d=e.getBoundingClientRect();let g=h.clientX-(d.left+d.width/2),_=h.clientY-(d.top+d.height/2);const m=Math.hypot(g,_),p=d.width*.34;m>p&&(g*=p/m,_*=p/m),t.style.transform=`translate(${g}px, ${_}px)`,this.touchMove={x:g/p,y:_/p}};e.addEventListener("pointerdown",h=>{h.preventDefault(),e.setPointerCapture?.(h.pointerId),n=h.pointerId,e.classList.add("engaged"),s(h)},{passive:!1}),e.addEventListener("pointermove",h=>{h.pointerId===n&&(h.preventDefault(),s(h))},{passive:!1});const r=h=>{h.pointerId===n&&(n=null,this.touchMove={x:0,y:0},t.style.transform="",e.classList.remove("engaged"))};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r);const a=document.getElementById("look-zone"),o=new Map;a.addEventListener("pointerdown",h=>{h.preventDefault(),a.setPointerCapture?.(h.pointerId),o.set(h.pointerId,{x:h.clientX,y:h.clientY})},{passive:!1}),a.addEventListener("pointermove",h=>{const d=o.get(h.pointerId);!d||this.state!=="playing"||(h.preventDefault(),this.yaw-=(h.clientX-d.x)*(this.isBoard?.0026:.0042),this.pitch=Ft(this.pitch-(h.clientY-d.y)*(this.isBoard?.0024:.0037),-1.4,1.4),o.set(h.pointerId,{x:h.clientX,y:h.clientY}))},{passive:!1});const l=h=>o.delete(h.pointerId);a.addEventListener("pointerup",l),a.addEventListener("pointercancel",l);const c=document.getElementById("mobile-fire");c.addEventListener("pointerdown",h=>{h.preventDefault(),c.setPointerCapture?.(h.pointerId),this.firing=!0,this.shotThisHold=!1},{passive:!1});const u=h=>{h.preventDefault(),this.firing=!1,this.shotThisHold=!1};c.addEventListener("pointerup",u),c.addEventListener("pointercancel",u);const f=(h,d)=>{const g=document.getElementById(h);g&&(g.addEventListener("pointerdown",_=>{_.preventDefault(),d()},{passive:!1}),g.addEventListener("contextmenu",_=>_.preventDefault()))};f("mobile-reload",()=>this.reload()),f("mobile-dash",()=>this.dash()),f("mobile-pulse",()=>this.pulse()),f("mobile-switch",()=>{const h=this.loadout.length,d=Math.max(0,this.loadout.indexOf(this.weaponIndex));this.switchWeapon(this.loadout[(d+1)%h])}),f("mobile-jump",()=>this.jump()),f("mobile-slide",()=>this.slide()),f("mobile-overdrive",()=>this.activateOverdrive()),f("mobile-aim",()=>{this.aiming=!this.aiming,document.getElementById("mobile-aim")?.classList.toggle("active",this.aiming)}),f("mobile-scope",()=>this.cycleScope()),f("mobile-cheat",()=>this.toggleCheatConsole()),f("mobile-demo",()=>this.setDemoMode(!this.demoMode))}setDemoMode(e){this.demoMode=!!e,document.getElementById("mobile-demo")?.classList.toggle("active",this.demoMode),this.callbacks.onToast?.(this.demoMode?"课堂演示模式已开启 · 自动锁定并开火":"课堂演示模式已关闭",2200),this.callbacks.onDemo?.(this.demoMode)}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight),this.applyQuality(),this.applyWeaponScale()}startWave(){this.wave+=1,this.intermission=!1,this.waveClearPending=!1,this.waveDamageTaken=0,this.spawnQueue=[],this.assignMission(),this.mode==="gauntlet"&&(this.waveTimeLeft=45);const e=this.mode==="campaign"||this.mode==="gauntlet"?this.difficulty.waves:0;let t=-1;e>0?t=Gr.reduce((a,o,l)=>this.wave>=Math.ceil(o.at*e)?l:a,-1):this.mode==="endless"?t=Math.min(Gr.length-1,Math.floor((this.wave-1)/5)):this.wave===1&&(t=0),t>=0&&t!==this.currentChapter&&(this.currentChapter=t,this.callbacks.onStory?.(Gr[t])),(this.wave===3||this.wave===6||this.wave===9||this.clearedContent&&this.wave%5===0)&&this.spawnFieldVendor();const n=this.difficulty,s=(this.mode==="campaign"||this.mode==="gauntlet")&&this.wave===this.difficulty.waves,r=this.mode==="endless"&&this.wave%5===0;if(s||r){this.spawnQueue.push("boss");const a=Math.min(10,Math.ceil((2+Math.floor(this.wave/2))*n.spawn)),o=["runner","drone","phantom","bomber","tank","turret","medic"];for(let l=0;l<a;l++)this.spawnQueue.push(o[Math.floor(Math.random()*o.length)]);this.callbacks.onAnnounce("守望者降临","摧毁核心装甲 · 注意范围攻击与自毁单位","WARNING / APEX SIGNAL",3200)}else{const a=this.mode==="training"?Math.min(10,4+this.wave):Math.min(30,4+this.wave*2),o=Math.max(3,Math.round(a*n.spawn))+(this.eliteWave||0);this.eliteWave=0;const l=["runner"];this.wave>=2&&l.push("drone","drone"),this.wave>=3&&l.push("phantom"),this.wave>=4&&l.push("tank","turret"),this.wave>=5&&l.push("bomber","medic"),this.wave>=6&&l.push("falcon","falcon");for(let c=0;c<o;c++)this.spawnQueue.push(l[Math.floor(Math.random()*l.length)]);this.callbacks.onAnnounce(`第 ${String(this.wave).padStart(2,"0")} 波`,this.wave===1?"敌对信号接近 · 清除所有单位":"威胁等级上升 · 保持移动","HOSTILE SIGNALS DETECTED")}if(this.wave>=2&&this.wave%2===0&&this.loadout.length<6){const a=_t.findIndex((o,l)=>!this.loadout.includes(l));a>=0&&this.unlockWeapon(a)}this.spawnTimer=.4,this.audio.wave()}unlockWeapon(e){this.loadout.includes(e)||this.loadout.push(e),this.loadout.sort((t,n)=>t-n),this.unlockedWeapon=Math.max(this.unlockedWeapon,e),this.weaponState[e].ammo=_t[e].magazine,this.weaponState[e].reserve=_t[e].reserve,this.callbacks.onToast(`武器已解锁 // ${_t[e].name} · 按 ${this.loadout.indexOf(e)+1} 切换`,3500)}spawnEnemy(e){const t=ml[e];let n=this.spawnPoints[Math.floor(Math.random()*this.spawnPoints.length)].clone();for(let M=0;M<6&&n.distanceTo(this.player.position)<20;M++)n=this.spawnPoints[Math.floor(Math.random()*this.spawnPoints.length)].clone();n.x+=xt(-2.5,2.5),n.z+=xt(-2.5,2.5);const s=new rt;s.position.copy(n);const r=e==="phantom",a=new Rt({color:e==="boss"?3810332:2372152,emissive:t.color,emissiveIntensity:.8,metalness:.8,roughness:.34,transparent:r,opacity:1}),o=new qe({color:t.color,toneMapped:!1,transparent:r,opacity:1}),l=new Rt({color:791576,metalness:.9,roughness:.28,transparent:r,opacity:1}),c=new Rt({color:2833216,emissive:t.color,emissiveIntensity:.16,metalness:.86,roughness:.3,transparent:r,opacity:1}),u=new qe({color:16761421,toneMapped:!1,transparent:r,opacity:1}),h=im(e,{body:a,dark:l,glow:o,accent:c,warning:u}),d=this.difficulty,g={type:e,group:s,material:a,fadeMaterials:[a,o,l,c,u],health:t.health*(1+Math.max(0,this.wave-1)*(e==="boss"?.12:.085))*d.hp,maxHealth:0,speed:t.speed*(1+Math.min(.45,this.wave*.018)),damage:t.damage*(1+this.wave*.022)*d.damage,score:Math.round(t.score*d.score),radius:t.radius,name:t.name,attackCooldown:xt(.4,1.3),spawnTime:.85,dead:!1,deathTimer:0,strafe:Math.random()>.5?1:-1,phase:Math.random()*Math.PI*2,hitTimer:0,healthBar:null,barFill:null,phased:!1,phaseTimer:xt(1.4,2.8),fuse:0,chargeTimer:0,healTimer:0,slow:0,parts:h.dynamic,height:h.height,baseY:h.baseY,weakpoints:h.weakpoints};g.maxHealth=g.health,g.stagger=0,g.staggerMax=Math.max(14,g.maxHealth*(e==="boss"?.5:.42)),g.broken=!1,g.brokenTimer=0,g.glitchPhase=Math.random()*Math.PI*2;const _=M=>{M.userData.enemy=g,M.isMesh&&(M.castShadow=!this.isTouch&&!this.lowPower,this.enemyHitMeshes.push(M)),M.children.forEach(_)};h.allMeshes.forEach(M=>{s.add(M),_(M)});const m=new rt,p=e==="boss"?3.2:1.35,T=new X(new sn(p,.085),new qe({color:1054744,transparent:!0,opacity:.85,depthTest:!0})),b=new X(new sn(p,.055),new qe({color:t.color,depthTest:!0}));b.position.z=.005,m.add(T,b);const x=new X(new sn(p,.042),new qe({color:1054744,transparent:!0,opacity:.85,depthTest:!0}));x.position.y=-.13;const C=new X(new sn(p,.03),new qe({color:5568466,depthTest:!0}));C.position.set(0,-.13,.005),m.add(x,C),m.position.y=g.height+.35,m.visible=e==="boss",s.add(m),g.healthBar=m,g.barFill=b,g.barHalf=p/2,g.staggerFill=C,g.staggerHalf=p/2;const y=new qe({color:t.color,transparent:!0,opacity:.46,toneMapped:!1,depthWrite:!1}),P=new X(new Un(g.radius*1.2,.026,5,24),y);P.rotation.x=-Math.PI/2,P.position.y=.06;const L=new X(new Un(.2+g.height*.15,.016,5,20),y.clone());L.position.y=g.height*.84,L.rotation.x=Math.PI/2.6,s.add(P,L),g.crown=L,g.halo=P,s.scale.setScalar(.02),this.scene.add(s),this.enemies.push(g),this.spawnParticles(n.clone().add(new R(0,1.4,0)),t.color,e==="boss"?35:12,3.5)}updateEnemies(e){const t=new R(this.player.position.x,0,this.player.position.z);for(const n of this.enemies){if(n.crown&&(n.crown.rotation.z+=e*1.3),n.dead){n.deathTimer-=e,n.group.rotation.z+=e*2.4,n.group.scale.multiplyScalar(Math.max(.01,1-e*5)),n.group.position.y-=e*.8,n.deathTimer<=0&&(this.scene.remove(n.group),n.remove=!0);continue}n.phase+=e,n.hitTimer-=e,n.material.emissiveIntensity=n.hitTimer>0?3.2:n.type==="boss"?1:.8,n.group.children.forEach(l=>{l.userData.spin&&(l.rotation.z+=l.userData.spin*e)});const s=n.parts;if(s&&(s.legs?.forEach((l,c)=>{l.rotation.x=Math.sin(n.phase*7+(c%2?Math.PI:0))*.34}),s.rotors?.forEach((l,c)=>{l.rotation.y+=e*(5+c*1.5)}),s.rings?.forEach((l,c)=>{l.userData.spin||(l.rotation.z+=e*(c%2?-.55:.55))}),s.shards?.forEach((l,c)=>{const u=l.userData.angle+n.phase*.65;l.position.x=Math.cos(u)*.85,l.position.z=Math.sin(u)*.55,l.position.y=l.userData.baseY+Math.sin(n.phase*2+c)*.12,l.rotation.y+=e*1.6}),s.wings?.forEach((l,c)=>{l.rotation.z=Math.sin(n.phase*5+c)*.22}),s.turrets?.forEach(l=>{l.rotation.y=Math.sin(n.phase*.8)*.32}),s.core&&s.core.scale.setScalar(1+Math.sin(n.phase*4.5)*.09)),n.spawnTime>0){n.spawnTime-=e;const l=Ft(1-n.spawnTime/.85,.02,1);n.group.scale.setScalar(l);continue}if(n.group.scale.setScalar(1),n.type==="phantom"&&(n.phaseTimer-=e,n.phaseTimer<=0&&(n.phased=!n.phased,n.phaseTimer=n.phased?1.05:2.5,n.fadeMaterials.forEach(l=>{l.opacity=n.phased?.16:1}),this.spawnParticles(n.group.position.clone().add(new R(0,1.2,0)),6087167,this.isTouch?4:9,2))),n.type==="bomber"&&n.fuse>0&&(n.fuse-=e,n.material.emissiveIntensity=1.4+Math.sin(n.phase*36)*1.4,Math.random()>.65&&this.spawnParticles(n.group.position.clone().add(new R(0,1.1,0)),16761421,2,1.4),n.fuse<=0)){this.detonateBomber(n);continue}if(n.broken&&(n.brokenTimer-=e,n.material.emissiveIntensity=1.3+Math.sin(this.elapsed*26+n.glitchPhase)*1.9,n.group.scale.setScalar(1+Math.sin(this.elapsed*30+n.glitchPhase)*.03),n.brokenTimer<=0&&(n.broken=!1,n.stagger=0,n.group.scale.setScalar(1),n.material.emissiveIntensity=n.type==="boss"?1:.8)),n.staggerFill){const l=n.type==="boss"||n.health<n.maxHealth||n.stagger>0&&!n.broken;if(n.healthBar.visible=l,l){const c=Ft(n.stagger/n.staggerMax,0,1);n.staggerFill.scale.x=c,n.staggerFill.position.x=-(1-c)*(n.staggerHalf||.6),n.staggerFill.material.color.setHex(c>.72?16731501:5568466)}}if(n.broken){n.healthBar.quaternion.copy(this.camera.quaternion);continue}const r=t.clone().sub(new R(n.group.position.x,0,n.group.position.z)),a=r.length();r.normalize(),n.group.rotation.y=Math.atan2(r.x,r.z)+Math.PI,n.attackCooldown-=e;let o=new R;if(n.type==="runner"||n.type==="phantom"||n.type==="falcon")a>1.45&&o.copy(r),a<1.85&&n.attackCooldown<=0&&(this.damagePlayer(n.damage,n.group.position),n.attackCooldown=n.type==="phantom"?.85:n.type==="falcon"?1.1:1,n.group.position.addScaledVector(r,.3));else if(n.type==="bomber")n.fuse<=0&&(a>2.7?o.copy(r):(n.fuse=1.2,this.audio.warning(),this.createPulseEffect(n.group.position.clone(),16757575,4.5)));else if(n.type==="turret")n.chargeTimer>0?(n.chargeTimer-=e,n.material.emissiveIntensity=2+Math.sin(n.phase*30)*1.4,n.chargeTimer<=0&&([-.05,.05].forEach(l=>this.fireEnemyProjectile(n,l,24,n.damage)),n.attackCooldown=2.4,this.audio.enemyShot())):a<46&&n.attackCooldown<=0&&(n.chargeTimer=.65);else if(n.type==="medic"){n.healTimer-=e;const l=15;a>l+4?o.copy(r):a<l-4&&o.copy(r).multiplyScalar(-.7);const c=new R(-r.z,0,r.x).multiplyScalar(n.strafe*.5);if(o.add(c),n.healTimer<=0){let u=null,f=6;for(const h of this.enemies){if(h===n||h.dead||h.type==="medic"||h.spawnTime>0||h.group.position.distanceTo(n.group.position)>11)continue;const d=h.maxHealth-h.health;h.health>h.maxHealth*.7||d>f&&(f=d,u=h)}if(u){if(u.health=Math.min(u.maxHealth,u.health+14),u.barFill&&u.healthBar.visible){const h=Ft(u.health/u.maxHealth,0,1);u.barFill.scale.x=h,u.barFill.position.x=-(1-h)*(u.barHalf||.6)}this.createHealBeam(n.group.position.clone().add(new R(0,1.4,0)),u.group.position.clone().add(new R(0,(u.height||2)*.55,0))),n.healTimer=.9}}}else{const l=n.type==="drone"?13:n.type==="tank"?17:20;a>l+3?o.copy(r):a<l-3&&o.copy(r).multiplyScalar(-.7);const c=new R(-r.z,0,r.x).multiplyScalar(n.strafe*(n.type==="boss"?.45:.75));if(o.add(c),a<(n.type==="boss"?48:36)&&n.attackCooldown<=0)if(n.type==="boss"){const u=n.health<n.maxHealth*.5;u&&!n.enragedSpawned&&(n.enragedSpawned=!0,this.spawnEnemy("medic"),this.spawnEnemy("medic"),this.callbacks.onAnnounce("核心过载","守望者召唤维生单元支援","WARNING / REINFORCEMENTS",2200));for(let f=-2;f<=2;f++)this.fireEnemyProjectile(n,f*.105,17,n.damage);if(u||Math.random()>.45)for(let f=0;f<10;f++)this.fireEnemyProjectile(n,f/10*Math.PI*2,10,n.damage*.65,!0);n.attackCooldown=u?1.35:2.1}else n.type==="tank"?([-.08,0,.08].forEach(u=>this.fireEnemyProjectile(n,u,13,n.damage)),n.attackCooldown=2.25):(this.fireEnemyProjectile(n,xt(-.035,.035),16,n.damage),n.attackCooldown=xt(1.3,1.8))}if(o.lengthSq()>0){const l=n.slow>0?n.slowMul||.5:1;o.normalize().multiplyScalar(n.speed*l*e),this.moveEnemy(n,o)}n.slow>0&&(n.slow-=e,n.material.emissiveIntensity=Math.max(n.material.emissiveIntensity||0,1.1)),n.baseY&&(n.group.position.y=n.baseY+Math.sin(n.phase*2.1)*.18),n.healthBar.quaternion.copy(this.camera.quaternion)}this.enemies=this.enemies.filter(n=>!n.remove)}detonateBomber(e){const t=e.group.position.clone();e.dead=!0,e.deathTimer=.02,e.healthBar.visible=!1,this.enemyHitMeshes=this.enemyHitMeshes.filter(s=>s.userData.enemy!==e),this.spawnParticles(t.clone().add(new R(0,1,0)),16757575,this.isTouch?14:28,6),this.createPulseEffect(t,16752957,6),this.audio.explosion(),this.shake=Math.min(1.3,this.shake+.45);const n=t.distanceTo(this.player.position);n<5.5&&this.damagePlayer(e.damage*(1-n/5.5*.55),t)}addEnergy(e){const t=this.player;t.overdrive>0||(t.energy=Math.min(t.energyMax,t.energy+e*t.energyGain))}activateOverdrive(){const e=this.player;this.state!=="playing"||e.energy<e.energyMax||e.overdrive>0||(e.energy=0,e.overdrive=e.overdriveMax,e.pulseCooldown=Math.min(e.pulseCooldown,2),this.audio.overdrive(),this.createPulseEffect(e.position.clone(),16766044,15),this.callbacks.onAnnounce("核心超载","射速与伤害大幅提升 · 弹药无限","OVERDRIVE / ENGAGED",2200),this.unlockAchievement("overdrive"))}unlockAchievement(e){if(this.runAchievements.has(e))return;this.runAchievements.add(e);const t=qs.find(n=>n.id===e);t&&(this.audio.achievement(),this.callbacks.onAchievement?.(t))}emitDashWave(){const e=this.player;if(e.dashWave<=0)return;const t=e.position.clone();this.createPulseEffect(t,5568466,5.5),this.audio.pulse();for(const n of this.enemies)n.dead||n.phased||n.group.position.distanceTo(t)<5.5&&this.blastReaches(t,n)&&this.damageEnemy(n,e.dashWave*e.damageMultiplier,n.group.position.clone().sub(t).setY(0).normalize());for(const n of this.barrels)!n.dead&&n.group.position.distanceTo(t)<5.5&&this.damageBarrel(n,60,new R)}moveEnemy(e,t){const n=e.group.position,s=Ft(n.x+t.x,-65,65);this.collides(s,n.z,e.radius*.7)?e.strafe*=-1:n.x=s;const r=Ft(n.z+t.z,-65,65);this.collides(n.x,r,e.radius*.7)?e.strafe*=-1:n.z=r}fireEnemyProjectile(e,t,n,s,r=!1){const a=e.group.position.clone().add(new R(0,e.type==="boss"?3.1:e.type==="drone"?1.85:1.6,0));let o;r?o=new R(Math.sin(t),0,Math.cos(t)):(o=this.player.position.clone().sub(a).normalize(),o.applyAxisAngle(new R(0,1,0),t));const l=new qe({color:e.type==="drone"?12872703:16738381,toneMapped:!1}),c=new X(this.sharedProjectileGeometry,l);c.scale.setScalar(e.type==="boss"?1.8:1),c.position.copy(a),this.scene.add(c),this.projectiles.push({mesh:c,velocity:o.multiplyScalar(n),damage:s,life:5,source:e.group.position}),this.audio.enemyShot()}updateProjectiles(e){for(const t of this.projectiles){if(t.life-=e,t.homing){let a=null,o=46;for(const h of this.enemies){if(h.dead||h.phased||h.spawnTime>0)continue;const d=h.group.position.distanceTo(t.mesh.position);d<o&&(o=d,a=h)}if(a){const h=a.group.position.clone().add(new R(0,(a.height||2)*.5,0)).sub(t.mesh.position).normalize().multiplyScalar(t.velocity.length());t.velocity.lerp(h,Math.min(1,e*3.4))}const l=t.mesh.position.clone();t.mesh.position.addScaledVector(t.velocity,e),t.mesh.rotation.x+=e*14;const c=this.segmentBlocked(l,t.mesh.position);c&&t.mesh.position.copy(l);let u=null;for(const h of this.enemies)if(!(h.dead||h.phased)&&h.group.position.distanceTo(t.mesh.position)<h.radius+.9){u=h;break}const f=c||this.collides(t.mesh.position.x,t.mesh.position.z,.2)||Math.abs(t.mesh.position.x)>70||Math.abs(t.mesh.position.z)>70;(u||f||t.life<=0)&&(this.explodeRocket(t),t.life=0),t.life<=0&&(this.scene.remove(t.mesh),t.remove=!0);continue}const n=t.mesh.position.clone();t.mesh.position.addScaledVector(t.velocity,e),t.mesh.rotation.x+=e*8;const s=t.mesh.position,r=this.segmentBlocked(n,s);r&&(s.copy(n),t.life=0),!r&&s.distanceTo(this.player.position)<.65&&(this.damagePlayer(t.damage,t.source),t.life=0),(this.collides(s.x,s.z,.05)||Math.abs(s.x)>70||Math.abs(s.z)>70)&&(t.life=0),t.life<=0&&(this.spawnParticles(s,16737877,4,1.5),this.scene.remove(t.mesh),t.remove=!0)}this.projectiles=this.projectiles.filter(t=>!t.remove)}updatePlayer(e){const t=this.player;t.dashCooldown=Math.max(0,t.dashCooldown-e),t.pulseCooldown=Math.max(0,t.pulseCooldown-e),t.invulnerable=Math.max(0,t.invulnerable-e),t.overdrive=Math.max(0,t.overdrive-e),t.lastDamage+=e,t.lastDamage>t.shieldDelay&&t.shield<t.maxShield&&(t.shield=Math.min(t.maxShield,t.shield+t.shieldRegen*e)),this.weaponCooldown=Math.max(0,this.weaponCooldown-e),this.switchTimer=Math.max(0,this.switchTimer-e),this.muzzleTimer=Math.max(0,this.muzzleTimer-e),this.muzzleLight.intensity=this.muzzleTimer>0?5:0,this.reloadTimer>0&&(this.reloadTimer-=e,this.reloadTimer<=0&&this.finishReload());const n=(this.keys.KeyW?1:0)-(this.keys.KeyS?1:0)-(this.touchMove?.y||0),s=(this.keys.KeyD?1:0)-(this.keys.KeyA?1:0)+(this.touchMove?.x||0),r=new R(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),a=new R(Math.cos(this.yaw),0,-Math.sin(this.yaw)),o=r.multiplyScalar(n).add(a.multiplyScalar(s));o.lengthSq()>1&&o.normalize();const l=(this.keys.ShiftLeft||this.keys.ShiftRight)&&n>0,c=t;c.grounded||(c.jumpVel-=21*e,c.jumpY+=c.jumpVel*e,c.jumpY<=0&&(c.jumpY=0,c.jumpVel=0,c.grounded=!0,this.landKick=.45)),this.landKick=Math.max(0,this.landKick-e*2.2),c.slideTime>0&&(c.slideTime-=e),c.slideCooldown=Math.max(0,c.slideCooldown-e);const u=c.slideTime>0;this.sprintBlend=wt(this.sprintBlend,l?1:0,1-Math.exp(-e*8)),this.slideBlend=wt(this.slideBlend,u?1:0,1-Math.exp(-e*12)),this.aimBlend=wt(this.aimBlend,this.aiming?1:0,1-Math.exp(-e*11)),this.hitComboTimer>0&&(this.hitComboTimer-=e,this.hitComboTimer<=0&&(this.hitCombo=0));let f=6.6*t.speedMultiplier*(1+this.sprintBlend*.5)*(1-this.aimBlend*.28)*(t.overdrive>0?1.2:1)*(u?1.35:1);u&&c.slideDir&&o.copy(c.slideDir),t.dashTime>0&&(t.dashTime-=e,f=25,o.lengthSq()===0&&o.copy(new R(-Math.sin(this.yaw),0,-Math.cos(this.yaw))),Math.random()>.4&&this.spawnParticles(t.position.clone().add(new R(0,-.7,0)),5568466,1,.7)),this.dashActive&&t.dashTime<=0&&this.emitDashWave(),this.dashActive=t.dashTime>0;const h=o.multiplyScalar(f);t.velocity.lerp(h,1-Math.exp(-e*(t.dashTime>0?25:12))),this.movePlayer(t.velocity.x*e,t.velocity.z*e);const d=t.velocity.length()>.4,g=d?Math.sin(this.elapsed*(l?14:10))*(.025+this.sprintBlend*.02)*(1-this.slideBlend*.6):0,_=1.7+c.jumpY-this.slideBlend*.72-this.landKick*.12;this.camera.position.set(t.position.x,_+g,t.position.z),this.shake>0&&(this.shake=Math.max(0,this.shake-e*2.5),this.camera.position.x+=xt(-1,1)*this.shake*.08,this.camera.position.y+=xt(-1,1)*this.shake*.08),this.camera.rotation.set(this.pitch,this.yaw,0);const m=72+this.sprintBlend*6+this.slideBlend*8,p=this.currentScopeType==="sniper"?this.sniperZoom:this.currentScopeType==="scope5"?5:this.currentScopeType==="scope3"?3:1.25,T=wt(m,Math.max(16,m/p),this.aimBlend);this.camera.fov=wt(this.camera.fov,T,1-Math.exp(-e*10)),this.camera.updateProjectionMatrix(),this.weaponRecoil=wt(this.weaponRecoil,0,1-Math.exp(-e*13)),this.updateWeaponParts(e),this.isBoard&&this.weaponState[this.weaponIndex].ammo===0&&!t.overdrive&&this.reloadTimer<=0&&this.reload(),this.updateDemoAim(e);const b=this.isTouch&&innerHeight>innerWidth,x=wt(b?.17:.36,0,this.aimBlend),C=wt(b?-.28:-.31,-.2,this.aimBlend),y=this.elapsed*(6+this.sprintBlend*3),P=d?Math.sin(y)*(.012+this.sprintBlend*.024)*(1-this.aimBlend):0,L=d?Math.abs(Math.cos(y))*(.008+this.sprintBlend*.02)*(1-this.aimBlend):0,M=this.sprintBlend*.11*(1-this.aimBlend),E=this.slideBlend*.16;this.weaponRoot.position.x=wt(this.weaponRoot.position.x,x+P,1-Math.exp(-e*12)),this.weaponRoot.position.y=wt(this.weaponRoot.position.y,C+g*.6-M-E+L,1-Math.exp(-e*12)),this.weaponRoot.position.z=-.62+this.weaponRecoil*.13+this.aimBlend*.08,this.weaponRoot.rotation.x=this.weaponRecoil*.1+(this.reloadTimer>0?Math.sin(this.reloadTimer*4)*.35:0)+this.sprintBlend*.2*(1-this.aimBlend)+this.slideBlend*.3,this.weaponRoot.rotation.y=this.slideBlend*.12,this.weaponRoot.rotation.z=(d?Math.sin(this.elapsed*5)*.012:0)+this.sprintBlend*.05+this.slideBlend*.16;const I=document.getElementById("red-dot");I&&(I.style.opacity=String(this.aimBlend)),this.viewHands&&(this.viewHands.position.y=wt(this.viewHands.position.y,-this.slideBlend*.1-this.sprintBlend*.04,1-Math.exp(-e*10))),this.firing&&(_t[this.weaponIndex].auto||this.cheats.auto||!this.shotThisHold)&&this.fireWeapon(),this.comboTimer>0?this.comboTimer-=e:this.combo=wt(this.combo,1,e*3)}pickDemoTarget(e){let t=null,n=1/0;const s=new R;for(const r of this.enemies){if(r.dead||r.phased||(this.getAimPoint(r,s),!this.hasLineOfSight(e,s)))continue;const a=s.distanceTo(e);a<n&&(n=a,t=s.clone())}return t}updateDemoAim(e){if(!this.demoMode||this.state!=="playing")return;const t=this.camera.getWorldPosition(new R),n=this.pickDemoTarget(t);if(!n){this.firing=!1;return}const s=n.x-t.x,r=n.z-t.z;let o=Math.atan2(-s,-r)-this.yaw;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;this.yaw+=o*Math.min(1,e*3.4);const l=Math.hypot(s,r);this.pitch=wt(this.pitch,Math.atan2(n.y-t.y,l),Math.min(1,e*3)),this.firing=!0}handleCheatInput(e){if(e.code==="Backquote"){e.preventDefault?.(),this.toggleCheatConsole();return}const t=e.key;if(t&&t.length===1&&/[a-zA-Z]/.test(t)){this.cheatBuffer=(this.cheatBuffer+t.toLowerCase()).slice(-26);for(const n in fl)if(this.cheatBuffer.endsWith(n)){this.applyCheat(n),this.cheatBuffer="";break}}this.konami.push(e.code),this.konami.length>12&&this.konami.shift(),this.konami.slice(-pl.length).join(",")===pl.join(",")&&(this.konami=[],this.toggleCheatConsole(!0),this.cheatToast("作弊码清单已展开 // ↑↑↓↓←→←→BA 或输入 HELP"))}applyCheat(e){const t=fl[e];if(!t)return;if(t==="help"){this.toggleCheatConsole(!0),this.cheatToast($n.help);return}if(t==="purge"){this.cheatPurge(),this.cheatToast($n.purge+" 已执行");return}if(t==="arsenal"){this.loadout=_t.map((s,r)=>r),this.unlockedWeapon=_t.length-1,this.updateHUD(!0),this.cheatToast($n.arsenal),this.refreshCheatBadge();return}if(t==="recharge"){this.cheatRecharge(),this.cheatToast($n.recharge),this.refreshCheatBadge();return}if(t==="overbound"){Object.keys(this.cheats).forEach(s=>{this.cheats[s]=!0}),this.cheatToast($n.overbound),this.refreshCheatBadge(),this.refreshCheatButtons();return}if(t==="standdown"){Object.keys(this.cheats).forEach(s=>{this.cheats[s]=!1}),this.firing=!1,this.aimTarget=null,this.updateLockReticle(null),this.cheatToast($n.standdown),this.refreshCheatBadge(),this.refreshCheatButtons();return}const n=this.cheats[t];this.cheats[t]=!n,t==="auto"&&n&&(this.firing=!1),t==="lock"&&n&&(this.aimTarget=null,this.updateLockReticle(null)),this.cheatToast((this.cheats[t]?"已激活 // ":"已解除 // ")+$n[t]),this.refreshCheatBadge(),this.refreshCheatButtons()}getAimPoint(e,t=new R){const n=e.weakpoints&&e.weakpoints[0];if(n&&e.spawnTime<=0&&e.group.scale.x>.9)return n.updateWorldMatrix(!0,!1),n.getWorldPosition(t);const s=e.height||2.2,r=e.baseY||0,a=e.group.position;return t.set(a.x,a.y+Math.max(r+.45,s*.7),a.z)}hasLineOfSight(e,t,n=.4){const s=t.clone().sub(e),r=s.length();return r<=n?!0:(s.normalize(),this.losRay.set(e,s),this.losRay.far=r-n,this.losRay.intersectObjects(this.worldColliders,!1).length===0)}blastReaches(e,t){const n=e.clone();return n.y=Math.max(.9,n.y+.6),this.hasLineOfSight(n,this.getAimPoint(t),.9)}segmentBlocked(e,t,n=.12){const s=t.clone().sub(e),r=s.length();return r<=n?!1:(s.normalize(),this.losRay.set(e,s),this.losRay.far=r,this.losRay.intersectObjects(this.worldColliders,!1).length>0)}findTolerantHit(e,t,n){let s=null,r=1/0;const a=new R,o=new R;for(const l of this.enemies){if(l.dead||l.phased||l.spawnTime>0)continue;this.getAimPoint(l,a),o.copy(a).sub(e);const c=o.dot(t);if(c<=0||c>n)continue;const u=o.addScaledVector(t,-c).length(),f=(l.radius||.6)*.45+.07;u>f||this.hasLineOfSight(e,a)&&c<r&&(r=c,s=l)}return s}applyXray(){const e=!!this.cheats.wall;if(this.xrayState!==e){this.xrayState=e;for(const t of this.enemies)t.fadeMaterials.forEach(n=>{n.depthTest=!e,n.needsUpdate=!0}),t.healthBar&&(t.healthBar.children.forEach(n=>{n.material.depthTest=!e,n.material.needsUpdate=!0}),t.healthBar.renderOrder=e?999:0)}for(const t of this.enemies)t.dead||!t.healthBar||(t.healthBar.visible=e||t.health<t.maxHealth)}updateCheats(e){const t=this.cheats;if(this.applyXray(),t.lock||t.auto){const n=this.camera.getWorldPosition(new R),s=this.camera.getWorldDirection(new R),r=this.pickCheatTarget(n,s);if(this.aimTarget=r,r){const a=this.getAimPoint(r),o=a.x-n.x,l=a.y-n.y,c=a.z-n.z;let f=Math.atan2(-o,-c)-this.yaw;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;this.yaw+=f*Math.min(1,e*11);const h=Math.hypot(o,c);this.pitch=wt(this.pitch,Math.atan2(l,h),Math.min(1,e*11)),this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.updateMatrixWorld(!0),t.auto&&(this.firing=!0)}else t.auto&&(this.firing=!1);this.updateLockReticle(r)}else this.aimTarget=null,this.updateLockReticle(null);if(this.cheatToastTimer>0&&(this.cheatToastTimer-=e,this.cheatToastTimer<=0)){const n=document.getElementById("cheat-toast");n&&n.classList.remove("show")}}pickCheatTarget(e,t=null){const n=[];for(const r of this.enemies){if(r.dead||r.phased)continue;const a=this.getAimPoint(r),o=a.distanceTo(e);if(o>95||!this.hasLineOfSight(e,a))continue;const l=t?Ft(t.dot(a.clone().sub(e).normalize()),-1,1):1,c=o+(r.spawnTime>0?5:0)-(l>.3?3:0);n.push({enemy:r,dist:o,rank:c})}if(n.sort((r,a)=>r.rank-a.rank),!n.length)return null;const s=this.aimTarget;if(s&&!s.dead&&!s.phased){const r=n.find(a=>a.enemy===s);if(r&&(n[0].enemy===s||r.dist<=n[0].dist+6))return s}return n[0].enemy}updateLockReticle(e){const t=document.getElementById("lock-reticle");if(!t)return;if(!e){t.classList.remove("show");return}const n=this.getAimPoint(e).project(this.camera);if(n.z>1){t.classList.remove("show");return}t.style.left=`${(n.x*.5+.5)*innerWidth}px`,t.style.top=`${(-n.y*.5+.5)*innerHeight}px`,t.classList.add("show")}cheatPurge(){for(const e of this.enemies)e.dead||this.damageEnemy(e,99999,new R(0,1,0),{critical:!0,critRoll:!0});this.spawnParticles(this.camera.getWorldPosition(new R),16731501,26,5),this.audio.explosion(),this.shake=Math.min(1.3,this.shake+.5)}cheatRecharge(){this.player.health=this.player.maxHealth,this.player.shield=this.player.maxShield,this.player.energy=this.player.energyMax;for(let e=0;e<_t.length;e++)this.weaponState[e].ammo=_t[e].magazine,this.weaponState[e].reserve=_t[e].reserve;this.updateHUD(!0)}refreshCheatBadge(){const e=document.getElementById("cheat-badge");if(!e)return;const t=Object.keys(this.cheats).filter(n=>this.cheats[n]);if(t.length===0){e.classList.remove("show");return}e.innerHTML="<b>越界协议 // OVERBOUND</b>"+t.map(n=>`<span>${hm[n]}</span>`).join(""),e.classList.add("show")}toggleCheatConsole(e){const t=document.getElementById("cheat-console");if(!t)return;const n=e!==void 0?e:!t.classList.contains("active");t.classList.toggle("active",n),n&&this.refreshCheatButtons()}refreshCheatButtons(){const e=document.getElementById("cheat-buttons");e&&e.querySelectorAll("[data-cheat-key]").forEach(t=>{const n=t.dataset.cheatKey;t.classList.toggle("active",!!this.cheats[n])})}cheatToast(e){this.cheatToastTimer=2.4;const t=document.getElementById("cheat-toast");t&&(t.textContent=e,t.classList.add("show"))}movePlayer(e,t){const n=this.player.position,s=Ft(n.x+e,-66.5,66.5);this.collides(s,n.z,.48)||(n.x=s);const r=Ft(n.z+t,-66.5,66.5);this.collides(n.x,r,.48)||(n.z=r)}collides(e,t,n){return this.obstacles.some(s=>e+n>s.minX&&e-n<s.maxX&&t+n>s.minZ&&t-n<s.maxZ)}fireWeapon(){if(this.state!=="playing"||this.weaponCooldown>0||this.reloadTimer>0||this.switchTimer>0||this.player.dashTime>0)return;const e=_t[this.weaponIndex],t=this.weaponState[this.weaponIndex],n=this.player,s=n.overdrive>0,r=this.camera.getWorldPosition(new R),a=this.camera.getWorldDirection(new R),o=s||this.cheats.ammo;if(t.ammo<=0&&!o){this.audio.empty(),this.weaponCooldown=.25,this.shotThisHold=!0,this.reload();return}if(o||(t.ammo-=1),this.shotsFired+=1,this.shotThisHold=!0,this.weaponCooldown=1/(e.fireRate*n.fireRateMultiplier*(s?1.6:1)),this.weaponRecoil=Math.min(1.5,this.weaponRecoil+(e.id==="shotgun"?1:e.id==="rail"?1.25:e.id==="arc"?.45:.32)),this.pitch=Ft(this.pitch+(e.id==="shotgun"?.025:e.id==="rail"?.018:.004),-1.45,1.45),e.rocket){this.audio.shot("rocket"),this.fireRocket(a,e.damage*this.player.damageMultiplier*(s?1.5:1));return}if(this.muzzleTimer=.055,this.audio.shot(e.id),this.isTouch){const u=this.getAimAssist(r,a);u&&a.copy(u)}let l=!1,c=!1;for(let u=0;u<e.pellets;u++){const f=a.clone(),h=e.spread*(this.aiming?.45:1);f.x+=xt(-h,h),f.y+=xt(-h,h),f.z+=xt(-h,h),f.normalize(),this.raycaster.set(r,f),this.raycaster.far=e.range;const d=this.raycaster.intersectObjects(this.worldColliders,!1),g=d.length?d[0].distance:e.range;let _=this.raycaster.intersectObjects(this.enemyHitMeshes,!1).filter(x=>{const C=x.object.userData.enemy;return C&&!C.dead&&!C.phased&&x.distance<g});if(!_.length&&!e.rocket){const x=this.findTolerantHit(r,f,g);if(x){const C=this.getAimPoint(x).clone();_=[{object:{userData:{enemy:x,critical:!!x.weakpoints?.length}},point:C,distance:r.distanceTo(C),tolerant:!0}]}}const m=this.raycaster.intersectObjects(this.barrelMeshes,!1).filter(x=>{const C=x.object.userData.barrel;return C&&!C.dead&&x.distance<g}),p=_.length?_[0].distance:1/0,T=m.length?m[0].distance:1/0;let b=r.clone().addScaledVector(f,g);if(d.length&&(b=d[0].point),T<g&&T<=p)b=m[0].point,this.damageBarrel(m[0].object.userData.barrel,e.damage*this.player.damageMultiplier*(s?1.5:1),f),this.spawnParticles(b,16753226,3,1.3);else if(_.length){l=!0;const x=[];for(const C of _){const y=C.object.userData.enemy;if(x.includes(y))continue;x.push(y);const P=C.object.userData.critical,L=Math.random()<n.critChance+(e.critBonus||0),M=e.damage*n.damageMultiplier*(s?1.5:1)*(P?1.65:1)*(L?n.critMultiplier:1);this.mission?.id==="headshot"&&C.object.userData.critical&&this.addMissionProgress();const E=this.damageEnemy(y,M,f,{critical:!!(P||L),critRoll:L});if(e.chain&&this.chainLightning(y,C.point,M,e.chain+n.chainBonus,new Set(x)),e.frost&&(y.slow=Math.max(y.slow||0,e.slowDuration*(n.frostDuration||1)),y.slowMul=Math.max(.2,e.slowStrength*(n.frostSlow||1)),this.spawnParticles(C.point,10479871,5,1.6)),c=c||E,!e.pierce){b=C.point;break}}this.spawnParticles(b,9437168,e.id==="rail"?10:4,2.2)}else d.length&&this.spawnParticles(b,7055e3,3,1.3);(u===0||e.id==="shotgun")&&this.createTracer(r,b,e.id==="rail"?7523071:e.id==="shotgun"?16757860:e.id==="arc"?8251647:7471067,e.id==="rail"?.22:.07)}l?(this.missStreak=0,this.shotsHit+=1,this.addEnergy(1.4),this.audio.hit(),this.callbacks.onHit(c)):this.missStreak=Math.min(9,this.missStreak+1)}fireRocket(e,t){const n=this.camera.getWorldPosition(new R).addScaledVector(e,1),s=new X(this.sharedProjectileGeometry,new qe({color:16747069,toneMapped:!1}));s.scale.setScalar(1.9),s.position.copy(n),this.scene.add(s),this.projectiles.push({mesh:s,velocity:e.clone().multiplyScalar(36),damage:t,aoe:_t[4].aoe,life:4.5,homing:!0,rocket:!0,source:n.clone()})}explodeRocket(e){const t=e.mesh.position.clone();this.scene.remove(e.mesh);const n=e.aoe;this.spawnParticles(t,16742973,this.isTouch?16:30,6),this.createPulseEffect(t,16747069,n),this.audio.explosion(),this.shake=Math.min(1.3,this.shake+.4);let s=0;for(const r of this.enemies){if(r.dead||r.phased)continue;const a=r.group.position.distanceTo(t);a<n+r.radius&&this.blastReaches(t,r)&&this.damageEnemy(r,e.damage*(1-a/(n+r.radius)*.4),t.clone().sub(r.group.position).setY(0).normalize())&&(s+=1)}for(const r of this.barrels)!r.dead&&r.group.position.distanceTo(t)<n+1&&this.damageBarrel(r,999,new R);s>0&&this.unlockAchievement("hive")}damageBarrel(e,t,n){if(!e.dead){if(e.health-=t,e.health<=0){this.explodeBarrel(e);return}e.flash=.12,e.bodyMaterial&&(e.bodyMaterial.emissiveIntensity=2.4)}}explodeBarrel(e){if(e.dead)return;e.dead=!0;const t=e.group.position.clone();e.group.removeFromParent(),this.barrelMeshes=this.barrelMeshes.filter(r=>r.userData.barrel!==e),this.obstacles=this.obstacles.filter(r=>r!==e.box),this.spawnParticles(t.clone().add(new R(0,.8,0)),16753226,this.isTouch?18:34,7),this.createPulseEffect(t,16742973,6),this.audio.explosion(),this.shake=Math.min(1.4,this.shake+.5);const n=5.5;let s=0;for(const r of this.enemies){if(r.dead)continue;const a=r.group.position.distanceTo(t);a<n+r.radius&&this.blastReaches(t,r)&&this.damageEnemy(r,120*(1-a/(n+r.radius)*.5),t.clone().sub(r.group.position).setY(0).normalize())&&(s+=1)}t.distanceTo(this.player.position)<4.5&&this.damagePlayer(34*(1-t.distanceTo(this.player.position)/4.5*.6),t);for(const r of this.barrels)!r.dead&&r!==e&&r.group.position.distanceTo(t)<4.5&&this.damageBarrel(r,999,new R);this.mission?.id==="barrel"&&s>0&&this.addMissionProgress(s),s>=2&&this.unlockAchievement("barrel")}createHealBeam(e,t){const n=new Mt().setFromPoints([e,t]),s=new Vi({color:7077808,transparent:!0,opacity:1,blending:tn,depthWrite:!1,toneMapped:!1}),r=new Bs(n,s);this.scene.add(r),this.tracers.push({line:r,life:.25,maxLife:.25})}updateBarrels(e){for(const t of this.barrels)t.dead||t.flash<=0||(t.flash-=e,t.flash<=0&&t.bodyMaterial&&(t.bodyMaterial.emissiveIntensity=.5))}chainLightning(e,t,n,s,r){if(s<=0)return 0;let a=t.clone(),o=0;for(let l=0;l<s;l++){let c=null,u=11;for(const h of this.enemies){if(h.dead||h.phased||r.has(h))continue;const d=h.group.position.distanceTo(a);d>=u||!this.hasLineOfSight(a,this.getAimPoint(h),.7)||(u=d,c=h)}if(!c)break;r.add(c);const f=c.group.position.clone().add(new R(0,c.height*.5,0));this.createArc(a,f,8251647),this.damageEnemy(c,n*Math.pow(.72,l+1)*this.player.chainDamage,f.clone().sub(a).normalize()),a=f,o+=1}return o>=3&&this.unlockAchievement("arc-chain"),o}createArc(e,t,n){const s=[];for(let c=0;c<=6;c++){const u=e.clone().lerp(t,c/6);c>0&&c<6&&u.add(new R(xt(-.35,.35),xt(-.35,.35),xt(-.35,.35))),s.push(u)}const a=new Mt().setFromPoints(s),o=new Vi({color:n,transparent:!0,opacity:1,blending:tn,depthWrite:!1,toneMapped:!1}),l=new Bs(a,o);this.scene.add(l),this.tracers.push({line:l,life:.18,maxLife:.18})}getAimAssist(e,t){let n=null,s=this.isBoard?.13:.08;const r=this.isBoard?46:32;for(const a of this.enemies){if(a.dead||a.spawnTime>0||a.phased)continue;const o=this.getAimPoint(a);if(!this.hasLineOfSight(e,o))continue;const l=o.sub(e);if(l.length()>r)continue;l.normalize();const u=Math.acos(Ft(t.dot(l),-1,1));u<s&&(s=u,n=l)}return n}damageEnemy(e,t,n,s={}){if(e.dead)return!1;let r=t;this.player.executeBonus>1&&e.health/e.maxHealth<this.player.executeThreshold&&(r*=this.player.executeBonus),e.broken&&(r*=1.6),s.critRoll&&(this.critCount+=1,this.critCount>=10&&this.unlockAchievement("crit-10")),this.mission?.id==="crit"&&s.critRoll&&this.addMissionProgress(),this.mission?.id==="combo"&&this.hitCombo>=this.mission.target&&this.addMissionProgress(this.mission.target),e.health-=r;const a=r*(s.critical?1.7:1)*(s.heavy?2:1);e.stagger=(e.stagger||0)+a;const o=!e.broken&&e.stagger>=e.staggerMax&&e.health>0;this.hitCombo=(this.hitCombo||0)+1,this.hitComboTimer=3.2,this.hitStop=Math.max(this.hitStop||0,s.critical?.05:.022),this.shake=Math.min(1.2,this.shake+(s.critical?.2:.07)),e.hitTimer=.07;const l=e.health<e.maxHealth;e.healthBar.visible=e.type==="boss"||l||e.stagger>0&&!e.broken;const c=Ft(e.health/e.maxHealth,0,1);return e.barFill.scale.x=c,e.barFill.position.x=-(1-c)*(e.barHalf||.6),this.showDamageNumber(e,r,!!s.critical,e.health<=0),e.health<=0?(this.killEnemy(e,n),!0):(o&&this.breakEnemy(e,n),!1)}showDamageNumber(e,t,n,s){const r=this.callbacks.onDamageNumber;if(!r)return;const a=e.group.position.clone().add(new R(xt(-.3,.3),e.height*.6,0));a.project(this.camera),!(a.z<-1||a.z>1)&&r({amount:Math.round(t),x:(a.x*.5+.5)*innerWidth,y:(-a.y*.5+.5)*innerHeight,critical:n,kill:s,combo:this.hitCombo||0})}killEnemy(e,t=new R){if(e.dead)return;e.dead=!0,e.deathTimer=e.type==="boss"?1.4:.5,e.healthBar.visible=!1,this.enemyHitMeshes=this.enemyHitMeshes.filter(o=>o.userData.enemy!==e),this.kills+=1,this.combo=Math.min(4,this.combo+(e.type==="boss"?1:.2)),this.comboTimer=4,this.comboPeak=Math.max(this.comboPeak,this.combo),this.addEnergy(6),this.unlockAchievement("first-blood"),this.combo>=2.5&&this.unlockAchievement("combo-master"),e.type==="bomber"&&this.unlockAchievement("defuser"),e.type==="medic"&&this.unlockAchievement("medic-down"),e.type==="falcon"&&(this.falconKills=(this.falconKills||0)+1,this.falconKills>=8&&this.unlockAchievement("falconer")),e.slow>0&&(this.frostKills=(this.frostKills||0)+1,this.frostKills>=15&&this.unlockAchievement("frostbite"));const n=Math.floor(e.score*this.combo);this.score+=n,this.credits+=Math.round(e.score*.12),this.mode==="gauntlet"&&(this.waveTimeLeft=Math.min(90,this.waveTimeLeft+2.5)),this.mission?.id==="kills"&&this.addMissionProgress(),this.player.health=Math.min(this.player.maxHealth,this.player.health+this.player.killHeal),this.player.shield=Math.min(this.player.maxShield,this.player.shield+this.player.killHeal*.75);const s=e.group.position.clone().add(new R(0,e.type==="boss"?3:1.1,0));this.spawnParticles(s,ml[e.type].color,e.type==="boss"?70:20,e.type==="boss"?8:4.5),e.type==="boss"?(this.audio.explosion(),this.shake=2,this.createPulseEffect(s,16742229,16)):this.audio.kill(),this.callbacks.onKill(e.name,n);const r=this.weaponState.reduce((o,l)=>o+l.ammo+l.reserve,0),a=(this.mode==="training"?.35:.24)*this.difficulty.drop;if(e.type!=="boss"&&(Math.random()<a||r<25)){const o=Math.random();let l=this.player.health<this.player.maxHealth*.55&&o<.5||o<.34?"health":o<.67?"shield":"ammo";r<25&&(l="ammo"),this.spawnPickup(e.group.position,l)}}reload(){if(this.state!=="playing"||this.reloadTimer>0||this.switchTimer>0)return;const e=_t[this.weaponIndex],t=this.weaponState[this.weaponIndex];t.ammo>=e.magazine||t.reserve<=0||(this.reloadTimer=e.reload/this.player.reloadMultiplier,this.firing=!1,this.audio.reload())}finishReload(){const e=_t[this.weaponIndex],t=this.weaponState[this.weaponIndex],n=e.magazine-t.ammo,s=Math.min(n,t.reserve);t.ammo+=s,t.reserve-=s,this.audio.reload()}switchWeapon(e){this.state!=="playing"||e===this.weaponIndex||!this.loadout.includes(e)||(this.weaponIndex=e,this.reloadTimer=0,this.switchTimer=.32,this.weaponRecoil=.8,this.buildWeaponModel(e),this.audio.ui())}jump(){const e=this.player;this.state!=="playing"||!e.grounded||e.slideTime>0||e.dashTime>0||(e.jumpVel=7.1,e.grounded=!1,this.audio.dash?.())}slide(){const e=this.player;if(this.state!=="playing"||e.slideTime>0||e.slideCooldown>0||!e.grounded)return;const t=this.touchMove&&Math.hypot(this.touchMove.x,this.touchMove.y)>.2;(this.keys.KeyW||this.keys.KeyA||this.keys.KeyS||this.keys.KeyD||t)&&(e.slideTime=.62,e.slideCooldown=1.5,e.slideDir=e.velocity.lengthSq()>.4?e.velocity.clone().setY(0).normalize():new R(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this.spawnParticles(e.position.clone().add(new R(0,-1.5,0)),5568466,8,2.2),this.audio.dash?.())}dash(){this.state!=="playing"||this.player.dashCooldown>0||this.player.dashTime>0||(this.player.dashCooldown=this.player.dashMax,this.player.dashTime=.19,this.player.dashDuration=.19,this.player._perfectUsed=!1,this.player.invulnerable=.28,this.audio.dash())}breakEnemy(e,t){if(e.dead||e.broken)return;e.broken=!0,e.brokenTimer=4.2,e.stagger=e.staggerMax,this.shake=Math.min(1.6,this.shake+.7),this.hitStop=Math.max(this.hitStop,.06),this.triggerSlowmo(.7),this.audio.break?.(),this.callbacks.onBreak?.({name:e.name}),this.callbacks.onGlitch?.("strong");const n=e.group.position.clone().add(new R(0,e.height*.5,0));this.spawnParticles(n,16731501,26,5),this.createPulseEffect(n,16731501,e.radius*4)}triggerPerfectDodge(e){this.triggerSlowmo(1.15),this.audio.perfectDodge?.(),this.callbacks.onPerfect?.({}),this.callbacks.onGlitch?.("light"),this.addEnergy(10),this.spawnParticles(this.player.position.clone().add(new R(0,-.6,0)),5568466,16,3)}triggerSlowmo(e){const t=this.slowmo>0;this.slowmo=Math.max(this.slowmo,e),t||this.callbacks.onSlowmo?.(!0)}cycleScope(){if(this.currentScopeType!=="sniper")return;const e=(this.scopeLevels.indexOf(this.sniperZoom)+1)%this.scopeLevels.length;this.sniperZoom=this.scopeLevels[e],this.callbacks.onToast?.(`狙击镜倍率 // ${this.sniperZoom}×`,1200),this.audio.ui()}pulse(){if(this.state!=="playing"||this.player.pulseCooldown>0)return;this.player.pulseCooldown=this.player.pulseMax*(this.player.overdrive>0?.5:1);const e=this.player.position.clone();this.createPulseEffect(e,5568466,this.player.pulseRadius),this.audio.pulse(),this.shake=.65;for(const t of this.enemies){if(t.dead)continue;const n=t.group.position.distanceTo(e);if(n<=this.player.pulseRadius&&this.blastReaches(e,t)){const s=t.group.position.clone().sub(e).setY(0).normalize();this.damageEnemy(t,this.player.pulseDamage*this.player.damageMultiplier*(1-n/this.player.pulseRadius*.35),s),t.dead||(t.group.position.addScaledVector(s,t.type==="boss"?.4:1.4),this.player.frostPulse&&(t.slow=Math.max(t.slow||0,2.5),t.slowMul=Math.max(.2,.4)))}}}createPulseEffect(e,t,n){const s=new X(new qa(.85,1,64),new qe({color:t,transparent:!0,opacity:.85,side:Ut,blending:tn,depthWrite:!1,toneMapped:!1}));s.rotation.x=-Math.PI/2,s.position.copy(e),s.position.y=.12,this.scene.add(s),this.effects.push({mesh:s,life:.65,maxLife:.65,radius:n})}createTracer(e,t,n,s){const r=this.weaponRoot.localToWorld(new R(0,0,-.8)),a=new Mt().setFromPoints([r,t]),o=new Vi({color:n,transparent:!0,opacity:.9,blending:tn,depthWrite:!1,toneMapped:!1}),l=new Bs(a,o);this.scene.add(l),this.tracers.push({line:l,life:s,maxLife:s})}spawnParticles(e,t,n=8,s=2){const r=new qe({color:t,transparent:!0,toneMapped:!1}),a=Math.min(n,this.maxParticles);for(let o=0;o<a;o++){const l=new X(this.sharedParticleGeometry,r.clone());l.position.copy(e),l.scale.setScalar(xt(.5,1.8)),this.scene.add(l);const c=new R(xt(-1,1),xt(-.25,1.4),xt(-1,1)).normalize().multiplyScalar(xt(s*.35,s));this.particles.push({mesh:l,velocity:c,life:xt(.25,.65),maxLife:.65})}}updateEffects(e){for(const t of this.particles)t.life-=e,t.velocity.y-=5*e,t.mesh.position.addScaledVector(t.velocity,e),t.mesh.material.opacity=Ft(t.life/t.maxLife,0,1),t.life<=0&&(this.scene.remove(t.mesh),t.remove=!0);this.particles=this.particles.filter(t=>!t.remove);for(const t of this.tracers)t.life-=e,t.line.material.opacity=Ft(t.life/t.maxLife,0,1),t.life<=0&&(this.scene.remove(t.line),t.line.geometry.dispose(),t.line.material.dispose(),t.remove=!0);this.tracers=this.tracers.filter(t=>!t.remove);for(const t of this.effects){t.life-=e;const n=1-t.life/t.maxLife;t.mesh.scale.setScalar(1+n*t.radius),t.mesh.material.opacity=(1-n)*.8,t.life<=0&&(this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),t.remove=!0)}this.effects=this.effects.filter(t=>!t.remove)}spawnPickup(e,t){const n={health:5568466,shield:5810943,ammo:16762460},s=new rt,r=new X(new kn(.3,0),new qe({color:n[t],toneMapped:!1})),a=new X(new Un(.48,.025,6,24),new qe({color:n[t],transparent:!0,opacity:.65,toneMapped:!1}));a.rotation.x=Math.PI/2,s.add(r,a),s.position.copy(e).setY(.7),this.scene.add(s),this.pickups.push({group:s,type:t,life:18,phase:Math.random()*6})}updatePickups(e){for(const t of this.pickups){if(t.life-=e,t.phase+=e,t.group.rotation.y+=e*1.8,t.group.position.y=.7+Math.sin(t.phase*2.5)*.12,t.group.position.distanceTo(this.player.position)<this.player.pickupRadius){const n=this.player.pickupPower;t.type==="health"&&(this.player.health=Math.min(this.player.maxHealth,this.player.health+30*n)),t.type==="shield"&&(this.player.shield=Math.min(this.player.maxShield,this.player.shield+25*n)),t.type==="ammo"&&this.weaponState.forEach((s,r)=>{s.reserve+=Math.ceil(_t[r].magazine*1.5*this.player.ammoMultiplier*n)}),this.callbacks.onToast({health:`纳米修复 +${Math.round(30*n)} HP`,shield:`护盾能量 +${Math.round(25*n)} SH`,ammo:"备用弹药已补充"}[t.type]),this.audio.pickup(),t.life=0}t.life<=0&&(this.scene.remove(t.group),t.remove=!0)}this.pickups=this.pickups.filter(t=>!t.remove)}damagePlayer(e,t){if(this.state!=="playing"||this.mode==="training")return;if(this.player.dashTime>0&&this.player.dashTime>this.player.dashDuration-this.player.perfectWindow&&!this.player._perfectUsed){this.player._perfectUsed=!0,this.triggerPerfectDodge(t);return}if(this.player.invulnerable>0||this.cheats.god)return;this.player.lastDamage=0,this.waveDamageTaken+=e,this.addEnergy(8);let n=e;if(this.player.shield>0){const a=Math.min(this.player.shield,n);this.player.shield-=a,n-=a}this.player.health-=n,this.shake=Math.min(1.3,this.shake+.5),this.audio.damage();const s=t.clone().sub(this.player.position),r=Math.atan2(s.x,s.z);this.callbacks.onDamage(r-this.yaw),this.player.health<=0&&this.end(!1)}checkWave(e){if(this.intermission){this.nextWaveTimer-=e,this.nextWaveTimer<=0&&this.startWave();return}if(this.mode==="gauntlet"&&this.waveTimeLeft>0&&(this.waveTimeLeft-=e,this.waveTimeLeft<=0)){this.waveTimeLeft=0,this.end(!1);return}if(this.spawnQueue.length&&(this.spawnTimer-=e,this.spawnTimer<=0)){const n=this.spawnQueue.shift();this.spawnEnemy(n),this.spawnTimer=Math.max(.28,.9-this.wave*.035)}const t=this.enemies.some(n=>!n.dead);if(!this.spawnQueue.length&&!t&&!this.waveClearPending){this.waveClearPending=!0,this.wave>0&&this.waveDamageTaken===0&&this.unlockAchievement("flawless"),this.mission?.id==="flawless"&&this.waveDamageTaken===0&&this.addMissionProgress(1),this.clearedContent&&this.rollFieldEvent();const n=this.runId;(this.mode==="campaign"||this.mode==="gauntlet")&&this.wave>=this.difficulty.waves?setTimeout(()=>{this.runId===n&&this.state==="playing"&&this.end(!0)},1200):setTimeout(()=>{this.runId===n&&this.state==="playing"&&this.waveClearPending&&this.offerUpgrades()},900)}}assignMission(){const e=gl[Math.floor(Math.random()*gl.length)];this.mission={...e,progress:0,done:!1}}addMissionProgress(e=1){const t=this.mission;if(!t||t.done||(t.progress+=e,t.progress<t.target))return;t.done=!0;const n=Math.round(t.reward*(this.missionBonus||1));this.credits+=n,this.callbacks.onToast?.(`战术任务完成 // ${t.text} · +${n} CR`,3400),this.audio.upgrade()}spawnFieldVendor(){if(this.fieldVendor)return;const e=new rt,t=new X(new Sn(.55,.75,1.3,8),new Rt({color:1784371,emissive:3135656,emissiveIntensity:.5,metalness:.8,roughness:.3}));t.position.y=1.5;const n=new X(new Js(.42,1),new Rt({color:861216,emissive:5568466,emissiveIntensity:.9,metalness:.7,roughness:.25}));n.position.y=2.5;const s=new X(new Un(1.05,.05,6,28),new qe({color:this.clearedContent?16747218:16766044,toneMapped:!1}));s.rotation.x=Math.PI/2,s.position.y=1.2;const r=new X(new Ci(.13,8,6),new qe({color:16770442,toneMapped:!1}));r.position.y=3.2;const a=new X(new dn(.9,.5,.7),new Rt({color:2374454,emissive:1727050,emissiveIntensity:.4,metalness:.7}));a.position.set(1.1,.25,0),e.add(t,n,s,r,a);const o=xt(-.5,.5);e.position.set(Math.sin(o)*14,0,12+Math.cos(o)*3),this.scene.add(e),this.fieldVendor={group:e,ring:s,beacon:r},this.callbacks.onToast?.(this.clearedContent?"军需官已抵达 // 精英补给 · 靠近按 G 交易":"流动商人已抵达 // 靠近按 G 交易",4200)}updateFieldVendor(e){if(!this.fieldVendor)return;this.fieldVendor.group.rotation.y+=e*.55,this.fieldVendor.ring.rotation.z+=e*1.3,this.fieldVendor.beacon.position.y=3.2+Math.sin(this.elapsed*3)*.12;const t=this.fieldVendor.group.position.distanceTo(this.player.position),n=document.getElementById("interact-toast");if(n){const s=t<7&&this.state==="playing";n.textContent=s?"按 G 与流动商人交易":"",n.classList.toggle("show",s)}}rollFieldEvent(){const e=[{text:"补给空投 // +260 CR",apply:n=>{n.credits+=260}},{text:"情报官接入 // 本局任务奖励翻倍",apply:n=>{n.missionBonus=2}},{text:"工程师折扣 // 商店 8 折",apply:n=>{n.shopDiscount=.8}},{text:"精英信号 // 下一波额外增援",apply:n=>{n.eliteWave=3}}],t=e[Math.floor(Math.random()*e.length)];t.apply(this),this.fieldEvent=t.text,this.callbacks.onToast?.(`战场事件 // ${t.text}`,3600)}offerUpgrades(){this.state="upgrade",this.firing=!1,document.exitPointerLock?.(),this.currentFreeChoices=this.rollFreeChoices(),this.freePicked=!1,this.freePickIndex=-1,this.credits+=110+this.wave*22,this.rerollCount=0,this.rerollCost=20+this.wave*5,this.currentShop=this.generateShop(),this.callbacks.onUpgrades(this.prepPayload()),this.callbacks.onState("upgrade")}rollFreeChoices(){const e=[...dm],t=[];for(;t.length<3&&e.length;)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);return t}prepPayload(){return{freeChoices:this.currentFreeChoices,shop:this.currentShop,credits:this.credits,wave:this.wave,rerollCost:this.rerollCost,freePicked:this.freePicked,freePickIndex:this.freePickIndex}}generateShop(e){const t=new Set(this.loadout),n=_t.map((o,l)=>({type:"weapon",weaponIndex:l,name:o.name,category:o.category,price:Math.round(o.price*(this.shopDiscount||1)),desc:o.desc})).filter(o=>!t.has(o.weaponIndex)),s=[];for(;s.filter(o=>o.type==="weapon").length<2&&n.length;)s.push(n.splice(Math.floor(Math.random()*n.length),1)[0]);s.push({type:"repair",name:"纳米修复包",category:"supply",price:120,desc:"立即回满生命与护盾。"}),s.push({type:"ammo",name:"弹药补给箱",category:"supply",price:90,desc:"全部武器补满备用弹药。"});const r=_l.filter(o=>this.wave>=(um[o.rarity]||0));for(;s.length<5;){const o=r.length?r[Math.floor(Math.random()*r.length)]:null;if(!o)break;s.push({type:"mod",modId:o.id,name:o.name,icon:o.icon,rarity:o.rarity,price:Math.round(o.price*(this.shopDiscount||1)),desc:o.desc})}const a=s.map(o=>({...o,sold:!1,locked:!1}));return e&&e.forEach((o,l)=>{o.locked&&!o.sold&&a[l]&&(a[l]=o)}),a}buyShopItem(e){const t=this.currentShop?.[e];return!t||t.sold||this.credits<t.price||t.locked?!1:(this.credits-=t.price,t.sold=!0,t.type==="weapon"?this.unlockWeapon(t.weaponIndex):t.type==="repair"?(this.player.health=this.player.maxHealth,this.player.shield=this.player.maxShield):t.type==="ammo"?this.weaponState.forEach((n,s)=>{n.ammo=_t[s].magazine,n.reserve=_t[s].reserve}):t.type==="mod"&&_l.find(s=>s.id===t.modId)?.apply(this),this.audio.upgrade(),this.state==="upgrade"?this.callbacks.onUpgrades?.(this.prepPayload()):this.callbacks.onShop?.({shop:this.currentShop,credits:this.credits,standalone:this.state==="shop"}),!0)}lockShopItem(e){const t=this.currentShop?.[e];!t||t.sold||(t.locked=!t.locked,this.state==="upgrade"?this.callbacks.onUpgrades?.(this.prepPayload()):this.state==="shop"&&this.callbacks.onShop?.({shop:this.currentShop,credits:this.credits,standalone:!0}))}rerollShop(){if(this.state!=="upgrade"||this.credits<this.rerollCost){this.audio.empty?.();return}this.credits-=this.rerollCost,this.rerollCount+=1,this.rerollCost+=10+Math.floor(this.wave*.5)*5,this.currentFreeChoices=this.rollFreeChoices(),this.freePicked=!1,this.freePickIndex=-1,this.currentShop=this.generateShop(this.currentShop),this.audio.upgrade(),this.callbacks.onUpgrades?.(this.prepPayload())}chooseFreeUpgrade(e){this.state!=="upgrade"||this.freePicked||!this.currentFreeChoices[e]||(this.currentFreeChoices[e].apply(this),this.freePicked=!0,this.freePickIndex=e,this.appliedUpgrades.push({name:this.currentFreeChoices[e].name,icon:this.currentFreeChoices[e].icon}),this.audio.upgrade(),this.callbacks.onUpgrades?.(this.prepPayload()))}deploy(){if(this.state!=="upgrade"||!this.freePicked){this.audio.empty?.();return}this.state="playing",this.waveClearPending=!1,this.intermission=!0,this.nextWaveTimer=2.1,this.callbacks.onState("playing"),this.callbacks.onAnnounce("整备完成","下一波即将到来","DEPLOY / READY",1900),this.requestLock()}openFieldShop(){if(!(this.state!=="playing"||!this.fieldVendor)){if(this.fieldVendor.group.position.distanceTo(this.player.position)>7){this.callbacks.onToast?.("距离商人过远 // 靠近后按 G 交易",1800);return}this.openShopStandalone()}}openShopStandalone(){this.state==="playing"&&(this.currentShop?.length||(this.currentShop=this.generateShop()),this.state="shop",this.firing=!1,document.exitPointerLock?.(),this.callbacks.onShop?.({shop:this.currentShop,credits:this.credits,standalone:!0}),this.callbacks.onState?.("shop"))}closeShopStandalone(){this.state==="shop"&&(this.state="playing",this.callbacks.onState?.("playing"),this.requestLock())}chooseUpgrade(e){this.chooseFreeUpgrade(e)}end(e){if(this.state==="ended")return;this.state="ended",this.firing=!1,document.exitPointerLock?.();const t=Number(localStorage.getItem("nexus-best-score")||0),n=Number(localStorage.getItem("nexus-best-wave")||0),s=this.score>t;if(s&&localStorage.setItem("nexus-best-score",String(Math.floor(this.score))),this.wave>n&&localStorage.setItem("nexus-best-wave",String(this.wave)),e&&(this.unlockAchievement("victory"),this.difficulty.id==="nightmare"&&this.unlockAchievement("nightmare")),e&&this.wave>=10){const a=!this.clearedContent;try{localStorage.setItem("nexus-cleared","1")}catch{}this.clearedContent=!0,this.callbacks.onToast?.(a?"基础战役通关 // 解锁「极限」难度 · 军需官 · 战场事件 · 隐藏内容":"战役通关 // 进度已同步",6e3)}const r=this.saveCareer(e);e?this.audio.victory():this.audio.gameOver(),this.callbacks.onState("ended",{victory:e,score:this.score,wave:this.wave,kills:this.kills,accuracy:this.shotsFired?this.shotsHit/this.shotsFired*100:0,newRecord:s,career:r,difficulty:this.difficulty.label,achievements:[...this.runAchievements]})}saveCareer(e){let t={runs:0,kills:0,wins:0,bestCombo:1,achievements:[]};try{t={...t,...JSON.parse(localStorage.getItem("nexus-career")||"{}")}}catch{}t.runs+=1,t.kills+=this.kills,e&&(t.wins+=1),t.bestCombo=Math.max(Number(t.bestCombo)||1,this.comboPeak),t.achievements=[...new Set([...t.achievements||[],...this.runAchievements])];try{localStorage.setItem("nexus-career",JSON.stringify(t))}catch{}return t}updateHUD(e=!1){if(!e&&this.hudTimer>0)return;this.hudTimer=.07;const t=this.enemies.find(n=>n.type==="boss"&&!n.dead);this.callbacks.onHUD({health:this.player.health,maxHealth:this.player.maxHealth,shield:this.player.shield,maxShield:this.player.maxShield,wave:this.wave,mode:this.mode,enemies:this.enemies.filter(n=>!n.dead).length+this.spawnQueue.length,score:this.score,combo:this.combo,weapon:_t[this.weaponIndex],weaponIndex:this.weaponIndex,scopeType:this.currentScopeType,sniperZoom:this.sniperZoom,aiming:this.aiming,ammo:this.weaponState[this.weaponIndex].ammo,reserve:this.weaponState[this.weaponIndex].reserve,reloading:this.reloadTimer>0,unlockedWeapon:this.unlockedWeapon,dashCooldown:this.player.dashCooldown,dashMax:this.player.dashMax,pulseMax:this.player.pulseMax*(this.player.overdrive>0?.5:1),pulseCooldown:this.player.pulseCooldown,boss:t?{health:t.health,maxHealth:t.maxHealth}:null,energy:this.player.energy,energyMax:this.player.energyMax,overdrive:this.player.overdrive,difficulty:this.difficulty.label,critChance:this.player.critChance,intermission:this.intermission,elapsed:this.elapsed,loadout:this.loadout,credits:this.credits,weaponSlot:this.loadout.indexOf(this.weaponIndex),waveTotal:this.difficulty.waves,waveTimeLeft:this.waveTimeLeft,mission:this.mission,clearedContent:this.clearedContent,fieldEvent:this.fieldEvent,vendorNearby:!!(this.fieldVendor&&this.fieldVendor.group.position.distanceTo(this.player.position)<7),profile:this.profile,demo:this.demoMode,board:this.isBoard})}drawRadar(){const e=this.radarContext,t=this.radar.width,n=t/2,s=t/90;e.clearRect(0,0,t,t),e.save(),e.beginPath(),e.arc(n,n,n-2,0,Math.PI*2),e.clip(),e.strokeStyle="rgba(84,247,210,.13)",e.lineWidth=1,[.33,.66,1].forEach(a=>{e.beginPath(),e.arc(n,n,n*a,0,Math.PI*2),e.stroke()}),e.beginPath(),e.moveTo(n,0),e.lineTo(n,t),e.moveTo(0,n),e.lineTo(t,n),e.stroke();const r=(a,o,l)=>{const c=a.x-this.player.position.x,u=a.z-this.player.position.z,f=Math.cos(-this.yaw),h=Math.sin(-this.yaw),d=c*f-u*h,g=c*h+u*f;Math.hypot(d,g)>43||(e.fillStyle=o,e.beginPath(),e.arc(n+d*s,n+g*s,l,0,Math.PI*2),e.fill())};this.enemies.forEach(a=>{!a.dead&&(!a.phased||this.cheats.wall)&&r(a.group.position,a.type==="boss"?"#ff9a55":a.type==="turret"?"#ffb24d":a.type==="medic"?"#47e0a0":a.type==="bomber"?"#ffc24d":a.type==="phantom"?"#5ce1ff":a.type==="falcon"?"#c6ff3d":"#ff5362",a.type==="boss"?4:2.2)}),this.pickups.forEach(a=>r(a.group.position,"#54f7d2",1.5)),e.restore(),e.fillStyle="#a9fff0",e.beginPath(),e.moveTo(n,n-6),e.lineTo(n-4,n+4),e.lineTo(n+4,n+4),e.closePath(),e.fill()}updateMenu(e){this.menuTime+=e;const t=this.menuTime*.055;this.camera.position.set(Math.sin(t)*30+8,7+Math.sin(t*2)*1.2,Math.cos(t)*30+4),this.camera.lookAt(0,2.7,0),this.camera.fov=wt(this.camera.fov,58,e*2),this.camera.updateProjectionMatrix(),this.weaponRoot.visible=!1}animate(){requestAnimationFrame(this.animate);const e=Math.min(this.clock.getDelta(),.05);this.hitStop>0&&(this.hitStop=Math.max(0,this.hitStop-e));let t=this.hitStop>0?e*.22:e;if(this.slowmo>0&&(this.slowmo=Math.max(0,this.slowmo-e),t*=.34,this.slowmo===0&&this.callbacks.onSlowmo?.(!1)),this.animatedWorld.forEach(({mesh:n,speed:s,axis:r,update:a})=>{a?a(e,this.menuTime+this.elapsed):r&&(n.rotation[r]+=s*e)}),this.dust&&(this.dust.rotation.y+=e*.003),this.state==="playing"){this.elapsed+=t,this.hudTimer-=e,this.radarTimer-=e,this.updateCheats(t);const n=(this.cheats.slow?.4:1)*t;this.updatePlayer(t),this.updateEnemies(n),this.updateProjectiles(n),this.updatePickups(n),this.updateEffects(n),this.updateBarrels(n),this.updateFieldVendor(t),this.checkWave(e),this.updateHUD(),this.radarTimer<=0&&(this.radarTimer=.09,this.drawRadar())}else this.state==="menu"&&(this.updateMenu(e),this.updateEffects(e));this.renderer.render(this.scene,this.camera)}}const q=i=>document.querySelector(i),fn=i=>[...document.querySelectorAll(i)],ti=(i,e=2)=>String(Math.max(0,Math.floor(i))).padStart(e,"0"),pm=i=>Math.floor(i).toLocaleString("en-US").replaceAll(",",","),uc=hc();document.documentElement.dataset.device=uc;const mm={desktop:"DEVICE / DESKTOP",mobile:"DEVICE / MOBILE",board:"DEVICE / SEEWO BOARD"};q("#device-badge").textContent=mm[uc];let fc="campaign",pc="standard",mc=0,ja="campaign",ht,vl,xl,Ml,yl,Sl=0;const gm={briefing:`
    <div class="eyebrow">OPERATION / NEON ASHES</div><h2 id="modal-title">作战简报<span>.</span></h2>
    <p class="modal-lead">02:17，第七区战术网络遭到不明机械军团入侵。你是最后一名仍可链接的「幽灵」作战员。以下为 1.0 正式版的完整作战流程。</p>
    <div class="briefing-grid"><div><b>01</b><strong>自定装备</strong><p>开局从手枪 / 步枪 / 狙击三选一，武器库共 15 把，按 1–6 切换已持有武器。</p></div><div><b>02</b><strong>战后补给</strong><p>首波结束即开放补给站：用信用点购买武器与补给，再从肉鸽模块中三选一强化。</p></div><div><b>03</b><strong>战术任务</strong><p>每波随机任务与章节剧情推进；第 3 / 6 / 9 波出现流动商人，靠近按 G 交易。</p></div><div><b>04</b><strong>摧毁核心</strong><p>难度决定通关波数（10 / 15 / 20 / 25 波），最终波迎战守望者；通关后解锁极限难度与战场事件。</p></div></div>
    <div class="intel-row v2"><span>红色敌人擅长突袭</span><span>紫色敌人远程攻击</span><span>橙色重装移动缓慢</span><span>青色幽影会相位隐形</span><span>黄色蜂群贴近后自毁</span><span>绿色单元会修复友军</span><span>琥珀炮台定点轰炸</span><span>青柠游隼高速俯冲</span><span>油桶可被引爆</span></div>`,armory:`
    <div class="eyebrow">TACTICAL LOADOUT / NX SERIES</div><h2 id="modal-title">武器库<span>.</span></h2><p class="modal-lead">六把武器均在行动中按波次自动解锁。按 1–6 或滚轮快速切换。</p>
    <div class="armory-list"><article><div class="weapon-silhouette rifle">VX-9</div><div><small>01 / 初始装备</small><h3>VX-9 脉冲</h3><p>稳定的全自动脉冲步枪，适合中距离持续压制。</p><span>伤害 24　·　射速 9/s　·　弹匣 30</span></div></article><article><div class="weapon-silhouette shotgun">SG-12</div><div><small>02 / 第 2 波解锁</small><h3>SG-12 裂解</h3><p>八枚高能弹丸同时释放，近距离可造成毁灭性伤害。</p><span>伤害 14×8　·　射速 1.2/s　·　弹匣 6</span></div></article><article><div class="weapon-silhouette rail">R-01</div><div><small>03 / 第 4 波解锁</small><h3>R-01 磁轨</h3><p>高精度磁轨射线，贯穿一条直线上的所有敌人。</p><span>伤害 135　·　射速 0.8/s　·　弹匣 5</span></div></article><article class="v2"><div class="weapon-silhouette rail">ARC-7</div><div><small>04 / 第 6 波解锁</small><h3>ARC-7 弧光</h3><p>发射链式电弧，命中后自动跳跃到附近敌人，最多连锁 3 个目标。</p><span>伤害 46　·　射速 3.4/s　·　弹匣 24</span></div></article><article class="v2"><div class="weapon-silhouette rocket">WN-5</div><div><small>05 / 第 8 波解锁</small><h3>WN-5 蜂巢</h3><p>六管制导发射器，导弹自动锁定最近敌人，命中后产生范围爆炸，可连爆油桶。</p><span>伤害 120　·　射速 1.1/s　·　弹匣 4</span></div></article><article class="v2"><div class="weapon-silhouette frost">LN-3</div><div><small>06 / 第 9 波解锁</small><h3>LN-3 寒霜</h3><p>低温步枪，命中使敌人减速 50%，是控场与切断冲锋的核心手段。</p><span>伤害 30　·　射速 4.2/s　·　弹匣 22</span></div></article></div>`,controls:`
    <div class="eyebrow">NEURAL INTERFACE / MANUAL</div><h2 id="modal-title">操作指南<span>.</span></h2>
    <div class="controls-grid"><div><h3>键鼠操作</h3><p><kbd>W A S D</kbd><span>移动</span></p><p><kbd>鼠标</kbd><span>观察 / 瞄准</span></p><p><kbd>左键 / 右键</kbd><span>射击 / 精确瞄准</span></p><p><kbd>Shift</kbd><span>疾跑（武器下沉）</span></p><p><kbd>Space</kbd><span>跳跃</span></p><p><kbd>Ctrl / C</kbd><span>滑铲</span></p><p><kbd>Q / E</kbd><span>冲刺 / 电磁脉冲</span></p><p><kbd>F</kbd><span>核心超载（能量满时）</span></p><p><kbd>G</kbd><span>靠近 NPC 商人时交易</span></p><p><kbd>R / 1–6</kbd><span>装填 / 切换已持有武器</span></p><p><kbd>ESC / P</kbd><span>暂停</span></p></div><div><h3>触屏操作</h3><p><kbd>左侧摇杆</kbd><span>移动</span></p><p><kbd>右侧滑动</kbd><span>观察 / 瞄准</span></p><p><kbd>FIRE</kbd><span>按住连续射击</span></p><p><kbd>Q / E</kbd><span>冲刺 / 电磁脉冲</span></p><p><kbd>F</kbd><span>核心超载</span></p><p><kbd>R / ⇄</kbd><span>装填 / 切换武器</span></p><p><kbd>Ⅱ</kbd><span>暂停</span></p><small>手机端会自动辅助瞄准近距离目标。</small></div></div>
    <p class="modal-lead" style="margin-top:16px">首页「威胁校准」共四档：新兵 10 波、标准 15 波、噩梦 20 波，通关任意战役后解锁「极限」25 波。难度同时影响敌人强度、掉落率、积分倍率与通关波数。</p>
    <div class="board-note"><h3>希沃白板 / 教学一体机</h3><p>首页「设备适配」选择「白板大屏」：左下角<strong>「移动 / MOVE」高对比圆形摇杆</strong>常显（含方向箭头与中心十字），右侧滑动转向，右下 <kbd>FIRE</kbd> 开火，底部技能排含跳跃 / 滑铲 / 冲刺 / 脉冲 / 超载 / 切枪 / 瞄准 / 演示。全部按钮 ≥64px，支持红外多点触控，弹药打空自动装填，无需键盘鼠标。点 <kbd>AUTO</kbd> 开启课堂演示（自动锁敌开火）；<kbd>◎</kbd> 为精确瞄准。</p></div>
    <div class="board-note" style="border-color:#ff4d6d44"><h3>越界协议 // OVERBOUND 作弊码</h3><p>单机训练用外挂。游戏中直接敲字母触发（大小写均可）：<kbd>LOCKON</kbd> 锁头、<kbd>AUTOFIRE</kbd> 自动射击、<kbd>GODMODE</kbd> 无敌、<kbd>INFINITY</kbd> 无限弹药、<kbd>XRAY</kbd> 透视、<kbd>TIMESLIP</kbd> 子弹时间、<kbd>PURGE</kbd> 清场、<kbd>ARSENAL</kbd> 全武器、<kbd>RECHARGE</kbd> 回满、<kbd>OVERBOUND</kbd> 全开、<kbd>STANDDOWN</kbd> 全关。按 <kbd>&#96;</kbd> 或 <kbd>↑↑↓↓←→←→BA</kbd> 展开作弊清单。</p></div>`};function _m(){return`<div class="eyebrow">TACTICAL LOADOUT / NX SERIES</div><h2 id="modal-title">武器库<span>.</span></h2><p class="modal-lead">15 把武器分为手枪 / 步枪 / 狙击 / 特殊四类。开局任选一把作为起始装备，其余在战后补给站购买或按波次配发。按 1–6 切换已持有武器。</p>${["pistol","rifle","sniper","special"].map(e=>{const t=_t.map((s,r)=>({...s,i:r})).filter(s=>s.category===e),n=t.map(s=>`<article class="${s.i>=6?"v2":""}"><div class="weapon-silhouette ${e}">${s.name.split(" ")[0]}</div><div><small>${s.i>=6?"V1.0 新增":"制式装备"} · ${s.price} CR</small><h3>${s.name}</h3><p>${s.desc}</p><span>伤害 ${s.damage}　·　射速 ${s.fireRate}/s　·　弹匣 ${s.magazine}</span></div></article>`).join("");return`<div class="armory-group"><h3>${dc[e]}<small>${t.length} 把</small></h3><div class="armory-list">${n}</div></div>`}).join("")}`}function vm(){let i={runs:0,kills:0,wins:0,bestCombo:1,achievements:[]};try{i={...i,...JSON.parse(localStorage.getItem("nexus-career")||"{}")}}catch{}const e=new Set(i.achievements||[]);return`
    <div class="eyebrow">OPERATIVE RECORD / ARCHIVE</div><h2 id="modal-title">生涯档案<span>.</span></h2>
    <p class="modal-lead">战绩仅保存在本机浏览器，不会上传。挑战噩梦难度，解锁全部战术徽章。</p>
    <div class="career-grid"><div><small>出击次数</small><strong>${i.runs}</strong></div><div><small>累计击毁</small><strong>${i.kills}</strong></div><div><small>通关次数</small><strong>${i.wins}</strong></div><div><small>最高连击</small><strong>×${Number(i.bestCombo||1).toFixed(1)}</strong></div></div>
    <div class="eyebrow">战术徽章 · ${e.size} / ${qs.length}</div>
    <div class="achievement-list">${qs.map(t=>`<div class="achievement-item ${e.has(t.id)?"unlocked":""}"><i>${e.has(t.id)?"◆":"◇"}</i><div><strong>${t.name}</strong><small>${t.desc}</small></div></div>`).join("")}</div>`}function xm(i){q("#modal-content").innerHTML=i==="career"?vm():i==="armory"?_m():gm[i],q("#modal-backdrop").classList.add("active")}function er(){q("#modal-backdrop").classList.remove("active")}fn("[data-modal]").forEach(i=>i.addEventListener("click",()=>xm(i.dataset.modal)));q("#modal-close").addEventListener("click",er);q("#modal-backdrop").addEventListener("click",i=>{i.target===q("#modal-backdrop")&&er()});fn(".mode-card").forEach(i=>i.addEventListener("click",()=>{fn(".mode-card").forEach(e=>e.classList.remove("selected")),i.classList.add("selected"),fc=i.dataset.mode,ht?.audio.ui()}));fn(".difficulty-chip").forEach(i=>i.addEventListener("click",()=>{if(i.dataset.difficulty==="apex"&&localStorage.getItem("nexus-cleared")!=="1"){gc("「极限」难度需先通关核心行动（≥ 10 波）",3200),i.classList.add("locked-chip");return}fn(".difficulty-chip").forEach(e=>e.classList.remove("selected")),i.classList.add("selected"),pc=i.dataset.difficulty,ht?.audio.ui()}));function Mm(){const i=localStorage.getItem("nexus-cleared")==="1";q("#unlock-banner").innerHTML=i?"<b>◆ 基础战役已通关</b><span>已解锁「极限」难度 · 军需官 · 战场事件 · 隐藏内容</span>":"<b>◇ 战役进度</b><span>通关 ≥ 10 波后解锁极限难度、军需官与战场事件</span>",q(".locked-chip")?.classList.toggle("unlocked",i)}fn(".start-weapon-chip").forEach(i=>i.addEventListener("click",()=>{fn(".start-weapon-chip").forEach(e=>e.classList.remove("selected")),i.classList.add("selected"),mc=Number(i.dataset.start),ht?.audio.ui()}));let Ua=null;try{Ua=localStorage.getItem("nexus-device")}catch{}const wl=new URLSearchParams(location.search).get("device"),ym=["desktop","mobile","board"].includes(wl)?wl:null,Sm=ym||(["desktop","mobile","board"].includes(Ua)?Ua:"auto");fn(".device-chip").forEach(i=>{i.classList.toggle("selected",i.dataset.device===Sm),i.addEventListener("click",()=>{const e=i.dataset.device;try{e==="auto"?localStorage.removeItem("nexus-device"):localStorage.setItem("nexus-device",e)}catch{}ht?.audio.ui(),setTimeout(()=>location.reload(),140)})});function wm(i,e={}){q("#menu-screen").classList.toggle("active",i==="menu"),q("#hud").classList.toggle("active",["playing","paused","upgrade","shop"].includes(i)),q("#pause-screen").classList.toggle("active",i==="paused"),q("#upgrade-screen").classList.toggle("active",i==="upgrade"),q("#shop-screen").classList.toggle("active",i==="shop"),q("#end-screen").classList.toggle("active",i==="ended"),i==="menu"&&(Za(),document.exitPointerLock?.()),i==="ended"&&Nm(e)}function Em(i){q("#health-fill").style.width=`${Math.max(0,i.health/i.maxHealth*100)}%`,q("#health-value").textContent=Math.ceil(Math.max(0,i.health)),q("#shield-fill").style.width=`${Math.max(0,i.shield/i.maxShield*100)}%`,q("#shield-value").textContent=Math.ceil(Math.max(0,i.shield)),q("#wave-value").textContent=ti(i.wave),q("#wave-total").textContent=i.mode==="endless"?"/ ∞":`/ ${i.waveTotal||15}`,q("#mode-label").textContent={campaign:"核心行动",endless:"无尽裂隙",training:"模拟训练",gauntlet:"限时歼灭"}[i.mode]||"核心行动";const e=q("#gauntlet-timer");e.textContent=i.mode==="gauntlet"?`剩余 ${Math.ceil(i.waveTimeLeft||0)}s · 击杀续时`:"",e.classList.toggle("urgent",i.mode==="gauntlet"&&i.waveTimeLeft<12),q("#difficulty-label").textContent=i.difficulty,q("#enemy-count").textContent=i.intermission?"区域暂时安全":`${i.enemies} 个敌对信号`,q("#score-value").textContent=ti(i.score,6),q("#combo-value").textContent=`× ${i.combo.toFixed(1)}`,q("#weapon-name").innerHTML=i.weapon.label,q("#weapon-class").textContent=i.weapon.className;const t=q("#scope-readout");t&&(i.aiming&&i.scopeType==="sniper"?(t.textContent=`${i.sniperZoom}×`,t.classList.add("visible")):t.classList.remove("visible")),q("#ammo-value").textContent=ti(i.ammo),q("#reserve-value").textContent=i.reserve,q("#reload-hint").classList.toggle("visible",i.ammo===0||i.reloading),q("#reload-hint").textContent=i.reloading?"正在装填…":"按 R 装填弹药",q("#crosshair").classList.toggle("reloading",i.reloading);const n=q(".weapon-slots"),s=i.loadout||[0],r=s.join(",");n.dataset.signature!==r&&(n.dataset.signature=r,n.innerHTML=s.slice(0,6).map((l,c)=>`<span data-slot="${l}">${c+1}</span>`).join("")),fn(".weapon-slots span").forEach(l=>l.classList.toggle("active",Number(l.dataset.slot)===i.weaponIndex)),q("#credits-value").textContent=`${Math.floor(i.credits||0)} CR`,El("#ability-dash",i.dashCooldown,i.dashMax),El("#ability-pulse",i.pulseCooldown,i.pulseMax);const a=i.overdrive>0?100:i.energy/i.energyMax*100;q("#energy-fill").style.width=`${Math.max(0,Math.min(100,a))}%`;const o=i.energy>=i.energyMax&&i.overdrive<=0;q("#energy-block").classList.toggle("ready",o),q("#energy-block").classList.toggle("active",i.overdrive>0),q("#overdrive-status").textContent=i.overdrive>0?`超载 ${i.overdrive.toFixed(1)}s`:o?"就绪 · 按 F 释放":`充能 ${Math.floor(a)}%`,q("#mobile-overdrive")?.classList.toggle("ready",o),q("#boss-hud").classList.toggle("active",!!i.boss),i.boss&&(q("#boss-fill").style.width=`${Math.max(0,i.boss.health/i.boss.maxHealth*100)}%`),i.mission&&(q("#objective-label").textContent=i.mission.done?"任务完成":"战术任务",q("#objective-title").textContent=i.mission.text,q("#objective-sub").textContent=i.mission.done?`奖励已发放 · +${Math.round(i.mission.reward*(i.missionBonus||1))} CR`:`进度 ${Math.min(i.mission.progress,i.mission.target)} / ${i.mission.target} · 奖励 ${i.mission.reward} CR`,q("#objective").classList.toggle("mission-done",i.mission.done)),q("#objective").classList.toggle("hidden",!i.mission&&(i.wave>1||i.elapsed>12)),i.vendorNearby&&(q("#objective-sub").textContent="按 G 与流动商人交易 · 可购买武器与补给"),i.board&&(q("#board-badge").classList.toggle("demo",!!i.demo),q("#board-demo-state").textContent=i.demo?"自动演示中":"手动操作")}function El(i,e,t){const n=q(i),s=e<=0;n.classList.toggle("cooldown",!s),n.querySelector(".ability-status").textContent=s?"就绪":`${e.toFixed(1)}s`,n.querySelector(".ability span i").style.width=`${100-Math.min(100,e/Math.max(.1,t)*100)}%`}function bm(i,e="",t="COMBAT UPDATE",n=2200){clearTimeout(vl);const s=q("#announcer");s.querySelector("small").textContent=t,s.querySelector("strong").textContent=i,s.querySelector("p").textContent=e,s.classList.add("active"),vl=setTimeout(()=>s.classList.remove("active"),n)}function gc(i,e=1800){clearTimeout(xl),q("#interact-toast").textContent=i,q("#interact-toast").classList.add("active"),xl=setTimeout(()=>q("#interact-toast").classList.remove("active"),e)}function Tm(i){clearTimeout(yl);const e=q("#story-banner");!e||!i||(e.querySelector("small").textContent="剧情 // STORY LOG",e.querySelector("strong").textContent=i.title,e.querySelector("p").textContent=i.text,e.classList.remove("active"),e.offsetWidth,e.classList.add("active"),yl=setTimeout(()=>e.classList.remove("active"),6500))}function bl(i,e,t,n){const s=q("#combat-banner");s.className=`combat-banner ${i}`,s.querySelector("small").textContent=e,s.querySelector("strong").textContent=t,s.querySelector("p").textContent=n,s.offsetWidth,s.classList.add("show")}function Am(i="light"){const e=q("#glitch-flash");e.className="glitch-flash",e.offsetWidth,e.classList.add(i)}function Rm(i){q("#slowmo-vignette").classList.toggle("active",i)}function Cm(i){const e=q("#achievement-toast");e.querySelector("strong").textContent=i.name,e.querySelector("p").textContent=i.desc,e.classList.remove("active"),e.offsetWidth,e.classList.add("active"),clearTimeout(Ml),Ml=setTimeout(()=>e.classList.remove("active"),3e3)}function Pm({amount:i,x:e,y:t,critical:n,kill:s,combo:r}){const a=q("#damage-numbers"),o=performance.now();if(a.querySelectorAll(".damage-number").length>18||o-Sl<18)return;Sl=o;const l=document.createElement("div");if(l.className=`damage-number${s?" kill":n?" critical":""}`,l.textContent=i,l.style.left=`${e}px`,l.style.top=`${t}px`,a.appendChild(l),setTimeout(()=>l.remove(),820),r>=2){const c=document.createElement("div");c.className=`combo-popup${r>=10?" hot":""}`,c.innerHTML=`<b>${r}</b><span>HIT</span>`,c.style.left=`${e}px`,c.style.top=`${t-48}px`,a.appendChild(c),setTimeout(()=>c.remove(),900)}}function Lm(i){const e=i.upgrades.length?i.upgrades.map(t=>`<span>${t.icon} ${t.name}</span>`).join(""):'<span class="pause-build-empty">尚未安装战术模块</span>';q("#pause-build").innerHTML=`
    <div class="pause-build-head"><span>当前作战配置</span><span>${i.difficulty}难度</span></div>
    <div class="pause-build-stats"><span>伤害 +${i.damage}%</span><span>暴击 ${i.crit}%</span><span>击毁 ${i.kills}</span><span>波次 ${ti(i.wave)}</span></div>
    <div class="pause-build-modules">${e}</div>`}function Im(i,e){const t=document.createElement("div");for(t.innerHTML=`<span>目标清除</span><strong>${i}</strong><b>+${e}</b>`,q("#kill-feed").prepend(t),setTimeout(()=>t.remove(),3500);q("#kill-feed").children.length>4;)q("#kill-feed").lastChild.remove()}function Dm(i=!1){const e=q("#hitmarker");e.classList.remove("active","kill"),e.offsetWidth,e.classList.add("active"),i&&e.classList.add("kill")}function zs(i,e,t,n){const s=q(t);!s||!i||(q(n)&&(q(n).textContent=`${Math.floor(e)} CR`),s.innerHTML=i.map((r,a)=>{const o=r.sold||e<r.price,l=r.category==="supply"?"战场补给":dc[r.category]||"武器",c=r.rarity?`<span class="rarity-badge rarity-${r.rarity}">${"◆".repeat(r.rarity)} R${r.rarity}</span>`:"",u=r.sold?"":`<button class="lock-btn${r.locked?" locked":""}" data-lock="${a}" title="锁定后刷新不替换">${r.locked?"🔒":"🔓"}</button>`;return`<div class="shop-cell">
      <button class="shop-item${r.sold?" sold":""}${r.locked?" locked":""}" data-shop="${a}" ${o?"disabled":""}>
        <small>${l}${c}</small>
        <strong>${r.name}</strong><p>${r.desc}</p><b>${r.sold?"已购入":`${r.price} CR`}</b>
      </button>${u}
    </div>`}).join(""),s.querySelectorAll("[data-shop]").forEach(r=>r.addEventListener("click",()=>ht.buyShopItem(Number(r.dataset.shop)))),s.querySelectorAll("[data-lock]").forEach(r=>r.addEventListener("click",a=>{a.stopPropagation(),ht.lockShopItem(Number(r.dataset.lock))})))}function Um(i){const{freeChoices:e,shop:t,credits:n,rerollCost:s,freePicked:r,freePickIndex:a}=i;q("#free-choices").innerHTML=e.map((c,u)=>{const f=r&&a===u;return`<button class="free-card${f?" picked":""}${r&&a!==u?" dimmed":""}" data-free="${u}" ${r&&!f?"disabled":""}>
      <span class="free-num">0${u+1}</span>
      <div class="free-icon">${c.icon}</div>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      ${f?'<b class="free-done">已领取 ✓</b>':'<b class="free-pick">领取 ↗</b>'}
    </button>`}).join(""),fn("[data-free]").forEach(c=>c.addEventListener("click",()=>ht.chooseFreeUpgrade(Number(c.dataset.free)))),zs(t,n,"#shop-panel","#shop-credits");const o=q("#reroll-button");o&&(q("#reroll-label").textContent=`刷新货架 · ${Math.floor(s)} CR`,o.disabled=n<s);const l=q("#deploy-button");l&&(l.disabled=!r)}function Nm(i){const e=i.victory;q("#end-eyebrow").textContent=e?"CORE DESTROYED / OPERATION COMPLETE":"SIGNAL LOST / OPERATION FAILED",q("#end-title").innerHTML=e?"黎明已至<span>.</span>":"连接中断<span>.</span>",q("#end-desc").textContent=e?"守望者核心已摧毁。第七区的天空，再次属于人类。":"你的作战信号已消失，但裂隙仍在扩张。",q("#end-score").textContent=pm(i.score),q("#end-wave").textContent=ti(i.wave),q("#end-kills").textContent=i.kills,q("#end-accuracy").textContent=`${Math.round(i.accuracy)}%`,q("#new-record").classList.toggle("active",i.newRecord),q("#end-career").textContent=i.career?`生涯累计 // 出击 ${i.career.runs} 次 · 击毁 ${i.career.kills} · 通关 ${i.career.wins} · 徽章 ${i.career.achievements.length}/${qs.length} · ${i.difficulty}难度`:"",Za()}function Za(){const i=Number(localStorage.getItem("nexus-best-score")||0),e=Number(localStorage.getItem("nexus-best-wave")||0);q("#best-score").textContent=ti(i,6).replace(/\B(?=(\d{3})+(?!\d))/g,","),q("#best-wave").textContent=`最高波次 ${ti(e)}`,Mm()}function Fm(i){q("#damage-vignette").classList.remove("active"),q("#damage-vignette").offsetWidth,q("#damage-vignette").classList.add("active"),Number.isFinite(i)&&(q("#damage-direction").style.transform=`translate(-50%, -50%) rotate(${i}rad)`,q("#damage-direction").classList.remove("active"),q("#damage-direction").offsetWidth,q("#damage-direction").classList.add("active"))}function tr(i){ja=i,er(),ht.start(i,pc,mc),q("#mobile-demo")?.classList.toggle("active",ht.demoMode),q("#mobile-aim")?.classList.toggle("active",ht.aiming)}ht=new fm(q("#game-canvas"),q("#radar"),{onState:wm,onHUD:Em,onAnnounce:bm,onToast:gc,onKill:Im,onHit:Dm,onUpgrades:Um,onShop:i=>{i.standalone||zs(i.shop,i.credits,"#shop-panel","#shop-credits"),zs(i.shop,i.credits,"#shop-options","#field-shop-credits")},onDamage:Fm,onBuild:Lm,onAchievement:Cm,onDamageNumber:Pm,onBreak:({name:i})=>bl("break","STAGGER / BREAK","失衡突破",`${i} 被击溃 · 连携窗口开启`),onPerfect:()=>bl("perfect","PERFECT DODGE","极限闪避","完美时机 · 时停反击窗口"),onGlitch:i=>Am(i),onSlowmo:i=>Rm(i),onStory:i=>Tm(i),onDemo:i=>{q("#board-badge").classList.toggle("demo",i),q("#board-demo-state").textContent=i?"自动演示中":"手动操作"}});window.game=ht;window.__game=ht;window.nexusGame=ht;q("#cheat-close").addEventListener("click",()=>ht.toggleCheatConsole(!1));q("#shop-close").addEventListener("click",()=>ht.closeShopStandalone());q("#reroll-button")&&q("#reroll-button").addEventListener("click",()=>ht.rerollShop());q("#deploy-button")&&q("#deploy-button").addEventListener("click",()=>ht.deploy());q("#cheat-console").addEventListener("click",i=>{i.target===q("#cheat-console")&&ht.toggleCheatConsole(!1)});function Om(){const i=document.getElementById("cheat-buttons");if(!i)return;const e=[{code:"lockon",key:"lock",label:"锁头",desc:"LOCKON"},{code:"autofire",key:"auto",label:"自动射击",desc:"AUTOFIRE"},{code:"godmode",key:"god",label:"无敌",desc:"GODMODE"},{code:"infinity",key:"ammo",label:"无限弹药",desc:"INFINITY"},{code:"xray",key:"wall",label:"透视",desc:"XRAY"},{code:"timeslip",key:"slow",label:"子弹时间",desc:"TIMESLIP"}],t=[{code:"purge",label:"清场",desc:"PURGE"},{code:"arsenal",label:"全武器",desc:"ARSENAL"},{code:"recharge",label:"回满",desc:"RECHARGE"},{code:"overbound",label:"协议全开",desc:"OVERBOUND"},{code:"standdown",label:"解除全部",desc:"STANDDOWN"}];i.innerHTML='<div class="cheat-btn-group"><span class="cheat-btn-label">切换类 // TOGGLE</span><div class="cheat-btn-grid">'+e.map(n=>`<button class="cheat-btn" data-cheat="${n.code}" data-cheat-key="${n.key}"><b>${n.label}</b><small>${n.desc}</small></button>`).join("")+'</div></div><div class="cheat-btn-group"><span class="cheat-btn-label">指令类 // ACTION</span><div class="cheat-btn-grid">'+t.map(n=>`<button class="cheat-btn action" data-cheat="${n.code}"><b>${n.label}</b><small>${n.desc}</small></button>`).join("")+"</div></div>",i.querySelectorAll("[data-cheat]").forEach(n=>{n.addEventListener("click",()=>ht.applyCheat(n.dataset.cheat))})}Om();q("#start-button").addEventListener("click",()=>tr(fc));q("#training-button").addEventListener("click",()=>tr("training"));q("#resume-button").addEventListener("click",()=>ht.resume());q("#pause-button").addEventListener("click",()=>ht.pause());q("#restart-button").addEventListener("click",()=>tr(ja));q("#retry-button").addEventListener("click",()=>tr(ja));q("#quit-button").addEventListener("click",()=>ht.quit());q("#end-quit-button").addEventListener("click",()=>ht.quit());q("#audio-toggle").addEventListener("click",()=>{const i=ht.audio.toggle();q("#audio-toggle").classList.toggle("muted",!i),localStorage.setItem("nexus-audio",i?"1":"0")});localStorage.getItem("nexus-audio")==="0"&&(ht.audio.enabled=!1,q("#audio-toggle").classList.add("muted"));document.addEventListener("keydown",i=>{i.code==="Escape"&&q("#modal-backdrop").classList.contains("active")&&er(),q("#upgrade-screen").classList.contains("active")&&(["Digit1","Digit2","Digit3"].includes(i.code)?ht.chooseFreeUpgrade(Number(i.code.slice(-1))-1):i.code==="Enter"&&ht.deploy())});Za();

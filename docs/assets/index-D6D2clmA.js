(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ia="180",fc=0,no=1,pc=2,xl=1,Ml=2,_n=3,Dn=0,kt=1,Ut=2,Ln=0,Mi=1,tn=2,io=3,so=4,mc=5,Kn=100,gc=101,_c=102,vc=103,xc=104,Mc=200,yc=201,Sc=202,Ec=203,Hr=204,Vr=205,wc=206,Tc=207,bc=208,Ac=209,Rc=210,Cc=211,Pc=212,Lc=213,Ic=214,Gr=0,Wr=1,Xr=2,Si=3,qr=4,Yr=5,$r=6,Kr=7,yl=0,Dc=1,Uc=2,In=0,Nc=1,Fc=2,Oc=3,Sl=4,Bc=5,kc=6,zc=7,El=300,Ei=301,wi=302,Jr=303,Zr=304,qs=306,Wi=1e3,Zn=1001,jr=1002,sn=1003,Hc=1004,as=1005,ln=1006,nr=1007,jn=1008,hn=1009,wl=1010,Tl=1011,Xi=1012,Da=1013,ei=1014,vn=1015,Ji=1016,Ua=1017,Na=1018,qi=1020,bl=35902,Al=35899,Rl=1021,Cl=1022,nn=1023,Yi=1026,$i=1027,Pl=1028,Fa=1029,Ll=1030,Oa=1031,Ba=1033,Ds=33776,Us=33777,Ns=33778,Fs=33779,Qr=35840,ea=35841,ta=35842,na=35843,ia=36196,sa=37492,ra=37496,aa=37808,oa=37809,la=37810,ca=37811,ha=37812,da=37813,ua=37814,fa=37815,pa=37816,ma=37817,ga=37818,_a=37819,va=37820,xa=37821,Ma=36492,ya=36494,Sa=36495,Ea=36283,wa=36284,Ta=36285,ba=36286,Vc=3200,Gc=3201,Il=0,Wc=1,Pn="",At="srgb",Ti="srgb-linear",zs="linear",rt="srgb",si=7680,ro=519,Xc=512,qc=513,Yc=514,Dl=515,$c=516,Kc=517,Jc=518,Zc=519,ao=35044,oo="300 es",cn=2e3,Hs=2001;class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ir=Math.PI/180,Aa=180/Math.PI;function Zi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function jc(i,e){return(i%e+e)%e}function Os(i,e,t){return(1-t)*i+t*e}function Li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ul={clamp:Ye,lerp:Os};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ri{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const h=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-o;const p=l*h+c*d+u*g+f*_,T=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const R=Math.sqrt(w),C=Math.atan2(R,p*T);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}const x=o*T;if(l=l*m+h*x,c=c*m+d*x,u=u*m+g*x,f=f*m+_*x,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sr.copy(this).projectOnVector(e),this.sub(sr)}reflect(e){return this.sub(sr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sr=new A,lo=new Ri;class He{constructor(e,t,n,s,r,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],T=s[1],w=s[4],x=s[7],R=s[2],C=s[5],P=s[8];return r[0]=a*_+o*T+l*R,r[3]=a*m+o*w+l*C,r[6]=a*p+o*x+l*P,r[1]=c*_+u*T+f*R,r[4]=c*m+u*w+f*C,r[7]=c*p+u*x+f*P,r[2]=h*_+d*T+g*R,r[5]=h*m+d*w+g*C,r[8]=h*p+d*x+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=t*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(rr.makeScale(e,t)),this}rotate(e){return this.premultiply(rr.makeRotation(-e)),this}translate(e,t){return this.premultiply(rr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rr=new He;function Nl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qc(){const i=Vs("canvas");return i.style.display="block",i}const co={};function Ki(i){i in co||(co[i]=!0,console.warn(i))}function eh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const ho=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uo=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function th(){const i={enabled:!0,workingColorSpace:Ti,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(s.r=xn(s.r),s.g=xn(s.g),s.b=xn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ki("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ki("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ti]:{primaries:e,whitePoint:n,transfer:zs,toXYZ:ho,fromXYZ:uo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:ho,fromXYZ:uo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),i}const et=th();function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class nh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ri===void 0&&(ri=Vs("canvas")),ri.width=e.width,ri.height=e.height;const s=ri.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ri}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ih=0;class ka{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ar(s[a].image)):r.push(ar(s[a]))}else r=ar(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ar(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sh=0;const or=new A;class Nt extends Ai{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=Zn,s=Zn,r=ln,a=jn,o=nn,l=hn,c=Nt.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Zi(),this.name="",this.source=new ka(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(or).x}get height(){return this.source.getSize(or).y}get depth(){return this.source.getSize(or).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==El)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wi:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wi:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=El;Nt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,x=(d+1)/2,R=(p+1)/2,C=(u+h)/4,P=(f+_)/4,L=(g+m)/4;return w>x&&w>R?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=C/n,r=P/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=C/s,r=L/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=P/r,s=L/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(h-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rh extends Ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Nt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ka(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends rh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fl extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ah extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jt):Jt.fromBufferAttribute(r,a),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),os.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(e.matrixWorld),this.union(os)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),ls.subVectors(this.max,Ii),ai.subVectors(e.a,Ii),oi.subVectors(e.b,Ii),li.subVectors(e.c,Ii),Sn.subVectors(oi,ai),En.subVectors(li,oi),zn.subVectors(ai,li);let t=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-zn.z,zn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,zn.z,0,-zn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-zn.y,zn.x,0];return!lr(t,ai,oi,li,ls)||(t=[1,0,0,0,1,0,0,0,1],!lr(t,ai,oi,li,ls))?!1:(cs.crossVectors(Sn,En),t=[cs.x,cs.y,cs.z],lr(t,ai,oi,li,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const un=[new A,new A,new A,new A,new A,new A,new A,new A],Jt=new A,os=new ji,ai=new A,oi=new A,li=new A,Sn=new A,En=new A,zn=new A,Ii=new A,ls=new A,cs=new A,Hn=new A;function lr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hn.fromArray(i,r);const o=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),l=e.dot(Hn),c=t.dot(Hn),u=n.dot(Hn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const oh=new ji,Di=new A,cr=new A;class Qi{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):oh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Di.subVectors(e,this.center);const t=Di.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Di,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Di.copy(e.center).add(cr)),this.expandByPoint(Di.copy(e.center).sub(cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fn=new A,hr=new A,hs=new A,wn=new A,dr=new A,ds=new A,ur=new A;class Ys{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){hr.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(hr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(hs),o=wn.dot(this.direction),l=-wn.dot(hs),c=wn.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(hr).addScaledVector(hs,h),d}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),s=fn.dot(fn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,s,r){dr.subVectors(t,e),ds.subVectors(n,e),ur.crossVectors(dr,ds);let a=this.direction.dot(ur),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,e);const l=o*this.direction.dot(ds.crossVectors(wn,ds));if(l<0)return null;const c=o*this.direction.dot(dr.cross(wn));if(c<0||l+c>a)return null;const u=-o*wn.dot(ur);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,s,r,a,o,l,c,u,f,h,d,g,_,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,h,d,g,_,m)}set(e,t,n,s,r,a,o,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ci.setFromMatrixColumn(e,0).length(),r=1/ci.setFromMatrixColumn(e,1).length(),a=1/ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lh,e,ch)}lookAt(e,t,n){const s=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Tn.crossVectors(n,Vt),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Tn.crossVectors(n,Vt)),Tn.normalize(),us.crossVectors(Vt,Tn),s[0]=Tn.x,s[4]=us.x,s[8]=Vt.x,s[1]=Tn.y,s[5]=us.y,s[9]=Vt.y,s[2]=Tn.z,s[6]=us.z,s[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],w=n[7],x=n[11],R=n[15],C=s[0],P=s[4],L=s[8],S=s[12],E=s[1],I=s[5],F=s[9],H=s[13],$=s[2],X=s[6],Y=s[10],te=s[14],V=s[3],fe=s[7],ve=s[11],Se=s[15];return r[0]=a*C+o*E+l*$+c*V,r[4]=a*P+o*I+l*X+c*fe,r[8]=a*L+o*F+l*Y+c*ve,r[12]=a*S+o*H+l*te+c*Se,r[1]=u*C+f*E+h*$+d*V,r[5]=u*P+f*I+h*X+d*fe,r[9]=u*L+f*F+h*Y+d*ve,r[13]=u*S+f*H+h*te+d*Se,r[2]=g*C+_*E+m*$+p*V,r[6]=g*P+_*I+m*X+p*fe,r[10]=g*L+_*F+m*Y+p*ve,r[14]=g*S+_*H+m*te+p*Se,r[3]=T*C+w*E+x*$+R*V,r[7]=T*P+w*I+x*X+R*fe,r[11]=T*L+w*F+x*Y+R*ve,r[15]=T*S+w*H+x*te+R*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*f-s*c*f-r*o*h+n*c*h+s*o*d-n*l*d)+_*(+t*l*d-t*c*h+r*a*h-s*a*d+s*c*u-r*l*u)+m*(+t*c*f-t*o*d-r*a*f+n*a*d+r*o*u-n*c*u)+p*(-s*o*u-t*l*f+t*o*h+s*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=f*m*c-_*h*c+_*l*d-o*m*d-f*l*p+o*h*p,w=g*h*c-u*m*c-g*l*d+a*m*d+u*l*p-a*h*p,x=u*_*c-g*f*c+g*o*d-a*_*d-u*o*p+a*f*p,R=g*f*l-u*_*l-g*o*h+a*_*h+u*o*m-a*f*m,C=t*T+n*w+s*x+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=T*P,e[1]=(_*h*r-f*m*r-_*s*d+n*m*d+f*s*p-n*h*p)*P,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*P,e[3]=(f*l*r-o*h*r-f*s*c+n*h*c+o*s*d-n*l*d)*P,e[4]=w*P,e[5]=(u*m*r-g*h*r+g*s*d-t*m*d-u*s*p+t*h*p)*P,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*P,e[7]=(a*h*r-u*l*r+u*s*c-t*h*c-a*s*d+t*l*d)*P,e[8]=x*P,e[9]=(g*f*r-u*_*r-g*n*d+t*_*d+u*n*p-t*f*p)*P,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*P,e[11]=(u*o*r-a*f*r-u*n*c+t*f*c+a*n*d-t*o*d)*P,e[12]=R*P,e[13]=(u*_*s-g*f*s+g*n*h-t*_*h-u*n*m+t*f*m)*P,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*P,e[15]=(a*f*s-u*o*s+u*n*l-t*f*l-a*n*h+t*o*h)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,_=a*u,m=a*f,p=o*f,T=l*c,w=l*u,x=l*f,R=n.x,C=n.y,P=n.z;return s[0]=(1-(_+p))*R,s[1]=(d+x)*R,s[2]=(g-w)*R,s[3]=0,s[4]=(d-x)*C,s[5]=(1-(h+p))*C,s[6]=(m+T)*C,s[7]=0,s[8]=(g+w)*P,s[9]=(m-T)*P,s[10]=(1-(h+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ci.set(s[0],s[1],s[2]).length();const a=ci.set(s[4],s[5],s[6]).length(),o=ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zt.copy(this);const c=1/r,u=1/a,f=1/o;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=f,Zt.elements[9]*=f,Zt.elements[10]*=f,t.setFromRotationMatrix(Zt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=cn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===cn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Hs)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=cn,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===cn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Hs)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ci=new A,Zt=new ht,lh=new A(0,0,0),ch=new A(1,1,1),Tn=new A,us=new A,Vt=new A,fo=new ht,po=new Ri;class rn{constructor(e=0,t=0,n=0,s=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return po.setFromEuler(this),this.setFromQuaternion(po,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class za{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hh=0;const mo=new A,hi=new Ri,pn=new ht,fs=new A,Ui=new A,dh=new A,uh=new Ri,go=new A(1,0,0),_o=new A(0,1,0),vo=new A(0,0,1),xo={type:"added"},fh={type:"removed"},di={type:"childadded",child:null},fr={type:"childremoved",child:null};class St extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new A,t=new rn,n=new Ri,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new He}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(go,e)}rotateY(e){return this.rotateOnAxis(_o,e)}rotateZ(e){return this.rotateOnAxis(vo,e)}translateOnAxis(e,t){return mo.copy(e).applyQuaternion(this.quaternion),this.position.add(mo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(go,e)}translateY(e){return this.translateOnAxis(_o,e)}translateZ(e){return this.translateOnAxis(vo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fs.copy(e):fs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Ui,fs,this.up):pn.lookAt(fs,Ui,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(pn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xo),di.child=e,this.dispatchEvent(di),di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fh),fr.child=e,this.dispatchEvent(fr),fr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xo),di.child=e,this.dispatchEvent(di),di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,e,dh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,uh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}St.DEFAULT_UP=new A(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new A,mn=new A,pr=new A,gn=new A,ui=new A,fi=new A,Mo=new A,mr=new A,gr=new A,_r=new A,vr=new lt,xr=new lt,Mr=new lt;class en{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jt.subVectors(e,t),s.cross(jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jt.subVectors(s,t),mn.subVectors(n,t),pr.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(mn),l=jt.dot(pr),c=mn.dot(mn),u=mn.dot(pr),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(a,gn.y),l.addScaledVector(o,gn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return vr.setScalar(0),xr.setScalar(0),Mr.setScalar(0),vr.fromBufferAttribute(e,t),xr.fromBufferAttribute(e,n),Mr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(vr,r.x),a.addScaledVector(xr,r.y),a.addScaledVector(Mr,r.z),a}static isFrontFacing(e,t,n,s){return jt.subVectors(n,t),mn.subVectors(e,t),jt.cross(mn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),jt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return en.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ui.subVectors(s,n),fi.subVectors(r,n),mr.subVectors(e,n);const l=ui.dot(mr),c=fi.dot(mr);if(l<=0&&c<=0)return t.copy(n);gr.subVectors(e,s);const u=ui.dot(gr),f=fi.dot(gr);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ui,a);_r.subVectors(e,r);const d=ui.dot(_r),g=fi.dot(_r);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(fi,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Mo.subVectors(r,s),o=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(Mo,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(ui,a).addScaledVector(fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},ps={h:0,s:0,l:0};function yr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=jc(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=yr(a,r,e+1/3),this.g=yr(a,r,e),this.b=yr(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=Ol[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return et.workingToColorSpace(Ct.copy(this),e),Math.round(Ye(Ct.r*255,0,255))*65536+Math.round(Ye(Ct.g*255,0,255))*256+Math.round(Ye(Ct.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Ct.copy(this),t);const n=Ct.r,s=Ct.g,r=Ct.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=At){et.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,s=Ct.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(ps);const n=Os(bn.h,ps.h,t),s=Os(bn.s,ps.s,t),r=Os(bn.l,ps.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new qe;qe.NAMES=Ol;let ph=0;class ni extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Mi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hr,this.blendDst=Vr,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ro,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hr&&(n.blendSrc=this.blendSrc),this.blendDst!==Vr&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Si&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ro&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ot extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new A,ms=new Le;let mh=0;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ao,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ms.fromBufferAttribute(this,t),ms.applyMatrix3(e),this.setXY(t,ms.x,ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ao&&(e.usage=this.usage),e}}class Bl extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kl extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gh=0;const Kt=new ht,Sr=new St,pi=new A,Gt=new ji,Ni=new ji,Tt=new A;class vt extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nl(e)?kl:Bl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Sr.lookAt(e),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ni.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Gt.min,Ni.min),Gt.expandByPoint(Tt),Tt.addVectors(Gt.max,Ni.max),Gt.expandByPoint(Tt)):(Gt.expandByPoint(Ni.min),Gt.expandByPoint(Ni.max))}Gt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Tt.fromBufferAttribute(o,c),l&&(pi.fromBufferAttribute(e,c),Tt.add(pi)),s=Math.max(s,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new A,l[L]=new A;const c=new A,u=new A,f=new A,h=new Le,d=new Le,g=new Le,_=new A,m=new A;function p(L,S,E){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,E),h.fromBufferAttribute(r,L),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,E),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),o[L].add(_),o[S].add(_),o[E].add(_),l[L].add(m),l[S].add(m),l[E].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,S=T.length;L<S;++L){const E=T[L],I=E.start,F=E.count;for(let H=I,$=I+F;H<$;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const w=new A,x=new A,R=new A,C=new A;function P(L){R.fromBufferAttribute(s,L),C.copy(R);const S=o[L];w.copy(S),w.sub(R.multiplyScalar(R.dot(S))).normalize(),x.crossVectors(C,S);const I=x.dot(l[L])<0?-1:1;a.setXYZW(L,w.x,w.y,w.z,I)}for(let L=0,S=T.length;L<S;++L){const E=T[L],I=E.start,F=E.count;for(let H=I,$=I+F;H<$;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new A,r=new A,a=new A,o=new A,l=new A,c=new A,u=new A,f=new A;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new qt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yo=new ht,Vn=new Ys,gs=new Qi,So=new A,_s=new A,vs=new A,xs=new A,Er=new A,Ms=new A,Eo=new A,ys=new A;class se extends St{constructor(e=new vt,t=new ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ms.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Er.fromBufferAttribute(f,e),a?Ms.addScaledVector(Er,u):Ms.addScaledVector(Er.sub(t),u))}t.add(Ms)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(r),Vn.copy(e.ray).recast(e.near),!(gs.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(gs,So)===null||Vn.origin.distanceToSquared(So)>(e.far-e.near)**2))&&(yo.copy(r).invert(),Vn.copy(e.ray).applyMatrix4(yo),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,R=w;x<R;x+=3){const C=o.getX(x),P=o.getX(x+1),L=o.getX(x+2);s=Ss(this,p,e,n,c,u,f,C,P,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=o.getX(m),w=o.getX(m+1),x=o.getX(m+2);s=Ss(this,a,e,n,c,u,f,T,w,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,R=w;x<R;x+=3){const C=x,P=x+1,L=x+2;s=Ss(this,p,e,n,c,u,f,C,P,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,w=m+1,x=m+2;s=Ss(this,a,e,n,c,u,f,T,w,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function _h(i,e,t,n,s,r,a,o){let l;if(e.side===kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Dn,o),l===null)return null;ys.copy(o),ys.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ys);return c<t.near||c>t.far?null:{distance:c,point:ys.clone(),object:i}}function Ss(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,_s),i.getVertexPosition(l,vs),i.getVertexPosition(c,xs);const u=_h(i,e,t,n,_s,vs,xs,Eo);if(u){const f=new A;en.getBarycoord(Eo,_s,vs,xs,f),s&&(u.uv=en.getInterpolatedAttribute(s,o,l,c,f,new Le)),r&&(u.uv1=en.getInterpolatedAttribute(r,o,l,c,f,new Le)),a&&(u.normal=en.getInterpolatedAttribute(a,o,l,c,f,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new A,materialIndex:0};en.getNormal(_s,vs,xs,h.normal),u.face=h,u.barycoord=f}return u}class On extends vt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(f,2));function g(_,m,p,T,w,x,R,C,P,L,S){const E=x/P,I=R/L,F=x/2,H=R/2,$=C/2,X=P+1,Y=L+1;let te=0,V=0;const fe=new A;for(let ve=0;ve<Y;ve++){const Se=ve*I-H;for(let Ve=0;Ve<X;Ve++){const tt=Ve*E-F;fe[_]=tt*T,fe[m]=Se*w,fe[p]=$,c.push(fe.x,fe.y,fe.z),fe[_]=0,fe[m]=0,fe[p]=C>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(Ve/P),f.push(1-ve/L),te+=1}}for(let ve=0;ve<L;ve++)for(let Se=0;Se<P;Se++){const Ve=h+Se+X*ve,tt=h+Se+X*(ve+1),Ze=h+(Se+1)+X*(ve+1),je=h+(Se+1)+X*ve;l.push(Ve,tt,je),l.push(tt,Ze,je),V+=6}o.addGroup(d,V,S),d+=V,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function It(i){const e={};for(let t=0;t<i.length;t++){const n=bi(i[t]);for(const s in n)e[s]=n[s]}return e}function vh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const xh={clone:bi,merge:It};var Mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mh,this.fragmentShader=yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bi(e.uniforms),this.uniformsGroups=vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hl extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const An=new A,wo=new Le,To=new Le;class Xt extends Hl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(An.x,An.y).multiplyScalar(-e/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-e/An.z)}getViewSize(e,t){return this.getViewBounds(e,wo,To),t.subVectors(To,wo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mi=-90,gi=1;class Sh extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xt(mi,gi,e,t);s.layers=this.layers,this.add(s);const r=new Xt(mi,gi,e,t);r.layers=this.layers,this.add(r);const a=new Xt(mi,gi,e,t);a.layers=this.layers,this.add(a);const o=new Xt(mi,gi,e,t);o.layers=this.layers,this.add(o);const l=new Xt(mi,gi,e,t);l.layers=this.layers,this.add(l);const c=new Xt(mi,gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vl extends Nt{constructor(e=[],t=Ei,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Eh extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Vl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new On(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Ln});r.uniforms.tEquirect.value=t;const a=new se(s,r),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=ln),new Sh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class ft extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wh={type:"move"};class wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=n}clone(){return new $s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Th extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Tr=new A,bh=new A,Ah=new He;class Yn{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Tr.subVectors(n,t).cross(bh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Tr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ah.getNormalMatrix(e),s=this.coplanarPoint(Tr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new Qi,Rh=new Le(.5,.5),Es=new A;class Ha{constructor(e=new Yn,t=new Yn,n=new Yn,s=new Yn,r=new Yn,a=new Yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],T=r[12],w=r[13],x=r[14],R=r[15];if(s[0].setComponents(c-a,d-u,p-g,R-T).normalize(),s[1].setComponents(c+a,d+u,p+g,R+T).normalize(),s[2].setComponents(c+o,d+f,p+_,R+w).normalize(),s[3].setComponents(c-o,d-f,p-_,R-w).normalize(),n)s[4].setComponents(l,h,m,x).normalize(),s[5].setComponents(c-l,d-h,p-m,R-x).normalize();else if(s[4].setComponents(c-l,d-h,p-m,R-x).normalize(),t===cn)s[5].setComponents(c+l,d+h,p+m,R+x).normalize();else if(t===Hs)s[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){Gn.center.set(0,0,0);const t=Rh.distanceTo(e.center);return Gn.radius=.7071067811865476+t,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Es.x=s.normal.x>0?e.max.x:e.min.x,Es.y=s.normal.y>0?e.max.y:e.min.y,Es.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ki extends ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gs=new A,Ws=new A,bo=new ht,Fi=new Ys,ws=new Qi,br=new A,Ao=new A;class Bs extends St{constructor(e=new vt,t=new ki){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Gs.fromBufferAttribute(t,s-1),Ws.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Gs.distanceTo(Ws);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(s),ws.radius+=r,e.ray.intersectsSphere(ws)===!1)return;bo.copy(s).invert(),Fi.copy(e.ray).applyMatrix4(bo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),T=u.getX(_+1),w=Ts(this,e,Fi,l,p,T,_);w&&t.push(w)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Ts(this,e,Fi,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=Ts(this,e,Fi,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Ts(this,e,Fi,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ts(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Gs.fromBufferAttribute(o,s),Ws.fromBufferAttribute(o,r),t.distanceSqToSegment(Gs,Ws,br,Ao)>n)return;br.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(br);if(!(c<e.near||c>e.far))return{distance:c,point:Ao.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Ro=new A,Co=new A;class Ch extends Bs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ro.fromBufferAttribute(t,s),Co.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ro.distanceTo(Co);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gl extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Po=new ht,Ra=new Ys,bs=new Qi,As=new A;class Ph extends St{constructor(e=new vt,t=new Gl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(s),bs.radius+=r,e.ray.intersectsSphere(bs)===!1)return;Po.copy(s).invert(),Ra.copy(e.ray).applyMatrix4(Po);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);As.fromBufferAttribute(f,m),Lo(As,m,l,s,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=h,_=d;g<_;g++)As.fromBufferAttribute(f,g),Lo(As,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Lo(i,e,t,n,s,r,a){const o=Ra.distanceSqToPoint(i);if(o<t){const l=new A;Ra.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ks extends Nt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wl extends Nt{constructor(e,t,n=ei,s,r,a,o=sn,l=sn,c,u=Yi,f=1){if(u!==Yi&&u!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ka(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xl extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class es extends vt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const _=[],m=n/2;let p=0;T(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new it(f,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(d,2));function T(){const x=new A,R=new A;let C=0;const P=(t-e)/n;for(let L=0;L<=r;L++){const S=[],E=L/r,I=E*(t-e)+e;for(let F=0;F<=s;F++){const H=F/s,$=H*l+o,X=Math.sin($),Y=Math.cos($);R.x=I*X,R.y=-E*n+m,R.z=I*Y,f.push(R.x,R.y,R.z),x.set(X,P,Y).normalize(),h.push(x.x,x.y,x.z),d.push(H,1-E),S.push(g++)}_.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const E=_[S][L],I=_[S+1][L],F=_[S+1][L+1],H=_[S][L+1];(e>0||S!==0)&&(u.push(E,I,H),C+=3),(t>0||S!==r-1)&&(u.push(I,F,H),C+=3)}c.addGroup(p,C,0),p+=C}function w(x){const R=g,C=new Le,P=new A;let L=0;const S=x===!0?e:t,E=x===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*E,0),h.push(0,E,0),d.push(.5,.5),g++;const I=g;for(let F=0;F<=s;F++){const $=F/s*l+o,X=Math.cos($),Y=Math.sin($);P.x=S*Y,P.y=m*E,P.z=S*X,f.push(P.x,P.y,P.z),h.push(0,E,0),C.x=X*.5+.5,C.y=Y*.5*E+.5,d.push(C.x,C.y),g++}for(let F=0;F<s;F++){const H=R+F,$=I+F;x===!0?u.push($,$+1,H):u.push($+1,$,H),L+=3}c.addGroup(p,L,x===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ts extends es{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ts(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Js extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const w=new A,x=new A,R=new A;for(let C=0;C<t.length;C+=3)d(t[C+0],w),d(t[C+1],x),d(t[C+2],R),l(w,x,R,T)}function l(T,w,x,R){const C=R+1,P=[];for(let L=0;L<=C;L++){P[L]=[];const S=T.clone().lerp(x,L/C),E=w.clone().lerp(x,L/C),I=C-L;for(let F=0;F<=I;F++)F===0&&L===C?P[L][F]=S:P[L][F]=S.clone().lerp(E,F/I)}for(let L=0;L<C;L++)for(let S=0;S<2*(C-L)-1;S++){const E=Math.floor(S/2);S%2===0?(h(P[L][E+1]),h(P[L+1][E]),h(P[L][E])):(h(P[L][E+1]),h(P[L+1][E+1]),h(P[L+1][E]))}}function c(T){const w=new A;for(let x=0;x<r.length;x+=3)w.x=r[x+0],w.y=r[x+1],w.z=r[x+2],w.normalize().multiplyScalar(T),r[x+0]=w.x,r[x+1]=w.y,r[x+2]=w.z}function u(){const T=new A;for(let w=0;w<r.length;w+=3){T.x=r[w+0],T.y=r[w+1],T.z=r[w+2];const x=m(T)/2/Math.PI+.5,R=p(T)/Math.PI+.5;a.push(x,1-R)}g(),f()}function f(){for(let T=0;T<a.length;T+=6){const w=a[T+0],x=a[T+2],R=a[T+4],C=Math.max(w,x,R),P=Math.min(w,x,R);C>.9&&P<.1&&(w<.2&&(a[T+0]+=1),x<.2&&(a[T+2]+=1),R<.2&&(a[T+4]+=1))}}function h(T){r.push(T.x,T.y,T.z)}function d(T,w){const x=T*3;w.x=e[x+0],w.y=e[x+1],w.z=e[x+2]}function g(){const T=new A,w=new A,x=new A,R=new A,C=new Le,P=new Le,L=new Le;for(let S=0,E=0;S<r.length;S+=9,E+=6){T.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),C.set(a[E+0],a[E+1]),P.set(a[E+2],a[E+3]),L.set(a[E+4],a[E+5]),R.copy(T).add(w).add(x).divideScalar(3);const I=m(R);_(C,E+0,T,I),_(P,E+2,w,I),_(L,E+4,x,I)}}function _(T,w,x,R){R<0&&T.x===1&&(a[w]=T.x-1),x.x===0&&x.z===0&&(a[w]=R/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.vertices,e.indices,e.radius,e.details)}}class yn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Le:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new A,s=[],r=[],a=[],o=new A,l=new ht;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ye(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ye(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ql extends yn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Le){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Lh extends ql{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Va(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Rs=new A,Ar=new Va,Rr=new Va,Cr=new Va;class Yl extends yn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Rs.subVectors(s[0],s[1]).add(s[0]),c=Rs);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Rs.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Rs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ar.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,_,m),Rr.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,_,m),Cr.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Ar.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Rr.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Cr.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Ar.calc(l),Rr.calc(l),Cr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Io(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Ih(i,e){const t=1-i;return t*t*e}function Dh(i,e){return 2*(1-i)*i*e}function Uh(i,e){return i*i*e}function zi(i,e,t,n){return Ih(i,e)+Dh(i,t)+Uh(i,n)}function Nh(i,e){const t=1-i;return t*t*t*e}function Fh(i,e){const t=1-i;return 3*t*t*i*e}function Oh(i,e){return 3*(1-i)*i*i*e}function Bh(i,e){return i*i*i*e}function Hi(i,e,t,n,s){return Nh(i,e)+Fh(i,t)+Oh(i,n)+Bh(i,s)}class kh extends yn{constructor(e=new Le,t=new Le,n=new Le,s=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Le){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hi(e,s.x,r.x,a.x,o.x),Hi(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zh extends yn{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hi(e,s.x,r.x,a.x,o.x),Hi(e,s.y,r.y,a.y,o.y),Hi(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hh extends yn{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vh extends yn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gh extends yn{constructor(e=new Le,t=new Le,n=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Le){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(zi(e,s.x,r.x,a.x),zi(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $l extends yn{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(zi(e,s.x,r.x,a.x),zi(e,s.y,r.y,a.y),zi(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wh extends yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Io(o,l.x,c.x,u.x,f.x),Io(o,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Le().fromArray(s))}return this}}var Xh=Object.freeze({__proto__:null,ArcCurve:Lh,CatmullRomCurve3:Yl,CubicBezierCurve:kh,CubicBezierCurve3:zh,EllipseCurve:ql,LineCurve:Hh,LineCurve3:Vh,QuadraticBezierCurve:Gh,QuadraticBezierCurve3:$l,SplineCurve:Wh});class Ga extends Js{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ga(e.radius,e.detail)}}class Nn extends Js{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nn(e.radius,e.detail)}}class Mn extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*h-a;for(let w=0;w<c;w++){const x=w*f-r;g.push(x,-T,0),_.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const w=T+c*p,x=T+c*(p+1),R=T+1+c*(p+1),C=T+1+c*p;d.push(w,x,C),d.push(x,R,C)}this.setIndex(d),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wa extends vt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let f=e;const h=(t-e)/s,d=new A,g=new Le;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const T=p+m,w=T,x=T+n+1,R=T+n+2,C=T+1;o.push(w,x,C),o.push(x,R,C)}}this.setIndex(o),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ns extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new A,h=new A,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const T=[],w=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const C=R/t;f.x=-e*Math.cos(s+C*r)*Math.sin(a+w*o),f.y=e*Math.cos(a+w*o),f.z=e*Math.sin(s+C*r)*Math.sin(a+w*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(C+x,1-w),T.push(c++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const w=u[p][T+1],x=u[p][T],R=u[p+1][T],C=u[p+1][T+1];(p!==0||a>0)&&d.push(w,x,C),(p!==n-1||l<Math.PI)&&d.push(x,R,C)}this.setIndex(d),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class is extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new A,f=new A,h=new A;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,T=(s+1)*d+g;a.push(_,m,T),a.push(m,p,T)}this.setIndex(a),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Xa extends vt{constructor(e=new $l(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new A,l=new A,c=new Le;let u=new A;const f=[],h=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new it(f,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(d,2));function _(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),T(),p()}function m(w){u=e.getPointAt(w/t,u);const x=a.normals[w],R=a.binormals[w];for(let C=0;C<=s;C++){const P=C/s*Math.PI*2,L=Math.sin(P),S=-Math.cos(P);l.x=S*x.x+L*R.x,l.y=S*x.y+L*R.y,l.z=S*x.z+L*R.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=t;w++)for(let x=1;x<=s;x++){const R=(s+1)*(w-1)+(x-1),C=(s+1)*w+(x-1),P=(s+1)*w+x,L=(s+1)*(w-1)+x;g.push(R,C,L),g.push(C,P,L)}}function T(){for(let w=0;w<=t;w++)for(let x=0;x<=s;x++)c.x=w/t,c.y=x/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Xa(new Xh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Wt extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qh extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yh extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qa extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $h extends qa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Pr=new ht,Do=new A,Uo=new A;class Kl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ha,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Do.setFromMatrixPosition(e.matrixWorld),t.position.copy(Do),Uo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uo),t.updateMatrixWorld(),Pr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const No=new ht,Oi=new A,Lr=new A;class Kh extends Kl{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Oi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Oi),Lr.copy(n.position),Lr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Lr),n.updateMatrixWorld(),s.makeTranslation(-Oi.x,-Oi.y,-Oi.z),No.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No,n.coordinateSystem,n.reversedDepth)}}class Vi extends qa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Jl extends Hl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Jh extends Kl{constructor(){super(new Jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zh extends qa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Jh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jh extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Qh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Fo=new ht;class ed{constructor(e,t,n=0,s=1/0){this.ray=new Ys(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new za,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fo),this}intersectObject(e,t=!0,n=[]){return Ca(e,this,n,t),n.sort(Oo),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ca(e[s],this,n,t);return n.sort(Oo),n}}function Oo(i,e){return i.distance-e.distance}function Ca(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ca(r[a],e,t,!0)}}class td extends Ch{constructor(e=10,t=10,n=4473924,s=8947848){n=new qe(n),s=new qe(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,d=0,g=-o;h<=t;h++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=h===r?n:s;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new vt;u.setAttribute("position",new it(l,3)),u.setAttribute("color",new it(c,3));const f=new ki({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Bo(i,e,t,n){const s=nd(n);switch(t){case Rl:return i*e;case Pl:return i*e/s.components*s.byteLength;case Fa:return i*e/s.components*s.byteLength;case Ll:return i*e*2/s.components*s.byteLength;case Oa:return i*e*2/s.components*s.byteLength;case Cl:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case Ba:return i*e*4/s.components*s.byteLength;case Ds:case Us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ns:case Fs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ea:case na:return Math.max(i,16)*Math.max(e,8)/4;case Qr:case ta:return Math.max(i,8)*Math.max(e,8)/2;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case la:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ha:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ua:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ma:case ya:case Sa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ea:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ta:case ba:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nd(i){switch(i){case hn:case wl:return{byteLength:1,components:1};case Xi:case Tl:case Ji:return{byteLength:2,components:1};case Ua:case Na:return{byteLength:2,components:4};case ei:case Da:case vn:return{byteLength:4,components:1};case bl:case Al:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ia);function Zl(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function id(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rd=`#ifdef USE_ALPHAHASH
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
#endif`,ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hd=`#ifdef USE_AOMAP
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
#endif`,dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ud=`#ifdef USE_BATCHING
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
#endif`,fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_d=`#ifdef USE_IRIDESCENCE
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
#endif`,vd=`#ifdef USE_BUMPMAP
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
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ad=`#define PI 3.141592653589793
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
} // validated`,Rd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cd=`vec3 transformedNormal = objectNormal;
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
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xd=`#ifdef USE_GRADIENTMAP
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
}`,qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
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
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tu=`PhysicalMaterial material;
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
#endif`,nu=`struct PhysicalMaterial {
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
}`,iu=`
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
#endif`,su=`#if defined( RE_IndirectDiffuse )
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
#endif`,ru=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,au=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ou=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,du=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fu=`#if defined( USE_POINTS_UV )
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
#endif`,pu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_u=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xu=`#ifdef USE_MORPHTARGETS
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
#endif`,Mu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Su=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bu=`#ifdef USE_NORMALMAP
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
#endif`,Au=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ru=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Du=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ou=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ku=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vu=`float getShadowMask() {
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
}`,Gu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wu=`#ifdef USE_SKINNING
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
#endif`,Xu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qu=`#ifdef USE_SKINNING
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
#endif`,Yu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$u=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ku=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ju=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zu=`#ifdef USE_TRANSMISSION
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
#endif`,ju=`#ifdef USE_TRANSMISSION
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
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rf=`uniform sampler2D t2D;
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
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,of=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`#include <common>
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
}`,df=`#if DEPTH_PACKING == 3200
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
}`,uf=`#define DISTANCE
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
}`,ff=`#define DISTANCE
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
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`uniform float scale;
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
}`,_f=`uniform vec3 diffuse;
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
}`,vf=`#include <common>
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
}`,xf=`uniform vec3 diffuse;
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
}`,Mf=`#define LAMBERT
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
}`,yf=`#define LAMBERT
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
}`,Sf=`#define MATCAP
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
}`,Ef=`#define MATCAP
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
}`,wf=`#define NORMAL
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
}`,Tf=`#define NORMAL
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
}`,bf=`#define PHONG
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
}`,Af=`#define PHONG
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
}`,Rf=`#define STANDARD
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
}`,Cf=`#define STANDARD
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
}`,Pf=`#define TOON
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
}`,Lf=`#define TOON
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
}`,If=`uniform float size;
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
}`,Df=`uniform vec3 diffuse;
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
}`,Uf=`#include <common>
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
}`,Nf=`uniform vec3 color;
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
}`,Ff=`uniform float rotation;
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
}`,Of=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:sd,alphahash_pars_fragment:rd,alphamap_fragment:ad,alphamap_pars_fragment:od,alphatest_fragment:ld,alphatest_pars_fragment:cd,aomap_fragment:hd,aomap_pars_fragment:dd,batching_pars_vertex:ud,batching_vertex:fd,begin_vertex:pd,beginnormal_vertex:md,bsdfs:gd,iridescence_fragment:_d,bumpmap_pars_fragment:vd,clipping_planes_fragment:xd,clipping_planes_pars_fragment:Md,clipping_planes_pars_vertex:yd,clipping_planes_vertex:Sd,color_fragment:Ed,color_pars_fragment:wd,color_pars_vertex:Td,color_vertex:bd,common:Ad,cube_uv_reflection_fragment:Rd,defaultnormal_vertex:Cd,displacementmap_pars_vertex:Pd,displacementmap_vertex:Ld,emissivemap_fragment:Id,emissivemap_pars_fragment:Dd,colorspace_fragment:Ud,colorspace_pars_fragment:Nd,envmap_fragment:Fd,envmap_common_pars_fragment:Od,envmap_pars_fragment:Bd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:Jd,envmap_vertex:zd,fog_vertex:Hd,fog_pars_vertex:Vd,fog_fragment:Gd,fog_pars_fragment:Wd,gradientmap_pars_fragment:Xd,lightmap_pars_fragment:qd,lights_lambert_fragment:Yd,lights_lambert_pars_fragment:$d,lights_pars_begin:Kd,lights_toon_fragment:Zd,lights_toon_pars_fragment:jd,lights_phong_fragment:Qd,lights_phong_pars_fragment:eu,lights_physical_fragment:tu,lights_physical_pars_fragment:nu,lights_fragment_begin:iu,lights_fragment_maps:su,lights_fragment_end:ru,logdepthbuf_fragment:au,logdepthbuf_pars_fragment:ou,logdepthbuf_pars_vertex:lu,logdepthbuf_vertex:cu,map_fragment:hu,map_pars_fragment:du,map_particle_fragment:uu,map_particle_pars_fragment:fu,metalnessmap_fragment:pu,metalnessmap_pars_fragment:mu,morphinstance_vertex:gu,morphcolor_vertex:_u,morphnormal_vertex:vu,morphtarget_pars_vertex:xu,morphtarget_vertex:Mu,normal_fragment_begin:yu,normal_fragment_maps:Su,normal_pars_fragment:Eu,normal_pars_vertex:wu,normal_vertex:Tu,normalmap_pars_fragment:bu,clearcoat_normal_fragment_begin:Au,clearcoat_normal_fragment_maps:Ru,clearcoat_pars_fragment:Cu,iridescence_pars_fragment:Pu,opaque_fragment:Lu,packing:Iu,premultiplied_alpha_fragment:Du,project_vertex:Uu,dithering_fragment:Nu,dithering_pars_fragment:Fu,roughnessmap_fragment:Ou,roughnessmap_pars_fragment:Bu,shadowmap_pars_fragment:ku,shadowmap_pars_vertex:zu,shadowmap_vertex:Hu,shadowmask_pars_fragment:Vu,skinbase_vertex:Gu,skinning_pars_vertex:Wu,skinning_vertex:Xu,skinnormal_vertex:qu,specularmap_fragment:Yu,specularmap_pars_fragment:$u,tonemapping_fragment:Ku,tonemapping_pars_fragment:Ju,transmission_fragment:Zu,transmission_pars_fragment:ju,uv_pars_fragment:Qu,uv_pars_vertex:ef,uv_vertex:tf,worldpos_vertex:nf,background_vert:sf,background_frag:rf,backgroundCube_vert:af,backgroundCube_frag:of,cube_vert:lf,cube_frag:cf,depth_vert:hf,depth_frag:df,distanceRGBA_vert:uf,distanceRGBA_frag:ff,equirect_vert:pf,equirect_frag:mf,linedashed_vert:gf,linedashed_frag:_f,meshbasic_vert:vf,meshbasic_frag:xf,meshlambert_vert:Mf,meshlambert_frag:yf,meshmatcap_vert:Sf,meshmatcap_frag:Ef,meshnormal_vert:wf,meshnormal_frag:Tf,meshphong_vert:bf,meshphong_frag:Af,meshphysical_vert:Rf,meshphysical_frag:Cf,meshtoon_vert:Pf,meshtoon_frag:Lf,points_vert:If,points_frag:Df,shadow_vert:Uf,shadow_frag:Nf,sprite_vert:Ff,sprite_frag:Of},pe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},on={basic:{uniforms:It([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:It([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:It([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:It([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:It([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:It([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:It([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:It([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:It([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:It([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:It([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:It([pe.common,pe.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:It([pe.lights,pe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};on.physical={uniforms:It([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Cs={r:0,b:0,g:0},Wn=new rn,Bf=new ht;function kf(i,e,t,n,s,r,a){const o=new qe(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?t:e).get(x)),x}function _(w){let x=!1;const R=g(w);R===null?p(o,l):R&&R.isColor&&(p(R,1),x=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===qs)?(u===void 0&&(u=new se(new On(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:bi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Wn.copy(x.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Bf.makeRotationFromEuler(Wn)),u.material.toneMapped=et.getTransfer(R.colorSpace)!==rt,(f!==R||h!==R.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=R,h=R.version,d=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new se(new Mn(2,2),new Un({name:"BackgroundMaterial",uniforms:bi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=et.getTransfer(R.colorSpace)!==rt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||h!==R.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=R,h=R.version,d=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,x){w.getRGB(Cs,zl(i)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,x,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,x=1){o.set(w),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:_,addToRenderList:m,dispose:T}}function zf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(E,I,F,H,$){let X=!1;const Y=f(H,F,I);r!==Y&&(r=Y,c(r.object)),X=d(E,H,F,$),X&&g(E,H,F,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(E,I,F,H),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function f(E,I,F){const H=F.wireframe===!0;let $=n[E.id];$===void 0&&($={},n[E.id]=$);let X=$[I.id];X===void 0&&(X={},$[I.id]=X);let Y=X[H];return Y===void 0&&(Y=h(l()),X[H]=Y),Y}function h(E){const I=[],F=[],H=[];for(let $=0;$<t;$++)I[$]=0,F[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:H,object:E,attributes:{},index:null}}function d(E,I,F,H){const $=r.attributes,X=I.attributes;let Y=0;const te=F.getAttributes();for(const V in te)if(te[V].location>=0){const ve=$[V];let Se=X[V];if(Se===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(Se=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(Se=E.instanceColor)),ve===void 0||ve.attribute!==Se||Se&&ve.data!==Se.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}function g(E,I,F,H){const $={},X=I.attributes;let Y=0;const te=F.getAttributes();for(const V in te)if(te[V].location>=0){let ve=X[V];ve===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor));const Se={};Se.attribute=ve,ve&&ve.data&&(Se.data=ve.data),$[V]=Se,Y++}r.attributes=$,r.attributesNum=Y,r.index=H}function _(){const E=r.newAttributes;for(let I=0,F=E.length;I<F;I++)E[I]=0}function m(E){p(E,0)}function p(E,I){const F=r.newAttributes,H=r.enabledAttributes,$=r.attributeDivisors;F[E]=1,H[E]===0&&(i.enableVertexAttribArray(E),H[E]=1),$[E]!==I&&(i.vertexAttribDivisor(E,I),$[E]=I)}function T(){const E=r.newAttributes,I=r.enabledAttributes;for(let F=0,H=I.length;F<H;F++)I[F]!==E[F]&&(i.disableVertexAttribArray(F),I[F]=0)}function w(E,I,F,H,$,X,Y){Y===!0?i.vertexAttribIPointer(E,I,F,$,X):i.vertexAttribPointer(E,I,F,H,$,X)}function x(E,I,F,H){_();const $=H.attributes,X=F.getAttributes(),Y=I.defaultAttributeValues;for(const te in X){const V=X[te];if(V.location>=0){let fe=$[te];if(fe===void 0&&(te==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),te==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor)),fe!==void 0){const ve=fe.normalized,Se=fe.itemSize,Ve=e.get(fe);if(Ve===void 0)continue;const tt=Ve.buffer,Ze=Ve.type,je=Ve.bytesPerElement,Z=Ze===i.INT||Ze===i.UNSIGNED_INT||fe.gpuType===Da;if(fe.isInterleavedBufferAttribute){const ne=fe.data,ye=ne.stride,Ne=fe.offset;if(ne.isInstancedInterleavedBuffer){for(let we=0;we<V.locationSize;we++)p(V.location+we,ne.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let we=0;we<V.locationSize;we++)m(V.location+we);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let we=0;we<V.locationSize;we++)w(V.location+we,Se/V.locationSize,Ze,ve,ye*je,(Ne+Se/V.locationSize*we)*je,Z)}else{if(fe.isInstancedBufferAttribute){for(let ne=0;ne<V.locationSize;ne++)p(V.location+ne,fe.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ne=0;ne<V.locationSize;ne++)m(V.location+ne);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let ne=0;ne<V.locationSize;ne++)w(V.location+ne,Se/V.locationSize,Ze,ve,Se*je,Se/V.locationSize*ne*je,Z)}}else if(Y!==void 0){const ve=Y[te];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(V.location,ve);break;case 3:i.vertexAttrib3fv(V.location,ve);break;case 4:i.vertexAttrib4fv(V.location,ve);break;default:i.vertexAttrib1fv(V.location,ve)}}}}T()}function R(){L();for(const E in n){const I=n[E];for(const F in I){const H=I[F];for(const $ in H)u(H[$].object),delete H[$];delete I[F]}delete n[E]}}function C(E){if(n[E.id]===void 0)return;const I=n[E.id];for(const F in I){const H=I[F];for(const $ in H)u(H[$].object),delete H[$];delete I[F]}delete n[E.id]}function P(E){for(const I in n){const F=n[I];if(F[E.id]===void 0)continue;const H=F[E.id];for(const $ in H)u(H[$].object),delete H[$];delete F[E.id]}}function L(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Hf(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Vf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==nn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const L=P===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==hn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==vn&&!L)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:R,maxSamples:C}}function Gf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Yn,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:n,w=T*4;let x=p.clippingState||null;l.value=x,x=u(g,h,w,d);for(let R=0;R!==w;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=d;w!==_;++w,x+=4)a.copy(f[w]).applyMatrix4(T,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Wf(i){let e=new WeakMap;function t(a,o){return o===Jr?a.mapping=Ei:o===Zr&&(a.mapping=wi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Jr||o===Zr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Eh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const xi=4,ko=[.125,.215,.35,.446,.526,.582],Jn=20,Ir=new Jl,zo=new qe;let Dr=null,Ur=0,Nr=0,Fr=!1;const $n=(1+Math.sqrt(5))/2,_i=1/$n,Ho=[new A(-$n,_i,0),new A($n,_i,0),new A(-_i,0,$n),new A(_i,0,$n),new A(0,$n,-_i),new A(0,$n,_i),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Xf=new A;class Vo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Xf}=r;Dr=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dr,Ur,Nr),this._renderer.xr.enabled=Fr,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dr=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Ji,format:nn,colorSpace:Ti,depthBuffer:!1},s=Go(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Go(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qf(r)),this._blurMaterial=Yf(r,e,t)}return s}_compileMaterial(e){const t=new se(this._lodPlanes[0],e);this._renderer.compile(t,Ir)}_sceneToCubeUV(e,t,n,s,r){const l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(zo),f.toneMapping=In,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const _=new ot({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),m=new se(new On,_);let p=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,p=!0):(_.color.copy(zo),p=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):x===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));const R=this._cubeSize;Ps(s,x*R,w>2?R:0,R,R),f.setRenderTarget(s),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ei||e.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ps(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ir)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ho[(s-r-1)%Ho.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new se(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Jn-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Jn;m>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);const p=[];let T=0;for(let P=0;P<Jn;++P){const L=P/_,S=Math.exp(-L*L/2);p.push(S),P===0?T+=S:P<m&&(T+=2*S)}for(let P=0;P<p.length;P++)p[P]=p[P]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-n;const x=this._sizeLods[s],R=3*x*(s>w-xi?s-w+xi:0),C=4*(this._cubeSize-x);Ps(t,R,C,3*x,2*x),l.setRenderTarget(t),l.render(f,Ir)}}function qf(i){const e=[],t=[],n=[];let s=i;const r=i-xi+1+ko.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-xi?l=ko[a-i+xi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),w=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let C=0;C<d;C++){const P=C%3*2/3-1,L=C>2?0:-1,S=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];T.set(S,_*g*C),w.set(h,m*g*C);const E=[C,C,C,C,C,C];x.set(E,p*g*C)}const R=new vt;R.setAttribute("position",new qt(T,_)),R.setAttribute("uv",new qt(w,m)),R.setAttribute("faceIndex",new qt(x,p)),e.push(R),s>xi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Go(i,e,t){const n=new ti(i,e,t);return n.texture.mapping=qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Yf(i,e,t){const n=new Float32Array(Jn),s=new A(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Wo(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Xo(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ya(){return`

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
	`}function $f(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Jr||l===Zr,u=l===Ei||l===wi;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Vo(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Vo(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Kf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ki("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jf(i,e,t,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let w=0,x=T.length;w<x;w+=3){const R=T[w+0],C=T[w+1],P=T[w+2];h.push(R,C,C,P,P,R)}}else if(g!==void 0){const T=g.array;_=g.version;for(let w=0,x=T.length/3-1;w<x;w+=3){const R=w+0,C=w+1,P=w+2;h.push(R,C,C,P,P,R)}}else return;const m=new(Nl(h)?kl:Bl)(h,1);m.version=_;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Zf(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*a),t.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,h*a,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*_[T];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function jf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Qf(i,e,t){const n=new WeakMap,s=new lt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let E=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var d=E;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let R=o.attributes.position.count*x,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*C*4*f),L=new Fl(P,R,C,f);L.type=vn,L.needsUpdate=!0;const S=x*4;for(let I=0;I<f;I++){const F=p[I],H=T[I],$=w[I],X=R*C*4*I;for(let Y=0;Y<F.count;Y++){const te=Y*S;g===!0&&(s.fromBufferAttribute(F,Y),P[X+te+0]=s.x,P[X+te+1]=s.y,P[X+te+2]=s.z,P[X+te+3]=0),_===!0&&(s.fromBufferAttribute(H,Y),P[X+te+4]=s.x,P[X+te+5]=s.y,P[X+te+6]=s.z,P[X+te+7]=0),m===!0&&(s.fromBufferAttribute($,Y),P[X+te+8]=s.x,P[X+te+9]=s.y,P[X+te+10]=s.z,P[X+te+11]=$.itemSize===4?s.w:1)}}h={count:f,texture:L,size:new Le(R,C)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function ep(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const jl=new Nt,qo=new Wl(1,1),Ql=new Fl,ec=new ah,tc=new Vl,Yo=[],$o=[],Ko=new Float32Array(16),Jo=new Float32Array(9),Zo=new Float32Array(4);function Ci(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Yo[s];if(r===void 0&&(r=new Float32Array(s),Yo[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zs(i,e){let t=$o[e];t===void 0&&(t=new Int32Array(e),$o[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function tp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function rp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;Zo.set(n),i.uniformMatrix2fv(this.addr,!1,Zo),wt(t,n)}}function ap(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;Jo.set(n),i.uniformMatrix3fv(this.addr,!1,Jo),wt(t,n)}}function op(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;Ko.set(n),i.uniformMatrix4fv(this.addr,!1,Ko),wt(t,n)}}function lp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function up(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function gp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qo.compareFunction=Dl,r=qo):r=jl,t.setTexture2D(e||r,s)}function _p(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ec,s)}function vp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||tc,s)}function xp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ql,s)}function Mp(i){switch(i){case 5126:return tp;case 35664:return np;case 35665:return ip;case 35666:return sp;case 35674:return rp;case 35675:return ap;case 35676:return op;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return hp;case 35669:case 35673:return dp;case 5125:return up;case 36294:return fp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return xp}}function yp(i,e){i.uniform1fv(this.addr,e)}function Sp(i,e){const t=Ci(e,this.size,2);i.uniform2fv(this.addr,t)}function Ep(i,e){const t=Ci(e,this.size,3);i.uniform3fv(this.addr,t)}function wp(i,e){const t=Ci(e,this.size,4);i.uniform4fv(this.addr,t)}function Tp(i,e){const t=Ci(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bp(i,e){const t=Ci(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ap(i,e){const t=Ci(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Rp(i,e){i.uniform1iv(this.addr,e)}function Cp(i,e){i.uniform2iv(this.addr,e)}function Pp(i,e){i.uniform3iv(this.addr,e)}function Lp(i,e){i.uniform4iv(this.addr,e)}function Ip(i,e){i.uniform1uiv(this.addr,e)}function Dp(i,e){i.uniform2uiv(this.addr,e)}function Up(i,e){i.uniform3uiv(this.addr,e)}function Np(i,e){i.uniform4uiv(this.addr,e)}function Fp(i,e,t){const n=this.cache,s=e.length,r=Zs(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||jl,r[a])}function Op(i,e,t){const n=this.cache,s=e.length,r=Zs(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ec,r[a])}function Bp(i,e,t){const n=this.cache,s=e.length,r=Zs(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||tc,r[a])}function kp(i,e,t){const n=this.cache,s=e.length,r=Zs(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ql,r[a])}function zp(i){switch(i){case 5126:return yp;case 35664:return Sp;case 35665:return Ep;case 35666:return wp;case 35674:return Tp;case 35675:return bp;case 35676:return Ap;case 5124:case 35670:return Rp;case 35667:case 35671:return Cp;case 35668:case 35672:return Pp;case 35669:case 35673:return Lp;case 5125:return Ip;case 36294:return Dp;case 36295:return Up;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return kp}}class Hp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mp(t.type)}}class Vp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zp(t.type)}}class Gp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Or=/(\w+)(\])?(\[|\.)?/g;function jo(i,e){i.seq.push(e),i.map[e.id]=e}function Wp(i,e,t){const n=i.name,s=n.length;for(Or.lastIndex=0;;){const r=Or.exec(n),a=Or.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jo(t,c===void 0?new Hp(o,i,e):new Vp(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Gp(o),jo(t,f)),t=f}}}class ks{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Wp(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Qo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Xp=37297;let qp=0;function Yp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const el=new He;function $p(i){et._getMatrix(el,et.workingColorSpace,i);const e=`mat3( ${el.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case zs:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function tl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Yp(i.getShaderSource(e),o)}else return r}function Kp(i,e){const t=$p(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Jp(i,e){let t;switch(e){case Nc:t="Linear";break;case Fc:t="Reinhard";break;case Oc:t="Cineon";break;case Sl:t="ACESFilmic";break;case kc:t="AgX";break;case zc:t="Neutral";break;case Bc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ls=new A;function Zp(){et.getLuminanceCoefficients(Ls);const i=Ls.x.toFixed(4),e=Ls.y.toFixed(4),t=Ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bi).join(`
`)}function Qp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function em(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Bi(i){return i!==""}function nl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function il(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pa(i){return i.replace(tm,im)}const nm=new Map;function im(i,e){let t=Ge[e];if(t===void 0){const n=nm.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pa(t)}const sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sl(i){return i.replace(sm,rm)}function rm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function am(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ml?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function om(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ei:case wi:e="ENVMAP_TYPE_CUBE";break;case qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lm(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===wi&&(e="ENVMAP_MODE_REFRACTION"),e}function cm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yl:e="ENVMAP_BLENDING_MULTIPLY";break;case Dc:e="ENVMAP_BLENDING_MIX";break;case Uc:e="ENVMAP_BLENDING_ADD";break}return e}function hm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=am(t),c=om(t),u=lm(t),f=cm(t),h=hm(t),d=jp(t),g=Qp(r),_=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bi).join(`
`),p.length>0&&(p+=`
`)):(m=[rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),p=[rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Ge.tonemapping_pars_fragment:"",t.toneMapping!==In?Jp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Kp("linearToOutputTexel",t.outputColorSpace),Zp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bi).join(`
`)),a=Pa(a),a=nl(a,t),a=il(a,t),o=Pa(o),o=nl(o,t),o=il(o,t),a=sl(a),o=sl(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=T+m+a,x=T+p+o,R=Qo(s,s.VERTEX_SHADER,w),C=Qo(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(I){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(R)||"",$=s.getShaderInfoLog(C)||"",X=F.trim(),Y=H.trim(),te=$.trim();let V=!0,fe=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,C);else{const ve=tl(s,R,"vertex"),Se=tl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+ve+`
`+Se)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Y===""||te==="")&&(fe=!1);fe&&(I.diagnostics={runnable:V,programLog:X,vertexShader:{log:Y,prefix:m},fragmentShader:{log:te,prefix:p}})}s.deleteShader(R),s.deleteShader(C),L=new ks(s,_),S=em(s,_)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,Xp)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let um=0;class fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new pm(e),t.set(e,n)),n}}class pm{constructor(e){this.id=um++,this.code=e,this.usedTimes=0}}function mm(i,e,t,n,s,r,a){const o=new za,l=new fm,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,E,I,F,H){const $=F.fog,X=H.geometry,Y=S.isMeshStandardMaterial?F.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),V=te&&te.mapping===qs?te.image.height:null,fe=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ve=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Se=ve!==void 0?ve.length:0;let Ve=0;X.morphAttributes.position!==void 0&&(Ve=1),X.morphAttributes.normal!==void 0&&(Ve=2),X.morphAttributes.color!==void 0&&(Ve=3);let tt,Ze,je,Z;if(fe){const nt=on[fe];tt=nt.vertexShader,Ze=nt.fragmentShader}else tt=S.vertexShader,Ze=S.fragmentShader,l.update(S),je=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);const ne=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ne=H.isInstancedMesh===!0,we=H.isBatchedMesh===!0,$e=!!S.map,yt=!!S.matcap,M=!!te,K=!!S.aoMap,J=!!S.lightMap,j=!!S.bumpMap,q=!!S.normalMap,Te=!!S.displacementMap,ee=!!S.emissiveMap,de=!!S.metalnessMap,Xe=!!S.roughnessMap,ke=S.anisotropy>0,b=S.clearcoat>0,v=S.dispersion>0,O=S.iridescence>0,W=S.sheen>0,ie=S.transmission>0,G=ke&&!!S.anisotropyMap,Pe=b&&!!S.clearcoatMap,he=b&&!!S.clearcoatNormalMap,Ae=b&&!!S.clearcoatRoughnessMap,Re=O&&!!S.iridescenceMap,le=O&&!!S.iridescenceThicknessMap,_e=W&&!!S.sheenColorMap,Fe=W&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,me=!!S.specularColorMap,ze=!!S.specularIntensityMap,D=ie&&!!S.transmissionMap,ce=ie&&!!S.thicknessMap,ue=!!S.gradientMap,Me=!!S.alphaMap,ae=S.alphaTest>0,Q=!!S.alphaHash,be=!!S.extensions;let Be=In;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Be=i.toneMapping);const dt={shaderID:fe,shaderType:S.type,shaderName:S.name,vertexShader:tt,fragmentShader:Ze,defines:S.defines,customVertexShaderID:je,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:we,batchingColor:we&&H._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&H.instanceColor!==null,instancingMorph:Ne&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ti,alphaToCoverage:!!S.alphaToCoverage,map:$e,matcap:yt,envMap:M,envMapMode:M&&te.mapping,envMapCubeUVHeight:V,aoMap:K,lightMap:J,bumpMap:j,normalMap:q,displacementMap:h&&Te,emissiveMap:ee,normalMapObjectSpace:q&&S.normalMapType===Wc,normalMapTangentSpace:q&&S.normalMapType===Il,metalnessMap:de,roughnessMap:Xe,anisotropy:ke,anisotropyMap:G,clearcoat:b,clearcoatMap:Pe,clearcoatNormalMap:he,clearcoatRoughnessMap:Ae,dispersion:v,iridescence:O,iridescenceMap:Re,iridescenceThicknessMap:le,sheen:W,sheenColorMap:_e,sheenRoughnessMap:Fe,specularMap:Ce,specularColorMap:me,specularIntensityMap:ze,transmission:ie,transmissionMap:D,thicknessMap:ce,gradientMap:ue,opaque:S.transparent===!1&&S.blending===Mi&&S.alphaToCoverage===!1,alphaMap:Me,alphaTest:ae,alphaHash:Q,combine:S.combine,mapUv:$e&&_(S.map.channel),aoMapUv:K&&_(S.aoMap.channel),lightMapUv:J&&_(S.lightMap.channel),bumpMapUv:j&&_(S.bumpMap.channel),normalMapUv:q&&_(S.normalMap.channel),displacementMapUv:Te&&_(S.displacementMap.channel),emissiveMapUv:ee&&_(S.emissiveMap.channel),metalnessMapUv:de&&_(S.metalnessMap.channel),roughnessMapUv:Xe&&_(S.roughnessMap.channel),anisotropyMapUv:G&&_(S.anisotropyMap.channel),clearcoatMapUv:Pe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&_(S.sheenRoughnessMap.channel),specularMapUv:Ce&&_(S.specularMap.channel),specularColorMapUv:me&&_(S.specularColorMap.channel),specularIntensityMapUv:ze&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:ce&&_(S.thicknessMap.channel),alphaMapUv:Me&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(q||ke),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&($e||Me),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ye,skinning:H.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ve,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:$e&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===rt,decodeVideoTextureEmissive:ee&&S.emissiveMap.isVideoTexture===!0&&et.getTransfer(S.emissiveMap.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ut,flipSided:S.side===kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:be&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&S.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)E.push(I),E.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(T(E,S),w(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function T(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function w(S,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const E=g[S.type];let I;if(E){const F=on[E];I=xh.clone(F.uniforms)}else I=S.uniforms;return I}function R(S,E){let I;for(let F=0,H=u.length;F<H;F++){const $=u[F];if($.cacheKey===E){I=$,++I.usedTimes;break}}return I===void 0&&(I=new dm(i,E,S,r),u.push(I)),I}function C(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function P(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:L}}function gm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function _m(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function al(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ol(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,h,d,g,_,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||_m),n.length>1&&n.sort(h||al),s.length>1&&s.sort(h||al)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function vm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ol,i.set(n,[a])):s>=r.length?(a=new ol,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function xm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new qe};break;case"SpotLight":t={position:new A,direction:new A,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function Mm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ym=0;function Sm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Em(i){const e=new xm,t=Mm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const s=new A,r=new ht,a=new ht;function o(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,w=0,x=0,R=0,C=0,P=0;c.sort(Sm);for(let S=0,E=c.length;S<E;S++){const I=c[S],F=I.color,H=I.intensity,$=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=F.r*H,f+=F.g*H,h+=F.b*H;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],H);P++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const te=I.shadow,V=t.get(I);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=I.shadow.matrix,T++}n.directional[d]=Y,d++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(F).multiplyScalar(H),Y.distance=$,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[_]=Y;const te=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,te.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[_]=te.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,x++}_++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(F).multiplyScalar(H),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=Y,m++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const te=I.shadow,V=t.get(I);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,V.shadowCameraNear=te.camera.near,V.shadowCameraFar=te.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=I.shadow.matrix,w++}n.point[g]=Y,g++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(H),Y.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[p]=Y,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const L=n.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==T||L.numPointShadows!==w||L.numSpotShadows!==x||L.numSpotMaps!==R||L.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+R-C,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=T,L.numPointShadows=w,L.numSpotShadows=x,L.numSpotMaps=R,L.numLightProbes=P,n.version=ym++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const w=c[p];if(w.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(w.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(w.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function ll(i){const e=new Em(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function wm(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ll(i),e.set(s,[o])):r>=a.length?(o=new ll(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bm=`uniform sampler2D shadow_pass;
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
}`;function Am(i,e,t){let n=new Ha;const s=new Le,r=new Le,a=new lt,o=new qh({depthPacking:Gc}),l=new Yh,c={},u=t.maxTextureSize,f={[Dn]:kt,[kt]:Dn,[Ut]:Ut},h=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Tm,fragmentShader:bm}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new vt;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new se(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl;let p=this.type;this.render=function(C,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ln),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=p!==_n&&this.type===_n,$=p===_n&&this.type!==_n;for(let X=0,Y=C.length;X<Y;X++){const te=C[X],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const fe=V.getFrameExtents();if(s.multiply(fe),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/fe.x),s.x=r.x*fe.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/fe.y),s.y=r.y*fe.y,V.mapSize.y=r.y)),V.map===null||H===!0||$===!0){const Se=this.type!==_n?{minFilter:sn,magFilter:sn}:{};V.map!==null&&V.map.dispose(),V.map=new ti(s.x,s.y,Se),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ve=V.getViewportCount();for(let Se=0;Se<ve;Se++){const Ve=V.getViewport(Se);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),F.viewport(a),V.updateMatrices(te,Se),n=V.getFrustum(),x(P,L,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===_n&&T(V,L),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,E,I)};function T(C,P){const L=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ti(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,L,h,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,L,d,_,null)}function w(C,P,L,S){let E=null;const I=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)E=I;else if(E=L.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=E.uuid,H=P.uuid;let $=c[F];$===void 0&&($={},c[F]=$);let X=$[H];X===void 0&&(X=E.clone(),$[H]=X,P.addEventListener("dispose",R)),E=X}if(E.visible=P.visible,E.wireframe=P.wireframe,S===_n?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:f[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const F=i.properties.get(E);F.light=L}return E}function x(C,P,L,S,E){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===_n)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const H=e.update(C),$=C.material;if(Array.isArray($)){const X=H.groups;for(let Y=0,te=X.length;Y<te;Y++){const V=X[Y],fe=$[V.materialIndex];if(fe&&fe.visible){const ve=w(C,fe,S,E);C.onBeforeShadow(i,C,P,L,H,ve,V),i.renderBufferDirect(L,null,H,ve,C,V),C.onAfterShadow(i,C,P,L,H,ve,V)}}}else if($.visible){const X=w(C,$,S,E);C.onBeforeShadow(i,C,P,L,H,X,null),i.renderBufferDirect(L,null,H,X,C,null),C.onAfterShadow(i,C,P,L,H,X,null)}}const F=C.children;for(let H=0,$=F.length;H<$;H++)x(F[H],P,L,S,E)}function R(C){C.target.removeEventListener("dispose",R);for(const L in c){const S=c[L],E=C.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}const Rm={[Gr]:Wr,[Xr]:$r,[qr]:Kr,[Si]:Yr,[Wr]:Gr,[$r]:Xr,[Kr]:qr,[Yr]:Si};function Cm(i,e){function t(){let D=!1;const ce=new lt;let ue=null;const Me=new lt(0,0,0,0);return{setMask:function(ae){ue!==ae&&!D&&(i.colorMask(ae,ae,ae,ae),ue=ae)},setLocked:function(ae){D=ae},setClear:function(ae,Q,be,Be,dt){dt===!0&&(ae*=Be,Q*=Be,be*=Be),ce.set(ae,Q,be,Be),Me.equals(ce)===!1&&(i.clearColor(ae,Q,be,Be),Me.copy(ce))},reset:function(){D=!1,ue=null,Me.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,ue=null,Me=null,ae=null;return{setReversed:function(Q){if(ce!==Q){const be=e.get("EXT_clip_control");Q?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ce=Q;const Be=ae;ae=null,this.setClear(Be)}},getReversed:function(){return ce},setTest:function(Q){Q?ne(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(Q){ue!==Q&&!D&&(i.depthMask(Q),ue=Q)},setFunc:function(Q){if(ce&&(Q=Rm[Q]),Me!==Q){switch(Q){case Gr:i.depthFunc(i.NEVER);break;case Wr:i.depthFunc(i.ALWAYS);break;case Xr:i.depthFunc(i.LESS);break;case Si:i.depthFunc(i.LEQUAL);break;case qr:i.depthFunc(i.EQUAL);break;case Yr:i.depthFunc(i.GEQUAL);break;case $r:i.depthFunc(i.GREATER);break;case Kr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=Q}},setLocked:function(Q){D=Q},setClear:function(Q){ae!==Q&&(ce&&(Q=1-Q),i.clearDepth(Q),ae=Q)},reset:function(){D=!1,ue=null,Me=null,ae=null,ce=!1}}}function s(){let D=!1,ce=null,ue=null,Me=null,ae=null,Q=null,be=null,Be=null,dt=null;return{setTest:function(nt){D||(nt?ne(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!D&&(i.stencilMask(nt),ce=nt)},setFunc:function(nt,dn,an){(ue!==nt||Me!==dn||ae!==an)&&(i.stencilFunc(nt,dn,an),ue=nt,Me=dn,ae=an)},setOp:function(nt,dn,an){(Q!==nt||be!==dn||Be!==an)&&(i.stencilOp(nt,dn,an),Q=nt,be=dn,Be=an)},setLocked:function(nt){D=nt},setClear:function(nt){dt!==nt&&(i.clearStencil(nt),dt=nt)},reset:function(){D=!1,ce=null,ue=null,Me=null,ae=null,Q=null,be=null,Be=null,dt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,w=null,x=null,R=null,C=null,P=new qe(0,0,0),L=0,S=!1,E=null,I=null,F=null,H=null,$=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,te=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=te>=2);let fe=null,ve={};const Se=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),tt=new lt().fromArray(Se),Ze=new lt().fromArray(Ve);function je(D,ce,ue,Me){const ae=new Uint8Array(4),Q=i.createTexture();i.bindTexture(D,Q),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<ue;be++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(ce+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return Q}const Z={};Z[i.TEXTURE_2D]=je(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(Si),j(!1),q(no),ne(i.CULL_FACE),K(Ln);function ne(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function ye(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ne(D,ce){return f[D]!==ce?(i.bindFramebuffer(D,ce),f[D]=ce,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ce),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function we(D,ce){let ue=d,Me=!1;if(D){ue=h.get(ce),ue===void 0&&(ue=[],h.set(ce,ue));const ae=D.textures;if(ue.length!==ae.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,be=ae.length;Q<be;Q++)ue[Q]=i.COLOR_ATTACHMENT0+Q;ue.length=ae.length,Me=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,Me=!0);Me&&i.drawBuffers(ue)}function $e(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const yt={[Kn]:i.FUNC_ADD,[gc]:i.FUNC_SUBTRACT,[_c]:i.FUNC_REVERSE_SUBTRACT};yt[vc]=i.MIN,yt[xc]=i.MAX;const M={[Mc]:i.ZERO,[yc]:i.ONE,[Sc]:i.SRC_COLOR,[Hr]:i.SRC_ALPHA,[Rc]:i.SRC_ALPHA_SATURATE,[bc]:i.DST_COLOR,[wc]:i.DST_ALPHA,[Ec]:i.ONE_MINUS_SRC_COLOR,[Vr]:i.ONE_MINUS_SRC_ALPHA,[Ac]:i.ONE_MINUS_DST_COLOR,[Tc]:i.ONE_MINUS_DST_ALPHA,[Cc]:i.CONSTANT_COLOR,[Pc]:i.ONE_MINUS_CONSTANT_COLOR,[Lc]:i.CONSTANT_ALPHA,[Ic]:i.ONE_MINUS_CONSTANT_ALPHA};function K(D,ce,ue,Me,ae,Q,be,Be,dt,nt){if(D===Ln){_===!0&&(ye(i.BLEND),_=!1);return}if(_===!1&&(ne(i.BLEND),_=!0),D!==mc){if(D!==m||nt!==S){if((p!==Kn||x!==Kn)&&(i.blendEquation(i.FUNC_ADD),p=Kn,x=Kn),nt)switch(D){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tn:i.blendFunc(i.ONE,i.ONE);break;case io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case so:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case io:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case so:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,w=null,R=null,C=null,P.set(0,0,0),L=0,m=D,S=nt}return}ae=ae||ce,Q=Q||ue,be=be||Me,(ce!==p||ae!==x)&&(i.blendEquationSeparate(yt[ce],yt[ae]),p=ce,x=ae),(ue!==T||Me!==w||Q!==R||be!==C)&&(i.blendFuncSeparate(M[ue],M[Me],M[Q],M[be]),T=ue,w=Me,R=Q,C=be),(Be.equals(P)===!1||dt!==L)&&(i.blendColor(Be.r,Be.g,Be.b,dt),P.copy(Be),L=dt),m=D,S=!1}function J(D,ce){D.side===Ut?ye(i.CULL_FACE):ne(i.CULL_FACE);let ue=D.side===kt;ce&&(ue=!ue),j(ue),D.blending===Mi&&D.transparent===!1?K(Ln):K(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const Me=D.stencilWrite;o.setTest(Me),Me&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ee(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(D){E!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),E=D)}function q(D){D!==fc?(ne(i.CULL_FACE),D!==I&&(D===no?i.cullFace(i.BACK):D===pc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),I=D}function Te(D){D!==F&&(Y&&i.lineWidth(D),F=D)}function ee(D,ce,ue){D?(ne(i.POLYGON_OFFSET_FILL),(H!==ce||$!==ue)&&(i.polygonOffset(ce,ue),H=ce,$=ue)):ye(i.POLYGON_OFFSET_FILL)}function de(D){D?ne(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Xe(D){D===void 0&&(D=i.TEXTURE0+X-1),fe!==D&&(i.activeTexture(D),fe=D)}function ke(D,ce,ue){ue===void 0&&(fe===null?ue=i.TEXTURE0+X-1:ue=fe);let Me=ve[ue];Me===void 0&&(Me={type:void 0,texture:void 0},ve[ue]=Me),(Me.type!==D||Me.texture!==ce)&&(fe!==ue&&(i.activeTexture(ue),fe=ue),i.bindTexture(D,ce||Z[D]),Me.type=D,Me.texture=ce)}function b(){const D=ve[fe];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(D){tt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),tt.copy(D))}function Fe(D){Ze.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ze.copy(D))}function Ce(D,ce){let ue=c.get(ce);ue===void 0&&(ue=new WeakMap,c.set(ce,ue));let Me=ue.get(D);Me===void 0&&(Me=i.getUniformBlockIndex(ce,D.name),ue.set(D,Me))}function me(D,ce){const Me=c.get(ce).get(D);l.get(ce)!==Me&&(i.uniformBlockBinding(ce,Me,D.__bindingPointIndex),l.set(ce,Me))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},fe=null,ve={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,w=null,x=null,R=null,C=null,P=new qe(0,0,0),L=0,S=!1,E=null,I=null,F=null,H=null,$=null,tt.set(0,0,i.canvas.width,i.canvas.height),Ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:ye,bindFramebuffer:Ne,drawBuffers:we,useProgram:$e,setBlending:K,setMaterial:J,setFlipSided:j,setCullFace:q,setLineWidth:Te,setPolygonOffset:ee,setScissorTest:de,activeTexture:Xe,bindTexture:ke,unbindTexture:b,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Re,texImage3D:le,updateUBOMapping:Ce,uniformBlockBinding:me,texStorage2D:he,texStorage3D:Ae,texSubImage2D:W,texSubImage3D:ie,compressedTexSubImage2D:G,compressedTexSubImage3D:Pe,scissor:_e,viewport:Fe,reset:ze}}function Pm(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return d?new OffscreenCanvas(b,v):Vs("canvas")}function _(b,v,O){let W=1;const ie=ke(b);if((ie.width>O||ie.height>O)&&(W=O/Math.max(ie.width,ie.height)),W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const G=Math.floor(W*ie.width),Pe=Math.floor(W*ie.height);f===void 0&&(f=g(G,Pe));const he=v?g(G,Pe):f;return he.width=G,he.height=Pe,he.getContext("2d").drawImage(b,0,0,G,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+G+"x"+Pe+")."),he}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(b,v,O,W,ie=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let G=v;if(v===i.RED&&(O===i.FLOAT&&(G=i.R32F),O===i.HALF_FLOAT&&(G=i.R16F),O===i.UNSIGNED_BYTE&&(G=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(G=i.R8UI),O===i.UNSIGNED_SHORT&&(G=i.R16UI),O===i.UNSIGNED_INT&&(G=i.R32UI),O===i.BYTE&&(G=i.R8I),O===i.SHORT&&(G=i.R16I),O===i.INT&&(G=i.R32I)),v===i.RG&&(O===i.FLOAT&&(G=i.RG32F),O===i.HALF_FLOAT&&(G=i.RG16F),O===i.UNSIGNED_BYTE&&(G=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(G=i.RG8UI),O===i.UNSIGNED_SHORT&&(G=i.RG16UI),O===i.UNSIGNED_INT&&(G=i.RG32UI),O===i.BYTE&&(G=i.RG8I),O===i.SHORT&&(G=i.RG16I),O===i.INT&&(G=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(G=i.RGB8UI),O===i.UNSIGNED_SHORT&&(G=i.RGB16UI),O===i.UNSIGNED_INT&&(G=i.RGB32UI),O===i.BYTE&&(G=i.RGB8I),O===i.SHORT&&(G=i.RGB16I),O===i.INT&&(G=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),O===i.UNSIGNED_INT&&(G=i.RGBA32UI),O===i.BYTE&&(G=i.RGBA8I),O===i.SHORT&&(G=i.RGBA16I),O===i.INT&&(G=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),v===i.RGBA){const Pe=ie?zs:et.getTransfer(W);O===i.FLOAT&&(G=i.RGBA32F),O===i.HALF_FLOAT&&(G=i.RGBA16F),O===i.UNSIGNED_BYTE&&(G=Pe===rt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function x(b,v){let O;return b?v===null||v===ei||v===qi?O=i.DEPTH24_STENCIL8:v===vn?O=i.DEPTH32F_STENCIL8:v===Xi&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ei||v===qi?O=i.DEPTH_COMPONENT24:v===vn?O=i.DEPTH_COMPONENT32F:v===Xi&&(O=i.DEPTH_COMPONENT16),O}function R(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==sn&&b.minFilter!==ln?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function C(b){const v=b.target;v.removeEventListener("dispose",C),L(v),v.isVideoTexture&&u.delete(v)}function P(b){const v=b.target;v.removeEventListener("dispose",P),E(v)}function L(b){const v=n.get(b);if(v.__webglInit===void 0)return;const O=b.source,W=h.get(O);if(W){const ie=W[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(b),Object.keys(W).length===0&&h.delete(O)}n.remove(b)}function S(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const O=b.source,W=h.get(O);delete W[v.__cacheKey],a.memory.textures--}function E(b){const v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let ie=0;ie<v.__webglFramebuffer[W].length;ie++)i.deleteFramebuffer(v.__webglFramebuffer[W][ie]);else i.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)i.deleteFramebuffer(v.__webglFramebuffer[W]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=b.textures;for(let W=0,ie=O.length;W<ie;W++){const G=n.get(O[W]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(O[W])}n.remove(b)}let I=0;function F(){I=0}function H(){const b=I;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),I+=1,b}function $(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function X(b,v){const O=n.get(b);if(b.isVideoTexture&&de(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,b,v);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function Y(b,v){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Z(O,b,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function te(b,v){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Z(O,b,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function V(b,v){const O=n.get(b);if(b.version>0&&O.__version!==b.version){ne(O,b,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const fe={[Wi]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[jr]:i.MIRRORED_REPEAT},ve={[sn]:i.NEAREST,[Hc]:i.NEAREST_MIPMAP_NEAREST,[as]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[nr]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},Se={[Xc]:i.NEVER,[Zc]:i.ALWAYS,[qc]:i.LESS,[Dl]:i.LEQUAL,[Yc]:i.EQUAL,[Jc]:i.GEQUAL,[$c]:i.GREATER,[Kc]:i.NOTEQUAL};function Ve(b,v){if(v.type===vn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===ln||v.magFilter===nr||v.magFilter===as||v.magFilter===jn||v.minFilter===ln||v.minFilter===nr||v.minFilter===as||v.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,fe[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,fe[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,fe[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ve[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ve[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===sn||v.minFilter!==as&&v.minFilter!==jn||v.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function tt(b,v){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",C));const W=v.source;let ie=h.get(W);ie===void 0&&(ie={},h.set(W,ie));const G=$(v);if(G!==b.__cacheKey){ie[G]===void 0&&(ie[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ie[G].usedTimes++;const Pe=ie[b.__cacheKey];Pe!==void 0&&(ie[b.__cacheKey].usedTimes--,Pe.usedTimes===0&&S(v)),b.__cacheKey=G,b.__webglTexture=ie[G].texture}return O}function Ze(b,v,O){return Math.floor(Math.floor(b/O)/v)}function je(b,v,O,W){const G=b.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,W,v.data);else{G.sort((le,_e)=>le.start-_e.start);let Pe=0;for(let le=1;le<G.length;le++){const _e=G[Pe],Fe=G[le],Ce=_e.start+_e.count,me=Ze(Fe.start,v.width,4),ze=Ze(_e.start,v.width,4);Fe.start<=Ce+1&&me===ze&&Ze(Fe.start+Fe.count-1,v.width,4)===me?_e.count=Math.max(_e.count,Fe.start+Fe.count-_e.start):(++Pe,G[Pe]=Fe)}G.length=Pe+1;const he=i.getParameter(i.UNPACK_ROW_LENGTH),Ae=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let le=0,_e=G.length;le<_e;le++){const Fe=G[le],Ce=Math.floor(Fe.start/4),me=Math.ceil(Fe.count/4),ze=Ce%v.width,D=Math.floor(Ce/v.width),ce=me,ue=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,ze,D,ce,ue,O,W,v.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function Z(b,v,O){let W=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=i.TEXTURE_3D);const ie=tt(b,v),G=v.source;t.bindTexture(W,b.__webglTexture,i.TEXTURE0+O);const Pe=n.get(G);if(G.version!==Pe.__version||ie===!0){t.activeTexture(i.TEXTURE0+O);const he=et.getPrimaries(et.workingColorSpace),Ae=v.colorSpace===Pn?null:et.getPrimaries(v.colorSpace),Re=v.colorSpace===Pn||he===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let le=_(v.image,!1,s.maxTextureSize);le=Xe(v,le);const _e=r.convert(v.format,v.colorSpace),Fe=r.convert(v.type);let Ce=w(v.internalFormat,_e,Fe,v.colorSpace,v.isVideoTexture);Ve(W,v);let me;const ze=v.mipmaps,D=v.isVideoTexture!==!0,ce=Pe.__version===void 0||ie===!0,ue=G.dataReady,Me=R(v,le);if(v.isDepthTexture)Ce=x(v.format===$i,v.type),ce&&(D?t.texStorage2D(i.TEXTURE_2D,1,Ce,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ce,le.width,le.height,0,_e,Fe,null));else if(v.isDataTexture)if(ze.length>0){D&&ce&&t.texStorage2D(i.TEXTURE_2D,Me,Ce,ze[0].width,ze[0].height);for(let ae=0,Q=ze.length;ae<Q;ae++)me=ze[ae],D?ue&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,me.width,me.height,_e,Fe,me.data):t.texImage2D(i.TEXTURE_2D,ae,Ce,me.width,me.height,0,_e,Fe,me.data);v.generateMipmaps=!1}else D?(ce&&t.texStorage2D(i.TEXTURE_2D,Me,Ce,le.width,le.height),ue&&je(v,le,_e,Fe)):t.texImage2D(i.TEXTURE_2D,0,Ce,le.width,le.height,0,_e,Fe,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ce,ze[0].width,ze[0].height,le.depth);for(let ae=0,Q=ze.length;ae<Q;ae++)if(me=ze[ae],v.format!==nn)if(_e!==null)if(D){if(ue)if(v.layerUpdates.size>0){const be=Bo(me.width,me.height,v.format,v.type);for(const Be of v.layerUpdates){const dt=me.data.subarray(Be*be/me.data.BYTES_PER_ELEMENT,(Be+1)*be/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Be,me.width,me.height,1,_e,dt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,me.width,me.height,le.depth,_e,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Ce,me.width,me.height,le.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,me.width,me.height,le.depth,_e,Fe,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Ce,me.width,me.height,le.depth,0,_e,Fe,me.data)}else{D&&ce&&t.texStorage2D(i.TEXTURE_2D,Me,Ce,ze[0].width,ze[0].height);for(let ae=0,Q=ze.length;ae<Q;ae++)me=ze[ae],v.format!==nn?_e!==null?D?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,me.width,me.height,_e,me.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Ce,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ue&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,me.width,me.height,_e,Fe,me.data):t.texImage2D(i.TEXTURE_2D,ae,Ce,me.width,me.height,0,_e,Fe,me.data)}else if(v.isDataArrayTexture)if(D){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ce,le.width,le.height,le.depth),ue)if(v.layerUpdates.size>0){const ae=Bo(le.width,le.height,v.format,v.type);for(const Q of v.layerUpdates){const be=le.data.subarray(Q*ae/le.data.BYTES_PER_ELEMENT,(Q+1)*ae/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,le.width,le.height,1,_e,Fe,be)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,_e,Fe,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,le.width,le.height,le.depth,0,_e,Fe,le.data);else if(v.isData3DTexture)D?(ce&&t.texStorage3D(i.TEXTURE_3D,Me,Ce,le.width,le.height,le.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,_e,Fe,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,le.width,le.height,le.depth,0,_e,Fe,le.data);else if(v.isFramebufferTexture){if(ce)if(D)t.texStorage2D(i.TEXTURE_2D,Me,Ce,le.width,le.height);else{let ae=le.width,Q=le.height;for(let be=0;be<Me;be++)t.texImage2D(i.TEXTURE_2D,be,Ce,ae,Q,0,_e,Fe,null),ae>>=1,Q>>=1}}else if(ze.length>0){if(D&&ce){const ae=ke(ze[0]);t.texStorage2D(i.TEXTURE_2D,Me,Ce,ae.width,ae.height)}for(let ae=0,Q=ze.length;ae<Q;ae++)me=ze[ae],D?ue&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,_e,Fe,me):t.texImage2D(i.TEXTURE_2D,ae,Ce,_e,Fe,me);v.generateMipmaps=!1}else if(D){if(ce){const ae=ke(le);t.texStorage2D(i.TEXTURE_2D,Me,Ce,ae.width,ae.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Fe,le)}else t.texImage2D(i.TEXTURE_2D,0,Ce,_e,Fe,le);m(v)&&p(W),Pe.__version=G.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ne(b,v,O){if(v.image.length!==6)return;const W=tt(b,v),ie=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);const G=n.get(ie);if(ie.version!==G.__version||W===!0){t.activeTexture(i.TEXTURE0+O);const Pe=et.getPrimaries(et.workingColorSpace),he=v.colorSpace===Pn?null:et.getPrimaries(v.colorSpace),Ae=v.colorSpace===Pn||Pe===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Re=v.isCompressedTexture||v.image[0].isCompressedTexture,le=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let Q=0;Q<6;Q++)!Re&&!le?_e[Q]=_(v.image[Q],!0,s.maxCubemapSize):_e[Q]=le?v.image[Q].image:v.image[Q],_e[Q]=Xe(v,_e[Q]);const Fe=_e[0],Ce=r.convert(v.format,v.colorSpace),me=r.convert(v.type),ze=w(v.internalFormat,Ce,me,v.colorSpace),D=v.isVideoTexture!==!0,ce=G.__version===void 0||W===!0,ue=ie.dataReady;let Me=R(v,Fe);Ve(i.TEXTURE_CUBE_MAP,v);let ae;if(Re){D&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,ze,Fe.width,Fe.height);for(let Q=0;Q<6;Q++){ae=_e[Q].mipmaps;for(let be=0;be<ae.length;be++){const Be=ae[be];v.format!==nn?Ce!==null?D?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,Be.width,Be.height,Ce,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,ze,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,Be.width,Be.height,Ce,me,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,ze,Be.width,Be.height,0,Ce,me,Be.data)}}}else{if(ae=v.mipmaps,D&&ce){ae.length>0&&Me++;const Q=ke(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,ze,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(le){D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_e[Q].width,_e[Q].height,Ce,me,_e[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,_e[Q].width,_e[Q].height,0,Ce,me,_e[Q].data);for(let be=0;be<ae.length;be++){const dt=ae[be].image[Q].image;D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,dt.width,dt.height,Ce,me,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,ze,dt.width,dt.height,0,Ce,me,dt.data)}}else{D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,me,_e[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,Ce,me,_e[Q]);for(let be=0;be<ae.length;be++){const Be=ae[be];D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,Ce,me,Be.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,ze,Ce,me,Be.image[Q])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),G.__version=ie.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ye(b,v,O,W,ie,G){const Pe=r.convert(O.format,O.colorSpace),he=r.convert(O.type),Ae=w(O.internalFormat,Pe,he,O.colorSpace),Re=n.get(v),le=n.get(O);if(le.__renderTarget=v,!Re.__hasExternalTextures){const _e=Math.max(1,v.width>>G),Fe=Math.max(1,v.height>>G);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,G,Ae,_e,Fe,v.depth,0,Pe,he,null):t.texImage2D(ie,G,Ae,_e,Fe,0,Pe,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ee(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,ie,le.__webglTexture,0,Te(v)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,ie,le.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(b,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){const W=v.depthTexture,ie=W&&W.isDepthTexture?W.type:null,G=x(v.stencilBuffer,ie),Pe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=Te(v);ee(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,G,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,G,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,G,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,b)}else{const W=v.textures;for(let ie=0;ie<W.length;ie++){const G=W[ie],Pe=r.convert(G.format,G.colorSpace),he=r.convert(G.type),Ae=w(G.internalFormat,Pe,he,G.colorSpace),Re=Te(v);O&&ee(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Ae,v.width,v.height):ee(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,Ae,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);const ie=W.__webglTexture,G=Te(v);if(v.depthTexture.format===Yi)ee(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(v.depthTexture.format===$i)ee(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function $e(b){const v=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const W=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const ie=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",ie)};W.addEventListener("dispose",ie),v.__depthDisposeCallback=ie}v.__boundDepthTexture=W}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const W=b.texture.mipmaps;W&&W.length>0?we(v.__webglFramebuffer[0],b):we(v.__webglFramebuffer,b)}else if(O){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=i.createRenderbuffer(),Ne(v.__webglDepthbuffer[W],b,!1);else{const ie=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,G)}}else{const W=b.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ne(v.__webglDepthbuffer,b,!1);else{const ie=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(b,v,O){const W=n.get(b);v!==void 0&&ye(W.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&$e(b)}function M(b){const v=b.texture,O=n.get(b),W=n.get(v);b.addEventListener("dispose",P);const ie=b.textures,G=b.isWebGLCubeRenderTarget===!0,Pe=ie.length>1;if(Pe||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=v.version,a.memory.textures++),G){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let Ae=0;Ae<v.mipmaps.length;Ae++)O.__webglFramebuffer[he][Ae]=i.createFramebuffer()}else O.__webglFramebuffer[he]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)O.__webglFramebuffer[he]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let he=0,Ae=ie.length;he<Ae;he++){const Re=n.get(ie[he]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&ee(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<ie.length;he++){const Ae=ie[he];O.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const Re=r.convert(Ae.format,Ae.colorSpace),le=r.convert(Ae.type),_e=w(Ae.internalFormat,Re,le,Ae.colorSpace,b.isXRRenderTarget===!0),Fe=Te(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,_e,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,O.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)ye(O.__webglFramebuffer[he][Ae],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae);else ye(O.__webglFramebuffer[he],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let he=0,Ae=ie.length;he<Ae;he++){const Re=ie[he],le=n.get(Re);let _e=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(_e=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,le.__webglTexture),Ve(_e,Re),ye(O.__webglFramebuffer,b,Re,i.COLOR_ATTACHMENT0+he,_e,0),m(Re)&&p(_e)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(he=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,W.__webglTexture),Ve(he,v),v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)ye(O.__webglFramebuffer[Ae],b,v,i.COLOR_ATTACHMENT0,he,Ae);else ye(O.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,he,0);m(v)&&p(he),t.unbindTexture()}b.depthBuffer&&$e(b)}function K(b){const v=b.textures;for(let O=0,W=v.length;O<W;O++){const ie=v[O];if(m(ie)){const G=T(b),Pe=n.get(ie).__webglTexture;t.bindTexture(G,Pe),p(G),t.unbindTexture()}}}const J=[],j=[];function q(b){if(b.samples>0){if(ee(b)===!1){const v=b.textures,O=b.width,W=b.height;let ie=i.COLOR_BUFFER_BIT;const G=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(b),he=v.length>1;if(he)for(let Re=0;Re<v.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ae=b.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Re=0;Re<v.length;Re++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);const le=n.get(v[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,O,W,0,0,O,W,ie,i.NEAREST),l===!0&&(J.length=0,j.length=0,J.push(i.COLOR_ATTACHMENT0+Re),b.depthBuffer&&b.resolveDepthBuffer===!1&&(J.push(G),j.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Re=0;Re<v.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);const le=n.get(v[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Te(b){return Math.min(s.maxSamples,b.samples)}function ee(b){const v=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function de(b){const v=a.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function Xe(b,v){const O=b.colorSpace,W=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Ti&&O!==Pn&&(et.getTransfer(O)===rt?(W!==nn||ie!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function ke(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=te,this.setTextureCube=V,this.rebindTextures=yt,this.setupRenderTarget=M,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ee}function Lm(i,e){function t(n,s=Pn){let r;const a=et.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===Ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Al)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wl)return i.BYTE;if(n===Tl)return i.SHORT;if(n===Xi)return i.UNSIGNED_SHORT;if(n===Da)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===Ji)return i.HALF_FLOAT;if(n===Rl)return i.ALPHA;if(n===Cl)return i.RGB;if(n===nn)return i.RGBA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===Pl)return i.RED;if(n===Fa)return i.RED_INTEGER;if(n===Ll)return i.RG;if(n===Oa)return i.RG_INTEGER;if(n===Ba)return i.RGBA_INTEGER;if(n===Ds||n===Us||n===Ns||n===Fs)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ds)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ds)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qr||n===ea||n===ta||n===na)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ia||n===sa||n===ra)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ia||n===sa)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ra)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===aa||n===oa||n===la||n===ca||n===ha||n===da||n===ua||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===aa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===la)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ca)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ha)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===da)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ua)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ma)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ga)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_a)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===va)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ma||n===ya||n===Sa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ma)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ea||n===wa||n===Ta||n===ba)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ea)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Im=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dm=`
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

}`;class Um{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Xl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Un({vertexShader:Im,fragmentShader:Dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new se(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nm extends Ai{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Um,p={},T=t.getContextAttributes();let w=null,x=null;const R=[],C=[],P=new Le;let L=null;const S=new Xt;S.viewport=new lt;const E=new Xt;E.viewport=new lt;const I=[S,E],F=new jh;let H=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=R[Z];return ne===void 0&&(ne=new wr,R[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=R[Z];return ne===void 0&&(ne=new wr,R[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=R[Z];return ne===void 0&&(ne=new wr,R[Z]=ne),ne.getHandSpace()};function X(Z){const ne=C.indexOf(Z.inputSource);if(ne===-1)return;const ye=R[ne];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,c||a),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",te);for(let Z=0;Z<R.length;Z++){const ne=C[Z];ne!==null&&(C[Z]=null,R[Z].disconnect(ne))}H=null,$=null,m.reset();for(const Z in p)delete p[Z];e.setRenderTarget(w),d=null,h=null,f=null,s=null,x=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",te),T.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ne=null,we=null;T.depth&&(we=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=T.stencil?$i:Yi,Ne=T.stencil?qi:ei);const $e={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer($e),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new ti(h.textureWidth,h.textureHeight,{format:nn,type:hn,depthTexture:new Wl(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ye={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new ti(d.framebufferWidth,d.framebufferHeight,{format:nn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(Z){for(let ne=0;ne<Z.removed.length;ne++){const ye=Z.removed[ne],Ne=C.indexOf(ye);Ne>=0&&(C[Ne]=null,R[Ne].disconnect(ye))}for(let ne=0;ne<Z.added.length;ne++){const ye=Z.added[ne];let Ne=C.indexOf(ye);if(Ne===-1){for(let $e=0;$e<R.length;$e++)if($e>=C.length){C.push(ye),Ne=$e;break}else if(C[$e]===null){C[$e]=ye,Ne=$e;break}if(Ne===-1)break}const we=R[Ne];we&&we.connect(ye)}}const V=new A,fe=new A;function ve(Z,ne,ye){V.setFromMatrixPosition(ne.matrixWorld),fe.setFromMatrixPosition(ye.matrixWorld);const Ne=V.distanceTo(fe),we=ne.projectionMatrix.elements,$e=ye.projectionMatrix.elements,yt=we[14]/(we[10]-1),M=we[14]/(we[10]+1),K=(we[9]+1)/we[5],J=(we[9]-1)/we[5],j=(we[8]-1)/we[0],q=($e[8]+1)/$e[0],Te=yt*j,ee=yt*q,de=Ne/(-j+q),Xe=de*-j;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Xe),Z.translateZ(de),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),we[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const ke=yt+de,b=M+de,v=Te-Xe,O=ee+(Ne-Xe),W=K*M/b*ke,ie=J*M/b*ke;Z.projectionMatrix.makePerspective(v,O,W,ie,ke,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Se(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ne=Z.near,ye=Z.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),F.near=E.near=S.near=ne,F.far=E.far=S.far=ye,(H!==F.near||$!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),H=F.near,$=F.far),F.layers.mask=Z.layers.mask|6,S.layers.mask=F.layers.mask&3,E.layers.mask=F.layers.mask&5;const Ne=Z.parent,we=F.cameras;Se(F,Ne);for(let $e=0;$e<we.length;$e++)Se(we[$e],Ne);we.length===2?ve(F,S,E):F.projectionMatrix.copy(S.projectionMatrix),Ve(Z,F,Ne)};function Ve(Z,ne,ye){ye===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Aa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Z){return p[Z]};let tt=null;function Ze(Z,ne){if(u=ne.getViewerPose(c||a),g=ne,u!==null){const ye=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ne=!1;ye.length!==F.cameras.length&&(F.cameras.length=0,Ne=!0);for(let M=0;M<ye.length;M++){const K=ye[M];let J=null;if(d!==null)J=d.getViewport(K);else{const q=f.getViewSubImage(h,K);J=q.viewport,M===0&&(e.setRenderTargetTextures(x,q.colorTexture,q.depthStencilTexture),e.setRenderTarget(x))}let j=I[M];j===void 0&&(j=new Xt,j.layers.enable(M),j.viewport=new lt,I[M]=j),j.matrix.fromArray(K.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(K.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(J.x,J.y,J.width,J.height),M===0&&(F.matrix.copy(j.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ne===!0&&F.cameras.push(j)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const M=f.getDepthInformation(ye[0]);M&&M.isValid&&M.texture&&m.init(M,s.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let M=0;M<ye.length;M++){const K=ye[M].camera;if(K){let J=p[K];J||(J=new Xl,p[K]=J);const j=f.getCameraImage(K);J.sourceTexture=j}}}}for(let ye=0;ye<R.length;ye++){const Ne=C[ye],we=R[ye];Ne!==null&&we!==void 0&&we.update(Ne,ne,c||a)}tt&&tt(Z,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const je=new Zl;je.setAnimationLoop(Ze),this.setAnimationLoop=function(Z){tt=Z},this.dispose=function(){}}}const Xn=new rn,Fm=new ht;function Om(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,w,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),w=T.envMap,x=T.envMapRotation;w&&(m.envMap.value=w,Xn.copy(x),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),m.envMapRotation.value.setFromMatrix4(Fm.makeRotationFromEuler(Xn)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bm(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,w){const x=w.program;n.uniformBlockBinding(T,x)}function c(T,w){let x=s[T.id];x===void 0&&(g(T),x=u(T),s[T.id]=x,T.addEventListener("dispose",m));const R=w.program;n.updateUBOMapping(T,R);const C=e.render.frame;r[T.id]!==C&&(h(T),r[T.id]=C)}function u(T){const w=f();T.__bindingPointIndex=w;const x=i.createBuffer(),R=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,x),x}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const w=s[T.id],x=T.uniforms,R=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let C=0,P=x.length;C<P;C++){const L=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,E=L.length;S<E;S++){const I=L[S];if(d(I,C,S,R)===!0){const F=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let $=0;for(let X=0;X<H.length;X++){const Y=H[X],te=_(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,F+$,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,$),$+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,w,x,R){const C=T.value,P=w+"_"+x;if(R[P]===void 0)return typeof C=="number"||typeof C=="boolean"?R[P]=C:R[P]=C.clone(),!0;{const L=R[P];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return R[P]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(T){const w=T.uniforms;let x=0;const R=16;for(let P=0,L=w.length;P<L;P++){const S=Array.isArray(w[P])?w[P]:[w[P]];for(let E=0,I=S.length;E<I;E++){const F=S[E],H=Array.isArray(F.value)?F.value:[F.value];for(let $=0,X=H.length;$<X;$++){const Y=H[$],te=_(Y),V=x%R,fe=V%te.boundary,ve=V+fe;x+=fe,ve!==0&&R-ve<te.storage&&(x+=R-ve),F.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=te.storage}}}const C=x%R;return C>0&&(x+=R-C),T.__size=x,T.__cache={},this}function _(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function m(T){const w=T.target;w.removeEventListener("dispose",m);const x=a.indexOf(w.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class km{constructor(e={}){const{canvas:t=Qc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=At;let C=0,P=0,L=null,S=-1,E=null;const I=new lt,F=new lt;let H=null;const $=new qe(0);let X=0,Y=t.width,te=t.height,V=1,fe=null,ve=null;const Se=new lt(0,0,Y,te),Ve=new lt(0,0,Y,te);let tt=!1;const Ze=new Ha;let je=!1,Z=!1;const ne=new ht,ye=new A,Ne=new lt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function yt(){return L===null?V:1}let M=n;function K(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ia}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ae,!1),M===null){const U="webgl2";if(M=K(U,y),M===null)throw K(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let J,j,q,Te,ee,de,Xe,ke,b,v,O,W,ie,G,Pe,he,Ae,Re,le,_e,Fe,Ce,me,ze;function D(){J=new Kf(M),J.init(),Ce=new Lm(M,J),j=new Vf(M,J,e,Ce),q=new Cm(M,J),j.reversedDepthBuffer&&h&&q.buffers.depth.setReversed(!0),Te=new jf(M),ee=new gm,de=new Pm(M,J,q,ee,j,Ce,Te),Xe=new Wf(x),ke=new $f(x),b=new id(M),me=new zf(M,b),v=new Jf(M,b,Te,me),O=new ep(M,v,b,Te),le=new Qf(M,j,de),he=new Gf(ee),W=new mm(x,Xe,ke,J,j,me,he),ie=new Om(x,ee),G=new vm,Pe=new wm(J),Re=new kf(x,Xe,ke,q,O,d,l),Ae=new Am(x,O,j),ze=new Bm(M,Te,j,q),_e=new Hf(M,J,Te),Fe=new Zf(M,J,Te),Te.programs=W.programs,x.capabilities=j,x.extensions=J,x.properties=ee,x.renderLists=G,x.shadowMap=Ae,x.state=q,x.info=Te}D();const ce=new Nm(x,M);this.xr=ce,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const y=J.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=J.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(Y,te,!1))},this.getSize=function(y){return y.set(Y,te)},this.setSize=function(y,U,k=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,te=U,t.width=Math.floor(y*V),t.height=Math.floor(U*V),k===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(Y*V,te*V).floor()},this.setDrawingBufferSize=function(y,U,k){Y=y,te=U,V=k,t.width=Math.floor(y*k),t.height=Math.floor(U*k),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(Se)},this.setViewport=function(y,U,k,z){y.isVector4?Se.set(y.x,y.y,y.z,y.w):Se.set(y,U,k,z),q.viewport(I.copy(Se).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Ve)},this.setScissor=function(y,U,k,z){y.isVector4?Ve.set(y.x,y.y,y.z,y.w):Ve.set(y,U,k,z),q.scissor(F.copy(Ve).multiplyScalar(V).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(y){q.setScissorTest(tt=y)},this.setOpaqueSort=function(y){fe=y},this.setTransparentSort=function(y){ve=y},this.getClearColor=function(y){return y.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,k=!0){let z=0;if(y){let N=!1;if(L!==null){const oe=L.texture.format;N=oe===Ba||oe===Oa||oe===Fa}if(N){const oe=L.texture.type,ge=oe===hn||oe===ei||oe===Xi||oe===qi||oe===Ua||oe===Na,Ee=Re.getClearColor(),xe=Re.getClearAlpha(),Ue=Ee.r,Oe=Ee.g,Ie=Ee.b;ge?(g[0]=Ue,g[1]=Oe,g[2]=Ie,g[3]=xe,M.clearBufferuiv(M.COLOR,0,g)):(_[0]=Ue,_[1]=Oe,_[2]=Ie,_[3]=xe,M.clearBufferiv(M.COLOR,0,_))}else z|=M.COLOR_BUFFER_BIT}U&&(z|=M.DEPTH_BUFFER_BIT),k&&(z|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Re.dispose(),G.dispose(),Pe.dispose(),ee.dispose(),Xe.dispose(),ke.dispose(),O.dispose(),me.dispose(),ze.dispose(),W.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",an),ce.removeEventListener("sessionend",Ja),Bn.stop()};function ue(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=Te.autoReset,U=Ae.enabled,k=Ae.autoUpdate,z=Ae.needsUpdate,N=Ae.type;D(),Te.autoReset=y,Ae.enabled=U,Ae.autoUpdate=k,Ae.needsUpdate=z,Ae.type=N}function ae(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Q(y){const U=y.target;U.removeEventListener("dispose",Q),be(U)}function be(y){Be(y),ee.remove(y)}function Be(y){const U=ee.get(y).programs;U!==void 0&&(U.forEach(function(k){W.releaseProgram(k)}),y.isShaderMaterial&&W.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,k,z,N,oe){U===null&&(U=we);const ge=N.isMesh&&N.matrixWorld.determinant()<0,Ee=oc(y,U,k,z,N);q.setMaterial(z,ge);let xe=k.index,Ue=1;if(z.wireframe===!0){if(xe=v.getWireframeAttribute(k),xe===void 0)return;Ue=2}const Oe=k.drawRange,Ie=k.attributes.position;let Ke=Oe.start*Ue,st=(Oe.start+Oe.count)*Ue;oe!==null&&(Ke=Math.max(Ke,oe.start*Ue),st=Math.min(st,(oe.start+oe.count)*Ue)),xe!==null?(Ke=Math.max(Ke,0),st=Math.min(st,xe.count)):Ie!=null&&(Ke=Math.max(Ke,0),st=Math.min(st,Ie.count));const gt=st-Ke;if(gt<0||gt===1/0)return;me.setup(N,z,Ee,k,xe);let ut,ct=_e;if(xe!==null&&(ut=b.get(xe),ct=Fe,ct.setIndex(ut)),N.isMesh)z.wireframe===!0?(q.setLineWidth(z.wireframeLinewidth*yt()),ct.setMode(M.LINES)):ct.setMode(M.TRIANGLES);else if(N.isLine){let De=z.linewidth;De===void 0&&(De=1),q.setLineWidth(De*yt()),N.isLineSegments?ct.setMode(M.LINES):N.isLineLoop?ct.setMode(M.LINE_LOOP):ct.setMode(M.LINE_STRIP)}else N.isPoints?ct.setMode(M.POINTS):N.isSprite&&ct.setMode(M.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ki("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))ct.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const De=N._multiDrawStarts,pt=N._multiDrawCounts,Qe=N._multiDrawCount,zt=xe?b.get(xe).bytesPerElement:1,ii=ee.get(z).currentProgram.getUniforms();for(let Ht=0;Ht<Qe;Ht++)ii.setValue(M,"_gl_DrawID",Ht),ct.render(De[Ht]/zt,pt[Ht])}else if(N.isInstancedMesh)ct.renderInstances(Ke,gt,N.count);else if(k.isInstancedBufferGeometry){const De=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,pt=Math.min(k.instanceCount,De);ct.renderInstances(Ke,gt,pt)}else ct.render(Ke,gt)};function dt(y,U,k){y.transparent===!0&&y.side===Ut&&y.forceSinglePass===!1?(y.side=kt,y.needsUpdate=!0,rs(y,U,k),y.side=Dn,y.needsUpdate=!0,rs(y,U,k),y.side=Ut):rs(y,U,k)}this.compile=function(y,U,k=null){k===null&&(k=y),p=Pe.get(k),p.init(U),w.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),y!==k&&y.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const z=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const oe=N.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){const Ee=oe[ge];dt(Ee,k,N),z.add(Ee)}else dt(oe,k,N),z.add(oe)}),p=w.pop(),z},this.compileAsync=function(y,U,k=null){const z=this.compile(y,U,k);return new Promise(N=>{function oe(){if(z.forEach(function(ge){ee.get(ge).currentProgram.isReady()&&z.delete(ge)}),z.size===0){N(y);return}setTimeout(oe,10)}J.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let nt=null;function dn(y){nt&&nt(y)}function an(){Bn.stop()}function Ja(){Bn.start()}const Bn=new Zl;Bn.setAnimationLoop(dn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(y){nt=y,ce.setAnimationLoop(y),y===null?Bn.stop():Bn.start()},ce.addEventListener("sessionstart",an),ce.addEventListener("sessionend",Ja),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,U,L),p=Pe.get(y,w.length),p.init(U),w.push(p),ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ze.setFromProjectionMatrix(ne,cn,U.reversedDepth),Z=this.localClippingEnabled,je=he.init(this.clippingPlanes,Z),m=G.get(y,T.length),m.init(),T.push(m),ce.enabled===!0&&ce.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&er(oe,U,-1/0,x.sortObjects)}er(y,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(fe,ve),$e=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,$e&&Re.addToRenderList(m,y),this.info.render.frame++,je===!0&&he.beginShadows();const k=p.state.shadowsArray;Ae.render(k,y,U),je===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const oe=U.cameras;if(N.length>0)for(let ge=0,Ee=oe.length;ge<Ee;ge++){const xe=oe[ge];ja(z,N,y,xe)}$e&&Re.render(y);for(let ge=0,Ee=oe.length;ge<Ee;ge++){const xe=oe[ge];Za(m,y,xe,xe.viewport)}}else N.length>0&&ja(z,N,y,U),$e&&Re.render(y),Za(m,y,U);L!==null&&P===0&&(de.updateMultisampleRenderTarget(L),de.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(x,y,U),me.resetDefaultState(),S=-1,E=null,w.pop(),w.length>0?(p=w[w.length-1],je===!0&&he.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function er(y,U,k,z){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ze.intersectsSprite(y)){z&&Ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ne);const ge=O.update(y),Ee=y.material;Ee.visible&&m.push(y,ge,Ee,k,Ne.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ze.intersectsObject(y))){const ge=O.update(y),Ee=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ne.copy(y.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ne.copy(ge.boundingSphere.center)),Ne.applyMatrix4(y.matrixWorld).applyMatrix4(ne)),Array.isArray(Ee)){const xe=ge.groups;for(let Ue=0,Oe=xe.length;Ue<Oe;Ue++){const Ie=xe[Ue],Ke=Ee[Ie.materialIndex];Ke&&Ke.visible&&m.push(y,ge,Ke,k,Ne.z,Ie)}}else Ee.visible&&m.push(y,ge,Ee,k,Ne.z,null)}}const oe=y.children;for(let ge=0,Ee=oe.length;ge<Ee;ge++)er(oe[ge],U,k,z)}function Za(y,U,k,z){const N=y.opaque,oe=y.transmissive,ge=y.transparent;p.setupLightsView(k),je===!0&&he.setGlobalState(x.clippingPlanes,k),z&&q.viewport(I.copy(z)),N.length>0&&ss(N,U,k),oe.length>0&&ss(oe,U,k),ge.length>0&&ss(ge,U,k),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function ja(y,U,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new ti(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Ji:hn,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const oe=p.state.transmissionRenderTarget[z.id],ge=z.viewport||I;oe.setSize(ge.z*x.transmissionResolutionScale,ge.w*x.transmissionResolutionScale);const Ee=x.getRenderTarget(),xe=x.getActiveCubeFace(),Ue=x.getActiveMipmapLevel();x.setRenderTarget(oe),x.getClearColor($),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),$e&&Re.render(k);const Oe=x.toneMapping;x.toneMapping=In;const Ie=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),je===!0&&he.setGlobalState(x.clippingPlanes,z),ss(y,k,z),de.updateMultisampleRenderTarget(oe),de.updateRenderTargetMipmap(oe),J.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let st=0,gt=U.length;st<gt;st++){const ut=U[st],ct=ut.object,De=ut.geometry,pt=ut.material,Qe=ut.group;if(pt.side===Ut&&ct.layers.test(z.layers)){const zt=pt.side;pt.side=kt,pt.needsUpdate=!0,Qa(ct,k,z,De,pt,Qe),pt.side=zt,pt.needsUpdate=!0,Ke=!0}}Ke===!0&&(de.updateMultisampleRenderTarget(oe),de.updateRenderTargetMipmap(oe))}x.setRenderTarget(Ee,xe,Ue),x.setClearColor($,X),Ie!==void 0&&(z.viewport=Ie),x.toneMapping=Oe}function ss(y,U,k){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,oe=y.length;N<oe;N++){const ge=y[N],Ee=ge.object,xe=ge.geometry,Ue=ge.group;let Oe=ge.material;Oe.allowOverride===!0&&z!==null&&(Oe=z),Ee.layers.test(k.layers)&&Qa(Ee,U,k,xe,Oe,Ue)}}function Qa(y,U,k,z,N,oe){y.onBeforeRender(x,U,k,z,N,oe),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(x,U,k,z,y,oe),N.transparent===!0&&N.side===Ut&&N.forceSinglePass===!1?(N.side=kt,N.needsUpdate=!0,x.renderBufferDirect(k,U,z,N,y,oe),N.side=Dn,N.needsUpdate=!0,x.renderBufferDirect(k,U,z,N,y,oe),N.side=Ut):x.renderBufferDirect(k,U,z,N,y,oe),y.onAfterRender(x,U,k,z,N,oe)}function rs(y,U,k){U.isScene!==!0&&(U=we);const z=ee.get(y),N=p.state.lights,oe=p.state.shadowsArray,ge=N.state.version,Ee=W.getParameters(y,N.state,oe,U,k),xe=W.getProgramCacheKey(Ee);let Ue=z.programs;z.environment=y.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(y.isMeshStandardMaterial?ke:Xe).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Ue===void 0&&(y.addEventListener("dispose",Q),Ue=new Map,z.programs=Ue);let Oe=Ue.get(xe);if(Oe!==void 0){if(z.currentProgram===Oe&&z.lightsStateVersion===ge)return to(y,Ee),Oe}else Ee.uniforms=W.getUniforms(y),y.onBeforeCompile(Ee,x),Oe=W.acquireProgram(Ee,xe),Ue.set(xe,Oe),z.uniforms=Ee.uniforms;const Ie=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ie.clippingPlanes=he.uniform),to(y,Ee),z.needsLights=cc(y),z.lightsStateVersion=ge,z.needsLights&&(Ie.ambientLightColor.value=N.state.ambient,Ie.lightProbe.value=N.state.probe,Ie.directionalLights.value=N.state.directional,Ie.directionalLightShadows.value=N.state.directionalShadow,Ie.spotLights.value=N.state.spot,Ie.spotLightShadows.value=N.state.spotShadow,Ie.rectAreaLights.value=N.state.rectArea,Ie.ltc_1.value=N.state.rectAreaLTC1,Ie.ltc_2.value=N.state.rectAreaLTC2,Ie.pointLights.value=N.state.point,Ie.pointLightShadows.value=N.state.pointShadow,Ie.hemisphereLights.value=N.state.hemi,Ie.directionalShadowMap.value=N.state.directionalShadowMap,Ie.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ie.spotShadowMap.value=N.state.spotShadowMap,Ie.spotLightMatrix.value=N.state.spotLightMatrix,Ie.spotLightMap.value=N.state.spotLightMap,Ie.pointShadowMap.value=N.state.pointShadowMap,Ie.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Oe,z.uniformsList=null,Oe}function eo(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=ks.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function to(y,U){const k=ee.get(y);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function oc(y,U,k,z,N){U.isScene!==!0&&(U=we),de.resetTextureUnits();const oe=U.fog,ge=z.isMeshStandardMaterial?U.environment:null,Ee=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ti,xe=(z.isMeshStandardMaterial?ke:Xe).get(z.envMap||ge),Ue=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Oe=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ie=!!k.morphAttributes.position,Ke=!!k.morphAttributes.normal,st=!!k.morphAttributes.color;let gt=In;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(gt=x.toneMapping);const ut=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ct=ut!==void 0?ut.length:0,De=ee.get(z),pt=p.state.lights;if(je===!0&&(Z===!0||y!==E)){const Lt=y===E&&z.id===S;he.setState(z,y,Lt)}let Qe=!1;z.version===De.__version?(De.needsLights&&De.lightsStateVersion!==pt.state.version||De.outputColorSpace!==Ee||N.isBatchedMesh&&De.batching===!1||!N.isBatchedMesh&&De.batching===!0||N.isBatchedMesh&&De.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&De.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&De.instancing===!1||!N.isInstancedMesh&&De.instancing===!0||N.isSkinnedMesh&&De.skinning===!1||!N.isSkinnedMesh&&De.skinning===!0||N.isInstancedMesh&&De.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&De.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&De.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&De.instancingMorph===!1&&N.morphTexture!==null||De.envMap!==xe||z.fog===!0&&De.fog!==oe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==he.numPlanes||De.numIntersection!==he.numIntersection)||De.vertexAlphas!==Ue||De.vertexTangents!==Oe||De.morphTargets!==Ie||De.morphNormals!==Ke||De.morphColors!==st||De.toneMapping!==gt||De.morphTargetsCount!==ct)&&(Qe=!0):(Qe=!0,De.__version=z.version);let zt=De.currentProgram;Qe===!0&&(zt=rs(z,U,N));let ii=!1,Ht=!1,Pi=!1;const mt=zt.getUniforms(),Yt=De.uniforms;if(q.useProgram(zt.program)&&(ii=!0,Ht=!0,Pi=!0),z.id!==S&&(S=z.id,Ht=!0),ii||E!==y){q.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),mt.setValue(M,"projectionMatrix",y.projectionMatrix),mt.setValue(M,"viewMatrix",y.matrixWorldInverse);const Ft=mt.map.cameraPosition;Ft!==void 0&&Ft.setValue(M,ye.setFromMatrixPosition(y.matrixWorld)),j.logarithmicDepthBuffer&&mt.setValue(M,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&mt.setValue(M,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,Ht=!0,Pi=!0)}if(N.isSkinnedMesh){mt.setOptional(M,N,"bindMatrix"),mt.setOptional(M,N,"bindMatrixInverse");const Lt=N.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),mt.setValue(M,"boneTexture",Lt.boneTexture,de))}N.isBatchedMesh&&(mt.setOptional(M,N,"batchingTexture"),mt.setValue(M,"batchingTexture",N._matricesTexture,de),mt.setOptional(M,N,"batchingIdTexture"),mt.setValue(M,"batchingIdTexture",N._indirectTexture,de),mt.setOptional(M,N,"batchingColorTexture"),N._colorsTexture!==null&&mt.setValue(M,"batchingColorTexture",N._colorsTexture,de));const $t=k.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&le.update(N,k,zt),(Ht||De.receiveShadow!==N.receiveShadow)&&(De.receiveShadow=N.receiveShadow,mt.setValue(M,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Yt.envMap.value=xe,Yt.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Yt.envMapIntensity.value=U.environmentIntensity),Ht&&(mt.setValue(M,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&lc(Yt,Pi),oe&&z.fog===!0&&ie.refreshFogUniforms(Yt,oe),ie.refreshMaterialUniforms(Yt,z,V,te,p.state.transmissionRenderTarget[y.id]),ks.upload(M,eo(De),Yt,de)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ks.upload(M,eo(De),Yt,de),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&mt.setValue(M,"center",N.center),mt.setValue(M,"modelViewMatrix",N.modelViewMatrix),mt.setValue(M,"normalMatrix",N.normalMatrix),mt.setValue(M,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Lt=z.uniformsGroups;for(let Ft=0,tr=Lt.length;Ft<tr;Ft++){const kn=Lt[Ft];ze.update(kn,zt),ze.bind(kn,zt)}}return zt}function lc(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function cc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,U,k){const z=ee.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ee.get(y.texture).__webglTexture=U,ee.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const k=ee.get(y);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const hc=M.createFramebuffer();this.setRenderTarget=function(y,U=0,k=0){L=y,C=U,P=k;let z=!0,N=null,oe=!1,ge=!1;if(y){const xe=ee.get(y);if(xe.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(M.FRAMEBUFFER,null),z=!1;else if(xe.__webglFramebuffer===void 0)de.setupRenderTarget(y);else if(xe.__hasExternalTextures)de.rebindTextures(y,ee.get(y.texture).__webglTexture,ee.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ie=y.depthTexture;if(xe.__boundDepthTexture!==Ie){if(Ie!==null&&ee.has(Ie)&&(y.width!==Ie.image.width||y.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(y)}}const Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ge=!0);const Oe=ee.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?N=Oe[U][k]:N=Oe[U],oe=!0):y.samples>0&&de.useMultisampledRTT(y)===!1?N=ee.get(y).__webglMultisampledFramebuffer:Array.isArray(Oe)?N=Oe[k]:N=Oe,I.copy(y.viewport),F.copy(y.scissor),H=y.scissorTest}else I.copy(Se).multiplyScalar(V).floor(),F.copy(Ve).multiplyScalar(V).floor(),H=tt;if(k!==0&&(N=hc),q.bindFramebuffer(M.FRAMEBUFFER,N)&&z&&q.drawBuffers(y,N),q.viewport(I),q.scissor(F),q.setScissorTest(H),oe){const xe=ee.get(y.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,k)}else if(ge){const xe=U;for(let Ue=0;Ue<y.textures.length;Ue++){const Oe=ee.get(y.textures[Ue]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+Ue,Oe.__webglTexture,k,xe)}}else if(y!==null&&k!==0){const xe=ee.get(y.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,xe.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(y,U,k,z,N,oe,ge,Ee=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ee.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){q.bindFramebuffer(M.FRAMEBUFFER,xe);try{const Ue=y.textures[Ee],Oe=Ue.format,Ie=Ue.type;if(!j.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-z&&k>=0&&k<=y.height-N&&(y.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Ee),M.readPixels(U,k,z,N,Ce.convert(Oe),Ce.convert(Ie),oe))}finally{const Ue=L!==null?ee.get(L).__webglFramebuffer:null;q.bindFramebuffer(M.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(y,U,k,z,N,oe,ge,Ee=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ee.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe)if(U>=0&&U<=y.width-z&&k>=0&&k<=y.height-N){q.bindFramebuffer(M.FRAMEBUFFER,xe);const Ue=y.textures[Ee],Oe=Ue.format,Ie=Ue.type;if(!j.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Ke),M.bufferData(M.PIXEL_PACK_BUFFER,oe.byteLength,M.STREAM_READ),y.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Ee),M.readPixels(U,k,z,N,Ce.convert(Oe),Ce.convert(Ie),0);const st=L!==null?ee.get(L).__webglFramebuffer:null;q.bindFramebuffer(M.FRAMEBUFFER,st);const gt=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await eh(M,gt,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Ke),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,oe),M.deleteBuffer(Ke),M.deleteSync(gt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,k=0){const z=Math.pow(2,-k),N=Math.floor(y.image.width*z),oe=Math.floor(y.image.height*z),ge=U!==null?U.x:0,Ee=U!==null?U.y:0;de.setTexture2D(y,0),M.copyTexSubImage2D(M.TEXTURE_2D,k,0,0,ge,Ee,N,oe),q.unbindTexture()};const dc=M.createFramebuffer(),uc=M.createFramebuffer();this.copyTextureToTexture=function(y,U,k=null,z=null,N=0,oe=null){oe===null&&(N!==0?(Ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=N,N=0):oe=0);let ge,Ee,xe,Ue,Oe,Ie,Ke,st,gt;const ut=y.isCompressedTexture?y.mipmaps[oe]:y.image;if(k!==null)ge=k.max.x-k.min.x,Ee=k.max.y-k.min.y,xe=k.isBox3?k.max.z-k.min.z:1,Ue=k.min.x,Oe=k.min.y,Ie=k.isBox3?k.min.z:0;else{const $t=Math.pow(2,-N);ge=Math.floor(ut.width*$t),Ee=Math.floor(ut.height*$t),y.isDataArrayTexture?xe=ut.depth:y.isData3DTexture?xe=Math.floor(ut.depth*$t):xe=1,Ue=0,Oe=0,Ie=0}z!==null?(Ke=z.x,st=z.y,gt=z.z):(Ke=0,st=0,gt=0);const ct=Ce.convert(U.format),De=Ce.convert(U.type);let pt;U.isData3DTexture?(de.setTexture3D(U,0),pt=M.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(de.setTexture2DArray(U,0),pt=M.TEXTURE_2D_ARRAY):(de.setTexture2D(U,0),pt=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,U.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,U.unpackAlignment);const Qe=M.getParameter(M.UNPACK_ROW_LENGTH),zt=M.getParameter(M.UNPACK_IMAGE_HEIGHT),ii=M.getParameter(M.UNPACK_SKIP_PIXELS),Ht=M.getParameter(M.UNPACK_SKIP_ROWS),Pi=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,ut.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,ut.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Ue),M.pixelStorei(M.UNPACK_SKIP_ROWS,Oe),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Ie);const mt=y.isDataArrayTexture||y.isData3DTexture,Yt=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const $t=ee.get(y),Lt=ee.get(U),Ft=ee.get($t.__renderTarget),tr=ee.get(Lt.__renderTarget);q.bindFramebuffer(M.READ_FRAMEBUFFER,Ft.__webglFramebuffer),q.bindFramebuffer(M.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let kn=0;kn<xe;kn++)mt&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,ee.get(y).__webglTexture,N,Ie+kn),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,ee.get(U).__webglTexture,oe,gt+kn)),M.blitFramebuffer(Ue,Oe,ge,Ee,Ke,st,ge,Ee,M.DEPTH_BUFFER_BIT,M.NEAREST);q.bindFramebuffer(M.READ_FRAMEBUFFER,null),q.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||ee.has(y)){const $t=ee.get(y),Lt=ee.get(U);q.bindFramebuffer(M.READ_FRAMEBUFFER,dc),q.bindFramebuffer(M.DRAW_FRAMEBUFFER,uc);for(let Ft=0;Ft<xe;Ft++)mt?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,$t.__webglTexture,N,Ie+Ft):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,$t.__webglTexture,N),Yt?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Lt.__webglTexture,oe,gt+Ft):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Lt.__webglTexture,oe),N!==0?M.blitFramebuffer(Ue,Oe,ge,Ee,Ke,st,ge,Ee,M.COLOR_BUFFER_BIT,M.NEAREST):Yt?M.copyTexSubImage3D(pt,oe,Ke,st,gt+Ft,Ue,Oe,ge,Ee):M.copyTexSubImage2D(pt,oe,Ke,st,Ue,Oe,ge,Ee);q.bindFramebuffer(M.READ_FRAMEBUFFER,null),q.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else Yt?y.isDataTexture||y.isData3DTexture?M.texSubImage3D(pt,oe,Ke,st,gt,ge,Ee,xe,ct,De,ut.data):U.isCompressedArrayTexture?M.compressedTexSubImage3D(pt,oe,Ke,st,gt,ge,Ee,xe,ct,ut.data):M.texSubImage3D(pt,oe,Ke,st,gt,ge,Ee,xe,ct,De,ut):y.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,oe,Ke,st,ge,Ee,ct,De,ut.data):y.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,oe,Ke,st,ut.width,ut.height,ct,ut.data):M.texSubImage2D(M.TEXTURE_2D,oe,Ke,st,ge,Ee,ct,De,ut);M.pixelStorei(M.UNPACK_ROW_LENGTH,Qe),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,zt),M.pixelStorei(M.UNPACK_SKIP_PIXELS,ii),M.pixelStorei(M.UNPACK_SKIP_ROWS,Ht),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Pi),oe===0&&U.generateMipmaps&&M.generateMipmap(pt),q.unbindTexture()},this.initRenderTarget=function(y){ee.get(y).__webglFramebuffer===void 0&&de.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?de.setTextureCube(y,0):y.isData3DTexture?de.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?de.setTexture2DArray(y,0):de.setTexture2D(y,0),q.unbindTexture()},this.resetState=function(){C=0,P=0,L=null,q.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}class zm{constructor(){this.enabled=!0,this.context=null,this.master=null,this.noiseBuffer=null}init(){if(this.context){this.context.state==="suspended"&&this.context.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.context=new e,this.master=this.context.createGain(),this.master.gain.value=.28,this.master.connect(this.context.destination);const t=this.context.sampleRate;this.noiseBuffer=this.context.createBuffer(1,t,this.context.sampleRate);const n=this.noiseBuffer.getChannelData(0);for(let s=0;s<t;s++)n[s]=Math.random()*2-1}toggle(){return this.enabled=!this.enabled,this.enabled&&this.init(),this.enabled}tone(e,t,n=.15,s="sine",r=e,a=0){if(!this.enabled||(this.init(),!this.context))return;const o=this.context.currentTime+a,l=this.context.createOscillator(),c=this.context.createGain();l.type=s,l.frequency.setValueAtTime(e,o),l.frequency.exponentialRampToValueAtTime(Math.max(20,r),o+t),c.gain.setValueAtTime(n,o),c.gain.exponentialRampToValueAtTime(1e-4,o+t),l.connect(c),c.connect(this.master),l.start(o),l.stop(o+t)}noise(e,t=.15,n=1200,s=0){if(!this.enabled||(this.init(),!this.context))return;const r=this.context.currentTime+s,a=this.context.createBufferSource(),o=this.context.createBiquadFilter(),l=this.context.createGain();a.buffer=this.noiseBuffer,o.type="lowpass",o.frequency.value=n,l.gain.setValueAtTime(t,r),l.gain.exponentialRampToValueAtTime(1e-4,r+e),a.connect(o),o.connect(l),l.connect(this.master),a.start(r),a.stop(r+e)}shot(e){e==="shotgun"?(this.noise(.22,.42,950),this.tone(105,.18,.25,"sawtooth",42)):e==="rail"?(this.tone(1250,.28,.18,"sawtooth",85),this.tone(90,.35,.22,"sine",35),this.noise(.16,.2,3e3)):e==="arc"?(this.tone(920,.12,.13,"square",230),this.tone(1560,.09,.08,"sine",440),this.noise(.09,.12,4200)):e==="rocket"?(this.noise(.2,.32,1300),this.tone(150,.32,.2,"sawtooth",55),this.tone(420,.12,.1,"sine",180,.05)):(this.noise(.075,.18,1900),this.tone(190,.07,.12,"square",70))}hit(){this.tone(1250,.035,.055,"square",800)}kill(){this.tone(320,.1,.08,"sine",680),this.tone(740,.12,.06,"sine",980,.05)}enemyShot(){this.tone(260,.14,.07,"sawtooth",90)}damage(){this.noise(.16,.2,450),this.tone(70,.2,.12,"sawtooth",35)}pickup(){this.tone(540,.08,.09,"sine",860),this.tone(850,.13,.07,"sine",1200,.07)}reload(){this.noise(.035,.08,2300),this.tone(430,.04,.04,"square",330,.12)}empty(){this.tone(180,.035,.05,"square",150)}ui(){this.tone(620,.04,.035,"sine",760)}dash(){this.noise(.2,.13,1400),this.tone(160,.2,.12,"sine",640)}pulse(){this.tone(85,.65,.22,"sine",30),this.tone(340,.35,.12,"sawtooth",70)}explosion(){this.noise(.48,.4,600),this.tone(90,.4,.2,"sine",25)}wave(){[220,330,440].forEach((e,t)=>this.tone(e,.22,.07,"sine",e*1.02,t*.1))}upgrade(){[380,570,760].forEach((e,t)=>this.tone(e,.25,.08,"triangle",e*1.1,t*.08))}gameOver(){this.tone(210,.8,.15,"sawtooth",45)}victory(){[262,330,392,523].forEach((e,t)=>this.tone(e,.5,.09,"triangle",e,t*.13))}overdrive(){[330,440,660,880].forEach((e,t)=>this.tone(e,.45,.1,"sawtooth",e*1.35,t*.06)),this.tone(70,.6,.18,"sine",40)}achievement(){[660,880,1320].forEach((e,t)=>this.tone(e,.15,.07,"triangle",e,t*.07))}warning(){this.tone(780,.12,.09,"square",520),this.tone(780,.12,.09,"square",520,.2)}}const B=(i,e,t)=>new On(i,e,t),We=(i,e,t,n=10)=>new es(i,e,t,n),Dt=(i,e=10,t=8)=>new ns(i,e,t),Cn=(i,e,t=8)=>new ts(i,e,t),at=(i,e,t=6,n=20)=>new is(i,e,t,n),vi=(i,e=0)=>new Nn(i,e),Is=(i,e=0)=>new Ga(i,e),Hm=(i=[0,0,0],e=[0,0,0],t=[1,1,1])=>new ht().compose(new A(...i),new Ri().setFromEuler(new rn(...e)),new A(...t));function Vm(i,e){const t=i.index?i.toNonIndexed():i.clone();e&&t.applyMatrix4(e);for(const n of Object.keys(t.attributes))n!=="position"&&n!=="normal"&&t.deleteAttribute(n);return t.attributes.normal||t.computeVertexNormals(),t}function cl(i){let e=0;for(const a of i)e+=a.attributes.position.count;const t=new Float32Array(e*3),n=new Float32Array(e*3);let s=0;for(const a of i)t.set(a.attributes.position.array,s*3),n.set(a.attributes.normal.array,s*3),s+=a.attributes.position.count,a.dispose();const r=new vt;return r.setAttribute("position",new qt(t,3)),r.setAttribute("normal",new qt(n,3)),r.computeBoundingSphere(),r}class Gi{constructor(){this.map=new Map}add(e,t,n,s,r){const a=Vm(t,Hm(n,s,r));return this.map.has(e)||this.map.set(e,[]),this.map.get(e).push(a),t.dispose(),this}build(e,t={}){const n=new ft;for(const[s,r]of this.map){const a=new se(cl(r),e[s]);a.castShadow=!!t.castShadow,a.receiveShadow=!!t.receiveShadow,n.add(a)}return n}meshes(e,t={}){const n=[];for(const[s,r]of this.map){const a=new se(cl(r),e[s]);a.castShadow=!!t.castShadow,n.push({key:s,mesh:a})}return n}}const nc=[{metal:3096894,dark:857624,accent:7246217,glow:5568466},{metal:3944744,dark:1314829,accent:10123348,glow:16753485},{metal:2834254,dark:594198,accent:8103106,glow:6930431},{metal:2374979,dark:528917,accent:7780800,glow:8251647},{metal:3812384,dark:1314056,accent:12159570,glow:16742973},{metal:2373700,dark:529176,accent:8372182,glow:9431295}];function Gm(i){const e=nc[i],t=n=>new Wt({color:n,emissive:n,emissiveIntensity:.03,metalness:.72,roughness:.42});return{metal:t(e.metal),dark:t(e.dark),accent:t(e.accent),glow:new ot({color:e.glow,toneMapped:!1}),glass:new ot({color:e.glow,transparent:!0,opacity:.28,toneMapped:!1,side:Ut})}}function Wm(i,e){const t=i.add.bind(i);t("dark",B(.115,.28,.14),[0,-.205,.075],[-.2,0,0]),t("metal",B(.125,.055,.16),[0,-.325,.09]),t("accent",B(.018,.075,.02),[0,-.12,-.045]),t("dark",B(.012,.075,.012),[-.045,-.115,-.045]),t("dark",B(.012,.075,.012),[.045,-.115,-.045]),t("dark",B(.1,.012,.012),[0,-.15,-.045]),t("glow",B(.008,.038,.008),[0,-.117,-.049]),t("metal",B(.075,.075,.34),[0,-.045,.28]),t("metal",B(.075,.075,.34),[0,-.205,.28]),t("metal",B(.075,.18,.06),[0,-.125,.44]),t("dark",B(.13,.19,.055),[0,-.12,.47]),t("accent",B(.11,.02,.2),[0,-.02,.3]);for(const n of[-1,1]){t("accent",B(.012,.115,.24),[n*.098,.006,.03]);for(let s=0;s<3;s++)t("dark",We(.012,.012,.02,6),[n*.106,.03,-.04+s*.075],[0,0,Math.PI/2])}if(t("glow",B(.052,.012,.012),[0,.078,-.02]),e!==1){for(let n=0;n<9;n++)t("dark",B(.075,.017,.026),[0,.115,-.44+n*.062]);t("metal",B(.055,.02,.58),[0,.1,-.2])}}function Xm(i){const e=Gm(i),t=new Gi,n=(m,p,T,w,x)=>t.add(m,p,T,w,x);if(i===0){n("metal",B(.19,.185,.62),[0,0,-.1]),n("metal",B(.155,.055,.54),[0,.113,-.1]),n("dark",B(.205,.045,.2),[0,.145,-.02]),n("dark",B(.15,.09,.15),[.11,.01,-.16]),n("accent",B(.16,.055,.34),[0,.02,-.46]);for(let m=0;m<6;m++)n("dark",B(.165,.013,.022),[0,.052,-.6+m*.052]),n("glow",B(.012,.055,.3),[.098,.012,-.46]);n("glow",B(.014,.02,.34),[-.098,.045,-.44]),n("metal",We(.036,.036,.44,10),[0,.012,-.84],[Math.PI/2,0,0]),n("dark",We(.055,.045,.16,10),[0,.012,-1.08],[Math.PI/2,0,0]);for(let m=0;m<4;m++)n("dark",B(.014,.07,.09),[Math.cos(m/4*Math.PI*2)*.05,.012+Math.sin(m/4*Math.PI*2)*.05,-1.1]);n("accent",B(.03,.075,.03),[0,.15,-.72]),n("glow",B(.008,.025,.008),[0,.19,-.72]),n("dark",B(.095,.03,.15),[0,.15,-.06]),n("metal",B(.085,.085,.022),[0,.2,-.12]),n("metal",B(.085,.085,.022),[0,.2,.01]),n("metal",B(.012,.09,.14),[-.044,.2,-.055]),n("metal",B(.012,.09,.14),[.044,.2,-.055]),n("glass",B(.07,.07,.006),[0,.2,-.055]),n("glow",B(.035,.004,.004),[0,.2,-.058]),n("glow",B(.004,.035,.004),[0,.2,-.058]),n("dark",We(.032,.032,.12,8),[.12,-.045,-.42],[Math.PI/2,0,0]),n("glass",We(.028,.028,.006,8),[.12,-.045,-.485],[Math.PI/2,0,0])}else if(i===1){n("metal",B(.23,.205,.66),[0,0,-.08]),n("accent",B(.24,.045,.4),[0,.12,-.16]),n("dark",B(.19,.075,.19),[.13,.02,-.1]);for(const m of[-1,1])n("dark",We(.048,.048,.72,10),[m*.058,.025,-.73],[Math.PI/2,0,0]),n("accent",We(.058,.058,.075,10),[m*.058,.025,-1.08],[Math.PI/2,0,0]),n("dark",We(.04,.04,.012,10),[m*.058,.025,-1.121],[Math.PI/2,0,0]),n("glow",B(.012,.02,.42),[m*.12,.055,-.36]);n("metal",We(.032,.032,.62,8),[0,-.085,-.65],[Math.PI/2,0,0]);for(let m=0;m<5;m++)n("glow",at(.036,.008,4,10),[0,-.085,-.9+m*.11],[0,Math.PI/2,0]);n("dark",B(.26,.09,.28),[0,-.02,-.5]);for(let m=0;m<7;m++)n("dark",B(.265,.012,.018),[0,.035,-.62+m*.04]);n("metal",at(.075,.014,6,18),[0,.16,-.86]),n("glow",B(.01,.03,.01),[0,.16,-.86]),n("dark",B(.1,.045,.16),[0,.13,.02]),n("accent",B(.036,.012,.2),[0,.14,-.3])}else if(i===2){n("metal",B(.18,.2,.9),[0,0,-.2]),n("accent",B(.19,.045,.8),[0,.12,-.22]),n("dark",B(.2,.11,.3),[0,-.09,.02]);for(const m of[-1,1]){n("glow",B(.032,.075,.82),[m*.105,.02,-.44]),n("metal",B(.055,.09,.86),[m*.135,.02,-.44]);for(let p=0;p<5;p++)n("accent",at(.082,.014,5,12),[m*.105,.02,-.78+p*.17],[0,Math.PI/2,0]);n("dark",B(.075,.085,.2),[m*.13,-.09,.05]),n("glow",B(.045,.012,.16),[m*.13,-.04,.05])}n("dark",We(.035,.035,.72,10),[0,.015,-.98],[Math.PI/2,0,0]),n("accent",We(.062,.048,.19,10),[0,.015,-1.32],[Math.PI/2,0,0]),n("glow",We(.03,.03,.012,10),[0,.015,-1.42],[Math.PI/2,0,0]);for(let m=0;m<6;m++)n("dark",B(.2,.014,.025),[0,.155,-.62+m*.09]);n("dark",We(.06,.06,.46,12),[0,.195,-.16],[Math.PI/2,0,0]),n("accent",We(.072,.072,.055,12),[0,.195,-.4],[Math.PI/2,0,0]),n("accent",We(.072,.072,.055,12),[0,.195,.08],[Math.PI/2,0,0]),n("glass",We(.062,.062,.008,12),[0,.195,-.43],[Math.PI/2,0,0]),n("glow",at(.055,.007,4,14),[0,.195,-.435]),n("metal",B(.045,.06,.055),[0,.15,-.28]),n("metal",B(.045,.06,.055),[0,.15,-.02]),n("glow",B(.02,.012,.02),[0,.255,0])}else if(i===3){n("metal",B(.205,.2,.62),[0,0,-.12]),n("accent",B(.215,.045,.5),[0,.12,-.14]),n("dark",B(.16,.11,.24),[0,-.075,.02]);for(const m of[-1,1]){n("metal",B(.075,.13,.5),[m*.155,.03,-.34]),n("glow",B(.012,.075,.42),[m*.196,.03,-.34]);for(let p=0;p<4;p++)n("accent",B(.09,.02,.03),[m*.155,.1,-.52+p*.11])}n("dark",We(.058,.058,.5,10),[0,.015,-.72],[Math.PI/2,0,0]);for(let m=0;m<5;m++)n("glow",at(.085-m*.005,.016,6,16),[0,.015,-.56-m*.1],[0,Math.PI/2,0]),n("accent",at(.098,.012,5,12),[0,.015,-.56-m*.1],[0,Math.PI/2,0]);n("dark",We(.075,.06,.14,10),[0,.015,-1.13],[Math.PI/2,0,0]),n("glass",Dt(.062,12,10),[0,.015,-1.2]),n("glow",at(.105,.012,6,20),[0,.015,-1.21]),n("metal",at(.085,.018,6,18),[0,.175,-.18]),n("glow",at(.065,.006,4,16),[0,.175,-.18]),n("metal",B(.05,.075,.05),[0,.115,-.18]),n("glow",B(.014,.014,.014),[0,.175,-.18])}else if(i===4){n("metal",B(.24,.26,.52),[0,0,-.1]),n("dark",B(.28,.32,.34),[0,-.04,.06]),n("accent",B(.22,.05,.5),[0,.13,-.12]);for(let m=0;m<2;m++)for(let p=0;p<3;p++){const T=(p-1)*.072,w=m?-.062:.062;n("dark",We(.034,.034,.66,8),[T,w,-.64],[Math.PI/2,0,0]),n("accent",at(.036,.009,4,12),[T,w,-.34],[Math.PI/2,0,0]),n("glow",We(.024,.024,.02,8),[T,w,-.97],[Math.PI/2,0,0])}n("dark",B(.13,.13,.24),[0,.19,-.04]),n("glass",Dt(.055,10,8),[0,.19,-.2]),n("glow",at(.058,.008,4,14),[0,.19,-.21]),n("dark",B(.1,.22,.12),[0,-.24,.08]),n("accent",B(.15,.02,.2),[0,-.12,-.02]);for(let m=0;m<3;m++)n("dark",B(.012,.18,.04),[-.12+m*.12,-.02,-.28])}else{n("metal",B(.18,.2,.5),[0,0,-.12]),n("accent",B(.2,.045,.42),[0,.11,-.1]),n("dark",B(.155,.1,.22),[0,-.07,.02]),n("dark",We(.045,.05,.78,10),[0,.015,-.74],[Math.PI/2,0,0]),n("glass",new Nn(.085,0),[0,.015,-1.16]),n("glow",new Nn(.05,0),[0,.015,-1.16]),n("glow",at(.075,.01,4,16),[0,.015,-1.12],[Math.PI/2,0,0]),n("dark",We(.07,.07,.34,12),[.16,-.02,0],[0,0,Math.PI/2]),n("accent",We(.05,.05,.12,12),[.16,-.02,-.2],[0,0,Math.PI/2]),n("glow",We(.025,.025,.18,10),[.16,-.02,.06],[0,0,Math.PI/2]);for(let m=0;m<4;m++)n("metal",B(.01,.16,.05),[-.1+m*.066,0,-.34]);n("metal",B(.05,.07,.18),[0,.14,-.18]),n("glow",B(.014,.014,.014),[0,.14,-.18])}Wm(t,i);const s=new ft,r=t.build(e);s.add(r);const a=new ft,o=new se(B(.105,.24,.115),e.dark),l=new se(B(.115,.03,.12),e.accent);l.position.y=.12;const c=new se(B(.012,.14,.012),e.glow);c.position.set(.056,0,.06),a.add(o,l,c),a.position.set(0,-.19,i===1?-.16:-.03),i===1&&(a.visible=!1),s.add(a);const u=new se(B(.055,.04,.085),e.accent);u.position.set(.105,.035,-.16),s.add(u);const f=new ft,h=new se(Cn(.085,.26,7),new ot({color:nc[i].glow,transparent:!0,opacity:.9,toneMapped:!1,blending:tn,depthWrite:!1}));h.rotation.x=-Math.PI/2;const d=new se(at(.1,.018,5,14),new ot({color:16777215,transparent:!0,opacity:.8,toneMapped:!1,blending:tn,depthWrite:!1}));f.add(h,d);const g=i===5?-1.14:i===4?-1.02:i===2?-1.44:i===1?-1.14:i===3?-1.22:-1.12;f.position.set(0,.015,g-.1),f.visible=!1,s.add(f);const _=new ft;if(i===3){for(let m=0;m<3;m++){const p=new se(at(.12+m*.025,.01,5,18),e.glow);p.position.set(0,.015,-.55-m*.16),p.rotation.y=m*.5,_.add(p)}s.add(_)}return s.traverse(m=>{m.frustumCulled=!1,m.renderOrder=10}),{group:s,magazine:a,bolt:u,flash:f,coils:_,muzzleZ:g,materials:e}}function qm(i,e){const t=new Gi,n=(h,d,g,_,m)=>t.add(h,d,g,_,m),s={legs:[],rotors:[],shards:[],rings:[],turrets:[],core:null,wings:[]},r=[],a=[];let o=2.2,l=0;const c=(h,d,g,_)=>{const m=new se(h,d);return m.position.set(...g||[0,0,0]),m},u=(h,d,g,_)=>{const m=c(h,e.glow,d);return m.userData.critical=!0,r.push(m),a.push(m),m};if(i==="runner"){o=2.25,n("body",B(.76,.86,.5),[0,1.18,0]),n("accent",B(.62,.34,.535),[0,1.42,-.02]),n("dark",B(.5,.08,.55),[0,1.24,-.01]),n("dark",B(.44,.3,.42),[0,.78,0]),n("accent",B(.16,.16,.1),[0,1.06,-.28]);for(let h=0;h<3;h++)n("glow",B(.035,.13,.02),[-.09+h*.09,.82,-.23]);n("dark",We(.11,.13,.18,8),[0,1.7,0]),n("body",vi(.34,0),[0,1.92,0]),n("accent",B(.36,.11,.14),[0,1.88,-.28]),n("dark",B(.28,.09,.1),[0,2.03,-.24]),n("accent",Cn(.07,.26,5),[0,2.18,.06]);for(const h of[-1,1]){n("accent",B(.3,.24,.42),[h*.53,1.52,0]),n("dark",B(.19,.6,.21),[h*.57,1.12,0]),n("body",B(.14,.36,.16),[h*.57,.78,-.05]);for(let d=0;d<3;d++)n("glow",B(.04,.03,.1),[h*.57,1.32-d*.1,-.16]);n("accent",B(.22,.1,.3),[h*.26,.66,0]),n("dark",B(.1,.1,.1),[h*.26,.48,0])}for(let h=0;h<4;h++)n("accent",Cn(.075,.3,5),[0,1.65-h*.22,.28],[.5,0,0]);n("glow",B(.26,.02,.03),[0,1.55,.27]),u(Dt(.16,10,8),[0,1.92,-.3]);for(const h of[-1,1]){const d=new ft;d.position.set(h*.25,.56,0);const g=new se(B(.2,.5,.24),e.body);g.position.y=-.22;const _=new se(B(.16,.42,.2),e.dark);_.position.y=-.58;const m=new se(B(.24,.12,.38),e.accent);m.position.set(0,-.8,-.07);const p=new se(B(.19,.1,.25),e.glow);p.position.y=-.45,d.add(g,_,m,p),s.legs.push(d),a.push(d)}s.core=u(Dt(.12,10,8),[0,1.06,-.32])}else if(i==="drone"){o=2.6,l=.35,n("body",Dt(.56,14,10),[0,1.85,0]);for(let h=0;h<6;h++){const d=h/6*Math.PI*2;n("accent",B(.3,.28,.08),[Math.cos(d)*.52,1.85+Math.sin(d)*.35,-.3],[0,0,d])}n("dark",at(.6,.06,6,24),[0,1.85,0],[Math.PI/2,0,0]),n("dark",at(.62,.05,6,24),[0,1.85,0],[0,0,0]),n("glow",B(.5,.035,.05),[0,2.3,-.3]);for(const h of[-1,1])n("body",B(.72,.1,.3),[h*.82,1.85,0]),n("accent",B(.6,.045,.12),[h*.86,1.9,-.1]),n("dark",We(.055,.07,.5,8),[h*.9,1.62,-.28],[Math.PI/2,0,0]),n("glow",We(.035,.035,.02,8),[h*.9,1.62,-.54],[Math.PI/2,0,0]),n("dark",We(.09,.09,.22,8),[h*.45,1.35,.1]),n("glow",We(.06,.06,.02,8),[h*.45,1.23,.1]);n("dark",B(.3,.14,.22),[0,1.36,-.4]),u(vi(.31,0),[0,1.85,-.5]);for(const h of[-1,1]){const d=new ft;d.position.set(h*1.18,1.88,0);const g=new se(at(.34,.035,6,20),e.accent);g.rotation.x=Math.PI/2;const _=new se(B(.6,.025,.09),e.glow),m=new se(B(.09,.025,.6),e.glow);d.add(g,_,m),s.rotors.push(d),a.push(d)}}else if(i==="tank"){o=2.9,n("body",B(1.5,1.4,1.1),[0,1.28,0]),n("accent",B(1.24,.5,1.14),[0,1.72,-.02]),n("accent",B(1.1,.3,1.16),[0,.78,-.02]),n("dark",B(1.3,.09,1.14),[0,1.43,-.02]);for(let h=0;h<5;h++)n("glow",B(.09,.1,.03),[-.42+h*.21,1.02,-.58]);n("dark",B(.78,.52,.66),[0,2.18,0]),n("accent",B(.86,.14,.7),[0,2.44,0]),n("dark",B(.6,.12,.1),[0,2.2,-.38]);for(const h of[-1,1]){n("accent",B(.56,.55,.86),[h*1.02,1.56,0]),n("body",B(.44,.9,.7),[h*1.02,.95,0]),n("dark",We(.115,.15,1.2,8),[h*1.02,1.5,-.72],[Math.PI/2,0,0]),n("glow",We(.09,.09,.03,8),[h*1.02,1.5,-1.33],[Math.PI/2,0,0]),n("accent",B(.2,.42,.2),[h*.55,.32,0]),n("dark",B(.42,.18,.62),[h*.55,.12,-.08]),n("dark",B(.3,.55,.3),[h*.62,2,.42]);for(let d=0;d<3;d++)n("glow",B(.24,.03,.02),[h*.62,1.82+d*.14,.58]);n("body",B(.28,.28,.9),[h*.82,.7,0])}n("warning",B(.1,.06,.06),[0,2.5,-.36]),u(B(.5,.1,.08),[0,2.2,-.42]),s.core=u(Is(.2,0),[0,1.28,-.6])}else if(i==="phantom"){o=2.25,l=.25,n("body",vi(.52,0),[0,1.4,0]),n("accent",vi(.36,0),[0,1.4,.06],[0,Math.PI/4,0]),n("dark",B(.6,.06,.6),[0,1.4,0],[Math.PI/4,0,0]);for(const d of[-1,1])n("accent",B(.1,1.05,.3),[d*.52,1.28,0],[0,0,d*.36]),n("glow",B(.025,.72,.05),[d*.58,1.28,-.17],[0,0,d*.36]),n("dark",Cn(.12,.6,5),[d*.3,.55,0],[Math.PI,0,d*.2]);n("dark",Cn(.22,.95,6),[0,.52,0],[Math.PI,0,0]),n("glow",at(.46,.02,5,22),[0,1.4,0]),u(vi(.23,0),[0,1.4,-.45]);for(let d=0;d<6;d++){const g=new se(vi(.12+d%2*.05,0),d%2?e.glow:e.accent),_=d/6*Math.PI*2;g.position.set(Math.cos(_)*.85,1.4+Math.sin(_*2)*.28,Math.sin(_)*.55),g.userData.angle=_,g.userData.baseY=g.position.y,s.shards.push(g),a.push(g)}const h=new se(at(.72,.022,5,26),e.glow);h.position.y=1.4,h.rotation.x=Math.PI/2.6,s.rings.push(h),a.push(h)}else if(i==="bomber"){o=2.15,l=.3,n("body",Dt(.54,14,10),[0,1.3,0]);for(let h=0;h<8;h++){const d=h/8*Math.PI*2;n("accent",B(.26,.24,.07),[Math.cos(d)*.46,1.3,Math.sin(d)*.46],[0,-d,0])}n("dark",at(.62,.075,6,22),[0,1.3,0],[Math.PI/2,0,0]),n("warning",at(.64,.02,5,22),[0,1.56,0],[Math.PI/2,0,0]);for(let h=0;h<4;h++){const d=h/4*Math.PI*2;n("dark",We(.08,.08,.28,7),[Math.cos(d)*.36,.86,Math.sin(d)*.36]),n("glow",We(.055,.055,.02,7),[Math.cos(d)*.36,.7,Math.sin(d)*.36]),n("warning",B(.07,.05,.03),[Math.cos(d+.5)*.52,1.52,Math.sin(d+.5)*.52])}n("dark",Cn(.22,.5,6),[0,.62,0],[Math.PI,0,0]),u(Is(.3,0),[0,1.3,-.5]);for(let h=0;h<4;h++){const d=new ft,g=h/4*Math.PI*2;d.position.set(Math.cos(g)*.42,1.3,Math.sin(g)*.42),d.rotation.y=-g;const _=new se(B(.34,.06,.2),e.accent);_.position.x=.2;const m=new se(B(.1,.02,.14),e.glow);m.position.x=.4,d.add(_,m),s.wings.push(d),a.push(d)}}else if(i==="medic"){o=2.4,l=1.25,n("body",Dt(.5,14,10),[0,1.3,0]),n("dark",B(.9,.12,.9),[0,.92,0]),n("accent",B(.66,.05,.66),[0,.86,0]),n("dark",at(.56,.05,6,22),[0,1,0],[Math.PI/2,0,0]),n("accent",B(.52,.17,.06),[0,1.3,-.47]),n("accent",B(.17,.52,.06),[0,1.3,-.47]),n("glow",B(.14,.14,.1),[0,1.3,-.51]);for(const d of[-1,1])n("body",B(.14,.5,.14),[d*.52,1.08,0]);n("accent",B(.2,.04,.2),[0,1.62,0]),u(Dt(.17,10,8),[0,1.3,-.5]);const h=new se(at(.72,.03,5,26),e.glow);h.position.y=1.3,h.rotation.x=Math.PI/2,s.rings.push(h),a.push(h),s.core=u(Dt(.12,10,8),[0,1.62,0])}else if(i==="turret"){o=2.3,l=0,n("body",We(.86,1.02,.7,14),[0,.35,0]),n("dark",We(.96,.96,.16,14),[0,.72,0]),n("accent",at(.9,.05,6,30),[0,.82,0],[Math.PI/2,0,0]);for(let T=0;T<12;T++){const w=T/12*Math.PI*2;n("dark",B(.26,.02,.06),[Math.cos(w)*.97,.74,Math.sin(w)*.97],[0,-w,0])}for(const T of[-1,1])n("dark",B(.18,.55,.18),[T*.66,.2,0]);const h=new ft;h.position.y=1.18;const d=new se(Dt(.55,16,12),e.dark),g=new se(B(.42,.2,.12),e.warning);g.position.set(0,.02,-.5);const _=new se(B(.2,.2,.9),e.body);_.position.set(0,.02,-.62);const m=new se(B(.13,.13,.06),e.glow);m.position.set(0,.02,-1.08);const p=new se(at(.5,.03,5,22),e.glow);p.position.y=.02,p.rotation.x=Math.PI/2,h.add(d,g,_,m,p),a.push(h),n("accent",We(.13,.13,.42,8),[0,1.72,0]),u(Is(.16,0),[0,1.18,-.5]),n("warning",Dt(.1,8,6),[0,1.98,0])}else if(i==="falcon"){o=1.9,l=1.35,n("body",new ts(.32,1.5,10),[0,1.2,0],[Math.PI/2,0,0]),n("dark",B(.34,.3,.7),[0,1.2,.1]),n("accent",B(.3,.06,.5),[0,1.32,.05]),u(Dt(.13,10,8),[0,1.2,-.4]),n("glow",new Nn(.1,0),[0,1.2,-.55]),n("warning",B(.16,.12,.06),[0,1.26,.62]);for(const h of[-1,1]){const d=new ft;d.position.set(h*.22,1.18,-.05);const g=new se(B(.9,.05,.34),e.accent);g.position.set(h*.45,0,-.1),g.rotation.y=h*.5;const _=new se(B(.16,.03,.2),e.glow);_.position.set(h*.92,0,-.22),_.rotation.y=h*.5,d.add(g,_),s.wings.push(d),a.push(d)}n("dark",B(.04,.4,.28),[0,1.42,-.5]),n("glow",B(.02,.22,.16),[0,1.4,-.52])}else{o=5.6,l=.4,n("body",Dt(1.68,20,14),[0,3.2,0]);for(let h=0;h<10;h++){const d=h/10*Math.PI*2;n("accent",B(.62,.66,.16),[Math.cos(d)*1.5,3.2+Math.sin(d)*.9,-.55],[0,0,d])}n("dark",at(1.74,.12,8,40),[0,3.2,0]),n("dark",at(1.5,.09,8,40),[0,3.2,0],[0,Math.PI/2,0]),n("glow",B(2.4,.06,.08),[0,4.1,-.9]),n("accent",Cn(.5,1.1,6),[0,5.05,0]),n("warning",Cn(.24,.6,6),[0,5.5,0]);for(const h of[-1,1]){n("body",B(.85,2.9,.85),[h*2.15,2.75,0]),n("accent",B(.95,.5,.95),[h*2.15,4.1,0]),n("dark",We(.2,.27,1.7,10),[h*2.15,2.9,-1.05],[Math.PI/2,0,0]),n("warning",We(.14,.14,.03,10),[h*2.15,2.9,-1.92],[Math.PI/2,0,0]),n("body",B(.5,.9,1.5),[h*1.1,1.35,0]),n("accent",B(.7,.25,1.7),[h*1.1,.85,0]);for(let d=0;d<3;d++)n("glow",B(.06,.5,.06),[h*2.55,3.4-d*.5,-.4]);for(let d=0;d<3;d++)n("dark",We(.16,.2,.5,8),[h*(1.2+d*.65),1,.7]),n("glow",We(.12,.12,.02,8),[h*(1.2+d*.65),.74,.7])}n("dark",B(1.2,.5,.8),[0,1.4,.9]),u(Is(.88,1),[0,3.2,-1.35]),s.core=u(Dt(.35,12,10),[0,3.2,-1.62]);for(let h=0;h<3;h++){const d=new se(at(2.02+h*.27,.1,8,44),h===1?e.glow:e.accent);d.position.y=3.2,d.rotation.x=Math.PI/2+h*.45,d.userData.spin=(h%2?-1:1)*(.4+h*.15),s.rings.push(d),a.push(d)}for(const h of[-1,1]){const d=new ft;d.position.set(h*2.15,4.35,0);const g=new se(Dt(.34,12,8),e.dark),_=new se(B(.16,.16,.62),e.body);_.position.z=-.4;const m=new se(B(.1,.1,.05),e.glow);m.position.z=-.73,d.add(g,_,m),s.turrets.push(d),a.push(d)}}const f=t.meshes(e,{castShadow:!1}).map(({mesh:h})=>h);return{staticMeshes:f,dynamic:s,weakpoints:r,extraMeshes:a,height:o,baseY:l,allMeshes:[...f,...a]}}function Ym(i,e,t="#54f7d2"){const n=document.createElement("canvas");n.width=512,n.height=256;const s=n.getContext("2d");s.fillStyle="#050d10",s.fillRect(0,0,512,256),s.strokeStyle=t,s.lineWidth=5,s.strokeRect(14,14,484,228),s.globalAlpha=.12,s.fillStyle=t;for(let a=24;a<236;a+=12)s.fillRect(20,a,472,2);s.globalAlpha=1,s.textAlign="center",s.shadowColor=t,s.shadowBlur=26,s.fillStyle="#e9fffa",s.font='bold 68px "Barlow Condensed", sans-serif',s.fillText(i,256,122),s.shadowBlur=12,s.fillStyle=t,s.font='bold 30px "Share Tech Mono", monospace',s.fillText(e,256,180),s.shadowBlur=0,s.fillStyle=t,s.fillRect(60,206,392,3);const r=new Ks(n);return r.colorSpace=At,r.anisotropy=4,r}function $m(){const i=document.createElement("canvas");i.width=128,i.height=256;const e=i.getContext("2d");e.fillStyle="#070f13",e.fillRect(0,0,128,256);let t=999331;const n=()=>(t=t*16807%2147483647,(t-1)/2147483646);for(let r=6;r<250;r+=14)for(let a=6;a<122;a+=16){const o=n();o>.58?(e.fillStyle=o>.9?"#ffb35c":o>.78?"#b45cff":"#4ce0c4",e.globalAlpha=.35+n()*.55,e.fillRect(a,r,9,7)):(e.fillStyle="#12242a",e.globalAlpha=.8,e.fillRect(a,r,9,7))}e.globalAlpha=1;const s=new Ks(i);return s.colorSpace=At,s.wrapS=s.wrapT=Wi,s}function Km(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#0c181b",e.fillRect(0,0,256,256),e.strokeStyle="#1c3a37",e.lineWidth=3,e.strokeRect(6,6,244,244),e.strokeStyle="#142b2a",e.lineWidth=1;for(let n=1;n<4;n++)e.beginPath(),e.moveTo(n*64,8),e.lineTo(n*64,248),e.stroke(),e.beginPath(),e.moveTo(8,n*64),e.lineTo(248,n*64),e.stroke();e.fillStyle="#2a5b52";for(const[n,s]of[[16,16],[240,16],[16,240],[240,240]])e.beginPath(),e.arc(n,s,5,0,Math.PI*2),e.fill();e.globalAlpha=.08,e.fillStyle="#7fd8c4";for(let n=0;n<220;n++){const s=n*71%256,r=n*137%256;e.fillRect(s,r,2,2)}e.globalAlpha=1;const t=new Ks(i);return t.colorSpace=At,t.wrapS=t.wrapT=Wi,t.repeat.set(18,18),t.anisotropy=8,t}function Jm(){const i=document.createElement("canvas");i.width=16,i.height=256;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"rgba(4,10,14,0)"),t.addColorStop(.55,"rgba(15,64,64,0.32)"),t.addColorStop(.82,"rgba(40,150,135,0.42)"),t.addColorStop(1,"rgba(6,18,22,0.05)"),e.fillStyle=t,e.fillRect(0,0,16,256);const n=new Ks(i);return n.colorSpace=At,n}const Je=(i,e,t)=>new On(i,e,t),Pt=(i,e,t,n=10)=>new es(i,e,t,n),Rn=(i,e,t=6,n=24)=>new is(i,e,t,n),Br=(i,e,t=8)=>new ts(i,e,t),Zm=(i,e=10,t=8)=>new ns(i,e,t),kr=(i,e)=>i+Math.random()*(e-i);function jm(i){const e=i.scene,t=new ft;e.add(t),i.world=t;const n=!!i.lowPower;e.background=new qe(198667),e.fog=new $s(463640,30,128),e.add(new $h(9357774,264716,2.15));const s=new Zh(11069154,2.25);s.position.set(-25,42,18),s.castShadow=!i.isTouch&&!n,s.shadow.mapSize.set(1024,1024),s.shadow.camera.left=-55,s.shadow.camera.right=55,s.shadow.camera.top=55,s.shadow.camera.bottom=-55,e.add(s);const r=new Vi(2424784,48,50,2);r.position.set(0,6,0),e.add(r);const a=new Vi(12666367,26,40,2);a.position.set(-30,6,-25),e.add(a);const o=new Vi(16754784,14,32,2);o.position.set(32,5,26),e.add(o);const l=new Wt({color:9414821,map:Km(),roughness:.72,metalness:.42}),c=new Wt({color:1385257,roughness:.46,metalness:.82}),u=new Wt({color:528404,roughness:.38,metalness:.9}),f=new Wt({color:3560015,roughness:.34,metalness:.88,emissive:730144,emissiveIntensity:.3}),h=new ot({color:5240272,toneMapped:!1}),d=new ot({color:1867120,toneMapped:!1}),g=new ot({color:10768870,toneMapped:!1}),_=new ot({color:16753226,toneMapped:!1}),m={darkMetal:c,blackMetal:u,accentMetal:f,cyanGlow:h,dimGlow:d,purpleGlow:g,amberGlow:_},p=new Gi,T=(M,K,J,j,q)=>p.add(M,K,J,j,q),w=new se(new Mn(150,150),l);w.rotation.x=-Math.PI/2,w.receiveShadow=!0,t.add(w),i.worldColliders.push(w);const x=new td(150,75,3121292,1454125);x.material.transparent=!0,x.material.opacity=.17,x.position.y=.014,t.add(x);for(let M=0;M<4;M++){const K=new se(Rn(6+M*1.7,M%2?.035:.06,5,64),M%2?d:h);K.rotation.x=-Math.PI/2,K.position.y=.03,t.add(K)}for(let M=0;M<24;M++){const K=M/24*Math.PI*2;T("cyanGlow",Je(.06,.012,.5),[Math.cos(K)*11.2,.035,Math.sin(K)*11.2],[0,-K,0])}for(let M=0;M<8;M++){const K=M/8*Math.PI*2;T("amberGlow",Je(.22,.012,.9),[Math.cos(K)*7.6,.035,Math.sin(K)*7.6],[0,-K,0])}for(let M=0;M<4;M++){const K=Math.PI/4+M*Math.PI/2;for(let J=13;J<54;J+=4.2)T("dimGlow",Je(.1,.012,2.4),[Math.cos(K)*J,.028,Math.sin(K)*J],[0,-K,0])}const R=new ft,C=new se(Pt(4.6,5.2,.65,16),c);C.position.y=.32,C.receiveShadow=!0,R.add(C);const P=new se(Pt(4.15,4.15,.12,16),f);P.position.y=.7,R.add(P);const L=new se(Rn(4.35,.09,6,48),h);L.rotation.x=-Math.PI/2,L.position.y=.77,R.add(L);for(let M=0;M<16;M++){const K=M/16*Math.PI*2,J=new se(Je(.42,.02,.9),M%2?_:u);J.position.set(Math.cos(K)*4.6,.67,Math.sin(K)*4.6),J.rotation.y=-K,R.add(J)}const S=new se(Pt(.65,.9,5.5,14),new Wt({color:1194548,emissive:1693101,emissiveIntensity:1.35,metalness:.7,roughness:.18}));S.position.y=3.1,R.add(S);const E=new se(Pt(1.25,1.45,5.4,14),new ot({color:2818016,transparent:!0,opacity:.11,side:Ut,depthWrite:!1,toneMapped:!1,blending:tn}));E.position.y=3.1,R.add(E);const I=new se(Pt(.22,.55,28,10),new ot({color:3538905,transparent:!0,opacity:.055,depthWrite:!1,toneMapped:!1,blending:tn}));I.position.y=17,R.add(I);const F=new se(new Nn(.75,0),new ot({color:10354672,toneMapped:!1}));F.position.y=6.6,R.add(F),i.animatedWorld.push({mesh:F,update:(M,K)=>{F.rotation.y+=M*.6,F.rotation.x+=M*.25,F.position.y=6.6+Math.sin(K*1.1)*.22}});for(let M=0;M<3;M++){const K=new se(Rn(2.25+M*.48,.06,8,64),M===1?g:h);K.position.y=2.1+M*.92,K.rotation.x=Math.PI/2+(M-1)*.26,R.add(K),i.animatedWorld.push({mesh:K,speed:(M%2?-1:1)*(.18+M*.08),axis:"z"})}for(let M=0;M<6;M++){const K=M/6*Math.PI*2,J=new se(Je(.36,4.2,.36),c);J.position.set(Math.cos(K)*3.4,2.2,Math.sin(K)*3.4),J.rotation.z=Math.cos(K)*-.2,J.rotation.x=Math.sin(K)*.2,R.add(J);const j=new se(Je(.14,2.4,.14),f);j.position.set(Math.cos(K)*2.55,1.35,Math.sin(K)*2.55),j.rotation.z=Math.cos(K)*.55,j.rotation.x=-Math.sin(K)*.55,R.add(j);const q=new se(Je(.2,.42,.06),M%2?h:g);q.position.set(Math.cos(K)*3.4,3.4,Math.sin(K)*3.4-.2),q.rotation.y=-K,R.add(q)}const H=new se(Rn(3.5,.11,6,48),f);H.rotation.x=-Math.PI/2,H.position.y=4.35,R.add(H),t.add(R),i.obstacles.push({minX:-4.4,maxX:4.4,minZ:-4.4,maxZ:4.4}),i.worldColliders.push(C,S),[[-12,-10,4,1.3,1.7],[12,10,4,1.3,1.7],[-14,14,1.4,5,2.1],[14,-14,1.4,5,2.1],[-28,1,5,1.4,1.4],[28,-1,5,1.4,1.4],[1,29,1.4,5,1.8],[-1,-29,1.4,5,1.8],[-30,-24,3,3,2.7],[30,24,3,3,2.7],[26,-29,4,2,1.5],[-26,29,4,2,1.5],[-8,35,2,2,2.4],[8,-35,2,2,2.4],[37,10,2,4,2.2],[-37,-10,2,4,2.2]].forEach(([M,K,J,j,q],Te)=>{const ee=new ft,de=new se(Je(J,q,j),Te%3===0?u:c);de.position.y=q/2,de.castShadow=!n,de.receiveShadow=!0,ee.add(de);const Xe=new se(Je(J+.14,.12,j+.14),f);Xe.position.y=q+.04,ee.add(Xe);for(const v of[.16,q*.72,q-.1]){const O=new se(Je(J+.03,.045,j+.03),Te%4===0?g:d);O.position.y=v,ee.add(O)}const ke=new se(Je(J*.62,q*.52,.06),f);ke.position.set(0,q*.5,-j/2-.035),ee.add(ke);for(let v=0;v<4;v++){const O=new se(Je(J*.5,.035,.02),u);O.position.set(0,q*.34+v*q*.1,-j/2-.075),ee.add(O)}for(const v of[-1,1]){const O=new se(Pt(.05,.05,.03,6),Te%4===0?_:h);O.rotation.x=Math.PI/2,O.position.set(v*J*.4,q*.5,-j/2-.07),ee.add(O);const W=new se(Je(.1,q,.1),f);W.position.set(v*(J/2-.05),q/2,-j/2+.05),ee.add(W)}const b=new se(Je(J*.2,.05,.02),Te%3===0?_:h);b.position.set(0,q*.86,-j/2-.07),ee.add(b),ee.position.set(M,0,K),t.add(ee),i.obstacles.push({minX:M-J/2,maxX:M+J/2,minZ:K-j/2,maxZ:K+j/2}),i.worldColliders.push(de)});const X=[[-20,8],[20,-8],[-8,-20],[8,20],[-25,25],[25,-25],[16,16],[-16,-16]],Y=new Wt({color:6965788,metalness:.7,roughness:.5,emissive:16742957,emissiveIntensity:.5}),te=new Wt({color:1314826,metalness:.6,roughness:.6}),V=new ot({color:16757322,toneMapped:!1});X.forEach(([M,K])=>{const J=new ft,j=Y.clone(),q=new se(Pt(.62,.62,1.5,14),j);q.position.y=.75,q.castShadow=!n;const Te=new se(Pt(.66,.62,.12,14),te);Te.position.y=1.5;const ee=new se(Pt(.64,.64,.3,14),te);ee.position.y=.78;const de=new se(Zm(.1,8,6),V);de.position.y=1.62,J.add(q,Te,ee,de),J.position.set(M,0,K),t.add(J);const Xe={minX:M-.62,maxX:M+.62,minZ:K-.62,maxZ:K+.62},ke={group:J,mesh:q,bodyMaterial:j,health:60,maxHealth:60,position:J.position,dead:!1,flash:0,box:Xe};q.userData.barrel=ke,i.barrels.push(ke),i.barrelMeshes.push(q),i.obstacles.push(Xe),i.barrelBoxes.add(Xe)});const fe=new Wt({color:726297,metalness:.78,roughness:.48});[[0,-70,142,2],[0,70,142,2],[-70,0,2,142],[70,0,2,142]].forEach(([M,K,J,j])=>{const q=new se(Je(J,5,j),fe);q.position.set(M,2.5,K),t.add(q),i.worldColliders.push(q);const Te=new se(Je(J+.05,.09,j+.05),d);Te.position.set(M,4.25,K),t.add(Te);const ee=Math.floor(J>j?J/6:j/6);for(let de=0;de<ee;de++){const Xe=-70+de*(140/ee);T("accentMetal",Je((J>j,.28),4.2,J>j?.3:.28),[J>j?Xe:M,2.2,J>j?K:Xe])}});const ve=[];for(let M=0;M<12;M++){const K=M/12*Math.PI*2;ve.push([Math.cos(K)*45,Math.sin(K)*45,K])}ve.forEach(([M,K,J],j)=>{T("darkMetal",Pt(.16,.24,6.4,8),[M,3.2,K]),T("accentMetal",Pt(.36,.36,.22,8),[M,.16,K]),T("accentMetal",Je(.5,.18,.5),[M,6.45,K]),T(j%3===0?"purpleGlow":"cyanGlow",Je(.36,.5,.36),[M,6.05,K]),T("dimGlow",Rn(1.1,.035,5,22),[M,.04,K],[-Math.PI/2,0,0]),T("amberGlow",Je(.1,.1,.06),[M,4.6,K],[0,-J,0]);for(const q of[-1,1])T("accentMetal",Je(.09,1.6,.09),[M+q*.38,1,K],[0,0,q*.42])});for(let M=0;M<6;M++){const K=M/6*Math.PI*2+.35,J=Math.cos(K)*33,j=Math.sin(K)*33,q=7.5+M%2*2.4;T("darkMetal",Pt(3.1,2.7,.45,8),[J,q,j]),T("accentMetal",Pt(3.3,3.3,.1,8),[J,q+.26,j]),T(M%2?"purpleGlow":"cyanGlow",Rn(3,.055,5,28),[J,q-.2,j],[-Math.PI/2,0,0]);for(let ee=0;ee<8;ee++){const de=ee/8*Math.PI*2;T("dimGlow",Je(.08,.02,.6),[J+Math.cos(de)*2.5,q+.32,j+Math.sin(de)*2.5],[0,-de,0])}const Te=new se(Br(2.8,7,10),new ot({color:M%2?10768870:3532996,transparent:!0,opacity:.045,depthWrite:!1,side:Ut,toneMapped:!1,blending:tn}));Te.position.set(J,q-3.8,j),Te.rotation.x=Math.PI,t.add(Te)}for(let M=0;M<4;M++){const K=M<2?-1:1,J=M%2?-58:58,j=[];for(let ee=0;ee<=12;ee++){const de=ee/12;j.push(new A(-52+de*104,4.2+Math.sin(de*Math.PI*2+M)*.8,J+K*Math.sin(de*Math.PI)*3))}const q=new Yl(j),Te=new se(new Xa(q,48,.16,7,!1),M%2?f:c);t.add(Te);for(let ee=0;ee<=6;ee++){const de=q.getPoint(ee/6);T("accentMetal",Je(.12,Math.max(.4,de.y-.2),.12),[de.x,de.y/2,de.z])}}const Se=new Gi,Ve=new Gi;let tt=7147;const Ze=()=>(tt=tt*16807%2147483647,(tt-1)/2147483646);for(let M=0;M<78;M++){const K=Ze()*Math.PI*2,J=80+Ze()*60,j=5+Ze()*10,q=5+Ze()*10,Te=14+Ze()*66,ee=Math.cos(K)*J,de=Math.sin(K)*J;Se.add("body",Je(j,Te,q),[ee,Te/2-1,de]),Se.add("windows",Je(j+.06,Te*.86,q+.06),[ee,Te/2-1,de]),Se.add("cap",Je(j+.4,.22,q+.4),[ee,Te-.8,de]),M%2===0&&Ve.add("glow",Je(j+.1,.16+Ze()*.16,q+.1),[ee,Te*(.35+Ze()*.45),de]),M%5===0&&Se.add("antenna",Pt(.07,.07,9,5),[ee,Te+3.5,de]),M%6===0&&Se.add("spire",Br(.5,6,5),[ee,Te+2,de])}const je={body:new Wt({color:1320492,roughness:.78,metalness:.48}),windows:new ot({color:10475728,map:$m(),toneMapped:!1}),cap:c,antenna:d,spire:g,glow:d};t.add(Se.build(je)),t.add(Ve.build({glow:g})),[["NEXUS","SECTOR 07","#54f7d2",-58,10,-20,.6],["NX-07","TACTICAL LINK","#7de8ff",58,12,18,-.6],["霓虹余烬","NEON ASHES","#ff9a55",-20,14,-60,0],["WARDEN","APEX SIGNAL","#ff5c62",22,16,60,Math.PI],["零界突击","STRIKE PROTOCOL","#b06bff",-62,9,26,1.15],["SYS.ONLINE","DEFENSE GRID","#54f7d2",62,10,-30,-1.15]].forEach(([M,K,J,j,q,Te,ee])=>{const de=Ym(M,K,J),Xe=new se(new Mn(9.6,4.8),new ot({map:de,side:Ut,toneMapped:!1}));Xe.position.set(j,q,Te),Xe.rotation.y=ee,t.add(Xe);const ke=new se(Je(10,5.2,.16),c);ke.position.set(j,q,Te),ke.rotation.y=ee,ke.translateZ(-.12),t.add(ke);const b=new se(Pt(.12,.16,q-2,8),c);b.position.set(j,(q-2)/2,Te),t.add(b)});const ne=new ot({map:Jm(),transparent:!0,opacity:.75,side:Ut,depthWrite:!1,toneMapped:!1});[[0,-145,0],[-145,0,Math.PI/2],[0,145,Math.PI],[145,0,-Math.PI/2]].forEach(([M,K,J])=>{const j=new se(new Mn(300,42),ne);j.position.set(M,19,K),j.rotation.y=J,t.add(j)}),t.add(p.build(m)),i.spawnPoints=[new A(-48,0,-48),new A(48,0,-48),new A(-48,0,48),new A(48,0,48),new A(0,0,-54),new A(0,0,54),new A(-54,0,0),new A(54,0,0)],i.spawnPoints.forEach((M,K)=>{const J=new ft,j=new se(Rn(2.15,.1,8,40),K%2?g:h);j.position.y=2.3,J.add(j);const q=new se(Rn(1.85,.035,6,36),d);q.position.y=2.3,J.add(q);for(const ee of[-1,1]){const de=new se(Je(.26,4.8,.4),c);de.position.set(ee*2.15,2.2,0),J.add(de);const Xe=new se(Je(.1,1.2,.1),K%2?g:h);Xe.position.set(ee*2.15,2.5,-.24),J.add(Xe);const ke=new se(Je(.6,.2,.6),f);ke.position.set(ee*2.15,.1,0),J.add(ke)}const Te=new se(Je(4.6,.3,.45),f);Te.position.y=4.6,J.add(Te),J.position.copy(M),J.lookAt(0,2,0),t.add(J),i.animatedWorld.push({mesh:q,speed:-.22,axis:"z"}),i.animatedWorld.push({mesh:j,speed:K%2?-.3:.3,axis:"z"})});for(let M=0;M<2;M++){const K=new ft,J=new se(Je(5.5,.8,1.6),c),j=new se(Br(.85,1.8,6),f);j.rotation.z=-Math.PI/2,j.position.x=3.4;const q=new se(Je(1.5,.16,5.4),f);for(const Xe of[-1,1]){const ke=new se(Pt(.32,.32,1.1,8),c);ke.rotation.x=Math.PI/2,ke.position.set(-1.6,-.1,Xe*2.2);const b=new se(Je(.1,.1,.1),g);b.position.set(-1.6,-.1,Xe*2.8),K.add(ke,b)}const Te=new se(Je(4.6,.06,.1),h);Te.position.set(0,.44,0),K.add(J,j,q,Te),K.scale.setScalar(1.2),t.add(K);const ee=62+M*12,de=M*Math.PI;i.animatedWorld.push({mesh:K,update:(Xe,ke)=>{const b=ke*.06+de;K.position.set(Math.cos(b)*ee,24+Math.sin(ke*.5+de)*1.5,Math.sin(b)*ee),K.rotation.y=-b+Math.PI/2}})}const Ne=n?260:i.isTouch?380:900,we=new Float32Array(Ne*3);for(let M=0;M<Ne;M++)we[M*3]=kr(-75,75),we[M*3+1]=kr(.2,28),we[M*3+2]=kr(-75,75);const $e=new vt;$e.setAttribute("position",new qt(we,3));const yt=new Ph($e,new Gl({color:7653818,size:n?.055:.045,transparent:!0,opacity:.5,depthWrite:!1}));t.add(yt),i.dust=yt}const Bt=Ul.clamp,Qt=Ul.lerp,_t=(i,e)=>i+Math.random()*(e-i),hl={lockon:"lock",autofire:"auto",godmode:"god",infinity:"ammo",xray:"wall",timeslip:"slow",purge:"purge",arsenal:"arsenal",recharge:"recharge",overbound:"overbound",standdown:"standdown",help:"help"},qn={lock:"锁头 // LOCK-ON",auto:"自动射击 // AUTO-FIRE",god:"无敌 // GOD-MODE",ammo:"无限弹药 // INFINITY",wall:"透视 // X-RAY",slow:"子弹时间 // TIME-SLIP",purge:"清场 // PURGE",arsenal:"全武器解锁 // ARSENAL",recharge:"能量回满 // RECHARGE",overbound:"越界协议全开 // OVERBOUND",standdown:"协议解除 // STAND-DOWN",help:"作弊码清单 // HELP"},Qm={god:"无敌",ammo:"无限弹",lock:"锁头",auto:"自动射",wall:"透视",slow:"时停"},dl=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"];function ic(){let i=null;try{i=localStorage.getItem("nexus-device")}catch{}const e=new URLSearchParams(location.search).get("device");if(["desktop","mobile","board"].includes(e))return e;if(["desktop","mobile","board"].includes(i))return i;const t=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,n=Math.max(innerWidth,innerHeight),s=innerWidth>innerHeight;return t&&s&&(n>=1e3||navigator.maxTouchPoints>=5)?"board":t?"mobile":"desktop"}const bt=[{id:"rifle",name:"VX-9 脉冲",label:"VX-9 <span>脉冲</span>",className:"突击步枪 // AUTO",damage:24,fireRate:9,magazine:30,reserve:180,reload:1.45,spread:.009,pellets:1,auto:!0,range:90},{id:"shotgun",name:"SG-12 裂解",label:"SG-12 <span>裂解</span>",className:"战术霰弹枪 // PUMP",damage:14,fireRate:1.2,magazine:6,reserve:42,reload:1.8,spread:.065,pellets:8,auto:!1,range:42},{id:"rail",name:"R-01 磁轨",label:"R-01 <span>磁轨</span>",className:"磁轨精确步枪 // SEMI",damage:135,fireRate:.8,magazine:5,reserve:25,reload:2.1,spread:.001,pellets:1,auto:!1,range:130,pierce:!0},{id:"arc",name:"ARC-7 弧光",label:"ARC-7 <span>弧光</span>",className:"链式电弧 // CHAIN",damage:46,fireRate:3.4,magazine:24,reserve:120,reload:1.7,spread:.014,pellets:1,auto:!0,range:62,chain:3},{id:"rocket",name:"WN-5 蜂巢",label:"WN-5 <span>蜂巢</span>",className:"制导导弹 // HOMING",damage:120,fireRate:1.1,magazine:4,reserve:16,reload:2.2,spread:0,pellets:1,auto:!1,range:130,rocket:!0,aoe:6},{id:"frost",name:"LN-3 寒霜",label:"LN-3 <span>寒霜</span>",className:"低温步枪 // CRYO",damage:30,fireRate:4.2,magazine:22,reserve:110,reload:1.6,spread:.012,pellets:1,auto:!0,range:95,frost:!0,slowDuration:2.2,slowStrength:.5}],ul={runner:{name:"猎犬突击体",health:65,speed:4.7,damage:13,score:120,radius:.55,color:16729688},drone:{name:"蜂群射手",health:90,speed:2.7,damage:10,score:180,radius:.65,color:11757567},tank:{name:"重装碾压者",health:310,speed:1.35,damage:16,score:420,radius:.95,color:16747069},phantom:{name:"相位幽影",health:58,speed:5.6,damage:12,score:240,radius:.5,color:6087167},falcon:{name:"游隼突袭者",health:44,speed:5.8,damage:9,score:160,radius:.5,color:13041469},bomber:{name:"自毁蜂群",health:46,speed:5.5,damage:28,score:210,radius:.52,color:16761421},medic:{name:"维生单元",health:75,speed:2.3,damage:0,score:200,radius:.6,color:4710560},turret:{name:"定点炮台",health:240,speed:0,damage:14,score:300,radius:.9,color:16757325},boss:{name:"守望者核心",health:2600,speed:1.45,damage:18,score:5e3,radius:2.1,color:16734525}},zr={recruit:{id:"recruit",label:"新兵",hp:.78,damage:.68,score:.85,drop:1.35,spawn:.85},standard:{id:"standard",label:"标准",hp:1,damage:1,score:1,drop:1,spawn:1},nightmare:{id:"nightmare",label:"噩梦",hp:1.4,damage:1.45,score:1.5,drop:.82,spawn:1.18}},Xs=[{id:"first-blood",name:"首次接触",desc:"击毁第一个敌对单位"},{id:"combo-master",name:"连锁反应",desc:"连击倍率达到 2.5"},{id:"flawless",name:"无损作战",desc:"无伤清除一整波敌人"},{id:"crit-10",name:"精准打击",desc:"单局造成 10 次暴击"},{id:"overdrive",name:"核心超载",desc:"首次释放超载模式"},{id:"defuser",name:"拆弹专家",desc:"在自毁蜂群引爆前将其击毁"},{id:"arc-chain",name:"雷霆万钧",desc:"弧光一次连锁 3 个以上目标"},{id:"victory",name:"黎明已至",desc:"完成核心行动"},{id:"nightmare",name:"噩梦终结",desc:"在噩梦难度下通关"},{id:"hive",name:"蜂群覆盖",desc:"使用制导导弹击毁至少一个目标"},{id:"medic-down",name:"断援",desc:"击毁一台维生单元"},{id:"barrel",name:"连环爆破",desc:"用爆炸油桶一次清除多个目标"},{id:"frostbite",name:"冰封猎场",desc:"累计击毁 15 个处于减速状态的敌人"},{id:"falconer",name:"隼猎者",desc:"单局击毁 8 只游隼突袭者"}],e0=[{id:"damage",icon:"↟",type:"FIREPOWER",name:"超载弹药",description:"所有武器伤害提高 22%。让每一次命中都更具威胁。",apply:i=>{i.player.damageMultiplier*=1.22}},{id:"firerate",icon:"≫",type:"FIREPOWER",name:"高速枪机",description:"射击间隔缩短 15%，装填速度提高 10%。",apply:i=>{i.player.fireRateMultiplier*=1.15,i.player.reloadMultiplier*=1.1}},{id:"health",icon:"✚",type:"SURVIVAL",name:"纳米修复",description:"最大生命值提高 30，并立即恢复全部生命。",apply:i=>{i.player.maxHealth+=30,i.player.health=i.player.maxHealth}},{id:"shield",icon:"◇",type:"SURVIVAL",name:"电容护盾",description:"最大护盾提高 25，护盾恢复速度提高 30%。",apply:i=>{i.player.maxShield+=25,i.player.shield=i.player.maxShield,i.player.shieldRegen*=1.3}},{id:"speed",icon:"⌁",type:"MOBILITY",name:"动力肌腱",description:"移动速度提高 12%，相位冲刺冷却缩短 20%。",apply:i=>{i.player.speedMultiplier*=1.12,i.player.dashMax*=.8}},{id:"pulse",icon:"◎",type:"ABILITY",name:"脉冲增幅",description:"电磁脉冲范围扩大 25%，伤害提高 35%，冷却缩短 15%。",apply:i=>{i.player.pulseRadius*=1.25,i.player.pulseDamage*=1.35,i.player.pulseMax*=.85}},{id:"ammo",icon:"▤",type:"UTILITY",name:"战场回收",description:"立刻补满备用弹药，后续弹药拾取量提高 50%。",apply:i=>{i.weaponState.forEach((e,t)=>{e.reserve=bt[t].reserve}),i.player.ammoMultiplier*=1.5}},{id:"leech",icon:"⟁",type:"SURVIVAL",name:"猎手协议",description:"每次击毁敌人恢复 4 点生命与 3 点护盾。",apply:i=>{i.player.killHeal+=4}},{id:"crit",icon:"✦",type:"FIREPOWER",name:"弱点解析",description:"暴击率提高 12%，暴击伤害提高 30%。",apply:i=>{i.player.critChance+=.12,i.player.critMultiplier+=.3}},{id:"execute",icon:"⌖",type:"FIREPOWER",name:"终结协议",description:"对生命值低于 35% 的敌人额外造成 50% 伤害。",apply:i=>{i.player.executeBonus+=.5}},{id:"overcharge",icon:"ϟ",type:"ABILITY",name:"核心共振",description:"超载能量获取提高 40%，超载持续时间延长 2.5 秒。",apply:i=>{i.player.energyGain*=1.4,i.player.overdriveMax+=2.5}},{id:"chain",icon:"≈",type:"UTILITY",name:"电弧分流",description:"弧光额外跳跃 1 个目标，连锁伤害提高 25%。",apply:i=>{i.player.chainBonus+=1,i.player.chainDamage*=1.25}},{id:"magnet",icon:"⊙",type:"UTILITY",name:"磁场牵引",description:"拾取范围扩大 1 倍，补给效果提高 35%。",apply:i=>{i.player.pickupRadius*=2,i.player.pickupPower*=1.35}},{id:"dashwave",icon:"↝",type:"MOBILITY",name:"冲击冲刺",description:"冲刺结束时释放冲击波，对周围敌人造成 55 点伤害。",apply:i=>{i.player.dashWave+=55}},{id:"regen",icon:"♻",type:"SURVIVAL",name:"自适应回路",description:"护盾恢复延迟缩短 2 秒，恢复速度提高 45%。",apply:i=>{i.player.shieldDelay=Math.max(1.5,i.player.shieldDelay-2),i.player.shieldRegen*=1.45}},{id:"cryo",icon:"❄",type:"FIREPOWER",name:"极寒增幅",description:"寒霜减速时间延长 60%，减速强度提升至 65%。",apply:i=>{i.player.frostDuration=(i.player.frostDuration||1)*1.6,i.player.frostSlow=(i.player.frostSlow||1)*.65}},{id:"frostfield",icon:"✲",type:"ABILITY",name:"冰封脉冲",description:"电磁脉冲范围内的敌人被减速 60%，持续 2.5 秒。",apply:i=>{i.player.frostPulse=!0}}];class t0{constructor(e,t,n){this.canvas=e,this.radar=t,this.radarContext=t.getContext("2d"),this.callbacks=n,this.audio=new zm,this.profile=ic(),this.isBoard=this.profile==="board",this.isTouch=this.profile!=="desktop",this.lowPower=this.isBoard,this.maxParticles=this.isBoard?16:this.isTouch?25:80,this.demoMode=!1,this.scene=new Th,this.scene.background=new qe(198667),this.scene.fog=new $s(463125,24,112),this.camera=new Xt(72,innerWidth/innerHeight,.05,220),this.camera.rotation.order="YXZ",this.renderer=new km({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(innerWidth,innerHeight),this.applyQuality(),this.renderer.outputColorSpace=At,this.renderer.toneMapping=Sl,this.renderer.toneMappingExposure=1.55,this.renderer.shadowMap.enabled=!this.isTouch&&!this.lowPower,this.renderer.shadowMap.type=Ml,this.clock=new Qh,this.raycaster=new ed,this.state="menu",this.mode="campaign",this.keys={},this.firing=!1,this.aiming=!1,this.shotThisHold=!1,this.yaw=0,this.pitch=0,this.cheats={god:!1,ammo:!1,lock:!1,auto:!1,wall:!1,slow:!1},this.aimTarget=null,this.cheatBuffer="",this.konami=[],this.cheatToastTimer=0,this.menuTime=0,this.elapsed=0,this.enemies=[],this.enemyHitMeshes=[],this.projectiles=[],this.pickups=[],this.particles=[],this.tracers=[],this.effects=[],this.obstacles=[],this.barrels=[],this.barrelMeshes=[],this.barrelBoxes=new Set,this.worldColliders=[],this.animatedWorld=[],this.spawnQueue=[],this.waveClearPending=!1,this.hudTimer=0,this.radarTimer=0,this.shake=0,this.weaponRecoil=0,this.muzzleTimer=0,this.currentUpgradeChoices=[],this.difficulty=zr.standard,this.appliedUpgrades=[],this.runAchievements=new Set,this.critCount=0,this.comboPeak=1,this.waveDamageTaken=0,this.dashActive=!1,this.sharedParticleGeometry=new On(.055,.055,.055),this.sharedProjectileGeometry=new ns(.11,8,8),this.createWorld(),this.createViewModel(),this.bindEvents(),this.resetPlayer(),this.animate=this.animate.bind(this),this.animate()}createWorld(){jm(this)}applyQuality(){const e=this.isBoard?innerWidth>2200?.7:1:this.isTouch?1.25:1.65;this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,e))}createViewModel(){this.weaponRoot=new ft,this.camera.add(this.weaponRoot),this.scene.add(this.camera),this.weaponRoot.position.set(.36,-.31,-.62),this.applyWeaponScale();const e=new Vi(11070172,1.35,3.6);e.position.set(.2,.25,.25),this.camera.add(e),this.muzzleLight=new Vi(7536602,0,3),this.weaponRoot.add(this.muzzleLight),this.buildWeaponModel(0)}applyWeaponScale(){if(!this.weaponRoot)return;const e=this.isTouch&&innerHeight>innerWidth;this.weaponRoot.scale.setScalar(this.isBoard?.92:e?.68:.8)}buildWeaponModel(e){this.weaponModel&&this.weaponRoot.remove(this.weaponModel);const t=Xm(e);this.weaponRoot.add(t.group),this.weaponModel=t.group,this.weaponParts=t,this.muzzleLight.position.set(0,.02,t.muzzleZ+.12)}updateWeaponParts(e){const t=this.weaponParts;if(!t)return;const n=this.reloadTimer>0,s=n?1-this.reloadTimer/Math.max(.001,bt[this.weaponIndex].reload/this.player.reloadMultiplier):0,r=n?Math.sin(s*Math.PI):0;if(t.magazine.position.y=Qt(t.magazine.position.y,(this.weaponIndex===1,-.19-r*.22),1-Math.exp(-e*16)),t.magazine.rotation.x=Qt(t.magazine.rotation.x,r*.55,1-Math.exp(-e*14)),t.bolt.position.z=Qt(t.bolt.position.z,-.16+this.weaponRecoil*.085,1-Math.exp(-e*22)),t.flash.visible=this.muzzleTimer>0,t.flash.visible){const a=this.muzzleTimer/.055;t.flash.scale.setScalar(.65+a*.7),t.flash.rotation.z+=e*18}t.coils&&t.coils.children.forEach((a,o)=>{a.rotation.z+=e*(o%2?-2.2:2.2)})}resetPlayer(){this.player={position:new A(0,1.7,22),velocity:new A,health:100,maxHealth:100,shield:50,maxShield:50,damageMultiplier:1,fireRateMultiplier:1,reloadMultiplier:1,speedMultiplier:1,ammoMultiplier:1,dashCooldown:0,dashMax:5,dashTime:0,invulnerable:0,pulseCooldown:0,pulseMax:12,pulseRadius:12,pulseDamage:75,shieldRegen:9,shieldDelay:4.5,lastDamage:0,killHeal:0,critChance:.08,critMultiplier:1.75,executeBonus:1,executeThreshold:.35,energy:0,energyMax:100,energyGain:1,overdrive:0,overdriveMax:8,chainBonus:0,chainDamage:1,pickupRadius:1.45,pickupPower:1,dashWave:0},this.weaponState=bt.map(e=>({ammo:e.magazine,reserve:e.reserve})),this.weaponIndex=0,this.unlockedWeapon=0,this.weaponCooldown=0,this.reloadTimer=0,this.switchTimer=0,this.score=0,this.kills=0,this.falconKills=0,this.frostKills=0,this.shotsFired=0,this.shotsHit=0,this.combo=1,this.comboTimer=0,this.wave=0,this.elapsed=0,this.nextWaveTimer=0,this.spawnTimer=0,this.waveClearPending=!1,this.intermission=!1,this.yaw=0,this.pitch=0,this.appliedUpgrades=[],this.runAchievements=new Set,this.critCount=0,this.comboPeak=1,this.waveDamageTaken=0,this.dashActive=!1}clearDynamicObjects(){[...this.enemies,...this.projectiles,...this.pickups,...this.particles,...this.tracers,...this.effects].forEach(e=>{const t=e.group||e.mesh||e.line;t&&this.scene.remove(t)}),this.enemies=[],this.enemyHitMeshes=[],this.projectiles=[],this.pickups=[],this.particles=[],this.tracers=[],this.effects=[],this.spawnQueue=[],this.obstacles=this.obstacles.filter(e=>!this.barrelBoxes.has(e)),this.barrelMeshes=[],this.barrels.forEach(e=>{e.dead=!1,e.health=e.maxHealth,e.flash=0,e.bodyMaterial&&(e.bodyMaterial.emissiveIntensity=.5),e.group&&!e.group.parent&&this.world.add(e.group),this.barrelMeshes.push(e.mesh),this.obstacles.push(e.box)})}start(e="campaign",t="standard"){this.audio.init(),this.runId=(this.runId||0)+1,this.clearDynamicObjects(),this.resetPlayer(),this.mode=e,this.difficulty=zr[t]||zr.standard,this.firing=!1,this.aiming=!1,this.touchMove={x:0,y:0},this.state="playing",this.weaponRoot.visible=!0,this.buildWeaponModel(0),this.camera.position.copy(this.player.position),this.camera.rotation.set(0,0,0),this.callbacks.onState("playing"),this.callbacks.onAnnounce(e==="training"?"模拟训练":"神经链接建立",e==="training"?`敌方伤害已关闭 · 熟悉你的武器 · ${this.difficulty.label}难度`:`准备迎击第一波敌对单位 · ${this.difficulty.label}难度`,"TACTICAL LINK / CONNECTED",2400),this.nextWaveTimer=2.2,this.intermission=!0,this.requestLock(),this.updateHUD(!0),this.isBoard&&this.callbacks.onToast?.("白板课堂模式 // 左侧移动 · 右侧滑动瞄准 · 可开启自动演示",3200)}quit(){this.state="menu",this.firing=!1,this.clearDynamicObjects(),this.weaponRoot.visible=!1,this.callbacks.onState("menu")}pause(){this.state==="playing"&&(this.state="paused",this.firing=!1,document.exitPointerLock?.(),this.callbacks.onBuild?.({difficulty:this.difficulty.label,upgrades:this.appliedUpgrades,damage:Math.round((this.player.damageMultiplier-1)*100),crit:Math.round(this.player.critChance*100),kills:this.kills,wave:this.wave}),this.callbacks.onState("paused"))}resume(){this.state==="paused"&&(this.state="playing",this.callbacks.onState("playing"),this.requestLock(),this.clock.getDelta())}requestLock(){if(!this.isTouch&&this.state==="playing"&&document.pointerLockElement!==this.canvas)try{const e=this.canvas.requestPointerLock?.();e?.catch&&e.catch(()=>{})}catch{}}bindEvents(){window.addEventListener("resize",()=>this.resize()),document.addEventListener("keydown",e=>{this.keys[e.code]=!0,e.code==="KeyR"&&this.reload(),e.code==="KeyQ"&&this.dash(),e.code==="KeyE"&&this.pulse(),e.code==="KeyF"&&this.activateOverdrive(),e.code==="Digit1"&&this.switchWeapon(0),e.code==="Digit2"&&this.switchWeapon(1),e.code==="Digit3"&&this.switchWeapon(2),e.code==="Digit4"&&this.switchWeapon(3),e.code==="Digit5"&&this.switchWeapon(4),e.code==="Digit6"&&this.switchWeapon(5),(e.code==="KeyP"||e.code==="Escape"&&!document.pointerLockElement)&&(this.state==="playing"?this.pause():this.state==="paused"&&this.resume()),this.handleCheatInput(e)}),document.addEventListener("keyup",e=>{this.keys[e.code]=!1}),document.addEventListener("mousemove",e=>{this.state!=="playing"||!this.isTouch&&document.pointerLockElement!==this.canvas||(this.yaw-=e.movementX*.0021,this.pitch=Bt(this.pitch-e.movementY*.0019,-1.45,1.45))}),this.canvas.addEventListener("mousedown",e=>{this.state==="playing"&&(this.requestLock(),e.button===0&&(this.firing=!0,this.shotThisHold=!1),e.button===2&&(this.aiming=!0))}),document.addEventListener("mouseup",e=>{e.button===0&&(this.firing=!1,this.shotThisHold=!1),e.button===2&&(this.aiming=!1)}),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()),this.canvas.addEventListener("wheel",e=>{if(this.state!=="playing")return;const t=e.deltaY>0?1:-1;let n=this.weaponIndex;const s=bt.length;for(let r=0;r<s&&(n=(n+t+s)%s,!(n<=this.unlockedWeapon));r++);this.switchWeapon(n)},{passive:!0}),document.addEventListener("pointerlockchange",()=>{!this.isTouch&&this.state==="playing"&&document.pointerLockElement!==this.canvas&&this.elapsed>.6&&this.pause()}),window.addEventListener("blur",()=>{this.state==="playing"&&!this.isTouch&&this.pause()}),this.bindTouchControls()}bindTouchControls(){const e=document.getElementById("move-stick"),t=e.querySelector("i");let n=null;const s=h=>{const d=e.getBoundingClientRect();let g=h.clientX-(d.left+d.width/2),_=h.clientY-(d.top+d.height/2);const m=Math.hypot(g,_),p=d.width*.34;m>p&&(g*=p/m,_*=p/m),t.style.transform=`translate(${g}px, ${_}px)`,this.touchMove={x:g/p,y:_/p}};e.addEventListener("pointerdown",h=>{h.preventDefault(),e.setPointerCapture?.(h.pointerId),n=h.pointerId,s(h)},{passive:!1}),e.addEventListener("pointermove",h=>{h.pointerId===n&&(h.preventDefault(),s(h))},{passive:!1});const r=h=>{h.pointerId===n&&(n=null,this.touchMove={x:0,y:0},t.style.transform="")};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r);const a=document.getElementById("look-zone"),o=new Map;a.addEventListener("pointerdown",h=>{h.preventDefault(),a.setPointerCapture?.(h.pointerId),o.set(h.pointerId,{x:h.clientX,y:h.clientY})},{passive:!1}),a.addEventListener("pointermove",h=>{const d=o.get(h.pointerId);!d||this.state!=="playing"||(h.preventDefault(),this.yaw-=(h.clientX-d.x)*(this.isBoard?.0026:.0042),this.pitch=Bt(this.pitch-(h.clientY-d.y)*(this.isBoard?.0024:.0037),-1.4,1.4),o.set(h.pointerId,{x:h.clientX,y:h.clientY}))},{passive:!1});const l=h=>o.delete(h.pointerId);a.addEventListener("pointerup",l),a.addEventListener("pointercancel",l);const c=document.getElementById("mobile-fire");c.addEventListener("pointerdown",h=>{h.preventDefault(),c.setPointerCapture?.(h.pointerId),this.firing=!0,this.shotThisHold=!1},{passive:!1});const u=h=>{h.preventDefault(),this.firing=!1,this.shotThisHold=!1};c.addEventListener("pointerup",u),c.addEventListener("pointercancel",u);const f=(h,d)=>{const g=document.getElementById(h);g&&(g.addEventListener("pointerdown",_=>{_.preventDefault(),d()},{passive:!1}),g.addEventListener("contextmenu",_=>_.preventDefault()))};f("mobile-reload",()=>this.reload()),f("mobile-dash",()=>this.dash()),f("mobile-pulse",()=>this.pulse()),f("mobile-switch",()=>this.switchWeapon((this.weaponIndex+1)%(this.unlockedWeapon+1))),f("mobile-overdrive",()=>this.activateOverdrive()),f("mobile-aim",()=>{this.aiming=!this.aiming,document.getElementById("mobile-aim")?.classList.toggle("active",this.aiming)}),f("mobile-demo",()=>this.setDemoMode(!this.demoMode))}setDemoMode(e){this.demoMode=!!e,document.getElementById("mobile-demo")?.classList.toggle("active",this.demoMode),this.callbacks.onToast?.(this.demoMode?"课堂演示模式已开启 · 自动锁定并开火":"课堂演示模式已关闭",2200),this.callbacks.onDemo?.(this.demoMode)}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight),this.applyQuality(),this.applyWeaponScale()}startWave(){this.wave+=1,this.intermission=!1,this.waveClearPending=!1,this.waveDamageTaken=0,this.spawnQueue=[];const e=this.difficulty,t=this.mode==="campaign"&&this.wave===10,n=this.mode==="endless"&&this.wave%5===0;if(t||n){this.spawnQueue.push("boss");const s=Math.min(10,Math.ceil((2+Math.floor(this.wave/2))*e.spawn)),r=["runner","drone","phantom","bomber","tank","turret","medic"];for(let a=0;a<s;a++)this.spawnQueue.push(r[Math.floor(Math.random()*r.length)]);this.callbacks.onAnnounce("守望者降临","摧毁核心装甲 · 注意范围攻击与自毁单位","WARNING / APEX SIGNAL",3200)}else{const s=this.mode==="training"?Math.min(10,4+this.wave):Math.min(30,4+this.wave*2),r=Math.max(3,Math.round(s*e.spawn)),a=["runner"];this.wave>=2&&a.push("drone","drone"),this.wave>=3&&a.push("phantom"),this.wave>=4&&a.push("tank","turret"),this.wave>=5&&a.push("bomber","medic"),this.wave>=6&&a.push("falcon","falcon");for(let o=0;o<r;o++)this.spawnQueue.push(a[Math.floor(Math.random()*a.length)]);this.callbacks.onAnnounce(`第 ${String(this.wave).padStart(2,"0")} 波`,this.wave===1?"敌对信号接近 · 清除所有单位":"威胁等级上升 · 保持移动","HOSTILE SIGNALS DETECTED")}this.wave>=9&&this.unlockedWeapon===4?this.unlockWeapon(5):this.wave>=8&&this.unlockedWeapon===3?this.unlockWeapon(4):this.wave>=6&&this.unlockedWeapon===2?this.unlockWeapon(3):this.wave>=4&&this.unlockedWeapon===1?this.unlockWeapon(2):this.wave>=2&&this.unlockedWeapon===0&&this.unlockWeapon(1),this.spawnTimer=.4,this.audio.wave()}unlockWeapon(e){this.unlockedWeapon=e,this.weaponState[e].ammo=bt[e].magazine,this.weaponState[e].reserve=bt[e].reserve,this.callbacks.onToast(`武器已解锁 // ${bt[e].name} · 按 ${e+1} 切换`,3500)}spawnEnemy(e){const t=ul[e];let n=this.spawnPoints[Math.floor(Math.random()*this.spawnPoints.length)].clone();for(let x=0;x<6&&n.distanceTo(this.player.position)<20;x++)n=this.spawnPoints[Math.floor(Math.random()*this.spawnPoints.length)].clone();n.x+=_t(-2.5,2.5),n.z+=_t(-2.5,2.5);const s=new ft;s.position.copy(n);const r=e==="phantom",a=new Wt({color:e==="boss"?3810332:2372152,emissive:t.color,emissiveIntensity:.8,metalness:.8,roughness:.34,transparent:r,opacity:1}),o=new ot({color:t.color,toneMapped:!1,transparent:r,opacity:1}),l=new Wt({color:791576,metalness:.9,roughness:.28,transparent:r,opacity:1}),c=new Wt({color:2833216,emissive:t.color,emissiveIntensity:.16,metalness:.86,roughness:.3,transparent:r,opacity:1}),u=new ot({color:16761421,toneMapped:!1,transparent:r,opacity:1}),h=qm(e,{body:a,dark:l,glow:o,accent:c,warning:u}),d=this.difficulty,g={type:e,group:s,material:a,fadeMaterials:[a,o,l,c,u],health:t.health*(1+Math.max(0,this.wave-1)*(e==="boss"?.12:.085))*d.hp,maxHealth:0,speed:t.speed*(1+Math.min(.45,this.wave*.018)),damage:t.damage*(1+this.wave*.022)*d.damage,score:Math.round(t.score*d.score),radius:t.radius,name:t.name,attackCooldown:_t(.4,1.3),spawnTime:.85,dead:!1,deathTimer:0,strafe:Math.random()>.5?1:-1,phase:Math.random()*Math.PI*2,hitTimer:0,healthBar:null,barFill:null,phased:!1,phaseTimer:_t(1.4,2.8),fuse:0,chargeTimer:0,healTimer:0,slow:0,parts:h.dynamic,height:h.height,baseY:h.baseY};g.maxHealth=g.health;const _=x=>{x.userData.enemy=g,x.isMesh&&(x.castShadow=!this.isTouch&&!this.lowPower,this.enemyHitMeshes.push(x)),x.children.forEach(_)};h.allMeshes.forEach(x=>{s.add(x),_(x)});const m=new ft,p=e==="boss"?3.2:1.35,T=new se(new Mn(p,.085),new ot({color:1054744,transparent:!0,opacity:.85,depthTest:!1})),w=new se(new Mn(p,.055),new ot({color:t.color,depthTest:!1}));w.position.z=.005,m.add(T,w),m.position.y=g.height+.35,m.visible=e==="boss",s.add(m),g.healthBar=m,g.barFill=w,g.barHalf=p/2,s.scale.setScalar(.02),this.scene.add(s),this.enemies.push(g),this.spawnParticles(n.clone().add(new A(0,1.4,0)),t.color,e==="boss"?35:12,3.5)}updateEnemies(e){const t=new A(this.player.position.x,0,this.player.position.z);for(const n of this.enemies){if(n.dead){n.deathTimer-=e,n.group.rotation.z+=e*2.4,n.group.scale.multiplyScalar(Math.max(.01,1-e*5)),n.group.position.y-=e*.8,n.deathTimer<=0&&(this.scene.remove(n.group),n.remove=!0);continue}n.phase+=e,n.hitTimer-=e,n.material.emissiveIntensity=n.hitTimer>0?3.2:n.type==="boss"?1:.8,n.group.children.forEach(l=>{l.userData.spin&&(l.rotation.z+=l.userData.spin*e)});const s=n.parts;if(s&&(s.legs?.forEach((l,c)=>{l.rotation.x=Math.sin(n.phase*7+(c%2?Math.PI:0))*.34}),s.rotors?.forEach((l,c)=>{l.rotation.y+=e*(5+c*1.5)}),s.rings?.forEach((l,c)=>{l.userData.spin||(l.rotation.z+=e*(c%2?-.55:.55))}),s.shards?.forEach((l,c)=>{const u=l.userData.angle+n.phase*.65;l.position.x=Math.cos(u)*.85,l.position.z=Math.sin(u)*.55,l.position.y=l.userData.baseY+Math.sin(n.phase*2+c)*.12,l.rotation.y+=e*1.6}),s.wings?.forEach((l,c)=>{l.rotation.z=Math.sin(n.phase*5+c)*.22}),s.turrets?.forEach(l=>{l.rotation.y=Math.sin(n.phase*.8)*.32}),s.core&&s.core.scale.setScalar(1+Math.sin(n.phase*4.5)*.09)),n.spawnTime>0){n.spawnTime-=e;const l=Bt(1-n.spawnTime/.85,.02,1);n.group.scale.setScalar(l);continue}if(n.group.scale.setScalar(1),n.type==="phantom"&&(n.phaseTimer-=e,n.phaseTimer<=0&&(n.phased=!n.phased,n.phaseTimer=n.phased?1.05:2.5,n.fadeMaterials.forEach(l=>{l.opacity=n.phased?.16:1}),this.spawnParticles(n.group.position.clone().add(new A(0,1.2,0)),6087167,this.isTouch?4:9,2))),n.type==="bomber"&&n.fuse>0&&(n.fuse-=e,n.material.emissiveIntensity=1.4+Math.sin(n.phase*36)*1.4,Math.random()>.65&&this.spawnParticles(n.group.position.clone().add(new A(0,1.1,0)),16761421,2,1.4),n.fuse<=0)){this.detonateBomber(n);continue}const r=t.clone().sub(new A(n.group.position.x,0,n.group.position.z)),a=r.length();r.normalize(),n.group.rotation.y=Math.atan2(r.x,r.z)+Math.PI,n.attackCooldown-=e;let o=new A;if(n.type==="runner"||n.type==="phantom"||n.type==="falcon")a>1.45&&o.copy(r),a<1.85&&n.attackCooldown<=0&&(this.damagePlayer(n.damage,n.group.position),n.attackCooldown=n.type==="phantom"?.85:n.type==="falcon"?1.1:1,n.group.position.addScaledVector(r,.3));else if(n.type==="bomber")n.fuse<=0&&(a>2.7?o.copy(r):(n.fuse=1.2,this.audio.warning(),this.createPulseEffect(n.group.position.clone(),16757575,4.5)));else if(n.type==="turret")n.chargeTimer>0?(n.chargeTimer-=e,n.material.emissiveIntensity=2+Math.sin(n.phase*30)*1.4,n.chargeTimer<=0&&([-.05,.05].forEach(l=>this.fireEnemyProjectile(n,l,24,n.damage)),n.attackCooldown=2.4,this.audio.enemyShot())):a<46&&n.attackCooldown<=0&&(n.chargeTimer=.65);else if(n.type==="medic"){n.healTimer-=e;const l=15;a>l+4?o.copy(r):a<l-4&&o.copy(r).multiplyScalar(-.7);const c=new A(-r.z,0,r.x).multiplyScalar(n.strafe*.5);if(o.add(c),n.healTimer<=0){let u=null,f=6;for(const h of this.enemies){if(h===n||h.dead||h.type==="medic"||h.spawnTime>0||h.group.position.distanceTo(n.group.position)>11)continue;const d=h.maxHealth-h.health;h.health>h.maxHealth*.7||d>f&&(f=d,u=h)}if(u){if(u.health=Math.min(u.maxHealth,u.health+14),u.barFill&&u.healthBar.visible){const h=Bt(u.health/u.maxHealth,0,1);u.barFill.scale.x=h,u.barFill.position.x=-(1-h)*(u.barHalf||.6)}this.createHealBeam(n.group.position.clone().add(new A(0,1.4,0)),u.group.position.clone().add(new A(0,(u.height||2)*.55,0))),n.healTimer=.9}}}else{const l=n.type==="drone"?13:n.type==="tank"?17:20;a>l+3?o.copy(r):a<l-3&&o.copy(r).multiplyScalar(-.7);const c=new A(-r.z,0,r.x).multiplyScalar(n.strafe*(n.type==="boss"?.45:.75));if(o.add(c),a<(n.type==="boss"?48:36)&&n.attackCooldown<=0)if(n.type==="boss"){const u=n.health<n.maxHealth*.5;u&&!n.enragedSpawned&&(n.enragedSpawned=!0,this.spawnEnemy("medic"),this.spawnEnemy("medic"),this.callbacks.onAnnounce("核心过载","守望者召唤维生单元支援","WARNING / REINFORCEMENTS",2200));for(let f=-2;f<=2;f++)this.fireEnemyProjectile(n,f*.105,17,n.damage);if(u||Math.random()>.45)for(let f=0;f<10;f++)this.fireEnemyProjectile(n,f/10*Math.PI*2,10,n.damage*.65,!0);n.attackCooldown=u?1.35:2.1}else n.type==="tank"?([-.08,0,.08].forEach(u=>this.fireEnemyProjectile(n,u,13,n.damage)),n.attackCooldown=2.25):(this.fireEnemyProjectile(n,_t(-.035,.035),16,n.damage),n.attackCooldown=_t(1.3,1.8))}if(o.lengthSq()>0){const l=n.slow>0?n.slowMul||.5:1;o.normalize().multiplyScalar(n.speed*l*e),this.moveEnemy(n,o)}n.slow>0&&(n.slow-=e,n.material.emissiveIntensity=Math.max(n.material.emissiveIntensity||0,1.1)),n.baseY&&(n.group.position.y=n.baseY+Math.sin(n.phase*2.1)*.18),n.healthBar.quaternion.copy(this.camera.quaternion)}this.enemies=this.enemies.filter(n=>!n.remove)}detonateBomber(e){const t=e.group.position.clone();e.dead=!0,e.deathTimer=.02,e.healthBar.visible=!1,this.enemyHitMeshes=this.enemyHitMeshes.filter(s=>s.userData.enemy!==e),this.spawnParticles(t.clone().add(new A(0,1,0)),16757575,this.isTouch?14:28,6),this.createPulseEffect(t,16752957,6),this.audio.explosion(),this.shake=Math.min(1.3,this.shake+.45);const n=t.distanceTo(this.player.position);n<5.5&&this.damagePlayer(e.damage*(1-n/5.5*.55),t)}addEnergy(e){const t=this.player;t.overdrive>0||(t.energy=Math.min(t.energyMax,t.energy+e*t.energyGain))}activateOverdrive(){const e=this.player;this.state!=="playing"||e.energy<e.energyMax||e.overdrive>0||(e.energy=0,e.overdrive=e.overdriveMax,e.pulseCooldown=Math.min(e.pulseCooldown,2),this.audio.overdrive(),this.createPulseEffect(e.position.clone(),16766044,15),this.callbacks.onAnnounce("核心超载","射速与伤害大幅提升 · 弹药无限","OVERDRIVE / ENGAGED",2200),this.unlockAchievement("overdrive"))}unlockAchievement(e){if(this.runAchievements.has(e))return;this.runAchievements.add(e);const t=Xs.find(n=>n.id===e);t&&(this.audio.achievement(),this.callbacks.onAchievement?.(t))}emitDashWave(){const e=this.player;if(e.dashWave<=0)return;const t=e.position.clone();this.createPulseEffect(t,5568466,5.5),this.audio.pulse();for(const n of this.enemies)n.dead||n.phased||n.group.position.distanceTo(t)<5.5&&this.damageEnemy(n,e.dashWave*e.damageMultiplier,n.group.position.clone().sub(t).setY(0).normalize());for(const n of this.barrels)!n.dead&&n.group.position.distanceTo(t)<5.5&&this.damageBarrel(n,60,new A)}moveEnemy(e,t){const n=e.group.position,s=Bt(n.x+t.x,-65,65);this.collides(s,n.z,e.radius*.7)?e.strafe*=-1:n.x=s;const r=Bt(n.z+t.z,-65,65);this.collides(n.x,r,e.radius*.7)?e.strafe*=-1:n.z=r}fireEnemyProjectile(e,t,n,s,r=!1){const a=e.group.position.clone().add(new A(0,e.type==="boss"?3.1:e.type==="drone"?1.85:1.6,0));let o;r?o=new A(Math.sin(t),0,Math.cos(t)):(o=this.player.position.clone().sub(a).normalize(),o.applyAxisAngle(new A(0,1,0),t));const l=new ot({color:e.type==="drone"?12872703:16738381,toneMapped:!1}),c=new se(this.sharedProjectileGeometry,l);c.scale.setScalar(e.type==="boss"?1.8:1),c.position.copy(a),this.scene.add(c),this.projectiles.push({mesh:c,velocity:o.multiplyScalar(n),damage:s,life:5,source:e.group.position}),this.audio.enemyShot()}updateProjectiles(e){for(const t of this.projectiles){if(t.life-=e,t.homing){let s=null,r=46;for(const l of this.enemies){if(l.dead||l.phased||l.spawnTime>0)continue;const c=l.group.position.distanceTo(t.mesh.position);c<r&&(r=c,s=l)}if(s){const l=s.group.position.clone().add(new A(0,(s.height||2)*.5,0)).sub(t.mesh.position).normalize().multiplyScalar(t.velocity.length());t.velocity.lerp(l,Math.min(1,e*3.4))}t.mesh.position.addScaledVector(t.velocity,e),t.mesh.rotation.x+=e*14;let a=null;for(const l of this.enemies)if(!(l.dead||l.phased)&&l.group.position.distanceTo(t.mesh.position)<l.radius+.9){a=l;break}const o=this.collides(t.mesh.position.x,t.mesh.position.z,.2)||Math.abs(t.mesh.position.x)>70||Math.abs(t.mesh.position.z)>70;(a||o||t.life<=0)&&(this.explodeRocket(t),t.life=0),t.life<=0&&(this.scene.remove(t.mesh),t.remove=!0);continue}t.mesh.position.addScaledVector(t.velocity,e),t.mesh.rotation.x+=e*8;const n=t.mesh.position;n.distanceTo(this.player.position)<.65&&(this.damagePlayer(t.damage,t.source),t.life=0),(this.collides(n.x,n.z,.05)||Math.abs(n.x)>70||Math.abs(n.z)>70)&&(t.life=0),t.life<=0&&(this.spawnParticles(n,16737877,4,1.5),this.scene.remove(t.mesh),t.remove=!0)}this.projectiles=this.projectiles.filter(t=>!t.remove)}updatePlayer(e){const t=this.player;t.dashCooldown=Math.max(0,t.dashCooldown-e),t.pulseCooldown=Math.max(0,t.pulseCooldown-e),t.invulnerable=Math.max(0,t.invulnerable-e),t.overdrive=Math.max(0,t.overdrive-e),t.lastDamage+=e,t.lastDamage>t.shieldDelay&&t.shield<t.maxShield&&(t.shield=Math.min(t.maxShield,t.shield+t.shieldRegen*e)),this.weaponCooldown=Math.max(0,this.weaponCooldown-e),this.switchTimer=Math.max(0,this.switchTimer-e),this.muzzleTimer=Math.max(0,this.muzzleTimer-e),this.muzzleLight.intensity=this.muzzleTimer>0?5:0,this.reloadTimer>0&&(this.reloadTimer-=e,this.reloadTimer<=0&&this.finishReload());const n=(this.keys.KeyW?1:0)-(this.keys.KeyS?1:0)-(this.touchMove?.y||0),s=(this.keys.KeyD?1:0)-(this.keys.KeyA?1:0)+(this.touchMove?.x||0),r=new A(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),a=new A(Math.cos(this.yaw),0,-Math.sin(this.yaw)),o=r.multiplyScalar(n).add(a.multiplyScalar(s));o.lengthSq()>1&&o.normalize();const l=(this.keys.ShiftLeft||this.keys.ShiftRight)&&n>0;let c=6.6*t.speedMultiplier*(l?1.5:1)*(this.aiming?.72:1)*(t.overdrive>0?1.2:1);t.dashTime>0&&(t.dashTime-=e,c=25,o.lengthSq()===0&&o.copy(new A(-Math.sin(this.yaw),0,-Math.cos(this.yaw))),Math.random()>.4&&this.spawnParticles(t.position.clone().add(new A(0,-.7,0)),5568466,1,.7)),this.dashActive&&t.dashTime<=0&&this.emitDashWave(),this.dashActive=t.dashTime>0;const u=o.multiplyScalar(c);t.velocity.lerp(u,1-Math.exp(-e*(t.dashTime>0?25:12))),this.movePlayer(t.velocity.x*e,t.velocity.z*e);const f=t.velocity.length()>.4,h=f?Math.sin(this.elapsed*(l?14:10))*.025:0;this.camera.position.set(t.position.x,t.position.y+h,t.position.z),this.shake>0&&(this.shake=Math.max(0,this.shake-e*2.5),this.camera.position.x+=_t(-1,1)*this.shake*.08,this.camera.position.y+=_t(-1,1)*this.shake*.08),this.camera.rotation.set(this.pitch,this.yaw,0);const d=this.aiming?this.weaponIndex===2?42:56:l?78:72;this.camera.fov=Qt(this.camera.fov,d,1-Math.exp(-e*10)),this.camera.updateProjectionMatrix(),this.weaponRecoil=Qt(this.weaponRecoil,0,1-Math.exp(-e*13)),this.updateWeaponParts(e),this.isBoard&&this.weaponState[this.weaponIndex].ammo===0&&!t.overdrive&&this.reloadTimer<=0&&this.reload(),this.updateDemoAim(e);const g=this.isTouch&&innerHeight>innerWidth,_=this.aiming?0:g?.17:.36,m=this.aiming?-.22:g?-.28:-.31;this.weaponRoot.position.x=Qt(this.weaponRoot.position.x,_,1-Math.exp(-e*12)),this.weaponRoot.position.y=Qt(this.weaponRoot.position.y,m+h*.6,1-Math.exp(-e*12)),this.weaponRoot.position.z=-.62+this.weaponRecoil*.13,this.weaponRoot.rotation.x=this.weaponRecoil*.1+(this.reloadTimer>0?Math.sin(this.reloadTimer*4)*.35:0),this.weaponRoot.rotation.z=f?Math.sin(this.elapsed*5)*.012:0,this.firing&&(bt[this.weaponIndex].auto||!this.shotThisHold)&&this.fireWeapon(),this.comboTimer>0?this.comboTimer-=e:this.combo=Qt(this.combo,1,e*3)}pickDemoTarget(e){let t=null,n=1/0;for(const s of this.enemies){if(s.dead||s.phased||s.spawnTime>0)continue;const r=s.group.position.clone().add(new A(0,s.type==="boss"?3.2:s.height*.55,0)),a=r.distanceTo(e);a<n&&(n=a,t=r)}return t}updateDemoAim(e){if(!this.demoMode||this.state!=="playing")return;const t=this.camera.getWorldPosition(new A),n=this.pickDemoTarget(t);if(!n){this.firing=!1;return}const s=n.x-t.x,r=n.z-t.z;let o=Math.atan2(-s,-r)-this.yaw;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;this.yaw+=o*Math.min(1,e*3.4);const l=Math.hypot(s,r);this.pitch=Qt(this.pitch,Math.atan2(n.y-t.y,l),Math.min(1,e*3)),this.firing=!0}handleCheatInput(e){if(e.code==="Backquote"){e.preventDefault?.(),this.toggleCheatConsole();return}const t=e.key;if(t&&t.length===1&&/[a-zA-Z]/.test(t)){this.cheatBuffer=(this.cheatBuffer+t.toLowerCase()).slice(-26);for(const n in hl)if(this.cheatBuffer.endsWith(n)){this.applyCheat(n),this.cheatBuffer="";break}}this.konami.push(e.code),this.konami.length>12&&this.konami.shift(),this.konami.slice(-dl.length).join(",")===dl.join(",")&&(this.konami=[],this.toggleCheatConsole(!0),this.cheatToast("作弊码清单已展开 // ↑↑↓↓←→←→BA 或输入 HELP"))}applyCheat(e){const t=hl[e];if(!t)return;if(t==="help"){this.toggleCheatConsole(!0),this.cheatToast(qn.help);return}if(t==="purge"){this.cheatPurge(),this.cheatToast(qn.purge+" 已执行");return}if(t==="arsenal"){this.unlockedWeapon=bt.length-1,this.updateHUD(!0),this.cheatToast(qn.arsenal),this.refreshCheatBadge();return}if(t==="recharge"){this.cheatRecharge(),this.cheatToast(qn.recharge),this.refreshCheatBadge();return}if(t==="overbound"){Object.keys(this.cheats).forEach(s=>{this.cheats[s]=!0}),this.cheatToast(qn.overbound),this.refreshCheatBadge();return}if(t==="standdown"){Object.keys(this.cheats).forEach(s=>{this.cheats[s]=!1}),this.firing=!1,this.aimTarget=null,this.updateLockReticle(null),this.cheatToast(qn.standdown),this.refreshCheatBadge();return}const n=this.cheats[t];this.cheats[t]=!n,t==="auto"&&n&&(this.firing=!1),t==="lock"&&n&&(this.aimTarget=null,this.updateLockReticle(null)),this.cheatToast((this.cheats[t]?"已激活 // ":"已解除 // ")+qn[t]),this.refreshCheatBadge()}updateCheats(e){const t=this.cheats;for(const n of this.enemies)n.dead||!n.healthBar||(n.healthBar.visible=t.wall?!0:n.health<n.maxHealth);if(t.lock||t.auto){const n=this.camera.getWorldPosition(new A),s=this.pickCheatTarget(n);if(this.aimTarget=s,s){const r=s.group.position.clone().add(new A(0,Math.min(s.height*.85,s.height-.2),0)),a=r.x-n.x,o=r.y-n.y,l=r.z-n.z;let u=Math.atan2(-a,-l)-this.yaw;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;this.yaw+=u*Math.min(1,e*9);const f=Math.hypot(a,l);this.pitch=Qt(this.pitch,Math.atan2(o,f),Math.min(1,e*9)),t.auto&&(this.firing=!0)}else t.auto&&(this.firing=!1);this.updateLockReticle(s)}else this.aimTarget=null,this.updateLockReticle(null);if(this.cheatToastTimer>0&&(this.cheatToastTimer-=e,this.cheatToastTimer<=0)){const n=document.getElementById("cheat-toast");n&&n.classList.remove("show")}}pickCheatTarget(e){const t=this.camera.getWorldDirection(new A);let n=null,s=1/0;for(const r of this.enemies){if(r.dead||r.phased||r.spawnTime>0)continue;const o=r.group.position.clone().add(new A(0,Math.min(r.height*.85,r.height-.2),0)).clone().sub(e),l=o.length();if(l>95)continue;o.normalize();const u=Math.acos(Bt(t.dot(o),-1,1))*28+l*.08;u<s&&(s=u,n=r)}return n}updateLockReticle(e){const t=document.getElementById("lock-reticle");if(!t)return;if(!e){t.classList.remove("show");return}const s=e.group.position.clone().add(new A(0,Math.min(e.height*.85,e.height-.2),0)).project(this.camera);if(s.z>1){t.classList.remove("show");return}t.style.left=`${(s.x*.5+.5)*innerWidth}px`,t.style.top=`${(-s.y*.5+.5)*innerHeight}px`,t.classList.add("show")}cheatPurge(){for(const e of this.enemies)e.dead||e.phased||e.spawnTime>0||this.damageEnemy(e,99999,new A(0,1,0),{critical:!0,critRoll:!0});this.spawnParticles(this.camera.getWorldPosition(new A),16731501,26,5),this.audio.explosion(),this.shake=Math.min(1.3,this.shake+.5)}cheatRecharge(){this.player.health=this.player.maxHealth,this.player.shield=this.player.maxShield,this.player.energy=this.player.energyMax;for(let e=0;e<bt.length;e++)this.weaponState[e].ammo=bt[e].magazine,this.weaponState[e].reserve=bt[e].reserve;this.updateHUD(!0)}refreshCheatBadge(){const e=document.getElementById("cheat-badge");if(!e)return;const t=Object.keys(this.cheats).filter(n=>this.cheats[n]);if(t.length===0){e.classList.remove("show");return}e.innerHTML="<b>越界协议 // OVERBOUND</b>"+t.map(n=>`<span>${Qm[n]}</span>`).join(""),e.classList.add("show")}toggleCheatConsole(e){const t=document.getElementById("cheat-console");if(!t)return;const n=e!==void 0?e:!t.classList.contains("show");t.classList.toggle("show",n)}cheatToast(e){this.cheatToastTimer=2.4;const t=document.getElementById("cheat-toast");t&&(t.textContent=e,t.classList.add("show"))}movePlayer(e,t){const n=this.player.position,s=Bt(n.x+e,-66.5,66.5);this.collides(s,n.z,.48)||(n.x=s);const r=Bt(n.z+t,-66.5,66.5);this.collides(n.x,r,.48)||(n.z=r)}collides(e,t,n){return this.obstacles.some(s=>e+n>s.minX&&e-n<s.maxX&&t+n>s.minZ&&t-n<s.maxZ)}fireWeapon(){if(this.state!=="playing"||this.weaponCooldown>0||this.reloadTimer>0||this.switchTimer>0||this.player.dashTime>0)return;const e=bt[this.weaponIndex],t=this.weaponState[this.weaponIndex],n=this.player,s=n.overdrive>0,r=s||this.cheats.ammo;if(t.ammo<=0&&!r){this.audio.empty(),this.weaponCooldown=.25,this.shotThisHold=!0,this.reload();return}if(r||(t.ammo-=1),this.shotsFired+=1,this.shotThisHold=!0,this.weaponCooldown=1/(e.fireRate*n.fireRateMultiplier*(s?1.6:1)),this.weaponRecoil=Math.min(1.5,this.weaponRecoil+(e.id==="shotgun"?1:e.id==="rail"?1.25:e.id==="arc"?.45:.32)),this.pitch=Bt(this.pitch+(e.id==="shotgun"?.025:e.id==="rail"?.018:.004),-1.45,1.45),e.rocket){this.audio.shot("rocket"),this.fireRocket(o,e.damage*this.player.damageMultiplier*(s?1.5:1));return}this.muzzleTimer=.055,this.audio.shot(e.id);const a=this.camera.getWorldPosition(new A),o=this.camera.getWorldDirection(new A);if(this.isTouch){const u=this.getAimAssist(a,o);u&&o.copy(u)}let l=!1,c=!1;for(let u=0;u<e.pellets;u++){const f=o.clone(),h=e.spread*(this.aiming?.45:1);f.x+=_t(-h,h),f.y+=_t(-h,h),f.z+=_t(-h,h),f.normalize(),this.raycaster.set(a,f),this.raycaster.far=e.range;const d=this.raycaster.intersectObjects(this.worldColliders,!1),g=d.length?d[0].distance:e.range,_=this.raycaster.intersectObjects(this.enemyHitMeshes,!1).filter(x=>{const R=x.object.userData.enemy;return R&&!R.dead&&!R.phased&&x.distance<g}),m=this.raycaster.intersectObjects(this.barrelMeshes,!1).filter(x=>{const R=x.object.userData.barrel;return R&&!R.dead&&x.distance<g}),p=_.length?_[0].distance:1/0,T=m.length?m[0].distance:1/0;let w=a.clone().addScaledVector(f,g);if(d.length&&(w=d[0].point),T<g&&T<=p)w=m[0].point,this.damageBarrel(m[0].object.userData.barrel,e.damage*this.player.damageMultiplier*(s?1.5:1),f),this.spawnParticles(w,16753226,3,1.3);else if(_.length){l=!0;const x=[];for(const R of _){const C=R.object.userData.enemy;if(x.includes(C))continue;x.push(C);const P=R.object.userData.critical,L=Math.random()<n.critChance,S=e.damage*n.damageMultiplier*(s?1.5:1)*(P?1.65:1)*(L?n.critMultiplier:1),E=this.damageEnemy(C,S,f,{critical:!!(P||L),critRoll:L});if(e.chain&&this.chainLightning(C,R.point,S,e.chain+n.chainBonus,new Set(x)),e.frost&&(C.slow=Math.max(C.slow||0,e.slowDuration*(n.frostDuration||1)),C.slowMul=Math.max(.2,e.slowStrength*(n.frostSlow||1)),this.spawnParticles(R.point,10479871,5,1.6)),c=c||E,!e.pierce){w=R.point;break}}this.spawnParticles(w,9437168,e.id==="rail"?10:4,2.2)}else d.length&&this.spawnParticles(w,7055e3,3,1.3);(u===0||e.id==="shotgun")&&this.createTracer(a,w,e.id==="rail"?7523071:e.id==="shotgun"?16757860:e.id==="arc"?8251647:7471067,e.id==="rail"?.22:.07)}l&&(this.shotsHit+=1,this.addEnergy(1.4),this.audio.hit(),this.callbacks.onHit(c))}fireRocket(e,t){const n=this.camera.getWorldPosition(new A).addScaledVector(e,1),s=new se(this.sharedProjectileGeometry,new ot({color:16747069,toneMapped:!1}));s.scale.setScalar(1.9),s.position.copy(n),this.scene.add(s),this.projectiles.push({mesh:s,velocity:e.clone().multiplyScalar(36),damage:t,aoe:bt[4].aoe,life:4.5,homing:!0,rocket:!0,source:n.clone()})}explodeRocket(e){const t=e.mesh.position.clone();this.scene.remove(e.mesh);const n=e.aoe;this.spawnParticles(t,16742973,this.isTouch?16:30,6),this.createPulseEffect(t,16747069,n),this.audio.explosion(),this.shake=Math.min(1.3,this.shake+.4);let s=0;for(const r of this.enemies){if(r.dead||r.phased)continue;const a=r.group.position.distanceTo(t);a<n+r.radius&&this.damageEnemy(r,e.damage*(1-a/(n+r.radius)*.4),t.clone().sub(r.group.position).setY(0).normalize())&&(s+=1)}for(const r of this.barrels)!r.dead&&r.group.position.distanceTo(t)<n+1&&this.damageBarrel(r,999,new A);s>0&&this.unlockAchievement("hive")}damageBarrel(e,t,n){if(!e.dead){if(e.health-=t,e.health<=0){this.explodeBarrel(e);return}e.flash=.12,e.bodyMaterial&&(e.bodyMaterial.emissiveIntensity=2.4)}}explodeBarrel(e){if(e.dead)return;e.dead=!0;const t=e.group.position.clone();e.group.removeFromParent(),this.barrelMeshes=this.barrelMeshes.filter(r=>r.userData.barrel!==e),this.obstacles=this.obstacles.filter(r=>r!==e.box),this.spawnParticles(t.clone().add(new A(0,.8,0)),16753226,this.isTouch?18:34,7),this.createPulseEffect(t,16742973,6),this.audio.explosion(),this.shake=Math.min(1.4,this.shake+.5);const n=5.5;let s=0;for(const r of this.enemies){if(r.dead)continue;const a=r.group.position.distanceTo(t);a<n+r.radius&&this.damageEnemy(r,120*(1-a/(n+r.radius)*.5),t.clone().sub(r.group.position).setY(0).normalize())&&(s+=1)}t.distanceTo(this.player.position)<4.5&&this.damagePlayer(34*(1-t.distanceTo(this.player.position)/4.5*.6),t);for(const r of this.barrels)!r.dead&&r!==e&&r.group.position.distanceTo(t)<4.5&&this.damageBarrel(r,999,new A);s>=2&&this.unlockAchievement("barrel")}createHealBeam(e,t){const n=new vt().setFromPoints([e,t]),s=new ki({color:7077808,transparent:!0,opacity:1,blending:tn,depthWrite:!1,toneMapped:!1}),r=new Bs(n,s);this.scene.add(r),this.tracers.push({line:r,life:.25,maxLife:.25})}updateBarrels(e){for(const t of this.barrels)t.dead||t.flash<=0||(t.flash-=e,t.flash<=0&&t.bodyMaterial&&(t.bodyMaterial.emissiveIntensity=.5))}chainLightning(e,t,n,s,r){if(s<=0)return 0;let a=t.clone(),o=0;for(let l=0;l<s;l++){let c=null,u=11;for(const h of this.enemies){if(h.dead||h.phased||r.has(h))continue;const d=h.group.position.distanceTo(a);d<u&&(u=d,c=h)}if(!c)break;r.add(c);const f=c.group.position.clone().add(new A(0,c.height*.5,0));this.createArc(a,f,8251647),this.damageEnemy(c,n*Math.pow(.72,l+1)*this.player.chainDamage,f.clone().sub(a).normalize()),a=f,o+=1}return o>=3&&this.unlockAchievement("arc-chain"),o}createArc(e,t,n){const s=[];for(let c=0;c<=6;c++){const u=e.clone().lerp(t,c/6);c>0&&c<6&&u.add(new A(_t(-.35,.35),_t(-.35,.35),_t(-.35,.35))),s.push(u)}const a=new vt().setFromPoints(s),o=new ki({color:n,transparent:!0,opacity:1,blending:tn,depthWrite:!1,toneMapped:!1}),l=new Bs(a,o);this.scene.add(l),this.tracers.push({line:l,life:.18,maxLife:.18})}getAimAssist(e,t){let n=null,s=this.isBoard?.2:.12;const r=this.isBoard?60:45;for(const a of this.enemies){if(a.dead||a.spawnTime>0||a.phased)continue;const l=a.group.position.clone().add(new A(0,a.type==="boss"?3:a.height*.5,0)).sub(e);if(l.length()>r)continue;l.normalize();const u=Math.acos(Bt(t.dot(l),-1,1));u<s&&(s=u,n=l)}return n}damageEnemy(e,t,n,s={}){if(e.dead)return!1;let r=t;this.player.executeBonus>1&&e.health/e.maxHealth<this.player.executeThreshold&&(r*=this.player.executeBonus),s.critRoll&&(this.critCount+=1,this.critCount>=10&&this.unlockAchievement("crit-10")),e.health-=r,e.hitTimer=.07,e.healthBar.visible=!0;const a=Bt(e.health/e.maxHealth,0,1);return e.barFill.scale.x=a,e.barFill.position.x=-(1-a)*(e.barHalf||.6),this.showDamageNumber(e,r,!!s.critical,e.health<=0),e.health<=0?(this.killEnemy(e,n),!0):!1}showDamageNumber(e,t,n,s){const r=this.callbacks.onDamageNumber;if(!r)return;const a=e.group.position.clone().add(new A(_t(-.3,.3),e.height*.6,0));a.project(this.camera),!(a.z<-1||a.z>1)&&r({amount:Math.round(t),x:(a.x*.5+.5)*innerWidth,y:(-a.y*.5+.5)*innerHeight,critical:n,kill:s})}killEnemy(e,t=new A){if(e.dead)return;e.dead=!0,e.deathTimer=e.type==="boss"?1.4:.5,e.healthBar.visible=!1,this.enemyHitMeshes=this.enemyHitMeshes.filter(o=>o.userData.enemy!==e),this.kills+=1,this.combo=Math.min(4,this.combo+(e.type==="boss"?1:.2)),this.comboTimer=4,this.comboPeak=Math.max(this.comboPeak,this.combo),this.addEnergy(6),this.unlockAchievement("first-blood"),this.combo>=2.5&&this.unlockAchievement("combo-master"),e.type==="bomber"&&this.unlockAchievement("defuser"),e.type==="medic"&&this.unlockAchievement("medic-down"),e.type==="falcon"&&(this.falconKills=(this.falconKills||0)+1,this.falconKills>=8&&this.unlockAchievement("falconer")),e.slow>0&&(this.frostKills=(this.frostKills||0)+1,this.frostKills>=15&&this.unlockAchievement("frostbite"));const n=Math.floor(e.score*this.combo);this.score+=n,this.player.health=Math.min(this.player.maxHealth,this.player.health+this.player.killHeal),this.player.shield=Math.min(this.player.maxShield,this.player.shield+this.player.killHeal*.75);const s=e.group.position.clone().add(new A(0,e.type==="boss"?3:1.1,0));this.spawnParticles(s,ul[e.type].color,e.type==="boss"?70:20,e.type==="boss"?8:4.5),e.type==="boss"?(this.audio.explosion(),this.shake=2,this.createPulseEffect(s,16742229,16)):this.audio.kill(),this.callbacks.onKill(e.name,n);const r=this.weaponState.reduce((o,l)=>o+l.ammo+l.reserve,0),a=(this.mode==="training"?.35:.24)*this.difficulty.drop;if(e.type!=="boss"&&(Math.random()<a||r<25)){const o=Math.random();let l=this.player.health<this.player.maxHealth*.55&&o<.5||o<.34?"health":o<.67?"shield":"ammo";r<25&&(l="ammo"),this.spawnPickup(e.group.position,l)}}reload(){if(this.state!=="playing"||this.reloadTimer>0||this.switchTimer>0)return;const e=bt[this.weaponIndex],t=this.weaponState[this.weaponIndex];t.ammo>=e.magazine||t.reserve<=0||(this.reloadTimer=e.reload/this.player.reloadMultiplier,this.firing=!1,this.audio.reload())}finishReload(){const e=bt[this.weaponIndex],t=this.weaponState[this.weaponIndex],n=e.magazine-t.ammo,s=Math.min(n,t.reserve);t.ammo+=s,t.reserve-=s,this.audio.reload()}switchWeapon(e){this.state!=="playing"||e===this.weaponIndex||e>this.unlockedWeapon||e<0||(this.weaponIndex=e,this.reloadTimer=0,this.switchTimer=.32,this.weaponRecoil=.8,this.buildWeaponModel(e),this.audio.ui())}dash(){this.state!=="playing"||this.player.dashCooldown>0||this.player.dashTime>0||(this.player.dashCooldown=this.player.dashMax,this.player.dashTime=.19,this.player.invulnerable=.28,this.audio.dash())}pulse(){if(this.state!=="playing"||this.player.pulseCooldown>0)return;this.player.pulseCooldown=this.player.pulseMax*(this.player.overdrive>0?.5:1);const e=this.player.position.clone();this.createPulseEffect(e,5568466,this.player.pulseRadius),this.audio.pulse(),this.shake=.65;for(const t of this.enemies){if(t.dead)continue;const n=t.group.position.distanceTo(e);if(n<=this.player.pulseRadius){const s=t.group.position.clone().sub(e).setY(0).normalize();this.damageEnemy(t,this.player.pulseDamage*this.player.damageMultiplier*(1-n/this.player.pulseRadius*.35),s),t.dead||(t.group.position.addScaledVector(s,t.type==="boss"?.4:1.4),this.player.frostPulse&&(t.slow=Math.max(t.slow||0,2.5),t.slowMul=Math.max(.2,.4)))}}}createPulseEffect(e,t,n){const s=new se(new Wa(.85,1,64),new ot({color:t,transparent:!0,opacity:.85,side:Ut,blending:tn,depthWrite:!1,toneMapped:!1}));s.rotation.x=-Math.PI/2,s.position.copy(e),s.position.y=.12,this.scene.add(s),this.effects.push({mesh:s,life:.65,maxLife:.65,radius:n})}createTracer(e,t,n,s){const r=this.weaponRoot.localToWorld(new A(0,0,-.8)),a=new vt().setFromPoints([r,t]),o=new ki({color:n,transparent:!0,opacity:.9,blending:tn,depthWrite:!1,toneMapped:!1}),l=new Bs(a,o);this.scene.add(l),this.tracers.push({line:l,life:s,maxLife:s})}spawnParticles(e,t,n=8,s=2){const r=new ot({color:t,transparent:!0,toneMapped:!1}),a=Math.min(n,this.maxParticles);for(let o=0;o<a;o++){const l=new se(this.sharedParticleGeometry,r.clone());l.position.copy(e),l.scale.setScalar(_t(.5,1.8)),this.scene.add(l);const c=new A(_t(-1,1),_t(-.25,1.4),_t(-1,1)).normalize().multiplyScalar(_t(s*.35,s));this.particles.push({mesh:l,velocity:c,life:_t(.25,.65),maxLife:.65})}}updateEffects(e){for(const t of this.particles)t.life-=e,t.velocity.y-=5*e,t.mesh.position.addScaledVector(t.velocity,e),t.mesh.material.opacity=Bt(t.life/t.maxLife,0,1),t.life<=0&&(this.scene.remove(t.mesh),t.remove=!0);this.particles=this.particles.filter(t=>!t.remove);for(const t of this.tracers)t.life-=e,t.line.material.opacity=Bt(t.life/t.maxLife,0,1),t.life<=0&&(this.scene.remove(t.line),t.line.geometry.dispose(),t.line.material.dispose(),t.remove=!0);this.tracers=this.tracers.filter(t=>!t.remove);for(const t of this.effects){t.life-=e;const n=1-t.life/t.maxLife;t.mesh.scale.setScalar(1+n*t.radius),t.mesh.material.opacity=(1-n)*.8,t.life<=0&&(this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),t.remove=!0)}this.effects=this.effects.filter(t=>!t.remove)}spawnPickup(e,t){const n={health:5568466,shield:5810943,ammo:16762460},s=new ft,r=new se(new Nn(.3,0),new ot({color:n[t],toneMapped:!1})),a=new se(new is(.48,.025,6,24),new ot({color:n[t],transparent:!0,opacity:.65,toneMapped:!1}));a.rotation.x=Math.PI/2,s.add(r,a),s.position.copy(e).setY(.7),this.scene.add(s),this.pickups.push({group:s,type:t,life:18,phase:Math.random()*6})}updatePickups(e){for(const t of this.pickups){if(t.life-=e,t.phase+=e,t.group.rotation.y+=e*1.8,t.group.position.y=.7+Math.sin(t.phase*2.5)*.12,t.group.position.distanceTo(this.player.position)<this.player.pickupRadius){const n=this.player.pickupPower;t.type==="health"&&(this.player.health=Math.min(this.player.maxHealth,this.player.health+30*n)),t.type==="shield"&&(this.player.shield=Math.min(this.player.maxShield,this.player.shield+25*n)),t.type==="ammo"&&this.weaponState.forEach((s,r)=>{s.reserve+=Math.ceil(bt[r].magazine*1.5*this.player.ammoMultiplier*n)}),this.callbacks.onToast({health:`纳米修复 +${Math.round(30*n)} HP`,shield:`护盾能量 +${Math.round(25*n)} SH`,ammo:"备用弹药已补充"}[t.type]),this.audio.pickup(),t.life=0}t.life<=0&&(this.scene.remove(t.group),t.remove=!0)}this.pickups=this.pickups.filter(t=>!t.remove)}damagePlayer(e,t){if(this.state!=="playing"||this.player.invulnerable>0||this.mode==="training"||this.cheats.god)return;this.player.lastDamage=0,this.waveDamageTaken+=e,this.addEnergy(8);let n=e;if(this.player.shield>0){const a=Math.min(this.player.shield,n);this.player.shield-=a,n-=a}this.player.health-=n,this.shake=Math.min(1.3,this.shake+.5),this.audio.damage();const s=t.clone().sub(this.player.position),r=Math.atan2(s.x,s.z);this.callbacks.onDamage(r-this.yaw),this.player.health<=0&&this.end(!1)}checkWave(e){if(this.intermission){this.nextWaveTimer-=e,this.nextWaveTimer<=0&&this.startWave();return}if(this.spawnQueue.length&&(this.spawnTimer-=e,this.spawnTimer<=0)){const n=this.spawnQueue.shift();this.spawnEnemy(n),this.spawnTimer=Math.max(.28,.9-this.wave*.035)}const t=this.enemies.some(n=>!n.dead);if(!this.spawnQueue.length&&!t&&!this.waveClearPending){this.waveClearPending=!0,this.wave>0&&this.waveDamageTaken===0&&this.unlockAchievement("flawless");const n=this.runId;this.mode==="campaign"&&this.wave>=10?setTimeout(()=>{this.runId===n&&this.state==="playing"&&this.end(!0)},1200):setTimeout(()=>{this.runId===n&&this.state==="playing"&&this.waveClearPending&&this.offerUpgrades()},900)}}offerUpgrades(){this.state="upgrade",this.firing=!1,document.exitPointerLock?.();const e=[...e0];for(this.currentUpgradeChoices=[];this.currentUpgradeChoices.length<3;){const t=Math.floor(Math.random()*e.length);this.currentUpgradeChoices.push(e.splice(t,1)[0])}this.callbacks.onUpgrades(this.currentUpgradeChoices),this.callbacks.onState("upgrade")}chooseUpgrade(e){if(this.state!=="upgrade"||!this.currentUpgradeChoices[e])return;const t=this.currentUpgradeChoices[e];t.apply(this),this.appliedUpgrades.push({name:t.name,icon:t.icon}),this.audio.upgrade(),this.state="playing",this.waveClearPending=!1,this.intermission=!0,this.nextWaveTimer=2.1,this.callbacks.onState("playing"),this.callbacks.onAnnounce(t.name,"模块安装完成 · 下一波即将到来","TACTICAL MODULE / INSTALLED",1900),this.requestLock()}end(e){if(this.state==="ended")return;this.state="ended",this.firing=!1,document.exitPointerLock?.();const t=Number(localStorage.getItem("nexus-best-score")||0),n=Number(localStorage.getItem("nexus-best-wave")||0),s=this.score>t;s&&localStorage.setItem("nexus-best-score",String(Math.floor(this.score))),this.wave>n&&localStorage.setItem("nexus-best-wave",String(this.wave)),e&&(this.unlockAchievement("victory"),this.difficulty.id==="nightmare"&&this.unlockAchievement("nightmare"));const r=this.saveCareer(e);e?this.audio.victory():this.audio.gameOver(),this.callbacks.onState("ended",{victory:e,score:this.score,wave:this.wave,kills:this.kills,accuracy:this.shotsFired?this.shotsHit/this.shotsFired*100:0,newRecord:s,career:r,difficulty:this.difficulty.label,achievements:[...this.runAchievements]})}saveCareer(e){let t={runs:0,kills:0,wins:0,bestCombo:1,achievements:[]};try{t={...t,...JSON.parse(localStorage.getItem("nexus-career")||"{}")}}catch{}t.runs+=1,t.kills+=this.kills,e&&(t.wins+=1),t.bestCombo=Math.max(Number(t.bestCombo)||1,this.comboPeak),t.achievements=[...new Set([...t.achievements||[],...this.runAchievements])];try{localStorage.setItem("nexus-career",JSON.stringify(t))}catch{}return t}updateHUD(e=!1){if(!e&&this.hudTimer>0)return;this.hudTimer=.07;const t=this.enemies.find(n=>n.type==="boss"&&!n.dead);this.callbacks.onHUD({health:this.player.health,maxHealth:this.player.maxHealth,shield:this.player.shield,maxShield:this.player.maxShield,wave:this.wave,mode:this.mode,enemies:this.enemies.filter(n=>!n.dead).length+this.spawnQueue.length,score:this.score,combo:this.combo,weapon:bt[this.weaponIndex],weaponIndex:this.weaponIndex,ammo:this.weaponState[this.weaponIndex].ammo,reserve:this.weaponState[this.weaponIndex].reserve,reloading:this.reloadTimer>0,unlockedWeapon:this.unlockedWeapon,dashCooldown:this.player.dashCooldown,dashMax:this.player.dashMax,pulseMax:this.player.pulseMax*(this.player.overdrive>0?.5:1),pulseCooldown:this.player.pulseCooldown,boss:t?{health:t.health,maxHealth:t.maxHealth}:null,energy:this.player.energy,energyMax:this.player.energyMax,overdrive:this.player.overdrive,difficulty:this.difficulty.label,critChance:this.player.critChance,intermission:this.intermission,elapsed:this.elapsed,profile:this.profile,demo:this.demoMode,board:this.isBoard})}drawRadar(){const e=this.radarContext,t=this.radar.width,n=t/2,s=t/90;e.clearRect(0,0,t,t),e.save(),e.beginPath(),e.arc(n,n,n-2,0,Math.PI*2),e.clip(),e.strokeStyle="rgba(84,247,210,.13)",e.lineWidth=1,[.33,.66,1].forEach(a=>{e.beginPath(),e.arc(n,n,n*a,0,Math.PI*2),e.stroke()}),e.beginPath(),e.moveTo(n,0),e.lineTo(n,t),e.moveTo(0,n),e.lineTo(t,n),e.stroke();const r=(a,o,l)=>{const c=a.x-this.player.position.x,u=a.z-this.player.position.z,f=Math.cos(-this.yaw),h=Math.sin(-this.yaw),d=c*f-u*h,g=c*h+u*f;Math.hypot(d,g)>43||(e.fillStyle=o,e.beginPath(),e.arc(n+d*s,n+g*s,l,0,Math.PI*2),e.fill())};this.enemies.forEach(a=>{!a.dead&&(!a.phased||this.cheats.wall)&&r(a.group.position,a.type==="boss"?"#ff9a55":a.type==="turret"?"#ffb24d":a.type==="medic"?"#47e0a0":a.type==="bomber"?"#ffc24d":a.type==="phantom"?"#5ce1ff":a.type==="falcon"?"#c6ff3d":"#ff5362",a.type==="boss"?4:2.2)}),this.pickups.forEach(a=>r(a.group.position,"#54f7d2",1.5)),e.restore(),e.fillStyle="#a9fff0",e.beginPath(),e.moveTo(n,n-6),e.lineTo(n-4,n+4),e.lineTo(n+4,n+4),e.closePath(),e.fill()}updateMenu(e){this.menuTime+=e;const t=this.menuTime*.055;this.camera.position.set(Math.sin(t)*30+8,7+Math.sin(t*2)*1.2,Math.cos(t)*30+4),this.camera.lookAt(0,2.7,0),this.camera.fov=Qt(this.camera.fov,58,e*2),this.camera.updateProjectionMatrix(),this.weaponRoot.visible=!1}animate(){requestAnimationFrame(this.animate);const e=Math.min(this.clock.getDelta(),.05);if(this.animatedWorld.forEach(({mesh:t,speed:n,axis:s,update:r})=>{r?r(e,this.menuTime+this.elapsed):s&&(t.rotation[s]+=n*e)}),this.dust&&(this.dust.rotation.y+=e*.003),this.state==="playing"){this.elapsed+=e,this.hudTimer-=e,this.radarTimer-=e,this.updateCheats(e);const t=this.cheats.slow?e*.4:e;this.updatePlayer(e),this.updateEnemies(t),this.updateProjectiles(t),this.updatePickups(t),this.updateEffects(t),this.updateBarrels(t),this.checkWave(e),this.updateHUD(),this.radarTimer<=0&&(this.radarTimer=.09,this.drawRadar())}else this.state==="menu"&&(this.updateMenu(e),this.updateEffects(e));this.renderer.render(this.scene,this.camera)}}const re=i=>document.querySelector(i),Fn=i=>[...document.querySelectorAll(i)],Qn=(i,e=2)=>String(Math.max(0,Math.floor(i))).padStart(e,"0"),n0=i=>Math.floor(i).toLocaleString("en-US").replaceAll(",",","),sc=ic();document.documentElement.dataset.device=sc;const i0={desktop:"DEVICE / DESKTOP",mobile:"DEVICE / MOBILE",board:"DEVICE / SEEWO BOARD"};re("#device-badge").textContent=i0[sc];let rc="campaign",ac="standard",$a="campaign",Mt,fl,pl,ml,gl=0;const s0={briefing:`
    <div class="eyebrow">OPERATION / NEON ASHES</div><h2 id="modal-title">作战简报<span>.</span></h2>
    <p class="modal-lead">02:17，第七区战术网络遭到不明机械军团入侵。你是最后一名仍可链接的「幽灵」作战员。</p>
    <div class="briefing-grid"><div><b>01</b><strong>突破包围</strong><p>清理每一波敌对单位，利用掩体与冲刺避免被集火。</p></div><div><b>02</b><strong>适应战场</strong><p>每波结束从 15 种战术模块中三选一，逐步构筑专属打法。</p></div><div><b>03</b><strong>摧毁核心</strong><p>命中与击毁积攒能量，按 F 释放超载；第 10 波击败守望者。</p></div></div>
    <div class="intel-row v2"><span>红色敌人擅长突袭</span><span>紫色敌人远程攻击</span><span>橙色重装移动缓慢</span><span>青色幽影会相位隐形</span><span>黄色蜂群贴近后自毁</span><span>绿色单元会修复友军</span><span>琥珀炮台定点轰炸</span><span>青柠游隼高速俯冲</span><span>油桶可被引爆</span></div>`,armory:`
    <div class="eyebrow">TACTICAL LOADOUT / NX SERIES</div><h2 id="modal-title">武器库<span>.</span></h2><p class="modal-lead">六把武器均在行动中按波次自动解锁。按 1–6 或滚轮快速切换。</p>
    <div class="armory-list"><article><div class="weapon-silhouette rifle">VX-9</div><div><small>01 / 初始装备</small><h3>VX-9 脉冲</h3><p>稳定的全自动脉冲步枪，适合中距离持续压制。</p><span>伤害 24　·　射速 9/s　·　弹匣 30</span></div></article><article><div class="weapon-silhouette shotgun">SG-12</div><div><small>02 / 第 2 波解锁</small><h3>SG-12 裂解</h3><p>八枚高能弹丸同时释放，近距离可造成毁灭性伤害。</p><span>伤害 14×8　·　射速 1.2/s　·　弹匣 6</span></div></article><article><div class="weapon-silhouette rail">R-01</div><div><small>03 / 第 4 波解锁</small><h3>R-01 磁轨</h3><p>高精度磁轨射线，贯穿一条直线上的所有敌人。</p><span>伤害 135　·　射速 0.8/s　·　弹匣 5</span></div></article><article class="v2"><div class="weapon-silhouette rail">ARC-7</div><div><small>04 / 第 6 波解锁</small><h3>ARC-7 弧光</h3><p>发射链式电弧，命中后自动跳跃到附近敌人，最多连锁 3 个目标。</p><span>伤害 46　·　射速 3.4/s　·　弹匣 24</span></div></article><article class="v2"><div class="weapon-silhouette rocket">WN-5</div><div><small>05 / 第 8 波解锁</small><h3>WN-5 蜂巢</h3><p>六管制导发射器，导弹自动锁定最近敌人，命中后产生范围爆炸，可连爆油桶。</p><span>伤害 120　·　射速 1.1/s　·　弹匣 4</span></div></article><article class="v2"><div class="weapon-silhouette frost">LN-3</div><div><small>06 / 第 9 波解锁</small><h3>LN-3 寒霜</h3><p>低温步枪，命中使敌人减速 50%，是控场与切断冲锋的核心手段。</p><span>伤害 30　·　射速 4.2/s　·　弹匣 22</span></div></article></div>`,controls:`
    <div class="eyebrow">NEURAL INTERFACE / MANUAL</div><h2 id="modal-title">操作指南<span>.</span></h2>
    <div class="controls-grid"><div><h3>键鼠操作</h3><p><kbd>W A S D</kbd><span>移动</span></p><p><kbd>鼠标</kbd><span>观察 / 瞄准</span></p><p><kbd>左键 / 右键</kbd><span>射击 / 精确瞄准</span></p><p><kbd>Shift</kbd><span>疾跑</span></p><p><kbd>Q / E</kbd><span>冲刺 / 电磁脉冲</span></p><p><kbd>F</kbd><span>核心超载（能量满时）</span></p><p><kbd>R / 1–6</kbd><span>装填 / 切换六把武器</span></p><p><kbd>ESC / P</kbd><span>暂停</span></p></div><div><h3>触屏操作</h3><p><kbd>左侧摇杆</kbd><span>移动</span></p><p><kbd>右侧滑动</kbd><span>观察 / 瞄准</span></p><p><kbd>FIRE</kbd><span>按住连续射击</span></p><p><kbd>Q / E</kbd><span>冲刺 / 电磁脉冲</span></p><p><kbd>F</kbd><span>核心超载</span></p><p><kbd>R / ⇄</kbd><span>装填 / 切换武器</span></p><p><kbd>Ⅱ</kbd><span>暂停</span></p><small>手机端会自动辅助瞄准近距离目标。</small></div></div>
    <p class="modal-lead" style="margin-top:16px">首页「威胁校准」可选择新兵 / 标准 / 噩梦三档难度，影响敌人强度、掉落率与积分倍率。</p>
    <div class="board-note"><h3>希沃白板 / 教学一体机</h3><p>首页「设备适配」选择「白板大屏」：全部按钮放大到适合手指点击，支持红外多点触控（一人移动、一人开火），弹药打空自动装填，无需键盘鼠标。点 <kbd>AUTO</kbd> 开启课堂演示，自动锁定最近目标并持续开火，适合投屏讲解；<kbd>◎</kbd> 为精确瞄准。</p></div>
    <div class="board-note" style="border-color:#ff4d6d44"><h3>越界协议 // OVERBOUND 作弊码</h3><p>单机训练用外挂。游戏中直接敲字母触发（大小写均可）：<kbd>LOCKON</kbd> 锁头、<kbd>AUTOFIRE</kbd> 自动射击、<kbd>GODMODE</kbd> 无敌、<kbd>INFINITY</kbd> 无限弹药、<kbd>XRAY</kbd> 透视、<kbd>TIMESLIP</kbd> 子弹时间、<kbd>PURGE</kbd> 清场、<kbd>ARSENAL</kbd> 全武器、<kbd>RECHARGE</kbd> 回满、<kbd>OVERBOUND</kbd> 全开、<kbd>STANDDOWN</kbd> 全关。按 <kbd>&#96;</kbd> 或 <kbd>↑↑↓↓←→←→BA</kbd> 展开作弊清单。</p></div>`};function r0(){let i={runs:0,kills:0,wins:0,bestCombo:1,achievements:[]};try{i={...i,...JSON.parse(localStorage.getItem("nexus-career")||"{}")}}catch{}const e=new Set(i.achievements||[]);return`
    <div class="eyebrow">OPERATIVE RECORD / ARCHIVE</div><h2 id="modal-title">生涯档案<span>.</span></h2>
    <p class="modal-lead">战绩仅保存在本机浏览器，不会上传。挑战噩梦难度，解锁全部战术徽章。</p>
    <div class="career-grid"><div><small>出击次数</small><strong>${i.runs}</strong></div><div><small>累计击毁</small><strong>${i.kills}</strong></div><div><small>通关次数</small><strong>${i.wins}</strong></div><div><small>最高连击</small><strong>×${Number(i.bestCombo||1).toFixed(1)}</strong></div></div>
    <div class="eyebrow">战术徽章 · ${e.size} / ${Xs.length}</div>
    <div class="achievement-list">${Xs.map(t=>`<div class="achievement-item ${e.has(t.id)?"unlocked":""}"><i>${e.has(t.id)?"◆":"◇"}</i><div><strong>${t.name}</strong><small>${t.desc}</small></div></div>`).join("")}</div>`}function a0(i){re("#modal-content").innerHTML=i==="career"?r0():s0[i],re("#modal-backdrop").classList.add("active")}function js(){re("#modal-backdrop").classList.remove("active")}Fn("[data-modal]").forEach(i=>i.addEventListener("click",()=>a0(i.dataset.modal)));re("#modal-close").addEventListener("click",js);re("#modal-backdrop").addEventListener("click",i=>{i.target===re("#modal-backdrop")&&js()});Fn(".mode-card").forEach(i=>i.addEventListener("click",()=>{Fn(".mode-card").forEach(e=>e.classList.remove("selected")),i.classList.add("selected"),rc=i.dataset.mode,Mt?.audio.ui()}));Fn(".difficulty-chip").forEach(i=>i.addEventListener("click",()=>{Fn(".difficulty-chip").forEach(e=>e.classList.remove("selected")),i.classList.add("selected"),ac=i.dataset.difficulty,Mt?.audio.ui()}));let La=null;try{La=localStorage.getItem("nexus-device")}catch{}const _l=new URLSearchParams(location.search).get("device"),o0=["desktop","mobile","board"].includes(_l)?_l:null,l0=o0||(["desktop","mobile","board"].includes(La)?La:"auto");Fn(".device-chip").forEach(i=>{i.classList.toggle("selected",i.dataset.device===l0),i.addEventListener("click",()=>{const e=i.dataset.device;try{e==="auto"?localStorage.removeItem("nexus-device"):localStorage.setItem("nexus-device",e)}catch{}Mt?.audio.ui(),setTimeout(()=>location.reload(),140)})});function c0(i,e={}){re("#menu-screen").classList.toggle("active",i==="menu"),re("#hud").classList.toggle("active",["playing","paused","upgrade"].includes(i)),re("#pause-screen").classList.toggle("active",i==="paused"),re("#upgrade-screen").classList.toggle("active",i==="upgrade"),re("#end-screen").classList.toggle("active",i==="ended"),i==="menu"&&(Ka(),document.exitPointerLock?.()),i==="ended"&&x0(e)}function h0(i){re("#health-fill").style.width=`${Math.max(0,i.health/i.maxHealth*100)}%`,re("#health-value").textContent=Math.ceil(Math.max(0,i.health)),re("#shield-fill").style.width=`${Math.max(0,i.shield/i.maxShield*100)}%`,re("#shield-value").textContent=Math.ceil(Math.max(0,i.shield)),re("#wave-value").textContent=Qn(i.wave),re("#wave-total").textContent=i.mode==="campaign"?"/ 10":"/ ∞",re("#mode-label").textContent={campaign:"核心行动",endless:"无尽裂隙",training:"模拟训练"}[i.mode],re("#difficulty-label").textContent=i.difficulty,re("#enemy-count").textContent=i.intermission?"区域暂时安全":`${i.enemies} 个敌对信号`,re("#score-value").textContent=Qn(i.score,6),re("#combo-value").textContent=`× ${i.combo.toFixed(1)}`,re("#weapon-name").innerHTML=i.weapon.label,re("#weapon-class").textContent=i.weapon.className,re("#ammo-value").textContent=Qn(i.ammo),re("#reserve-value").textContent=i.reserve,re("#reload-hint").classList.toggle("visible",i.ammo===0||i.reloading),re("#reload-hint").textContent=i.reloading?"正在装填…":"按 R 装填弹药",re("#crosshair").classList.toggle("reloading",i.reloading),Fn(".weapon-slots span").forEach((n,s)=>{n.classList.toggle("active",s===i.weaponIndex),n.classList.toggle("locked",s>i.unlockedWeapon)}),vl("#ability-dash",i.dashCooldown,i.dashMax),vl("#ability-pulse",i.pulseCooldown,i.pulseMax);const e=i.overdrive>0?100:i.energy/i.energyMax*100;re("#energy-fill").style.width=`${Math.max(0,Math.min(100,e))}%`;const t=i.energy>=i.energyMax&&i.overdrive<=0;re("#energy-block").classList.toggle("ready",t),re("#energy-block").classList.toggle("active",i.overdrive>0),re("#overdrive-status").textContent=i.overdrive>0?`超载 ${i.overdrive.toFixed(1)}s`:t?"就绪 · 按 F 释放":`充能 ${Math.floor(e)}%`,re("#mobile-overdrive")?.classList.toggle("ready",t),re("#boss-hud").classList.toggle("active",!!i.boss),i.boss&&(re("#boss-fill").style.width=`${Math.max(0,i.boss.health/i.boss.maxHealth*100)}%`),re("#objective").classList.toggle("hidden",i.wave>1||i.elapsed>12),i.board&&(re("#board-badge").classList.toggle("demo",!!i.demo),re("#board-demo-state").textContent=i.demo?"自动演示中":"手动操作")}function vl(i,e,t){const n=re(i),s=e<=0;n.classList.toggle("cooldown",!s),n.querySelector(".ability-status").textContent=s?"就绪":`${e.toFixed(1)}s`,n.querySelector(".ability span i").style.width=`${100-Math.min(100,e/Math.max(.1,t)*100)}%`}function d0(i,e="",t="COMBAT UPDATE",n=2200){clearTimeout(fl);const s=re("#announcer");s.querySelector("small").textContent=t,s.querySelector("strong").textContent=i,s.querySelector("p").textContent=e,s.classList.add("active"),fl=setTimeout(()=>s.classList.remove("active"),n)}function u0(i,e=1800){clearTimeout(pl),re("#interact-toast").textContent=i,re("#interact-toast").classList.add("active"),pl=setTimeout(()=>re("#interact-toast").classList.remove("active"),e)}function f0(i){const e=re("#achievement-toast");e.querySelector("strong").textContent=i.name,e.querySelector("p").textContent=i.desc,e.classList.remove("active"),e.offsetWidth,e.classList.add("active"),clearTimeout(ml),ml=setTimeout(()=>e.classList.remove("active"),3e3)}function p0({amount:i,x:e,y:t,critical:n,kill:s}){const r=re("#damage-numbers"),a=performance.now();if(r.children.length>18||a-gl<18)return;gl=a;const o=document.createElement("div");o.className=`damage-number${s?" kill":n?" critical":""}`,o.textContent=i,o.style.left=`${e}px`,o.style.top=`${t}px`,r.appendChild(o),setTimeout(()=>o.remove(),820)}function m0(i){const e=i.upgrades.length?i.upgrades.map(t=>`<span>${t.icon} ${t.name}</span>`).join(""):'<span class="pause-build-empty">尚未安装战术模块</span>';re("#pause-build").innerHTML=`
    <div class="pause-build-head"><span>当前作战配置</span><span>${i.difficulty}难度</span></div>
    <div class="pause-build-stats"><span>伤害 +${i.damage}%</span><span>暴击 ${i.crit}%</span><span>击毁 ${i.kills}</span><span>波次 ${Qn(i.wave)}</span></div>
    <div class="pause-build-modules">${e}</div>`}function g0(i,e){const t=document.createElement("div");for(t.innerHTML=`<span>目标清除</span><strong>${i}</strong><b>+${e}</b>`,re("#kill-feed").prepend(t),setTimeout(()=>t.remove(),3500);re("#kill-feed").children.length>4;)re("#kill-feed").lastChild.remove()}function _0(i=!1){const e=re("#hitmarker");e.classList.remove("active","kill"),e.offsetWidth,e.classList.add("active"),i&&e.classList.add("kill")}function v0(i){re("#upgrade-options").innerHTML=i.map((e,t)=>`
    <button class="upgrade-card" data-upgrade="${t}"><span class="upgrade-number">0${t+1}</span><div class="upgrade-icon">${e.icon}</div><small>${e.type}</small><h3>${e.name}</h3><p>${e.description}</p><b>安装模块 ↗</b></button>`).join(""),Fn("[data-upgrade]").forEach(e=>e.addEventListener("click",()=>Mt.chooseUpgrade(Number(e.dataset.upgrade))))}function x0(i){const e=i.victory;re("#end-eyebrow").textContent=e?"CORE DESTROYED / OPERATION COMPLETE":"SIGNAL LOST / OPERATION FAILED",re("#end-title").innerHTML=e?"黎明已至<span>.</span>":"连接中断<span>.</span>",re("#end-desc").textContent=e?"守望者核心已摧毁。第七区的天空，再次属于人类。":"你的作战信号已消失，但裂隙仍在扩张。",re("#end-score").textContent=n0(i.score),re("#end-wave").textContent=Qn(i.wave),re("#end-kills").textContent=i.kills,re("#end-accuracy").textContent=`${Math.round(i.accuracy)}%`,re("#new-record").classList.toggle("active",i.newRecord),re("#end-career").textContent=i.career?`生涯累计 // 出击 ${i.career.runs} 次 · 击毁 ${i.career.kills} · 通关 ${i.career.wins} · 徽章 ${i.career.achievements.length}/${Xs.length} · ${i.difficulty}难度`:"",Ka()}function Ka(){const i=Number(localStorage.getItem("nexus-best-score")||0),e=Number(localStorage.getItem("nexus-best-wave")||0);re("#best-score").textContent=Qn(i,6).replace(/\B(?=(\d{3})+(?!\d))/g,","),re("#best-wave").textContent=`最高波次 ${Qn(e)}`}function M0(i){re("#damage-vignette").classList.remove("active"),re("#damage-vignette").offsetWidth,re("#damage-vignette").classList.add("active"),Number.isFinite(i)&&(re("#damage-direction").style.transform=`translate(-50%, -50%) rotate(${i}rad)`,re("#damage-direction").classList.remove("active"),re("#damage-direction").offsetWidth,re("#damage-direction").classList.add("active"))}function Qs(i){$a=i,js(),Mt.start(i,ac),re("#mobile-demo")?.classList.toggle("active",Mt.demoMode),re("#mobile-aim")?.classList.toggle("active",Mt.aiming)}Mt=new t0(re("#game-canvas"),re("#radar"),{onState:c0,onHUD:h0,onAnnounce:d0,onToast:u0,onKill:g0,onHit:_0,onUpgrades:v0,onDamage:M0,onBuild:m0,onAchievement:f0,onDamageNumber:p0,onDemo:i=>{re("#board-badge").classList.toggle("demo",i),re("#board-demo-state").textContent=i?"自动演示中":"手动操作"}});window.game=Mt;window.__game=Mt;window.nexusGame=Mt;re("#cheat-close").addEventListener("click",()=>Mt.toggleCheatConsole(!1));re("#cheat-console").addEventListener("click",i=>{i.target===re("#cheat-console")&&Mt.toggleCheatConsole(!1)});re("#start-button").addEventListener("click",()=>Qs(rc));re("#training-button").addEventListener("click",()=>Qs("training"));re("#resume-button").addEventListener("click",()=>Mt.resume());re("#pause-button").addEventListener("click",()=>Mt.pause());re("#restart-button").addEventListener("click",()=>Qs($a));re("#retry-button").addEventListener("click",()=>Qs($a));re("#quit-button").addEventListener("click",()=>Mt.quit());re("#end-quit-button").addEventListener("click",()=>Mt.quit());re("#audio-toggle").addEventListener("click",()=>{const i=Mt.audio.toggle();re("#audio-toggle").classList.toggle("muted",!i),localStorage.setItem("nexus-audio",i?"1":"0")});localStorage.getItem("nexus-audio")==="0"&&(Mt.audio.enabled=!1,re("#audio-toggle").classList.add("muted"));document.addEventListener("keydown",i=>{i.code==="Escape"&&re("#modal-backdrop").classList.contains("active")&&js(),re("#upgrade-screen").classList.contains("active")&&["Digit1","Digit2","Digit3"].includes(i.code)&&Mt.chooseUpgrade(Number(i.code.slice(-1))-1)});Ka();

// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,i=o.__defineSetter__,f=o.__lookupGetter__,u=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var l,c,_,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(r,e)||u.call(r,e)?(l=r.__proto__,r.__proto__=o,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&i&&i.call(r,e,t.set),r};var l=e;var c=Number.NEGATIVE_INFINITY;function _(r){return 0===r&&1/r===c}function p(r){return r!=r}function b(r,e,t,o,n,a){var i,f,u,l,c,b,s,y,d,v,j,m,g;if(r<=0||0===e)return t;if(e<0&&(o*=-1,a*=-1),a<0?(y=(1-r)*a,d=0):(y=0,d=(r-1)*a),b=y+a,o<0){for(c=0,f=(l=(1-r)*o)+o,g=1;g<r;g++)if(v=t[f],j=n[b],p(v)){for(u=f,s=b;u>c;)t[u]=t[u+o],n[s]=n[s+a],u+=o,s+=a;t[c]=v,n[d]=j}else{for(i=_(v),u=f-o,s=b-a;u<=l&&(!((m=t[u])<=v)||i&&m===v&&!1===_(m));)t[u+o]=m,n[s+a]=n[s],u-=o,s-=a;t[u+o]=v,n[s+a]=j,f+=o,b+=a}return t}for(c=(r-1)*o,f=(l=0)+o,g=1;g<r;g++)if(v=t[f],j=n[b],p(v)){for(u=f,s=b;u<c;)t[u]=t[u+o],n[s]=n[s+a],u+=o,s+=a;t[c]=v,n[d]=j}else{for(i=_(v),u=f-o,s=b-a;u>=l&&(!((m=t[u])<=v)||i&&m===v&&!1===_(m));)t[u+o]=m,n[s+a]=n[s],u-=o,s-=a;t[u+o]=v,n[s+a]=j,f+=o,b+=a}return t}function s(r,e,t,o,n,a,i,f){var u,l,c,b,s,y,d,v,j,m,g,w,h;if(r<=0||0===e)return t;if(e<0&&(n-=(r-1)*(o*=-1),f-=(r-1)*(i*=-1)),s=(b=n)+(r-1)*o,l=b+o,j=(v=f)+(r-1)*i,y=v+i,o<0){for(h=1;h<r;h++)if(m=t[l],g=a[y],p(m)){for(c=l,d=y;c>s;)t[c]=t[c+o],a[d]=a[d+i],c+=o,d+=i;t[s]=m,a[j]=g}else{for(u=_(m),c=l-o,d=y-i;c<=b&&(!((w=t[c])<=m)||u&&w===m&&!1===_(w));)t[c+o]=w,a[d+i]=a[d],c-=o,d-=i;t[c+o]=m,a[d+i]=g,l+=o,y+=i}return t}for(h=1;h<r;h++)if(m=t[l],g=a[y],p(m)){for(c=l,d=y;c<s;)t[c]=t[c+o],a[d]=a[d+i],c+=o,d+=i;t[s]=m,a[j]=g}else{for(u=_(m),c=l-o,d=y-i;c>=b&&(!((w=t[c])<=m)||u&&w===m&&!1===_(w));)t[c+o]=w,a[d+i]=a[d],c-=o,d-=i;t[c+o]=m,a[d+i]=g,l+=o,y+=i}return t}l(b,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:s});export{b as default,s as ndarray};
//# sourceMappingURL=mod.js.map

(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{jcJX:function(e,t,r){"use strict";r.r(t),r.d(t,"AccountModule",function(){return x});var n=r("ofXK"),i=r("3Pt+"),o=r("fXoL"),s=r("2rwd"),a=r("tyNb"),c=r("gA0Q");let l=(()=>{class e{constructor(e,t,r){this.accountService=e,this.router=t,this.activatedRoute=r}ngOnInit(){this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop",this.createLoginForm()}createLoginForm(){this.loginForm=new i.e({email:new i.c("",[i.q.required,i.q.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),password:new i.c("",i.q.required)})}onSubmit(){this.accountService.login(this.loginForm.value).subscribe(()=>{this.router.navigateByUrl(this.returnUrl)},e=>{console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(o.Mb(s.a),o.Mb(a.c),o.Mb(a.a))},e.\u0275cmp=o.Gb({type:e,selectors:[["app-login"]],decls:10,vars:5,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"]],template:function(e,t){1&e&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"form",2),o.Zb("ngSubmit",function(){return t.onSubmit()}),o.Sb(3,"div",3),o.Sb(4,"h1",4),o.Ac(5,"Login"),o.Rb(),o.Rb(),o.Nb(6,"app-text-input",5),o.Nb(7,"app-text-input",6),o.Sb(8,"button",7),o.Ac(9,"Sign in"),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&e&&(o.Bb(2),o.hc("formGroup",t.loginForm),o.Bb(4),o.hc("label","Email Address"),o.Bb(1),o.hc("label","Password")("type","password"),o.Bb(1),o.hc("disabled",t.loginForm.invalid))},directives:[i.r,i.l,i.f,c.a,i.k,i.d],styles:[""]}),e})();var b=r("HDdC"),u=r("D0XW"),m=r("DH7j");function p(e){return!Object(m.a)(e)&&e-parseFloat(e)+1>=0}var d=r("z+Ro");function f(e){const{index:t,period:r,subscriber:n}=e;if(n.next(t),!n.closed){if(-1===r)return n.complete();e.index=t+1,this.schedule(e,r)}}var h=r("LRne"),g=r("eIep"),v=r("lJxs");function w(e,t){if(1&e&&(o.Sb(0,"li"),o.Ac(1),o.Rb()),2&e){const e=t.$implicit;o.Bb(1),o.Cc(" ",e," ")}}function S(e,t){if(1&e&&(o.Sb(0,"ul",10),o.yc(1,w,2,1,"li",11),o.Rb()),2&e){const e=o.bc();o.Bb(1),o.hc("ngForOf",e.errors)}}const y=[{path:"login",component:l},{path:"register",component:(()=>{class e{constructor(e,t,r){this.fb=e,this.accountService=t,this.router=r}ngOnInit(){this.createRegisterForm()}createRegisterForm(){this.registerForm=this.fb.group({displayName:[null,[i.q.required]],email:[null,[i.q.required,i.q.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],[this.validateEmailNotTaken()]],password:[null,[i.q.required]]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe(e=>{this.router.navigateByUrl("/shop")},e=>{console.log(e),this.errors=e.errors})}validateEmailNotTaken(){return e=>function(e=0,t,r){let n=-1;return p(t)?n=Number(t)<1?1:Number(t):Object(d.a)(t)&&(r=t),Object(d.a)(r)||(r=u.a),new b.a(t=>{const i=p(e)?e:+e-r.now();return r.schedule(f,i,{index:0,period:n,subscriber:t})})}(500).pipe(Object(g.a)(()=>e.value?this.accountService.checkEmailExists(e.value).pipe(Object(v.a)(e=>e?{emailExists:!0}:null)):Object(h.a)(null)))}}return e.\u0275fac=function(t){return new(t||e)(o.Mb(i.b),o.Mb(s.a),o.Mb(a.c))},e.\u0275cmp=o.Gb({type:e,selectors:[["app-register"]],decls:12,vars:7,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","displayName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["class","text-danger list-unstyled",4,"ngIf"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"],[1,"text-danger","list-unstyled"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"form",2),o.Zb("ngSubmit",function(){return t.onSubmit()}),o.Sb(3,"div",3),o.Sb(4,"h1",4),o.Ac(5,"Register"),o.Rb(),o.Rb(),o.Nb(6,"app-text-input",5),o.Nb(7,"app-text-input",6),o.Nb(8,"app-text-input",7),o.yc(9,S,2,1,"ul",8),o.Sb(10,"button",9),o.Ac(11,"Register"),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&e&&(o.Bb(2),o.hc("formGroup",t.registerForm),o.Bb(4),o.hc("label","Display Name"),o.Bb(1),o.hc("label","Email Address"),o.Bb(1),o.hc("label","Password")("type","password"),o.Bb(1),o.hc("ngIf",t.errors),o.Bb(1),o.hc("disabled",t.registerForm.invalid))},directives:[i.r,i.l,i.f,c.a,i.k,i.d,n.m,n.l],styles:[""]}),e})()}];let R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({imports:[[a.g.forChild(y)],a.g]}),e})();var N=r("PCNd");let x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({imports:[[n.c,R,N.a]]}),e})()}}]);
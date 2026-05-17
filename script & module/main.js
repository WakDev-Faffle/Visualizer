if (!DOM) {};
function __WakWebPack__() {
    let modeList,
        objSuplementary = {
            ['elementContainer'] : {get() {return 'Hey, My homie !'},},
            ['enumProp'] : {value() {'hey!'},},
            //[__WakWebPack__.#sign] : {value() {return (this!=__WakWebPack__)?undefined:this}}
        };
    if (arguments.length) {
        let arg = arguments,
            target = arg[0],
            mode = arg[1];
        console.log(target,mode);
        if (this==globalThis) {
            
        }
        else {

        }
    }
    else if (this!=globalThis) {
        return Object.defineProperties(this,objSuplementary);
    }
    else {
        return Object.create(new __WakWebPack__,objSuplementary);
    }
};
/* Template required => function __WakWebPack__() {
    console.log('bip!',this);
    if (arguments.length) {
        console.log('uh wait...',this);
    }
    if (this!=globalThis) {
        //console.log(__WakWebPack__.prototype.isPrototypeOf(this)); => still be 'true'.
        return Object.defineProperties(this,{message:{value:'Hello world!',},});
    }
    return Object.create(new __WakWebPack__,{message:{value:'Hello world!',},});
}*/
//for (let e of [__WakWebPack__(),new __WakWebPack__]) {console.log(__WakWebPack__.prototype.isPrototypeOf(e));};
console.log(__WakWebPack__(new __WakWebPack__,'idle'),new __WakWebPack__);
var feet = document.getElementById('feet');

var inch = document.getElementById('inch');

feet.addEventListener('input',function(){
    let f = this.value
    let i = f*12
    inch.value = i;
});

inch.addEventListener('input',function(){
    let i = this.value
    let f = i/12
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    };
    feet.value = f; 
});

feet.addEventListener('input',function(){
    let c = this.value
    let f = c*30.48
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    };
    cm.value = f;
});

kg.addEventListener('input',function(){
    let k = this.value
    let p = k*2.20
    ibs.value = p;
});

ibs.addEventListener('input',function(){
    let p = this.value
    let k = p/2.20
    if(!Number.isInteger(k)){
        k = k.toFixed(2);
    };
    kg.value = k; 
});

kg.addEventListener('input',function(){
    let o = this.value
    let k = o*35.27
    if(!Number.isInteger(k)){
        k = k.toFixed(2);
    };
    oz.value = k;
});
function vdot(a,b){
    let r=[],n=0
    for(let i=0;i<a.length;i++){
        r[i]=(a[i]*b[i]);
       n=n+r[i];
    }

    return n
}
    var a=[2,4,6,7],b=[8,6,4,3];
    console.log(vdot(a,b));
function repeat(f,n){
    let x=[]
    for(let i=0;i<n;i++){
        x[i]=Math.random();
        f=x[i]
    }
    return x;
}
var f    ,n=10;
console.log(repeat(f,n));


//ĐỒng bộ
let a=1;
let b=2;
let c=3;
console.log(a);
setTimeout(()=>{
    console.log(b);
},10)
console.log(c);

//Bất đồng bộ CallBack

function hinhChuNhat(d,r,CallBack){
    let dt=d*r;
    let cv=(d+r)*2;
    CallBack(dt,cv);
}

//Gọi Hàm
let d=5;
let r=15;
hinhChuNhat(d,r,(dt,cv)=>{
    console.log(`Hcn co chieu dai ${d} chieu rong ${r} - Chu vi = ${cv} - Dien tich = ${dt}`)
})
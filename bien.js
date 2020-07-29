ds_tivi=[
    {
    "Ten":"Smart Tivi Cong Samsung 49 inch",
    "Ma_so":"TIVI_1",
    "Hinh":"http://10.0.3.2:8081/images/TIVI_1.png",
    "Don_gia":22900000,
    "Danh_sach_Ban_hang":[
    {
    "Ma_so":"PB_1",
    "Ngay":"2018-10-10",
    "So_luong":2,
    "Don_gia":22900000
    },
    {
    "Ma_so":"PB_2",
    "Ngay":"2018-10-10",
    "So_luong":1,
    "Don_gia":22900000
    }
    ]
    },
    {
    "Ten":"Internet Tivi Sony 4K 43 inch",
    "Ma_so":"TIVI_4",
    "Hinh":"http://10.0.3.2:8081/images/TIVI_4.png",
    "Don_gia":14500000,
    },
    {
    "Ten":"Internet Tivi Samsung 32 inch",
    "Ma_so":"TIVI_8",
    "Hinh":"http://10.0.3.2:8081/images/TIVI_8.png",
    "Don_gia":6890000,
    "Danh_sach_Ban_hang":[]
    },
    {
    "Ten":"Internet Tivi Sony 40 inch",
    "Ma_so":"TIVI_10",
    "Hinh":"http://10.0.3.2:8081/images/TIVI_10.png",
    "Don_gia":9990000,
    "Danh_sach_Ban_hang":[]
    },
    {
    "Ten":"Smart Tivi Samsung 40 inch",
    "Ma_so":"TIVI_11",
    "Hinh":"http://10.0.3.2:8081/images/TIVI_11.png",
    "Don_gia":8640000,
    "Danh_sach_Ban_hang":[]
    },
    {
    "Ten":"Smart Tivi LED 4K SONY 49 inch",
    "Ma_so":"TIVI_18",
    "Hinh":"http://10.0.3.2:8081/images/TIVI_18.png",
    "Don_gia":10420000,
    "Danh_sach_Ban_hang":[]
    },
    {
    "Ten": "Smart Tivi LED 4K SONY 75 Inch",
    "Ma_so": "TIVI_20",
    "Hinh":"http://10.0.3.2:8081/images/TIVI_20.png",
    "Don_gia": 7340000,
    "Danh_sach_Ban_hang":[]
    },
    {
    "Ten": "Smart Tivi SONY Ultra HD 75 Inch",
    "Ma_so": "TIVI_22",
    "Hinh":"http://10.0.3.2:8081/images/TIVI_22.png",
    "Don_gia": 11480000,
    "Danh_sach_Ban_hang":[]
    },
    {
    "Ten":"Internet Tivi LG 55 Inch",
    "Ma_so":"TIVI_32",
    "Hinh":"http://10.0.3.2:8081/images/TIVI_32.png",
    "Don_gia":11480000,
    "Danh_sach_Ban_hang":[]
    },
    {
    "Ten":"TV Philips",
    "Ma_so":"TIVI_34",
    "Hinh":"http://10.0.3.2:8081/images/TIVI_34.png",
    "Don_gia":10420000,
    "Danh_sach_Ban_hang":[]
    }
   ];
function output_ds (ds){
    ds.forEach(element => {
        console.log(`${element.Ten} - ${element.Ma_so} - ${element.Don_gia}`)
    })
}
/*
//2.2.1
var gtTim='TIVI_32';
dsLoc=ds_tivi.filter(x=> x.Ma_so.toLowerCase().includes(gtTim.toLowerCase()));
dsLoc.forEach(element => {
    console.log(`${element.Ten} - ${element.Ma_so} - ${element.Don_gia}`)
})   

console.log("-----");
//2.2.2
var gtTim='49 inch';
dsLoc2=ds_tivi.filter(x=> x.Ten.toLowerCase().includes(gtTim.toLowerCase()));
dsLoc2.forEach(element => {
    console.log(`${element.Ten} - ${element.Ma_so} - ${element.Don_gia}`)
})

console.log("-----");
//2.2.3
dsLoc3=ds_tivi.filter(x=> x.Don_gia>=20000000);
dsLoc3.sort((a,b)=> {
    return Number(b.Don_gia)-Number(a.Don_gia);
})
dsLoc3.forEach(element => {
    console.log(`${element.Ten} - ${element.Ma_so} - ${element.Don_gia}`)
})

console.log("-----");
//2.2.4
var gtTim4="2018-10-10";
dsLoc4=ds_tivi.filter(x=> x.Danh_sach_Ban_hang.Ngay.includes(gtTim4));
dsLoc4.forEach(element => {
    console.log(`${element.Ten} - ${element.Ma_so} - ${element.Don_gia}`)
})

//Them du lieu
let tivi={
    "Ten": "Internet Tivi SONY Ultra HD 55 inch",
    "Ma_so": "TIVI_24",
    "Hinh": "http://10.0.3.2:8081/images/TIVI_24.png",
    "Don_gia": 8640000,
    "Danh_sach_Ban_Hang": []
}
*/
//ds_tivi.push(tivi);
output_ds(ds_tivi);
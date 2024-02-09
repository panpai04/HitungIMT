function HitungImt(){

let nama = ["Linda (Wanita)","Alex (Pria)","Matthew (Pria)","Penelope (Wanita)","Tom (Pria)"];
let BeratBadan = [90.2649,90.7185,86.1826,58.967,69.0389];
let TinggiBadan = [1.8,1.575,1.825,1.65,1.725];
for(let a=0; a<nama.length; a++){
    console.log("Nama : ", nama[a], ", Berat Badan : ", BeratBadan[a] , 
    "kg, Tinggi Badan : ", TinggiBadan[a] ,
    "m, Memiliki Nilai IMT Sebesar :", BeratBadan[a]/(TinggiBadan[a]**2), 
    "kg/m^2")
    }

}
HitungImt()

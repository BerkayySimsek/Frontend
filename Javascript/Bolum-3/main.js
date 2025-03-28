// List<int> sayilar = new List<int>();
const sayilar=[10,11,"Merhaba!"]
for (let i = 0; i < 11; i++)
{
    sayilar.push(i)
}
console.log(sayilar)

selamVer("Berkay",sayilar)

// function
function selamVer(isim,soyisim) {
    console.log("Merhaba ",isim," ",soyisim)
}

const selamVer1= function (isim,soyisim) {
    console.log("Merhaba ",isim," ",soyisim)
}
selamVer1("Berkay","Şimşek")

const topla = (sayi1,sayi2)=>{
    return sayi1+sayi2
}
console.log(topla(25,37))
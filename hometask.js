// let yenisetir = "\r\n",balans = 1000;
// let metn = "Bir əməliyyat seçməyiniz xahiş olunur:" + yenisetir + "1 - Balansgöstərmə əməliyyatı" + yenisetir + "2 - Nağdlaşdırma əməliyyatı" + yenisetir + "3 - Balansartıma əməliyyatı" + yenisetir +"4 - Sistemdən çıxış əməliyyatı"

// let sorgu = prompt(metn);

// if (sorgu == "1"){
//     alert("Balansınız: " + balans);
//     console.log("Balansınız: " + balans);
// }
// else if(sorgu=="3"){
//     let elave = Number(prompt("Əlavə etmək  istədiyiniz məbləği daxil edin:"));
//     let yekun = elave + balans
//     console.log("Əlavə etmək istədiyiniz məbləği daxil edin:");
//     alert("Yekun balansınız: " + yekun);
//     console.log("Yekun balansınız: " + yekun);
    
// }else if(sorgu == "2"){
//     let nagd = Number(prompt("Nağdlaşdırmaq istədiyiniz məbləği daxil edin:"));
//     let cixis = balans-nagd;
//     console.log("Nağdlaşdırmaq istədiyiniz məbləği daxil edin:");
//     alert("Nağdlaşdırılan məbləğ: " + nagd + yenisetir + "Yekun balans: " + cixis );
//     console.log("Nağdlaşdırılan məbləğ: " + nagd + yenisetir + "Yekun balans: " + cixis );   
// }else if(sorgu == "4"){
//     alert("Sistemdən uğurla çıxış edilmişdir!");
//     console.log("Sistemdən uğurla çıxış edilmişdir!");
    
// }else {
//     alert("1-4 aralığıda rəqəm daxil etməyini xahiş olunur!")
//     console.log("1-4 aralığıda rəqəm daxil etməyini xahiş olunur!");
    
// }
console.log([...document.body.children].filter(el => el.scrollWidth > document.body.clientWidth));
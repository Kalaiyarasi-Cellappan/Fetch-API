let coat = document.getElementById("jpg");
let ca = document.getElementById("borders");
let cont = document.getElementById("cotinents");
let tze = document.getElementById("timzones");
let popu = document.getElementById("poplation");
let re = document.getElementById("regon");
let sre = document.getElementById("subregon");
async function cp(){
    let response1 = await fetch("https://restcountries.com/v3.1/name/united");
     let responseBody1 = await response1.json();
     return responseBody1;
}
cp().then((res) =>{
    console.log(res);
    coat.setAttribute("src",res[0].flags.png);
    ca.innerHTML="Capital : "+res[0].borders;
    cont.innerHTML="Continents : " +res[0].continents;
    tze.innerHTML="Time-Zones : "+res[0].timezones;
    popu.innerHTML="Population : " +res[0].population;
    re.innerHTML="Region : "+res[0].region;
    sre.innerHTML="Sub-Region : "+res[0].subregion;
}).catch((e) =>{
    console.log("error");
})

let coat1 = document.getElementById("jpg1");
let ca1 = document.getElementById("borders1");
let cont1 = document.getElementById("cotinents1");
let tze1 = document.getElementById("timzones1");
let popu1 = document.getElementById("poplation1");
let re1 = document.getElementById("regon1");
let sre1 = document.getElementById("subregon1");
async function cp1(){
    let response2 = await fetch("https://restcountries.com/v3.1/name/united");
     let responseBody2 = await response2.json();
     return responseBody2;
}
cp1().then((res2) =>{
    console.log(res2);
    coat1.setAttribute("src",res2[1].flags.png);
    ca1.innerHTML="Capital : "+res2[1].borders;
    cont1.innerHTML="Continents : " +res2[1].continents;
    tze1.innerHTML="Time-Zones : "+res2[1].timezones;
    popu1.innerHTML="Population : " +res2[1].population;
    re1.innerHTML="Region : "+res2[1].region;
    sre1.innerHTML="Sub-Region : "+res2[1].subregion;
}).catch((e) =>{
    console.log("error");
})

let coat2 = document.getElementById("jpg2");
let ca2 = document.getElementById("borders2");
let cont2 = document.getElementById("cotinents2");
let tze2 = document.getElementById("timzones2");
let popu2 = document.getElementById("poplation2");
let re2 = document.getElementById("regon2");
let sre2 = document.getElementById("subregon2");
async function cpl(){
    let response3 = await fetch("https://restcountries.com/v3.1/name/united");
     let responseBody3 = await response3.json();
     return responseBody3;
}
cpl().then((res3) =>{
    console.log(res3);
    coat2.setAttribute("src",res3[2].flags.png);
    ca2.innerHTML="Capital : "+res3[2].borders;
    cont2.innerHTML="Continents : " +res3[2].continents;
    tze2.innerHTML="Time-Zones : "+res3[2].timezones;
    popu2.innerHTML="Population : " +res3[2].population;
    re2.innerHTML="Region : "+res3[2].region;
    sre2.innerHTML="Sub-Region : "+res3[2].subregion;
}).catch((e) =>{
    console.log("error");
})
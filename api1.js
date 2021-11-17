
let flag = document.getElementById("png");
let cap = document.getElementById("capital");
let con = document.getElementById("continents");
let tz = document.getElementById("timezones");
let pop = document.getElementById("population");
let reg = document.getElementById("region");
let sr = document.getElementById("subregion");


async function dollar(){
    let response = await fetch("https://restcountries.com/v3.1/currency/dollar");
    let responseBody=await response.json();
    return responseBody;
}

dollar().then((res) =>{
    console.log(res);
    flag.setAttribute("src",res[0].flags.png);
    cap.innerHTML="Capital : "+res[0].capital;
    con.innerHTML="Continents : " +res[0].continents;
    tz.innerHTML="Time-Zones : "+res[0].timezones;
    pop.innerHTML="Population : " +res[0].population;
    reg.innerHTML="Region : "+res[0].region;
    sr.innerHTML="Sub-Region : "+res[0].subregion;
}).catch((e) =>{
    console.log("error");
})

let f = document.getElementById("png1");
let pac = document.getElementById("capital1");
let noc = document.getElementById("continents1");
let tzs = document.getElementById("timezones1");
let poi = document.getElementById("population1");
let reeg = document.getElementById("region1");
let sreeg = document.getElementById("subregion1");
async function doll(){
    let response1 = await fetch("https://restcountries.com/v3.1/currency/dollar");
    let responseBody1=await response1.json();
    return responseBody1;
}
doll().then((res1) =>{
    console.log(res1);
    f.setAttribute("src",res1[1].flags.png);
    pac.innerHTML="Capital : "+res1[1].capital;
    noc.innerHTML="Continents : " +res1[1].continents;
    tzs.innerHTML="Time-Zones : "+res1[1].timezones;
    poi.innerHTML="Population : " +res1[1].population;
    reeg.innerHTML="Region : "+res1[1].region;
    sreeg.innerHTML="Sub-Region : "+res1[1].subregion;
}).catch((e) =>{
    console.log("error");
})


let gla = document.getElementById("png2");
let tal = document.getElementById("capital2");
let nen = document.getElementById("continents2");
let tzz = document.getElementById("timezones2");
let lat = document.getElementById("population2");
let rer = document.getElementById("region2");
let srer = document.getElementById("subregion2");

async function lar(){
    let response2 = await fetch("https://restcountries.com/v3.1/currency/dollar");
    let responseBody2=await response2.json();
    return responseBody2;
}
lar().then((res2) =>{
    console.log(res2);
    gla.setAttribute("src",res2[2].flags.png);
    tal.innerHTML="Capital : "+res2[2].capital;
    nen.innerHTML="Continents : " +res2[2].continents;
    tzz.innerHTML="Time-Zones : "+res2[2].timezones;
    lat.innerHTML="Population : " +res2[2].population;
    rer.innerHTML="Region : "+res2[2].region;
    srer.innerHTML="Sub-Region : "+res2[2].subregion;
}).catch((e) =>{
    console.log("error");
})







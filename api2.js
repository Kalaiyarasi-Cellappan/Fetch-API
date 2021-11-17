let coat = document.getElementById("jpg");
let ca = document.getElementById("borders");
let cont = document.getElementById("cotinents");
let tze = document.getElementById("timzones");
let popu = document.getElementById("poplation");
let re = document.getElementById("regon");
let sre = document.getElementById("subregon");
async function cp(){
    let response1 = await fetch("https://restcountries.com/v3.1/alpha/pe");
     let responseBody1 = await response1.json();
     return responseBody1;
}
cp().then((res) =>{
    console.log(res);
    coat.setAttribute("src",res[0].coatOfArms.png);
    ca.innerHTML="Capital : "+res[0].borders;
    cont.innerHTML="Continents : " +res[0].continents;
    tze.innerHTML="Time-Zones : "+res[0].timezones;
    popu.innerHTML="Population : " +res[0].population;
    re.innerHTML="Region : "+res[0].region;
    sre.innerHTML="Sub-Region : "+res[0].subregion;
}).catch((e) =>{
    console.log("error");
})

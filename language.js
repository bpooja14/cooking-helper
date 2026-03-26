const translations = {

en:{
home:"Home",
menu:"Weekly Menu",
recipe:"Recipes",
ingredient:"Ingredients",
title:"What Should I Cook Today?",
subtitle:"Plan your daily meals easily",
todayBtn:"View Today Menu",
explore:"Explore Recipes",
sabji:"Sabji",
roti:"Roti",
sweet:"Sweet Dish",
quick:"Quick Recipes",
login:"Login",
register:"Register"
},

mr:{
home:"मुख्यपृष्ठ",
menu:"आठवड्याचे मेनू",
recipe:"रेसिपी",
ingredient:"साहित्य",
title:"आज काय बनवायचे?",
subtitle:"दररोजच्या जेवणाची योजना करा",
todayBtn:"आजचा मेनू पहा",
explore:"रेसिपी पहा",
sabji:"भाजी",
roti:"पोळी",
sweet:"गोड पदार्थ",
quick:"झटपट रेसिपी",
login:"लॉगिन",
register:"नोंदणी"
},

hi:{
home:"होम",
menu:"साप्ताहिक मेनू",
recipe:"रेसिपी",
ingredient:"सामग्री",
title:"आज क्या पकाएं?",
subtitle:"अपने दैनिक भोजन की योजना बनाएं",
todayBtn:"आज का मेनू देखें",
explore:"रेसिपी देखें",
sabji:"सब्जी",
roti:"रोटी",
sweet:"मिठाई",
quick:"जल्दी बनने वाली रेसिपी",
login:"लॉगिन",
register:"रजिस्टर"
}

};

function changeLanguage(){

let lang=document.getElementById("language").value;

localStorage.setItem("language",lang);

applyLanguage();

}

function applyLanguage(){

let lang=localStorage.getItem("language") || "en";

let elements=document.querySelectorAll("[data-key]");

elements.forEach(function(el){

let key=el.getAttribute("data-key");

if(translations[lang][key]){
el.innerText=translations[lang][key];
}

});

let selector=document.getElementById("language");

if(selector){
selector.value=lang;
}

}

window.onload=applyLanguage;
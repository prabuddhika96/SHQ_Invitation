document.getElementById("name").innerHTML='';

const queryString = window.location.search;
let encryptedname=queryString.substring(1).split("=")[1];

console.log(encryptedname);

let name='';

if(encryptedname=='N7K4mMufZQOGeAG'){
    name ='Prof. Amalka Pinidiyaarachchi';
}
else if(encryptedname=='Y0O5FS89EEKPG'){
    name='Mr. Prabath Gunathilake';
}
else if(encryptedname=='b0xKODsbmR'){
    name='Dr. Erunika Dayarathne';
}
else if(encryptedname=='Km5U2EM4FG2'){
    name='Dr. Ruwan Nawarathne';
}
else if(encryptedname=='TU5On/rRLZ4'){
    name='Dr. Lakshika Nawarathne';
}
else{
    name='Other';
}

console.log(name);
document.getElementById("name").innerHTML=name;
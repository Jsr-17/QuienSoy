const cayetana= document.querySelector("#Cayetana");
const roberto=document.querySelector("#Roberto");
const mara= document.querySelector("#Mara");
const marta=document.querySelector("#Marta");
const asier= document.querySelector("#Asier");
const alvaro=document.querySelector("#Alvaro");
const maria= document.querySelector("#Maria");
const manolo=document.querySelector("#Manolo");
const valentina= document.querySelector("#Valentina");
const javier=document.querySelector("#Javier");
const vanesa= document.querySelector("#Vanessa");
const juan=document.querySelector("#Juan");
const felipe= document.querySelector("#Felipe");
const david=document.querySelector("#David");
const esther= document.querySelector("#Esther");
const gracia=document.querySelector("#Gracia");
const idoia= document.querySelector("#Idoia");
const ramon=document.querySelector("#Ramon");
const aitana= document.querySelector("#Aitana");
const xema=document.querySelector("#Xema");
const jesus= document.querySelector("#Jesus");
const rita=document.querySelector("#Rita");
const juana= document.querySelector("#Juana");
const jeronimo=document.querySelector("#Jeronimo");

const arrayPersonajes=[
    cayetana,roberto,manolo,maria,
    mara,marta,aitana,alvaro,asier,
    valentina,vanesa,juan,javier,jeronimo
    ,jesus,juana,idoia,xema,gracia,rita,
    felipe,david,esther,ramon
];
/*
for(let i =0;i<arrayPersonajes.length;i++){

    console.log(arrayPersonajes[i]);
}*/
function  consigueAtributos(atributo,caracteristica){
        for (let index = 0; index < arrayPersonajes.length; index++) {
            let atributos = arrayPersonajes[index].getAttribute(atributo);
            if(atributos != caracteristica){
                arrayPersonajes[index].style.opacity="0.5";
            }
        }
}
consigueAtributos("sexo","hombre");
consigueAtributos("colorPiel","negro");
consigueAtributos("barba_bigote","si");
consigueAtributos("pelo","corto");
const cayetana = document.querySelector("#Cayetana");
const roberto = document.querySelector("#Roberto");
const mara = document.querySelector("#Mara");
const marta = document.querySelector("#Marta");
const asier = document.querySelector("#Asier");
const alvaro = document.querySelector("#Alvaro");
const maria = document.querySelector("#Maria");
const manolo = document.querySelector("#Manolo");
const valentina = document.querySelector("#Valentina");
const javier = document.querySelector("#Javier");
const vanesa = document.querySelector("#Vanessa");
const juan = document.querySelector("#Juan");
const felipe = document.querySelector("#Felipe");
const david = document.querySelector("#David");
const esther = document.querySelector("#Esther");
const gracia = document.querySelector("#Gracia");
const idoia = document.querySelector("#Idoia");
const ramon = document.querySelector("#Ramon");
const aitana = document.querySelector("#Aitana");
const xema = document.querySelector("#Xema");
const jesus = document.querySelector("#Jesus");
const rita = document.querySelector("#Rita");
const juana = document.querySelector("#Juana");
const jeronimo = document.querySelector("#Jeronimo");
const datoSelect2 = document.querySelector("#eleccion2");
const datoSelect = document.querySelector("#eleccion");

const colorDelPelo = [
    "Negro", "Castaño", "Pelirrojo", "Rubio"
];

const colorDePiel = [
    "Blanco","Negro"

];
const Gafas = [
    "Si", "No"
];
const formaPelo = [
    "Largo", "Corto"
];
const sexo = [
    "Hombre", "Mujer"
];
const bigote = [
    "Si", "No"
];
const barba = [
    "Si", "No"
];
const colorCamiseta=[
    "Marron","Azul","Rosa","Violeta","Verde","Amarilla"
];
const pendientes=[
    "Si","No"
];


const arrayPersonajes = [
    cayetana, roberto, manolo, maria,
    mara, marta, aitana, alvaro, asier,
    valentina, vanesa, juan, javier, jeronimo
    , jesus, juana, idoia, xema, gracia, rita,
    felipe, david, esther, ramon
];


datoSelect.addEventListener('change', () => {
    for (let i = 0; i < datoSelect.length; i++) {
        const elemento = datoSelect[i].value;

        if (datoSelect[i].selected) {

            switch (elemento) {
                case "colorPelo":
                eliminaElementos();
                    for (let i = 0; i < colorDelPelo.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = colorDelPelo[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }
                    break;

                case "colorPiel":
                    eliminaElementos();
                    for (let i = 0; i < colorDePiel.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = colorDePiel[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }

                    break;

                case "sexo":
                    eliminaElementos();

                    for (let i = 0; i < sexo.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = sexo[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }


                    break;

                case "pelo":
                    eliminaElementos();

                    for (let i = 0; i < formaPelo.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = formaPelo[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }
                    break;

                case "gafas":
                    eliminaElementos();

                    for (let i = 0; i < Gafas.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = Gafas[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }
                    break;

                case "camiseta":
                    eliminaElementos();

                    for (let i = 0; i < colorCamiseta.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = colorCamiseta[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }
                    break;

                case "bigote":
                    eliminaElementos();

                    for (let i = 0; i < bigote.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = bigote[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }
                    break;

                case "barba":
                    eliminaElementos();

                    for (let i = 0; i < barba.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = barba[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }
                    break;

                case "pendientes":
                    eliminaElementos();

                    for (let i = 0; i < pendientes.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = pendientes[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }
                    break;

                default:
                    break;
            }
        }

    }
})






function consigueAtributos(atributo, caracteristica) {
    for (let index = 0; index < arrayPersonajes.length; index++) {
        let atributos = arrayPersonajes[index].getAttribute(atributo);
        if (atributos != caracteristica) {
            arrayPersonajes[index].style.opacity = "0.5";
        }
    }
}



function eliminaElementos(){
    while (datoSelect2.firstChild) {
        datoSelect2.firstChild.remove();
    }

}
const plantilla_header = {
  template: `  <header class="header">
    <div class="malla_2_header">
      <div id="ubicaciones_envoltorio">
        <i class="fa-solid fa-location-dot ubicaciones_header"></i>
        <a class="ubicaciones_header" href="/Joyeria/pages/ubicaciones.html">Ubicaciones</a>
      </div>
      <nav class="navbar">
        <div class="malla_4_nav">
          <div class="tit_nav_a">Joyas
            <div class="malla_1_nav_a">
              <div class="borde_link_nav_item"><a class="link_nav" id="nav_oro" href="/Joyeria/pages/cat_oro.html">oro</a></div>
              <div class="borde_link_nav_item"><a class="link_nav" id="nav_pla" href="/Joyeria/pages/cat_plata.html">plata</a></div>
            </div>
          </div>
          <div class="tit_nav_b">Cambios
            <div class="malla_1_nav_b">
              <div class="borde_link_nav_item"><a class="link_nav" id="nav_dol" href="/Joyeria/pages/cat_dolares.html">dolares</a></div>
              <div class="borde_link_nav_item"><a class="link_nav" id="nav_eur" href="/Joyeria/pages/cat_euros.html">euros</a></div>
            </div>
          </div>
          <a class="tit_nav_d" href="/Joyeria/pages/registro.html">Registrese</a>
        </div>
      </nav>
    </div>
    <div class="titulo_subtitulo">
      <a id="titulo_pagina" href="../index.html">Aurelys</a>
      <a id="subtitulo_pagina" href="../index.html">Joyeria y casa de cambio</a>
    </div>
  </header>`
}

const pers_header = Vue.createApp({
  components : {
    'p_header': plantilla_header
  }
  }).mount("#header") // ese es el id que le puse al div
// Las palabras "template" y "components" son parte de la programacion

const plantilla_aside = {
  template: `
    <coingecko-coin-price-marquee-widget class="barra_cripto" coin-ids="bitcoin,litecoin,vechain,monero" currency="ars"
      locale="es">
    </coingecko-coin-price-marquee-widget>`
}

const pers_aside = Vue.createApp({
  components : {
    'p_aside': plantilla_aside
  }
  }).mount("#asid") // ese es el id que le puse al div
// Las palabras "template" y "components" son parte de la programacion

const plantilla_footer = {
  template: `
    <div class="malla_3_footer">
      <div class="contactos">
        CONTACTOS
        <br>
        <a href="mailto:contacto@aurelysjoyeria.com">preguntas-sugerencias@aurelysjoyeria.com</a>
        <br>
        <a href="mailto:rrhh@aurelysjoyeria.com">rrhh@aurelysjoyeria.com</a>
        <br>
        <a href="mailto:reclamos@aurelysjoyeria.com">reclamos@aurelysjoyeria.com</a>
      </div>
      <div class="infocompany">
        INFORMACION EMPRESARIAL
        <br>
        <a href="/Joyeria/pages/politicas.html">Politicas</a>
        <br>
        <a href="/Joyeria/pages/terminos.html">Terminos y condiciones</a>
        <br>
        <a href="/Joyeria/pages/ubicaciones.html">Ubicaciones</a>
      </div>
      <div class="redes_soc">
        REDES SOCIALES
        <br>
        <a href="https://www.facebook.com/"><i class="fa-brands fa-square-facebook"></i> Facebook</a>
        <br>
        <a href="https://twitter.com/home"><i class="fa-brands fa-square-twitter"></i> Twitter</a>
        <br>
        <a href="https://www.instagram.com/"><i class="fa-brands fa-square-instagram"></i> Instagram</a>
      </div>
    </div>`
}

const pers_footer = Vue.createApp({
  components : {
    'p_footer': plantilla_footer
  }
  }).mount("#foot") // ese es el id que le puse al div
// Las palabras "template" y "components" son parte de la programacion





const { createApp } = Vue
createApp({
  data(){
    return{
      mensaje: "Ubicaciones",
    }
  }
}).mount("#app")


// -------------------------------area mains----------------------------------

const plantilla_main_index = {
  template: `
    <div class="marco_slider">
      <ul>
        <li>
          <img class="imagen_slide" src="img/productos/slide1/slide (1).png" alt="">
          <p>Las tendencias del momento</p>
        </li>
        <li>
          <img class="imagen_slide" src="img/productos/slide1/slide (2).png" alt="">
          <p>Los materiales mas preciosos</p>
        </li>
        <li>
          <img class="imagen_slide" src="img/productos/slide1/slide (3).png" alt="">
          <p>Todo tipo de pagos</p>
        </li>
      </ul>
    </div>
    <div class="subtitulo">
      <a href="/Joyeria/pages/categorias.html">Comprá por categoría</a>
    </div>
    <div class="malla_3_cate">
      <div class="cat_item_gen">
        <img class="imagen_categoria" src="img/productos/botones_categ/oro.png" alt="">
        <a href="/Joyeria/pages/cat_oro.html"><p> <br> <br> Oro</p></a>
      </div>
      <div class="cat_item_gen">
        <img class="imagen_categoria" src="img/productos/botones_categ/plata.png" alt="">
        <a href="/Joyeria/pages/cat_plata.html"><p> <br> <br> Plata</p></a>
      </div>
      <div class="cat_item_gen">
        <img class="imagen_categoria" src="img/productos/botones_categ/dolares.png" alt="">
        <a href="/Joyeria/pages/cat_dolares.html"><p> <br> <br> Dolares</p></a>
      </div>
    </div>`
}

const pers_main_index = Vue.createApp({
  components : {
    'p_main_index': plantilla_main_index
  }
  }).mount("#main_index") // ese es el id que le puse al div
// Las palabras "template" y "components" son parte de la programacion

// -------------------------------area funciones----------------------------------

let ruta_perfil = 'https://randomuser.me/api/?nat=es'//variable donde hacemos referencia al origen de los datos
let ruta_coment = 'https://jsonplaceholder.typicode.com/comments' //variable donde hacemos referencia al origen de los datos
fetch(ruta_perfil) //solicitud a la url (promesa)
  .then(response => response.json()) //se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato (json)
  .then(data1 => traer_nombre1(data1)) //llamamos a la función mostrardata()
  .catch(error => console.log("Ocurrió un error", error)) // si hay un error será atrapado por catch

fetch(ruta_perfil) //solicitud a la url (promesa)
  .then(response => response.json()) //se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato (json)
  .then(data1 => traer_nombre2(data1)) //llamamos a la función mostrardata()
  .catch(error => console.log("Ocurrió un error", error)) // si hay un error será atrapado por catch

fetch(ruta_coment) //solicitud a la url (promesa)
  .then(response => response.json()) //se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato (json)
  .then(data2 => traer_comentario(data2)) //llamamos a la función mostrardata()
  .catch(error => console.log("Ocurrió un error", error)) // si hay un error será atrapado por catch

const traer_nombre1 = (data) => {
  let obj_nom = data["results"][0]["name"]
  let obj_img = data["results"][0]["picture"]["medium"]
  console.log(obj_img)
  let contenido = ''
  contenido += `
              <img src="${obj_img}" width="50px" height="50px" class="rounded-circle">
              <p class="nom_nom" >${obj_nom["first"]} ${obj_nom["last"]}</p>
              `
  document.getElementById("datos_perfil1").innerHTML = contenido
}

const traer_nombre2 = (data) => {
  let obj_nom = data["results"][0]["name"]
  let obj_img = data["results"][0]["picture"]["medium"]
  console.log(obj_img)
  let contenido = ''
  contenido += `
              <img src="${obj_img}" width="50px" height="50px" class="rounded-circle">
              <p class="nom_nom" >${obj_nom["first"]} ${obj_nom["last"]}</p>
              `
  document.getElementById("datos_perfil2").innerHTML = contenido
}

const traer_comentario = (data) => {
  let id1 = Math.floor(Math.random() * 500).toString()
  let id2 = Math.floor(Math.random() * 500).toString()
  let obj_com1 = data[id1]["body"]
  let obj_com2 = data[id2]["body"]
  let contenido1 = ''
  let contenido2 = ''
  contenido1 += `<p>${obj_com1}</p>`
  contenido2 += `<p>${obj_com2}</p>`
  document.getElementById("datos_comentario1").innerHTML = contenido1
  document.getElementById("datos_comentario2").innerHTML = contenido2
}
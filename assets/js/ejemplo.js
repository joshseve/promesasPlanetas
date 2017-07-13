var url = "data/earth-like-results.json";

function getJSON(url){
  return new Promise(function(resolve,reject){
    var ajax = new XMLHttpRequest();
    ajax.open("GET",url);
    ajax.send();
    ajax.onreadystatechange = function(){
      if(ajax.readyState == 4){
        resolve(JSON.parse(ajax.responseText));
      }
    }
  })
};

getJSON("data/earth-like-results.json")
.then(function(planetas){return(getJSON(planetas.results.forEach(function(planeta){
  getJSON (planeta).then(function(infoPlanetas){
    // console.log(infoPlanetas);
    obtenerDatos(infoPlanetas);
    console.log(infoPlanetas);
    })
  })))
});

function obtenerDatos(infoPlanetas){
  var nombre=infoPlanetas.pl_name;
  var descubrimiento=infoPlanetas.pl_disc;
  mostrarPlaneta(nombre, descubrimiento);
};

function mostrarPlaneta(nombre, descubrimiento){
    var contenedor = document.getElementById("tarjetaPlaneta");
    var divCard = document.createElement("div");
      divCard.className="card col s12 m6";
    var divCardImage = document.createElement("div");
    var imagen = document.createElement("img");
    imagen.src= "static/img/3.jpg";
    var divCardContenido = document.createElement("div");
    var nombrePlaneta = document.createElement("h2");
    nombrePlaneta.innerText = nombre;
    var infoPlaneta = document.createElement("p");
    infoPlaneta.innerText = descubrimiento;


    divCardImage.appendChild(imagen);
    divCard.appendChild(divCardImage);
    divCardContenido.appendChild(nombrePlaneta);
    divCardContenido.appendChild(infoPlaneta);
    divCard.appendChild(divCardContenido);
    contenedor.appendChild(divCard);

}

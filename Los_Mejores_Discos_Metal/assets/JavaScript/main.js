let button = document.querySelectorAll("button");

//recorrerlos

button.forEach(function(button){

  //agregar evento

  button.addEventListener('click', function(ev){
    ev.preventDefault();
    let content = document.querySelector('.content');

    //quitar clase de animacion
    content.classList.remove("animated");
    content.classList.remove("fadeInDown");

    //agregar clase de animacion
    content.classList.add("animated");
    content.classList.add("fadeOutUp");

    setTimeout(function(){
      location.href = "/Los_Mejores_Discos_Metal";
    },600);

    return false;
  })
});

// 切换到leilany - sociedad
const mariposa = document.getElementById("mariposon");
const cara1 = document.getElementById("cuerpo_uno");
const cara2 = document.getElementById("cuerpo_dos");

function leilany(){
    mariposa.style.animationName = "mariposa2";
    cara2.style.display = "none";
    cara1.style.display = "block";

}

function sociedad(){
    mariposa.style.animationName = "mariposa1";
    cara1.style.display = "none";
    cara2.style.display = "block";
}

// 照片切换
setInterval(foto_transparencia,500);

let num = 1;
setInterval(fotos, 3000);
// 照片透明度

let grado = 1;
var foto = document.getElementById("foto");

function foto_transparencia(){

     let new_grado = Number[grado] - Number[0.1];
     foto.style.opacity= new_grado;

     if(new_grado==0){

          
     }else{
          return grado = new_grado;
     }


}


function fotos(){

    switch(num){
        case 1 : 
         foto.src="./imagen/foto2.jpg";
         num = 2;
         break;

        case 2 :
             foto.src="./imagen/foto3.jpg";
             num = 3;
             break;

        case 3 :
             foto.src="./imagen/foto4.jpg";
             num = 4;
             break;

        case 4 :
             foto.src="./imagen/foto5.jpg";
             num = 5;
             break; 

        case 5 :
             foto.src="./imagen/foto6.jpg";
             num = 6;
             break;    

        case 6 : 
             foto.src="./imagen/fotonew.jpg";
              num = 1;
             break;
    }





}
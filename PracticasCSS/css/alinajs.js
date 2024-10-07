
/*acceder al elemto y varaible xd */

let colorPrimario = getComputedStyle(document.documentElement)
  .getPropertyValue('--background-color');


function changeColor (color,change){

    document.documentElement.style.setProperty('--background-color', change); 


}

changeColor(colorPrimario,'red');
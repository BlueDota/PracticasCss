function triangle(n) {

    let res = [];
     
    for (let i = 0; i < n; i++) {
      
     let row = [1];
  
      for (let y = 1; y < i; y++) { 
        
          row.push(res[y - 1][y - 1] + res[i - 1][y]); 
        
      }
      if (i > 0) {
        row.push(1); // Cada fila (excepto la primera) termina con 1
      }
  
      res.push(row); // Agregar la fila completa al resultado
    }
  
    return res;
  }
  
  
  triangle(5)
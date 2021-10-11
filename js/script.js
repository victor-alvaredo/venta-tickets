
   
    


function calculo(){

   var sel = document.getElementById("categoria");
   var selectedValue = parseFloat(sel.options[sel.selectedIndex].value);
   var cant = document.getElementById("cantidad").value;
   var tot = 0;
   switch (selectedValue) {

      case 1: tot=((cant * 200) - (cant * 200 * 0.80));
              document.getElementById('total').value = 'Total a Pagar: $'+ tot + ',00'; 
              break;
      
      case 2:tot=((cant * 200) - (cant * 200 * 0.50));
             document.getElementById('total').value = 'Total a Pagar: $' + tot + ',00'; 
             break;
      
      case 3:tot=tot=((cant * 200) - (cant * 200 * 0.15));
            document.getElementById('total').value = 'Total a Pagar: $' + tot + ',00'; 
            break;
      
      }



}


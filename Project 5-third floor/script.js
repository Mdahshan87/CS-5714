
function getValues()
{
   total = 1.5 * sessionStorage.getItem('quantity') + 44*sessionStorage.getItem('quantity')

    document.getElementById("myTable").rows[5].cells[3].innerHTML = sessionStorage.getItem('quantity')
    document.getElementById("myTable").rows[5].cells[9].innerHTML = 1.5 * sessionStorage.getItem('quantity')
    document.getElementById("myTable").rows[5].cells[12].innerHTML = total
 
}

function buy()
{
   
   
    var ee = document.getElementById("quantity");
    var quantity = ee.options[ee.selectedIndex].text; 
    
   
    console.log(quantity)
    
    sessionStorage.setItem('quantity',quantity)
    if(quantity)
      {
         window.location.href= "7.html"

      }
    else
      alert("Please Select Quantity") 
}

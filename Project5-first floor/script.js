function OnChangeCheckbox (checkbox) 
        {
            if (checkbox.checked)
            {
              
              pic =checkbox.id+".png"
               if( pic =="C2.png")
                   pic = "B3.png"
              document.getElementById("myTable").rows[2].cells[1].innerHTML='<img src = '+pic +'  id ="image" STYLE="position:absolute; TOP:170px; LEFT:130px; WIDTH:770px; HEIGHT:470px">'
               
            }
            else 
            {
               document.getElementById("image").src = "list.png"
            }
        }
        function changeImage(button)
        {

                pic = button.id+".png"
                document.getElementById("myTable").rows[2].cells[1].innerHTML='<img src = '+ pic+'  id ="image" STYLE="position:absolute; TOP:170px; LEFT:130px; WIDTH:770px; HEIGHT:470px">'
       
        }
        
 function buy()
{
    var e = document.getElementById("Size");
    var size = e.options[e.selectedIndex].text; 
   
    var ee = document.getElementById("quantity");
    var quantity = ee.options[ee.selectedIndex].text; 
    
    console.log(size)
    console.log(quantity)
    sessionStorage.setItem('size', size)
    sessionStorage.setItem('quantity',quantity)
    if(size && quantity)
      {
         window.location.href= "9.html"

      }
    else
      alert("Please Select Size ") 
}
function getValues()
{
   total = 1.5 * sessionStorage.getItem('quantity') + 44*sessionStorage.getItem('quantity')
   console.log(sessionStorage.getItem('quantity'))
  // console.log(document.getElementById("myTable").rows[5].cells[0].innerHTML = "Jana" )
  document.getElementById("myTable").rows[5].cells[6].innerHTML =sessionStorage.getItem('size')
  document.getElementById("myTable").rows[5].cells[3].innerHTML = sessionStorage.getItem('quantity')
  document.getElementById("myTable").rows[5].cells[12].innerHTML = 1.5 * sessionStorage.getItem('quantity')
  document.getElementById("myTable").rows[5].cells[15].innerHTML = total
 
}  
window.onload = function(){

    let plus_elm =   document.querySelectorAll(".plus_icon");
    plus_elm.forEach( element => element.addEventListener("click",expand_func) )


       function expand_func(){

           if( this.nextElementSibling.style.display == "block" ){
               
               this.innerHTML="<i class='fa fa-plus-square'></i>"
               
               this.nextElementSibling.style.display ="none" 

           }else{

               this.innerHTML="<i class='fa fa-minus-square'></i>"
              
               this.nextElementSibling.style.display ="block" 

           }

          
       }



   }

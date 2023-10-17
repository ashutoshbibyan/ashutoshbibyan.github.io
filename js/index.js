document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

var n = 1;

var showToast = true;


$("#toastClosed").click(function (){
    showToast = false;
});

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;  

    if(showToast){
        var toast = new bootstrap.Toast($("#swipeToast"));
        toast.show() 
        showToast = false;
    }  
                          
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

   
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
            if(n<5){

                n++;
            }
            
            
             $(function () {
               
            
                $("#pills-tab  li:nth-child("+n+") a").tab("show");
              })

        } else {
            /* left swipe */
            if(n>1){

                n--;
            }
           
            $(function () {
               
            
                $("#pills-tab  li:nth-child("+n+") a").tab("show");
              })
           
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
            
        } else { 
            /* up swipe */
           
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};


$('#about').on("click",(evt)=>{
  evt.preventDefault();
  $("#myModal").modal('show');   


});

$("#contactForm").on("click",(evt)=>{
    evt.preventDefault();
    $("#contactFormModal").modal('show');
});



   

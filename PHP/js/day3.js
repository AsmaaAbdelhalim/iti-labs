 function showText(event){
     alert("the code "+ event.key);
 }


var x;

// document.getElementById("time").innerHTML=c_data.toLocaleTimeString();

function timeCount(){
    var c_data = new Date( );
      document.getElementById("time").innerHTML=c_data.toLocaleTimeString();
}
 function startClock()
{   
     x = setInterval(timeCount,1000);
    
  
}

function stopClock(event){
    
       event= clearTimeout(x);
   
}
   

var c=0;
        var t;
        function showAlert()
        {
            alert("Alert after 5 seconds");
            document.getElementById('txt').value="";
        }
       
        function Delayed_action()
          {
            document.getElementById('txt').value="Alert will pop up after 5 seconds, press cancel if want to cancel it.";
            
          
          t=setTimeout(showAlert,5000);
          }
        
        
        function cancel_Action()
          {
          document.getElementById('txt').value="Alert Canceled";
          clearTimeout(t)
          }

function timedMsg()
{
var t=setTimeout("alert('3 seconds!')",3000)

 }




    var timeout = document.getElementById('block');
    setTimeout(display1, 3000);
    
    function display1() {
        timeout.style.display = "block";
    }
    var clo = document.getElementById("clo");
    let myWindow;
    
    clo.addEventListener("click", function(e) {
        close();
    
    }) 






    myInput.onfocus = function() {
      document.getElementById("message").style.display = "block";
    }
    
    // When the user clicks outside of the password field, hide the message box
    
    
    myInput.onblur = function() {
      document.getElementById("message").style.display = "none";
    }
    
    // When the user starts to type something inside the password field
    myInput.onkeyup = function() {
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if(myInput.value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }
      
      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if(myInput.value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }
    
      // Validate numbers
      var numbers = /[0-9]/g;
      if(myInput.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }
      
      // Validate length
      if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }
    }

function select() {
        document.getElementById("name").focus();
      }
      
function notselect() {
        document.getElementById("name").blur();
      }
 
  function name() {
    var temp = new Regex("^[A-Za-z]{3,}");
    var yourVal = (document.getElementById("name").innerHTML="asd12");
    if (name.value !== "" && temp.ISMatch(yourVal)) {
      document.getElementById("name").style.visibility = "hidden";
    } else {
      document.getElementById("name").style.visibility = "visable";
      document.getElementById("name").focus().select();
    }
  }
  
  /** confarm  */
  function RepeatPassword() {
    if (
      document.getElementById("password").value !==
      document.getElementById("RepeatPassword").value
    ) {
      document.getElementById("password").style.in = "visible";
      ere.style.color = "gray";
    } else if (document.getElementById("RepeatPassword").value == "") {
      document.write("should be invalied this passwored");
    } else {
      document.getElementById("password").style.visibility = "hidden";
    }
  }2
  /*** pass ***/
  function password() {
    var temp = new Regex("(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}");
    var password = document.getElementById("password");
    if (temp.ISMatch(password)) {
      password.style.color = "white";
    } else {
      password.style.color = "gray";
    }
  }                              
   
function required()
{
var empt = document.form1.text1.value;
if (empt === "")
{
alert("Please input a Value");
return false;
}
else 
{
alert('Code has accepted : you can try another');
return true; 
}
function welcome() {
  location.replace("welcome.html")
}
}



function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
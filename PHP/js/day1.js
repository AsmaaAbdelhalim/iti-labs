//  alert("welcome to my sity");
//  var username = prompt("please enter your name:");
//  document.write("welcome" + username);

// function sum2number () {
//     var numberfirst = Number(prompt("enter the first number"));
//     var numbersecond = Number(prompt("enter the second number"));
//     var result = (numberfirst + numbersecond); 
//     console.log(result)}

 function todaytemprature () {
     var temp = Number (prompt("enter the temperature"));
     if(temp >= 30)
    {
     console.log("hot")
    }
     if( temp < 30)
        {
            console.log("cold")
        }}


//         function temperaturefeel () {
//              var temp =Number (prompt("enter the temperature"));
//         if(temp >= 30){
//       console.log("hot")
//      }
//     else if( temp <= 25){
//         console.log("cold") 
//                }
//   else if( temp > 25 && temp < 30 
//     )
//                   {
//       console.log("normal")
//         }
//  else (temp  30 ) 
//     console.log("Ambiguous")}
    
    // debugger;

    //  function facultyname () {
    //      var facultyname = prompt("faculty name");
    //     switch (facultyname) {
    //        case "FCI":
    //           alert("You 're eligible to programing tracks")
    //            break;
    //      case "Engineering" :  
    //              alert("You 're eligible to Network and Embedded tracks ") 
    //            break;
    //         case "Commerce" :
    //            alert("You 're eligible to ERP and social media tracks")
    //           break;
    //        default:
    //              alert ("You 're eligible to SW fundamentals track")}}



    //  function OddNumber () {
    //     var x = Number(prompt("enter the first number"));
    //     var y = Number(prompt("enter the second number"));
    //     for (var i = x ; i <= y ; i++) {
    //        if (i % 2 !== 0 ) {
    //            console.log(i) ;   
    //         }} 
    //  } 
  


    //  function mathexpression() { 
    //     var matheq = prompt("mathexpression");
    //     var result = eval (matheq);
    //     document.write(" you entered " + matheq + ", and the result is: "+ result );
    //  }

     function displayformcontact() {
    var name =prompt("write your name:)");
    var Birth = parseInt(prompt("write your birtyear like that '2000'"));
    (typeof (name) == String && typeof (birth) == Number) 
    var CurrentDate = new Date ();
    var Currentyear = CurrentDate.getFullYear();
    age = Currentyear - Birth;
    document.write("hello, " + "you are" + age + "years old!");
    }
         
    //      function foo () {
    //          var x;
    //          x = 5;
    //          y = 6;
    //          const z=3.14;
    //          y = 6; return x + y;
    //      }console.log(y) 
        
        
    //     /*function message(){

 
/*function zoom(x){
 
// x.width=300
// x.hight=300
}*/
    var tipsarray = new Array("tip1","tip2","tip3","tip4","tip5","tip6","tip7","tip8","tip9","tip10")
    var randomNum = Math.round(Math.random() *10 )
    console.log("the tip day " +  tipsarray[randomNum]);
     
    
    function show_now(){
        var today = new Date();
        var day = today.getDay();
        var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
        console.log("Today is : " + daylist[day] + ".");
        var hour = today.getHours();
        var minute = today.getMinutes();
        var second = today.getSeconds();
        var prepand = (hour >= 12)? " PM ":" AM ";
       hour = (hour >= 12)? hour - 12: hour;
        if (hour===0 && prepand===' PM ') 
        { 
         if (minute===0 && second===0)
        { 
         hour=12;
         prepand=' Noon';
        } 
         else
         { 
         hour=12;
        prepand=' PM';
        } 
        } 
        if (hour===0 && prepand===' AM ') 
        { 
        if (minute===0 && second===0)
        { 
        hour=12;
        prepand=' Midnight';
        } 
        else
        { 
        hour=12;
        prepand=' AM';
        } 
        } 
      console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
      
     }
 


     let fullName = prompt("Enter your full name");
let emailAdress = prompt("Enter your e-mail adress");

const nameFormat = /^[a-zA-Z ]{4,}\s/m;
const isNameMatching = nameFormat.test(fullName);
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const isMailMatching = mailFormat.test(emailAdress);
console.log(isMailMatching);

while (isMailMatching === false) {
    emailAdress = prompt("Enter your e-mail adress");
    console.log("try again");
}
const cheackInput = function(emailAdress) {
    console.log("done");
    console.log(emailAdress, mailFormat.test(emailAdress));
    if (isMailMatching) {
        console.log("yup");
    } else {
        console.log("failed");
    }
};
cheackInput(emailAdress);


//6

var studentGrade =new Array(60,100,10,15,85);
var studentReverse = studentGrade.sort((a, b) => a - b).reverse();
console.log(studentReverse);
var i=0, maxDegree;
 while(i<studentGrade .length) 
 {
   
     if(studentGrade [i]>studentGrade [i+1])
     {
         maxDegree =studentGrade [i];
         studentGrade [i+1] =studentGrade [i];
        
     }
     else{
         maxDegree=studentGrade[i+1];
     }
     i++;
 }
 console.log(maxDegree);

for(var i=0;i < studentGrade.length;i++)
{
    if(studentGrade[i]<60)
    {
        console.log(studentGrade[i])
    }
}

7
var arrStudent =[{
    "name": "asmaa",
    "degree": 10
  }, {
    "name": "hana",
    "degree": 50
  },
  {
    "name": "ahmed",
    "degree": 70
  }, {
    "name": "ali",
    "degree": 90
  },
  {
    "name": "mohamed",
    "degree": 100
  }
]
 for(var i=0;i<arrStudent.length;i++)
 {
     console.log(arrStudent[i].name + "-->" + arrStudent[i].degree );
 }
console.log("student Names, who got degree between 90 and 100 ")
for(var i=0;i<arrStudent.length;i++)
 {
     if(arrStudent[i].degree>=90 && arrStudent[i].degree<=100)
     {
         console.log(arrStudent[i].name);
     }
 }
console.log("push");
 arrStudent.push( {
    "name": "hana",
    "degree": 50
  });
 for(var i=0;i<arrStudent.length;i++)
 {
      console.log(arrStudent[i].name + "-->" + arrStudent[i].degree );
 }
 console.log("pop");
 arrStudent.pop();
 for(var i=0;i<arrStudent.length;i++)
 {
      console.log(arrStudent[i].name + "-->" + arrStudent[i].degree );
 }

 console.log("sort array based on name");
 arrStudent.sort(function(a, b) {
    return a.name.localeCompare(b.name)
});
 for(var i=0;i<arrStudent.length;i++)
 {
      console.log(arrStudent[i].name + "-->" + arrStudent[i].degree );
 }

 const arrSlice1 = arrStudent.slice(0, 2);
 const arrSlice2 = arrStudent.slice(2,arrStudent.length);
  arrSlice1.push({"name": "asmaa", "degree": 30},{"name": "hana","degree": 50})
arrStudent=arrSlice1.concat(arrSlice2);
console.log("display the slice") ;  
for(var i=0;i<arrStudent.length;i++)
{
     console.log(arrStudent[i].name + "-->" + arrStudent[i].degree );
} 

const arrSliced1 = arrStudent.slice(0,3);
const arrSliced2 = arrStudent.slice(3,arrStudent.length);
arrSliced2.shift();
console.log("pop the third element");
arrStudent=(arrSliced1.concat(arrSliced2));
for(var i=0;i<arrStudent.length;i++)
{
     console.log(arrStudent[i].name + "-->" + arrStudent[i].degree );
} 


const userBirthDay = prompt(
    "enter the date in the following format (DD – MM – YYYY) ex. 22–01–1999"
);
if (
    userBirthDay.length == 10 &&
    userBirthDay.charAt(2) == "-" &&   
    userBirthDay.charAt(5) == "-"
) {
    cheackUserBirthday(userBirthDay);

    function cheackUserBirthday(userBirthDay) {
        let dd = Number(userBirthDay.slice(0, 2));
        let mm = Number(userBirthDay.slice(3, 5));
        let yy = Number(userBirthDay.slice(6));
        console.log(dd, mm, yy);

        const d = new Date(yy, mm, dd);
        let newdate = yy + "/" + mm + "/" + dd;

        alert(newdate, d);
    }
} else {
    alert('Wong Date Format". ');}

9
var xTry =prompt("enter the value")
try{
  if(xTry<100)
  throw "less 100"
  else if(x>200)
  throw"more200"
  
}
catch(er){
    if(er=="less 100")
    console.log("Error!the value is too low");
    if(er=="more200")
    console.log("Error!the value is too high");
}



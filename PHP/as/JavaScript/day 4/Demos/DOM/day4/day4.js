function changeMyColor(){

    document.bgColor = "pink"

}

function chnageMyFontColor(){
    document.fgColor = "red"
}

function ChangeText(){
    document.getElementById("h1Id").innerHTML = "Hello Dom"
}









// console.log(document.getElementById("h1Id").innerHTML)


function myValue(){
    // console.log(document.getElementById("name").value)
    var userName = document.getElementById("name").value

}


function changeMyBtn(){
    document.getElementById("btn").value = "my new Button"
}


function backMyBtn(){
    document.getElementById("btn").value = "Change Text"

}

// console.log(document.getElementById("test").innerHTML)



// console.log(document.getElementsByName("test"))

var texts = document.getElementsByName("test");

for( txt in  texts){
    // console.log(texts[txt].innerHTML)
}

// console.log(document.getElementsByTagName("h1")[0].innerHTML)

// console.log(document.getElementsByName("test")[2].innerHTML)



// console.log(document.getElementsByClassName("myItalicFont")[0].innerHTML)



console.log(document.querySelector(".myItalicFont").innerHTML)


console.log(document.querySelectorAll("#test"))

// console.log(document.querySelectorAll("p > h1")) 


function changeMyImage(){
    document.images["myImage"].src = "2.jpg"


    document.getElementById("myImage").width = 200
    // debugger;
    // document.images["myImage"]
    // document.images["myImage"].h = "200px"


}


function changeImage(newImage)
{
    newImage.width = 500
    newImage.border = 5
}


function backImage(newImage)
{
    newImage.width = 100
    newImage.border = 2
}



// console.log(document.forms[0].elements[0])
// console.log(document.forms[0].length)


function myForm(){
    // document.getElementById("text").readOnly = true
    document.getElementById("text").disabled = true
}
// document.getElementById("op1").selected = true

function mySelect(){

    select = document.getElementById("select")

    // create html element --> javascript
    var myOption = document.createElement("option");
    myOption.innerHTML = "<i> my added option </i>"
    select.add(myOption)

}


function createMySpan(){
    var span = document.querySelector('span');
    span.innerHTML = "hello  test1<br>test2<br>test3<br>";

    console.log(span.innerText);

    console.log(span.textContent);



}
createMySpan()



function newTest(){
    // create img 
    // 

    // var myImage = document.createElement("img")
    // myImage.src = "1.jpg"
    // myImage.width = 100


    // document.getElementById("btn").append(myImage)

        var testnext = document.getElementById("p1")
        .nextSibling.innerHTML

        console.log(testnext)

}

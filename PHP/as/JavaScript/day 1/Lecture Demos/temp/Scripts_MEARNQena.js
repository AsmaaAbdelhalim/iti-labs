function sayHello()
{
    alert("Hello World, From function!");
}

function sayHello2()
{
    //alert("Hello World, From function2!");

    var name= prompt("Enter your name", "");
    alert("Welcome " + name);

    var result= confirm("are your sure?");
    if(result==true)
        alert ("Thanks...");
    else
        alert ("Goodbye...")
}

function sum(n1, n2)
{
    var result=parseInt(n1)+parseInt(n2);
    return result;
}

function test()
{
    for (let i=0;i<5;i++)
    {
        debugger;
        console.log(i);
    }
}
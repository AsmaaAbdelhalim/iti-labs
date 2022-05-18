$(document).ready(function() {
 

    $("section.container1 div").each(function(index) {
      
        let backGround = $(this).attr("class");
        let parcolor = $("section.container1 div p").attr("class");
        $(this).css("background-color", backGround);
        $("section.container1 div p").css("color", parcolor);
    });
});

$('section.container2 a[href^="http://www.google.com"]').attr(
    "href",
    "http://www.Google.com"
);
$('section.container2 a[href$=".org"]').text("IEEE");

$('section.container2 a[href^="https"]').text("Facebook");

$("figcaption:contains('Fig.3 - Lemon Juice')").text("fig.3 - Orange Juice");
$("section.container3 figure:nth-child(3)")
    .children("img")
    .attr("src", "img/orange.png");

$("td.my-name").attr("style", "color:blue");
$("td:odd").css("background-color", "pink");
$("tr.row3 td:nth-child(2)").css("font-weight", "Bold");

$("ul ol").css("font-style", "italic");
$("ul ol").next().css({ color: "red" });
$("ul ol li:nth-child(2)").next().css({ color: "red" });
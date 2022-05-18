jQuery(document).ready(function () {
   
    const container1 = $(".container1");
    const div = $(".container1 div:first-child");
  
    container1.append("<div class='black'>Black</div>");
    div.before("<div class='black'>WHite</div>");
    $("p.pink").before("<p class='yellow'>New paragraph</p>");
  
    
    let href = ["mohsen@gmail.com", "amany@gmail.com", "www.facebook.com"];
    $(".container2 p").each(function (index) {
      $(this).replaceWith("<a href=" + href[index] + ">" + href[index] + "</a>");
    });
  
   
    $(".container3 img").wrap("<figure></figure>");
    $(".container3 figure").append("<figcaption>Coffee</figcaption>");
  
   
    $(".container4 td.col-age").each(function (index) {
      console.log(index);
     
      $(this).html(' ');
    });
   
  
    $(".container4 td:contains('mohsen')").addClass("man");
    $(".container4 td.your-email").removeClass("your-email");
   
    $(".container4 td:not('.row3 .col-email')").addClass("your-email");
   
    $(".container5 #my-form input:nth-child(1)").attr("name", "yourname");
    $(".container5 #my-form input:nth-child(3)").prop("checked", true);
  });
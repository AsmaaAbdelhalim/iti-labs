jQuery($(document).ready(function() {

    let _box = $(".box");
    
    _box
      .animate(
        {
          right: "100px",
          width: "150px",
          height: "150px",
        },
        1000
      )
      .animate(
        {
          background: "blue",
          bottom: "100px",
          width: "100px",
          height: "100px",
        },
        1000
      )
      .animate(
        {
          background: "orange",
          left: "10px",
          width: "200px",
          height: "200px",
        },
        1000
      )
      .animate(
        {
          background: "green",
          top: "10px",
          width: "100px",
          height: "100px",
        },
        1000
      );
    }))



    jQuery(
        $(document).ready(function () {
          let _btn1 = $("#decrease"),
            _btn2 = $("#increase"),
            _content = $(".content");
          size = parseInt($("p").css("font-size"));
          _btn1.on("click", function () {
            size = size - 2;
            _content.css("font-size", size + "px");
          });
          _btn2.on("click", function () {
            size = size + 2;
            _content.css("font-size", size + "px");
          });
        })
      );
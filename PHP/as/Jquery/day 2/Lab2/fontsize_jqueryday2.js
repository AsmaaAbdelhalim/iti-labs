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
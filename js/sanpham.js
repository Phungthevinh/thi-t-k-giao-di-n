
$(document).ready(function(){
    $(".read_more").click(function(){
      $(".Product_Description_hide").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $(".close").click(function(){
      $(".pupup_wrapper_1").fadeOut();
      $(".information").fadeOut();
    });
  });
  $(document).ready(function(){
    $(".button_close").click(function(){
      $(".pupup_wrapper_1").fadeOut();
      $(".information").fadeOut();
    });
  });
  $(document).ready(function(){
    $(".pupup_wrapper_1").click(function(){
      $(".pupup_wrapper_1").fadeOut();
      $(".information").fadeOut();
    });
  });
  $(document).ready(function(){
    $(".Seedetails").click(function(){
      $(".pupup_wrapper_1").fadeIn();
      $(".information").fadeIn();
    });
  });
  
  var expanded = false;

  function toggleConten() {
      var button = document.getElementById("read_more_1");
  
      if (expanded) {
          button.innerHTML = "Xem Thêm Sản Phẩm";
      } else {
          button.innerHTML = "Thu Gọn";
      }
  
      expanded = !expanded;
  }

  function call(){
    alert('bạn đã thêm vào giỏ hàng')
  }
  
  
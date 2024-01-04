

var listImage = document.querySelector('.list_images')
var imgs = document.getElementsByClassName('img')
var length = imgs.length
let current = 0
setInterval(() =>{
    if(current == length - 1) {
       current = 0
       let width = imgs [0].offsetWidth
       listImage.style.transform =`translateX(0px)`
    } else{
        current ++
    let width = imgs [0].offsetWidth
    listImage.style.transform =`translateX(${width * -1 * current}px)`
    }
    
},4000)

//modal
$(document).ready(function(){
  $(".open-modal-btn").click(function(){
    $(".pupup_wrapper").fadeIn();
    $("#form_login").fadeIn();
  });
});

$(document).ready(function(){
  $(".logininput").click(function(){
    $(".pupup_wrapper").fadeOut();
    $("#form_login").fadeOut();
  });
});

$(document).ready(function(){
  $(".pupup_wrapper").click(function(){
    $(".pupup_wrapper").fadeOut();
    $("#form_login").fadeOut();
  });
});
$(document).ready(function(){
  $(".login_fb_gg").click(function(){
    $(".pupup_wrapper").fadeOut();
    $("#form_login").fadeOut();
  });
});
$(document).ready(function(){
  $(".flip").click(function(){
    $("#hidden_products").slideToggle("slow");
  });
});

var expanded = false;

function toggleConten() {
    var button = document.getElementById("toggleButton");

    if (expanded) {
        button.innerHTML = "Xem Thêm Sản Phẩm";
    } else {
        button.innerHTML = "Thu Gọn";
    }

    expanded = !expanded;
}
function register(){
  alert('đã đăng ký thành công đang quay lại trang chủ...')
}




$(document).ready(function(){
    $("#next").click(function(){
      $(".header_body2").fadeIn();
    });
  });
  $(document).ready(function(){
    $("#next").click(function(){
      $(".buy").fadeIn();
      $(".text_buy").fadeIn();
    });
  });
  $(document).ready(function(){
    $(".icon_pay").click(function(){
      $(".pupup_wrapper_1").fadeIn();
      $(".all_buy").fadeIn();
    });
  });
  $(document).ready(function(){
    $(".pupup_wrapper_1").click(function(){
      $(".all_buy").fadeOut();
      $(".pupup_wrapper_1").fadeOut();
    });
  });
  $(document).ready(function(){
    $(".btn_confirm").click(function(){
      $(".all_buy").fadeOut();
      $(".pupup_wrapper_1").fadeOut();
    });
  });
  $(document).ready(function(){
    $("#next").click(function(){
      $(".header_body1").fadeOut();
    });
  });
  $(document).ready(function(){
    $("#next").click(function(){
      $("#next").fadeOut();
    });
  });

  let currentIndex = 0;

  function changeSlide(n) {
    currentIndex += n;
    showSlides();
  }

  function showSlides() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }

    const translateValue = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
  }

  function toggleRadioButton4() {
    const radioButton = document.getElementById('radioButton4');
    radioButton.checked = !radioButton.checked;
  }
  function toggleRadioButton3() {
    const radioButton = document.getElementById('radioButton3');
    radioButton.checked = !radioButton.checked;
  }
  function toggleRadioButton2() {
    const radioButton = document.getElementById('radioButton2');
    radioButton.checked = !radioButton.checked;
  }

  function toggleRadioButton1() {
    const radioButton = document.getElementById('radioButton1');
    radioButton.checked = !radioButton.checked;
  }

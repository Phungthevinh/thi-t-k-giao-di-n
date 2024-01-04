


function toggleCheckbox() {
  var checkbox = document.getElementById("selectAll");
  var selectAllText = document.getElementById("selectAllText");

  if (checkbox.checked) {
    selectAllText.textContent = "Bỏ chọn tất cả";
  } else {
    selectAllText.textContent = "Chọn tất cả";
  }
}



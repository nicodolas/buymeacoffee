document.getElementById("donateButton").addEventListener("click", function () {
  var donateImage = document.getElementById("donateImage");

  donateImage.src = "./img/qr-code-15k.jpg";
});
document.addEventListener("DOMContentLoaded", function () {
  // Lấy phần tử nút tải
  const downloadButton = document.getElementById("downloadQR");
  const qrImage = document.getElementById("donateImage");

  // Gán URL hình ảnh QR code cho nút tải
  // Thay đổi URL bên dưới thành URL hình QR code thực tế của bạn
  downloadButton.href = "./img/qr-code-15k.jpg"; // Đặt đường dẫn hình ảnh QR code

  // Cập nhật hình ảnh trong modal
  qrImage.src = downloadButton.href;
});

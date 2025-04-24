document.addEventListener("DOMContentLoaded", function() {
  // Chọn tất cả các ảnh trong image selector
  const images = document.querySelectorAll(".image-selector img");

  // Chọn container của ảnh lớn
  const largeImage = document.getElementById("large-image");

  // Lấy đường dẫn của ảnh đầu tiên trong danh sách
  const firstImageSrc = images[0].getAttribute("src");

  // Đặt đường dẫn của ảnh lớn là đường dẫn của ảnh đầu tiên
  largeImage.setAttribute("src", firstImageSrc);

  // Duyệt qua từng ảnh và thêm sự kiện click
  images.forEach(function(image) {
      image.addEventListener("click", function() {
          // Lấy đường dẫn của ảnh được click
          const src = image.getAttribute("src");
          
          // Đặt đường dẫn của ảnh lớn là đường dẫn của ảnh được click
          largeImage.setAttribute("src", src);
      });
  });

  // Lấy các nút "Back" và "Save"
  const backButton = document.querySelector(".back-button");
  const saveButton = document.querySelector(".save-button");

  // Đặt sự kiện click cho nút "Back"
  backButton.addEventListener("click", function() {
      window.location.href = "../index.html"; // Chuyển hướng về trang ../index.html
  });

  // Đặt sự kiện click cho nút "Save"
  saveButton.addEventListener("click", function() {
      window.location.href = "../index.html"; // Chuyển hướng về trang ../index.html
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Lấy tất cả các nút trong sidebar
    const buttons = document.querySelectorAll('.sidebar button');
  
    // Thêm sự kiện click cho mỗi nút
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Lấy giá trị của thuộc tính data-content để xác định phần nội dung cần hiển thị
            const contentId = this.getAttribute('data-content');
            
            // Ẩn tất cả các phần nội dung
            const contents = document.querySelectorAll('.class-content');
            contents.forEach(content => {
                content.style.display = 'none';
            });
            
            // Hiển thị phần nội dung tương ứng
            const targetContent = document.querySelector(contentId);
            if (targetContent) {
                targetContent.style.display = 'block';
            }
        });
    });
  
    // Hiển thị phần nội dung đầu tiên khi tải trang
    const defaultContentId = '#lop0'; // ID của nội dung bạn muốn hiển thị mặc định
    const defaultContent = document.querySelector(defaultContentId);
    if (defaultContent) {
        defaultContent.style.display = 'block';
    }
  });
  function myFunction() {
    var element = document.getElementById("mycreat");
    document.getElementById("mycreat").classList.toggle("demo");
 }
 function setFunction() {
    var element = document.getElementById("mysett");
    document.getElementById("myset").classList.toggle("demo2");
 }

 var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        controlBtn.className = "pause";
    } else { 
        track.pause();
        controlBtn.className = "play";
    }
}
controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});


  
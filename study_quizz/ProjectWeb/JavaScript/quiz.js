document.querySelector('.ball').addEventListener('click', function() {
  window.location.href = './html/quiz.html?data=ball';
});
document.querySelector('.math').addEventListener('click', function() {
  window.location.href = './html/quiz.html?data=math';
});
document.querySelector('.music').addEventListener('click', function() {
  window.location.href = './html/quiz.html?data=music';
});
document.querySelector('.game').addEventListener('click', function() {
  window.location.href = './html/quiz.html?data=game';
});
document.querySelector('.food').addEventListener('click', function() {
  window.location.href = './html/quiz.html?data=food';
});
document.querySelector('.digraphs').addEventListener('click', function() {
  window.location.href = './html/quiz.html?data=graph';
});

$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><</button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'>></button>`,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});
$(document).ready(function () {
    $(".teacher-slide").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      draggable: false,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><</button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'>></button>`,
      autoplay: true,
      autoplaySpeed: 1000,
    });
  });

  function myFunction() {
    var element = document.getElementById("mycreat");
    document.getElementById("mycreat").classList.toggle("demo");
 }
 function setFunction() {
    var element = document.getElementById("mysett");
    document.getElementById("myset").classList.toggle("demo2");
 }

 function toggleLink() {
  const link = document.getElementById('myLink');
  const checkbox = document.getElementById('myToggleSwitch');
  if (checkbox.checked) {
      link.href = '../img/nhac.mp3';
  } else {
      link.href = '#';
  }
}
// Thêm sự kiện listener vào checkbox để gọi hàm toggleLink khi trạng thái thay đổi
document.getElementById('myToggleSwitch').addEventListener('change', toggleLink);

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



 
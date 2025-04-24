// Thêm JavaScript để chuyển hướng sang trang HTML khác
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.button1').addEventListener('click', function() {
        window.location.href = 'html/character.html'; // Đường dẫn đến trang HTML khác
    });
});

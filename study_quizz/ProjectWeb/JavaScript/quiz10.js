const ballQuestions = [
    {
        quiz_id: 1,
        question: "Cầu thủ nào được mệnh danh là 'Vua bóng đá'?",
        answers: ["Pele", "Maradona", "Zidane", "Messi"],
        category: "ball"
    },
    {
        quiz_id: 2,
        question: "Giải bóng đá lớn nhất hành tinh được tổ chức mấy năm một lần?",
        answers: ["2", "3", "4", "5"],
        category: "ball"
    },
    {
        quiz_id: 3,
        question: "Đội bóng nào đã giành chức vô địch World Cup năm 2018?",
        answers: ["Brazil", "Đức", "Pháp", "Argentina"],
        category: "ball"
    },
    {
        quiz_id: 4,
        question: "Sân vận động Old Trafford là sân nhà của câu lạc bộ nào?",
        answers: ["Chelsea", "Manchester United", "Liverpool", "Arsenal"],
        category: "ball"
    },
    {
        quiz_id: 5,
        question: "Cầu thủ nào giữ kỷ lục ghi nhiều bàn thắng nhất trong lịch sử World Cup?",
        answers: ["Ronaldo (Brazil)", "Miroslav Klose", "Messi", "Cristiano Ronaldo"],
        category: "ball"
    },
    {
        quiz_id: 6,
        question: "Quả bóng vàng là giải thưởng dành cho cầu thủ xuất sắc nhất của năm do tổ chức nào trao tặng?",
        answers: ["FIFA", "UEFA", "France Football", "Premier League"],
        category: "ball"
    },
    {
        quiz_id: 7,
        question: "Đội bóng nào giành nhiều chức vô địch Champions League nhất?",
        answers: ["Barcelona", "Liverpool", "Bayern Munich", "Real Madrid"],
        category: "ball"
    },
    {
        quiz_id: 8,
        question: "Ai là huấn luyện viên hiện tại của đội tuyển quốc gia Việt Nam?",
        answers: ["Park Hang-seo", "Kiatisak Senamuang", "Nguyễn Hữu Thắng", "Hữu Thắng"],
        category: "ball"
    },
    {
        quiz_id: 9,
        question: "Câu lạc bộ nào giành chức vô địch V.League 2020?",
        answers: ["Hà Nội FC", "Hoàng Anh Gia Lai", "Sông Lam Nghệ An", "Viettel"],
        category: "ball"
    },
    {
        quiz_id: 10,
        question: "Thủ môn nào giữ sạch lưới nhiều trận nhất trong lịch sử Premier League?",
        answers: ["Petr Cech", "David de Gea", "Edwin van der Sar", "Alisson Becker"],
        category: "ball"
    }
];

const ballResults = [
    {
        quiz_id: 1,
        answer: "Pele",
    },
    {
        quiz_id: 2,
        answer: "4",
    },
    {
        quiz_id: 3,
        answer: "Pháp",
    },
    {
        quiz_id: 4,
        answer: "Manchester United",
    },
    {
        quiz_id: 5,
        answer: "Miroslav Klose",
    },
    {
        quiz_id: 6,
        answer: "France Football",
    },
    {
        quiz_id: 7,
        answer: "Real Madrid",
    },
    {
        quiz_id: 8,
        answer: "Park Hang-seo",
    },
    {
        quiz_id: 9,
        answer: "Viettel",
    },
    {
        quiz_id: 10,
        answer: "Petr Cech",
    }
];

const musicQuestions = [
    {
        quiz_id: 1,
        question: "Ai được mệnh danh là 'Ông hoàng nhạc Việt'?",
        answers: ["Đàm Vĩnh Hưng", "Sơn Tùng M-TP", "Mỹ Tâm", "Trấn Thành"],
        category: "music"
    },
    {
        quiz_id: 2,
        question: "Ca khúc nào của Trịnh Công Sơn được xem là nổi tiếng nhất?",
        answers: ["Diễm xưa", "Hạ trắng", "Cát bụi", "Nối vòng tay lớn"],
        category: "music"
    },
    {
        quiz_id: 3,
        question: "Nhóm nhạc nào được xem là 'Bộ tứ hoàn hảo' của V-pop?",
        answers: ["365 Daband", "MTV", "V.Music", "HKT"],
        category: "music"
    },
    {
        quiz_id: 4,
        question: "Ca sĩ nào được biết đến với danh xưng 'Họa mi tóc nâu'?",
        answers: ["Mỹ Tâm", "Hồng Nhung", "Mỹ Linh", "Thanh Lam"],
        category: "music"
    },
    {
        quiz_id: 5,
        question: "Bài hát 'Bống Bống Bang Bang' được trình bày bởi nhóm nhạc nào?",
        answers: ["365 Daband", "Monstar", "Uni5", "Zero 9"],
        category: "music"
    },
    {
        quiz_id: 6,
        question: "Nhạc sĩ nào là tác giả của ca khúc 'Nối vòng tay lớn'?",
        answers: ["Trịnh Công Sơn", "Phạm Duy", "Ngô Thụy Miên", "Vũ Thành An"],
        category: "music"
    },
    {
        quiz_id: 7,
        question: "Ai là ca sĩ trình bày ca khúc 'Có em chờ'?",
        answers: ["Min", "Đông Nhi", "Tóc Tiên", "Bích Phương"],
        category: "music"
    },
    {
        quiz_id: 8,
        question: "Nhóm nhạc nữ nào được yêu thích với ca khúc 'Ngày mai'?",
        answers: ["Mây Trắng", "T-ara", "5 Dòng Kẻ", "Mắt Ngọc"],
        category: "music"
    },
    {
        quiz_id: 9,
        question: "Ca khúc 'Em gái mưa' là hit của ca sĩ nào?",
        answers: ["Hương Tràm", "Bảo Anh", "Mỹ Tâm", "Văn Mai Hương"],
        category: "music"
    },
    {
        quiz_id: 10,
        question: "Ca sĩ nào được mệnh danh là 'Nữ hoàng nhạc nhẹ Việt Nam'?",
        answers: ["Thanh Lam", "Mỹ Linh", "Hồng Nhung", "Như Quỳnh"],
        category: "music"
    }
];

const musicResults = [
    {
        quiz_id: 1,
        answer: "Đàm Vĩnh Hưng",
    },
    {
        quiz_id: 2,
        answer: "Diễm xưa",
    },
    {
        quiz_id: 3,
        answer: "MTV",
    },
    {
        quiz_id: 4,
        answer: "Mỹ Tâm",
    },
    {
        quiz_id: 5,
        answer: "365 Daband",
    },
    {
        quiz_id: 6,
        answer: "Trịnh Công Sơn",
    },
    {
        quiz_id: 7,
        answer: "Min",
    },
    {
        quiz_id: 8,
        answer: "Mây Trắng",
    },
    {
        quiz_id: 9,
        answer: "Hương Tràm",
    },
    {
        quiz_id: 10,
        answer: "Thanh Lam",
    }
];

const gameQuestions = [
    {
        quiz_id: 1,
        question: "Game nào được mệnh danh là 'Trò chơi vua của thể loại nhập vai'?",
        answers: ["The Witcher 3", "Skyrim", "Dark Souls", "Final Fantasy XV"],
        category: "game"
    },
    {
        quiz_id: 2,
        question: "Liên Minh Huyền Thoại (League of Legends) được phát hành năm nào?",
        answers: ["2008", "2009", "2010", "2011"],
        category: "game"
    },
    {
        quiz_id: 3,
        question: "Nhân vật chính trong game 'The Legend of Zelda' là ai?",
        answers: ["Zelda", "Link", "Ganon", "Epona"],
        category: "game"
    },
    {
        quiz_id: 4,
        question: "Game nào sau đây là sản phẩm của công ty Valve?",
        answers: ["Counter-Strike", "Fortnite", "Overwatch", "Call of Duty"],
        category: "game"
    },
    {
        quiz_id: 5,
        question: "Trong trò chơi 'Minecraft', để chế tạo công cụ kim loại, người chơi cần khai thác loại khoáng sản nào?",
        answers: ["Sắt", "Vàng", "Than", "Kim cương"],
        category: "game"
    },
    {
        quiz_id: 6,
        question: "Tựa game 'Grand Theft Auto V' (GTA V) được phát triển bởi hãng nào?",
        answers: ["Rockstar Games", "Electronic Arts", "Ubisoft", "Bethesda"],
        category: "game"
    },
    {
        quiz_id: 7,
        question: "Ai là nhà phát triển của trò chơi 'Super Mario Bros'?",
        answers: ["Shigeru Miyamoto", "Hideo Kojima", "Satoru Iwata", "Yuji Naka"],
        category: "game"
    },
    {
        quiz_id: 8,
        question: "Tựa game 'The Last of Us' thuộc thể loại gì?",
        answers: ["Hành động phiêu lưu", "Chiến thuật", "Mô phỏng", "Nhập vai"],
        category: "game"
    },
    {
        quiz_id: 9,
        question: "Game nào được cho là có doanh thu cao nhất mọi thời đại?",
        answers: ["Minecraft", "Tetris", "Grand Theft Auto V", "Fortnite"],
        category: "game"
    },
    {
        quiz_id: 10,
        question: "Trong trò chơi 'Among Us', ai là kẻ phá hoại chính?",
        answers: ["Impostor", "Crewmate", "Detective", "Guardian"],
        category: "game"
    }
];

const gameResults = [
    {
        quiz_id: 1,
        answer: "The Witcher 3",
    },
    {
        quiz_id: 2,
        answer: "2009",
    },
    {
        quiz_id: 3,
        answer: "Link",
    },
    {
        quiz_id: 4,
        answer: "Counter-Strike",
    },
    {
        quiz_id: 5,
        answer: "Sắt",
    },
    {
        quiz_id: 6,
        answer: "Rockstar Games",
    },
    {
        quiz_id: 7,
        answer: "Shigeru Miyamoto",
    },
    {
        quiz_id: 8,
        answer: "Hành động phiêu lưu",
    },
    {
        quiz_id: 9,
        answer: "Minecraft",
    },
    {
        quiz_id: 10,
        answer: "Impostor",
    }
];

const mathQuestions = [
    {
        quiz_id: 1,
        question: "Có bao nhiêu đỉnh trên một hình lập phương?",
        answers: ["8", "6", "4", "10"],
        category: "math"
    },
    {
        quiz_id: 2,
        question: "Giải phương trình: 2x + 5 = 15",
        answers: ["x = 5", "x = 10", "x = 7", "x = 3"],
        category: "math"
    },
    {
        quiz_id: 3,
        question: "Trong phép tính 8 ÷ 2 x 4 - 3, phép tính nào cần được thực hiện đầu tiên?",
        answers: ["Chia", "Nhân", "Trừ", "Cộng"],
        category: "math"
    },
    {
        quiz_id: 4,
        question: "Bao nhiêu đoạn thẳng có thể được nối từ 8 điểm trên một đường tròn?",
        answers: ["28", "16", "12", "64"],
        category: "math"
    },
    {
        quiz_id: 5,
        question: "Trong phép tính 3 + 4 x 2 - 5, phép tính nào cần được thực hiện trước tiên?",
        answers: ["Nhân", "Cộng", "Trừ", "Chia"],
        category: "math"
    },
    {
        quiz_id: 6,
        question: "Có bao nhiêu đỉnh trên một hình tam giác?",
        answers: ["3", "4", "5", "6"],
        category: "math"
    },
    {
        quiz_id: 7,
        question: "Giải phương trình: 3x - 7 = 17",
        answers: ["x = 8", "x = 10", "x = 5", "x = 7"],
        category: "math"
    },
    {
        quiz_id: 8,
        question: "Kết quả của phép tính 6^2 là bao nhiêu?",
        answers: ["36", "12", "24", "18"],
        category: "math"
    },
    {
        quiz_id: 9,
        question: "Trong phép tính 9 x (3 + 2), phép tính nào cần được thực hiện đầu tiên?",
        answers: ["Cộng", "Nhân", "Trừ", "Chia"],
        category: "math"
    },
    {
        quiz_id: 10,
        question: "Bao nhiêu đoạn thẳng có thể được nối từ 5 điểm không nằm trên một đường thẳng?",
        answers: ["10", "5", "15", "20"],
        category: "math"
    }
];

const mathResults = [
    {
        quiz_id: 1,
        answer: "8",
    },
    {
        quiz_id: 2,
        answer: "x = 5",
    },
    {
        quiz_id: 3,
        answer: "Chia",
    },
    {
        quiz_id: 4,
        answer: "28",
    },
    {
        quiz_id: 5,
        answer: "Nhân",
    },
    {
        quiz_id: 6,
        answer: "3",
    },
    {
        quiz_id: 7,
        answer: "x = 8",
    },
    {
        quiz_id: 8,
        answer: "36",
    },
    {
        quiz_id: 9,
        answer: "Cộng",
    },
    {
        quiz_id: 10,
        answer: "10",
    }
];

const foodQuestions = [
    {
        quiz_id: 1,
        question: "Món ăn nào là món truyền thống của Italy và nổi tiếng khắp thế giới?",
        answers: ["Pizza", "Sushi", "Hamburger", "Tacos"],
        category: "food"
    },
    {
        quiz_id: 2,
        question: "Loại mỳ nào được sử dụng trong món Spaghetti?",
        answers: ["Mỳ Ý", "Mỳ Udon", "Mỳ Ramen", "Mỳ Soba"],
        category: "food"
    },
    {
        quiz_id: 3,
        question: "Món ăn nào được xem là biểu tượng của nền văn hóa ẩm thực của Nhật Bản?",
        answers: ["Sushi", "Phở", "Paella", "Pad Thai"],
        category: "food"
    },
    {
        quiz_id: 4,
        question: "Loại thực phẩm nào là nguồn cung cấp chính của protein cho người ăn chay?",
        answers: ["Đậu", "Thịt", "Trứng", "Cá"],
        category: "food"
    },
    {
        quiz_id: 5,
        question: "Món ăn nào được chế biến từ hạt lúa mạch?",
        answers: ["Bánh mì", "Sushi", "Pasta", "Sushi"],
        category: "food"
    },
    {
        quiz_id: 6,
        question: "Món ăn nào là một phần không thể thiếu trong các buổi tiệc BBQ?",
        answers: ["Nướng thịt", "Sushi", "Bánh mì", "Pizza"],
        category: "food"
    },
    {
        quiz_id: 7,
        question: "Loại gia vị nào là chất chống ô nhiễm độc hại trong thực phẩm?",
        answers: ["Tiêu", "Muối", "Đường", "Ớt"],
        category: "food"
    },
    {
        quiz_id: 8,
        question: "Thức uống nào được chế biến từ lá trà?",
        answers: ["Trà", "Cà phê", "Soda", "Rượu"],
        category: "food"
    },
    {
        quiz_id: 9,
        question: "Loại nước ép trái cây nào được gọi là 'Nước hồng'?",
        answers: ["Nước lựu", "Nước cam", "Nước cà chua", "Nước dừa"],
        category: "food"
    },
    {
        quiz_id: 10,
        question: "Món ăn nào được chế biến từ cơm và rau củ?",
        answers: ["Xôi", "Bánh mì", "Pizza", "Bún"],
        category: "food"
    }
];

const foodResults = [
    {
        quiz_id: 1,
        answer: "Pizza",
    },
    {
        quiz_id: 2,
        answer: "Mỳ Ý",
    },
    {
        quiz_id: 3,
        answer: "Sushi",
    },
    {
        quiz_id: 4,
        answer: "Đậu",
    },
    {
        quiz_id: 5,
        answer: "Bánh mì",
    },
    {
        quiz_id: 6,
        answer: "Nướng thịt",
    },
    {
        quiz_id: 7,
        answer: "Muối",
    },
    {
        quiz_id: 8,
        answer: "Trà",
    },
    {
        quiz_id: 9,
        answer: "Nước lựu",
    },
    {
        quiz_id: 10,
        answer: "Xôi",
    }
];

const graphQuestions = [
    {
        quiz_id: 1,
        question: "Trong lý thuyết đồ thị, đồ thị vô hướng là gì?",
        answers: ["Một đồ thị mà các cạnh không có hướng", "Một đồ thị có hướng", "Một đồ thị không có chu trình", "Một đồ thị có chu trình"],
        category: "graph"
    },
    {
        quiz_id: 2,
        question: "Trong lý thuyết đồ thị, chu trình là gì?",
        answers: ["Một đường đi trong đồ thị bắt đầu và kết thúc ở cùng một đỉnh", "Một đường đi trong đồ thị không đi qua bất kỳ cạnh nào hai lần", "Một đường đi trong đồ thị đi qua tất cả các đỉnh đúng một lần", "Một đường đi trong đồ thị đi qua tất cả các đỉnh và không có cạnh nào được lặp lại"],
        category: "graph"
    },
    {
        quiz_id: 3,
        question: "Trong lý thuyết đồ thị, là gì khi mỗi đỉnh trong đồ thị vô hướng được kết nối với mỗi đỉnh khác bằng đúng một cạnh?",
        answers: ["Đồ thị đầy đủ", "Đồ thị phẳng", "Đồ thị con", "Đồ thị vòng"],
        category: "graph"
    },
    {
        quiz_id: 4,
        question: "Trong lý thuyết đồ thị, một đồ thị vô hướng được gọi là đồ thị con của một đồ thị khác nếu thế nào?",
        answers: ["Tất cả các đỉnh của nó và các cạnh tương ứng là một tập con của đỉnh và cạnh của đồ thị gốc", "Nó không có chu trình", "Nó có chu trình", "Tất cả các đỉnh của nó là một tập con của các đỉnh của đồ thị gốc"],
        category: "graph"
    },
    {
        quiz_id: 5,
        question: "Trong lý thuyết đồ thị, là gì khi không có hai đỉnh nào trong đồ thị được kết nối bởi hơn một cạnh?",
        answers: ["Đồ thị vô hướng", "Đồ thị liên thông", "Đồ thị đơn", "Đồ thị vô hướng đơn"],
        category: "graph"
    },
    {
        quiz_id: 6,
        question: "Trong lý thuyết đồ thị, một đồ thị được gọi là đồ thị liên thông nếu thế nào?",
        answers: ["Tất cả các đỉnh trong đồ thị đều được kết nối với nhau bằng ít nhất một đường đi", "Không có chu trình nào trong đồ thị", "Tất cả các đỉnh trong đồ thị đều được kết nối với một đỉnh duy nhất", "Mỗi đỉnh trong đồ thị đều được kết nối với ít nhất một đỉnh khác"],
        category: "graph"
    },
    {
        quiz_id: 7,
        question: "Trong lý thuyết đồ thị, là gì khi một đồ thị có hướng mà không có chu trình nào?",
        answers: ["Đồ thị có hướng vô hướng", "Đồ thị có hướng acyclic", "Đồ thị có hướng eulerian", "Đồ thị có hướng liên thông"],
        category: "graph"
    },
    {
        quiz_id: 8,
        question: "Trong lý thuyết đồ thị, một đồ thị được gọi là có hướng Eulerian nếu thế nào?",
        answers: ["Nó có một chu trình Eulerian", "Mỗi đỉnh trong đồ thị đều có bậc lẻ", "Nó không có chu trình", "Mỗi cạnh trong đồ thị đều thuộc một chu trình"],
        category: "graph"
    },
    {
        quiz_id: 9,
        question: "Trong lý thuyết đồ thị, là gì khi một đồ thị có đúng một đỉnh có bậc vào là 0 và một đỉnh có bậc ra là 0, và tất cả các đỉnh khác đều có bậc vào và bậc ra bằng nhau?",
        answers: ["Đồ thị có hướng Eulerian", "Đồ thị liên thông mạnh", "Đồ thị cây", "Đồ thị đẳng phân hoạch"],
        category: "graph"
    },
    {
        quiz_id: 10,
        question: "Trong lý thuyết đồ thị, một đồ thị được gọi là đồ thị đẳng phân hoạch nếu thế nào?",
        answers: ["Nó là một cây và mọi cặp đỉnh của nó đều được nối bởi một đường duy nhất mà không có đỉnh nào được lặp lại", "Nó là một đồ thị vô hướng không có chu trình", "Mọi cặp đỉnh của nó đều được nối bởi một đường duy nhất", "Mỗi cặp đỉnh của nó có đúng một đường đi duy nhất nối chúng"],
        category: "graph"
}
];

const graphResults = [
{
quiz_id: 1,
answer: "Một đồ thị mà các cạnh không có hướng",
},
{
quiz_id: 2,
answer: "Một đường đi trong đồ thị bắt đầu và kết thúc ở cùng một đỉnh",
},
{
quiz_id: 3,
answer: "Đồ thị đầy đủ",
},
{
quiz_id: 4,
answer: "Tất cả các đỉnh của nó và các cạnh tương ứng là một tập con của đỉnh và cạnh của đồ thị gốc",
},
{
quiz_id: 5,
answer: "Đồ thị vô hướng đơn",
},
{
quiz_id: 6,
answer: "Tất cả các đỉnh trong đồ thị đều được kết nối với nhau bằng ít nhất một đường đi",
},
{
quiz_id: 7,
answer: "Đồ thị có hướng acyclic",
},
{
quiz_id: 8,
answer: "Nó có một chu trình Eulerian",
},
{
quiz_id: 9,
answer: "Đồ thị cây",
},
{
quiz_id: 10,
answer: "Nó là một cây và mọi cặp đỉnh của nó đều được nối bởi một đường duy nhất mà không có đỉnh nào được lặp lại",
}
];




// Function to get query string parameters
function getQueryParameter(name) {
    let params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Get the 'data' parameter from the query string
let data = getQueryParameter('data');


// ________QUIZ_APP________________
let questions;
let results;
if (data === 'music') {
    questions = musicQuestions;
    results = musicResults;
} else if (data === 'ball') {
    questions = ballQuestions;
    results = ballResults;
} else if (data === 'game') {
    questions = gameQuestions;
    results = gameResults;
} else if (data === 'food') {
    questions = foodQuestions;
    results = foodResults;
} else if (data === 'math') {
    questions = mathQuestions;
    results = mathResults;
} else if (data === 'graph') {
    questions = graphQuestions;
    results = graphResults;
}
const quizTimer = document.querySelector("#timer");
const quizProgress = document.querySelector("#progress");
const quizProgressText = document.querySelector("#progress_text");
const quizSubmit = document.querySelector("#quiz_submit");
const quizPrev = document.querySelector("#quiz_prev");
const quizNext = document.querySelector("#quiz_next");
const quizCount = document.querySelector(".quiz_question h5");
const quizAnswers = document.querySelectorAll(".quiz_question ul li");
let quizQuestions = document.querySelectorAll(".quiz_numbers ul li");
const quizQuestionList = document.querySelector(".quiz_numbers ul");
const quizAnswersItem = document.querySelectorAll(".quiz_answer_item");
const quizTitle = document.querySelector("#quiz_title");
let currentIndex = null;
let listSubmit = []; // Lưu index đáp án đã chọn
let listResults = []; // Lưu index kết quả đúng, theo mảng đã random
let isSubmit = false;
function randomArray(array) {
  return (array = array.sort(() => Math.random() - Math.random()));
}
const quiz = {
  randomQuestions: function () {
    questions = randomArray(questions);
    questions.forEach((q) => {
      q.answers = randomArray(q.answers);
    });
    console.log(questions);
  },
  renderQuestionList: function () {
    let render = "";
    questions.forEach((question, index) => {
      render += `<li>${index + 1}</li>`;
    });
    quizQuestionList.innerHTML = render;
    quizQuestions = document.querySelectorAll(".quiz_numbers ul li");
  },
  renderCurrentQuestion: function () {
    quizCount.innerText = `Question ${currentIndex + 1} of ${questions.length}`;
    quizTitle.innerText = questions[currentIndex].question;
    quizAnswersItem.forEach((answer, index) => {
      answer.innerText = questions[currentIndex].answers[index];
    });
  },
  renderProgress: function () {
    quizProgress.style = `stroke-dasharray: 0 9999;`;
    quizProgressText.innerText = `0/${questions.length}`;
  },
  renderTimer: function () {
    var timer = 900;
    let _this = this;
    // Lấy thẻ p có id là "timer"
    var countdownElement = document.getElementById("timer");

    // Hàm cập nhật thời gian
    function updateTimer() {
      var minutes = Math.floor(timer/60);
      var seconds = timer % 60;

      // Định dạng thời gian thành chuỗi HH:MM:SS
      var timerString =
        (minutes < 10 ? "0" : "") +
        minutes +
        ":" +
        (seconds < 10 ? "0" : "") +
        seconds;

      // Gán thời gian đã định dạng vào thẻ p
      countdownElement.innerHTML = timerString;

      // Giảm thời gian mỗi giây
      timer--;
      // Kiểm tra nếu hết thời gian
      if (timer < 0) {
        countdownElement.innerHTML = "Hết thời gian!";
        _this.handleCheckResults();
      }
      if (isSubmit) {
        clearInterval(intervalId);
      }
    }

    // Gọi hàm updateTimer mỗi giây
    var intervalId = setInterval(updateTimer, 1000);
  },
  renderResults: function () {
    if (listResults[currentIndex] === listSubmit[currentIndex]) {
      quizAnswers.forEach((item) => {
        item.classList.remove("incorrect");
      });
        quizAnswers[listResults[currentIndex]].classList.add("active");
    } else {
      quizAnswers.forEach((item) => {
        item.classList.remove("active");
        item.classList.remove("incorrect");
      });
      quizAnswers[listResults[currentIndex]].classList.add("active");
      quizAnswers[listSubmit[currentIndex]].classList.add("incorrect");
    }
  },
  handleProgress: function (correct) {
    const r = quizProgress.getAttribute("r");
    if (!isSubmit) {
      const progressLen = listSubmit.filter((item) => item >= 0);
      quizProgress.style = `stroke-dasharray: ${
        (2 * Math.PI * r * progressLen.length) / questions.length
      } 9999;`;
      quizProgressText.innerText = `${progressLen.length}/${questions.length}`;
    } else {
      quizProgress.style = `stroke-dasharray: ${
        (2 * Math.PI * r * correct) / questions.length
      } 9999;`;
      quizProgressText.innerText = `${correct}/${questions.length}`;
    }
  },
  handleQuestionList: function () {
    quizQuestions.forEach((item, index) => {
      item.addEventListener("click", () => {
        item.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
        quizQuestions.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
        currentIndex = index;
        this.renderCurrentQuestion();
        quizAnswers.forEach((item) => item.classList.remove("active"));
        const selected = listSubmit[currentIndex];
        selected >= 0 && quizAnswers[selected].click();
        if (isSubmit) {
          this.renderResults();
        }
      });
    });
    quizQuestions[0].click();
  },
  handleAnswer: function () {
    quizAnswers.forEach((answer, index) => {
      answer.addEventListener("click", () => {
        if (!isSubmit) {
          quizAnswers.forEach((item) => item.classList.remove("active"));
          answer.classList.add("active");
          quizQuestions[currentIndex].classList.add("selected");
          listSubmit[currentIndex] = index;
          console.log(listSubmit);
          this.handleProgress();
        } else {
          return;
        }
      });
    });
  },
  handleNext: function () {
    quizNext.addEventListener("click", () => {
      ++currentIndex;
      if (currentIndex > questions.length - 1) {
        currentIndex = 0;
      }
      quizQuestions[currentIndex].click();
    });
  },
  handlePrev: function () {
    quizPrev.addEventListener("click", () => {
      --currentIndex;
      if (currentIndex < 0) {
        currentIndex = questions.length - 1;
      }
      quizQuestions[currentIndex].click();
    });
  },
  handleSubmit: function () {
    quizSubmit.addEventListener("click", () => {
      const progressLen = listSubmit.filter((item) => item >= 0);
      if (progressLen.length === questions.length) {
        this.handleCheckResults();
      } else {
        alert("Bạn chưa chọn hết đáp án");
      }
    });
  },
  handleCheckResults: function () {
    let correct = 0;
    questions.forEach((item, index) => {
      const result = results.find((r) => r.quiz_id === item.quiz_id);
      if (item.answers[listSubmit[index]] === result.answer) {
        listResults[index] = listSubmit[index];
        correct++;
      } else {
        quizQuestions[index].classList.add("incorrect");
        listResults[index] = item.answers.indexOf(result.answer);
      }
    });
    isSubmit = true;
    this.handleProgress(correct);
  },
  handleKeyDown: function () {
    document.addEventListener("keydown", (e) => {
      console.log(e.key);
      switch (e.key) {
        case "ArrowRight":
          return quizNext.click();
        case "ArrowLeft":
          return quizPrev.click();
        default:
          return false;
      }
    });
  },
  render: function () {
    this.renderQuestionList();
    this.renderProgress();
    this.renderTimer();
  },
  handle: function () {
    this.handleQuestionList();
    this.handleAnswer();
    this.handleNext();
    this.handlePrev();
    this.handleKeyDown();
    this.handleSubmit();
  },
  start: function () {
    this.randomQuestions();
    this.render();
    this.handle();
  },
};
quiz.start();

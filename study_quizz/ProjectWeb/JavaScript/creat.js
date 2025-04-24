document.addEventListener('DOMContentLoaded', () => {
    const addQuestionBtn = document.getElementById('addQuestionBtn');
    const questionsContainer = document.getElementById('questionsContainer');

    addQuestionBtn.addEventListener('click', () => {
        const newQuestionContainer = document.createElement('div');
        newQuestionContainer.classList.add('container');

        const questionBox = document.createElement('div');
        questionBox.classList.add('question-box');

        const textarea = document.createElement('textarea');
        textarea.placeholder = 'Question';
        questionBox.appendChild(textarea);

        const newOptionsContainer = document.createElement('div');
        newOptionsContainer.classList.add('options');

        const colors = ['blue', 'orange','blue','orange'];
        
        for (let i = 0; i < 4; i++) {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('option', 'maubox', colors[i]);

            const inputText = document.createElement('input');
            inputText.type = 'text';
            inputText.placeholder = 'Answer';

            const inputCheckbox = document.createElement('input');
            inputCheckbox.type = 'checkbox';

            inputCheckbox.addEventListener('change', () => {
                if (inputCheckbox.checked) {
                    // Lặp qua tất cả các checkbox trong câu hỏi
                    const siblingCheckboxes = newOptionsContainer.querySelectorAll('input[type="checkbox"]');
                    siblingCheckboxes.forEach(siblingCheckbox => {
                        // Nếu checkbox không phải là checkbox hiện tại
                        if (siblingCheckbox !== inputCheckbox) {
                            // Vô hiệu hóa checkbox đó
                            siblingCheckbox.disabled = true;
                        }
                    });
                } else {
                    // Nếu checkbox không được chọn, bỏ vô hiệu hóa cho tất cả các checkbox
                    const siblingCheckboxes = newOptionsContainer.querySelectorAll('input[type="checkbox"]');
                    siblingCheckboxes.forEach(siblingCheckbox => {
                        siblingCheckbox.disabled = false;
                    });
                }
            });

            const deleteOptionBtn = document.createElement('button');
            deleteOptionBtn.classList.add('deleteOptionBtn');
            deleteOptionBtn.textContent = 'x';
            deleteOptionBtn.addEventListener('click', () => {
                newOptionsContainer.removeChild(optionDiv);
            });

            optionDiv.appendChild(inputText);
            optionDiv.appendChild(inputCheckbox);
            optionDiv.appendChild(deleteOptionBtn);

            newOptionsContainer.appendChild(optionDiv);
        }

        const deleteQuestionBtn = document.createElement('button');
        deleteQuestionBtn.classList.add('deleteQuestionBtn');
        deleteQuestionBtn.textContent = 'x';
        deleteQuestionBtn.addEventListener('click', () => {
            questionsContainer.removeChild(newQuestionContainer);
        });

        newQuestionContainer.appendChild(questionBox);
        newQuestionContainer.appendChild(newOptionsContainer);
        newQuestionContainer.appendChild(deleteQuestionBtn);

        questionsContainer.appendChild(newQuestionContainer);
    });

    const backButton = document.getElementById("backBtn");
    backButton.addEventListener("click", () => {
      window.location.href = "../index.html"; // Chuyển hướng người dùng về trang index.html
    });
});

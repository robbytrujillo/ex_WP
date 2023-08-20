function checkAnswers() {
    const questions = document.querySelectorAll('.question');
    let score = 0;

    questions.forEach((question) => {
        const selectedAnswer = question.querySelector('input[type="radio"]:checked');

        if (selectedAnswer) {
            const selectedValue = selectedAnswer.value;

            if (selectedValue === 'a') {
                score += 10;
            }
            // Tambahkan kondisi jawaban benar untuk opsi lainnya di sini (b, c, dst.)
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Skor Anda: ${score}`;
}

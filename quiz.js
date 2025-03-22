document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const answers = {
        q1: "Paris", q2: "Einstein", q3: "Jupiter", q4: "Da Vinci", q5: "H2O",
        q6: "Tokyo", q7: "7", q8: "8", q9: "Nitrogen", q10: "Dollar"
    };

    let score = 0, correct = 0, wrong = 0;

    for (let key in answers) {
        let selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected) {
            if (selected.value === answers[key]) {
                score += 10;
                correct++;
            } else {
                wrong++;
            }
        }
    }

    document.getElementById("score").innerText = score;
    document.getElementById("correct").innerText = correct;
    document.getElementById("wrong").innerText = wrong;
});

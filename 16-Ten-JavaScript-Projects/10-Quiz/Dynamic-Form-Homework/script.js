const questionPool = [
  { question: "Who has the most centuries in international cricket?", correct: "Sachin Tendulkar", options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"] },
  { question: "Which country won the first ICC Cricket World Cup?", correct: "West Indies", options: ["Australia", "England", "West Indies", "India"] },
  { question: "Who is known as the 'God of Cricket'?", correct: "Sachin Tendulkar", options: ["Virat Kohli", "Don Bradman", "MS Dhoni", "Sachin Tendulkar"] },
  { question: "What is the highest individual score in ODI cricket?", correct: "264", options: ["264", "200", "237", "275"] },
  { question: "Which bowler has taken the most wickets in Test cricket?", correct: "Muttiah Muralitharan", options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"] },
  { question: "Who holds the record for the fastest century in ODIs?", correct: "AB de Villiers", options: ["AB de Villiers", "Corey Anderson", "Shahid Afridi", "Virat Kohli"] },
  { question: "Which team has won the most ICC World Cups?", correct: "Australia", options: ["Australia", "India", "West Indies", "Pakistan"] },
  { question: "Who is India's highest run-scorer in Test cricket?", correct: "Sachin Tendulkar", options: ["Rahul Dravid", "Virat Kohli", "Sachin Tendulkar", "Sunil Gavaskar"] },
  { question: "Which Indian captain won the 2011 World Cup?", correct: "MS Dhoni", options: ["Sourav Ganguly", "MS Dhoni", "Virat Kohli", "Kapil Dev"] },
  { question: "Who took a hat-trick in the 2007 World Cup final over?", correct: "Lasith Malinga", options: ["Brett Lee", "Lasith Malinga", "Shaun Tait", "Glenn McGrath"] },

  { question: "Who has the highest batting average in Test cricket?", correct: "Don Bradman", options: ["Don Bradman", "Steve Smith", "Jacques Kallis", "Ricky Ponting"] },
  { question: "Which Indian bowler has the most Test wickets?", correct: "Anil Kumble", options: ["Anil Kumble", "Kapil Dev", "R Ashwin", "Harbhajan Singh"] },
  { question: "Who won the first T20 World Cup?", correct: "India", options: ["India", "Pakistan", "Australia", "Sri Lanka"] },
  { question: "Which player is known as 'Captain Cool'?", correct: "MS Dhoni", options: ["Virat Kohli", "MS Dhoni", "Kane Williamson", "Rohit Sharma"] },
  { question: "Who has hit the most sixes in international cricket?", correct: "Chris Gayle", options: ["Chris Gayle", "MS Dhoni", "Shahid Afridi", "Rohit Sharma"] },
  { question: "Which stadium is known as the Home of Cricket?", correct: "Lord's", options: ["MCG", "Eden Gardens", "Lord's", "The Oval"] },
  { question: "Who scored the first double century in ODI cricket?", correct: "Sachin Tendulkar", options: ["Sachin Tendulkar", "Virender Sehwag", "Chris Gayle", "Rohit Sharma"] },
  { question: "Which bowler has the best figures in ODI cricket?", correct: "Chaminda Vaas", options: ["Chaminda Vaas", "Muralitharan", "McGrath", "Wasim Akram"] },
  { question: "Who is the fastest to 10000 ODI runs?", correct: "Virat Kohli", options: ["Virat Kohli", "Sachin Tendulkar", "AB de Villiers", "Brian Lara"] },
  { question: "Which country hosted the 2019 Cricket World Cup?", correct: "England", options: ["India", "Australia", "England", "South Africa"] },

  { question: "Who has the most runs in a single World Cup?", correct: "Sachin Tendulkar", options: ["Sachin Tendulkar", "Kumar Sangakkara", "Rohit Sharma", "David Warner"] },
  { question: "Who bowled the fastest delivery in cricket?", correct: "Shoaib Akhtar", options: ["Brett Lee", "Shaun Tait", "Shoaib Akhtar", "Mitchell Starc"] },
  { question: "Which Indian player is called 'The Wall'?", correct: "Rahul Dravid", options: ["Rahul Dravid", "Sachin Tendulkar", "VVS Laxman", "Virat Kohli"] },
  { question: "Which team won the 2023 Cricket World Cup?", correct: "Australia", options: ["India", "Australia", "England", "New Zealand"] },
  { question: "Who has the most centuries in ODI cricket?", correct: "Virat Kohli", options: ["Virat Kohli", "Sachin Tendulkar", "Rohit Sharma", "AB de Villiers"] },
  { question: "Which Indian player has 3 ODI double centuries?", correct: "Rohit Sharma", options: ["Rohit Sharma", "Sachin Tendulkar", "Virender Sehwag", "MS Dhoni"] },
  { question: "Who won the Orange Cap in IPL 2023?", correct: "Shubman Gill", options: ["Shubman Gill", "Faf du Plessis", "Virat Kohli", "David Warner"] },
  { question: "Which IPL team has won the most titles?", correct: "Mumbai Indians", options: ["Mumbai Indians", "CSK", "KKR", "RR"] },
  { question: "Who is the first Indian to score a triple century in Tests?", correct: "Virender Sehwag", options: ["Virender Sehwag", "Sachin Tendulkar", "Rahul Dravid", "Sunil Gavaskar"] },
  { question: "Which country invented cricket?", correct: "England", options: ["Australia", "India", "England", "South Africa"] },

  { question: "Who has the most wickets in ODI cricket?", correct: "Muttiah Muralitharan", options: ["Muttiah Muralitharan", "Wasim Akram", "McGrath", "Anil Kumble"] },
  { question: "Who scored 6 sixes in an over in T20 World Cup?", correct: "Yuvraj Singh", options: ["Yuvraj Singh", "Chris Gayle", "Pollard", "Afridi"] },
  { question: "Which Indian bowler has a Test hat-trick?", correct: "Harbhajan Singh", options: ["Harbhajan Singh", "Anil Kumble", "Kapil Dev", "Ashwin"] },
  { question: "Who won the Man of the Tournament in 2019 WC?", correct: "Kane Williamson", options: ["Kane Williamson", "Rohit Sharma", "Ben Stokes", "Virat Kohli"] },
  { question: "Which team won IPL 2023?", correct: "Chennai Super Kings", options: ["CSK", "GT", "MI", "RR"] },
  { question: "Who is the youngest centurion in international cricket?", correct: "Shahid Afridi", options: ["Shahid Afridi", "Sachin Tendulkar", "Rashid Khan", "Rohit Sharma"] },
  { question: "Who has the highest individual score in Tests?", correct: "Brian Lara", options: ["Brian Lara", "Don Bradman", "Virender Sehwag", "Chris Gayle"] },
  { question: "Which Indian player has most Test double centuries?", correct: "Virat Kohli", options: ["Virat Kohli", "Sachin Tendulkar", "Sehwag", "Dravid"] },
  { question: "Which bowler took 10 wickets in a Test innings?", correct: "Anil Kumble", options: ["Anil Kumble", "Muralitharan", "Shane Warne", "Ashwin"] },
  { question: "Who won the ICC Test Championship 2023?", correct: "Australia", options: ["India", "Australia", "England", "New Zealand"] }
];


// Select 5 random questions
const selectedQuestions = questionPool
    .sort(() => 0.5 - Math.random())  // Shuffle
    .slice(0, 5);                      // Take first 5

// DOM elements
const form = document.getElementById('quizForm');
const resultDiv = document.getElementById('result');

// Object to store correct answers (key: "q1", "q2", etc.)
const correctAnswers = {};

// Generate questions dynamically
selectedQuestions.forEach((qObj, index) => {
    const qNumber = index + 1;
    const div = document.createElement('div');
    div.className = 'question';

    div.innerHTML = `<p>${qNumber}. ${qObj.question}</p>`;

    // Shuffle options so correct answer position changes
    const shuffledOptions = [...qObj.options].sort(() => 0.5 - Math.random());

    shuffledOptions.forEach(option => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="radio" name="q${qNumber}" value="${option}" required>
            ${option}
        `;
        div.appendChild(label);
        div.appendChild(document.createElement('br'));
    });

    form.appendChild(div);

    // Save correct answer
    correctAnswers[`q${qNumber}`] = qObj.correct;
});

// Add Submit Button
const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.className = 'submit-btn';
submitBtn.textContent = 'Submit Quiz';
form.appendChild(submitBtn);

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;
    const formData = new FormData(form);

    // Loop through all submitted answers
    for (let [name, userAnswer] of formData.entries()) {
        if (correctAnswers[name] === userAnswer) {
            score++;
        }
    }

    // Display result
    resultDiv.textContent = `Your score: ${score} out of 5 🎉`;
    resultDiv.style.color = score >= 3 ? 'green' : 'red';

    // Optional: Reset form for next attempt
    form.reset();
});
const quizDB = [
    {
        question: 'Q1: What is the full form of "AI"?',
        a: 'Aeronautical Information',
        b: 'Accurate Information',
        c: 'Artificial Intelligence',
        d: 'All Indian',
        ans: 'ans3'
    },
    {
        question: 'Q2: What is the full form of "ANSI"?',
        a: 'American National Standards Institute',
        b: 'American National Standardised Institute',
        c: 'Asian National Society of Investment',
        d: 'American National Surveillance Institute',
        ans: 'ans1'
    },
    {
        question: 'Q3: What is the full form of "AC"?',
        a: 'Auditor Credit',
        b: 'Alternate Current',
        c: 'Altimeter Change',
        d: 'Access Credentials',
        ans: 'ans2'
    },
    {
        question: 'Q4: What is the full form of "AIDS"?',
        a: 'Asian Institute of Defense Sector',
        b: 'Artifical Intelligence Development System',
        c: 'Acquired Immuno Deficiency Syndrome',
        d: 'Assesment on Insurance Deficit System',
        ans: 'ans3'
    },
    {
        question: 'Q5: What is the full form of "ATM"?',
        a: 'Air to Missle',
        b: 'Automated Teller Machine',
        c: 'All Through Market',
        d: 'Ascii Transmission Method',
        ans: 'ans2'
    },   
];

const question = document.getElementById('question');
const option1 = document.getElementById('option-1');
const option2 = document.getElementById('option-2');
const option3 = document.getElementById('option-3');
const option4 = document.getElementById('option-4');
const submit = document.getElementById('submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.getElementById('showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{
    const quesList = quizDB[questionCount];
    question.innerText =quesList.question;
    option1.innerText = quesList.a;
    option2.innerText = quesList.b;
    option3.innerText = quesList.c;
    option4.innerText = quesList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((element) => {
        if(element.checked){
            answer = element.id;
        }
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach(element => element.checked = false);
}

submit.addEventListener('click',() => {
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);
    if(checkAnswer === quizDB[questionCount].ans){
        score++;
    }; 
    questionCount++;
    deselectAll();
    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        
        showScore.innerHTML=`<p>You score: ${score}/${quizDB.length} ✌</p>
        <button class="btn" onClick="location.reload()">Play Again</button>`;
        showScore.className='scoreArea';
        submit.disabled = true;
    }
    
});


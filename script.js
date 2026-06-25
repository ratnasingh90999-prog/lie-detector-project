const questions = [
"Have you ever skipped homework?",
"Did you ever tell a secret to someone?",
"Have you ever lied to your parents?",
"Did you copy in an exam?",
"Have you ever broken a promise?"
];

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const btn = document.getElementById("analyzeBtn");
const result = document.getElementById("result");

question.innerText =
questions[Math.floor(Math.random()*questions.length)];

let startTime = Date.now();
let backspaceCount = 0;

answer.addEventListener("keydown",(e)=>{
if(e.key==="Backspace"){
backspaceCount++;
}
});

btn.addEventListener("click",()=>{

const text = answer.value.trim();

if(text.length < 5){
alert("Please write a longer answer");
return;
}

const totalTime =
(Date.now()-startTime)/1000;

const typingSpeed =
text.length/totalTime;

let score = 50;

if(backspaceCount > 10)
score -= 15;

if(typingSpeed < 2)
score -= 10;

if(typingSpeed > 5)
score += 10;

score += Math.floor(Math.random()*30);

if(score > 100)
score = 100;

if(score < 0)
score = 0;

let verdict =
score > 70
? "✅ Probably Truth"
: "❌ Suspicious";

result.innerHTML = `
<div>
Truth Probability:
${score}%
<br><br>
${verdict}
</div>
`;

localStorage.setItem(
"lastScore",
score
);

});
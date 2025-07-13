const showsentence = document.querySelector('#show-sentence');
const typingspace = document.querySelector('#textarea');
const button = document.querySelector('#btn');
const score = document.querySelector('.score');

let starttime, endtime, totaltimetaken;
const sentences = ["In a world full of distractions, staying focused is the real superpower.",
  "The future belongs to those who prepare for it with determination and vision.",
  "Typing speed and accuracy are essential skills in the digital age.",
  "While some people dream of success, others wake up and work hard for it.",
  "JavaScript is a powerful language that can make websites interactive and dynamic."]

function counttypingspeed(timetaken){
  let totalwords = typingspace.value.trim();
let actualwords = totalwords === '' ? 0 : totalwords.split(/\s+/).length;

  if (actualwords !== 0) {
    let Typingspeed = Math.round((actualwords / timetaken) * 60);
    score.innerHTML = `your typing speed is ${Typingspeed} words per minute and you wrote ${actualwords} words in time ${timetaken}s`;
  }
  else {
    score.innerHTML=`your typing speed is 0 words per minute and time taken ${timetaken} sec`
  }
  }

function starttyping() {
  let randomno = Math.floor(Math.random() * sentences.length);
  showsentence.innerHTML = sentences[randomno];
  let date = new Date();
  starttime = date.getTime();
  button.innerHTML = "Done";

}
  
function endtyping() {
  button.innerHTML = "Start";
  let date = new Date();
  endtime = date.getTime();
  totaltimetaken = (endtime - starttime) / 1000;
  counttypingspeed(totaltimetaken);
  showsentence.innerHTML = "";
  typingspace.value = "";  
}

button.addEventListener('click', () => {
  if (button.innerText.toLowerCase() === "start") {
    typingspace.removeAttribute('disabled');
    starttyping();
  }
  else {
    typingspace.setAttribute('disabled', 'true');
    endtyping();
  }
})
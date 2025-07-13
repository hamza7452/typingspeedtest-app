const showsentence = document.querySelector('#show-sentence');
const typingspace = document.querySelector('#textarea');
const button = document.querySelector('#btn');
const score = document.querySelector('#score');

let starttime, endtime, totaltimetaken;
const sentences = ["In a world full of distractions, staying focused is the real superpower.",
  "The future belongs to those who prepare for it with determination and vision.",
  "Typing speed and accuracy are essential skills in the digital age.",
  "While some people dream of success, others wake up and work hard for it.",
  "JavaScript is a powerful language that can make websites interactive and dynamic."]

function starttyping() {
  let randomno = Math.floor(Math.random() * sentences.length);
  showsentence.innerHTML = sentences[randomno];
  let date = new Date();
  let starttime = date.getTime();
  button.innerHTML = "Done";

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
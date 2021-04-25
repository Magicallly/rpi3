// DOM Elements
const time = document.getElementById('time'),
  date = document.getElementById('date'),
  day = document.getElementById('day'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

const base = 'D://Downloads//momentum//img';
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg'];
let i = 0;
const body = document.querySelector('body');
const btn = document.querySelector('.btn');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
 const amPm = hour >= 24 ;

  // 12hr Format
  //hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}
//Set date
var today = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var quotes = [
  [
    "Благородные люди, друг друга любя,      \
    Видят горе других, забывают себя.        \
    Если чести и блеска зеркал ты желаешь, — \
    Не завидуй другим, — и возлюбят тебя.",

    "Омар Хайям"
  ],

  [
    "Добродетель мудрецов напоминает собой путешествие в дальннюю страну \
    и восхождение на вершину: идущие                                     \
    в дальнюю страну начинают свой путь с первого шага;                  \
    восходящие на вершину начинают с подножия горы.",

    "Конфуций"
  ],

  [
    "Если вы хотите успеха, а готовитесь к поражению, то вы получите как раз то, к чему готовитесь.",

    "Флоренс Шин"
  ],

  [
    "Мы – рабы своих привычек. измени свои привычки, изменится твоя жизнь.",

    "Роберт Кийосаки"
  ]
];



d = days[today.getDay()];

currentDate = dd + '-' + mm + '-' + yyyy;

day.innerHTML = d;

date.innerHTML = currentDate;


// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('https://i.ibb.co/VSm4Pjx/01.jpg')";
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('https://i.ibb.co/HDW8tVx/02.jpg')";
    greeting.textContent = 'Good Afternoon, ';
  } else if (hour < 24) {
      // Evening
      document.body.style.backgroundImage = "url('https://i.ibb.co/DtQcZQL/03.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
  } else {
    // night
    document.body.style.backgroundImage = "url('https://i.ibb.co/SwVr4sG/04.jpg')";
    greeting.textContent = 'Good night, ';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();

document.getElementById("next-quote").addEventListener("click", function() {


  var quote = quotes[ Math.floor( Math.random() * quotes.length ) ];

  // цитата
  var phrase = document.querySelector("#phrase");

  // автор
  var author = document.querySelector("#author");

  phrase.innerHTML = quote[0];
  author.innerHTML = quote[1];
});


function viewBgImage(src) {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    body.style.backgroundImage = `url(${src})`;
  };
}

function getImage() {
  const index = i % images.length;
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
}
btn.addEventListener('click', getImage);

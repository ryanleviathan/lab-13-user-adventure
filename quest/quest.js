import questData from '../data.js';
import { findById, USER } from '../utils.js';

const section = document.querySelector('section');
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const quest = findById(questData, id);

const h2 = document.createElement('h2');
const img = document.createElement('img');
const description = document.createElement('div');

const userInfoSpan = document.querySelector('header');
userInfoSpan.textContent = JSON.stringify(pullUser(USER));


console.log(pullUser(USER));

img.src = '../assets/' + quest.image;
section.appendChild(img);

h2.textContent = quest.title;
section.appendChild(h2);

description.textContent = quest.description;
section.appendChild(description);

const form = document.createElement('form');
section.appendChild(form);

quest.choices.forEach(choice => {
    const label = document.createElement('label');
    const span = document.createElement('span');
    

    span.textContent = choice.description;

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(span, radio);

    form.appendChild(label);
});

const button = document.createElement('button');
button.textContent = 'You Decided, then?';
form.appendChild(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const checked = document.querySelector(':checked');
    const selectedId = checked.value;
    const choice = findById(quest.choices, selectedId);
    updateUser(choice);

    const pTag = document.createElement('p');
    pTag.textContent = choice.result;
    console.log(choice.result);
    section.appendChild(pTag);
    
    setTimeout('history.go(-1)', 15000);
    
});

function updateUser(choice) {
    const user = JSON.parse(localStorage.getItem('USER'));
    user.hp = user.hp + choice.hp;
    user.gold = user.gold + choice.gold;
    user.completed[quest.id] = true;
    localStorage.setItem('USER', JSON.stringify(user));
}

function pullUser(key) {
    const user = window.localStorage.getItem(key);

    return JSON.parse(user);
}
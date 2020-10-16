import { saveUser } from './utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    saveUser({
        name: data.get('name'),
        class: data.get('class'),
        gold: 0,
        hp: 40,
        completed: {}
    });
    window.location.href = './map/';
});
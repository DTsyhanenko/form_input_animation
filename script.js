"use strict";

const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('') //we split text to an array to get every letter
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) // mapping a new array with arrow function
        .join('') //with join we are transforming it back to a string
})

const adviceDiv = document.querySelector('.advice');
const numberDiv = document.querySelector('.number');
const dice = document.querySelector('.dice');


dice.addEventListener('click', () => {
    getAdvice();
});

window.onload(getAdvice());



function getAdvice() {
fetch('https://api.adviceslip.com/advice').then(response =>{
    return response.json();
}).then(data => {
     const adviceObj = data.slip;
     adviceDiv.innerHTML = `${adviceObj.advice}`;
     numberDiv.innerHTML = `Advice #${adviceObj.id}`;
}).catch(e => {
    console.error(e);
});
}


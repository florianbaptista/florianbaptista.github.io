let informatique = document.getElementById('informatique');
let rubriExp1 = document.getElementById('rubriExp11')

informatique.addEventListener('click', () => {
    rubriExp1.style.display = 'block';
    rubriExp2.style.display = 'none';
});

let autre = document.getElementById('autre');
let rubriExp2 = document.getElementById('rubriExp22');


autre.addEventListener('click', () => {
    rubriExp1.style.display = 'none';
    rubriExp2.style.display = 'block';
});
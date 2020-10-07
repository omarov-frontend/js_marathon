import Pokemon from './pokemon.js';
import { random } from './utils.js';

const player1 = new Pokemon({
    name: 'Pikachu',
    defaultHP: 250,
    damageHP: 250,
    selectors: 'character',
});

const player2 = new Pokemon({
    name: 'Charmander',
    defaultHP: 250,
    damageHP: 250,
    selectors: 'enemy',
});
console.log(player1);
console.log(player2);

// функция - замыкание
function countClick(count = 6, el) {
    const innerText = el.innerText;
    el.innerText = `${innerText} (${count})`;

    return function() {
        count--;
        el.innerText = `${innerText} (${count})`;
        if(count === 0) {
            el.disabled = true;
        }
        return count;
    }
}

const BTNS = { 
    thunder: document.getElementById('btn-kick'), 
    fire: document.getElementById('btn-fire'),
    fatality: document.getElementById('btn-fatality'),
    cobra: document.getElementById('btn-cobra'),
}

const countThunder = countClick(6, BTNS.thunder);
BTNS.thunder.addEventListener('click', function() {
    countThunder();

    player1.changeHP(random(55), function(count) {
        generateLog(player1, player2, count);
    });
    player2.changeHP(random(55), function(count) {
        generateLog(player2, player1, count);
    });
});

const countFire = countClick(5, BTNS.fire);
BTNS.fire.addEventListener('click', function() {
    countFire();

    player1.changeHP(random(60), function(count) {
        generateLog(player1, player2, count);
    });
    player2.changeHP(random(60), function(count) {
        generateLog(player2, player1, count);
    });
});

const countFatality = countClick(2, BTNS.fatality);
BTNS.fatality.addEventListener('click', function() {
    countFatality();

    player1.changeHP(random(150), function(count) {
        generateLog(player1, player2, count);
    });
    player2.changeHP(random(150), function(count) {
        generateLog(player2, player1, count);
    });
});

const countCobra = countClick(10, BTNS.cobra);
BTNS.cobra.addEventListener('click', function() {
    countCobra();

    player1.changeHP(random(30), function(count) {
        generateLog(player1, player2, count);
    });
    player2.changeHP(random(30), function(count) {
        generateLog(player2, player1, count);
    });
});

function generateLog(player1, player2, count) {

    const logs = [
        `<strong>${player1.name}</strong> вспомнил что-то важное, но неожиданно <strong>${player2.name}</strong>, не помня себя от испуга, ударил в предплечье врага. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${player1.damageHP} из ${player2.defaultHP}</span> жизней!`,
        `<strong>${player1.name}</strong> поперхнулся, и за это <strong>${player2.name}</strong> с испугу приложил прямой удар коленом в лоб врага. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${player1.damageHP} из ${player2.defaultHP}</span> жизней!`,
        `<strong>${player1.name}</strong> забылся, но в это время наглый <strong>${player2.name}</strong>, приняв волевое решение, неслышно подойдя сзади, ударил. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${player1.damageHP} из ${player2.defaultHP}</span> жизней!`,
        `<strong>${player1.name}</strong> пришел в себя, но неожиданно <strong>${player2.name}</strong> случайно нанес мощнейший удар. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${player1.damageHP} из ${player2.defaultHP}</span> жизней!`,
        `<strong>${player1.name}</strong> поперхнулся, но в это время <strong>${player2.name}</strong> нехотя раздробил кулаком \<вырезанно цензурой\> противника. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${player1.damageHP} из ${player2.defaultHP}</span> жизней!`,
        `<strong>${player1.name}</strong> удивился, а <strong>${player2.name}</strong> пошатнувшись влепил подлый удар. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${player1.damageHP} из ${player2.defaultHP}</span> жизней!`,
        `<strong>${player1.name}</strong> высморкался, но неожиданно <strong>${player2.name}</strong> провел дробящий удар. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${player1.damageHP} из ${player2.defaultHP}</span> жизней!`,
        `<strong>${player1.name}</strong> пошатнулся, и внезапно наглый <strong>${player2.name}</strong> беспричинно ударил в ногу противника. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${player1.damageHP} из ${player2.defaultHP}</span> жизней!`,
        `<strong>${player1.name}</strong> расстроился, как вдруг, неожиданно <strong>${player2.name}</strong> случайно влепил стопой в живот соперника. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${player1.damageHP} из ${player2.defaultHP}</span> жизней!`,
        `<strong>${player1.name}</strong> пытался что-то сказать, но вдруг, неожиданно <strong>${player2.name}</strong> со скуки, разбил бровь сопернику. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${player1.damageHP} из ${player2.defaultHP}</span> жизней!`,
    ];

    const log = logs[random(logs.length) - 1];

    const $logsElement = document.querySelector('#logs');

    const $paragraph = document.createElement('p');
    $paragraph.innerHTML = log;

    $logsElement.insertBefore($paragraph, $logsElement.children[0]);
}
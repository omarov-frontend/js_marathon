import Pokemon from './pokemon.js';
import random from './utils.js';
import { pokemons } from './pokemons.js';

const $control = document.querySelector('.control');
const $logs = document.querySelector('#logs');
let player1, player2;
let pokemonsCopy = [...pokemons];

// запуск игры
function renderStartBtn(name) {
    $control.innerHTML = '';
    const $startBtn = document.createElement('button');
    $startBtn.classList.add('button');
    $startBtn.innerText = name;
    $startBtn.addEventListener('click', startGame);
    $control.appendChild($startBtn);
}

function renderNextEnemyBtn() {
    const $newEnemyBtn = document.createElement('button');
    $newEnemyBtn.classList.add('button');
    $newEnemyBtn.innerText = 'Next Enemy!';
    $newEnemyBtn.addEventListener('click', () => {
        $control.innerHTML = '';
        renderPlayer2();
        renderAttackBtns();
    });
    $control.appendChild($newEnemyBtn);
}
renderStartBtn('Start Game!');

function startGame() {
    $logs.innerHTML = '';
    $control.innerHTML = '';
    renderPlayers();
    renderAttackBtns();
}

// рандомный выбор покемона
function randomPokemonGenerator() {
    const randomPokemon = pokemonsCopy[random(pokemonsCopy.length - 1)];
    pokemonsCopy = pokemonsCopy.filter(item => item !== randomPokemon);
  
    return randomPokemon;
}

function renderPlayer1() {
    player1 = new Pokemon({
        ...randomPokemonGenerator(),
        selectors: 'player1',
    });
    player1.renderPlayer();
}

function renderPlayer2() {
    player2 = new Pokemon({
        ...randomPokemonGenerator(),
        selectors: 'player2',
    });
    player2.renderPlayer();
}

function renderPlayers() {
    renderPlayer1();
    renderPlayer2();
}

function renderAttackBtns() {
    player1.attacks.forEach(attack => {
        const $btn = document.createElement('button');
        $btn.classList.add('button');
        $control.appendChild($btn);
        $btn.innerText = attack.name;

        const btnCount = countBtn(attack.maxCount, $btn);
    
        $btn.addEventListener('click', () => {
            btnCount();
            player1.changeHp(random(40, 20), player1, fightLog);
            player2.changeHp(random(attack.maxDamage, attack.minDamage), player2, fightLog);
        })
        $control.appendChild($btn);
    })
}

function counter(count = 0) {
    return function() {
        return ++count;
    }
}
const newRoundCounter = counter();

// функция - замыкание
function countBtn(count = 10, el) {
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

function fightLog(count, player) {
    const $paragraph = document.createElement('p');
    let log;
    let $buttons = document.querySelectorAll('.button');
  
    if (player.hp.current === 0) {
        $buttons.forEach(item => item.disabled = true);
        renderStartBtn('Restart Game!');
        renderNextEnemyBtn();
        log = player === player2 ? `Round ${newRoundCounter()}<hr>${generateLog(player, player1, count)}<br><strong>${player1.name}</strong> - Выиграл!🏆<br><strong>${player.name}</strong> - Проиграл!😢`
        : `${generateLog(player, player2, count)}<br><strong>${player2.name}</strong> - Выиграл!🏆<br><strong>${player.name}</strong> - Проиграл!😢<hr>`;
    } else {
        log = player === player2
            ? `Round ${newRoundCounter()}<hr>${generateLog(player, player1, count)}`
            : `${generateLog(player, player2, count)}<hr>`;
    }
    $paragraph.innerHTML = `${ log }`;
    $logs.insertBefore($paragraph, $logs.children[0]);
}

function generateLog(firstPerson, secondPerson, count) {

    const logs = [
        `<strong>${firstPerson.name}</strong> вспомнил что-то важное, но неожиданно <strong>${secondPerson.name}</strong>, не помня себя от испуга, ударил в предплечье врага. <br> Нанес - ⚡️<span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.hp.current} из ${firstPerson.hp.default}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> поперхнулся, и за это <strong>${secondPerson.name}</strong> с испугу приложил прямой удар коленом в лоб врага. <br> Нанес - ⚡<span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.hp.current} из ${firstPerson.hp.default}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> забылся, но в это время наглый <strong>${secondPerson.name}</strong>, приняв волевое решение, неслышно подойдя сзади, ударил. <br> Нанес - ⚡<span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.hp.current} из ${firstPerson.hp.default}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> пришел в себя, но неожиданно <strong>${secondPerson.name}</strong> случайно нанес мощнейший удар. <br> Нанес - ⚡<span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.hp.current} из ${firstPerson.hp.default}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> поперхнулся, но в это время <strong>${secondPerson.name}</strong> нехотя раздробил кулаком \<вырезанно цензурой\> противника. <br> Нанес - ⚡<span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.hp.current} из ${firstPerson.hp.default}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> удивился, а <strong>${secondPerson.name}</strong> пошатнувшись влепил подлый удар. <br> Нанес - ⚡<span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.hp.current} из ${firstPerson.hp.default}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> высморкался, но неожиданно <strong>${secondPerson.name}</strong> провел дробящий удар. <br> Нанес - ⚡<span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.hp.current} из ${firstPerson.hp.default}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> пошатнулся, и внезапно наглый <strong>${secondPerson.name}</strong> беспричинно ударил в ногу противника. <br> Нанес - ⚡<span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.hp.current} из ${firstPerson.hp.default}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> расстроился, как вдруг, неожиданно <strong>${secondPerson.name}</strong> случайно влепил стопой в живот соперника. <br> Нанес - ⚡<span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.hp.current} из ${firstPerson.hp.default}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> пытался что-то сказать, но вдруг, неожиданно <strong>${secondPerson.name}</strong> со скуки, разбил бровь сопернику. <br> Нанес - ⚡<span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.hp.current} из ${firstPerson.hp.default}</span> жизней!`,
    ];

    return logs[ random(logs.length) - 1 ];
}
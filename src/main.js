import Pokemon from './pokemon.js';
import { random } from './utils.js';
import { pokemons } from './pokemons.js';

const $control = document.querySelector('.control');
const $logs = document.querySelector('#logs');


function btnRenderStart(name) {
    $control.innerHTML = '';
    const $btnStart = document.createElement('button');
    $btnStart.classList.add('button');
    $btnStart.innerText = name;
    $btnStart.addEventListener('click', startGame);
    $control.appendChild($btnStart);
}
btnRenderStart('Start Game!');
  
function startGame() {
    $control.innerHTML = '';
    $logs.innerHTML = '';
    renderPlayers();
    renderAttackBtns();
}

// рандомная генерация игроков
function renderPlayers() {
    const randomPokemonPlayer1 = pokemons[ random(pokemons.length - 1) ];
    const randomPokemonPlayer2 = filteredPokemons[ random(filteredPokemons.length - 1) ];
    const filteredPokemons = pokemons.filter(i => i !== randomPokemonPlayer1);
  
    const player1 = new Pokemon({
      ...randomPokemonPlayer1,
      selectors: 'player1',
    });
  
    const player2 = new Pokemon({
      ...randomPokemonPlayer2,
      selectors: 'player2',
    });
  
    player1.renderPlayer();
    player2.renderPlayer();
}

function renderAttackBtns() {
    player1.attacks.forEach(i => {
        const $btn = document.createElement('button');
        $btn.classList.add('button');
        $control.appendChild($btn);
        $btn.innerText = i.name;
  
        const btnCount = countBtn(i.maxCount, $btn);
  
        $btn.addEventListener('click', () => {
            btnCount();
            player1.changeHp(random(40, 20), player1, fightLog);
            player2.changeHp(random(i.maxDamage, i.minDamage), player2, fightLog);
        })
        $control.appendChild($btn);
    })
}

function counter(count = 0) {
    return function() {
      count++;
      return count;
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

    if(player.damageHP === 0) {
        btnRenderStart('Restart Game!');

        log = player === player2 ? `&#127752;Round ${newRoundCounter()}<hr>${generateLog(player, player1, count)}<br>&#129308;&#129307;The fight is over!<br>${player.name}&#128128; проиграл!`
        : `${generateLog(player, player2, count)}<br>&#129308;&#129307;The fight is over!<br>${player.name}&#128128; проиграл!<hr>`;
    } else {
        log = player === player2 ? `&#127752;Round ${newRoundCounter()}<hr>${generateLog(player, player1, count)}`
        : `${generateLog(player, player2, count)}<hr>`;
    }
    $paragraph.innerHTML = `${ log }`;
    $logs.insertBefore($paragraph, $logs.children[0]);
}

function generateLog(firstPerson, secondPerson, count) {

    const logs = [
        `<strong>${firstPerson.name}</strong> вспомнил что-то важное, но неожиданно <strong>${secondPerson.name}</strong>, не помня себя от испуга, ударил в предплечье врага. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.damageHP} из ${secondPerson.defaultHP}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> поперхнулся, и за это <strong>${secondPerson.name}</strong> с испугу приложил прямой удар коленом в лоб врага. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.damageHP} из ${secondPerson.defaultHP}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> забылся, но в это время наглый <strong>${secondPerson.name}</strong>, приняв волевое решение, неслышно подойдя сзади, ударил. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.damageHP} из ${secondPerson.defaultHP}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> пришел в себя, но неожиданно <strong>${secondPerson.name}</strong> случайно нанес мощнейший удар. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.damageHP} из ${secondPerson.defaultHP}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> поперхнулся, но в это время <strong>${secondPerson.name}</strong> нехотя раздробил кулаком \<вырезанно цензурой\> противника. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.damageHP} из ${secondPerson.defaultHP}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> удивился, а <strong>${secondPerson.name}</strong> пошатнувшись влепил подлый удар. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.damageHP} из ${secondPerson.defaultHP}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> высморкался, но неожиданно <strong>${secondPerson.name}</strong> провел дробящий удар. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.damageHP} из ${secondPerson.defaultHP}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> пошатнулся, и внезапно наглый <strong>${secondPerson.name}</strong> беспричинно ударил в ногу противника. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.damageHP} из ${secondPerson.defaultHP}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> расстроился, как вдруг, неожиданно <strong>${secondPerson.name}</strong> случайно влепил стопой в живот соперника. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.damageHP} из ${secondPerson.defaultHP}</span> жизней!`,
        `<strong>${firstPerson.name}</strong> пытался что-то сказать, но вдруг, неожиданно <strong>${secondPerson.name}</strong> со скуки, разбил бровь сопернику. Нанес - <span class='text-red'>${count}</span> урона, Оставив - <span class='text-green'>${firstPerson.damageHP} из ${secondPerson.defaultHP}</span> жизней!`,
    ];

    return logs[ random(logs.length) - 1 ];
}
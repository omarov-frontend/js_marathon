import Pokemon from './pokemon.js';
import random from './utils.js';

const $control = document.querySelector('.control');
const $logs = document.querySelector('#logs');

// запуск игры
function renderStartBtn(name) {
    $control.innerHTML = '';
    const $startBtn = document.createElement('button');
    $startBtn.classList.add('button');
    $startBtn.innerText = name;
    $startBtn.addEventListener('click', startGame);
    $control.appendChild($startBtn);
}

function startGame() {
    $logs.innerHTML = '';
    $control.innerHTML = '';
    game.start();
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


class Game {
    player1;
    player2;

    getRandomPokemon = async () => {
        const res = await fetch('https://reactmarathon-api.netlify.app/api/pokemons?random=true');
        const body = await res.json();
    
        return body;
    }

    getKick = async (player1id, player2id, attackId) => {
        const res = await fetch(`https://reactmarathon-api.netlify.app/api/fight?player1id=${player1id}&attackId=${attackId}&player2id=${player2id}`);
        const body = await res.json();
    
        return body;
    }

    fightLog = async (count, player) => {
        const $paragraph = document.createElement('p');
        let log;
        let $buttons = document.querySelectorAll('.button');
      
        if (player.hp.current === 0) {
            $buttons.forEach(item => item.disabled = true);
            renderStartBtn('Restart Game!');
            log = player === this.player2 ? `Round ${newRoundCounter()}<hr>${generateLog(player, this.player1, count)}<br><strong>${this.player1.name}</strong> - Выиграл!🏆<br><strong>${player.name}</strong> - Проиграл!😢`
            : `${generateLog(player, this.player2, count)}<br><strong>${this.player2.name}</strong> - Выиграл!🏆<br><strong>${player.name}</strong> - Проиграл!😢<hr>`;
        } else {
            log = player === this.player2
                ? `Round ${newRoundCounter()}<hr>${generateLog(player, this.player1, count)}`
                : `${generateLog(player, this.player2, count)}<hr>`;
        }
        $paragraph.innerHTML = `${ log }`;
        $logs.insertBefore($paragraph, $logs.children[0]);
    }

    start = async () => {
        this.player1 = new Pokemon({
            ...(await this.getRandomPokemon()),
            selectors: 'player1',
        });

        this.player2 = new Pokemon({
            ...(await this.getRandomPokemon()),
            selectors: 'player2',
        });

        this.player1.renderPlayer();
        this.player2.renderPlayer();

        this.player1.attacks.forEach(attack => {
            const $btn = document.createElement('button');
            $btn.classList.add('button');
            $control.appendChild($btn);
            $btn.innerText = attack.name;
      
            const btnCount = countBtn(attack.maxCount, $btn);
      
            $btn.addEventListener('click', async () => {
                const count = await this.getKick(this.player1.id, this.player2.id, attack.id);
                btnCount();
                this.player1.changeHp(count.kick.player1, this.player1, this.fightLog);
                this.player2.changeHp(count.kick.player2, this.player2, this.fightLog);
            })
            $control.appendChild($btn);
        })
    }
}

const game = new Game();

renderStartBtn('Start Game!');
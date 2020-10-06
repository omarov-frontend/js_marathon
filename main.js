import Pokemon from './pokemon.js';
import random from './utils.js';

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


const $btnThunder = document.getElementById('btn-kick');
const $btnFire = document.getElementById('btn-fire');
const $btnFatality = document.getElementById('btn-fatality');
const $btnCobra = document.getElementById('btn-cobra');

// функция - замыкание
function countClick(count = 6, el) {
    const innerText = el.innerText;
    el.innerText = `${innerText} (${count})`;

    return function() {
        count--;
        if(count === 0) {
            el.disabled = true;
        }
        el.innerText = `${innerText} (${count})`;
        return count;
    }
}

const countThunder = countClick(6, $btnThunder);
$btnThunder.addEventListener('click', function() {
    console.log(' - K I C K  S T R I K E');
    player1.changeHP(random(55), function(count) {
        console.log('Some change after change HP', count);
        consolr.log(generateLog(player1, player2, count));
    });
    player2.changeHP(random(55), function(count) {
        console.log('Some change after change HP', count);
    });

    countThunder();
});

const countFire = countClick(5, $btnFire);
$btnFire.addEventListener('click', function() {
    console.log(' - F I R E  S T R I K E');
    player1.changeHP(random(60));
    player2.changeHP(random(60));

    countFire();
});

const countFatality = countClick(2, $btnFatality);
$btnFatality.addEventListener('click', function() {
    console.log(' - F A T A L I T Y  S T R I K E');
    player1.changeHP(random(150));
    player2.changeHP(random(150));

    countFatality();
});

const countCobra = countClick(10, $btnCobra);
$btnCobra.addEventListener('click', function() {
    console.log(' - C O B R A  S T R I K E');
    player1.changeHP(random(30));
    player2.changeHP(random(30));

    countCobra();
});

function changeHP(count) {
    this.damageHP -= count;

    const $logsElement = document.querySelector('#logs');

    const $paragraph = document.createElement('p');
    $paragraph.innerText = log;

    $logsElement.insertBefore($paragraph, $logsElement.children[0]);

    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
    
    console.log( log );

    if(this.damageHP <= 0) {
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой!');
        $btnThunder.disabled = true;
    }
    this.renderHP();
}

function generateLog(player1, player2, count) {
    //деструктуризация:
    const { name, damageHP, defaultHP } = player1;
    const { name: nameEnemy } = player2;

    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${nameEnemy}, не помня себя от испуга, ударил в предплечье врага. Нанес - ${count} урона, Оставив - [${damageHP}/${defaultHP}] жизней!`,
        `${name} поперхнулся, и за это ${nameEnemy} с испугу приложил прямой удар коленом в лоб врага. Нанес - ${count} урона, Оставив - [${damageHP}/${defaultHP}] жизней!`,
        `${name} забылся, но в это время наглый ${nameEnemy}, приняв волевое решение, неслышно подойдя сзади, ударил. Нанес - ${count} урона, Оставив - [${damageHP}/${defaultHP}] жизней!`,
        `${name} пришел в себя, но неожиданно ${nameEnemy} случайно нанес мощнейший удар. Нанес - ${count} урона, Оставив - [${damageHP}/${defaultHP}] жизней!`,
        `${name} поперхнулся, но в это время ${nameEnemy} нехотя раздробил кулаком \<вырезанно цензурой\> противника. Нанес - ${count} урона, Оставив - [${damageHP}/${defaultHP}] жизней!`,
        `${name} удивился, а ${nameEnemy} пошатнувшись влепил подлый удар. Нанес - ${count} урона, Оставив - [${damageHP}/${defaultHP}] жизней!`,
        `${name} высморкался, но неожиданно ${nameEnemy} провел дробящий удар. Нанес - ${count} урона, Оставив - [${damageHP}/${defaultHP}] жизней!`,
        `${name} пошатнулся, и внезапно наглый ${nameEnemy} беспричинно ударил в ногу противника. Нанес - ${count} урона, Оставив - [${damageHP}/${defaultHP}] жизней!`,
        `${name} расстроился, как вдруг, неожиданно ${nameEnemy} случайно влепил стопой в живот соперника. Нанес - ${count} урона, Оставив - [${damageHP}/${defaultHP}] жизней!`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${nameEnemy} со скуки, разбил бровь сопернику. Нанес - ${count} урона, Оставив - [${damageHP}/${defaultHP}] жизней!`,
    ];

    return logs[random(logs.length) - 1];
}
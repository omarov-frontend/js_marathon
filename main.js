const $btn = document.getElementById('btn-kick');
const character = {
    name: 'Pikachu',
    defaultHP: 250,
    damageHP: 250,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHP,
    changeHP,
    renderHPlife,
    renderProgressbarHP,
};

const enemy = {
    name: 'Charmander',
    defaultHP: 250,
    damageHP: 250,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHP,
    changeHP,
    renderHPlife,
    renderProgressbarHP,
};

$btn.addEventListener('click', function() {
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
});

function init() {
    console.log('Start Game!');
}

function renderHP() {
    this.renderHPlife();
    this.renderProgressbarHP();
}

function renderHPlife() {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
    this.elProgressbar.style.width = this.damageHP * 100 / this.defaultHP + '%';
}

function changeHP(count) {
    this.damageHP -= count;

    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);

    const $logsElement = document.querySelector('#logs');

    const $paragraph = document.createElement('p');
    $paragraph.innerText = log;

    $logsElement.insertBefore($paragraph, $logsElement.children[0]);
    
    console.log( log );

    if(this.damageHP <= 0) {
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой!');
        $btn.disabled = true;
    }
    this.renderHP();
}

function random(num) {
    return Math.ceil( Math.random() * num );
}

function generateLog(firstPerson, secondPerson, count) {
    //деструктуризация:
    const { name, damageHP, defaultHP } = firstPerson;
    const { name: nameEnemy } = secondPerson;

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

init();
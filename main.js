const $btn = document.getElementById('btn-kick');
const character = {
    name: 'Pikachu',
    defaultHP: 250,
    damageHP: 250,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHP: renderHP,
    changeHP: changeHP,
    renderHPlife: renderHPlife,
    renderProgressbarHP: renderProgressbarHP,
};

const enemy = {
    name: 'Charmander',
    defaultHP: 250,
    damageHP: 250,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHP: renderHP,
    changeHP: changeHP,
    renderHPlife: renderHPlife,
    renderProgressbarHP: renderProgressbarHP,
};

$btn.addEventListener('click', function() {
    console.log('Kick');
    character.changeHP(random(5, 15));
    enemy.changeHP(random(5, 15));
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
    this.elProgressbar.style.width = this.damageHP / 250 * 100 + '%';
}

function changeHP(count) {
    if(this.damageHP < count) {
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой!');
        $btn.disabled = true;
    } else {
        this.damageHP -= count;
    }
    this.renderHP();
}

function random(min, max) {
    return min + Math.ceil( Math.random() * (max - min + 1) );
}
init();
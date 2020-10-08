class Selectors {
    constructor(name) {
        this.elHp = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
        this.elImg = document.getElementById(`img-${name}`);
        this.elName = document.getElementById(`name-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({ name, damageHP, defaultHP, type, attacks, img, selectors }) {
        super(selectors);

        this.name = name;
        this.damageHP = damageHP;
        this.defaultHP = defaultHP;
        this.type = type;
        this.attacks = attacks;
        this.img = img;
    }

    renderPlayer = () => {
        this.renderHp();
        this.renderImg();
        this.renderName();
    }

    changeHP = (count, player, cb) => {
        this.damageHP -= count;
    
        if(this.damageHP <= 0) {
            this.damageHP = 0;
            alert(`Бедный ${this.name} проиграл бой!`);
        }
        this.renderHP();
        if (cb) cb(count, player);
    }

    renderHP = () => {
        this.renderHPlife();
        this.renderProgressbarHP();
    }
    
    renderHPlife = () => {
        const { elHP, damageHP, defaultHP } = this;
        elHP.innerText = `${damageHP} / ${defaultHP}`;
    }
    
    renderProgressbarHP = () => {
        const { elProgressbar, damageHP, defaultHP } = this;
        const percent = `${damageHP * 100 / defaultHP}`
        elProgressbar.style.width = `${percent + '%'}`;
    }

    renderImg = () => {
        this.elImg.src = `${this.img}`;
    }
    
    renderName = () => {
        this.elName.innerText = `${this.name}`;
    }
}

export default Pokemon;
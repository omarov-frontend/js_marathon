class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({ name, damageHP, defaultHP, selectors }) {
        super(selectors);

        this.name = name;
        this.damageHP = damageHP;
        this.defaultHP = defaultHP;

        this.renderHP();
    }

    changeHP = (count, cb) => {
        this.damageHP -= count;
    
        if(this.damageHP <= 0) {
            this.damageHP = 0;
            alert(`Бедный ${this.name} проиграл бой!`);
            cb.disabled = true;
        }
        this.renderHP();
        if (cb) cb(count);
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
}

export default Pokemon;
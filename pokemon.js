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
        }
        this.renderHP();
        cb && cb(count);
    }

    renderHP = () => {
        this.renderHPlife();
        this.renderProgressbarHP();
    }
    
    renderHPlife = () => {
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
    }
    
    renderProgressbarHP = () => {
        this.elProgressbar.style.width = this.damageHP * 100 / this.defaultHP + '%';
    }
}

export default Pokemon;
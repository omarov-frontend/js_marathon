class Selectors {
    constructor(name) {
        this.elHp = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
        this.elImg = document.getElementById(`img-${name}`);
        this.elName = document.getElementById(`name-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({ name, hp, type, selectors, attacks, img }) {
        super(selectors);

        this.name = name;
        this.hp = {
            default: hp,
            current: hp,
        };
        this.type = type;
        this.attacks = attacks;
        this.img = img;
    }
    
    renderPlayer = () => {
        this.renderHp();
        this.renderImg();
        this.renderName();
    }

    changeHp = (count, player, cb) => {
        this.hp.current -= count;
        if (this.hp.current <= 0) {
            this.hp.current = 0;
        }
        this.renderHp();
        if (cb) cb(count, player);
    }

    renderHp = () => {
        this.renderHpLife();
        this.renderProgressbarHp();
    }

    renderHpLife = () => {
        this.elHp.innerText = `${this.hp.current} / ${this.hp.default}`;
    }
    
    renderProgressbarHp = () => {
        let percent = `${this.hp.current / this.hp.default * 100}`;
        this.elProgressbar.style.width = `${percent + '%'}`;

        //отрисовка жизни
        this.elProgressbar.classList.remove('low', 'critical');
            if(percent < 60 && percent > 20) {
                this.elProgressbar.classList.add('low');
            } 
            if(percent < 20) {
                this.elProgressbar.classList.add('critical');
            }
    }

    renderImg = () => {
        this.elImg.src = `${this.img}`;
    }
    
    renderName = () => {
        this.elName.innerText = `${this.name}`;
    }
}

export default Pokemon;
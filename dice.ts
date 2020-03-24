document.addEventListener('DOMContentLoaded', function () {

    const diceContainer = <HTMLDivElement>document.getElementById('dice-container'),
        generateBtn = <HTMLButtonElement>document.getElementById('generate-btn'),
        rollBtn = <HTMLButtonElement>document.getElementById('roll-btn'),
        sumBtn = <HTMLButtonElement>document.getElementById('sum-btn');

    let numOfDice: number = 0,
        diceArray: Die[] = [];

    generateBtn.addEventListener('click', function () {
        new Die()
    });

    rollBtn.addEventListener('click', () => {
        diceArray.forEach(die => die.roll());
    });

    sumBtn.addEventListener('click', function () {
        let sum: number = 0
        diceArray.forEach(die => {
            sum = sum + die.value;
        });
        alert(sum)
    });

    class Die {
        div: HTMLDivElement
        value: number

        constructor() {
            this.render();
            this.roll();
            diceArray.push(this);
        };

        render() {
            this.div = document.createElement('div');
            this.div.className = 'die';
            this.div.id = (numOfDice++).toString();
            diceContainer.appendChild(this.div);
            this.div.addEventListener('click', () => {
                this.roll();
            });
            this.div.addEventListener('dblclick', () => this.removeDie());
        }

        // determines the value of the dice
        roll() {
            let randomVal = () => Math.floor(Math.random() * 6) + 1;
            this.value = randomVal();
            this.div.innerText = this.value.toString();
        }

        removeDie() {
            const index: number = diceArray.indexOf(this)
            if (index > -1) {
                diceArray.splice(index, 1);
            }
            diceContainer.removeChild(this.div)
        }
    }
})
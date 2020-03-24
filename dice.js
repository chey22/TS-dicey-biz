document.addEventListener('DOMContentLoaded', function () {
    var diceContainer = document.getElementById('dice-container'), generateBtn = document.getElementById('generate-btn'), rollBtn = document.getElementById('roll-btn'), sumBtn = document.getElementById('sum-btn');
    var numOfDice = 0, diceArray = [];
    generateBtn.addEventListener('click', function () {
        new Die();
    });
    rollBtn.addEventListener('click', function () {
        diceArray.forEach(function (die) { return die.roll(); });
    });
    sumBtn.addEventListener('click', function () {
        var sum = 0;
        diceArray.forEach(function (die) {
            sum = sum + die.value;
        });
        alert(sum);
    });
    var Die = /** @class */ (function () {
        function Die() {
            this.render();
            this.roll();
            diceArray.push(this);
        }
        ;
        Die.prototype.render = function () {
            var _this = this;
            this.div = document.createElement('div');
            this.div.className = 'die';
            this.div.id = (numOfDice++).toString();
            diceContainer.appendChild(this.div);
            this.div.addEventListener('click', function () {
                _this.roll();
            });
            this.div.addEventListener('dblclick', function () { return _this.removeDie(); });
        };
        // determines the value of the dice
        Die.prototype.roll = function () {
            var randomVal = function () { return Math.floor(Math.random() * 6) + 1; };
            this.value = randomVal();
            this.div.innerText = this.value.toString();
        };
        Die.prototype.removeDie = function () {
            var index = diceArray.indexOf(this);
            if (index > -1) {
                diceArray.splice(index, 1);
            }
            diceContainer.removeChild(this.div);
        };
        return Die;
    }());
});

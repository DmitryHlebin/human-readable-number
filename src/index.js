module.exports = function toReadable (number) {
    let a = number % 10; 
    let b = (number - a) % 100;
    let c = number - b - a;
    let numberLength = number.toString().length;
    let result = '';
    let one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six','seven', 'eight', 'nine'];
    let teen = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundreds = ['hundred'];
    
    if (numberLength === 1) {
        result = one[number];
        return result;
        } 

    else if (numberLength === 2) {
        // заканчивается на *0
        if (a === 0) {
            result = tens[b / 10 - 1];
            return result;
        }
        // 11 - 19
        else if (a !== 0 && b === 10) {
            result = `${teen[number - 11]}`;
            return result;
        }
        // заканчивается на 0
        else if (a === 0) {
        result = `${tens[(b / 10) - 1]}`;
        return result;
        }
        // все остальные
        else {
            result = `${tens[b / 10 - 1]} ${one[a]}`;
            return result;
        }
    }
    else if (numberLength === 3) {
        // заканчивается на *00
        if (number % 100 === 0) {
            result = `${one[c / 100]} ${hundreds[0]}`;
            return result;
        }
        // если заканчивается от 01 до 09
        else if (a !== 0 && b === 0) {
        result = `${one[c / 100]} ${hundreds[0]} ${one[a]}`;
        return result;
            }
        // если две последние цифры от 11 до 19
        else if (b === 10 && a !== 0) {
        result = `${one[c / 100]} ${hundreds[0]} ${teen[b + a - 11]}`;
        return result;
            }
        // если число заканчивается на 0
        else if (a === 0 && b !== 0) {
            result = `${one[(c / 100)]} ${hundreds[0]} ${tens[(b / 10) - 1]}`;
        return result;
        }
          // если число не заканчивается на 0
          else   {
            result = `${one[(c / 100)]} ${hundreds[0]} ${tens[b / 10 - 1]} ${one[a]}`;
        return result;
            }
    }
}


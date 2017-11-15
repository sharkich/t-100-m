import {CELLULARS} from './cellulars';
import {NUMBERS_10} from './numbers.10';
import {NUMBERS_100} from './numbers.100';
import {NUMBERS_1000} from './numbers.1000';

export class AppService {

    static match(text: string) {
        const numbers = this.getNumbers(text);

        if (!numbers.length) {
            return;
        }

        let result = '';

        for (let number of numbers) {
            const cellular = this.getCellular(number);
            if (cellular) {
                result += `<div class="t-100-m__info__one">
                    <span class="t-100-m__info__source">${number}</span>: 
                    <span class="t-100-m__info__main">${NUMBERS_100[number]}</span>
                    <span class="t-100-m__info__additional">(${NUMBERS_1000[number]}, <span class="cellular">${cellular}</span>)</span>
                </div>`;
            } else if (number === 0) {
                result += `<div class="t-100-m__info__one">
                    <span class="t-100-m__info__source">${number}</span>: 
                    <span class="t-100-m__info__main">${NUMBERS_100[number]}</span>
                </div>`;
            } else if (number < 10) {
                result += `<div class="t-100-m__info__one">
                    <span class="t-100-m__info__source">${number}</span>: 
                    <span class="t-100-m__info__main">${NUMBERS_100[number]}</span>
                    <span class="t-100-m__info__additional">(${NUMBERS_10[number]}, ${NUMBERS_1000[number]})</span>
                </div>`;
            } else if (number < 100) {
                result += `<div class="t-100-m__info__one">
                    <span class="t-100-m__info__source">${number}</span>: 
                    <span class="t-100-m__info__main">${NUMBERS_100[number]}</span>
                    <span class="t-100-m__info__additional">(${NUMBERS_1000[number]})</span>
                </div>`;
            } else if (number < 1000) {
                result += `<div class="t-100-m__info__one">
                    <span class="t-100-m__info__source">${number}</span>: 
                    <span class="t-100-m__info__main">${NUMBERS_1000[number]}</span>
                </div>`;
            }
        }

        return result;
    }

    static getCellular(number: number) {
        return Object.keys(CELLULARS).find((key) => CELLULARS[key].indexOf(number) !== -1);
    }

    static getNumbers(text: string = '') {
        const numbers: number[] = [];
        let current: string = '';
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (this.isNumeral(char)) {
                current += char;
            } else if (current) {
                numbers.push(parseInt(current));
                current = '';
            }
        }
        if (current) {
            numbers.push(parseInt(current));
        }
        return numbers;
    }

    static isNumeral(litter: string = '') {
        if (litter.length !== 1) {
            return false;
        }
        const number = parseInt(litter);
        if (litter === '0' || number > 0 || number < 10) {
            return true;
        }
        return false;
    }

}
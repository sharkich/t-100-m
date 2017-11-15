import {CELLULARS} from './cellulars';
import {NUMBERS_10} from './numbers.10';
import {NUMBERS_100} from './numbers.100';
import {NUMBERS_1000} from './numbers.1000';

export class AppService {

    static match(text: string) {
        const number = parseInt(text);
        const cellular = this.getCellular(number);
        if (cellular) {
            return `
                <span class="t-100-m__info__source">${number}</span>: 
                <span class="t-100-m__info__main">${NUMBERS_100[number]}</span>
                <span class="t-100-m__info__additional">(${NUMBERS_1000[number]}, <span class="cellular">${cellular}</span>)</span>
            `;
        }
        if (number === 0) {
            if (text === '0') {
                return 'номерок';
            }
            if (text === '00') {
                return 'бочки';
            }
            if (text === '000') {
                return 'МаНоМетр';
            }
        }
        if (number < 10) {
            return `
                <span class="t-100-m__info__source">${number}</span>: 
                <span class="t-100-m__info__main">${NUMBERS_100[number]}</span>
                <span class="t-100-m__info__additional">(${NUMBERS_10[number]}, ${NUMBERS_1000[number]})</span>
            `;
        }
        if (number < 100) {
            return `
                <span class="t-100-m__info__source">${number}</span>: 
                <span class="t-100-m__info__main">${NUMBERS_100[number]}</span>
                <span class="t-100-m__info__additional">(${NUMBERS_1000[number]})</span>
            `;
        }
        if (number < 1000) {
            return `
                <span class="t-100-m__info__source">${number}</span>: 
                <span class="t-100-m__info__main">${NUMBERS_1000[number]}</span>
            `;
        }
    }

    static getCellular(number: number) {
        return Object.keys(CELLULARS).find((key) => CELLULARS[key].indexOf(number) !== -1);
    }

}
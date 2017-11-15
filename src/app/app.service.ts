import {CELLULARS} from './cellulars';
import {NUMBERS_10} from './numbers.10';
import {NUMBERS_100} from './numbers.100';
import {NUMBERS_1000} from './numbers.1000';

export class AppService {

    static match(text: string) {
        const number = parseInt(text);
        const cellular = this.getCellular(number);
        if (cellular) {
            return `${number}: ${NUMBERS_100[number]} (${cellular})`;
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
            return `${number}: ${NUMBERS_100[number]} (${NUMBERS_10[number]})`; // , ${NUMBERS_1000[number]}
        }
        if (number < 100) {
            return `${number}: ${NUMBERS_100[number]}`; //  (${NUMBERS_1000[number]})
        }
        // if (number < 1000) {
        //     return `${number}: ${NUMBERS_1000[number]}`;
        // }
    }

    static getCellular(number: number) {
        return Object.keys(CELLULARS).find((key) => CELLULARS[key].indexOf(number) !== -1);
    }

}
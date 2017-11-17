import {CELLULARS} from './cellulars';
import {NUMBERS_10} from './numbers.10';
import {NUMBERS_100} from './numbers.100';
import {NUMBERS_1000} from './numbers.1000';

interface ITransform {
    string: string;
    number: number;
}

export class AppService {

    static match(text: string) {
        const transforms: ITransform[] = this.getNumbers(text);

        if (!transforms.length) {
            return;
        }

        let result = '';

        for (let transform of transforms) {
            const cellular = this.getCellular(transform.number);
            if (cellular) {
                result += `<div class="t-100-m__info__one">
                    <span class="t-100-m__info__source">${transform.string}</span>: 
                    <span class="t-100-m__info__main">${NUMBERS_100[transform.number]}</span>
                    <span class="t-100-m__info__additional">(${NUMBERS_1000[transform.number]}, <span class="cellular">${cellular}</span>)</span>
                </div>`;
            } else if (transform.number === 0) {
                result += `<div class="t-100-m__info__one">
                    <span class="t-100-m__info__source">${transform.string}</span>: 
                    <span class="t-100-m__info__main">${NUMBERS_100[transform.number]}</span>
                </div>`;
            } else if (transform.number < 10) {
                result += `<div class="t-100-m__info__one">
                    <span class="t-100-m__info__source">${transform.string}</span>: 
                    <span class="t-100-m__info__main">${NUMBERS_100[transform.number]}</span>
                    <span class="t-100-m__info__additional">(${NUMBERS_10[transform.number]}, ${NUMBERS_1000[transform.number]})</span>
                </div>`;
            } else if (transform.number < 100) {
                result += `<div class="t-100-m__info__one">
                    <span class="t-100-m__info__source">${transform.string}</span>: 
                    <span class="t-100-m__info__main">${NUMBERS_100[transform.number]}</span>
                    <span class="t-100-m__info__additional">(${NUMBERS_1000[transform.number]})</span>
                </div>`;
            } else if (transform.number < 1000) {
                result += `<div class="t-100-m__info__one">
                    <span class="t-100-m__info__source">${transform.string}</span>: 
                    <span class="t-100-m__info__main">${NUMBERS_1000[transform.number]}</span>
                </div>`;
            }
        }

        return result;
    }

    static getCellular(number: number) {
        return Object.keys(CELLULARS).find((key) => CELLULARS[key].indexOf(number) !== -1);
    }

    static getNumbers(text: string = ''): ITransform[] {
        let numbers: ITransform[] = [];
        let current: string = '';
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (this.isNumeral(char)) {
                current += char;
            } else if (current) {
                numbers = numbers.concat(this.getNumberS(current));
                current = '';
            }
        }
        if (current) {
            numbers = numbers.concat(this.getNumberS(current));
        }
        return numbers;
    }

    static getNumberS(text: string): ITransform|ITransform[] {
        if (text.length < 4) {
            return <ITransform>{
                string: text,
                number: parseInt(text)
            };
        }

        return text.match(/.{1,2}/g)
            .map((txt) => ({
                string: txt,
                number: parseInt(txt)
            }));
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
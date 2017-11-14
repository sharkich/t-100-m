const CELLULARS = {
    'UA': [38, 380],
    'Golden Telecom': [39],
    'MTS': [50, 66, 95, 99],
    'life:)': [63, 93],
    'Kyivstar': [67, 96, 97, 98],
    'Beeline': [68],
    'Utel': [91],
    'PEOPLEnet': [92],
    'Intertelecom': [94]
};

const NUMBERS_100 = [ // http://mnemonikon.ru/members/spr_f.htm
    'номерок',
    'еЖ',
    'яД',
    'уХо',
    'Чай',
    'оБои',
    'юЛа',
    'оСа',
    'иВа',
    'яйЦо',
    'оГоНь' // 10
];

export class AppService {

    static match(text: string) {
        const cellular = this.getCellular(text);
        if (cellular) {
            return cellular;
        }
        const number = this.getNumbers(text);
        if (number) {
            return number;
        }
    }

    static getCellular(text: string) {
        const number = parseInt(text);
        return Object.keys(CELLULARS).find((key) => CELLULARS[key].indexOf(number) !== -1);
    }

    static getNumbers(text: string) {
        if (text === '0') {
            return 'номерок';
        }
        if (text === '00') {
            return 'бочки';
        }
        if (text === '000') {
            return 'МаНоМетр';
        }
        const number = parseInt(text);
        if (number >= 0 && number <= 100) {
            return NUMBERS_100[number];
        }
    }
}
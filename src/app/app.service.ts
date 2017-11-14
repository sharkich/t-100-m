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
export class AppService {
    
    static match(text: string) {
        const searchNumber = parseInt(text);
        const cellular = Object.keys(CELLULARS).find((key) => {
            return CELLULARS[key].indexOf(searchNumber) !== -1;
        });
        if (cellular) {
            return cellular;
        }
    }
    
}
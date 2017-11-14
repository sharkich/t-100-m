import {AppService} from './app.service';
const chrome = window['chrome'] || document['chrome'];
console.log('chrome', chrome);
export class AppComponent {

    constructor() {
        if (AppService.isFirstLaunch()) {
            // TODO: show first screen
        }

        document.addEventListener('mouseup',(event) => {
            const selectedText = window.getSelection().toString();

            if(selectedText.length) {
                console.log('Selected:', selectedText);
            }
        });

    }

}
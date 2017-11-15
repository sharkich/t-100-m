import {AppService} from './app.service';

export class AppComponent {

    INFO_ELEMENT: HTMLElement;
    selectedText: string;

    private mousemoveBind = this.mousemove.bind(this);

    constructor() {
        this.INFO_ELEMENT = document.createElement('div');
        this.INFO_ELEMENT.classList.add('t-100-m__info');
        document.body.appendChild(this.INFO_ELEMENT);
        document.addEventListener('mouseup',($event) => this.check($event));

    }

    mousemove($event) {
        this.check($event);
        this.INFO_ELEMENT.style.left = `${$event.pageX + 4}px`;
        this.INFO_ELEMENT.style.top = `${$event.pageY + 4}px`;
    }

    check($event) {
        const selectedText = window.getSelection().toString();
        if(selectedText.length) {
            const text = AppService.match(selectedText);
            if (text) {
                this.show(text, $event);
            }
        } else {
            this.hide();
        }
    }

    show(selectedText: string, $event) {
        this.selectedText = selectedText;
        if (this.INFO_ELEMENT.style.display !== 'block') {
            this.INFO_ELEMENT.innerHTML = this.selectedText;
            this.INFO_ELEMENT.style.left = `${$event.x}px`;
            this.INFO_ELEMENT.style.top = `${$event.y}px`;
            this.INFO_ELEMENT.style.display = 'block';
            document.addEventListener('mousemove', this.mousemoveBind);
        }
    }

    hide() {
        this.selectedText = null;
        this.INFO_ELEMENT.style.display = 'none';
        document.removeEventListener('mousemove', this.mousemoveBind);
    }

}
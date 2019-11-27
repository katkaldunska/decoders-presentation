import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @HostListener('document:keydown', ['$event'])
    onKeydown(event: KeyboardEvent) {
        if (event.code === 'ArrowRight') {
            this.setCurrentSlide(1);
        } else if (event.code === 'ArrowLeft') {
            this.setCurrentSlide(-1);
        }
    }

    public slides: string[] = ['title', 'problem'];
    public currentSlide: string = 'title';

    constructor() {

    }

    private setCurrentSlide(increment: number): void {
        this.currentSlide = this.slides[this.slides.findIndex(s => s === this.currentSlide) + increment];
    }
}

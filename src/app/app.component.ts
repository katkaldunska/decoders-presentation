import { Component, HostListener } from '@angular/core';
import { ngSlides } from './ng/slides';
import { googleSlides } from './google/slides';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public slides: string[] = googleSlides;
    public currentPresentation: 'ng' | 'google' = 'google';
    public currentSlide: string;

    @HostListener('document:keydown', ['$event'])
    onKeydown(event: KeyboardEvent) {
        if (['ArrowRight', 'ArrowDown', 'PageDown'].includes(event.code)) {
            this.setCurrentSlide(1);
        } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.code)) {
            this.setCurrentSlide(-1);
        }
    }

    constructor() {
        this.currentSlide = 'title';
    }

    public changePresentation(): void {
        if (this.currentPresentation === 'ng') {
            this.currentPresentation = 'google';
            this.slides = googleSlides;
        } else {
            this.currentPresentation = 'ng';
            this.slides = ngSlides;
        }
        this.currentSlide = this.slides[0];
    }

    private setCurrentSlide(increment: number): void {
        const currentIndex: number = this.slides.findIndex(s => s === this.currentSlide);

        if (currentIndex === -1 && increment === -1) {
            this.currentSlide = this.slides[this.slides.length - 1];
        } else {
            this.currentSlide = this.slides[currentIndex + increment];
        }
    }
}

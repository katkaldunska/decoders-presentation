import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public slides: string[] = [
        'title',
        'problem',
        'case',
        'code',
        'template-default',
        'case_change',
        'template-change',
        'case_object_object',
        'template-object_object'
    ];
    public currentSlide: string;

    @HostListener('document:keydown', ['$event'])
    onKeydown(event: KeyboardEvent) {
        if (event.code === 'ArrowRight' || event.code === 'ArrowDown') {
            this.setCurrentSlide(1);
        } else if (event.code === 'ArrowLeft' || event.code === 'ArrowUp') {
            this.setCurrentSlide(-1);
        }
    }

    constructor() {
        this.currentSlide = 'title';
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

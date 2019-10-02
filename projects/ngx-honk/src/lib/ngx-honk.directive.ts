import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[data-honk=true]'
})
export class NgxHonkDirective {
  private audio: HTMLAudioElement;
  ngOnInit() {
    this.audio = new Audio( 'https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1569957993/honk-sound.mp3');
  }
  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.audio.play();
    return false;
  }
}

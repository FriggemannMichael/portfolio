import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  input,
} from '@angular/core';

type AnimationType = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale-in';

@Directive({
  selector: '[appScrollAnimate]',
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private observer: IntersectionObserver | null = null;

  animation = input<AnimationType>('fade-up');
  delay = input<number>(0);
  threshold = input<number>(0.1);

  ngOnInit(): void {
    this.setupAnimation();
    this.createObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setupAnimation(): void {
    const element = this.el.nativeElement as HTMLElement;
    element.classList.add('scroll-animate', `scroll-animate--${this.animation()}`);
    element.style.transitionDelay = `${this.delay()}ms`;
  }

  private createObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      { threshold: this.threshold(), rootMargin: '0px 0px -50px 0px' }
    );
    this.observer.observe(this.el.nativeElement);
  }

  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-animate--visible');
        this.observer?.unobserve(entry.target);
      }
    });
  }
}

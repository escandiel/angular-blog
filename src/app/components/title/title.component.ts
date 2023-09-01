import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Renderer2,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  @ViewChild('title', { static: true }) 'title': ElementRef;
  public titleContainer: string = 'title-container';
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // obtem a posição do cursor do mouse
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // define a sensibilidade do movimento
    const sensitivity = 10;

    // cacula o deslocamento com base na posição do cursor
    const offsetX = (mouseX - window.innerWidth / 2) / sensitivity;
    const offsetY = (mouseY - window.innerHeight / 2) / sensitivity;

    // aplica o deslocamento à div de título
    this.renderer.setStyle(
      this.title.nativeElement,
      'transform',
      `translate(${offsetX}px, ${offsetY}px)`
    );
  }
}

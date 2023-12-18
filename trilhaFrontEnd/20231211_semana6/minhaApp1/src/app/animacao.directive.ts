import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimacao]'
})
export class AnimacaoDirective {

 
  constructor(
    private renderizador:Renderer2 , 
    private elemento: ElementRef
  ) 
  {}
  
  @HostListener('click') onclick() {
    
    this.renderizador.addClass(this.elemento.nativeElement, 'minhaclasse');
  }

}

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTresVezes]'
})
export class TresVezesDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef

  ) { }

  @Input() set appTresVezes( nro: number){
    
    for (var i = 0; i < nro; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}

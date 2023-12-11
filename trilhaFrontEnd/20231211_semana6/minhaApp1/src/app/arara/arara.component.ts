import { Component } from '@angular/core';

@Component({
  selector: 'app-arara',
  templateUrl: './arara.component.html',
  styleUrl: './arara.component.css'
})
export class AraraComponent {
  nome: string = 'Arara';
  descricao: string = 'A arara canindé';
  url2: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Blue-and-Yellow-Macaw.jpg/280px-Blue-and-Yellow-Macaw.jpg";
  nome2: string="Tamanduá";
  txtEventoParametro: string = '';

  public getToString():string{
    return this.nome + ' - ' +  this.descricao;
  }
  public onClick(): void{
    alert('Clicou em mim!');
  }
  public entrouBotao(): void{
    alert('Entrou botão!');
  }
  public saiuBotao(): void{
    alert('Saiu botão!');
  }
  public digitandoTexto(event: Event){
    this.txtEventoParametro = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
}

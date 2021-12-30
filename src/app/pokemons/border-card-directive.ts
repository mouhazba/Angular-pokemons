import { Directive, ElementRef, HostListener , Input} from "@angular/core";

@Directive({
    //on utyilse les crochets au lieu des {selector: 'PokemonBorderCard}
    // pour l'appliquer à un element donné
    //sinon s'applique à toutes les balises <pkmnBorderCard
    selector:'[pkmnBorderCard]'
})
export class BorderCardDirective{
    constructor(private el:ElementRef){
        this.setBorder('#f5f5f5');
        this.setHeigh(170);
    }

    private setBorder(color:string){
        let border = 'solid 3px' + color;
        this.el.nativeElement.style.border = border;
    }
    //proprieté BorderColor
   // @Input('pkmnBorderCard')borderColor!:string ;


    private setHeigh(heigh:number){
        this.el.nativeElement.style.heigh = 'heigh '+ 'px';
    }

    @HostListener('mouseenter')onMouseEnter(){
        //on applique le parametre bordeColor ou celui par defaut
        
        //this.setBorder(this.borderColor ||'#009688');
        this.setBorder('#009688');
    }
    @HostListener('mouseleave')onLeave(){
        this.setBorder('#f5f5f5')
    }
}
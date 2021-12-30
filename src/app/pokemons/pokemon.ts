export class Pokemon{
    id:number;
 /*    id: number | undefined ;
    hp!: number;
    cp!: number;
    name!: string;
    picture!: string;
    types!: Array<string>;
    created!: Date;
 */

constructor(
    public hp:number = 100,
    public cp:number = 10,
    public name:string='name',
    public picture:string='http://...',
    public types:string[]=['Normal'],
    public created:Date= new Date()
)
    {
    this.hp = hp;
    this.cp = cp;
    this.name = name;
    this.picture = picture;
    this.types = types;
    this.created = created

    } 

}
export class Pokemon{
    id: number | undefined ;
    hp!: number;
    cp!: number;
    name!: string;
    picture!: string;
    types!: Array<string>;
    created!: Date;
}
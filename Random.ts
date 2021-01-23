/**
Random
@author vincent (vincent@vincentvictoria.com)
@see {@link https://www.vincentvictoria}
@see {@link https://www.github.com/vincentvictoria/random}
*/
export class Random {
    generator:()=>number

    static i = new Random();
    static UPPER_ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXTYZ";
    static LOWER_ALPHABETS = "abcdefghijklmnopqrstuvwxtyz";
    static ALPHABETS = Random.LOWER_ALPHABETS + Random.UPPER_ALPHABETS;
    static NUMBERS = "012345678";
    static ALPHA_NUMERICS = Random.UPPER_ALPHABETS + Random.LOWER_ALPHABETS + Random.NUMBERS;
    static UPPER_ALPHA_NUMERICS = Random.UPPER_ALPHABETS + Random.NUMBERS;
    static LOWER_ALPHA_NUMERICS = Random.LOWER_ALPHABETS + Random.NUMBERS;
    static UNAMBIGOUS_LOWER_ALPHA_NUMERICS = "23456789abcdefghijkmnpqrstuvwxyz";
    static UNAMBIGOUS_UPPER_ALPHA_NUMERICS = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
    static UNAMBIGOUS_ALPHA_NUMERICS = "23456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";

    constructor( generator?:()=>number ) {
        this.generator = generator || Math.random;
    }

    int( min: number, max: number ):number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(this.generator() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    real( min:number, max:number ):number {
        return this.generator() * (max - min) + min;
    }

    string( len:number, src:string = Random.LOWER_ALPHA_NUMERICS ):string {
        var s = "";
        for ( let lp1 = 0; lp1 < len; lp1++ )
            s += src.charAt( this.int( 0, src.length ) );
        return s;
    }

    /**
     * Random Variable Names
     */
    var( len:number ):string {
        var s = "";
        if ( len > 0 )
            s += Random.ALPHABETS[ this.int( 0, Random.ALPHABETS.length ) ];
        for ( let lp1 = 1; lp1 < len; lp1++ )
            s += Random.ALPHA_NUMERICS[ this.int( 0, Random.ALPHA_NUMERICS.length ) ];
        return s;
    }

    pick<T>( ...args:T[]|T[][] ):T|T[] {
        if ( args.length == 0 )
            throw 'cannot pick from nothing';

        if(args.length == 1 && args[0] instanceof Array)
            return args[0][ this.int( 0, args[0].length ) ];
        else
            return args[ this.int( 0, args.length ) ];
    }

    weighted( ...args:number[] ):number {
        let sum = args.reduce( ( pv, cur ) => pv + cur, 0 );
        let p = this.generator() * sum;
        for ( let lp1 = 0; lp1 < args.length; lp1++ ) {
            let i = args[lp1];
            if ( p < i )
                return lp1;
            p -= i;
        }
        throw new Error( 'probably a wrong weight' );
    }
}

export default Random;
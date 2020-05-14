/**
Random
@author vincent <vincent@vincentvictoria.com>
@see {@link https://www.vincentvictoria}
@see {@link https://www.github.com/vincentvictoria/random}
*/
export class Random {
    /**
     * @param {()=>number} generator 
     */
    constructor( generator = undefined ) {
        this.generator = generator || Math.random;
    }

    int( min, max ) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(this.generator() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    real( min, max ) {
        return this.generator() * (max - min) + min;
    }

    string( /** @type {number} */ len, /** @type {string} */ src = Random.LOWER_ALPHA_NUMERICS ) {
        var s = "";
        for ( var lp1 = 0; lp1 < len; lp1++ )
            s += src.charAt( this.int( 0, src.length ) );
        return s;
    }

    /**
     * Random Variable Names
     */
    var( /** @type {number} */ len ) {
        var s = "";
        if ( len > 0 )
            s += Random.ALPHABETS[ this.int( 0, Random.ALPHABETS.length ) ];
        for ( var lp1 = 1; lp1 < len; lp1++ )
            s += Random.ALPHA_NUMERICS[ this.int( 0, Random.ALPHA_NUMERICS.length ) ];
        return s;
    }

    pick( ...args ) {
        if ( args.length == 0 )
            return undefined;
        else if ( args.length == 1 )
        {
            var arr = args[0];
            if ( arr instanceof Array )
                return arr[ this.int( 0, arr.length ) ];
            else
                return arr;
        }
        else
            return args[ this.int( 0, args.length ) ];
    }


    /**
     * @param  {...number} args 
     */
    weighted( ...args ) {
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

Random.i = new Random();

Random.UPPER_ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXTYZ";
Random.LOWER_ALPHABETS = "abcdefghijklmnopqrstuvwxtyz";
Random.ALPHABETS = Random.LOWER_ALPHABETS + Random.UPPER_ALPHABETS;
Random.NUMBERS = "012345678";
Random.ALPHA_NUMERICS = Random.UPPER_ALPHABETS + Random.LOWER_ALPHABETS + Random.NUMBERS;
Random.UPPER_ALPHA_NUMERICS = Random.UPPER_ALPHABETS + Random.NUMBERS;
Random.LOWER_ALPHA_NUMERICS = Random.LOWER_ALPHABETS + Random.NUMBERS;
Random.UNAMBIGOUS_LOWER_ALPHA_NUMERICS = "23456789abcdefghijkmnpqrstuvwxyz";
Random.UNAMBIGOUS_UPPER_ALPHA_NUMERICS = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
Random.UNAMBIGOUS_ALPHA_NUMERICS = "23456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
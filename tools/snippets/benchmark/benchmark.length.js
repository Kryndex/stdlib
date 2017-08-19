'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var pow = require( '@stdlib/math/base/special/pow' );
var pkg = require( './../package.json' ).name;
var TODO = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var x;
	var i;

	x = new Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = null; // TODO: set values
	}
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			// TODO: synchronous task
			if ( TODO/* TODO: condition */ ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( TODO/* TODO: condition */ ) {
			b.fail( 'something went wrong' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	} // end FUNCTION benchmark()
} // end FUNCTION createBenchmark()


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( pkg+':len='+len, f );
	}
} // end FUNCTION main()

main();
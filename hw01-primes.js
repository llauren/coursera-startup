#!/usr/bin/env node

/* Find the first 100 primes using node.js
	Coursera "Startup Engineering" homework 01 by Robin Laurén
	Help from http://pythonism.wordpress.com/2008/05/04/looking-at-prime-numbers-in-python/
 */

var count=100;
var number=2;
var primes = new Array();

var fs = require('fs');
var fname = "primes.txt";

function isPrime( number ) {
	if( number%2 == 0 && number != 2) { return false; }
	for (var d = 3; d < Math.sqrt(number) + 1; d+=2) {
		if( number%d == 0 ) { return false; }
	};
	return true;
}

while(primes.length < count) {
	if (isPrime(number)) {
		primes[primes.length] = number;
		// console.log( primes.length, number);
	};
	number++;
}

// console.log( primes.join() );
fs.writeFileSync( fname, primes.join() );  

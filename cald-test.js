
const assert = require( "assert" );
const cald = require( "./cald.js" );

assert.deepEqual( cald( function hello( value ){
		return [ "hey", value, this ];
	}, { "hello": "world" }, "yeah" ),
	[ "hey", "yeah", { "hello": "world" } ], "should be deeply equal" );

assert.deepEqual( cald( function hello( value, data ){
		return [ "hey", value, data, this ];
	}, { "hello": "world" }, "yeah", 123 ),
	[ "hey", "yeah", 123, { "hello": "world" } ], "should be deeply equal" );

assert.deepEqual( cald( function test( parameter ){
		return Array.from( arguments );
	}, "test", [ "hello", [ "world" ], "yeah" ] ),
	[ [ "hello", [ "world" ], "yeah" ] ], "should be deeply equal" );

assert.deepEqual( cald( function test( parameter ){
	return Array.from( arguments );
	}, "test", [ "hello", "world", "yeah" ], "hey" ),
	[ [ "hello", "world", "yeah" ], "hey" ], "should be deeply equal" );

console.log( "ok" );

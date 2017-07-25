
const assert = require( "assert" );
const cald = require( "./cald.js" );

assert.deepEqual( cald( function hello( value ){
		return [ "hey", value, this ];
	}, { "hello": "world" }, "yeah" ),
	[ "hey", "yeah", { "hello": "world" } ], "should return [ 'hey', 'yeah', { 'hello': 'world' } ]" );

assert.deepEqual( cald( function hello( value, data ){
		return [ "hey", value, data, this ];
	}, { "hello": "world" }, "yeah", 123 ),
	[ "hey", "yeah", 123, { "hello": "world" } ], "should return [ 'hey', 'yeah', 123, { 'hello': 'world' } ]" );

assert.deepEqual( cald( function test( parameter ){
		return Array.from( arguments );
	}, "test", [ "hello", [ "world" ], "yeah" ] ),
	[ [ "hello", [ "world" ], "yeah" ] ], "should return [ [ 'hello', [ 'world' ], 'yeah' ] ]" );

assert.deepEqual( cald( function test( parameter ){
	return Array.from( arguments );
	}, "test", [ "hello", "world", "yeah" ], "hey" ),
	[ [ "hello", "world", "yeah" ], "hey" ], "should return [ [ 'hello', 'world', 'yeah' ], 'hey' ]" );

console.log( "ok" );

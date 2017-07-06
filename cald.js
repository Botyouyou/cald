/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "cald",
			"path": "cald/cald.js",
			"file": "cald.js",
			"module": "cald",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/cald.git",
			"test": "cald-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Simple bind and call.

		If you pass a falsy method, it will default to a function that
			will throw an no operation error.

		Note that this cannot be used with bind, you have to pass the context as a parameter.
	@end-module-documentation

	@include:
		{
			"shft": "shft",
			"wichevr": "wichevr",
			"zelf": "zelf"
		}
	@end-include
*/

const shft = require( "shft" );
const wichevr = require( "wichevr" );
const zelf = require( "zelf" );

const cald = function cald( method, context, parameter ){
	/*;
		@meta-configuration:
			{
				"method:required": "function",
				"context:required": "*",
				"parameter": "..."
			}
		@end-meta-configuration
	*/

	method = wichevr( method, function procedure( ){ throw new Error( "no operation" ); } );

	if( typeof method != "function" ){
		throw new Error( "invalid method" );
	}

	if( arguments.length == 2 ){
		return method.apply( context );
	}

	return method.apply( context, shft( arguments, 2 ) );
};

module.exports = cald;

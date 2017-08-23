"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "cald",
              			"path": "cald/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/cald.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"cald": "cald"
              		}
              	@end-include
              */

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge






//: @bridge:

describe("cald", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`cald with function named hello as method, { 'hello': 'world' } as context and 'yeah' as parameter`", function () {
		it("should be equal to [ 'hey', 'yeah', { 'hello': 'world' } ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let test = cald( function hello( value ){
   						return [ "hey", value, this ];
   					}, { "hello": "world" }, "yeah" );
   
   					return JSON.stringify( test );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), ["hey", "yeah", { "hello": "world" }]);

		});
	});

	describe("`cald with function named hello as method, { 'hello': 'world' } as context and string type as well as number type parameters`", function () {
		it("should be equal to [ 'hey', 'yeah', 123, { 'hello': 'world' } ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let test = cald( function hello( value, data ){
   						return [ "hey", value, data, this ];
   					}, { "hello": "world" }, "yeah", 123 );
   
   					return JSON.stringify( test );
   
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), ["hey", "yeah", 123, { "hello": "world" }]);

		});

	});

	describe("`cald with function named test as method, string type context and array type parameter`", function () {
		it("should be equal to [ [ 'hello', [ 'world' ], 'yeah' ] ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let test = cald( function test( parameter ){
   						return Array.from( arguments );
   					}, "test", [ "hello", [ "world" ], "yeah" ] );
   
   					return JSON.stringify( test );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), [["hello", ["world"], "yeah"]]);

		});
	});

	describe("`cald with function named test as method, string type context, array type and string type parameters`", function () {
		it("should be equal to [ [ 'hello', 'world', 'yeah' ], 'hey' ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let test = cald( function test( parameter ){
   						return Array.from( arguments );
   					}, "test", [ "hello", "world", "yeah" ], "hey" );
   
   					return JSON.stringify( test );
   
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), [["hello", "world", "yeah"], "hey"]);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJkZWVwRXF1YWwiLCJKU09OIiwicGFyc2UiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQUUsU0FBVSxNQUFWLEVBQWtCLFlBQU87O0FBRXhCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLHFHQUFWLEVBQWlILFlBQU87QUFDdkhJLEtBQUksNERBQUosRUFBa0UsWUFBTztBQUN4RTtBQUNIOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0dQLFVBQU9RLFNBQVAsQ0FBa0JDLEtBQUtDLEtBQUwsQ0FBWUMsTUFBWixDQUFsQixFQUF3QyxDQUFFLEtBQUYsRUFBUyxNQUFULEVBQWlCLEVBQUUsU0FBUyxPQUFYLEVBQWpCLENBQXhDOztBQUVBLEdBbkJEO0FBb0JBLEVBckJEOztBQXVCQVIsVUFBVSwrSEFBVixFQUEySSxZQUFPO0FBQ2pKSSxLQUFJLGlFQUFKLEVBQXVFLFlBQU87QUFDN0U7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDR1AsVUFBT1EsU0FBUCxDQUFrQkMsS0FBS0MsS0FBTCxDQUFZQyxNQUFaLENBQWxCLEVBQXdDLENBQUUsS0FBRixFQUFTLE1BQVQsRUFBaUIsR0FBakIsRUFBc0IsRUFBRSxTQUFTLE9BQVgsRUFBdEIsQ0FBeEM7O0FBRUEsR0FwQkQ7O0FBc0JBLEVBdkJEOztBQXlCQVIsVUFBVSx5RkFBVixFQUFxRyxZQUFPO0FBQzNHSSxLQUFJLHlEQUFKLEVBQStELFlBQU87QUFDckU7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNHUCxVQUFPUSxTQUFQLENBQWtCQyxLQUFLQyxLQUFMLENBQVlDLE1BQVosQ0FBbEIsRUFBd0MsQ0FBRSxDQUFFLE9BQUYsRUFBVyxDQUFFLE9BQUYsQ0FBWCxFQUF3QixNQUF4QixDQUFGLENBQXhDOztBQUVBLEdBbkJEO0FBb0JBLEVBckJEOztBQXVCQVIsVUFBVSx1R0FBVixFQUFtSCxZQUFPO0FBQ3pISSxLQUFJLDREQUFKLEVBQWtFLFlBQU87QUFDeEU7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDR1AsVUFBT1EsU0FBUCxDQUFrQkMsS0FBS0MsS0FBTCxDQUFZQyxNQUFaLENBQWxCLEVBQXdDLENBQUUsQ0FBRSxPQUFGLEVBQVcsT0FBWCxFQUFvQixNQUFwQixDQUFGLEVBQWdDLEtBQWhDLENBQXhDOztBQUVBLEdBcEJEO0FBcUJBLEVBdEJEOztBQXdCQSxDQW5HRDs7QUFxR0EiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImNhbGRcIixcblx0XHRcdFwicGF0aFwiOiBcImNhbGQvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2NhbGQuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImNhbGRcIjogXCJjYWxkXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuXG5kZXNjcmliZSggXCJjYWxkXCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImBjYWxkIHdpdGggZnVuY3Rpb24gbmFtZWQgaGVsbG8gYXMgbWV0aG9kLCB7ICdoZWxsbyc6ICd3b3JsZCcgfSBhcyBjb250ZXh0IGFuZCAneWVhaCcgYXMgcGFyYW1ldGVyYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbICdoZXknLCAneWVhaCcsIHsgJ2hlbGxvJzogJ3dvcmxkJyB9IF1cIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gY2FsZCggZnVuY3Rpb24gaGVsbG8oIHZhbHVlICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gWyBcImhleVwiLCB2YWx1ZSwgdGhpcyBdO1xuXHRcdFx0XHRcdH0sIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSwgXCJ5ZWFoXCIgKTtcblxuXHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggdGVzdCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQgKSwgWyBcImhleVwiLCBcInllYWhcIiwgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9IF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBjYWxkIHdpdGggZnVuY3Rpb24gbmFtZWQgaGVsbG8gYXMgbWV0aG9kLCB7ICdoZWxsbyc6ICd3b3JsZCcgfSBhcyBjb250ZXh0IGFuZCBzdHJpbmcgdHlwZSBhcyB3ZWxsIGFzIG51bWJlciB0eXBlIHBhcmFtZXRlcnNgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ2hleScsICd5ZWFoJywgMTIzLCB7ICdoZWxsbyc6ICd3b3JsZCcgfSBdXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IGNhbGQoIGZ1bmN0aW9uIGhlbGxvKCB2YWx1ZSwgZGF0YSApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIFsgXCJoZXlcIiwgdmFsdWUsIGRhdGEsIHRoaXMgXTtcblx0XHRcdFx0XHR9LCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0sIFwieWVhaFwiLCAxMjMgKTtcblxuXHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggdGVzdCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdCApLCBbIFwiaGV5XCIsIFwieWVhaFwiLCAxMjMsIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSBdICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBjYWxkIHdpdGggZnVuY3Rpb24gbmFtZWQgdGVzdCBhcyBtZXRob2QsIHN0cmluZyB0eXBlIGNvbnRleHQgYW5kIGFycmF5IHR5cGUgcGFyYW1ldGVyYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIFsgJ2hlbGxvJywgWyAnd29ybGQnIF0sICd5ZWFoJyBdIF1cIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gY2FsZCggZnVuY3Rpb24gdGVzdCggcGFyYW1ldGVyICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQXJyYXkuZnJvbSggYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0fSwgXCJ0ZXN0XCIsIFsgXCJoZWxsb1wiLCBbIFwid29ybGRcIiBdLCBcInllYWhcIiBdICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIHRlc3QgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggSlNPTi5wYXJzZSggcmVzdWx0ICksIFsgWyBcImhlbGxvXCIsIFsgXCJ3b3JsZFwiIF0sIFwieWVhaFwiIF0gXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGNhbGQgd2l0aCBmdW5jdGlvbiBuYW1lZCB0ZXN0IGFzIG1ldGhvZCwgc3RyaW5nIHR5cGUgY29udGV4dCwgYXJyYXkgdHlwZSBhbmQgc3RyaW5nIHR5cGUgcGFyYW1ldGVyc2BcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBbICdoZWxsbycsICd3b3JsZCcsICd5ZWFoJyBdLCAnaGV5JyBdXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IGNhbGQoIGZ1bmN0aW9uIHRlc3QoIHBhcmFtZXRlciApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIEFycmF5LmZyb20oIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRcdH0sIFwidGVzdFwiLCBbIFwiaGVsbG9cIiwgXCJ3b3JsZFwiLCBcInllYWhcIiBdLCBcImhleVwiICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIHRlc3QgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQgKSwgWyBbIFwiaGVsbG9cIiwgXCJ3b3JsZFwiLCBcInllYWhcIiBdLCBcImhleVwiIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map

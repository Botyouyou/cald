"use strict"; /*;
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

var shft = require("shft");
var wichevr = require("wichevr");
var zelf = require("zelf");

var cald = function cald(method, context, parameter) {
	/*;
                                                      	@meta-configuration:
                                                      		{
                                                      			"method:required": "function",
                                                      			"context:required": "*",
                                                      			"parameter": "..."
                                                      		}
                                                      	@end-meta-configuration
                                                      */

	method = wichevr(method, function procedure() {throw new Error("no operation");});

	if (typeof method != "function") {
		throw new Error("invalid method");
	}

	if (arguments.length == 2) {
		return method.apply(context);
	}

	return method.apply(context, shft(arguments, 2));
};

module.exports = cald;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJzaGZ0IiwicmVxdWlyZSIsIndpY2hldnIiLCJ6ZWxmIiwiY2FsZCIsIm1ldGhvZCIsImNvbnRleHQiLCJwYXJhbWV0ZXIiLCJwcm9jZWR1cmUiLCJFcnJvciIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFwcGx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLFVBQVVELFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1HLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxNQUFmLEVBQXVCQyxPQUF2QixFQUFnQ0MsU0FBaEMsRUFBMkM7QUFDdkQ7Ozs7Ozs7Ozs7QUFVQUYsVUFBU0gsUUFBU0csTUFBVCxFQUFpQixTQUFTRyxTQUFULEdBQXFCLENBQUUsTUFBTSxJQUFJQyxLQUFKLENBQVcsY0FBWCxDQUFOLENBQW9DLENBQTVFLENBQVQ7O0FBRUEsS0FBSSxPQUFPSixNQUFQLElBQWlCLFVBQXJCLEVBQWlDO0FBQ2hDLFFBQU0sSUFBSUksS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJQyxVQUFVQyxNQUFWLElBQW9CLENBQXhCLEVBQTJCO0FBQzFCLFNBQU9OLE9BQU9PLEtBQVAsQ0FBY04sT0FBZCxDQUFQO0FBQ0E7O0FBRUQsUUFBT0QsT0FBT08sS0FBUCxDQUFjTixPQUFkLEVBQXVCTixLQUFNVSxTQUFOLEVBQWlCLENBQWpCLENBQXZCLENBQVA7QUFDQSxDQXRCRDs7QUF3QkFHLE9BQU9DLE9BQVAsR0FBaUJWLElBQWpCIiwiZmlsZSI6ImNhbGQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJjYWxkXCIsXG5cdFx0XHRcInBhdGhcIjogXCJjYWxkL2NhbGQuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImNhbGQuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiY2FsZFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvY2FsZC5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImNhbGQtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRTaW1wbGUgYmluZCBhbmQgY2FsbC5cblxuXHRcdElmIHlvdSBwYXNzIGEgZmFsc3kgbWV0aG9kLCBpdCB3aWxsIGRlZmF1bHQgdG8gYSBmdW5jdGlvbiB0aGF0XG5cdFx0XHR3aWxsIHRocm93IGFuIG5vIG9wZXJhdGlvbiBlcnJvci5cblxuXHRcdE5vdGUgdGhhdCB0aGlzIGNhbm5vdCBiZSB1c2VkIHdpdGggYmluZCwgeW91IGhhdmUgdG8gcGFzcyB0aGUgY29udGV4dCBhcyBhIHBhcmFtZXRlci5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwic2hmdFwiOiBcInNoZnRcIixcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCJzaGZ0XCIgKTtcbmNvbnN0IHdpY2hldnIgPSByZXF1aXJlKCBcIndpY2hldnJcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmNvbnN0IGNhbGQgPSBmdW5jdGlvbiBjYWxkKCBtZXRob2QsIGNvbnRleHQsIHBhcmFtZXRlciApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcIm1ldGhvZDpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFwiY29udGV4dDpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0bWV0aG9kID0gd2ljaGV2ciggbWV0aG9kLCBmdW5jdGlvbiBwcm9jZWR1cmUoICl7IHRocm93IG5ldyBFcnJvciggXCJubyBvcGVyYXRpb25cIiApOyB9ICk7XG5cblx0aWYoIHR5cGVvZiBtZXRob2QgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbWV0aG9kXCIgKTtcblx0fVxuXG5cdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcblx0XHRyZXR1cm4gbWV0aG9kLmFwcGx5KCBjb250ZXh0ICk7XG5cdH1cblxuXHRyZXR1cm4gbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBzaGZ0KCBhcmd1bWVudHMsIDIgKSApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjYWxkO1xuIl19
//# sourceMappingURL=cald.support.js.map

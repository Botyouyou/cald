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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJzaGZ0IiwicmVxdWlyZSIsIndpY2hldnIiLCJ6ZWxmIiwiY2FsZCIsIm1ldGhvZCIsImNvbnRleHQiLCJwYXJhbWV0ZXIiLCJwcm9jZWR1cmUiLCJFcnJvciIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFwcGx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLFVBQVVELFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1HLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxNQUFmLEVBQXVCQyxPQUF2QixFQUFnQ0MsU0FBaEMsRUFBMkM7QUFDdkQ7Ozs7Ozs7Ozs7QUFVQUYsVUFBU0gsUUFBU0csTUFBVCxFQUFpQixTQUFTRyxTQUFULEdBQXFCLENBQUUsTUFBTSxJQUFJQyxLQUFKLENBQVcsY0FBWCxDQUFOLENBQW9DLENBQTVFLENBQVQ7O0FBRUEsS0FBSSxPQUFPSixNQUFQLElBQWlCLFVBQXJCLEVBQWlDO0FBQ2hDLFFBQU0sSUFBSUksS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJQyxVQUFVQyxNQUFWLElBQW9CLENBQXhCLEVBQTJCO0FBQzFCLFNBQU9OLE9BQU9PLEtBQVAsQ0FBY04sT0FBZCxDQUFQO0FBQ0E7O0FBRUQsUUFBT0QsT0FBT08sS0FBUCxDQUFjTixPQUFkLEVBQXVCTixLQUFNVSxTQUFOLEVBQWlCLENBQWpCLENBQXZCLENBQVA7QUFDQSxDQXRCRDs7QUF3QkFHLE9BQU9DLE9BQVAsR0FBaUJWLElBQWpCIiwiZmlsZSI6ImNhbGQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiY2FsZFwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJjYWxkL2NhbGQuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwiY2FsZC5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImNhbGRcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvY2FsZC5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwiY2FsZC10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdFNpbXBsZSBiaW5kIGFuZCBjYWxsLlxyXG5cclxuXHRcdElmIHlvdSBwYXNzIGEgZmFsc3kgbWV0aG9kLCBpdCB3aWxsIGRlZmF1bHQgdG8gYSBmdW5jdGlvbiB0aGF0XHJcblx0XHRcdHdpbGwgdGhyb3cgYW4gbm8gb3BlcmF0aW9uIGVycm9yLlxyXG5cclxuXHRcdE5vdGUgdGhhdCB0aGlzIGNhbm5vdCBiZSB1c2VkIHdpdGggYmluZCwgeW91IGhhdmUgdG8gcGFzcyB0aGUgY29udGV4dCBhcyBhIHBhcmFtZXRlci5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcInNoZnRcIjogXCJzaGZ0XCIsXHJcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIixcclxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCJzaGZ0XCIgKTtcclxuY29uc3Qgd2ljaGV2ciA9IHJlcXVpcmUoIFwid2ljaGV2clwiICk7XHJcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xyXG5cclxuY29uc3QgY2FsZCA9IGZ1bmN0aW9uIGNhbGQoIG1ldGhvZCwgY29udGV4dCwgcGFyYW1ldGVyICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJtZXRob2Q6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxyXG5cdFx0XHRcdFwiY29udGV4dDpyZXF1aXJlZFwiOiBcIipcIixcclxuXHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0bWV0aG9kID0gd2ljaGV2ciggbWV0aG9kLCBmdW5jdGlvbiBwcm9jZWR1cmUoICl7IHRocm93IG5ldyBFcnJvciggXCJubyBvcGVyYXRpb25cIiApOyB9ICk7XHJcblxyXG5cdGlmKCB0eXBlb2YgbWV0aG9kICE9IFwiZnVuY3Rpb25cIiApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbWV0aG9kXCIgKTtcclxuXHR9XHJcblxyXG5cdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcclxuXHRcdHJldHVybiBtZXRob2QuYXBwbHkoIGNvbnRleHQgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBtZXRob2QuYXBwbHkoIGNvbnRleHQsIHNoZnQoIGFyZ3VtZW50cywgMiApICk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNhbGQ7XHJcbiJdfQ==
//# sourceMappingURL=cald.support.js.map

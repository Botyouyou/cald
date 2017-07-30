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
              */var _from = require("babel-runtime/core-js/array/from");var _from2 = _interopRequireDefault(_from);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var cald = require("./cald.support.js");
//: @end-client






//: @client:

describe("cald", function () {

	describe("`cald with method,context and parameter`", function () {

		it("should be equal to [ 'hey', 'yeah', { 'hello': 'world' } ]", function () {

			assert.deepEqual(cald(function hello(value) {
				return ["hey", value, this];
			}, { "hello": "world" }, "yeah"),
			["hey", "yeah", { "hello": "world" }]);

		});

		it("should return [ 'hey', 'yeah', 123, { 'hello': 'world' } ]", function () {

			assert.deepEqual(cald(function hello(value, data) {
				return ["hey", value, data, this];
			}, { "hello": "world" }, "yeah", 123),
			["hey", "yeah", 123, { "hello": "world" }]);

		});

		it("should return [ [ 'hello', [ 'world' ], 'yeah' ] ]", function () {

			assert.deepEqual(cald(function test(parameter) {
				return (0, _from2.default)(arguments);
			}, "test", ["hello", ["world"], "yeah"]),
			[["hello", ["world"], "yeah"]]);

		});

		it("should return [ [ 'hello', 'world', 'yeah' ], 'hey' ]", function () {

			assert.deepEqual(cald(function test(parameter) {
				return (0, _from2.default)(arguments);
			}, "test", ["hello", "world", "yeah"], "hey"),
			[["hello", "world", "yeah"], "hey"]);

		});

	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiY2FsZCIsImRlc2NyaWJlIiwiaXQiLCJkZWVwRXF1YWwiLCJoZWxsbyIsInZhbHVlIiwiZGF0YSIsInRlc3QiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLG1CQUFULENBQWI7QUFDQTs7Ozs7OztBQU9BOztBQUVBRSxTQUFVLE1BQVYsRUFBa0IsWUFBTzs7QUFFeEJBLFVBQVUsMENBQVYsRUFBc0QsWUFBTzs7QUFFNURDLEtBQUksNERBQUosRUFBa0UsWUFBTzs7QUFFeEVKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sU0FBU0ksS0FBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDOUMsV0FBTyxDQUFFLEtBQUYsRUFBU0EsS0FBVCxFQUFnQixJQUFoQixDQUFQO0FBQ0EsSUFGaUIsRUFFZixFQUFFLFNBQVMsT0FBWCxFQUZlLEVBRU8sTUFGUCxDQUFsQjtBQUdBLElBQUUsS0FBRixFQUFTLE1BQVQsRUFBaUIsRUFBRSxTQUFTLE9BQVgsRUFBakIsQ0FIQTs7QUFLQSxHQVBEOztBQVNBSCxLQUFJLDREQUFKLEVBQWtFLFlBQU87O0FBRXhFSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNLFNBQVNJLEtBQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCQyxJQUF2QixFQUE2QjtBQUNwRCxXQUFPLENBQUUsS0FBRixFQUFTRCxLQUFULEVBQWdCQyxJQUFoQixFQUFzQixJQUF0QixDQUFQO0FBQ0EsSUFGaUIsRUFFZixFQUFFLFNBQVMsT0FBWCxFQUZlLEVBRU8sTUFGUCxFQUVlLEdBRmYsQ0FBbEI7QUFHQSxJQUFFLEtBQUYsRUFBUyxNQUFULEVBQWlCLEdBQWpCLEVBQXNCLEVBQUUsU0FBUyxPQUFYLEVBQXRCLENBSEE7O0FBS0EsR0FQRDs7QUFTQUosS0FBSSxvREFBSixFQUEwRCxZQUFPOztBQUVoRUosVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxTQUFTTyxJQUFULENBQWVDLFNBQWYsRUFBMEI7QUFDakQsV0FBTyxvQkFBWUMsU0FBWixDQUFQO0FBQ0EsSUFGaUIsRUFFZixNQUZlLEVBRVAsQ0FBRSxPQUFGLEVBQVcsQ0FBRSxPQUFGLENBQVgsRUFBd0IsTUFBeEIsQ0FGTyxDQUFsQjtBQUdBLElBQUUsQ0FBRSxPQUFGLEVBQVcsQ0FBRSxPQUFGLENBQVgsRUFBd0IsTUFBeEIsQ0FBRixDQUhBOztBQUtBLEdBUEQ7O0FBU0FQLEtBQUksdURBQUosRUFBNkQsWUFBTzs7QUFFbkVKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sU0FBU08sSUFBVCxDQUFlQyxTQUFmLEVBQTBCO0FBQ2pELFdBQU8sb0JBQVlDLFNBQVosQ0FBUDtBQUNDLElBRmdCLEVBRWQsTUFGYyxFQUVOLENBQUUsT0FBRixFQUFXLE9BQVgsRUFBb0IsTUFBcEIsQ0FGTSxFQUV3QixLQUZ4QixDQUFsQjtBQUdBLElBQUUsQ0FBRSxPQUFGLEVBQVcsT0FBWCxFQUFvQixNQUFwQixDQUFGLEVBQWdDLEtBQWhDLENBSEE7O0FBS0EsR0FQRDs7QUFTQSxFQXRDRDs7QUF3Q0EsQ0ExQ0Q7O0FBNENBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiY2FsZFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiY2FsZC90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvY2FsZC5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwiY2FsZFwiOiBcImNhbGRcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGNhbGQgPSByZXF1aXJlKCBcIi4vY2FsZC5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcImNhbGRcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgY2FsZCB3aXRoIG1ldGhvZCxjb250ZXh0IGFuZCBwYXJhbWV0ZXJgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAnaGV5JywgJ3llYWgnLCB7ICdoZWxsbyc6ICd3b3JsZCcgfSBdXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIGNhbGQoIGZ1bmN0aW9uIGhlbGxvKCB2YWx1ZSApe1xuXHRcdFx0XHRyZXR1cm4gWyBcImhleVwiLCB2YWx1ZSwgdGhpcyBdO1xuXHRcdFx0fSwgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9LCBcInllYWhcIiApLFxuXHRcdFx0WyBcImhleVwiLCBcInllYWhcIiwgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9IF0gKTtcblxuXHRcdH0gKTtcblxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gWyAnaGV5JywgJ3llYWgnLCAxMjMsIHsgJ2hlbGxvJzogJ3dvcmxkJyB9IF1cIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggY2FsZCggZnVuY3Rpb24gaGVsbG8oIHZhbHVlLCBkYXRhICl7XG5cdFx0XHRcdHJldHVybiBbIFwiaGV5XCIsIHZhbHVlLCBkYXRhLCB0aGlzIF07XG5cdFx0XHR9LCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0sIFwieWVhaFwiLCAxMjMgKSxcblx0XHRcdFsgXCJoZXlcIiwgXCJ5ZWFoXCIsIDEyMywgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9IF0gKTtcblxuXHRcdH0gKTtcblxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gWyBbICdoZWxsbycsIFsgJ3dvcmxkJyBdLCAneWVhaCcgXSBdXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIGNhbGQoIGZ1bmN0aW9uIHRlc3QoIHBhcmFtZXRlciApe1xuXHRcdFx0XHRyZXR1cm4gQXJyYXkuZnJvbSggYXJndW1lbnRzICk7XG5cdFx0XHR9LCBcInRlc3RcIiwgWyBcImhlbGxvXCIsIFsgXCJ3b3JsZFwiIF0sIFwieWVhaFwiIF0gKSxcblx0XHRcdFsgWyBcImhlbGxvXCIsIFsgXCJ3b3JsZFwiIF0sIFwieWVhaFwiIF0gXSApO1xuXG5cdFx0fSApO1xuXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBbIFsgJ2hlbGxvJywgJ3dvcmxkJywgJ3llYWgnIF0sICdoZXknIF1cIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggY2FsZCggZnVuY3Rpb24gdGVzdCggcGFyYW1ldGVyICl7XG5cdFx0XHRcdHJldHVybiBBcnJheS5mcm9tKCBhcmd1bWVudHMgKTtcblx0XHRcdFx0fSwgXCJ0ZXN0XCIsIFsgXCJoZWxsb1wiLCBcIndvcmxkXCIsIFwieWVhaFwiIF0sIFwiaGV5XCIgKSxcblx0XHRcdFsgWyBcImhlbGxvXCIsIFwid29ybGRcIiwgXCJ5ZWFoXCIgXSwgXCJoZXlcIiBdICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWNsaWVudFxuIl19
//# sourceMappingURL=test.support.js.map

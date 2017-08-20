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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiY2FsZCIsImRlc2NyaWJlIiwiaXQiLCJkZWVwRXF1YWwiLCJoZWxsbyIsInZhbHVlIiwiZGF0YSIsInRlc3QiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLG1CQUFULENBQWI7QUFDQTs7Ozs7OztBQU9BOztBQUVBRSxTQUFVLE1BQVYsRUFBa0IsWUFBTzs7QUFFeEJBLFVBQVUsMENBQVYsRUFBc0QsWUFBTzs7QUFFNURDLEtBQUksNERBQUosRUFBa0UsWUFBTzs7QUFFeEVKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sU0FBU0ksS0FBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDOUMsV0FBTyxDQUFFLEtBQUYsRUFBU0EsS0FBVCxFQUFnQixJQUFoQixDQUFQO0FBQ0EsSUFGaUIsRUFFZixFQUFFLFNBQVMsT0FBWCxFQUZlLEVBRU8sTUFGUCxDQUFsQjtBQUdBLElBQUUsS0FBRixFQUFTLE1BQVQsRUFBaUIsRUFBRSxTQUFTLE9BQVgsRUFBakIsQ0FIQTs7QUFLQSxHQVBEOztBQVNBSCxLQUFJLDREQUFKLEVBQWtFLFlBQU87O0FBRXhFSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNLFNBQVNJLEtBQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCQyxJQUF2QixFQUE2QjtBQUNwRCxXQUFPLENBQUUsS0FBRixFQUFTRCxLQUFULEVBQWdCQyxJQUFoQixFQUFzQixJQUF0QixDQUFQO0FBQ0EsSUFGaUIsRUFFZixFQUFFLFNBQVMsT0FBWCxFQUZlLEVBRU8sTUFGUCxFQUVlLEdBRmYsQ0FBbEI7QUFHQSxJQUFFLEtBQUYsRUFBUyxNQUFULEVBQWlCLEdBQWpCLEVBQXNCLEVBQUUsU0FBUyxPQUFYLEVBQXRCLENBSEE7O0FBS0EsR0FQRDs7QUFTQUosS0FBSSxvREFBSixFQUEwRCxZQUFPOztBQUVoRUosVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxTQUFTTyxJQUFULENBQWVDLFNBQWYsRUFBMEI7QUFDakQsV0FBTyxvQkFBWUMsU0FBWixDQUFQO0FBQ0EsSUFGaUIsRUFFZixNQUZlLEVBRVAsQ0FBRSxPQUFGLEVBQVcsQ0FBRSxPQUFGLENBQVgsRUFBd0IsTUFBeEIsQ0FGTyxDQUFsQjtBQUdBLElBQUUsQ0FBRSxPQUFGLEVBQVcsQ0FBRSxPQUFGLENBQVgsRUFBd0IsTUFBeEIsQ0FBRixDQUhBOztBQUtBLEdBUEQ7O0FBU0FQLEtBQUksdURBQUosRUFBNkQsWUFBTzs7QUFFbkVKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sU0FBU08sSUFBVCxDQUFlQyxTQUFmLEVBQTBCO0FBQ2pELFdBQU8sb0JBQVlDLFNBQVosQ0FBUDtBQUNDLElBRmdCLEVBRWQsTUFGYyxFQUVOLENBQUUsT0FBRixFQUFXLE9BQVgsRUFBb0IsTUFBcEIsQ0FGTSxFQUV3QixLQUZ4QixDQUFsQjtBQUdBLElBQUUsQ0FBRSxPQUFGLEVBQVcsT0FBWCxFQUFvQixNQUFwQixDQUFGLEVBQWdDLEtBQWhDLENBSEE7O0FBS0EsR0FQRDs7QUFTQSxFQXRDRDs7QUF3Q0EsQ0ExQ0Q7O0FBNENBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJjYWxkXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImNhbGQvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2NhbGQuZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJjYWxkXCI6IFwiY2FsZFwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5jb25zdCBjYWxkID0gcmVxdWlyZSggXCIuL2NhbGQuc3VwcG9ydC5qc1wiICk7XHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDpcclxuXHJcbmRlc2NyaWJlKCBcImNhbGRcIiwgKCApID0+IHtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGNhbGQgd2l0aCBtZXRob2QsY29udGV4dCBhbmQgcGFyYW1ldGVyYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbICdoZXknLCAneWVhaCcsIHsgJ2hlbGxvJzogJ3dvcmxkJyB9IF1cIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIGNhbGQoIGZ1bmN0aW9uIGhlbGxvKCB2YWx1ZSApe1xyXG5cdFx0XHRcdHJldHVybiBbIFwiaGV5XCIsIHZhbHVlLCB0aGlzIF07XHJcblx0XHRcdH0sIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSwgXCJ5ZWFoXCIgKSxcclxuXHRcdFx0WyBcImhleVwiLCBcInllYWhcIiwgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9IF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBbICdoZXknLCAneWVhaCcsIDEyMywgeyAnaGVsbG8nOiAnd29ybGQnIH0gXVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggY2FsZCggZnVuY3Rpb24gaGVsbG8oIHZhbHVlLCBkYXRhICl7XHJcblx0XHRcdFx0cmV0dXJuIFsgXCJoZXlcIiwgdmFsdWUsIGRhdGEsIHRoaXMgXTtcclxuXHRcdFx0fSwgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9LCBcInllYWhcIiwgMTIzICksXHJcblx0XHRcdFsgXCJoZXlcIiwgXCJ5ZWFoXCIsIDEyMywgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9IF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBbIFsgJ2hlbGxvJywgWyAnd29ybGQnIF0sICd5ZWFoJyBdIF1cIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIGNhbGQoIGZ1bmN0aW9uIHRlc3QoIHBhcmFtZXRlciApe1xyXG5cdFx0XHRcdHJldHVybiBBcnJheS5mcm9tKCBhcmd1bWVudHMgKTtcclxuXHRcdFx0fSwgXCJ0ZXN0XCIsIFsgXCJoZWxsb1wiLCBbIFwid29ybGRcIiBdLCBcInllYWhcIiBdICksXHJcblx0XHRcdFsgWyBcImhlbGxvXCIsIFsgXCJ3b3JsZFwiIF0sIFwieWVhaFwiIF0gXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIFsgWyAnaGVsbG8nLCAnd29ybGQnLCAneWVhaCcgXSwgJ2hleScgXVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggY2FsZCggZnVuY3Rpb24gdGVzdCggcGFyYW1ldGVyICl7XHJcblx0XHRcdFx0cmV0dXJuIEFycmF5LmZyb20oIGFyZ3VtZW50cyApO1xyXG5cdFx0XHRcdH0sIFwidGVzdFwiLCBbIFwiaGVsbG9cIiwgXCJ3b3JsZFwiLCBcInllYWhcIiBdLCBcImhleVwiICksXHJcblx0XHRcdFsgWyBcImhlbGxvXCIsIFwid29ybGRcIiwgXCJ5ZWFoXCIgXSwgXCJoZXlcIiBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9ICk7XHJcblxyXG59ICk7XHJcblxyXG4vLzogQGVuZC1jbGllbnRcclxuIl19
//# sourceMappingURL=test.support.js.map

"use strict";
var tstring;
(function (tstring) {
    var str = new String("This is string");
    console.log("str.constructor is:" + str.constructor);
    var Employee = /** @class */ (function () {
        function Employee(age, name) {
            this.age = age;
        }
        return Employee;
    }());
    var emp = new Employee(12, "222");
    var str1 = new String("RUNOOB");
    console.log("str.charAt(0) 为:" + str1.charAt(0)); // R
    console.log("str.charAt(1) 为:" + str1.charAt(1)); // U 
    console.log("str.charAt(2) 为:" + str1.charAt(2)); // N 
    console.log("str.charAt(3) 为:" + str1.charAt(3)); // O 
    console.log("str.charAt(4) 为:" + str1.charAt(4)); // O 
    console.log("str.charAt(5) 为:" + str1.charAt(5)); // B
    console.log("str.charCodeAt(0) 为:" + str1.charCodeAt(0)); // 82
    console.log("str.charCodeAt(1) 为:" + str1.charCodeAt(1)); // 85 
    console.log("str.charCodeAt(2) 为:" + str1.charCodeAt(2)); // 78 
    console.log("str.charCodeAt(3) 为:" + str1.charCodeAt(3)); // 79 
    console.log("str.charCodeAt(4) 为:" + str1.charCodeAt(4)); // 79
    console.log("str.charCodeAt(5) 为:" + str1.charCodeAt(5)); // 66
    var str11 = new String("RUNOOB");
    var str22 = "GOOGLE";
    var str33 = str11.concat(str22);
    console.log("str11 + str22 : " + str33);
    var str111 = new String("RUNOOB");
    var index = str111.indexOf("OO");
    console.log("查找的字符串位置 :" + index); // 3
})(tstring || (tstring = {}));

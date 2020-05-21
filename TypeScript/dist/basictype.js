"use strict";
var basictype;
(function (basictype) {
    var binaryLiteral = 10; // 二进制
    var octalLiteral = 484; // 八进制
    var decLiteral = 6; // 十进制
    var hexLiteral = 0xf00d; // 十六进制
    // 字符串
    basictype.name = "Runoob";
    var years = 5;
    var words = "\u60A8\u597D\uFF0C\u4ECA\u5E74\u662F " + basictype.name + " \u53D1\u5E03 " + (years + 1) + " \u5468\u5E74";
    // bool
    var bFlag = true;
    // array
    var arr = ["1234", "322"];
    var arr2 = ["1234", "322"];
    // 元组
    var x = ["ssss", 333];
    // 枚举
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Black"] = 1] = "Black";
        Color[Color["Green"] = 2] = "Green";
    })(Color || (Color = {}));
    ;
    var myColor = Color.Black;
    // void
    function hello() {
        console.log("Hello fish");
    }
    hello();
    var x1 = 4;
    x1.ifItExists(); // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
    x1.toFixed(); // 正确
})(basictype || (basictype = {}));

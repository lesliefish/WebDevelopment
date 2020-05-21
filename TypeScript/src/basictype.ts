
namespace basictype {
    let binaryLiteral: number = 0b1010; // 二进制
    let octalLiteral: number = 0o744;    // 八进制
    let decLiteral: number = 6;    // 十进制
    let hexLiteral: number = 0xf00d;    // 十六进制

    // 字符串
    export let name: string = "Runoob";
    let years: number = 5;
    let words: string = `您好，今年是 ${name} 发布 ${years + 1} 周年`;

    // bool
    let bFlag: boolean = true;

    // array
    let arr: Array<string> = ["1234", "322"];
    let arr2: string[] = ["1234", "322"];

    // 元组
    let x: [string, number] = ["ssss", 333];

    // 枚举
    enum Color { Red, Black, Green };
    let myColor = Color.Black;

    // void
    function hello(): void {
        console.log("Hello fish");
    }

    hello();

    let x1: any = 4;
    x1.ifItExists();    // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
    x1.toFixed();    // 正确
}
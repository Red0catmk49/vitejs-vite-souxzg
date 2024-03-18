/**
 * const,let等の変数宣言
 */
// var val1 = 'var変数';
// console.log(val1);

// // var変数は上書き可能
// val1 = 'var変数を上書き';
// console.log(val1);

// // var変数を再宣言可能
// var var1 = 'var変数を再宣言';
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// letは再現不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数を上書き";

// //constは再宣言不可能
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: 'あかにゃこ',
//   age: 23,
// };
// val4.name = 'aka_nyaco';
// val4.address = "Miyazaki";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "frog";
// val5.push("ant");
// console.log(val5);

/**
 * テンプレート文字列　``
 */
// const name = 'あかにゃこ';
// const age = 23;

// //「私の名前はあかにゃこです。年齢は23歳です。」

// // 従来の方法
// const message1 = '私の名前は' + name + 'です。年齢は' + age + '歳です。';
// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//     return str;
// }
// // const func1 = function (str) {
// //     return str;
// // };
// console.log(func1("func1です"));

// // //アロー関数
// const func2 = (str) => {
//     return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => ({
//     hoge: num1,
//     huga: num2,
// });
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//     name: "あかにゃこ",
//     age: 23
// };

// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// // console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳でぇす。`;
// console.log(message2);

// const myProfile = ["あかにゃこ", 23];
// // const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// // console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message4);

/**
 * デフォルト値(引数, 分割代入)
 */
// const sayHello = (name = `ゲスト`) => console.log(`こんにちは!${name}さん`);
// sayHello("あかにゃこ");

// const myProfile = {
//     age: 5
// };
// const {age, name = "ゲスト"} = myProfile;
// console.log(age);
// console.log(name);

/**
 * オブジェクトの省略記法
 * 変数とプロパティの名前が同じ時, 省略できる
 */
// const name = "あかにゃこ";
// const age = 23;

// const myProfile = { name, age};
// console.log(myProfile);

/**
 * スプレッド構文 ...
 * 順番に中身が展開されていく
 */

// 配列の展開
// [1, 2] -> 1, 2
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);
// > 1, 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// // > 1
// console.log(num2);
// // > 2
// console.log(arr3);
// // > (3) [3, 4, 5]

// 配列のコピー, 結合
// コピー
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// // > (2) [100, 20]
// console.log(arr4);
// // > (2) [10, 20]

// 結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// // > (4) [10, 20, 30, 40]

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);
// > (2) [100, 20]
// スプレッド構文を使わないと、参照先自体をコピーするから要注意!!!

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "あかにゃこ"];
// // for (let index = 0; index < nameArr.length; index++){
// //     console.log(nameArr[index]);
// // }
// // > 田中
// // > 山田
// // > あかにゃこ

// const nameArr2 = nameArr.map((name) => {
//     return name;
// });
// // namerArr.map((name) => console.log(name));

// console.log(nameArr2);
// // > (3) [`田中`, `山田`, `あかにゃこ`]

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1;
// });
// console.log(newNumArr);
// // > (3) [1, 3, 5]

const nameArr = ["田中", "山田", "あかにゃこ"];
// for (let index = 0; index < nameArr.length; index++){
//     console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));
// > 1番目は田中です
// > 2番目は山田です
// > 3番目はあかにゃこです

const newNameArr = nameArr.map((name) => {
    if (name === "あかにゃこ") {
        return name;
    } else {
        return `${name}さん`;
    }
})
console.log(newNameArr);
// > (3) [`田中さん`, `山田さん`, `あかにゃこ`]
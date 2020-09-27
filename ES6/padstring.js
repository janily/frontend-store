// padStart() 方法用另一个字符串填充当前字符串
//(如果需要的话，会重复多次)
//以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。


// str.padStart(targetLength [, padString])



console.log('abc'.padStart(10, "#"));


// 实战实现字符的对齐
const label1 = "名字";
const label2 = "电话号码";
const name = "Janily"
const phoneNumber = "1234567890";

console.log(label1.padStart(6) + ":" + name);
console.log(label2.padStart(4) + ":" + phoneNumber);

// padStart 应用场景实战

//  数字格式化

const seconds = 1;
const formattedSeconds = seconds.toString().padStart(2, 0);
const ms = 1;
const formattedMs = ms.toString().padStart(3, 0);

console.log(formattedSeconds + ":" + formattedMs);






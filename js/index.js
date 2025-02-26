const { bip39 } = require("@okxweb3/crypto-lib");
const fs = require('fs'); // 引入fs模块

function getCurrentDateTime() {
    const now = new Date(); // 获取当前日期时间
    const formattedDate = 
        now.getFullYear().toString() + 
        (now.getMonth() + 1).toString().padStart(2, '0') + 
        now.getDate().toString().padStart(2, '0') + 
        now.getHours().toString().padStart(2, '0') + 
        now.getMinutes().toString().padStart(2, '0') + 
        now.getSeconds().toString().padStart(2, '0'); // 格式化为yyyymmddhhmmss
    return formattedDate; // 返回格式化后的日期时间
}

const filePath = `output-${getCurrentDateTime()}.txt`; // 指定文件路径
const num = 100

for (var i = 0; i < num; i++) {
    const mnemonic = bip39.generateMnemonic(); // 生成助记词
    fs.appendFileSync(filePath, mnemonic + '\n'); // 追加到文件，每个助记词一行
}

console.log(`已经生成${num}个助记词，保存在当前文件夹下的${filePath}中`)
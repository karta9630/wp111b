/* 
        來源 范揚玄的程式碼 借鑒學習觀摩 讓我理解

*/
while (true) {
    let cmd = prompt("shell>")
    if (cmd == 'exit') break
    console.log(eval(cmd))
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}



window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
let main = document.querySelector('#main')

let pages = {


  '#home': `


<h1>這是我的作業平台</h1>
<h2></h2>
<p>我的作業都在這邊，可能有缺吧?



`,





  '#0303': `
<h1>3月3日-3月10日</h1>  
  <a href="https://github.com/karta9630/wp111b/blob/main/homework/2023-03-03.html" target="_blank">註冊表單程式碼</a>
  <a href="https://github.com/karta9630/wp111b/blob/main/homework/aboutme.html" target="_blank">about me程式碼</a>
  <a href="#0303/3">css程式碼</a>
  <a href="#0303/4">註冊表單</a>
  <a href="#0303/5">about me</a>
  `,
  '#0303/3': `

  @charset "UTF-8";
  body{
      background-color:rgba(154, 149, 3, 0.141);
  }
  h1{
      color:rgba(241, 3, 11, 0.594);
      text-align: center;
      font-size: 40px ;
  }
  p{color: rgb(74, 16, 16); 
          padding-left: 10%;
          font-family: 'Courier New', Courier, monospace;
  
  } 
  a{color: rgb(74, 16, 16); 
      padding-left: 10%;
  }       
  img{
      padding-left: 10%;
      
  }
  h2{
      color:blue;
      text-align: center;
  }
  form{
      color: rgb(195, 205, 8);
      padding-left: 20%;
      border:5px double    #d71010;
      background-color: rgb(23, 23, 23);
      font-family: 'Courier New', Courier, monospace;
  }
  
  
  `,
  '#0303/4': `
<html>
<body>
<h2 style="font-size: 60px;">註冊 </h2>
<form>
    <label for="fname">姓名</label><br>
    <input type="test" id="fname" ></p>
    <label for="gmail">電子郵件</label><br>
    <input type="email"id="gmail"></p>
    <label for="user">帳號</label><br>
    <input type="test" id="user"></p>
    <label for="password">密碼</label><br>
    <input type="test" id="password"></p>
    <label for="生日">生日</label><br>
    <input type="date"></form>
    <label for="性別" >性別<label><br>
    <input list="性別"placeholder="請點選"> 
    <datalist id="性別">
        <option value="男">
        <option value="女">
    </datalist>  
</p><label for="血型">血型</label><br>
    <input type="radio" id="血型" name="血型">
    <label for="血型">A</label>
    <input type="radio" id="血型" name="血型">
    <label for="血型">B</label>
    <input type="radio" id="血型" name="血型">
    <label for="血型">O</label>
    <input type="radio" id="血型" name="血型">
    <label for="血型">AB</label></p>

<form>
</body>
</html>

`,
  '#0303/5': `
<html>
<head>
<body>
<h1>戴嘉豪的個人網頁
</h1>
<p>金門大學 資工系一年級

</p>
<p>學號111110503</p>
<a href="https://www.twitch.tv/bbbb87">TWITCH</a>
<br>
<img src="twinsparrot.gif"/>




<body>
    <h2 style="font-size: 60px;">表單 </h2>
    <form>
        <label for="fname">姓名</label><br>
        <input type="test" id="fname" ></p>
        <label for="gmail">電子郵件</label><br>
        <input type="email"id="gmail"></p>
        <label for="user">帳號</label><br>
        <input type="test" id="user"></p>
        <label for="password">密碼</label><br>
        <input type="test" id="password"></p>
        <label for="生日">生日</label><br>
        <input type="date"></p>
        <label for="性別" >性別<label><br>
        <input list="性別"placeholder="請點選"> 
        <datalist id="性別">
            <option value="男">
            <option value="女">
        </datalist>  
    </p><label for="血型">血型</label><br>
        <input type="radio" id="血型" name="血型">
        <label for="血型">A</label>
        <input type="radio" id="血型" name="血型">
        <label for="血型">B</label>
        <input type="radio" id="血型" name="血型">
        <label for="血型">O</label>
        <input type="radio" id="血型" name="血型">
        <label for="血型">AB</label></p>
    
    <form>
    </body>
</body>
<link rel= "stylesheet" href= "../homework/CSS.css">
</head>
</html> 
`,












  '#0317': `
    <h1>3月17號</h1>
    <a href="#0317/1">work1</a>
    <a href="#0317/2">work2</a>
    `,
  '#0317/1': `
    <h2>fibonacci</h2>
    <a href="https://github.com/karta9630/wp111b/blob/main/javascript/0317/fibonacc.js "target="_blank">Github連結</a>
    function fibonacci(n) {
      if(n<=1)
          return n;
      return (fibonacci(n-2)+fibonacci(n-1));
  }
    `,

  '#0317/2': `
    <h2>isprime</h2>
    <a href="https://github.com/karta9630/wp111b/blob/main/javascript/0317/isPrime.js"target="_blank">Github連結</a>
    <p>  
    function isprime(n) {
      if (n<=1) 
          return false;
    for(let i=2;i<(n);i++){
      if(n%i==0)
          return false;
  }
  return true;
}
</p>

    `,








  '#0324': `
<h1> 3月24日</h1>
<a href="#0324/1">madd.js</a>
<a href="#0324/2">mmul.js</a>
<a href="#0324/3">repeat.js</a>
<a href="#0324/4">vadd.js</a>
<a href="#0324/5">vodt.js</a>

`,
  '#0324/1': `
<h2>madd</h2>
<a href="https://github.com/karta9630/wp111b/blob/main/javascript/0324/madd.js" target="_blank">Github連結 </a>
var a=[1,4,8,9] ,b=[7,6,3,9];
var all=a.concat(b)
 console.log(all);

`,
  '#0324/2': `
<h2>mmul</h2>
<a href="https://github.com/karta9630/wp111b/blob/main/javascript/0324/mmul.js" target="_blank">Github連結 </a>
function mmul(a, b) {
  let r = []
  for (let i = 0; i < a.length; i++) {
      r[i] = []
      for (let j = 0; j < a.length; j++) {
          r[i][j] = 0
          for (let k = 0; k < a.length; k++) {
              r[i][j] += a[i][k] * b[k][j];
          }
      }
  }
  return r
}
var a = [[1, 2, 3], [4, 5, 6], [1,2,3]],
b = [[1,2,3], [6, 5, 4], [3, 2, 1]];
console.log(mmul(a, b));

`,

  '#0324/3': `
<h2>repeat</h2>
<a href="https://github.com/karta9630/wp111b/blob/main/javascript/0324/repeat.js" target="_blank">Github連結 </a>
function repeat(f,n){
  let x=[]
  for(let i=0;i<n;i++){
      x[i]=Math.random();
      f=x[i]
  }
  return x;
}
var f    ,n=10;
console.log(repeat(f,n));

`,




  '#0324/4': `
<h2>vadd</h2>
<a href="https://github.com/karta9630/wp111b/blob/main/javascript/0324/vadd.js" target="_blank">Github連結 </a>
function vadd(a, b) {
  let r = []
  for (let i = 0; i < a.length; i++) {
      r[i] = a[i] + b[i];
  }
  return r
}
var a = [2, 4, 6, 7], b = [8, 6, 4, 3];
console.log(vadd(a, b));



`,
  '#0324/5': `
<h2>vodt</h2>
<a href="https://github.com/karta9630/wp111b/blob/main/javascript/0324/vodt.js" target="_blank">Github連結 </a>
function vdot(a, b) {
  let r = [], n = 0
  for (let i = 0; i < a.length; i++) {
      r[i] = (a[i] * b[i]);
      n = n + r[i];
  }

  return n
}
var a = [2, 4, 6, 7], b = [8, 6, 4, 3];
console.log(vdot(a, b));

`,






  '#0414': `
<h1>4月14日</h1>
<a href="#0414/1">month.js</a>
<a href="#0414/2">算單字出現次數</a>
<a href="#0414/3">矩陣相加相乘物件畫</a>
`,

  '#0414/1': `
<h1>month.js</h1>
<a href="https://github.com/karta9630/wp111b/blob/main/javascript/0414/month.js" target="_blank">Github連結</a>
var month ={
  january:'1',february:'2',march:'3',april:'4',may:'5',june:'6',july:'7',august:'8',september:'9',october:'10',november:'11',december:'12'

}

function m(c){
  return month[c];
}
console.log(m("january"))
console.log(m("february"))
console.log(m("march"))

`,
  '#0414/2': `
<h1>算單字出現次數</h1>
<a href="https://github.com/karta9630/wp111b/blob/main/javascript/0414/2.js" target="_blank">Github連結</a>

function count(list) {
  var x = {}
  for (var i of list) {
      if (i in x) {
          x[i]++
      }
      else {
          x[i] = 1
      }
  }
  return x
}

var list = ['a', 'dog', 'chase', 'a', 'cat']
console.log(count(list))


`,
  '#0414/3': `
<a href="#0414/3">矩陣相加相乘物件畫</a>
<a href="https://github.com/karta9630/wp111b/blob/main/javascript/0414/3.js" target="_blank">Github連結</a>

class Matrix{
  constructor(a) {
      this.a = a;
  }

  add(b) {
      for(let i=0;i<(b).length;i++){
          let x="";
          for(let j=0;j<(b[i].length);j++){
              x+=(b[i][j]+this.a[i][j]);
              x+=" ";
          }
          console.log(x);
      }
  }

  mul(x) {
      var b=0,a="";
      for(var i=0;i<(x).length;i++){
          a="";
          for(var j=0;j<(x).length;j++){
              b=0;
              for(var k=0;k<(x).length;k++){
                  b+=x[i][k]*this.a[k][j];
              }
              a+=b;
              a+=" ";
          }
          console.log(a);
      }
  }
}

let a=[[1,2,3],[4,5,6],[7,8,9]],b=[[9,8,7],[6,5,4],[3,2,1]];;
let x=new Matrix(a);
x.add(b);
console.log()
x.mul(b);
`,











  '#0421': `
<h1>4月21日</h1>
<a href="#0421/1">navbar.html</a>
<a href="https://github.com/karta9630/wp111b/blob/main/javascript/0428/1.html" target="_blank" >navbar程式碼</a>
<a href="#0421/2">navbar.js</a>
`,
  '#0421/1': `
  <a href="https://karta9630.github.io/wp111b/javascript/0428/1.html#aboutus" target"_blank"> 有包含JS的網站(這個頁面我用不出JS)</a>
<html>
<head>
<style>
body {
    margin:0px;
}
#nav {
    background-color:#000000;
    width:40px;
    height:100%;
    transition: width 1s;
    display:inline-block;
    float:left;
}
#nav:hover {
    width:200px;
}
#navMain {
    padding-left:40px;
    padding-top:40px;
}
#nav a {
    color:#ffffff;
    white-space: nowrap;
    text-decoration: none;
}
#nav a:hover {
    color:orange;
}

#main {
    padding: 10px 50px;
}
</style>
</head>
<body>
<div id="nav">
  <div id="navMain">
    <p><a href="#aboutus">關於本站</a></p>
    <p><a href="#example1">範例1</a></p>
    <p><a href="#example2">範例2</a></p>
    <p><a href="#example3">範例3</a></p>
  </div>
</div>
<div style="padding:10px;">
    <div id="main">
        xxxx
    </div>
</div>
<script src="2.js"></script>
</body>
</html>


`,

  '#0421/2': `
(｡í_ì｡)我用不出JS的程式碼有BUG
<a href="https://github.com/karta9630/wp111b/blob/main/javascript/0428/2.js" target"_block" >所以只能點這裡了</a>
  
`,















  '#0428': `
<h1>4月28日</h1>
<a href="https://github.com/karta9630/wp111b/blob/main/javascript/0428/1.html" target="_block">程式碼</a>
<a href="https://karta9630.github.io/wp111b/javascript/0428/index.html" target="_block">html</a>
<a href="https://github.com/karta9630/wp111b/blob/main/javascript/0428/topbar.js" target="_bolck">js</a>
<a href="#0428/3">css</a>

`,


'#0428/3':`
<a href=" https://github.com/karta9630/wp111b/blob/main/javascript/0428/topbar.css" target="_block">Github</a>
body {
  margin:0px;
}
.navbar {
  overflow: hidden;
  background-color: #333;
  font-family: Arial, Helvetica, sans-serif;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  cursor: pointer;
  font-size: 16px;    
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn, .dropbtn:focus {
  background-color: red;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}

.bigmargin {
  margin: 20px;
  text-align: center;
}
.bigmargin a{
  font-size: 80px;
  display: inline-block;
}


`,







'#0505':`
<h1>5月5日<h1>
<a href="#0505/1">chatgpt.js</a>
<a href="#0505/2">CMD.js</a>


`,
'#0505/1':`
<a href="https://github.com/karta9630/wp111b/blob/main/javascript/0505/chatgpt.js" target="_block">Github</a>
/* 
        來源 范揚玄的程式碼 借鑒學習觀摩 讓我理解

*/

let txt=prompt("請輸入文字：")
const jsonResponse = await fetch("https://api.openai.com/v1/chat/completions", 
{
    body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": txt}],
        "temperature": 0.7
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': Bearer '$'{Deno.env.get('OPENAI_API_KEY')},
    }
})
const jsonData = await jsonResponse.json()
console.log(jsonData["choices"][0]["message"]["content"])

`,
'#0505/2':`
<a href="https://github.com/karta9630/wp111b/blob/main/javascript/0505/CMD.js"

/* 
        來源 范揚玄的程式碼 借鑒學習觀摩 讓我理解

*/
while (true) {
    let cmd = prompt("shell>")
    if (cmd == 'exit') break
    console.log(eval(cmd))
}



`,
'#0512':`
<h1>5月12日</h1>
<a href="#0512/1">網頁</a>
<a href="https://github.com/karta9630/wp111b/blob/main/javascript/0512/1.html" target="_block">程式碼 </a>



`,
'#0512/1':`
<!DOCTYPE html>
<html>
<body>

</svg>
<svg  height="230" width="500">
  <circle cx="75" cy="85" r="75" stroke="green" fill="transparent" ></circle>
  <circle cx="35" cy="75" r="20" stroke="red" fill="transparent" ></circle>
  <circle cx="40" cy="85" r="7.5" stroke="black" fill="transparent" ></circle>
  <circle cx="105" cy="75" r="20" stroke="red" fill="transparent" ></circle>
  <circle cx="100" cy="85" r="7.5" stroke="black" fill="transparent" ></circle>
  <path  d="M 40 100 q 60 40 70 0" stroke="blue" stroke-width="1" fill="none" />

</svg>
</body>
</html>
`,







}
window.onhashchange = function () {
  let hash = window.location.hash
  main.innerHTML = pages[hash]
}


let htmlInput = "<p>This is a paragraph.</p><div><h1>Title</h1><p>Content</p></div>";







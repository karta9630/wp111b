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

'#mid':`
<h1>期中作業</h1>

<a href="#mid/0">目錄</a>
<a href="#mid/1">第一章</a>
<a href="#mid/2">第二章</a>
<a href="#mid/3">第三章</a>
<a href="#mid/4">第四章</a>
<a href="#mid/5">第五章</a>
<a href="#mid/6">第六章</a>
<a href="#mid/7">第七章</a>
<a href="#mid/8">第八章</a>
`,

'#mid/0':`
<h1>目錄</h1>

<a href="https://github.com/karta9630/wp111b/blob/main/mid/00-%E7%9B%AE%E9%8C%84.md" target="_block">Github</a>
#   第一章：網頁設計概述
##       ●網頁設計的基本概念和定義
## ● 網頁設計的發展歷程
## ●網頁設計的重要性和應用


#   第二章：網頁設計的技術
##       ●HTML基礎概念
##       ●CSS基礎概念
##       ●JavaScript基礎概念

#   第三章：網頁設計的原則
##  ●     設計原則的概述
##  ●     色彩搭配
##  ●     字體設計
##  ●     圖片使用和處理

#    第四章：網頁設計的工具
##  ●      網頁設計工具概述
##  ●      Adobe Photoshop的使用
##  ●      Adobe Illustrator的使用
##  ●      Adobe Dreamweaver的使用

#    第五章：網頁設計的實戰
##   ●     網站規劃
##   ●     網站建設
##   ●     網站優化
##   ●     網站維護

#    第六章：網頁設計的趨勢
##   ●     網頁設計的趨勢和發展方向
##   ●     响應式設計和移動設備優化
##   ●     設計和開發的整合

#    第七章：網頁設計的案例分析
##  ●      網頁設計的典型案例分析
##  ●      網頁設計的成功要素
##  ●      網頁設計的失敗案例

#    第八章：網頁設計的未來
##   ●     網頁設計的未來發展趨勢
##   ●     網頁設計師的發展前景
##   ●     網頁設計的未來挑戰


<a href="1.html#mid/1">下一章</a>
`,

'#mid/1':`
<h1>第一章</h1>
<a href="https://github.com/karta9630/wp111b/blob/main/mid/01-%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88%E6%A6%82%E8%BF%B0.md" target="_block">Github</a>

#   第一章：網頁設計概述
##       ●網頁設計的基本概念和定義
網頁設計是指創造和設計網頁的過程，以便網站能夠通過網路在互聯網上被訪問。這個過程涉及到多個方面，包括網頁的結構、設計、排版和內容等。網頁設計是網站開發的一個關鍵方面，因為良好的網頁設計能夠增加網站的吸引力、提高用戶體驗和易用性，進而提高網站的流量和轉換率。
## ●        網頁設計的發展歷程
網頁設計的發展歷程可以追溯到20世紀90年代初期，當時互聯網開始普及，網頁開發也開始發展。當時網頁設計主要采用HTML和基本的圖像編輯工具，網頁的設計和功能比較簡單。隨著互聯網技術的發展，網頁設計也逐漸趨於專業化和多樣化，涉及到的技術和工具也越來越豐富。
##        ●網頁設計的重要性和應用
網頁設計在現代社會中扮演著非常重要的角色。隨著越來越多的人使用互聯網，網站和網頁也越來越多樣化和豐富。網頁設計師需要考慮設計的目的、目標受眾、視覺效果、易用性等因素，以創造出吸引人且有用的網頁。網頁設計在商業、娛樂、教育、政治和其他領域都有廣泛應用，可以為人們提供豐富的信息和服務，同時也為企業提供了一個重要的銷售和宣傳平台。

<a href="1.html#mid/0">上一章</a>
<a href="1.html#mid/2">下一章</a>
`,

'#mid/2':`

<h1>第二章</h1>

<a href="https://github.com/karta9630/wp111b/blob/main/mid/02-%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88%E7%9A%84%E6%8A%80%E8%A1%93.md" target="_block">Github</a>


#   第二章：網頁設計的技術
網頁設計是一個高度技術化的領域，涉及到多種技術和工具。本章將介紹網頁設計的三個基礎技術：HTML、CSS和JavaScript。
##       ●HTML基礎概念
HTML（Hyper Text Markup Language）是一種用於創建和呈現網頁內容的標準語言。HTML使用標記（tags）和屬性（attributes）來描述網頁的結構和內容。標記是由一對角括號（<>）圍住的單詞，例如“<html>”表示一個HTML文檔的開始，而“</html>”表示HTML文檔的結束。屬性則是位於標記內部的名稱-值對，例如“<img src="image.png">”中的“src”是一個屬性，它指定了圖像文件的URL。

HTML中有許多不同的標記和屬性，用於描述各種不同的網頁元素，例如段落、標題、列表、表格、超鏈接等等。網頁設計師需要熟悉HTML的基本語法和常用標記，以創建出結構清晰、符合標準的網頁。
##       ●CSS基礎概念
CSS（Cascading Style Sheets）是一種用於控制網頁外觀和排版的樣式表語言。CSS可以將網頁的內容和結構分離開來，從而使設計師能夠更容易地控制網頁的外觀。CSS使用選擇器（selector）和屬性（property）來描述網頁元素的樣式。選擇器是指定要應用樣式的HTML元素，例如“p”表示段落元素，而“#header”表示ID為“header”的元素。屬性是指定樣式的屬性名和值，例如“color: red”表示文字顏色為紅色。

CSS支持許多不同的屬性，用於控制文字、背景、邊框、間距、對齊、布局等方面的樣式。CSS還支持繼承（inheritance）、層級（cascading）和優先級（priority）等概念，用於解決樣式衝突和優先順序問題。
CSS樣式可以在HTML文檔中的<head>元素中定義，也可以在外部CSS文件中定義，以便在多個網頁中共享樣式。使用CSS可以實現網頁的靜態和動態效果，例如頁面轉場、滾動動畫等。
##       ●JavaScript基礎概念
JavaScript是一種用於網頁互動和動態效果的腳本語言。它可以在網頁中添加交互性和動態效果，例如表單驗證、動畫效果、網頁遊戲等等。JavaScript可以與HTML和CSS結合使用，實現更豐富和更有趣的網頁體驗。

JavaScript的語法和結構與其他編程語言類似，包括變量、數組、對象、函數等基本概念。JavaScript還支持事件（event）、條件語句（if/else）、循環語句（for/while）、函數回調（callback）等高級特性，使得開發者可以更靈活地處理網頁事件和交互。

除了以上三種技術，還有其他的技術和工具，例如jQuery、Bootstrap、React等等，都可以用於網頁設計中，以實現更高效、更豐富和更靈活的網頁體驗。在進行網頁設計時，需要根據具體的需求和目標，選擇適合的技術和工具，以實現最佳效果。

<a href="1.html#mid/1">上一章</a>
<a href="1.html#mid/3">下一章</a>
`,
'#mid/3':`
<h1>第三章</h1>

<a href="https://github.com/karta9630/wp111b/blob/main/mid/03-%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88%E7%9A%84%E5%8E%9F%E5%89%87.md" target="_block">Github</a>


#   第三章：網頁設計的原則
網頁設計的原則是指在設計網頁時應該遵循的一些基本規則和準則，以實現網頁的美觀、易用和有效性。網頁設計的原則包括設計的目的性、統一性、清晰性、簡潔性、易讀性、易用性等等。
##  ●     設計原則的概述
網頁設計的原則是網頁設計的基礎，它們的目的是為了讓網頁變得更加易用和吸引人。網頁設計的原則是一些基本準則，設計師必須按照這些原則來設計網頁。以下是一些重要的網頁設計原則：

網頁設計的目的性：網頁設計應該有明確的目的和設計理念，以達到設計的最佳效果。

統一性：網頁設計中的各種元素應該相互協調和統一，以實現整個網站的一致性和連貫性。

清晰性：網頁設計應該能夠讓訪問者快速、清晰地了解網頁的主要內容和功能。

簡潔性：網頁設計應該簡潔明瞭，不要過於複雜，以提高網頁的易用性和易讀性。

易讀性：網頁設計中的文字和圖像應該易於閱讀和理解，以便訪問者能夠更快地了解網頁的內容和意義。

易用性：網頁設計應該能夠為訪問者提供簡單、方便、直觀的操作方式，使訪問者能夠輕鬆地完成任務和操作。
##  ●     色彩搭配
色彩搭配是網頁設計中的重要部分，它可以讓網頁變得更加美觀和有吸引力。色彩搭配應該基於網頁的主題和內容，並遵循一些基本原則，例如色彩的對比度、互補色的使用、相近色的使用等等。色彩的選擇應該根據網頁的目的和受眾，以及使用的場合。
##  ●     字體設計
字體設計是指選擇和使用網頁字體的過程。選擇適合的字體可以提高網頁的易讀性和美觀度。在選擇字體時，應該根據網頁的主題和風格來選擇。例如，在設計一個商業網站時，應該選擇一個較正式的字體；而在設計一個創意或遊戲網站時，則可以選擇一個比較鮮豔或夸張的字體。
##  ●     圖片使用和處理
圖片是網頁設計中的重要部分，可以讓網頁更加生動有趣。但是，過多或不當的使用圖片會對網頁的加載速度造成影響，進而影響使用體驗。在使用圖片時，應該選擇高質量、符合主題的圖片，並遵循一些基本原則，例如縮小圖片的大小、使用圖片壓縮等等。此外，在設計網頁時，應該合理運用圖片和文字，讓網頁內容更加豐富和具有吸引力。

網頁設計的原則可以幫助設計師創建美觀、易用、有效的網頁。在網頁設計過程中，應該根據設計原則來選擇和使用色彩、字體、圖片等元素，以實現網頁的目的和效果。
<a href="1.html#mid/2">上一章</a>
<a href="1.html#mid/4">下一章</a>
`,

'#mid/4':`

<h1>第四章</h1>

<a href="https://github.com/karta9630/wp111b/blob/main/mid/04-%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88%E7%9A%84%E5%B7%A5%E5%85%B7.md" target="_block">Github</a>


#    第四章：網頁設計的工具

##  ●      網頁設計工具概述
在網頁設計中，設計師可以使用各種工具來幫助他們創建網頁。這些工具可以分為圖像編輯工具、網頁編輯工具、交互設計工具等等。在選擇工具時，應該根據自己的需求和技能水平來選擇適合的工具。
##  ●      Adobe Photoshop的使用
Adobe Photoshop是一款流行的圖像編輯軟件，可以用於創建網頁上的圖片和圖形。使用Photoshop可以創建網頁上的各種元素，例如背景、按鈕、圖片等等。設計師可以使用Photoshop來創建網頁的視覺效果，例如色彩、尺寸、形狀等等。
##  ●      Adobe Illustrator的使用
Adobe Illustrator是一款向量圖形編輯軟件，可以用於創建網頁上的矢量圖形。相比於Photoshop，Illustrator更適合創建網頁上的矢量圖形，例如圖標、標誌、網頁布局等等。使用Illustrator可以創建可縮放的矢量圖形，使網頁看起來更加美觀和專業。
##  ●      Adobe Dreamweaver的使用
Adobe Dreamweaver是一款流行的網頁編輯軟件，可以用於設計、開發和維護網頁。使用Dreamweaver可以輕鬆創建和編輯HTML、CSS、JavaScript等網頁語言。此外，Dreamweaver還提供了一些有用的功能，例如代碼提示、可視化佈局、FTP上傳等等，可以幫助設計師更加高效地創建網頁。

網頁設計的工具可以幫助設計師更加輕鬆地創建網頁。在使用這些工具時，設計師應該根據自己的技能水平和需求來選擇合適的工具，以實現網頁的設計目的。
<a href="1.html#mid/3">上一章</a>
<a href="1.html#mid/5">下一章</a>
`,

'#mid/5':`
<h1>第五章</h1>

<a href="https://github.com/karta9630/wp111b/blob/main/mid/05-%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88%E7%9A%84%E5%AF%A6%E6%88%B0.md" target="_block">Github</a>


#    第五章：網頁設計的實戰
在第五章中，我們將進一步深入研究網頁設計的實戰内容，包括網站規劃、網站建設、網站優化和網站維護等主要環節。
##   ●     網站規劃
在進行網站設計之前，需要對網站進行規劃，以確定網站的目標、內容、結構、設計風格等。網站規劃是網站設計的重要步驟，能夠幫助設計師更好地理解網站的目標和要求，從而更好地進行網站設計。
##   ●     網站建設
網站建設是指根據網站規劃進行網站設計和編程的過程。網站建設包括網站的前端設計和後端編程，其中前端設計主要負責網站的視覺和交互設計，後端編程主要負責網站的數據處理和服務端開發。網站建設的成功與否取決於設計師的設計水平和編程技能。
##   ●     網站優化
網站優化是指對網站進行優化，以提高網站的性能和使用體驗。網站優化包括網站的速度優化、SEO優化、內容優化等。網站優化能夠提高網站的搜索排名，增加網站流量，提高網站的轉換率和用戶體驗。
##   ●     網站維護
網站維護是指對網站進行日常維護和管理的過程。網站維護包括網站的更新、備份、安全管理等。網站維護能夠確保網站的正常運行，防止網站出現故障和安全問題。

網頁設計的實戰是設計師進行網頁設計的重要步驟。在實戰中，設計師需要根據網站規劃進行網站設計和編程，並對網站進行優化和維護，以確保網站的正常運行和用戶體驗。

<a href="1.html#mid/4">上一章</a>
<a href="1.html#mid/6">下一章</a>
`,

'#mid/6':`
<h1>第六章</h1>

<a href="https://github.com/karta9630/wp111b/blob/main/mid/06-%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88%E7%9A%84%E8%B6%A8%E5%8B%A2.md" target="_block">Github</a>


#    第六章：網頁設計的趨勢
隨著技術的不斷發展，網頁設計也在不斷變化和進步。本章將探討目前網頁設計的趨勢和未來的發展方向。
##   ●     網頁設計的趨勢和發展方向
近年來，網頁設計的趨勢主要集中在以下幾個方面：

網頁設計的趨勢和發展方向
網頁設計一直在不斷的發展，隨著時代的變遷和科技的進步，網頁設計的趨勢也在不斷的改變和演變。以下是一些當前網頁設計的趨勢和發展方向：

1. 漸進式Web應用程式（Progressive Web Apps，PWA）
漸進式Web應用程式是一種新型的Web應用程式，它的目標是通過結合Web和本地應用程式的優點，提供更好的用戶體驗。PWA具有快速加載、離線訪問、推送通知等功能，這些都是傳統Web應用程式所不具備的特點。

2. 人工智慧（Artificial Intelligence，AI）
人工智慧是當前熱門的技術之一，也是網頁設計的趨勢之一。AI可以幫助設計師提高生產力，例如通過AI設計出更好的用戶體驗、優化網站的性能等。

3. 交互式設計（Interactive Design）
交互式設計是指設計師將用戶的參與和互動納入設計過程中，讓用戶更加參與和投入到網站中來。這種設計方式可以提高用戶的參與度和忠誠度，同時也可以提高網站的流量和收益。

4. 設計系統（Design System）
設計系統是指將網站中的所有元素、組件、樣式等進行統一的設計，從而使整個網站的風格、風格、一致性和品質得到保證。設計系統可以提高網站的效率和一致性，同時也可以減少設計和開發的時間和成本。

5. 雙重暗模式（Dark Mode）
雙重暗模式是指在白天和黑夜兩種模式下分別設計不同的網頁樣式。隨著智能手機和智能燈具的普及，雙重暗模式已經成為了一種趨勢。它不僅可以減少眼睛的疲勞，還可以增加
##   ●     响應式設計和移動設備優化
隨著智能手機和平板電腦的普及，越來越多的用戶開始使用移動設備瀏覽網站。因此，網頁設計也越來越重要響應式設計和移動設備優化。響應式設計可以根據設備的不同尺寸和細分率，自動調整整個網站的佈局和內容展示方式，以適應不同的設備。而移動設備優化則可以一步步提高網站的加載速度度和用戶體驗，讓用戶在移動設備上也可以瀏覽網站。
##   ●     設計和開發的整合
在過去，網頁設計和網站開發是兩個獨立的領域，需要不同的人員來負責。但運用這些技術和工具，設計出符合設計原則和網站規劃的網頁，並進行網站建設和優化，將網頁設計和開發的整合，以滿足用戶的需求和期望。在不斷發展的網頁設計領域，設計師需要不斷學習和研究新技術和趨勢，以保持對市場的競爭力，並為用戶提供更好的設計方案和使用體驗。


<a href="1.html#mid/5">上一章</a>
<a href="1.html#mid/7">下一章</a>
`,

'#mid/7':`
<h1>第七章</h1>

<a href="https://github.com/karta9630/wp111b/blob/main/mid/07-%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88%E7%9A%84%E6%A1%88%E4%BE%8B%E5%88%86%E6%9E%90.md" target="_block">Github</a>


#    第七章：網頁設計的案例分析
在本章中，我們將通過分析幾個典型的網頁設計案例，來了解什麼是網頁設計的成功要素以及如何避免網頁設計的失敗。
##  ●      網頁設計的典型案例分析
Apple官方網站：Apple官方網站以其簡潔明瞭的介面和美觀的設計而聞名。它使用了大量的白色和灰色，以及幾乎沒有多餘的文字和圖片，使網站的內容更突出和易於閱讀。同時，網站還使用了大量的高質量圖片和視頻，以展示其產品的美感和功能。

Airbnb官方網站：Airbnb官方網站使用了簡潔明瞭的介面和易於導航的設計，使用戶可以輕鬆地找到他們需要的信息和功能。網站還使用了許多高質量的圖片和視頻，以展示其房源的美感和特色。

Medium：Medium是一個社交媒體平台，以其簡潔明瞭的介面和易於閱讀的文章而聞名。網站使用了大量的白色和灰色，以及許多高質量的圖片和視頻，以增強文章的可讀性和吸引力。
##  ●      網頁設計的成功要素
1. 設計師的專業知識和技能
網頁設計師需要具備專業的知識和技能，包括HTML、CSS、JavaScript等技術，以及設計原則、色彩搭配、字體設計、圖片處理等方面的知識。

2. 網站的易用性和易讀性
網站的易用性和易讀性是設計成功的網站必不可少的要素。網站需要簡潔明瞭，易於理解，並且易於操作。同時，網站需要有良好的排版和字體設計，以確保內容易於閱讀。

3. 網站的設計風格和品牌形象
網站的設計風格和品牌形象是網站成功的重要因素之一。設計師需要根據網站的主題和目標觀眾，選擇合適的設計風格和色彩，以展現出網站的個性和品牌形象。

4. 網站的互動性和多媒體效果
現代網站需要具備良好的互動性和多媒體效果，以吸引和保持訪問者的注意力。這包括動畫、視頻、音頻等多媒體元素，以及互動式表單、滑動效果等互動元素。

5. 網站的易尋性和可搜尋性
網站的易尋性和可搜尋性是網站成功的重要因素之一。網站需要有良好的頁面結構，以便訪問者能夠快速找到所需的內容。同時，網站需要優化內容和關鍵詞，以便搜索引擎能夠更好地索引和排名網站。
##  ●      網頁設計的失敗案例
1. 馬蜂園網站
馬蜂園是中國的一家旅遊網站，它的網頁設計被指為糟糕的例子之一。該網站的設計過於繁複，色彩使用過於花哨，而且在內容結構上也不夠清晰。這些因素結合在一起，讓用戶感到困惑和不知所措，最終影響了網站的流量和業務。

2. 蘋果官方網站
蘋果公司在設計上一直以簡潔、時尚和易用為特色。然而，在2013年推出的iOS 7操作系統後，蘋果的網站設計也發生了一些變化，其中包括字體變大和排版方式變化等等。這些改變導致一些用戶反感，他們認為蘋果的網站變得不再簡潔和易用了。

3. 微軟Windows 8網站
微軟在推出Windows 8操作系統時，為其設計了一個新的官方網站。然而，這個網站的設計被批評為不夠好。該網站的排版方式和色彩搭配過於花哨，讓人難以閱讀和理解。另外，該網站還有一些技術問題，比如頁面加載速度慢等等。

這些網頁設計失敗的案例提醒我們，在設計網頁時，必須注意用戶體驗和技術問題。簡潔明了、易用性和高效性是好的網頁設計的關鍵要素。


<a href="1.html#mid/6">上一章</a>
<a href="1.html#mid/8">下一章</a>
`,

'#mid/8':`
<h1>第八章</h1>

<a href="https://github.com/karta9630/wp111b/blob/main/mid/08-%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88%E7%9A%84%E6%9C%AA%E4%BE%86.md" target="_block">Github</a>


#    第八章：網頁設計的未來
隨著互聯網的快速發展和技術的不斷革新，網頁設計領域也在不斷地變化和發展。本章將探討網頁設計的未來發展趨勢、網頁設計師的發展前景以及網頁設計的未來挑戰。
##   ●     網頁設計的未來發展趨勢
未來網頁設計的發展將繼續朝著簡化、智能化、個性化和多元化的方向發展。以下是一些可能的趨勢：

1. 網站速度和性能
網站速度和性能將繼續是重要的考慮因素，因為這些因素不僅影響用戶體驗，而且還會影響SEO排名。網頁設計師需要學習如何優化網站速度和性能，以確保網站可以快速加載和正常運行。

2. 响應式設計和移動設備優化
隨著移動設備的普及和使用量的增加，响应式設計和移動設備優化的重要性也越來越突出。網頁設計師需要學習如何創建適合不同屏幕尺寸和設備的網站，以提高用戶體驗。

3. 人工智能和自動化
人工智能和自動化技術的應用，可以幫助網頁設計師更快速、更高效地完成工作。例如，使用人工智能可以自動生成網站設計，或者可以使用自動化工具來進行測試和調整。

4. 虛擬和擴增現實
虛擬現實和擴增現實技術的應用將為網頁設計師帶來新的挑戰和機遇。網頁設計師需要學習如何創建具有虛擬現實或擴增現實元素的網站，以提供更豐富、更生動的用戶體驗。
##   ●     網頁設計師的發展前景
網頁設計師是一個不斷發展的職業，未來的發展前景仍然非常樂觀。隨著互聯網技術的不斷更新和普及，網頁設計師將有更多的機會展示他們的創造力和技能。

未來網頁設計師可能需要掌握更多的技能和知識，例如人工智能、虛擬現實、增強現實等新興技術。隨著越來越多的公司將業務轉移到網上，網頁設計師也需要有更多的業務知識和市場認知，以創造更有吸引力和有效的設計方案。

總的來說，網頁設計師的發展前景非常廣闊，前提是他們需要保持更新和進步，學習新技能和應用新技術，以滿足市場需求和客戶要求。
隨著數位科技的快速發展，網頁設計師的發展前景越來越廣闊。網頁設計師不僅可以在企業、政府機構和非營利組織等機構中工作，也可以自行開創事業或加入網頁設計公司。

未來，網頁設計師需要具備的技能將更加多元化和專業化。除了掌握網頁設計的基本技能，還需要具備網站優化、搜索引擎優化、移動設備優化、網站安全等專業知識。同時，網頁設計師也需要不斷學習和掌握新技術和新趨勢，例如AI設計、AR/VR設計、區塊鏈等。

網頁設計師也需要具備良好的溝通和協作能力，能夠與客戶、團隊成員和其他利益相關者進行有效的溝通和協調。另外，網頁設計師也需要具備創造力和設計感，能夠設計出有吸引力、易用性和符合品牌形象的網站。
##   ●     網頁設計的未來挑戰
1. 不斷變化的技術：網頁設計技術在不斷發展和變化，網頁設計師需要不斷學習和更新自己的技術，以跟上最新的潮流和趨勢。
2. 安全問題：隨著互聯網使用的普及和不斷擴大，網路安全問題也越來越突出。網頁設計師需要關注網站的安全性，並採取相應的安全措施。
3. 設計風格的變化：網頁設計風格也在不斷變化和演進，設計師需要緊跟時代的潮流和趨勢，不斷創新和嘗試新的設計風格和元素。
4. 跨平台和跨設備問題：現在人們使用的設備和平台越來越多樣化，從桌面電腦、手機到平板電腦等等，網頁設計師需要考慮如何使網站能夠適應不同的平台和設備，並且保持一致的使用體驗。
5. 國際化問題：網際網路讓人與人之間的距離變得更短，網站的使用者也越來越國際化。設計師需要考慮不同地區和文化背景的用戶的需求和偏好，並且創造出一個符合多元文化的設計。

總之，網頁設計在未來將會不斷發展和進步，設計師需要持續學習和更新自己的技術，並且關注網站的安全性和使用者體驗，以創造出更好的網站設計。


<a href="1.html#mid/7">上一章</a>
<a href="1.html#mid">回期中作業</a>
`,








'#work12':`
<h1>work12</h1> 
<a href="#work12/1">網頁介面</a>
<a href="https://github.com/karta9630/wp111b/blob/main/javascript/work12/1.html">程式碼</a>
`,
'#work12/1':`

<a href="https://karta9630.github.io/wp111b/javascript/work12/1.html" target="_blank" >完整版</a>
<html lang="en">
<head>
  <title>Bootstrap 5 Website Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  <style>
  .fakeimg {
    height: 200px;
    background: #adadad;
  }
  </style>
</head>
<body>

<div class="p-4 bg-dark text-white text-center">
  <h1>Bootstrap 5 Page</h1>
</div>

<nav class="navbar navbar-expand-sm bg-success navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="https://github.com/karta9630 " target="_blank" >github</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.facebook.com/LBBgogo/" target="_blank" >facebook</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.instagram.com/jiahao2364/" target="_blank" >IG</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.nqu.edu.tw/" target="_blank" >金門大學</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h2>關於我</h2>
      <h5>我的相片:</h5>
      <div>
        <img src="3.jpg" class="rounded-circle" width="160" height="150"></img>
      </div>
      <p>金門大學 資工系 戴嘉豪</p>
      <h3 class="mt-4">外部連結</h3>
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="https://github.com/karta9630" target="_blank" >github</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.facebook.com/LBBgogo/" target="_blank" >facebook</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.instagram.com/jiahao2364/" target="_blank" >IG</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="https://www.nqu.edu.tw/" target="_blank" >我的學校</a>
          </li>
      </ul>
      <hr class="d-sm-none">
    </div>
    <div class="col-sm-8">
      <h2>我的Github</h2>
      <h5></h5>
      <img src="1.png" class="fakeimg"></img>
      <h2 class="mt-5">我的學校</h2>
      <img class="fakeimg" src="2.jpg"></img>
      <p>我的學校</p>
      <p></p>
    </div>
  </div>
</div>


</div>
<div class="mt-5 p-3 bg-secondary text-white text-center">
  <a href="https://www.w3schools.com/bootstrap5/bootstrap_templates.php" target="_blank" >這是用W3school的模板形成的</a>
  
</div>

</body>
</html>


`,







}
window.onhashchange = function () {
  let hash = window.location.hash
  main.innerHTML = pages[hash]
}


let htmlInput = "<p>This is a paragraph.</p><div><h1>Title</h1><p>Content</p></div>";







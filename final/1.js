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
  '#0303': `
<h1>3月3日-3月10日</h1>  
  <a href="https://github.com/karta9630/wp111b/blob/main/homework/2023-03-03.html" target="_blank">註冊表單程式碼</a>
  <a href="https://github.com/karta9630/wp111b/blob/main/homework/aboutme.html" target="_blank">about me程式碼</a>
  <a href="#0303/3">css程式碼</a>
  <a href="#0303/4">註冊表單</a>
  <a href="#0303/5">about me</a>
  `,
  '#0303/3': `
  <h2>
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
  
  </h2>
  `,
'#0303/4':`
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
'#0303/5':`
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
    
    function fibonacci(n) {
      if(n<=1)
          return n;
      return (fibonacci(n-2)+fibonacci(n-1));
  }
    `,








  '#0317/2': `
    <h2>isprime</h2>
    <p>  " 
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
'#0324':`
<h1> 3月24日</h1>
<a href="#0324/1">madd.js</a>
<a href="#0324/2">mmul.js</a>
<a href="#0324/3">repeat.js</a>
<a href="#0324/4">vadd.js</a>
<a href="#0324/5">vodt.js</a>

`,
'#0324/1':`
<h2>madd</h2>

var a=[1,4,8,9] ,b=[7,6,3,9];
var all=a.concat(b)
 console.log(all);

`,
'#0324/2':`
<h2>mmul</h2>
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

'#0324/3':`






`,

'#0324/4':`






`,
'#0324/5':`






`,




}
window.onhashchange = function () {
  let hash = window.location.hash
  main.innerHTML = pages[hash]
}


let htmlInput = "<p>This is a paragraph.</p><div><h1>Title</h1><p>Content</p></div>";
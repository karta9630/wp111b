
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
      var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
  let main = document.querySelector('#main')
  let pages={
    '#login':`
    <h1>登入</h1>
    <input type="text" placeholder="帳號"/><br/>
    <input type="text" placeholder="密碼"/><br/>
    <a href="#home">確認</a>
    `,
    '#home':`
    <h1>首頁</h1>
    <p>本網頁可以按功能表去切換畫面</p> `, 
    '#logout':`
    <a href="#home">登出</a> 
    `,
    '#signup':`
    <h1>註冊</h1>
    <input type="text" placeholder="電子郵件"/><br/>
    <input type="text" placeholder="帳號"/><br/>
    <input type="text" placeholder="密碼"/><br/>
    <input type="text" placeholder="電號號碼"/><br/>
    <a href="#login">確定送出</a>
    `,
  }
  
window.onhashchange = function () {
  let hash = window.location.hash
  main.innerHTML = pages[hash]
}
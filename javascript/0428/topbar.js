/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
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
    <input type="text" placeholder="帳號"/><br/>
    <input type="text" placeholder="密碼"/><br/>`,
    '#home':`
    <h1>首頁</h1>
    <p>本網頁可以按功能表去切換畫面</p> `, 
    '#logout':`
    <button >登出</button> 
    `,
  }
  
window.onhashchange = function () {
  let hash = window.location.hash
  main.innerHTML = pages[hash]
}
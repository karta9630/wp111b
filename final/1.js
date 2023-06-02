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

let pages={
    '#0317':`
    <h1>登入</h1>
    <input type="text" placeholder="帳號"/><br/>
    <input type="text" placeholder="密碼"/><br/>
    <a>0 </a>    
    `,
  }
  window.onhashchange = function () {
    let hash = window.location.hash
    main.innerHTML = pages[hash]
    }
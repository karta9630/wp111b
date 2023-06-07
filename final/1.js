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
    <h1>3月17號</h1>
    <a href="#0317/1">work1</a>
    <a href="#0317/2">work2</a>
    <a href="#0317/3">work3</a>
    `,
    '#0317/1':`
    <h1>3月17號</h1>
    
    function fibonacci(n) {
      if(n<=1)
          return n;
      return (fibonacci(n-2)+fibonacci(n-1));
  }
    `,
  }
  window.onhashchange = function () {
    let hash = window.location.hash
    main.innerHTML = pages[hash]
    }

    
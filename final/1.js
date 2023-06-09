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
  '#0303':`
<h1>3月3日-3月10日</h1>  
  <a href="#0303/1">註冊表單程式碼</a>
  <a href="#0303/2">about me程式碼</a>
  <a href="#0303/3">css程式碼</a>
  <a href="#0303/4">註冊表單</a>
  <a href="#0303/5> about me</a>
  `,
  '#0303/1':`

  `,

  '#0317': `
    <h1>3月17號</h1>
    <a href="#0317/1">work1</a>
    <a href="#0317/2">work2</a>
    `,
  '#0317/1': `
    <h1>3月17號</h1>
    <h2>fibonacci</h2>
    
    function fibonacci(n) {
      if(n<=1)
          return n;
      return (fibonacci(n-2)+fibonacci(n-1));
  }
    `,
  '#0317/2': `
    <h1>3月17號</h1>
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

    `
}
window.onhashchange = function () {
  let hash = window.location.hash
  main.innerHTML = pages[hash]
}


let htmlInput = "<p>This is a paragraph.</p><div><h1>Title</h1><p>Content</p></div>";
let inputPassword = document.getElementById("inputPassword")
let eyeIcon = document.getElementById("eyeIcon")

eyeIcon.onclick = function () {
   if (inputPassword.type == 'password') {
      inputPassword.type = 'text'
      eyeIcon.src = 'imgs/eye-open.png'
   }else {
      inputPassword.type = 'password'
      eyeIcon.src = 'imgs/eye-close.png'
   }
}

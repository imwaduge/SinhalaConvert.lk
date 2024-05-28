// For upload image button
const actualBtn = document.getElementById('upimg');

const fileChosen = document.getElementById('fileimg');

actualBtn.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name
})


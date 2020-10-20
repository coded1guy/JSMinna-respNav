let hamBtn = document.querySelector('#ham');
let closeBtn = document.querySelector('#close');
let mobRow = document.querySelector('.row2');

hamBtn.onclick = () => {
    hamBtn.style.display = "none";
    closeBtn.style.display = "block";
    mobRow.style.height = '240px';
    mobRow.style.transition = '.8s';
}
closeBtn.onclick = () => {
    closeBtn.style.display = "none";
    hamBtn.style.display = "block";
    mobRow.style.height = '0';
    mobRow.style.transition = '.6s';
}
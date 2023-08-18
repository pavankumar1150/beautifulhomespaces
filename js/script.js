var navlist = document.getElementById('navitems');
function openmenu() {
    navlist.style.left = '0';
}
function closemenu() {
    navlist.style.left = '-200px';
}
document.querySelector("#menuopen").addEventListener("click", openmenu);
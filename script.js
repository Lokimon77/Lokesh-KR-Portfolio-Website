let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-btn');

const menu_btn = document.getElementById('menu-icon');
const close_btn = document.getElementById('close-icon');
const sidebar = document.querySelector('.nav-links-sidebar');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'null');
}
if(darkmode ==='active'){
    enableDarkmode();
}

themeSwitch.addEventListener("click", ()=>{
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

menu_btn.addEventListener("click", () => {
    sidebar.classList.add('active');
})

close_btn.addEventListener("click", () =>{
    sidebar.classList.remove('active');
})
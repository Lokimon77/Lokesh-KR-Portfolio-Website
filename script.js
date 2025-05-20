//DARKMODE-BTN
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-btn');

//SIDEBAR-BTNS
const menu_btn = document.getElementById('menu-icon');
const close_btn = document.getElementById('close-icon');
const sidebar = document.querySelector('.nav-links-sidebar');

//PROJECT BTNS:
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const github_btn = document.getElementById('github-btn');

//PROJECT LINKS
const p1_link = 'https://github.com/Lokimon77/Twitter-Sentimental-Analysis';
const p2_link = 'https://github.com/Lokimon77/Simple_Calculator';
const p3_link = 'https://github.com/Lokimon77/simple_bank_web_app_using_anvil';
const github_link = 'https://github.com/Lokimon77';

//SIDEBAR-BTNS
const side_home = document.getElementById('navbar-home');
const side_projects = document.getElementById('navbar-projects');
const side_about = document.getElementById('navbar-about');

//NAVBAR-BTNS
const nav_home = document.getElementById('a-home');
const nav_projects = document.getElementById('a-projects');
const nav_about = document.getElementById('a-about');

//PAGES
const home = document.getElementById('hero');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const about = document.getElementById('about');

//NAV-FUCNTIONS
const getHome = () => {
    about.classList.remove('active');
    sidebar.classList.remove('active');
    skills.classList.add('active');
    projects.classList.add('active');
    home.classList.add('active');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const getAbout = () => {
    about.classList.add('active');
    sidebar.classList.remove('active');
    home.classList.remove('active');
    skills.classList.remove('active');
    projects.classList.remove('active');
}
//SIDEBAR-FUNCTIONS
side_home.addEventListener('click', getHome);
side_about.addEventListener('click', getAbout);

//NAVBAR-FUNCTIONS
nav_home.addEventListener('click', getHome)
nav_about.addEventListener('click', getAbout)

//WEBSITE-THEME
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

//SIDEBAR
menu_btn.addEventListener("click", () => {
    sidebar.classList.add('active');
})

close_btn.addEventListener("click", () =>{
    sidebar.classList.remove('active');
})

//PROJECT-LINKS
p1.addEventListener('click', () =>{
    window.open(p1_link, '_blank');
})

p2.addEventListener('click', () =>{
    window.open(p2_link, '_blank');
})

p3.addEventListener('click', () =>{
    window.open(p3_link, '_blank');
})

github_btn.addEventListener('click', () =>{
    window.open(github_link, '_blank');
})

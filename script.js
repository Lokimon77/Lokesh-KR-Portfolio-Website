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
const more_projects = document.getElementById('more-projects');
const github_btn = document.getElementById('github-btn');
const cert_btn = document.getElementById('cert-btn');

//PROJECT LINKS
const p1_link = 'https://github.com/Lokimon77/Twitter-Sentimental-Analysis';
const p2_link = 'https://github.com/Lokimon77/Simple_Calculator';
const p3_link = 'https://github.com/Lokimon77/Lokesh-KR-Portfolio-Website';
const p4_link = 'https://github.com/Lokimon77/simple_bank_web_app_using_anvil';
const p5_link = 'https://drive.google.com/drive/folders/17MAwey7WJ0weLdoSl2ufN8TQLGGE1UrJ?usp=sharing';
const p6_link = 'https://drive.google.com/drive/folders/1DDl34r20vQiKwjMwJEV6rfVpypa4A55X?usp=sharing';
const github_link = 'https://github.com/Lokimon77';

//SIDEBAR-BTNS
const side_home = document.getElementById('navbar-home');
const side_projects = document.getElementById('navbar-projects');
const side_about = document.getElementById('navbar-about');

//NAVBAR-BTNS
const logo = document.getElementById('logo');
const nav_home = document.getElementById('a-home');
const nav_projects = document.getElementById('a-projects');
const nav_about = document.getElementById('a-about');

//PAGES
const home = document.getElementById('hero');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const certificates = document.getElementById('certificates');
const about = document.getElementById('about');
const thank_you = document.getElementById('thank-you');
const hidden_projects = document.querySelectorAll('.project-thumbnails');

//MEDIA BTNS
const linkedin_handle = document.getElementById('m1');
const github_handle = document.getElementById('m2');
const x_handle = document.getElementById('m3');
const insta_handle = document.getElementById('m4');
const email_handle = document.getElementById('m5');

//MEDIA LINKS
const linkedin_link = 'https://www.linkedin.com/in/lokeshkr110477';
const x_link = 'https://x.com/Lokeshkr73?t=rP-ZUD6wJK6KAnHqMf5UZg&s=09';
const insta_link = 'https://www.instagram.com/lokeshkr7x?igsh=anZ1dzBtam1hM2Np';

//LOAD TEXT FILES
fetch('assets/innerhtml_text_files/about_section_text.txt').then(response => response.text()).then(data =>{
    const formatted = data.replace(/\n{2.}/g,'\n\n');

    const about_txt = document.getElementById('about-section-text');
    about_txt.innerHTML = formatted.replace(/\n/g,'<br>');
})
.catch(error => console.error('Error loading the file', error));

//NAV-FUCNTIONS
const getHome = () => {
    home.classList.add('active');
    sidebar.classList.remove('active');
    skills.classList.add('active');
    projects.classList.add('active');
    certificates.classList.add('active');
    thank_you.classList.add('active');
    about.classList.remove('active');
    more_projects.classList.remove('hidden');
    more_projects.classList.add('visible');
    for (let i = 3; i < hidden_projects.length; i++) {
        hidden_projects[i].classList.remove('active');
    };

    thumbnail_container.classList.remove('grid');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const thumbnail_container = document.getElementById('project-thumbnail-container')
const getProjects = () =>{
    home.classList.remove('active');
    sidebar.classList.remove('active');
    skills.classList.remove('active');
    projects.classList.add('active');
    certificates.classList.remove('active');
    thank_you.classList.remove('active');
    about.classList.remove('active');
    more_projects.classList.remove('visible');
    more_projects.classList.add('hidden');
    for (let i = 3; i < hidden_projects.length; i++) {
        hidden_projects[i].classList.add('active');
    };

    thumbnail_container.classList.add('grid');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const getAbout = () => {
    home.classList.remove('active');
    sidebar.classList.remove('active');
    skills.classList.remove('active');
    projects.classList.remove('active');
    certificates.classList.remove('active');
    thank_you.classList.remove('active');
    about.classList.add('active');
    more_projects.classList.remove('hidden');
    more_projects.classList.add('visible');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    thumbnail_container.classList.remove('grid');
}
//SIDEBAR-FUNCTIONS
side_home.addEventListener('click', getHome);
side_about.addEventListener('click', getAbout);
side_projects.addEventListener('click',getProjects);


//NAVBAR-FUNCTIONS
logo.addEventListener('click', getHome);
nav_home.addEventListener('click', getHome);
nav_about.addEventListener('click', getAbout);
nav_projects.addEventListener('click',getProjects);

//OTHER NAVS
more_projects.addEventListener('click', getProjects);

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
const openExternalLink = (link) =>{
    window.open(link, '_blank')
}
p1.addEventListener('click', () =>{
    openExternalLink(p1_link);
});

p2.addEventListener('click', () =>{
    openExternalLink(p2_link);
});

p3.addEventListener('click', () =>{
    openExternalLink(p3_link);
});

p4.addEventListener('click', () =>{
    openExternalLink(p4_link);
});

p5.addEventListener('click', () =>{
    openExternalLink(p5_link);
});

p6.addEventListener('click', () =>{
    openExternalLink(p6_link);
});

github_btn.addEventListener('click', () =>{
    openExternalLink(github_link);
});

cert_btn.addEventListener('click',() =>{
    openExternalLink(linkedin_link);
});

//FOOTER LINKS
linkedin_handle.addEventListener('click', () =>{
    openExternalLink(linkedin_link);
});

github_handle.addEventListener('click', () =>{
    openExternalLink(github_link);
});

x_handle.addEventListener('click', () =>{
    openExternalLink(x_link);
});

insta_handle.addEventListener('click', () =>{
    openExternalLink(insta_link);
});


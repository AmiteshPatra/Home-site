// 0 = Light Theme (Default)
// 1 = Dark Theme
var theme = 0;

function change_theme() {
    const root = document.querySelector(':root');
    const icon = document.getElementById('theme-icon');

    if(theme == 0) {
        root.style.setProperty('--text-color', '#eeeff1');
        root.style.setProperty('--link-color', '#4a76ee');
        root.style.setProperty('--background-color', '#1a1c20');

        theme = 1;

        icon.classList.replace('fa-sun', 'fa-moon');
    }
    else {
        root.style.setProperty('--text-color', '#1a1c20');
        root.style.setProperty('--link-color', '#4a76ee');
        root.style.setProperty('--background-color', '#eeeff1');
    
        theme = 0;
        
        icon.classList.replace('fa-moon', 'fa-sun');
    }
}
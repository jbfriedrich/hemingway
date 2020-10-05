// Get the user's theme preference from local storage, if it's available
const currentTheme = localStorage.getItem("theme");
// If the user's preference in localStorage is dark...
//console.log('Current active theme is: '+currentTheme)

if (currentTheme == "dark") {
  // Set the colors for the dark theme
  set_darktheme();
// Otherwise, if the user's preference in localStorage is light...
} else if (currentTheme == "light") {
  // ...let's set teh colors for the light theme
  set_lighttheme();
}
// Set colors for the dark theme
function set_darktheme() {
    document.documentElement.style.setProperty('--nc-tx-1','var(--nc-d-tx-1)');
    document.documentElement.style.setProperty('--nc-tx-2','var(--nc-d-tx-2)');
    document.documentElement.style.setProperty('--nc-bg-1','var(--nc-d-bg-1)');
    document.documentElement.style.setProperty('--nc-bg-2','var(--nc-d-bg-2)');
    document.documentElement.style.setProperty('--nc-bg-3','var(--nc-d-bg-3)');
    document.documentElement.style.setProperty('--nc-lk-1','var(--nc-d-lk-1)');
    document.documentElement.style.setProperty('--nc-lk-2','var(--nc-d-lk-2)');
    document.documentElement.style.setProperty('--nc-lk-tx','var(--nc--dlk-tx)');
    document.documentElement.style.setProperty('--nc-ac-1','var(--nc-d-ac-1)');
    document.documentElement.style.setProperty('--nc-ac-tx','var(--nc--dac-tx)');
    document.documentElement.style.setProperty('--nc-tx-3','var(--nc-d-tx-3)');
    document.documentElement.style.setProperty('--nc-tag-bg-1','var(--nc-d-tag-bg-1)');
    document.documentElement.style.setProperty('--nc-tag-hv-bg-1','var(--nc-d-tag-hv-bg-1)');
    document.documentElement.style.setProperty('--nc-qu-bo-1','var(--nc-d-qu-bo-1)');
    document.documentElement.style.setProperty('--nc-hljs-1','var(--nc-d-hljs-1)');
}
// Set colors for the light theme
function set_lighttheme() {
    document.documentElement.style.setProperty('--nc-tx-1','#000000');
    document.documentElement.style.setProperty('--nc-tx-2','#1A1A1A');
    document.documentElement.style.setProperty('--nc-bg-1','#FFFFFF');
    document.documentElement.style.setProperty('--nc-bg-2','#F6F8FA');
    document.documentElement.style.setProperty('--nc-bg-3','#E5E7EB');
    document.documentElement.style.setProperty('--nc-lk-1','#0070F3');
    document.documentElement.style.setProperty('--nc-lk-2','#0366D6');
    document.documentElement.style.setProperty('--nc-lk-tx','#FFFFFF');
    document.documentElement.style.setProperty('--nc-ac-1','#79FFE1)');
    document.documentElement.style.setProperty('--nc-ac-tx','#0C4047');
    document.documentElement.style.setProperty('--nc-tx-3','#757575');
    document.documentElement.style.setProperty('--nc-tag-bg-1','var(--nc-bg-2)');
    document.documentElement.style.setProperty('--nc-tag-hv-bg-1','var(--nc-bg-3)');
    document.documentElement.style.setProperty('--nc-qu-bo-1','#2196f3');
    document.documentElement.style.setProperty('--nc-hljs-1','var(--nc-tx-2)');
}
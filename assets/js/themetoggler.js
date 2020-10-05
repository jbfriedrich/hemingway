// Select the button
const btn = document.querySelector(".btn-toggle");
// Check for dark mode preference at the OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Listen for a click on the button 
btn.addEventListener("click", function() {
    if (prefersDarkScheme.matches && currentTheme == 'light'){
        // If we have a user who prefers dark mode, but has set the light theme in
        // localSTorage, we set the dark theme colors and delete the setting
        set_darktheme();
        localStorage.removeItem("theme")
        //console.log('Default is dark, removing setting for '+ currentTheme)
    } else if ((!prefersDarkScheme.matches) && currentTheme == 'dark'){
        set_lighttheme();
        localStorage.removeItem("theme")
        //console.log('Default is light, removing setting for '+ currentTheme)
    } else if (prefersDarkScheme.matches) {
        // ...then toggle the light mode colors
        set_lighttheme();
        var theme = 'light';
        //console.log('Default is dark, activating light theme')
    } else {
        // Otherwise, let's do the same thing, but for dark mode colors
        set_darktheme();
        var theme = 'dark';
        //console.log('Default is light, activating dark theme')
    }
    // Finally, let's save the current preference to localStorage to keep using it
    localStorage.setItem("theme", theme);
    location.reload();
});
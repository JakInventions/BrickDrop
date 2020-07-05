async function launchSplash(){
    let icon = document.querySelector('#splashIcon');
    let splashScreen = document.querySelector('#splash');
    splashScreen.style.display = 'block';
    await fadeIn(icon);
    await sleep(1000);
    await fadeOut(icon);
    splashScreen.style.display = 'none';
}


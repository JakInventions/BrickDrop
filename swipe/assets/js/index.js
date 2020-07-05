window.onload = async () => {
    let preview = document.querySelector('#preview');
    await launchSplash();
    await fadeIn(preview);
}


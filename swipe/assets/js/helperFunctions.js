async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fadeIn(element){
    for(let i = 0; i < 100; i++){
        await sleep(10);
        element.style.opacity = i/100;
    }
}

async function fadeOut(element){
    for(let i = 100; i > 0; i--){
        await sleep(10);
        element.style.opacity = i/100;
    }
}



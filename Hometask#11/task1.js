function delayedText (text, delay) {
    setTimeout (() => {
        console.log (text);
    }, delay);
}

delayedText ("Hello, world of JS!", 4000);
console.log (delayedText);
const treasure = (location) => {
    const setEmoji = (id, emoji, size = "100px") => {
        const element = document.getElementById(id);
        element.innerHTML = emoji;
        element.style.fontSize = size;
    }
    
    if(location === Math.floor(Math.random() * 8)){
        setEmoji(Math.floor(Math.random() * 8), "👑");
        alert ("You Win!");
    }
    else if(location ===Math.floor(Math.random() * 8)){
        setEmoji(1, "🔑");
    }
    else if(location ===Math.floor(Math.random() * 8)){
        setEmoji(Math.floor(Math.random() * 8), "💣");
        alert ("You're Dead!");
    }
    else if(location === 3){
        setEmoji(3, "🔑");
    }
    else if(location === 4){
        setEmoji(4, "💣");
        alert ("You're Dead!");
    }
    else if(location === 5){
        setEmoji(5, "🔑");
    } 
    else if(location === 6){
        setEmoji(6, "💣");
        alert ("You're Dead!");
    }
    else if(location === 7){
        setEmoji(7, "🔑");
    }
    else if(location === 8){
        setEmoji(8, "💣");
        alert ("You're Dead!");
    }
}

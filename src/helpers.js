function choice(items){
    let rand = Math.floor(Math.random() * items.length)
    return items[rand]
}

function remove(items, item){
    for(let i = 0; i < items.length; i++){
        if(items[i] === item){
            let match = item[i];
            items.splice(i, 1);
            return match;
        }
    }
    return undefined;
}

export {choice, remove};
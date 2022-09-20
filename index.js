const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    return cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    return cats.shift(name)
}

function appendCat(name){
    var newCats = cats.slice()
    newCats.push(name)
    return newCats
}

function prependCat(name){
    var newCats = cats.slice()
    newCats.unshift(name)
    return newCats
}

function removeLastCat(name){
    var newCats = cats.slice()
    newCats.pop()
    return newCats
}

function removeFirstCat(name){
    var newCats = cats.slice()
    newCats.shift()
    return newCats
}
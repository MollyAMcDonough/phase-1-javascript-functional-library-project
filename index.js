//takes in an object or array, and a callback function
//passes each element in the collection to the callback
//and returns original collection
function myEach(collection, callback) {
    for(const el in collection) {
        callback(collection[el]);
    }
    return collection;
}

//myEach([1,2,3,4],(el) =>console.log(el))

//takes in an object or array, and a callback function
//passes each element in the collection to the callback
//and returns new array
function myMap(collection, callback) {
    const newArray = Object.values(collection);
    newArray.forEach((val,idx) => newArray[idx] = callback(val));
    return newArray;
}

//takes in an object or array, a callback function, and an optional starting value
//for the accumulaator. passes each element in the collection to the callback
//and returns a single value. 
function myReduce(collection, callback, init = false) {
    const newArray = Object.values(collection);
    let accum = init ? init : newArray[0];
    let start = init ? 0 : 1;
    for (let i = start; i < newArray.length; i++) {
        accum = callback(accum, newArray[i], newArray)
    }
    return accum;
}

//takes in an object or array, and a predicate callback function. 
//Iterates through the collection, passing the values to the callback
//function and returns first true value or undefined if no acceptable elements.
function myFind(collection, predicate) {
    const newArray = Object.values(collection);
    let i = 0;
    let val;
    //iterate through array, pass to predicate, stop when true found
    while (val===undefined && i < newArray.length) {
        if(predicate(newArray[i])) {
            val = newArray[i];
        }
        i++;
    }
    return val;
}

//takes in an object or array, and a predicate callback function. 
//Iterates through the collection, passing the values to the callback
//function and returns array of matching elements. returns empty array
//if no matches.
function myFilter(collection,predicate) {
    const newArray = Object.values(collection);
    const filterArray = [];
    newArray.forEach(val => {
        if(predicate(val)) {
            filterArray.push(val);
        }
    })
    return filterArray;
}

function mySize(collection) {
    return Object.values(collection).length;
}

function myFirst(array, n = 1) {
    if(n===1){
        return array[0];
    } else {
        const subArray = [];
        for (let i = 0; i < n; i++){
            subArray[i] = array[i];
        }
        return subArray;
    }
}

function myLast(array, n = 1) {
    if(n===1){
        return array[array.length-1];
    } else {
        const subArray = [];
        for (let i = array.length - n; i < array.length; i++){
            subArray.push(array[i]);
        }
        return subArray;
    }
}

function myKeys(object) {
    const keys = [];
    for(const key in object) {
        keys.push(key);
    }
    return keys;
}

function myValues(object) {
    const values = [];
    for(const key in object) {
        values.push(object[key]);
    }
    return values;
}
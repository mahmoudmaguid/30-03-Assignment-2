
function toArray(obj) {
    
    
    var arrayFromObject = []; /* I declare an Array */
    
    /* then here I target the object Properties names and return an array of a given object's own enumerable property name , then i pushed them in pairs in array looping with forEach*/
    Object.keys(obj).forEach(i => arrayFromObject.push([i, obj[i]]));
    
    return arrayFromObject;
}

/* now i will test the function */


console.log( toArray({ a: 1, b: 2 }));

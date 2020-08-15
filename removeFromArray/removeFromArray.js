const removeFromArray = function(...args) {
    let array = args.shift();
    
    for (let i = 0; i < array.length; i++) {
        for (arg of args) {
            if (args.includes(array[i])) {
                array.splice(i, 1);
            }
        }
    }
    return array;   
 }

module.exports = removeFromArray

//flatten the input dictionary

// var obj = {
//     key1: "1",
//     key2: {
//         a: "anna",
//         k: {
//             "r":"yep"
//         }
//     }
// };

// {
//     key1:"1",
//     key2.a:"anna",
//     key2.k.r: "yep"
// }


var flatten = function (obj) {
    
    var result = {};
    
    var inner = function (obj, prefix) {
        
        for (var key in obj) {
            if (typeof obj[key] === "string") {
                result[prefix + key] = obj[key];
            } else {
                inner(obj[key],prefix + key + ".");
            }
        }
        
    };
    inner(obj,"");
    return result;
    
};

console.log(flatten(obj));
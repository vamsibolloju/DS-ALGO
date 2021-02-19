const user = {
    name: "vamsi",
    address: {
        personal: {
            location: {
                area: "KPHB"
            }
        }
    }
};

const finalObject = {};

function getFinalObject(obj, parent){
    for(var key in obj){
        if(typeof obj[key] === 'object'){
            getFinalObject(obj[key], `${parent}-${key}`);
        } else {
            finalObject[`${parent}-${key}`] = obj[key];
        }
    }
}

getFinalObject(user, 'user');
console.log(finalObject);

//1.ObjectComparison

function myFunc(obj1,obj2){
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if(keys1.length !== keys2.length){
        return false
    }
    for(let val of keys1){
        if(obj1[val] !== obj2[val])
        return false;
    }
     return true;
    } 
    const obj1 = {name : "Person 1",age : 5}
    const obj2 = {age: 5,name:"Person 1"}
    
    const output = myFunc(obj1,obj2)
    console.log(output)
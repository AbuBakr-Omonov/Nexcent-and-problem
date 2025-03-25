//1-masala
{
    function createUser(name, age) {
    return {
        name: name,
        age: age,
        isAdmin: false
    };
  }
  onsole.log(createUser("John", 25));
}
//2-masala
{
    const sumNumbers = (...numbers) =>  numbers.reduce((sum, num) => sum + num, 0);
    console.log(sumNumbers(3, 4, 6)); 

}
//3-masala
{
    function displayUserInfo(user) {
        const { name, age } = user; 
        return `Name: ${name}, Age: ${age}`;
    }
    const user = { name: "John", age: 30 };
    console.log(displayUserInfo(user));  
}
//4-masala
{
    const objectToArray = obj =>  Object.entries(obj)
    const obj = { name: "Ali", age: 25 };
    console.log(objectToArray(obj));
}
//5-masala
{
    const getKeysAndValues = obj => Object.keys(obj)
    const obj = {a:1,b:2,c:3};
    console.log(getKeysAndValues(obj));
    
}
//6-masala
{
    const sumPositiveValues = obj =>Object.values(obj).filter(num => num > 0).reduce((sum, num) => sum + num, 0);
    const obj = {a:-5,b:10,c:15}; 
    console.log(sumPositiveValues(obj));
    
}
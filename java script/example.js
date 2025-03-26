// creating objects 

let student = {
    "name" : "chandu",
    "roll_no":29,
    "marks":75.5,
    "subject":"Frontend"
};

console.log(student.name);
console.log(student.roll_no);
console.log(student.marks);
console.log(student.subject);

//Adding and deleting the properties

student.mobile_no = 8499966055;
student.subject1 = "java Script";

delete student.roll_no;

console.log(student.mobile_no);
console.log(student.subject1);
//console.log(student.roll_no);

// creating proprety

let bike ={
    "company":"Honda",
    "model":"bs6",
    "price":100000
};

function hasProperty(bike,key){
    return key in bike;
}

console.log(hasProperty(bike,"company"));
console.log(hasProperty(bike,"model"));
console.log(hasProperty(bike,"price"));
console.log(hasProperty(bike,"cost"));

//looping in objects

let mobile = {
    "model":"Samsung",
    "size":7.8,
    "price":150000,
    "battery":5000,
    "process":"snapdragon 8 gen3"
};

for (let values in mobile){
    console.log(`${values}: ${mobile[values]}`);
}

//counting in objects

function countfun(mobile){
    let count = 0;
    for (let key in mobile){
        count++;
    }
    return count;
}

console.log(countfun(mobile));

//objects with methods

let calculate ={
    "num1":15,
    "num2":5,
    add() {
        return this.num1+this.num2;
    },
    subtract() {
        return this.num1-this.num2;
    }
};

console.log(calculate.add());
console.log(calculate.subtract());

//cloaning an object

let data = {
    "name":"chandu",
    "no":47,
    "marks":83.8
};

function cloneobj(data){
    clone = {}
    for (let infor in data){
        clone[infor] = data[infor];
    }
    return clone;
}

let dataclone = cloneobj(data);
console.log(dataclone);


//merging objects

let car = {
    "wheels":4,
    "model":"bmw",
    "price":13928766
};

let duke ={
    "wheels":2,
    "engine":"150cc",
    "cost":386832
};


let merges = Object.assign({},car,duke);
console.log(merges);

//objects with default values

function createUser(name,age,role="developer"){
    return{
        name:name,
        age:age,
        role:role
    };
}

let newUser = createUser("chandu",22);
console.log(newUser);

//nested objects

let institue = {
    "name" : "codegnan destination",
    students :[
        {"name":"chandu","batch":"JFS23"},
        {"name":"Pranay","batch":"DA5"}
    ] 
};

console.log(institue.name);
console.log(institue.students[0].name);
console.log(institue.students[1].batch);

//con verting objects to arrays

let fruitPrices = {
    apple: 2,
    banana: 1,
    cherry: 3
  };
  
  function getKeys(fruitPrices) {
    return Object.keys(fruitPrices);
  }
  
  function getValues(fruitPrices) {
    return Object.values(fruitPrices);
  }
  
  console.log(getKeys(fruitPrices));   
  console.log(getValues(fruitPrices));


//sorting object properties

let salaries = {
    Chandu: 200,
    Prany: 150,
    Indra: 300
  };
  
  function sortSalaries(salaries) {
    return Object.keys(salaries).sort((a, b) => salaries[a] - salaries[b]);
  }
  
  console.log(sortSalaries(salaries));  
  
  // destururing objects

  let place = {
    name: "Chandu",
    age: 25,
    city: "Delhi"
  };
  
  let { name, age, city } = place;
  
  console.log(name);  
  console.log(age);   
  console.log(city); 

  //nested object descturing

  let address = {
    name: "Chandu",
    age: 22,
    address: {
      street: "sadar patel",
      area: "Nizampet",
      zipCode: 500002
    }
  };
  
  let { address: { street, locality, zipCode } } = address ;
  
  console.log(street); 
  console.log(locality);   
  console.log(zipCode);
  
  //merging 2 objects using spread syntax

  let user1 = { name: "Chandu", age: 22 };
let user2 = { city: "delhi", country: "india" };

let mergedUser = { ...user1, ...user2 };

console.log(mergedUser);  

//Fressing an object

let settings = {
    theme: "dark",
    fontSize: "16px",
    language: "en"
  };
  
  Object.freeze(settings);
  
  settings.theme = "light"; 
  console.log(settings);    

  //object entities

  let scores = {
    math: 90,
    english: 80,
    science: 85
  };
  
  let scoreEntries = Object.entries(scores);
  console.log(scoreEntries);

  //modifying object values

  let team = {
    player1: 5,
    player2: 10,
    player3: 7
  };
  
  function updateScore(obj, increment) {
    for (let key in obj) {
      obj[key] += increment;
    }
  }
  
  updateScore(team, 3);
  console.log(team);  

  //object method with this

  let rectangle = {
    width: 10,
    height: 5,
    area() {
      return this.width * this.height;
    }
  };
  
  console.log(rectangle.area());  

  //find max property value

  let products = {
    "laptop": 1000,
    "phone": 500,
    "tablet": 700
  };
  
  function findMaxPrice(obj) {
    let maxPrice = 0;
    let maxProduct = "";
  
    for (let key in obj) {
      if (obj[key] > maxPrice) {
        maxPrice = obj[key];
        maxProduct = key;
      }
    }
  
    return maxProduct;
  }
  
  console.log(findMaxPrice(products));  

  
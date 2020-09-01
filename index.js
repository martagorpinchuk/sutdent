//import {hello} from './hello.js';

//let val = hello();

// async function for the first button 'click me'
function hey() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hey');
      }, 200);
    });
};
  
function there() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('there');
      }, 300);
    });
};
  
function student() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('student)');
      }, 500);
    });
};
  
async function msg() {
    const a = await hey();
    const b = await there();
    const c = await student();
  
    alert(`${ a } ${ b } ${ c }`);
};
  

// async function for the button 'lectures' 
function good() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Good ");
        }, 400);
    })
};

function forYou() {
    return new Promise(resolve => {
        resolve("for you");
    }, 200);
};

async function lectures() {
    const a = await good();
    const b = await  forYou();

    alert(`${ a } ${ b }`);
};

// async function for the button 'partys'
function you() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('You should be ');
        }, 200);
    })
};

function studying() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('studying more!');
        }, 100);
    })
};

async function partys() {
    const a = await you();
    const b = await studying();

    alert(`${ a } ${ b }`);
};


//Handle err
function yesPromise() {
    return new Promise((resolve, reject) => {
      const val = Math.round(Math.random() * 1); // 0 or 1, at random
  
      val ? resolve('Yes, you are right!!') : reject('Nope 😠');
    });
};

function noPromise() {
    return new Promise((resolve, reject) => {
      const val = Math.round(Math.random() * 1); // 0 or 1, at random
  
      val ? resolve('Sorry, you\'ve chosen wrong specialty') : reject('You\'r right');
    });
};

function noWork() {
    return new Promise((resolve, reject) => {
      const val = Math.round(Math.random() * 1); // 0 or 1, at random
  
      val ? resolve('You`r right!!') : reject('Sorry but no :c');
    });
};
  
async function yes() {
    try {
      const msg = await yesPromise();
      console.log(msg);
    } catch(err) {
      console.log(err);
    }
};

async function no() {
    try {
      const msg = await noPromise();
      console.log(msg);
    } catch(err) {
      console.log(err);
    }
};

async function maybe() {
    try {
      const msg = await noWork();
      console.log(msg);
    } catch(err) {
      console.log(err);
    }
;}


//classes
class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(this.name);
    }
  
};

class Student extends User {
    constructor(name, lastname) {
        super(name);
        this.lastname = lastname;
    }

    sayHiStudent() {
        console.log("Hi student " + this.name + this.lastname)
    }
};
  
  // Usage:
let user = new User("John");
let students = new Student("Sam", "Smith");

user.sayHi();
students.sayHiStudent();


// first closure
//global Lexical Environment
//{ firstCourse = fn, ... }

function firstCourse() {
  marksFirstCourse = 57;
  //firstCourse Lexical Environment
  //{marksFirstCourse = 57, secondCourse = fn }
  function secondCourse() {
    marksSecondCourse = 80;
    //secondCourse Lexical Environment
    //{  marksSecondCourse = 80, thirdCourse = fn }
    function thirdCourse() {
      marksThirdCourse = 77;
      // thirdCourse Lexical Environment
      //{ marksThirdCourse = 77 }
      console.log(( marksFirstCourse + marksSecondCourse + marksThirdCourse ) / 3) ;
    }
    thirdCourse();
  }
  secondCourse();
};

firstCourse();


//second closure

//global Lexical Environment
//{noFood: fn, ...}

function noFood() {
  food = []

  //noFood Lexical Environment
  //{food: [], getFood: fn}

  function getFood() {

    //getFood Lexical Environment
    //{}

    food.push("pizza");
    food.push("apple");
    console.log(food);
  }

  getFood();

};

noFood();


//third closure

//global Lexical Environment
//{noFun: fn}

function noFun() {

  friends = 0;

  //noFun Lexical Environment
  //{friends: 0, getFriends: fn}

  function getFriends() {
    friends++
    console.log(friends)
    //getFriends Lexical Environment
    //{}

  }
  getFriends();

};

noFun();
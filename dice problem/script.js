//console.log('Hello World');

// //1)
// function calculatenum(birthYear){
//     return 2018 - birthYear
// }

// var result = calculatenum(1990)
// console.log(result);

// function yearsRetirement(year, firstName){
//     var agee = calculatenum(year)
//     var retirement = 90-agee

//     if(retirement > 0){
//         console.log(firstName + 'retires in' + retirement);
//     } else {
//         console.log(firstName + 'is already retired');
//     }
// }

// yearsRetirement(1992, John)

//2)

// var john = {
//     name: 'Anuja',
//     place: 'Bangalore',
//     birthyear: 1992,
//     ageCal: function() {
//         this.age = 1998 - this.birthyear
//     }
// }

// john.ageCal()
// console.log(john)

// // 3)
// var john = {
//     name: 'Anuja',
//     place: 'Bangalore',
//     height: 1.95,
//     mass: 110,    
//     calBmi: function() {
//         this.bmi = this.mass /(this.height * this.height);
//         return this.bmi;
//     }
// }

// var ben = {
//     name: 'Swati',
//     place: 'Bangalore',
//     height: 1.69,
//     mass: 78,
//     calBmi: function() {
//         this.bmi = this.mass /(this.height * this.height);
//         return this.bmi;
//     }
// }

// if(john.calBmi() > ben.calBmi()){
//     console.log(john.name + ' has a higher BMI of ' + john.bmi);
// } else if (ben.bmi > john.bmi){
//     console.log(ben.name + ' has a higher bmi of ' + ben.bmi);
// } else {
//     console.log('They have the same bmi');
// }

// // 4) hoisting

// calAvg(1995)

// function calAvg(year){
//     console.log(2019 - year);
// }

// var retirement = function calYear(year){
//     console.log(2019 - year)
// }
// retirement(1996)

// var age = 23;

// function ageCal(){
//     var age = 25;
//     console.log(age)
// }

// ageCal()
// console.log(age)

// // 5) scoping
//  var john = {
//      name: 'John',
//      yearBirth: 1998,
//      calAge: function (){
//         console.log(2019 - this.yearBirth)
//         console.log (this)
//      }
//  }

//  john.calAge()

//  var Mike = {
//      name: 'Mike',
//      yearBirth: 1994
//  }

//  Mike.calAge = john.calAge

//  Mike.calAge()

// 6) prototype chain
// var john = {
//     name: 'john',
//     yearOfBirth: 1998,
//     job: 'teacher'
// }

// var Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // this.calculateAge = function() {
//     //     console.log(2019 - this.yearOfBirth)
//     // }
// }

// Person.prototype.calculateAge = function() {
//     console.log(2019 - this.yearOfBirth)
// }

// Person.prototype.lastName = 'Smith'

// var john = new Person('john', 1998, 'teacher')
// var Jane = new Person('jane', 2011, 'Designer')
// var Mark = new Person('Mark', 2013, ' Retired')

// john.calculateAge()
// Jane.calculateAge()
// Mark.calculateAge()

// console.log(john.lastName);
// console.log(Jane.lastName);
// console.log(Mark.lastName);

// //7) objects.create

// var PersonProto = {
//     calculateAge: function () {
//         console.log(2019 - this.yearOfBirth)
//     }
// }

// var John = Object.create(PersonProto)

// John.name = 'John';
// John.yearOfBirth = 1998;
// John.job = 'Teacher'

// var Jane = Object.create(PersonProto, {
//     name: {value: 'Jane'},
//     yearOfBirth: {value: 1998},
//     job: {value: 'teacher'}
// }) 

// // 8) primitive vs objects

// //primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// //objects
// var obj1 = {
//     name: 'John',
//     age: 28
// }

// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// //functions
// var age = 28;
// var obj = {
//     name: 'John',
//     city: 'Lisbon'
// }

// function change(a,b){
//     a = 30;
//     b.city = 'San-Francisco'
// }

// change(age, obj);
// console.log(age);
// console.log(obj.city);

// // 9) Build real projects
// var years = [1998, 1999, 2000, 2001];

// function calculateAge(arry, fn){
//     var arrResult = [];
//     for(i = 0; i < arry.length; i++){
//         arrResult.push(fn(arry[i]));
//     }
//     return arrResult;
// }

// function calcu(el){
//     return 2019 - el;
// }

// function fullAges(el){
//     return el >= 20
// }

// function isHeartRate(el){
//     if(el >= 20 && el <= 22){
//         return Math.round(206.3 - (0.67 * el));
//     } else {
//         return -1;
//     }    
// }

// var value = calculateAge(years, calcu);
// console.log(value);

// var full = calculateAge(value, fullAges);
// console.log(full);

// var rate = calculateAge(value, isHeartRate);
// console.log(rate);

// // 10) class function

// function interviewQuestion(job){
//     if( job === 'Designer'){
//         return function(name){
//             console.log(name + ' can you please explain what UX design is.')
//         }
//     } else if (job === 'Teacher'){
//         return function(name) {
//             console.log(' what subject do you teach ' + name)
//         }
//     } else {
//         return function(name){
//             console.log('Hello' + name + 'what do you do?')
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('Teacher');
// teacherQuestion('John')

// var designerQuestion = interviewQuestion('Designer');
// designerQuestion('John')
// designerQuestion('Jane')
// designerQuestion('Mark')
// designerQuestion('Mike')

// interviewQuestion('Teacher')('Mark')

// // 11)Immediately invoked function

// // function game(){
// //     var score = Math.random() * 10;
// //     console.log(score >= 5);
// // }
// // game();

// (function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// // console.log(score);

// (function (goodLuck){
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

// // 12) Closures
// function retirement(retirementAge) {
//     var a = ' Years left';
//     return function (YearOfBirth) {
//         var age = 2019 - YearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// retirementUS(1998);

// //retirement(66)(1998);

// var retirementGermany = retirement(56);
// retirementGermany(1998);


// var retirementIreland = retirement(90);
// retirementIreland(1998);

// function interviewQuestion(job) {
//     return function (name) {
//         if (job === 'Designer') {
//             console.log(name + ' can you please explain what UX design is.')
//         } else if (job === 'Teacher') {
//             console.log(' what subject do you teach ' + name)
//         } else {
//             console.log('Hello' + name + 'what do you do?')
//         }
//     }
// }

// interviewQuestion('Teacher')('John');

// // 13) Bind, call and apply

// var john = {
//     name: 'john',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay){
//         if(style === 'formal'){
//             console.log('good ' + timeOfDay + ', ladies and gentlemen. I\'m ' + this.name + '. I\'m a ' + this.job)
//         } else if( style === 'friendly'){
//             console.log('Hey what\'s up? I\'m ' + this.name + ' my age is ' + this.age)
//         }
//     }
// }

// john.presentation('formal', 'morning');


// //call method
// var emily = {
//     name: ' emily',
//     age: 36,
//     job: 'friendly'
// }

// john.presentation.call(emily, 'friendly', 'goodafternoon');

// //john.presentation.apply(emily, ['friendly', 'goodafternoon']);

// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('morning');
// johnFriendly('night');

// var emilyFriendly = john.presentation.bind(emily, 'formal');
// emilyFriendly('afternoon');

// var years = [1998, 1999, 2000, 2001];

// function calculateAge(arry, fn){
//     var arrResult = [];
//     for(i = 0; i < arry.length; i++){
//         arrResult.push(fn(arry[i]));
//     }
//     return arrResult;
// }

// function calcu(el){
//     return 2019 - el;
// }

// function fullAges(limit, el){
//     return el >= limit;
// }

// var ages = calculateAge(years, calcu)
// var fullJapan = calculateAge(ages, fullAges.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);

// // 14) problem solving
// // we write this function in order to keep it private (function(){ ..... })();

// (function(){

//     function Question(question, answer, correct){
//         this.question = question;
//         this.answer = answer;
//         this.correct = correct;
//     }

//     Question.prototype.displayQuestion = function() {
//         console.log(this.question);
//         for(var i = 0; i< this.answer.length; i++) {
//             console.log(i + ':' + this.answer[i]);
//         }
//     }

//     Question.prototype.checkAnswer = function(ans) {
//         if(ans === this.correct){
//             console.log('Correct answer!');
//         } else {
//             console.log('wrong answer. Try again!');
//         }
//     }

//     var q1 = new Question('Is javascript the coolest programming language in the world', ['yes', 'no'], 0);

//     var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michale','Mark'], 2);

//     var q3 = new Question('What does best describe coding', ['boring','Hard','fun','tedious'], 2);

//     var questions = [q1, q2, q3];

//     var n = Math.floor(Math.random() * questions.length);

//     questions[n].displayQuestion();

//     var answer = parseInt(prompt('Please select the corect answer.'));

//     questions[n].checkAnswer(answer);

// })();

// // 15) problem 2:
// (function () {

//     function Question(question, answer, correct) {
//         this.question = question;
//         this.answer = answer;
//         this.correct = correct;
//     }

//     Question.prototype.displayQuestion = function () {
//         console.log(this.question);
//         for (var i = 0; i < this.answer.length; i++) {
//             console.log(i + ':' + this.answer[i]);
//         }
//     }

//     Question.prototype.checkAnswer = function (ans, callback) {
//         var sc;
//         if (ans === this.correct) {
//             console.log('Correct answer!');
//             sc = callback(true);
//         } else {
//             console.log('wrong answer. Try again!');
//             sc = callback(false);
//         }
//         this.displayScore(sc);
//     }

//     Question.prototype.displayScore = function(score) {
//         console.log('Your current score is ' + score);
//         console.log('------------');
//     }

//     var q1 = new Question('Is javascript the coolest programming language in the world', ['yes', 'no'], 0);

//     var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michale', 'Mark'], 2);

//     var q3 = new Question('What does best describe coding', ['boring', 'Hard', 'fun', 'tedious'], 2);

//     var questions = [q1, q2, q3];

//     function score() {
//         var sc = 0;
//         return function(correct) {
//             if(correct){
//                 sc++ ;
//             }
//             return sc;
//         }
//     }

//     var keepScore = score();

//     function nextQuestion() {
//         var n = Math.floor(Math.random() * questions.length);
//         questions[n].displayQuestion();
//         var answer = prompt('Please select the correct answer.');        

//         if(answer !== 'exit'){
//             questions[n].checkAnswer(parseInt(answer), keepScore);
//             nextQuestion();
//         }        
//     }
//     nextQuestion();
// })();


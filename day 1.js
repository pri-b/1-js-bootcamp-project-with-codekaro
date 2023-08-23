// -- 1st assignment --

let fruits = []
fruits.push('apple', 'banana', 'orange')
fruits.splice(0, 1)
fruits.push('grape')
fruits.splice(1, 1, 'pear')
console.log(fruits)

// -- 2nd assignment --

let person = {
    name: 'John',
    age: 30,
    city: 'New York',
}
delete person.age
person.job = 'Engineer'
person.city = 'San Francisco'
console.log(person)

//  -- 3rd assignment --

let cars = []
cars['make'] = 'Toyota'
cars['model'] = 'Camery'
cars['year'] = 2018
delete cars.make
cars['make'] = 'Honda'
cars['model'] = 'Civic'
cars['year'] = 2020
cars.model = 'Accord'
console.log(cars)

let userdetail = {
    name: 'raju',
    email: 'raju@mail.com',
    age: 35,
    password: '3567754',
    'phone-no': '3337775551'
};

console.log(userdetail.email);
console.log(userdetail['age']);
console.log(userdetail['phone-no']);

userdetail.address = 'Lucknow';  //way to add new key
console.log(userdetail);

let [ brand, model, price, color] = ['samsung', 'S22', 79999, 'black'];

let smartphone = {
    brand,
    model,
    price,
    color
}

console.log(smartphone);
smartphone.model = 'S23 pro'
smartphone.color = ['red', 'blue','black'];

console.log(smartphone);
 
console.log(smartphone.color[1]);

// add new color

smartphone.color.push('grey');
console.log(smartphone);



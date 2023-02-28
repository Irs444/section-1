const myarr = [ 'apple', 346, 56.34, true,Math];
// console.log(myarr);

const movies = [ 'Drishyam', 'Don','Pathan','Avatar'];

console.log(movies);
// indexing
console.log(movies[3]);
console.log(movies.length);
// console.log(movies[movies.length-1]);
console.log(movies.at(2));

// slicing

console.log(movies.slice(1,3 ));
console.log(movies.slice(1,-1 ));
console.log(movies.slice(1, ));
console.log(movies.slice(1,30));

// adding elements

movies.push('Flash');  //add elements to the end of array
console.log(movies);

movies.unshift('Dhol')  //add element to the start of array
console.log(movies);

console.log(['KGF2', ...movies, 'KGF']);
console.log([ ...movies.slice(0, 2), 'Don2', ...movies.slice(3)]);

// removing element

movies.pop()  //remove the element from last of the array
movies.shift()  //remove element from the start
console.log(movies);

movies.splice(1,2);  //first is index and 2 is no of element
console.log(movies);

console.log(movies.indexOf('Avatar'));  //removing specific movies
movies.splice(movies.indexOf('Avatar'), 1);

console.log(movies );
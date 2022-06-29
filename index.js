
/*  Number of People in the Bus

There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list(or array) of integer pairs.Elements of each pair represent number of people get into bus(The first item) and number of people get off the bus(The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station(after the last array).Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there: D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.*/


const number = (busStops) => { 

    let totalPeople = 0

    for (let i = 0; i < busStops.length; i++) {
        let currStop = busStops[i];
        let getOn = currStop[0];
        let getOff = currStop[1];

        totalPeople += getOn;
        totalPeople -= getOff;

    }

    return totalPeople

}

/* 
Count by X

Create a function with two arguments that will return an array of the first(n) multiples of(x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array(or list in Python, Haskell or Elixir). */

const countBy = (x, n) => {

    let z = []
    let index = 1;

    while (z.length < n) {
        z.push(x * index);
        index++;

        console.log("length=" + z.length)

    }

    return z;

}


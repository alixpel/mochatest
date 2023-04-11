// const utils = require('./utils');

// it("Should add two numbers", () => {
//     var res = utils.add(11, 33);
//     if(res !== 44)
//     throw new Error(`Expected 44, but got ${res}`);
// });

// it("Should square a number", () => {
//     var res = utils.square(4);
//     if (res != 16)
//     throw new Error (`Expected 16, bit got ${res}`);
// });

// OR

const {add, square, asyncAdd, asyncSquare} = require('./utils');

it("Should add two numbers", () => {
    var res = add(11, 33);
    if(res !== 44)
    throw new Error(`Expected 44, but got $(res)`);
});

it("Should square a number", () => {
    var res = square(4);
    if (res != 16) {
        throw new Error (`Expected 16, got ${res}`);
    }
});


// shorter with 'expect' module :

const expect = require('expect');

// it("Should add two numbers", () => {
//     var res = add(11, 33);
//     expect(res).toBe(44);
// });

// it("Should square a number", () => {
//     var res = square(4);
//     expect(res).toBe(16);
// });

it("Should add two numbers, async", (done) => {
    asyncAdd(4, 8, (sum) => {
        expect(sum).toBe(12);
        done();
    })
});

it("Should square a number, async", (done) => {
    asyncSquare(2, (square) => {
        expect(square).toBe(4);
        done();
    })
});
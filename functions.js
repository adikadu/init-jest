const axios = require('axios');

const sum = (a, b) => a + b;
const sub = (a, b) => a-b;
const mul = (a, b) => a*b;
const isNull = (a, b) => null;
const checkValue = x=> x;
const NotExecute = () => console.log("This function will not be covered. So coverage report will show this function as not covered.");
const createUsr = () => {
    const usr = {firstName: 'Aditya'};
    usr['lastName'] = 'Kadu';
    return usr;
};
const fetchUser = () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res=>res.data)
    .catch(err => 'error');
const NotExecute2 = () => console.log("This function will not be covered. So coverage report will show this function as not covered.");


module.exports = {sum, sub, mul, isNull, checkValue, createUsr, fetchUser, NotExecute, NotExecute2};

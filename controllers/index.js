const awesomeFunction = (req, res, next) => {
    res.json("Claudia Dominguez");
};

const returnAnotherPerson = (req, res, next) => {
    res.json("Super awesome person");
};

module.exports = {awesomeFunction, returnAnotherPerson};
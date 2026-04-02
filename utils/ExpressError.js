class ExpressError extends Error {
    constructor(statusCode, message) {
        super(message); // ⚠️ important
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;


// class ExpressError extends Error {
//   constructor(statusCode, message) {
//     super();
//     this.statusCode = statusCode;
//     this.message = message;
//   }
// }

// module.exports = ExpressError;

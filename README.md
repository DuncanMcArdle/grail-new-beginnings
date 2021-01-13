# New beginnings (backend)

This Node.js application provides a standard CRUD interface, targeted at a use case of storing people in a database. For the sake of usability, said database has been replaced with an in-memory Map.

The application is written in JavaScript ([Node.js](https://nodejs.org/)), with [Jest](https://github.com/facebook/jest 'Jest') used for automated testing.

## Installation & Running

To run the backend, first clone the repo to your local machine. Next, browse to the repo's source folder in a command prompt (or preferably, using VSCode), and do the following:

1. Run `npm install` to install and build the solution
2. Run `npm start` to start the application (or `npm run dev` to start in live-update mode using [nodemon](https://www.npmjs.com/package/nodemon))

The running applicaiton will then expose the following APIs:

-   POST `/api/people/` - Add a person to the system
-   PUT `/api/people/` - Update a person already in the system
-   GET `/api/people/` - Retrieve the details of a person already in the system
-   DELETE `/api/people/` - Delete a person already in the system

None of the above endpoints require any parameters, however a JSON payload should be sent with each request. A sample payload is as follows (note that only the `id` parameter is required for GET and DELETE requests):

    {
        "id":  "Original ID",
        "name":"Original name",
        "DOB":"2021-01-01",
        "phoneNumber":"07777777777",
        "address":"123 Somename Road"
    }

In addition, a [Postman](https://www.postman.com/) export is provided in the root directory (`postman.json`). It contains pre-made requests to utilise all of the above endpoints, and was generated in the Postman 2.1 format using Postman 7.36.1.

## Linting & Testing

The application is configured for usage with ESLint, Prettier and Jest, all of which are covered by the package file. However, for a full experience, it is recommended that you also install these extensions in your IDE (the recommended IDE for this project is Visual Studio Code).

Linting is automatically run before testing, so to perform both, simply run `npm test`.

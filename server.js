// Import libraries
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
// Import files
const schema = require("./schema");
// Define variables and functions
const app = express();
const port = process.env.PORT || 5000;
// Define Middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`App running on port ${port}`));

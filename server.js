// Import libraries
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const path = require("path");
// Import files
const schema = require("./schema");
// Define variables and functions
const app = express();
const port = process.env.PORT || 5000;
// Define Middleware
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(port, () => console.log(`App running on port ${port}`));

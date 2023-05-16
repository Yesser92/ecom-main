const express = require("express");
const cors = require("cors");
const users = require("./Routes/user.js");
const products = require("./Routes/product.js");
const cart = require("./Routes/cart.js");
const category = require("./Routes/category.js");
const sequelize = require("./ORM/index.js");
const promotions = require("./Routes/admin.js");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Use the routes
app.use("/api/users", users);
app.use("/api/products", products);
app.use("/api/cart", cart);
app.use("/api/category", category);
app.use("/api/admin/promotion", promotions);

// Sync with the database and start the server
sequelize
  .sync()
  .then(() => {
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });

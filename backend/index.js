const express = require("express");
const cors = require("cors");
const users = require("./Routes/user.js");
const products = require("./Routes/product.js");
const cart = require("./Routes/cart.js");
const category = require("./Routes/category.js");
const sequelize = require("./ORM/index.js");
const promotions = require("./Routes/admin.js");
const order = require('./Routes/order.js')
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

const app = express();

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'duxaudba9',
  api_key: '533564744479535',
  api_secret: 'etMaOLHqjzIL5gGqlPrsd9oRvug'
});

// Configure Multer for file upload
const storage = multer.diskStorage({});

const upload = multer({ storage });

// Define a route for image upload
app.post('/upload', upload.single('image'), (req, res) => {
  // Upload the image to Cloudinary
  cloudinary.uploader.upload(req.file.path, (error, result) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
    }
    // Return the Cloudinary URL for the uploaded image
    res.json({ url: result.secure_url });
  });
});

// Middleware
app.use(express.json());
app.use(cors());

// Use the routes
app.use("/api/users", users);
app.use("/api/products", products);
app.use("/api/cart", cart);
app.use("/api/admin/promotion", promotions);

app.use('/api/category',category)
app.use('/api/orders',order)

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

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/mongo");

dotenv.config({path : "./config/config.env"});

// express application
const app = express();

// allow CORS
app.use(cors());

// Body Parser middleware, no need to install body-parser package
app.use(express.json());

const PORT = process.env.PORT || 8080;

// Routes
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const adminRoutes = require("./routes/jounRoutes");
// const internshipRoutes = require("./routes/internshipRoutes");
// const applicationRoutes = require("./routes/applicationRoutes");

app.use("/user", userRoutes);
app.use("/blog", blogRoutes);
app.use("/admin", adminRoutes);
// app.use("/internship", internshipRoutes);
// app.use("/application", applicationRoutes);
app.get("/", (req, res) => {
    res.send("Media XcitEdu backend working");
    console.log("Media XcitEdu backend working");
    console.log(process.env.MONGO_URI);
})
app.listen(PORT, () => {
    console.log(`XcitEdu Media Server is running on : http://localhost:${PORT} `);
    // Connecting to mongodb server
    connectDB();
});
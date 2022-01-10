import express from "express";
import homeController from "../controllers/HomeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send("Hello World")
    });

    router.get("/home", homeController.getHomePage);
    router.get("/about", homeController.getAbout);

    return app.use("/", router);
}

module.exports = initWebRoutes
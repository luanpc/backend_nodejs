import express from "express";
import homeController from "../controllers/HomeController";
import userController from "../controllers/UserController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAbout);
    router.get("/crud", homeController.getCRUD);

    router.post("/post-crud", homeController.postCRUD);
    router.get("/get-crud", homeController.displayGetCRUD);
    router.get("/edit-crud", homeController.getEditCRUD);
    router.post("/put-crud", homeController.putCRUD);
    router.get("/delete-crud", homeController.deleteCRUD);

    router.post("/api/login", userController.handleLogin);


    return app.use("/", router);
}

module.exports = initWebRoutes
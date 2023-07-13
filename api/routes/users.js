import express from "express";
import {
    updateUser,deleteUser,getUser,getUsers,userByusername,userByemail
} from "../controllers/user.js"
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/findusername", userByusername);
router.get("/findemail", userByemail);
// //UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id",verifyUser,deleteUser)
//GET
router.get("/:id",verifyUser,getUser);
//GET ALL
router.get("/", verifyAdmin, getUsers);
export default router;
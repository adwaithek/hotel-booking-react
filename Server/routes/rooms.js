// import express from "express"
// import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
// import { verifyAdmin } from "../utils/verifyToken.js";

// const router=express.Router();



// //create
// router.post("/:hotelId", verifyAdmin,createRoom)

// //update
// router.put("/:id",verifyAdmin, updateRoom);


// ///delete
// router.delete("/:id", verifyAdmin,deleteRoom);


// //get

// router.get("/:id", getRoom);

// //getall

// router.get("/", getRooms);

 




// export default router


import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);

export default router;
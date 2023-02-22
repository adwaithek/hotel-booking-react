// import express from "express"
// import { countByCity, countByType, createHotel,
//      deleteHotel,
//       getHotel,
//        getHotels,
//         updateHotel } from "../controllers/hotel.js";
// import Hotel from "../models/Hotel.js";
// import { createError } from "../utils/error.js";
// import { verifyAdmin } from "../utils/verifyToken.js";

// const router=express.Router();


// //create
// router.post("/", verifyAdmin,createHotel)

// //update
// router.put("/:id",verifyAdmin, updateHotel);


// ///delete
// router.delete("/:id", verifyAdmin,deleteHotel);


// //get

// router.get("/find/:id", getHotel);

// //getall

// router.get("/", getHotels);
// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);

 


// export default router



import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router; 
// import mongoose from "mongoose";

// const bookingSchema = new mongoose.Schema(
//   {
//     username: {
//       type:String,
//     },
//     email: {
//       type: String,
      
//     },
//     name:{
//         type:String,
//         required:true

//     },
  
//     roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
//     },
//     phone:{
//         type:Number,
//         required:true
//     },
//     bookAt:{
//         type:Date,
//         required:true
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Booking", bookingSchema);





import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    
    arrive: {
      type: Number,
      required: true,
    },
    depart: {
      type: Number,
      required: true,
    }, 
    guestSize: {
      type: Number,
      required: true,
    },
    comments: {
      type: String,
      required: true,
    },

    
    
    



   
   
   
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
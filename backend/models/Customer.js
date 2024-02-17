const mongoose = require("mongoose");
const custSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    date: {
        type: Date,
        },

        status: {
            type: String,
            enum: ["pending", "ongoing", "completed"],
            default: "pending",
          },

          progress: {
            type: Number,
          },
   



    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", custSchema);

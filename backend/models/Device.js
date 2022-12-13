const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
    number:{
        type: Number,
        required: true,
        unique: true,
    },
    Name:{
        type: String,
        required: true,
        unique: true,
    },
});

DeviceSchema.statics.isDeviceinUse = async function (number) {
    if (!number) throw new Error("invalid email");
    try {
      const user = await this.findOne({ number });
      if (user) return false;
  
      return true;
    } catch (error) {
      console.log("error in isDeviceinUse Method", error.message);
      return false;
    }
  };
module.exports = mongoose.model("Device", DeviceSchema);

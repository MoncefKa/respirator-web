const mongoose = require("mongoose");

const IDSchema = new mongoose.Schema({
    idd: {
        type: String,
        required: true,
        unique: true,
    },
});

IDSchema.statics.isIDinUse = async function (idd) {
    if (!idd) throw new Error("invalid email");
    try {
      const user = await this.findOne({ idd });
      if (user) return false;
  
      return true;
    } catch (error) {
      console.log("error in isIDinUse Method", error.message);
      return false;
    }
  };

module.exports = mongoose.model("ID", IDSchema);

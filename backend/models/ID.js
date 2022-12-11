const mongoose = require("mongoose");

const IDSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("ID", IDSchema);

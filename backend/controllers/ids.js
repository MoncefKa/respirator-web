const  ID  = require("../models/ID");

exports.createID = async (req, res) => {
    const { idd } = req.body;
    const newID = await ID.isIDinUse(idd);
    if (newID) {
        const id = await ID({ idd });
        await id.save();
        return res.status(200).json({ message: "ID created" , idd: idd});
    }
    res.status(400).json({ message: "ID already exists" });


};

exports.signin = async (req, res) => {
    const { idd } = req.body;
    const newID = await ID.isIDinUse(idd);
    if (newID) {
        return res.status(400).json({ message: "ID does not exist" });
    }
    res.status(200).json({ message: "ID exists" });
};
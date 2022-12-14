const  ID  = require("../models/ID");
const  Device  = require("../models/Device");

exports.createDevice = async (req, res) => {
    const { number, Name } = req.body;
    const newDevice = await Device.isDeviceinUse(number);
    if (newDevice) {
        const device = await Device({ number, Name });
        await device.save();
        return res.status(200).json({ message: "Device created" , number: number, Name: Name});
    }
    res.status(400).json({ message: "Device already exists" });
};

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
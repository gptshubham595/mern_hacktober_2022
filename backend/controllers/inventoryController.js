import Inventory from "../models/inventory.js";




const getAllInventory = async (req, res, next) => {
    try {
        const inventoryDetails = await Inventory.find();
        return res.status(200).json({
            success: true,
            data: inventoryDetails,
            msg: 'Inventory details fetched successfully!'
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error',
            msg: err            
        })
    }
}


export { getAllInventory }
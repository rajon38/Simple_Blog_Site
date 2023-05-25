const mongoose = require("mongoose");
exports.BlogDetailsByIDService = async (Request,DataModel) =>{
    try {
        let DetailsID=Request.params.id;

        const ObjectId = mongoose.Types.ObjectId;
        let QueryObject={};
        QueryObject['_id']=ObjectId(DetailsID);

        let data = await DataModel.aggregate([{
            $match:{_id: DetailsID}
        },
            {
                $project: {
                    _id: 1,
                    title:1,
                    author:1,
                    content:1,
                    date: 1
                }
            }])
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}
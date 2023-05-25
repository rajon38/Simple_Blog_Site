const mongoose = require("mongoose");
exports.BlogDetailsByIDService = async (Request,DataModel) =>{
    try {
        let DetailsID=Request.params.id;

        const ObjectId = mongoose.Types.ObjectId;
        const objectId = new ObjectId(DetailsID);

        let QueryObject={};
        QueryObject['_id']=objectId;

        let data = await DataModel.aggregate([{
            $match:{_id: objectId}
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
        return {status: "success", data: data}
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}
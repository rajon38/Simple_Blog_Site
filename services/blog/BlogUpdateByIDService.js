exports.BlogUpdateByIDService = async (Request,DataModel) =>{
    try {
        let id = Request.params.id;
        let PostBody = Request.body;
        let data = await DataModel.updateOne({_id:id},PostBody);
        return {status: "success", data: data}
    }catch (e) {
        return {status: "fail", data: e.toString()};
    }
}
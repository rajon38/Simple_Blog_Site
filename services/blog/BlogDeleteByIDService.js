exports.BlogDeleteByIDService = async (Request, DataModel)=>{
    try {
        let id = Request.params.id;
        let QueryObject={};
        QueryObject['_id']=id;

        await DataModel.findByIdAndRemove(QueryObject);
        return {status: "success"}
    }catch (e) {
        return {status: "fail", data: e.toString()};
    }
}
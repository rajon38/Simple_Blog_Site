exports.UserUpdateService = async (Request,DataModel)=>{
    try {
        let data = await DataModel.updateOne({email: Request.headers['email']}, Request.body);
        return {status: "success", data: data};
    }catch (e) {
        return {status: "fail", data: e.toString()};
    }
}
exports.UserDetailsService= async (Request,DataModel)=>{
    try {
        let data = await DataModel.aggregate([{$match: {email:Request.headers['email']}}]);
        return {status: "success", data: data};
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}
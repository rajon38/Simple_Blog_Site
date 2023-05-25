const CreateToken = require("../../utility/CreateToken");

exports.UserLoginService = async (Request,DataModel)=>{
    try {
        let data = await DataModel.aggregate([{$match:Request.body},
            {$project:{_id:0, email:1, firstName:1, lastName:1}}])
        if (data.length>0){
            let token = await CreateToken(data[0]['email'])
            return {status: "success", token:token, data:data[0]}
        }
        else {
            return {status:"unauthorized"}
        }
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}
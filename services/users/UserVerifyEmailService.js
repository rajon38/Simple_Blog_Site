const OTPModel = require("../../models/OTPModel");
const SendEmailUtility = require("../../utility/SendEmailUtility");

exports.UserVerifyEmailService = async (Request, DataModel) =>{
    try {
        //Email Account Query
        let email = Request.params.email;
        let OTPCode = Math.floor(100000 + Math.random() * 900000);

        //Database First Process
        let UserCount = (await DataModel.aggregate([{$match: {email: email}}, {$count: "total"}]));

        if (UserCount.length > 0){
            //Database Second Process
            await OTPModel.create({email:email, otp: OTPCode})

            //Email Send
            let SendEmail = await SendEmailUtility(email, "Your PIN Code is= " + OTPCode, "Inventory PIN Verification");

            return {status: "success", data: SendEmail}
        }
        else {
            return {status: "fail", data: "No User Found"}
        }
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}
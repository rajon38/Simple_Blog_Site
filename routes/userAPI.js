const express = require('express');
const AuthVerify = require("../middleware/AuthVerify");
const {
    Registration,
    Login,
    ProfileDetails,
    ProfileUpdate,
    RecoverVerifyEmail,
    RecoverVerifyOTP,
    RecoverResetPass
} = require("../controller/usersController")
const router = express.Router();

router.post("/Registration", Registration);
router.post("/Login",Login);
router.post("/ProfileUpdate",AuthVerify,ProfileUpdate);
router.get("/ProfileDetails",AuthVerify,ProfileDetails);
router.get("/RecoverVerifyEmail/:email",RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",RecoverVerifyOTP);
router.post("/RecoverResetPass",RecoverResetPass);

module.exports = router;
exports.AllBlogDetailsService= async (Request,DataModel)=>{
    try {
        let data = await DataModel.aggregate([{
            $project: {
                _id: 1,
                title: 1,
                author:1,
                content:1,
                date: 1
            }
        }]);
        return {status: "success", data: data};
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}
function saveDataToDB(req, res, next){
    console.log(req.body);
    res.json({success: "Success"});
}

module.exports={
    saveDataToDB
}
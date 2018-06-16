let express = require("express");
let request = require("request");
let app = express();
app.use("/", (req, res)=>{
  let url = "https://api.douban.com" + req.url;
  console.log(req.url);
  
  req.pipe(request(url)).pipe(res);
});
app.listen(process.env.PORT || 3000);

var numericArr = [];
var alphaArr = [];
var model = {
  is_success: true,
  user_id: "vamandeep_11092001",
  email: "vamandeep0164.cse19@chitkara.edu.in",
  roll_number: "1910990164",
  numbers: numericArr,
  alphabets: alphaArr,
};

function sorter(arr) {
  arr.forEach((i) => {
    if (isNaN(parseInt(i))) alphaArr.push(i);
    else numericArr.push(i);
  });
}

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.send("Please refer to /bhfl");
  });

  app.post("/bhfl", (req, res) => {
    var data = req.body.data;

    sorter(data);
    res.json(model);
    numericArr.length=0
    alphaArr.length=0
  });
};

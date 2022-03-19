module.exports = app => {
  
    app.get('/', function (req, res) {
        // const data = app.controller.Hello(req, res);
        res.send("Hello World!");
    });
}
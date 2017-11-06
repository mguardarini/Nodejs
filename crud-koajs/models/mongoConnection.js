var mongo = require('mongodb'),
    Server = mongo.Server,
    Db = mongo.Db;


exports.MongoConnection = function() {
    var server = new Server('localhost', 27017, { auto_reconnect: true });
    var db = new Db('user', server);

    db.open(function(err, db) {
        if (!err) {
            console.log("We are connected");
        }
    });

    return db;
};
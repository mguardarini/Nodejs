exports.insertDocuments = function(db, callback, data) {
    // Get the documents collection 
    var collection = db.collection('users');
    // Insert some documents 
    collection.insertMany(data, function(err, result) {
        callback(result);
    });
}

exports.updateDocument = function(db, callback, previousid, data) {
    // Get the documents collection 
    var collection = db.collection('users');
    // Update document where a is 2, set b equal to b=1 
    collection.updateOne(previousid, { $set: data }, function(err, result) {
        callback(result);
    });
}

exports.deleteDocument = function(db, callback, data) {
    // Get the documents collection 
    var collection = db.collection('users');
    // Insert some documents 
    collection.deleteOne(data, function(err, result) {
        callback(result);
    });
}

exports.findDocuments = function(db, callback) {
    // Get the documents collection 
    var collection = db.collection('users');
    // Find some documents 
    collection.find({}).toArray(function(err, docs) {
        callback(docs);
    });
}
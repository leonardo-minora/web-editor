var tContent = []
var tFile = undefined;

var openTarget = function() {
    try {
        tFile = fs.openSync(JSListener.tFileName, "w")
    }
    catch(err) {
        console.log("Target file not created. " + err.message)
        return;
    }
}

var closeTarget = function() {
    if(tFile==undefined) return;
    for(var line in tContent) {
        fs.writeSync(tFile, tContent[line].trim() + "\n")
    }
}

var write = function(data) {
    tContent.push(data)
}

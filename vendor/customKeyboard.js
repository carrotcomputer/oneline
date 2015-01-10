module.exports = {
    customKeyboard: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "CustomKeyboard", "greet", [name]);
    }
};
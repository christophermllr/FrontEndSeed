var W3C_OPTIONS = {
    // Set here your local validator if your using one. leave it empty if not
    //uri: 'http://validator/check',
    doctype: 'HTML5',
    output: 'json',
    // Remove some messages that angular will always display.
    filter: function (message) {
        if (/Element head is missing a required instance of child element title/.test(message))
            return false;
        if (/Attribute .+ not allowed on element .+ at this point/.test(message))
            return false;
        if (/Element .+ not allowed as child of element .+ in this context/.test(message))
            return false;
        if (/Comments seen before doctype./.test(message))
            return false;
    }
};


module.exports = W3C_OPTIONS;
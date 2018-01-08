const path = require('path');

const paths = {
    DIST: path.resolve(__dirname + '/dist'),
    SRC: path.resolve(__dirname + '/src'),
    JS: path.resolve(__dirname + '/src/js'),
    HTML: path.resolve(__dirname + '/src/views'),
    CSS: path.resolve(__dirname + '/src/styles'),
}

module.exports = paths;
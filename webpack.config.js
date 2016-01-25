// webpack.config.js

module.exports = {

		// will look for input from index.js
    entry:  './index.js',

    // will generate build/bundle.js
    output: {
        path:     'build',
        filename: 'bundle.js',
    },
};

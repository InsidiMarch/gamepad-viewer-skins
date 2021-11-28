const postcssSVG = require('postcss-svg');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');

module.exports = {
    plugins: [
        postcssNested(),
        postcssSVG(),
        postcssPresetEnv(),
        require('cssnano')({
            preset: 'default',
        }),
    ],
};

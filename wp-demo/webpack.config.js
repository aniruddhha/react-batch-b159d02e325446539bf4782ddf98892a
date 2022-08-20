module.exports = {
    entry : './src/app.js',
    mode: 'production',
    output : {
        filename : '[name].[contenthash].js'
    }
}
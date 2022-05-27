const path = require('path')
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports={
    mode:'development',
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname,'src','index.jsx'),
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js' 
    },
    
    resolve:{
        extensions:['.js', '.jsx']
    },
    devServer:{
        static:path.resolve(__dirname, 'public'),
        port:3000
    },
    plugins:[
        new htmlWebPackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
    ],
    module:{
        rules:[
            {
                test:/\.jsx$/,
                exclude:/node_modules/,
                use:'babel-loader',
            }
        ]
    }
}

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    console.log('env', env)
    const isProduction = env.production === true;
    console.log(isProduction)
    return {
        entry: './src/playground/app.js',
        mode: 'development',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js',
        },
        plugins: [new MiniCssExtractPlugin()],
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
            }, {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }]
            }
            ]
        },
        devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            watchContentBase: true,
            watchOptions: {
                poll: true,
            },
            historyApiFallback: true,
        }
    };
};
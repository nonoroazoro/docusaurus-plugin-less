const { name } = require("./package.json");

module.exports = function (context, options)
{
    const { id, ...pluginOptions } = options;
    return {
        name,
        configureWebpack(config, isServer, utils)
        {
            const { getStyleLoaders } = utils;
            const isProd = process.env.NODE_ENV === "production";
            return {
                module: {
                    rules: [
                        {
                            test: /\.less$/,
                            oneOf: [
                                {
                                    test: /\.module\.less$/,
                                    use: [
                                        ...getStyleLoaders(
                                            isServer,
                                            {
                                                modules: {
                                                    localIdentName: isProd
                                                        ? "[sha1:hash:hex:5]"
                                                        : "[name]_[local]"
                                                },
                                                importLoaders: 1,
                                                onlyLocals: isServer,
                                                sourceMap: !isProd
                                            }
                                        ),
                                        {
                                            loader: "less-loader",
                                            options: pluginOptions || {}
                                        }
                                    ]
                                },
                                {
                                    use: [
                                        ...getStyleLoaders(isServer),
                                        {
                                            loader: "less-loader",
                                            options: pluginOptions || {}
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            };
        }
    };
};

import webpack from "webpack";

export default function buildLoaders(): webpack.RuleSetRule[] {

    const loader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        loader
    ]
}
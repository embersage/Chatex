import webpack from "webpack";
import "webpack-dev-server";
import { buildLoaders } from "../build-loaders";
import { buildPlugins } from "../build-plugins";
import { BuildOptions } from "../types";

export const buildWebpackConfig = ({
  mode,
  port,
  isDev,
  paths,
}: BuildOptions): webpack.Configuration => {
  return {
    mode,
    entry: paths.entry,
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev
      ? {
          port,
          historyApiFallback: true,
          hot: true,
        }
      : undefined,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.dist,
      clean: true,
    },
    module: buildLoaders(),
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: buildPlugins(paths),
  };
};

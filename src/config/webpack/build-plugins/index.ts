import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildPaths } from "../types";

export const buildPlugins = ({ html }: BuildPaths) => {
  const plugins = [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: html,
    }),
  ];

  return plugins;
};

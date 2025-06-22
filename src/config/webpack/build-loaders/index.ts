export const buildLoaders = () => {
  const loaders = [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        {
          loader: "css-loader",
          options: {
            modules: true,
          },
        },
        { loader: "sass-loader" },
      ],
    },
  ];

  return {
    rules: loaders,
  };
};

const path = require('path')

exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  const config = getConfig();

  const coreJs2config = config.resolve.alias['core-js'];

  delete config.resolve.alias['core-js']

  config.resolve.alias[`core-js/modules`] = `${coreJs2config}/modules`

  try {
    config.resolve.alias[`core-js/es`] = path.dirname(require.resolve('core-js/es'));
  } catch (err) { }

  actions.replaceWebpackConfig(config);
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  createPage({
    path: `api`,
    component: path.resolve(`../src/templates/api.js`)
  })
}
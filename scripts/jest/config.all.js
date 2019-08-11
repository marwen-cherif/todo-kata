const baseConfig = require('./config.base');

module.exports = Object.assign({}, baseConfig, {
  roots: ['packages/todo-common/', 'packages/todo-react/'],
});

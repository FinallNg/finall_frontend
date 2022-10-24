module.exports = function (api) {
    api.cache.forever()
    return {
      plugins: ['macros'],
    }
  }
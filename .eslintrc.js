module.exports = {
  "extends": "standard",
  "plugins": [
      "standard",
      "promise" 
  ],
  "globals": {
    "Database": true,
    "Cache": true,
    "Queue": true,
    "Random": true,
    "app": true
  },
  "rules": {
    "prefer-const": "error"
  }
}
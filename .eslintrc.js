module.exports = {
    "parser": "babel-eslint",
    "extends": "standard",
    "plugins": [
        "babel",
        "standard",
        "promise"
    ],
    "rules": {
        "no-return-await": "off"
    },
    "globals": {
        "__appname": true,
        "Database": true,
        "Cache": true
    }
};

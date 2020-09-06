module.exports = ({ env }) => ({
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "mongoose",
      "settings": {
        "database": "strapi",
        "uri": "mongodb://localhost:27017"
      },
      "options": {
        "ssl": false
      }
    }
  }
});

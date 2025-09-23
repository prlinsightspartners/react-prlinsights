// services-data.js
// Loads services data from JSON file for use in browser and Node.js

let services = [];

if (typeof window !== 'undefined') {
  fetch('services-data.json')
    .then(res => res.json())
    .then(data => {
      services = data;
      if (typeof window.onServicesDataLoaded === 'function') {
        window.onServicesDataLoaded(services);
      }
    });
}

if (typeof module !== 'undefined') {
  services = require('./services-data.json');
  module.exports = services;
}

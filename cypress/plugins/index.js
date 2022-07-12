/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};

//Tarefa para ler o arquivo excel  
const xlsx = require('node-xlsx').default;
const fs = require('fs'); // for file
const path = require('path'); // for file path
module.exports = (on, config) => {
  on('task', {
    parseXlsx({ filepath }) {
      return new Promise((resolve, reject) => {
        try {
          const jsonData = xlsx.parse(fs.readFileSync(filepath));
          resolve(jsonData);
        } catch (e) {
          reject(e);
        }
      });
    }
  });
};

const readXlsx = require('./read-xlsx')
module.exports = (on, config) => {
  on('task', {
    'readXlsx': readXlsx.read
  })
};

//Plugin para gerarção do relatório no Allure Reports
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = (on, config) => {
  allureWriter(on, config);
  return config;
};












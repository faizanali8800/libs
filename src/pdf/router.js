'use strict';

const r = require('express').Router();

const {
  getFileFromFormData,
  hideFormfields,
  optimizePdf,
  convertToHtml,
  getFormfields,
  cleanup,
  debug
} = require('./middleware');

r.use(debug('pdfLibs'));
r.use(cleanup);
r.use(getFileFromFormData);

// r.post('/pdf2html', hideFormfields, optimizePdf, convertToHtml);
r.post('/pdf2html', hideFormfields, convertToHtml, cleanup);
r.post('/pdf2json', getFormfields, cleanup);
r.post('/pdf2json', debug('pdfLibs.formfields'), getFormfields);

module.exports = r;
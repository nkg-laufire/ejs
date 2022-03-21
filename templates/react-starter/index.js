const { source } = require('./config');
const templateManager = require('../../src/lib/templateManager');
const prepareBase = require('../../src/lib/prepareBase');
const { processTemplate } = templateManager;

const init = async (context) => {
	await prepareBase({ ...context, source });

	await processTemplate(context);
};

module.exports = init;

/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

const rimrafSync = require('rimraf').sync;
const path = require('path');
const webpack = require('webpack');
const config = require('../config/webpack.config.prod');

const buildPath = path.resolve('../build');

rimrafSync(buildPath);

webpack(config).run((err) => {
	if (err) {
		console.error('Failed to create a production build. Reason:');
		console.error(err.message || err);
		process.exit(1);
	}

	console.log('Successfully generated a bundle in the build folder!');

	console.log('The bundle is optimized and ready to be deployed to production.');
});

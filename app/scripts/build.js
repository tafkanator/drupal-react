/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

const fs = require('fs');
const rimrafSync = require('rimraf').sync;
const path = require('path');
const webpack = require('webpack');
const config = require('../config/webpack.config.prod');

const buildPath = path.resolve(__dirname, '../build');

// Remove all content but keep the directory so that
// if you're in it, you don't end up in Trash
rimrafSync(`${buildPath}/*`);

// copy static files
fs.createReadStream(path.resolve('./static/.htaccess')).pipe(fs.createWriteStream(`${buildPath}/.htaccess`));
fs.createReadStream(path.resolve('./static/robots.txt')).pipe(fs.createWriteStream(`${buildPath}/robots.txt`));

webpack(config).run((err) => {
	if (err) {
		console.error('Failed to create a production build. Reason:');
		console.error(err.message || err);
		process.exit(1);
	}

	console.log('Successfully generated a bundle in the build folder!');

	console.log('The bundle is optimized and ready to be deployed to production.');
});

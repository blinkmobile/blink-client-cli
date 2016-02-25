#! /usr/bin/env node
'use strict';

// foreign modules

const meow = require('meow');

// local modules

const main = require('..');
const help = require('../lib/help.js');

// this module

const cli = meow({
  help,
  version: true
}, {
  boolean: [ 'prune' ],
  string: ['bucket', 'region']
});

main(cli.input, cli.flags);

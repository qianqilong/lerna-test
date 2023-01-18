#!/usr/bin/env node

import cli from '../src/cli.mjs'
import a from '@qql-lerna/a'
import b from '@qql-lerna/b'

console.log(a())
console.log(b())

cli().parse(process.argv.slice(2))

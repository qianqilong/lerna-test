'use strict'

import a from '../lib/a.mjs'
import assert from 'assert'

const { strict } = assert

strict.strictEqual(a(), 'Hello from a')
console.info('a tests passed')

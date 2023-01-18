'use strict';

import b from '../lib/b.mjs'
import assert from 'assert'

const { strict } = assert

strict.strictEqual(b(), 'Hello from b')
console.info('b tests passed')


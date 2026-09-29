const assert = require('assert');
const app = require('./server');

// Sodda unit test
try {
  assert.strictEqual(typeof app, 'function');
  console.log('✅ Unit tests passed!');
  process.exit(0);
} catch (error) {
  console.error('❌ Test failed:', error);
  process.exit(1);
}

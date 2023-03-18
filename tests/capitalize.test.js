import capitalize from '../src/capitalize.js'

if (capitalize('hello') !== 'Hello') {
  throw new Error('Not Work');
}

if (capitalize('') !== '') {
  throw new Error('Not Work!');
}

console.log('Good work!');
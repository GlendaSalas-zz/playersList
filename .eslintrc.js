module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
  },
  'extends': 'google',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    "no-tabs": "off",
    'indent': [
      'error',
      'tab'
    ],
    'linebreak-style': "off",
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  },
};

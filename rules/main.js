'use strict';

module.exports = {
  rules: {
    'array-bracket-spacing': [ 'error', 'never' ],
    'arrow-body-style': 'off',
    'arrow-parens': 'error',
    'arrow-spacing': [ 'error', { before: true, after: true }],
    'comma-dangle': [ 'error', 'never' ],
    'comma-style': [ 'error', 'last' ],
    'computed-property-spacing': [ 'error', 'never' ],
    'consistent-return': 'error',
    'constructor-super': 'error',
    'default-case': 'error',
    'dot-location': [ 'error', 'property' ],
    'eol-last': 'error',
    'eqeqeq': 'error',
    'generator-star-spacing': 'off',
    'guard-for-in': 'error',
    'import/default': 'off',
    'import/export': 'off',
    'import/extensions': 'off',
    'import/imports-first': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/newline-after-import': 'off',
    'import/no-amd': 'off',
    'import/no-commonjs': 'off',
    'import/no-deprecated': 'off',
    'import/no-duplicates': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-unresolved': 'off',
    'import/order': [ 'off', { 'newlines-between': 'always' } ],
    'linebreak-style': [ 'error', 'unix' ],
    'max-nested-callbacks': [ 'error', { max: 4 } ],
    'max-params': [ 1, 6 ],
    'max-statements': [ 1, 30 ],
    'new-parens': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-class-assign': 'error',
    'no-confusing-arrow': 'off',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'off',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 0 } ],
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-object': 'error',
    'no-new-symbol': "error",
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-spaced-func': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-use-before-define': 'error',
    'no-useless-computed-key': 'off',
    'no-useless-constructor': 'off',
    'no-var': 'error',
    'no-with': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    'object-shorthand': [ 'error', 'properties' ],
    'operator-assignment': [ 'error', 'always' ],
    'operator-linebreak': [ 'error', 'before' ],
    'padded-blocks': [ 'error', 'never' ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'off',
    'quotes': [ 'error', 'single' ],
    'require-yield': 'off',
    'rest-spread-spacing': 'error',
    'semi': [ 'error', 'always' ],
    'sort-imports': 'off',
    'space-before-blocks': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', 'never' ],
    'space-in-parens': [ 'error', 'never' ],
    'space-infix-ops': [ 'error', { int32Hint: true } ],
    'space-unary-ops': [ 'error', { words: true, nonwords: false } ],
    'spaced-line-comment': 'off',
    'strict': [ 'error', 'never' ],
    'template-curly-spacing': 'off',
    'valid-typeof': 'error',
    'vars-on-top': 'off',
    'wrap-iife': [ 'error', 'outside' ],
    'yield-star-spacing': 'off',
    'yoda': [ 'error', 'never' ]
  }
};
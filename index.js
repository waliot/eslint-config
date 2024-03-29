module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "tsconfigRootDir": ".",
    "project": [
      "./tsconfig.json"
    ]
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "max-len": "off",
    "semi": [
      "error",
      "never"
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "indent": "off",
    "comma-dangle": [
      "error",
      "never"
    ],
    "curly": "error",
    "array-bracket-spacing": [
      "error",
      "always"
    ],
    "require-jsdoc": "off",
    "new-cap": [
      "error",
      {
        "capIsNewExceptions": [
          "Attribute",
          "ContentChildren",
          "HostBinding",
          "Injectable",
          "Optional",
          "Self",
          "ViewChildren",
          "Component",
          "Directive",
          "HostListener",
          "Input",
          "Output",
          "SkipSelf",
          "ContentChild",
          "Host",
          "Inject",
          "NgModule",
          "Pipe",
          "ViewChild",
          "TraceClassDecorator"
        ]
      }
    ],
    "padded-blocks": [
      "error",
      "never"
    ],
    "space-before-blocks": [
      "error",
      "always"
    ],
    "array-callback-return": "error",
    "no-await-in-loop": "error",
    "no-constant-binary-expression": "error",
    "no-constructor-return": "error",
    "no-duplicate-imports": "error",
    "no-promise-executor-return": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "error",
    "no-unmodified-loop-condition": "error",
    "eqeqeq": [
      "error",
      "always"
    ],
    "multiline-comment-style": [
      "error",
      "bare-block"
    ],
    "no-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-lone-blocks": "error",
    "no-nested-ternary": "error",
    "no-new-func": "error",
    "no-proto": "error",
    "no-return-await": "error",
    "no-unneeded-ternary": "error",
    "no-useless-constructor": "off",
    "no-var": "error",
    "no-console": [
      "error",
      {
        "allow": [
          "error"
        ]
      }
    ],
    "no-implicit-coercion": [
      "error",
      {
        "boolean": false,
        "number": false,
        "string": false
      }
    ],
    "no-debugger": "error",
    "prefer-const": "error",
    "prefer-promise-reject-errors": "error",
    "require-await": "error",
    "spaced-comment": "off",
    "yoda": "error",
    "arrow-parens": [
      "error",
      "always"
    ],
    "arrow-spacing": "error",
    "block-spacing": "error",
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "computed-property-spacing": [
      "error",
      "always"
    ],
    "dot-location": [
      "error",
      "property"
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "func-call-spacing": [
      "error",
      "never"
    ],
    "line-comment-position": [
      "error",
      {
        "position": "above"
      }
    ],
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": "error",
    "no-tabs": "error",
    "no-unreachable": "error",
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "quotes": [
      "error",
      "double"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/typedef": [
      "error",
      {
        "arrayDestructuring": false,
        "arrowParameter": false,
        "memberVariableDeclaration": true,
        "objectDestructuring": false,
        "parameter": true,
        "propertyDeclaration": true,
        "variableDeclaration": true
      }
    ],
    "@typescript-eslint/no-namespace": [
      "error"
    ],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/type-annotation-spacing": [
      "error"
    ],
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "array"
      }
    ],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-tslint-comment": "warn",
    "@typescript-eslint/consistent-type-definitions": [
      "error",
      "interface"
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "explicit",
        "overrides": {
          "constructors": "no-public"
        }
      }
    ],
    "@typescript-eslint/lines-between-class-members": [
      "error",
      "always",
      {
        "exceptAfterOverload": true,
        "exceptAfterSingleLine": true
      }
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "none",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "comma",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/method-signature-style": [
      "error",
      "method"
    ],
    "@typescript-eslint/no-extraneous-class": [
      "error",
      {
        "allowWithDecorator": true
      }
    ],
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true
      }
    ]
  }
}

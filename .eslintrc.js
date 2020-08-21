module.exports = {
  // Don't merge into parent configs.
  root: true,

  // Enable modern browser globals.
  env: {
    es2020: true,
    browser: true,
  },

  // Enable ES Module mode.
  parserOptions: {
    sourceType: "module",
  },

  extends: [
    // Core
    "eslint:recommended",

    // Import Plugin
    "plugin:import/errors",

    // React Plugin
    "plugin:react/recommended",

    // React Hooks Plugin
    "plugin:react-hooks/recommended",

    // React A11Y Plugin
    "plugin:jsx-a11y/strict",

    // Prettier Plugin
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  plugins: ["regex", "graphql"],

  rules: {
    // Core
    "arrow-body-style": "error", // Don't use unnecessary curly braces for arrow functions.
    "capitalized-comments": "error",
    "new-cap": "error", // Require constructor names to begin with a capital letter.
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-console": "error",
    "no-duplicate-imports": ["error", { includeExports: true }],
    "no-else-return": ["error", { allowElseIf: false }],
    "no-iterator": "error",
    "no-lonely-if": "error", // In else blocks.
    "no-new-wrappers": "error",
    "no-proto": "error",
    "no-return-await": "error",
    "no-shadow": "error",
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "no-unused-expressions": "error",
    "no-use-before-define": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "operator-assignment": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-await": "error",
    "spaced-comment": "error",
    curly: ["error", "multi"], // Don't use unnecessary curly braces.
    eqeqeq: "error",
    // Force the use of aliases for aliased modules.
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          "**/components",
          "!@kleros/components",
          "**/icons",
          "!@kleros/icons",
          "..", // No relative parent imports.
          "theme-ui", // This should be internal to the design system.
        ],
      },
    ],
    // Sort named import members alphabetically.
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],

    // Import Plugin
    "import/no-unused-modules": [
      "error",
      {
        missingExports: true,
        unusedExports: true,
        // Ignore Next.js default default page exports and our CLI scripts.
        ignoreExports: [
          "pages/{_app,_document,*,*/index}.js",
          "./*.js",
          "scripts",
        ],
      },
    ],
    // Don't allow reaching into modules, except for Next.js imports, and assets.
    "import/no-internal-modules": [
      "error",
      { allow: ["next/*", "assets/**", "subgraph/**"] },
    ],
    "import/no-useless-path-segments": [
      "error",
      {
        noUselessIndex: true,
      },
    ],
    "import/extensions": "error", // Don't use unnecessary file extensions.
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "@kleros/{components,icons}",
            group: "external",
          },
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "import/newline-after-import": "error",

    // React Plugin
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/prefer-stateless-function": "error",
    "react/function-component-definition": "error",
    "react/self-closing-comp": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-fragments": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": "error",
    // Force platform agnostic use of the design system.
    "react/forbid-elements": [
      "error",
      {
        forbid: [
          "!--...--",
          "!DOCTYPE",
          "a",
          "abbr",
          "acronym",
          "address",
          "applet",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "basefont",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "center",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "font",
          "footer",
          "form",
          "frame",
          "frameset",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "meta",
          "meter",
          "nav",
          "noframes",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strike",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "svg",
          "table",
          "tbody",
          "td",
          "template",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "tt",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
        ],
      },
    ],

    // React Hooks Plugin
    "react-hooks/exhaustive-deps": "error",

    // Regex Plugin
    "regex/invalid": [
      "error",
      // Don't use trailing slashes or cyclic index imports. Don't use numerical strings. Don't use "styled" components. Don't disable rules.
      ['import.*(/|\\.)";', '"\\d+"', "Style[d]", "eslint\\-disable"],
    ],

    // GraphQL Plugin
    "graphql/template-strings": [
      "error",
      {
        env: "relay",
        schemaJsonFilepath: "subgraph/build/full-schema.json",
        tagName: "graphql",
      },
    ],
  },

  settings: {
    "import/resolver": {
      alias: [
        ["@kleros/components", "./components"],
        ["@kleros/icons", "./icons"],
        ["assets", "./assets"],
        ["data", "./data"],
        ["subgraph", "./subgraph"],
      ],
    },
    react: { version: "detect" },
  },

  // Don't allow modules internal to the aliased packages to use their own alias.
  overrides: [
    {
      files: "components/**",
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              "@kleros/components",
              "**/icons",
              "!@kleros/icons",
              "..", // No relative parent imports.
            ],
          },
        ],
      },
    },
    {
      files: "icons/**",
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              "**/components",
              "!@kleros/components",
              "@kleros/icons",
              "..", // No relative parent imports.
              "theme-ui", // This should be internal to the design system.
            ],
          },
        ],
      },
    },
    // Node config files and scripts.
    {
      files: ["./*.js", "scripts/**.js"],
      env: { node: true },
    },
  ],
};

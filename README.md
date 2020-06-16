# docusaurus-plugin-less

Provides support for Less to Docusaurus v2.

## Getting Started

1. Install `docusaurus-plugin-less`:

    ```console
    npm i -S docusaurus-plugin-less
    ```

    or

    ```console
    yarn add docusaurus-plugin-less
    ```

2. Add the plugin to your `docusaurus.config.js`:

    ```diff
    module.exports = {
    // ...
    + plugins: [require.resolve("docusaurus-plugin-less")],
    // ...
    }
    ```

    > Note that you have to use `require.resolve` due to the breaking change in [Docusaurus v2.0.0-alpha.56](https://github.com/facebook/docusaurus/releases/tag/v2.0.0-alpha.56).

3. Write and import your stylesheets in [Less](http://lesscss.org) as normal.

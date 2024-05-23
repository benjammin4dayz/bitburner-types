# Bitburner Types

This package exposes the `NS` namespace as a global type for use in JSDoc to enable code-completion tools like VSCode's IntelliSense.

## Usage

1. Install this package

   ```bash
   npm i -D benjammin4dayz/bitburner-types
   ```

2. Reference `NS` in your code's JSDoc. No `import` or `require` ..._required_!

   ```js
   /** @param {NS} ns */
   export async function main(ns) {
     // your IDE should read the types and provide autocomplete for `ns`
     // "works on my machine" in VSCode
     ns.tprint("Hello world!");
   }
   ```

   - [What is `@param` and JSDoc???](https://jsdoc.app/tags-param)

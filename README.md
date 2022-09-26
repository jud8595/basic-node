# basic-node

## Notes
- in tsconfig.json, we have module vs target.
target is needed to specify which javascript version we want to use for code generation
module is specific to the module loader and can have a different version than target (as strange as it may seem). We can use a very old version for target, but we can say that module is using 'esnext' (which understands the expression import() for example)

- ts-node is able to understand imported module in .ts

- Note that ts compiler has its own config file tsconfig.json, unrelated to jest config file jest.config.js

- use 'npx tsc --init' instead of './node_modules/.bin/tsc --init'

- don't forget to output generated js file (from typescript compiler) in /build and exclude that dir for jest, otherwise jest will try to execute some .test.js generated files

## Resources
- https://medium.com/@gokulc/configuring-module-resolution-on-typescript-and-jest-b17a93ebf54d
- https://dev-mind.fr/blog/2019/start_typescript_project_and_test_with_jest.html

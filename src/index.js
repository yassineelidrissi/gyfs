#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import gitInit from './utils/gitInit.js';
import readYaml from './utils/readYaml.js';
import scaffold from './scaffold.js';

// Sample YAML starting template
const sampleYamlContent = `
projectName:
  src:
    css:
      main.css: "/* Main stylesheet content */"
      theme.css: "/* Theme stylesheet content */"
    js:
      lib:
        util.js: "// Utility functions"
        api.js: "// API interaction functions"
      app.js: "// Main application script"
      config.js: "// Configuration script"
    assets:
      images:
      fonts:
    html:
      index.html: |
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Sample Project</title>
            <link rel="stylesheet" href="../css/main.css">
        </head>
        <body>
            <script src="../js/app.js"></script>
        </body>
        </html>
      about.html: "Content for about.html"
  tests:
    test_app.js: "// Tests for app.js"
    test_config.js: "// Tests for config.js"
  docs:
    README.md: |
      # Sample Project

      This is a sample project scaffolded by the tool.

      ## Structure

      - \`src/\`: Source files including HTML, CSS, and JS.
      - \`tests/\`: Test files.
    CONTRIBUTING.md: "Guidelines for contributing to the project."
  package.json: |
    {
      "name": "sample-project",
      "version": "1.0.0",
      "scripts": {
        "start": "node src/app.js"
      }
    }
  ysn:
    js:
      ya.js:
    css:
      yass:
        ya.css:
    c++:
      ya.cpp:
    c:
      ya.c:
    c#:
      ya.cs:
    html:
      htmx:
      xhtml:
      index.html:
`.trim();

const argv = yargs(hideBin(process.argv))
  .command('init', 'Generate a sample YAML configuration file', () => {
    const filePath = path.join(process.cwd(), 'sinomom-file.yaml');
    fs.writeFileSync(filePath, sampleYamlContent);
    console.log(`Sample YAML configuration file has been generated at: ${filePath}`);
  })
  .option('name', {
    alias: 'n',
    type: 'string',
    describe: 'Project name',
  })
  .option('yaml', {
    alias: 'y',
    type: 'string',
    describe: 'Path to YAML configuration file',
  })
  .option('git', {
    type: 'boolean',
    default: false,
    describe: 'Initialize a git repository',
  })
  .help()
  .argv;

  async function main() {
    if(argv.name && argv.yaml) {
        const config = readYaml(argv.yaml);
        await scaffold(argv.name, config, {});
        if(argv.git) await gitInit(argv.name);
    } else if(!argv._.includes('init')) {
        yargs(hideBin(process.argv)).showHelp();
    }
}

main().catch(console.error);
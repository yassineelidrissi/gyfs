import fs from 'fs-extra';
import path from 'path';

/**
 * @param {string} projectName - The name of the project.
 * @param {Object} config - Parsed YAML configuration object.
 * @param {string} basePath - The base path where the project should be created.
 */

async function createStructure(basePath, config) {

    await fs.ensureDir(basePath);

    for(const [key, value] of Object.entries(config)) {
        const itemPath = path.join(basePath, key);

        // Determine if the key is meant to be a file or directory
        const isFile = path.extname(key) !== '';

        if(isFile) {
            const content = (typeof value ===  'string' || value instanceof String) ? value : '';
            await fs.outputFile(itemPath, content, 'utf-8');

        } else {
            // if the key is a directory
            if(typeof value === 'object' && value !== null) {
                // if the value is a non-empty object, treat as a subdirectory and recurse
                await createStructure(itemPath, value);
            } else {
                // if the value is null, undefined, or an empty string, create an empty directory
                await fs.ensureDir(itemPath);
            }
        }
    }
}


/**
 * Main function to scaffold the project based on the YAML configuration.
 * @param {string} projectName - The name of the project, used to create the root project directory.
 * @param {Object} config - The project structure configuration loaded from a YAML file.
 * @param {Object} variables - Custom variables to replace in the file contents.
 */
async function scaffold(projectName, config, variables) {
    // Define the base path where the project directory will be created
    const basePath = path.resolve(process.cwd(), projectName);

    // Create the project directory
    await fs.ensureDir(basePath);

    // Create the project structure within this directory
    await createStructure(basePath, config);

    console.log(`Project ${projectName} has been scaffolded successfully at ${basePath}`);
}

export default scaffold;
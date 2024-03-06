import fs from 'fs-extra';
import yaml from 'js-yaml';

const readYaml = (filePath) => {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        return yaml.load(content);
    } catch (error) {
        console.error(`Error reading YAML file: ${error}`);
        process.exit(1);
    }
}

export default readYaml;
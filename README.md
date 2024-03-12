# gyfs

**gyfs** stands for **[Generate Yaml File Structure]** is an innovative scaffolding tool that simplifies the process of initializing and configuring new software projects. It leverages a YAML configuration to generate the entire project structure, making project setup quick and efficient.

## Features

- **YAML-Driven Scaffolding**: Quickly generate your project's structure through a simple YAML configuration, streamlining the setup process.

- **One-Command Setup**: Create directories and files, including initial content, with a single command, eliminating manual setup tasks.

- **Customizable Templates**: Start with a generated YAML template and tailor it to your specific needs, ensuring flexibility across various project types.


## Installation

Ensure you have [Node.js](https://nodejs.org/) installed on your system. Then, you can install gyfs globally using npm:

```bash
npm install -g gyfs
```

Or using yarn:
```bash
yarn global add gyfs
```
## Example

Let's assume we have a YAML configuration file named gyfs-file.yaml:

```yaml
app: # Main application folder
  config: # Configuration folder
    settings.json: | # JSON configuration file with content
      {
        "name": "gyfs app",
        "version": "1.0.0"
      }
  src: # Source code folder
    main.js: | # Main JavaScript file
      console.log('Welcome to gyfs!');
    utils.js: # Utility file (empty)
  assets: # Assets folder
    logo.png: # Placeholder for an image file (empty)
```

To scaffold a project named "MyAwesomeProject" using this configuration:

```bash
gyfs --name MyAwesomeProject --yaml gyfs-file.yaml
```

The resulting directory structure of "MyAwesomeProject" will be:

```yaml
MyAwesomeProject
├── app
│   ├── config
│   │   └── settings.json
│   ├── src
│   │   ├── main.js
│   │   └── utils.js
│   └── assets
│       └── logo.png
```

## Usage

To start using GYFS:

Initialize a sample YAML configuration file:
```bash
gyfs init
```

This will create a gyfs-file.yaml in your current directory.

Generate your project structure based on a YAML file:

```bash
gyfs --name <your-project-name> --yaml <path-to-your-yaml>
```
Or for a shorthand version:
```bash
gyfs -n <your-project-name> -y <path-to-your-yaml>
```

For example:
```bash
gyfs --name MyAwesomeProject --yaml ./gyfs-file.yaml
```

To initialize a Git repository along with your project:
```bash
gyfs --name MyAwesomeProject --yaml ./gyfs-file.yaml --git
```
This will create a new Git repository in the project directory.

## Contributing

Contributions are what make the open-source community such a fantastic place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make Gyfs better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement."

Don't forget to give the project a star! Thanks again!

    1- Fork the Project
    2- Create your Feature Branch (git switch -c feature/AmazingFeature)
    3- Commit your Changes (git commit -m 'Add some AmazingFeature')
    4- Push to the Branch (git push origin feature/AmazingFeature)
    5- Open a Pull Request

## License

Distributed under the MIT License.
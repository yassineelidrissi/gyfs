# Contributing

If you have an idea for a new feature or want to report a bug, please create an issue to discuss it. If you want to contribute code, please follow the workflow below.

## Workflow

    1- Fork the Project
    2- Create your Feature Branch (git switch -c feature/AmazingFeature)
    3- Commit your Changes (git commit -m 'Add some AmazingFeature')
    4- Push to the Branch (git push origin feature/AmazingFeature)
    5- Open a Pull Request

Once the pull request has been reviewed, it will be merged into the main branch and the changes will be reflected in the next release.

# Getting Started

To get started with this project, you will need to install the necessary dependencies and run the project in development mode. This guide will walk you through the process.

## Prerequisites

### Node.js

This project requires Node.js to be installed. If you don't have Node.js installed, you can download it from the official website: [nodejs.org](https://nodejs.org/).

## Installation

Next, you will need to clone the repository and install the dependencies.

### Clone the Repository

```bash
git clone [your-fork-url]
```

### Install Dependencies

```bash
cd [project-name]
npm install
```

## Development

Once you have cloned the repository and installed the dependencies, you can start developing by running the following command:

```bash
npm start
```

And after making a change you can test your modification by running the following command for example:
```bash
npm start -- --name <your-project-name> --yaml <path-to-your-yaml>
```

This will allow you to make changes and see the results in real-time.

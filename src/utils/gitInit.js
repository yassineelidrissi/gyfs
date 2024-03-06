import simpleGit from "simple-git";

const gitInit  = async (projectPath) => {
    try {
        await simpleGit(projectPath).init();
        console.log('Initialized a new Git respository');
    } catch (error) {
        console.error(`Error initializing Git repository: ${error}`);
    }
}  

export default gitInit;
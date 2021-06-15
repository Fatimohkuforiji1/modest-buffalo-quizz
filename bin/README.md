# Scripts

The following executable scripts are provided:

 - `build-info.sh`: Writes out a `build-info.txt` file to the `dist/static` directory to save when, where and from what commit the output was built
 - `check-node.sh`: Ensures the running version of Node matches the `.nvmrc` configuration
 - `cyf-branch.sh`: Prepares a Code Your Future version of the repo (remove tests, add MongoDB if `--db mongo` is set)
 - `prepare-deploy.sh`: Makes sure the dependencies are installed and the output is built

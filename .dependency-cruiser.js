/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
    options: {
        doNotFollow: {
            path: 'node_modules',
            dependencyTypes: [
                'npm',
                'npm-dev',
                'npm-optional',
                'npm-peer',
                'npm-bundled',
                'npm-no-pkg',
            ],
        },
        includeOnly: '^src',
    },
};

const { writeFile } = require('fs');
const { argv } = require('yargs');

const targetPath = `./src/environments/environment.prod.ts`;

const env_MODE = argv.MODE;
const env_APP_NAME = argv.APP_NAME;
const env_GOOGLE_MAPS_API_KEY = argv.GOOGLE_MAPS_API_KEY;
const env_GOOGLE_ANALYTICS_ID = argv.GOOGLE_ANALYTICS_ID;

if (!env_APP_NAME) {
    console.error('APP_NAME environment variable is needed');
    process.exit(-1);
}
if (!env_GOOGLE_MAPS_API_KEY) {
    console.error('GOOGLE_MAPS_API_KEY environment variable is optional');
}
if (!env_GOOGLE_ANALYTICS_ID) {
    console.error('GOOGLE_ANALYTICS_ID environment variable is optional');
}

var environmentFileContent = '';

if (env_MODE === 'dev') {
    // FOR SNAPSHOT
    const env_AGUBE_BACKEND_API_URL = argv.AGUBE_BACKEND_API_URL;

    if (!env_AGUBE_BACKEND_API_URL) {
        console.error('AGUBE_BACKEND_API_URL environment variable is needed');
        process.exit(-1);
    }

    environmentFileContent = `
    export const environment = {
       production: false,
       appName: "${env_APP_NAME}",
       googleMapsApiKey: "${env_GOOGLE_MAPS_API_KEY}",
       googleAnalyticsId: "${env_GOOGLE_ANALYTICS_ID}",
       agubeBackendUrl: "${env_AGUBE_BACKEND_API_URL}/api/v1.0.0/agube",
    };`;
} else if (env_MODE === 'prod') {
    // FOR RELEASE CANDIDATE AND RELEASE
    environmentFileContent = `
    export const environment = {
       production: true,
       appName: "${env_APP_NAME}",
       googleMapsApiKey: "${env_GOOGLE_MAPS_API_KEY}",
       googleAnalyticsId: "${env_GOOGLE_ANALYTICS_ID}",
       agubeBackendUrl: "/api/v1.0.0/agube",
    };`;
} else {
    console.error('MODE must be "dev" or "prod"');
    process.exit(-1);
}

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
    console.log(`Autogenerated prod environment successfully: ${targetPath} `);
});
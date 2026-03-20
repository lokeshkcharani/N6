const admin=require("firebase-admin")
const path = require('path')
const fs = require('fs')

// resolve the service account key location and verify it exists
const serviceAccountFile = process.env.NODE_ENV === 'production' 
    ? './ServiceAccountKey-prod.json' 
    : './ServiceAccountKey-dev.json';
const serviceAccountPath = path.resolve(__dirname, serviceAccountFile);

if (!fs.existsSync(serviceAccountPath)) {
    console.error(`Service account key not found at ${serviceAccountPath}`);
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccountPath)
});

const db = admin.firestore();
const auth=admin.auth()
module.exports={admin,db,auth};
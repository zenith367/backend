const admin = require("firebase-admin");

// Use the JSON file uploaded to Render
const serviceAccount = require("/opt/render/project/env/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };

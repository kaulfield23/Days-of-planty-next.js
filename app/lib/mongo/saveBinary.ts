import { MongoClient, Binary } from 'mongodb';
import clientPromise from '.';

// async function saveBinaryData() {
//     const client = await clientPromise;
//     const db = client.db('planty');
//     try {
//       await client.connect();
//       const database = client.db('your-database-name'); // Replace with your database name
//       const collection = database.collection('your-collection-name'); // Replace with your collection name
//       // Read binary data from a file or any other source
//       const binaryData = getBinaryData();
//       // Create a Binary object with the binary data
//       const binary = new Binary(binaryData);
//       // Insert the document with the binary data into the collection
//       const result = await collection.insertOne({ data: binary });
//       console.log('Binary data stored:', result.insertedId);
//     } catch (error) {
//       console.error('Error storing binary data:', error);
//     } finally {
//       await client.close();
//     }
// }

// function getBinaryData() {
//   // Read binary data from a file or any other source and return it
//   // Replace this with your own logic to read binary data
//   return Buffer.from('Binary data example', 'utf-8');
// }

// saveBinaryData();

// function uploadFile() {
//   // var file = inputElement.files[0];
//   const reader = new FileReader();
//   reader.onloadend = function () {
//     console.log('Encoded Base 64 File String:', reader.result);

//     const data = reader.result.split(',')[1];
//     const binaryBlob = atob(data);
//     console.log('Encoded Binary File String:', binaryBlob);
//   };
//   reader.readAsDataURL(file);
// }

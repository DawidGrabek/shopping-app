const mongoose = require('mongoose')
module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

    // Use the environment variables for MongoDB hostname and port
    const mongoDBHost = process.env.MONGODB_HOST || 'localhost';
    const mongoDBPort = process.env.MONGODB_PORT || '27017';
    const mongoDBURL = `mongodb://${mongoDBHost}:${mongoDBPort}/shopping-app`;
  
  try {
    mongoose.connect(mongoDBURL, connectionParams)
    console.log('Connected to database successfully')
  } catch (error) {
    console.log(error)
    console.log('Could not connect database!')
  }
}

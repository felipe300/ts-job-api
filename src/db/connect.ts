import mongoose from 'mongoose'

const connectDB = async (url: string) => {
  try {
    await mongoose.connect(url)
    return console.log('DB connected')
  } catch (err) {
    console.log(`Something went wrong with the connection ${err}`)
    process.exit(1)
  }
}

export default connectDB

import mongoose from 'mongoose'
async function main (): Promise<void> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    mongoose.connect('mongodb://127.0.0.1:27017/test')
    console.log('connect success')
    // throw new Error('Wazato')
  } catch (error: unknown) {
    console.error('An error occurred:', error)
  }

  const kittySchema = new mongoose.Schema({
    name: String
  })

  kittySchema.methods.speak = function speak () {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const greeting = this.name ? 'My name is ' + this.name : 'No name'
    console.log(greeting)
  }

  const Kitten = mongoose.model('Kitten', kittySchema)
  const silence = new Kitten({ name: 'Silence' })
  console.log(silence.name)
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main()

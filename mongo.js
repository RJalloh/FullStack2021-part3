const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const n = process.argv[3]
const num = process.argv[4]

const url =
  `mongodb+srv://Fullstack:${password}@cluster0.emle7.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)


const person = new Person({
    name: 'Arto Hellas',
    number: '040-50-69-717'
})

if (n && num) {
    const person = new Person({
        name: n,
        number: num
    })

    person.save().then(response => {
        console.log(`added ${n} number ${num} to phonebook`)
        mongoose.connection.close()
      })
} else {
    console.log("phonebook:")
    Person.find({}).then(res => {
        res.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
}



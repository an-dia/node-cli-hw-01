const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.join(__dirname, './db/contacts.json')

// TODO: задокументировать каждую функцию
async function listContacts() {
   try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    console.table(result);
  } catch (error) {
    console.log(error);
  }
  console.log('Вижу контакты');
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const users = JSON.parse(data);
    const user = users.find(({id}) => id === Number.parseInt(contactId))
    console.table(user);
  } catch (error) {
    console.log(error);
  }
 console.log('Взял контакт по id');
}

async function removeContact(contactId) {
   try {
    const data = await fs.readFile(contactsPath);
    const users = JSON.parse(data);
    const usersDel = users.filter(({ id }) => id !== Number.parseInt(contactId))
    fs.writeFile(contactsPath, JSON.stringify(usersDel))
    console.table(usersDel);
  } catch (error) {
    console.log(error);
  }
  console.log(`Удалён контакт ${contactId}`);
}

async function addContact(name, email, phone) {
    try {
    const data = await fs.readFile(contactsPath);
      const users = JSON.parse(data);
      const id = users.length + 1
      const newUser = { id, name, email, phone }
      users.push(newUser)
    fs.writeFile(contactsPath, JSON.stringify(users))  
    console.table(users);
  } catch (error) {
    console.log(error);
  }
  console.log('Добавлен контакт');
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}

















// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// console.log(process.cwd());
// console.log(__dirname);
// console.log(__filename);

// process.on('exit', (code) => {
//   console.log(`Exit: ${code}`);
// })

// const info = (msg) => {
//   console.log(`Info: ${msg}`)
// }

// const log = (msg) => {
//   console.log(`Log: ${msg}`)
// }

// module.exports = {
//   info,
//   log,
// }
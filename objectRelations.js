// class User {
//   constructor(name) {
//     this.name = name
//   }
// }

// class Item {
//   constructor(name, price){
//     this.name = name
//     this.price = price
//   }
// }

// let store = {items: [
//   {id:1, price:2, name: 'red socks', userId:1},
//   { id: 2, price: 7, name: 'blue shirt', userId: 1 },
//   { id: 3, price: 4, name: 'black tshirt', userId: 2 }
// ],
// users: [
//   {id: 1, name: 'Cindy'},
//   { id: 2, name: 'Billy' },
//   { id: 3, name: 'Bobby' }
// ]

// }
let store = {items: [], users: []}

let itemId = 0
let userId = 0

class User {
  constructor(name) {
    this.id = ++userId
    this.name = name 

    store.users.push(this)
  }
}

class Item {
  constructor(price, name, user) {
    this.id = ++itemId
    this.name = name 
    this.price = price
    if(user) {
      this.setUser(user)
    }

    store.items.push(this)
  }
  setUser(user){
    this.userId = user.id
  }
}

let bobby = new User("bobby")
let trousers = new Item(24, 'trousers', bobby)
let item = new Item(24, 'pants')
item.setUser(bobby);

console.log(store)

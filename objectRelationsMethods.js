let store = {users: [], items: []};

let userId = 0;
class User {
  constructor(name) {
    this.id = ++userId;
    this.name = name;

    store.users.push(this);
  }
  items () {
    return store.items.filter(
      function(item) {
        return item.userId === this.id;
      }.bind(this)
    );
  }
}

let itemId = 0;

class Item {
  constructor(name, price, user) {
    this.id = ++itemId;
    this.name = name
    this.price = price;
    if(user) {
      this.userId = user.id;
    }
    store.items.push(this);
  }
  setUser(user) {
    this.userId = user.id;
  }
  user() {
    return store.users.filter(
      function(user) {
        return user.id === this.userId;
      }.bind(this)
    )
  }
}

let bobby = new User('bobby')
let sally = new User('sally');
let trousers = new Item('trousers', 24, bobby);
let tshirt = new Item('tshirt', 8, bobby);
let socks = new Item('socks', 3, sally);

console.log(socks.user())
console.log(sally.items())
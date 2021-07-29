class Playersubject {
  constructor(button) {
    this.subscribers = []; // colection of suscribers
    this.button = button; // Button subject
  }

  suscribe(subscriber) {
    this.subscribers.push(subscriber);
    // this adds the new suscriber from collection
  }

  unsuscribefunction(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }// this removes the suscriber from collection

  notify() {
    this.subscribers.forEach((subscriber) => {
      subscriber();
    });
  }// notify subscribers
}

// class Observer {
//   constructor(executeFunction) {
//     this.function = executeFunction;
//   }
//   update() {
//     this.function();
//   }
// }

export default Playersubject;

class Playersubject {
  constructor(button, event) {
    this.subscribers = []; // colection of suscribers
    this.button = button;
    this.button.addEventListener(event, () => {
      this.notify();
    });
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
    // this adds the new suscriber from collection
  }

  notify() {
    this.subscribers.forEach((subscriber) => {
      subscriber();
    });
  }// notify subscribers
}
export default Playersubject;

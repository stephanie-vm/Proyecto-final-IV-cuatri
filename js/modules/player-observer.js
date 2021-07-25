class PlayerObserver {
  constructor() {
    this.subscribers = {}; // colection of suscribers
  }

  suscribe(type, subscriberFn, subscriberctx) {
    if (!this.subscribers[type]) {
      this.subscribers[type] = [];
      // this creates an array with diferents types, first verify if the array exits with the condition
    }
    this.subscribers[type].push({ fn: subscriberFn, subscriberctx, type });
    // this adds the new suscriber from collection
  }

  unsuscribe(type, subscriberFn, subscriberctx) {
    this.subscribers[type] = this.subscribers[type].filter((subscriber) => subscriber.fn !== subscriberFn && subscriber.subscriberctx !== subscriberctx);
  }// this removes the suscriber from collection

  notify(type, arg) {
    this.subscribers[type].forEach((subscriber) => {
      subscriber.fn.call(subscriber.subscriberctx, arg);
    });
  }// notify change
}

export default PlayerObserver;

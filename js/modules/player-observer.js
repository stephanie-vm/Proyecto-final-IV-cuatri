class PlayerObserver{
  constructor(){
    this.observers = [];
  }

  suscribe(beingWatch){
    this.observers.push(NewObserver);
  }

  unsuscribe(stopWatch){
    this.observers = this.observers.filter(observer => observer != )
  }
}

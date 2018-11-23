class Clock {
  constructor() {
    this.currentTime = new Date();
    this.printTime().bind(this);
    setInterval(this._tick.bind(this), 1000);
  }
  
  printTime() {
    this.displayTime = this.currentTime.toLocaleTimeString();
    console.log(`${this.displayTime}`);
  }
  
  _tick() {
    this.currentTime = (this.currentTime + 1000);
    this.printTime();
  }
}

const clock = new Clock();
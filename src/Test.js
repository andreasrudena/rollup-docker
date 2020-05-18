export default class Test {
  message = 'Test was completed. Live reload should work from within the Docker container';
  printMessage = () => {
    console.log(this.message);
  }
  constructor() {
    this.printMessage();
  }
}
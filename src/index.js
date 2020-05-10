class Test {
  constructor() {
    console.log('Test was completed. Live reload should work from within the Docker container');
  }
}

window.onload = function(e){ 
  new Test();
}

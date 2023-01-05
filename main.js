function compile() {
  class a{
      constructor(code) {
          this.code = code;
      }
      run()  {
          console.log(this.code);
      }
  }



  //code that runs

  const fs = require('fs');

  fs.readFile('main.sharpi', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    var code = data;
    const c = new a(code);
    c.run();
  });
}
compile();
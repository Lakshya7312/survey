class Database {
    constructor(){
     this.name = null;
     this.email = null;
  }

  getCount() {
      var voterCountRef = database.ref('voterCount');
      voterCountRef.on("value", (data)=>{
          voterCount = data.val();
      })
  }

  updateCount(count) {
     database.ref('/').update({
         voterCount: count
     });
   }

   getName() {
       var nameRef = database.ref('names');
       nameRef.on("value", (data)=>{
           name = data.val();
       })
    }

    updateName() {
        database.ref('/').update({
            name: this.name
        })
    }

    getEmail() {
        var emailRef = database.ref('emails');
        emailRef.on("value", (data)=>{
            email = data.val();
        })
    }

    updateEmail() {
        database.ref('/').update({
            email: this.email
        })
    }
}
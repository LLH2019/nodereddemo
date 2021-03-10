let actors = require('comedy')

let actorSystem = actors()

let myActorPromise = actorSystem
  .rootActor() // Get a root actor reference.
  .then(rootActor => {
    return rootActor.createChild({ // Create a child actor that says hello.
      sayHello: to => {
        console.log(`Hello, ${to}!`)
      }
    });
  });

myActorPromise.then(myActor => {
  // Our actor is ready, we can send messages to it.
  myActor.send('sayHello', 'world');
}); 
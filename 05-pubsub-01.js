////////////////////////////////
/////// publisher/subject //////
////////////////////////////////

// topics
let topics = {};

// token
let subUid = -1;

// subscriptions
let addSubscriber = function(topic, cb) {
  if (!topics[topic]) {
    topics[topic] = [];
  }
  let token = (++subUid).toString();
  topics[topic].push({ token: token, cb: cb });
  return token;
};

/**
 * remove subscriptions
 */
let removeSubscriber = function(token) {
  for (var m in topics) {
    if (topics[m]) {
      for (var i = 0, j = topics[m].length; i < j; i++) {
        if (topics[m][i].token === token) {
          topics[m].splice(i, 1);
          return token;
        }
      }
    }
  }
  return this;
};

/**
 * publish notification
 */
let publish = function(topic, args) {
  // for any topics send an update
  let subscribers = topics[topic];
  if (subscribers) {
    for (let index = 0; index < subscribers.length; index++) {
      const subscriber = subscribers[index];
      const myArgs = [...arguments];
      myArgs.push(subscriber.token); // 1
      subscriber.cb.apply(null, myArgs);
      //subscriber.cb(topic, args);
    }
  }
  //return this;
};

////////////////////////////////
///// subscriber/observer //////
////////////////////////////////

/**
 * subscribe for notifications
 */
let subscribe = function(topic, cb) {
  return addSubscriber(topic, cb);
};

/**
 * un-subscribe from notifications
 */
let unSubscribe = function(token) {
  let removedToken = removeSubscriber(token);
  if (typeof removedToken !== "string") {
    console.error("Failed to remove subscriber");
  }
};

function myLogger(type, message, token) {
  console.log(this, type, message, token);
  //console.log(`$$ myLogger says (${message}) // -`, ...arguments);
}

// Test Cases for Subscription Model
let newSub1 = subscribe("mail", myLogger);
let newSub2 = subscribe("mail", myLogger);
let newSub3 = subscribe("mail", myLogger);
let newSub4 = subscribe("inbox", myLogger);
publish("mail", "New mail arrived");
publish("inbox", "Mail deleted 12986");
publish("inboxs", "Total items 111");
unSubscribe(newSub2);

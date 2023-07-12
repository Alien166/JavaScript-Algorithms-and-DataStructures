const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line
  let online=0;
 for(const i in allUsers ) {
   if(allUsers[i].online) {
      online++;
    }
 }
 return online;
  // Only change code above this line
}

console.log(countOnline(users));

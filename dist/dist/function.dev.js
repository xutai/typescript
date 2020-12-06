"use strict";

function getAdminUser() {
  return {
    name: 'xutai',
    id: 1
  };
}

function deleteUser(user) {
  console.log("user", user);
}

console.info(getAdminUser());
console.info(deleteUser({
  name: 'aping',
  id: 123
}));
"use strict";

var UserAccount =
/** @class */
function () {
  function UserAccount(name, id) {
    this.name = name;
    this.id = id;
  }

  return UserAccount;
}();

var user = new UserAccount("xutai", 1);
console.log("user", user);
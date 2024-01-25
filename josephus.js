const { Node, LinkedList } = require("./sort-linked-lists");

function findSurvivor(numPeople, skip) {
  debugger;
  const people = new LinkedList();
  for (let i = 0; i < numPeople; i++) {
    if (i === numPeople - 1) {
      people.append(new Node(value = i + 1, next = people.head));
    } else {
      people.append(new Node(value = i + 1));
    }
  }

  let current = people.head;
  let firstTime = true;
  while (people.size > 1) {
    for (let i = 0; i < skip - firstTime; i++) {
      current = current.next;
    }
    firstTime = false;

    people.remove(current.value);
  }

  return people.head.value;
}

module.exports = { findSurvivor };
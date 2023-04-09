const toList = function (arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  const head = {
    val: arr[0],
    next: null
  };

  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    const newNode = {
      val: arr[i],
      next: null
    };

    curr.next = newNode;
    curr = curr.next;
  }

  return head;
};

module.exports = {
  toList
};

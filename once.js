function once(func) {
  // closure variables which can be access by the function returned
  // by once fn
  let ranOnce = false;
  let value;

  return function (...args) {
    if (!ranOnce) {
      // "this" refers to the once function
      //
      value = func.apply(this, args);
      ranOnce = true;
    }
    console.log("this", this.value);

    return value;
  };
}

let i = 0;
const onced = once(() => ++i);

onced();
onced();

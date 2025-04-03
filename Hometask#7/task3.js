function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Обидва параметра мають бути числами!");
  }
  if (denominator === 0) {
    throw new Error("Ділити на 0 неможливо!");
  }
  return numerator / denominator;
}
try {
  console.log(divide(20, 4));
} catch (Error) {
  console.log(Error.message);
} finally {
  console.log("Робота завершена!");
}
try {
  console.log(divide(15, "b"));
} catch (Error) {
  console.log(Error.message);
} finally {
  console.log("Робота завершена!");
}
try {
  console.log(divide("f", 13));
} catch (Error) {
  console.log(Error.message);
} finally {
  console.log("Робота завершена!");
}
try {
  console.log(divide(15, 0));
} catch (Error) {
  console.log(Error.message);
} finally {
  console.log("Робота завершена!");
}

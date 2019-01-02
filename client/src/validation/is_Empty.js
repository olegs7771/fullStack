const isEmpty = value => {
  return (
    value === null ||
    value === undefined ||
    (typeof value === "object" && Object.keys(value) === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};
export default isEmpty;

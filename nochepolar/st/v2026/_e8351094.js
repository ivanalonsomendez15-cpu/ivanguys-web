function id() {
  return `_${Math.random().toString(16).slice(2)}_`;
}
export { id as i };
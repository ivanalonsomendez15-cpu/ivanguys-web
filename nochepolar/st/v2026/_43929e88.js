let ls;
try {
  ls = window.localStorage;
} catch (e) {
  ls = null;
}
ls = ls || {};
const localStorage = ls;
export { localStorage as l };
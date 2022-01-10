// A dependency graph that contains any wasm must all be imported
// asynchronously. This `bootstrap.js` file does the single async import, so
// that no one else needs to worry about it again.
// エントリーポイント。wasm を import するモジュールは非同期で import する必要があるので、
// こうすることで、ソース内のどこでも wasm を import することができるようになる。
import("./index").catch(e => console.error("Error importing `bundle.js`:", e));

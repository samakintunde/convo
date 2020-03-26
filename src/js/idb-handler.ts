import { openDB, deleteDB, wrap, unwrap } from "https://unpkg.com/idb?module";

if (!("indexedDB" in window)) {
  console.log("This browser doesn't support IndexedDB");
}
// DB OPERATIONS
const openDb = async () =>
  await openDB("convo-db", 1, {
    upgrade(db, oldVersion, newVersion, transaction) {
      if (oldVersion !== newVersion) {
        db.createObjectStore("profile", { keyPath: "name" });
        db.createObjectStore("messages", { keyPath: "timestamp" });
      }
    }
  });

export const dbPromise = openDb();

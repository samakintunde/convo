import { dbPromise } from "./idb-handler";
import { generateID } from "./id-util";

const readDb = async (storeName, key) => {
  const db = await dbPromise();
  const tx = await db.transaction(storeName);
  const store = await tx.objectStore(storeName);

  return store.get(key);
};

const addUserToDb = async (storeName, user) => {
  const db = await dbPromise();
  const tx = await db.transaction(storeName);
  const store = await tx.objectStore(storeName);

  store.add({
    id: generateID(),
    name: user.name
  });
};

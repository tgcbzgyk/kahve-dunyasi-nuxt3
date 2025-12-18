// plugins/firebase.client.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
const firebaseConfig = {
  apiKey: "AIzaSyCL7p0rhFI2swWkqcLSqj2kEEYbvndOfm4",
  authDomain: "kahve-dunyasi-final.firebaseapp.com",
  projectId: "kahve-dunyasi-final",
  storageBucket: "kahve-dunyasi-final.firebasestorage.app",
  messagingSenderId: "1061667575498",
  appId: "1:1061667575498:web:5f37be94a7dbe6e9340633"
};
  // ----------------------------------------

  // Firebase'i başlat
  const app = initializeApp(firebaseConfig);
  
  // Veritabanını başlat
  const db = getFirestore(app);

  // Uygulamanın her yerinden erişebilmek için 'provide' ediyoruz
  return {
    provide: {
      db
    }
  }
});
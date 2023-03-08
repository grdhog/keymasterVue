<template>
  <div id="app">
    <DataTable></DataTable>
  </div>
</template>

<script>
import DataTable from './components/DataTable.vue';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDpkfdEY7E-5x3cYKuqBEsw53DYUoz5MI",
  authDomain: "project1-5e2f9.firebaseapp.com",
  projectId: "project1-5e2f9",
  storageBucket: "project1-5e2f9.appspot.com",
  messagingSenderId: "509927420951",
  appId: "1:509927420951:web:e32cfbaa1d2e9c324a1852"
};

export default {
  name: 'App',
  components: {
    DataTable,
  },
  async mounted() {
    console.log('I just mounted bro!');
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, 'keys'));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().KeyName}`);
    });
  },
};
</script>

<style></style>

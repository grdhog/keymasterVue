<template>
  <div id="app">
    <button v-on:click="resetData">reset Data</button>
    <DataTable collection="key"></DataTable>
  </div>
</template>

<script>
import DataTable from './components/DataTable.vue';
import { collection, addDoc, doc, deleteDoc, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { testKeys, testUsers } from './testData.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCDpkfdEY7E-5x3cYKuqBEsw53DYUoz5MI',
  authDomain: 'project1-5e2f9.firebaseapp.com',
  projectId: 'project1-5e2f9',
  storageBucket: 'project1-5e2f9.appspot.com',
  messagingSenderId: '509927420951',
  appId: '1:509927420951:web:e32cfbaa1d2e9c324a1852',
};

export default {
  name: 'App',
  components: {
    DataTable,
  },
  data() {
    return {
      firebaseConfig: firebaseConfig,
    };
  },
  mounted() {
    console.log('App mounted');
  },
  methods: {
    resetData() {
      const app = initializeApp(this.firebaseConfig);
      const db = getFirestore(app);

      const success = (value) => {
        value.forEach((d) => deleteDoc(doc(db, "keys", d.id)));
      }
      const fail = (value) => console.log(value);
      console.log('Deleting keys...')
      getDocs(collection(db, 'keys'))
        .then(success, fail);

      console.log('Adding keys');
      testUsers.forEach((user) => {
        addDoc(collection(db, 'users'), user);
      });
      testKeys.forEach((key) => {
        addDoc(collection(db, 'keys'), key);
      });
    },
  },
};
</script>

<style></style>

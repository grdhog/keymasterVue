<template>
  <div id="app">
    <button v-on:click="resetData">reset Data</button>
    <DataTable collection="key"></DataTable>
  </div>
</template>

<script>
import DataTable from './components/DataTable.vue';
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
} from 'firebase/firestore';
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
      app: null,
      db: null,
    };
  },
  created() {
    console.log('App created');
    this.app = initializeApp(this.firebaseConfig);
    this.db = getFirestore(this.app);
  },
  methods: {
    deleteKeys(coll) {
      console.log('Deleting keys');
      return new Promise((resolve, reject) => {
        try {
          coll.forEach((d) => deleteDoc(doc(this.db, 'keys', d.id)));
          resolve(true);
        } catch (error) {
          reject(error);
        }
      });
    },
    addKeys(value) {
      console.log('Adding keys');
      return new Promise((resolve, reject) => {
        try {
          testKeys.forEach((key) => {
            console.log('adding', key);
            addDoc(collection(this.db, 'keys'), key);
          });
          resolve(true);
        } catch (error) {
          reject(error);
        }
      });      
    },
    resetData() {
      getDocs(collection(this.db, 'keys'))
      .then((coll) => {
        return this.deleteKeys(coll);
      })
      .then((value) => {
        return this.addKeys(value);
      });


      /*
      testUsers.forEach((user) => {
        addDoc(collection(db, 'users'), user);
      });
      */
    },
  },
};
</script>

<style></style>

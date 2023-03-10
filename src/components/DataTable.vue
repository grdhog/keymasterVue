<template>
  <table class="table">
    <thead>
      <tr>
        <th>keySystem</th>
        <th>keyRank</th>
        <th>keyIssue</th>
      </tr>     
    </thead>
    <tbody>
      <tr v-for="doc in docs">
        <td>{{doc.data().keySystem}}</td>
        <td>{{doc.data().keyRank}}</td>
        <td>{{doc.data().keyIssue}}</td>
      </tr>     
    </tbody>
  </table>
</template>

<script>

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
  name: 'DataTable',
  props: ['collection'],
  mounted() {
    this.getData();
  },
  data(){
    return {
      docs: []
    }
  },
  methods: {
    getData() {
      console.log('getData called!');
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      getDocs(collection(db, 'keys'))
        .then(this.handleSuccess, this.handleFailure);
    },
    handleSuccess(value){
      value.forEach((doc) => {
        this.docs.push(doc);
        console.log(`${doc.id} => ${doc.data().keySystem}-${doc.data().keyRank}-${doc.data().keyIssue}`);
      });    
    },
    handleFailure(value){
      console.log(value);
    }
  }
};
</script>

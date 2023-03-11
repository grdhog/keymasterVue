<template>
  <table class="table">
    <thead>
      <tr>
        <th>keyName</th>
      </tr>     
    </thead>
    <tbody>
      <tr>
        <td><input v-model="keyName"></td>
      </tr>   
      <tr v-for="row in rows">
        <td>{{row.keyName}}</td>
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
      docs: [],
      keyName: '',
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
        let d = doc.data();
        d.keyName = `${d.keySystem}-${d.keyRank}-${d.keyIssue}`;
        this.docs.push(d);
      });    
    },
    handleFailure(value){
      console.log(value);
    }
  },
  computed: {
    rows(){
      const re = new RegExp(this.keyName, 'i');
      return this.docs.filter( (d) => re.test(d.keyName) );
    }
  }
};
</script>

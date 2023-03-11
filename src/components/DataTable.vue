<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="col in cols">{{col}}</th>
      </tr>     
    </thead>
    <tbody>
      <tr>
        <td v-for="(filter, index) in filters"><input v-model="filter.value"></td>
      </tr>   
      <tr v-for="row in rows">
        <td v-for="col in cols">{{ row[col] }}</td>
      </tr>     
    </tbody>
  </table>
  <pre>{{ $data }}</pre>
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
      filters: []
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
        delete d.keySystem;
        delete d.keyRank;
        delete d.keyIssue;
        this.docs.push(d);
      }); 
      if (this.docs.length > 0){
        const cols = Object.keys(this.docs[0]);
        const filters = cols.map(col => {
          return {
            name: col, 
            value: ''
          } 
        });
        this.filters = filters;
      }    
    },
    handleFailure(value){
      console.log(value);
    }
  },
  computed: {
    cols(){
      return this.docs.length > 0 ? Object.keys(this.docs[0]) : []
    },
    rows(){
      //const re = new RegExp(this.keyName, 'i');
      //return this.docs.filter( (d) => re.test(d.keyName) );
      return this.docs;
    }
  }
};
</script>

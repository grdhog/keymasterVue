<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
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
  methods: {
    getData() {
      console.log('getData called!');
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      getDocs(collection(db, 'keys'))
        .then(this.handleSuccess, this.handleFailure);
    },
    handleSuccess(value){
      console.log(value);
      /*
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().KeyName}`);
      });
      */
    },
    handleFailure(value){
      console.log(value);
    }
  }
};
</script>

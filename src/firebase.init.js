// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAc0_RQ_eXXfq88Go_CUmM9-tGSdUytXVE',
	authDomain: 'case-warehouse.firebaseapp.com',
	projectId: 'case-warehouse',
	storageBucket: 'case-warehouse.appspot.com',
	messagingSenderId: '1074062955073',
	appId: '1:1074062955073:web:a3a8fa8242425ca5b5acc0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth

import auth from '@react-native-firebase/auth';

export function signIn({ email, password }) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signUp({ email, password }) {
  console.log('signup')
  return auth().createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!').then(() => {
    console.log('done')
  })
}

export function subscribeAuth(callback) {
  return auth().onAuthStateChanged(callback);
}

export function signOut() {
  return auth().signOut();
}

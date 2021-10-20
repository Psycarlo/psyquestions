import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  writeBatch,
  doc,
  arrayUnion,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCCJAsURS-KxLl96locP-Zf7mvkfy1-So0',
  authDomain: 'psyquestions-c6148.firebaseapp.com',
  projectId: 'psyquestions-c6148',
  storageBucket: 'psyquestions-c6148.appspot.com',
  messagingSenderId: '598700232388',
  appId: '1:598700232388:web:301a3de9f9c1d3c7b44391',
}

const SEASON = 'v1'

const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)
// onAuthStateChanged(auth, (user) => {
//   // TODO
//   //console.log(user)
// })

const db = getFirestore(firebaseApp)

export const getQuestions = async () => {
  const questionsQuery = query(collection(db, `questions-${SEASON}`))
  const questionsSnapshop = await getDocs(questionsQuery)
  const questionsArray = []
  questionsSnapshop.forEach((doc) => {
    questionsArray.push({ id: doc.id, questionInfo: { ...doc.data() } })
  })
  return questionsArray
}

export const getQuestion = async (questionId) => {
  const questionQuery = query(
    collection(db, `questions-${SEASON}`),
    where('id' == questionId)
  )
  const questionSnapshop = await getDocs(questionQuery)
  const question = []
  questionSnapshop.forEach((doc) => {
    question.push({ id: doc.id, questionInfo: { ...doc.data() } })
  })
  return question[0]
}

export const insertResults = async (results, username) => {
  const batch = writeBatch(db)
  // TODO: Criar doc se não exister - id: {green-votes: [], red-votes: []}
  for (const [key, value] of Object.entries(results)) {
    const resultRef = doc(db, `results-${SEASON}`, `${parseInt(key) + 1}`)
    if (value.choice === 'green') {
      batch.update(resultRef, { 'green-votes': arrayUnion(username) })
    } else {
      batch.update(resultRef, { 'red-votes': arrayUnion(username) })
    }
  }
  await batch.commit()
  return true
}

export const login = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      return user
    })
    .catch(() => {
      return null
    })
  return null
}

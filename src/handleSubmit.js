import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "./firebase"
 
const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
//     const ref = collection(firestore, "test_data") // Firebase creates this automatically
//  
//     let data = {
//         testData: testdata
//     }
//     
//     try {
//         addDoc(ref, data)
//     } catch(err) {
//         console.log(err)
//     }
}
 
export default handleSubmit
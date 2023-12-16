// câu 3: giải thích code về đoạn code dưới dây




import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"; // dòng import này là để nhập cái "initializeApp" từ bên firebase nhằm lấy thông tin từ  firebase 
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"; // dòng import này sẽ lấy xác thật tài khoản, tạo email(account), mật khẩu và đăng nhập tài khoản dựa vào những email, password đã tạo trong firebase





const firebaseConfig = {
  apiKey: "AIzaSyDz732QfFKUTkpBpKClG4afPIQaK9PzYNI",
  authDomain: "fire-base-53764.firebaseapp.com",
  databaseURL: "https://fire-base-53764-default-rtdb.firebaseio.com",
  projectId: "fire-base-53764",
  storageBucket: "fire-base-53764.appspot.com",
  messagingSenderId: "608918146594",
  appId: "1:608918146594:web:335a82e44762136505847b",
  measurementId: "G-44D2LDBBC4",
};
//dòng const firebaseConfig này bên trong được lấy từ firebase và có tác dụng gọi biến "firebaseConfig" chứa những thứ như trên



const app = initializeApp(firebaseConfig);
//dòng const này gọi biến "app" thừa hưởng những thông tin mà thằng "firebaseConfig" sở hữu và cơ bản hơn thì thằng app = firebaseConfig nó như là cái shortcut vậy lmao lmao
export const auth = getAuth(app);
//dòng này sẽ vừa xuất vừa gọi biến "auth" 
export const Resgister = async (auth, email, password) => {
    //                    ^
    //                    |
//       Hai cái này nó sẽ đống bộ hóa 
    //            |
    //            V
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    alert("Đăng kí thành công");
    console.log(res);
  } catch (error) {
    alert("Đăng kí thất bại");
    console.log(error.code);
  }
};
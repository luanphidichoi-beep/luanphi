/*
  Cấu hình Firebase cho chế độ học chung (phòng riêng + ném xao nhãng).
  Để trống (null) thì game vẫn chơi một mình bình thường.

  Cách lấy: Firebase Console → Project settings → General → Your apps → Web app → "firebaseConfig".
  Nhớ bật Realtime Database và copy cả dòng databaseURL.
*/
window.FIREBASE_CONFIG = null;
/* Ví dụ:
window.FIREBASE_CONFIG = {
  apiKey: "...",
  authDomain: "ten-du-an.firebaseapp.com",
  databaseURL: "https://ten-du-an-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ten-du-an",
  appId: "..."
};
*/

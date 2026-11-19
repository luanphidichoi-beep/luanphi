# Ngồi Vững

Game giữ thăng bằng cho cả một lớp 20 bạn đang ngồi học bài buổi tối. Một cú nghiêng điện thoại điều khiển cả lớp, nhưng mỗi bạn nhạy khác nhau, và bạn nào ngồi gần thứ gây xao nhãng thì bị kéo mạnh hơn. Game kết thúc khi cả lớp đều ngã. Mấy thứ gây xao nhãng xung quanh (tin nhắn Zalo, mèo nhảy lên bàn, karaoke nhà hàng xóm, mùi mì tôm, buồn ngủ...) sẽ kéo bạn ấy ngã khỏi ghế. Người chơi nghiêng điện thoại để giữ cho bạn ấy ngồi thẳng.

## Cách chơi

- **Điện thoại:** nghiêng trái / phải để đẩy người lại cho thẳng.
- Không dùng chạm màn hình. Nếu chưa đọc được cảm biến, game sẽ báo để bạn cấp quyền rồi thử lại.
- **Máy tính:** phím ← → (hoặc A / D).
- Mỗi thứ gây xao nhãng hiện cảnh báo ở một bên trước khoảng 1 giây, rồi kéo người về phía đó. Nghiêng ngược lại trước khi nó tới.
- Ngồi càng thẳng thì học càng nhanh, được nhiều "trang" hơn. Càng về khuya, game càng khó.

## Chạy thử

Toàn bộ game nằm trong một file `index.html`, không cần cài gì.

Cảm biến nghiêng của điện thoại chỉ hoạt động khi trang được mở qua **HTTPS**. Cách đơn giản nhất là bật GitHub Pages:
Settings → Pages → Source: *Deploy from a branch* → chọn nhánh chứa file này, thư mục `/ (root)`.
Trên iPhone, trình duyệt sẽ hỏi quyền truy cập chuyển động khi bấm "Bắt đầu học". Hãy chọn Cho phép.

## Học chung: phòng riêng và ném xao nhãng

Khi đã cấu hình Firebase, màn hình bắt đầu có thêm ô **Tên** và **Mã phòng**. Ai nhập cùng một mã sẽ vào cùng phòng:

- Tên các bạn trong phòng hiện ở đầu màn hình: 🪑 đang học, 💥 vừa ngã, 💤 đang nghỉ.
- Mỗi 5 trang học được bạn có thêm 1 **lượt ném** (tối đa 3). Chạm vào tên một bạn để ném một thứ gây xao nhãng (📱 🎮 🍜 🎤 🐈) sang bàn bạn ấy. Bạn ấy sẽ thấy cảnh báo "An ném: Mèo nhảy lên bàn".
- Khi ngã, bảng xếp hạng của phòng hiện ra.

### Cài Firebase (miễn phí, khoảng 5 phút)

1. Vào https://console.firebase.google.com → **Add project** → đặt tên → tạo.
2. Menu bên trái: **Build → Realtime Database → Create database** → chọn vị trí Singapore (`asia-southeast1`) → **Start in test mode**.
3. Tab **Rules**, dán đoạn sau rồi **Publish** (chỉ cho đọc/ghi trong mục `rooms`):
   ```json
   { "rules": { "rooms": { "$room": { ".read": true, ".write": true } } } }
   ```
4. **Project settings** (bánh răng) → **General** → mục *Your apps* → bấm biểu tượng `</>` (Web) → đặt tên → **Register app**. Copy đoạn `firebaseConfig`.
5. Mở file `firebase-config.js`, thay `null` bằng đoạn cấu hình vừa copy (phải có dòng `databaseURL`).

Lưu ý: ai biết mã phòng đều vào được phòng đó, nên đừng dùng tên thật đầy đủ hay thông tin riêng tư làm tên.

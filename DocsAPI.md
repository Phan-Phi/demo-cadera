# **cadera Website backend**

- Đây là project backend và cms của website cadera website:

## **Mục đích của project**

---

- Cung cấp cho website cadera một api backend và cms để sử dụng.

## **Lưu ý**

---

- Các dev cho project này nên cài pre-commit đề auto format file trước khi commit
  - Chạy lện này trong môi trường dev `pip install pre-commit`
  - Chạy lệnh này trong môi trường dev `pre-commit install` - extension sẽ được thêm vào .github ( mỗi lần commit sẽ tự format, nhớ git add lại nếu pre-commit báo fixing file nào đó )
  - Có thể tự chạy trước bằng lệnh `pre-commit run --all`

## **Để chạy và phát triển dự án**

---

1. Cài đặt docker và docker-compose
2. Chạy lệnh `docker-compose -f docker-compose.yml up --build`

## **API note**

---

- **Authorization API**<br />
  - `API method POST`: header của các endpoint method POST phải có field Authoriazation chứa API key.
  - `API key` : dummy
  - `Header` Authorization: Api-Key {API key}
- **Api sẽ paginate theo dạng limit và offset vd:**<br />
  `/api/v2/pages/?limit=10&offset=1` Mặc định data trong response của các endpoint của ( page ) đều được paginate dù có có limit hay offset nên response của endpoint cho ( page) có thêm 2 field: - `next`: link hoặc null (link là một endpoint lấy data ở page sau, null khi không có data ở page sau) - `previous`: link hoặc null (link là một endpoint lấy data ở page trước, null khi không có data ở page trước)
- **Các endpoints**:
  - `/api/v2/` Đây là endpoint trả về settings chung cho frontend.
  - `/api/v2/submissions/` Đây là endpoint để tạo liên hệ.
    - `method` : post
    - `payload` :
      - email ( string ): email `(bắt buộc)`
      - phone_number ( string ): số điện thoại `(bắt buộc)`
      - name ( string ): tên `(bắt buộc)`
      - company ( string ): tên công ty `(bắt buộc)`
      - message ( string ):tin nhắn `(bắt buộc)`
    - `response`:
      - Success: status code 201, data trả về là các field trên
      - Fail: status code 400, không có data trả về
  - `/api/v2/subscribers/` Đây là endpoint để khách subscribe.
    - `method` : post
    - `payload` :
      - email ( string ) : email `(bắt buộc)`
    - `response`:
      - Success: status code 201, data trả về là các field trên
      - Fail: status code từ 400, không có data trả về
- **Tham số thường sử dụng**:
  - `?type={str}` ( Cho page ) Nhận vào tên của loại trang muốn lấy - Sẽ trả về các trang có loại tương ứng, hiện tại đang có các loại trang:
    - `home.HomePage`
    - `contact.ContactPage`
    - `service.ServiceDetailPage`
    - `service.ServiceListingPage`
    - `about.AboutPage`
    - `client.ClientListingPage`
    - `client.ClientDetailPage`
    - `?fields={str}` ( Cho page, setting ) Nhận vào tên các trường dữ liệu ngăn cách với nhau bằng dấu phẩy - Sẽ trả về những trường dữ liệu ứng với những trường đã khai báo vd: `?fields=title,banner`.
    - Để lấy hết thì sử dụng `?fields=*` ( lưu ý có thể sẽ không lấy hết được các trường dữ liệu mong muốn nếu không khai báo tham số type ở trên ).
  - `?child_of={int}` ( Cho page ) Nhận vào id của một trang - Sẽ trả về các trang con của trang tương ứng,
  - `?{field name}={any}` ( Cho page ) Nhận vào giá trị muốn filter - Sẽ trả về các trang có trường dữ liệu trùng với giá trị tương ứng.
  - `?order={str}` ( Cho page ) Nhận vào giá trị là tên trường dữ liệu muốn sắp xếp theo - Sẽ trả về các trang được sắp xếp theo trường dữ liệu tương ứng.
  - `?search={str}` (cho page) Nhận vào giá trị là các đoạn text để tìm kiếm các trang có chứa các đoạn text đó, các đoạn text được ngăn cách bởi dấu `+`, field `search_operator` đi chung với `search` để định nghĩa các đoạn text được xử lí, `search_operator` có 2 giá trị `and` và `or`
    - ví dụ search các page chứa đoạn text "lorem ipsum" là `?search=lorem%20ipsum`,
    - ví dụ search các page chứa cả 2 đoạn text độc lập nhau, ví dụ đoạn "lorem ipsum" và "abc xyz" là `?search=lorem%20ipsum+abc%20xyz`, khi không khai báo field `search_operator` câu query được hiểu ngầm là dùng operator `and`, nếu muốn kết quả là các page chứa 1 trong 2 đoạn text là `?search=lorem%20ipsum+abc%20xyz&search_operator=or`

## **API ví dụ**

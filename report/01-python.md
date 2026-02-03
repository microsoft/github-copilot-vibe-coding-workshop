01: Python Backend Development (FastAPI)
1. Mục tiêu (Idea Level)

Mục tiêu của bước này là xây dựng backend API ban đầu bằng Python (FastAPI) cho một ứng dụng mạng xã hội đơn giản (micro social media), phục vụ cho các chức năng cốt lõi:

Tạo, xem, cập nhật, xoá bài viết (Posts)

Bình luận (Comments)

Thích / bỏ thích bài viết (Like / Unlike)

Cung cấp API tài liệu hoá (OpenAPI / Swagger)

Sử dụng SQLite làm cơ sở dữ liệu nhẹ, dễ triển khai

⚠️ Lưu ý quan trọng:

Đây là hệ thống gốc (source system), KHÔNG phải migrate.

Toàn bộ logic, API contract, và dữ liệu chuẩn được định nghĩa ở bước này.

Các bước migrate sau (Java, .NET) phải bám sát đúng hành vi ở đây.

2. Phương pháp luận tổng thể

Hệ thống được thiết kế theo hướng API-first và contract-driven development:

Xác định yêu cầu nghiệp vụ (Product Requirements)

Thiết kế API contract bằng OpenAPI

Xây dựng FastAPI app bám sát OpenAPI

Kiểm chứng API bằng Swagger UI

Cách tiếp cận này đảm bảo:

Dễ migrate sang công nghệ khác

Dễ kiểm thử

Tránh phụ thuộc UI

3. Kiến trúc hệ thống (Logical Level)
3.1 Sơ đồ kiến trúc logic
Client (Browser / API Tool)
        |
        v
   FastAPI Application
        |
        v
     SQLite Database
3.2 Phân lớp logic
python/
│
├── main.py        # Entry point, routing, app lifecycle
├── models.py     # Data models & schema
├── database.py   # Database connection & initialization
├── requirements.txt
└── sns_api.db    # SQLite database file
4. Thiết kế vật lý (Physical Level)
4.1 Công nghệ sử dụng
Thành phần	Công nghệ
Ngôn ngữ	Python 3.x
Framework	FastAPI
Web Server	Uvicorn
Database	SQLite
API Spec	OpenAPI 3.x
5. Phân tích chi tiết từng thành phần
5.1 main.py – Entry Point

Vai trò:

Khởi tạo FastAPI app

Định nghĩa toàn bộ endpoint

Kết nối database

Expose Swagger UI (/docs)

Đặc điểm:

FastAPI tự động sinh OpenAPI từ code

Các endpoint được nhóm theo nghiệp vụ (posts, comments, likes)

5.2 models.py – Data Models

Vai trò:

Định nghĩa schema dữ liệu

Ánh xạ request / response

Ví dụ logic:

Post: id, title, content, author

Comment: id, post_id, content, author

Like: post_id, username

👉 Các model này chính là nguồn gốc để sinh openapi.yaml.

5.3 database.py – Database Layer

Vai trò:

Tạo kết nối SQLite

Khởi tạo bảng nếu chưa tồn tại

Đặc điểm quan trọng:

Database luôn được khởi tạo khi app start

Không dùng migration phức tạp (phù hợp demo & workshop)

6. API Contract & Swagger
6.1 Swagger UI

FastAPI cung cấp sẵn:

GET /docs

Cho phép:

Xem toàn bộ endpoint

Test API trực tiếp trên trình duyệt


👉 Bước migrate KHÔNG được thay đổi hành vi ở đây.

7. Kiểm thử ban đầu

Các kiểm tra tối thiểu:

App khởi động thành công

Truy cập /docs hiển thị Swagger UI

Gọi thử:

GET /health

POST /posts

GET /posts

Nếu các bước trên OK → Python backend hợp lệ.

8. Kết luận

Bước 01 – Python Backend Development đóng vai trò:

Là hệ thống chuẩn ban đầu (baseline)

Là nguồn sự thật (single source of truth) cho toàn bộ migrate

Định nghĩa rõ ràng:

API behavior

Data model

Response format
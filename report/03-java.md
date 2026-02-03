# 03: Java Migration from Python

## 3.1 Bối cảnh và mục tiêu (Context & Goal)

Contoso là một công ty kinh doanh các sản phẩm phục vụ hoạt động ngoài trời. Để hỗ trợ chiến dịch marketing, công ty triển khai một **micro social media website** cho phép người dùng đăng bài, bình luận và like/unlike bài viết.

Hệ thống backend ban đầu được xây dựng bằng **Python (FastAPI)**. Tuy nhiên, do nhân sự Python không còn, ban lãnh đạo yêu cầu **migrate backend sang Java**, sử dụng **Spring Boot**, nhằm đảm bảo khả năng bảo trì và mở rộng lâu dài.

### Mục tiêu của bước Java Migration

- Chuyển đổi toàn bộ backend FastAPI sang Spring Boot
- Giữ nguyên **API contract** (theo `openapi.yaml`)
- Áp dụng kiến trúc backend chuẩn doanh nghiệp
- Đảm bảo hệ thống hoạt động ổn định sau migrate

---

## 3.2 Phương pháp luận migrate (Methodology)

Quá trình migrate được thực hiện theo **3 mức độ trừu tượng**:

### 1. Mức ý tưởng (Conceptual Level)
- Hệ thống là một RESTful API
- Client giao tiếp thông qua HTTP
- Backend xử lý nghiệp vụ và trả JSON response
- API contract được định nghĩa bởi OpenAPI

### 2. Mức luận lý (Logical Level)
- Áp dụng **Layered Architecture**
- Phân tách rõ:
  - Controller
  - Service
  - Model / DTO
- Tách biệt HTTP layer và business logic

### 3. Mức vật lý (Physical Level)
- Ngôn ngữ: Java 21
- Framework: Spring Boot 3.x
- Build tool: Gradle
- Database: SQLite (`sns_api.db`)
- Port chạy ứng dụng: `8080`

---

## 3.3 Kiến trúc tổng thể hệ thống

### Sơ đồ kiến trúc backend Java

Client (Browser / Frontend)
|
| HTTP Request (JSON)
v
+---------------------+
| Controller |
| (REST Endpoints) |
+---------------------+
|
v
+---------------------+
| Service |
| (Business Logic) |
+---------------------+
|
v
+---------------------+
| Model / DTO |
| (Data Structure) |
+---------------------+
|
v
SQLite DB


Kiến trúc này giúp:
- Dễ bảo trì
- Dễ mở rộng
- Phù hợp với hệ thống backend quy mô vừa và lớn

---

## 3.4 Công nghệ sử dụng

| Thành phần | Công nghệ |
|----------|-----------|
| Ngôn ngữ | Java 21 |
| Framework | Spring Boot 3.x |
| Build Tool | Gradle |
| Web | Spring Web |
| Validation | Spring Validation |
| API Docs | OpenAPI + Swagger UI |
| Database | SQLite |

---

## 3.5 Luồng xử lý Request – Response

Luồng xử lý của một request điển hình:

1. Client gửi HTTP request (GET / POST / PATCH / DELETE)
2. Spring Boot định tuyến request đến Controller
3. Controller gọi Service tương ứng
4. Service xử lý nghiệp vụ
5. Kết quả được đóng gói thành DTO
6. Controller trả response về client

### Minh hoạ luồng xử lý

Client
|
v
HTTP Request
|
v
Controller
|
v
Service
|
v
Model / DTO
|
v
HTTP Response


---

## 3.6 Giải thích các thành phần chính

### 3.6.1 Controller Layer

Controller là tầng:
- Tiếp nhận HTTP request
- Mapping endpoint
- Validate dữ liệu đầu vào
- Trả response

**Không chứa business logic**

Ví dụ:

```java
@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }
}
3.6.2 Service Layer
Service chịu trách nhiệm:

Xử lý nghiệp vụ

Thực hiện logic chính của hệ thống

Không phụ thuộc HTTP hay framework web

Ví dụ:

@Service
public class PostService {

    public List<Post> getAllPosts() {
        return List.of();
    }
}
3.6.3 Model / DTO Layer
Model hoặc DTO dùng để:

Đại diện dữ liệu

Truyền dữ liệu giữa các tầng

Đảm bảo type-safety

Ví dụ:

public class Post {
    private String id;
    private String content;

    public String getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
3.7 OpenAPI & Swagger UI
Sau khi migrate, hệ thống backend Java:

Render Swagger UI

Expose OpenAPI document giống 100% openapi.yaml

Các endpoint quan trọng
http://localhost:8080/swagger-ui/index.html
http://localhost:8080/openapi.yaml
Swagger UI giúp:

Kiểm tra nhanh API

Xem request/response mẫu

Hỗ trợ test backend độc lập frontend

3.8 Đánh giá kết quả migrate
Kết quả đạt được

Toàn bộ API được migrate thành công

Endpoint giữ nguyên theo OpenAPI

Ứng dụng build và chạy ổn định

Swagger UI hiển thị đầy đủ

Kiến trúc rõ ràng, dễ bảo trì

Lợi ích đạt được

Tăng độ an toàn kiểu dữ liệu

Phù hợp môi trường doanh nghiệp

Dễ phát triển lâu dài

Kết luận

Quá trình migrate backend từ Python (FastAPI) sang Java (Spring Boot) đã hoàn thành thành công, đáp ứng đầy đủ yêu cầu kỹ thuật, kiến trúc và nghiệp vụ của hệ thống.
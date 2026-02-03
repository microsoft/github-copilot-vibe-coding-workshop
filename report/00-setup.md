# 00 – Development Environment  
## GitHub Copilot Vibe Coding Workshop


## 1. Mục tiêu của mục 00
Mục tiêu của phần này là tìm hiểu và thiết lập môi trường phát triển cho workshop **GitHub Copilot Vibe Coding**, bao gồm:
- Làm quen với GitHub Codespaces
- Cài đặt và sử dụng GitHub Copilot trong Visual Studio Code
- Hiểu vai trò của Copilot Agent Mode và MCP
- Chuẩn bị môi trường để thực hiện các bước tiếp theo của workshop

---

## 2. Giới thiệu GitHub Codespaces
GitHub Codespaces là một môi trường phát triển trực tuyến (cloud-based development environment) do GitHub cung cấp, cho phép lập trình viên:
- Viết code trực tiếp trên trình duyệt
- Không cần cài đặt công cụ phức tạp trên máy cá nhân
- Có sẵn môi trường đồng nhất cho nhóm hoặc lớp học

Trong workshop này, GitHub Codespaces được khuyến nghị sử dụng vì giúp tiết kiệm thời gian cài đặt và tránh xung đột môi trường.

---

## 3. GitHub Copilot và Vibe Coding
GitHub Copilot là công cụ hỗ trợ lập trình dựa trên AI, có khả năng:
- Gợi ý code theo ngữ cảnh
- Sinh hàm, class, API endpoint
- Hỗ trợ viết tài liệu, comment và cấu trúc project

**Vibe Coding** là phong cách lập trình kết hợp giữa tư duy của lập trình viên và khả năng hỗ trợ chủ động của AI, giúp tăng tốc độ phát triển phần mềm và giảm các thao tác lặp lại.

---

## 4. Copilot Agent Mode và MCP
### 4.1 Copilot Agent Mode
Copilot Agent Mode cho phép GitHub Copilot:
- Phân tích toàn bộ project
- Tạo nhiều file cùng lúc
- Thực hiện các nhiệm vụ phức tạp theo yêu cầu (ví dụ: tạo backend API, migrate code)

Agent Mode giúp Copilot hoạt động giống như một “trợ lý lập trình” thay vì chỉ gợi ý từng dòng code.

### 4.2 MCP (Model Context Protocol)
MCP cho phép Copilot kết nối với các nguồn ngữ cảnh mở rộng (server, tool, metadata) nhằm:
- Hiểu rõ hơn cấu trúc hệ thống
- Sinh code chính xác hơn
- Phù hợp với từng ngôn ngữ và framework

---

## 5. Quá trình thiết lập môi trường thực tế
Các bước thực hiện:
1. Fork repository **github-copilot-vibe-coding-workshop** từ GitHub
2. Mở repository bằng **GitHub Codespaces**
3. Chờ hệ thống khởi tạo môi trường phát triển
4. Kết nối GitHub Copilot trong VS Code (web)

Trong quá trình khởi tạo, Codespaces gặp lỗi liên quan đến cấu hình **devcontainer** và hiển thị trạng thái *recovery mode*.

---

## 6. Vấn đề gặp phải và cách xử lý
### 6.1 Vấn đề
- Codespaces không khởi động hoàn chỉnh
- Thông báo lỗi liên quan đến devcontainer configuration
- Một số feature trong devcontainer không cài đặt thành công

### 6.2 Cách xử lý
- Phân tích cấu trúc thư mục `.devcontainer`
- Vô hiệu hóa cấu hình devcontainer bằng cách đổi tên thư mục
- Khởi tạo lại Codespace mới sau khi chỉnh sửa

Sau khi xử lý, Codespaces hoạt động bình thường và có thể tiếp tục workshop.

---

## 7. Kết quả đạt được
- Môi trường phát triển được thiết lập thành công
- GitHub Codespaces hoạt động ổn định
- GitHub Copilot sẵn sàng sử dụng cho các bước tiếp theo
- Hiểu rõ vai trò của Codespaces và Copilot trong quy trình phát triển hiện đại

---

## 8. Nhận xét cá nhân
GitHub Codespaces kết hợp với GitHub Copilot giúp giảm đáng kể thời gian chuẩn bị môi trường và tăng hiệu quả học tập. Việc xử lý lỗi devcontainer cũng giúp sinh viên hiểu rõ hơn về cách cấu hình môi trường phát triển chuyên nghiệp trong thực tế.

Phần Development Environment là nền tảng quan trọng để thực hiện các nội dung tiếp theo của workshop.

---

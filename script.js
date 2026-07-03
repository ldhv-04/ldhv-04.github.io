document.querySelector("[data-year]").textContent = new Date().getFullYear();

const vi = {
  "Skip to content": "Bỏ qua đến nội dung chính",
  "Vũ Lê Đình Hoàng — home": "Vũ Lê Đình Hoàng — trang chủ",
  "Primary navigation": "Điều hướng chính",
  "Technical profile summary": "Tóm tắt hồ sơ kỹ thuật",
  "Portfolio highlights": "Điểm nổi bật của portfolio",
  "External profiles": "Hồ sơ bên ngoài",
  "CropVision system flow": "Luồng hệ thống CropVision",
  "CropVision technologies": "Công nghệ của CropVision",
  "Drowsiness prototype system flow": "Luồng hệ thống nguyên mẫu phát hiện buồn ngủ",
  "Drowsiness prototype technologies": "Công nghệ của nguyên mẫu phát hiện buồn ngủ",
  "Retinal fundus image beside a Grad-CAM attention map": "Ảnh đáy mắt võng mạc bên cạnh bản đồ chú ý Grad-CAM",
  "WSL-DR technologies": "Công nghệ của WSL-DR",
  "Computer Vision & Applied AI": "Thị giác Máy tính & AI Ứng dụng",
  "About": "Giới thiệu",
  "Focus": "Chuyên môn",
  "Projects": "Dự án",
  "Research": "Nghiên cứu",
  "Contact": "Liên hệ",
  "Download CV": "Tải CV",
  "Open to internship opportunities": "Đang tìm kiếm cơ hội thực tập",
  "Computer Vision & Applied AI Student": "Sinh viên Thị giác Máy tính & AI Ứng dụng",
  "I build practical computer vision prototypes that connect model inference with usable software workflows. My current work spans crop disease detection with YOLOv8 and FastAPI, medical-image research with PyTorch and Grad-CAM, and an ESP32-CAM edge-AI prototype.": "Tôi xây dựng các nguyên mẫu thị giác máy tính thực tiễn, kết nối suy luận mô hình với quy trình phần mềm có thể sử dụng. Công việc hiện tại gồm phát hiện bệnh cây bằng YOLOv8 và FastAPI, nghiên cứu ảnh y khoa với PyTorch và Grad-CAM, cùng nguyên mẫu Edge AI trên ESP32-CAM.",
  "View projects": "Xem dự án",
  "Contact me": "Liên hệ",
  "Working at the intersection of": "Kết hợp ba lĩnh vực",
  "Vision models": "Mô hình thị giác",
  "Detection, grading, interpretation": "Phát hiện, phân loại, diễn giải",
  "Software workflows": "Quy trình phần mềm",
  "APIs, validation, persisted results": "API, kiểm tra đầu vào, lưu kết quả",
  "Edge constraints": "Ràng buộc thiết bị biên",
  "Offline operation, memory, connectivity": "Hoạt động ngoại tuyến, bộ nhớ, kết nối",
  "Ho Chi Minh City, Vietnam": "TP. Hồ Chí Minh, Việt Nam",
  "Focused case studies": "Dự án tiêu biểu",
  "Computer vision across cloud and device": "Thị giác máy tính trên máy chủ và thiết bị",
  "Co-author publication in crop vision": "Đồng tác giả nghiên cứu thị giác nông nghiệp",
  "Student": "Sinh viên",
  "Internship-level, evidence-led profile": "Hồ sơ thực tập dựa trên bằng chứng",
  "01 / About": "01 / Giới thiệu",
  "Models are useful when they fit a real workflow.": "Mô hình chỉ hữu ích khi phù hợp với quy trình thực tế.",
  "I am a Computer Science student specializing in Computer Vision at the University of Science, VNU-HCM. I am interested in the work around a model as much as the model itself: input validation, interpretable outputs, evaluation, persistence, and operation under hardware or network constraints.": "Tôi là sinh viên Khoa học Máy tính chuyên ngành Thị giác Máy tính tại Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM. Tôi quan tâm cả mô hình lẫn những phần việc xung quanh nó: kiểm tra đầu vào, đầu ra có thể diễn giải, đánh giá, lưu trữ và vận hành trong giới hạn phần cứng hoặc mạng.",
  "My projects explore those connections in smart farming, medical-image research, and embedded vision. I am looking for an internship where I can contribute to practical Computer Vision, Applied AI, or Edge AI work while continuing to strengthen my engineering and evaluation skills.": "Các dự án của tôi khám phá những kết nối đó trong nông nghiệp thông minh, nghiên cứu ảnh y khoa và thị giác nhúng. Tôi đang tìm vị trí thực tập để đóng góp vào các bài toán Thị giác Máy tính, AI Ứng dụng hoặc Edge AI, đồng thời tiếp tục nâng cao kỹ năng kỹ thuật và đánh giá mô hình.",
  "Email ↗": "Email ↗",
  "02 / Technical focus": "02 / Chuyên môn kỹ thuật",
  "A practical toolkit, grouped by what it enables.": "Bộ kỹ năng thực tiễn, được nhóm theo khả năng ứng dụng.",
  "Selected from the supplied CVs and project repositories.": "Được chọn lọc từ CV và mã nguồn các dự án.",
  "Computer Vision": "Thị giác Máy tính",
  "YOLOv8 inference, object detection, image classification, preprocessing, Grad-CAM, medical-image analysis": "Suy luận YOLOv8, phát hiện đối tượng, phân loại ảnh, tiền xử lý, Grad-CAM, phân tích ảnh y khoa",
  "AI & Evaluation": "AI & Đánh giá",
  "AI Software": "Phần mềm AI",
  "FastAPI, Express.js, REST APIs, JWT, PostgreSQL, Docker Compose, pytest, upload validation": "FastAPI, Express.js, REST API, JWT, PostgreSQL, Docker Compose, pytest, kiểm tra tệp tải lên",
  "C/C++, ESP32-CAM, OV2640, TensorFlow Lite Micro, ESP-DL, Edge Impulse / FOMO, FreeRTOS, SD logging, Wi-Fi recovery": "C/C++, ESP32-CAM, OV2640, TensorFlow Lite Micro, ESP-DL, Edge Impulse / FOMO, FreeRTOS, ghi log thẻ SD, khôi phục Wi-Fi",
  "03 / Selected work": "03 / Dự án tiêu biểu",
  "Three systems, three different constraints.": "Ba hệ thống, ba nhóm ràng buộc khác nhau.",
  "Each case study separates demonstrated work from limitations and next steps.": "Mỗi dự án phân biệt rõ phần đã thực hiện, giới hạn và bước tiếp theo.",
  "Graduation project · In progress": "Khóa luận tốt nghiệp · Đang thực hiện",
  "Crop Disease Detection Platform": "Nền tảng Phát hiện Bệnh Cây trồng",
  "Demo: To be updated": "Demo: Sẽ cập nhật",
  "A crop-disease workflow that connects YOLOv8 inference to authenticated scans, validated image uploads, stored detections, and scan history.": "Quy trình phát hiện bệnh cây kết nối suy luận YOLOv8 với lượt quét có xác thực, kiểm tra ảnh tải lên, lưu kết quả phát hiện và lịch sử quét.",
  "Image upload": "Tải ảnh lên",
  "PostgreSQL history": "Lịch sử PostgreSQL",
  "Repository evidence": "Bằng chứng từ mã nguồn",
  "Bounding boxes, class names, and confidence scores": "Hộp giới hạn, tên lớp và điểm tin cậy",
  "JWT-protected analysis and history routes": "API phân tích và lịch sử được bảo vệ bằng JWT",
  "Transactional result persistence and physical image storage": "Lưu kết quả theo giao dịch và lưu trữ tệp ảnh",
  "10 MB and MIME-type validation with API tests": "Kiểm tra giới hạn 10 MB và loại MIME bằng kiểm thử API",
  "Read full case study": "Xem chi tiết dự án",
  "Problem": "Vấn đề",
  "A model prediction alone does not give an agricultural user a usable way to submit images, receive structured detections, or revisit earlier scans.": "Một dự đoán đơn lẻ không cung cấp cho người dùng nông nghiệp cách thuận tiện để gửi ảnh, nhận kết quả có cấu trúc hoặc xem lại các lượt quét trước.",
  "Motivation": "Động lực",
  "Explore how computer vision can support crop monitoring by turning detections into a structured, reviewable software workflow.": "Khám phá cách thị giác máy tính hỗ trợ giám sát cây trồng bằng cách đưa kết quả phát hiện vào quy trình phần mềm có cấu trúc và có thể xem lại.",
  "My role": "Vai trò của tôi",
  "Built or contributed to the FastAPI YOLOv8 service, image validation, bounding-box outputs, authenticated Express workflow, PostgreSQL result persistence, Docker setup, and prediction/upload tests.": "Xây dựng hoặc đóng góp vào dịch vụ YOLOv8 bằng FastAPI, kiểm tra ảnh, đầu ra hộp giới hạn, quy trình Express có xác thực, lưu kết quả vào PostgreSQL, cấu hình Docker và kiểm thử dự đoán/tải ảnh.",
  "Solution": "Giải pháp",
  "The FastAPI service validates images and returns detections. The Express layer protects scan routes with JWT, persists uploaded files, and stores samples and detection boxes in a PostgreSQL transaction.": "Dịch vụ FastAPI kiểm tra ảnh và trả về kết quả phát hiện. Lớp Express bảo vệ API quét bằng JWT, lưu tệp tải lên, đồng thời lưu mẫu và hộp phát hiện trong một giao dịch PostgreSQL.",
  "Current result": "Kết quả hiện tại",
  "The repository supports local multi-service operation, inference integration, protected scan submission, physical image persistence, and per-user scan history. Current status: in progress.": "Mã nguồn hỗ trợ vận hành nhiều dịch vụ cục bộ, tích hợp suy luận, gửi lượt quét có bảo vệ, lưu tệp ảnh và lịch sử quét theo người dùng. Trạng thái hiện tại: đang thực hiện.",
  "Limitations": "Giới hạn",
  "Needs broader real-world crop data, clearer model evaluation, user testing, and a public deployment. The supplied repository does not establish field impact or production use.": "Cần dữ liệu cây trồng thực tế đa dạng hơn, đánh giá mô hình rõ ràng hơn, kiểm thử người dùng và bản triển khai công khai. Mã nguồn hiện tại chưa chứng minh tác động thực địa hoặc sử dụng trong môi trường vận hành.",
  "Next steps": "Bước tiếp theo",
  "Strengthen dataset and evaluation reporting, improve the scan workflow, monitor inference failures, and prepare screenshots and a short demo.": "Cải thiện bộ dữ liệu và báo cáo đánh giá, hoàn thiện quy trình quét, giám sát lỗi suy luận, đồng thời chuẩn bị ảnh chụp và demo ngắn.",
  "Academic prototype": "Nguyên mẫu học thuật",
  "Edge AI for Driver Safety": "Edge AI hỗ trợ An toàn Lái xe",
  "An ESP32-CAM prototype exploring local eye-state monitoring and a network-resilient path for recording and forwarding device events.": "Nguyên mẫu ESP32-CAM thử nghiệm giám sát trạng thái mắt cục bộ và quy trình ghi, truyền sự kiện có khả năng chịu gián đoạn mạng.",
  "OV2640 capture": "Thu ảnh OV2640",
  "Edge inference": "Suy luận tại biên",
  "SD event log": "Log sự kiện trên SD",
  "Wi-Fi upload": "Tải lên qua Wi-Fi",
  "ESP32-CAM capture and PSRAM-aware buffering": "Thu ảnh ESP32-CAM và bộ đệm có tính đến PSRAM",
  "FreeRTOS mutexes around logger and uploader access": "Mutex FreeRTOS cho truy cập logger và uploader",
  "upload state transitions": "chuyển trạng thái tải lên",
  "Rollback and exponential backoff after network failure": "Hoàn tác và backoff lũy thừa sau lỗi mạng",
  "A driver-monitoring prototype should keep its local workflow available during intermittent connectivity instead of treating the network as a hard dependency.": "Nguyên mẫu giám sát tài xế cần duy trì quy trình cục bộ khi kết nối chập chờn, thay vì phụ thuộc hoàn toàn vào mạng.",
  "Explore how camera input, lightweight on-device inference, local event handling, and delayed synchronization fit within ESP32-CAM constraints.": "Khám phá cách đầu vào camera, suy luận nhẹ trên thiết bị, xử lý sự kiện cục bộ và đồng bộ trễ hoạt động trong giới hạn của ESP32-CAM.",
  "The CV records work on ESP-DL face detection, dynamic 96×96 eye-region preprocessing, INT8 FOMO inference with TensorFlow Lite Micro and PSRAM, sustained-closure filtering, UART warnings, Telegram alerts, and a FreeRTOS upload task.": "CV ghi nhận công việc về phát hiện khuôn mặt bằng ESP-DL, tiền xử lý vùng mắt động 96×96, suy luận FOMO INT8 với TensorFlow Lite Micro và PSRAM, lọc trạng thái nhắm mắt kéo dài, cảnh báo UART, cảnh báo Telegram và tác vụ tải lên FreeRTOS.",
  "The CV describes an offline eye-state pipeline with local warning logic. The repository directly shows OV2640 capture plus SD-card JSONL logging, transaction-like file states, streaming upload, rollback, and network backoff.": "CV mô tả pipeline trạng thái mắt ngoại tuyến với logic cảnh báo cục bộ. Mã nguồn trực tiếp thể hiện thu ảnh OV2640, ghi JSONL lên thẻ SD, trạng thái tệp tương tự giao dịch, tải luồng, hoàn tác và backoff mạng.",
  "Academic prototype. The repository demonstrates local camera operation and a resilient store-and-forward logging path; the full drowsiness pipeline is documented in the CV and design reports.": "Nguyên mẫu học thuật. Mã nguồn thể hiện camera cục bộ và quy trình lưu-chuyển tiếp log có khả năng phục hồi; pipeline phát hiện buồn ngủ đầy đủ được mô tả trong CV và báo cáo thiết kế.",
  "Not a certified safety product. The supplied source does not provide controlled accuracy, latency, memory, lighting, or face-angle evaluation, and does not fully expose every CV-listed inference component.": "Không phải sản phẩm an toàn được chứng nhận. Mã nguồn chưa cung cấp đánh giá có kiểm soát về độ chính xác, độ trễ, bộ nhớ, ánh sáng hoặc góc mặt, và chưa công khai đầy đủ mọi thành phần suy luận được nêu trong CV.",
  "Consolidate the inference firmware into the public repository, measure latency and memory use, build a controlled eye-state evaluation set, and test low-light and off-angle behavior.": "Hợp nhất firmware suy luận vào kho mã nguồn công khai, đo độ trễ và bộ nhớ, xây dựng tập đánh giá trạng thái mắt có kiểm soát, đồng thời thử nghiệm trong ánh sáng yếu và góc mặt lệch.",
  "Research implementation": "Bản triển khai nghiên cứu",
  "Weakly Supervised Diabetic Retinopathy Grading": "Phân độ Võng mạc Đái tháo đường với Học Yếu giám sát",
  "Repository visualization: original image and model attention output.": "Hình minh họa từ mã nguồn: ảnh gốc và đầu ra chú ý của mô hình.",
  "A PyTorch research implementation for five-class diabetic retinopathy grading with lesion-aware prompts and interpretable attention outputs.": "Bản triển khai nghiên cứu bằng PyTorch cho bài toán phân độ võng mạc đái tháo đường 5 lớp, sử dụng gợi ý vùng tổn thương và đầu ra chú ý có thể diễn giải.",
  "Recorded validation metric": "Chỉ số validation được ghi nhận",
  "Checkpoint name and repository documentation": "Tên checkpoint và tài liệu mã nguồn",
  "Detailed lesion annotations are expensive. Weak supervision investigates whether image-level labels can support grading while still producing lesion-aware visual explanations.": "Gán nhãn chi tiết vùng tổn thương rất tốn kém. Học yếu giám sát khảo sát khả năng dùng nhãn mức ảnh để phân độ, đồng thời vẫn tạo giải thích trực quan có nhận biết tổn thương.",
  "Study medical-image model design and interpretation in a setting where annotation detail is limited.": "Nghiên cứu thiết kế và diễn giải mô hình ảnh y khoa trong bối cảnh nhãn chi tiết bị hạn chế.",
  "Implemented the five-class PyTorch grading pipeline, EfficientNet-B0 attention module, Swin Transformer backbone, PRCF feature fusion, Grad-CAM outputs, and QWK evaluation.": "Triển khai pipeline phân độ 5 lớp bằng PyTorch, mô-đun chú ý EfficientNet-B0, backbone Swin Transformer, hợp nhất đặc trưng PRCF, đầu ra Grad-CAM và đánh giá QWK.",
  "An EfficientNet attention module produces a lesion prompt, PRCF fuses it with Swin patch features, and the remaining Swin stages produce a grade. Grad-CAM supports inspection of model attention.": "Mô-đun chú ý EfficientNet tạo gợi ý vùng tổn thương, PRCF hợp nhất với đặc trưng patch của Swin, và các tầng Swin còn lại tạo kết quả phân độ. Grad-CAM hỗ trợ kiểm tra vùng chú ý của mô hình.",
  "The repository records a validation QWK of 0.6942 and includes a CLI demo for grade prediction and four-panel attention visualization.": "Mã nguồn ghi nhận QWK validation 0.6942 và có demo CLI để dự đoán cấp độ cùng trực quan hóa chú ý bằng bốn khung hình.",
  "Research implementation only. It needs stronger reproducibility and external validation; attention maps are supportive visualizations, not clinical evidence. Not for diagnosis.": "Chỉ là bản triển khai nghiên cứu. Dự án cần khả năng tái lập tốt hơn và validation bên ngoài; bản đồ chú ý chỉ hỗ trợ trực quan hóa, không phải bằng chứng lâm sàng. Không dùng để chẩn đoán.",
  "Document dataset preparation, add experiment tracking, compare backbones, publish a clearer evaluation report, and validate on an external dataset.": "Tài liệu hóa bước chuẩn bị dữ liệu, thêm theo dõi thí nghiệm, so sánh backbone, công bố báo cáo đánh giá rõ ràng hơn và validation trên bộ dữ liệu ngoài.",
  "04 / Research output": "04 / Công bố nghiên cứu",
  "Supporting research experience.": "Kinh nghiệm nghiên cứu bổ trợ.",
  "Journal article · January 2026": "Bài báo khoa học · Tháng 01/2026",
  "Detection of Common Crop Leaf Diseases in Vietnam Using an Explainable YOLO Architecture": "Phát hiện bệnh trên lá cây trồng phổ biến ở Việt Nam bằng kiến trúc YOLO có khả năng giải thích",
  "Contributed as a co-author to a paper on explainable YOLO-based crop leaf disease detection in Vietnam.": "Đóng góp với vai trò đồng tác giả cho nghiên cứu phát hiện bệnh lá cây tại Việt Nam bằng YOLO có khả năng giải thích.",
  "Nguyen Trung Kien, Le Dinh Hoang Vu, Vo Hoai Viet": "Nguyễn Trung Kiên, Lê Đình Hoàng Vũ, Võ Hoài Việt",
  "Vietnam Journal of Science and Technology, Series B": "Tạp chí Khoa học và Công nghệ Việt Nam, Bản B",
  "05 / Why this work matters": "05 / Ý nghĩa của công việc",
  "Turning visual data into useful decisions.": "Biến dữ liệu hình ảnh thành quyết định hữu ích.",
  "Agriculture": "Nông nghiệp",
  "Computer vision can support crop-disease detection and field-monitoring workflows.": "Thị giác máy tính có thể hỗ trợ phát hiện bệnh cây và quy trình giám sát đồng ruộng.",
  "Local processing and store-and-forward logging can keep a prototype useful through unstable connectivity.": "Xử lý cục bộ và ghi log theo cơ chế lưu-chuyển tiếp giúp nguyên mẫu vẫn hữu ích khi kết nối không ổn định.",
  "Medical research": "Nghiên cứu y khoa",
  "Interpretability tools can make model behavior easier to inspect, while remaining separate from clinical proof.": "Công cụ diễn giải giúp hành vi mô hình dễ kiểm tra hơn, nhưng không thay thế bằng chứng lâm sàng.",
  "Operations": "Vận hành",
  "Useful AI depends on measurable evaluation and reliable integration—not only a model checkpoint.": "AI hữu ích phụ thuộc vào đánh giá đo lường được và tích hợp đáng tin cậy, không chỉ một checkpoint mô hình.",
  "Two focused versions, one honest profile.": "Hai phiên bản trọng tâm, một hồ sơ trung thực.",
  "Choose the version most relevant to the role.": "Chọn phiên bản phù hợp nhất với vị trí ứng tuyển.",
  "Download Computer Vision CV": "Tải CV Thị giác Máy tính",
  "Download Embedded AI CV": "Tải CV Embedded AI",
  "06 / Contact": "06 / Liên hệ",
  "Let’s build something practical.": "Cùng xây dựng điều gì đó thực tiễn.",
  "I am open to Computer Vision, Applied AI, and Embedded AI internship opportunities.": "Tôi sẵn sàng cho các cơ hội thực tập về Thị giác Máy tính, AI Ứng dụng và Embedded AI.",
  "Email": "Email",
  "Phone": "Điện thoại",
  "View profile ↗": "Xem hồ sơ ↗",
  "Built with plain HTML, CSS & a little restraint.": "Được xây dựng bằng HTML, CSS thuần và một chút tiết chế.",
  "Back to top ↑": "Về đầu trang ↑"
};

const languageButton = document.querySelector(".language-toggle");
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const textNodes = [];

while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement !== languageButton && node.nodeValue.trim()) {
    textNodes.push([node, node.nodeValue]);
  }
}

const attributes = [...document.querySelectorAll("[aria-label], [alt]")].flatMap(element =>
  ["aria-label", "alt"]
    .filter(name => element.hasAttribute(name))
    .map(name => [element, name, element.getAttribute(name)])
);

function setLanguage(language) {
  const vietnamese = language === "vi";

  for (const [node, original] of textNodes) {
    const text = original.trim();
    node.nodeValue = original.replace(text, vietnamese && vi[text] ? vi[text] : text);
  }

  for (const [element, name, original] of attributes) {
    element.setAttribute(name, vietnamese && vi[original] ? vi[original] : original);
  }

  document.documentElement.lang = language;
  document.title = vietnamese
    ? "Vũ Lê Đình Hoàng | Thị giác Máy tính & AI Ứng dụng"
    : "Vũ Lê Đình Hoàng | Computer Vision & Applied AI";
  languageButton.textContent = vietnamese ? "EN" : "VI";
  languageButton.setAttribute("aria-label", vietnamese ? "Switch to English" : "Chuyển sang tiếng Việt");
  localStorage.setItem("portfolio-language", language);
}

languageButton.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "en" ? "vi" : "en");
});

setLanguage(localStorage.getItem("portfolio-language") === "vi" ? "vi" : "en");

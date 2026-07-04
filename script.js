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
  "A single disease identification model faces difficulties in reaching real-world users.": "Một mô hình nhận diện bệnh đơn lẻ gặp khó khăn khi tiếp cận người dùng thực tế.",
  "Motivation": "Động lực",
  "Automating many manual agricultural monitoring processes through computer vision applications allows for the management, monitoring, and analysis of crop data.": "Tự động hóa nhiều quy trình giám sát nông nghiệp thủ công thông qua ứng dụng thị giác máy tính. Thông qua phần mềm có thể quản lí, giám sát và phân tích dữ liệu cây trồng.",
  "My role": "Vai trò của tôi",
  "Develop a desktop application using ElectronJS and a mobile application using React Native. Use PostgreSQL for the database. Build APIs between AI services. Set up a CI/CD workflow using GitLab.": "Xây dựng ứng dụng desktop thông qua electronjs và ứng dụng mobile thông qua react native. Cơ sở dữ liệu bằng PostgreSQL. Xây dựng API giữa các service AI. Thiết lập quy trình CI CD thông qua gitlab.",
  "Solution": "Giải pháp",
  "I joined as a project manager, full-stack developer, devOps specialist, and AI engineer.": "Tôi tham gia với vai trò là một người quản lí dự án, fullStack Developer, devOps và kĩ sư AI",
  "Current result": "Kết quả hiện tại",
  "After a short period of development, the project now has two applications: desktop and mobile. One for managers, and one for farmers. These meet the initial basic needs of the model, and the field management features have also been developed.": "Sau một thời gian ngắn phát triển. Dự án đã có 2 ứng dụng desktop và điện thoại. Một cho nhà quản li, một cho người nông dân. Đáp ứng được nhu cầu cơ bản ban đầu của mô hình. Và các tính năng quản lí ruộng cũng đã được phát triển.",
  "Limitations": "Giới hạn",
  "Limitations exist in its ability to process single images; it cannot yet be expanded to handle video processing and live streaming. The source code structure is not optimized, and scalability, maintainability, and security still present many issues. There are no real-world users, and the AI ​​inference service has not yet been measured or optimized." : "Giới hạn về khả năng xử lý ảnh đơn, chưa thể mở rộng xử lí video và streaming trực tiếp. Cấu trúc mã nguồn chưa tối ưu, khả năng mở rộng, bảo trì, bảo mật đang còn nhiều vấn đề. Chưa có người dùng thực tế, chưa đo lường và tối ưu cho dịch vụ suy luận AI.",
  "Direction of development": "Hướng phát triển",
  "Expand the scope of application, creating a comprehensive ecosystem for orchard management. Develop desktop and mobile applications for this ecosystem. Enhance disease detection capabilities across various crops through improvements to the core detection model. Develop and integrate the model into edge devices with smaller parameters, ensuring resource efficiency and cost optimization. Design UAVs to automate manual monitoring processes.": "Mở rộng phạm vi ứng dụng, tạo ra một hệ sinh thái toàn diện để quản lý cây trồng. Phát triển ứng dụng dành cho máy tính để bàn và thiết bị di động. Nâng cao khả năng phát hiện bệnh trên nhiều loại cây trồng khác nhau thông qua việc cải tiến mô hình phát hiện cốt lõi. Phát triển, tích hợp mô hình vào các thiết bị biên với tham số nhỏ hơn, đảm bảo tiết kiệm tài nguyên suy luận và tối ưu chi phí. Thiết kế UAV để tự động quá quy trình giám sát thủ công.",
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
  "The drowsiness warning systems in older vehicles are limited in terms of technology and equipment. The input images were too small; when compressed to the 96x96 resolution of the model, the data lost all its features, resulting in a small model that could not make accurate predictions.": "Những thiết bị cảnh báo ngủ gật trên những phương tiện ô tô cũ còn hạn chế về mặt công nghệ và thiết bị. Ảnh chụp đầu vào quá bé, khi nén ảnh xuống 96x96 của mô hình, dữ liệu mất hết đặc trưng và khiến mô hình nhỏ không đưa ra được dự đoán chính xác." ,
  "To create a compact, cost-effective device that solves the problem of falling asleep at the wheel in cars.": "Tạo ra một thiết bị nhỏ gọn, chi phí tối ưu và giải quyết được bài toán ngủ gật trong xe ô tô",
  "I participated in the roles of project manager, lead coder, data collector and analyst, and model trainer and tuner.": "Tôi tham gia với vai trò là một người quản lí dự án, một coding chính, người thu thập và phân tích dữ liệu, người huấn luyện và hiệu chỉnh mô hình.",
  "The pipeline is divided into two stages with two small models for processing. Instead of a model that takes the entire face as input, compresses it, and processes it, I use a FOMO (Fast Object, More Object) model from the esp32 library. This model captures the main eye segment, called the ROI. The ROI is then sent to MobileNet for processing. Because when the ROI is cropped, it retains its size even after compression, so the effect is not significantly impacted. As a result, the model learns the data well and achieves good recognition performance in the experimental environment.": "Pipeline được chia thành 2 giai đoạn với 2 mô hình nho để xử lí. Thay vì mô hình lấy ảnh đầu vào là toàn mặt, nén lại và xử lí nó. Tôi sử dụng một mô hình FOMO (Fast object, more object) trong thư viện của esp32, mô hình này sẽ bắt phần mắt chính, gọi là ROI. ROI sau đó sẽ được gửi tới mobilenet để xử lí. Vì khi phần ROI được cắt, nó giữ nguyên kích thước cho dù nén vẫn không ảnh hưởng nhiều. Kết quả là mô hình học tốt dữ liệu và đạt hiệu quả nhận diện tốt trong môi trường thí nghiệm.",
  "The test results in the laboratory environment were very good. The model achieved an accuracy of > 80% with 3FPS ​​and a latency of 200-500ms.": "Kết quả thử nghiệm trong môi trường thí nghiệm rất tốt. Mô hình đạt độ chính xác > 80% với 3FPS độ trễ 200-500ms ",
  "The limitations lie in two things: the processor chip and the camera used to capture input data. The ESP32 generates a lot of heat after a short time, affecting the performance and inference speed of the model. The quality of the input images is also limited. The biggest problem is lighting, such as low light, backlighting, or nighttime shots. Therefore, it might be worth considering upgrading to a more adequate chip, changing the camera resolution, and using a dedicated camera to overcome these issues.": "Việc giới hạn ở 2 điều sau, chip xử lý và camera chụp dữ liệu đầu vào. ESP32 tỏa nhiệt cao sau một thời gian ngắn, làm ảnh hưởng hiệu suất và tốc độ suy luận của mô hình. Chất lượng ảnh đầu vào hạn chế. Vấn đề lớn vấn là ánh sáng, thiếu sáng, ngược sáng hoặc ảnh chụp vào ban đêm. Vậy nên điều có thể cân nhắc là nâng cấp lên chip vừa đủ, thay độ phân giải camera và camera chuyên dụng để khắc phục điều này",
  "The project could later develop in a more robust direction. Since the chip is capable of independent processing, it can be researched and integrated into other edge devices, and UAVs are a strong direction in this regard.": "Dự án sau này có thể phát triển theo hướng mạnh hơn. Vì chip đã có thể xử lí độc lập, có thể nghiên cứu và tích hợp vào các thiết bị biên khác, UAV là một hướng mạnh trong số đó",
  "Research implementation": "Bản triển khai nghiên cứu",
  "Weakly Supervised Diabetic Retinopathy Grading": "Phân loại Võng mạc Đái tháo đường với Học Yếu giám sát",
  "Repository visualization: original image and model attention output.": "Hình minh họa từ mã nguồn: ảnh gốc và đầu ra chú ý của mô hình.",
  "A PyTorch research implementation for five-class diabetic retinopathy grading with lesion-aware prompts and interpretable attention outputs.": "Bản triển khai nghiên cứu bằng PyTorch cho bài toán phân loại võng mạc đái tháo đường 5 lớp, sử dụng gợi ý vùng tổn thương và đầu ra chú ý có thể diễn giải.",
  "Recorded validation metric": "Chỉ số validation được ghi nhận",
  "Checkpoint name and repository documentation": "Tên checkpoint và tài liệu mã nguồn",
  "Detailed injury annotation is very expensive. With full-image labeled data, the labels are unclear. How can the model learn and ensure accuracy for this specific dataset?": "Việc chú thích chi tiết tổn thương rất tốn kém. Với những dữ liệu có nhãn toàn ảnh, nhãn đánh không rõ ràng. Làm sao để mô hình có thể học và đảm bảo độ chính xác cho bộ dữ liệu chuyên biệt này?",
  "Study medical-image model design and interpretation in a setting where annotation detail is limited.": "Nghiên cứu thiết kế và diễn giải mô hình ảnh y khoa trong bối cảnh nhãn chi tiết bị hạn chế.",
  "Implemented the five-class PyTorch grading pipeline, EfficientNet-B0 attention module, Swin Transformer backbone, PRCF feature fusion, Grad-CAM outputs, and QWK evaluation.": "Triển khai pipeline phân loại 5 lớp bằng PyTorch, mô-đun chú ý EfficientNet-B0, backbone Swin Transformer, hợp nhất đặc trưng PRCF, đầu ra Grad-CAM và đánh giá QWK.",
  "An EfficientNet attention module produces a lesion prompt, PRCF fuses it with Swin patch features, and the remaining Swin stages produce a grade. Grad-CAM supports inspection of model attention.": "Mô-đun chú ý EfficientNet tạo gợi ý vùng tổn thương, PRCF hợp nhất với đặc trưng patch của Swin, và các tầng Swin còn lại tạo kết quả phân loại. Grad-CAM hỗ trợ kiểm tra vùng chú ý của mô hình.",
  "The repository records a validation QWK of 0.6942 and includes a CLI demo for grade prediction and four-panel attention visualization.": "Mã nguồn ghi nhận QWK validation 0.6942 và có demo CLI để dự đoán cấp độ cùng trực quan hóa chú ý bằng bốn khung hình.",
  "The resources available for training are insufficient, and optimizing the architecture to achieve maximum accuracy is challenging. CNNs are quite resource-intensive and consume a lot of resources.": "Tài nguyên dùng để huấn luyện không đủ và khó khăn trong việc tối ưu kiến trúc để đạt được độ chính xác tối đa. CNN khá nặng và tiêu tốn rất nhiều tài nguyên.",
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

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        answer.style.maxHeight = null;
        item.classList.remove("active");
      } else {
        // Close other open items if desired:
        faqItems.forEach((i) => {
          i.querySelector(".faq-answer").style.maxHeight = null;
          i.classList.remove("active");
        });

        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});

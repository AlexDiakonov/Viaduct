const benefits = document.querySelectorAll(".benefits_list_item");
benefits.forEach((benefit) => {
  benefit.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("active")) {
      benefits.forEach((ben) => {
        ben.classList.remove("active");
      });
      e.currentTarget.classList.remove("active");
    } else {
      benefits.forEach((ben) => {
        ben.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    }
  });
});

const faq = document.querySelectorAll(".faq_list_items");
faq.forEach((f) => {
  f.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList.remove("active");
      faq.forEach((fa) => {
        fa.classList.remove("active");
      });
    } else {
      faq.forEach((fa) => {
        fa.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    }
  });
});

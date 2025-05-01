
gsap.registerPlugin(ScrollTrigger);

function increaseProgress() {
  const progress = document.getElementById('courseProgress');
  const progressText = document.getElementById('progressText');
  
  let current = parseInt(progress.value);
  if(current < 100) {
    current += 20;
    progress.value = current;
    progressText.innerText = `${current}% Completed`;
  }
}

// Contact Form Submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formStatus').innerText = "Thank you for contacting us! We'll get back to you soon.";
  this.reset();
});

// Simple Testimonials Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 4000);

// Show the "Back to Top" button
window.onscroll = function () {
  const backToTopBtn = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

 var t1 = gsap.timeline();
  t1.from(".navbar", {
    y: -100,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
    opacity: 0,
  });


  t1.from(".hero h1", {
    x: 100,
    duration: 0.8,
    ease: "power2.out",
    opacity: 0,
    scrollTrigger: {
      trigger: ".hero h1",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

  t1.from(".hero p", {
    x: -100,
    duration: 0.8,
    ease: "power2.out",
    opacity: 0,
    scrollTrigger: {
      trigger: ".hero p",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
  
  t1.from(".hero .btn", {
    y: 100,
    duration: 0.8,
    ease: "power2.out",
    opacity: 0,
    scrollTrigger: {
      trigger: ".hero p",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from(".course-listing h2", {
    y: -100,
    duration: 0.8,
    ease: "power2.out",
    opacity: 0,
    scrollTrigger: {
      trigger: ".course-listing h2",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

 // Animate each .course-card separately
document.querySelectorAll(".course-card").forEach((card) => {
  gsap.from(card, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});



  gsap.from(".about-section", {
    x: -100,
    duration: 0.8,
    ease: "power2.out",
    opacity: 0,
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });


  gsap.from(".team-section", {
    x: 100,
    duration: 0.8,
    ease: "power2.out",
    opacity: 0,
    scrollTrigger: {
      trigger: ".team-section",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });


  gsap.from(".contact-section", {
    x: 100,
    duration: 0.8,
    ease: "power2.out",
    opacity: 0,
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });


  gsap.from(".auth-card", {
    duration: 1.5,
    opacity: 0,
    y: -50,
    ease: "power2.out",
  });

  gsap.from(".input-group", {
    duration: 1,
    opacity: 0,
    x: -50,
    stagger: 0.2,
    ease: "power2.out",
  });

  gsap.from(".btn", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    delay: 0.5,
  });

});

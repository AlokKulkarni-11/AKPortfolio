document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#element', {
        strings: ['CSE student at WCE sangli, ', 'programmer.'],
        typeSpeed: 70,
        loop: true, // This will make it repeat infinitely
    });
});




// Initialize particles.js
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  

//   const navToggle = document.querySelector('.nav-toggle');
// const navLinks = document.querySelector('.nav-links');

// navToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('open');
// });


document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.achievement-card');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

  cards.forEach(card => {
      observer.observe(card);
  });
});
  


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const from_name = document.getElementById('from_name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simple validation
  if (!from_name || !email || !message) {
      alert('Please fill out all fields.');
      return;
  }

  const templateParams = { from_name, email, message };

  emailjs.send('service_5udx5hm', 'template_10f6315', templateParams)

  .then(function(response) {
      alert('Message sent successfully!');
      document.getElementById('contact-form').reset();
  }, function(error) {
      alert('Failed to send the message. Please try again later.');
      console.error('Error:', error);
  });
});



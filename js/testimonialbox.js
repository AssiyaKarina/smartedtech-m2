const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Sarah Thompson',
    position: 'Marketing Manager',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "The IELTS preparation course exceeded my expectations. The personalized learning plans were invaluable, and the mock exams truly mirrored the real test. Highly recommended!",
  },
  {
    name: 'June Li',
    position: 'Research Scientist',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'As a busy professional, the flexibility of this course was a game-changer. The comprehensive study materials and expert guidance ensured I was well-prepared for the IELTS exam.',
  },
  {
    name: 'Emily Turner',
    position: 'Student',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "I can't thank the instructors enough for their support. The interactive lessons made learning enjoyable, and the continuous assistance gave me the confidence to excel in my IELTS test.",
  },
  {
    name: 'Olivia Clark',
    position: 'Project Manager',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "The affordability of this course was a pleasant surprise. I received top-notch IELTS preparation without straining my budget. Definitely worth the investment!",
  },
  {
    name: 'David Rodriguez',
    position: 'IT Consultant',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "The realistic mock exams provided a clear understanding of what to expect on test day. This course not only boosted my confidence but also helped me achieve the IELTS score I needed.",
  },
  {
    name: 'Laura Peterson',
    position: 'Accountant',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'The worldwide accessibility allowed me to study seamlessly from different locations. The online platform and resources were instrumental in my success in the IELTS exam. Thank you!',
  },
  {
    name: 'James Mitchell',
    position: 'ESL Teacher',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'Having taught English as a second language, I found this course to be comprehensive and well-structured. It caters to various proficiency levels and ensures a thorough understanding of the IELTS format.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
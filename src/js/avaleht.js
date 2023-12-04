const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
        entry.target.classList.remove('not-in-view')
      } else {
        entry.target.classList.remove('in-view')
        entry.target.classList.add('not-in-view')
      }
    })
  },
  {
    rootMargin: '0px',
    threshold: [0, 0.1, 1],
  },
)

const tags = document.querySelectorAll('.button, .sponsor img, .trust h2, .points .mission h1, .mission h1, .friday-banner h2, .logo-text, .points .mission ul, .mission p, .friday-banner p, .trust p')

tags.forEach((tag) => {
  observer.observe(tag)
})

// Kood võetud: https://www.youtube.com/watch?v=evmu1ABASaU

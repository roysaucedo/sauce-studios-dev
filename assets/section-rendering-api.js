console.log("HELLO")



fetch(`/?section_id=your-single-section-id`)
  .then(response => response.text())
  .then(html => {
    document.getElementById('your-section-wrapper').innerHTML = html;
  })
  .catch(error => console.error('Error fetching section:', error));
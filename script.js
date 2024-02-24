function vote(choice) {
  fetch('/vote', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ choice }),
  })
  .then(response => {
    if (response.ok) {
      alert('Thank you for your vote!');
    } else {
      alert('Voting failed, please try again later.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred, please try again later.');
  });
}

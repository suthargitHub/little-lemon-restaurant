document.querySelector('.form-left').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const formData = {
      name: document.querySelector('input[name="name"]').value,
      phone: document.querySelector('input[name="phone"]').value,
      person: document.querySelector('select[name="person"]').value,
      reservationDate: document.querySelector('input[name="reservation-date"]').value,
      time: document.querySelector('select[name="person"]').value,
      message: document.querySelector('textarea[name="message"]').value,
    };
  
    try {
      const response = await fetch('http://localhost:5500/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      alert(result.message || 'Reservation submitted!');
    } catch (error) {
      alert('Failed to submit reservation');
    }
  });
  // document.getElementById('subscribeForm').addEventListener('submit', async (event) => {
  //   event.preventDefault(); // Prevent page reload

  //   const email = document.getElementById('email').value;
    

  //   try {
  //     const response = await fetch('http://localhost:5500/subscribe', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email }),
  //     });

  //     if (response.ok) {
  //       alert('Subscription successful!');
  //       document.getElementById('email').value = ''; // Clear the input field
  //     } else {
  //       alert('Failed to subscribe. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('An error occurred while subscribing.');
  //   }
  // });
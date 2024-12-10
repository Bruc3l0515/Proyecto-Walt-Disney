document.getElementById('calculateButton').addEventListener('click', function () {
    const ticketType = parseFloat(document.getElementById('ticketType').value);
    const ticketQuantity = parseInt(document.getElementById('ticketQuantity').value, 10);
  
    if (isNaN(ticketQuantity) || ticketQuantity < 1) {
      alert('Por favor, introduce una cantidad válida.');
      return;
    }
  
    const totalPrice = ticketType * ticketQuantity;
  
    document.getElementById('totalPrice').innerText = `Total: $${totalPrice.toFixed(2)}`;
  });
  
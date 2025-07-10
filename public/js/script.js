
button1=document.getElementById('loadRatesBtn');
button1.addEventListener('click', getData);
async function getData() {
  try {
    let res = await fetch('http://localhost:3000/banking');
    let data = await res.json();

    const output = data.map(item => `
      <div class="card mb-2">
        <div class="card-body">
          <h5 class="card-title">${item.bank}</h5>
          <h5 class="card-title">${item.currency}</h5>
          <p class="card-text">Rate: ${item.rate}</p>
        </div>
      </div>
    `).join('');
    document.getElementById('ratesOutput').innerHTML = output;
  } catch (error) {
    document.getElementById('ratesOutput').innerHTML = `<p class="text-danger">Error loading data.</p>`;
  }
}
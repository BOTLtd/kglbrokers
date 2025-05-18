let properties = [];

fetch('properties.json')
  .then(response => response.json())
  .then(data => properties = data);

function findProperties() {
  const location = document.getElementById('location').value.trim().toLowerCase();
  const type = document.getElementById('type').value;
  const bedrooms = parseInt(document.getElementById('bedrooms').value);
  const budget = parseInt(document.getElementById('budget').value);

  const results = properties.filter(p => 
    p.location.toLowerCase() === location &&
    p.type === type &&
    p.bedrooms === bedrooms &&
    p.price <= budget
  );

  const resultHTML = results.length ? results.map(p => `
    <div class="card">
      <img src="${p.image}" alt="${p.title}" />
      <h3>${p.title}</h3>
      <p><strong>Location:</strong> ${p.location}</p>
      <p><strong>Bedrooms:</strong> ${p.bedrooms}</p>
      <p><strong>Price:</strong> ${p.price.toLocaleString()} RWF</p>
    </div>
  `).join("") : "<p>No properties match your search.</p>";

  document.getElementById('results').innerHTML = resultHTML;
}

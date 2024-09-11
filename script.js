// script.js
const cryptoList = [
    { id: 'bitcoin', symbol: 'bitcoin' },
    { id: 'ethereum', symbol: 'ethereum' },
    { id: 'litecoin', symbol: 'litecoin' }
  ];
  
  async function fetchCryptoPrices() {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd';
    
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      cryptoList.forEach(crypto => {
        const price = data[crypto.symbol].usd;
        document.querySelector(`#${crypto.id} .price`).textContent = price;
      });
      
    } catch (error) {
      console.error('Error fetching cryptocurrency prices:', error);
    }
  }
  
  fetchCryptoPrices();
  
  setInterval(fetchCryptoPrices, 30000);
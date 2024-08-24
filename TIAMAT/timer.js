 // Timer functionality (replace with your actual timer logic)
 let seconds = 59;
 let minutes = 59;
 let hours = 23;
 let days = 39;

 let progressBar = document.getElementById('progressBar');
 let progress = 0;

 function updateTimer() {
   seconds--;
   if (seconds < 0) {
     seconds = 59;
     minutes--;
     if (minutes < 0) {
       minutes = 59;
       hours--;
       if (hours < 0) {
         hours = 23;
         days--;
       }
     }
   }

   document.querySelector('.timer-box:nth-child(1) h2').textContent = days;
   document.querySelector('.timer-box:nth-child(2) h2').textContent = hours;
   document.querySelector('.timer-box:nth-child(3) h2').textContent = minutes;
   document.querySelector('.timer-box:nth-child(4) h2').textContent = seconds;

   // Update progress bar (assuming progress is based on seconds)
   progress = (seconds / 60 + minutes + hours * 60 + days * 24 * 60) / (24 * 60 * 18 + 11 * 60 + 8 + 32); // Adjust this calculation based on your progress logic
   progressBar.style.width = progress * 100 + '%';
 }

 setInterval(updateTimer, 1000); // Update every second

 // Input calculations
 let ethInput = document.getElementById('ethInput');
 let spyInput = document.getElementById('spyInput');

 function calculateSPY() {
   let ethValue = parseFloat(ethInput.value);
   let spyValue = ethValue * 0.00162;
   spyInput.value = spyValue.toFixed(4);
 }

 ethInput.addEventListener('input', calculateSPY);

 // Button functionality (replace with your actual actions)
 function connectWallet() {
   alert('Connect Wallet functionality to be implemented');
 }

 function buyWithETH() {
   alert('Buy With ETH functionality to be implemented');
 }
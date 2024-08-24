function copyToClipboard() {
    const walletAddress = document.getElementById("wallet-address").innerText;
    const textArea = document.createElement("textarea");
    textArea.value = walletAddress;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Address copied to clipboard!");
  }
  
  
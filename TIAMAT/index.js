document.addEventListener('DOMContentLoaded', async () => {
    const connectButton = document.getElementById('connectButton');
    const balanceDiv = document.getElementById('balance');

    let connection;
    let wallet;
    const TMT_MINT_ADDRESS = 'TMT_MINT_ADDRESS_HERE'; // Replace with your actual TMT mint address

    // Initialize Solana connection
    function getConnection() {
        return new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'), 'confirmed');
    }

    // Connect to Phantom wallet
    async function connectWallet() {
        if (window.solana && window.solana.isPhantom) {
            try {
                wallet = await window.solana.connect();
                connection = getConnection();
                connectButton.innerText = 'Wallet Connected';
                connectButton.disabled = true;
                fetchTokenBalance();
            } catch (err) {
                console.error('Failed to connect wallet', err);
            }
        } else {
            alert('Please install Phantom wallet extension.');
        }
    }

    // Fetch TMT token balance
    async function fetchTokenBalance() {
        if (!wallet) return;

        const tokenMintAddress = new solanaWeb3.PublicKey(TMT_MINT_ADDRESS);
        const userTokenAddress = await solanaWeb3.PublicKey.findAssociatedTokenAddress(
            tokenMintAddress,
            wallet.publicKey
        );

        try {
            const tokenAccount = await splToken.getAccount(connection, userTokenAddress);
            const tokenAmount = tokenAccount.amount.toNumber() / 10**TOKEN_DECIMALS; // Adjust decimals as needed
            balanceDiv.innerText = `Balance: ${tokenAmount} TMT`;
        } catch (err) {
            console.error('Failed to fetch token balance', err);
            balanceDiv.innerText = 'Balance: Error';
        }
    }

    connectButton.addEventListener('click', connectWallet);
});

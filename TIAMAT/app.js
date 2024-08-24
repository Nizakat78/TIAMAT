document.addEventListener('DOMContentLoaded', () => {
    const modelViewer = document.getElementById('myModel');
    const toggleRotationButton = document.getElementById('toggleRotation');

    // Function to toggle auto-rotate
    const toggleAutoRotate = () => {
        modelViewer.toggleAttribute('auto-rotate');
    };

    // Add event listener to the button
    toggleRotationButton.addEventListener('click', toggleAutoRotate);
});

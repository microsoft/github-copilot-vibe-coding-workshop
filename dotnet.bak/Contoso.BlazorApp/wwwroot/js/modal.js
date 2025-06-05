window.addEscapeKeyListener = (dotNetObject) => {
    const handleEscapeKey = (event) => {
        if (event.key === 'Escape') {
            dotNetObject.invokeMethodAsync('HandleEscapeKey');
        }
    };

    document.addEventListener('keydown', handleEscapeKey);
    
    // Store the handler for cleanup
    window.currentEscapeHandler = handleEscapeKey;
};

window.removeEscapeKeyListener = () => {
    if (window.currentEscapeHandler) {
        document.removeEventListener('keydown', window.currentEscapeHandler);
        window.currentEscapeHandler = null;
    }
};

window.disableBodyScroll = () => {
    document.body.style.overflow = 'hidden';
};

window.enableBodyScroll = () => {
    document.body.style.overflow = 'auto';
};

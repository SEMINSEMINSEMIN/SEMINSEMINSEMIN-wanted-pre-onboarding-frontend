const debounce = (func, wait) => {
    let timeoutId;
    return function executedFunction(...args) {
        const later = () => {
            timeoutId = null;
            func(...args);
        };
        clearTimeout(timeoutId);
        timeoutId = setTimeout(later, wait);
    };
};

export default debounce;

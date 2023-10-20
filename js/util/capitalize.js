function capitalize(text) {
    if (!(text instanceof String))
        return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
function capitalize(text) {
    if (text == null)
        return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
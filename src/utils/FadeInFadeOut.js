function setFadeInFadeOut(isInView, loadTime) {
    if (!isInView && loadTime == 0) {
        return "beforeFadeInFadeOut";
    }
    return "fadeIn";
}
export {
    setFadeInFadeOut,
}
const EC = global.protractor.ExpectedConditions;

function ecHelper(element, validation, negate) {
    switch (validation) {
        case "present": return negate ? EC.not(EC.presenceOf(element)) : EC.presenceOf(element);
        case "clickable": return negate ? EC.not(EC.elementToBeClickable(element)) : EC.elementToBeClickable(element);
        case "visible": return negate ? EC.not(EC.visibilityOf(element)) : EC.visibilityOf(element);
        case "invisible": return negate ? EC.not(EC.invisibilityOf(element)) : EC.invisibilityOf(element);
        case "selected": return negate ? EC.not(EC.elementToBeSelected(element)) : EC.elementToBeSelected(element);
        case "gone": return negate ? EC.not(EC.stalenessOf(element)) : EC.stalenessOf(element);
        case "appear": return EC.presenceOf(element);
        case "disappear": return EC.stalenessOf(element);
        case "become visible": return EC.visibilityOf(element);
        case "become invisible": return EC.invisibilityOf(element);
        case "become clickable": return EC.elementToBeClickable(element);
        default: throw new Error("Wrong expected condition provided");
    }
}

const ECOptions = {
    PRESENT: "present",
    CLICKABLE: "clickable",
    VISIBLE: "visible",
    INVISIBLE: "invisible",
    SELECTED: "selected",
    GONE: "gone",
    APPEAR: "appear",
    DISAPPEAR: "disappear",
};

module.exports = {
    ecHelper,
    ECOptions
};

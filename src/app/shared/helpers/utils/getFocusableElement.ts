export function getNextFocusableElement(currentElement = document.activeElement, iteration = 1): HTMLElement | null {
    const focusableElements = document.querySelectorAll(
        'input, select, textarea, [tabindex]:not([tabindex="-1"]):not(mat-expansion-panel-header):not(mat-option)'
    ) as NodeListOf<HTMLElement>;

    const currentIndex = Array.from(focusableElements).indexOf(currentElement as HTMLElement);
    const nextIndex = currentIndex + iteration;

    console.log(focusableElements[nextIndex]);

    if (nextIndex < focusableElements.length) {
        return focusableElements[nextIndex];
    }
    return null;
}
export function getElementByDataJS(elementIdentifier) {
  const newVariable = document.querySelector(
    `[data-js="${elementIdentifier}"]`
  );
  return newVariable;
}

export function toggleClass(elementIdentifier, toggleClass) {
  elementIdentifier.classList.toggle(toggleClass);
}

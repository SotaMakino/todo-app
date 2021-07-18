export const htmlStringToElement = (htmlString: string): Element => {
  const template: HTMLTemplateElement = document.createElement("template");
  template.innerHTML = htmlString;
  return template.content.firstElementChild!;
};

export const render = (
  targetElement: Element,
  containerElement: Element
): void => {
  containerElement.innerHTML = "";
  containerElement.appendChild(targetElement);
};

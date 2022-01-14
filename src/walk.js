import { make } from "acorn-walk";

export default make({
  Import() {},
  ViewExpression(node, st, c) {
    c(node.id, st, "Identifier");
  },
  MutableExpression(node, st, c) {
    c(node.id, st, "Identifier");
  },
  JSXElement(node, st, c) {
    c(node.openingElement, st);
    for (let child of node.children) c(child, st);
  },
  JSXOpeningElement(node, st, c) {
    c(node.name, st);
    for (let attr of node.attributes) c(attr, st);
  },
  JSXIdentifier() {},
  JSXText() {},
  JSXAttribute(node, st, c) {
    c(node.value, st);
  },
  JSXExpressionContainer(node, st, c) {
    c(node.expression, st);
  }
});

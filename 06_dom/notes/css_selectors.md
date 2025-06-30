Below is a comprehensive list of CSS selectors, including child, `::before`, `::after`, and all other types, formatted in Markdown with comments for clarity. This covers basic selectors, combinators, pseudo-classes, pseudo-elements, and attribute selectors, aiming to be thorough yet concise.

```markdown
# CSS Selectors

## Basic Selectors

- **Universal Selector**: Targets all elements on the page.
  ```css
  /* Targets all elements */
  * {
    box-sizing: border-box;
  }
  ```

- **Type/Element Selector**: Targets elements by tag name.
  ```css
  /* Targets all <div> elements */
  div {
    margin: 10px;
  }
  ```

- **Class Selector**: Targets elements with a specific class.
  ```css
  /* Targets elements with class="my-class" */
  .my-class {
    color: blue;
  }
  ```

- **ID Selector**: Targets a single element with a specific ID.
  ```css
  /* Targets element with id="my-id" */
  #my-id {
    background-color: yellow;
  }
  ```

- **Grouping Selector**: Applies styles to multiple selectors.
  ```css
  /* Targets h1, h2, and elements with class="my-class" */
  h1, h2, .my-class {
    font-family: Arial, sans-serif;
  }
  ```

## Combinator Selectors

- **Descendant Selector**: Targets elements nested within another (any level).
  ```css
  /* Targets all <a> inside <nav> */
  nav a {
    text-decoration: none;
  }
  ```

- **Child Selector**: Targets direct children of an element.
  ```css
  /* Targets <li> directly inside <ul> */
  ul > li {
    list-style: none;
  }
  ```

- **Adjacent Sibling Selector**: Targets an element immediately following another.
  ```css
  /* Targets <p> immediately after <h2> */
  h2 + p {
    margin-top: 5px;
  }
  ```

- **General Sibling Selector**: Targets all siblings after a specified element.
  ```css
  /* Targets all <p> after <h2> */
  h2 ~ p {
    color: gray;
  }
  ```

## Attribute Selectors

- **Attribute Selector**: Targets elements with a specific attribute.
  ```css
  /* Targets elements with a target attribute */
  [target] {
    border: 1px solid black;
  }
  ```

- **Attribute Value Selector**: Targets elements with a specific attribute value.
  ```css
  /* Targets elements with target="_blank" */
  [target="_blank"] {
    color: red;
  }
  ```

- **Attribute Starts With**: Targets elements with an attribute starting with a value.
  ```css
  /* Targets elements with href starting with "https" */
  [href^="https"] {
    font-weight: bold;
  }
  ```

- **Attribute Ends With**: Targets elements with an attribute ending with a value.
  ```css
  /* Targets elements with src ending with ".png" */
  [src$=".png"] {
    opacity: 0.8;
  }
  ```

- **Attribute Contains**: Targets elements with an attribute containing a value.
  ```css
  /* Targets elements with class containing "btn" */
  [class*="btn"] {
    padding: 10px;
  }
  ```

- **Attribute Exact or Hyphenated**: Targets exact or hyphen-separated attribute values.
  ```css
  /* Targets elements with lang="en" or lang="en-US" */
  [lang|="en"] {
    direction: ltr;
  }
  ```

- **Attribute Case-Insensitive**: Targets attribute values case-insensitively.
  ```css
  /* Targets data-type="primary" ignoring case */
  [data-type="primary" i] {
    background: blue;
  }
  ```

## Pseudo-Class Selectors

### Structural Pseudo-Classes

- **:root**: Targets the document's root element.
  ```css
  /* Targets the <html> element */
  :root {
    --main-color: #333;
  }
  ```

- **:first-child**: Targets the first child of a parent.
  ```css
  /* Targets the first <li> in a list */
  li:first-child {
    font-weight: bold;
  }
  ```

- **:last-child**: Targets the last child of a parent.
  ```css
  /* Targets the last <li> in a list */
  li:last-child {
    border-bottom: none;
  }
  ```

- **:nth-child(n)**: Targets elements based on their position (e.g., 2nd, odd, even).
  ```css
  /* Targets odd-numbered <li> elements */
  li:nth-child(odd) {
    background: #f2f2f2;
  }
  ```

- **:nth-last-child(n)**: Counts from the last child.
  ```css
  /* Targets the second-to-last <li> */
  li:nth-last-child(2) {
    color: green;
  }
  ```

- **:first-of-type**: Targets the first sibling of a specific type.
  ```css
  /* Targets the first <p> among siblings */
  p:first-of-type {
    margin-top: 0;
  }
  ```

- **:last-of-type**: Targets the last sibling of a specific type.
  ```css
  /* Targets the last <p> among siblings */
  p:last-of-type {
    margin-bottom: 0;
  }
  ```

- **:nth-of-type(n)**: Targets elements of a type based on position.
  ```css
  /* Targets every second <p> */
  p:nth-of-type(2n) {
    background: lightgray;
  }
  ```

- **:only-child**: Targets an element that is the only child of its parent.
  ```css
  /* Targets a <span> that is the only child */
  span:only-child {
    font-style: italic;
  }
  ```

- **:only-of-type**: Targets an element that is the only one of its type.
  ```css
  /* Targets an <h3> if it's the only <h3> among siblings */
  h3:only-of-type {
    text-align: center;
  }
  ```

- **:empty**: Targets elements with no children or text.
  ```css
  /* Targets empty <div> elements */
  div:empty {
    display: none;
  }
  ```

### State-Based Pseudo-Classes

- **:hover**: Targets an element when hovered.
  ```css
  /* Changes link color on hover */
  a:hover {
    color: purple;
  }
  ```

- **:focus**: Targets an element when focused.
  ```css
  /* Styles input when focused */
  input:focus {
    outline: 2px solid blue;
  }
  ```

- **:active**: Targets an element when activated (e.g., clicked).
  ```css
  /* Styles button when clicked */
  button:active {
    background: darkgray;
  }
  ```

- **:visited**: Targets links that have been visited.
  ```css
  /* Styles visited links */
  a:visited {
    color: gray;
  }
  ```

- **:link**: Targets unvisited links.
  ```css
  /* Styles unvisited links */
  a:link {
    color: blue;
  }
  ```

- **:checked**: Targets checked input elements (checkboxes, radios).
  ```css
  /* Scales checked inputs */
  input:checked {
    transform: scale(1.2);
  }
  ```

- **:disabled**: Targets disabled input elements.
  ```css
  /* Fades disabled inputs */
  input:disabled {
    opacity: 0.5;
  }
  ```

- **:enabled**: Targets enabled input elements.
  ```css
  /* Adds cursor to enabled inputs */
  input:enabled {
    cursor: pointer;
  }
  ```

- **:required**: Targets required form elements.
  ```css
  /* Highlights required inputs */
  input:required {
    border-color: red;
  }
  ```

- **:optional**: Targets optional form elements.
  ```css
  /* Highlights optional inputs */
  input:optional {
    border-color: green;
  }
  ```

- **:invalid**: Targets invalid form inputs.
  ```css
  /* Highlights invalid inputs */
  input:invalid {
    background: pink;
  }
  ```

- **:valid**: Targets valid form inputs.
  ```css
  /* Highlights valid inputs */
  input:valid {
    background: lightgreen;
  }
  ```

- **:in-range**: Targets inputs with values in range.
  ```css
  /* Styles inputs within range */
  input:in-range {
    border: 1px solid green;
  }
  ```

- **:out-of-range**: Targets inputs with values out of range.
  ```css
  /* Styles inputs out of range */
  input:out-of-range {
    border: 1px solid red;
  }
  ```

- **:target**: Targets an element with an ID matching the URL's fragment.
  ```css
  /* Highlights element Mayo 4, 2025
  element with matching ID */
  :target {
    background: yellow;
  }
  ```

- **:not(selector)**: Targets elements that do not match a selector.
  ```css
  /* Targets <div> without class="my-class" */
  div:not(.my-class) {
    opacity: 0.7;
  }
  ```

- **:where(selector)**: Filters elements based on a condition.
  ```css
  /* Targets elements with class="container" */
  div:where(.container) {
    padding: 20px;
  }
  ```

- **:has(selector)**: Targets elements containing specific descendants (limited browser support).
  ```css
  /* Targets <section> containing <h2> */
  section:has(h2) {
    border: 1px solid black;
  }
  ```

- **:is(selector-list)**: Matches any selector in a list.
  ```css
  /* Targets h1, h2, or h3 */
  :is(h1, h2, h3) {
    font-weight: bold;
  }
  ```

- **:lang(language)**: Targets elements based on language.
  ```css
  /* Targets elements with lang="fr" */
  [lang="fr"] {
    font-style: italic;
  }
  ```

## Pseudo-Element Selectors

- **::before**: Inserts content before an element's content.
  ```css
  /* Adds a star before <p> content */
  p::before {
    content: "★ ";
    color: red;
  }
  ```

- **::after**: Inserts content after an element's content.
  ```css
  /* Adds a star after <p> content */
  p::after {
    content: " ★";
    color: blue;
  }
  ```

- **::first-line**: Styles the first line of text.
  ```css
  /* Bolds the first line of <p> */
  p::first-line {
    font-weight: bold;
  }
  ```

- **::first-letter**: Styles the first letter of text.
  ```css
  /* Enlarges the first letter of <p> */
  p::first-letter {
    font-size: 1.5em;
  }
  ```

- **::selection**: Styles text selected by the user.
  ```css
  /* Styles selected text */
  ::selection {
    background: yellow;
    color: black;
  }
  ```

- **::placeholder**: Styles input placeholder text.
  ```css
  /* Styles placeholder text in inputs */
  input::placeholder {
    color: gray;
  }
  ```

- **::marker**: Styles list item markers.
  ```css
  /* Colors list item markers */
  li::marker {
    color: red;
  }
  ```

- **::backdrop**: Styles the backdrop of dialog elements.
  ```css
  /* Styles dialog backdrop */
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
  ```

## Notes

- **Combining Selectors**: Selectors can be combined (e.g., `.my-class:hover`, `div > p.my-class`) for more specific targeting.
- **Specificity**: Determines which styles apply (ID > Class > Type > Universal).
- **Browser Support**: Some selectors (e.g., `:has`) have limited support; check compatibility (e.g., CanIUse.com).
- **Use `:where()` and `:is()`**: For cleaner, maintainable code in complex selectors.

```

This Markdown covers all CSS selectors as of June 30, 2025. If you need specific examples, use cases, or help with combining selectors, let me know!
/**
 * Commonly Used `document` Methods in JavaScript:
 * 
 * 1. **Accessing Elements**:
 *    - `document.getElementById(id)`:
 *        Fetches an element with the given `id`.
 *        Example: const element = document.getElementById('header');
 *    - `document.getElementsByClassName(className)`:
 *        Returns a collection of elements with the specified class name.
 *        Example: const items = document.getElementsByClassName('item');
 *    - `document.getElementsByTagName(tagName)`:
 *        Retrieves elements with the given tag name (e.g., 'div', 'p').
 *        Example: const paragraphs = document.getElementsByTagName('p');
 *    - `document.querySelector(selector)`:
 *        Selects the first element matching the CSS selector.
 *        Example: const button = document.querySelector('.btn');
 *    - `document.querySelectorAll(selector)`:
 *        Returns a NodeList of all elements matching the CSS selector.
 *        Example: const links = document.querySelectorAll('a');
 * 
 * 2. **Creating and Modifying Elements**:
 *    - `document.createElement(tagName)`:
 *        Creates a new element of the specified type.
 *        Example: const newDiv = document.createElement('div');
 *    - `document.createTextNode(text)`:
 *        Creates a text node with the given text.
 *        Example: const text = document.createTextNode('Hello, world!');
 *    - `document.appendChild(node)`:
 *        Appends a node as the last child of a parent element.
 *        Example: document.body.appendChild(newDiv);
 * 
 * 3. **Event Listeners**:
 *    - `document.addEventListener(event, callback)`:
 *        Attaches an event listener to the document object.
 *        Example: document.addEventListener('click', () => alert('Clicked!'));
 * 
 * 4. **Accessing Document Information**:
 *    - `document.title`:
 *        Gets or sets the title of the document.
 *        Example: document.title = 'New Title';
 *    - `document.URL`:
 *        Returns the URL of the current document.
 *        Example: console.log(document.URL);
 *    - `document.referrer`:
 *        Retrieves the URL of the referring page.
 *        Example: console.log(document.referrer);
 * 
 * 5. **Forms and Input**:
 *    - `document.forms`:
 *        Returns a collection of all `<form>` elements in the document.
 *        Example: const forms = document.forms;
 *    - `document.getElementsByName(name)`:
 *        Retrieves elements with the specified `name` attribute.
 *        Example: const radios = document.getElementsByName('gender');
 * 
 * 6. **Cookies and Storage**:
 *    - `document.cookie`:
 *        Gets or sets the cookies associated with the document.
 *        Example: document.cookie = 'username=JohnDoe';
 * 
 * 7. **Scrolling and Dimensions**:
 *    - `document.documentElement.scrollTop`:
 *        Gets or sets the vertical scroll position.
 *        Example: document.documentElement.scrollTop = 100;
 *    - `document.documentElement.clientWidth`:
 *        Returns the width of the document's viewport.
 *        Example: console.log(document.documentElement.clientWidth);
 * 
 * 8. **Other Utility Methods**:
 *    - `document.write(content)`:
 *        Writes HTML or text into the document (not recommended for modern use).
 *        Example: document.write('<h1>Hello, world!</h1>');
 *    - `document.open()` and `document.close()`:
 *        Opens or closes a document stream for writing (rarely used).
 *    - `document.execCommand(command)`:
 *        Executes a command for editable content (e.g., copy, paste).
 *        Example: document.execCommand('copy');
 * 
 * Notes:
 * - Modern development practices encourage using `querySelector` and `querySelectorAll` 
 *   instead of older methods like `getElementById` and `getElementsByClassName`.
 * - Always use event listeners (`addEventListener`) instead of inline event handlers (e.g., `onclick`).
 */

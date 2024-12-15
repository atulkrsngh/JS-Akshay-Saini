/*

This is the method to check the sequence of event handlers in the dom tree.

1. Capturing Phase (also called trickling):

Capturing is from outside to inside.
grandparent to parent to child.
capturing also known as trickling.
The event starts at the root (document) and moves downward to the target element.
Event listeners set to true (addEventListener(event, callback, true)) will execute in this phase.

2. Bubbling Phase:

Bubbling is inside out.
child to parent to grandparent
After reaching the target element, the event "bubbles" back up the DOM tree.
Event listeners set to false (or default) execute in this phase.

trickling down and bubbling up.

Order of Event Propagation:

Capturing Phase → Target Phase → Bubbling Phase.
Capturing listeners is executed before bubbling listeners.

<div id="grandparent">
    <div id="parent">
        <div id="child"></div>
    </div>
</div>

*/

document.querySelector("#grandparent")
    .addEventListener('click', () => {
        console.log("Grand parent clicked!!");
    },true);

// True as the third argument: Listens during the capturing or trickling phase.
// False as the third argument (default): Listens during the bubbling phase.

document.querySelector("#parent")
    .addEventListener('click', () => {
        console.log("Parent clicked!!");
    });


document.querySelector("#child")
    .addEventListener('click', () => {
        console.log("Child clicked!!");
    })

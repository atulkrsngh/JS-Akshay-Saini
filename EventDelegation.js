// Event delegation can be achieved through event bubbling.

//The event bubbles up to the parent component where we can get the event and move forward from there.

/*
What It Does:
An event listener is added to the parent element #category.
When a click happens anywhere inside #category, the event listener runs.
e.target gives the element that triggered the event (the clicked element).
If the clicked element is an <LI> (child of #category), its id is appended to the URL, redirecting the user to a new page.
Why Use Event Delegation?

Instead of adding individual click listeners to each <LI> element, a single listener on the parent (#category) suffices.
The event bubbles up from the clicked <LI> to the #category parent, where it is handled.
How It Works:
Event Bubbling: The click event starts at the <LI> element and bubbles up to #category.
At #category, the event listener is triggered, and the code checks if the original clicked element (e.target) is an <LI>.
If true, it performs the desired action (window.location.href).
*/
document.querySelector("#category").addEventListener('click', (e) => {
    console.log(e.target);
    if(e.target.tagName == 'LI'){
        window.location.href = "/" + e.target.id;
    }
});

/*
What It Does:
An event listener is added to the #form element to handle keyup events.
If the e.target (the element that triggered the event) has a data-uppercase attribute, the input value is converted to uppercase.
Why Use Event Delegation?

Instead of adding individual keyup listeners to multiple inputs, one listener on the parent (#form) handles all inputs.
The keyup event bubbles up from the input to the #form.
How It Works:
Event Bubbling: When a keyup event happens in an input inside #form, the event bubbles up to the #form element.
The event listener checks e.target (the element where the event originated).
If the input has the data-uppercase attribute, its value is transformed to uppercase.
*/

document.querySelector("#form").addEventListener('keyup',(e)=>{
    console.log(e);
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
});

/*
Advantages of Event Delegation
Memory Efficiency:

Instead of adding event listeners to multiple child elements, a single listener is added to the parent. This reduces memory usage.
Dynamic Elements:

Works for dynamically added child elements because the event listener is attached to the parent, not the children.
Simplified Code:

Reduces the need to manage multiple event listeners.
Limitations of Event Delegation
Not All Events Bubble:

Certain events, like focus, blur, and scroll, do not bubble. These events cannot be handled using delegation.
Performance Issues with Deep DOM Trees:

If the parent element is very high in the DOM tree, all bubbled events will trigger the listener, which could degrade performance.
Extra Condition Handling:

You need to explicitly check the e.target to ensure the event originated from the intended child element.
*/

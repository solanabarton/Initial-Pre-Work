# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The browser goes to DNS which gets the IP, TCP is opened to get to HTTPS and then translates to HTML

## From start to finish, how does data reach you to be rendered in the browser?

Parsing URL to form a HTTP request which uses DNS lookup to find the IP, then opening a socket on the host computer, receiving the HTTP request, the server listens to the post and inspects the request, then launches the server plugin which gets access to prepare a HTTP response, a database is usually accessed that pulls data in order to form a long string of text, the browser gets the response and parses HTML, a DOM tree is built, new http requests are formed, stylesheets are parsed the the rendering info gets attached to the matching node in the DOM tree, JavaScript is parsed and executed, and DOM nodes are moved according to updated info, the browser renders the page on the screen according to the DOM tree and style info for each node, you then see the page. (Source stackoverflow)

## What code is rendered in the browser?

HTML, JavaScript, CSS

## What is the server-side code’s main function?

Server-side renders pages to client and process user requests, interacts with storage files/databases. (Basically everything that happens on the server) (Source cloudflare.com)

## What is the client-side code’s main function?

Client-side is processed on the client's browser (Basically everything that happens on the client's network/browser) (Source cloudflare.com)

## What is runtime?

How long a program is running

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I'm guessing, as many that are opened. Could not find anything.

## How many instances of the server-side code are available at any given time?

I'm guessing, Unlimited. Could not find anything.

## How many instances of the databases connected to the server application are created?

I'm guessing, Unlimited. Could not find anything.

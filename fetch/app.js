/* 
    ? Application Programming Interface (API)
    * a way for a client to communicate with the server
    * allows for HTTP request and response lifecycle
    * part of a RESTful architecture
    * REST - representational state transfer
    * Stateless, cacheable, layered system allow for req and res using:
        * CRUD: create, read, update, and delete
        * HTTP methods: POST, GET, PUT, DELETE
        * HTTP requests sent from the client
            * headers
            * body (POST, PUT)
            * query parameters (GET, DELETE)
        * HTTP response received from the server
            * headers
            * status code
            * contains payload
    */

/* 
    ? URL or URI
    * Uniform Resource Locator (Identifier)
    * address that allows us to access web resources
    * DNS (domain name) server resolves the url string into an IP address
    
    * http:// || https:// --> protocol type
    * www.google.com --> domain
        * can have subdomains (ex: gmail.google.com)
        * .com; .de; .pl; .co.uk --> top-level domains
        * domain == IP address (once resolved by DNS server) + port == socket
    * Port :80 for HTTP or :443 for HTTPS
    * Path
        * Location and structure of content within the resource
    * Query Parameters
        * map to key-value pairs within an object
        * begin with ?
        * separated by &
        * the property is assigned to value (ex: ?name=Paul&age=24)
        * usually does not ''
    * Anchor
        * id's that allow us to go to specific point in the document
        * ex: #footer will take you to an element with that id attr value
*/

/* 
    ? Fetch API
    * fetch is an asynchronous function
    * we don't know how long request-response lifecycle will take
*/

const url = "https://pokeapi.co/api/v2/pokemon/"

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })


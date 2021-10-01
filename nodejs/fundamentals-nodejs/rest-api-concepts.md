## **Representation State Transfer (REST)**
<br>

### **Rule 1:**
Client-Server division

### **Rule 2:**
Stateless: Client can request as many times as they want but the server doesn't store any state.

### **Rule 3:**
Cache: Cache support

### **Rule 4:**
Uniform Interface:
<ul>
    <li>Resources Identification:
    <ul>
        <li>http://server.com/products -- to identify products</li>
        <li>http://server.com/clients -- to identify clients</li>
    </ul>
    <li>Representation of Resources:
    Server can deliver the response as JSON, HTML, xml...
    </li>
    <li>Autodescriptive Messages</li>
    <li>HATEOAS (Hypermedia As The Engine Of the Application):
    "Like a human Web user acessing the home page of a website". Server provides links dynamically so the client can discover all the available resources they need.</li>
</ul>

### **Rule 5:**
Layers: 
A client cannot ordinarily tell whether it is connected directly to the end server or to an intermediary along the way. Security Layer. Intermerdiary servers.

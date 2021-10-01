<h2 id="methods"><strong>HTTP Methods</strong></h2>
<p>GET: Read <br> POST: Write <br> PUT: Update <br> DELETE: Remove <br> PATCH: Partial update</p>
<h2 id="http-codes"><strong>HTTP Codes</strong></h2>
3 digits: <br>
<ul>
<li>
<span style="color: blue">1xx</span>: Informative. Request has been accepted or the proccess is still running.
</li>
<br>
<li>
<span style="color: green">2xx</span>: Confirmation:
<ul>
<li>
200: Request Successful
</li>
<li>
201: Created - Usually used for POST
</li>
</ul>
</li>
<br>
<li>
<span style="color:pink">3xx</span>: Redirection:
<ul>
<li>
301: Moved Permanently
</li>
<li>
302: Moved
</li>
</ul>
</li>
<br>
<li>
<span style="color:orange">4xx</span>: Client Error
<ul>
<li>
400: Bad Request
</li>
<li>
401: Unauthorized
</li>
<li>
403: Forbidden
</li>
<li>
404: Not Found
</li>
<li>
422: Unprocessable Entity
</li>
</ul>
</li>
<br>
<li>
<span style="color:red">5xx</span>: Server Error
<ul>
<li>
500: Internal Server Error
</li>
<li>
502: Bad Gateway
</li>
</ul>
</li>
</ul><br>
<h2 id="representation-state-transfer-rest"><strong>Representation State Transfer (REST)</strong></h2>
<h3 id="rule-1"><strong>Rule 1:</strong></h3>
<p>Client-Server division</p>
<h3 id="rule-2"><strong>Rule 2:</strong></h3>
<p>Stateless: Client can request as many times as they want but the server doesn’t store any state.</p>
<h3 id="rule-3"><strong>Rule 3:</strong></h3>
<p>Cache: Cache support</p>
<h3 id="rule-4"><strong>Rule 4:</strong></h3>
Uniform Interface:
<ul>
<li>
Resources Identification:
<ul>
<li>
http://server.com/products – to identify products
</li>
<li>
http://server.com/clients – to identify clients
</li>
</ul>
<li>
Representation of Resources: Server can deliver the response as JSON, HTML, xml…
</li>
<li>
Autodescriptive Messages
</li>
<li>
HATEOAS (Hypermedia As The Engine Of the Application): “Like a human Web user acessing the home page of a website”. Server provides links dynamically so the client can discover all the available resources they need.
</li>
</ul>
<h3 id="rule-5"><strong>Rule 5:</strong></h3>
<p>Layers: A client cannot ordinarily tell whether it is connected directly to the end server or to an intermediary along the way. Security Layer. Intermerdiary servers.</p>

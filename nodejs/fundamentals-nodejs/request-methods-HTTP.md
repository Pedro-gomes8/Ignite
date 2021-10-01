## **Methods**
GET: Read <br>
POST: Write <br>
PUT: Update <br>
DELETE: Remove <br>
PATCH: Partial update

## **HTTP Codes**
3 digits: <br>
<ul>
<li><span style="color: blue">1xx</span>:  Informative. Request has been accepted or the proccess is still running.</li><br>
<li><span style="color: green">2xx</span>:  Confirmation:
<ul>
<li>
200: Request Successful</li>
<li>201: Created - Usually used for POST</li>
</ul>
</li><br>
<li><span style="color:pink">3xx</span>:
Redirection:
<ul><li>301: Moved Permanently</li>
<li>302: Moved</li>
</ul>
</li><br>
<li><span style="color:orange">4xx</span>:
Client Error
<ul>
<li>400: Bad Request</li>
<li>401: Unauthorized</li>
<li>403: Forbidden</li>
<li>404: Not Found</li>
<li>422: Unprocessable Entity</li>
</ul>
</li><br>
<li><span style="color:red">5xx</span>:
Server Error
<ul>
<li>500: Internal Server Error</li>
<li>502: Bad Gateway</li>
</ul>
</li>
</ul>
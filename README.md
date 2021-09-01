# News Backend

## About
Morning Brew is a one stop news website serving its customers
digestable short news personalized to there taste.
As a backend service build on MERN Stack ( NodeJs, ExpressJs, MongoDB ),
this module provides the server side support for the react js app.

The Backend handels:

1. Routing different url using express js
2. Handelling route methods and api data type, parsin using express js
3. Database layer schema creation using mongoose package
4. databse data collection layer using mongoose
5. User verfication and data enctryption using native nodejs
6. Collection of unseen queries and data collection on them using third party API's such as
    1. News API
    2. New Youk time API


## API Served

<table>
    <tr>
        <th>No</th>
        <th>Services Provided</th>
        <th>API</th>
    </tr>
    <tr>
        <td>1.</td>
        <td>User Login</td>
        <td>{{url}}/api/user/auth/login</td>
    </tr>
    <tr>
        <td>2.</td>
        <td>User Registration</td>
        <td>{{url}}/api/user/auth/registration</td>
    </tr>
    <tr>
        <td>3.</td>
        <td>Update User History</td>
        <td>{{url}}/api/user/update</td>
    </tr>
    <tr>
        <td>4.</td>
        <td>Clean User History</td>
        <td>{{url}}/api/user/clean_history</td>
    </tr>
    <tr>
        <td>5.</td>
        <td>Fetch News</td>
        <td>{{url}}/api/news?nid=news_id</td>
    </tr>
    <tr>
        <td>6.</td>
        <td>Fetch News by News_Category</td>
        <td>{{url}}/api/news/category?ncname=gov</td>
    </tr>
    <tr>
        <td>7.</td>
        <td>Collect Unseen queries</td>
        <td>{{url}}/api/search/unseenquery?q=stock market</td>
    </tr>
    <tr>
        <td>8.</td>
        <td>serve data on unseen queries</td>
        <td>{{url}}/api/search/get?q=new news</td>
    </tr>
</table>

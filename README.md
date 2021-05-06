# News Backend Code

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


## Internal Services

1. Collection of data on unseen queries
2. Present data to user in real time on unseen queries.
3. Update search space for queries.

## Division of work load
<table>
    <tr>
        <th>Name</th>
        <th>Task</th>
        <th>Status</th>
    </tr>
    <tr>
        <td>Hrishabh Pandey</td>
        <td>
            <ol>
                <li>Integration Between React and NodeJs Server.</li>
                <li>Frontend State management and datasaving on client side using react js in browser.</li>
                <li>News Collection and Scraping</li>
            </ol>
        </td>
        <td>Completed</td>
    </tr>
    <tr>
        <td>Sayam Kumar</td>
        <td>
            <ol>
                <li>REST API routers to communicate withservices efficiently</li>
                <li>Database Layer.</li>
                <li>News Collection and Scraping</li>
            </ol>
        </td>
        <td>Completed</td>
    </tr>
    <tr>
        <td>Raahul Singh</td>
        <td><ol>
                <li>REST API routers to communicate withservices efficiently</li>
                <li>Database Layer.</li>
                <li>News Collection and Scraping</li>
            </ol></td>
        <td>Completed</td>
    </tr>
    <tr>
        <td>Hemanth</td>
        <td><ol>
                <li>User Interface</li>
                <li>News Collection and Scraping</li>
            </ol></td>
        <td>Complete</td>
    </tr>
    <tr>
        <td>Harshini</td>
        <td><ol>
                <li>User Interface</li>
                <li>News Collection and Scraping</li>
            </ol></td>
        <td>Complete</td>
    </tr>
</table>

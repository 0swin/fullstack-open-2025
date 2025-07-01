```mermaid
sequenceDiagram
    participant Browser
    participant Server

    note over Browser: Browser executes the event handler<br>when the submit button is clicked

    Browser->>Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Server-->>Browser: 201 response

    note over Browser: Browser adds new note to the list


```

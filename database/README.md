**DATA SCHEMA:**

- users = {id, username, password, followees, followers, time of creation}
- tweets = {id, postid, text, time of creation}

Note that:
- followees/followers : List[id]
- time of creation : Unix Epoch Date Object
- username, password, id, postid : strings

We will not be using encryption for now.

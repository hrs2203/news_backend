# News Backend Code

## TODO List
- [ ] Design DB Layer Schema
- [ ] Design DB Layer Layer
- [ ] Router Layer
- [ ] Authenticaion


### DB Layer
1. User
    - user id (autogen)
    - username
    - email
    - password (encrypted)

2. UserPreferences
    - userPrefId
    - userId (Foreign Key to User )
    - visit history: (sorted by count value) {
        "category id 1": count1,
        "category id 2": count2,
    }

3. News Category
    - newsCategory id
    - newsCategory name

4. News Article
    - News Id
    - News Title
    - News Static Link 
        - ( Details stored in static file as json )
    ----------------------
    - News Body
    - News Abstract
    - News Publisher
    ----------------------
    




### Router Layer
- [ ] User Registrations
- [ ] User Login
- [ ] User Preferences
- [ ] User Data Modification
- [ ] News Category
- [ ] News Data Model (Layer)
- [ ] News Topic List
- [ ] News Link (Topic Wise)


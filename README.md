# Limbo (Generasi Gigih Final Project)
Limbo is an application to put your favorite songs into a playlist. This application is integrated with spotify.

## Feature
- Add playlist
- Find track
- Insert track into playlist
- Check user profile (sidebar -> menu)
- Implement redux toolkit
- Implement test
- Show max 30 playlist - <b>additional</b>
- Show display picture - <b>additional</b>
- Implement redux thunk async - <b>additional</b>
- Implement MSW - <b>additional</b>
- Impelement context - <b>additional</b>

## How to Install
1. Clone this repository
2. Copy ``.env.example`` to ``.env.local``
   ```bash
   cp .env.example .env.local
   ```
4. Insert value key inside the .env.local from [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)
   ```
   REACT_APP_SPOTIFY_CLIENT_SECRET= <client_secret_from_dashboard>
   REACT_APP_SPOTIFY_CLIENT_ID= <client_id_from_dashboard>
   REACT_APP_REDIRECT_URI= <redirect_value>
   ```
6. Install dependencies using yarn 
    ```bash
    yarn
    ```
5. Run project
    ```
    yarn start
    ```

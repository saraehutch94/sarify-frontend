# Sarify | MERN-stack application

## **Introduction**

**Sarify** is a MERN-stack application, with data sourced from the Sarify Heroku API. This application is a music streaming application, currently with no music for the purpose of royalties and legalities. A dream of mine is to create my own music streaming service one day. The data rendered in this MERN-stack application, plus the look and feel, is a representation of that dream, minus the music (soon to come).
You are able to view all the tracks within the "Top Played" playlist of Sarify. You can also view tracks by genre.

This application's data is protected by guests of the website that are not logged in users. The ability to log in and log out is provided by Google Firebase. You can log in to Sarify using your GMail account. If you are a logged in user, you are able to:

- Add to the "Top Played" playlist
- Update a track currently within the playlist
- Delete a track from the playlist (if you see fit, even though this playlist was created by the top music curators of Sarify)

---

## **Screenshots**

Home Page

![Home Page](https://i.imgur.com/G23XGG5.png)

Tracks/Playlist Page

![Tracks/Playlist Page](https://i.imgur.com/JXadKH6.png)

Individual Track Page

![Individual Track Page](https://i.imgur.com/DGGyjO7.png)

Update Track Form (within Individual Track Page

![Update Track Form](https://i.imgur.com/5oAazwy.png)

Create Track Page

![Create Track Page](https://i.imgur.com/7NonNjf.png)

---

## **Technologies Used**

- MERN
  - Mongoose + mongoDB
  - Express
  - React
  - Node.js
- Google Firebase
- Google Fonts

---

## **Getting Started**

[Project Planning](https://trello.com/b/zxs6WSWI/sarify) (Trello)

[Netlify Deployment](https://sarify.netlify.app)

**Backend / Other links:**

[GitHub Backend](https://github.com/saraehutch94/sarify-backend)

[Heroku-deployed API](https://sarify-backend.herokuapp.com/sarify/tracks/)

---

## **Unsolved Problems**

N/A

---

## **Future Enhancements**

- Connect Firebase to the backend
  - View tracks only a specific user has added via their personal dashboard
- Make navigation bar into a hamburger menu with dropdown nav (whole app or just mobile)
- If a user is not logged in, they can hear a snippet of te tracks. If user is logged in, they can play the tracks in full in the playlist and from other playlists

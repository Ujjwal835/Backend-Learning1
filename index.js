require("dotenv").config();
const express = require("express");
const app = express();

const port = 4000;
const githubData = {
  login: "Ujjwal835",
  id: 136466403,
  node_id: "U_kgDOCCJP4w",
  avatar_url: "https://avatars.githubusercontent.com/u/136466403?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Ujjwal835",
  html_url: "https://github.com/Ujjwal835",
  followers_url: "https://api.github.com/users/Ujjwal835/followers",
  following_url:
    "https://api.github.com/users/Ujjwal835/following{/other_user}",
  gists_url: "https://api.github.com/users/Ujjwal835/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Ujjwal835/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Ujjwal835/subscriptions",
  organizations_url: "https://api.github.com/users/Ujjwal835/orgs",
  repos_url: "https://api.github.com/users/Ujjwal835/repos",
  events_url: "https://api.github.com/users/Ujjwal835/events{/privacy}",
  received_events_url: "https://api.github.com/users/Ujjwal835/received_events",
  type: "User",
  site_admin: false,
  name: "Ujjwal Jindal",
  company: null,
  blog: "https://ujjwal835.github.io/portfolio/",
  location: null,
  email: null,
  hireable: true,
  bio: "A passionate programmer with a keen interest in web development. My love for combining aesthetics with functionality drives me to create user friendly website.",
  twitter_username: null,
  public_repos: 14,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2023-06-13T12:47:55Z",
  updated_at: "2024-04-14T23:02:09Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("ujjwal.com");
});
app.get("/login", (req, res) => {
  res.send("<h1>please login</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>Please sSUbscribe</h2>");
});
app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port`);
});

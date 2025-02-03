{
    "version": 2,
    "builds": [
      {
        "src": "app/server.js",
        "use": "@vercel/node"
      },
      {
        "src": "public/**",
        "use": "@vercel/static"
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "app/server.js"
      }
    ]
}
  
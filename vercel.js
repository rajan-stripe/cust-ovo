{
    "version": 2,
    "builds": [
      {
        "src": "app/server.js",
        "use": "@vercel/node"
      },
      {
        "src": "pages/index.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      {
        "src": "/",
        "dest": "/pages/index.js"
      }
    ]
  }
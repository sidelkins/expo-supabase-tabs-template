# expo-supabase-tabs-template
#### A template for using [Supabase](https://supabase.com/ "Supabase") in an [Expo Go](https://expo.dev/client "Expo Go") app with multiple pages.

------------
#### Features
- [Expo Tabs Layout](https://docs.expo.dev/router/advanced/tabs/ "Expo Tabs Layout")
- [Supabase Client](https://supabase.com/docs/reference/javascript/v0/initializing "Supabase Client")
- AuthContext: passed to SessionProvider
- SessionProvider: allows you to use session data in each tab

#### Tabs Setup

- Project Layout
~~~
    .
    ├── app                  # This is where your routes (tabs/pages) live
    │   ├── _layout.js       # Configures tab layout with SessionProvider, hides 'index' tab
    │   ├── index.js         # Default page that we use to redirect
    │   ├── Home             # Example home page (default redirect)
    │   │   ├── _layout.js   #
    │   │   └── Home.js      #
    │   ├── Page             # Example blank page
    │   │   ├── _layout.js   #
    │   │   └── Page.js      #
    │   └── ...              # etc.
    ├── assets               # Default Expo assets folder
    ├── lib                  # Your project files you do not want in routes
    │   ├── AuthContext.js
    │   ├── supabase.js
    │   └── components       # Custom global components 
    ├── App.js               # Default Expo entry point
    ├── *.json               # package.json, app.json, etc.
    └── README.md
~~~

> **Q: Why is lib not inside app?**
>
> **A:** expo-router creates routes from the app folder, so if lib is in app we will have routes called lib/supabase.js, lib/AuthContext.js, etc. If you'd rather structure it this way you actually can, but you have to disable the routes in _layout.js the same way the index route is.

- package.json
The entry point for the application is set to the routere
`"main": "expo-router/entry"`
- babel.config,js
After presets line, add plugins
`plugins: ['expo-router/babel],`

#### ToDo
- [x] Folder structure
- [ ] Component structure
    - [ ] Global
    - [ ] Route/tab specific
- [ ] Authentication
    - [ ] Redirect based on session
    - [ ] Account page
    - [ ] Login/Signup page
- [ ] Testing (Jest)
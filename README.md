This project was created as demonstration of my current skills as a fullstack developer 07/2022.

# Okay, what is that?

Simple discussion/forum system.

What it can do? Hmm. Basically not too much. You can create new thread and comment on that.
The thing is that there is pretty complex backend, which is most likely the reason why you are here.

# Technologies?

Application has separated frontend (Vue.js) and backend (PHP).

- This repository is about frontend.
- **Backend here: https://github.com/davtk/forum-backend**

So the technologies:

- **Vue.js** as frontend framework,  
- **Vue router** with HTML 5 mode for routing, 
- **Vuex** for state management,
- **ESLint** with prettier
- **Typescript**,
- **LESS**,
- **openapi-typescript-codegen** for API client (/src/schema) autogenerate (from backend's OpenAPI schema)

# Online demo?

## https://davtk-forum-h2ah9.ondigitalocean.app

# It's ugly

I'm more developer than designer 🙂. 

Sure thing I know HTML & CSS. I can also code the layout according to
graphics design (PSD, XD, etc.) - sadly I had no design for this 😀 so I had to improvise.

In every case you can notice full responsive design and various CSS features like flexbox, css variables etc.

# Can I run it locally?

Sure thing.

*To be completely honest - I am not sure what is the best practice to handle env vars in Vue. 
Frontend application does not have access to process.env, and I could not find any KISS solution on Google - everything I found was pretty complicated.*

So easy way, how to run this: 

- in openapi.yaml change `servers > url` value to your backend URL,
- `docker build` - your image will be built with given URL,
- `docker run` and don't forget to publish port 80.

# You like it?

### Great! I'm available to work. Let's connect: https://www.linkedin.com/in/daniel-vitek/

You don't? Great! I would really appreciate your feedback: https://github.com/davtk/forum-backend/issues


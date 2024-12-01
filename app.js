import { Hono } from "https://deno.land/x/hono/mod.ts";
import { serveStatic } from "https://deno.land/x/hono/middleware.ts";
import { loginUser } from "./routes/login.js";
import { registerUser } from "./routes/register.js";
 
// Create the Hono app
const app = new Hono();
 
 
//Middleware to set security headers globally
app.use('*', (c, next) => {
  //Set the Content-Type header (automatically set by Hono for HTML, CSS, JS)
  c.header ('Content-Type', 'text/html'); //This will change based on your content type (text/css, application/javascript,etc.)
 
  // Set Content-Security-Policy header
  c.header('Content-Security-Policy',
  "default-src 'self'; " +
  "script-src 'self'; " +
  "style-src 'self'; " +
  "img-src 'self'; " +
  "frame-ancestors 'none'; " +
  "form-action 'self';");// Allow form submissions only to your own domain
 
  //Set X-Frame-Options header to prevent Clickjacking
  c.header('X-Frame-Options', 'DENY'); //Completely deny embedding
 
  //Set X-Content-Type-Options header to 'nosniff'
  c.header('X-Content-Type-Options', 'nosniff');
 
  return next();
}); 
// Serve static files from the /static directory
app.use('/static/styles.css', serveStatic({ root: '.' }));
 
// Serve the index page
app.get('/', async (c) => {
  return c.html(await Deno.readTextFile('./views/index.html'));
});
 
// Serve the login page
app.get('/login', async (c) => {
  return c.html(await Deno.readTextFile('./views/login.html'));
});
 
// Handle user login
app.post('/login', loginUser);
 
// Serve the registration page
app.get('/register', async (c) => {
  return c.html(await Deno.readTextFile('./views/register.html'));
});
 
// Handle user registration
app.post('/register', registerUser);
 
 
Deno.serve(app.fetch);
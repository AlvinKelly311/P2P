
// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient('https://ntsoxojpeuvajgofefbg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50c294b2pwZXV2YWpnb2ZlZmJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMzA5OTIsImV4cCI6MjA1MDkwNjk5Mn0.yUVg4s2bNsuiirHxXVHWWLrdPgMQMWVhqV60HdDX0Lk');

// export default supabase;



// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://ntsoxojpeuvajgofefbg.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)

// export default supabase;

import { createClient } from '@supabase/supabase-js'; // Importing the Supabase client library

// Accessing environment variables using import.meta.env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Reads the Supabase URL from your .env file
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; // Reads the Supabase Key from your .env file

// Creating a Supabase client instance using the URL and key
const supabase = createClient(supabaseUrl, supabaseKey);

// Exporting the Supabase client for use in other parts of your application
export default supabase;

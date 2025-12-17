const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Configuration (Taken from index.html)
const SUPABASE_URL = 'https://gtiegdruzeimlnbifdry.supabase.co';
// NOTE: This is the ANON key. If you have RLS policies that prevent reading, 
// you will need to replace this with your SERVICE_ROLE key (keep it secret!).
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0aWVnZHJ1emVpbWxuYmlmZHJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MjA0NTQsImV4cCI6MjA4MTI5NjQ1NH0.v6qBLp8AVx3rqibBuRzlrK_g84Qy0aqc25jxM81rMS4';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function exportWhitelist() {
    console.log("Fetching whitelist data...");
    
    // Fetch all rows
    const { data, error } = await supabase
        .from('whitelist')
        .select('*');

    if (error) {
        console.error("Error fetching data:", error.message);
        return;
    }

    console.log(`Successfully fetched ${data.length} records.`);

    // Save to JSON
    const filename = 'whitelist_export.json';
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    console.log(`Data saved to ${filename}`);

    // Optional: Log usernames
    console.log("Usernames:", data.map(u => u.username).join(', '));
}

exportWhitelist();

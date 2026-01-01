/**
 * @Meta
 * @Intent centralized User Authentication logic (Sign Up, Sign In).
 * @Inputs Email (String), Password (String).
 * @Outputs Supabase Session Object.
 * @Dependencies supabaseClient.js
 */
const supabase = require('./supabaseClient');

/**
 * Signs up a new user.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>} The Supabase response (data, error).
 */
async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
}

/**
 * Signs in an existing user.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>} The Supabase response (data, error).
 */
async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

module.exports = { signUp, signIn };

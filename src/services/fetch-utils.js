import { client } from './client';

export function getUser() {
  return client.auth.session();
}


export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}


export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}


export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}


export async function createBook(book) {
  const response = await client
    .from('books')
    .insert([book]);

  return response.data;
}

export async function getAllBooks() {
  const response = await client
    .from('books')
    .select();

  return response.data;
}

export async function getBookById(id) {
  const response = await client
    .from('books')
    .select()
    .match({ id })
    .single();

  return response.data;
}
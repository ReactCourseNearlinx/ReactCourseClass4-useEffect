const ENDPOINT_INDEX = 'https://jsonplaceholder.typicode.com';
const USERS = '/users';
const COMMENTS = '/comments';
const PHOTOS = '/photos';

export const getUsers = async () => (await fetch(`${ENDPOINT_INDEX}${USERS}`)).json();

export const getComments = async (id) => (await fetch(`${ENDPOINT_INDEX}${COMMENTS}?postId=${id}`)).json();

export const getPhotosByUserId = async (id) => (await fetch(`${ENDPOINT_INDEX}${PHOTOS}?albumId=${id}`)).json();

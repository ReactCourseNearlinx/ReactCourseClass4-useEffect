import { useState } from 'react';
import { getComments, getPhotosByUserId } from './api';
import AlbumImages from './AlbumImages'; 
import Comments from './Comments'; 

const User = ({user}) => {

  const [photoAlbum, setPhotoAlbum] = useState(null);
  const [messages, setMessages] = useState(null);

  const showPhotoAlbum = async (id)=> {
    !photoAlbum ? getPhotosByUserId(id).then(res => setPhotoAlbum(res)):setPhotoAlbum(null);
  }

  const showMessages = async (id) => {
    !messages ? getComments(id).then(res => setMessages(res)) : setMessages(null);
  }

  return (
    <div style={{ border: '3px solid #999999', backgroundColor:'#DDDDDD'}}>
      <h2>User: {user.name} - {user.username}</h2>
      <h3>Direction: {`${user.address.city}, ${user.address.street}`}</h3>
      <h3>Company: {user.company.name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Phone: {user.phone}</h3>
      <h3>Website: {user.website}</h3>
      <button onClick={()=>showPhotoAlbum(user.id)}><h3>{!photoAlbum ? 'Photo Album' : 'Hide Photo Album'}</h3></button>
      <button onClick={()=>showMessages(user.id)}><h3>{!messages ? 'Show Messages': 'Hide Messages'}</h3></button>
      {photoAlbum && <AlbumImages images={photoAlbum}/>}
      {messages && <Comments messages={messages}/>}
    </div>
  )
}

export default User
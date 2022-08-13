
const Comments = ({messages}) => {

  return (<div style={{display: 'grid', gridTemplateColumns: 'auto auto auto'}}>
    {messages.length && messages.map(message => (<div style={{backgroundColor:'white', margin:'0.5em', textAlign:'center'}}>
      <h3>Comments for {message.email}</h3>
      <h4>Title: {message.name}</h4>
      <h4>Message: {message.body}</h4>
      </div>))
    }
  </div>)
}

export default Comments;
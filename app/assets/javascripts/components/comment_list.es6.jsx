class CommentList extends React.Component {
  render () {
    const commentElements = this.props.comments.map((comment) => {
      return <Comment key={comment.id} author={comment.author} email={comment.email} text={comment.text}/>
    });

    return (
      <div className="comments">
        {commentElements}
      </div>
    )
  }
}


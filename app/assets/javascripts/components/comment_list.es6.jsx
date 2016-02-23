class CommentList extends React.Component {
  render () {
    const commentElements = this.props.comments.map((comment) => {
      return <Comment key={comment.id} author={comment.author} email={comment.email} text={comment.text}/>
    });

    return (
      <div className="comments">
        <h3>Comments ({this.props.commentCount})</h3>
        <ul className="comment-list list-group">
          {commentElements}
        </ul>
      </div>
    );
  }
}


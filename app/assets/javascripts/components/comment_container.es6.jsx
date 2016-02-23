class CommentsContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      comments: this.props.comments,
      commentCount: this.props.comments.length
    };

    this.addComment = this.addComment.bind(this);
  }

  addComment (comment) {
    const comments = this.state.comments.slice()
    comments.push(comment)
    this.setState({
      comments,
      commentCount: comments.length
    })
  }

  render () {
    return (
      <div className="comments-container">
        <h2>Add a comment</h2>
        <CommentForm handleNewComment={this.addComment}/>
        <hr/>
        <CommentList comments={this.state.comments} commentCount={this.state.commentCount} />
      </div>
    );
  }
}


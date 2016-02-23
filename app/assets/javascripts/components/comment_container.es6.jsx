class CommentsContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      comments: this.props.comments
    };
  }

  render () {
    return (
      <div className="comments-container">
        <h2> Add a comment</h2>
        <CommentForm/>
        <hr/>
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}


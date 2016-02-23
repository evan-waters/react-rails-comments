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
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}


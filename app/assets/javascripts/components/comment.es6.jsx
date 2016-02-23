class Comment extends React.Component {
  render () {
    return (
      <div>
        <h3>{this.props.author}</h3>
        <h4>{this.props.email}</h4>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

Comment.propTypes = {
  author: React.PropTypes.string,
  email: React.PropTypes.string,
  text: React.PropTypes.string
};

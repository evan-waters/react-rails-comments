class CommentForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      author: '',
      email: '',
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  valid () {
    return this.state.author && this.state.text
  }

  handleChange (event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    $.post('comments', {comment: this.state}, (data) => {
      this.props.handleNewComment(data)
      this.setState({
        author: '',
        email: '',
        text: ''
      });
    }, 'JSON')
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="authorInput">Name</label>
          <input type="text" className="form-control" id="authorInput" name="author" placeholder="Name" value={this.state.author} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email</label>
          <input type="text" className="form-control" id="emailInput" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="commentInput">Comment</label>
          <textarea className="form-control" id="commentInput" name="text" onChange={this.handleChange} value={this.state.text}></textarea>
        </div>
        <button type="submit" className="btn btn-default" disabled={!this.valid()}>Add Comment</button>
      </form>
    );
  }
}


require 'rails_helper'

RSpec.describe Comment, type: :model do
  it "should require author" do
    comment = Comment.new(author: nil)
    comment.valid?
    expect(comment.errors[:author].size).to eq(1)
  end

  it "should require text" do
    comment = Comment.new(text: nil)
    comment.valid?
    expect(comment.errors[:text].size).to eq(1)
  end
end

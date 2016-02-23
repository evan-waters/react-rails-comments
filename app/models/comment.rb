class Comment < ActiveRecord::Base
  include Gravtastic

  gravtastic

  validates_presence_of :author, :text

  def as_json(options= {})
    comment_hash = super(options)
    comment_hash['author_image_url'] = gravatar_url(default: 'retro', size: 60)
    comment_hash
  end
end

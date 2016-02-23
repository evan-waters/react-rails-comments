require 'rails_helper'

RSpec.describe CommentsController, type: :controller do

  describe "GET #index" do
    let(:comment) { Comment.new }

    before { allow(Comment).to receive(:all) { [comment] }}

    it "assigns @comments" do
      get :index
      
      expect(assigns(:comments)).to eq([comment])
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end

    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST #create" do
    context "when a comment save succeeds" do
      let(:comment_params) { { author: 'John Smith', email: 'test@example.com', text: 'A comment'} }

      it "saves a comment" do
        comment = Comment.new(comment_params)
        allow(Comment).to receive(:new) { comment }
        
        expect(comment).to receive(:save)
        
        post :create, comment: comment_params
      end

      it "returns the created comment" do
        comment = Comment.create(comment_params)
        allow(Comment).to receive(:new) { comment }

        post :create, comment: comment_params

        parsed_response = JSON.parse(response.body)
        comment_as_json = comment.as_json

        expect(parsed_response['id']).to eq(comment_as_json['id'])
        expect(parsed_response['author']).to eq(comment_as_json['author'])
        expect(parsed_response['email']).to eq(comment_as_json['email'])
        expect(parsed_response['text']).to eq(comment_as_json['text'])
        expect(parsed_response['author_image_url']).to eq(comment_as_json['author_image_url'])
      end

      it "returns http success" do
        post :create, comment: comment_params
        expect(response).to have_http_status(:success)
      end
    end

    context "when a comment save fails" do
      let(:comment_params) { { author: 'John Smith' } }

      it "returns comment errors" do
        post :create, comment: comment_params
        parsed_response = JSON.parse(response.body)
        expect(parsed_response).to have_key('text')
      end

      it "returns http unprocessable_entity" do
        post :create, comment: comment_params
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

end

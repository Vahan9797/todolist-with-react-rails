class Api::TodosController < ApplicationController
  def index
    render json: { content: "Do something", checked: true }
  end
end

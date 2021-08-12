class Api::TodosController < ApplicationController
  @db = Api::Todo

  def index
    render json: @db.all
  end

  def create
    render json: @db.create(:content => todo_params[:content])
  end

  def update
    req_params = todo_params
    render json: @db.update(req_params[:id], { :content => req_params[:content], :checked => req_params[:checked] })
  end

  def delete
    res_params = todo_params
    @db.delete(res_params[:id])
    render json: res_params
  end

  def todo_params
    case params[:todo][:reqType]
    when 'create'
      params.require(:todo).permit(:content)
    when 'update'
      params.require(:todo).permit(:id, :content, :checked)
    when 'delete'
      params.require(:todo).permit(:id)
    end
  end
end

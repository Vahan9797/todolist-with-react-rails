class Api::TodosController < ApplicationController
  @@db = Api::Todo

  def index
    render json: @@db.all
  end
  def create
    render json: @@db.create(:content => todo_params[:content])
  end
  def update
    reqParams = todo_params
    render json: @@db.update(reqParams[:id], { :content => reqParams[:content], :checked => reqParams[:checked] })
  end
  def delete
    resParams = todo_params
    @@db.delete(resParams[:id])
    render json: resParams
  end

  def todo_params
    return params.require(:todo).permit(:content) if params[:todo][:reqType] == 'create'
    return params.require(:todo).permit(:id, :content, :checked) if params[:todo][:reqType] == 'update'
    return params.require(:todo).permit(:id) if params[:todo][:reqType] == 'delete'
  end
end

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

  def upload_image
    req_params = todo_params
    if(req_params[:img].instance_of?(ActionDispatch::Http::UploadedFile))
      ImageUploadWorker.perform_async(req_params[:img].tempfile.path, req_params[:img].original_filename)
    end

    render text: ({
      :img => req_params[:img],
      :img_is_compressed => req_params[:img_is_compressed]}).to_s
  end

  def delete
    res_params = todo_params
    @db.delete(res_params[:id])
    render json: res_params
  end

  def todo_params
    case params[:reqType]
    when 'create'
      params.require(:todo).permit(:content)
    when 'update'
      params.require(:todo).permit(:id, :content, :checked, :img_url, :img_is_compressed)
    when 'upload_image'
      params.permit(:img, :img_is_compressed)
    when 'delete'
      params.require(:todo).permit(:id)
    end
  end
end

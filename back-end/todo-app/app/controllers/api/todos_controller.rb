class Api::TodosController < ApplicationController
  def index
    render json: Todo.all
  end

  def create
    render json: Todo.create(:content => todo_params[:content])
  end

  def update
    req_params = todo_params
    render json: Todo.update(req_params[:id], { :content => req_params[:content], :checked => req_params[:checked] })
  end

  def upload_image
    req_params = todo_params
    if req_params[:img].instance_of?(ActionDispatch::Http::UploadedFile)
      file_ext_name = File.extname(req_params[:img].original_filename)
      req_params[:img].original_filename[file_ext_name] = Time.now.to_s + file_ext_name
      ImageUploadWorker.perform_async(req_params[:img].tempfile.path, req_params[:img].original_filename)
    end

    render json: ({
      :img_url => req_params[:img].original_filename,
      :img_thumb_url => 'thumb_' + req_params[:img].original_filename,
      :img_is_compressed => req_params[:img_is_compressed]}).to_json.force_encoding('UTF-8')
  end

  def delete
    res_params = todo_params
    Todo.delete(res_params[:id])
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

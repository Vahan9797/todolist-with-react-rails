class Image
  include ActiveModel::Model
  include Rails.application.routes.url_helpers
  extend CarrierWave::Mount

  mount_uploader :media, ImageUploader, mount_on: :media_filename
end

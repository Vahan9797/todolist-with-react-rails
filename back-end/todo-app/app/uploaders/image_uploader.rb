class ImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick
  include CarrierWave::ImageOptimizer

  storage :file

  process :optimize

  process :resize_to_fill => [640, 480]
  process :convert => 'png'

  version :thumb do
    process :resize_to_fit => [200, 200]
    process :convert => 'jpg'
  end

  def extension_white_list
    %w[jpg png jpeg bmp]
  end

  def store_dir
    'uploads/images/'
  end
end

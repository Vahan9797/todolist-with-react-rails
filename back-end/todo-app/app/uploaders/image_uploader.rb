class ImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick
  include CarrierWave::ImageOptimizer

  storage :file

  process :optimize

  process :resize_to_fill => [640, 480]
  process :convert => 'png'

  version :thumb do
    process :resize_to_fit => [100, 100]
    process :convert => 'png'
  end

  def extension_white_list
    %w[jpg png jpeg bmp]
  end

  def filename
    original_filename
  end

  def store_dir
    "uploads/images/#{mounted_as}/#{Time.now.to_s}"
  end
end

Sidekiq.configure_client do |config|
  config.redis = { url: 'redis://localhost:6379' }
end

Sidekiq.configure_server do |config|
  config.redis = { url: 'redis://localhost:6379' }
end

class ImageUploadWorker
  include Sidekiq::Worker
  sidekiq_options retry: false

  def initialize
    Sidekiq::Extensions.enable_delay!
  end

  def perform(img_path, img_name)
    renamed_path = img_path.sub(File.basename(img_path), img_name)
    File.rename(img_path, renamed_path)
    img_file = File.open(renamed_path)
    Image.new(:media => img_file).store_media! unless img_file.nil?
  end
end

Sidekiq.configure_client do |config|
  config.redis = { db: 1 }
end

Sidekiq.configure_server do |config|
  config.redis = { db: 1 }
end

class ImageUploadWorker
  include Sidekiq::Worker
  def initialize
    Sidekiq::Extensions.enable_delay!
  end

  def perform(img_url)
    sleep 1
    p img_url + ' ASYNC <<<<<<<<<'
    img = Image.new(File.open(img_url)).store_media!
    img.media.url
  end
end

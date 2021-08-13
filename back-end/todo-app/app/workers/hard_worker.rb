Sidekiq.configure_client do |config|
  config.redis = { db: 1 }
end

Sidekiq.configure_server do |config|
  config.redis = { db: 1 }
end

class HardWorker
  include Sidekiq::Worker

  def perform(complexity)
    case complexity
    when 'super_hard'
      sleep 20
      puts 'Super Hard Work Done.'
    when 'hard'
      sleep 10
      puts 'Hard Work Done.'
    else
      sleep 1
      puts 'Piece of cake.'
    end
  end
end

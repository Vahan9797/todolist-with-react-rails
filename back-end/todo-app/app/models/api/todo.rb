class Api::Todo < ApplicationRecord::Base
    validates content: true
end
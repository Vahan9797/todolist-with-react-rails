class User < ApplicationRecord
  has_secure_password
  self.table_name :users

  validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' }
  validates :first_name, presence: true
  validates :last_name, presence: true

  def full_name
    "#{try(:first_name)} #{try(:last_name)}"
  end
end

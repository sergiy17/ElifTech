class Company < ActiveRecord::Base
	belongs_to :company
	has_many :company
end

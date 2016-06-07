class Company < ActiveRecord::Base
	belongs_to :parent, :class_name => 'Company', :foreign_key => :parent_id
	has_many :children, :class_name => 'Company', :foreign_key => :parent_id
	
	def children_earnings
		children.map do |c| 
			c.earnings + c.children_earnings
		end.sum
	end

end

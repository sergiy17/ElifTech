module ApplicationHelper

	def render_childrens company, i=1
		company.children.map do |child|
			render(partial: 'company_row', locals:{company: child, i: i}) + render_childrens(child, i+1)
		end.join.html_safe
	end
end

json.extract! c, :id, :name, :earnings
json.children_earnings c.children_earnings
json.children do
	json.array!(c.children) do |child|
		json.partial! 'company', c: child
	end
end
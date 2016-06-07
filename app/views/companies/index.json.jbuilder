json.array! (@companies) do |c|
  json.partial! 'company', c: c
end

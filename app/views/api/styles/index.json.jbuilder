@style.each do |style|
    json.set! style.id do
        json.extract! style, :id
    end
end
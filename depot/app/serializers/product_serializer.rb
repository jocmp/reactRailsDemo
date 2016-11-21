class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :links

  def links
    { self: product_path(object.id) }
  end
end

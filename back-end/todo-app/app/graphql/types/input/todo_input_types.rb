module Types
  module Input
    module TodoInputTypes
      class TodoContentInputType < Types::BaseInputObject
        argument :content, String, required: true
        argument :img_url, String, required: false
      end
      class TodoIDInputType < Types::BaseInputObject
        argument :id, ID, required: true
      end
      class TodoUpdateInputType < Types::BaseInputObject
        argument :id, ID, required: true
        argument :content, String, required: true
        argument :img_url, String, required: false
        argument :checked, Boolean, required: false
      end
    end
  end
end

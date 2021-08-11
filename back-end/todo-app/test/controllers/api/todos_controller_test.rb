require 'test_helper'

class Api::TodosControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end

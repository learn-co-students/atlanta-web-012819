class Event < ApplicationRecord
  belongs_to :user

  def description
    if fun_factor < 3
      text = "and it wasn't very good 😭"
    elsif fun_factor < 6
      text = "and it was okay 🤷‍♂️"
    elsif fun_factor < 9
      text = "and i would do it again now if i could 👀"
    else
      text = "and it was everything I ever wanted 😍"
    end
    "#{self.name} #{text}"
  end

end

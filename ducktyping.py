class Book:
  def dispDetails(self):
    print("Displaying book details..")

class Vehicle:
  def dispDetails(self):
     print("Vehicle information displaying")
     
def start_display(object):
  object.dispDetails()
  
start_display(Book())
start_display(Vehicle())
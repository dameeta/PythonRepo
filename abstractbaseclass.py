from abc import ABC,abstractmethod

class Shape(ABC):
  @abstractmethod
  def area(self):
    pass
  
class Triangle(Shape):
  def area(self):
    return 0.5*2*3
  
class Circle(Shape):
  def area(self):
    return 3.14*2*2
  

shapes =[Triangle(),Circle()]

for s in shapes:
  print(s.area())
  

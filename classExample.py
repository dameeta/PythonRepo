#class is collection of objects
#Object is a real world entity which exists or doesnt 
#exists
# class Person{
#   name,address,age,
#     Person p1
#   p1(name,address,age)]
#   p2(name,address,age)
# }
# class,Object,
# every object has 
# state,behaviour,Attribute
# inheritance,polymorphism
# encapsulation-hiding the objects essential features

# class,
# object,
# Inheritance
# polymorphism
# encapsulation

class Person:

#constructor
  def __init__(self,name,age,address):
    self.name = name
    self.age = age
    self.address = address
    
  def getFamilyInfo(self):
    print(self.name,end='\t')
    print(self.address,end='\t')
    print(self.age,end='\n')

personObj1=Person('Ram',23,'Delhi')
personObj2=Person('Krishna',21,'Mathura')
personObj3=Person('Neeta',25,'Mumbai')

personObj1.getFamilyInfo()
personObj2.getFamilyInfo()
personObj3.getFamilyInfo()

    
    


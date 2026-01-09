class A:
  def method(self):
    print('Inside methodA')

class B:
  def method(self):
    print('Inside methodB')

class C(A,B):
  pass

cobj=C()
cobj.method()
print(C.mro())
print(isinstance(cobj,C))
print(isinstance(cobj,A))
print(isinstance(cobj,B))




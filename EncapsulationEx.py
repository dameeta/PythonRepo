class Account:
  def __init__(self,balance):
    self.__balance = balance #PROTECTED adn __balance private
    
  def get_balance(self):
    return self.__balance
  
  def set_balance(self,balance):
    if balance >= 0:
      self.__balance = balance
    
class SavingAccount(Account):
  pass
  # def show(self):
  #   print(self.__balance)

sa=SavingAccount(10000)
sa.set_balance(5600)
print(sa.get_balance())
# sa.show()
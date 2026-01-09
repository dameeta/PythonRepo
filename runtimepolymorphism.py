class Account:
  def deposit(self,amount):
    self.amount=amount
    print('This is deposit function of Account class')
    print(self.amount,'Amount is deposited')
    
class SavingAccount(Account):
  def deposit(self, amount):
    self.amount=amount
    print('Inside Saving Account deposit method')
    return super().deposit(amount)
  
class CurrentAccount(Account):
  def deposit(self, amount):
    self.amount=amount
    print('Inside CurrentAccount class deposit method')
    return super().deposit(amount)
  
#Runtime polymorphism
accounts = [SavingAccount(),CurrentAccount(),Account()]

for a in accounts:
  a.deposit(5600)
  

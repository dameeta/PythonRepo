from pydantic import BaseModel

class ItemBase(BaseModel):
  name:str
  description:str | None = None
  price :int
  
class ItemCreate(ItemBase):
  pass

class Item(ItemBase):
  id: int
  
  class Config:
    orm_mode =True
    #Enables compatibility with sqlalchemy orm objects
class ItemResponse(BaseModel):
  id : int
  name : str
  description: str
  
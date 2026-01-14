from fastapi import FastAPI,HTTPException, Depends
from sqlalchemy import create_engine,Column ,Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker , Session
from pydantic import BaseModel

from models import Item, SessionLocal
from schemas import ItemBase, ItemCreate, ItemResponse

#Database setup
app = FastAPI()

def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()

#inserting the value 
@app.post("/items/",response_model=ItemBase)
def create_item(item: ItemCreate, db:Session = Depends(get_db)):
  db_item =Item(**item.model_dump())
  db.add(db_item)
  db.commit()
  db.refresh(db_item)
  return db_item

@app.get("/items/{item_id}",response_model=ItemResponse)
async def read_item(item_id:int,db:Session = Depends(get_db)):
  db_item = db.query(Item).filter(Item.id==item_id).first()
  if db_item is None:
    raise
  HTTPException(status_code=404,detail="Item not found")
  return db_item

if __name__ == "__main__":
  import uvicorn
  uvicorn.run(app,host="127.0.0.1", port=8000)
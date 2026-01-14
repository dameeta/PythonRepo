from sqlalchemy import Column,Integer,String,create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL="sqlite:///./test.db"

engine = create_engine(
  DATABASE_URL,connect_args={"check_same_thread": False}
  )
SessionLocal = sessionmaker(autocommit = False, autoflush=False ,bind=engine)
Base= declarative_base()


class Item(Base):
  __tablename__= "items"
  id = Column(Integer,primary_key=True,index=True)
  name = Column(String, index=True)
  description = Column(String)
  price = Column(Integer)
  
#Create tables in database if it doesn't exists  
Base.metadata.create_all(bind=engine)
  
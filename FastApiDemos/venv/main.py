from fastapi import FastAPI
import sqlite3

conn = sqlite3.connect("test.db",check_same_thread=False)
cursor = conn.cursor()

app = FastAPI()


@app.get("/employees}")
def get_employees():
  cursor.execute("SELECT * FROM employees")
  return cursor.fetchall()

@app.get("/")
def read_root():
  return {"message" : "Hello from FastAPI.."}

@app.get("/users/{u_id}")
def get_user(u_id:int):
  return {"user_id":u_id}

@app.get("/search")
def get_user(name:str, price: int =0):
  return {"name":name,"price":price}



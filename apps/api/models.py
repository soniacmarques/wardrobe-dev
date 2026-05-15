from database import Base
from sqlalchemy import Boolean, Column, Integer, String


class User(Base):
    """Base model for user"""

    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True)


class Item(Base):
    """Base model for item"""

    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(50))
    description = Column(String(100))
    user_id = Column(Integer)

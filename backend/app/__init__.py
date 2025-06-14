from flask import Flask
from flask_cors import CORS
from flask_pymongo import PyMongo
from dotenv import load_dotenv
import os

mongo = PyMongo()

def create_app():
    load_dotenv()

    app = Flask(__name__)
    CORS(app)

    app.config["MONGO_URI"] = os.getenv("MONGO_URI")
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")

    mongo.init_app(app)  # Conecta la app a la base de datos

    from .routes import main  # Importamos las rutas desde routes.py
    app.register_blueprint(main)  # Registramos las rutas en la app

    return app  # Devolvemos la app configurada
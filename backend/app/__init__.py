from flask import Flask
from flask_cors import CORS
from flask_pymongo import PyMongo
from dotenv import load_dotenv
import os

mongo = PyMongo()

def create_app():
    load_dotenv()

    app = Flask(__name__)
    CORS(app, origins=["https://cautious-halibut-x5qj45qvp75hvrqw-3000.app.github.dev"])

    app.config["MONGO_URI"] = os.getenv("MONGO_URI")
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")

    mongo.init_app(app)  

    from .routes import main  
    app.register_blueprint(main) 

    return app  
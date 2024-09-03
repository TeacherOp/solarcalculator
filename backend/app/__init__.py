# backend/app/__init__.py
from flask import Flask
from .config import Config
from .extensions import db
from .routes import main_bp

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize extensions
    db.init_app(app)

    # Register blueprints
    app.register_blueprint(main_bp)

    return app
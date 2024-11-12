from flask import Flask
from routes import bp as routes23
from test_routes import bp as test_routes23
from flask_cors import CORS
app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": "*",  # Allow all origins for testing
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})

app.register_blueprint(routes23)
app.register_blueprint(test_routes23)

if __name__ == "__main__":
    app.run(port=5001, debug=True)

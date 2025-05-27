from flask import Flask, render_template
import os
from routes import register_blueprints

app = Flask(__name__)

register_blueprints(app)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host="0.0.0.0", port=port)
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', dupa = 'dupa')



if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
 








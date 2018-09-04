from flask import Flask, render_template, request, redirect
import json
import persistence
import logic


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# collects new input from FORM and seves into DB
@app.route('/new_question', methods = ["POST"])
def new_question():
    raw_data =logic.get_data_from_form()
    data_in_dict_format = logic.convert_data_into_dict(raw_data)
    random_record = persistence.get_random_record_from_database()
    
    # persistence.save_to_database(data_in_dict_format)
    return random_record



if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)








from flask import request


def get_data_from_form():
    question = request.form.get('question')
    answer = request.form.get('answer')
    return [question, answer]


def convert_data_into_dict(raw_data):
    data_in_dict_format = {'question' : raw_data[0], 'answer' : raw_data[1]}
    return data_in_dict_format
from flask import Blueprint, render_template, flash, redirect, url_for, session, request, send_from_directory

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/sobre')
def teste():
    return render_template('about.html')

@main.route('/catalogo')
def catalogo():
    return render_template('catalog.html')

@main.route('/contato')
def contato():
    return render_template('contact.html')

@main.route('/blog')
def blog():
    return render_template('blog.html')
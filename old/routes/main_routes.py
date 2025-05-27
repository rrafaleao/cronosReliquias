from flask import Blueprint, render_template, flash, redirect, url_for, session, request, send_from_directory

main = Blueprint('main', __name__)

@main.route('/teste')
def teste():
    return render_template('teste.html')

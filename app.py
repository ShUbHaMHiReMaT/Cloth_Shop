from flask import Flask, render_template, request, redirect
import pymysql

app = Flask(__name__)

# Function to connect to the MySQL database
def get_db_connection():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='',  # Replace with your actual password
        db='contact_form_db',  # Replace with your actual DB name
        cursorclass=pymysql.cursors.DictCursor
    )

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit-form', methods=['POST'])
def submit_form():
    try:
        # Get form data from request.form (not JSON)
        full_name = request.form.get('name')
        email = request.form.get('email')
        phone = request.form.get('phone')
        street = request.form.get('street')
        city = request.form.get('city')
        state = request.form.get('state')
        pin = request.form.get('pin')

        # Connect to the database
        connection = get_db_connection()
        with connection.cursor() as cursor:
            sql = """
                INSERT INTO personal_info (name, email, phone, street, city, state, pin)
                VALUES (%s, %s, %s, %s, %s, %s, %s)
            """
            cursor.execute(sql, (full_name, email, phone, street, city, state, pin))
            connection.commit()
        connection.close()
        return redirect('/')  # Or render a "Thank You" page
    except Exception as e:
        return f"Error: {str(e)}", 500

if __name__ == '__main__':
    app.run(debug=True)

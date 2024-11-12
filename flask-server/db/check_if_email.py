import utils.connection as SQLConnection


def check_if_email_exists(email):
    connection = SQLConnection.get_connection()
    cursor = connection.cursor()
    connection.autocommit = True
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    result = cursor.fetchone()
    cursor.close()
    return result

import utils.connection as SQLConnection


def get_hashed_password(email):
    connection = SQLConnection.get_connection()
    cursor = connection.cursor()
    connection.autocommit = True
    cursor.execute("SELECT password FROM users WHERE email = %s", (email,))
    result = cursor.fetchone()[0]
    cursor.close()
    return result

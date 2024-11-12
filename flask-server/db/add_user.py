import utils.connection as SQLConnection


def add_user(email, password, name):
    connection = SQLConnection.get_connection()
    cursor = connection.cursor()
    connection.autocommit = True
    cursor.execute(
        "INSERT INTO users (email, password, name) VALUES (%s, %s, %s)", (email, password, name))
    cursor.close()

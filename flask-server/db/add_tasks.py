import utils.connection as SQLConnection


def add_tasks(title, description, completed, user_id):
    connection = SQLConnection.get_connection()
    cursor = connection.cursor()
    connection.autocommit = True
    cursor.execute(
        "INSERT INTO tasks (title, description, completed, user_id) VALUES (%s, %s, %s, %s)",
        (title, description, completed, user_id),
    )
    cursor.close()

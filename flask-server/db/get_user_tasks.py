import utils.connection as SQLConnection


def get_user_tasks(user_id):
    connection = SQLConnection.get_connection()
    cursor = connection.cursor()
    connection.autocommit = True
    cursor.execute("SELECT * FROM tasks WHERE user_id = %s", (user_id,))
    result = cursor.fetchall()
    cursor.close()
    return result

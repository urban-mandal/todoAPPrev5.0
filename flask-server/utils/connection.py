import psycopg2


def get_connection():
    return psycopg2.connect(
        dbname="postgres",
        user="boss",
        password="EvA!6S787zLPDs",
        host="localhost",
        port="5432"
    )


def create_users_table():
    with get_connection().cursor() as cursor:
        cursor.execute(
            "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL)"
        )
        cursor.execute(
            "CREATE TABLE IF NOT EXISTS tasks (id SERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL, description TEXT, completed BOOLEAN NOT NULL DEFAULT FALSE, user_id INTEGER REFERENCES users(id))"
        )
        cursor.close()


create_users_table()

from flask import Blueprint, request
import utils.connection as SQLConnection

bp = Blueprint("test", __name__)


@bp.route("/delete-user", methods=["POST"])
def delete_user():
    connection = SQLConnection.get_connection()
    cursor = connection.cursor()
    connection.autocommit = True
    user = request.json["user"]
    cursor.execute("DELETE FROM users WHERE email = %s", (user,))
    return "User deleted", 200


@bp.route("/list-users", methods=["GET"])
def list_users():
    connection = SQLConnection.get_connection()
    cursor = connection.cursor()
    connection.autocommit = True
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    return users, 200

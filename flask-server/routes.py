from flask import Blueprint, request, jsonify
import db.get_hashed_password as GetHashedPassword
import db.check_if_email as CheckIfEmail
import db.add_user as AddUser
import db.add_tasks as AddTask
import db.get_user_tasks as GetUserTasks
bp = Blueprint("routes", __name__)


@bp.route("/get-hashed-password", methods=["POST"])
def get_hashed_password():
    email = request.json["email"]
    check_if_email_exists = CheckIfEmail.check_if_email_exists(email)
    if check_if_email_exists is None:
        return "Email does not exist", 404
    hashed_password = GetHashedPassword.get_hashed_password(email)
    print("Hashed password:", hashed_password)
    return jsonify({"hashed_password": hashed_password}), 200


@bp.route("/add-user", methods=["POST", "OPTIONS"])
def add_user():
    try:
        print("Received add-user request")
        data = request.get_json()
        print("Request data:", data)

        email = data["email"]
        password = data["password"]
        name = data["name"]
        AddUser.add_user(email, password, name)

        return jsonify({"message": "User added successfully"}), 200
    except Exception as e:
        print("Error in add_user:", str(e))
        return jsonify({"error": str(e)}), 500


@bp.route("/add-task", methods=["POST"])
def add_task():
    title = request.json["title"]
    description = request.json["description"]
    completed = request.json["completed"]
    user_id = request.json["user_id"]
    AddTask.add_task(title, description, completed, user_id)
    return "Task added", 200


@bp.route("/get-user-tasks", methods=["POST"])
def get_user_tasks():
    user_id = request.json["user_id"]
    tasks = GetUserTasks.get_user_tasks(user_id)
    return tasks

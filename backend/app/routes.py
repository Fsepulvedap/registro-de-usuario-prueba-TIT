from flask import Blueprint, request, jsonify
from . import mongo
from .models import crear_usuario
import re

main = Blueprint('main', __name__)

@main.route("/api/registro", methods=["POST"])
def registrar_usuario():
    print("➡️ Entró a /api/registro")

    data = request.get_json()

    nombre = data.get("nombre")
    correo = data.get("correo")
    contrasena = data.get("contrasena")

    if not nombre or not correo or not contrasena:
        return jsonify({"error": "Todos los campos son obligatorios"}), 400

    if not re.match(r"[^@]+@[^@]+\.[^@]+", correo):
        return jsonify({"error": "Correo inválido"}), 400

    if len(contrasena) < 6:
        return jsonify({"error": "La contraseña debe tener al menos 6 caracteres"}), 400

    usuario_existente = mongo.db.users.find_one({"correo": correo})
    if usuario_existente:
        return jsonify({"error": "El correo ya está registrado"}), 400
    
    
    nuevo_usuario = crear_usuario(nombre, correo, contrasena)

    mongo.db.users.insert_one(nuevo_usuario)

    return jsonify({"mensaje": "Usuario registrado exitosamente"}), 201

@main.route("/api/usuarios", methods=["GET"])
def obtener_usuarios():
    usuarios = mongo.db.users.find({"nombre": {"$exists": True}, "correo": {"$exists": True}})
    resultado = []

    for usuario in usuarios:
        resultado.append({
            "nombre": usuario["nombre"],
            "correo": usuario["correo"]
        })

    return jsonify(resultado)

@main.route('/ping', methods=['GET'])
def ping():
    return {"message": "Servidor Flask funcionando"}
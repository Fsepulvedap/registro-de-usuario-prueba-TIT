from werkzeug.security import generate_password_hash

def crear_usuario(nombre, correo, contrasena):
    return {
        "nombre": nombre,
        "correo": correo,
        "contrasena": generate_password_hash(contrasena)
    }
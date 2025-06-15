from werkzeug.security import generate_password_hash

def crear_usuario(nombre, correo, contrasena):
    contrasena_hash = generate_password_hash(contrasena)
    return {
        "nombre": nombre,
        "correo": correo,
        "contrasena": contrasena_hash
    }
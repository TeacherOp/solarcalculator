# backend/app/routes/views.py
from flask import jsonify, request
from . import main_bp
from ..services.solar_calculation import calculate_solar_installation

@main_bp.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    latitude = data.get('latitude')
    longitude = data.get('longitude')
    
    if not latitude or not longitude:
        return jsonify({'error': 'Latitude and longitude are required'}), 400
    
    result = calculate_solar_installation(latitude, longitude)
    return jsonify(result)
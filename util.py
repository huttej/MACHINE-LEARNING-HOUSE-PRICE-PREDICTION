import json
import pickle
import os
import numpy as np

import warnings

warnings.filterwarnings("ignore", category=UserWarning)

__locations = None
__data_columns = None
__model = None


def get_estimated_price(location, sqft, bhk, bath):
    try:
        # Match location from the columns list
        loc_index = __data_columns.index(location.lower())
    except ValueError:
        loc_index = -1

    # Create an input array of zeros
    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk

    # If the location exists in our columns, set that specific index to 1
    if loc_index >= 0:
        x[loc_index] = 1

    # Return the prediction as a rounded float
    return round(__model.predict([x])[0].item(), 2)


def get_location_names():
    return __locations


def load_saved_artifacts():
    print("loading saved artifacts...start")
    global __data_columns
    global __locations
    global __model

    # Use absolute paths to avoid FileNotFoundError
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))

    # Path to model folder
    MODEL_DIR = os.path.join(BASE_DIR, "model")

    # Load columns.json
    with open(os.path.join(MODEL_DIR, "columns.json"), "r") as f:
        __data_columns = json.load(f)["data_columns"]
        __locations = __data_columns[3:]

    # Load pickle model
    with open(os.path.join(MODEL_DIR, "banglore_home_prices_model.pickle"), "rb") as f:
        __model = pickle.load(f)

    print("Artifacts loaded successfully ✅")


if __name__ == '__main__':
    load_saved_artifacts()
    print(get_location_names())
    print(f"Test 1: {get_estimated_price('1st Phase JP Nagar', 1000, 3, 3)}")
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
        loc_index = __data_columns.index(location.lower())
    except ValueError:
        loc_index = -1

    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk

    if loc_index >= 0:
        x[loc_index] = 1

    return round(__model.predict([x])[0], 2)


def get_location_names():
    return __locations


def load_saved_artifacts():
    print("Loading saved artifacts...")

    global __data_columns, __locations, __model

    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    MODEL_DIR = os.path.join(BASE_DIR, "model")

    with open(os.path.join(MODEL_DIR, "columns.json"), "r") as f:
        __data_columns = json.load(f)["data_columns"]
        __locations = __data_columns[3:]

    with open(os.path.join(MODEL_DIR, "banglore_home_prices_model.pickle"), "rb") as f:
        __model = pickle.load(f)

    print("Artifacts loaded successfully ✅")

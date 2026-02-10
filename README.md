🏡 Bangalore Home Price Prediction – End-to-End ML Deployment

An end-to-end Machine Learning web application that predicts house prices in Bangalore based on user inputs such as total square footage, BHK, bathrooms, and location.
The project covers the entire ML lifecycle — from raw data cleaning to cloud deployment on AWS.

🚀 Live Demo

🔗 Deployed on AWS EC2
http://ec2-13-48-136-87.eu-north-1.compute.amazonaws.com/

Complete end-to-end ML pipeline

Cleaned and processed real-world housing data

Feature engineering and outlier handling

Trained regression model for price prediction

Backend API using Flask

Interactive frontend using HTML, CSS, JavaScript

Fully Dockerized

Deployed on AWS EC2 with Nginx reverse proxy

🧠 Machine Learning Workflow
1️⃣ Data Cleaning

Removed irrelevant columns

Handled missing values

Standardized inconsistent location names

Converted categorical data into usable formats

2️⃣ Feature Engineering

Extracted meaningful numerical features

One-hot encoded location data

Converted size ranges into usable numeric values

Normalized and prepared data for modeling

3️⃣ Outlier Removal

Removed extreme values using:

Location-wise price per sqft analysis

BHK-based statistical filtering

Improved model generalization and stability

4️⃣ Model Building

Used Regression models for price prediction

Evaluated multiple algorithms

Final model chosen based on:

Accuracy

Interpretability

Real-world performance

Serialized trained model using pickle

🛠 Tech Stack
🔹 Machine Learning & Backend

Python

Pandas, NumPy

Scikit-learn

Flask (REST API)

🔹 Frontend

HTML

CSS

JavaScript (jQuery)

🔹 DevOps & Deployment

Docker

Nginx

AWS EC2 (Ubuntu)

Gunicorn (WSGI Server)



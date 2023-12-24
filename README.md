# EventPro

- EventPro is a Single Page Application that allows users to manage all aspects
  of a conference in one place. Users can list and attend conferences,
  create new conferences, sign up for events, and submit their
  presentations for approval. Additionally, users can create
  conference locations, including details such as room capacity,
  maximum attendees and what state. With all these features, EventPro
  provides an efficient solution for organizing and attending
  conferences.

- EventPro also leverages the power of two external APIs, Pexels and OpenWeather API, to create a unique and interactive experience for conference organizers and attendees. The Pexels API provides access to a vast library of high-quality images that can be used to enhance the visual appeal of the conference and its presentations. Based on the conference location, the application can automatically display images that are relevant and appropriate to the event. The OpenWeather API integrates real-time weather data into the application, allowing organizers to keep attendees informed of current weather conditions at the conference location. The weather information is displayed prominently in the application, giving attendees a quick and easy way to check the conditions before they head out to the event.

# Technologies Used

[![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)](https://www.python.org/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![RabbitMQ](https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)](https://www.rabbitmq.com/)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

# Getting the app running

1. Git clone into your local repository:

```sh
git clone (repo)
```

2. Change directory:

```sh
cd eventpro
```

3. Build the image:

```sh
docker compose build
```

4. Run the containers:

```sh
docker compose up
```

5. Open browser to localhost

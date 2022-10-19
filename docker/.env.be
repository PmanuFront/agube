DEBUG=1

DJANGO_ALLOWED_HOSTS=localhost

JWT_EXPIRATION_SECONDS=3600

DATABASE_ENGINE=django.db.backends.postgresql_psycopg2
DATABASE_HOST=db
DATABASE_PORT=5432
DATABASE_NAME=agube_db
DATABASE_USERNAME=developer
DATABASE_PASSWORD=developer

MQ_BROKER_URL=amqp://developer:developer@rabbitmq:5672//
MQ_EXCHANGE=agube

PUBLIC_APP_NAME=Agube
PUBLIC_APP_URL=http://agube.availa.eu
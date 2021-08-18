DEBUG=1

DJANGO_ALLOWED_HOSTS=localhost

JWT_EXPIRATION_SECONDS=3600

SQL_ENGINE=django.db.backends.postgresql_psycopg2
SQL_HOST=db
SQL_PORT=5432
SQL_DATABASE=agube_db
SQL_USER=developer
SQL_PASSWORD=developer

CELERY_BROKER_URL=amqp://developer:developer@rabbitmq:5672//
PUBLISH_CLIENT_TASKS = [{"task": "agube.celery.new_user_published", "exchange":"agube_exchange", "routing_key":"agube.user"},{"task": "contactbook.celery.new_user_published", "exchange":"contactbook_exchange", "routing_key":"contactbook.user"}]
PUBLISH_USER_TASKS = [{"task": "contactbook.celery.new_user_published", "exchange":"contactbook_exchange", "routing_key":"contactbook.user"}]

PUBLIC_APP_NAME = Agube
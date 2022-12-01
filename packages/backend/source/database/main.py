from source.constants import database_type

from .mongo import \
    generate_mongo_connection, \
    mongo_insert, \
    mongo_get, \
    mongo_remove
from .sqlite import \
    generate_sqlite_connection, \
    sqlite_insert, \
    sqlite_get, \
    sqlite_remove



def get_database_connection():
    if database_type == 'mongo':
        return generate_mongo_connection()
    else:
        return generate_sqlite_connection()

database = get_database_connection()


def insert(
    name: str,
    value: dict[str, any],
):
    """
        add(
            'betseWorlds',
            {
                "id": 'two',
                "name": 'three',
            },
        )
    """
    if database_type == 'mongo':
        mongo_insert(
            database,
            name,
            value,
        )
    else:
        sqlite_insert(
            database,
            name,
            value,
        )


def get(
    name: str,
    id: str,
    by: str | None,
):
    if database_type == 'mongo':
        return mongo_get(
            database,
            name,
            id,
            by,
        )
    else:
        return sqlite_get(
            database,
            name,
            id,
            by,
        )


def remove(
    name: str,
    id: str,
):
    if database_type == 'mongo':
        return mongo_remove(
            database,
            name,
            id,
        )
    else:
        return sqlite_remove(
            database,
            name,
            id,
        )

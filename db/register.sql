INSERT INTO client_info (
    client_firstName,
    client_lastName,
    client_email,
    client_password,
    client_phone1
)
VALUES (
    $1,
    $2,
    $3,
    $4,
    $5
);